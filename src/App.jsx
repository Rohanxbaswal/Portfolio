import { useRef, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Msg from './Components/Msg'
import Design from './Components/Design'

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Gallery: galleryRef,
    Contact: contactRef,
  }

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />

      <section ref={homeRef}>
         <Hero galleryRef={galleryRef} />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={galleryRef}>
        <Design/>
      </section>
    

      <section ref={contactRef}>
        <Msg />
      </section>
    </>
  )
}

export default App
