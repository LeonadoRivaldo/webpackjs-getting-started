import './main.css';
import Icon from './icon.png';
import printMe from './print.js';
import {creatElement} from './html.js';

import _ from 'lodash';


/** build html */
const apptag = creatElement('section', { id: 'app' });
const guidetitle = creatElement('h3');
guidetitle.innerHTML = "Guides";
const guidlist = creatElement('ul', {id:'guide-list'});
document.body.appendChild(apptag);
document.body.appendChild(guidetitle);
document.body.appendChild(guidlist);

const appElement = document.getElementById('app');

function HelloWorld(){
    const element = document.createElement('h3');
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
}
function printButton(){
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    return btn;
}

appElement.appendChild(HelloWorld());
appElement.appendChild(printButton());




var guides = [
    { guide: "Getting Started", done:true },
    { guide: "Asset Management", done:true },
    { guide: "Output Management", done:false, doing: true },
    { guide: "Development", done:false },
    { guide: "Code Splitting", done:false },
    { guide: "Caching", done:false },
    { guide: "Authoring Libraries", done:false },
    { guide: "Environment Variables", done:false },
    { guide: "Build Performance", done:false },
    { guide: "Content Security Policies", done:false },
    { guide: "Development - Vagrant", done:false },
    { guide: "Dependency Management", done:false },
    { guide: "Installation", done:false },
    { guide: "Scaffolding", done:false },
    { guide: "Hot Module Replacement", done:false },
    { guide: "Tree Shaking", done:false },
    { guide: "Production", done:false },
    { guide: "Lazy Loading", done:false },
    { guide: "Shimming", done:false },
    { guide: "TypeScript", done:false },
    { guide: "Progressive Web Application", done:false },
    { guide: "Public Path", done:false },
    { guide: "Integrations", done:false },
    { guide: "Advanced entry", done:false }
]
function appendDoneGuide(guide){
    const element = document.createElement('li');
    element.innerHTML = guide.guide
    element.classList.add( guide.done ? 'done' : 'todo' );
    if( guide.doing ){
        element.classList.add( 'doing' );
    }
    return element;
}
var list = document.getElementById("guide-list");
guides.forEach( guide => list.appendChild(appendDoneGuide(guide)) );
