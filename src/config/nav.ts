// src/config/nav.ts
// Auto-generated from pages.manifest.json — do not edit manually.
// The groupNavItems() function enforces a hard cap of 6 top-level nav items.
// Any overflow is collected into a "More" dropdown group.
// LPS-1052: a Blog entry is always pinned above the overflow boundary so a
// newly-published blog never disappears under "More" on a 6+ page site.

export interface NavItem {
  label: string;
  to?: string;
  children?: NavItem[];
}

const MAX_NAV_ITEMS = 6;

function isBlog(item: NavItem): boolean {
  return item.label.trim().toLowerCase() === "blog";
}

function groupNavItems(items: NavItem[]): NavItem[] {
  if (items.length <= MAX_NAV_ITEMS) return items;

  const blogIndex = items.findIndex(isBlog);
  const nonBlog = blogIndex >= 0 ? items.filter((_, i) => i !== blogIndex) : items;
  const blog = blogIndex >= 0 ? items[blogIndex] : null;

  const slots = blog ? MAX_NAV_ITEMS - 2 : MAX_NAV_ITEMS - 1;
  const visible = nonBlog.slice(0, slots);
  const overflow = nonBlog.slice(slots);
  const pinned = blog ? [blog] : [];

  if (overflow.length === 0) {
    return [...visible, ...pinned];
  }
  return [...visible, ...pinned, { label: "More", children: overflow }];
}

const _rawNavItems: NavItem[] = [
  { label: "About Us", to: "/about-us" },
  { label: "Our Services", to: "/our-services" },
  { label: "For Patients", to: "/for-patients" },
  { label: "Smile Gallery", to: "/smile-gallery" },
  { label: "Service Locations / Service Area", to: "/service-locations" },
];

export const navItems: NavItem[] = groupNavItems(_rawNavItems);
