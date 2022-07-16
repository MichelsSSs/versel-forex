import type { NextPage } from 'next'
import Header from 'pages/head'
import Layout from 'pages/layout/layout'
import Image from 'next/image'
import styless from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styless.container}>
      <Header/>
     <Layout/>      
    </div>
  )
}

export default Home
