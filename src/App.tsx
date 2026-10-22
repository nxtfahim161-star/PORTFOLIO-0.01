import Nav from './Nav'
import Hero from './Hero'
import Intro from './Intro'
import LogoSystem from './LogoSystem'
import Colors from './Colors'
import Typography from './Typography'
import Graphics from './Graphics'
import Work from './Work'
import Motion from './Motion'
import Principles from './Principles'
import Contact from './Contact'
import Footer from './Footer'
import { useParallax, useReveal } from './hooks'

export default function App() {
  useReveal()
  useParallax()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <LogoSystem />
        <Colors />
        <Typography />
        <Graphics />
        <Work />
        <Motion />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
