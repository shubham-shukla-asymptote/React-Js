import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Shubh from './shubh.jsx'
function MyApp() {
  return (
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}
let react_element = {
  reactTag: 'a',
  props: {
    href: 'https://www.google.com',
    target: "_blank",
  },
  content: "click here to visit Google"
}// there will be the problem  of naming of object attributes there  might be other naming in render method so why this is not running
// function createEl(reactElement){
//   return reactElement

// }
// const reactEl = (
//   <a href="https://www.google.com" target="_blank">
//     visit Google
//   </a>
// ) // ise baabel object/function call main badlta hai

let anotherUser="chai aur react"
const reactElement=React.createElement(
  'a',
  {
    href:'https://www.google.com', // this type of the object create by Babel of any JSX we can pass directly it 
    target:'_blank'
  },
  'Click Me to Visit Google',
  anotherUser // variable injectiono

)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  
 
)
