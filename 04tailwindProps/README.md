## props 
- in react props(properties) used for transfering data from parent to child
- for Example
```Javascript
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        name="Lionel Messi"
        profession="Footballer"
      />

      <Card
        name="Virat Kohli"
        profession="Cricketer"
      />
    </>
  );
}

export default App;
```
- child
``` javascript
function Card(props) {// you can also write ans Card({name}) in the place of Card(props) and the you don't need to write props.name directly you write name
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
  );
}

export default Card;
```

### if you print the props value in card the it return an Object and you can use it in the card by .property for example props.name