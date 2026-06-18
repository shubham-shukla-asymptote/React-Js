
function customRender(reactElement,root){
   /* const domElement=document.createElement(reactElement.reactTag)
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    domElement.innerHTML=reactElement.content
    root.appendChild(domElement)*/
    let domElement=document.createElement(reactElement.reactTag)
    domElement.innerHTML=reactElement.content

  for (const [key,value] of Object.entries(reactElement.props)) {
    if (!Object.hasOwn(reactElement.props, key)) continue;
    
    domElement.setAttribute(key,value);
    
    
  }
  root.appendChild(domElement)

}
let reactElement={
    reactTag:'a',
    props:{href:'https://www.google.com',
    target:"_blank",},
    content:"click here to visit Google"
}
let root=document.querySelector('#root');
customRender(reactElement,root)
