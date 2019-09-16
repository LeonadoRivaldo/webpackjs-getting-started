import './main.css';

import _ from 'lodash';


function HelloWorld(){
    const element = document.createElement('h3');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}


document.body.appendChild(HelloWorld());

var guides = [
    { guide: "Getting Started", done:true },
    { guide: "Asset Management", done:false, doing: true },
    { guide: "Output Management", done:false },
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
