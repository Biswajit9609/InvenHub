import './App.css'
import Navbar from './Components/Navbar'
import image from "./assets/Images/freepik__background__25629.png"
function App() {

  return (
    <>
      <div className="landing w-full flex flex-col">
        <Navbar/>
        <div className="banner flex">
        <div className="illustration-container w-5/12"><img src={image} alt="" /></div>
        <div className="text-container w-7/12 text-black flex flex-col justify-center items-center">
          <div className="heading font-semibold">
            <h1 className='text-8xl'>Your <span className='font text-red-600'>Store</span></h1>
            <h1 className='text-8xl'> in Your <span className='font text-red-600'>Pocket</span></h1>
          </div>
          <div className="subHeading mt-5">
            <h3 className='text-2xl'>Track stock levels, print barcode labels, sell faster, </h3>
            <h3 className='text-2xl'>and get AI-powered predictions — from your phone.</h3>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App