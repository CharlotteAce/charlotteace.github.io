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
  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://');

  // external
  if (isExternal) {
    return {
      href: buildUrl(href, options),
      attrs: {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    };
  }

  // untouched
  return {
    href: buildUrl(href, options),
    attrs: {},
  };
}