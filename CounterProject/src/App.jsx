import { useState } from "react";
function App() {
  // const [count, setCount] = useState(0);
  // function HandleClicked() {
  //   setCount(count + 1);
  // }
  const [count, setCount] = useState(15)
  // let count=15
  function AddValue() {
    if(count==20) return;
    setCount(count + 1)

  }// is method se UI update nhi ho raha hai so this is not good while using react although we can do it from javascript but we are  using react now 
  function DecValue() {
    if(count==0) return;
    setCount(count - 1)

  }
  return (
    // <button class="button" onClick={HandleClicked}>
    //   Click  {count} times
    // </button>
    <div>
      <h1>Chai Aur React</h1>
      <h2>counter Value :{count}</h2>
      <br />
      <button onClick={AddValue}>Add Value {count}</button>
      <button onClick={DecValue}>Reduce Value {count}</button>

    </div>
  )
}

export default App
