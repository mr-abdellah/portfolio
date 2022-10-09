import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Abdellah Belkaid | Portfolio</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home