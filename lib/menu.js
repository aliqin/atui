(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "vue"], factory);
	else if(typeof exports === 'object')
		exports["menu"] = factory(require("./icon"), require("vue"));
	else
		root["menu"] = factory(root["./icon"], root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_138__) {
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(135);


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Menu = __webpack_require__(136);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _SubMenu = __webpack_require__(139);

	var _SubMenu2 = _interopRequireDefault(_SubMenu);

	var _MenuItem = __webpack_require__(143);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _MenuItemGroup = __webpack_require__(141);

	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Menu2.default.SubMenu = _SubMenu2.default;
	_Menu2.default.MenuItem = _MenuItem2.default;
	_Menu2.default.MenuItemGroup = _MenuItemGroup2.default;
	exports.default = _Menu2.default;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(137)

	/* template */
	var __vue_template__ = __webpack_require__(149)
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


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(138);

	var _vue2 = _interopRequireDefault(_vue);

	var _SubMenu = __webpack_require__(139);

	var _SubMenu2 = _interopRequireDefault(_SubMenu);

	var _MenuItemGroup = __webpack_require__(141);

	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

	var _MenuItem = __webpack_require__(143);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Menu',
	  props: {
	    mode: {
	      type: String,
	      default: 'inline'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    openOne: Boolean,
	    defaultSelectedKey: String
	  },
	  data: function data() {
	    return {
	      selectedKey: this.defaultSelectedKey
	    };
	  },

	  components: {
	    vSubMenu: _SubMenu2.default,
	    vMenuItemGroup: _MenuItemGroup2.default,
	    vMenuItem: _MenuItem2.default
	  },
	  created: function created() {
	    this.$bus = new _vue2.default({});
	  },
	  mounted: function mounted() {
	    var me = this;
	    if (me.defaultSelectedKey) {
	      me.$bus.$emit('Menu-searchItem', me.selectedKey);
	    }
	    me.$bus.$on('Menu-itemClicked', function (item, uuid) {
	      me.$bus.$emit('Menu-searchItem', uuid);
	      me.selectedKey = uuid;
	      me.$emit('click', item, uuid);
	    });
	  }
	};

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_138__;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(140)

	/* template */
	var __vue_template__ = __webpack_require__(148)
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


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _MenuItemGroup = __webpack_require__(141);

	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

	var _MenuItem = __webpack_require__(143);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _eventbus = __webpack_require__(145);

	var _eventbus2 = _interopRequireDefault(_eventbus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'SubMenu',
	  props: {
	    title: String,
	    show: Boolean,
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },
	    type: Boolean,
	    disabled: Boolean,
	    uuid: [String, Number]
	  },
	  components: {
	    Icon: _Icon2.default,
	    vMenuItemGroup: _MenuItemGroup2.default,
	    vMenuItem: _MenuItem2.default
	  },
	  mixins: [_eventbus2.default],
	  data: function data() {
	    return {
	      mode: this.$parent.mode,
	      open: this.show
	    };
	  },
	  mounted: function mounted() {
	    this.$forceUpdate();
	  },

	  watch: {
	    open: function open(val) {
	      if (val) {
	        var me = this;
	        if (!me.$parent.openOne) {
	          return;
	        }
	        var sibling = me.$parent.$children;
	        sibling.forEach(function (item) {
	          if (me !== item) {
	            item.open = false;
	          }
	        });
	      }
	    }
	  },
	  methods: {
	    triggerSub: function triggerSub() {
	      this.open = !this.open;
	    }
	  },
	  transitions: {
	    collapse: {
	      afterEnter: function afterEnter(el) {
	        el.style.maxHeight = '';
	      },
	      beforeLeave: function beforeLeave(el) {
	        el.style.maxHeight = el.offsetHeight + 'px';
	        return el.offsetHeight;
	      }
	    }
	  }
	};

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(142)

	/* template */
	var __vue_template__ = __webpack_require__(147)
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


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MenuItem = __webpack_require__(143);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'MenuItemGroup',
	  props: {
	    title: String,
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    vMenuItem: _MenuItem2.default
	  }
	};

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(144)

	/* template */
	var __vue_template__ = __webpack_require__(146)
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


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eventbus = __webpack_require__(145);

	var _eventbus2 = _interopRequireDefault(_eventbus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'MenuItem',
	  props: {
	    disabled: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },
	    uuid: String,
	    selected: Boolean
	  },
	  mixins: [_eventbus2.default],
	  data: function data() {
	    return {
	      selectedStatus: this.selected
	    };
	  },

	  methods: {
	    selectItem: function selectItem() {
	      this.$bus.$emit('Menu-itemClicked', this, this.uuid);
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$bus.$on('Menu-searchItem', function (uuid) {
	      _this.selectedStatus = _this.uuid === uuid;
	      if (_this.selectedStatus) {
	        _this.$parent.$parent.open = true;
	      }
	    });
	  }
	};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(138);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $event = new _vue2.default();

	var eventBus = {
	  beforeCreate: function beforeCreate() {
	    this.$event = $event;

	    var parent = this.$parent;
	    while (parent && !this.$bus) {
	      if (parent.$bus) {
	        this.$bus = parent.$bus;
	      } else {
	        parent = parent.$parent;
	      }
	    }
	  }
	};

	exports.default = eventBus;

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: [_vm.prefixCls + '-menu-item', _vm.disabled && (_vm.prefixCls + '-menu-item-disabled'), _vm.selectedStatus && (_vm.prefixCls + '-menu-item-selected')],
	    staticStyle: {
	      "padding-left": "48px"
	    },
	    attrs: {
	      "role": "menuitem"
	    },
	    on: {
	      "click": function($event) {
	        _vm.selectItem($event)
	      }
	    }
	  }, [_c('span', [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: [_vm.prefixCls + '-menu-item-group']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-menu-item-group-title'],
	    domProps: {
	      "innerHTML": _vm._s(_vm.title)
	    }
	  }), _vm._v(" "), _c('ul', {
	    class: [_vm.prefixCls + '-menu-item-group-list']
	  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.value), function(item) {
	    return (_vm.value.length) ? [(item.type == 'MenuItem') ? _c('v-menu-item', {
	      attrs: {
	        "uuid": item.uuid,
	        "disabled": item.disabled,
	        "selected": item.selected
	      }
	    }, [_c('span', {
	      domProps: {
	        "innerHTML": _vm._s(item.content)
	      }
	    })]) : _vm._e()] : _vm._e()
	  })], 2)])
	},staticRenderFns: []}

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: [_vm.prefixCls + '-menu-submenu', _vm.prefixCls + '-menu-submenu-' + _vm.mode, _vm.open && (_vm.prefixCls + '-menu-submenu-open')]
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-menu-submenu-title'],
	    on: {
	      "click": _vm.triggerSub
	    }
	  }, [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.title)
	    }
	  }), _vm._v(" "), (_vm.$children.length) ? _c('icon', {
	    class: [_vm.prefixCls + '-menu-icon'],
	    attrs: {
	      "type": "down"
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.open),
	      expression: "open"
	    }],
	    class: [_vm.prefixCls + '-menu', _vm.prefixCls + '-menu-sub', _vm.prefixCls + '-menu-' + _vm.mode],
	    attrs: {
	      "transition": "collapse"
	    }
	  }, [_vm._t("default"), _vm._v(" "), _vm._l((_vm.value), function(item) {
	    return (_vm.value.length) ? [(item.type == 'MenuItemGroup') ? _c('v-menu-item-group', {
	      attrs: {
	        "title": item.title
	      },
	      model: {
	        value: (item.children),
	        callback: function($$v) {
	          item.children = $$v
	        },
	        expression: "item.children"
	      }
	    }) : _vm._e(), _vm._v(" "), (item.type == 'MenuItem') ? _c('v-menu-item', {
	      attrs: {
	        "uuid": item.uuid,
	        "disabled": item.disabled,
	        "selected": item.selected
	      }
	    }, [_c('span', {
	      domProps: {
	        "innerHTML": _vm._s(item.content)
	      }
	    })]) : _vm._e(), _vm._v(" "), (item.type == 'SubMenu') ? _c('sub-menu', {
	      attrs: {
	        "uuid": item.uuid,
	        "title": item.title
	      },
	      model: {
	        value: (item.children),
	        callback: function($$v) {
	          item.children = $$v
	        },
	        expression: "item.children"
	      }
	    }) : _vm._e()] : _vm._e()
	  })], 2)])
	},staticRenderFns: []}

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    class: [_vm.prefixCls + '-menu', _vm.prefixCls + '-menu-root', _vm.prefixCls + '-menu-' + _vm.mode]
	  }, [_vm._t("default"), _vm._v(" "), (_vm.value.length) ? _vm._l((_vm.value), function(item) {
	    return _c('v-sub-menu', {
	      attrs: {
	        "uuid": item.uuid,
	        "title": item.title,
	        "show": item.show
	      },
	      model: {
	        value: (item.children),
	        callback: function($$v) {
	          item.children = $$v
	        },
	        expression: "item.children"
	      }
	    })
	  }) : _vm._e()], 2)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;