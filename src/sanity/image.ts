import imageUrlBuilder from '@sanity/image-url';
import { getClient } from './client';

// SanityImageSource type — using any since the types path varies between versions
type SanityImageSource = any;

let builder: ReturnType<typeof imageUrlBuilder> | null = null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    builder = imageUrlBuilder(getClient());
  }
  return builder.image(source);
}
