import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import Expertise from '@/components/Expertise'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
