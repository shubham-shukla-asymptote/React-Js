function App() {
  let username="shubham Shukla"
  function HandleClicked(){
    setCount(count+1);
    alert('you clicked me !')

  }
  function MyButton(){
    const [set, setCount]=useState(0)
  }

  return (
    <button type="button" onclick={handleClicked}>
      CLick  {count} times
    </button>
  )
}

export default App
