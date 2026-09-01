import type { Metadata } from 'next';
import {
  PT_Sans_Narrow,
  PT_Serif,
  Source_Code_Pro,
  Ubuntu,
} from 'next/font/google';
import './globals.css';

const display = PT_Sans_Narrow({
  variable: '--font-loaded-display',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const ui = Ubuntu({
  variable: '--font-loaded-ui',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const reading = PT_Serif({
  variable: '--font-loaded-reading',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const code = Source_Code_Pro({
  variable: '--font-loaded-code',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://130bb56.github.io'),
  title: 'Seokhyeon Lee — ML Systems',
  description:
    "Seokhyeon Lee's academic profile in ML systems, hardware-aware AI, and accelerator software.",
  openGraph: {
    title: 'Seokhyeon Lee — ML Systems',
    description:
      'Academic profile, curriculum vitae, technical work, and projects.',
    type: 'website',
    images: [
      {
        url: 'https://130bb56.github.io/og.png',
        width: 1200,
        height: 630,
        alt: 'Seokhyeon Lee — ML Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seokhyeon Lee — ML Systems',
    description:
      'Academic profile, curriculum vitae, technical work, and projects.',
    images: ['https://130bb56.github.io/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={
          display.variable +
          ' ' +
          ui.variable +
          ' ' +
          reading.variable +
          ' ' +
          code.variable
        }
      >
        {children}
      </body>
    </html>
  );
}
