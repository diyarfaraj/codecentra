import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowWeWork from '@/components/HowWeWork'
import Expertise from '@/components/Expertise'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <Expertise />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
