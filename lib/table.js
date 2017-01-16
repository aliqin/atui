(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require(undefined), require("./dropdown"), require("./spin"), require("./pagination"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "vue", "./dropdown", "./spin", "./pagination"], factory);
	else if(typeof exports === 'object')
		exports["table"] = factory(require("./icon"), require("vue"), require("./dropdown"), require("./spin"), require("./pagination"));
	else
		root["table"] = factory(root["./icon"], root["Vue"], root["./dropdown"], root["./spin"], root["./pagination"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_134__, __WEBPACK_EXTERNAL_MODULE_244__, __WEBPACK_EXTERNAL_MODULE_245__, __WEBPACK_EXTERNAL_MODULE_246__) {
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

	module.exports = __webpack_require__(241);


/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	module.exports = __webpack_require__(91).Object.assign;

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(89);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(104)});

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(90)
	  , core      = __webpack_require__(91)
	  , ctx       = __webpack_require__(92)
	  , hide      = __webpack_require__(94)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },

/***/ 90:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 91:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(93);
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

/***/ 93:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(95)
	  , createDesc = __webpack_require__(103);
	module.exports = __webpack_require__(99) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(96)
	  , IE8_DOM_DEFINE = __webpack_require__(98)
	  , toPrimitive    = __webpack_require__(102)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(99) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(97);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(99) && !__webpack_require__(100)(function(){
	  return Object.defineProperty(__webpack_require__(101)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(100)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 100:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(97)
	  , document = __webpack_require__(90).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(97);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },

/***/ 103:
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

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(105)
	  , gOPS     = __webpack_require__(120)
	  , pIE      = __webpack_require__(121)
	  , toObject = __webpack_require__(122)
	  , IObject  = __webpack_require__(109)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(100)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(106)
	  , enumBugKeys = __webpack_require__(119);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(107)
	  , toIObject    = __webpack_require__(108)
	  , arrayIndexOf = __webpack_require__(112)(false)
	  , IE_PROTO     = __webpack_require__(116)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },

/***/ 107:
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(109)
	  , defined = __webpack_require__(111);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(110);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 110:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 111:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(108)
	  , toLength  = __webpack_require__(113)
	  , toIndex   = __webpack_require__(115);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(114)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },

/***/ 114:
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(114)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(117)('keys')
	  , uid    = __webpack_require__(118);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(90)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },

/***/ 118:
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },

/***/ 119:
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },

/***/ 120:
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },

/***/ 121:
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(111);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_134__;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Table = __webpack_require__(242);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(243)

	/* template */
	var __vue_template__ = __webpack_require__(247)
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

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(86);

	var _assign2 = _interopRequireDefault(_assign);

	var _vue = __webpack_require__(134);

	var _vue2 = _interopRequireDefault(_vue);

	var _Icon = __webpack_require__(58);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Dropdown = __webpack_require__(244);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _Spin = __webpack_require__(245);

	var _Spin2 = _interopRequireDefault(_Spin);

	var _Pagination = __webpack_require__(246);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Table',
	  props: {
	    pagination: {
	      type: Object,
	      default: function _default() {
	        return {
	          total: 0,
	          pageSize: 10,
	          currPage: 1
	        };
	      }
	    },
	    dataSource: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    noDataTip: {
	      type: String,
	      default: '没有任何数据'
	    },
	    columns: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    expandedRowRender: Function,
	    rowSelection: Object,
	    rowKey: String,
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    fixedHeader: Boolean,
	    size: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Dropdown: _Dropdown2.default,
	    Spin: _Spin2.default,
	    Pagination: _Pagination2.default
	  },
	  data: function data() {
	    var filters = {};
	    var columnMap = {};
	    this.columns.forEach(function (item) {
	      columnMap[item.dataIndex] = item;
	      if (item.filters) {
	        // 如果有filter的情况，则把filter保存为一个空对象，filter时的chechbox需要用到双向绑定
	        filters[item.dataIndex] = [];
	      }
	    });
	    return {
	      originDataSource: (0, _assign2.default)(this.dataSource || [], []),
	      dataList: (0, _assign2.default)(this.dataSource || [], []),
	      isCheckedAll: false,
	      isDisabledAll: false,
	      sorderOrder: [],
	      checkedRows: [],
	      filterOpened: false,
	      filters: filters,
	      columnMap: columnMap,
	      sorter: {}
	    };
	  },
	  mounted: function mounted() {
	    if (this.dataList) {
	      this.dataList.forEach(function (record) {
	        _vue2.default.set(record, '__expanded', 0);
	      });
	    }

	    if (this.pagination.total > 0) {
	      var pager = this.$refs.pager;
	      this.dataList = this.originDataSource.slice(pager.currPage || 0, pager.pageSize);
	    }
	  },

	  computed: {
	    checkedValues: function checkedValues() {
	      var me = this;
	      var checkedKeys = me.checkedRows.map(function (record) {
	        return record[me.rowKey];
	      });
	      if (me.rowSelection && me.rowSelection.onChange) {
	        me.rowSelection.onChange(checkedKeys, me.checkedRows);
	      }
	      return checkedKeys;
	    },
	    checkebleRows: function checkebleRows() {
	      var me = this;
	      var rows = [];
	      // 过滤出非禁用的项供选择使用
	      if (me.dataList && me.dataList.length) {
	        rows = me.dataList.filter(function (record) {
	          if (me.rowSelection) {
	            return !me.rowSelection.getCheckboxProps || !me.rowSelection.getCheckboxProps(record).disabled;
	          }
	        });
	      }
	      return rows;
	    }
	  },
	  watch: {
	    dataSource: function dataSource(data, oldData) {
	      this.dataList = data;
	    },

	    dataList: {
	      handler: function handler(data, oldData) {
	        var me = this;
	        data.forEach && data.forEach(function (record) {
	          if (!record.hasOwnProperty('__expanded')) {
	            _vue2.default.set(record, '__expanded', 0);
	          }
	        });
	        me.compileTbody();
	        // 如果有删除行为或者清空行为，则需要把选中行数据重新计算出，否则checkedRow一直存在没变化
	        me.checkedRows = data.filter(function (record) {
	          if (me.checkedValues) {
	            return me.checkedValues.indexOf(record[me.rowKey]) >= 0;
	          }
	        });
	        if (me.checkebleRows.length) {
	          me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length;
	        }
	      },

	      deep: true
	    }
	  },
	  methods: {
	    onRowClick: function onRowClick(rowIndex, record) {
	      this.$emit('row-click', rowIndex, record);
	    },
	    onRowExpand: function onRowExpand(rowIndex, record) {
	      record.__expanded = !record.__expanded;
	    },
	    compileTbody: function compileTbody() {
	      var me = this;
	      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
	      me.$nextTick(function () {
	        // me._context.$compile(me.$el)
	        me.isDisabledAll = !me.checkebleRows.length;
	      });
	    },
	    sortAction: function sortAction(column, index, order) {
	      if (typeof column.sorter === 'function') {
	        // TODO:客户端排序
	      }
	      this.sorderOrder[index] = order;
	      this.sorderOrder = (0, _assign2.default)([], this.sorderOrder);
	      this.$emit('table-change', this.pagination, this.filters, {
	        field: column.dataIndex,
	        order: order
	      });
	    },

	    // 点击全选框触发
	    onCheckAll: function onCheckAll(event) {
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
	          return record[me.rowKey] !== item[me.rowKey];
	        });
	      }
	      if (me.rowSelection.onSelect) {
	        me.rowSelection.onSelect(record, checked, me.checkedRows);
	      }
	      me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length;
	    },
	    onFilter: function onFilter() {
	      var _this = this;

	      // 每次filter条件变化都应该拿原始数据把所有条件都过滤一遍
	      var me = this;
	      var filters = me.filters;
	      me.$refs.filterMenu.forEach(function (dropdown) {
	        dropdown.$emit('closeDropdown');
	      });
	      this.dataList = this.originDataSource;

	      var _loop = function _loop(currColumnKey) {
	        var currColumn = me.columnMap[currColumnKey];
	        var value = filters[currColumnKey];

	        if (currColumn.hasOwnProperty('filterMultiple') && currColumn.filterMultiple === false) {
	          /* vue的v-model会把radio的值转换成一个字符串，这里为了参数格式与checkbox相同
	          则再转换成数组 */
	          // 先注释这个逻辑了，这样filterMultiple为true的时候返回一个数组，false的时候返回单个字符串
	          // value = value.constructor === Array ? value : [value]
	        }
	        if (currColumn.onFilter) {
	          //  配置了onFilter就是本地模式，否则就派发 事件
	          me.dataList = me.dataList.filter(function (record) {
	            // reset时value是空数组，此时应该true
	            return value.length === 0 || currColumn.onFilter.call(_this, value, record);
	          });
	        } else {
	          me.$emit('table-change', me.pagination, me.filters, me.sorter);
	        }
	      };

	      for (var currColumnKey in filters) {
	        _loop(currColumnKey);
	      }
	    },
	    resetFilter: function resetFilter(column) {
	      this.filters[column.dataIndex] = [];
	      this.onFilter();
	    },
	    changePage: function changePage(pageNum) {
	      console.log('changePage:', pageNum);
	      var me = this;
	      var pager = me.$refs.pager;
	      // 如果原始originDataSource有多余数据，证明是客户端分页
	      if (me.originDataSource.length > pager.pageSize) {
	        me.dataList = me.originDataSource.slice((pageNum - 1) * pager.pageSize, pageNum * pager.pageSize);
	      }
	      // this.pagination.onChange && this.pagination.onChange(pageNum)
	      me.pagination.currPage = pageNum;
	      me.$emit('table-change', this.pagination, me.filters, me.sorter);
	    },
	    changeSize: function changeSize(current, pageSize) {
	      var pager = this.$refs.pager;
	      this.dataList = this.originDataSource.slice((current - 1) * pager.pageSize, current * pager.pageSize);
	      this.pagination.onShowSizeChange && this.pagination.onShowSizeChange(current, pageSize);
	    }
	    // fixedHeaderAction () {
	    //   if (this.fixedHeader) {
	    //     let header = this.$el.querySelector('.table-thead')
	    //     let colgroup = this.$el.querySelector('colgroup').cloneNode(true)
	    //     let fixedTable = this.$el.querySelector('.atui-table-fixed-header')
	    //     fixedTable.appendChild(colgroup)
	    //     fixedTable.appendChild(header)
	    //   }
	    // }

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

/***/ 244:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_244__;

/***/ },

/***/ 245:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_245__;

/***/ },

/***/ 246:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_246__;

/***/ },

/***/ 247:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-table', _vm.prefixCls + '-table-' + _vm.size, _vm.loading && (_vm.prefixCls + '-table-loading')]
	  }, [(_vm.loading) ? _h('spin', {
	    attrs: {
	      "size": "sm"
	    }
	  }) : _vm._e(), " ", " ", _h('div', {
	    class: [_vm.prefixCls + '-table-container', _vm.fixedHeader && (_vm.prefixCls + '-table-fixed-header')]
	  }, [_h('table', [_h('colgroup', [(_vm.rowSelection) ? _h('col') : _vm._e(), " ", (_vm.expandedRowRender) ? _h('col') : _vm._e(), " ", _vm._l((_vm.columns), function(column) {
	    return _h('col', {
	      attrs: {
	        "width": column.width
	      }
	    })
	  })]), " ", _h('thead', [_vm._t("head-row", [_h('tr', [(_vm.rowSelection) ? _h('th', {
	    class: [_vm.prefixCls + '-table-selection-column']
	  }, [(_vm.dataList && _vm.dataList.length) ? _h('input', _vm._b({
	    attrs: {
	      "type": "checkbox"
	    },
	    on: {
	      "change": _vm.onCheckAll
	    }
	  }, 'input', {
	    checked: _vm.isCheckedAll,
	    disabled: _vm.isDisabledAll
	  })) : _vm._e()]) : _vm._e(), " ", (_vm.expandedRowRender) ? _h('th', {
	    class: [_vm.prefixCls + '-table-expand-icon-th']
	  }) : _vm._e(), " ", _vm._l((_vm.columns), function(column, index) {
	    return _h('th', {
	      attrs: {
	        "width": column.width
	      }
	    }, [_h('span', {
	      domProps: {
	        "innerHTML": _vm._s(column['title'])
	      }
	    }), " ", (column.filters) ? _h('dropdown', {
	      ref: "filterMenu",
	      refInFor: true,
	      attrs: {
	        "trigger": "hover"
	      }
	    }, [_h('div', [_h('icon', {
	      attrs: {
	        "type": "filter",
	        "size": "12"
	      }
	    })]), " ", _h('div', {
	      class: [_vm.prefixCls + '-dropdown-menu', _vm.prefixCls + '-table-filter-dropdown'],
	      attrs: {
	        "name": "dropdown-menu"
	      },
	      slot: "dropdown-menu"
	    }, [_h('ul', [_vm._l((column.filters), function(filter) {
	      return _h('li', [_h('label', [(column.filterMultiple === false) ? [_h('input', {
	        directives: [{
	          name: "model",
	          rawName: "v-model",
	          value: (_vm.filters[column.dataIndex]),
	          expression: "filters[column.dataIndex]"
	        }],
	        attrs: {
	          "type": "radio"
	        },
	        domProps: {
	          "value": filter.value,
	          "checked": _vm._q(_vm.filters[column.dataIndex], filter.value)
	        },
	        on: {
	          "change": function($event) {
	            var $$exp = _vm.filters,
	              $$idx = column.dataIndex;
	            if (!Array.isArray($$exp)) {
	              _vm.filters[column.dataIndex] = filter.value
	            } else {
	              $$exp.splice($$idx, 1, filter.value)
	            }
	          }
	        }
	      }), _vm._s(filter.text) + "\n                      "] : [_h('input', {
	        directives: [{
	          name: "model",
	          rawName: "v-model",
	          value: (_vm.filters[column.dataIndex]),
	          expression: "filters[column.dataIndex]"
	        }],
	        attrs: {
	          "type": "checkbox"
	        },
	        domProps: {
	          "value": filter.value,
	          "checked": Array.isArray(_vm.filters[column.dataIndex]) ? _vm._i(_vm.filters[column.dataIndex], filter.value) > -1 : _vm._q(_vm.filters[column.dataIndex], true)
	        },
	        on: {
	          "change": function($event) {
	            var $$a = _vm.filters[column.dataIndex],
	              $$el = $event.target,
	              $$c = $$el.checked ? (true) : (false);
	            if (Array.isArray($$a)) {
	              var $$v = filter.value,
	                $$i = _vm._i($$a, $$v);
	              if ($$c) {
	                $$i < 0 && (_vm.filters[column.dataIndex] = $$a.concat($$v))
	              } else {
	                $$i > -1 && (_vm.filters[column.dataIndex] = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	              }
	            } else {
	              _vm.filters[column.dataIndex] = $$c
	            }
	          }
	        }
	      }), _vm._s(filter.text) + "\n                      "], " "])])
	    })]), " ", _h('div', {
	      class: [_vm.prefixCls + '-table-filter-dropdown-btns']
	    }, [_h('a', {
	      class: [_vm.prefixCls + '-table-filter-dropdown-link confirm'],
	      on: {
	        "click": function($event) {
	          _vm.onFilter(column)
	        }
	      }
	    }, ["确定"]), " ", _h('a', {
	      class: [_vm.prefixCls + '-table-filter-dropdown-link', _vm.prefixCls + '-table-clear'],
	      on: {
	        "click": function($event) {
	          _vm.resetFilter(column)
	        }
	      }
	    }, ["重置"])])])]) : _vm._e(), " ", (_vm.dataList && _vm.dataList.length && column.sorter) ? _h('div', {
	      class: [_vm.prefixCls + '-table-sorter']
	    }, [_h('icon', {
	      class: [_vm.sorderOrder[index] == 'ascend' && (_vm.prefixCls + '-table-active')],
	      attrs: {
	        "type": "caretup",
	        "size": "10"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.sortAction(column, index, 'ascend')
	        }
	      }
	    }), " ", _h('icon', {
	      class: [_vm.sorderOrder[index] == 'descend' && (_vm.prefixCls + '-table-active')],
	      attrs: {
	        "type": "caretdown",
	        "size": "10"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.sortAction(column, index, 'descend')
	        }
	      }
	    })]) : _vm._e()])
	  })])], {
	    columns: _vm.columns
	  })]), " ", _h('tbody', [(!_vm.dataList || !_vm.dataList.length) ? _h('tr', [_h('td', {
	    class: [_vm.prefixCls + '-table-empty'],
	    staticStyle: {
	      "text-align": "center"
	    },
	    attrs: {
	      "colspan": "20"
	    }
	  }, [_vm._s(_vm.noDataTip)])]) : _vm._e(), " ", _vm._l((_vm.dataList), function(record, rowIndex) {
	    return [_vm._t("row", [_h('tr', {
	      attrs: {
	        "track-by": rowIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.onRowClick(rowIndex, record)
	        }
	      }
	    }, [(_vm.rowSelection) ? _h('td', {
	      class: [_vm.prefixCls + '-table-selection-column']
	    }, [_h('input', _vm._b({
	      directives: [{
	        name: "model",
	        rawName: "v-model",
	        value: (_vm.checkedValues),
	        expression: "checkedValues"
	      }],
	      attrs: {
	        "type": "checkbox"
	      },
	      domProps: {
	        "value": record[_vm.rowKey],
	        "checked": Array.isArray(_vm.checkedValues) ? _vm._i(_vm.checkedValues, record[_vm.rowKey]) > -1 : _vm._q(_vm.checkedValues, true)
	      },
	      on: {
	        "change": [function($event) {
	          var $$a = _vm.checkedValues,
	            $$el = $event.target,
	            $$c = $$el.checked ? (true) : (false);
	          if (Array.isArray($$a)) {
	            var $$v = record[_vm.rowKey],
	              $$i = _vm._i($$a, $$v);
	            if ($$c) {
	              $$i < 0 && (_vm.checkedValues = $$a.concat($$v))
	            } else {
	              $$i > -1 && (_vm.checkedValues = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	            }
	          } else {
	            _vm.checkedValues = $$c
	          }
	        }, function($event) {
	          $event.stopPropagation();
	          _vm.onCheckOne($event, record)
	        }]
	      }
	    }, 'input', _vm.rowSelection.getCheckboxProps && _vm.rowSelection.getCheckboxProps(record)))]) : _vm._e(), " ", (_vm.expandedRowRender) ? _h('td', {
	      class: [_vm.prefixCls + '-table-row-expand-icon-cell']
	    }, [(!record.__no_expand) ? _h('span', {
	      class: [_vm.prefixCls + '-table-row-expand-icon', _vm.prefixCls + (record.__expanded == 1 ? '-table-row-expanded' : '-table-row-collapsed')],
	      on: {
	        "click": function($event) {
	          _vm.onRowExpand(rowIndex, record)
	        }
	      }
	    }) : _vm._e()]) : _vm._e(), " ", _vm._l((_vm.columns), function(column) {
	      return _h('td', [(column.render && record) ? [_h('span', {
	        domProps: {
	          "innerHTML": _vm._s(column.render.call(this._context, record[column.dataIndex], record, rowIndex))
	        }
	      })] : [_h('span', {
	        domProps: {
	          "innerHTML": _vm._s(record[column.dataIndex])
	        }
	      })], " "])
	    })]), " ", (record.__expanded) ? _h('tr', {
	      class: [_vm.prefixCls + '-table-expanded-row']
	    }, [_h('td', [(!record.__no_expand) ? _h('span', {
	      class: [_vm.prefixCls + '-expanded-row-indent']
	    }) : _vm._e()]), " ", _h('td', {
	      attrs: {
	        "colspan": _vm.columns.length
	      },
	      domProps: {
	        "innerHTML": _vm._s(_vm.expandedRowRender(record))
	      }
	    })]) : _vm._e()], {
	      record: record,
	      rowIndex: _vm.row - _vm.index
	    })]
	  })])])]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.pagination && _vm.pagination.total > 0),
	      expression: "pagination && pagination.total > 0"
	    }],
	    class: [_vm.prefixCls + '-table-pagination']
	  }, [_h('pagination', {
	    ref: "pager",
	    attrs: {
	      "total": _vm.pagination.total,
	      "page-size": _vm.pagination.pageSize,
	      "show-jumper": true,
	      "show-size-changer": true
	    },
	    on: {
	      "pagination-page-change": _vm.changePage,
	      "pagination-size-change": _vm.changeSize
	    }
	  })])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;