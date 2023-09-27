// components/Layout.tsx
import { ChakraProvider } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </>
  );
};

export default Layout;
