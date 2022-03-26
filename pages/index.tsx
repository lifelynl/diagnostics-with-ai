import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DannyGreet } from '../domain/core/DannyGreet/DannyGreet';


const Home: NextPage = () => {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <DannyGreet />
    </>
  );
}

export default Home
