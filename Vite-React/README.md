# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## script in index.html
- in create react app tool don't add script file to index.html seperatly
- it's dependencies  provides us react-scripts which eject it aautomatically
- in vite tool add script file in index.html beacuse it have not react-script
- it is good practice that you use captial to name any file and component name always beacause you must have capital name component and if your file have not capital than you might confuse

# react Behind the scene
```javascript
const reactEl = (
  <div>
    <a href="https://www.google.com" target="_blank">
      Visit Google
    </a>
  </div>
);
```
- browser can't understand JSX 
- babel converts  JSX into javascript 
- for example with reference of above example
```javascript
const reactEl = React.createElement(
  "div",
  null,
  React.createElement(
    "a",
    {
      href: "https://www.google.com",
      target: "_blank"
    },
    "Visit Google"
  )
);

```


### React.createElement() return  js object called react element


## Virtual DOM 
- tree of Object
- when you write 
```javascript
ReactDOM.createRoot(root).render(reactEl);
```
- react vertual DOM ----> DOM Node


## Diffing 
- when any update occur react update  by diffing not destroy and again create


## hooks 
- Hooks are functions that let you "hook into" React state and lifecycle features from functional components.
- example 
  - useState
  - useEffect
  - useRef
  - useReducer


  ## FIBRE AND reconciliation
- Fiber is React's internal algorithm that decides what parts of the UI need to be updated and when they should be updated.
- Before Fiber, React processed the entire component tree in one go. If the tree was large, it could block the browser and make the UI feel slow or unresponsive.

  ### benefits of fibre
- Breaking Work into Smaller Chunks
- Priority-Based Updates
     - User typing highest priority
     - large File or list renderning low priority
- concurrent rendering:React can keep the typing experience smooth while performing heavy rendering work in the background.


  ### Fibre node
- Every component in a React application is represented by a Fiber object.

### Reconciliation
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
### Rendering Process in Fiber
- Render Phase
     - compare the old and new virtual dom 
     - calculate the required changes
     - can be paused resumed or intruppeted
- Commit Phase
     - applies the caluclated changes to real dom
     - cannot be intruppted
### some key points
- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

## state change-->rendor Phase-->calculate changes-->commit phase-->Dom update



## Diffing 
- when any update occur react update  by diffing not destroy and again create
- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique." 
- In React, keys are used to help React identify which items in a list have changed, been added, or been removed.

### [Documentation About Fibre](https://github.com/acdlite/react-fiber-architecture)
