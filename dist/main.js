/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functionality.js */ \"./src/modules/functionality.js\");\n/* harmony import */ var _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localstorage.js */ \"./src/modules/localstorage.js\");\n\n\n\n\nconst chores = document.querySelector('ul');\n\nconst printTasks = () => {\n  let list;\n  if (_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getData() === null) {\n    list = [];\n  } else {\n    list = _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getData();\n  }\n\n  let check = '';\n  let innertext = '';\n  list.forEach((work, i) => {\n    if (work.completed === false) {\n      check = '';\n    } else {\n      check = 'checked';\n    }\n    innertext += `\n      <li>\n      <div>\n      <input ${check} type=\"checkbox\" class=\"checkbox\" id=\"check${i}\">\n      <input type=\"text\" class=\"strikethrough\" id=\"task${i}\" value=\"${work.description}\">\n      </div>\n      <span id=\"removeTask${i}\" class=\"material-symbols-outlined\">delete</span>\n      </li>\n      `;\n  });\n\n  chores.innerHTML = innertext;\n\n  list.forEach((work, index) => {\n    const removeTask = document.getElementById(`removeTask${work.index}`);\n    if (removeTask) {\n      removeTask.addEventListener('click', () => {\n        _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(index);\n        printTasks();\n      });\n    }\n  });\n\n  list.forEach((work, index) => {\n    const newInput = document.getElementById(`task${work.index}`);\n    if (newInput) {\n      newInput.addEventListener(('keydown'), (event) => {\n        if (event.code === 'Enter') {\n          event.preventDefault();\n          _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editTask(newInput.value, index);\n          printTasks();\n\n          newInput.value = '';\n        }\n      });\n    }\n  });\n\n  list.forEach((work, index) => {\n    const checker = document.getElementById(`check${index}`);\n    checker.addEventListener('change', () => {\n      if (!(checker.checked)) {\n        _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UnmarkDone(index);\n      } else {\n        _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].markDone(index);\n      }\n      printTasks();\n    });\n  });\n};\n\nprintTasks();\n\nconst task = document.getElementById('task');\ntask.addEventListener(('keydown'), (event) => {\n  if (event.code === 'Enter') {\n    event.preventDefault();\n    _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addtask(task.value);\n    printTasks();\n\n    task.value = '';\n  }\n});\n\nconst clearCompleted = document.getElementById('clear_completed');\nclearCompleted.addEventListener('click', () => {\n  _modules_functionality_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCompletedtask();\n  printTasks();\n});\n\nconst refresh = document.querySelector('.refresh');\nrefresh.addEventListener('click', () => {\n  window.location.reload();\n  printTasks();\n});\n\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/functionality.js":
/*!**************************************!*\
  !*** ./src/modules/functionality.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ functions)\n/* harmony export */ });\n/* harmony import */ var _work_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work.js */ \"./src/modules/work.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n\n\n\nlet list;\nif (_localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData() === null) {\n  list = [];\n} else {\n  list = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData();\n}\nclass functions {\n    static addtask = (inputTask) => {\n      if (inputTask) {\n        const newtask = new _work_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inputTask);\n        list.push(newtask);\n        this.resetIndex();\n        _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData(list);\n      }\n    }\n\n    static removeTask = (index) => {\n      list = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData();\n      list.splice(index, 1);\n      this.resetIndex();\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData(list);\n    }\n\n    static editTask = (newDescription, index) => {\n      list = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData();\n      list[index].description = newDescription;\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData(list);\n    }\n\n    static markDone = (index) => {\n      list = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData();\n      list[index].completed = true;\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData(list);\n    }\n\n    static UnmarkDone = (index) => {\n      list = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData();\n      list[index].completed = false;\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData(list);\n    }\n\n    static resetIndex = () => {\n      list.forEach((item, number) => {\n        item.index = number;\n      });\n    }\n\n    static clearCompletedtask = () => {\n      list = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getData();\n      list = list.filter((task) => task.completed === false);\n      this.resetIndex();\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveData(list);\n    }\n}\n\n//# sourceURL=webpack://to_do_list/./src/modules/functionality.js?");

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\nclass LocalStorage {\n  static getData() {\n    return JSON.parse(localStorage.getItem('list'));\n  }\n\n  static saveData(list) {\n    localStorage.setItem('list', JSON.stringify(list));\n  }\n}\n\n//# sourceURL=webpack://to_do_list/./src/modules/localstorage.js?");

/***/ }),

/***/ "./src/modules/work.js":
/*!*****************************!*\
  !*** ./src/modules/work.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Work)\n/* harmony export */ });\nclass Work {\n  constructor(description) {\n    this.description = description;\n    this.completed = false;\n    this.index = 0;\n  }\n}\n\n//# sourceURL=webpack://to_do_list/./src/modules/work.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|   list-style-type: none;\\n| }\");\n\n//# sourceURL=webpack://to_do_list/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;