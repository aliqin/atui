(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueComponent"] = factory();
	else
		root["VueComponent"] = factory();
})(this, function() {
return webpackJsonp_name_([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(87);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Form = __webpack_require__(92);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Layout = __webpack_require__(99);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Button = __webpack_require__(110);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(114);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Searchbox = __webpack_require__(118);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);
	
	var _Uploader = __webpack_require__(123);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);
	
	var _Switch = __webpack_require__(127);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Dropdown = __webpack_require__(131);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Select = __webpack_require__(136);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Calendar = __webpack_require__(147);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _DatePicker = __webpack_require__(151);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _Typeahead = __webpack_require__(158);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Cascader = __webpack_require__(164);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _Message = __webpack_require__(168);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _Modal = __webpack_require__(173);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Table = __webpack_require__(190);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Badge = __webpack_require__(208);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Carousel = __webpack_require__(212);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Affix = __webpack_require__(248);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Spin = __webpack_require__(203);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	var _Textarea = __webpack_require__(253);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _Tag = __webpack_require__(139);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Tooltip = __webpack_require__(257);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Accordion = __webpack_require__(264);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Popover = __webpack_require__(273);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Tabs = __webpack_require__(279);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Steps = __webpack_require__(288);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Menu = __webpack_require__(295);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Breadcrumb = __webpack_require__(305);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Pagination = __webpack_require__(312);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _phoneNumber = __webpack_require__(326);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(327);
	__webpack_require__(328);
	__webpack_require__(329);
	// import Form from './components/Form.vue'
	
	// import Progressbar from './components/progressbar.vue'
	
	
	// 展示类
	
	// import Container from './components/Container.vue'
	
	
	// 导航类
	// import ffix from './components/affix.vue'
	// import side from './components/aside.vue'
	
	
	// filters
	
	
	//widgets
	// import AddressSelect from './widgets/AddressSelect/'
	
	var VueComponent = {
	  Layout: _Layout2.default,
	  Icon: _Icon2.default,
	  Form: _Form2.default,
	  Searchbox: _Searchbox2.default,
	  Uploader: _Uploader2.default,
	  Switch: _Switch2.default,
	  Dropdown: _Dropdown2.default,
	  Select: _Select2.default,
	  Calendar: _Calendar2.default,
	  DatePicker: _DatePicker2.default,
	  Typeahead: _Typeahead2.default,
	  Message: _Message2.default,
	  Cascader: _Cascader2.default,
	  Modal: _Modal2.default,
	  Table: _Table2.default,
	  Badge: _Badge2.default,
	  Carousel: _Carousel2.default,
	  Affix: _Affix2.default,
	  Spin: _Spin2.default,
	  Textarea: _Textarea2.default,
	  Input: _Input2.default,
	  Button: _Button2.default,
	  Tag: _Tag2.default,
	  Tooltip: _Tooltip2.default,
	  Accordion: _Accordion2.default,
	  Popover: _Popover2.default,
	  Tabs: _Tabs2.default,
	  Steps: _Steps2.default,
	  Menu: _Menu2.default,
	  Breadcrumb: _Breadcrumb2.default,
	  Pagination: _Pagination2.default
	};
	
	module.exports = VueComponent;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(89);
	
	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Icon2.default;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(90)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Icon/Icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(91)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Icon/Icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <i :class="['iconfont','icon-' + type]" :style="{ fontSize: size + 'px',color:color }">
	//   <slot></slot>
	// </i>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'icon',
	  props: {
	    type: {
	      type: String,
	      require: true
	    },
	    size: {
	      type: String,
	      default: '14'
	    },
	    color: {
	      type: String
	    }
	  }
	};

	// </script>

	/* generated by vue-loader */

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"['iconfont','icon-' + type]\" :style=\"{ fontSize: size + 'px',color:color }\">\n  <slot></slot>\n</i>\n";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Form = __webpack_require__(93);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormItem = __webpack_require__(107);
	
	var _FormItem2 = _interopRequireDefault(_FormItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Form2.default.FormItem = _FormItem2.default;
	
	exports.default = _Form2.default;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(94)
	__vue_script__ = __webpack_require__(98)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/Form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(106)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Form/Form.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Form.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Form.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-horizontal {}\n.form-vertical {}\n", "", {"version":3,"sources":["/./src/components/Form/Form.vue?50452d57"],"names":[],"mappings":";AAQA,mBAAA;AACA,iBAAA","file":"Form.vue","sourcesContent":["<template>\n  <form class=\"form\" :class=\"classObj\">\n    <v-row>\n      <slot></slot>\n    </v-row>\n  </form>\n</template>\n<style>\n.form-horizontal {}\n.form-vertical {}\n</style>\n<script>\n  import Layout from 'src/components/Layout/';\n  const vRow = Layout.Row;\n  export default {\n    props: {\n      //表单元素排列方式，有纵向和横向两种 horizontal、vertical\n      horizontal: null,\n      vertical: null\n    },\n\n    data () {\n      return {\n        classObj: {\n          'form-horizontal' : typeof(this.horizontal) !== 'undefined',\n          'form-vertical': typeof(this.vertical) !== 'undefined'\n        }\n      }\n    },\n\n    components: {\n      vRow\n    }\n  }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 96 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(99);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vRow = _Layout2.default.Row; // <template>
	//   <form class="form" :class="classObj">
	//     <v-row>
	//       <slot></slot>
	//     </v-row>
	//   </form>
	// </template>
	// <style>
	// .form-horizontal {}
	// .form-vertical {}
	// </style>
	// <script>
	
	exports.default = {
	  props: {
	    //表单元素排列方式，有纵向和横向两种 horizontal、vertical
	    horizontal: null,
	    vertical: null
	  },
	
	  data: function data() {
	    return {
	      classObj: {
	        'form-horizontal': typeof this.horizontal !== 'undefined',
	        'form-vertical': typeof this.vertical !== 'undefined'
	      }
	    };
	  },
	
	
	  components: {
	    vRow: vRow
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Row = __webpack_require__(100);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(103);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { Row: _Row2.default, Col: _Col2.default };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(101)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Layout/Row.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="row"><slot></slot></div>
	// </template>
	//
	// <script>
	exports.default = {
		props: {},
		style: {
			type: String
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\"><slot></slot></div>\n";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(104)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Layout/Col.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="className"><slot></slot></div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    span: {
	      type: String,
	      default: '1'
	    },
	    type: {
	      type: String,
	      default: 'lg'
	    }
	  },
	  data: function data() {
	    return {
	      className: ['col', this.type, this.span].join('-')
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"className\"><slot></slot></div>\n";

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "\n<form class=\"form\" :class=\"classObj\">\n  <v-row>\n    <slot></slot>\n  </v-row>\n</form>\n";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(108)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/FormItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(109)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Form/FormItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(99);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="form-item" :class="classObj">
	//   <v-col :span="labelCol">
	//     <label v-if="label" class="form-label">
	//       <span v-if="isRequired" class="required-icon">*</span>
	//       {{label}}
	//     </label>
	//   </v-col>
	//   <v-col :span="wrapperCol || calcWrapperCol">
	//     <div class="form-input">
	//       <slot></slot>
	//       <template v-if="showIcon">
	//         <icon class="status-icon" v-if="validStatus == 'warn'" type="waring"></icon>
	//         <icon class="status-icon" v-if="validStatus == 'error'" type="error"></icon>
	//         <icon class="status-icon" v-if="validStatus == 'success'" type="success"></icon>
	//         <icon class="status-icon" v-if="validStatus == 'help'" type="help"></icon>
	//       </template>
	//     </div>
	//     <div v-if="tips && validStatus" class="status-info">{{tips}}</div>
	//   </v-col>
	// </div>
	// </template>
	// <script>
	
	var vCol = _Layout2.default.Col;
	exports.default = {
	  props: {
	    label: String,
	    itemCol: {
	      type: String,
	      default: '24'
	    },
	    labelCol: {
	      type: String,
	      default: '7'
	    },
	    wrapperCol: {
	      type: String,
	      default: ''
	    },
	    //是否必填
	    required: null,
	    //提示信息，如不设置，会根据验证规则自动生成
	    tips: {
	      type: String,
	      default: ''
	    },
	    //验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
	    validStatus: {
	      type: String,
	      default: ''
	    },
	    //配合validateStatus属性使用，是否展示校验状态图标
	    hasIcon: null
	  },
	
	  computed: {
	    classObj: function classObj() {
	      var obj = {
	        'form-item-with-help': this.validStatus,
	        'has-error': this.validStatus == 'error',
	        'has-success': this.validStatus == 'success'
	      };
	
	      obj['col-lg-' + this.itemCol] = true;
	
	      return obj;
	    },
	    isRequired: function isRequired() {
	      return typeof this.required !== 'undefined';
	    },
	    showIcon: function showIcon() {
	      return this.validStatus && typeof this.hasIcon !== 'undefined';
	    },
	    calcWrapperCol: function calcWrapperCol() {
	      var span = new Number(24 - this.labelCol);
	      return span.toString();
	    }
	  },
	
	  components: {
	    vCol: vCol,
	    Icon: _Icon2.default
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"form-item\" :class=\"classObj\">\n  <v-col :span=\"labelCol\">\n    <label v-if=\"label\" class=\"form-label\">\n      <span v-if=\"isRequired\" class=\"required-icon\">*</span>\n      {{label}}\n    </label>\n  </v-col>\n  <v-col :span=\"wrapperCol || calcWrapperCol\">\n    <div class=\"form-input\">\n      <slot></slot>\n      <template v-if=\"showIcon\">\n        <icon class=\"status-icon\" v-if=\"validStatus == 'warn'\" type=\"waring\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'error'\" type=\"error\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'success'\" type=\"success\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'help'\" type=\"help\"></icon>\n      </template>\n    </div>\n    <div v-if=\"tips && validStatus\" class=\"status-info\">{{tips}}</div>\n  </v-col>\n</div>\n";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(111);
	
	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Button2.default;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(112)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Button/Button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(113)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Button/Button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <button type="{{type}}" class="btn" :class="btnClassObj">
	//     <slot>{{value}}</slot>
	//   </button>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'button'
	    },
	    large: null,
	    small: null,
	    value: {
	      type: String,
	      default: ''
	    },
	    primary: null,
	    secondary: null,
	    tertiary: null,
	    text: null
	  },
	  computed: {
	    btnClassObj: function btnClassObj() {
	      return {
	        'large': typeof this.large !== "undefined",
	        'small': typeof this.small !== "undefined",
	        'primary': typeof this.primary !== "undefined",
	        'secondary': typeof this.secondary !== "undefined",
	        'tertiary': typeof this.tertiary !== "undefined",
	        'text': typeof this.text !== "undefined"
	      };
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "\n<button type=\"{{type}}\" class=\"btn\" :class=\"btnClassObj\">\n  <slot>{{value}}</slot>\n</button>\n";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(115);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Input/Input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Input/Input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <input type="{{type}}" class="input" :class="classObj" placeholder="{{placeholder}}" v-model="value" :valid-status.sync="validStatus" maxlength="{{maxlength}}" />
	// </template>
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'text'
	    },
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    large: null,
	    small: null,
	    value: {
	      type: String,
	      default: ''
	    },
	    //是否必填
	    required: {
	      type: Boolean,
	      default: false
	    },
	    requiredTips: String,
	    maxlength: String,
	    minlength: String,
	    minlengthTips: String,
	    //验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
	    validStatus: {
	      type: String,
	      default: ''
	    },
	    //验证规则
	    rules: {
	      type: Array
	    },
	    validResult: {
	      type: Object,
	      default: function _default() {
	        return {
	          requiredValid: {
	            validStatus: 'success',
	            tips: ''
	          },
	          minlengthValid: {
	            validStatus: 'success',
	            tips: ''
	          },
	          isNumberValid: {
	            validStatus: 'success',
	            tips: ''
	          },
	          isTelValid: {
	            validStatus: 'success',
	            tips: ''
	          },
	          isEmailValid: {
	            validStatus: 'success',
	            tips: ''
	          }
	        };
	      }
	    },
	    tips: {
	      type: String,
	      default: ''
	    }
	  },
	
	  data: function data() {
	    return {
	      results: {
	        requiredValid: {
	          validStatus: 'success',
	          tips: ''
	        },
	        minlengthValid: {
	          validStatus: 'success',
	          tips: ''
	        },
	        isPhoneValid: {
	          validStatus: 'success',
	          tips: ''
	        },
	        isNumberValid: {
	          validStatus: 'success',
	          tips: ''
	        },
	        isTelValid: {
	          validStatus: 'success',
	          tips: ''
	        },
	        isEmailValid: {
	          validStatus: 'success',
	          tips: ''
	        }
	      }
	    };
	  },
	
	
	  computed: {
	    classObj: function classObj() {
	      return {
	        'large': typeof this.large !== "undefined",
	        'small': typeof this.small !== "undefined",
	        'error': this.validStatus == 'error',
	        'success': this.validStatus == 'success',
	        'warn': this.validStatus == 'warn'
	      };
	    }
	  },
	
	  watch: {
	    value: function value(newVal, oldVal) {
	      if (this.validResult) {
	        this.valid(newVal);
	      }
	    },
	
	
	    results: {
	      handler: function handler(val, oldVal) {
	        var self = this;
	        var tips = '';
	        var status = '';
	        for (var key in val) {
	          var obj = val[key];
	          if (obj) {
	            tips += obj.tips + '  ';
	
	            if (obj.validStatus !== 'success') {
	              status = 'error';
	            }
	          }
	        }
	
	        self.validStatus = status;
	        self.tips = tips;
	        self.validResult = self.results;
	      },
	      deep: true
	    }
	  },
	
	  methods: {
	    valid: function valid(val) {
	      if (typeof this.required !== "undefined") {
	        this.requiredValid(val);
	      }
	
	      if (this.minlength) {
	        this.minlengthValid(val);
	      }
	
	      if (this.rules) {
	        this.rulesValid(val);
	      }
	    },
	    rulesItemValid: function rulesItemValid(rule, value) {
	      var self = this;
	
	      switch (rule) {
	        case 'required':
	          self.requiredValid(value);
	        case 'isPhone':
	          self.phoneValid(value);
	          break;
	        case 'isNumber':
	          self.numberValid(value);
	          break;
	        case 'isTelephone':
	          self.telValid(value);
	          break;
	        case 'isEmail':
	          self.emailValid(value);
	          break;
	      }
	    },
	    requiredValid: function requiredValid(val) {
	      var self = this;
	
	      self.results = self.results || {};
	
	      if (!val) {
	        self.results.requiredValid = {
	          validStatus: 'error',
	          tips: self.requiredTips || '输入不能为空'
	        };
	      } else {
	        self.results.requiredValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      }
	    },
	    minlengthValid: function minlengthValid(val) {
	      var self = this;
	      var minlength = self.minlength - 0;
	
	      self.results = self.results || {};
	
	      if (val) {
	        var len = val.length;
	
	        if (val.length < minlength) {
	          self.results.minlengthValid = {
	            validStatus: 'error',
	            tips: self.minlengthTips || '输入字符数不能小于' + len
	          };
	        } else {
	          self.results.minlengthValid = {
	            validStatus: 'success',
	            tips: ''
	          };
	        }
	      }
	    },
	    rulesValid: function rulesValid(value) {
	      var self = this;
	
	      self.rules.forEach(function (val, index) {
	        debugger;
	        self.rulesItemValid(val, value);
	      });
	    },
	    phoneValid: function phoneValid(value) {
	      var rule = /^1\d{10}$/;
	
	      if (rule.test(value) || value == '') {
	        this.results.isPhoneValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        this.results.isPhoneValid = {
	          validStatus: 'error',
	          tips: this.isPhoneValidTips || '输入手机号码格式错误'
	        };
	      }
	    },
	    numberValid: function numberValid(value) {
	      var rule = /^\d*$/;
	
	      if (rule.test(value) || value == '') {
	        this.results.isNumberValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        this.results.isNumberValid = {
	          validStatus: 'error',
	          tips: this.isPhoneValidTips || '数字验证失败'
	        };
	      }
	    },
	    telValid: function telValid(value) {
	      var rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
	
	      if (rule.test(value) || value == '') {
	        this.results.isTelValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        this.results.isTelValid = {
	          validStatus: 'error',
	          tips: this.isPhoneValidTips || '输入固话格式错误，固话请用-'
	        };
	      }
	    },
	    emailValid: function emailValid(value) {
	      var rule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	
	      if (rule.test(value) || value == '') {
	        this.results.isEmailValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        this.results.isEmailValid = {
	          validStatus: 'error',
	          tips: this.isPhoneValidTips || '输入email格式错误'
	        };
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\n<input type=\"{{type}}\" class=\"input\" :class=\"classObj\" placeholder=\"{{placeholder}}\" v-model=\"value\" :valid-status.sync=\"validStatus\" maxlength=\"{{maxlength}}\" />\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Searchbox = __webpack_require__(119);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Searchbox2.default;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Searchbox/Searchbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(122)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Searchbox/Searchbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="search-box">
	//     <input type="text" class="input" :class="classObj" :placeholder="placeholder" v-model="value" @focus="focusInput" debounce="500" />
	//     <icon type="search" :color="iconColor" size="14"></icon>
	//     <div v-if="searchList && searchList.length > 0" class="search-list-containter">
	//       <ul class="list-dropdown" v-show="showPop">
	//         <li v-for="item in searchList | filterBy value">
	//           <a href="javascript:;" @click="checkItem($index, item[textField])" title="{{item[textField]}}">{{item[textField]}}</a>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    notFoundContent: {
	      type: String,
	      default: ''
	    },
	    value: {
	      type: String,
	      default: ''
	    },
	    searchList: null,
	    large: null,
	    small: null,
	    textField: {
	      type: String,
	      default: 'name'
	    },
	    filterField: {
	      type: Array
	    }
	  },
	  data: function data() {
	    return {
	      iconColor: '#BFBFBF',
	      showPop: false
	    };
	  },
	
	  computed: {
	    classObj: function classObj() {
	      return {
	        'large': typeof this.large !== "undefined",
	        'small': typeof this.small !== "undefined"
	      };
	    },
	    filterLables: function filterLables() {
	      var str = this.filterField.map(function (item) {
	        return "'" + item + "'";
	      });
	      return str.join(" ");
	    }
	  },
	  components: {
	    Icon: _Icon2.default
	  },
	  ready: function ready() {
	    var self = this;
	    var el = this.$el;
	
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) {
	        self.blurInput();
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  methods: {
	    focusInput: function focusInput() {
	      this.iconColor = '#00A0FF';
	      if (this.searchList && this.searchList.length > 0) {
	        this.showPop = true;
	      } else {
	        this.showPop = false;
	      }
	    },
	    blurInput: function blurInput() {
	      this.iconColor = '#BFBFBF';
	      this.showPop = false;
	    },
	    checkItem: function checkItem(index, val) {
	      this.value = val;
	      this.$dispatch('searchbox-value-check', this.searchList[index], this);
	      this.blurInput();
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports.default = EventListener;

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-box\">\n  <input type=\"text\" class=\"input\" :class=\"classObj\" :placeholder=\"placeholder\" v-model=\"value\" @focus=\"focusInput\" debounce=\"500\" />\n  <icon type=\"search\" :color=\"iconColor\" size=\"14\"></icon>\n  <div v-if=\"searchList && searchList.length > 0\" class=\"search-list-containter\">\n    <ul class=\"list-dropdown\" v-show=\"showPop\">\n      <li v-for=\"item in searchList | filterBy value\">\n        <a href=\"javascript:;\" @click=\"checkItem($index, item[textField])\" title=\"{{item[textField]}}\">{{item[textField]}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Uploader = __webpack_require__(124);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Uploader2.default;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(125)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Uploader/Uploader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(126)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Uploader/Uploader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="file-upload">
	//   <div class="click-upload" v-if="uploadType == 'click'">
	//     <div>
	//       <input
	//         type="file"
	//         name="files[]"
	//         id="{{id}}"
	//         accept="accept"
	//         v-bind:multiple="multiple"
	//         v-on:change="onChange($event)" />
	//       <label for="{{id}}">
	//         <span class="btn tertiary small">点击上传</span>
	//       </label>
	//     </div>
	//     <div class="select-files" v-if="fileList.length > 0">
	//       <a class="file-item" href="javascript:;" v-for="file in selectFiles">
	//         <span>{{file}}</span>
	//       </a>
	//     </div>
	//     <button type="submit" class="btn" v-if="!hideButton && !autoSubmit" v-on:click.prevent="submitForm($event)">Upload</button>
	//     <div class="state">
	//       <div class="upload-rate" v-show="state == 'uploading'">
	//         <span class="rate-control">
	//           <span class="rate" :style="{'width': +progress * 0.9 + 'px'}"></span>
	//           <span class="rate-tip">
	//             {{text.uploading}}
	//             <span v-if="advancedUpload">{{progress}}</span>
	//           </span>
	//         </span>
	//         <a class="cancel-upload" href="javascript:;">取消</a>
	//       </div>
	//       <div class="upload-rate" v-show="state == 'success'">
	//         <span class="rate-control">
	//           <span class="rate" :style="{'width': '90px'}"></span>
	//           <span class="rate-tip">上传成功</span>
	//         </span>
	//         <a class="continu-upload" @click.prevent="restart" href="javascript:;">继续上传？</a>
	//       </div>
	//       <div class="upload-rate" v-show="state == 'error'">
	//         <span>出错了！{{errorMessage}}</span>
	//         <a class="continu-upload" @click.prevent="retry" href="javascript:;">请重试</a>
	//       </div>
	//     </div>
	//   </div>
	//   <div v-if="uploadType == 'drag'" class="drag-upload {{advancedUpload ? 'active' : ''}} {{dragover ? 'is-dragover' : ''}}">
	//       <div v-if="state == null || state == 'retry'">
	//         <input
	//             type="file"
	//             name="files[]"
	//             id="{{id}}"
	//             accept="accept"
	//             v-bind:multiple="multiple && advancedUpload"
	//             v-on:change="onChange($event)" />
	//         <label for="{{id}}">
	//           <span v-if="fileList.length == 0 && advancedUpload">将文件拖拽至框中上传或点此上传</span>
	//           <p v-if="fileList.length > 0" v-for="file in selectFiles">{{file}}</p>
	//         </label>
	//         <br>
	//         <button type="submit" class="btn" v-if="!hideButton && !autoSubmit" v-on:click.prevent="submitForm($event)">Upload</button>
	//       </div>
	//       <div class="state" v-if="state != null">
	//         <span class="state-uploading animate" v-show="state == 'uploading'">
	//           {{text.uploading}}
	//           <span v-if="advancedUpload">{{progress}}</span>
	//         </span>
	//         <span class="state-success animate" v-show="state == 'success'">
	//           上传成功
	//           <a href="#" v-on:click.prevent="restart" role="button" v-show="multiple">继续上传?</a>
	//         </span>
	//         <span class="state-error animate" v-show="state == 'error'">
	//           出错了!
	//           <span>{{errorMessage}}</span>
	//           <a href="#" v-on:click.prevent="retry">请重试</a>
	//         </span>
	//       </div>
	//   </div>
	// </div>
	// </template>
	// <script>
	exports.default = {
	  name: 'uploader',
	  props: {
	    id: {
	      type: String,
	      default: ''
	    },
	    uploadType: {
	      type: String,
	      default: 'click' //drag拖拽上传，click点击上传
	    },
	    accept: {
	      type: String,
	      default: ''
	    },
	    ajax: {
	      type: String,
	      default: ''
	    },
	    autoSubmit: {
	      type: Boolean,
	      default: false
	    },
	    formId: {
	      type: String,
	      default: ''
	    },
	    method: {
	      type: String,
	      default: 'POST'
	    },
	    name: {
	      type: String,
	      default: 'files'
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    fileList: {
	      default: null
	    },
	    hideButton: {
	      type: Boolean,
	      default: false
	    },
	    text: {
	      type: Object,
	      default: function _default() {
	        return {
	          uploading: '上传中...',
	          retry: '请重试'
	        };
	      }
	    }
	  },
	  data: function data() {
	    return {
	      state: null,
	      dragover: false,
	      progress: '0%',
	      errorMessage: '',
	      model: null
	    };
	  },
	
	  computed: {
	    advancedUpload: function advancedUpload() {
	      var div = document.createElement('div');
	      return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
	    },
	
	    //上传文件名称
	    selectFiles: function selectFiles() {
	      var result = [];
	      var len = this.fileList.length;
	      // this.fileList.forEach(function(val, key) {
	      //   result.push(val.name);
	      // });
	      for (var i = 0; i < len; i++) {
	        result.push(this.fileList[i].name);
	      }
	
	      return result;
	    }
	  },
	  // events: {
	  //   'submit::file-upload'(id) {
	  //     if (this.id === id) {
	  //       this.submitForm()
	  //     }
	  //   }
	  // },
	  ready: function ready() {
	    this._input = this.$el.querySelector('input');
	
	    if (this.advancedUpload) {
	      this.addDragEvt();
	    } else {
	      if (!this.formId) {
	        throw "需要将该组件放置在一个有form-id属性值的form标签中";
	      }
	      this._wrappingForm = document.getElementById(this.formId);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this = this;
	
	    var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	    events.forEach(function (event) {
	      _this.$el.removeEventListener(event, function () {
	        return _this._eventHandler();
	      });
	    });
	  },
	
	  methods: {
	    /**
	     * 添加drag事件
	     */
	
	    addDragEvt: function addDragEvt() {
	      var _this2 = this;
	
	      var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	
	      events.forEach(function (event) {
	        _this2.$el.addEventListener(event, function (e) {
	          return _this2._eventHandler(e);
	        });
	      });
	
	      events = ['dragover', 'dragenter'];
	      events.forEach(function (event) {
	        return function (e) {
	          return _this2._eventHandler(e);
	        };
	      });
	
	      events = ['dragend', 'dragleave', 'drop'];
	      events.forEach(function (event) {
	        _this2.$el.addEventListener(event, function (e) {
	          return _this2._eventHandler(e);
	        });
	      });
	    },
	
	    /**
	     * drag事件处理
	     */
	    _eventHandler: function _eventHandler(e) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      if (e.type === 'dragover' || e.type === 'dragenter') {
	        this.dragover = true;
	      }
	
	      if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
	        this.dragover = false;
	        if (e.type === 'drop') {
	          this.fileList = e.dataTransfer.files;
	          if (this.autoSubmit) {
	            this.submitForm();
	          }
	        }
	      }
	    },
	
	    /**
	     * 上传后自动提交
	     */
	    submitForm: function submitForm() {
	      if (!this.fileList.length) return;
	
	      if (this.ajax) {
	        this.state = 'uploading';
	        if (this.advancedUpload) {
	          this.xhrUpload();
	        } else {
	          this.iframeUpload();
	        }
	      }
	    },
	    xhrUpload: function xhrUpload() {
	      var _this3 = this;
	
	      var ajaxData = new FormData();
	      for (var i = 0; i < this.fileList.length; i++) {
	        var file = this.fileList[i];
	
	        if (this.accept && !file.type.match(this.accept)) {
	          continue;
	        }
	        ajaxData.append(this.name, file, file.name);
	      }
	
	      var xhr = new XMLHttpRequest();
	      // xhr.setRequestHeader('Content-Length')
	      xhr.open(this.method, this.ajax, true);
	
	      xhr.onload = function () {
	        _this3.state = null;
	        // if (xhr.status >= 200 && xhr.status < 400) {
	        //   this.parseResponse(xhr.responseText);
	        // } else {
	        //   this.parseResponse(xhr.responseText);
	        // }
	        _this3.parseResponse(xhr.responseText);
	      };
	
	      xhr.upload.onprogress = function (e) {
	        var loaded = e.loaded ? e.loaded : 0;
	        var total = e.total ? e.total : 1;
	        _this3.progress = parseInt(loaded / total * 100, 10) + '%';
	      };
	
	      xhr.onerror = function () {
	        _this3.setError('上传失败了！');
	      };
	
	      xhr.send(ajaxData);
	    },
	    iframeUpload: function iframeUpload() {
	      var _this4 = this;
	
	      if (this.testSameOrigin(this.ajax)) {
	        (function () {
	          var iframeName = 'uploadiframe' + new Date().getTime();
	          var iframe = document.createElement('iframe');
	
	          iframe.setAttribute('name', iframeName);
	          iframe.style.display = 'none';
	
	          document.body.appendChild(iframe);
	          _this4._wrappingForm.setAttribute('target', iframeName);
	
	          iframe.addEventListener('load', function () {
	            _this4.parseResponse(iframe.contentDocument.body.innerHTML);
	            _this4._wrappingForm.removeAttribute('target');
	            iframe.parentNode.removeChild(iframe);
	          });
	          _this4._wrappingForm.submit();
	        })();
	      } else {
	        this.setError('iframe不支持跨域请求');
	      }
	    },
	
	    /**
	     * 处理响应结果
	     */
	    parseResponse: function parseResponse(response) {
	      var data = null;
	
	      if (!response) {
	        this.setError('服务器没有响应，或响应数据格式有问题');
	      } else {
	        try {
	          data = JSON.parse(response);
	        } catch (e) {
	          this.setError('服务器响应数据格式有问题');
	        }
	
	        if (data) {
	          if (data.success) {
	            this.state = 'success';
	            this.model = data.data;
	            this.$dispatch('completed::file-upload', { model: this.model });
	          } else if (data.error) {
	            this.setError(data.error);
	          }
	        }
	      }
	    },
	    setError: function setError(message) {
	      this.state = 'error';
	      this.errorMessage = message;
	      this.$dispatch('completed::file-upload', { error: this.errorMessage });
	    },
	    retry: function retry() {
	      this.state = 'retry';
	      this.trigger(this._input, 'change');
	    },
	    restart: function restart() {
	      this.state = null;
	      this.fileList = [];
	    },
	    onChange: function onChange(e) {
	      if (this.state === 'retry') {
	        this.state = null;
	      }
	      if (this.advancedUpload) {
	        this.fileList = e.target.files;
	        if (this.autoSubmit) {
	          this.submitForm();
	        }
	      } else {
	        this.fileList.push({ name: this._input.value.replace(/^.*\\/, '') });
	      }
	    },
	    testSameOrigin: function testSameOrigin(url) {
	      var loc = window.location;
	      var a = document.createElement('a');
	      a.href = url;
	      return a.hostname == loc.hostname && a.port == loc.port && a.protocol == loc.protocol;
	    },
	    trigger: function trigger(el, event, args) {
	      var e = document.createEvent('HTMLEvents');
	      e.initEvent(event, true, false);
	
	      if (args) {
	        for (var prop in args) {
	          e[prop] = args[prop];
	        }
	      }
	
	      try {
	        el.dispatchEvent(e);
	      } catch (e) {}
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"file-upload\">\n  <div class=\"click-upload\" v-if=\"uploadType == 'click'\">\n    <div>\n      <input\n        type=\"file\"\n        name=\"files[]\"\n        id=\"{{id}}\"\n        accept=\"accept\"\n        v-bind:multiple=\"multiple\"\n        v-on:change=\"onChange($event)\" />\n      <label for=\"{{id}}\">\n        <span class=\"btn tertiary small\">点击上传</span>\n      </label>\n    </div>\n    <div class=\"select-files\" v-if=\"fileList.length > 0\">\n      <a class=\"file-item\" href=\"javascript:;\" v-for=\"file in selectFiles\">\n        <span>{{file}}</span>\n      </a>\n    </div>\n    <button type=\"submit\" class=\"btn\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">Upload</button>\n    <div class=\"state\">\n      <div class=\"upload-rate\" v-show=\"state == 'uploading'\">\n        <span class=\"rate-control\">\n          <span class=\"rate\" :style=\"{'width': +progress * 0.9 + 'px'}\"></span>\n          <span class=\"rate-tip\">\n            {{text.uploading}}\n            <span v-if=\"advancedUpload\">{{progress}}</span>\n          </span>\n        </span>\n        <a class=\"cancel-upload\" href=\"javascript:;\">取消</a>\n      </div>\n      <div class=\"upload-rate\" v-show=\"state == 'success'\">\n        <span class=\"rate-control\">\n          <span class=\"rate\" :style=\"{'width': '90px'}\"></span>\n          <span class=\"rate-tip\">上传成功</span>\n        </span>\n        <a class=\"continu-upload\" @click.prevent=\"restart\" href=\"javascript:;\">继续上传？</a>\n      </div>\n      <div class=\"upload-rate\" v-show=\"state == 'error'\">\n        <span>出错了！{{errorMessage}}</span>\n        <a class=\"continu-upload\" @click.prevent=\"retry\" href=\"javascript:;\">请重试</a>\n      </div>\n    </div>\n  </div>\n  <div v-if=\"uploadType == 'drag'\" class=\"drag-upload {{advancedUpload ? 'active' : ''}} {{dragover ? 'is-dragover' : ''}}\">\n      <div v-if=\"state == null || state == 'retry'\">\n        <input\n            type=\"file\"\n            name=\"files[]\"\n            id=\"{{id}}\"\n            accept=\"accept\"\n            v-bind:multiple=\"multiple && advancedUpload\"\n            v-on:change=\"onChange($event)\" />\n        <label for=\"{{id}}\">\n          <span v-if=\"fileList.length == 0 && advancedUpload\">将文件拖拽至框中上传或点此上传</span>\n          <p v-if=\"fileList.length > 0\" v-for=\"file in selectFiles\">{{file}}</p>\n        </label>\n        <br>\n        <button type=\"submit\" class=\"btn\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">Upload</button>\n      </div>\n      <div class=\"state\" v-if=\"state != null\">\n        <span class=\"state-uploading animate\" v-show=\"state == 'uploading'\">\n          {{text.uploading}}\n          <span v-if=\"advancedUpload\">{{progress}}</span>\n        </span>\n        <span class=\"state-success animate\" v-show=\"state == 'success'\">\n          上传成功\n          <a href=\"#\" v-on:click.prevent=\"restart\" role=\"button\" v-show=\"multiple\">继续上传?</a>\n        </span>\n        <span class=\"state-error animate\" v-show=\"state == 'error'\">\n          出错了!\n          <span>{{errorMessage}}</span>\n          <a href=\"#\" v-on:click.prevent=\"retry\">请重试</a>\n        </span>\n      </div>\n  </div>\n</div>\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(128);
	
	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(129)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Switch/Switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(130)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Switch/Switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	//   <span :class="wrapClasses" @click="changeHandler" :style="{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}">
	// 		<span class="switch-content">
	// 			<slot v-if="checked && !small" name="checkedPart"></slot>
	// 			<slot v-if="!checked && !small" name="unCheckedPart"></slot>
	// 		</span>
	// 	</span>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			checked: {
				type: Boolean
			},
			value: {
				type: String
			},
			disabled: {
				type: Boolean
			},
			small: {
				type: Boolean
			},
			color: {
				type: String
			}
		},
		computed: {
			wrapClasses: function wrapClasses() {
				return {
					'switch': true,
					'small': this.small,
					'switch-checked': this.checked,
					'switch-disabled': this.disabled
				};
			}
		},
		methods: {
			changeHandler: function changeHandler() {
				if (this.disabled) {
					return;
				}
				this.checked = !this.checked;
				this.$dispatch('change', this);
			}
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "\n  <span :class=\"wrapClasses\" @click=\"changeHandler\" :style=\"{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}\">\n\t\t<span class=\"switch-content\">\n\t\t\t<slot v-if=\"checked && !small\" name=\"checkedPart\"></slot>\n\t\t\t<slot v-if=\"!checked && !small\" name=\"unCheckedPart\"></slot>\n\t\t</span>\n\t</span>\n";

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(132);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dropdown2.default;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(133)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dropdown/Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Dropdown/Dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="{dropdown:true,open:open}">
	//     <slot></slot>
	//     <slot name="dropdown-menu"></slot>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    open: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  methods: {
	    toggleDropdown: function toggleDropdown(e) {
	      e.preventDefault();
	      this.open = !this.open;
	    }
	  },
	  ready: function ready() {
	    var me = this;
	    var el = me.$el;
	    var toggle = el.querySelector('[data-toggle="dropdown"]');
	    if (!toggle) {
	      return;
	    }
	    var event = me.trigger === 'click' ? 'click' : 'mouseenter';
	    toggle.addEventListener(event, function () {
	      clearTimeout(me.timeout);
	      me.open = true;
	    });
	
	    if (me.trigger === 'hover') {
	      me.$el.addEventListener('mouseleave', function () {
	        me.timeout = setTimeout(function () {
	          me.open = false;
	        }, 300);
	      });
	    }
	    var self = this;
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) {
	        self.open = false;
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Attempt to convert a string value to a Boolean. Otherwise, return the value
	// without modification so Vue can throw a warning.
	
	exports.default = function (val) {
	  return typeof val !== "string" ? val : val === "true" ? true : val === "false" ? false : val === "null" ? false : val === "undefined" ? false : val;
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{dropdown:true,open:open}\">\n  <slot></slot>\n  <slot name=\"dropdown-menu\"></slot>\n</div>\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(137);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(144);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Select2.default.Option = _Option2.default;
	
	exports.default = _Select2.default;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(138)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(143)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Select/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Tag = __webpack_require__(139);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="select-container" v-bind:class="{open: show,disabled: disabled,multiple:multiple}">
	//     <div class="select-toggle" tabindex="1" class="dropdown-toggle" @click="toggleDropdown" v-bind="{disabled: disabled}"
	//     >
	//       <template v-if="!multiple">
	//         <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//         <span class="btn-content">{{ showText }}</span>
	//         <span :class="{caret:true,open:show}"><icon type="down" size="12"></icon></span>
	//       </template>
	//       <div v-else>
	//         <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//         <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
	//         <input type="text" v-el:search-field class="select-search-field" @input="onInput" @keydown.delete="deleteTag" @keydown.enter.prevent="createTag" v-model="searchText" autocomplete="off"/>
	//       </div>
	//     </div>
	//     <div class="dropdown-menu">
	//       <slot></slot>
	//       <div v-show="noResult" class="no-result">无结果</div>
	//       <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    width: {
	      type: Array
	    },
	    value: {
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    tags: {
	      type: Boolean
	    },
	    multiple: {
	      type: Boolean
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    disabled: {
	      type: Boolean
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Tag: _Tag2.default
	  },
	  created: function created() {
	    var me = this;
	    if (me.tags) {
	      me.multiple = true;
	    }
	    if (!me.value) {
	      me.value = me.multiple ? [] : '';
	    }
	    if (me.multiple && !Array.isArray(me.value)) {
	      me.value = [me.value];
	    }
	    if (!me.multiple && Array.isArray(me.value)) {
	      me.value = me.value.slice(0, 1);
	    }
	    if (me.multiple && me.value.length > me.limit) {
	      me.value = me.value.slice(0, me.limit);
	    }
	    if (me.value.length) {
	      me.showPlaceholder = false;
	    }
	  },
	  data: function data() {
	    return {
	      searchText: '',
	      noResult: false,
	      show: false,
	      selectedOptions: [],
	      showPlaceholder: true,
	      showNotify: false,
	      options: []
	    };
	  },
	
	  computed: {
	    showText: function showText() {
	      return this.selectedOptions && this.selectedOptions[0] && this.selectedOptions[0].label;
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      if (this.multiple && val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        setTimeout(function () {
	          return _this.showNotify = false;
	        }, 1000);
	      }
	    },
	    selectedOptions: function selectedOptions() {
	      if (this.multiple) {
	        this.value = this.selectedOptions.map(function (option) {
	          return option.value;
	        });
	      } else {
	        this.value = this.selectedOptions[0].value;
	      }
	    }
	  },
	  methods: {
	    select: function select(option) {
	      this.$dispatch('change', option);
	    },
	    toggleDropdown: function toggleDropdown() {
	      if (this.disabled) {
	        this.show = false;
	        return;
	      }
	      this.show = !this.show;
	      if (this.multiple) {
	        this.showPlaceholder = false;
	        this.$els.searchField.focus();
	      }
	    },
	    closeTag: function closeTag(option) {
	      this.selectedOptions.$remove(option);
	    },
	    deleteTag: function deleteTag() {
	      var input = event.target;
	      var value = input.value;
	      if (value.length === 0) {
	        var options = this.selectedOptions;
	        var option = options[options.length - 1];
	        this.selectedOptions.$remove(option);
	      }
	    },
	    onInput: function onInput() {
	      var input = event.target;
	      var value = input.value;
	      var width = value.length * 10;
	      this.showPlaceholder = false;
	      input.style.width = width + 10 + 'px';
	    },
	    createTag: function createTag() {
	      if (this.tags) {
	        var value = event.target.value;
	        console.log(value);
	        if (!value || !value.trim().length) {
	          return;
	        }
	        if (this.value.indexOf(value) === -1) {
	          this.selectedOptions.push({
	            label: value,
	            value: value
	          });
	        }
	        this.searchText = '';
	      }
	    }
	  },
	  events: {
	    change: function change(option) {
	      this.showPlaceholder = false;
	
	      if (this.multiple) {
	        var isSelected = this.selectedOptions.some(function (item) {
	          return item.value === option.value;
	        });
	        if (!isSelected) {
	          this.selectedOptions.push(option);
	          this.value.push(option.value);
	        } else {
	          this.selectedOptions = this.selectedOptions.filter(function (item) {
	            return item.value !== option.value;
	          });
	          console.log(this.value);
	          this.value.$remove(option.value);
	        }
	      } else {
	        this.selectedOptions = [option];
	        this.value = option.value;
	      }
	
	      if (!this.multiple) {
	        this.show = false;
	      }
	      this.searchText = '';
	      // 需要把option的change事件继续冒泡给上一层级调用
	      return true;
	    }
	  },
	  ready: function ready() {
	    var me = this;
	    me._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!me.$el.contains(e.target)) {
	        me.show = false;
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tag = __webpack_require__(140);
	
	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tag2.default;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(141)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tag/Tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(142)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tag/Tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			color: {
				type: String
			},
			closable: {
				type: Boolean,
				default: false
			},
			href: {
				type: String
			},
			size: {
				type: String,
				default: "12"
			}
		},
	
		data: function data() {
			return {
				closed: false
			};
		},
	
	
		computed: {
			wrapClasses: function wrapClasses() {
				return {
					'atui-tag': true,
					'atui-tag-color': this.color
				};
			}
		},
	
		methods: {
			closeHandler: function closeHandler(e) {
				this.closed = true;
				this.$dispatch('close', e);
			}
		},
	
		components: {
			vIcon: _Icon2.default
		},
	
		ready: function ready() {}
	};
	// </script>
	//
	//
	//

	/* generated by vue-loader */
	// <template>
	// 	<div v-if="!closed" :class="wrapClasses" :style="{'background-color': color}">
	// 		<a :href="href" class="tag-text" :style="{'fontSize': size+'px'}"><slot></slot></a>
	// 		<span v-if="closable" class="tag-close" @click="closeHandler">
	// 			<v-icon type="close" :size="size"></v-icon>
	// 		</span>
	// 	</div>
	// </template>
	//
	// <script>

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\" :class=\"wrapClasses\" :style=\"{'background-color': color}\">\n\t<a :href=\"href\" class=\"tag-text\" :style=\"{'fontSize': size+'px'}\"><slot></slot></a>\n\t<span v-if=\"closable\" class=\"tag-close\" @click=\"closeHandler\">\n\t\t<v-icon type=\"close\" :size=\"size\"></v-icon>\n\t</span>\n</div>\n";

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"select-container\" v-bind:class=\"{open: show,disabled: disabled,multiple:multiple}\">\n  <div class=\"select-toggle\" tabindex=\"1\" class=\"dropdown-toggle\" @click=\"toggleDropdown\" v-bind=\"{disabled: disabled}\"\n  >\n    <template v-if=\"!multiple\">\n      <span class=\"select-placeholder\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n      <span class=\"btn-content\">{{ showText }}</span>\n      <span :class=\"{caret:true,open:show}\"><icon type=\"down\" size=\"12\"></icon></span>\n    </template>\n    <div v-else>\n      <span class=\"select-placeholder\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n      <tag v-for=\"option in selectedOptions\" closable @close=\"closeTag(option)\">{{{option.label}}}</tag>\n      <input type=\"text\" v-el:search-field class=\"select-search-field\" @input=\"onInput\" @keydown.delete=\"deleteTag\" @keydown.enter.prevent=\"createTag\" v-model=\"searchText\" autocomplete=\"off\"/>\n    </div>\n  </div>\n  <div class=\"dropdown-menu\">\n    <slot></slot>\n    <div v-show=\"noResult\" class=\"no-result\">无结果</div>\n    <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\">最多可选 ({{limit}})项.</div>\n  </div>\n</div>\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(145)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(146)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Select/Option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 145 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-show="show", :class="{option:true,disabled:disabled,chosen:chosen}" @mousedown.prevent.stop="handleClick">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	// import Icon from '../Icon/'
	exports.default = {
	  name: 'option',
	  props: {
	    value: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    }
	  },
	  components: {
	    // Icon
	  },
	
	  computed: {
	    chosen: function chosen() {
	      var _this = this;
	
	      return this.$parent.selectedOptions.some(function (item) {
	        return item.value == _this.value;
	      });
	    },
	    show: function show() {
	      var searchText = this.$parent.searchText.trim();
	      if (searchText.length && this.$parent.multiple) {
	        return this.$el.innerText.indexOf(searchText) >= 0;
	      }
	      return true;
	    }
	  },
	  ready: function ready() {
	    var option = {
	      label: this.$el.innerText,
	      value: this.value,
	      disabled: this.disabled
	    };
	    this.$parent.$data.options.push(option);
	
	    if (this.$parent.value == this.value) {
	      this.$parent.selectedOptions.push(option);
	    }
	  },
	
	  methods: {
	    handleClick: function handleClick() {
	      if (this.disabled) {
	        return;
	      }
	      var option = {
	        label: this.$el.innerText,
	        value: this.value
	      };
	      this.$dispatch('change', option);
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"show\", :class=\"{option:true,disabled:disabled,chosen:chosen}\" @mousedown.prevent.stop=\"handleClick\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Calendar = __webpack_require__(148);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Calendar2.default;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(149)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Calendar/Calendar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(150)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Calendar/Calendar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var localeConfig = {
	  zh_CN: {
	    weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
	  },
	  en_US: {
	    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  }
	}; // <template>
	//   <div class="atui-calendar">
	//     <div class="atui-calendar-popup" v-show="show">
	//       <div class="atui-calendar-inner">
	//         <div class="atui-calendar-body">
	//           <div class="atui-calendar-ctrl">
	//             <span class="month-btn atui-calendar-preBtn" @click="preNextMonthClick(0)">&lt;</span>
	//             <span class="month-btn atui-calendar-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
	//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	//           </div>
	//           <div class="atui-calendar-weekRange">
	//             <span v-for="w in weekRange">{{w}}</span>
	//           </div>
	//           <div class="atui-calendar-dateRange">
	//             <span v-for="d in dateRange" v-bind:class="d.sclass" @click="daySelect(d.date,$event)">{{d.text}}</span>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="atui-calendar-popup" v-show="displayMonthView">
	//       <div class="atui-calendar-inner">
	//         <div class="atui-calendar-body">
	//           <div class="atui-calendar-ctrl">
	//             <span class="month-btn atui-calendar-preBtn" @click="preNextYearClick(0)">&lt;</span>
	//             <span class="month-btn atui-calendar-nextBtn" @click="preNextYearClick(1)">&gt;</span>
	//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	//           </div>
	//           <div class="atui-calendar-monthRange">
	//             <template v-for="m in monthNames">
	//               <span v-bind:class="{'atui-calendar-dateRange-item-active':
	//                   (this.monthNames[this.parse(this.value).getMonth()]  === m) &&
	//                   this.currDate.getFullYear() === this.parse(this.value).getFullYear()}"
	//                   @click="monthSelect($index)"
	//                 >{{m.substr(0,3)}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="atui-calendar-popup" v-show="displayYearView">
	//       <div class="atui-calendar-inner">
	//         <div class="atui-calendar-body">
	//           <div class="atui-calendar-ctrl">
	//             <span class="month-btn atui-calendar-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
	//             <span class="month-btn atui-calendar-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	//           </div>
	//           <div class="atui-calendar-monthRange decadeRange">
	//             <template v-for="decade in decadeRange">
	//               <span v-bind:class="{'atui-calendar-dateRange-item-active':
	//                   this.parse(this.value).getFullYear() === decade.text}"
	//                   @click.stop="yearSelect(decade.text)"
	//                 >{{decade.text}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    format: {
	      default: 'yyyy-MMMM-dd'
	    },
	    locale: {
	      default: 'zh_CN'
	    },
	    disabledDate: {
	      type: Function,
	      default: function _default() {
	        return function () {};
	      }
	    },
	    width: {
	      type: String,
	      default: '100%'
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    mode: {
	      type: String,
	      default: 'month'
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: localeConfig[this.locale].weekRange,
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: true,
	      displayMonthView: false,
	      displayYearView: false,
	      monthNames: localeConfig[this.locale].monthNames
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayMonthView = false;
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, event) {
	      var el = event.target;
	      if (el.className.split(' ')[0] === 'atui-calendar-item-disable') {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	        this.$dispatch('change', this.value);
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return date.getFullYear() + '年' + this.monthNames[date.getMonth()] + '月';
	    },
	    parseMonth: function parseMonth(date) {
	      return this.monthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'atui-calendar-item-gray'
	          });
	        }
	      }
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        var date = new Date(time.year, time.month, _i2);
	        // const week = date.getDay()
	        var sclass = '';
	        // this.disabledDaysOfWeek.forEach((el)=> {
	        //   if (week === parseInt(el, 10)) sclass = 'atui-calendar-item-disable'
	        // })
	        // 开发者指定的禁用日期
	        if (this.disabledDate(date)) {
	          sclass = 'atui-calendar-item-disable';
	        }
	        if (_i2 === time.day) {
	          if (this.value) {
	            var valueDate = this.parse(this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'atui-calendar-dateRange-item-active';
	              }
	            }
	          }
	        }
	        this.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: 'atui-calendar-item-gray'
	          });
	        }
	      }
	    }
	  },
	  ready: function ready() {
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"atui-calendar\">\n  <div class=\"atui-calendar-popup\" v-show=\"show\">\n    <div class=\"atui-calendar-inner\">\n      <div class=\"atui-calendar-body\">\n        <div class=\"atui-calendar-ctrl\">\n          <span class=\"month-btn atui-calendar-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n          <span class=\"month-btn atui-calendar-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n          <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n        </div>\n        <div class=\"atui-calendar-weekRange\">\n          <span v-for=\"w in weekRange\">{{w}}</span>\n        </div>\n        <div class=\"atui-calendar-dateRange\">\n          <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,$event)\">{{d.text}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"atui-calendar-popup\" v-show=\"displayMonthView\">\n    <div class=\"atui-calendar-inner\">\n      <div class=\"atui-calendar-body\">\n        <div class=\"atui-calendar-ctrl\">\n          <span class=\"month-btn atui-calendar-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n          <span class=\"month-btn atui-calendar-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n          <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n        </div>\n        <div class=\"atui-calendar-monthRange\">\n          <template v-for=\"m in monthNames\">\n            <span v-bind:class=\"{'atui-calendar-dateRange-item-active':\n                (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"atui-calendar-popup\" v-show=\"displayYearView\">\n    <div class=\"atui-calendar-inner\">\n      <div class=\"atui-calendar-body\">\n        <div class=\"atui-calendar-ctrl\">\n          <span class=\"month-btn atui-calendar-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n          <span class=\"month-btn atui-calendar-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n          <p>{{stringifyDecadeHeader(currDate)}}</p>\n        </div>\n        <div class=\"atui-calendar-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span v-bind:class=\"{'atui-calendar-dateRange-item-active':\n                this.parse(this.value).getFullYear() === decade.text}\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(152);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RangePicker = __webpack_require__(155);
	
	var _RangePicker2 = _interopRequireDefault(_RangePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_DatePicker2.default.RangePicker = _RangePicker2.default;
	
	exports.default = _DatePicker2.default;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(153)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/DatePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(154)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/DatePicker/DatePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Calendar = __webpack_require__(147);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'date-picker',
	  props: {
	    value: {
	      type: String
	    },
	    placeholder: {
	      type: String,
	      default: '请选择日期'
	    },
	    format: {
	      default: 'yyyy-MMMM-dd'
	    },
	    locale: {
	      default: 'zh_CN'
	    },
	    show: Boolean,
	    disabledDate: {
	      type: Function,
	      default: function _default(date) {}
	    }
	  },
	  components: {
	    icon: _Icon2.default,
	    calendar: _Calendar2.default
	  },
	  methods: {
	    inputClick: function inputClick() {
	      this.show = !this.show;
	    },
	    selectChange: function selectChange(value) {
	      this.value = value;
	      this.show = false;
	      // 冒泡给上一层使用，比如rangePicker
	      return true;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) {
	        _this.show = false;
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="atui-datepicker">
	//     <div class="atui-datepicker-toggle" @click="inputClick" >
	//       <input class="datepicker-input" type="text" :value="value" :placeholder="placeholder" />
	//       <icon type="calendar"></icon>
	//     </div>
	//     <div class="atui-datepicker-calendar">
	//       <calendar :show="show" @change="selectChange" :value="value" :format="format" :locale="locale" :disabled-date="disabledDate"></calendar>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"atui-datepicker\">\n  <div class=\"atui-datepicker-toggle\" @click=\"inputClick\" >\n    <input class=\"datepicker-input\" type=\"text\" :value=\"value\" :placeholder=\"placeholder\" />\n    <icon type=\"calendar\"></icon>\n  </div>\n  <div class=\"atui-datepicker-calendar\">\n    <calendar :show=\"show\" @change=\"selectChange\" :value=\"value\" :format=\"format\" :locale=\"locale\" :disabled-date=\"disabledDate\"></calendar>\n  </div>\n</div>\n";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(156)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/RangePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(157)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/DatePicker/RangePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(152);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    open: {
	      type: Boolean
	    },
	    startDate: {
	      type: String
	    },
	    endDate: {
	      type: String
	    },
	    format: {
	      default: 'yyyy-MMMM-dd'
	    }
	  },
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    DatePicker: _DatePicker2.default
	  },
	  methods: {
	    setDisabledEndDate: function setDisabledEndDate(value) {
	      var endDate = this.$refs.endDate;
	      endDate.disabledDate = function (date) {
	        return date.getTime() <= new Date(value).getTime();
	      };
	      // endDate.getDateRange()
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// <div class="range-picker">
	//   <date-picker v-ref:startDate :value.sync="startDate" placeholder="开始日期" @change="setDisabledEndDate"></date-picker>
	//   <span class="range-picker-separator"> - </span>
	//   <date-picker v-ref:end-date :value.sync="endDate" placeholder="结束日期" :disabled-date="disabledEndDate"></date-picker>
	// </div>
	// </template>
	// <script>

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"range-picker\">\n  <date-picker v-ref:startDate :value.sync=\"startDate\" placeholder=\"开始日期\" @change=\"setDisabledEndDate\"></date-picker>\n  <span class=\"range-picker-separator\"> - </span>\n  <date-picker v-ref:end-date :value.sync=\"endDate\" placeholder=\"结束日期\" :disabled-date=\"disabledEndDate\"></date-picker>\n</div>\n";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(159)
	__vue_script__ = __webpack_require__(161)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Typeahead.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(163)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Typeahead.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(160);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Typeahead.vue?0d12b9e0"],"names":[],"mappings":";AAyJA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n</template>\n\n<script>\nimport callAjax from './utils/callAjax.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n\nconst typeahead = {\n    created() {\n      this.items = this.primitiveData\n    },\n    partials: {\n      'default': '<span v-html=\"item | highlight query\"></span>',\n    },\n    props: {\n      data: {\n        type: Array\n      },\n      limit: {\n        type: Number,\n        default: 8\n      },\n      async: {\n        type: String\n      },\n      template: {\n        type:String\n      },\n      templateName: {\n        type:String,\n        default: 'default'\n      },\n      key: {\n        type: String\n      },\n      matchCase: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      onHit: {\n        type: Function,\n        default(items) {\n          this.reset()\n          this.query = items\n        }\n      },\n      placeholder: {\n        type: String\n      }\n    },\n    data() {\n      return {\n        query: '',\n        showDropdown: false,\n        noResults: true,\n        current: 0,\n        items: [],\n      }\n    },\n    computed: {\n      primitiveData() {\n        var _this = this;\n        \n        if (this.data) {\n          return this.data.filter(value=> {\n            value = this.matchCase ? value : value.toLowerCase();\n            var query = this.matchCase ? _this.query : _this.query.toLowerCase();\n            return value.indexOf(query) !== -1;\n          }).slice(0, this.limit)\n        }\n      }\n    },\n    ready() {\n      // register a partial:\n      if (this.templateName && this.templateName!=='default')\n      {\n        Vue.partial(this.templateName, this.template)\n      }\n    },\n    methods: {\n      update() {\n        if (!this.query) {\n          this.reset()\n          return false\n        }\n        if (this.data) {\n          this.items = this.primitiveData\n          this.showDropdown = this.items.length ? true : false\n        }\n        if (this.async) {\n          callAjax(this.async + this.query, (data)=> {\n            this.items = data[this.key].slice(0, this.limit)\n            this.showDropdown = this.items.length ? true : false\n          })\n        }\n      },\n      reset() {\n        this.items = []\n        this.query = ''\n        this.loading = false\n        this.showDropdown = false\n      },\n      setActive(index) {\n        this.current = index\n      },\n      isActive(index) {\n        return this.current === index\n      },\n      hit(e) {\n        e.preventDefault()\n        this.onHit(this.items[this.current], this);\n      },\n      up() {\n        if (this.current > 0) this.current--\n      },\n      down() {\n        if (this.current < this.items.length - 1) this.current++\n      }\n    },\n    filters: {\n      highlight(value, phrase) {\n        return value.replace(new RegExp('('+phrase+')', 'gi'), '<strong>$1</strong>')\n      }\n    }\n  }\nexport default typeahead\n</script>\n\n<style>\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(162);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div style="position: relative"
	//   v-bind:class="{'open':showDropdown}"
	//   >
	//   <input type="text" class="form-control"
	//     :placeholder="placeholder"
	//     autocomplete="off"
	//     v-model="query"
	//     @input="update"
	//     @keydown.up="up"
	//     @keydown.down="down"
	//     @keydown.enter= "hit"
	//     @keydown.esc="reset"
	//     @blur="showDropdown = false"
	//   />
	//   <ul class="dropdown-menu" v-el:dropdown>
	//     <li v-for="item in items" v-bind:class="{'active': isActive($index)}">
	//       <a @mousedown.prevent="hit" @mousemove="setActive($index)">
	//         <partial :name="templateName"></partial>
	//       </a>
	//     </li>
	//   </ul>
	// </div>
	//
	// </template>
	//
	// <script>
	
	
	var typeahead = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  partials: {
	    'default': '<span v-html="item | highlight query"></span>'
	  },
	  props: {
	    data: {
	      type: Array
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    async: {
	      type: String
	    },
	    template: {
	      type: String
	    },
	    templateName: {
	      type: String,
	      default: 'default'
	    },
	    key: {
	      type: String
	    },
	    matchCase: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    onHit: {
	      type: Function,
	      default: function _default(items) {
	        this.reset();
	        this.query = items;
	      }
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      query: '',
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: []
	    };
	  },
	
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this2 = this;
	
	      var _this = this;
	
	      if (this.data) {
	        return this.data.filter(function (value) {
	          value = _this2.matchCase ? value : value.toLowerCase();
	          var query = _this2.matchCase ? _this.query : _this.query.toLowerCase();
	          return value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  ready: function ready() {
	    // register a partial:
	    if (this.templateName && this.templateName !== 'default') {
	      Vue.partial(this.templateName, this.template);
	    }
	  },
	
	  methods: {
	    update: function update() {
	      var _this3 = this;
	
	      if (!this.query) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length ? true : false;
	      }
	      if (this.async) {
	        (0, _callAjax2.default)(this.async + this.query, function (data) {
	          _this3.items = data[_this3.key].slice(0, _this3.limit);
	          _this3.showDropdown = _this3.items.length ? true : false;
	        });
	      }
	    },
	    reset: function reset() {
	      this.items = [];
	      this.query = '';
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.onHit(this.items[this.current], this);
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    }
	  },
	  filters: {
	    highlight: function highlight(value, phrase) {
	      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
	    }
	  }
	};
	exports.default = typeahead;
	// </script>
	//
	// <style>
	// .dropdown-menu > li > a {
	//   cursor: pointer;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (url, callback) {
	    var httpRequest = new XMLHttpRequest();
	    httpRequest.onreadystatechange = function () {
	        if (httpRequest.readyState === 4) {
	            if (httpRequest.status === 200) {
	                var data = JSON.parse(httpRequest.responseText);
	                if (callback) callback(data);
	            }
	        }
	    };
	    httpRequest.open('GET', url);
	    httpRequest.send();
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cascader = __webpack_require__(165);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Cascader2.default;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(166)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Cascader/Cascader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(167)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Cascader/Cascader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Input = __webpack_require__(114);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="cascader">
	//     <span class="cascader-picker">
	//       <v-input readonly @click="toggleMenus" :value="displayValue" :placeholder="placeholder"></v-input>
	//     </span>
	//     <div class="cascader-menus" v-show="isOpen">
	//       <ul class="cascader-menu" v-for="(index, menu) in menus">
	//         <li class="cascader-menu-item" :class="{selected:selectedOptions[index] === option,disabled:option.disabled}" v-for="option in menu" @click="changeOption(index,option,$event)">{{option.label}}</li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    options: {
	      type: Array,
	      required: true
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    size: {
	      type: String,
	      default: 'default'
	    },
	    displayRender: {
	      type: Function,
	      default: function _default(label) {
	        return label.join(' / ');
	      }
	    },
	    expandTrigger: {
	      type: String,
	      default: 'click'
	    },
	    defaultValue: {
	      type: Array
	    }
	  },
	  components: {
	    vInput: _Input2.default
	  },
	  data: function data() {
	    return {
	      menus: [],
	      selectedOptions: [],
	      displayValue: '',
	      isOpen: false
	    };
	  },
	
	  computed: {
	    selectedValue: function selectedValue() {
	      var me = this;
	      return me.selectedOptions.map(function (option) {
	        return option.value;
	      });
	    },
	    selectedLabel: function selectedLabel() {
	      var me = this;
	      return me.selectedOptions.map(function (option) {
	        return option.label;
	      });
	    }
	  },
	  created: function created() {
	    var me = this;
	    me.menus[0] = [];
	    me.options.forEach(function (option, i) {
	      me.menus[0].push({
	        label: option.label,
	        value: option.value,
	        children: option.children
	      });
	    });
	    if (me.defaultValue) {
	      me.defaultValue.forEach(function (value, i) {
	        var option = me.menus[i].filter(function (option) {
	          return option.value === value;
	        });
	        me.changeOption(i, option[0]);
	      });
	    }
	    // me.childs++
	    // let children = this.options[0].children
	    // // 算出层级，初始化界面的选择框
	    // while(children && children.length) {
	    //   me.childs++
	    //   children = children[0].children
	    // }
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var me = this;
	    me._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) {
	        me.isOpen = false;
	      }
	    });
	  },
	
	  methods: {
	    changeOption: function changeOption(index, option, event) {
	      var me = this;
	      var menus = me.menus.slice(0, index + 1);
	      if (option.disabled) {
	        return;
	      }
	      me.selectedOptions = me.selectedOptions.slice(0, index + 1);
	      me.selectedOptions[index] = option;
	      if (option.children) {
	        menus.push(option.children);
	      } else {
	        me.displayValue = me.displayRender(me.selectedLabel);
	        // 有事件来的才触发自定义事件，使用defaultValue填充的不触发
	        if (event) {
	          me.$dispatch('change', me.selectedValue, me.selectedOptions);
	        }
	        self.isOpen = false;
	      }
	      me.menus = menus;
	    },
	    toggleMenus: function toggleMenus() {
	      this.isOpen = !this.isOpen;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cascader\">\n  <span class=\"cascader-picker\">\n    <v-input readonly @click=\"toggleMenus\" :value=\"displayValue\" :placeholder=\"placeholder\"></v-input>\n  </span>\n  <div class=\"cascader-menus\" v-show=\"isOpen\">\n    <ul class=\"cascader-menu\" v-for=\"(index, menu) in menus\">\n      <li class=\"cascader-menu-item\" :class=\"{selected:selectedOptions[index] === option,disabled:option.disabled}\" v-for=\"option in menu\" @click=\"changeOption(index,option,$event)\">{{option.label}}</li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(169);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _vue = __webpack_require__(85);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	['info', 'success', 'error', 'warn', 'loading'].forEach(function (type, i) {
	  _Message2.default[type] = function (content, duration, placement) {
	    duration = duration || 3000;
	    placement = placement || 'center';
	    if (!document.getElementsByClassName('vue-message').length) {
	      var box = document.createElement('div');
	      box.className = 'vue-message';
	      document.body.appendChild(box);
	    }
	    var div = document.createElement('div');
	    document.getElementsByClassName('vue-message')[0].appendChild(div);
	    new _vue2.default({
	      el: div,
	      template: '<message class="vue-message-notice" :show.sync="show" :duration="duration" :type="type" width="400px" :placement="placement">{{content}}</message>',
	      components: {
	        Message: _Message2.default
	      },
	      data: {
	        content: content,
	        type: type,
	        duration: duration,
	        show: true,
	        placement: placement
	      },
	      ready: function ready() {
	        var me = this;
	        // me.content = content
	        // me.type = type
	        // me.show = true
	        // me.duration = duration || me.duration
	        // me.placement = placement || me.placement
	        if (me.duration) {
	          setTimeout(function () {
	            var notice = document.getElementsByClassName('vue-message-notice');
	            var element = notice[notice.length - 1];
	            document.getElementsByClassName('vue-message')[0].removeChild(element);
	          }, duration);
	        }
	      }
	    });
	  };
	});
	
	exports.default = _Message2.default;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(170)
	__vue_script__ = __webpack_require__(171)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Message/Message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(172)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Message/Message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 170 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div
	//     v-show="show"
	//     v-bind:class="{
	//       'alert':		true,
	//       'alert-success':(type == 'success'),
	//       'alert-warning':(type == 'warning'),
	//       'alert-info':	(type == 'info'),
	//       'alert-error':	(type == 'error' || type == 'danger'),
	//       'alert-help': (type == 'help'),
	//       'top': 			(placement === 'top'),
	//       'top-right': 	(placement === 'top-right'),
	//       'center':      (placement === 'center'),
	//     }"
	//     transition="fade"
	//     v-bind:style="{width:width}"
	//     role="alert">
	//     <button v-show="dismissable" type="button" class="close" @click="show = false">
	//       <span>&times;</span>
	//     </button>
	//     <icon v-if="showIcon" :type="type"></icon>
	//     <slot>
	//       {{content}}
	//     </slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    showIcon: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: [String, Number]
	    },
	    width: {
	      type: String
	    },
	    placement: {
	      type: String
	    },
	    content: String
	  },
	  components: {
	    Icon: _Icon2.default
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && Boolean(this.duration)) {
	        this._timeout = setTimeout(function () {
	          return _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	// </script>
	//
	// <style lang="less">
	// .fade-transition {
	//   transition: opacity .3s ease;
	// }
	// .fade-enter,
	// .fade-leave {
	//   height: 0;
	//   opacity: 0;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  v-bind:class=\"{\n    'alert':\t\ttrue,\n    'alert-success':(type == 'success'),\n    'alert-warning':(type == 'warning'),\n    'alert-info':\t(type == 'info'),\n    'alert-error':\t(type == 'error' || type == 'danger'),\n    'alert-help': (type == 'help'),\n    'top': \t\t\t(placement === 'top'),\n    'top-right': \t(placement === 'top-right'),\n    'center':      (placement === 'center'),\n  }\"\n  transition=\"fade\"\n  v-bind:style=\"{width:width}\"\n  role=\"alert\">\n  <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"show = false\">\n    <span>&times;</span>\n  </button>\n  <icon v-if=\"showIcon\" :type=\"type\"></icon>\n  <slot>\n    {{content}}\n  </slot>\n</div>\n";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(174);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var iconConfig = {
	  'info': {
	    icon: 'info',
	    color: '#30b2f2'
	  },
	  'success': {
	    icon: 'success',
	    color: '#1dbf38'
	  },
	  'error': {
	    icon: 'error',
	    color: '#ff5959'
	  },
	  'confirm': {
	    icon: 'help',
	    color: '#b366ff'
	  }
	};['info', 'success', 'error', 'confirm'].forEach(function (type) {
	  _Modal2.default[type] = function (parmas) {
	    var title = parmas.title;
	    var content = parmas.content;
	    var onOk = parmas.onOk;
	    if (!document.getElementsByClassName('atui-modal').length) {
	      var box = document.createElement('div');
	      box.className = 'atui-modal';
	      document.body.appendChild(box);
	    }
	    var div = document.createElement('div');
	    document.getElementsByClassName('atui-modal')[0].appendChild(div);
	    new Vue({
	      el: div,
	      template: '<modal class="atui-modal" :show="show" small backdrop="false" :callback="callback"><div v-if="title" slot="modal-header"></div><div slot="modal-body" class="modal-body"><icon :type="type" size="24" :color="color"></icon>{{title}}<br/>{{content}}</div><div v-if="type!==\'help\'" slot="modal-footer" class="modal-footer"><button type="button" class="btn btn-default" @click="this.show=false">知道了</button></div></modal>',
	      components: {
	        Modal: _Modal2.default,
	        Icon: _Icon2.default
	      },
	      data: {
	        title: title,
	        content: content,
	        type: iconConfig[type].icon,
	        color: iconConfig[type].color,
	        show: true
	      },
	      ready: function ready() {
	        var me = this;
	      },
	      methods: {
	        callback: function callback() {
	          onOk();
	          this.show = false;
	        }
	      }
	    });
	  };
	});
	exports.default = _Modal2.default;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(175)
	__vue_script__ = __webpack_require__(177)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Modal/Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Modal/Modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/./src/components/Modal/Modal.vue?f437bf40"],"names":[],"mappings":";AAuIA;EACA,kCAAA;EAAA,0BAAA;CACA;AACA;EACA,kCAAA;CACA;AACA;IACA,8BAAA;IAGA,sBAAA;IACA,WAAA;IACA,WAAA;IACA,6BAAA;IAEA,qBAAA;CACA;AACA;IACA,4BAAA;IAGA,oBAAA;IACA,6CAAA;IACA,qCAAA;IACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n  <div role=\"dialog\"\n    :class=\"{\n    'modal':true,\n    'fade':effect === 'fade',\n    'zoom':effect === 'zoom',\n    'in':in\n    }\"\n    >\n    <div :class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n      :style=\"{width: optionalWidth}\">\n      <div class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"modal-title\" >{{title}}</h4>\n          </div>\n        </slot>\n        <slot name=\"modal-body\">\n          <div class=\"modal-body\"></div>\n        </slot>\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n            <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport getScrollBarWidth from '../utils/getScrollBarWidth.js'\nimport EventListener from '../utils/EventListener.js'\nimport coerceBoolean from '../utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      title: {\n        type: String,\n        default: ''\n      },\n      show: {\n        require: true,\n        type: Boolean,\n        coerce: coerceBoolean,\n        twoWay: true\n      },\n      width: {\n        default: null\n      },\n      callback: {\n        type: Function,\n        default() {}\n      },\n      effect: {\n        type: String,\n        default: null\n      },\n      backdrop: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      large: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      small: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      }\n    },\n    data() {\n      return {\n        in:false\n      }\n    },\n    ready() {\n      this.$watch('show', (val)=> {\n        const el = this.$el\n        const body = document.body\n        const scrollBarWidth =  getScrollBarWidth()\n        if (val) {\n          el.querySelector('.modal-content').focus()\n          el.style.display = 'block'\n          this.in = true\n          if (scrollBarWidth !== 0) {\n            body.style.paddingRight = scrollBarWidth + 'px'\n          }\n          if (this.backdrop) {\n            this._blurModalContentEvent = EventListener.listen(this.$el, 'click', (e)=> {\n              if (e.target === el) this.show = false\n            })\n          }\n        } else {\n          if (this._blurModalContentEvent) this._blurModalContentEvent.remove()\n          this.in = false\n          setTimeout(()=> {\n            el.style.display = 'none'\n            body.style.paddingRight = '0'\n          }, 300)\n        }\n      }, { immediate: true })\n    },\n    computed: {\n      optionalWidth: function() {\n        if( this.width === null ) {\n          return null;\n        } else if( Number.isInteger(this.width) ) {\n          return this.width + \"px\";\n        }\n        return this.width;\n      },\n    },\n    methods: {\n      close() {\n        this.show = false\n      }\n    },\n    compiled () {\n      var me = this;\n\n      window.addEventListener('keyup', function (ev) {\n          if (ev.keyCode === 27) {\n              me.show = false;\n          }\n      });\n    }\n  }\n</script>\n<style>\n.modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(178);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(188);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      require: true,
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      twoWay: true
	    },
	    width: {
	      default: null
	    },
	    callback: {
	      type: Function,
	      default: function _default() {}
	    },
	    effect: {
	      type: String,
	      default: null
	    },
	    backdrop: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    large: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    small: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      in: false
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.$watch('show', function (val) {
	      var el = _this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        el.querySelector('.modal-content').focus();
	        el.style.display = 'block';
	        _this.in = true;
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        if (_this.backdrop) {
	          _this._blurModalContentEvent = _EventListener2.default.listen(_this.$el, 'click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        if (_this._blurModalContentEvent) _this._blurModalContentEvent.remove();
	        _this.in = false;
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }, { immediate: true });
	  },
	
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + "px";
	      }
	      return this.width;
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  },
	  compiled: function compiled() {
	    var me = this;
	
	    window.addEventListener('keyup', function (ev) {
	      if (ev.keyCode === 27) {
	        me.show = false;
	      }
	    });
	  }
	};
	// </script>
	// <style>
	// .modal {
	//   transition: all 0.3s ease;
	// }
	// .modal.in {
	//   background-color: rgba(0,0,0,0.5);
	// }
	// .modal.zoom .modal-dialog {
	//     -webkit-transform: scale(0.1);
	//     -moz-transform: scale(0.1);
	//     -ms-transform: scale(0.1);
	//     transform: scale(0.1);
	//     top: 300px;
	//     opacity: 0;
	//     -webkit-transition: all 0.3s;
	//     -moz-transition: all 0.3s;
	//     transition: all 0.3s;
	// }
	// .modal.zoom.in .modal-dialog {
	//     -webkit-transform: scale(1);
	//     -moz-transform: scale(1);
	//     -ms-transform: scale(1);
	//     transform: scale(1);
	//     -webkit-transform: translate3d(0, -300px, 0);
	//     transform: translate3d(0, -300px, 0);
	//     opacity: 1;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div role="dialog"
	//     :class="{
	//     'modal':true,
	//     'fade':effect === 'fade',
	//     'zoom':effect === 'zoom',
	//     'in':in
	//     }"
	//     >
	//     <div :class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
	//       :style="{width: optionalWidth}">
	//       <div class="modal-content">
	//         <slot name="modal-header">
	//           <div class="modal-header">
	//             <button type="button" class="close" @click="close"><span>&times;</span></button>
	//             <h4 class="modal-title" >{{title}}</h4>
	//           </div>
	//         </slot>
	//         <slot name="modal-body">
	//           <div class="modal-body"></div>
	//         </slot>
	//         <slot name="modal-footer">
	//           <div class="modal-footer">
	//             <button type="button" class="btn btn-default" @click="callback">确定</button>
	//             <button type="button" class="btn tertiary" @click="close">取消</button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(180);
	module.exports = __webpack_require__(183).Number.isInteger;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(181);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(186)});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(182)
	  , core      = __webpack_require__(183)
	  , ctx       = __webpack_require__(184)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 182 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 183 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(185);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(187)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  :class=\"{\n  'modal':true,\n  'fade':effect === 'fade',\n  'zoom':effect === 'zoom',\n  'in':in\n  }\"\n  >\n  <div :class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n    :style=\"{width: optionalWidth}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n          <h4 class=\"modal-title\" >{{title}}</h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\"></div>\n      </slot>\n      <slot name=\"modal-footer\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n          <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(191);
	
	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Table/Table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(207)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Table/Table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(193);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Dropdown = __webpack_require__(131);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Spin = __webpack_require__(203);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    pagination: Object,
	    dataSource: Array,
	    noDataTip: {
	      type: String,
	      default: '没有任何数据'
	    },
	    columns: Array,
	    rowSelection: Object,
	    rowKey: String,
	    loading: Boolean,
	    fixedHeader: Boolean,
	    size: {
	      type: String,
	      default: 'default'
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Dropdown: _Dropdown2.default,
	    Spin: _Spin2.default
	  },
	  data: function data() {
	    this.compileTbody();
	    return {
	      isCheckedAll: false,
	      sorderOrder: [],
	      checkedRows: [],
	      filterOpened: false,
	      filters: null,
	      sorter: null
	    };
	  },
	
	  computed: {
	    checkedValues: function checkedValues() {
	      var me = this;
	      var checkedKeys = me.checkedRows.map(function (record) {
	        return record[me.rowKey];
	      });
	      if (me.rowSelection.onChange) {
	        me.rowSelection.onChange(checkedKeys, me.checkedRows);
	      }
	      return checkedKeys;
	    },
	    checkebleRows: function checkebleRows() {
	      var _this = this;
	
	      // 过滤出非禁用的项供选择使用
	      return this.dataSource.filter(function (record) {
	        if (_this.rowSelection) {
	          return !_this.rowSelection.getCheckboxProps || !_this.rowSelection.getCheckboxProps(record).disabled;
	        }
	      });
	    }
	  },
	  watch: {
	    dataSource: {
	      handler: function handler(data) {
	        // this.checkedRows = []
	        // this.checkedValues = []
	        // this.isCheckedAll = false
	        var me = this;
	        me.compileTbody();
	        // 如果有删除行为或者清空行为，则需要把选中行数据重新计算出，否则checkedRow一直存在没变化
	        me.checkedRows = data.filter(function (record) {
	          if (me.checkedValues) {
	            return me.checkedValues.indexOf(record[me.rowKey]) >= 0;
	          }
	        });
	        if (me.checkebleRows) {
	          me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length;
	        } else {
	          me.isCheckedAll = false;
	        }
	      }
	    }
	  },
	  methods: {
	    compileTbody: function compileTbody() {
	      var me = this;
	      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
	      this.$nextTick(function () {
	        // console.log(me)
	        // me.scope = me.scope || me.$parent
	        me._context.$compile(me.$el.getElementsByTagName('table')[0]);
	      });
	    },
	    sortAction: function sortAction(column, index, order) {
	      if (typeof column.sorter === 'Function') {
	        // TODO:客户端排序
	      }
	      this.sorderOrder[index] = order;
	      this.sorderOrder = (0, _assign2.default)([], this.sorderOrder);
	      this.$dispatch('table-change', this.pagination, this.filters, {
	        field: column.dataIndex,
	        order: order
	      });
	    },
	
	    // 点击全选框触发
	    onCheckAll: function onCheckAll() {
	      var me = this;
	      var changeRows = [];
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	      if (checked) {
	        me.checkebleRows.forEach(function (record, i) {
	          if (me.checkedRows.indexOf(record) < 0) {
	            me.checkedRows.push(record);
	            changeRows.push(record);
	          }
	        });
	        // 不能使用计算属性，因为会与点击全选的行为相冲突
	        me.isCheckedAll = true;
	      } else {
	        me.checkebleRows.forEach(function (record, i) {
	          if (me.checkedRows.indexOf(record) >= 0) {
	            changeRows.push(record);
	          }
	        });
	        me.checkedRows = [];
	      }
	      if (me.rowSelection.onSelectAll) {
	        me.rowSelection.onSelectAll(checked, me.checkedRows, changeRows);
	      }
	      me.$dispatch('table-change', this.pagination, this.filters, this.sorter);
	    },
	
	    // 选中某一个单选框时触发
	    onCheckOne: function onCheckOne(event, record) {
	      var me = this;
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	      if (checked) {
	        if (me.checkedRows.indexOf(record) === -1) {
	          me.checkedRows.push(record);
	        }
	      } else {
	        me.checkedRows = me.checkedRows.filter(function (item) {
	          return record[me.rowKey] != item[me.rowKey];
	        });
	      }
	      if (me.rowSelection.onSelect) {
	        me.rowSelection.onSelect(record, checked, me.checkedRows);
	      }
	      me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length;
	    },
	
	    // filter时触发
	    onFilter: function onFilter(value, column) {
	      var me = this;
	      me.filterOpened = true;
	      setTimeout(function () {
	        me.filterOpened = false;
	      }, 100);
	
	      me.checkedRows = [];
	      me.isCheckedAll = false;
	      me.filters = {};
	      me.filters[column.dataIndex] = [value];
	      me.$dispatch('table-change', this.pagination, me.filters, me.sorter);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// <div :class="{'atui-table-container':true,loading:loading}">
	//   <spin size="sm" v-if="loading"></spin>
	//   <div class="atui-table-body">
	//     <table class="atui-table">
	//       <thead class="table-thead">
	//         <tr>
	//           <th v-if="rowSelection">
	//               <input v-if="dataSource.length" type="checkbox" v-bind="{checked:isCheckedAll}" @change="onCheckAll"/>
	//           </th>
	//           <th v-for="column in columns" :width="column.width">
	//               {{column['title']}}
	//               <dropdown v-if="column.filters" data-toggle="dropdown" :open="filterOpened">
	//                 <div data-toggle="dropdown">
	//                   <icon type="filter" size="12"></icon>
	//                 </div>
	//                 <ul name="dropdown-menu" class="dropdown-menu">
	//                   <li v-for="col in column.filters"><a href="javascript:void(0);" @click="onFilter(col.value, column)">{{col.text}}</a></li>
	//                 </ul>
	//               </dropdown>
	//               <div v-if="dataSource.length && column.sorter" class="table-sorter">
	//                 <icon type="up" size="10" @click="sortAction(column,$index,'ascend')" :class="{active:sorderOrder[$index] == 'ascend'}"></icon>
	//                 <icon type="down" size="10" @click="sortAction(column,$index,'descend')" :class="{active:sorderOrder[$index] == 'descend'}"></icon>
	//               </div>
	//           </th>
	//         </tr>
	//       </thead>
	//       <tbody class="table-tbody">
	//         <tr v-if="!dataSource.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">{{noDataTip}}</td></tr>
	//         <tr v-for="(rowIndex, record) in dataSource" :track-by="$index">
	//             <td v-if="rowSelection">
	//                  <input type="checkbox" v-model="checkedValues" :value="record[rowKey]" @change.stop="onCheckOne($event,record)" v-bind="rowSelection.getCheckboxProps(record)"/>
	//             </td>
	//             <td v-for="column in columns">
	//                 <template v-if="column.render">
	//                     {{{column.render(record[column.dataIndex],record,rowIndex)}}}
	//                 </template>
	//                 <template v-else>
	//                     {{record[column.dataIndex]}}
	//                 </template>
	//             </td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	//
	// </div>
	// </template>
	//
	// <script type="text/babel">

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(194), __esModule: true };

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(195);
	module.exports = __webpack_require__(183).Object.assign;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(181);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(196)});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(197)
	  , toObject = __webpack_require__(198)
	  , IObject  = __webpack_require__(200);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(202)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 197 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(199);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(201);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Spin = __webpack_require__(204);
	
	var _Spin2 = _interopRequireDefault(_Spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spin2.default;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(205)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Spin/Spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(206)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Spin/Spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="['atui-spin',size,{sping:sping}]" v-show="show">
	//   <div class="atui-sping-point">
	//     <div></div>
	//     <div></div>
	//     <div></div>
	//   </div>
	//   <div class="sping-content">
	//     <slot></slot>
	//   </div>
	//
	// </div>
	// </template>
	// <script>
	exports.default = {
	  name: 'spin',
	  props: {
	    show: {
	      type: Boolean
	    },
	    sping: {
	      type: Boolean
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  },
	  methods: {
	    show: function show() {
	      this.show = true;
	    },
	    hide: function hide() {
	      this.show = false;
	    }
	  },
	  created: function created() {}
	};

	/* generated by vue-loader */

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"['atui-spin',size,{sping:sping}]\" v-show=\"show\">\n  <div class=\"atui-sping-point\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n  <div class=\"sping-content\">\n    <slot></slot>\n  </div>\n\n</div>\n";

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{'atui-table-container':true,loading:loading}\">\n  <spin size=\"sm\" v-if=\"loading\"></spin>\n  <div class=\"atui-table-body\">\n    <table class=\"atui-table\">\n      <thead class=\"table-thead\">\n        <tr>\n          <th v-if=\"rowSelection\">\n              <input v-if=\"dataSource.length\" type=\"checkbox\" v-bind=\"{checked:isCheckedAll}\" @change=\"onCheckAll\"/>\n          </th>\n          <th v-for=\"column in columns\" :width=\"column.width\">\n              {{column['title']}}\n              <dropdown v-if=\"column.filters\" data-toggle=\"dropdown\" :open=\"filterOpened\">\n                <div data-toggle=\"dropdown\">\n                  <icon type=\"filter\" size=\"12\"></icon>\n                </div>\n                <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n                  <li v-for=\"col in column.filters\"><a href=\"javascript:void(0);\" @click=\"onFilter(col.value, column)\">{{col.text}}</a></li>\n                </ul>\n              </dropdown>\n              <div v-if=\"dataSource.length && column.sorter\" class=\"table-sorter\">\n                <icon type=\"up\" size=\"10\" @click=\"sortAction(column,$index,'ascend')\" :class=\"{active:sorderOrder[$index] == 'ascend'}\"></icon>\n                <icon type=\"down\" size=\"10\" @click=\"sortAction(column,$index,'descend')\" :class=\"{active:sorderOrder[$index] == 'descend'}\"></icon>\n              </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody class=\"table-tbody\">\n        <tr v-if=\"!dataSource.length\"><td colspan=\"10000\" style=\"text-align: center;\" class=\"vue-table-empty\">{{noDataTip}}</td></tr>\n        <tr v-for=\"(rowIndex, record) in dataSource\" :track-by=\"$index\">\n            <td v-if=\"rowSelection\">\n                 <input type=\"checkbox\" v-model=\"checkedValues\" :value=\"record[rowKey]\" @change.stop=\"onCheckOne($event,record)\" v-bind=\"rowSelection.getCheckboxProps(record)\"/>\n            </td>\n            <td v-for=\"column in columns\">\n                <template v-if=\"column.render\">\n                    {{{column.render(record[column.dataIndex],record,rowIndex)}}}\n                </template>\n                <template v-else>\n                    {{record[column.dataIndex]}}\n                </template>\n            </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n";

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Badge = __webpack_require__(209);
	
	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Badge2.default;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(210)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Badge/Badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(211)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Badge/Badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <span class="badge">
	//   <slot></slot>
	//   <sup class="badge-dot" v-if="dot"></sup>
	//   <template v-else>
	//     <sup v-if='count > 0' class="badge-count">
	//       {{count | short}}
	//     </sup>
	//   </template>
	// </span>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'badge',
	  props: {
	    count: {
	      type: Number
	    },
	    dot: {
	      type: Boolean
	    }
	  },
	  filters: {
	    short: function short(value) {
	      return value >= 100 ? '99+' : value;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"badge\">\n  <slot></slot>\n  <sup class=\"badge-dot\" v-if=\"dot\"></sup>\n  <template v-else>\n    <sup v-if='count > 0' class=\"badge-count\">\n      {{count | short}}\n    </sup>\n  </template>\n</span>\n";

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(213);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slide = __webpack_require__(245);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Carousel2.default.Slide = _Slide2.default;
	
	exports.default = _Carousel2.default;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(214)
	__vue_script__ = __webpack_require__(216)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(244)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Carousel/Carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(215);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-276df37b&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-276df37b&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[_v-276df37b] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Carousel/Carousel.vue?07e3af8f"],"names":[],"mappings":";AAsHA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\n<div class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <indicator></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <slot></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</template>\n\n<script>\nimport EventListener from '../utils/EventListener.js'\nimport coerceBoolean from '../utils/coerceBoolean.js'\n  export default {\n    props: {\n      indicators: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      controls: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      interval: {\n        type: Number,\n        default: 5000\n      }\n    },\n    components: {\n      'indicator': {\n        inherit: true,\n        template: '<li v-for=\"i in indicator\" @click=\"handleIndicatorClick($index)\" v-bind:class=\"{\\'active\\':$index === activeIndex}\"</li>',\n        methods: {\n          handleIndicatorClick(index) {\n            if (this.isAnimating) return false\n            this.isAnimating = true\n            this.activeIndex = index\n          }\n        },\n      }\n    },\n    data() {\n      return {\n        indicator: [],\n        activeIndex: 0,\n        isAnimating: false\n      }\n    },\n    computed: {\n      slider() {\n        return this.$el.querySelectorAll('.item')\n      }\n    },\n    watch: {\n      activeIndex(newVal, oldVal) {\n        newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)\n      }\n    },\n    methods: {\n      slide(direction, selected, prev) {\n        if (this._prevSelectedEvent) this._prevSelectedEvent.remove()\n        if (this._selectedEvent) this._selectedEvent.remove()\n        const prevSelectedEl = this.slider[prev]\n        const selectedEl = this.slider[selected]\n        const transitionendFn = ()=> {\n          [...this.slider].forEach((el)=> el.className = 'item')\n          selectedEl.classList.add('active')\n          this.isAnimating = false\n        }\n        direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev')\n        // request property that requires layout to force a layout\n        var x = selectedEl.clientHeight\n        this._prevSelectedEvent = EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)\n        this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)\n        prevSelectedEl.classList.add(direction)\n        selectedEl.classList.add(direction)\n      },\n      nextClick() {\n        if (this.isAnimating) return false\n        this.isAnimating = true\n        this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0\n      },\n      prevClick() {\n        if (this.isAnimating) return false\n        this.isAnimating = true\n        this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1\n      }\n    },\n    ready() {\n      let intervalID = null\n      const el = this.$el\n      function intervalManager(flag, func, time) {\n        flag ? intervalID =  setInterval(func, time) : clearInterval(intervalID)\n      }\n      if (!!this.interval) {\n        intervalManager(true, this.nextClick, this.interval)\n        el.addEventListener('mouseenter', ()=> intervalManager(false))\n        el.addEventListener('mouseleave', ()=> intervalManager(true, this.nextClick, this.interval))\n      }\n    },\n  }\n</script>\n\n<style scoped>\n  .carousel-control {\n    cursor: pointer;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(217);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="carousel slide" data-ride="carousel">
	//   <!-- Indicators -->
	//   <ol class="carousel-indicators" v-show="indicators">
	//     <indicator></indicator>
	//   </ol>
	//   <!-- Wrapper for slides -->
	//   <div class="carousel-inner" role="listbox">
	//     <slot></slot>
	//   </div>
	//   <!-- Controls -->
	//   <a v-show="controls" class="left carousel-control" @click="prevClick">
	//     <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	//     <span class="sr-only">Previous</span>
	//   </a>
	//   <a v-show="controls" class="right carousel-control" @click="nextClick">
	//     <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	//     <span class="sr-only">Next</span>
	//   </a>
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 5000
	    }
	  },
	  components: {
	    'indicator': {
	      inherit: true,
	      template: '<li v-for="i in indicator" @click="handleIndicatorClick($index)" v-bind:class="{\'active\':$index === activeIndex}"</li>',
	      methods: {
	        handleIndicatorClick: function handleIndicatorClick(index) {
	          if (this.isAnimating) return false;
	          this.isAnimating = true;
	          this.activeIndex = index;
	        }
	      }
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      activeIndex: 0,
	      isAnimating: false
	    };
	  },
	
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.item');
	    }
	  },
	  watch: {
	    activeIndex: function activeIndex(newVal, oldVal) {
	      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal);
	    }
	  },
	  methods: {
	    slide: function slide(direction, selected, prev) {
	      var _this = this;
	
	      if (this._prevSelectedEvent) this._prevSelectedEvent.remove();
	      if (this._selectedEvent) this._selectedEvent.remove();
	      var prevSelectedEl = this.slider[prev];
	      var selectedEl = this.slider[selected];
	      var transitionendFn = function transitionendFn() {
	        [].concat((0, _toConsumableArray3.default)(_this.slider)).forEach(function (el) {
	          return el.className = 'item';
	        });
	        selectedEl.classList.add('active');
	        _this.isAnimating = false;
	      };
	      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev');
	      // request property that requires layout to force a layout
	      var x = selectedEl.clientHeight;
	      this._prevSelectedEvent = _EventListener2.default.listen(prevSelectedEl, 'transitionend', transitionendFn);
	      this._selectedEvent = _EventListener2.default.listen(selectedEl, 'transitionend', transitionendFn);
	      prevSelectedEl.classList.add(direction);
	      selectedEl.classList.add(direction);
	    },
	    nextClick: function nextClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0;
	    },
	    prevClick: function prevClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var intervalID = null;
	    var el = this.$el;
	    function intervalManager(flag, func, time) {
	      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID);
	    }
	    if (!!this.interval) {
	      intervalManager(true, this.nextClick, this.interval);
	      el.addEventListener('mouseenter', function () {
	        return intervalManager(false);
	      });
	      el.addEventListener('mouseleave', function () {
	        return intervalManager(true, _this2.nextClick, _this2.interval);
	      });
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//   .carousel-control {
	//     cursor: pointer;
	//   }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(218);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(219), __esModule: true };

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(220);
	__webpack_require__(236);
	module.exports = __webpack_require__(183).Array.from;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(221)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(223)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(222)
	  , defined   = __webpack_require__(199);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(224)
	  , $export        = __webpack_require__(181)
	  , redefine       = __webpack_require__(225)
	  , hide           = __webpack_require__(226)
	  , has            = __webpack_require__(229)
	  , Iterators      = __webpack_require__(230)
	  , $iterCreate    = __webpack_require__(231)
	  , setToStringTag = __webpack_require__(232)
	  , getProto       = __webpack_require__(197).getProto
	  , ITERATOR       = __webpack_require__(233)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(226);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(197)
	  , createDesc = __webpack_require__(227);
	module.exports = __webpack_require__(228) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(202)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 229 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(197)
	  , descriptor     = __webpack_require__(227)
	  , setToStringTag = __webpack_require__(232)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(226)(IteratorPrototype, __webpack_require__(233)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(197).setDesc
	  , has = __webpack_require__(229)
	  , TAG = __webpack_require__(233)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(234)('wks')
	  , uid    = __webpack_require__(235)
	  , Symbol = __webpack_require__(182).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(182)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 235 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(184)
	  , $export     = __webpack_require__(181)
	  , toObject    = __webpack_require__(198)
	  , call        = __webpack_require__(237)
	  , isArrayIter = __webpack_require__(239)
	  , toLength    = __webpack_require__(240)
	  , getIterFn   = __webpack_require__(241);
	$export($export.S + $export.F * !__webpack_require__(243)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(238);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(187);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(230)
	  , ITERATOR   = __webpack_require__(233)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(222)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(242)
	  , ITERATOR  = __webpack_require__(233)('iterator')
	  , Iterators = __webpack_require__(230);
	module.exports = __webpack_require__(183).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(201)
	  , TAG = __webpack_require__(233)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(233)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-276df37b=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-276df37b=\"\">\n    <indicator _v-276df37b=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-276df37b=\"\">\n    <slot _v-276df37b=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Next</span>\n  </a>\n</div>\n";

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(246)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Slide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(247)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Carousel/Slide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 246 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="item">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.activeIndex === this.index;
	    }
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = parseInt(c, 10);
	        break;
	      }
	    }
	    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(249)
	__vue_script__ = __webpack_require__(251)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(252)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(250);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-affix {\n  position: fixed;\n}\n", "", {"version":3,"sources":["/./src/components/Affix.vue?43e2bfa3"],"names":[],"mappings":";AAqFA;EACA,gBAAA;CACA","file":"Affix.vue","sourcesContent":["<template>\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\n  export default {\n    props: {\n      offset: {\n        type: Number,\n        default: 0\n      }\n    },\n    data() {\n      return {\n        affixed: false,\n        styles: {}\n      }\n    },\n    methods: {\n      scrolling() {\n        const scrollTop = this.getScroll(window, true)\n        const elementOffset = this.getOffset(this.$el)\n        if (!this.affixed && scrollTop > elementOffset.top) {\n          this.affixed = true\n          this.styles = {\n            top: this.offset + 'px',\n            left: elementOffset.left + 'px',\n            width: this.$el.offsetWidth + 'px'\n          }\n        }\n        if (this.affixed && scrollTop < elementOffset.top) {\n          this.affixed = false\n          this.styles = {}\n        }\n      },\n      // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20\n      getScroll(w, top) {\n        let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']\n        const method = 'scroll' + (top ? 'Top' : 'Left')\n        if (typeof ret !== 'number') {\n          const d = w.document\n          // ie6,7,8 standard mode\n          ret = d.documentElement[method]\n          if (typeof ret !== 'number') {\n            // quirks mode\n            ret = d.body[method]\n          }\n        }\n        return ret\n      },\n      getOffset(element) {\n        const rect = element.getBoundingClientRect()\n        const body = document.body\n        const clientTop = element.clientTop || body.clientTop || 0\n        const clientLeft = element.clientLeft || body.clientLeft || 0\n        const scrollTop = this.getScroll(window, true)\n        const scrollLeft = this.getScroll(window)\n        return {\n          top: rect.top + scrollTop - clientTop,\n          left: rect.left + scrollLeft - clientLeft\n        }\n      }\n    },\n    ready() {\n      this._scrollEvent = EventListener.listen(window, 'scroll', this.scrolling)\n      this._resizeEvent = EventListener.listen(window, 'resize', this.scrolling)\n    },\n    beforeDestroy() {\n      if (this._scrollEvent) {\n        this._scrollEvent.remove()\n      }\n      if (this._resizeEvent) {\n        this._resizeEvent.remove()\n      }\n    }\n  }\n</script>\n\n<style>\n  .vue-affix {\n    position: fixed;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {}
	    };
	  },
	
	  methods: {
	    scrolling: function scrolling() {
	      var scrollTop = this.getScroll(window, true);
	      var elementOffset = this.getOffset(this.$el);
	      if (!this.affixed && scrollTop > elementOffset.top) {
	        this.affixed = true;
	        this.styles = {
	          top: this.offset + 'px',
	          left: elementOffset.left + 'px',
	          width: this.$el.offsetWidth + 'px'
	        };
	      }
	      if (this.affixed && scrollTop < elementOffset.top) {
	        this.affixed = false;
	        this.styles = {};
	      }
	    },
	
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	        // ie6,7,8 standard mode
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          // quirks mode
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	  },
	  ready: function ready() {
	    this._scrollEvent = _EventListener2.default.listen(window, 'scroll', this.scrolling);
	    this._resizeEvent = _EventListener2.default.listen(window, 'resize', this.scrolling);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._scrollEvent) {
	      this._scrollEvent.remove();
	    }
	    if (this._resizeEvent) {
	      this._resizeEvent.remove();
	    }
	  }
	};
	// </script>
	//
	// <style>
	//   .vue-affix {
	//     position: fixed;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	// <div>
	// <div v-bind:class="{'vue-affix': affixed}"
	//   v-bind:style="styles">
	//   <slot></slot>
	// </div>
	// </div>
	// </template>
	//
	// <script>

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n";

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(254);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(255)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Textarea/Textarea.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(256)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Textarea/Textarea.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 255 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <textarea v-bind="{disabled: isDisabled}" maxlength="{{limitWords}}" class="textarea" :class="classObj" name="{{name}}" placeholder="{{placeholder}}" v-model="content"></textarea>
	// <p v-if="limitWords" class="words-area" :class="wordClass">{{ curWords }}/{{ limitWords }}</p>
	// <p v-if="showWordsCount" class="words-area">{{ countTips }}{{ curWords }}</p>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    limitWords: Number,
	    placeholder: String,
	    name: String,
	    disabled: null,
	    error: null,
	    success: null,
	    content: String,
	    wordsCount: null,
	    countTips: {
	      type: String,
	      default: '输入字数：'
	    }
	  },
	  data: function data() {
	    return {
	      overLimit: false,
	      isDisabled: this.disabled == true || this.disabled === ''
	    };
	  },
	
	  computed: {
	    showWordsCount: function showWordsCount() {
	      return this.wordsCount == true || this.wordsCount === 'true' || this.wordsCount === '';
	    },
	    curWords: function curWords() {
	      if (this.content) {
	        return this.content.length;
	      }
	
	      return 0;
	    },
	    classObj: function classObj() {
	      return {
	        'error': this.error || this.error === '' || this.overLimit,
	        'success': this.success == true || this.success === ''
	      };
	    },
	    wordClass: function wordClass() {
	      return {
	        'words-error': this.error || this.error === '' || this.overLimit
	      };
	    }
	  },
	  watch: {
	    'content': function content(newVal, oldVal) {
	      var len = newVal.length;
	      this.curWords = len;
	      if (len >= this.limitWords - 0) {
	        this.overLimit = true;
	      } else {
	        this.overLimit = false;
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "\n<textarea v-bind=\"{disabled: isDisabled}\" maxlength=\"{{limitWords}}\" class=\"textarea\" :class=\"classObj\" name=\"{{name}}\" placeholder=\"{{placeholder}}\" v-model=\"content\"></textarea>\n<p v-if=\"limitWords\" class=\"words-area\" :class=\"wordClass\">{{ curWords }}/{{ limitWords }}</p>\n<p v-if=\"showWordsCount\" class=\"words-area\">{{ countTips }}{{ curWords }}</p>\n";

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(258);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tooltip2.default;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(259)
	__vue_script__ = __webpack_require__(261)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tooltip/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(263)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tooltip/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(260);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  -webkit-animation:fadein-in 0.3s ease-in;\n          animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  -webkit-animation:fadein-out 0.3s ease-out;\n          animation:fadein-out 0.3s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n", "", {"version":3,"sources":["/./src/components/Tooltip/Tooltip.vue?5f9e0a5c"],"names":[],"mappings":";EAkDA;IACA,WAAA;GACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AAPA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AAPA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\n  <span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"tooltip\"\n    v-bind:class=\"{\n    'top':    placement === 'top',\n    'top-left':    placement === 'topLeft',\n    'top-right':    placement === 'topRight',\n    'left':   placement === 'left',\n    'left-top':   placement === 'leftTop',\n    'left-bottom':   placement === 'leftBottom',\n    'right':  placement === 'right',\n    'right-top':  placement === 'rightTop',\n    'right-bottom':  placement === 'rightBottom',\n    'bottom': placement === 'bottom',\n    'bottom-left': placement === 'bottomLeft',\n    'bottom-right': placement === 'bottomRight'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\"\n    role=\"tooltip\">\n    <div class=\"tooltip-arrow\" v-el:arrow></div>\n    <div class=\"tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>\n</template>\n\n<script>\n  import PopoverMixin from '../popoverMixins.js'\n\n  export default {\n    mixins: [PopoverMixin],\n    props : {\n      trigger: {\n        type   : String,\n        default: 'hover'\n      },\n      effect : {\n        type   : String,\n        default: 'scale'\n      }\n    }\n  }\n</script>\n\n<style>\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(262);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    effect: {
	      type: String,
	      default: 'scale'
	    }
	  }
	};
	// </script>
	//
	// <style>
	//   .tooltip {
	//     opacity: .9
	//   }
	// .fadein-enter {
	//   animation:fadein-in 0.3s ease-in;
	// }
	// .fadein-leave {
	//   animation:fadein-out 0.3s ease-out;
	// }
	// @keyframes fadein-in {
	//   0% {
	//     opacity: 0;
	//   }
	//   100% {
	//     opacity: 1;
	//   }
	// }
	// @keyframes fadein-out {
	//   0% {
	//     opacity: 1;
	//   }
	//   100% {
	//     opacity: 0;
	//   }
	// }
	//
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <span v-el:trigger>
	//     <slot>
	//     </slot>
	//   </span>
	//   <div class="tooltip"
	//     v-bind:class="{
	//     'top':    placement === 'top',
	//     'top-left':    placement === 'topLeft',
	//     'top-right':    placement === 'topRight',
	//     'left':   placement === 'left',
	//     'left-top':   placement === 'leftTop',
	//     'left-bottom':   placement === 'leftBottom',
	//     'right':  placement === 'right',
	//     'right-top':  placement === 'rightTop',
	//     'right-bottom':  placement === 'rightBottom',
	//     'bottom': placement === 'bottom',
	//     'bottom-left': placement === 'bottomLeft',
	//     'bottom-right': placement === 'bottomRight'
	//     }"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect"
	//     role="tooltip">
	//     <div class="tooltip-arrow" v-el:arrow></div>
	//     <div class="tooltip-inner">
	//       {{{content}}}
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(121);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopoverMixin = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    },
	    placement: {
	      type: String
	    }
	  },
	
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: true
	    };
	  },
	
	
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	
	      if (this.show) {
	        this.resetPos();
	      }
	    },
	
	
	    /**
	     * 设置tooltip坐标
	     * @param initial
	       */
	    resetPos: function resetPos(initial) {
	      var _this = this;
	
	      var popover = this.$els.popover;
	      var triger = this.$els.trigger.children[0];
	
	      switch (this.placement) {
	        case 'top':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = triger.offsetTop - popover.offsetHeight;
	          break;
	        case 'topLeft':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4;
	          this.position.top = triger.offsetTop - popover.offsetHeight;
	          break;
	        case 'topRight':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4;
	          this.position.top = triger.offsetTop - popover.offsetHeight;
	          break;
	        case 'left':
	          this.position.left = triger.offsetLeft - popover.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'leftTop':
	          this.position.left = triger.offsetLeft - popover.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4;
	          break;
	        case 'leftBottom':
	          this.position.left = triger.offsetLeft - popover.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4;
	          break;
	        case 'right':
	          this.position.left = triger.offsetLeft + triger.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'rightTop':
	          this.position.left = triger.offsetLeft + triger.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4;
	          break;
	        case 'rightBottom':
	          this.position.left = triger.offsetLeft + triger.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4;
	          break;
	        case 'bottom':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = triger.offsetTop + triger.offsetHeight;
	          break;
	        case 'bottomLeft':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4;
	          this.position.top = triger.offsetTop + triger.offsetHeight;
	          break;
	        case 'bottomRight':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4;
	          this.position.top = triger.offsetTop + triger.offsetHeight;
	          break;
	        default:
	          console.log('Wrong placement prop');
	      }
	
	      //如果popover没有大小,则重新设置一次
	      if (popover.offsetWidth == 0 && popover.offsetHeight == 0) {
	        setTimeout(function () {
	          return _this.resetPos(initial);
	        });
	        return;
	      }
	
	      popover.style.width = popover.offsetWidth + 'px';
	      popover.style.height = popover.offsetHeight + 'px';
	      popover.style.top = this.position.top + 'px';
	      popover.style.left = this.position.left + 'px';
	
	      if (initial) {
	        popover.style.display = 'none';
	        this.show = !this.show;
	      }
	
	      //使用transform:translate定位,会影响到transform:scale动画效果
	      //this.position.top = this.position.top - triger.offsetHeight - 5
	      //this.position.left -= 5
	      //popover.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)'
	    }
	  },
	
	  ready: function ready() {
	    var _this2 = this;
	
	    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
	
	    var me = this;
	    var popover = this.$els.popover;
	    var triger = this.$els.trigger.children[0];
	
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        me.show = true;
	        me.resetPos();
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        return _this2.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _EventListener2.default.listen(triger, 'focus', function () {
	        me.show = true;
	        me.resetPos();
	      });
	      this._blurEvent = _EventListener2.default.listen(triger, 'blur', function () {
	        return _this2.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
	    }
	
	    this.resetPos(true);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) this._clickEvent.remove();
	  }
	};
	
	exports.default = PopoverMixin;

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"tooltip\"\n  v-bind:class=\"{\n  'top':    placement === 'top',\n  'top-left':    placement === 'topLeft',\n  'top-right':    placement === 'topRight',\n  'left':   placement === 'left',\n  'left-top':   placement === 'leftTop',\n  'left-bottom':   placement === 'leftBottom',\n  'right':  placement === 'right',\n  'right-top':  placement === 'rightTop',\n  'right-bottom':  placement === 'rightBottom',\n  'bottom': placement === 'bottom',\n  'bottom-left': placement === 'bottomLeft',\n  'bottom-right': placement === 'bottomRight'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\"\n  role=\"tooltip\">\n  <div class=\"tooltip-arrow\" v-el:arrow></div>\n  <div class=\"tooltip-inner\">\n    {{{content}}}\n  </div>\n</div>\n";

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Accordion = __webpack_require__(265);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(268);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Accordion2.default.Panel = _Panel2.default;
	
	exports.default = _Accordion2.default;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(266)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(267)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Accordion/Accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 266 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	
	exports.default = {
	  name: 'accordion',
	  props: {
	    oneAtATime: {
	      type: Boolean
	    }
	  },
	  methods: {
	    _mapIndexToChildComponent: function _mapIndexToChildComponent() {
	      var self = this;
	      self.$children.forEach(function (item, index) {
	        item.index = index;
	      });
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtATime) {
	        _this.$children.forEach(function (item, index) {
	          item.index = index;
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	    });
	  },
	  ready: function ready() {
	    this._mapIndexToChildComponent();
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(269)
	__vue_script__ = __webpack_require__(271)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(272)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Accordion/Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(270);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\n-webkit-transition: max-height .5s ease;\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n", "", {"version":3,"sources":["/./src/components/Accordion/Panel.vue?0a0a061b"],"names":[],"mappings":";AA6DA;EACA,gBAAA;CACA;;AAEA;AACA,wCAAA;AAAA,gCAAA;AACA,iBAAA;CACA;;AAEA;EACA,wBAAA;CACA","file":"Panel.vue","sourcesContent":["<template>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\" @click=\"toggleIsOpen()\">\n      <slot name=\"panel-header\"></slot>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from '../utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      isOpen: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      header: {\n        type: String\n      },\n      onToggle: {\n        type: Function,\n        default: () => {}\n      },\n      index: {\n        type: Number\n      }\n    },\n    data() {\n      return {\n        height: 0\n      }\n    },\n    methods: {\n      toggleIsOpen() {\n        this.isOpen = !this.isOpen\n        this.onToggle(this)\n        this.$dispatch('isOpenEvent', this)\n      }\n    },\n    ready() {\n      const panel = this.$els.panel\n      panel.style.display = 'block'\n      this.height = panel.offsetHeight\n      //panel.style.maxHeight = this.height + 'px'\n      if (!this.isOpen) panel.style.display = 'none'\n    }\n  }\n</script>\n\n<style>\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    header: {
	      type: String
	    },
	    onToggle: {
	      type: Function,
	      default: function _default() {}
	    },
	    index: {
	      type: Number
	    }
	  },
	  data: function data() {
	    return {
	      height: 0
	    };
	  },
	
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.isOpen = !this.isOpen;
	      this.onToggle(this);
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  ready: function ready() {
	    var panel = this.$els.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    //panel.style.maxHeight = this.height + 'px'
	    if (!this.isOpen) panel.style.display = 'none';
	  }
	};
	// </script>
	//
	// <style>
	// .accordion-toggle {
	//   cursor: pointer;
	// }
	//
	// .collapse-transition {
	// transition: max-height .5s ease;
	// overflow: hidden;
	// }
	//
	// .collapse-enter, .collapse-leave {
	//   max-height: 0!important;
	// }
	//
	// </style>

	/* generated by vue-loader */
	// <template>
	// <div class="panel panel-default">
	//     <div class="panel-heading" @click="toggleIsOpen()">
	//       <slot name="panel-header"></slot>
	//     </div>
	//     <div class="panel-collapse"
	//       v-el:panel
	//       v-show="isOpen"
	//       transition="collapse"
	//     >
	//       <div class="panel-body">
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\" @click=\"toggleIsOpen()\">\n      <slot name=\"panel-header\"></slot>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(274);
	
	var _Popover2 = _interopRequireDefault(_Popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Popover2.default;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(275)
	__vue_script__ = __webpack_require__(277)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Popover/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(278)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Popover/Popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(276);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  -webkit-animation:scale-in 0.15s ease-in;\n          animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  -webkit-animation:scale-out 0.15s ease-out;\n          animation:scale-out 0.15s ease-out;\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n", "", {"version":3,"sources":["/./src/components/Popover/Popover.vue?097aaa91"],"names":[],"mappings":";AA8BA;;EAEA,eAAA;CACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA","file":"Popover.vue","sourcesContent":["<template>\n  <span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"popover\"\n    v-bind:class=\"{\n    'top':placement === 'top',\n    'left':placement === 'left',\n    'right':placement === 'right',\n    'bottom':placement === 'bottom'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n      <div class=\"popover-content\">\n        {{{content}}}\n      </div>\n  </div>\n</template>\n\n<script>\nimport PopoverMixin from '../popoverMixins.js'\n  export default {\n    mixins: [PopoverMixin]\n  }\n</script>\n<style>\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(262);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default]
	};
	// </script>
	// <style>
	// .scale-transition,
	// .fade-transition {
	//   display: block;
	// }
	// .scale-enter {
	//   animation:scale-in 0.15s ease-in;
	// }
	// .scale-leave {
	//   animation:scale-out 0.15s ease-out;
	// }
	// @keyframes scale-in {
	//   0% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	//   100% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	// }
	// @keyframes scale-out {
	//   0% {
	//     transform: scale(1);
	//     opacity: 1;
	//   }
	//   100% {
	//     transform: scale(0);
	//     opacity: 0;
	//   }
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <span v-el:trigger>
	//     <slot>
	//     </slot>
	//   </span>
	//   <div class="popover"
	//     v-bind:class="{
	//     'top':placement === 'top',
	//     'left':placement === 'left',
	//     'right':placement === 'right',
	//     'bottom':placement === 'bottom'
	//     }"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect">
	//       <div class="arrow"></div>
	//       <h3 class="popover-title" v-show="title">{{title}}</h3>
	//       <div class="popover-content">
	//         {{{content}}}
	//       </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"popover\"\n  v-bind:class=\"{\n  'top':placement === 'top',\n  'left':placement === 'left',\n  'right':placement === 'right',\n  'bottom':placement === 'bottom'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\">\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n    <div class=\"popover-content\">\n      {{{content}}}\n    </div>\n</div>\n";

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(280);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(283);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Tabset2.default.Tab = _Tab2.default;
	
	exports.default = _Tabset2.default;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(281)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(282)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tabs/Tabset.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    active: {
	      type: Number,
	      default: 0
	    },
	    showLen: {
	      type: Number,
	      default: 3
	    },
	    base: {
	      type: Boolean,
	      default: false
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    }
	  },
	
	  data: function data() {
	    return {
	      renderData: [],
	      index: 2,
	      translateX: 0,
	      wrapperWidth: 0,
	      navWidth: 0,
	      prev_tabIndex: 0,
	      next_tabIndex: 0,
	      itemsWidth: []
	    };
	  },
	
	  components: {
	    Icon: _Icon2.default
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      return {
	        'nav': true,
	        'nav-tabs': !this.base,
	        'nav-base': this.base
	      };
	    }
	  },
	  methods: {
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) this.active = index;
	    },
	    prev: function prev() {
	      this._handleMoveX('right');
	    },
	    next: function next() {
	      this._handleMoveX('left');
	    },
	    _handleMoveX: function _handleMoveX(direction) {
	      var totalLen = this.renderData.length;
	      switch (direction) {
	        case 'left':
	          /**
	           * 这里需要计算maxTabIndex, 本身Tab的最大index应该是totalLen-1，但是为了后面的Tab宽度太宽，需要将最大的index增加（this.showLen-1）, 也就是让整个nav再多向左移动这些次，以让每一个Tab的内容都能显示清楚。
	           */
	          var maxTabIndex = totalLen - 1 + (this.showLen - 1);
	          if (this.next_tabIndex === maxTabIndex) return;
	          this.prev_tabIndex++;
	          this.next_tabIndex = this.prev_tabIndex + this.showLen - 1;
	          break;
	
	        case 'right':
	          if (this.prev_tabIndex === 0) return;
	          this.next_tabIndex--;
	          this.prev_tabIndex = this.next_tabIndex - (this.showLen - 1);
	          break;
	      }
	      this.$el.querySelector('.nav').style.transform = "translateX(-" + this.itemsWidth[this.prev_tabIndex].left + 'px)';
	    },
	    _handleTabWidth: function _handleTabWidth() {
	      var self = this;
	      var dom = self.$el;
	      var nav = dom.querySelector('.nav');
	      var tabsHeader = dom.querySelector('.tabs-header');
	      var list = nav.children;
	      var showlen = this.showLen;
	      var len = list.length;
	      self.next_tabIndex = showlen - 1;
	
	      var i = 0;
	      for (; i < len; i++) {
	        var _itemWidth = Math.ceil(list[i].offsetWidth);
	        self.navWidth += _itemWidth;
	        self.itemsWidth.push({ width: _itemWidth, left: self.navWidth - _itemWidth });
	        if (i < showlen) {
	          self.wrapperWidth += _itemWidth;
	        }
	      }
	      tabsHeader.style.width = self.wrapperWidth + 'px';
	      self.$el.style.visibility = 'visible';
	    }
	  },
	
	  compiled: function compiled() {
	    this.$el.style.visibility = 'hidden';
	  },
	  ready: function ready() {
	    var self = this;
	    /**
	     * 动态去设置容器tabsWrapper的宽度以及内部nav的宽度，以便让它不溢出，类似于轮播图。
	     * 这里需要用setTimeout函数，否则获取不到dom节点。
	     */
	    setTimeout(function () {
	      self._handleTabWidth();
	    }, 30);
	  }
	};

	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="tabsWrapper">
	//     <div class="tabs-header">
	//       <span v-if="renderData.length > showLen && showLen >= 3 " class="arrow-prev" @click="prev"><icon type="prev" size="12"></icon></span>
	//       <ul v-if="trigger=='click'" :class="wrapClasses" role="tablist" style="width: 99999px;">
	//         <li v-for="r in renderData"
	//             v-bind:class="{
	//               'active': ($index === active),
	//               'disabled': r.disabled
	//             }"
	//             @click.prevent="handleTabListClick($index, r)"
	//             :disabled="r.disabled"
	//         >
	//             <a href="javascript:void(0);">{{{r.header}}}</a>
	//         </li>
	//       </ul>
	//       <ul v-else :class="wrapClasses" role="tablist" style="width: 99999px;">
	//       <li v-for="r in renderData"
	//             v-bind:class="{
	//               'active': ($index === active),
	//               'disabled': r.disabled
	//             }"
	//             @mouseenter.prevent="handleTabListClick($index, r)"
	//             :disabled="r.disabled"
	//         >
	//             <a href="javascript:void(0);">{{{r.header}}}</a>
	//         </li>
	//       </ul>
	//       <span v-if="renderData.length > showLen && showLen >= 3" class="arrow-next" @click="next"><icon type="next" size="12"></icon>
	//       </span>
	//     </div>
	//
	//      <!-- Tab panes -->
	//      <div class="tab-content" v-el:tab-content>
	//         <slot></slot>
	//      </div>
	//   </div>
	//
	// </template>
	//
	// <script>

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"tabsWrapper\">\n  <div class=\"tabs-header\">\n    <span v-if=\"renderData.length > showLen && showLen >= 3 \" class=\"arrow-prev\" @click=\"prev\"><icon type=\"prev\" size=\"12\"></icon></span>\n    <ul v-if=\"trigger=='click'\" :class=\"wrapClasses\" role=\"tablist\" style=\"width: 99999px;\">\n      <li v-for=\"r in renderData\"\n          v-bind:class=\"{\n            'active': ($index === active),\n            'disabled': r.disabled\n          }\"\n          @click.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <ul v-else :class=\"wrapClasses\" role=\"tablist\" style=\"width: 99999px;\">\n    <li v-for=\"r in renderData\"\n          v-bind:class=\"{\n            'active': ($index === active),\n            'disabled': r.disabled\n          }\"\n          @mouseenter.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <span v-if=\"renderData.length > showLen && showLen >= 3\" class=\"arrow-next\" @click=\"next\"><icon type=\"next\" size=\"12\"></icon>\n    </span>\n  </div>\n\n   <!-- Tab panes -->\n   <div class=\"tab-content\" v-el:tab-content>\n      <slot></slot>\n   </div>\n</div>\n\n";

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(284)
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(287)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tabs/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(285);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-22291468&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-22291468&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content > .tab-pane[_v-22291468] {\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/components/Tabs/Tab.vue?f7607fe4"],"names":[],"mappings":";AA2DA;EACA,eAAA;CACA","file":"Tab.vue","sourcesContent":["<template>\n  <div role=\"tabpanel\" class=\"tab-pane\"\n      v-bind:class=\"{hide:!show}\"\n      v-show=\"show\"\n      :transition=\"transition\"\n  >\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from '../utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      header: {\n        type: String\n      },\n      disabled: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      }\n    },\n    data() {\n      return {\n        index: 0,\n        show: false\n      }\n    },\n    computed: {\n      show() {\n        return (this.$parent.active == this.index);\n      },\n      transition() {\n        return this.$parent.effect\n      }\n    },\n    created() {\n      this.$parent.renderData.push({\n        header: this.header,\n        disabled: this.disabled\n      })\n      \n    },\n    ready() {\n        for (var c in this.$parent.$children)\n        {\n            if (this.$parent.$children[c].$el == this.$el)\n            {\n                this.index= c;\n                break;\n            }\n        }\n    }\n  }\n</script>\n\n<style scoped>\n  .tab-content > .tab-pane {\n    display: block;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.active == this.index;
	    },
	    transition: function transition() {
	      return this.$parent.effect;
	    }
	  },
	  created: function created() {
	    this.$parent.renderData.push({
	      header: this.header,
	      disabled: this.disabled
	    });
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//   .tab-content > .tab-pane {
	//     display: block;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div role="tabpanel" class="tab-pane"
	//       v-bind:class="{hide:!show}"
	//       v-show="show"
	//       :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"tab-pane\" v-bind:class=\"{hide:!show}\" v-show=\"show\" :transition=\"transition\" _v-22291468=\"\">\n  <slot _v-22291468=\"\"></slot>\n</div>\n";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Steps = __webpack_require__(289);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Step = __webpack_require__(292);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Steps2.default.Step = _Step2.default;
	
	exports.default = _Steps2.default;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(290)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(291)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Steps/Steps.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 290 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="steps">
	// 		<slot></slot>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			current: {
				type: Number,
				default: 0
			},
			color: {
				type: String,
				default: "#ff7500"
			}
		},
		watch: {
			current: function current() {
				this.mapPropsToChildComponent();
			}
		},
		data: function data() {
			return {
				itemsWidth: [],
				previousStepsWidth: ''
			};
		},
	
		methods: {
			// 将一些属性props映射到Component 比如当前的步骤数，是否是最后一个item
	
			mapPropsToChildComponent: function mapPropsToChildComponent() {
				var self = this;
				var len = this.$children.length - 1;
	
				this.$children.forEach(function (child, index) {
					child.stepNumber = (index + 1).toString();
					child.lastStep = index === len;
					child.color = self.color;
	
					if (index === self.current) {
						child.status = 'process';
					} else if (index < self.current) {
						child.status = 'finish';
					} else {
						child.status = 'wait';
					}
				});
			},
			_handleTailWidth: function _handleTailWidth() {
				var self = this;
				var dom = self.$el;
				var len = dom.children.length - 1;
				this.itemsWidth = new Array(len + 1);
	
				var i = 0;
				for (; i <= len - 1; i++) {
					var _item = this.$el.children[i].children;
					this.itemsWidth[i] = Math.ceil(_item[0].offsetWidth + _item[1].children[0].offsetWidth);
				}
				this.itemsWidth[i] = Math.ceil(this.$el.children[len].offsetWidth);
				// div.steps的宽度
				this.previousStepsWidth = Math.floor(this.$el.offsetWidth);
				this._update();
	
				//this.$el.children[len].style.position = 'absolute'
	
				// 算出tailWidth, 动态更新子组件
				this.$children.forEach(function (child, index) {
					child.tailWidth = self.itemsWidth.length === 0 || index === len ? 'auto' : self.itemsWidth[index] + self.tailWidth + 'px';
				});
			},
			_update: function _update() {
				var len = this.$children.length - 1;
				var tw = 0;
				this.itemsWidth.forEach(function (w) {
					tw += w;
				});
				var dw = Math.floor((this.previousStepsWidth - tw) / len) * 0.6 - 1;
				if (dw <= 0) {
					return;
				}
				this.tailWidth = dw;
			},
			resize: function resize() {
				var w = Math.floor(this.$el.offsetWidth);
				if (this.previousStepsWidth === w) {
					return;
				}
				this.previousStepsWidth = w;
				this._update();
			}
		},
		ready: function ready() {
			var _this = this;
	
			this.mapPropsToChildComponent();
	
			setTimeout(function () {
				_this._handleTailWidth();
			}, 30);
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"steps\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(293)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(294)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Steps/Step.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			title: String,
			description: String,
			status: String,
			stepNumber: Number,
			lastStep: Boolean,
			tailWidth: String,
			color: String
		},
		computed: {
			wrapClasses: function wrapClasses() {
				return {
					'step': true,
					'step-status-process': this.status === 'process',
					'step-status-finish': this.status === 'finish',
					'step-status-wait': this.status === 'wait',
					'step-item-last': this.lastStep
				};
			}
		},
		components: {
			Icon: _Icon2.default
		}
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// 	<div :class="wrapClasses" :style="{'width': tailWidth}">
	// 		<div v-if="!lastStep" class="step-tail">
	// 			<i>
	// 				<i :style="{ backgroundColor: color }"></i>
	// 			</i>
	// 		</div>
	// 		<div class="step-head">
	// 			<div class="step-head-inner">
	// 				<span v-if="status !== 'finish'" class="step-icon"
	// 					:style="{
	// 						borderColor: status==='process'?color:'#e9e9e9',
	// 						backgroundColor: status==='process'?color:'#fff'}">
	// 					{{ stepNumber }}
	// 				</span>
	// 				<span v-else class="step-finish-icon">
	// 					<icon type="success" size="28" :color="color"></icon>
	// 				</span>
	// 			</div>
	// 		</div>
	// 		<div class="step-main">
	// 			<div class="step-main-title">{{ title }}</div>
	// 			<div class="step-main-description">{{ description }}</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>

/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\" :style=\"{'width': tailWidth}\">\n\t<div v-if=\"!lastStep\" class=\"step-tail\">\n\t\t<i>\n\t\t\t<i :style=\"{ backgroundColor: color }\"></i>\n\t\t</i>\n\t</div>\n\t<div class=\"step-head\">\n\t\t<div class=\"step-head-inner\">\n\t\t\t<span v-if=\"status !== 'finish'\" class=\"step-icon\" \n\t\t\t\t:style=\"{\n\t\t\t\t\tborderColor: status==='process'?color:'#e9e9e9', \n\t\t\t\t\tbackgroundColor: status==='process'?color:'#fff'}\">\n\t\t\t\t{{ stepNumber }}\n\t\t\t</span>\n\t\t\t<span v-else class=\"step-finish-icon\">\n\t\t\t\t<icon type=\"success\" size=\"28\" :color=\"color\"></icon>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<div class=\"step-main\">\n\t\t<div class=\"step-main-title\">{{ title }}</div>\n\t\t<div class=\"step-main-description\">{{ description }}</div>\n\t</div>\n</div>\n";

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Menu = __webpack_require__(296);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(299);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(302);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Divider from './Divider.vue'
	
	_Menu2.default.SubMenu = _SubMenu2.default;
	_Menu2.default.MenuItem = _MenuItem2.default;
	// Menu.Divider = Divider

	exports.default = _Menu2.default;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(297)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(298)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Menu/Menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {},
	  created: function created() {}
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <ul class="vue-menu">
	//     <slot></slot>
	//   </ul>
	// </template>
	//
	// <script>

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"vue-menu\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(300)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/SubMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(301)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Menu/SubMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(134);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    title: String,
	    isOpen: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true
	    }
	  },
	  created: function created() {},
	
	  methods: {
	    triggerSub: function triggerSub() {
	      this.isOpen = !this.isOpen;
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div class="vue-sub-menu-title" @click="triggerSub">{{title}}</div>
	//   <ul class="vue-sub-menu panel-collapse collapse-transition" v-show="isOpen">
	//     <slot></slot>
	//   </ul>
	// </template>
	//
	// <script>

/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"vue-sub-menu-title\" @click=\"triggerSub\">{{title}}</div>\n<ul class=\"vue-sub-menu panel-collapse collapse-transition\" v-show=\"isOpen\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(303)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/MenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(304)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Menu/MenuItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 303 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <li
	//   role="menuitem"
	//   :style="style"
	//   :title="title"
	//   @click="onSelect">
	//   <slot></slot>
	// </li>
	// </template>
	//
	// <script>
	
	exports.default = {
	  props: {
	    active: Boolean,
	    selected: Boolean,
	    disabled: Boolean,
	    title: String,
	    onSelect: Function
	  },
	
	  computed: {},
	
	  methods: {}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = "\n<li\n  role=\"menuitem\"\n  :style=\"style\"\n  :title=\"title\"\n  @click=\"onSelect\">\n  <slot></slot>\n</li>\n";

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Breadcrumb = __webpack_require__(306);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(309);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Breadcrumb2.default.BreadcrumbItem = _BreadcrumbItem2.default;
	
	exports.default = _Breadcrumb2.default;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(307)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/Breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(308)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Breadcrumb/Breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 307 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="breadcrumbs">
	//   <slot></slot>
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			slash: {
				type: String,
				default: '/'
			}
		},
		methods: {
			mapPropsToChildComponent: function mapPropsToChildComponent() {
				var self = this;
				self.$children.forEach(function (child, index) {
					child.slash = self.slash;
				});
			}
		},
		ready: function ready() {
			this.mapPropsToChildComponent();
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 308 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"breadcrumbs\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(310)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/BreadcrumbItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(311)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Breadcrumb/BreadcrumbItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 310 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<span class="breadcrumb">
	// 		<a v-if="href" :href="href" class="breadcrumb-link">
	// 			<slot></slot>
	// 		</a>
	// 		<span v-else class="breadcrumb-link">
	// 			<slot></slot>
	// 		</span>
	// 		<span class="breadcrumb-slash">{{ slash }}</span>
	// 	</span>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			href: String,
			slash: String
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 311 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"breadcrumb\">\n\t<a v-if=\"href\" :href=\"href\" class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</a>\n\t<span v-else class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</span>\n\t<span class=\"breadcrumb-slash\">{{ slash }}</span>\n</span>\n";

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(313);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Jumper = __webpack_require__(315);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Pagination2.default.Jumper = _Jumper2.default;
	
	exports.default = _Pagination2.default;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(314)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(325)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Jumper = __webpack_require__(315);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	var _Pager = __webpack_require__(319);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	var _Options = __webpack_require__(322);
	
	var _Options2 = _interopRequireDefault(_Options);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        id: {
	            type: String
	        },
	        pageSize: {
	            type: Number,
	            default: 10
	        },
	        totalPage: Number,
	        total: Number,
	        currPage: {
	            type: Number
	        },
	        showJumper: Boolean,
	        showSizeChanger: Boolean,
	        simple: {
	            type: Boolean,
	            default: false
	        },
	        mini: {
	            type: Boolean,
	            default: false
	        },
	        defaultSize: {
	            type: Number,
	            default: 10
	        }
	    },
	    data: function data() {
	        return {
	            pageRange: [],
	            prevShow: 1,
	            nextShow: 1
	        };
	    },
	
	    watch: {
	        totalPage: function totalPage() {
	            this.getPageRange();
	        },
	        currPage: function currPage() {
	            this.getPageRange();
	            this.onChange(this.currPage);
	        },
	        prevShow: function prevShow() {
	            this.getPageRange();
	        },
	        nextShow: function nextShow() {
	            this.getPageRange();
	        }
	    },
	    components: {
	        jumper: _Jumper2.default, pager: _Pager2.default, Options: _Options2.default
	    },
	    methods: {
	        _changePageSize: function _changePageSize(value) {},
	        getPageRange: function getPageRange() {
	            var start = 0;
	            var end = 0;
	            var showLen = this.prevShow + this.nextShow + 1;
	            var totalPage = Math.max(this.totalPage, 1);
	            var currPage = this.currPage;
	
	            if (totalPage <= 1) {
	                start = end = 1;
	            } else if (totalPage <= showLen) {
	                start = 1;
	                end = totalPage;
	            } else {
	                if (currPage <= this.prevShow + 1) {
	                    start = 1;
	                    end = showLen;
	                } else if (currPage >= totalPage - this.nextShow) {
	                    end = totalPage;
	                    start = totalPage - showLen + 1;
	                } else {
	                    start = currPage - this.prevShow;
	                    end = currPage + this.nextShow;
	                }
	            }
	
	            this.pageRange = [];
	
	            if (this.simple) {
	                //上一页
	                if (currPage != 1) {
	                    this.pageRange.push({ num: currPage - 1, text: '<', className: 'prev' });
	                } else {
	                    this.pageRange.push({ className: 'disabled', icon: 'prev' });
	                }
	
	                this.pageRange.push({ num: this.currPage, text: this.currPage, className: 'current' });
	                this.pageRange.push({ text: '/', className: 'slash' });
	                this.pageRange.push({ text: totalPage });
	
	                // 下一页
	                if (currPage != totalPage) {
	                    this.pageRange.push({ num: currPage + 1, text: '>', className: 'next' });
	                } else {
	                    this.pageRange.push({ className: 'disabled', icon: 'next' });
	                }
	            } else {
	                //上一页
	                if (currPage != 1) {
	                    this.pageRange.push({ num: currPage - 1, text: '<', className: 'prev' });
	                } else {
	                    this.pageRange.push({ className: 'disabled', icon: 'prev' });
	                }
	
	                //第一页
	                if (start >= 2) {
	                    this.pageRange.push({ num: 1, text: 1 });
	                }
	                //省略号
	                if (start > 2) {
	                    this.pageRange.push({ text: '...', className: 'ellipsis' });
	                }
	                //显示的页码列表
	                for (var i = start; i <= end; i++) {
	                    this.pageRange.push({
	                        num: i,
	                        text: i,
	                        className: i == currPage ? 'current' : ''
	                    });
	                }
	                //省略号
	                if (end < totalPage - 1) {
	                    this.pageRange.push({ text: '...', className: 'ellipsis' });
	                }
	                //最后一页
	                if (end <= totalPage - 1) {
	                    this.pageRange.push({ num: totalPage, text: totalPage });
	                }
	                //下一页
	                if (currPage != totalPage) {
	                    this.pageRange.push({ num: currPage + 1, text: '>', className: 'next' });
	                } else {
	                    this.pageRange.push({ className: 'disabled', icon: 'next' });
	                }
	            }
	        },
	        pageClick: function pageClick(i) {
	            if (!i) {
	                return false;
	            }
	            if (i == this.currPage) {
	                return false;
	            }
	
	            this.currPage = i;
	            this.getPageRange();
	        },
	        onChange: function onChange(pageNum) {
	            this.$dispatch('pagination-page-change', pageNum, this.id);
	        },
	        _isValid: function _isValid(page) {
	            return typeof page === 'number' && page >= 1 && page !== this.currPage;
	        },
	        _handleChange: function _handleChange(page) {
	            var _page = page;
	
	            if (this._isValid(_page)) {
	                if (_page > this.totalPage) {
	                    _page = this.totalPage;
	                }
	
	                this.currPage = page;
	                this._current = page;
	                this.onChange(_page);
	
	                return _page;
	            }
	
	            return this.currPage;
	        }
	    },
	    ready: function ready() {
	        this.getPageRange();
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="pagination">
	//   <template v-if="totalPage > 1">
	//     <options :total="total" :default-size="defaultSize" :show-size-changer="showSizeChanger"></options>
	//     <jumper
	//         :quick-go="showJumper ? _handleChange.bind(this) : null"
	//         :curr-page="currPage"
	//         :total-page="totalPage"
	//         :mini="mini"
	//     ></jumper>
	//     <pager :page-range="pageRange" :simple="simple"  :mini="mini" :page-click="pageClick"></pager>
	//   </template>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(316)
	__vue_script__ = __webpack_require__(317)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Jumper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(318)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Jumper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 316 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 317 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div v-if="quickGo" class="pagination-jump">
	// 	    <div class="input-jumper-wrap">
	// 		    跳至
	// 		    <input type="text" :value="_current" @change="_handleChange($event)" :class="_inputWrapClasses"/>
	// 		    页
	// 	    </div>
	// 	  	<button type="button" @click="_go" :class="_btnWrapClasses">
	// 		跳转</button>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    quickGo: {
	      type: Function,
	      default: function _default() {}
	    },
	    currPage: {
	      type: Number
	    },
	    totalPage: {
	      type: Number
	    },
	    mini: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  compiled: function compiled() {
	    this._current = this.currPage;
	  },
	
	
	  computed: {
	    _inputWrapClasses: function _inputWrapClasses() {
	      return {
	        'input-jumper': !this.mini,
	        'mini-input-jumper': this.mini
	      };
	    },
	    _btnWrapClasses: function _btnWrapClasses() {
	      return {
	        'btn': true,
	        'tertiary': true,
	        'default': !this.mini,
	        'small': this.mini
	      };
	    }
	  },
	
	  data: function data() {
	    return {
	      _current: null
	    };
	  },
	
	
	  methods: {
	    _handleChange: function _handleChange(e) {
	      var val = e.target.value;
	      if (Number(val) > this.totalPage) {
	        this._current = this.totalPage;
	        return;
	      }
	      this._current = e.target.value;
	    },
	    _go: function _go(e) {
	      if (this._current === '') {
	        return;
	      }
	
	      var val = Number(this._current);
	      if (isNaN(val)) {
	        val = this.currPage;
	      }
	      var c = this.quickGo(val);
	      this.currPage = c;
	      this._current = c;
	    }
	  }
	};
	// </script>
	//
	// <style lang="less">
	//
	// </style>

	/* generated by vue-loader */

/***/ },
/* 318 */
/***/ function(module, exports) {

	module.exports = "\n\t<div v-if=\"quickGo\" class=\"pagination-jump\">\n\t    <div class=\"input-jumper-wrap\">\n\t\t    跳至\n\t\t    <input type=\"text\" :value=\"_current\" @change=\"_handleChange($event)\" :class=\"_inputWrapClasses\"/>\n\t\t    页\n\t    </div>\n\t  \t<button type=\"button\" @click=\"_go\" :class=\"_btnWrapClasses\">\n\t\t跳转</button>\n  </div>\n";

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(320)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pager.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(321)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Pager.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Icon = __webpack_require__(88);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			simple: {
				type: Boolean,
				default: false
			},
			mini: {
				type: Boolean,
				default: false
			},
			pageRange: {
				type: Array,
				default: []
			},
			pageClick: {
				type: Function,
				default: function _default() {}
			}
		},
		computed: {
			wrapClasses: function wrapClasses() {
				return {
					'pagination-items': !this.mini && !this.simple,
					'simple-pagination-items': this.simple && !this.mini,
					'mini-pagination-items': !this.simple && this.mini
				};
			}
		},
		components: {
			Icon: _Icon2.default
		}
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//     <ul :class="wrapClasses">
	//         <li v-for="page in pageRange" @click="pageClick(page.num)" :class="{
	//         'current':(page.className==='current'),
	// 		'pagination-item':true,
	//         'pagination-item-prev':(page.className==='prev'),
	//         'pagination-item-next':(page.className==='next'),
	//         'pagination-item-disabled':(page.className==='disabled'),
	//         'pagination-item-ellipsis':(page.className==='ellipsis'),
	//         'pagination-item-slash':(page.className==='slash')}" >
	//     		<span v-if="page.className!='prev' && page.className!='next'">
	//     			{{page.text}}
	//     		</span>
	//     		<icon v-if="page.className==='prev'" type="prev" size="12" color="#666" ></icon>
	//     		<icon v-if="page.className==='next'" type="next" size="12" color="#666"></icon>
	//     		<icon v-if="page.className==='disabled' && page.icon==='prev'" type="prev" size="12" color="#e6e6e6"></icon>
	// 			<icon v-if="page.className==='disabled' && page.icon==='next'" type="next" size="12" color="#e6e6e6"></icon>
	//         </li>
	//     </ul>
	// </template>
	//
	// <script>

/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = "\n    <ul :class=\"wrapClasses\">\n        <li v-for=\"page in pageRange\" @click=\"pageClick(page.num)\" :class=\"{\n        'current':(page.className==='current'),\n\t\t'pagination-item':true,\n        'pagination-item-prev':(page.className==='prev'),\n        'pagination-item-next':(page.className==='next'),\n        'pagination-item-disabled':(page.className==='disabled'),\n        'pagination-item-ellipsis':(page.className==='ellipsis'),\n        'pagination-item-slash':(page.className==='slash')}\" >\n    \t\t<span v-if=\"page.className!='prev' && page.className!='next'\">\n    \t\t\t{{page.text}}\n    \t\t</span>\n    \t\t<icon v-if=\"page.className==='prev'\" type=\"prev\" size=\"12\" color=\"#666\" ></icon>\n    \t\t<icon v-if=\"page.className==='next'\" type=\"next\" size=\"12\" color=\"#666\"></icon>\n    \t\t<icon v-if=\"page.className==='disabled' && page.icon==='prev'\" type=\"prev\" size=\"12\" color=\"#e6e6e6\"></icon>\n\t\t\t<icon v-if=\"page.className==='disabled' && page.icon==='next'\" type=\"next\" size=\"12\" color=\"#e6e6e6\"></icon>\n        </li>\n    </ul>\n";

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(323)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(324)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Options.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Select = __webpack_require__(136);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vOption = _Select2.default.Option; // <template>
	//     <div v-if="showSizeChanger" class="pagination-selector">
	//         <v-select :value="defaultSize" placeholder="" >
	//             <v-option value="10">10 条/页</v-option>
	//             <v-option value="20">20 条/页</v-option>
	//             <v-option value="30">30 条/页</v-option>
	//             <v-option value="40">40 条/页</v-option>
	//         </v-select>
	//         <div class="pagination-totalpage">共{{ total }}条数据</div>
	//     </div>
	// </template>
	//
	// <script>
	
	
	exports.default = {
		props: {
			total: {
				type: Number
			},
			defaultSize: {
				type: Number
			},
			showSizeChanger: {
				type: Boolean,
				default: false
			}
		},
		components: {
			vSelect: _Select2.default, vOption: vOption
		},
	
		events: {
			change: function change(data) {
				this.$dispatch('pagination-size-change', data);
				return true;
			}
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizeChanger\" class=\"pagination-selector\">\n    <v-select :value=\"defaultSize\" placeholder=\"\" >\n        <v-option value=\"10\">10 条/页</v-option>\n        <v-option value=\"20\">20 条/页</v-option>\n        <v-option value=\"30\">30 条/页</v-option>\n        <v-option value=\"40\">40 条/页</v-option>\n    </v-select>\n    <div class=\"pagination-totalpage\">共{{ total }}条数据</div>\n</div>\n";

/***/ },
/* 325 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pagination\">\n<template v-if=\"totalPage > 1\">\n  <options :total=\"total\" :default-size=\"defaultSize\" :show-size-changer=\"showSizeChanger\"></options>\n  <jumper\n      :quick-go=\"showJumper ? _handleChange.bind(this) : null\"\n      :curr-page=\"currPage\"\n      :total-page=\"totalPage\"\n      :mini=\"mini\"\n  ></jumper>\n  <pager :page-range=\"pageRange\" :simple=\"simple\"  :mini=\"mini\" :page-click=\"pageClick\"></pager>\n</template>\n</div>\n";

/***/ },
/* 326 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (number, searchKey) {
	  var ret = '';
	  number = '' + number;
	  number = number.replace(/[^\d]/g, '').substr(0, 11);
	  var keyIndex = number.indexOf(searchKey);
	  for (var i = 0; i < number.length; i++) {
	    if (3 === i || 7 === i) {
	      ret += ' ';
	    }
	    ret += number[i];
	  }
	  if (searchKey) {
	    ret = ret.replace(searchKey, '<span class="h">' + searchKey + '</span>');
	  }
	  return ret;
	};

/***/ },
/* 327 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 328 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 329 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
])
});
;
//# sourceMappingURL=VueComponent.dev.js.map