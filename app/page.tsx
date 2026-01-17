import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
      </main>
      <Footer />
    </>
  )
}
