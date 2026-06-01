// リンクのSITE_ROOT結合
import { SITE_ROOT } from '../config/site';

export interface BuildUrlOptions {
  site?: string;
  isProd?: boolean;
}

export function buildUrl(
  href?: string,
  options: BuildUrlOptions = {},
): string {
  if (!href) {
    console.warn(
      '[buildUrl] href is empty:',
      href,
    );
    return '';
  }
  const {
    site = SITE_ROOT,
    isProd = import.meta.env.PROD,
  } = options;

  if (
    href.startsWith('http://') ||
    href.startsWith('https://')
  ) {
    return href;
  }

  if (
    href.startsWith('/') &&
    isProd &&
    site
  ) {
    return new URL(href, site).toString();
  }

  return href;
}