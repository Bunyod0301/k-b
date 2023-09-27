import React from "react";
import Link from "next/link"; // Import Link from Next.js

import {
  Flex,
  Icon,
  FlexProps,
} from '@chakra-ui/react'

import { IconType } from 'react-icons';
import { NavItemProps } from "@/product/product.model";

const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <React.Fragment>
      <Link href={href}> {/* Use the Link component to enable routing */}
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </React.Fragment>
  )
}

export default NavItem;
