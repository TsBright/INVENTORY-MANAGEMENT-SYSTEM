import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isManager } from '../access/isManager'
import { isOwner } from '../access/isOwner'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isManager,
    delete: isOwner,
    read: isCashier,
    update: isManager,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
  ],
}
