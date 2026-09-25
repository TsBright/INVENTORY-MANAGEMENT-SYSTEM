import 'server-only'

import configPromise from '@payload-config'
import { getPayload, type Payload } from 'payload'

let payloadClient: Payload | undefined

export const getPayloadClient = async (): Promise<Payload> => {
  if (!payloadClient) {
    payloadClient = await getPayload({ config: configPromise })
  }

  return payloadClient
}
