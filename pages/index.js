import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>henrik - digital designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Henrik us building something new
        </h1>

        <p className={styles.description}>
          Come back soon
        </p>
      </main>
    </div>
  )
}
