# React-Js
### What is the drawbacks in javascript so that we have to introduce frameworks like react+create-react-app and react+vite??
- for every update in javascript we have to manually change the DOM
```javascript
const countElement = document.getElementById("count");
countElement.textContent = count + 1;
```
- let assume we have 100 components then there are so difficult to track the dom update this large application 
- In react
```javascript
function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```
- as soon as state change the UI also udates automatically


- code Reusability 
``` javascript
// in javascript
<div class="card">
  <h2>Tea</h2>
</div>

<div class="card">
  <h2>Coffee</h2>
</div>

// in react 
function card({title}){
    return <h2>{title}</h2>
}
```
 ### why we use devlopment tool like vite and many other?
 - they setup the react projects
 although you can use react without devlopment tool but you have to setup  project manually it includes
   - webpack
   - babel
   - dev server
   - hot reloading
- devlopment tool does all that automatically 


### Drawbacks of CRA(create react app)
- drawbacks
   - slow startup
   - slow rebuild
   - heavy webpack configurations
- all that drawbacks reduce by the vite so it is popular in modern time   


### Babel
- Converts modern JS to browser-compatible JS

## redux
- it is a state management library
- Redux is a predictable state container for JavaScript applications, often used with libraries like React, Angular, or Vue to manage complex application state in a centralized and maintainable way.
-  It ensures that the state of your app behaves consistently, is easy to debug, and can be reproduced by replaying the same sequence of actions.
- if you want to use redux in react then you also need react-redux which linked react and redux

### At its core, Redux follows three fundamental principles
 - Single Source of Truth:The entire application state is stored in a single object tree inside one store.
 - State is Read-Only:The only way to change the state is by dispatching actions, which are plain JavaScript objects describing what happened.
 - what happened.

-Changes via Pure Reducers – Reducers are pure functions that take the current state and an action, then return a new state without mutating the original.

