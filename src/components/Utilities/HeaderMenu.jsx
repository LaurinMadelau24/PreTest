import React from 'react'

const HeaderMenu = ({title}) => {
  return (
    <>
    <div className='p-6 '>
        <div className='font-bold text-white text-2xl text-center'>
        {title}
        </div>
        </div>
        </>
  )
}

export default HeaderMenu