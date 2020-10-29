import * as THREE from "three";

// create a dom
const divElm = document.createElement("div");
divElm.id = "info";
divElm.innerText = "Description";
document.body.appendChild(divElm);

// append style
const cssText = `
  #info {
    position: absolute;
    top: 10px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display: block;
  }
`;
const styleElm = document.createElement("style");
styleElm.innerText = cssText;
document.head.appendChild(styleElm);

new THREE.TextGeometry();
