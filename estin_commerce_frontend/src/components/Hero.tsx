
// import { Link } from 'react-router'
import { Link } from 'react-router'
import heroImg from '../assets/Group 14.png'
const Hero = () => {
  return (
    <div className='flex justify-around my-20 '>
      <div className='flex flex-col content-center justify-center -mt-20 ml-15 w-1/3'>
        <h1 className='font-bold text-6xl mb-7 '>Maykhosek Walo</h1>
        <div className='flex flex-col'>
          <p className='text-2xl'>My goal is to provide you with everything you would natrually struggle to get.</p>
          <Link to={'/shop'} className='bg-black text-white rounded-full py-4 px-7 mt-7 text-4xl font-semibold hover:cursor-pointer w-fit'>Go Shopping</Link>
        </div>
      </div>
      <img src={heroImg} alt="hero image" className='w-3xl ' />
    </div>
  )
}

export default Hero
