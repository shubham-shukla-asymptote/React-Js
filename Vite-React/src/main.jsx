import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Shubh from './shubh.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shubh/>
  </StrictMode>,
)
