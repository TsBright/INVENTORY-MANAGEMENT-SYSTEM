import type { CollectionConfig } from 'payload'

import { isCashier } from '../access/isCashier'
import { isManager } from '../access/isManager'

export const Notifications: CollectionConfig = {
  slug: 'notifications',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: isManager,
    delete: isManager,
    read: isCashier,
    update: isCashier,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'LOW_STOCK',
      options: ['LOW_STOCK', 'OUT_OF_STOCK', 'SYSTEM'],
    },
    { name: 'isRead', type: 'checkbox', defaultValue: false },
  ],
}
