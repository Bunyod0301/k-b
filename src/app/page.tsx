'use client'
import Home_page from '@/components/home/Home'
import { useEffect, useState } from 'react'
import {ChakraProvider} from "@chakra-ui/react";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Home_page />
      <Footer />
    </>
  )
}
