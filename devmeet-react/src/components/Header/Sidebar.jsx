import React from 'react'
import NavLink from './NavLink';
import CloseIcon from '../common/CloseIcon';
import Button from '../common/Button';

function Sidebar({showSideBar, setShowSideBar}) {
  return (
    <>
            <div id="sidebar" className={`h-screen block xl:hidden fixed transition-width duration-500 ease-in-out ${showSideBar ? 'right-0 w-4/5 md:w-3/5' : 'right-0 w-0 overflow-hidden'} bg-theme_white`} style={{zIndex: 100}}>

                {/* Close Icon */}
                <div className="px-6 py-6 flex justify-end" onClick={()=> setShowSideBar(false)}>
                    <CloseIcon />
                </div>

                <div className="px-7 space-y-7 flex flex-col">
                <div onClick={()=> setShowSideBar(false)}>
                        <NavLink text="About Us" />
                    </div>
                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink text="Features" />
                    </div>
                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink text="Sponsors" />
                    </div>

                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink text="Team" />
                    </div>

                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink text="FAQs" />
                    </div>
                    {/* <div onClick={()=> setShowSideBar(false)}>
                        <NavLink to="/#about" text="About Us" />
                    </div>
                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink to="/#features" text="Features" />
                    </div>
                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink to="/#sponsors" text="Sponsors" />
                    </div>

                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink to="/#team" text="Team" />
                    </div>

                    <div onClick={()=> setShowSideBar(false)}>
                        <NavLink to="/#faqs" text="FAQs" />
                    </div> */}
                   
                </div>


                <div className="relative px-7 py-8 w-full mx-auto font-semibold">
                    <Button 
                        to="/#contact" 
                        text='Join Our Team'
                        width='w-full'
                    />
                </div>
            </div>
        </>
  )
}

export default Sidebar;