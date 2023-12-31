import React from 'react'

function NavLink({text, classNames=""}) {
  return (
    <>
        {/* <div onClick={() => navigate(`${to}`)} className={`group text-lg text-white font-medium font-Poppins  hover:text-yellow-600 capitalize cursor-pointer ${classNames}`}>*/}
        <div className={`group text-lg text-white font-medium font-Poppins  hover:text-yellow-600 capitalize cursor-pointer ${classNames}`}>
            {text}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>

        </div>
    </>
  )
}

export default NavLink