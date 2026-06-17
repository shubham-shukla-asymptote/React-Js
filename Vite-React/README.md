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
- babel converts  JSX into javascript object
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