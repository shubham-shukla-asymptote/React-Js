# [useCallback](https://react.dev/reference/react/useCallback)
- useCallback is a React Hook that lets you cache a function definition between re-renders
- React Compiler automatically memoizes values and functions, reducing the need for manual useCallback calls. You can use the compiler to handle memoization automatically.
 ### syntax
 ```javascript
 const cachedFn = useCallback(fn, dependencies)
 ```
 ### Memoization
 - Memoization ek optimization technique hai jisme hum kisi function ke result ko cache (store) kar lete hain, taki same input dobara aane par function ko fir se run na karna pade.

 ### returns
 - On the initial render, useCallback returns the fn function you have passed.

- During subsequent renders, it will either return an already stored fn function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.

### Caveats
- useCallback is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.




# [useState](https://react.dev/reference/react/useState)
- useState is a React Hook that lets you add a state variable to your component.
``` javascript
const [state, setState] = useState(initialState)
const [todos, setTodos] = useState(createInitialTodos());
```
- Call useState at the top level of your component to declare a state variable.
### returns
- useState returns an array with exactly two values:
  - The current state. During the first render, it will match the initialState you have passed
  - The set function that lets you update the state to a different value and trigger a re-render.
### caveats
- useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
-    if you pass a function as the initial state then it is treated as initializer func it uses one time on initial render but if you calling the function inside the useState then you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.
- you should only pass definition

### set function like setSomthing(nextState)
- The set function returned by useState lets you update the state to a different value and trigger a re-render. 
- You can pass the next state directly, or a function that calculates it from the previous state:
 ### Read parameter and return and caveats from above link UseState


 # [useMemo](https://www.youtube.com/watch?v=FxgM9k1rg0Q&t=16243s)


 # [useEffect](https://react.dev/reference/react/useEffect)


