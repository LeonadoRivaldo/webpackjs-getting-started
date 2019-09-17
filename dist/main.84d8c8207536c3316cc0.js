(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "20M+":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "CZyG");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "9U4M":
/*!***************************!*\
  !*** ./src/guide-list.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuideList; });
/* harmony import */ var _guides_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guides.json */ "G2hN");
var _guides_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./guides.json */ "G2hN", 1);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.js */ "DtcT");



function GuideList(){
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
        const guidetitle = Object(_html_js__WEBPACK_IMPORTED_MODULE_1__["creatElement"])('h3');
        guidetitle.innerHTML = "Guides";
        return guidetitle;
    }
    function _buildGuideList(){
        const guidlist = Object(_html_js__WEBPACK_IMPORTED_MODULE_1__["creatElement"])('ul', {id:'guide-list'});
        return guidlist;
    }
    function _buildList(){
        var list = document.getElementById("guide-list");
        _guides_json__WEBPACK_IMPORTED_MODULE_0__.forEach( guide => list.appendChild(_appendDoneGuide(guide)) );
    }

    function buildList(elementToAppend){
        elementToAppend.appendChild(_buildTitle());
        elementToAppend.appendChild(_buildGuideList());
        _buildList();
    }

    return { buildList };
}

/***/ }),

/***/ "CZyG":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "HeW1");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./UbuntuMono-Regular.ttf */ "P2dY"));
// Module
exports.push([module.i, "@font-face {\r\n  font-family: \"Ubuntu Mono Regular\";\r\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"ttf\");\r\n  font-style: normal;\r\n}\r\n\r\n\r\n*{\r\n    font-family: 'Ubuntu Mono Regular', sans-serif;\r\n}\r\n\r\n.todo {\r\n  color: red;\r\n}\r\n.hello {\r\n  color: purple;\r\n}\r\n\r\n.done {\r\n  color: green;\r\n}\r\n\r\n.doing {\r\n  color: blue;\r\n}\r\n", ""]);


/***/ }),

/***/ "DtcT":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! exports provided: creatElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creatElement", function() { return creatElement; });
function creatElement(tagname, opts){
    const elem = document.createElement(tagname);

    if(opts){
        const { classes, id } = opts;
        if(classes){
            classes.forEach(_class => {
                elem.classList.add(_class);
            });
        }

        if(id){
            elem.id = id;
        }
    }


    return elem;

}

/***/ }),

/***/ "G2hN":
/*!*************************!*\
  !*** ./src/guides.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"guide\":\"Getting Started\",\"done\":true},{\"guide\":\"Asset Management\",\"done\":true},{\"guide\":\"Output Management\",\"done\":true},{\"guide\":\"Development\",\"done\":true},{\"guide\":\"Code Splitting\",\"done\":true},{\"guide\":\"Caching\",\"done\":true},{\"guide\":\"Authoring Libraries\",\"done\":false,\"doing\":true},{\"guide\":\"Environment Variables\",\"done\":false},{\"guide\":\"Build Performance\",\"done\":false},{\"guide\":\"Content Security Policies\",\"done\":false},{\"guide\":\"Development - Vagrant\",\"done\":false},{\"guide\":\"Dependency Management\",\"done\":false},{\"guide\":\"Installation\",\"done\":false},{\"guide\":\"Scaffolding\",\"done\":false},{\"guide\":\"Hot Module Replacement\",\"done\":false},{\"guide\":\"Tree Shaking\",\"done\":false},{\"guide\":\"Production\",\"done\":false},{\"guide\":\"Lazy Loading\",\"done\":false},{\"guide\":\"Shimming\",\"done\":false},{\"guide\":\"TypeScript\",\"done\":false},{\"guide\":\"Progressive Web Application\",\"done\":false},{\"guide\":\"Public Path\",\"done\":false},{\"guide\":\"Integrations\",\"done\":false},{\"guide\":\"Advanced entry\",\"done\":false}]");

/***/ }),

/***/ "P2dY":
/*!************************************!*\
  !*** ./src/UbuntuMono-Regular.ttf ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e097b71641f2524e09820d9122b7e910.ttf";

/***/ }),

/***/ "Vtdi":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: HelloWorld, printButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorld", function() { return HelloWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printButton", function() { return printButton; });
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.png */ "v8HX");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "dSPy");





async function HelloWorld(){
    const element = document.createElement('h3');
    const { default: _ } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! lodash */ "LvDl", 7));

    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = _icon_png__WEBPACK_IMPORTED_MODULE_0___default.a;
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
    btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(null, 'Hello webpack!');
    return btn;
}





/***/ }),

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return print; });
function print(text) {
    console.log(text);
}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "20M+");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html.js */ "DtcT");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ "Vtdi");
/* harmony import */ var _guide_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guide-list.js */ "9U4M");
/** libs */


/** imports */





/** build html */
const apptag = Object(_html_js__WEBPACK_IMPORTED_MODULE_2__["creatElement"])('section', { id: 'app' });
document.body.prepend(apptag);

async function buildApp(){
    /** add elements */
    const appElement = document.getElementById('app');

    const hellowebpack = await Object(_main_js__WEBPACK_IMPORTED_MODULE_3__["HelloWorld"])();

    appElement.appendChild(hellowebpack);
    appElement.appendChild(Object(_main_js__WEBPACK_IMPORTED_MODULE_3__["printButton"])());

    /** Build list */
    const guide = new _guide_list_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    guide.buildList(appElement);
};

buildApp();

/***/ }),

/***/ "v8HX":
/*!**********************!*\
  !*** ./src/icon.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2c48a2af5aa65a675c0ed998703197ee.png";

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/MzhlZSIsIndlYnBhY2s6Ly8vLi9zcmMvZ3VpZGUtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VidW50dU1vbm8tUmVndWxhci50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbi5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsY0FBYyxtQkFBTyxDQUFDLGdFQUFxRDs7QUFFM0U7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUZBQXdFOztBQUU3RjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ007O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQVksUUFBUSxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlDQUFNO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQzs7Ozs7Ozs7Ozs7QUNsQ0EsMkJBQTJCLG1CQUFPLENBQUMsNERBQWdEO0FBQ25GO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLCtEQUFtRDtBQUN4RSxzQ0FBc0MsbUJBQU8sQ0FBQyxzQ0FBMEI7QUFDeEU7QUFDQSxjQUFjLFFBQVMsZUFBZSwyQ0FBMkMsaUVBQWlFLHlCQUF5QixLQUFLLGNBQWMsdURBQXVELEtBQUssZUFBZSxpQkFBaUIsS0FBSyxZQUFZLG9CQUFvQixLQUFLLGVBQWUsbUJBQW1CLEtBQUssZ0JBQWdCLGtCQUFrQixLQUFLOzs7Ozs7Ozs7Ozs7O0FDTGxaO0FBQUE7QUFBTztBQUNQOztBQUVBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0M7Ozs7QUFJL0I7QUFDQTtBQUNBLFdBQVcsYUFBYSxTQUFTLGdHQUFpRDs7QUFFbEY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdUI7O0FBRXZCO0FBQ29CO0FBQ3FCO0FBQ1c7QUFDWjs7QUFFeEM7QUFDQSxlQUFlLDZEQUFZLGFBQWEsWUFBWTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDJEQUFVOztBQUV6QztBQUNBLDJCQUEyQiw0REFBVzs7QUFFdEM7QUFDQSxzQkFBc0Isc0RBQVM7QUFDL0I7QUFDQTs7QUFFQSxXOzs7Ozs7Ozs7OztBQzNCQSxpQkFBaUIscUJBQXVCLDBDIiwiZmlsZSI6Im1haW4uODRkOGM4MjA3NTM2YzMzMTZjYzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IEd1aWRlcyBmcm9tICcuL2d1aWRlcy5qc29uJztcclxuaW1wb3J0IHsgY3JlYXRFbGVtZW50IH0gZnJvbSAnLi9odG1sLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEd1aWRlTGlzdCgpe1xyXG4gICAgZnVuY3Rpb24gX2FwcGVuZERvbmVHdWlkZShndWlkZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBndWlkZS5ndWlkZVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggZ3VpZGUuZG9uZSA/ICdkb25lJyA6ICd0b2RvJyApO1xyXG4gICAgICAgIGlmKCBndWlkZS5kb2luZyApe1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdkb2luZycgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfYnVpbGRUaXRsZSgpe1xyXG4gICAgICAgIGNvbnN0IGd1aWRldGl0bGUgPSBjcmVhdEVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgZ3VpZGV0aXRsZS5pbm5lckhUTUwgPSBcIkd1aWRlc1wiO1xyXG4gICAgICAgIHJldHVybiBndWlkZXRpdGxlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2J1aWxkR3VpZGVMaXN0KCl7XHJcbiAgICAgICAgY29uc3QgZ3VpZGxpc3QgPSBjcmVhdEVsZW1lbnQoJ3VsJywge2lkOidndWlkZS1saXN0J30pO1xyXG4gICAgICAgIHJldHVybiBndWlkbGlzdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9idWlsZExpc3QoKXtcclxuICAgICAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3VpZGUtbGlzdFwiKTtcclxuICAgICAgICBHdWlkZXMuZm9yRWFjaCggZ3VpZGUgPT4gbGlzdC5hcHBlbmRDaGlsZChfYXBwZW5kRG9uZUd1aWRlKGd1aWRlKSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZExpc3QoZWxlbWVudFRvQXBwZW5kKXtcclxuICAgICAgICBlbGVtZW50VG9BcHBlbmQuYXBwZW5kQ2hpbGQoX2J1aWxkVGl0bGUoKSk7XHJcbiAgICAgICAgZWxlbWVudFRvQXBwZW5kLmFwcGVuZENoaWxkKF9idWlsZEd1aWRlTGlzdCgpKTtcclxuICAgICAgICBfYnVpbGRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgYnVpbGRMaXN0IH07XHJcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuL1VidW50dU1vbm8tUmVndWxhci50dGZcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1IE1vbm8gUmVndWxhclxcXCI7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dSBNb25vIFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4uaGVsbG8ge1xcclxcbiAgY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9pbmcge1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRFbGVtZW50KHRhZ25hbWUsIG9wdHMpe1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnbmFtZSk7XHJcblxyXG4gICAgaWYob3B0cyl7XHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzLCBpZCB9ID0gb3B0cztcclxuICAgICAgICBpZihjbGFzc2VzKXtcclxuICAgICAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKF9jbGFzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGVsZW0uaWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBlbGVtO1xyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUwOTdiNzE2NDFmMjUyNGUwOTgyMGQ5MTIyYjdlOTEwLnR0ZlwiOyIsImltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xyXG5pbXBvcnQgUHJpbnQgZnJvbSAnLi9wcmludC5qcyc7XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEhlbGxvV29ybGQoKXtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLyAnbG9kYXNoJyk7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XHJcblxyXG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBteUljb24uc3JjID0gSWNvbjtcclxuICAgIG15SWNvbi5zdHlsZS53aWR0aCA9ICc1MHB4JztcclxuICAgIG15SWNvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICcxMHB4JztcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuXHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHByaW50QnV0dG9uKCl7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XHJcbiAgICBidG4ub25jbGljayA9IFByaW50LmJpbmQobnVsbCwgJ0hlbGxvIHdlYnBhY2shJyk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IEhlbGxvV29ybGQsIHByaW50QnV0dG9uIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQodGV4dCkge1xyXG4gICAgY29uc29sZS5sb2codGV4dCk7XHJcbn0iLCIvKiogbGlicyAqL1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLyoqIGltcG9ydHMgKi9cclxuaW1wb3J0ICcuL21haW4uY3NzJztcclxuaW1wb3J0IHsgY3JlYXRFbGVtZW50IH0gZnJvbSAnLi9odG1sLmpzJztcclxuaW1wb3J0IHsgSGVsbG9Xb3JsZCwgcHJpbnRCdXR0b24gfSBmcm9tICcuL21haW4uanMnO1xyXG5pbXBvcnQgR3VpZGVMaXN0IGZyb20gJy4vZ3VpZGUtbGlzdC5qcyc7XHJcblxyXG4vKiogYnVpbGQgaHRtbCAqL1xyXG5jb25zdCBhcHB0YWcgPSBjcmVhdEVsZW1lbnQoJ3NlY3Rpb24nLCB7IGlkOiAnYXBwJyB9KTtcclxuZG9jdW1lbnQuYm9keS5wcmVwZW5kKGFwcHRhZyk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBidWlsZEFwcCgpe1xyXG4gICAgLyoqIGFkZCBlbGVtZW50cyAqL1xyXG4gICAgY29uc3QgYXBwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuXHJcbiAgICBjb25zdCBoZWxsb3dlYnBhY2sgPSBhd2FpdCBIZWxsb1dvcmxkKCk7XHJcblxyXG4gICAgYXBwRWxlbWVudC5hcHBlbmRDaGlsZChoZWxsb3dlYnBhY2spO1xyXG4gICAgYXBwRWxlbWVudC5hcHBlbmRDaGlsZChwcmludEJ1dHRvbigpKTtcclxuXHJcbiAgICAvKiogQnVpbGQgbGlzdCAqL1xyXG4gICAgY29uc3QgZ3VpZGUgPSBuZXcgR3VpZGVMaXN0KCk7XHJcbiAgICBndWlkZS5idWlsZExpc3QoYXBwRWxlbWVudCk7XHJcbn07XHJcblxyXG5idWlsZEFwcCgpOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJjNDhhMmFmNWFhNjVhNjc1YzBlZDk5ODcwMzE5N2VlLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=