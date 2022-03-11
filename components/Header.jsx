import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const Header = () => {
  return (
    <div className='bg-gray-700 flex items-center justify-between w-full bg-opacity-50 sticky top-0 z-50'>
        <img src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/themes/streamit-theme/assets/images/logo.png" 
        className='h-12 m-4  '
        alt="logo" />
        <IoMdSearch fontSize={30} className='text-white cursor-pointer mr-4' />
    </div>
  )
}

export default Header