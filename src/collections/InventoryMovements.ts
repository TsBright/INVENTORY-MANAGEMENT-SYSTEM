import type { CollectionConfig } from 'payload'

import { isManager } from '../access/isManager'

export const InventoryMovements: CollectionConfig = {
  slug: 'inventory-movements',
  access: {
    create: isManager,
    delete: () => false,
    read: isManager,
    update: () => false,
  },
  fields: [
    { name: 'product', type: 'relationship', relationTo: 'products', required: true },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: ['SALE', 'PURCHASE', 'MANUAL_ADJUSTMENT', 'DAMAGE'],
    },
    { name: 'quantity', type: 'number', required: true },
    { name: 'reference', type: 'text' },
    { name: 'user', type: 'relationship', relationTo: 'users' },
  ],
}
