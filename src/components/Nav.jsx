import React from 'react'
import { ReactComponent as BunLogo } from '../assets/bun.svg'
import Image from '../assets/descarga.png'

const Nav = () => {
  return (
    <div className='w-full'>
        <nav className='flex h-20 text-white items-center justify-between m-auto'>
          <a href="/" className='flex gap-1 items-center'>
            <BunLogo className='w-10'/>
            <img src={Image} className="w-[4em] h-6" alt="bun lototipo" />
          </a>
          <ul>
              <li className="flex gap-4 text-lg font-semibold">
                  <a href="/" className='hover:underline'>docs</a>
                  <a href="/" className='hover:underline'>blog</a>
                  <a href="/" className='hover:underline'>discord</a>
                  <a href="/" className='hover:underline'>github</a>
              </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav