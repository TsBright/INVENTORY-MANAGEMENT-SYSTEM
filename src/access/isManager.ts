import type { Access } from 'payload'

import type { User } from '../payload-types'

export const isManager: Access = ({ req: { user } }) => {
  const role = (user as User | null | undefined)?.role

  return role === 'admin' || role === 'owner' || role === 'manager'
}
