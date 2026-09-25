import type { CollectionConfig } from 'payload'

import { isManager } from '../access/isManager'

export const AuditLogs: CollectionConfig = {
  slug: 'audit-logs',
  admin: {
    useAsTitle: 'action',
  },
  access: {
    delete: () => false,
    read: isManager,
    update: () => false,
  },
  fields: [
    { name: 'user', type: 'relationship', relationTo: 'users' },
    { name: 'action', type: 'text', required: true },
    { name: 'collectionName', type: 'text', required: true },
    { name: 'details', type: 'json' },
  ],
}
