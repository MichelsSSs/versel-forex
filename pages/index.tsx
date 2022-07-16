import type { NextPage } from 'next'
import Header from 'pages/head'
import Layout1 from 'pages/layout/layout1'
import Image from 'next/image'
import styless from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styless.container}>
      <Header/>
     <Layout1/>      
    </div>
  )
}

export default Home
