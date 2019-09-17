import Guides from './guides.json';
import { creatElement } from './html.js';

export default function GuideList(){
    function _appendDoneGuide(guide){
        const element = document.createElement('li');
        element.innerHTML = guide.guide
        element.classList.add( guide.done ? 'done' : 'todo' );
        if( guide.doing ){
            element.classList.add( 'doing' );
        }
        return element;
    }
    function _buildTitle(){
        const guidetitle = creatElement('h3');
        guidetitle.innerHTML = "Guides";
        return guidetitle;
    }
    function _buildGuideList(){
        const guidlist = creatElement('ul', {id:'guide-list'});
        return guidlist;
    }
    function _buildList(){
        var list = document.getElementById("guide-list");
        Guides.forEach( guide => list.appendChild(_appendDoneGuide(guide)) );
    }

    function buildList(elementToAppend){
        elementToAppend.appendChild(_buildTitle());
        elementToAppend.appendChild(_buildGuideList());
        _buildList();
    }

    return { buildList };
}