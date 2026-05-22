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
  const {
    site,
    isProd = false,
  } = options;

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

  // root-relative
  if (
    href.startsWith('/') &&
    isProd &&
    site
  ) {
    return {
      href: new URL(href, site).toString(),
      attrs: {},
    };
  }

  // untouched
  return {
    href,
    attrs: {},
  };
}