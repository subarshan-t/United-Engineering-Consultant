const normalise = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** True when `href` is the current page, or (for section links) an ancestor of it. */
export function isActive(href: string, path: string): boolean {
  const current = normalise(path);
  if (href === '/') return current === '/';
  return current.startsWith(normalise(href));
}

export function isCurrent(href: string, path: string): boolean {
  return normalise(href) === normalise(path);
}
