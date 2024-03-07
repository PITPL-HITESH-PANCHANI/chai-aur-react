const mainContainer = document.getElementById("root");

const reactElement ={
  type:"a",
  props:{
    href:"http://google.com",
    target:"_blank"
  },
  children:"Click me to visit google"
};

function renderElement (reactElement,mainContainer){
 const domElement = document.createElement(reactElement.type);
 domElement.innerHTML = reactElement.children;

 for (const prop in reactElement.props) {
   domElement.setAttribute(prop,reactElement.props[prop])
 }



 mainContainer.appendChild(domElement)
}

renderElement(reactElement, mainContainer)