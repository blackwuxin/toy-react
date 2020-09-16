/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar _require = __webpack_require__(/*! ./toy-react */ \"./toy-react.js\"),\n    render = _require.render,\n    Component = _require.Component,\n    createElement = _require.createElement;\n\nvar MyComponent = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent, _Component);\n\n  var _super = _createSuper(MyComponent);\n\n  function MyComponent() {\n    var _this;\n\n    _classCallCheck(this, MyComponent);\n\n    _this = _super.call(this);\n    _this.state = {\n      a: 1,\n      b: 1\n    };\n    return _this;\n  }\n\n  _createClass(MyComponent, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return createElement(\"div\", null, createElement(\"h1\", null, \"MyComponent\"), createElement(\"button\", {\n        onclick: function onclick() {\n          _this2.state.a++;\n\n          _this2.rerender();\n        }\n      }, \"add\"), this.state.a.toString(), this.state.b.toString());\n    }\n  }]);\n\n  return MyComponent;\n}(Component);\n\nrender(createElement(MyComponent, {\n  \"class\": \"a\",\n  id: \"b\"\n}, createElement(\"div\", null, \"123\"), createElement(\"div\", null)), document.body);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js):\\nSyntaxError: /Users/johnnywu/workspace/toy-react/toy-react.js: Unexpected token, expected \\\";\\\" (49:61)\\n\\n\\u001b[0m \\u001b[90m 47 | \\u001b[39m    appendChild(component){\\u001b[0m\\n\\u001b[0m \\u001b[90m 48 | \\u001b[39m        let range \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mcreateRange()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 49 | \\u001b[39m        range\\u001b[33m.\\u001b[39msetStart(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mroot\\u001b[33m,\\u001b[39m\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mroot\\u001b[33m.\\u001b[39mchildNodes\\u001b[33m.\\u001b[39mlength))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                                             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 50 | \\u001b[39m        range\\u001b[33m.\\u001b[39msetEnd(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mroot\\u001b[33m,\\u001b[39m\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mroot\\u001b[33m.\\u001b[39mchildNodes\\u001b[33m.\\u001b[39mlength)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 51 | \\u001b[39m        range\\u001b[33m.\\u001b[39mdeleteContents()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 52 | \\u001b[39m        component[\\u001b[33mRENDER_TO_DOM\\u001b[39m](range)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:766:17)\\n    at Object.raiseWithData (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:759:17)\\n    at Object.raise (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:753:17)\\n    at Object.unexpected (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:8966:16)\\n    at Object.semicolon (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:8948:40)\\n    at Object.parseExpressionStatement (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11971:10)\\n    at Object.parseStatementContent (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11567:19)\\n    at Object.parseStatement (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11431:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12013:25)\\n    at Object.parseBlockBody (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11999:10)\\n    at Object.parseBlock (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11983:10)\\n    at Object.parseFunctionBody (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:10963:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:10946:10)\\n    at Object.parseMethod (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:10883:10)\\n    at Object.pushClassMethod (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12430:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12347:12)\\n    at Object.parseClassMember (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12289:10)\\n    at /Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12241:14\\n    at Object.withTopicForbiddingContext (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11272:14)\\n    at Object.parseClassBody (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12218:10)\\n    at Object.parseClass (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12193:22)\\n    at Object.parseStatementContent (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11473:21)\\n    at Object.parseStatement (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11431:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:12013:25)\\n    at Object.parseBlockBody (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11999:10)\\n    at Object.parseTopLevel (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:11362:10)\\n    at Object.parse (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:13045:10)\\n    at parse (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_parser@7.11.5@@babel/parser/lib/index.js:13098:38)\\n    at parser (/Users/johnnywu/workspace/toy-react/node_modules/_@babel_core@7.11.6@@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\");\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });