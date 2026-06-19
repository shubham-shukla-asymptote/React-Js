import { useState } from 'react'
import Card from './components/card.jsx';

let messi={
  name:"lionel Messi",
  profession:"Footballer"
}
function App() {
  return (
    <>
    <Card 
    name='Lionel Messi'
    proffesion="footballer" 
    intro={messi}/>
    <Card
    name="Naymar"
    profession="footballer"/>
    
    
    </>
  );
}



export default App
