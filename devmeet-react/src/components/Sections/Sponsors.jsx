import React from 'react'
import sponser1 from "../../assets/sponsors/agora.png"
import sponser2 from "../../assets/sponsors/gatsbyjs.png"
import sponser3 from "../../assets/sponsors/github.png"
import sponser4 from "../../assets/sponsors/hackclub.png"
import sponser5 from "../../assets/sponsors/stickermule.png"

const sponserData = [
    {
        image :sponser1
    },
    {
        image :sponser2
    },
    {
        image :sponser3
    },
    {
        image :sponser4
    },
    {
        image :sponser5
    },
]

function Sponsors() {
  return (
    <>
      <section
        id="sponsors"
        className="relative pt-14 lg:pt-28 lg:pb-20 secondbg"
      >
        {/* Title Section */}
        <div className="text-left mx-auto space-y-10">
          <h1 className="w-3/4 mx-auto text-lg xl:text-6xl font-poppins font-medium  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
            Sponsors
          </h1>
        </div>

        <div className="pt-20 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-5  md:gap-x-10 sm:gap-y-16  gap-10  items-center justify-center mx-auto space-x-1">
          {sponserData.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col space-y-2 items-center justify-center"
                key={index}
              >
                <div className="w-full bg-theme_two p-4 rounded-2xl shadow-md shadow-gray-600  flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Sponsors

////////
