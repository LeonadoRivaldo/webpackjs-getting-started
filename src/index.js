import _ from 'lodash';

function HelloWorld(){
    const element = document.createElement('h3');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}


document.body.appendChild(HelloWorld());