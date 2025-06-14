import {React} from 'react'
import Navbar from '../Components/Navbar'
import image from "../assets/Images/freepik__background__25629.png"
function Landing() {
  return (
    <>
        <div className="landing w-full flex flex-col items-center">
            <Navbar/>
            <div className="flex flex-col lg:flex-row mt-30">
                <div className="illustration-container w-5/12"><img src={image} alt="" /></div>
                <div className="text-container w-7/12 text-black flex flex-col lg:justify-center lg:items-center">
                    <div className="heading font-semibold">
                        <h1 className='text-8xl'>Your <span className='font text-[var(--logo-Red)]'>Store</span></h1>
                        <h1 className='text-8xl'> in Your <span className='font text-[var(--logo-Red)]'>Pocket</span></h1>
                    </div>
                    <div className="subHeading mt-5 flex flex-col items-center">
                        <h3 className='text-2xl'>Track stock levels, print barcode labels, sell faster, and get </h3>
                        <h3 className='text-2xl'>AI-powered predictions — from your phone.</h3>
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