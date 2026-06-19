import { useState } from 'react'
// import ColorBtn from '../components/ColorBtn'



function App() {
  const [color, setColor] = useState('olive')

  return (
    //   <div className='h-fit w-fit bg-gray-500 border border-black rounded-md m-2 '>
    // <ColorBtn color='red'/>
    // <ColorBtn color='green'/>
    //  <ColorBtn color='yellow'/>  
    // <ColorBtn color='gray'/>
    // <ColorBtn color='brown'/>
    // <ColorBtn color='blue'/>

    //   </div>
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md'>
          <button onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "red" }}>
            red
          </button>
          <button onClick={()=>setColor("orange")}
           className=' px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "orange" }}>
            Orange
          </button>
          <button onClick={()=>setColor("skyBlue")}
          className=' px-4 py-1 rounded-full shadow-lg text-black'
          style={{ backgroundColor: "skyBlue" }}>
          skyBlue
        </button>
        <button  onClick={()=>setColor("yellow")}
        className=' px-4 py-1 rounded-full shadow-lg text-black'
          style={{ backgroundColor: "yellow" }}>
        Yellow
        </button>

        <button onClick={()=>setColor("green")}
        className=' px-4 py-1 rounded-full shadow-lg text-black'
          style={{ backgroundColor: "green" }}>
          Green
        </button>

        </div>
      </div>



    </div>
  )
}

export default App
