import { useState } from 'react'
import './App.css'

import Welcome from "./assets/welcome.mp4"
import bannerImg from "./assets/banner/tel.png"

import Button from './components/common/Button'
import Layout from './components/Layout'
import Aboutus from './components/Sections/Aboutus'
import Features from './components/Sections/Features'
import Sponsors from './components/Sections/Sponsors'
import OurTeam from './components/Sections/OurTeam'
import Faq from './components/Sections/Faq/Faq'
import Footer from './components/Sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <section
            id="header"
            className="relative w-full pt-20 pb-5 md:pt-18 xl:pt-10"
            // style={{
            //   backgroundImage: `url(${Banner})`,
            //   backgroundRepeat: "no-repeat",
            //   height: 500,
            // }}
          >
            <div className="w-4/5  mx-auto flex flex-col-reverse xl:flex-row items-center space-y-6 xl:space-y-0 xl:space-x-10">
              <div className="w-full xl:w-1/2 mt-12 mx-auto flex xl:items-center xl:justify-center">
                <div className="flex  flex-col items-start space-y-6">
                  <h2 className="text-2xl md:text-3xl xl:text-5xl font-Poppins font-bold tracking-normal text-white   xl:leading-snug">
                    Building a Stronger Community of{" "}
                    <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600">
                      {" "}
                      Developers, Hackers and Geeks Together{" "}
                    </span>{" "}
                    🛸 .
                  </h2>

                  <p className="text-sm md:text-lg font-medium font-Poppins tracking-normal text-gray-200 xl:leading-snug">
                    we welcome anyone with an interest in learning and innovation.
                    Join us for regular meetups, events, and online forums to stay
                    connected and engaged. Let's build the future of technology
                    together! 🚀
                  </p>

                  <div className="text-3xl sm:w-full lg:w-1/2 ">
                    <Button
                      text="Join the Team"
                      width="full"
                      classNames="py-5"
                      to="https://rb.gy/ndfjoy"
                    />
                  </div>
                  <p className="text-white    text-sm">
                    Come together to reach the peak.{" "}
                    {/* <span className="font-medium"> 200+ members</span>. */}
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-2/5 flex flex-col items-start space-y-8">
                {/* <GatsbyImage image={HeadImg} alt="Header" /> */}
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </section>
          <Aboutus />
          <Features />
            <div className="w-full p-2 lg:p-40  flex xl:items-center xl:justify-center">
              <video src={Welcome} autoPlay loop muted></video>
            </div>
          <Sponsors />
          <OurTeam />
          <Faq />
          {/* <Footer/> */}



      </Layout>
      
    </>
  )
}

export default App
