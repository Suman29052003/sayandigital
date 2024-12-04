import React from 'react'
import wpImg from '../../assets/icons/whatsapp-icon.png'

const WPButton = () => {
  return (
    <div className='w-full md:w-[30%] bg-[#44EF69] p-4 md:p-6 m-4 rounded-full flex items-center justify-center relative cursor-pointer'>
      <img src={wpImg} alt="" className="w-[40px] md:w-[56px] h-auto absolute left-0 m-3" />
      <span className="text-xl md:text-3xl font-bold text-white">Order Now!</span>
    </div>
  )
}

export default WPButton
