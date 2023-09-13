import React from 'react'

function Button({to, classNames="", text, width="w-auto"}) {
  return (
    <>
        <a href={to} className={`px-6 py-2.5 flex items-center justify-center text-sm  rounded-lg  font-Poppins  md:text-lg ${width} text-white bg-gradient-to-r from-yellow-400 to-purple-600`}>
            {text}
        </a>
    </>
  )
}

export default Button
