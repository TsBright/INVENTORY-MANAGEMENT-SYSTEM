import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isManager } from '../access/isManager'
import { isOwner } from '../access/isOwner'

export const Suppliers: CollectionConfig = {
  slug: 'suppliers',
  admin: {
    useAsTitle: 'companyName',
  },
  access: {
    create: isManager,
    delete: isOwner,
    read: isCashier,
    update: isManager,
  },
  fields: [
    { name: 'companyName', type: 'text', required: true },
    { name: 'contactPerson', type: 'text' },
    { name: 'phone', type: 'text', required: true },
    { name: 'email', type: 'email' },
    { name: 'address', type: 'text' },
  ],
}
