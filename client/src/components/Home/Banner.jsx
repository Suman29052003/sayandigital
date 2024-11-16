// Import React and banner image asset
import React from 'react'
import banner from '../../assets/banners/banner.png'

// Banner component displays a full-width banner image
const Banner = () => {
  return (
    // Container div with full width and fixed height
    <div className='w-full h-auto my-10'>
      {/* Banner image with responsive sizing */}
      <img src={banner} alt="banner" className='w-full h-full object-contain' />
    </div>
  )
}

export default Banner
