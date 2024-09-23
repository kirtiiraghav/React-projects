import React from 'react'
import shoeImg from '../assets/shoe_image.svg'
import flipkart from '../assets/flipkart.svg'
import amazon from '../assets/amazon.svg'

export default function Hero() {
    return (
        <section className='py-10 md:py-12 lg:py-20 px-5 md:px-10 lg:px-24 flex flex-col sm:flex-row max-w-screen-xl mx-auto'>
            <div className='sm:max-w-[50%] order-2 sm:order-1'>
                {/* <h1 className='md:text-6xl lg:text-7xl font-extrabold'>YOUR FEET <br />DESERVE <br />THE BEST</h1> */}
                <h1 className='md:text-6xl lg:text-7xl font-extrabold flex md:flex-col'>
                    <span className='block sm:hidden text-2xl'>YOUR FEET DESERVE THE BEST</span>
                    <p className='hidden sm:block'>YOUR FEET </p>
                    <p className='hidden sm:block'> DESERVE </p>
                    <p className='hidden sm:block'> THE BEST </p>
                </h1>

                <p className=' py-2 sm:py-9 sm:max-w-[70%] sm:font-semibold text-gray-600'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div>
                    <button className='bg-[#D01C28] text-white px-4 py-1 font-semibold rounded mr-5'>SHOP NOW</button>
                    <button className='border px-4 py-1 rounded'>Category</button>
                </div>
                <div className='py-4 sm:py-9'>
                    <p className='text-gray-600'>Also Available On</p>
                    <div className='flex gap-3 items-center py-2'>
                        <img className='cursor-pointer w-8 h-8' src={flipkart} alt="flipkart" />
                        <img className='cursor-pointer w-8 h-8' src={amazon} alt="amazon" />
                    </div>
                </div>
            </div>
            <div className='order-1 sm:order-2 self-center flex-1'>
                <img className='w-full' src={shoeImg} alt="shoe" />
            </div>
        </section>
    )
}
