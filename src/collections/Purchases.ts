import type { CollectionConfig } from 'payload'

import { isManager } from '../access/isManager'
import { isOwner } from '../access/isOwner'
import { logAuditTrail } from '../hooks/logAuditTrail'
import { updateInventoryOnPurchase } from '../hooks/updateInventoryOnPurchase'

export const Purchases: CollectionConfig = {
  slug: 'purchases',
  admin: {
    useAsTitle: 'poNumber',
  },
  access: {
    create: isManager,
    delete: isOwner,
    read: isManager,
    update: isManager,
  },
  hooks: {
    afterChange: [updateInventoryOnPurchase, logAuditTrail],
  },
  fields: [
    { name: 'poNumber', type: 'text', required: true, unique: true },
    { name: 'supplier', type: 'relationship', relationTo: 'suppliers', required: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: ['draft', 'ordered', 'received', 'cancelled'],
    },
    { name: 'totalCost', type: 'number', required: true },
    { name: 'expectedDelivery', type: 'date' },
  ],
}
