(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VMarkdownParse"] = factory();
	else
		root["VMarkdownParse"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "vmarkdown/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VMarkdown; });
const workerParse = __webpack_require__(1);

const find = __webpack_require__(4);

class VMarkdown {

    constructor(options) {
        const self = this;
        self.options = Object.assign({}, options);
        self.vast = null;
    }

    static async parse(markdown, options) {
        return await workerParse(markdown, options);
    }

    async process(markdown = '', options = {}) {
        const self = this;
        self.vast = await VMarkdown.parse(markdown, Object.assign({}, self.options, options));
        return self.vast;
    }

    findNode(position, options = {}) {
        return find(this.vast, position, Object.assign({}, {
            boundary: false,
            next: false,
            depth: 1,
        }, options));
    }

    static calCoverageRatio(position, firstVisibleLine) {
        let coverageRatio = 0;
        if( position && position.start.line < position.end.line) {
            const startLine = position.start.line;
            const endLine = position.end.line;
            const currentLine = firstVisibleLine<startLine?startLine:firstVisibleLine;
            const allLine = endLine - startLine + 1;
            coverageRatio = (currentLine-startLine)/allLine;
        }
        return coverageRatio;
    }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const PromiseWorker = __webpack_require__(2);
const Worker = __webpack_require__(3);
const worker = new Worker();
const promiseWorker = new PromiseWorker(worker);

module.exports = function parse(markdown, options) {
    return promiseWorker.postMessage({
        markdown: markdown,
        options: options
    });
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var messageIds = 0

function onMessage (self, e) {
  var message = e.data
  if (!Array.isArray(message) || message.length < 2) {
    // Ignore - this message is not for us.
    return
  }
  var messageId = message[0]
  var error = message[1]
  var result = message[2]

  var callback = self._callbacks[messageId]

  if (!callback) {
    // Ignore - user might have created multiple PromiseWorkers.
    // This message is not for us.
    return
  }

  delete self._callbacks[messageId]
  callback(error, result)
}

function PromiseWorker (worker) {
  var self = this
  self._worker = worker
  self._callbacks = {}

  worker.addEventListener('message', function (e) {
    onMessage(self, e)
  })
}

PromiseWorker.prototype.postMessage = function (userMessage) {
  var self = this
  var messageId = messageIds++

  var messageToSend = [messageId, userMessage]

  return new Promise(function (resolve, reject) {
    self._callbacks[messageId] = function (error, result) {
      if (error) {
        return reject(new Error(error.message))
      }
      resolve(result)
    }

    /* istanbul ignore if */
    if (typeof self._worker.controller !== 'undefined') {
      // service worker, use MessageChannels because e.source is broken in Chrome < 51:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=543198
      var channel = new MessageChannel()
      channel.port1.onmessage = function (e) {
        onMessage(self, e)
      }
      self._worker.controller.postMessage(messageToSend, [channel.port2])
    } else {
      // web worker
      self._worker.postMessage(messageToSend)
    }
  })
}

module.exports = PromiseWorker


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "vmarkdown.worker.js");
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// const findNode = require("./unist-find-node/index");
//
// function _findNode(root, position) {
//     let node = findNode(root, position);
//
//     if(!node || node.type === 'root') {
//         return null;
//     }
//
//     return node;
// }
//
//
// function findNodeByLine(root, line) {
//     let node = findNode(root, {line: line,column: 1});
//
//     if(!node || node.type === 'root') {
//         return null;
//     }
//
//     return node;
// }
//
// function findNodeFromLine(root, line, maxNum = 10) {
//
//     let node = findNode(root, {line: line,column: 1});
//
//     if(!root.position || !root.position.end) {
//         return null;
//     }
//
//     const lastLine = root.position.end.line;
//
//     if(!node || node.type === 'root') {
//         if(maxNum <=0 && line + 1 > lastLine) {
//             return null;
//         }
//         return findNodeFromLine(root, line + 1, maxNum - 1);
//     }
//
//     return node;
// }




function findNode(root, position, options = {}) {
    if(!root || !root.children || root.children.length === 0) return null;

    const children = root.children;

    for(let i=0;i<children.length;i++) {

        const node = children[i];

        if(!node.position || node.type === 'text' ) {
            continue;
        }

        if(

            (options.boundary && (i === children.length - 1) && (position.line > node.position.end.line))
            ||
            (
                (position.line <= node.position.end.line)
                &&
                ( options.next || position.line >= node.position.start.line )
            )
        ) {

            // if(options.depth === 1){
            //     return node;
            // }
            //
            // const depthNode = findNode(node, position, {
            //     depth: 1
            // });
            // return depthNode?depthNode:node;


            // const depthNode = findNode(node, position, options);
            // return depthNode?depthNode:node;



            return node;

        }


    }

    return null;

}

module.exports = findNode;

// module.exports = {
    // findNodeByLine: findNodeByLine,
    // findNodeFromLine: findNodeFromLine,
    // findNode: _findNode
// };


/***/ })
/******/ ])["default"];
});