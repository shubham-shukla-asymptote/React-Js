import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  // useRef hook
  const passref=useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // extra char added
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "[]{})(*&^%$#@!~"

    // random password
    for (let i = 0; i < length; i++) {
      let random = Math.floor((Math.random() * (str.length)) + 1);
      pass += str.charAt(random)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])
  
  const copyPassToClipBoard=useCallback(()=>{
passref.current?.select();
// passref.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <h1 className='text-4xl text-center text-white py-10 shadow-lg'>
        Password Generator
      </h1>
      <div className=' text-xl  flex flex-col items-center justify-center bg-[#1F2F45] h-fit w-fit mx-auto p-4 rounded-md ' >
        <div>
          <input 
          type="text" 
          placeholder='Password' 
          value={password} 
          className='h-[5vh] bg-white w-[30vw] p-3 mt-3 mb-3 rounded-l-md'
          ref={passref}
          />
          <button 
          className='h-[5vh] text-black bg-blue-400 w-[5vw] mt-3 rounded-r-md'
          onClick={copyPassToClipBoard}>
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex text-center gap-x-2">
            <input type="range" min={6} max={100} value={length}
              className='cursorPointer'
              onChange={(e) => {
                setLength(Number(e.target.value))
              }} />
            <label className=" text-xl text-red-600"> length:{length} </label>
          </div>
          <div className="flex text-center gap-x-2">
            <input type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={(e) => {
                setnumAllowed(prev => !prev)

              }}
            />
            <label className=" text-xl text-red-600"> Numbers </label>
          </div>
          <div className="flex text-center gap-x-2">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => {
                setcharAllowed(prev => !prev)

              }}
            />
            <label className=" text-xl text-red-600"> Characters </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
