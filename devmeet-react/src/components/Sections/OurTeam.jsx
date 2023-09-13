import React from 'react'
import Button from '../common/Button'
import Img1 from "../../assets/team/fahid.png"
import Img2 from "../../assets/team/guru.png"
import Img3 from "../../assets/team/sijin.png"
import Img4 from "../../assets/team/rajesh.png"
import Img5 from "../../assets/team/suriya.png"
import Img6 from "../../assets/team/member-2.png"


const teamData=[
    {
        Name: "Fahid",
        Role: "Mentor",
        paragraph: "Founder @ZenAppStudio",
        image: Img1,
      },
      {
        Name: "Guru prasad G",
        Role: "Mentor",
        paragraph: "Founding Team, @TykeVision",
        image: Img2,
      },
      {
        Name: "Sijin Raj ",
        Role: "Organizer",
        paragraph: "Software Engineer @Sadiq",
        image: Img3,
      },
      
      {
        Name: "Rajesh Kannan",
        Role: "Community Manager",
        paragraph: "Software Engineer @Capgemini",
        image: Img4,
      },
      {
        Name: "Surya Prakash ",
        Role: "Event Organizer",
        paragraph: "Service team @Niyo global sbm",
        image: Img5,
      },
      {
        Role: "The Next DevMeet Star",
        paragraph: "",
        image: Img6,
        Button: "join our team",
      },
]

function OurTeam() {
  return (
    <>
      <section
        id="team"
        className="relative pt-14 lg:pt-24 lg:pb-20 bg-theme_white"
      >
        {/* Title Section */}
        <div className="text-left mx-auto space-y-10">
          <h1 className="w-3/4 mx-auto text-lg xl:text-6xl font-poppins font-medium  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
            Our Team
          </h1>
        </div>

        <div className="pt-20 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  md:gap-x-10 sm:gap-y-16  gap-10 md:gap-y-7  items-center justify-center mx-auto  space-x-1 space-y-4">
          {teamData.map((item, index) => {
            return (
              <div
                className="w-full p-2  cursor-pointer flex flex-col bg-theme_two rounded-xl shadow-md shadow-purple-50 hover:shadow-purple-500  items-center"
                key={index}
              >
                <div className="w-full p-4">
                 <img src={item.image} alt="" />
                </div>

                <div className="pt-2 w-full text-center items-center justify-center space-y-1 ">
                  <h1 className="text-lg xl:text-xl font-Poppins font-bold text-white  ">
                    {item.Name}
                  </h1>
                  <p className="px-2  text-base font-normal font-Poppins text-gray-400 ">
                    {item.Role}
                  </p>
                  <p className="px-2  text-sm font-normal font-Poppins text-gray-500 ">
                    {item.paragraph}
                  </p>
                  <div
                    className={` ${
                      item.Button ? "block" : "hidden"
                    } p-2 flex justify-center items-center `}
                  >
                    <Button
                      to="https://rb.gy/ndfjoy"
                      text={item.Button}
                      className=""
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default OurTeam