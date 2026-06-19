import React from 'react'
import {useState} from 'react'

function ColorBtn(props) { 
   const [color,setColor]=useState('white');
    function handleClick(){
        console.log(props.color)
    document.body.style.backgroundColor=props.color
    }
  return (
    <button 
     onClick={handleClick}
     className='m-3 h-8 w-20  text-black border border-gray-400 rounded-md'
     style={{backgroundColor:props.color}}
     >{props.color}
     </button>
  )
}

export default ColorBtn