import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diyarbakır</title>
        <meta name="description" content="İko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>
      <div>
        <h1>İko</h1>
      </div>
     </main>
    </div>
  )
}
