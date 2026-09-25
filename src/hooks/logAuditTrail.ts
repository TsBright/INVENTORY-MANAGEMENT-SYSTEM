import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

type AuditOperation = 'CREATE' | 'UPDATE' | 'DELETE'

const createAuditLog = async ({
  operation,
  collectionName,
  doc,
  req,
}: {
  operation: AuditOperation
  collectionName: string
  doc: Record<string, unknown>
  req: Parameters<CollectionAfterChangeHook>[0]['req']
}) => {
  try {
    await req.payload.create({
      collection: 'audit-logs',
      data: {
        user: req.user?.id,
        action: operation,
        collectionName,
        details: {
          operation,
          documentId: doc.id,
          data: doc,
        },
      },
    })
  } catch (error) {
    req.payload.logger.error(
      { err: error, collectionName, documentId: doc.id },
      'Failed to create audit log',
    )
    throw error
  }
}

export const logAuditTrail: CollectionAfterChangeHook = async ({
  doc,
  operation,
  collection,
  req,
}) => {
  if (operation !== 'create' && operation !== 'update') return doc

  await createAuditLog({
    operation: operation === 'create' ? 'CREATE' : 'UPDATE',
    collectionName: collection.slug,
    doc: doc as Record<string, unknown>,
    req,
  })

  return doc
}

export const logAuditTrailAfterDelete: CollectionAfterDeleteHook = async ({
  doc,
  collection,
  req,
}) => {
  await createAuditLog({
    operation: 'DELETE',
    collectionName: collection.slug,
    doc: doc as Record<string, unknown>,
    req,
  })

  return doc
}
