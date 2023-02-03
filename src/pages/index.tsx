import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Header from 'src/components/Header'
import Hero from 'src/components/Hero'

import { Flex } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

import MainHeading from '@/components/main-heading/main-heading'
import { APP_NAME } from '@/config'

const Home: NextPage = () => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <title>{APP_NAME}</title>
    </Head>

    <Header />

    <Hero />

  </>
)

export default Home
