/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4:
/***/ ((module) => {

module.exports = eval("require")("@graphql-tools/load-files");


/***/ }),

/***/ 340:
/***/ ((module) => {

module.exports = eval("require")("@graphql-tools/merge");


/***/ }),

/***/ 807:
/***/ ((module) => {

module.exports = eval("require")("graphql");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const { loadFilesSync } = __nccwpck_require__(4)
const { mergeTypeDefs } = __nccwpck_require__(340)
const { print } = __nccwpck_require__(807)
const fs = __nccwpck_require__(147)

async function run() {
    const loadedFiles = loadFilesSync(`C:/Users/Staud/IdeaProjects/auth-service/src/main/resources/graphql/public/**/*.graphqls`)
    const typeDefs = mergeTypeDefs(loadedFiles)
    const printedTypeDefs = print(typeDefs)
    fs.writeFileSync('joined.graphql', printedTypeDefs)
}

run();

})();

module.exports = __webpack_exports__;
/******/ })()
;