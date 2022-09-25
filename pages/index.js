import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zadania domowe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mikołaj Zimon" />
      </main>

      <Footer />
    </div>
  )
}
