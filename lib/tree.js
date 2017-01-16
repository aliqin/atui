(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon"], factory);
	else if(typeof exports === 'object')
		exports["tree"] = factory(require("./icon"));
	else
		root["tree"] = factory(root["./icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_58__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(272);


/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tree = __webpack_require__(273);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _TreeNode = __webpack_require__(275);

	var _TreeNode2 = _interopRequireDefault(_TreeNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Tree2.default.TreeNode = _TreeNode2.default;

	exports.default = _Tree2.default;

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(274)

	/* template */
	var __vue_template__ = __webpack_require__(278)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TreeNode = __webpack_require__(275);

	var _TreeNode2 = _interopRequireDefault(_TreeNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Tree',
	  props: {
	    checkable: Boolean,
	    dataSource: Object,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    TreeNode: _TreeNode2.default
	  },
	  created: function created() {
	    this.isTree = true;
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(276)

	/* template */
	var __vue_template__ = __webpack_require__(277)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(58);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'TreeNode',
	  props: {
	    disableCheckbox: {
	      type: Boolean
	    },
	    model: {
	      type: Object
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      open: false
	    };
	  },

	  watch: {
	    open: function open(status) {
	      this.tree.$emit('expand', status, this.model);
	    }
	  },
	  computed: {
	    isFolder: function isFolder() {
	      return this.model.children && this.model.children.length;
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (parent.isTree) {
	      this.tree = parent;
	    } else {
	      this.tree = parent.tree;
	    }
	  },

	  methods: {
	    toggle: function toggle() {
	      if (this.isFolder) {
	        this.open = !this.open;
	      }
	    }
	  },
	  components: {
	    icon: _Icon2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 277:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('li', [_h('a', {
	    attrs: {
	      "title": _vm.model.name
	    },
	    on: {
	      "click": _vm.toggle
	    }
	  }, [(_vm.isFolder) ? _h('span', {
	    class: [_vm.prefixCls + '-tree-switcher', _vm.open && _vm.prefixCls + '-tree-switcher-open']
	  }, [_h('icon', {
	    attrs: {
	      "type": "caretup"
	    }
	  })]) : _vm._e(), " ", _h('span', {
	    class: [_vm.prefixCls + '-tree-title']
	  }, ["\n      " + _vm._s(_vm.model.name) + "\n    "])]), " ", _h('transition', {
	    attrs: {
	      "name": "expand"
	    }
	  }, [(_vm.isFolder) ? _h('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.open),
	      expression: "open"
	    }],
	    class: [_vm.open && _vm.prefixCls + '-tree-child-tree-open']
	  }, [_vm._l((_vm.model.children), function(model) {
	    return _h('tree-node', {
	      attrs: {
	        "model": model
	      }
	    })
	  })]) : _vm._e()])])
	},staticRenderFns: []}

/***/ },

/***/ 278:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('ul', {
	    class: [_vm.prefixCls + '-tree']
	  }, [_h('tree-node', {
	    attrs: {
	      "model": _vm.dataSource
	    }
	  })])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;