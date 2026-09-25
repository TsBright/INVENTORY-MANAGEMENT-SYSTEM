import type { CollectionAfterChangeHook } from 'payload'

type RelationshipValue = string | { id: string } | null | undefined

const getRelationshipId = (value: RelationshipValue): string | null => {
  if (typeof value === 'string') return value
  return value?.id ?? null
}

export const updateInventoryOnSale: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
  if (operation !== 'create') return doc

  try {
    const saleItems = await req.payload.find({
      collection: 'sale-items',
      where: {
        sale: { equals: doc.id },
      },
      limit: 0,
      depth: 0,
    })

    for (const item of saleItems.docs) {
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
      const stockQuantity = Math.max(0, currentStock - quantity)

      await req.payload.update({
        collection: 'products',
        id: productId,
        data: { stockQuantity },
      })

      await req.payload.create({
        collection: 'inventory-movements',
        data: {
          product: productId,
          type: 'SALE',
          quantity: -quantity,
          reference: `Sale ${doc.id}`,
        },
      })
    }
  } catch (error) {
    req.payload.logger.error({ err: error, saleId: doc.id }, 'Failed to update inventory for sale')
    throw error
  }

  return doc
}
