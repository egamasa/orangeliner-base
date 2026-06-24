const siteNames = {
  web: 'orangeliner.net',
  blog: 'orangeliner.net BLOG',
} as const;

type SiteId = keyof typeof siteNames;

const siteId = (import.meta.env.SITE_ID || 'web') as SiteId;

export const siteName = siteNames[siteId];
