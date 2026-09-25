import type { CollectionConfig } from 'payload'

export const PurchaseItems: CollectionConfig = {
  slug: 'purchase-items',
  fields: [
    { name: 'purchase', type: 'relationship', relationTo: 'purchases', required: true },
    { name: 'product', type: 'relationship', relationTo: 'products', required: true },
    { name: 'quantity', type: 'number', required: true, min: 1 },
    { name: 'unitCost', type: 'number', required: true },
  ],
}
