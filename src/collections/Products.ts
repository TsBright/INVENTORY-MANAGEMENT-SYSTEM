import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isManager } from '../access/isManager'
import { isOwner } from '../access/isOwner'
import { logAuditTrail, logAuditTrailAfterDelete } from '../hooks/logAuditTrail'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isManager,
    delete: isOwner,
    read: isCashier,
    update: isManager,
  },
  hooks: {
    afterChange: [logAuditTrail],
    afterDelete: [logAuditTrailAfterDelete],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'sku', type: 'text', required: true, unique: true },
    { name: 'barcode', type: 'text' },
    { name: 'category', type: 'relationship', relationTo: 'categories', required: true },
    { name: 'costPrice', type: 'number', required: true },
    { name: 'sellingPrice', type: 'number', required: true },
    { name: 'stockQuantity', type: 'number', defaultValue: 0, required: true },
    { name: 'reorderLevel', type: 'number', defaultValue: 5 },
    { name: 'image', type: 'relationship', relationTo: 'media' },
  ],
}
