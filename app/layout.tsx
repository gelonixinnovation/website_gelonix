import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gelonix.in'),

  title: {
    default: 'Gelonix Innovation | AI Data, Data Operations & Market Research',
    template: '%s | Gelonix Innovation',
  },

  description:
    'Gelonix Innovation provides India-based delivery teams for AI data annotation, data operations, and market research outsourcing. Scale your global operations with flexible, reliable teams.',

  keywords: [
    'AI data annotation services',
    'data annotation outsourcing India',
    'AI data labeling services',
    'data operations outsourcing',
    'market research outsourcing India',
    'market research fieldwork',
    'data collection services',
    'India delivery teams',
    'Gelonix Innovation',
    'Gelonix',
  ],
  other: {
    "impact-site-verification": "954bebea-48c6-4716-af89-565fb68b3e5b",
  },
  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: 'website',
    url: 'https://gelonix.in/',
    siteName: 'Gelonix Innovation',
    title: 'Gelonix Innovation | AI Data, Data Operations & Market Research',
    description:
      'India-based delivery teams for AI data annotation, data operations, and market research outsourcing.',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gelonix Innovation | AI Data, Data Operations & Market Research',
    description:
      'India-based delivery teams for AI data annotation, data operations, and market research outsourcing.',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Gelonix Innovation',
      url: 'https://gelonix.in/',
      logo: 'https://gelonix.in/logo2.png',
      alternateName: "Gelonix",
      email: 'info@gelonix.in',
      telephone: '+91 93110 93599',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi',
        addressCountry: 'IN',
      },
    }),
  }}
/>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Gelonix Innovation",
            url: "https://gelonix.in/",
          }),
        }}
      />
        {children}
      </body>
    </html>
  );
}
