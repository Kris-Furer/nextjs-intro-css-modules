import React from 'react'
import Link from 'next/link'

function Header() {
  return (
      <>
    <div className='flex justify-between items-baseline'>
    <Link href='/'><a href=""><h1 className='text-3xl'>Southerly Creations</h1></a>
    </Link>
    
    <div>
    <Link href=""><a className='px-3' >About</a></Link>
    <Link href="/Gallery"><a className='px-3' >Gallery</a></Link>
    <Link href=""><a className='px-3' >Contact</a></Link>
    </div>
    </div>
      </>
  )
}

export default Header