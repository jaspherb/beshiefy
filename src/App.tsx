import * as React from 'react'
import './App.css';
// 1. import `ChakraProvider` component
import {  ChakraProvider } from '@chakra-ui/react'
import Hero from './components/Hero/Hero'
import LargeWithAppLinksAndSocial from './components/Footer'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Hero />
      <LargeWithAppLinksAndSocial></LargeWithAppLinksAndSocial>
    </ChakraProvider>
  )
}