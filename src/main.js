import Icon from './icon.png';
import printMe from './print.js';



async function HelloWorld(){
    const element = document.createElement('h3');
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.style.width = '50px';
    myIcon.style.marginRight = '10px';
    element.appendChild(myIcon);

    const span = document.createElement('span');
    span.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(span);

    return element;
};


function printButton(){
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    return btn;
}



export { HelloWorld, printButton };