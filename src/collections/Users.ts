import type { CollectionConfig } from 'payload'

import { logAuditTrail, logAuditTrailAfterDelete } from '../hooks/logAuditTrail'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'fullName',
  },
  auth: true,
  hooks: {
    afterChange: [logAuditTrail],
    afterDelete: [logAuditTrailAfterDelete],
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'cashier',
      options: ['admin', 'owner', 'manager', 'cashier'],
    },
    {
      name: 'business',
      type: 'relationship',
      relationTo: 'businesses',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
