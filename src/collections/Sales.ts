import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isManager } from '../access/isManager'
import { isOwner } from '../access/isOwner'
import { logAuditTrail } from '../hooks/logAuditTrail'
import { updateInventoryOnSale } from '../hooks/updateInventoryOnSale'

export const Sales: CollectionConfig = {
  slug: 'sales',
  admin: {
    useAsTitle: 'receiptNumber',
  },
  access: {
    create: isCashier,
    delete: isOwner,
    read: isCashier,
    update: isManager,
  },
  hooks: {
    afterChange: [updateInventoryOnSale, logAuditTrail],
  },
  fields: [
    { name: 'receiptNumber', type: 'text', required: true, unique: true },
    { name: 'cashier', type: 'relationship', relationTo: 'users', required: true },
    { name: 'customer', type: 'relationship', relationTo: 'customers' },
    { name: 'business', type: 'relationship', relationTo: 'businesses', required: true },
    {
      name: 'paymentMethod',
      type: 'select',
      defaultValue: 'cash',
      options: ['cash', 'mobile_money', 'card'],
    },
    { name: 'subtotal', type: 'number', required: true },
    { name: 'tax', type: 'number', defaultValue: 0 },
    { name: 'totalAmount', type: 'number', required: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'completed',
      options: ['completed', 'cancelled'],
    },
  ],
}
