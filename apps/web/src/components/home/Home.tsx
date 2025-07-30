'use client';

import { Box } from '@chakra-ui/react';
import { log } from '@repo/logger';

export const Home = () => {
   log('Home component loaded');
   return (
      <Box as="section" padding={'50px'} textAlign={'center'}>
         CONTENT TBD
      </Box>
   );
};
