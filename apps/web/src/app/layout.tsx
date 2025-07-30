import { Metadata } from 'next';
import { Box } from '@chakra-ui/react';
import { Nav } from '../components/layout/Nav';
import { Providers } from '@components/providers/Providers';
import { Footer } from '@components/layout/Footer';
import { CookieBanner } from '@components/CookieBanner';

export const metadata: Metadata = {
   title: '',
   description: '',
   keywords: [''],
   openGraph: {
      title: '',
      description: '',
      url: process.env.NEXT_PUBLIC_SITE_URL
   }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   // Note hydration warning is suppressed due to ThemeToggle component
   return (
      <html lang="en" suppressHydrationWarning>
         <body>
            <Providers>
               <Nav />
               <Box
                  as="main"
                  flex={'1'}
                  marginTop={'60px'}
                  marginBottom={'60px'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
               >
                  <Box
                     maxWidth={'1200px'}
                     width={'100%'}
                     padding={'0 20px'}
                     boxSizing={'border-box'}
                  >
                     {children}
                     <CookieBanner />
                  </Box>
               </Box>
               <Footer />
            </Providers>
         </body>
      </html>
   );
}
