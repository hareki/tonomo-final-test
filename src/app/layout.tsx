import { IBM_Plex_Sans } from 'next/font/google';

import { BrandProvider } from '@/src/features/branding/components/BrandProvider';

import type { Metadata } from 'next';
import '../styles/index.css';

// IBM Plex Sans is the default brand typeface. It isn't a variable font, so the
// weights used by the design tokens have to be listed explicitly. Agencies can
// swap in their own face via the brand config; this instance stays the default.
const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tonomo',
    template: '%s · Tonomo',
  },
  description: 'Premium real estate listings.',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='en'
      className={`
        ${ibmPlexSans.variable}
        h-full antialiased
      `}
    >
      <body className='flex min-h-dvh flex-col'>
        <BrandProvider brandId='tonomo'>
          <a
            href='#main-content'
            className={`
              sr-only rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground
              shadow-lg outline-2 outline-ring
              focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4
              focus-visible:z-100
            `}
          >
            Skip to content
          </a>

          <main id='main-content' className='flex flex-1 flex-col'>
            {children}
          </main>
        </BrandProvider>
      </body>
    </html>
  );
}
