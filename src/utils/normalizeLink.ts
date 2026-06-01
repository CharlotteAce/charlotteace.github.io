// a要素の正規化
import { buildUrl } from './buildUrl';

export interface NormalizeLinkResult {
  href: string;
  attrs: Record<string, string>;
}

interface Options {
  site?: string;
  isProd?: boolean;
}

export function normalizeLink(
  href: string,
  options: Options = {},
): NormalizeLinkResult {
  href = buildUrl(href, options);

  // external
  if (
    href.startsWith('http://') ||
    href.startsWith('https://')
  ) {
    return {
      href,
      attrs: {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    };
  }

  // untouched
  return {
    href,
    attrs: {},
  };
}