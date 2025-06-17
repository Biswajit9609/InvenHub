import {React, useState} from 'react'
import Navbar from '../Components/Navbar'
import image from "../assets/Images/freepik__background__25629.png"
function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenuOpen(){
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <>
        <div className="landing w-full flex flex-col items-center justify-center">
            <Navbar
                toggleMenuOpen={toggleMenuOpen}
                isMenuOpen={isMenuOpen}
            />
            <div className={`flex flex-col lg:flex-row mt-30 ${ isMenuOpen? 'mt-100' : null}`}>
                <div className="illustration-container w-full lg:w-5/12"><img src={image} alt="" height="2000px" /></div>
                <div className="text-container w-full lg:w-7/12 text-black flex flex-col lg:justify-center items-center">
                    <div className="heading font-semibold px-5">
                        <h1 className='text-[3.2rem] md:text-8xl md:leading-none leading-7'>Your <span className='font text-[var(--logo-Red)]'>Store</span></h1>
                        <h1 className='text-[3.2rem] md:text-8xl'> in Your <span className='font text-[var(--logo-Red)]'>Pocket</span></h1>
                    </div>
                    <div className="subHeading mt-5 flex flex-col items-center px-7">
                        <h3 className='lg:text-2xl'>Track stock levels, print barcode labels, sell faster, and get <span className='lg:block'>AI-powered predictions — from your phone.</span></h3>
                    </div>
                    <div className='w-[60%] flex justify-end'>
                        <button className="cta-button font mt-5">{`Get Started →`}</button>
                    </div>
                </div>
            </div>
            <div className="video-container w-full max-w-7xl bg-[#f1faee] mx-auto my-20 aspect-video">
                <iframe
                    className="w-full h-full block"
                    src="https://www.youtube.com/embed/5ioh6O-gCGM?autoplay=1&mute=1&modestbranding=1&rel=0"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </>
  )
}

export default Landing