import React from 'react'

// import image from "../utils/imageBackground/lion.jpg";

import Hero from '../components/Hero/Hero'
import Tools from '../components/Tools/Tools'
import Models from '../components/Modelos/Models'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'

// import Content from '../components/Content/Content'

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <Models />
      </div>
      <div>
        <Tools />
      </div>
      <div>
        <News />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
