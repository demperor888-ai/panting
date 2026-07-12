'use client';

import { createClient } from '@sanity/client';
import { sanityConfig } from './config';
import { assertCredentials } from './env';

export function getClient() {
  assertCredentials();
  return createClient(sanityConfig);
}
