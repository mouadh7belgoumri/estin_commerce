
import { Link } from 'react-router'
import heroImg from '../assets/Group 14.png'

const Hero = () => {
  return (
    <div className='w-full px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-12 lg:py-20'>
          {/* Text Content */}
          <div className='flex flex-col justify-center lg:w-1/2 text-center lg:text-left order-2 lg:order-1'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 lg:mb-8 leading-tight'>
              Maykhosek Walo
            </h1>
            <p className='text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-10 text-gray-700 max-w-lg mx-auto lg:mx-0'>
              My goal is to provide you with everything you would naturally struggle to get.
            </p>
            <Link 
              to={'/shop'} 
              className='bg-black text-white rounded-full py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold hover:bg-gray-800 transition-colors duration-300 w-fit mx-auto lg:mx-0'
            >
              Go Shopping
            </Link>
          </div>
          
          {/* Hero Image */}
          <div className='lg:w-1/2 flex justify-center order-1 lg:order-2'>
            <img 
              src={heroImg} 
              alt="hero image" 
              className='w-64 sm:w-80 md:w-96 lg:w-full max-w-lg xl:max-w-xl object-contain' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
