import React from 'react'

function Hero() {
    return (
        <div className="bg-white relative min-h-screen">
            <nav className='flex lg:h-20 w-full justify-center items-center lg:text-2xl font-serif text-gray-500 tracking-wider'>
                rohan
            </nav>

            <div className=' flex  lg:h-40 w-full px-96 justify-center items-center lg:text-3xl text-center text-wrap tracking-widest font-serif font-thin'>
                Your design partner for apps, websites, brands and products.
            </div>

            <div className='gap-3 flex  lg:h-20 w-full justify-center items-center lg:text-lg font-serif'>
                <button className='flex  px-6 py-3 rounded-xl bg-gray-300'>
                    Home
                </button>
                <button className='flex bg-gray-300 px-6 py-3 rounded-xl'>
                    Design
                </button>
                <button className='flex bg-gray-300 px-6 py-3 rounded-xl'>
                    Clicks
                </button>
                <button className='flex bg-gray-300 px-6 py-3 rounded-xl'>
                    Devs
                </button>
            </div>

            <div className='absolute bottom-0 overflow-hidden flex justify-center w-full items-center'>
                <img className=" w-1/3 h-auto grayscale-[1]" src="pics\r.png" alt=" photo" />
            </div>

           
        </div>
    )
}

export default Hero
