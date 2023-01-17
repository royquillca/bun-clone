import React from 'react'
import {ReactComponent as Duplicate } from '../assets/duplicate.svg'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className='grid text-white grid-cols-2'>
            <div className=''>  
                <h1 className='text-[2.6rem] font-bold leading-tight mb-4'>Bun is a fast all-in-one JavaScript runtime</h1>
                <p>Bundle, transpile, install, and run JavaScript & TypeScript projects — all in Bun. Bun is a new JavaScript runtime with a native bundler, transpiler, task runner, and npm client built-in.</p>
                <p className='font-bold text-[1.5rem] mt-8'>Install Beta v0.4.0 (beta)</p>
                <span className='flex items-center p-4 border-[1.5px] border-[#F89B4B] rounded-lg mt-4 justify-between bg-[#403C3A]'>
                   <div className='flex justify-between gap-4'>
                    <p>$</p>
                        <p>curl -fsSL https://bun.sh/install | bash</p>
                    </div>
                    <Duplicate className='w-4 fill-white'/>
                </span>
                <div className='flex justify-between mt-2 text-sm'>
                    <p>Supported on macOS, Linux & WSL</p>
                    <a href="/" className='hover:underline'>View source</a>
                </div>
            </div>
            <div className=''>

            </div>
        </div>
    </div>
  )
}

export default Hero