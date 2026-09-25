import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isManager } from '../access/isManager'

export const SaleItems: CollectionConfig = {
  slug: 'sale-items',
  access: {
    create: isCashier,
    delete: isManager,
    read: isCashier,
    update: isManager,
  },
  fields: [
    { name: 'sale', type: 'relationship', relationTo: 'sales', required: true },
    { name: 'product', type: 'relationship', relationTo: 'products', required: true },
    { name: 'quantity', type: 'number', required: true, min: 1 },
    { name: 'unitPrice', type: 'number', required: true },
    { name: 'totalPrice', type: 'number', required: true },
  ],
}
