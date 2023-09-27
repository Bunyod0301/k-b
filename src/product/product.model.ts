import {IconType} from "react-icons";
import {BoxProps, FlexProps} from "@chakra-ui/react";
import React from "react";

export interface LinkItemProps {
  name: string
  icon: IconType
}

export interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
  href: string; // Add a href prop to specify the link URL
}

export interface MobileProps extends FlexProps {
  onOpen: () => void
}

export interface SidebarProps extends BoxProps {
  onClose: () => void
}