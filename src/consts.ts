// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Ochakai — Activating Urban Connections';
export const SITE_DESCRIPTION =
  'Ochakai helps housing organisations build community in their buildings through small gatherings, communication tools, and long-term engagement support.';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | Ochakai',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'community building',
    'housing',
    'neighbours',
    'tea gathering',
    'urban connection',
    'The Hague',
    'Ochakai',
  ],
  authors: [{ name: 'Ochakai' }],
  creator: 'Ochakai',
  publisher: 'Ochakai',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico?v=2', sizes: '48x48' },
      { url: '/favicon/favicon.svg?v=2', type: 'image/svg+xml' },
      {
        url: '/favicon/favicon-96x96.png?v=2',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png?v=2', sizes: '180x180' },
    ],
    shortcut: [{ url: '/favicon/favicon.ico?v=2' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Ochakai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ochakai — Activating Urban Connections',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@ochakai',
  },
};
