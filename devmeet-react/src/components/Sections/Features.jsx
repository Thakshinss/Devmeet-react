import React from 'react'
import featureImg1 from "../../assets/feature/1.png"
import featureImg2 from "../../assets/feature/2.png"
import featureImg3 from "../../assets/feature/3.png"
import featureImg4 from "../../assets/feature/4.png"
import featureImg5 from "../../assets/feature/5.png"

const featuresData =[
    {
        paragraph: "Regular Meetups",
        image: featureImg1,
    },
    {
        paragraph: "Presentations and Workshops ",
        image: featureImg2,
      },
      {
        paragraph: "Virtual and In-person events ",
        image: featureImg3,
      },
      {
        paragraph: "Mentorship",
        image: featureImg4,
      },
      {
        paragraph: "Networking Opportunities",
        image: featureImg5,
      },
]


function Features() {
  return (
    <>
      <section
        id="features"
        className="relative pt-14 lg:pt-28 lg:pb-20 secondbg"
      >
        {/* Title Section */}
        <div className="text-left mx-auto space-y-10">
          <h1 className="w-3/4 mx-auto text-lg xl:text-6xl font-poppins font-medium  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
            Features that work together
          </h1>
        </div>

        <div className="pt-20 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-5  md:gap-x-10 sm:gap-y-16  gap-10  items-center justify-center mx-auto space-x-1">
          {featuresData.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col space-y-2 items-center justify-center"
                key={index}
              >
                <div className="w-full  flex items-center justify-center">
                    <img src={item.image} alt="" />
                  {/* <GatsbyImage
                    image={item.image}
                    alt={item.title}
                    className="w-full"
                  /> */}
                </div>
                <div className="w-full text-center  items-center justify-center space-y-4 ">
                  <h1 className="text-lg xl:text-2xl font-semibold text-white ">
                    {item.title}
                  </h1>
                  <p className="text-base text-white">{item.paragraph}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* Button Section */}
        {/* <div className="mt-10 flex items-center justify-center">
          <Button to="" text="Learn More" />
        </div> */}
      </section>
    </>
  )
}

export default Features