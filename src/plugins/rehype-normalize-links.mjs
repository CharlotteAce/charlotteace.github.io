import { visit } from 'unist-util-visit';
import { normalizeLink } from '../utils/normalizeLink';

export default function rehypeNormalizeLinks(options = {}) {
  const {
    site,
    isProd,
  } = options;

  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;

      const href = node.properties?.href;

      if (typeof href !== 'string') return;

   const normalized = normalizeLink(
        href,
        {
          site,
          isProd,
        },
      );

      node.properties.href =
        normalized.href;

      Object.assign(
        node.properties,
        normalized.attrs,
      );
    });
  };
}