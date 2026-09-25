import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isOwner } from '../access/isOwner'

export const Businesses: CollectionConfig = {
  slug: 'businesses',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isOwner,
    delete: isOwner,
    read: isCashier,
    update: isOwner,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'address', type: 'text' },
    { name: 'phone', type: 'text' },
    { name: 'taxRate', type: 'number', defaultValue: 0 },
    { name: 'currency', type: 'text', defaultValue: 'FCFA' },
  ],
}
