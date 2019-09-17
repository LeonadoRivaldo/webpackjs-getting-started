/** libs */
import _ from 'lodash';

/** imports */
import './main.css';
import { creatElement } from './html.js';
import { HelloWorld, printButton } from './main.js';
import GuideList from './guide-list.js';

/** build html */
const apptag = creatElement('section', { id: 'app' });
document.body.appendChild(apptag);

async function buildApp(){
/** add elements */
const appElement = document.getElementById('app');

const hellowebpack = await HelloWorld();

document.body.appendChild(hellowebpack);
appElement.appendChild(printButton());

/** Build list */
const guide = new GuideList();
guide.buildList(appElement);
};

buildApp();