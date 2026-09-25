import type { CollectionAfterChangeHook } from 'payload'

type RelationshipValue = string | { id: string } | null | undefined

const getRelationshipId = (value: RelationshipValue): string | null => {
  if (typeof value === 'string') return value
  return value?.id ?? null
}

export const updateInventoryOnPurchase: CollectionAfterChangeHook = async ({
  doc,
  operation,
  previousDoc,
  req,
}) => {
  const status = String(doc.status ?? '').toUpperCase()
  const previousStatus = String(previousDoc?.status ?? '').toUpperCase()

  if ((operation !== 'create' && operation !== 'update') || status !== 'RECEIVED') {
    return doc
  }

  if (operation === 'update' && previousStatus === 'RECEIVED') return doc

  try {
    const purchaseItems = await req.payload.find({
      collection: 'purchase-items',
      where: {
        purchase: { equals: doc.id },
      },
      limit: 0,
      depth: 0,
    })

    for (const item of purchaseItems.docs) {
      const productId = getRelationshipId(item.product as RelationshipValue)
      if (!productId) continue

      const quantity = Number(item.quantity)
      if (!Number.isFinite(quantity) || quantity <= 0) continue

      const product = await req.payload.findByID({
        collection: 'products',
        id: productId,
        depth: 0,
      })
      const currentStock = Number(product.stockQuantity ?? 0)
      const stockQuantity = currentStock + quantity

      await req.payload.update({
        collection: 'products',
        id: productId,
        data: { stockQuantity },
      })

      await req.payload.create({
        collection: 'inventory-movements',
        data: {
          product: productId,
          type: 'PURCHASE',
          quantity,
          reference: `Purchase ${doc.id}`,
        },
      })
    }
  } catch (error) {
    req.payload.logger.error(
      { err: error, purchaseId: doc.id },
      'Failed to update inventory for purchase',
    )
    throw error
  }

  return doc
}
