import React from 'react'

function ColorChange2(props) {
    const [color,setColor]=useState('olive')
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
        <div className='flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            test

        </div>
        


    </div>
  )
}

export default ColorChange2