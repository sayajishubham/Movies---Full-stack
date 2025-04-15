import React from 'react'

function Home() {
    return (
        <div className='w-full h-screen relative pt-[100px] z-10'>
            <div className='w-full h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                <h1 className='text-[100px] text-center text-white py-[10px]'>404</h1>
                <h3 className='text-[20px] text-center text-white py-[5px]'>Not Found</h3>
                <p className='text-[15px] text-center text-white py-[5px]'>The resource requested Could not be found on this server!</p>
            </div>
        </div>
    )
}

export default Home;
