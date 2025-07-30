'use client';

import { Box, Stack, Separator } from '@chakra-ui/react';
import Link from 'next/link';

export const Footer = () => {
   return (
      <Box as="footer" textAlign={'center'} paddingLeft={'50px'} paddingRight={'50px'} background={'bg'} >
         <Separator />
         <Box padding={'20px'}>
            <Stack direction="row" justifyContent="center" gap={10} mb={5}>
               <FooterLink href="/" name="Home" />
               <FooterLink href="/privacy" name="Privacy Policy" />
            </Stack>
            <Box fontSize={'1.25em'} fontWeight={'bold'}>
               {process.env.NEXT_PUBLIC_APP_NAME}
            </Box>
            <Box fontSize={'.85em'} color={'fg.muted'} mt={5}>
               © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}. All rights reserved.
            </Box>
         </Box>
      </Box>
   );
};

interface FooterLinksProps {
   href: string;
   name: string;
}

function FooterLink({ href, name }: FooterLinksProps) {
   return (
      <Link href={href} style={{ fontWeight: '600', textDecoration: 'none' }}>
         {name}
      </Link>
   );
}
