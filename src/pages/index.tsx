import React from 'react'
import { NextPage } from 'next'


import Header from 'src/components/Header'
import Hero from 'src/components/Hero'
import Interior from 'src/components/Interior'


const Home: NextPage = () => (
  <>
    <Header />
    <Hero />
    <Interior />
  </>
)

export default Home
