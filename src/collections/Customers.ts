import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isManager } from '../access/isManager'

export const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'fullName',
  },
  access: {
    create: isCashier,
    delete: isManager,
    read: isCashier,
    update: isCashier,
  },
  fields: [
    { name: 'fullName', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true, unique: true },
    { name: 'email', type: 'email' },
    { name: 'loyaltyPoints', type: 'number', defaultValue: 0 },
  ],
}
