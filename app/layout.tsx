import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gelonix.in'),
  title: 'Gelonix Innovation | Scale Your Data & AI Operations Globally',
  description:
    'India-based outsourcing and overflow capacity agency. We provide dedicated India-based delivery teams for AI data annotation, data operations, and market research — scaling global teams seamlessly.',
  keywords: [
    'AI data annotation',
    'data operations outsourcing',
    'market research fieldwork',
    'India outsourcing',
    'overflow capacity',
    'Gelonix Innovation',
    'Gelonix',
    'client delivery teams',
    'bpo services',
    'data labeling',
    'data processing',
    'research support',
    'AI operations',
    'global team scaling',
    'marketing research outsourcing',
    'market survey support',
    'data annotation services',
    'data management outsourcing',
    'research data collection',
    'AI data support',
    'data operations support',
    'research outsourcing services',
    'AI data labeling',
    'data annotation outsourcing',
    'market research outsourcing India',
    'overflow capacity solutions',
    'Gelonix delivery teams',
    'AI data processing',
    'data operations management',
    'research support services',
    'global team augmentation',
  ],
  openGraph: {
    title: 'Gelonix Innovation | Scale Your Data & AI Operations Globally',
    description:
      'Dedicated India-based delivery teams providing scalable overflow capacity for AI, Data, and Research projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gelonix Innovation',
    description:
      'Dedicated India-based delivery teams providing scalable overflow capacity for AI, Data, and Research projects.',
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
        {children}
      </body>
    </html>
  );
}
