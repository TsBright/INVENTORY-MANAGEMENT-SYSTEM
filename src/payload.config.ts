import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { AuditLogs } from './collections/AuditLogs'
import { Businesses } from './collections/Businesses'
import { Categories } from './collections/Categories'
import { Customers } from './collections/Customers'
import { InventoryMovements } from './collections/InventoryMovements'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Notifications } from './collections/Notifications'
import { Products } from './collections/Products'
import { PurchaseItems } from './collections/PurchaseItems'
import { Purchases } from './collections/Purchases'
import { SaleItems } from './collections/SaleItems'
import { Sales } from './collections/Sales'
import { Suppliers } from './collections/Suppliers'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Businesses,
    Products,
    Categories,
    Suppliers,
    Customers,
    Sales,
    SaleItems,
    Purchases,
    PurchaseItems,
    InventoryMovements,
    Notifications,
    AuditLogs,
    Media,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [],
})
