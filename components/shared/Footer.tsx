import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
        <Image src="/assets/images/logo.svg" alt="Logo" width={138} height={38}/>
        </Link>
        <p>&copy; 2025 Evently. All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer
