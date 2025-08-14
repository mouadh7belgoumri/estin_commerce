import type { FormEvent } from 'react';
import racket from '../assets/without_bg/racket1.png'
const ProductDetails = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);

  }
  return (
    <div>
      <div className="flex flex-row w-xl border-black border-solid border-1">
        <div className='bg-[#383838]'> <img src={racket} alt="racket" className='' /></div>
        <div>
          <h1 className='text-5xl font-semibold'>Product Title</h1>
          <h2 className='text-3xl font-medium'>Description</h2>
          <p className='opacity-60 font-medium'>Experience precision and power with our premium ping pong racket. Designed with a comfortable grip and high-quality rubber for superior spin, speed, and control, this racket is perfect for both casual games and competitive matches. Lightweight yet durable, it’s your perfect partner for every rally</p>
          <div className='flex'>
            <form action="" className='inline-flex ml-4' onSubmit={handleSubmit}>
              <h2 className='text-3xl font-medium inline'>Color</h2>
              <span className='bg-red-500 w-10 h-10 rounded-full '></span>
              <input type="radio" name="color" id="red" className='opacity-0' value={'red'} />
              <span className='bg-black w-10 h-10 rounded-full '></span>
              <input type="radio" name="color" id="bleck" className='opacity-0' value={'black'} />
              <span className='bg-green-700 w-10 h-10 rounded-full '></span>
              <input type="radio" name="color" id="green " className='opacity-0' value={'green'} />
              <br />
              <h2 className='text-3xl font-medium '>Quantity</h2>
              <button type='submit'>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
