/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(76);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _headerDocs = __webpack_require__(129);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _gettingStarted = __webpack_require__(136);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _gridDocs = __webpack_require__(138);
	
	var _gridDocs2 = _interopRequireDefault(_gridDocs);
	
	var _buttonDocs = __webpack_require__(142);
	
	var _buttonDocs2 = _interopRequireDefault(_buttonDocs);
	
	var _buttonsDocs = __webpack_require__(144);
	
	var _buttonsDocs2 = _interopRequireDefault(_buttonsDocs);
	
	var _inputDocs = __webpack_require__(160);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _uploadDocs = __webpack_require__(162);
	
	var _uploadDocs2 = _interopRequireDefault(_uploadDocs);
	
	var _formDocs = __webpack_require__(169);
	
	var _formDocs2 = _interopRequireDefault(_formDocs);
	
	var _switchDocs = __webpack_require__(172);
	
	var _switchDocs2 = _interopRequireDefault(_switchDocs);
	
	var _dropdownDocs = __webpack_require__(190);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _selectDocs = __webpack_require__(196);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _datepickerDocs = __webpack_require__(209);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _typeaheadDocs = __webpack_require__(219);
	
	var _typeaheadDocs2 = _interopRequireDefault(_typeaheadDocs);
	
	var _alertDocs = __webpack_require__(234);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _modalDocs = __webpack_require__(244);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _tableDocs = __webpack_require__(247);
	
	var _tableDocs2 = _interopRequireDefault(_tableDocs);
	
	var _badgeDocs = __webpack_require__(253);
	
	var _badgeDocs2 = _interopRequireDefault(_badgeDocs);
	
	var _carouselDocs = __webpack_require__(260);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _Affix = __webpack_require__(271);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(276);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _spinDocs = __webpack_require__(278);
	
	var _spinDocs2 = _interopRequireDefault(_spinDocs);
	
	var _textareaDocs = __webpack_require__(285);
	
	var _textareaDocs2 = _interopRequireDefault(_textareaDocs);
	
	var _tagDocs = __webpack_require__(292);
	
	var _tagDocs2 = _interopRequireDefault(_tagDocs);
	
	var _tooltipDocs = __webpack_require__(299);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _accordionDocs = __webpack_require__(303);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _popoverDocs = __webpack_require__(314);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _tabsDocs = __webpack_require__(322);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _stepsDocs = __webpack_require__(336);
	
	var _stepsDocs2 = _interopRequireDefault(_stepsDocs);
	
	var _menuDocs = __webpack_require__(348);
	
	var _menuDocs2 = _interopRequireDefault(_menuDocs);
	
	var _breadcrumbDocs = __webpack_require__(361);
	
	var _breadcrumbDocs2 = _interopRequireDefault(_breadcrumbDocs);
	
	var _paginationDocs = __webpack_require__(371);
	
	var _paginationDocs2 = _interopRequireDefault(_paginationDocs);
	
	var _phoneNumberDocs = __webpack_require__(389);
	
	var _phoneNumberDocs2 = _interopRequireDefault(_phoneNumberDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(393);
	__webpack_require__(394);
	__webpack_require__(400);
	__webpack_require__(401);
	__webpack_require__(402);
	__webpack_require__(403);
	
	// 表单类
	
	// import progressbarDocs from './example/progressbar-docs.vue'
	
	
	// 展示类
	
	
	// 导航类
	// import affixDocs from './example/affixDocs.vue'
	// import asideDocs from './example/asideDocs.vue'
	
	
	// filters
	
	
	Vue.config.debug = true;
	
	new Vue({
	  el: '#wrapper',
	  components: {
	    gettingStarted: _gettingStarted2.default,
	    gridDocs: _gridDocs2.default,
	    container: _container2.default,
	    affix: _Affix2.default,
	    buttonDocs: _buttonDocs2.default,
	    spinDocs: _spinDocs2.default,
	    inputDocs: _inputDocs2.default,
	    textareaDocs: _textareaDocs2.default,
	    uploadDocs: _uploadDocs2.default,
	    switchDocs: _switchDocs2.default,
	    formDocs: _formDocs2.default,
	    alertDocs: _alertDocs2.default,
	    badgeDocs: _badgeDocs2.default,
	    tagDocs: _tagDocs2.default,
	    headerDocs: _headerDocs2.default,
	    accordionDocs: _accordionDocs2.default,
	    // affixDocs,
	    // asideDocs,
	    carouselDocs: _carouselDocs2.default,
	    buttonsDocs: _buttonsDocs2.default,
	    datepickerDocs: _datepickerDocs2.default,
	    dropdownDocs: _dropdownDocs2.default,
	    modalDocs: _modalDocs2.default,
	    popoverDocs: _popoverDocs2.default,
	    // progressbarDocs,
	    selectDocs: _selectDocs2.default,
	    tabsDocs: _tabsDocs2.default,
	    tableDocs: _tableDocs2.default,
	    stepsDocs: _stepsDocs2.default,
	    breadcrumbDocs: _breadcrumbDocs2.default,
	    paginationDocs: _paginationDocs2.default,
	    tooltipDocs: _tooltipDocs2.default,
	    typeaheadDocs: _typeaheadDocs2.default,
	    menuDocs: _menuDocs2.default,
	    list: {
	      inherit: true,
	      template: ''
	    },
	    phoneNumberDocs: _phoneNumberDocs2.default
	  },
	  data: function data() {
	    return {
	      elements: [],
	      components: [],
	      filters: []
	    };
	  },
	
	  filters: {
	    space: function space(val) {
	      return val.replace(/[\u4e00-\u9fa5]|-/g, '');
	    }
	  },
	  ready: function ready() {
	    // add h1.anchor.innerHTML to sidebar list
	    var elements = document.querySelectorAll('.elements .anchor');
	    var components = document.querySelectorAll('.components .anchor');
	    var filters = document.querySelectorAll('.filters .anchor');
	    this.elements = [].concat((0, _toConsumableArray3.default)(elements)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    this.components = [].concat((0, _toConsumableArray3.default)(components)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    this.filters = [].concat((0, _toConsumableArray3.default)(filters)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    // Scrollspy
	    var section = document.querySelectorAll('.bs-docs-section');
	    var sections = {};
	    var navbar = document.querySelector('#sidenav');
	    var i = 0;
	
	    window.onload = function () {
	      Array.prototype.forEach.call(section, function (e) {
	        sections[e.id] = e.offsetTop;
	      });
	    };
	
	    function scrollSpy() {
	      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	
	      for (i in sections) {
	        // 420 = firstSection.getBoundingClientRect().top (when body.scrollTop = 0)
	        // = nav.height + header.height + firstSection.margin-top - 6 (for offset)
	        if (sections[i] + 420 <= scrollPosition) {
	          if (navbar) {
	            if (navbar.querySelector('.active')) {
	              navbar.querySelector('.active').className = '';
	              navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active';
	            }
	          }
	        }
	      }
	    }
	
	    window.onscroll = function () {
	      scrollSpy();
	    };
	  }
	});
	
	// import Router from './routers'

	// // // debug
	// // Vue.config.debug = true

	// // // start app
	// var App = Vue.extend({
	//   components:{
	//     accordion: require('src/components/accordion.vue')
	//   }
	// })

	// Router.start(App,'#wrapper')

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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(77);
	
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	__webpack_require__(123);
	module.exports = __webpack_require__(87).Array.from;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(80)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(83)(String, 'String', function(iterated){
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(81)
	  , defined   = __webpack_require__(82);
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
/* 81 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(84)
	  , $export        = __webpack_require__(85)
	  , redefine       = __webpack_require__(100)
	  , hide           = __webpack_require__(90)
	  , has            = __webpack_require__(101)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(119)
	  , getPrototypeOf = __webpack_require__(121)
	  , ITERATOR       = __webpack_require__(120)('iterator')
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
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
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
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(86)
	  , core      = __webpack_require__(87)
	  , ctx       = __webpack_require__(88)
	  , hide      = __webpack_require__(90)
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
/* 86 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 87 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(89);
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
/* 89 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(91)
	  , createDesc = __webpack_require__(99);
	module.exports = __webpack_require__(95) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(92)
	  , IE8_DOM_DEFINE = __webpack_require__(94)
	  , toPrimitive    = __webpack_require__(98)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(95) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(93);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(95) && !__webpack_require__(96)(function(){
	  return Object.defineProperty(__webpack_require__(97)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(96)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(93)
	  , document = __webpack_require__(86).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(93);
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
/* 99 */
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(90);

/***/ },
/* 101 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(104)
	  , descriptor     = __webpack_require__(99)
	  , setToStringTag = __webpack_require__(119)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(90)(IteratorPrototype, __webpack_require__(120)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(92)
	  , dPs         = __webpack_require__(105)
	  , enumBugKeys = __webpack_require__(117)
	  , IE_PROTO    = __webpack_require__(114)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(97)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(118).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(91)
	  , anObject = __webpack_require__(92)
	  , getKeys  = __webpack_require__(106);
	
	module.exports = __webpack_require__(95) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(107)
	  , enumBugKeys = __webpack_require__(117);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(101)
	  , toIObject    = __webpack_require__(108)
	  , arrayIndexOf = __webpack_require__(111)(false)
	  , IE_PROTO     = __webpack_require__(114)('IE_PROTO');
	
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(109)
	  , defined = __webpack_require__(82);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(110);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(108)
	  , toLength  = __webpack_require__(112)
	  , toIndex   = __webpack_require__(113);
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
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(81)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(81)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(115)('keys')
	  , uid    = __webpack_require__(116);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(86)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86).document && document.documentElement;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(91).f
	  , has = __webpack_require__(101)
	  , TAG = __webpack_require__(120)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(115)('wks')
	  , uid        = __webpack_require__(116)
	  , Symbol     = __webpack_require__(86).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(101)
	  , toObject    = __webpack_require__(122)
	  , IE_PROTO    = __webpack_require__(114)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(82);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(88)
	  , $export     = __webpack_require__(85)
	  , toObject    = __webpack_require__(122)
	  , call        = __webpack_require__(124)
	  , isArrayIter = __webpack_require__(125)
	  , toLength    = __webpack_require__(112)
	  , getIterFn   = __webpack_require__(126);
	$export($export.S + $export.F * !__webpack_require__(128)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(92);
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(120)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(127)
	  , ITERATOR  = __webpack_require__(120)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(87).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(110)
	  , TAG = __webpack_require__(120)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(120)('iterator')
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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(130)
	__vue_script__ = __webpack_require__(134)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/headerDocs.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/headerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./headerDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./headerDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.navbar-nav .active {\n  background-color: #eee !important;\n}\n", "", {"version":3,"sources":["/./docs/example/headerDocs.vue?94324c26"],"names":[],"mappings":";AAiCA;EACA,kCAAA;CACA","file":"headerDocs.vue","sourcesContent":["<template>\n  <header class=\"navbar navbar-top bs-docs-nav\" id=\"top\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"\" class=\"navbar-brand\">VueComponent</a>\n      </div>\n      <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\" id=\"J_header\">\n          <li v-for=\"theme in themes\">\n            <a href=\"#tabs\" :class=\"{active:theme.active}\" @click=\"changeTheme(theme.csslink,$event)\">{{theme.name}}风格</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"http://gitlab.alibaba-inc.com/aliqin/vue-component/\">\n            <span class=\"icon-github-circled\"></span>\n            GitLab\n          </a></li>\n          <li><a href=\"http://ued.aliqin.alibaba.net/webcompon/\" target=\"_blank\">\n            <span class=\"icon-github-circled\"></span>\n            视觉稿\n          </a></li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n</template>\n<style>\n  .navbar-nav .active {\n    background-color: #eee !important;\n  }\n</style>\n<script>\nexport default {\n  data() {\n    return {\n      themes:[\n      {\n          name : '大鱼',\n          csslink:'alidayu.css',\n          active:true\n      },\n      {\n          name : '天猫网厅',\n          csslink:'tmallwt.css',\n          active:false\n      },\n      {\n          name : '阿里通信',\n          csslink:'alitx.css',\n          active:false\n      },\n      ]\n    }\n  },methods:{\n    changeTheme(csslink,event) {\n      event.preventDefault();\n      this.themes.forEach((i)=>{\n        i.active = false;\n        if(i.csslink == csslink) {\n          i.active = true;\n        }\n      })\n      document.getElementById('J_ThemeCss').href = 'build/' + csslink\n      document.body.className = csslink.replace('.css','')\n    }\n  }\n}\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 132 */
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
/* 133 */
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
/* 134 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <header class="navbar navbar-top bs-docs-nav" id="top" role="banner">
	//     <div class="container">
	//       <div class="navbar-header">
	//         <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
	//           <span class="sr-only">Toggle navigation</span>
	//           <span class="icon-bar"></span>
	//           <span class="icon-bar"></span>
	//           <span class="icon-bar"></span>
	//         </button>
	//         <a href="" class="navbar-brand">VueComponent</a>
	//       </div>
	//       <nav id="bs-navbar" class="collapse navbar-collapse">
	//         <ul class="nav navbar-nav" id="J_header">
	//           <li v-for="theme in themes">
	//             <a href="#tabs" :class="{active:theme.active}" @click="changeTheme(theme.csslink,$event)">{{theme.name}}风格</a>
	//           </li>
	//         </ul>
	//         <ul class="nav navbar-nav navbar-right">
	//           <li><a href="http://gitlab.alibaba-inc.com/aliqin/vue-component/">
	//             <span class="icon-github-circled"></span>
	//             GitLab
	//           </a></li>
	//           <li><a href="http://ued.aliqin.alibaba.net/webcompon/" target="_blank">
	//             <span class="icon-github-circled"></span>
	//             视觉稿
	//           </a></li>
	//         </ul>
	//       </nav>
	//     </div>
	//   </header>
	// </template>
	// <style>
	//   .navbar-nav .active {
	//     background-color: #eee !important;
	//   }
	// </style>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      themes: [{
	        name: '大鱼',
	        csslink: 'alidayu.css',
	        active: true
	      }, {
	        name: '天猫网厅',
	        csslink: 'tmallwt.css',
	        active: false
	      }, {
	        name: '阿里通信',
	        csslink: 'alitx.css',
	        active: false
	      }]
	    };
	  },
	  methods: {
	    changeTheme: function changeTheme(csslink, event) {
	      event.preventDefault();
	      this.themes.forEach(function (i) {
	        i.active = false;
	        if (i.csslink == csslink) {
	          i.active = true;
	        }
	      });
	      document.getElementById('J_ThemeCss').href = 'build/' + csslink;
	      document.body.className = csslink.replace('.css', '');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"navbar navbar-top bs-docs-nav\" id=\"top\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"\" class=\"navbar-brand\">VueComponent</a>\n    </div>\n    <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\" id=\"J_header\">\n        <li v-for=\"theme in themes\">\n          <a href=\"#tabs\" :class=\"{active:theme.active}\" @click=\"changeTheme(theme.csslink,$event)\">{{theme.name}}风格</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"http://gitlab.alibaba-inc.com/aliqin/vue-component/\">\n          <span class=\"icon-github-circled\"></span>\n          GitLab\n        </a></li>\n        <li><a href=\"http://ued.aliqin.alibaba.net/webcompon/\" target=\"_blank\">\n          <span class=\"icon-github-circled\"></span>\n          视觉稿\n        </a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(137)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/gettingStarted.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"getting-started\">\n\n    <h2>安装方法：CommonJS</h2>\n    <pre><code class=\"language-javascript\">\n$ tnpm install @ali/vue-component --save-dev\n\n// css引入 alidayu or alitx or tmallwt\nimport '@ali/vue-component/dist/alidayu.css'\n\n// 或less引入\nimport '@ali/vue-component/style/themes/alidayu.less'\n\n// 根据需求引入组件\nimport { alert } from '@ali/vue-component'\n\nnew Vue({\n  components: {\n    alert\n  }\n})\n    </code></pre>\n    <h3>浏览器引用</h3>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-component.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueComponent.alert\n&lt;/script&gt;\n    </code></pre>\n  </div>\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(139)
	__vue_template__ = __webpack_require__(141)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/gridDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gridDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gridDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.grid-demo .row{\n  margin:5px 0;\n}\n.grid-demo .row > div{\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n  background: #99EAD8;\n  background-clip: content-box;\n}\n", "", {"version":3,"sources":["/./docs/example/gridDocs.vue?34835de8"],"names":[],"mappings":";AAsHA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,oBAAA;EACA,6BAAA;CACA","file":"gridDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"grid\">\n    <h3 class=\"page-header\"><a href=\"#grid\" class=\"anchor\">Grid 栅格 </a></h3>\n    <div class=\"bs-example\">\n      <div class=\"container grid-demo\">\n        <div class=\"row\">\n          <div class=\"col-lg-24\">col-lg-24</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-23\">col-lg-23</div>\n          <div class=\"col-lg-1\">1</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-22\">col-lg-22</div>\n          <div class=\"col-lg-2\">2</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-21\">col-lg-21</div>\n          <div class=\"col-lg-3\">col-lg-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-20\">col-lg-20</div>\n          <div class=\"col-lg-4\">col-lg-4</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-19\">col-lg-19</div>\n          <div class=\"col-lg-5\">col-lg-5</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-18\">col-lg-18</div>\n          <div class=\"col-lg-6\">col-lg-6</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-17\">col-lg-17</div>\n          <div class=\"col-lg-7\">col-lg-7</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-16\">col-lg-16</div>\n          <div class=\"col-lg-8\">col-lg-8</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-15\">col-lg-15</div>\n          <div class=\"col-lg-9\">col-lg-9</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-14\">col-lg-14</div>\n          <div class=\"col-lg-10\">col-lg-10</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-13\">col-lg-13</div>\n          <div class=\"col-lg-11\">col-lg-11</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">col-lg-12</div>\n          <div class=\"col-lg-12\">col-lg-12</div>\n        </div>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<div class=\"container grid-demo\">\n  <div class=\"row\">\n    <div class=\"col-lg-24\">col-lg-24</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-23\">col-lg-23</div>\n    <div class=\"col-lg-1\">1</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-22\">col-lg-22</div>\n    <div class=\"col-lg-2\">2</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-21\">col-lg-21</div>\n    <div class=\"col-lg-3\">col-lg-3</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-20\">col-lg-20</div>\n    <div class=\"col-lg-4\">col-lg-4</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-19\">col-lg-19</div>\n    <div class=\"col-lg-5\">col-lg-5</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-18\">col-lg-18</div>\n    <div class=\"col-lg-6\">col-lg-6</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-17\">col-lg-17</div>\n    <div class=\"col-lg-7\">col-lg-7</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-16\">col-lg-16</div>\n    <div class=\"col-lg-8\">col-lg-8</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-15\">col-lg-15</div>\n    <div class=\"col-lg-9\">col-lg-9</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-14\">col-lg-14</div>\n    <div class=\"col-lg-10\">col-lg-10</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-13\">col-lg-13</div>\n    <div class=\"col-lg-11\">col-lg-11</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">col-lg-12</div>\n    <div class=\"col-lg-12\">col-lg-12</div>\n  </div>\n</div>\n</script></code></pre>\n    </script>\n    </code>\n  </div>\n</template>\n<style>\n  .grid-demo .row{\n    margin:5px 0;\n  }\n  .grid-demo .row > div{\n    text-align: center;\n    line-height: 30px;\n    height: 30px;\n    background: #99EAD8;\n    background-clip: content-box;\n  }\n</style>\n\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"grid\">\n    <h3 class=\"page-header\"><a href=\"#grid\" class=\"anchor\">Grid 栅格 </a></h3>\n    <div class=\"bs-example\">\n      <div class=\"container grid-demo\">\n        <div class=\"row\">\n          <div class=\"col-lg-24\">col-lg-24</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-23\">col-lg-23</div>\n          <div class=\"col-lg-1\">1</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-22\">col-lg-22</div>\n          <div class=\"col-lg-2\">2</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-21\">col-lg-21</div>\n          <div class=\"col-lg-3\">col-lg-3</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-20\">col-lg-20</div>\n          <div class=\"col-lg-4\">col-lg-4</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-19\">col-lg-19</div>\n          <div class=\"col-lg-5\">col-lg-5</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-18\">col-lg-18</div>\n          <div class=\"col-lg-6\">col-lg-6</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-17\">col-lg-17</div>\n          <div class=\"col-lg-7\">col-lg-7</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-16\">col-lg-16</div>\n          <div class=\"col-lg-8\">col-lg-8</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-15\">col-lg-15</div>\n          <div class=\"col-lg-9\">col-lg-9</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-14\">col-lg-14</div>\n          <div class=\"col-lg-10\">col-lg-10</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-13\">col-lg-13</div>\n          <div class=\"col-lg-11\">col-lg-11</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">col-lg-12</div>\n          <div class=\"col-lg-12\">col-lg-12</div>\n        </div>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<div class=\"container grid-demo\">\n  <div class=\"row\">\n    <div class=\"col-lg-24\">col-lg-24</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-23\">col-lg-23</div>\n    <div class=\"col-lg-1\">1</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-22\">col-lg-22</div>\n    <div class=\"col-lg-2\">2</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-21\">col-lg-21</div>\n    <div class=\"col-lg-3\">col-lg-3</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-20\">col-lg-20</div>\n    <div class=\"col-lg-4\">col-lg-4</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-19\">col-lg-19</div>\n    <div class=\"col-lg-5\">col-lg-5</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-18\">col-lg-18</div>\n    <div class=\"col-lg-6\">col-lg-6</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-17\">col-lg-17</div>\n    <div class=\"col-lg-7\">col-lg-7</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-16\">col-lg-16</div>\n    <div class=\"col-lg-8\">col-lg-8</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-15\">col-lg-15</div>\n    <div class=\"col-lg-9\">col-lg-9</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-14\">col-lg-14</div>\n    <div class=\"col-lg-10\">col-lg-10</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-13\">col-lg-13</div>\n    <div class=\"col-lg-11\">col-lg-11</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">col-lg-12</div>\n    <div class=\"col-lg-12\">col-lg-12</div>\n  </div>\n</div>\n</script></code></pre>\n    </script>\n    </code>\n  </div>\n";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/buttonDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"button\">\n    <h3 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Button 按钮</a></h3>\n    <div class=\"bs-example\">\n      <h4>基础按钮</h4>\n      <button type=\"button\" class=\"btn large primary\">大号+主按钮</button>\n      <button type=\"button\" class=\"btn large secondary\">大号+次按钮</button>\n      <button type=\"button\" class=\"btn large tertiary\">大号+三级按钮</button>\n      <button type=\"button\" class=\"btn large disabled\">大号+失效按钮</button>\n      <button type=\"button\" class=\"btn large text\">大号+文字型按钮</button>\n      <br><br>\n      <button type=\"button\" class=\"btn primary\">中号+主按钮</button>\n      <button type=\"button\" class=\"btn secondary\">中号+次按钮</button>\n      <button type=\"button\" class=\"btn tertiary\">中号+三级按钮</button>\n      <button type=\"button\" class=\"btn disabled\">中号+失效按钮</button>\n      <button type=\"button\" class=\"btn text\">中号+文字型按钮</button>\n      <br><br>\n      <button type=\"button\" class=\"btn small primary\">小号+主按钮</button>\n      <button type=\"button\" class=\"btn small secondary\">小号+次按钮</button>\n      <button type=\"button\" class=\"btn small tertiary\">小号+三级按钮</button>\n      <button type=\"button\" class=\"btn small disabled\">小号+失效按钮</button>\n      <button type=\"button\" class=\"btn small text\">小号+文字型按钮</button>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- 基础按钮，样式采用名称组合的形式 -->\n<!-- 用样式btn，标识是个按钮，且具有默认样式 -->\n<!-- 按钮尺寸，有大号（large）、中号（default，可以不写）和小号（small）-->\n<!-- 按钮类型，有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->\n<button type=\"button\" class=\"btn large primary\">大号+主按钮</button>\n<button type=\"button\" class=\"btn large secondary\">大号+次按钮</button>\n<button type=\"button\" class=\"btn large tertiary\">大号+三级按钮</button>\n<button type=\"button\" class=\"btn large disabled\">大号+失效按钮</button>\n<button type=\"button\" class=\"btn large text\">大号+文字型按钮</button>\n<button type=\"button\" class=\"btn default primary\">中号+主按钮</button>\n<button type=\"button\" class=\"btn default secondary\">中号+次按钮</button>\n<button type=\"button\" class=\"btn default tertiary\">中号+三级按钮</button>\n<button type=\"button\" class=\"btn default disabled\">中号+失效按钮</button>\n<button type=\"button\" class=\"btn default text\">中号+文字型按钮</button>\n<button type=\"button\" class=\"btn small primary\">小号+主按钮</button>\n<button type=\"button\" class=\"btn small secondary\">小号+次按钮</button>\n<button type=\"button\" class=\"btn small tertiary\">小号+三级按钮</button>\n<button type=\"button\" class=\"btn small disabled\">小号+失效按钮</button>\n<button type=\"button\" class=\"btn small text\">小号+文字型按钮</button>\n</script></code></pre>\n  </div>\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(145)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/buttonsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/buttonsDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _radioGroup = __webpack_require__(146);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _radioBtn = __webpack_require__(149);
	
	var _radioBtn2 = _interopRequireDefault(_radioBtn);
	
	var _checkboxGroup = __webpack_require__(153);
	
	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);
	
	var _checkboxBtn = __webpack_require__(156);
	
	var _checkboxBtn2 = _interopRequireDefault(_checkboxBtn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="buttons">
	//     <h3 class="page-header"><a href="#buttons" class="anchor">Buttons 组合切换按钮</a></h3>
	//     <div class="bs-example">
	//       <h4>基础组合切换按钮样式使用</h4>
	//       <div class="btn-group large">
	//         <button type="button" class="active">总计</button>
	//         <button type="button">语音验证码统计</button>
	//         <button type="button">短信验证码统计</button>
	//       </div>
	//       <br><br>
	//       <div class="btn-group">
	//         <button type="button">总计</button>
	//         <button type="button" class="active">语音验证码统计</button>
	//         <button type="button">短信验证码统计</button>
	//         <button type="button">流量验证码统计</button>
	//       </div>
	//       <br><br>
	//       <div class="btn-group small">
	//         <button type="button">总计</button>
	//         <button type="button">语音验证码统计</button>
	//         <button type="button" class="active">短信验证码统计</button>
	//         <button type="button">流量验证码统计</button>
	//         <button type="button">通话</button>
	//       </div>
	//       <h4>Checkbox</h4>
	//       <checkbox-group :value.sync="checkboxValue">
	//         <checkbox value="left">Left</checkbox>
	//         <checkbox value="middle" checked>Middle</checkbox>
	//         <checkbox value="right">Right</checkbox>
	//       </checkbox-group>
	//       <p>
	//         <pre>
	// Checkbox value: {{checkboxValue | json}}
	//         </pre>
	//       </p>
	//       <hr>
	//       <h4>Radio</h4>
	//       <radio-group :value.sync="radioValue" size="large">
	//         <radio value="left">Left</radio>
	//         <radio value="middle" checked>Middle</radio>
	//         <radio value="right">Right</radio>
	//       </radio-group>
	//
	//       <radio-group :value.sync="radioValue" size="small">
	//         <radio value="left">Left</radio>
	//         <radio value="middle" checked>Middle</radio>
	//         <radio value="right">Right</radio>
	//       </radio-group>
	//       <p>
	//         <pre>
	// Radio value: {{radioValue}}
	//         </pre>
	//       </p>
	//     </div>
	//
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <!-- 组合切换按钮，样式采用名称组合的形式 -->
	// <!-- 按钮组可包含多个按钮 -->
	// <!-- 用样式btn-group，标识是个按钮组 -->
	// <!-- 按钮组尺寸，有大号（large）、中号（default，可以不写）和小号（small）-->
	// <!-- 通过增加active样式，默认选中按钮 -->
	// <div class="btn-group large">
	//   <button type="button" class="active">总计</button>
	//   <button type="button">语音验证码统计</button>
	//   <button type="button">短信验证码统计</button>
	// </div>
	// <div class="btn-group">
	//   <button type="button">总计</button>
	//   <button type="button" class="active">语音验证码统计</button>
	//   <button type="button">短信验证码统计</button>
	//   <button type="button">流量验证码统计</button>
	// </div>
	// <div class="btn-group small">
	//   <button type="button">总计</button>
	//   <button type="button">语音验证码统计</button>
	//   <button type="button" class="active">短信验证码统计</button>
	//   <button type="button">流量验证码统计</button>
	//   <button type="button">通话</button>
	// </div>
	// <!-- 集合类似checkbox和radio功能的按钮组合调用方式如下 -->
	// <checkbox-group :value.sync="checkboxValue">
	//   <checkbox value="left">Left</checkbox>
	//   <checkbox value="middle" checked>Middle</checkbox>
	//   <checkbox value="right">Right</checkbox>
	// </checkbox-group>
	//
	// <radio-group :value.sync="radioValue" size="large">
	//   <radio value="left">Left</radio>
	//   <radio value="middle" checked>Middle</radio>
	//   <radio value="right">Right</radio>
	// </radio-group>
	//
	// <radio-group :value.sync="radioValue" size="small">
	//   <radio value="left">Left</radio>
	//   <radio value="middle" checked>Middle</radio>
	//   <radio value="right">Right</radio>
	// </radio-group>
	//
	//
	// </script></code></pre>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    radio: _radioBtn2.default,
	    radioGroup: _radioGroup2.default,
	    checkboxGroup: _checkboxGroup2.default,
	    checkbox: _checkboxBtn2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: ''
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(147)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/radioGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(148)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/radioGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons" :class="{
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn-group\" data-toggle=\"buttons\" :class=\"{\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(150)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/radioBtn.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(152)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/radioBtn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.$parent.value === this.value;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.value = this.value;
	    }
	  },
	  created: function created() {
	    if (this.$parent.value === this.value) {
	      this.checked = true;
	    } else if (!this.$parent.value.length && this.checked) {
	      this.$parent.value = this.value;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <label class="button"
	//   v-bind:class="{
	//     'active':active,
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//
	//     <input type="radio" autocomplete="off"
	//       :checked="checked"
	//       @click="handleClick"
	//     />
	//
	//     <slot></slot>
	//
	//   </label>
	// </template>
	//
	// <script>

/***/ },
/* 151 */
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
/* 152 */
/***/ function(module, exports) {

	module.exports = "\n<label class=\"button\"\nv-bind:class=\"{\n  'active':active,\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n\n  <input type=\"radio\" autocomplete=\"off\"\n    :checked=\"checked\"\n    @click=\"handleClick\"\n  />\n\n  <slot></slot>\n\n</label>\n";

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(154)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/checkboxGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(155)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/checkboxGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons" :class="{
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn-group\" data-toggle=\"buttons\" :class=\"{\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(157)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/checkboxBtn.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(158)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/checkboxBtn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    size: String
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      this.checked = !this.checked;
	    }
	  },
	  created: function created() {
	    if (this.$parent.value.length) {
	      this.checked = this.$parent.value.indexOf(this.value) > -1;
	    } else if (this.checked) {
	      this.$parent.value.push(this.value);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <label class="button"
	//   v-bind:class="{
	//     'active':checked,
	//     'large': size == 'large',
	//     'small': size == 'small'
	//   }">
	//     <input type="checkbox" autocomplete="off"
	//     :checked="checked"
	//     @click="handleClick"
	//     />
	//
	//     <slot></slot>
	//   </label>
	// </template>
	// <script>
	//'btn-success':type == 'success',
	// 'btn-warning':type == 'warning',
	// 'btn-info':type == 'info',
	// 'btn-danger':type == 'danger',
	// 'btn-default':type == 'default',
	// 'btn-primary':type == 'primary',

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "\n<label class=\"button\"\nv-bind:class=\"{\n  'active':checked,\n  'large': size == 'large',\n  'small': size == 'small'\n}\">\n  <input type=\"checkbox\" autocomplete=\"off\"\n  :checked=\"checked\"\n  @click=\"handleClick\"\n  />\n\n  <slot></slot>\n</label>\n";

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"buttons\">\n    <h3 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Buttons 组合切换按钮</a></h3>\n    <div class=\"bs-example\">\n      <h4>基础组合切换按钮样式使用</h4>\n      <div class=\"btn-group large\">\n        <button type=\"button\" class=\"active\">总计</button>\n        <button type=\"button\">语音验证码统计</button>\n        <button type=\"button\">短信验证码统计</button>\n      </div>\n      <br><br>\n      <div class=\"btn-group\">\n        <button type=\"button\">总计</button>\n        <button type=\"button\" class=\"active\">语音验证码统计</button>\n        <button type=\"button\">短信验证码统计</button>\n        <button type=\"button\">流量验证码统计</button>\n      </div>\n      <br><br>\n      <div class=\"btn-group small\">\n        <button type=\"button\">总计</button>\n        <button type=\"button\">语音验证码统计</button>\n        <button type=\"button\" class=\"active\">短信验证码统计</button>\n        <button type=\"button\">流量验证码统计</button>\n        <button type=\"button\">通话</button>\n      </div>\n      <h4>Checkbox</h4>\n      <checkbox-group :value.sync=\"checkboxValue\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\" checked>Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </checkbox-group>\n      <p>\n        <pre>\nCheckbox value: {{checkboxValue | json}}\n        </pre>\n      </p>\n      <hr>\n      <h4>Radio</h4>\n      <radio-group :value.sync=\"radioValue\" size=\"large\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n\n      <radio-group :value.sync=\"radioValue\" size=\"small\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n      <p>\n        <pre>\nRadio value: {{radioValue}}\n        </pre>\n      </p>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- 组合切换按钮，样式采用名称组合的形式 -->\n<!-- 按钮组可包含多个按钮 -->\n<!-- 用样式btn-group，标识是个按钮组 -->\n<!-- 按钮组尺寸，有大号（large）、中号（default，可以不写）和小号（small）-->\n<!-- 通过增加active样式，默认选中按钮 -->\n<div class=\"btn-group large\">\n  <button type=\"button\" class=\"active\">总计</button>\n  <button type=\"button\">语音验证码统计</button>\n  <button type=\"button\">短信验证码统计</button>\n</div>\n<div class=\"btn-group\">\n  <button type=\"button\">总计</button>\n  <button type=\"button\" class=\"active\">语音验证码统计</button>\n  <button type=\"button\">短信验证码统计</button>\n  <button type=\"button\">流量验证码统计</button>\n</div>\n<div class=\"btn-group small\">\n  <button type=\"button\">总计</button>\n  <button type=\"button\">语音验证码统计</button>\n  <button type=\"button\" class=\"active\">短信验证码统计</button>\n  <button type=\"button\">流量验证码统计</button>\n  <button type=\"button\">通话</button>\n</div>\n<!-- 集合类似checkbox和radio功能的按钮组合调用方式如下 -->\n<checkbox-group :value.sync=\"checkboxValue\">\n  <checkbox value=\"left\">Left</checkbox>\n  <checkbox value=\"middle\" checked>Middle</checkbox>\n  <checkbox value=\"right\">Right</checkbox>\n</checkbox-group>\n\n<radio-group :value.sync=\"radioValue\" size=\"large\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n<radio-group :value.sync=\"radioValue\" size=\"small\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n\n</script></code></pre>\n  </div>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(161)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/inputDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"input\">\n    <h3 class=\"page-header\"><a href=\"#input\" class=\"anchor\">input 输入框</a></h3>\n    <div class=\"bs-example\">\n    <h4>输入框尺寸</h4>\n    <div>\n      <input type=\"text\" placeholder=\"输入框－大尺寸\" class=\"input large\"></input>\n    </div>\n    <br>\n    <div>\n      <input type=\"text\" placeholder=\"输入框－默认尺寸\" class=\"input\"></input>\n    </div>\n    <br>\n    <div>\n      <input type=\"text\" placeholder=\"输入框－小尺寸\" class=\"input small\"></input>\n    </div>\n    <h4>输入框状态</h4>\n    <div>\n      <input type=\"text\" placeholder=\"禁用输入框－默认尺寸\" class=\"input\" disabled></input>\n    </div>\n    <br>\n    <div>\n      <input type=\"text\" placeholder=\"error输入框－默认尺寸\" class=\"input error\"></input>\n    </div>\n    <br>\n    <div>\n      <input type=\"text\" placeholder=\"success输入框－默认尺寸\" class=\"input success\"></input>\n    </div>\n\n    <!-- <h4>验证状态</h4>\n    <div class=\"form-group has-success\">\n      <label class=\"control-label\" for=\"inputSuccess1\">成功</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess1\" aria-describedby=\"helpBlock2\">\n      <span id=\"helpBlock2\" class=\"help-block\">提示文字</span>\n    </div>\n    <div class=\"form-group has-warning\">\n      <label class=\"control-label\" for=\"inputWarning1\">警告</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputWarning1\">\n    </div>\n    <div class=\"form-group has-error\">\n      <label class=\"control-label\" for=\"inputError1\">错误</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputError1\">\n    </div>\n    <div class=\"has-success\">\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"checkboxSuccess\" value=\"option1\">\n          选择OK\n        </label>\n      </div>\n    </div>\n    <div class=\"has-warning\">\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"checkboxWarning\" value=\"option1\">\n          选择警告\n        </label>\n      </div>\n    </div>\n    <div class=\"has-error\">\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"checkboxError\" value=\"option1\">\n          选择错误\n        </label>\n      </div>\n    </div>\n    <h4>文本域</h4>\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" placeholder=\"文本域\"></textarea>\n    </div>\n    </div> -->\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- input输入框，样式采用名称组合的形式 -->\n<!-- 用样式input，标识是个input输入框，且具有默认的样式 -->\n<!-- 输入框尺寸，有大号（large）、中号（default，可省略）和小号（small）-->\n<!-- 输入框状态，有错误（error）、正确（success）、禁用（标签加disabled属性即可）-->\n<input type=\"text\" placeholder=\"输入框－默认尺寸\" class=\"input\"></input>\n<input type=\"text\" placeholder=\"输入框－大尺寸\" class=\"input large\"></input>\n<input type=\"text\" placeholder=\"输入框－小尺寸\" class=\"input small\"></input>\n<input type=\"text\" placeholder=\"禁用输入框－默认尺寸\" class=\"input\" disabled></input>\n<input type=\"text\" placeholder=\"错误输入框－默认尺寸\" class=\"input error\"></input>\n<input type=\"text\" placeholder=\"成功输入框－默认尺寸\" class=\"input success\"></input>\n</script></code></pre>\n  </div>\n</template>";

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(163)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/uploadDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(168)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/uploadDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Uploader = __webpack_require__(164);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    fileUpload: _Uploader2.default
	  },
	  data: function data() {
	    return {
	      uploadTime: 0,
	      fileList1: [],
	      fileList2: [],
	      multiple: true,
	      hideButton: false,
	      autoSubmit: false,
	      ajaxUrl: 'http://localhost:8080/upload'
	    };
	  },
	
	  events: {
	    'completed::file-upload': function completedFileUpload(res) {
	      if (typeof res == 'string') {
	        console.log('错误信息是：' + res);
	      } else {
	        console.log(res);
	      }
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="upload">
	//     <h3 class="page-header"><a href="#upload" class="anchor">upload 文件上传 </a></h3>
	//     <div class="bs-example">
	//       <h4>Upload 文件上传</h4>
	//       <h5>1、点击上传</h5>
	//       <form id="upload1" method="post" action="{{ajaxUrl}}">
	//         <file-upload
	//           id="file-upload-click-test"
	//           form-id="upload1"
	//           upload-type="click"
	//           :ajax="ajaxUrl"
	//           :multiple="multiple"
	//           name="files1"
	//           :auto-submit="true"
	//           :hide-button="true"
	//           :file-list.sync="fileList1">
	//         </file-upload>
	//       </form>
	//       <h5>2、支持拖拽上传</h5>
	//       <form id="upload2" method="post" action="{{ajaxUrl}}">
	//         <file-upload
	//           id="file-upload-drag-test"
	//           form-id="upload2"
	//           upload-type="drag"
	//           :ajax="ajaxUrl"
	//           :multiple="multiple"
	//           name="files2"
	//           :auto-submit="autoSubmit"
	//           :hide-button="hideButton"
	//           :file-list.sync="fileList2">
	//         </file-upload>
	//       </form>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// upload文件上传
	// 1、点击上传调用方式
	// <form id="upload1" method="post" action="upload.do">
	//   <file-upload id="file-upload-click-test" form-id="upload1" upload-type="click" :ajax="upload.do" :multiple="true" name="files1" :auto-submit="true" :hide-button="true" :file-list.sync="fileList1">
	//   </file-upload>
	// </form>
	// 2、支持拖拽上传调用方式
	// <form id="upload2" method="post" action="upload.do">
	//   <file-upload id="file-upload-drag-test" form-id="upload2" upload-type="drag" :ajax="upload.do" :multiple="true" name="files2" :auto-submit="false" :hide-button="false" :file-list.sync="fileList2">
	//   </file-upload>
	// </form>
	//     </script></code></pre>
	//     <h4>参数</h4>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>参数名</th>
	//           <th>类型</th>
	//           <th>默认值</th>
	//           <th>说明</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>id</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>唯一标识</td>
	//         </tr>
	//         <tr>
	//           <td>form-id</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>如需上传后自动提交，请确保以该值为id的form存在，否则，无需设置</td>
	//         </tr>
	//         <tr>
	//           <td>upload-type</td>
	//           <td><code>String</code></td>
	//           <td><code>click</code></td>
	//           <td>取值有<code>click</code>和<code>drop</code>两种，分别代表点击上传和支持拖拽上传</td>
	//         </tr>
	//         <tr>
	//           <td>accept</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>上传的文件类型指定，详细可查看MIME类型</td>
	//         </tr>
	//         <tr>
	//           <td>ajax</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>文件上传的地址</td>
	//         </tr>
	//         <tr>
	//           <td>multiple</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>是否支持多文件上传</td>
	//         </tr>
	//         <tr>
	//           <td>name</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>名称</td>
	//         </tr>
	//         <tr>
	//           <td>auto-submit</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>上传后是否自动提交</td>
	//         </tr>
	//         <tr>
	//           <td>hide-button</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>是否隐藏upload按钮</td>
	//         </tr>
	//         <tr>
	//           <td>file-list</td>
	//           <td><code>Array</code></td>
	//           <td><code>空数组</code></td>
	//           <td>上传的文件列表</td>
	//         </tr>
	//         <tr>
	//           <td>method</td>
	//           <td><code>String</code></td>
	//           <td><code>POST</code></td>
	//           <td>上传文件请求类型</td>
	//         </tr>
	//         <tr>
	//           <td>completed::file-upload</td>
	//           <td><code>Function</code></td>
	//           <td></td>
	//           <td>上传请求执行完成后的回调，需要在events中捕获。</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	//
	// </template>
	//
	// <script>

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(165)
	__vue_script__ = __webpack_require__(166)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Uploader.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Uploader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 165 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 166 */
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
	//
	// </template>
	// <style lang="less">
	//
	// @keyframes appear-from-inside
	// {
	//     from    { transform: scale( 0 ); }
	//     75%     { transform: scale( 1.1 ); }
	//     to      { transform: scale( 1 ); }
	// }
	//
	// .file-upload {
	//
	//   .select-files {
	//     width: 227px;
	//
	//     .file-item {
	//       display: block;
	//       position: relative;
	//       width: 227px;
	//       height: 30px;
	//       line-height: 30px;
	//       padding: 0 30px;
	//       text-align: left;
	//       border-radius: 4px;
	//
	//       &:hover {
	//         background-color: #F2FAFF;
	//         text-decoration: none;
	//       }
	//
	//       span {
	//         color: #00A0FF;
	//       }
	//     }
	//   }
	//
	//   input[type="file"] {
	//     position: absolute;
	//     width: 0.1px;
	//     height: 0.1px;
	//     opacity: 0;
	//     overflow: hidden;
	//     z-index: -1;
	//
	//     + label {
	//       display: inline-block;
	//       max-width: 80%;
	//       white-space: nowrap;
	//       cursor: pointer;
	//       overflow: hidden;
	//
	//       &:hover, &:focus {
	//           color: #39bfd3;
	//       }
	//     }
	//
	//     &:focus + label, &.has-focus + label {
	//         outline: 1px dotted #000;
	//         outline: -webkit-focus-ring-color auto 5px;
	//     }
	//   }
	//
	//   .drag-upload {
	//     position: relative;
	//     background-color: #c8dadf;
	//     padding: 100px 20px;
	//     text-align: center;
	//
	//     &.active {
	//       outline: 2px dashed #92b0b3;
	//       outline-offset: -10px;
	//       transition: outline-offset .15s ease-in-out, background-color .15s linear;
	//     }
	//     .state {
	//       .state-uploading {
	//         font-style: italic;
	//       }
	//     }
	//
	//     .animate  {
	//       animation: appear-from-inside .25s ease-in-out;
	//     }
	//
	//     &.is-dragover {
	//         outline-offset: -20px;
	//         outline-color: #c8dadf;
	//         background-color: #fff;
	//     }
	//   }
	//
	//   .upload-rate {
	//     .rate-control {
	//       position: relative;
	//       display: inline-block;
	//       width: 90px;
	//       height: 22px;
	//       background-color: #f2f2f2;
	//       border-radius: 4px;
	//       overflow: hidden;
	//     }
	//
	//     .rate {
	//       display: inline-block;
	//       width: 0;
	//       height: 22px;
	//       background-color: #d9d9d9;
	//       border-radius: 4px 0 0 4px;
	//       transition-property: width;
	//
	//       &.active {
	//         width: 90px;
	//         transition-property: width;
	//       }
	//     }
	//
	//     .rate-tip {
	//       position: absolute;
	//       left: 0;
	//       top: 0;
	//       display: inline-block;
	//       width: 90px;
	//       height: 22px;
	//       line-height: 22px;
	//       color: #666;
	//       font-size: 12px;
	//       text-align: center;
	//       overflow: hidden;
	//     }
	//
	//     a {
	//       color: #00A0FF;
	//
	//       &:hover {
	//         text-decoration: none;
	//       }
	//     }
	//   }
	// }
	// </style>
	// <script>
	exports.default = {
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
	        throw "You need to wrap this component in a form and specify it's id in a 'form-id' attribute.";
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
/* 167 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"file-upload\">\n  <div class=\"click-upload\" v-if=\"uploadType == 'click'\">\n    <div>\n      <input\n        type=\"file\"\n        name=\"files[]\"\n        id=\"{{id}}\"\n        accept=\"accept\"\n        v-bind:multiple=\"multiple\"\n        v-on:change=\"onChange($event)\" />\n      <label for=\"{{id}}\">\n        <span class=\"btn tertiary small\">点击上传</span>\n      </label>\n    </div>\n    <div class=\"select-files\" v-if=\"fileList.length > 0\">\n      <a class=\"file-item\" href=\"javascript:;\" v-for=\"file in selectFiles\">\n        <span>{{file}}</span>\n      </a>\n    </div>\n    <button type=\"submit\" class=\"btn\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">Upload</button>\n    <div class=\"state\">\n      <div class=\"upload-rate\" v-show=\"state == 'uploading'\">\n        <span class=\"rate-control\">\n          <span class=\"rate\" :style=\"{'width': +progress * 0.9 + 'px'}\"></span>\n          <span class=\"rate-tip\">\n            {{text.uploading}}\n            <span v-if=\"advancedUpload\">{{progress}}</span>\n          </span>\n        </span>\n        <a class=\"cancel-upload\" href=\"javascript:;\">取消</a>\n      </div>\n      <div class=\"upload-rate\" v-show=\"state == 'success'\">\n        <span class=\"rate-control\">\n          <span class=\"rate\" :style=\"{'width': '90px'}\"></span>\n          <span class=\"rate-tip\">上传成功</span>\n        </span>\n        <a class=\"continu-upload\" @click.prevent=\"restart\" href=\"javascript:;\">继续上传？</a>\n      </div>\n      <div class=\"upload-rate\" v-show=\"state == 'error'\">\n        <span>出错了！{{errorMessage}}</span>\n        <a class=\"continu-upload\" @click.prevent=\"retry\" href=\"javascript:;\">请重试</a>\n      </div>\n    </div>\n  </div>\n  <div v-if=\"uploadType == 'drag'\" class=\"drag-upload {{advancedUpload ? 'active' : ''}} {{dragover ? 'is-dragover' : ''}}\">\n      <div v-if=\"state == null || state == 'retry'\">\n        <input\n            type=\"file\"\n            name=\"files[]\"\n            id=\"{{id}}\"\n            accept=\"accept\"\n            v-bind:multiple=\"multiple && advancedUpload\"\n            v-on:change=\"onChange($event)\" />\n        <label for=\"{{id}}\">\n          <span v-if=\"fileList.length == 0 && advancedUpload\">将文件拖拽至框中上传或点此上传</span>\n          <p v-if=\"fileList.length > 0\" v-for=\"file in selectFiles\">{{file}}</p>\n        </label>\n        <br>\n        <button type=\"submit\" class=\"btn\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">Upload</button>\n      </div>\n      <div class=\"state\" v-if=\"state != null\">\n        <span class=\"state-uploading animate\" v-show=\"state == 'uploading'\">\n          {{text.uploading}}\n          <span v-if=\"advancedUpload\">{{progress}}</span>\n        </span>\n        <span class=\"state-success animate\" v-show=\"state == 'success'\">\n          上传成功\n          <a href=\"#\" v-on:click.prevent=\"restart\" role=\"button\" v-show=\"multiple\">继续上传?</a>\n        </span>\n        <span class=\"state-error animate\" v-show=\"state == 'error'\">\n          出错了!\n          <span>{{errorMessage}}</span>\n          <a href=\"#\" v-on:click.prevent=\"retry\">请重试</a>\n        </span>\n      </div>\n  </div>\n</div>\n\n";

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"upload\">\n    <h3 class=\"page-header\"><a href=\"#upload\" class=\"anchor\">upload 文件上传 </a></h3>\n    <div class=\"bs-example\">\n      <h4>Upload 文件上传</h4>\n      <h5>1、点击上传</h5>\n      <form id=\"upload1\" method=\"post\" action=\"{{ajaxUrl}}\">\n        <file-upload\n          id=\"file-upload-click-test\"\n          form-id=\"upload1\"\n          upload-type=\"click\"\n          :ajax=\"ajaxUrl\"\n          :multiple=\"multiple\"\n          name=\"files1\"\n          :auto-submit=\"true\"\n          :hide-button=\"true\"\n          :file-list.sync=\"fileList1\">\n        </file-upload>\n      </form>\n      <h5>2、支持拖拽上传</h5>\n      <form id=\"upload2\" method=\"post\" action=\"{{ajaxUrl}}\">\n        <file-upload\n          id=\"file-upload-drag-test\"\n          form-id=\"upload2\"\n          upload-type=\"drag\"\n          :ajax=\"ajaxUrl\"\n          :multiple=\"multiple\"\n          name=\"files2\"\n          :auto-submit=\"autoSubmit\"\n          :hide-button=\"hideButton\"\n          :file-list.sync=\"fileList2\">\n        </file-upload>\n      </form>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\nupload文件上传\n1、点击上传调用方式\n<form id=\"upload1\" method=\"post\" action=\"upload.do\">\n  <file-upload id=\"file-upload-click-test\" form-id=\"upload1\" upload-type=\"click\" :ajax=\"upload.do\" :multiple=\"true\" name=\"files1\" :auto-submit=\"true\" :hide-button=\"true\" :file-list.sync=\"fileList1\">\n  </file-upload>\n</form>\n2、支持拖拽上传调用方式\n<form id=\"upload2\" method=\"post\" action=\"upload.do\">\n  <file-upload id=\"file-upload-drag-test\" form-id=\"upload2\" upload-type=\"drag\" :ajax=\"upload.do\" :multiple=\"true\" name=\"files2\" :auto-submit=\"false\" :hide-button=\"false\" :file-list.sync=\"fileList2\">\n  </file-upload>\n</form>\n    </script></code></pre>\n    <h4>参数</h4>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>唯一标识</td>\n        </tr>\n        <tr>\n          <td>form-id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>如需上传后自动提交，请确保以该值为id的form存在，否则，无需设置</td>\n        </tr>\n        <tr>\n          <td>upload-type</td>\n          <td><code>String</code></td>\n          <td><code>click</code></td>\n          <td>取值有<code>click</code>和<code>drop</code>两种，分别代表点击上传和支持拖拽上传</td>\n        </tr>\n        <tr>\n          <td>accept</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>上传的文件类型指定，详细可查看MIME类型</td>\n        </tr>\n        <tr>\n          <td>ajax</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文件上传的地址</td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否支持多文件上传</td>\n        </tr>\n        <tr>\n          <td>name</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>名称</td>\n        </tr>\n        <tr>\n          <td>auto-submit</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>上传后是否自动提交</td>\n        </tr>\n        <tr>\n          <td>hide-button</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否隐藏upload按钮</td>\n        </tr>\n        <tr>\n          <td>file-list</td>\n          <td><code>Array</code></td>\n          <td><code>空数组</code></td>\n          <td>上传的文件列表</td>\n        </tr>\n        <tr>\n          <td>method</td>\n          <td><code>String</code></td>\n          <td><code>POST</code></td>\n          <td>上传文件请求类型</td>\n        </tr>\n        <tr>\n          <td>completed::file-upload</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>上传请求执行完成后的回调，需要在events中捕获。</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/formDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(171)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/formDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 170 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//
	//   <div class="bs-docs-section" id="form">
	//     <h3 class="page-header"><a href="#form" class="anchor">form 表单 </a></h3>
	//     <div class="bs-example">
	//       <form class="form">
	//         <div class="form-item row form-item-with-help">
	//           <label class="form-label col-lg-7"><span class="required-icon">*</span>用户名：</label>
	//           <div class="col-lg-17">
	//             <div class="form-input">
	//               <input type="text" class="input" placeholder="电话号码" />
	//               <i class="iconfont status-icon">&#xe600;</i>
	//             </div>
	//             <div class="status-info">请输入有效的电话号码</div>
	//           </div>
	//         </div>
	//         <div class="form-item row form-item-with-help has-error">
	//           <label class="form-label col-lg-7"><span class="required-icon">*</span>用户名：</label>
	//           <div class="col-lg-17">
	//             <div class="form-input">
	//               <input type="text" class="input error" placeholder="电话号码" />
	//               <i class="iconfont status-icon">&#xe600;</i>
	//             </div>
	//             <div class="status-info">请输入有效的电话号码</div>
	//           </div>
	//         </div>
	//       </form>
	//       <!-- <form class="container form" v-form name="myform" @submit.prevent="onSubmit">
	//         <div class="errors" v-if="myform.$submitted">
	//             <p v-if="myform.name.$error.required">Name is required.</p>
	//             <p v-if="myform.email.$error.email">Email is not valid.</p>
	//         </div>
	//
	//         <div class="row">
	//           <div class="col-lg-7 form-label">
	//             <label><span class="required">*</span>姓名：</label>
	//           </div>
	//           <div class="col-lg-7">
	//             <input class="input" v-model="model.name" v-form-ctrl required name="name" />
	//           </div>
	//         </div>
	//
	//         <div class="row">
	//           <div class="col-lg-7 form-label">
	//             <label><span class="required">*</span>邮箱：</label>
	//           </div>
	//           <div class="col-lg-17">
	//             <input class="input" v-model="model.email" v-form-ctrl name="email" type="email" required />
	//           </div>
	//         </div>
	//
	//         <div class="row">
	//           <div class="col-lg-7 form-label">
	//             <label>性别：</label>
	//           </div>
	//           <div class="col-lg-17">
	//             <label>
	//               <input v-form-ctrl name="sexy" type="radio" />
	//               女
	//             </label>
	//             <label>
	//               <input v-form-ctrl name="sexy" type="radio" checked />
	//               男
	//             </label>
	//           </div>
	//         </div>
	//
	//         <div class="row">
	//           <div class="col-lg-7 form-label">
	//             <label>多选框：</label>
	//           </div>
	//           <div class="col-lg-17">
	//             <label>
	//               <input v-form-ctrl name="cb1" type="checkbox" />
	//               未选中状态
	//             </label>
	//             <label>
	//               <input v-form-ctrl name="cb2" type="checkbox" checked />
	//               选中状态
	//             </label>
	//             <label>
	//               <input v-form-ctrl name="cb3" type="checkbox" disabled />
	//               未选中不可点击状态
	//             </label>
	//             <label>
	//               <input v-form-ctrl name="cb4" type="checkbox" checked disabled />
	//               选中不可点击状态
	//             </label>
	//           </div>
	//         </div>
	//
	//         <div class="row">
	//           <label>
	//             <div class="col-lg-7 form-label">
	//               <span>Contact details <span v-if="model.contactRequired">*</span></span>
	//             </div>
	//             <div class="col-lg-17">
	//               <textarea class="textarea" v-model="model.contact" :required="model.contactRequired" v-form-ctrl name="comments"></textarea>
	//             </div>
	//           </label>
	//         </div>
	//
	//         <div class="row" v-if="model.contactRequired">
	//           <label>
	//             <div class="col-lg-7 form-label">
	//               <span>3 digit code *</span>
	//             </div>
	//             <div class="col-lg-17">
	//               <input class="input" v-model="model.code" v-form-ctrl name="code" type="text" pattern="[A-Za-z]{3}" required />
	//             </div>
	//           </label>
	//         </div>
	//
	//         <button type="submit">Submit</button>
	//       </form>
	//       <pre>{{ myform | json }}</pre> -->
	//       <!-- <Form>
	//         <FromItem label="姓名：" :labelCol="7" :validStatus="valid.nameStatus">
	//           <FromInput type="text" placeholder="请输入姓名" defaultValue="" ></FromInput>
	//         </FromItem>
	//       </Form>
	//       <Form arragement="vertical">
	//         <FromItem label="姓名：" :rules="" :validStatus="">
	//           <Input placeholder="请输入姓名" defaultValue=""></Input>
	//         </FromItem>
	//       </Form> -->
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// checkbox复选框
	// 使用方式与原生的一样 <input type="checkbox" id="cb" checked disabled />
	//
	// radio单选框
	// 使用方式与原生的一样 <input type="radio" id="radio" checked disabled />
	//     </script></code></pre>
	//     </script>
	//     </code>
	//   </div>
	// </template>
	//
	// <script>
	// import Form from 'src/components/Form.vue';
	// import FromItem from 'src/components/FormItem.vue';
	// import FromInput from 'src/components/FormInput.vue';
	// import fromValid from 'src/plugins/form-valid.js';
	// Vue.use(fromValid);
	
	exports.default = {
	  // components: {
	  //   Form,
	  //   FromItem,
	  //   FromInput
	  // },
	
	  data: function data() {
	    return {
	      myform: {},
	      valid: {
	        nameStatus: ''
	      }
	    };
	  },
	
	  methods: {
	    onSubmit: function onSubmit() {
	      console.log(this.myform.$valid);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = "\n\n  <div class=\"bs-docs-section\" id=\"form\">\n    <h3 class=\"page-header\"><a href=\"#form\" class=\"anchor\">form 表单 </a></h3>\n    <div class=\"bs-example\">\n      <form class=\"form\">\n        <div class=\"form-item row form-item-with-help\">\n          <label class=\"form-label col-lg-7\"><span class=\"required-icon\">*</span>用户名：</label>\n          <div class=\"col-lg-17\">\n            <div class=\"form-input\">\n              <input type=\"text\" class=\"input\" placeholder=\"电话号码\" />\n              <i class=\"iconfont status-icon\">&#xe600;</i>\n            </div>\n            <div class=\"status-info\">请输入有效的电话号码</div>\n          </div>\n        </div>\n        <div class=\"form-item row form-item-with-help has-error\">\n          <label class=\"form-label col-lg-7\"><span class=\"required-icon\">*</span>用户名：</label>\n          <div class=\"col-lg-17\">\n            <div class=\"form-input\">\n              <input type=\"text\" class=\"input error\" placeholder=\"电话号码\" />\n              <i class=\"iconfont status-icon\">&#xe600;</i>\n            </div>\n            <div class=\"status-info\">请输入有效的电话号码</div>\n          </div>\n        </div>\n      </form>\n      <!-- <form class=\"container form\" v-form name=\"myform\" @submit.prevent=\"onSubmit\">\n        <div class=\"errors\" v-if=\"myform.$submitted\">\n            <p v-if=\"myform.name.$error.required\">Name is required.</p>\n            <p v-if=\"myform.email.$error.email\">Email is not valid.</p>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 form-label\">\n            <label><span class=\"required\">*</span>姓名：</label>\n          </div>\n          <div class=\"col-lg-7\">\n            <input class=\"input\" v-model=\"model.name\" v-form-ctrl required name=\"name\" />\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 form-label\">\n            <label><span class=\"required\">*</span>邮箱：</label>\n          </div>\n          <div class=\"col-lg-17\">\n            <input class=\"input\" v-model=\"model.email\" v-form-ctrl name=\"email\" type=\"email\" required />\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 form-label\">\n            <label>性别：</label>\n          </div>\n          <div class=\"col-lg-17\">\n            <label>\n              <input v-form-ctrl name=\"sexy\" type=\"radio\" />\n              女\n            </label>\n            <label>\n              <input v-form-ctrl name=\"sexy\" type=\"radio\" checked />\n              男\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 form-label\">\n            <label>多选框：</label>\n          </div>\n          <div class=\"col-lg-17\">\n            <label>\n              <input v-form-ctrl name=\"cb1\" type=\"checkbox\" />\n              未选中状态\n            </label>\n            <label>\n              <input v-form-ctrl name=\"cb2\" type=\"checkbox\" checked />\n              选中状态\n            </label>\n            <label>\n              <input v-form-ctrl name=\"cb3\" type=\"checkbox\" disabled />\n              未选中不可点击状态\n            </label>\n            <label>\n              <input v-form-ctrl name=\"cb4\" type=\"checkbox\" checked disabled />\n              选中不可点击状态\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <label>\n            <div class=\"col-lg-7 form-label\">\n              <span>Contact details <span v-if=\"model.contactRequired\">*</span></span>\n            </div>\n            <div class=\"col-lg-17\">\n              <textarea class=\"textarea\" v-model=\"model.contact\" :required=\"model.contactRequired\" v-form-ctrl name=\"comments\"></textarea>\n            </div>\n          </label>\n        </div>\n\n        <div class=\"row\" v-if=\"model.contactRequired\">\n          <label>\n            <div class=\"col-lg-7 form-label\">\n              <span>3 digit code *</span>\n            </div>\n            <div class=\"col-lg-17\">\n              <input class=\"input\" v-model=\"model.code\" v-form-ctrl name=\"code\" type=\"text\" pattern=\"[A-Za-z]{3}\" required />\n            </div>\n          </label>\n        </div>\n\n        <button type=\"submit\">Submit</button>\n      </form>\n      <pre>{{ myform | json }}</pre> -->\n      <!-- <Form>\n        <FromItem label=\"姓名：\" :labelCol=\"7\" :validStatus=\"valid.nameStatus\">\n          <FromInput type=\"text\" placeholder=\"请输入姓名\" defaultValue=\"\" ></FromInput>\n        </FromItem>\n      </Form>\n      <Form arragement=\"vertical\">\n        <FromItem label=\"姓名：\" :rules=\"\" :validStatus=\"\">\n          <Input placeholder=\"请输入姓名\" defaultValue=\"\"></Input>\n        </FromItem>\n      </Form> -->\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\ncheckbox复选框\n使用方式与原生的一样 <input type=\"checkbox\" id=\"cb\" checked disabled />\n\nradio单选框\n使用方式与原生的一样 <input type=\"radio\" id=\"radio\" checked disabled />\n    </script></code></pre>\n    </script>\n    </code>\n  </div>\n";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(173)
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/switchDocs.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/switchDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 173 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(175);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Modal = __webpack_require__(178);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="switch">
	//     <h3 class="page-header"><a href="#switch" class="anchor">Switch 开关</a></h3> 
	//     <div class="bs-example">
	//       <h4 class="example-title" >基本类型</h4>
	//         <table class="switchDocs-demo-table">
	//           <tr>
	//             <th>关</th>
	//             <th>开</th>
	//             <th>禁用</th>
	//           </tr>
	//           <tr>
	//             <td><Switch class="small"></Switch></td>
	//             <td><Switch class="small" :checked="checked" :on-change="changeHandler"></Switch>
	//             <modal :show.sync="smallModal" width="400px">
	//               <div slot="modal-body" class="modal-body">当前状态为{{ checked ? '开' : '关' }}</div>
	//             </modal<
	//             /td>
	//             <td><Switch class="small" :disabled="disabled"></Switch></td>
	//           </tr>
	//           <tr>
	//             <td><Switch></Switch></td>
	//             <td><Switch :checked="checked" :on-change="changeHandler"></Switch></td>
	//             <td><Switch :disabled="disabled"></Switch></td>
	//           </tr>
	//         </table>
	//
	//       <h4 class="example-title">带文字形式</h4>
	//         <table class="switchDocs-demo-table">
	//           <tr>
	//             <td><Switch>
	//           <span slot="checkedPart">开</span>
	//           <span slot="unCheckedPart">关</span>
	//         </Switch></td>
	//             <td><Switch :disabled="disabled" :checked="true">
	//           <span slot="checkedPart">开</span>
	//           <span slot="unCheckedPart">关</span>
	//         </Switch></td>
	//             <td><Switch :disabled="disabled">
	//           <span slot="checkedPart">开</span>
	//           <span slot="unCheckedPart">关</span>
	//         </Switch></td>
	//           </tr>
	//         </table>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <Switch class="small"></Switch>
	// <Switch class="small" :checked="checked" :on-change="changeHandler"></Switch>
	// <Switch class="small" :disabled="disabled"></Switch>
	// <Switch></Switch>
	// <Switch :checked="checked" :on-change="changeHandler"></Switch>
	// <Switch :disabled="disabled"></Switch>
	// <Switch>
	//   <span slot="checkedPart">开</span>
	//   <span slot="unCheckedPart">关</span>
	// </Switch>
	// <Switch :disabled="disabled" :checked="true">
	//   <span slot="checkedPart">开</span>
	//   <span slot="unCheckedPart">关</span>
	// </Switch>
	// <Switch :disabled="disabled">
	//   <span slot="checkedPart">开</span>
	//   <span slot="unCheckedPart">关</span>
	// </Switch>
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>checked</td>
	//         <td><code>Boolean</code></td>
	//         <td>false</td>
	//         <td>当前开关是否选中</td>
	//       </tr>
	//       <tr>
	//         <td>disabled</td>
	//         <td><code>Boolean</code></td>
	//         <td>false</td>
	//         <td>当前开关是否禁用</td>
	//       </tr>
	//       <tr>
	//         <td>onChange</td>
	//         <td><code>Function(checked)</code></td>
	//         <td></td>
	//         <td>状态变化后的回调函数，返回参数为当前checked（boolean）</td>
	//       </tr>
	//       <tr>
	//         <td>slot::checkedPart</td>
	//         <td><code>slot node</code></td>
	//         <td></td>
	//         <td>选中时的内容</td>
	//       </tr>
	//       <tr>
	//         <td>slot::unCheckedPart</td>
	//         <td><code>slot node</code></td>
	//         <td></td>
	//         <td>没选中时的内容</td>
	//       </tr>
	//     </tbody>
	//   </table>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checked: true,
	      disabled: true,
	      smallModal: false
	    };
	  },
	
	  components: {
	    Switch: _Switch2.default,
	    modal: _Modal2.default
	  },
	  methods: {
	    changeHandler: function changeHandler(checked) {
	      this.checked = checked;
	      this.smallModal = true;
	    }
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .example-title {
	//     margin: 20px 0;
	//   }
	//
	//   .switchDocs-demo-table {
	//     border: none;
	//     width: 50%;
	//     th {
	//       text-align: left;
	//     }
	//     td {
	//       text-align: left;
	//       padding: 10px;
	//       padding-left: 0;
	//
	//     }
	//   }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(176)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(177)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 176 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<span :class="wrapClasses" @click="changeHandler">
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
				type: Boolean,
				default: false
			},
			onChange: {
				type: Function,
				default: function _default() {}
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			wrapClasses: function wrapClasses() {
				return {
					'switch': true,
					'switch-checked': this.checked,
					'switch-disabled': this.disabled
				};
			},
			small: function small() {
				// 根据small参数来判断是否显示switch-content里面的两个slot,因为在小型switch里面承载不下超过12px大小的字体
				return this.$el.className.indexOf('small') > -1 ? true : false;
			}
		},
		methods: {
			changeHandler: function changeHandler() {
				if (this.disabled) {
					return;
				}
				this.checked = !this.checked;
				this.onChange(this.checked);
			}
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"wrapClasses\" @click=\"changeHandler\">\n\t<span class=\"switch-content\">\n\t\t<slot v-if=\"checked && !small\" name=\"checkedPart\"></slot>\n\t\t<slot v-if=\"!checked && !small\" name=\"unCheckedPart\"></slot>\n\t</span>\n</span>\n";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(179)
	__vue_script__ = __webpack_require__(181)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(188)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(180);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/./src/components/Modal.vue?11fc301c"],"names":[],"mappings":";AAmIA;EACA,kCAAA;EAAA,0BAAA;CACA;AACA;EACA,kCAAA;CACA;AACA;IACA,8BAAA;IAGA,sBAAA;IACA,WAAA;IACA,WAAA;IACA,6BAAA;IAEA,qBAAA;CACA;AACA;IACA,4BAAA;IAGA,oBAAA;IACA,6CAAA;IACA,qCAAA;IACA,WAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n  <div role=\"dialog\"\n    v-bind:class=\"{\n    'modal':true,\n    'fade':effect === 'fade',\n    'zoom':effect === 'zoom'\n    }\"\n    >\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n      v-bind:style=\"{width: optionalWidth}\">\n      <div class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"modal-title\" >{{title}}</h4>\n          </div>\n        </slot>\n        <slot name=\"modal-body\">\n          <div class=\"modal-body\"></div>\n        </slot>\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n            <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport getScrollBarWidth from './utils/getScrollBarWidth.js'\nimport EventListener from './utils/EventListener.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      title: {\n        type: String,\n        default: ''\n      },\n      show: {\n        require: true,\n        type: Boolean,\n        coerce: coerceBoolean,\n        twoWay: true\n      },\n      width: {\n        default: null\n      },\n      callback: {\n        type: Function,\n        default() {}\n      },\n      effect: {\n        type: String,\n        default: null\n      },\n      backdrop: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      large: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      small: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      }\n    },\n    ready() {\n      this.$watch('show', (val)=> {\n        const el = this.$el\n        const body = document.body\n        const scrollBarWidth =  getScrollBarWidth()\n        if (val) {\n          el.querySelector('.modal-content').focus()\n          el.style.display = 'block'\n          setTimeout(()=> el.classList.add('in'), 0)\n          body.classList.add('modal-open')\n          if (scrollBarWidth !== 0) {\n            body.style.paddingRight = scrollBarWidth + 'px'\n          }\n          if (this.backdrop) {\n            this._blurModalContentEvent = EventListener.listen(this.$el, 'click', (e)=> {\n              if (e.target === el) this.show = false\n            })\n          }\n        } else {\n          if (this._blurModalContentEvent) this._blurModalContentEvent.remove()\n          el.classList.remove('in')\n          setTimeout(()=> {\n            el.style.display = 'none'\n            body.classList.remove('modal-open')\n            body.style.paddingRight = '0'\n          }, 300)\n        }\n      }, { immediate: true })\n    },\n    computed: {\n      optionalWidth: function() {\n        if( this.width === null ) {\n          return null;\n        } else if( Number.isInteger(this.width) ) {\n          return this.width + \"px\";\n        }\n        return this.width;\n      },\n    },\n    methods: {\n      close() {\n        this.show = false\n      }\n    },\n    compiled () {\n      var me = this;\n\n      window.addEventListener('keyup', function (ev) {\n          if (ev.keyCode === 27) {\n              me.show = false;\n          }\n      });\n    }\n  }\n</script>\n<style>\n.modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(182);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(186);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(187);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(151);
	
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
	  ready: function ready() {
	    var _this = this;
	
	    this.$watch('show', function (val) {
	      var el = _this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        el.querySelector('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return el.classList.add('in');
	        }, 0);
	        body.classList.add('modal-open');
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
	        el.classList.remove('in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.classList.remove('modal-open');
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
	//     v-bind:class="{
	//     'modal':true,
	//     'fade':effect === 'fade',
	//     'zoom':effect === 'zoom'
	//     }"
	//     >
	//     <div v-bind:class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
	//       v-bind:style="{width: optionalWidth}">
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
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(183), __esModule: true };

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(184);
	module.exports = __webpack_require__(87).Number.isInteger;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(85);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(185)});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(93)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 186 */
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
/* 187 */
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
/* 188 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  v-bind:class=\"{\n  'modal':true,\n  'fade':effect === 'fade',\n  'zoom':effect === 'zoom'\n  }\"\n  >\n  <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n    v-bind:style=\"{width: optionalWidth}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n          <h4 class=\"modal-title\" >{{title}}</h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\"></div>\n      </slot>\n      <slot name=\"modal-footer\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n          <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"switch\">\n    <h3 class=\"page-header\"><a href=\"#switch\" class=\"anchor\">Switch 开关</a></h3>  \n    <div class=\"bs-example\">\n      <h4 class=\"example-title\" >基本类型</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <th>关</th>\n            <th>开</th>\n            <th>禁用</th>\n          </tr>\n          <tr>\n            <td><Switch class=\"small\"></Switch></td>\n            <td><Switch class=\"small\" :checked=\"checked\" :on-change=\"changeHandler\"></Switch>\n            <modal :show.sync=\"smallModal\" width=\"400px\">\n              <div slot=\"modal-body\" class=\"modal-body\">当前状态为{{ checked ? '开' : '关' }}</div>\n            </modal<\n            /td>\n            <td><Switch class=\"small\" :disabled=\"disabled\"></Switch></td>\n          </tr>\n          <tr>\n            <td><Switch></Switch></td>\n            <td><Switch :checked=\"checked\" :on-change=\"changeHandler\"></Switch></td>\n            <td><Switch :disabled=\"disabled\"></Switch></td>\n          </tr>\n        </table>\n        \n      <h4 class=\"example-title\">带文字形式</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <td><Switch>\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </Switch></td>\n            <td><Switch :disabled=\"disabled\" :checked=\"true\">\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </Switch></td>\n            <td><Switch :disabled=\"disabled\">\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </Switch></td>\n          </tr>\n        </table>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<Switch class=\"small\"></Switch>\n<Switch class=\"small\" :checked=\"checked\" :on-change=\"changeHandler\"></Switch>\n<Switch class=\"small\" :disabled=\"disabled\"></Switch>\n<Switch></Switch>\n<Switch :checked=\"checked\" :on-change=\"changeHandler\"></Switch>\n<Switch :disabled=\"disabled\"></Switch>\n<Switch>\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</Switch>\n<Switch :disabled=\"disabled\" :checked=\"true\">\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</Switch>\n<Switch :disabled=\"disabled\">\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</Switch>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>checked</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否选中</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否禁用</td>\n      </tr>\n      <tr>\n        <td>onChange</td>\n        <td><code>Function(checked)</code></td>\n        <td></td>\n        <td>状态变化后的回调函数，返回参数为当前checked（boolean）</td>\n      </tr>\n      <tr>\n        <td>slot::checkedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>选中时的内容</td>\n      </tr>\n      <tr>\n        <td>slot::unCheckedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>没选中时的内容</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(191)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/dropdownDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(195)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/dropdownDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(192);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="dropdown">
	//     <h3 class="page-header"><a href="#dropdown" class="anchor">Dropdown 下拉框</a></h3>
	//     <div class="bs-example">
	//       <dropdown>
	//         <div  data-toggle="dropdown">
	//           点击显示菜单
	//           <span class="caret"></span>
	//         </div>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#">选项一</a></li>
	//           <li><a href="#">选项二</a></li>
	//           <li><a href="#">选项三</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown>
	//         <button type="button" class="btn btn-success" data-toggle="dropdown">
	//           点击显示菜单 <span class="caret"></span>
	//         </button>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#">选项一</a></li>
	//           <li><a href="#">选项二</a></li>
	//           <li><a href="#">选项三</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown>
	//         <button type="button" class="btn btn-primary" data-toggle="dropdown">
	//           点击显示菜单 <span class="caret"></span>
	//         </button>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#">选项一</a></li>
	//           <li><a href="#">选项二</a></li>
	//           <li><a href="#">选项三</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown trigger="hover">
	//         <a href="#" data-toggle="dropdown">
	//           鼠标移上来显示 <span class="caret"></span>
	//         </a>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#">选项一</a></li>
	//           <li><a href="#">选项二</a></li>
	//           <li><a href="#">选项三</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <dropdown>
	//   <button type="button" class="btn btn-default" data-toggle="dropdown">
	//     点击显示菜单
	//     <span class="caret"></span>
	//   </button>
	//   <ul name="dropdown-menu" class="dropdown-menu">
	//     <li><a href="#">选项一</a></li>
	//     <li><a href="#">选项二</a></li>
	//     <li><a href="#">选项三</a></li>
	//     <li role="separator" class="divider"></li>
	//     <li><a href="#">其它</a></li>
	//   </ul>
	// </dropdown>
	// </script></code></pre>
	//
	//
	// <h2>Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>名称</th>
	//           <th>类型</th>
	//           <th>默认值</th>
	//           <th>说明</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>trigger</td>
	//           <td><code>String</code></td>
	//           <td><code>click</code> one of <code>click</code> <code>hover</code></td>
	//           <td>触发类型</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(193)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(194)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(187);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    }
	  },
	  methods: {
	    toggleDropdown: function toggleDropdown(e) {
	      e.preventDefault();
	      this.$el.classList.toggle('open');
	    }
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var toggle = el.querySelector('[data-toggle="dropdown"]');
	    if (toggle) {
	      var event = this.trigger === 'click' ? 'click' : 'mouseenter';
	      toggle.addEventListener(event, this.toggleDropdown);
	    }
	    if (this.trigger === 'hover') {
	      var me = this;
	      me.$el.addEventListener('mouseleave', function () {
	        setTimeout(function () {
	          me.$el.classList.remove('open');
	        }, 300);
	      });
	    }
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) el.classList.remove('open');
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="dropdown">
	//     <slot></slot>
	//     <slot name="dropdown-menu"></slot>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"dropdown\">\n  <slot></slot>\n  <slot name=\"dropdown-menu\"></slot>\n</div>\n";

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"dropdown\">\n    <h3 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown 下拉框</a></h3>\n    <div class=\"bs-example\">\n      <dropdown>\n        <div  data-toggle=\"dropdown\">\n          点击显示菜单\n          <span class=\"caret\"></span>\n        </div>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"dropdown\">\n          点击显示菜单 <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\n          点击显示菜单 <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown trigger=\"hover\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n          鼠标移上来显示 <span class=\"caret\"></span>\n        </a>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<dropdown>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n    点击显示菜单\n    <span class=\"caret\"></span>\n  </button>\n  <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n    <li><a href=\"#\">选项一</a></li>\n    <li><a href=\"#\">选项二</a></li>\n    <li><a href=\"#\">选项三</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">其它</a></li>\n  </ul>\n</dropdown>\n</script></code></pre>\n\n\n<h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>trigger</td>\n          <td><code>String</code></td>\n          <td><code>click</code> one of <code>click</code> <code>hover</code></td>\n          <td>触发类型</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(197)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/selectDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/selectDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(198);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(203);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="select">
	//     <h3 class="page-header"><a href="#select" class="anchor">Select 下拉框</a></h3>
	//     <p>
	//       This a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.
	//     </p>
	//     <div class="bs-example">
	//       <p>
	//         <pre>
	// Select data : {{single}}
	//         </pre>
	//       </p>
	//       <v-select :value.sync="single">
	//         <v-option value="Apple">Apple</v-option>
	//         <v-option value="Banana">Banana</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">Orange</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//       <hr>
	//       <h4>Multiple select</h4>
	//       <p>
	//         <pre>
	// Select data : {{multiple.join(', ')}}
	//         </pre>
	//       </p>
	//       <v-select multiple :value.sync="multiple">
	//         <v-option value="Apple">Apple</v-option>
	//         <v-option value="Banana">Banana</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">Orange</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//       <hr>
	//       <h4>Multiple select limit</h4>
	//       <p>
	//         <pre>
	// Select data : {{multipleLimit.join(', ')}}
	//         </pre>
	//       </p>
	//       <v-select multiple :limit="2" :value.sync="multipleLimit">
	//         <v-option value="Apple">Apple</v-option>
	//         <v-option value="Banana">Banana</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">Orange</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//       <hr>
	//       <h4>Custom template</h4>
	//       <p>
	//         <pre>
	// Select data : {{custom.join(', ')}}
	//         </pre>
	//       </p>
	//       <v-select multiple :value.sync="custom">
	//         <v-option value="Star"><span slot="span" class="glyphicon glyphicon-star"></span> Star</v-option>
	//         <v-option value="Heart"><span slot="span" class="glyphicon glyphicon-heart"></span> Heart</v-option>
	//         <v-option value="Film"><span slot="span" class="glyphicon glyphicon-film"></span> Film</v-option>
	//         <v-option value="Inbox"><span slot="span" class="glyphicon glyphicon-inbox"></span> Inbox</v-option>
	//       </v-select>
	//       <hr />
	//       <h4>Array/Collection driven w/ search</h4>
	//       <p>
	//         Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.
	//         <pre>
	// Select data : {{arr}}
	//         </pre>
	//       </p>
	//       <v-select :value.sync="arr" :options="fruitOptions" :search="true" :close-on-select="true">
	//       </v-select>
	//
	//       <hr />
	//       <h4>Automatically close array driven selects</h4>
	//       <p>Using the property :close-on-select="true" array driven selects will auto-close after selecting an entry.</p>
	//       <v-select :value.sync="arr2" :options="fruitOptions" :close-on-select="true">
	//       </v-select>
	//
	//       <h4>Disabled selects</h4>
	//       <v-select :value.sync="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
	//       </v-select>
	//
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <v-select>
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana">Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr>
	// <v-select multiple>
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana">Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr>
	//  <v-select multiple :limit="2">
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana">Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr>
	// <v-select multiple>
	//   <v-option value="Star"><span slot="span" class="glyphicon glyphicon-star"></span> Star</v-option>
	//   <v-option value="Heart"><span slot="span" class="glyphicon glyphicon-heart"></span> Heart</v-option>
	//   <v-option value="Film"><span slot="span" class="glyphicon glyphicon-film"></span> Film</v-option>
	//   <v-option value="Inbox"><span slot="span" class="glyphicon glyphicon-inbox"></span> Inbox</v-option>
	// </v-select>
	// <v-select :value.sync="arr" :options="fruitOptions" :search="true">
	// </v-select>
	// fruitOptions = [
	//   {value:'apple', label:'Apple'},
	//   {value:'banana', label:'Banana'},
	//   {value:'cherry', label:'Cherry'},
	//   {value:'orange', label:'Orange'},
	//   {value:'grape', label:'Grape'},
	// ]
	// <v-select :value.sync="arr2" :options="fruitOptions" :close-on-select="true">
	// </v-select>
	//     </script></code></pre>
	//     <h2>Select Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>value</td>
	//           <td><code>Array</code></td>
	//           <td><code>[]</code></td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>placeholder</td>
	//           <td><code>String</code></td>
	//           <td>Nothing Selected</td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>multiple</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>limit</td>
	//           <td><code>Number</code></td>
	//           <td><code>1024</code></td>
	//           <td>Limit the number of elements you are allowed to select.</td>
	//         </tr>
	//         <tr>
	//           <td>disabled</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td></td>
	//         </tr>
	//       </tbody>
	//     </table>
	//
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      fruitOptions: [{ value: 'Apple', label: 'Apple' }, { value: 'Banana', label: 'Banana' }, { value: 'Cherry', label: 'Cherry' }, { value: 'Orange', label: 'Orange' }, { value: 'Grape', label: 'Grape' }],
	      arr: [],
	      arr2: [],
	      single: [],
	      multiple: [],
	      multipleLimit: [],
	      custom: [],
	      disabled: []
	    };
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(199)
	__vue_script__ = __webpack_require__(201)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(202)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(200);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-79457f00&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-79457f00&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Select.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    value: {
	      twoWay: true
	    },
	    placeholder: {
	      type: String,
	      default: 'Nothing Selected'
	    },
	    multiple: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    closeOnSelect: { // only works when multiple==false
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  ready: function ready() {
	    if (this.value.constructor !== Array) {
	      if (this.value.length === 0) {
	        this.value = [];
	      } else {
	        this.value = [this.value];
	      }
	    } else {
	      if (!this.multiple && this.value.length > 1) {
	        this.value = this.value.slice(0, 1);
	      } else if (this.multiple && this.value.length > this.limit) {
	        this.value = this.value.slice(0, this.limit);
	      }
	    }
	  },
	  data: function data() {
	    return {
	      searchText: null,
	      show: false,
	      showNotify: false
	    };
	  },
	
	  computed: {
	    selectedItems: function selectedItems() {
	      var foundItems = [];
	      if (this.value.length) {
	        for (var item in this.value) {
	          if (typeof this.value[item] === "string") {
	            foundItems.push(this.value[item]);
	          }
	        }
	        return foundItems.join(', ');
	      }
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.value.length === 0;
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      if (val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        setTimeout(function () {
	          return _this.showNotify = false;
	        }, 1000);
	      }
	    }
	  },
	  methods: {
	    select: function select(v) {
	      if (this.value.indexOf(v) === -1) {
	        if (this.multiple) {
	          this.value.push(v);
	        } else {
	          this.value = [v];
	        }
	      } else {
	        if (this.multiple) {
	          this.value.$remove(v);
	        }
	      }
	      if (this.closeOnSelect) {
	        this.toggleDropdown();
	      }
	    },
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//
	// </style>
	/* generated by vue-loader */
	// <template>
	//   <div class="btn-group" v-bind:class="{open: show}">
	//     <button v-el:btn type="button" class="btn btn-default dropdown-toggle"
	//       @click="toggleDropdown"
	//       @blur="show = (search ? show : false)"
	//       v-bind="{disabled: disabled}"
	//     >
	//       <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//       <span class="btn-content">{{ selectedItems }}</span>
	//       <span class="caret"></span>
	//     </button>
	//     <ul class="dropdown-menu">
	//       <template v-if="options.length">
	//         <li v-if="search" class="bs-searchbox">
	//           <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
	//         </li>
	//         <li v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
	//           <a @mousedown.prevent="select(option.value)" style="cursor:pointer">
	//             {{ option.label }}
	//             <span class="glyphicon glyphicon-ok check-mark" v-show="value.indexOf(option.value) !== -1"></span>
	//           </a>
	//         </li>
	//       </template>
	//       <slot v-else></slot>
	//       <div class="notify" v-show="showNotify" transition="fadein">Limit reached ({{limit}} items max).</div>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"btn-group\" v-bind:class=\"{open: show}\" _v-79457f00=\"\">\n  <button v-el:btn=\"\" type=\"button\" class=\"btn btn-default dropdown-toggle\" @click=\"toggleDropdown\" @blur=\"show = (search ? show : false)\" v-bind=\"{disabled: disabled}\" _v-79457f00=\"\">\n    <span class=\"btn-placeholder\" v-show=\"showPlaceholder\" _v-79457f00=\"\">{{placeholder}}</span>\n    <span class=\"btn-content\" _v-79457f00=\"\">{{ selectedItems }}</span>\n    <span class=\"caret\" _v-79457f00=\"\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" _v-79457f00=\"\">\n    <template v-if=\"options.length\">\n      <li v-if=\"search\" class=\"bs-searchbox\" _v-79457f00=\"\">\n        <input type=\"text\" placeholder=\"Search\" v-model=\"searchText\" class=\"form-control\" autocomplete=\"off\" _v-79457f00=\"\">\n      </li>\n      <li v-for=\"option in options | filterBy searchText \" v-bind:id=\"option.value\" style=\"position:relative\" _v-79457f00=\"\">\n        <a @mousedown.prevent=\"select(option.value)\" style=\"cursor:pointer\" _v-79457f00=\"\">\n          {{ option.label }}\n          <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"value.indexOf(option.value) !== -1\" _v-79457f00=\"\"></span>\n        </a>\n      </li>\n    </template>\n    <slot v-else=\"\" _v-79457f00=\"\"></slot>\n    <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\" _v-79457f00=\"\">Limit reached ({{limit}} items max).</div>\n  </ul>\n</div>\n";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(204)
	__vue_script__ = __webpack_require__(206)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Option.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2dd86df9&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2dd86df9&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\na span.check-mark[_v-2dd86df9] {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n", "", {"version":3,"sources":["/./src/components/Option.vue?2558c81b"],"names":[],"mappings":";AA0CA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;CACA","file":"Option.vue","sourcesContent":["<template>\n  <li style=\"position:relative\">\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\">\n      <span v-el:v><slot></slot></span>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\"></span>\n    </a>\n  </li>\n</template>\n\n<script>\n  export default {\n    props: {\n      value: {\n        type: String\n      }\n    },\n    data() {\n      return {\n        chosen: false\n      }\n    },\n    computed: {\n      chosen() {\n        return this.$parent.value.indexOf(this.value) !== -1\n      }\n    },\n    methods: {\n      handleClick() {\n        const parent = this.$parent\n        if (parent.multiple) {\n          const index = parent.value.indexOf(this.value)\n          index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1)\n        } else {\n          parent.value = [this.value]\n          parent.show = false\n        }\n      }\n    }\n  }\n</script>\n\n<style scoped>\n  a span.check-mark {\n    position: absolute;\n    display: inline-block;\n    right: 15px;\n    margin-top: 5px;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li style="position:relative">
	//     <a @mousedown.prevent="handleClick" style="cursor:pointer">
	//       <span v-el:v><slot></slot></span>
	//       <span class="glyphicon glyphicon-ok check-mark" v-show="chosen"></span>
	//     </a>
	//   </li>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      chosen: false
	    };
	  },
	
	  computed: {
	    chosen: function chosen() {
	      return this.$parent.value.indexOf(this.value) !== -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      if (parent.multiple) {
	        var index = parent.value.indexOf(this.value);
	        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      } else {
	        parent.value = [this.value];
	        parent.show = false;
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//   a span.check-mark {
	//     position: absolute;
	//     display: inline-block;
	//     right: 15px;
	//     margin-top: 5px;
	//   }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "\n<li style=\"position:relative\" _v-2dd86df9=\"\">\n  <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\" _v-2dd86df9=\"\">\n    <span v-el:v=\"\" _v-2dd86df9=\"\"><slot _v-2dd86df9=\"\"></slot></span>\n    <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\" _v-2dd86df9=\"\"></span>\n  </a>\n</li>\n";

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"select\">\n    <h3 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select 下拉框</a></h3>\n    <p>\n      This a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.\n    </p>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelect data : {{single}}\n        </pre>\n      </p>\n      <v-select :value.sync=\"single\">\n        <v-option value=\"Apple\">Apple</v-option>\n        <v-option value=\"Banana\">Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select</h4>\n      <p>\n        <pre>\nSelect data : {{multiple.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :value.sync=\"multiple\">\n        <v-option value=\"Apple\">Apple</v-option>\n        <v-option value=\"Banana\">Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select limit</h4>\n      <p>\n        <pre>\nSelect data : {{multipleLimit.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :limit=\"2\" :value.sync=\"multipleLimit\">\n        <v-option value=\"Apple\">Apple</v-option>\n        <v-option value=\"Banana\">Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr>\n      <h4>Custom template</h4>\n      <p>\n        <pre>\nSelect data : {{custom.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :value.sync=\"custom\">\n        <v-option value=\"Star\"><span slot=\"span\" class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n        <v-option value=\"Heart\"><span slot=\"span\" class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n        <v-option value=\"Film\"><span slot=\"span\" class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n        <v-option value=\"Inbox\"><span slot=\"span\" class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n      </v-select>\n      <hr />\n      <h4>Array/Collection driven w/ search</h4>\n      <p>\n        Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.\n        <pre>\nSelect data : {{arr}}\n        </pre>\n      </p>\n      <v-select :value.sync=\"arr\" :options=\"fruitOptions\" :search=\"true\" :close-on-select=\"true\">\n      </v-select>\n\n      <hr />\n      <h4>Automatically close array driven selects</h4>\n      <p>Using the property :close-on-select=\"true\" array driven selects will auto-close after selecting an entry.</p>\n      <v-select :value.sync=\"arr2\" :options=\"fruitOptions\" :close-on-select=\"true\">\n      </v-select>\n\n      <h4>Disabled selects</h4>\n      <v-select :value.sync=\"disabled\" :options=\"fruitOptions\" :close-on-select=\"true\" :disabled=\"true\">\n      </v-select>\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-select>\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\">Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\">Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr>\n <v-select multiple :limit=\"2\">\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\">Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Star\"><span slot=\"span\" class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n  <v-option value=\"Heart\"><span slot=\"span\" class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n  <v-option value=\"Film\"><span slot=\"span\" class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n  <v-option value=\"Inbox\"><span slot=\"span\" class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n</v-select>\n<v-select :value.sync=\"arr\" :options=\"fruitOptions\" :search=\"true\">\n</v-select>\nfruitOptions = [\n  {value:'apple', label:'Apple'},\n  {value:'banana', label:'Banana'},\n  {value:'cherry', label:'Cherry'},\n  {value:'orange', label:'Orange'},\n  {value:'grape', label:'Grape'},\n]\n<v-select :value.sync=\"arr2\" :options=\"fruitOptions\" :close-on-select=\"true\">\n</v-select>\n    </script></code></pre>\n    <h2>Select Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array</code></td>\n          <td><code>[]</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>Nothing Selected</td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(210)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/datepickerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(218)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/datepickerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Datepicker = __webpack_require__(211);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Select = __webpack_require__(198);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(203);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    datepicker: _Datepicker2.default,
	    'v-select': _Select2.default,
	    'v-option': _Option2.default
	  },
	  data: function data() {
	    return {
	      disabled: [],
	      value: 'Oct/06/2015',
	      format: ['MMM/dd/yyyy'],
	      reset: true
	    };
	  },
	
	  watch: {
	    disabled: function disabled() {
	      this.$refs.dp.getDateRange();
	    },
	    format: function format(newV) {
	      this.value = this.$refs.dp.stringify(new Date(this.value));
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="datepicker">
	//     <h1 class="page-header"><a href="#datepicker" class="anchor">Datepicker 日历控件</a></h1>
	//     <div class="bs-example">
	//       <p>
	//         <pre>
	// Selected date is: {{new Date(value).toString().slice(0, -23)}}
	//         </pre>
	//       </p>
	//       <datepicker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"
	//       :format="format.toString()" :show-reset-button="reset"></datepicker>
	//       <h4>禁用一周的某日</h4>
	//
	//       <v-select multiple :value.sync="disabled">
	//   <v-option value="0">0</v-option>
	//   <v-option value="1">1</v-option>
	//   <v-option value="2">2</v-option>
	//   <v-option value="3">3</v-option>
	//   <v-option value="4">4</v-option>
	//   <v-option value="5">5</v-option>
	//   <v-option value="6">6</v-option>
	//       </v-select>
	//
	//       <h4>格式化</h4>
	//       <v-select :value.sync="format" >
	//         <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
	//         <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
	//         <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
	//         <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
	//         <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
	//       </v-select>
	//
	//       <h4>重置按钮</h4>
	//       <label><input type="checkbox" v-model="reset" @click="x">打开或关闭重置功能</label>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <datepicker
	//   :value.sync="value"
	//   :disabled-days-of-Week="disabled"
	//   :format="format"
	//   :show-reset-button="reset">
	// </datepicker>
	// <select multiple :value.sync="disabled" size=5>
	//   <v-option value="0">0</v-option>
	//   <v-option value="1">1</v-option>
	//   <v-option value="2">2</v-option>
	//   <v-option value="3">3</v-option>
	//   <v-option value="4">4</v-option>
	//   <v-option value="5">5</v-option>
	//   <v-option value="6">6</v-option>
	// </select>
	// <select  :value.sync="format">
	//   <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
	//   <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
	//   <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
	//   <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
	//   <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
	// </select>
	//     </script></code></pre>
	//     <h2>Option</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>value</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>输入框里的默认值</td>
	//         </tr>
	//         <tr>
	//           <td>Width</td>
	//           <td><code>String</code></td>
	//           <td>200px</td>
	//           <td>输入框的宽度</td>
	//         </tr>
	//         <tr>
	//           <td>format</td>
	//           <td><code>String</code></td>
	//           <td><code>MMMM/dd/yyyy</code></td>
	//           <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>
	//         </tr>
	//         <tr>
	//           <td>disabledDaysOfWeek</td>
	//           <td><code>Array</code></td>
	//           <td></td>
	//           <td>禁用一周的某一天. 按 0 到 6 .
	//              禁用多天可用<code>逗号</code>分隔</td>
	//         </tr>
	//         <tr>
	//           <td>showResetButton</td>
	//           <td><code>Boolean</code></td>
	//           <td>false</td>
	//           <td>是否显示清除日期按钮</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(212)
	__webpack_require__(214)
	__vue_script__ = __webpack_require__(216)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Datepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(217)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(213);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\ninput.datepicker-input.with-reset-button {\n  padding-right: 25px;\n}\n\ndiv.datepicker > button.close {\n  position: absolute;\n  top: calc(50% - 13px);\n  right: 10px;\n}\n\ndiv.datepicker > button.close {\n  outline: none;\n  z-index: 2;\n}\n\ndiv.datepicker > button.close:focus {\n  opacity: .2;\n}\n", "", {"version":3,"sources":["/./src/components/Datepicker.vue?cac9b692"],"names":[],"mappings":";AACA;EACA,oBAAA;CACA;;AAEA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;CACA;;AAEA;EACA,cAAA;EACA,WAAA;CACA;;AAEA;EACA,YAAA;CACA","file":"Datepicker.vue","sourcesContent":["<style>\n  input.datepicker-input.with-reset-button {\n    padding-right: 25px;\n  }\n\n  div.datepicker > button.close {\n    position: absolute;\n    top: calc(50% - 13px);\n    right: 10px;\n  }\n\n  div.datepicker > button.close {\n    outline: none;\n    z-index: 2;\n  }\n\n  div.datepicker > button.close:focus {\n    opacity: .2;\n  }\n</style>\n\n<template>\n  <div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\n        v-bind:style=\"{width:width}\"\n        @click=\"inputClick\"\n        v-model=\"value\"/>\n    <button v-if=\"showResetButton\" type=\"button\" class=\"close\" @click=\"value = ''\">\n      <span>&times;</span>\n    </button>\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in weekRange\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <template v-for=\"m in monthNames\">\n              <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n                  (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                  this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                  @click=\"monthSelect($index)\"\n                >{{m.substr(0,3)}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <template v-for=\"decade in decadeRange\">\n              <span v-bind:class=\"{'datepicker-dateRange-item-active':\n                  this.parse(this.value).getFullYear() === decade.text}\"\n                  @click.stop=\"yearSelect(decade.text)\"\n                >{{decade.text}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\nconst localeConfig = {\n  zh_CN : {\n    weekRange: ['日', '一', '二', '三', '四', '五', '六'],\n    monthNames : [\n      '1', '2', '3',\n      '4', '5', '6',\n      '7', '8', '8',\n      '10', '11', '12'\n    ]\n  },\n  en_US : {\n    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n    monthNames : [\n      'January', 'February', 'March',\n      'April', 'May', 'June',\n      'July', 'August', 'September',\n      'October', 'November', 'December'\n    ]\n  }\n}\nexport default {\n  props: {\n    value: {\n      type: String,\n      twoWay: true\n    },\n    format: {\n      default: 'MMMM/dd/yyyy'\n    },\n    locale:{\n      default : 'zh_CN'\n    },\n    disabledDaysOfWeek: {\n      type: Array,\n      default() {\n        return []\n      }\n    },\n    width: {\n      type: String,\n      default: '200px'\n    },\n    showResetButton: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data() {\n    return {\n      weekRange: localeConfig[this.locale].weekRange,\n      dateRange: [],\n      decadeRange: [],\n      currDate: new Date,\n      displayDayView: false,\n      displayMonthView: false,\n      displayYearView: false,\n      monthNames: localeConfig[this.locale].monthNames\n    }\n  },\n  watch: {\n    currDate() {\n      this.getDateRange()\n    }\n  },\n  methods: {\n    close() {\n      this.displayDayView = this.displayMonthView = this.displayMonthView = false\n    },\n    inputClick() {\n      if (this.displayMonthView || this.displayYearView) {\n        this.displayDayView = false\n      } else {\n        this.displayDayView = !this.displayDayView\n      }\n    },\n    preNextDecadeClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 10, months, date)\n      } else {\n        this.currDate = new Date(year + 10, months, date)\n      }\n    },\n    preNextMonthClick(flag) {\n      const year = this.currDate.getFullYear()\n      const month = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n\n      if (flag === 0) {\n        const preMonth = this.getYearMonth(year, month - 1)\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\n      } else {\n        const nextMonth = this.getYearMonth(year, month + 1)\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\n      }\n    },\n    preNextYearClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 1, months, date)\n      } else {\n        this.currDate = new Date(year + 1, months, date)\n      }\n    },\n    yearSelect(year) {\n      this.displayYearView = false\n      this.displayMonthView = true\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\n    },\n    daySelect(date, el) {\n      if (el.$el.classList[0] === 'datepicker-item-disable') {\n        return false\n      } else {\n        this.currDate = date\n        this.value = this.stringify(this.currDate)\n        this.displayDayView = false\n      }\n    },\n    switchMonthView() {\n      this.displayDayView = false\n      this.displayMonthView = true\n    },\n    switchDecadeView() {\n      this.displayMonthView = false\n      this.displayYearView = true\n    },\n    monthSelect(index) {\n      this.displayMonthView = false\n      this.displayDayView = true\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\n    },\n    getYearMonth(year, month) {\n      if (month > 11) {\n        year++\n          month = 0\n      } else if (month < 0) {\n        year--\n          month = 11\n      }\n      return {year: year, month: month}\n    },\n    stringifyDecadeHeader(date) {\n      const yearStr = date.getFullYear().toString()\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\n      return firstYearOfDecade + '-' + lastYearOfDecade\n    },\n    stringifyDayHeader(date) {\n      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear()\n    },\n    parseMonth(date) {\n      return this.monthNames[date.getMonth()]\n    },\n    stringifyYearHeader(date) {\n      return date.getFullYear()\n    },\n    stringify(date, format = this.format) {\n      const year = date.getFullYear()\n      const month = date.getMonth() + 1\n      const day = date.getDate()\n      const monthName = this.parseMonth(date)\n\n      return format\n      .replace(/yyyy/g, year)\n      .replace(/MMMM/g, monthName)\n      .replace(/MMM/g, monthName.substring(0, 3))\n      .replace(/MM/g, ('0' + month).slice(-2))\n      .replace(/dd/g, ('0' + day).slice(-2))\n      .replace(/yy/g, year)\n      .replace(/M(?!a)/g, month)\n      .replace(/d/g, day)\n    },\n    parse(str) {\n      const date = new Date(str)\n      return isNaN(date.getFullYear()) ? null : date\n    },\n    getDayCount(year, month) {\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n\n      if (month === 1) {\n        if ( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ) {\n          return 29\n        }\n        return 28\n      }\n\n      return dict[month]\n    },\n    getDateRange() {\n      this.dateRange = []\n      this.decadeRange = []\n      const time = {\n        year: this.currDate.getFullYear(),\n        month: this.currDate.getMonth(),\n        day: this.currDate.getDate()\n      }\n      const yearStr = time.year.toString()\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\n      for (let i = 0; i < 12; i++) {\n        this.decadeRange.push({\n          text: firstYearOfDecade + i\n        })\n      }\n\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\n      if (firstDayWeek === 0) {\n        firstDayWeek = 7\n      }\n      const dayCount = this.getDayCount(time.year, time.month)\n      if (firstDayWeek > 1) {\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\n        for (let i = 1; i < firstDayWeek; i++) {\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\n          this.dateRange.push({\n            text: dayText,\n            date: new Date(preMonth.year, preMonth.month, dayText),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n\n      for (let i = 1; i <= dayCount; i++) {\n        const date = new Date(time.year, time.month, i)\n        const week = date.getDay()\n        let sclass = ''\n        this.disabledDaysOfWeek.forEach((el)=> {\n          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'\n        })\n\n      if (i === time.day) {\n        if (this.value) {\n          const valueDate = this.parse(this.value)\n          if (valueDate) {\n            if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {\n              sclass = 'datepicker-dateRange-item-active'\n            }\n          }\n        }\n      }\n      this.dateRange.push({\n        text: i,\n        date: date,\n        sclass: sclass\n      })\n      }\n\n      if (this.dateRange.length < 42) {\n        const nextMonthNeed = 42 - this.dateRange.length\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\n\n        for (let i = 1; i <= nextMonthNeed; i++) {\n          this.dateRange.push({\n            text: i,\n            date: new Date(nextMonth.year, nextMonth.month, i),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n    }\n  },\n  ready() {\n    this.$dispatch('child-created', this)\n    this.currDate = this.parse(this.value) || this.parse(new Date())\n    this._closeEvent = EventListener.listen(window, 'click', (e)=> {\n      if (!this.$el.contains(e.target)) this.close()\n    })\n  },\n  beforeDestroy() {\n    if (this._closeEvent) this._closeEvent.remove()\n  }\n}\n</script>\n\n<style>\n.datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(215);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./Datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./Datepicker.vue");
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

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}\n", "", {"version":3,"sources":["/./src/components/Datepicker.vue?cac9b692"],"names":[],"mappings":";AAsXA;IACA,mBAAA;IACA,sBAAA;CACA;;AAEA;IACA,mBAAA;IACA,uBAAA;IACA,mBAAA;IACA,iBAAA;IACA,gBAAA;IACA,cAAA;IACA,yCAAA;CACA;AACA;IACA,aAAA;;CAEA;AACA;IACA,mBAAA;CACA;AACA;;;IAGA,sBAAA;IACA,YAAA;IACA,kBAAA;IACA,aAAA;IACA,mBAAA;CACA;AACA;IACA,WAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kCAAA;EACA,8BAAA;CACA;AACA;;;;IAIA,YAAA;CACA;;AAEA;;IAEA,wCAAA;IACA,uBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;;;;EAIA,gBAAA;CACA;AACA;;;;;IAKA,2BAAA;CACA;;AAEA;IACA,kBAAA;CACA;AACA;IACA,0BAAA;IACA,iBAAA;IACA,eAAA;IACA,mBAAA;CACA;AACA;IACA,mBAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,yBAAA;IACA,sBAAA;IACA,qBAAA;IACA,iBAAA;CACA;AACA;IACA,UAAA;CACA;AACA;IACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<style>\n  input.datepicker-input.with-reset-button {\n    padding-right: 25px;\n  }\n\n  div.datepicker > button.close {\n    position: absolute;\n    top: calc(50% - 13px);\n    right: 10px;\n  }\n\n  div.datepicker > button.close {\n    outline: none;\n    z-index: 2;\n  }\n\n  div.datepicker > button.close:focus {\n    opacity: .2;\n  }\n</style>\n\n<template>\n  <div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\n        v-bind:style=\"{width:width}\"\n        @click=\"inputClick\"\n        v-model=\"value\"/>\n    <button v-if=\"showResetButton\" type=\"button\" class=\"close\" @click=\"value = ''\">\n      <span>&times;</span>\n    </button>\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-weekRange\">\n            <span v-for=\"w in weekRange\">{{w}}</span>\n          </div>\n          <div class=\"datepicker-dateRange\">\n            <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange\">\n            <template v-for=\"m in monthNames\">\n              <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n                  (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                  this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                  @click=\"monthSelect($index)\"\n                >{{m.substr(0,3)}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n      <div class=\"datepicker-inner\">\n        <div class=\"datepicker-body\">\n          <div class=\"datepicker-ctrl\">\n            <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n            <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\n          </div>\n          <div class=\"datepicker-monthRange decadeRange\">\n            <template v-for=\"decade in decadeRange\">\n              <span v-bind:class=\"{'datepicker-dateRange-item-active':\n                  this.parse(this.value).getFullYear() === decade.text}\"\n                  @click.stop=\"yearSelect(decade.text)\"\n                >{{decade.text}}</span>\n            </template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\nconst localeConfig = {\n  zh_CN : {\n    weekRange: ['日', '一', '二', '三', '四', '五', '六'],\n    monthNames : [\n      '1', '2', '3',\n      '4', '5', '6',\n      '7', '8', '8',\n      '10', '11', '12'\n    ]\n  },\n  en_US : {\n    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n    monthNames : [\n      'January', 'February', 'March',\n      'April', 'May', 'June',\n      'July', 'August', 'September',\n      'October', 'November', 'December'\n    ]\n  }\n}\nexport default {\n  props: {\n    value: {\n      type: String,\n      twoWay: true\n    },\n    format: {\n      default: 'MMMM/dd/yyyy'\n    },\n    locale:{\n      default : 'zh_CN'\n    },\n    disabledDaysOfWeek: {\n      type: Array,\n      default() {\n        return []\n      }\n    },\n    width: {\n      type: String,\n      default: '200px'\n    },\n    showResetButton: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data() {\n    return {\n      weekRange: localeConfig[this.locale].weekRange,\n      dateRange: [],\n      decadeRange: [],\n      currDate: new Date,\n      displayDayView: false,\n      displayMonthView: false,\n      displayYearView: false,\n      monthNames: localeConfig[this.locale].monthNames\n    }\n  },\n  watch: {\n    currDate() {\n      this.getDateRange()\n    }\n  },\n  methods: {\n    close() {\n      this.displayDayView = this.displayMonthView = this.displayMonthView = false\n    },\n    inputClick() {\n      if (this.displayMonthView || this.displayYearView) {\n        this.displayDayView = false\n      } else {\n        this.displayDayView = !this.displayDayView\n      }\n    },\n    preNextDecadeClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 10, months, date)\n      } else {\n        this.currDate = new Date(year + 10, months, date)\n      }\n    },\n    preNextMonthClick(flag) {\n      const year = this.currDate.getFullYear()\n      const month = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n\n      if (flag === 0) {\n        const preMonth = this.getYearMonth(year, month - 1)\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\n      } else {\n        const nextMonth = this.getYearMonth(year, month + 1)\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\n      }\n    },\n    preNextYearClick(flag) {\n      const year = this.currDate.getFullYear()\n      const months = this.currDate.getMonth()\n      const date = this.currDate.getDate()\n\n      if (flag === 0) {\n        this.currDate = new Date(year - 1, months, date)\n      } else {\n        this.currDate = new Date(year + 1, months, date)\n      }\n    },\n    yearSelect(year) {\n      this.displayYearView = false\n      this.displayMonthView = true\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\n    },\n    daySelect(date, el) {\n      if (el.$el.classList[0] === 'datepicker-item-disable') {\n        return false\n      } else {\n        this.currDate = date\n        this.value = this.stringify(this.currDate)\n        this.displayDayView = false\n      }\n    },\n    switchMonthView() {\n      this.displayDayView = false\n      this.displayMonthView = true\n    },\n    switchDecadeView() {\n      this.displayMonthView = false\n      this.displayYearView = true\n    },\n    monthSelect(index) {\n      this.displayMonthView = false\n      this.displayDayView = true\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\n    },\n    getYearMonth(year, month) {\n      if (month > 11) {\n        year++\n          month = 0\n      } else if (month < 0) {\n        year--\n          month = 11\n      }\n      return {year: year, month: month}\n    },\n    stringifyDecadeHeader(date) {\n      const yearStr = date.getFullYear().toString()\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\n      return firstYearOfDecade + '-' + lastYearOfDecade\n    },\n    stringifyDayHeader(date) {\n      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear()\n    },\n    parseMonth(date) {\n      return this.monthNames[date.getMonth()]\n    },\n    stringifyYearHeader(date) {\n      return date.getFullYear()\n    },\n    stringify(date, format = this.format) {\n      const year = date.getFullYear()\n      const month = date.getMonth() + 1\n      const day = date.getDate()\n      const monthName = this.parseMonth(date)\n\n      return format\n      .replace(/yyyy/g, year)\n      .replace(/MMMM/g, monthName)\n      .replace(/MMM/g, monthName.substring(0, 3))\n      .replace(/MM/g, ('0' + month).slice(-2))\n      .replace(/dd/g, ('0' + day).slice(-2))\n      .replace(/yy/g, year)\n      .replace(/M(?!a)/g, month)\n      .replace(/d/g, day)\n    },\n    parse(str) {\n      const date = new Date(str)\n      return isNaN(date.getFullYear()) ? null : date\n    },\n    getDayCount(year, month) {\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n\n      if (month === 1) {\n        if ( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ) {\n          return 29\n        }\n        return 28\n      }\n\n      return dict[month]\n    },\n    getDateRange() {\n      this.dateRange = []\n      this.decadeRange = []\n      const time = {\n        year: this.currDate.getFullYear(),\n        month: this.currDate.getMonth(),\n        day: this.currDate.getDate()\n      }\n      const yearStr = time.year.toString()\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\n      for (let i = 0; i < 12; i++) {\n        this.decadeRange.push({\n          text: firstYearOfDecade + i\n        })\n      }\n\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\n      if (firstDayWeek === 0) {\n        firstDayWeek = 7\n      }\n      const dayCount = this.getDayCount(time.year, time.month)\n      if (firstDayWeek > 1) {\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\n        for (let i = 1; i < firstDayWeek; i++) {\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\n          this.dateRange.push({\n            text: dayText,\n            date: new Date(preMonth.year, preMonth.month, dayText),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n\n      for (let i = 1; i <= dayCount; i++) {\n        const date = new Date(time.year, time.month, i)\n        const week = date.getDay()\n        let sclass = ''\n        this.disabledDaysOfWeek.forEach((el)=> {\n          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'\n        })\n\n      if (i === time.day) {\n        if (this.value) {\n          const valueDate = this.parse(this.value)\n          if (valueDate) {\n            if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {\n              sclass = 'datepicker-dateRange-item-active'\n            }\n          }\n        }\n      }\n      this.dateRange.push({\n        text: i,\n        date: date,\n        sclass: sclass\n      })\n      }\n\n      if (this.dateRange.length < 42) {\n        const nextMonthNeed = 42 - this.dateRange.length\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\n\n        for (let i = 1; i <= nextMonthNeed; i++) {\n          this.dateRange.push({\n            text: i,\n            date: new Date(nextMonth.year, nextMonth.month, i),\n            sclass: 'datepicker-item-gray'\n          })\n        }\n      }\n    }\n  },\n  ready() {\n    this.$dispatch('child-created', this)\n    this.currDate = this.parse(this.value) || this.parse(new Date())\n    this._closeEvent = EventListener.listen(window, 'click', (e)=> {\n      if (!this.$el.contains(e.target)) this.close()\n    })\n  },\n  beforeDestroy() {\n    if (this._closeEvent) this._closeEvent.remove()\n  }\n}\n</script>\n\n<style>\n.datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-monthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-monthRange {\n  margin-top: 10px\n}\n.datepicker-monthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(187);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var localeConfig = {
	  zh_CN: {
	    weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '8', '10', '11', '12']
	  },
	  en_US: {
	    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  }
	}; // <style>
	//   input.datepicker-input.with-reset-button {
	//     padding-right: 25px;
	//   }
	//
	//   div.datepicker > button.close {
	//     position: absolute;
	//     top: calc(50% - 13px);
	//     right: 10px;
	//   }
	//
	//   div.datepicker > button.close {
	//     outline: none;
	//     z-index: 2;
	//   }
	//
	//   div.datepicker > button.close:focus {
	//     opacity: .2;
	//   }
	// </style>
	//
	// <template>
	//   <div class="datepicker">
	//     <input class="form-control datepicker-input" :class="{'with-reset-button': showResetButton}" type="text"
	//         v-bind:style="{width:width}"
	//         @click="inputClick"
	//         v-model="value"/>
	//     <button v-if="showResetButton" type="button" class="close" @click="value = ''">
	//       <span>&times;</span>
	//     </button>
	//     <div class="datepicker-popup" v-show="displayDayView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextMonthClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
	//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-weekRange">
	//             <span v-for="w in weekRange">{{w}}</span>
	//           </div>
	//           <div class="datepicker-dateRange">
	//             <span v-for="d in dateRange" v-bind:class="d.sclass" @click="daySelect(d.date,this)">{{d.text}}</span>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayMonthView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextYearClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextYearClick(1)">&gt;</span>
	//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange">
	//             <template v-for="m in monthNames">
	//               <span   v-bind:class="{'datepicker-dateRange-item-active':
	//                   (this.monthNames[this.parse(this.value).getMonth()]  === m) &&
	//                   this.currDate.getFullYear() === this.parse(this.value).getFullYear()}"
	//                   @click="monthSelect($index)"
	//                 >{{m.substr(0,3)}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="datepicker-popup" v-show="displayYearView">
	//       <div class="datepicker-inner">
	//         <div class="datepicker-body">
	//           <div class="datepicker-ctrl">
	//             <span class="month-btn datepicker-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
	//             <span class="month-btn datepicker-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	//           </div>
	//           <div class="datepicker-monthRange decadeRange">
	//             <template v-for="decade in decadeRange">
	//               <span v-bind:class="{'datepicker-dateRange-item-active':
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
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'MMMM/dd/yyyy'
	    },
	    locale: {
	      default: 'zh_CN'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    width: {
	      type: String,
	      default: '200px'
	    },
	    showResetButton: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: localeConfig[this.locale].weekRange,
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
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
	    inputClick: function inputClick() {
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
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
	    daySelect: function daySelect(date, el) {
	      if (el.$el.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
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
	      return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
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
	      var _this = this;
	
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
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	
	        if (_i2 === time.day) {
	          if (_this.value) {
	            var valueDate = _this.parse(_this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this2.$el.contains(e.target)) _this2.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>
	//
	// <style>
	// .datepicker{
	//     position: relative;
	//     display: inline-block;
	// }
	//
	// .datepicker-popup{
	//     position: absolute;
	//     border: 1px solid #ccc;
	//     border-radius: 5px;
	//     background: #fff;
	//     margin-top: 2px;
	//     z-index: 1000;
	//     box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	// }
	// .datepicker-inner{
	//     width: 218px;
	//
	// }
	// .datepicker-body{
	//     padding: 10px 10px;
	// }
	// .datepicker-ctrl p,
	// .datepicker-ctrl span,
	// .datepicker-body span{
	//     display: inline-block;
	//     width: 28px;
	//     line-height: 28px;
	//     height: 28px;
	//     border-radius: 4px;
	// }
	// .datepicker-ctrl p {
	//     width: 65%;
	// }
	// .datepicker-ctrl span {
	//   position: absolute;
	// }
	// .datepicker-body span {
	//   text-align: center;
	// }
	// .datepicker-monthRange span{
	//   width: 48px;
	//   height: 50px;
	//   line-height: 45px;
	// }
	// .datepicker-item-disable {
	//   background-color: white!important;
	//   cursor: not-allowed!important;
	// }
	// .decadeRange span:first-child,
	// .decadeRange span:last-child,
	// .datepicker-item-disable,
	// .datepicker-item-gray{
	//     color: #999;
	// }
	//
	// .datepicker-dateRange-item-active:hover,
	// .datepicker-dateRange-item-active {
	//     background: rgb(50, 118, 177)!important;
	//     color: white!important;
	// }
	// .datepicker-monthRange {
	//   margin-top: 10px
	// }
	// .datepicker-monthRange span,
	// .datepicker-ctrl span,
	// .datepicker-ctrl p,
	// .datepicker-dateRange span {
	//   cursor: pointer;
	// }
	// .datepicker-monthRange span:hover,
	// .datepicker-ctrl p:hover,
	// .datepicker-ctrl i:hover,
	// .datepicker-dateRange span:hover,
	// .datepicker-dateRange-item-hover {
	//     background-color : #eeeeee;
	// }
	//
	// .datepicker-weekRange span{
	//     font-weight: bold;
	// }
	// .datepicker-label{
	//     background-color: #f8f8f8;
	//     font-weight: 700;
	//     padding: 7px 0;
	//     text-align: center;
	// }
	// .datepicker-ctrl{
	//     position: relative;
	//     height: 30px;
	//     line-height: 30px;
	//     font-weight: bold;
	//     text-align: center;
	// }
	// .month-btn{
	//   font-weight: bold;
	//   -webkit-user-select:none;
	//     -moz-user-select:none;
	//     -ms-user-select:none;
	//     user-select:none;
	// }
	// .datepicker-preBtn{
	//     left: 2px;
	// }
	// .datepicker-nextBtn{
	//     right: 2px;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"datepicker\">\n  <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\n      v-bind:style=\"{width:width}\"\n      @click=\"inputClick\"\n      v-model=\"value\"/>\n  <button v-if=\"showResetButton\" type=\"button\" class=\"close\" @click=\"value = ''\">\n    <span>&times;</span>\n  </button>\n  <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n          <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-weekRange\">\n          <span v-for=\"w in weekRange\">{{w}}</span>\n        </div>\n        <div class=\"datepicker-dateRange\">\n          <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n          <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange\">\n          <template v-for=\"m in monthNames\">\n            <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n                (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n          <p>{{stringifyDecadeHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span v-bind:class=\"{'datepicker-dateRange-item-active':\n                this.parse(this.value).getFullYear() === decade.text}\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"datepicker\">\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">Datepicker 日历控件</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelected date is: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <datepicker v-ref:dp :value.sync=\"value\" :disabled-days-of-Week=\"disabled\"\n      :format=\"format.toString()\" :show-reset-button=\"reset\"></datepicker>\n      <h4>禁用一周的某日</h4>\n\n      <v-select multiple :value.sync=\"disabled\">\n  <v-option value=\"0\">0</v-option>\n  <v-option value=\"1\">1</v-option>\n  <v-option value=\"2\">2</v-option>\n  <v-option value=\"3\">3</v-option>\n  <v-option value=\"4\">4</v-option>\n  <v-option value=\"5\">5</v-option>\n  <v-option value=\"6\">6</v-option>\n      </v-select>\n\n      <h4>格式化</h4>\n      <v-select :value.sync=\"format\" >\n        <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n        <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n        <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n        <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n        <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n      </v-select>\n\n      <h4>重置按钮</h4>\n      <label><input type=\"checkbox\" v-model=\"reset\" @click=\"x\">打开或关闭重置功能</label>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<datepicker\n  :value.sync=\"value\"\n  :disabled-days-of-Week=\"disabled\"\n  :format=\"format\"\n  :show-reset-button=\"reset\">\n</datepicker>\n<select multiple :value.sync=\"disabled\" size=5>\n  <v-option value=\"0\">0</v-option>\n  <v-option value=\"1\">1</v-option>\n  <v-option value=\"2\">2</v-option>\n  <v-option value=\"3\">3</v-option>\n  <v-option value=\"4\">4</v-option>\n  <v-option value=\"5\">5</v-option>\n  <v-option value=\"6\">6</v-option>\n</select>\n<select  :value.sync=\"format\">\n  <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n  <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n  <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n  <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n  <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n</select>\n    </script></code></pre>\n    <h2>Option</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入框里的默认值</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>输入框的宽度</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>禁用一周的某一天. 按 0 到 6 .\n             禁用多天可用<code>逗号</code>分隔</td>\n        </tr>\n        <tr>\n          <td>showResetButton</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>是否显示清除日期按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/typeaheadDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(233)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/typeaheadDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Typeahead = __webpack_require__(221);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Tooltip = __webpack_require__(227);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="typeahead">
	//     <h3 class="page-header"><a href="#typeahead" class="anchor">Typeahead 自动完成</a></h3>
	//     <div class="bs-example">
	//       <h4>
	//         Static arrays
	//       </h4>
	//       <typeahead
	//         :data="USstate"
	//         placeholder="USA states"
	//       ></typeahead>
	//       <hr>
	//       <h4>
	//       Asynchronous results
	//       <tooltip trigger="click" content="The suggestions via a Google Map API, are you behind a FireWall?" placement="top">
	//         <small style="cursor:pointer">(not working?)</small>
	//       </tooltip>
	//       </h4>
	//       <typeahead
	//         placeholder="CCCAddress, async via maps.googleapis.com"
	//         key="results"
	//         async="https://maps.googleapis.com/maps/api/geocode/json?address="
	//         template-name="async"
	//         :template="asyncTemplate"
	//         :on-hit="googleCallback"
	//       ></typeahead>
	//       <hr>
	//       <h4>
	//       Custom templates for results
	//       </h4>
	//       <typeahead
	//         placeholder="Github users, async via api.github.com"
	//         key="items"
	//         async="https://api.github.com/search/users?q="
	//         template-name="github"
	//         :template="githubTemplate"
	//         :on-hit="githubCallback"
	//       ></typeahead>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <h4>Static arrays</h4>
	// <typeahead
	//   :data="USstate"
	//   placeholder="USA states">
	// </typeahead>
	//
	// <h4>Asynchronous results</h4>
	//   <typeahead
	//     placeholder="Address, async via maps.googleapis.com"
	//     key="results"
	//     src="https://maps.googleapis.com/maps/api/geocode/json?address="
	//     template-name="async"
	//     :template="asyncTemplate"
	//     :on-hit="googleCallback">
	// </typeahead>
	//
	// <h4>Custom templates for results</h4>
	//   <typeahead
	//     placeholder="Github users, async via api.github.com"
	//     key="items"
	//     src="https://api.github.com/search/users?q="
	//     template-name="typeahead-github-template"
	//     :template="githubTemplate"
	//     :on-hit="githubCallback">
	// </typeahead>
	//   </script></code></pre>
	//     <pre><code class="language-javascript"><script type="language-javascript">
	// new Vue {
	//   components: {
	//     typeahead
	//   },
	//   data() {
	//     return {
	//       USstate: ['Alabama', 'Alaska', 'Arizona',...],
	//       asynchronous: '{{formatted_address}}',
	//       customTemplate: '<img width="18px" height="18px" v-attr="src:avatar_url"/>' +
	//       '<span>{{login}}</span>'
	//     }
	//   },
	//   methods: {
	//     googleCallback(items, targetVM) {
	//       const that = targetVM;
	//       that.reset()
	//       that.query = items.formatted_address
	//     },
	//     githubCallback(items) {
	//       window.open(items.html_url, '_blank')
	//     }
	//   }
	// }
	//     </script></code></pre>
	//
	//     <h2>Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>data</td>
	//           <td><code>Array</code></td>
	//           <td></td>
	//           <td>The local data source for suggestions. Expected to be a primitive array.</td>
	//         </tr>
	//         <tr>
	//           <td>async</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>
	//         </tr>
	//         <tr>
	//           <td>limit</td>
	//           <td><code>Number</code></td>
	//           <td><code>8</code></td>
	//           <td>The max number of suggestions to be displayed.</td>
	//         </tr>
	//         <tr>
	//           <td>key</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>The remote JSON key you want to render.</td>
	//         </tr>
	//         <tr>
	//           <td>match-case</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Case sensitive for suggestions.</td>
	//         </tr>
	//         <tr>
	//           <td>on-hit</td>
	//           <td><code>Function</code></td>
	//           <td></td>
	//           <td>A callback function when you click or hit return on an item.</td>
	//         </tr>
	//         <tr>
	//           <td>template</td>
	//           <td><code>String</code></td>
	//           <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>
	//           <td>Used to render suggestion.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    typeahead: _Typeahead2.default,
	    tooltip: _Tooltip2.default
	  },
	  partials: {},
	  data: function data() {
	    return {
	      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	      'asyncTemplate': '{{ item.formatted_address }}',
	      'githubTemplate': '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
	    };
	  },
	
	  methods: {
	    googleCallback: function googleCallback(items, targetVM) {
	      var that = targetVM;
	      that.reset();
	      that.query = items.formatted_address;
	    },
	    githubCallback: function githubCallback(items) {
	      window.open(items.html_url, '_blank');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(222)
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Typeahead.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(226)
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
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
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
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Typeahead.vue?0d12b9e0"],"names":[],"mappings":";AAyJA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n</template>\n\n<script>\nimport callAjax from './utils/callAjax.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n\nconst typeahead = {\n    created() {\n      this.items = this.primitiveData\n    },\n    partials: {\n      'default': '<span v-html=\"item | highlight query\"></span>',\n    },\n    props: {\n      data: {\n        type: Array\n      },\n      limit: {\n        type: Number,\n        default: 8\n      },\n      async: {\n        type: String\n      },\n      template: {\n        type:String\n      },\n      templateName: {\n        type:String,\n        default: 'default'\n      },\n      key: {\n        type: String\n      },\n      matchCase: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      onHit: {\n        type: Function,\n        default(items) {\n          this.reset()\n          this.query = items\n        }\n      },\n      placeholder: {\n        type: String\n      }\n    },\n    data() {\n      return {\n        query: '',\n        showDropdown: false,\n        noResults: true,\n        current: 0,\n        items: [],\n      }\n    },\n    computed: {\n      primitiveData() {\n        var _this = this;\n        \n        if (this.data) {\n          return this.data.filter(value=> {\n            value = this.matchCase ? value : value.toLowerCase();\n            var query = this.matchCase ? _this.query : _this.query.toLowerCase();\n            return value.indexOf(query) !== -1;\n          }).slice(0, this.limit)\n        }\n      }\n    },\n    ready() {\n      // register a partial:\n      if (this.templateName && this.templateName!=='default')\n      {\n        Vue.partial(this.templateName, this.template)\n      }\n    },\n    methods: {\n      update() {\n        if (!this.query) {\n          this.reset()\n          return false\n        }\n        if (this.data) {\n          this.items = this.primitiveData\n          this.showDropdown = this.items.length ? true : false\n        }\n        if (this.async) {\n          callAjax(this.async + this.query, (data)=> {\n            this.items = data[this.key].slice(0, this.limit)\n            this.showDropdown = this.items.length ? true : false\n          })\n        }\n      },\n      reset() {\n        this.items = []\n        this.query = ''\n        this.loading = false\n        this.showDropdown = false\n      },\n      setActive(index) {\n        this.current = index\n      },\n      isActive(index) {\n        return this.current === index\n      },\n      hit(e) {\n        e.preventDefault()\n        this.onHit(this.items[this.current], this);\n      },\n      up() {\n        if (this.current > 0) this.current--\n      },\n      down() {\n        if (this.current < this.items.length - 1) this.current++\n      }\n    },\n    filters: {\n      highlight(value, phrase) {\n        return value.replace(new RegExp('('+phrase+')', 'gi'), '<strong>$1</strong>')\n      }\n    }\n  }\nexport default typeahead\n</script>\n\n<style>\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(225);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	var _coerceBoolean = __webpack_require__(151);
	
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
/* 225 */
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
/* 226 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n";

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(228)
	__vue_script__ = __webpack_require__(230)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(232)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(229);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  -webkit-animation:fadein-in 0.3s ease-in;\n          animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  -webkit-animation:fadein-out 0.3s ease-out;\n          animation:fadein-out 0.3s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n", "", {"version":3,"sources":["/./src/components/Tooltip.vue?a92097dc"],"names":[],"mappings":";EAiDA;IACA,WAAA;GACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AAPA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AAPA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\n  <span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"tooltip\"\n    v-bind:class=\"{\n    'top':    placement === 'top',\n    'top-left':    placement === 'topLeft',\n    'top-right':    placement === 'topRight',\n    'left':   placement === 'left',\n    'left-top':   placement === 'leftTop',\n    'left-bottom':   placement === 'leftBottom',\n    'right':  placement === 'right',\n    'right-top':  placement === 'rightTop',\n    'right-bottom':  placement === 'rightBottom',\n    'bottom': placement === 'bottom',\n    'bottom-left': placement === 'bottomLeft',\n    'bottom-right': placement === 'bottomRight'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\"\n    role=\"tooltip\">\n    <div class=\"tooltip-arrow\" v-el:arrow></div>\n    <div class=\"tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>\n</template>\n\n<script>\nimport PopoverMixin from './popoverMixins.js'\n  export default {\n    mixins: [PopoverMixin],\n    props: {\n      trigger: {\n        type: String,\n        default: 'hover'\n      },\n      effect: {\n        type: String,\n        default: 'scale'\n      }\n    }\n  }\n</script>\n\n<style>\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(231);
	
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
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(187);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(151);
	
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
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
	    var popover = this.$els.popover;
	    var triger = this.$els.trigger.children[0];
	
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        return self.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        return self.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _EventListener2.default.listen(triger, 'focus', function () {
	        return _this.show = true;
	      });
	      this._blurEvent = _EventListener2.default.listen(triger, 'blur', function () {
	        return _this.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
	    }
	
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
	    popover.style.top = this.position.top + 'px';
	    popover.style.left = this.position.left + 'px';
	    popover.style.display = 'none';
	    this.show = !this.show;
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
/* 232 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"tooltip\"\n  v-bind:class=\"{\n  'top':    placement === 'top',\n  'top-left':    placement === 'topLeft',\n  'top-right':    placement === 'topRight',\n  'left':   placement === 'left',\n  'left-top':   placement === 'leftTop',\n  'left-bottom':   placement === 'leftBottom',\n  'right':  placement === 'right',\n  'right-top':  placement === 'rightTop',\n  'right-bottom':  placement === 'rightBottom',\n  'bottom': placement === 'bottom',\n  'bottom-left': placement === 'bottomLeft',\n  'bottom-right': placement === 'bottomRight'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\"\n  role=\"tooltip\">\n  <div class=\"tooltip-arrow\" v-el:arrow></div>\n  <div class=\"tooltip-inner\">\n    {{{content}}}\n  </div>\n</div>\n";

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"typeahead\">\n    <h3 class=\"page-header\"><a href=\"#typeahead\" class=\"anchor\">Typeahead 自动完成</a></h3>\n    <div class=\"bs-example\">\n      <h4>\n        Static arrays\n      </h4>\n      <typeahead\n        :data=\"USstate\"\n        placeholder=\"USA states\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Asynchronous results\n      <tooltip trigger=\"click\" content=\"The suggestions via a Google Map API, are you behind a FireWall?\" placement=\"top\">\n        <small style=\"cursor:pointer\">(not working?)</small>\n      </tooltip>\n      </h4>\n      <typeahead\n        placeholder=\"CCCAddress, async via maps.googleapis.com\"\n        key=\"results\"\n        async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n        template-name=\"async\"\n        :template=\"asyncTemplate\"\n        :on-hit=\"googleCallback\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Custom templates for results\n      </h4>\n      <typeahead\n        placeholder=\"Github users, async via api.github.com\"\n        key=\"items\"\n        async=\"https://api.github.com/search/users?q=\"\n        template-name=\"github\"\n        :template=\"githubTemplate\"\n        :on-hit=\"githubCallback\"\n      ></typeahead>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>Static arrays</h4>\n<typeahead\n  :data=\"USstate\"\n  placeholder=\"USA states\">\n</typeahead>\n\n<h4>Asynchronous results</h4>\n  <typeahead\n    placeholder=\"Address, async via maps.googleapis.com\"\n    key=\"results\"\n    src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n    template-name=\"async\"\n    :template=\"asyncTemplate\"\n    :on-hit=\"googleCallback\">\n</typeahead>\n\n<h4>Custom templates for results</h4>\n  <typeahead\n    placeholder=\"Github users, async via api.github.com\"\n    key=\"items\"\n    src=\"https://api.github.com/search/users?q=\"\n    template-name=\"typeahead-github-template\"\n    :template=\"githubTemplate\"\n    :on-hit=\"githubCallback\">\n</typeahead>\n  </script></code></pre>\n    <pre><code class=\"language-javascript\"><script type=\"language-javascript\">\nnew Vue {\n  components: {\n    typeahead\n  },\n  data() {\n    return {\n      USstate: ['Alabama', 'Alaska', 'Arizona',...],\n      asynchronous: '{{formatted_address}}',\n      customTemplate: '<img width=\"18px\" height=\"18px\" v-attr=\"src:avatar_url\"/>' +\n      '<span>{{login}}</span>'\n    }\n  },\n  methods: {\n    googleCallback(items, targetVM) {\n      const that = targetVM;\n      that.reset()\n      that.query = items.formatted_address\n    },\n    githubCallback(items) {\n      window.open(items.html_url, '_blank')\n    }\n  }\n}\n    </script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>The local data source for suggestions. Expected to be a primitive array.</td>\n        </tr>\n        <tr>\n          <td>async</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>8</code></td>\n          <td>The max number of suggestions to be displayed.</td>\n        </tr>\n        <tr>\n          <td>key</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The remote JSON key you want to render.</td>\n        </tr>\n        <tr>\n          <td>match-case</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Case sensitive for suggestions.</td>\n        </tr>\n        <tr>\n          <td>on-hit</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>A callback function when you click or hit return on an item.</td>\n        </tr>\n        <tr>\n          <td>template</td>\n          <td><code>String</code></td>\n          <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>\n          <td>Used to render suggestion.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(235)
	__vue_script__ = __webpack_require__(237)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/alertDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(243)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/alertDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.alert-icon-float-left {\n  font-size:32px;float:left;margin-right:5px;\n}\n", "", {"version":3,"sources":["/./docs/example/alertDocs.vue?7ecc8a14"],"names":[],"mappings":";AA6LA;EACA,eAAA,WAAA,iBAAA;CACA","file":"alertDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"alert\">\n    <h3 class=\"page-header\">\n      <a href=\"#alert\" class=\"anchor\">Alert 警告提示</a>\n    </h3>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        点击在右边显示或隐藏\n      </button>\n\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        点击在顶部显示或隐藏\n      </button>\n      <hr>\n      <alert type=\"success\" >\n        成功提示的文案\n      </alert>\n\n      <alert type=\"info\" >\n        消息提示的文案\n      </alert>\n\n      <alert type=\"danger\" dismissable>\n        错误提示的文案,可关闭\n      </alert>\n\n      <alert type=\"warning\" dismissable>\n        警告提示的文案,可关闭\n      </alert>\n\n      <alert type=\"help\" dismissable>\n        帮助提示文案,可关闭\n      </alert>\n\n      <alert\n        :show.sync=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <p>在右边显示的警告</p>\n      </alert>\n\n      <alert\n        :show.sync=\"showTop\"\n        :duration=\"3000\"\n        type=\"danger\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <p>在顶部显示的警告</p>\n      </alert>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showRight = !showRight\">\n  点击在右边显示或隐藏\n\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showTop = !showTop\">\n  点击在顶部显示或隐藏\n</button>\n<hr>\n<alert type=\"success\" >\n  成功提示的文案\n</alert>\n\n<alert type=\"info\" >\n  消息提示的文案\n</alert>\n\n<alert type=\"danger\" dismissable>\n  错误提示的文案\n</alert>\n\n<alert type=\"warning\" dismissable>\n  警告提示的文案\n</alert>\n\n<alert type=\"help\" dismissable>\n  帮助提示文案\n</alert>\n\n<alert\n  show=\"{{showRight}}\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable>\n  <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n  <strong>Well Done!</strong>\n  <p>在右边显示的警告.</p>\n</alert>\n\n<alert\n  show=\"{{showTop}}\"\n  duration=\"3000\"\n  type=\"info\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  <span class=\"icon-info-circled alert-icon-float-left\"></span>\n  <strong>Heads up!</strong>\n  <p>在顶部显示的警告</p>\n</alert>\n\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否显示关闭按钮</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code>\n          <code>help</code>\n          </td>\n          <td><code>success</code></td>\n          <td>组件样式</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>自动关闭时间. 设置为 <code>0</code>或负数将不自动关闭.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>组件的位置</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n\n<script>\n  import alert from 'src/components/Alert.vue'\n  export default {\n    data() {\n      return {\n        showRight: false,\n        showTop: false\n      }\n    },\n    components: {\n      alert,\n    }\n  }\n</script>\n\n<style>\n  .alert-icon-float-left {\n    font-size:32px;float:left;margin-right:5px;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Alert = __webpack_require__(238);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false
	    };
	  },
	
	  components: {
	    alert: _Alert2.default
	  }
	};
	// </script>
	//
	// <style>
	//   .alert-icon-float-left {
	//     font-size:32px;float:left;margin-right:5px;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="alert">
	//     <h3 class="page-header">
	//       <a href="#alert" class="anchor">Alert 警告提示</a>
	//     </h3>
	//     <div class="bs-example" >
	//       <button class="btn btn-success btn-lg"
	//         @click="showRight = !showRight">
	//         点击在右边显示或隐藏
	//       </button>
	//
	//       <button class="btn btn-danger btn-lg"
	//         @click="showTop = !showTop">
	//         点击在顶部显示或隐藏
	//       </button>
	//       <hr>
	//       <alert type="success" >
	//         成功提示的文案
	//       </alert>
	//
	//       <alert type="info" >
	//         消息提示的文案
	//       </alert>
	//
	//       <alert type="danger" dismissable>
	//         错误提示的文案,可关闭
	//       </alert>
	//
	//       <alert type="warning" dismissable>
	//         警告提示的文案,可关闭
	//       </alert>
	//
	//       <alert type="help" dismissable>
	//         帮助提示文案,可关闭
	//       </alert>
	//
	//       <alert
	//         :show.sync="showRight"
	//         :duration="3000"
	//         type="success"
	//         width="400px"
	//         placement="top-right"
	//         dismissable
	//       >
	//         <span class="icon-ok-circled alert-icon-float-left"></span>
	//         <p>在右边显示的警告</p>
	//       </alert>
	//
	//       <alert
	//         :show.sync="showTop"
	//         :duration="3000"
	//         type="danger"
	//         width="400px"
	//         placement="top"
	//         dismissable>
	//         <span class="icon-info-circled alert-icon-float-left"></span>
	//         <p>在顶部显示的警告</p>
	//       </alert>
	//     </div>
	//
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <button class="btn btn-default btn-lg"
	//   @click="showRight = !showRight">
	//   点击在右边显示或隐藏
	//
	// <button class="btn btn-default btn-lg"
	//   @click="showTop = !showTop">
	//   点击在顶部显示或隐藏
	// </button>
	// <hr>
	// <alert type="success" >
	//   成功提示的文案
	// </alert>
	//
	// <alert type="info" >
	//   消息提示的文案
	// </alert>
	//
	// <alert type="danger" dismissable>
	//   错误提示的文案
	// </alert>
	//
	// <alert type="warning" dismissable>
	//   警告提示的文案
	// </alert>
	//
	// <alert type="help" dismissable>
	//   帮助提示文案
	// </alert>
	//
	// <alert
	//   show="{{showRight}}"
	//   duration="3000"
	//   type="success"
	//   width="400px"
	//   placement="top-right"
	//   dismissable>
	//   <span class="icon-ok-circled alert-icon-float-left"></span>
	//   <strong>Well Done!</strong>
	//   <p>在右边显示的警告.</p>
	// </alert>
	//
	// <alert
	//   show="{{showTop}}"
	//   duration="3000"
	//   type="info"
	//   width="400px"
	//   placement="top"
	//   dismissable>
	//   <span class="icon-info-circled alert-icon-float-left"></span>
	//   <strong>Heads up!</strong>
	//   <p>在顶部显示的警告</p>
	// </alert>
	//
	// </script></code></pre>
	//
	//     <h2>Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>名称</th>
	//           <th>类型</th>
	//           <th>默认值</th>
	//           <th>说明</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>show</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>true</code></td>
	//           <td>是否显示</td>
	//         </tr>
	//         <tr>
	//           <td>dismissable</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>是否显示关闭按钮</td>
	//         </tr>
	//         <tr>
	//           <td>type</td>
	//           <td><code>String</code>, one of
	//           <code>success</code>
	//           <code>info</code>
	//           <code>warning</code>
	//           <code>danger</code>
	//           <code>help</code>
	//           </td>
	//           <td><code>success</code></td>
	//           <td>组件样式</td>
	//         </tr>
	//         <tr>
	//           <td>duration</td>
	//           <td><code>Number</code></td>
	//           <td><code>0</code></td>
	//           <td>自动关闭时间. 设置为 <code>0</code>或负数将不自动关闭.</td>
	//         </tr>
	//         <tr>
	//           <td>width</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>placement</td>
	//           <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>
	//           <td></td>
	//           <td>组件的位置</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(239)
	__vue_script__ = __webpack_require__(241)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(242)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(240);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.fade-transition {\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}\n", "", {"version":3,"sources":["/./src/components/Alert.vue?3476acb2"],"names":[],"mappings":";AAwEA;EACA,qCAAA;EAAA,6BAAA;CACA;AACA;;EAEA,UAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\n  <div\n    v-show=\"show\"\n    v-bind:class=\"{\n      'alert':\t\ttrue,\n      'alert-success':(type == 'success'),\n      'alert-warning':(type == 'warning'),\n      'alert-info':\t(type == 'info'),\n      'alert-danger':\t(type == 'danger'),\n      'alert-help': (type == 'help'),\n      'top': \t\t\t(placement === 'top'),\n      'top-right': \t(placement === 'top-right')\n    }\"\n    transition=\"fade\"\n    v-bind:style=\"{width:width}\"\n    role=\"alert\">\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n      @click=\"show = false\">\n      <span>&times;</span>\n    </button>\n    <icon :type=\"type\"></icon>\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      type: {\n        type: String\n      },\n      dismissable: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false,\n      },\n      showIcon: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false,\n      },\n      show: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true,\n        twoWay: true\n      },\n      duration: {\n        type: Number,\n        default: 0\n      },\n      width: {\n        type: String\n      },\n      placement: {\n        type: String\n      }\n    },\n    watch: {\n      show(val) {\n        if (this._timeout) clearTimeout(this._timeout)\n        if (val && Boolean(this.duration)) {\n          this._timeout = setTimeout(()=> this.show = false, this.duration)\n        }\n      }\n    }\n  }\n</script>\n\n<style>\n.fade-transition {\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  height: 0;\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      default: false
	    },
	    show: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      default: 0
	    },
	    width: {
	      type: String
	    },
	    placement: {
	      type: String
	    }
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
	// <style>
	// .fade-transition {
	//   transition: opacity .3s ease;
	// }
	// .fade-enter,
	// .fade-leave {
	//   height: 0;
	//   opacity: 0;
	// }
	// .alert.top {
	//   position: fixed;
	//   top: 30px;
	//   margin: 0 auto;
	//   left: 0;
	//   right: 0;
	//   z-index: 2;
	// }
	// .alert.top-right {
	//   position: fixed;
	//   top: 30px;
	//   right: 50px;
	//   z-index: 2;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div
	//     v-show="show"
	//     v-bind:class="{
	//       'alert':		true,
	//       'alert-success':(type == 'success'),
	//       'alert-warning':(type == 'warning'),
	//       'alert-info':	(type == 'info'),
	//       'alert-danger':	(type == 'danger'),
	//       'alert-help': (type == 'help'),
	//       'top': 			(placement === 'top'),
	//       'top-right': 	(placement === 'top-right')
	//     }"
	//     transition="fade"
	//     v-bind:style="{width:width}"
	//     role="alert">
	//     <button v-show="dismissable" type="button" class="close"
	//       @click="show = false">
	//       <span>&times;</span>
	//     </button>
	//     <icon :type="type"></icon>
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  v-bind:class=\"{\n    'alert':\t\ttrue,\n    'alert-success':(type == 'success'),\n    'alert-warning':(type == 'warning'),\n    'alert-info':\t(type == 'info'),\n    'alert-danger':\t(type == 'danger'),\n    'alert-help': (type == 'help'),\n    'top': \t\t\t(placement === 'top'),\n    'top-right': \t(placement === 'top-right')\n  }\"\n  transition=\"fade\"\n  v-bind:style=\"{width:width}\"\n  role=\"alert\">\n  <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n    @click=\"show = false\">\n    <span>&times;</span>\n  </button>\n  <icon :type=\"type\"></icon>\n  <slot></slot>\n</div>\n";

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"alert\">\n    <h3 class=\"page-header\">\n      <a href=\"#alert\" class=\"anchor\">Alert 警告提示</a>\n    </h3>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        点击在右边显示或隐藏\n      </button>\n\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        点击在顶部显示或隐藏\n      </button>\n      <hr>\n      <alert type=\"success\" >\n        成功提示的文案\n      </alert>\n\n      <alert type=\"info\" >\n        消息提示的文案\n      </alert>\n\n      <alert type=\"danger\" dismissable>\n        错误提示的文案,可关闭\n      </alert>\n\n      <alert type=\"warning\" dismissable>\n        警告提示的文案,可关闭\n      </alert>\n\n      <alert type=\"help\" dismissable>\n        帮助提示文案,可关闭\n      </alert>\n\n      <alert\n        :show.sync=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <p>在右边显示的警告</p>\n      </alert>\n\n      <alert\n        :show.sync=\"showTop\"\n        :duration=\"3000\"\n        type=\"danger\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <p>在顶部显示的警告</p>\n      </alert>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showRight = !showRight\">\n  点击在右边显示或隐藏\n\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showTop = !showTop\">\n  点击在顶部显示或隐藏\n</button>\n<hr>\n<alert type=\"success\" >\n  成功提示的文案\n</alert>\n\n<alert type=\"info\" >\n  消息提示的文案\n</alert>\n\n<alert type=\"danger\" dismissable>\n  错误提示的文案\n</alert>\n\n<alert type=\"warning\" dismissable>\n  警告提示的文案\n</alert>\n\n<alert type=\"help\" dismissable>\n  帮助提示文案\n</alert>\n\n<alert\n  show=\"{{showRight}}\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable>\n  <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n  <strong>Well Done!</strong>\n  <p>在右边显示的警告.</p>\n</alert>\n\n<alert\n  show=\"{{showTop}}\"\n  duration=\"3000\"\n  type=\"info\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  <span class=\"icon-info-circled alert-icon-float-left\"></span>\n  <strong>Heads up!</strong>\n  <p>在顶部显示的警告</p>\n</alert>\n\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否显示关闭按钮</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code>\n          <code>help</code>\n          </td>\n          <td><code>success</code></td>\n          <td>组件样式</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>自动关闭时间. 设置为 <code>0</code>或负数将不自动关闭.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>组件的位置</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(245)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/modalDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(246)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/modalDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(178);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      showModal: false,
	      fadeModal: false,
	      zoomModal: false,
	      showCustomModal: false,
	      largeModal: false,
	      smallModal: false
	    };
	  },
	
	  components: {
	    modal: _Modal2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="modal">
	//     <h3 class="page-header"><a href="#modal" class="anchor">Modal 对话框</a></h3>
	//     <div class="bs-example">
	//       <button class="btn btn-default" @click="showModal = true">显示弹窗</button>
	//       <modal title="Modal title" :show.sync="showModal">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal <b>标题</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//       <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
	//       <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//       <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
	//       <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//       <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
	//       <modal :show.sync="showCustomModal" effect="fade" width="50%">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//         <div slot="modal-footer" class="modal-footer">
	//           <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
	//       <modal title="Large Modal" :show.sync="largeModal" large>
	//         <div slot="modal-body" class="modal-body">
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//         </div>
	//       </modal>
	//       <button class="btn btn-danger" @click="smallModal = true">小弹窗</button>
	//       <modal title="Small Modal" :show.sync="smallModal" small>
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <button class="btn btn-default"
	//   @click="showModal = true"
	//   >显示弹窗
	// </button>
	// <modal :show.sync="showModal">
	//   <div slot="modal-header" class="modal-header">
	//     <h4 class="modal-title">Modal title</h4>
	//   </div>
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>
	//
	// <button class="btn btn-primary"
	//   @click="fadeModal = true">
	//   Fade modal
	// </button>
	// <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>
	//
	// <button class="btn btn-success"
	//   @click="zoomModal = true">
	//   Zoom modal
	// </button>
	// <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>
	//
	// <button class="btn btn-default"
	//   @click="showCustomModal = true">
	//   Show custom modal
	// </button>
	// <modal :show.sync="showCustomModal" effect="fade" width="400">
	//   <div slot="modal-header" class="modal-header">
	//     <h4 class="modal-title">
	//       <i>Custom</i> <code>Modal</code> <b>Title</b>
	//     </h4>
	//   </div>
	//   <div slot="modal-body" class="modal-body">...</div>
	//   <div slot="modal-footer" class="modal-footer">
	//     <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//     <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//   </div>
	// </modal>
	// <button class="btn btn-default"
	//   @click="largeModal = true"
	//   >Large Modal
	// </button>
	// <modal :show.sync="largeModal">
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>
	// <button class="btn btn-default"
	//   @click="smallModal = true"
	//   >Small Modal
	// </button>
	// <modal :show.sync="smallModal">
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>
	//   </script></code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>title</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>标题</td>
	//       </tr>
	//       <tr>
	//         <td>width</td>
	//         <td><code>Number, String or null</code></td>
	//         <td><code>null</code></td>
	//         <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>
	//       </tr>
	//       <tr>
	//         <td>callback</td>
	//         <td><code>Function</code></td>
	//         <td></td>
	//         <td>当点击主要按钮时触发的回调.</td>
	//       </tr>
	//       <tr>
	//         <td>large</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>大的弹窗</td>
	//       </tr>
	//       <tr>
	//         <td>small</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>小的弹窗</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"modal\">\n    <h3 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal 对话框</a></h3>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default\" @click=\"showModal = true\">显示弹窗</button>\n      <modal title=\"Modal title\" :show.sync=\"showModal\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>标题</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"50%\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n        </div>\n      </modal>\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">小弹窗</button>\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default\"\n  @click=\"showModal = true\"\n  >显示弹窗\n</button>\n<modal :show.sync=\"showModal\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-primary\"\n  @click=\"fadeModal = true\">\n  Fade modal\n</button>\n<modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-success\"\n  @click=\"zoomModal = true\">\n  Zoom modal\n</button>\n<modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-default\"\n  @click=\"showCustomModal = true\">\n  Show custom modal\n</button>\n<modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"400\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n  <div slot=\"modal-footer\" class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"largeModal = true\"\n  >Large Modal\n</button>\n<modal :show.sync=\"largeModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"smallModal = true\"\n  >Small Modal\n</button>\n<modal :show.sync=\"smallModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number, String or null</code></td>\n        <td><code>null</code></td>\n        <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>当点击主要按钮时触发的回调.</td>\n      </tr>\n      <tr>\n        <td>large</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>大的弹窗</td>\n      </tr>\n      <tr>\n        <td>small</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>小的弹窗</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(248)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tableDocs.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/tableDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(249);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dataSource = [{
	  key: '1',
	  name: '胡彦斌',
	  age: 32,
	  address: '西湖区湖底公园1号'
	}, {
	  key: '2',
	  name: '胡彦祖',
	  age: 42,
	  address: '西湖区湖底公园1号'
	}]; // <template>
	//   <div class="bs-docs-section" id="table">
	//     <h3 class="page-header"><a href="#tabs" class="anchor">Table 表格</a></h3>
	//     <div class="bs-example">
	//       <grid :data-srouce="gridData" :columns="gridColumns" :row-selection="true" :filter-key="filterKey" row-key="key"></grid>
	//     </div>
	//
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <grid :data-srouce="gridData" :columns="gridColumns" rowSelection="true" row-key="key"></grid>
	// </script></code></pre>
	//   <h3>Table 选项 </h3>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>名称</th>
	//         <th>类型</th>
	//         <th>默认值</th>
	//         <th>描述</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>data-srouce</td>
	//         <td><code>Array</code></td>
	//         <td>[]</td>
	//         <td>要绑定的数据源</td>
	//       </tr>
	//       <tr>
	//         <td>row-selection</td>
	//         <td><code>Boolean</code></td>
	//         <td>false</td>
	//         <td>是否增加列checkbox选择</td>
	//       </tr>
	//       <tr>
	//         <td>columns</td>
	//         <td><code>Array</code></td>
	//         <td>[]</td>
	//         <td>表格列的配置描述</td>
	//       </tr>
	//       <tr>
	//         <td>row-key</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>行选择时绑定的关键列名</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>
	
	
	var columns = [{
	  title: '姓名',
	  dataIndex: 'name',
	  key: 'name'
	}, {
	  title: '年龄',
	  dataIndex: 'age',
	  key: 'age'
	}, {
	  title: '住址',
	  dataIndex: 'address',
	  key: 'address'
	}];
	exports.default = {
	  components: {
	    grid: _Table2.default
	  },
	  data: function data() {
	    return {
	      gridData: dataSource,
	      gridColumns: columns
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(250)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(251)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 250 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	// <table class="table">
	//     <thead>
	//         <tr>
	//             <th v-if="rowSelection">
	//                 <input type="checkbox" @change="onCheckAll"/>
	//             </th>
	//             <th v-for="key in columns" :class="{'multi-col':key.multiCols}" :width="key.width">
	//                 {{key['title']}}
	//                 <template v-if="key.multiCols">
	//                     <span class="iconfont">&#xe608;</span>
	//                     <ul>
	//                         <li v-for="col in key.multiCols"><a href="javascript:void(0);" @click="onSelectColumn(col.id, col.dataId)">{{col.name}}</a></li>
	//                     </ul>
	//                 </template>
	//             </th>
	//
	//         </tr>
	//     </thead>
	//     <tbody>
	//         <tr v-show="!dataSrouce.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">没有任何数据</td></tr>
	//         <tr v-for="
	//             (rowIndex, entry) in dataSrouce
	//             | filterBy filterKey
	//             | orderBy sortKey sortOrders[sortKey]">
	//             <td v-if="rowSelection">
	//                 <input type="checkbox" v-model="checkedKeys" :value="entry[rowKey]"  />
	//             </td>
	//             <td v-for="key in columns" v-bind="{'data-key': entry[rowKey] ,'data-column':key.dataIndex,'data-value':entry[key.dataIndex]}">
	//                 <template v-if="key.render">
	//                     {{{key.render(entry, rowIndex)}}}
	//                 </template>
	//                 <template v-else>
	//                 {{{entry[key.dataIndex] | g_filter key.filter}}}
	//                 </template>
	//             </td>
	//         </tr>
	//     </tbody>
	// </table>
	// </template>
	//
	// <script>
	exports.default = {
	    props: {
	        dataSrouce: Array,
	        columns: Array,
	        filterKey: String,
	        rowSelection: Boolean,
	        rowKey: String
	    },
	    data: function data() {
	        var sortOrders = {};
	        this.columns.forEach(function (key) {
	            return sortOrders[key] = 1;
	        });
	        this.compileTbody();
	        return {
	            sortKey: '',
	            sortOrders: sortOrders,
	            data: this.dataSrouce,
	            checkedKeys: [],
	            checkedDataList: [],
	            scope: null
	        };
	    },
	
	    watch: {
	        checkedKeys: function checkedKeys(_checkedKeys) {
	            var self = this;
	            // 有时候需要多选的时候传两个字段，所以再保存一份选中的数据列集合
	            self.checkedDataList = [];
	            self.dataSrouce.forEach(function (item, i) {
	                if (_checkedKeys.indexOf(item[self.rowKey]) >= 0) {
	                    self.checkedDataList.push(item);
	                }
	            });
	        },
	
	        dataSrouce: {
	            handler: function handler() {
	                this.compileTbody();
	            },
	
	            deep: true
	        }
	    },
	    methods: {
	        compileTbody: function compileTbody() {
	            var self = this;
	            //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
	            this.$nextTick(function () {
	                self.scope = self.scope || self.$parent;
	                self.scope.$compile(self.$el.getElementsByTagName('tbody')[0]);
	            });
	        },
	        sortBy: function sortBy(key) {
	            this.sortKey = key;
	            this.sortOrders[key] = this.sortOrders[key] * -1;
	        },
	        onCheckAll: function onCheckAll() {
	            var self = this;
	            self.checkedKeys = [];
	            self.checkedDataList = [];
	            if (event.target.checked) {
	                self.dataSrouce.forEach(function (key, i) {
	                    if (key[self.rowKey]) {
	                        self.checkedKeys.push(key[self.rowKey]);
	                        self.checkedDataList.push(key);
	                    }
	                });
	            }
	        },
	        onSelectColumn: function onSelectColumn(col, dataId) {
	            this.$dispatch('table-selectCol', col, dataId);
	        }
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th v-if=\"rowSelection\">\n                <input type=\"checkbox\" @change=\"onCheckAll\"/>\n            </th>\n            <th v-for=\"key in columns\" :class=\"{'multi-col':key.multiCols}\" :width=\"key.width\">\n                {{key['title']}}\n                <template v-if=\"key.multiCols\">\n                    <span class=\"iconfont\">&#xe608;</span>\n                    <ul>\n                        <li v-for=\"col in key.multiCols\"><a href=\"javascript:void(0);\" @click=\"onSelectColumn(col.id, col.dataId)\">{{col.name}}</a></li>\n                    </ul>\n                </template>\n            </th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr v-show=\"!dataSrouce.length\"><td colspan=\"10000\" style=\"text-align: center;\" class=\"vue-table-empty\">没有任何数据</td></tr>\n        <tr v-for=\"\n            (rowIndex, entry) in dataSrouce\n            | filterBy filterKey\n            | orderBy sortKey sortOrders[sortKey]\">\n            <td v-if=\"rowSelection\">\n                <input type=\"checkbox\" v-model=\"checkedKeys\" :value=\"entry[rowKey]\"  />\n            </td>\n            <td v-for=\"key in columns\" v-bind=\"{'data-key': entry[rowKey] ,'data-column':key.dataIndex,'data-value':entry[key.dataIndex]}\">\n                <template v-if=\"key.render\">\n                    {{{key.render(entry, rowIndex)}}}\n                </template>\n                <template v-else>\n                {{{entry[key.dataIndex] | g_filter key.filter}}}\n                </template>\n            </td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"table\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Table 表格</a></h3>\n    <div class=\"bs-example\">\n      <grid :data-srouce=\"gridData\" :columns=\"gridColumns\" :row-selection=\"true\" :filter-key=\"filterKey\" row-key=\"key\"></grid>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<grid :data-srouce=\"gridData\" :columns=\"gridColumns\" rowSelection=\"true\" row-key=\"key\"></grid>\n</script></code></pre>\n  <h3>Table 选项 </h3>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>名称</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>描述</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>data-srouce</td>\n        <td><code>Array</code></td>\n        <td>[]</td>\n        <td>要绑定的数据源</td>\n      </tr>\n      <tr>\n        <td>row-selection</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否增加列checkbox选择</td>\n      </tr>\n      <tr>\n        <td>columns</td>\n        <td><code>Array</code></td>\n        <td>[]</td>\n        <td>表格列的配置描述</td>\n      </tr>\n      <tr>\n        <td>row-key</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>行选择时绑定的关键列名</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(254)
	__vue_script__ = __webpack_require__(255)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/badgeDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(259)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/badgeDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 254 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Badge = __webpack_require__(256);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    badge: _Badge2.default
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .badge-count-example, .badge-dot-example {
	//     width: 42px;
	//     height: 42px;
	//     background-color: #eee;
	//     display: inline-block;
	//     border-radius: 6px;
	//   }
	//   .example-title {
	//     margin: 20px 0;
	//   }
	// </style>
	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="badge">
	//     <h3 class="page-header"><a href="#badge" class="anchor">Badge 徽标数</a></h3> 
	//     <div class="bs-example">
	//       <h4 class="example-title">基础型</h4>
	//       <badge :count="6">
	//         <a href="javascript:;" class="badge-count-example"></a>
	//       </badge>
	//       <h4 class="example-title">大数字型</h4>
	//       <badge :count="99">
	//         <a href="javascript:;" class="badge-count-example"></a>
	//       </badge>
	//
	//       <badge :count="1000">
	//         <a href="javascript:;" class="badge-count-example"></a>
	//       </badge>
	//       <h4 class="example-title">小红点型</h4>
	//         <badge :dot="true">
	//           <a href="javascript:;" class="badge-count-example"></a>
	//         </badge>
	//
	//         <badge :dot="true">
	//           <a href="javascript:;" >这是一个文字链接</a>
	//         </badge>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <badge :count="6">
	//   <a href="javascript:;" class="badge-count-example"></a>
	// </badge>
	//
	// <badge :count="99">
	//   <a href="javascript:;" class="badge-count-example"></a>
	// </badge>
	//
	// <badge :count="1000">
	//   <a href="javascript:;" class="badge-count-example"></a>
	// </badge>
	//
	// <badge :dot="true">
	//     <span class="badge-dot-example"></span>
	// </badge>
	//
	// <badge :dot="true">
	//     <a href="javascript:;" >这是一个文字链接</a>
	// </badge>
	//
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>count</td>
	//         <td><code>Number</code></td>
	//         <td></td>
	//         <td>展示的数字，当大于99时展示99+</td>
	//       </tr>
	//       <tr>
	//         <td>dot</td>
	//         <td><code>Boolean</code></td>
	//         <td></td>
	//         <td>展示的红点</td>
	//       </tr>
	//     </tbody>
	//   </table>
	// </template>
	//
	// <script>

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(257)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 257 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <span v-if="dot" class="badge">
	//     <slot></slot>
	//     <sup class="badge-dot"></sup>
	//   </span>
	//   <span v-else class="badge">
	//     <slot></slot>
	//     <sup v-if='count && count >=0' class="badge-count">
	//       {{count | short}}
	//     </sup>
	//   </span>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    count: {
	      type: Number
	    },
	    dot: {
	      type: Boolean,
	      default: false
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
/* 258 */
/***/ function(module, exports) {

	module.exports = "\n<span v-if=\"dot\" class=\"badge\">\n  <slot></slot>\n  <sup class=\"badge-dot\"></sup>\n</span>\n<span v-else class=\"badge\">\n  <slot></slot>\n  <sup v-if='count && count >=0' class=\"badge-count\">\n    {{count | short}}\n  </sup>\n</span>\n";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"badge\">\n    <h3 class=\"page-header\"><a href=\"#badge\" class=\"anchor\">Badge 徽标数</a></h3>  \n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基础型</h4>\n      <badge :count=\"6\">\n        <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n      </badge>\n      <h4 class=\"example-title\">大数字型</h4>\n      <badge :count=\"99\">\n        <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n      </badge>\n\n      <badge :count=\"1000\">\n        <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n      </badge>\n      <h4 class=\"example-title\">小红点型</h4>\n        <badge :dot=\"true\">\n          <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n        </badge>\n\n        <badge :dot=\"true\">\n          <a href=\"javascript:;\" >这是一个文字链接</a>\n        </badge>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<badge :count=\"6\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"99\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"1000\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :dot=\"true\">\n    <span class=\"badge-dot-example\"></span>\n</badge>\n\n<badge :dot=\"true\">\n    <a href=\"javascript:;\" >这是一个文字链接</a>\n</badge>\n\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>count</td>\n        <td><code>Number</code></td>\n        <td></td>\n        <td>展示的数字，当大于99时展示99+</td>\n      </tr>\n      <tr>\n        <td>dot</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>展示的红点</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(261)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/carouselDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(270)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/carouselDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(262);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(267);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="carousel">
	//     <h3 class="page-header"><a href="#caoursel" class="anchor">Carousel 走马灯</a></h3>
	//     <div class="bs-example">
	//       <carousel indicators="true" controls="true">
	//         <slider>
	//           <img style="width:100%" src="https://img.alicdn.com/tps/TB1Pq31KpXXXXbFXXXXXXXXXXXX-888-400.png">
	//           <div class="carousel-caption">
	//            <h3>Slide #1</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img style="width:100%" src="https://img.alicdn.com/tps/TB1ih3pJXXXXXbZXVXXXXXXXXXX-888-400.png">
	//           <div class="carousel-caption">
	//            <h3>Slide #2</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img style="width:100%" src="https://img.alicdn.com/tps/TB1fEtIKpXXXXbEXVXXXXXXXXXX-888-400.jpg">
	//           <div class="carousel-caption">
	//            <h3>Slide #3</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//       </carousel>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <carousel>
	//   <slider>
	//     <img src="http://placehold.it/1200x400?text=one">
	//       <div class="carousel-caption">
	//        ...
	//      </div>
	//   </slider>
	//   <slider>
	//     <img src="http://placehold.it/1200x400?text=two">
	//   </slider>
	//   <slider>
	//     <img src="http://placehold.it/1200x400?text=three">
	//   </slider>
	// </carousel>
	// </script></code></pre>
	//
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>indicators</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>true</code></td>
	//         <td>Whether to show the indicators.</td>
	//       </tr>
	//       <tr>
	//         <td>controls</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>true</code></td>
	//         <td>Whether to show the direction controls.</td>
	//       </tr>
	//       <tr>
	//         <td>interval</td>
	//         <td><code>Number</code></td>
	//         <td><code>5000</code></td>
	//         <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,
	//           carousel will not automatically cycle.
	//         </td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  components: {
	    carousel: _Carousel2.default,
	    slider: _Slider2.default
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(263)
	__vue_script__ = __webpack_require__(265)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(266)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(264);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b62e64&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b62e64&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[_v-69b62e64] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Carousel.vue?2d818cc3"],"names":[],"mappings":";AAsHA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\n<div class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <indicator></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <slot></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\nimport coerceBoolean from './utils/coerceBoolean.js'\n  export default {\n    props: {\n      indicators: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      controls: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: true\n      },\n      interval: {\n        type: Number,\n        default: 5000\n      }\n    },\n    components: {\n      'indicator': {\n        inherit: true,\n        template: '<li v-for=\"i in indicator\" @click=\"handleIndicatorClick($index)\" v-bind:class=\"{\\'active\\':$index === activeIndex}\"</li>',\n        methods: {\n          handleIndicatorClick(index) {\n            if (this.isAnimating) return false\n            this.isAnimating = true\n            this.activeIndex = index\n          }\n        },\n      }\n    },\n    data() {\n      return {\n        indicator: [],\n        activeIndex: 0,\n        isAnimating: false\n      }\n    },\n    computed: {\n      slider() {\n        return this.$el.querySelectorAll('.item')\n      }\n    },\n    watch: {\n      activeIndex(newVal, oldVal) {\n        newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)\n      }\n    },\n    methods: {\n      slide(direction, selected, prev) {\n        if (this._prevSelectedEvent) this._prevSelectedEvent.remove()\n        if (this._selectedEvent) this._selectedEvent.remove()\n        const prevSelectedEl = this.slider[prev]\n        const selectedEl = this.slider[selected]\n        const transitionendFn = ()=> {\n          [...this.slider].forEach((el)=> el.className = 'item')\n          selectedEl.classList.add('active')\n          this.isAnimating = false\n        }\n        direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev')\n        // request property that requires layout to force a layout\n        var x = selectedEl.clientHeight\n        this._prevSelectedEvent = EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)\n        this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)\n        prevSelectedEl.classList.add(direction)\n        selectedEl.classList.add(direction)\n      },\n      nextClick() {\n        if (this.isAnimating) return false\n        this.isAnimating = true\n        this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0\n      },\n      prevClick() {\n        if (this.isAnimating) return false\n        this.isAnimating = true\n        this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1\n      }\n    },\n    ready() {\n      let intervalID = null\n      const el = this.$el\n      function intervalManager(flag, func, time) {\n        flag ? intervalID =  setInterval(func, time) : clearInterval(intervalID)\n      }\n      if (!!this.interval) {\n        intervalManager(true, this.nextClick, this.interval)\n        el.addEventListener('mouseenter', ()=> intervalManager(false))\n        el.addEventListener('mouseleave', ()=> intervalManager(true, this.nextClick, this.interval))\n      }\n    },\n  }\n</script>\n\n<style scoped>\n  .carousel-control {\n    cursor: pointer;\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(76);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(187);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(151);
	
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
/* 266 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-69b62e64=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-69b62e64=\"\">\n    <indicator _v-69b62e64=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-69b62e64=\"\">\n    <slot _v-69b62e64=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-69b62e64=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-69b62e64=\"\"></span>\n    <span class=\"sr-only\" _v-69b62e64=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-69b62e64=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-69b62e64=\"\"></span>\n    <span class=\"sr-only\" _v-69b62e64=\"\">Next</span>\n  </a>\n</div>\n";

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(268)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(269)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 268 */
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
/* 269 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"carousel\">\n    <h3 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel 走马灯</a></h3>\n    <div class=\"bs-example\">\n      <carousel indicators=\"true\" controls=\"true\">\n        <slider>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1Pq31KpXXXXbFXXXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1ih3pJXXXXXbZXVXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1fEtIKpXXXXbEXVXXXXXXXXXX-888-400.jpg\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<carousel>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slider>\n</carousel>\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(272)
	__vue_script__ = __webpack_require__(274)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(275)
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
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(273);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
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
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-affix {\n  position: fixed;\n}\n", "", {"version":3,"sources":["/./src/components/Affix.vue?43e2bfa3"],"names":[],"mappings":";AAqFA;EACA,gBAAA;CACA","file":"Affix.vue","sourcesContent":["<template>\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n</template>\n\n<script>\nimport EventListener from './utils/EventListener.js'\n  export default {\n    props: {\n      offset: {\n        type: Number,\n        default: 0\n      }\n    },\n    data() {\n      return {\n        affixed: false,\n        styles: {}\n      }\n    },\n    methods: {\n      scrolling() {\n        const scrollTop = this.getScroll(window, true)\n        const elementOffset = this.getOffset(this.$el)\n        if (!this.affixed && scrollTop > elementOffset.top) {\n          this.affixed = true\n          this.styles = {\n            top: this.offset + 'px',\n            left: elementOffset.left + 'px',\n            width: this.$el.offsetWidth + 'px'\n          }\n        }\n        if (this.affixed && scrollTop < elementOffset.top) {\n          this.affixed = false\n          this.styles = {}\n        }\n      },\n      // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20\n      getScroll(w, top) {\n        let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']\n        const method = 'scroll' + (top ? 'Top' : 'Left')\n        if (typeof ret !== 'number') {\n          const d = w.document\n          // ie6,7,8 standard mode\n          ret = d.documentElement[method]\n          if (typeof ret !== 'number') {\n            // quirks mode\n            ret = d.body[method]\n          }\n        }\n        return ret\n      },\n      getOffset(element) {\n        const rect = element.getBoundingClientRect()\n        const body = document.body\n        const clientTop = element.clientTop || body.clientTop || 0\n        const clientLeft = element.clientLeft || body.clientLeft || 0\n        const scrollTop = this.getScroll(window, true)\n        const scrollLeft = this.getScroll(window)\n        return {\n          top: rect.top + scrollTop - clientTop,\n          left: rect.left + scrollLeft - clientLeft\n        }\n      }\n    },\n    ready() {\n      this._scrollEvent = EventListener.listen(window, 'scroll', this.scrolling)\n      this._resizeEvent = EventListener.listen(window, 'resize', this.scrolling)\n    },\n    beforeDestroy() {\n      if (this._scrollEvent) {\n        this._scrollEvent.remove()\n      }\n      if (this._resizeEvent) {\n        this._resizeEvent.remove()\n      }\n    }\n  }\n</script>\n\n<style>\n  .vue-affix {\n    position: fixed;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(187);
	
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
/* 275 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n";

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(277)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/container.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container bs-docs-container\">\n  <div class=\"row\">\n      <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(279)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/spinDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(284)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/spinDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Spin = __webpack_require__(280);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    spin: _Spin2.default
	  },
	  created: function created() {}
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="spin">
	//     <h3 class="page-header"><a href="#spin" class="anchor">Spin 加载中</a></h3>
	//     <div class="bs-example">
	//     <h4>小的加载</h4>
	//     <spin :spining="true" size="small"></spin>
	//     <h4>普通加载</h4>
	//     <spin :spining="true"></spin>
	//     <h4>大的加载</h4>
	//     <spin :spining="true" size="large"></spin>
	//     </div>
	//
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <spin :spining="true" size="small"></spin>
	// <spin :spining="true"></spin>
	// <spin :spining="true" size="large"></spin>
	// </script></code></pre>
	//
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(281)
	__vue_script__ = __webpack_require__(282)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(283)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 281 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style lang="less">
	// /*!
	//  * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
	//  * Copyright 2015 Daniel Cardoso <@DanielCardoso>
	//  * Licensed under MIT
	//  */
	// .spin,
	// .spin > div {
	//     position: relative;
	//     -webkit-box-sizing: border-box;
	//        -moz-box-sizing: border-box;
	//             box-sizing: border-box;
	// }
	// .spin {
	//     display: block;
	//     font-size: 0;
	//     color: #333;
	// }
	// .spin > div {
	//     display: inline-block;
	//     float: none;
	//     background-color: currentColor;
	//     border: 0 solid currentColor;
	// }
	// .spin {
	//     width: 32px;
	//     height: 32px;
	// }
	// .spin.small{
	//   width: 16px;
	//   height: 16px;
	// }
	// .spin.large{
	//   width: 64px;
	//   height: 64px;
	// }
	// .spin > div {
	//     position: absolute;
	//     top: 0;
	//     left: 0;
	//     width: 10px;
	//     height: 10px;
	//     border-radius: 100%;
	// }
	// .spin > div:nth-child(1) {
	//     -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	//        -moz-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	//          -o-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	//             animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
	// }
	// .spin > div:nth-child(2) {
	//     -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	//        -moz-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	//          -o-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	//             animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
	// }
	// .spin > div:nth-child(3) {
	//     -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	//        -moz-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	//          -o-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	//             animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
	// }
	// .spin.small {
	//     width: 16px;
	//     height: 16px;
	// }
	// .spin.small > div {
	//     width: 4px;
	//     height: 4px;
	// }
	// .spin.large {
	//     width: 64px;
	//     height: 64px;
	// }
	// .spin.large > div {
	//     width: 20px;
	//     height: 20px;
	// }
	// /*
	//  * Animations
	//  */
	// @-webkit-keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	// }
	// @-moz-keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	// }
	// @-o-keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	// }
	// @keyframes ball-triangle-path-ball-one {
	//     0% {
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	// }
	// @-webkit-keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	// }
	// @-moz-keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	// }
	// @-o-keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	// }
	// @keyframes ball-triangle-path-ball-two {
	//     0% {
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	// }
	// @-webkit-keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	// }
	// @-moz-keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -moz-transform: translate(0, 220%);
	//              transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -moz-transform: translate(110%, 0);
	//              transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -moz-transform: translate(220%, 220%);
	//              transform: translate(220%, 220%);
	//     }
	// }
	// @-o-keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -o-transform: translate(0, 220%);
	//            transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -o-transform: translate(110%, 0);
	//            transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -o-transform: translate(220%, 220%);
	//            transform: translate(220%, 220%);
	//     }
	// }
	// @keyframes ball-triangle-path-ball-tree {
	//     0% {
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	//     17% {
	//         opacity: .25;
	//     }
	//     33% {
	//         opacity: 1;
	//         -webkit-transform: translate(0, 220%);
	//            -moz-transform: translate(0, 220%);
	//              -o-transform: translate(0, 220%);
	//                 transform: translate(0, 220%);
	//     }
	//     50% {
	//         opacity: .25;
	//     }
	//     66% {
	//         opacity: 1;
	//         -webkit-transform: translate(110%, 0);
	//            -moz-transform: translate(110%, 0);
	//              -o-transform: translate(110%, 0);
	//                 transform: translate(110%, 0);
	//     }
	//     83% {
	//         opacity: .25;
	//     }
	//     100% {
	//         opacity: 1;
	//         -webkit-transform: translate(220%, 220%);
	//            -moz-transform: translate(220%, 220%);
	//              -o-transform: translate(220%, 220%);
	//                 transform: translate(220%, 220%);
	//     }
	// }
	// </style>
	// <template>
	// <div :class="[spin,size]" v-show="spining">
	//   <div></div>
	//   <div></div>
	//   <div></div>
	// </div>
	// </template>
	// <script>
	exports.default = {
	  name: 'loading',
	  props: {
	    spining: {
	      type: Boolean,
	      default: false
	    },
	    size: {
	      type: String,
	      default: 'default'
	    }
	  },
	  data: function data() {
	    return {
	      spin: 'spin',
	      size: this.size
	    };
	  },
	
	  methods: {
	    show: function show() {
	      this.spining = true;
	    },
	    hide: function hide() {
	      this.spining = false;
	    }
	  },
	  created: function created() {
	    var self = this;
	    // window.DAYU = window.DAYU || {};
	    Vue.showLoading = function () {
	      self.show();
	    };
	    Vue.hideLoading = function () {
	      self.hide();
	    };
	  }
	};

	/* generated by vue-loader */

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[spin,size]\" v-show=\"spining\">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n";

/***/ },
/* 284 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"spin\">\n    <h3 class=\"page-header\"><a href=\"#spin\" class=\"anchor\">Spin 加载中</a></h3>\n    <div class=\"bs-example\">\n    <h4>小的加载</h4>\n    <spin :spining=\"true\" size=\"small\"></spin>\n    <h4>普通加载</h4>\n    <spin :spining=\"true\"></spin>\n    <h4>大的加载</h4>\n    <spin :spining=\"true\" size=\"large\"></spin>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<spin :spining=\"true\" size=\"small\"></spin>\n<spin :spining=\"true\"></spin>\n<spin :spining=\"true\" size=\"large\"></spin>\n</script></code></pre>\n\n  </div>\n";

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/textareaDocs.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/textareaDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(287);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    limitTextarea: _Textarea2.default
	  },
	  data: function data() {
	    return {
	      checkboxValue: [],
	      radioValue: ''
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="textarea">
	//     <h3 class="page-header"><a href="#textarea" class="anchor">textarea 文本域</a></h3>
	//     <div class="bs-example">
	//     <h4>基础文本域</h4>
	//     <div>
	//       <textarea class="textarea" placeholder="请输入描述信息"></textarea>
	//     </div>
	//     <div>
	//       <textarea class="textarea" disabled>文本框被禁用了</textarea>
	//     </div>
	//     <div>
	//       <textarea class="textarea error">信息错误了</textarea>
	//     </div>
	//     <h4>有字数限制文本域</h4>
	//     <div>
	//       <limit-textarea :limit-words="10" placeholder="这里只能输入10个字"></limit-textarea>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <!-- textarea文本域 -->
	// <!-- 用样式textarea，标识是个文本域 -->
	// <!-- 文本域有错误（error）状态和禁用状态（加disabled属性即可） -->
	// <textarea class="textarea" placeholder="请输入描述信息"></textarea>
	// <textarea class="textarea error">信息错误了</textarea>
	// <textarea class="textarea error">信息错误了</textarea>
	//
	// <!-- 有字数限制的文本域，通过组件方式调用 -->
	// <!-- 参数limit-words指定限制的最多字数 -->
	// <limit-textarea :limit-words="10"></limit-textarea>
	// </script></code></pre>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(288)
	__vue_script__ = __webpack_require__(289)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Textarea.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(290)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Textarea.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 288 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="limitTextarea">
	//   <textarea class="textarea" maxlength="{{limitWords}}" placeholder="{{ placeholder }}" v-model="content" :class="{'error': overLimit}"></textarea>
	//   <p :class="{'words-error': overLimit}">{{ curWords }}/{{ limitWords }}</p>
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: ['limitWords', 'placeholder'],
	  data: function data() {
	    return {
	      curWords: 0,
	      content: '',
	      overLimit: false
	    };
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
	//
	// <style lang="less">
	//   .limitTextarea {
	//
	//     p {
	//       color: #999;
	//       font-size: 12px;
	//     }
	//
	//     .words-error {
	//       color: #ff5959;
	//     }
	//   }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"limitTextarea\">\n  <textarea class=\"textarea\" maxlength=\"{{limitWords}}\" placeholder=\"{{ placeholder }}\" v-model=\"content\" :class=\"{'error': overLimit}\"></textarea>\n  <p :class=\"{'words-error': overLimit}\">{{ curWords }}/{{ limitWords }}</p>\n</div>\n";

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"textarea\">\n    <h3 class=\"page-header\"><a href=\"#textarea\" class=\"anchor\">textarea 文本域</a></h3>\n    <div class=\"bs-example\">\n    <h4>基础文本域</h4>\n    <div>\n      <textarea class=\"textarea\" placeholder=\"请输入描述信息\"></textarea>\n    </div>\n    <div>\n      <textarea class=\"textarea\" disabled>文本框被禁用了</textarea>\n    </div>\n    <div>\n      <textarea class=\"textarea error\">信息错误了</textarea>\n    </div>\n    <h4>有字数限制文本域</h4>\n    <div>\n      <limit-textarea :limit-words=\"10\" placeholder=\"这里只能输入10个字\"></limit-textarea>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- textarea文本域 -->\n<!-- 用样式textarea，标识是个文本域 -->\n<!-- 文本域有错误（error）状态和禁用状态（加disabled属性即可） -->\n<textarea class=\"textarea\" placeholder=\"请输入描述信息\"></textarea>\n<textarea class=\"textarea error\">信息错误了</textarea>\n<textarea class=\"textarea error\">信息错误了</textarea>\n\n<!-- 有字数限制的文本域，通过组件方式调用 -->\n<!-- 参数limit-words指定限制的最多字数 -->\n<limit-textarea :limit-words=\"10\"></limit-textarea>\n</script></code></pre>\n  </div>\n</template>";

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(293)
	__vue_script__ = __webpack_require__(294)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tagDocs.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/tagDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 293 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tag = __webpack_require__(295);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      href: 'http://www.aliqin.cn'
	    };
	  },
	
	  methods: {
	    closeTag: function closeTag() {
	      alert('这里是关闭标签之后的回调函数哦！！！');
	    }
	  },
	  components: {
	    tag: _Tag2.default
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .example-title {
	//     margin: 20px 0;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="tag">
	//     <h3 class="page-header"><a href="#tag" class="anchor">Tag 标签</a></h3>
	//     <div class="bs-example">
	//       <h4 class="example-title">基本标签</h4>
	//       <tag>标签一</tag>
	//       <tag closable :on-close="closeTag">标签（回调）</tag>
	//       <tag :href="href">标签（链接）</tag>
	//       <h4 class="example-title">三种颜色的标签</h4>
	//       <tag color="green">标签</tag>
	//       <tag color="orange" closable :on-close="closeTag">标签</tag>
	//       <tag color="red">标签</tag>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up"><tag>标签一</tag>
	// <tag closable :on-close="closeTag">标签（回调）</tag>
	// <tag :href="href">标签（链接）</tag>
	// <tag color="green">标签</tag>
	// <tag color="orange" closable :on-close="closeTag">标签</tag>
	// <tag color="red">标签</tag>
	// </script></code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>closable</td>
	//         <td><code>Boolean</code></td>
	//         <td></td>
	//         <td>是否显示关闭按钮</td>
	//       </tr>
	//       <tr>
	//         <td>color</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>Tag的颜色，默认为#f2f2f2</td>
	//       </tr>
	//       <tr>
	//         <td>href</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>给tag加上链接地址，作为一个超链接</td>
	//       </tr>
	//       <tr>
	//         <td>on-close</td>
	//         <td><code>Function</code></td>
	//         <td></td>
	//         <td>点击关闭按钮之后所执行的回调函数</td>
	//       </tr>
	//
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(296)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(297)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 296 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div v-if="!closed" :class="{
	// 	  'tag':		true,
	//       'tag-green':(color == 'green'),
	//       'tag-orange':(color == 'orange'),
	//       'tag-red':(color == 'red')}" >
	// 		<a :href="href" class="tag-text"><slot></slot></a>
	// 		<i v-if="closable" class="tag-close" @click="closeHandler">x</i>
	// 	</div>
	// </template>
	//
	// <script>
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
			onClose: {
				type: Function,
				default: function _default() {}
			}
		},
	
		data: function data() {
			return {
				closed: false
			};
		},
	
	
		methods: {
			closeHandler: function closeHandler(e) {
				this.closed = true;
				this.onClose.call(this, e);
			}
		}
	};
	// </script>
	//
	//
	//

	/* generated by vue-loader */

/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = "\n\t<div v-if=\"!closed\" :class=\"{\n\t  'tag':\t\ttrue,\n      'tag-green':(color == 'green'),\n      'tag-orange':(color == 'orange'),\n      'tag-red':(color == 'red')}\" >\n\t\t<a :href=\"href\" class=\"tag-text\"><slot></slot></a>\n\t\t<i v-if=\"closable\" class=\"tag-close\" @click=\"closeHandler\">x</i>\n\t</div>\n";

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tag\">\n    <h3 class=\"page-header\"><a href=\"#tag\" class=\"anchor\">Tag 标签</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本标签</h4>\n      <tag>标签一</tag>\n      <tag closable :on-close=\"closeTag\">标签（回调）</tag>\n      <tag :href=\"href\">标签（链接）</tag>\n      <h4 class=\"example-title\">三种颜色的标签</h4>\n      <tag color=\"green\">标签</tag>\n      <tag color=\"orange\" closable :on-close=\"closeTag\">标签</tag>\n      <tag color=\"red\">标签</tag>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\"><tag>标签一</tag>\n<tag closable :on-close=\"closeTag\">标签（回调）</tag>\n<tag :href=\"href\">标签（链接）</tag>\n<tag color=\"green\">标签</tag>\n<tag color=\"orange\" closable :on-close=\"closeTag\">标签</tag>\n<tag color=\"red\">标签</tag>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>closable</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>是否显示关闭按钮</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Tag的颜色，默认为#f2f2f2</td>\n      </tr>\n      <tr>\n        <td>href</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>给tag加上链接地址，作为一个超链接</td>\n      </tr>\n      <tr>\n        <td>on-close</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>点击关闭按钮之后所执行的回调函数</td>\n      </tr>\n\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(300)
	__vue_script__ = __webpack_require__(301)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tooltipDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(302)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/tooltipDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 300 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(227);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	
	  components: {
	    tooltip: _Tooltip2.default
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .table-demo {
	//     position: relative;
	//     width: 100%;
	//     td {
	//       text-align: center;
	//       width: 33%;
	//     }
	//   }
	//
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="tooltip">
	//     <h3 class="page-header"><a href="#tooltip" class="anchor">Tooltip 文字提示</a></h3>
	//     <div class="bs-example">
	//           <tooltip content="talk is cheap show me the code" placement="topLeft" >
	//             <button class="btn btn-default ">上左</button>
	//           </tooltip>
	//           <tooltip   content="talk is cheap show me the code" placement="top">
	//             <button class="btn btn-default ">上边</button>
	//           </tooltip>
	//           <tooltip   content="Lorem ipsum dolor sit amet" placement="topRight">
	//             <button class="btn btn-default ">上右</button>
	//           </tooltip>
	//
	//           <tooltip   content="what does the fox say ？" placement="leftTop">
	//             <button class="btn btn-default ">左上</button>
	//           </tooltip>
	//           <tooltip   content="Are you kidding me?" placement="left">
	//             <button class="btn btn-default ">左边</button>
	//           </tooltip>
	//           <tooltip   content="no, i'm serious! " placement="leftBottom">
	//             <button class="btn btn-default ">左下</button>
	//           </tooltip>
	//
	//             <tooltip   content="bang bang bang!" placement="rightTop">
	//               <button class="btn btn-default ">右上</button>
	//             </tooltip>
	//             <tooltip   content="Lorem ipsum dolor sit amet" placement="right">
	//               <button class="btn btn-default ">右边</button>
	//             </tooltip>
	//             <tooltip   content="Lorem ipsum dolor sit amet" placement="rightBottom">
	//               <button class="btn btn-default ">右下</button>
	//             </tooltip>
	//             <tooltip  placement="bottomLeft" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//               <button class="btn btn-default ">下左</button>
	//             </tooltip>
	//             <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//               <button class="btn btn-default ">下边</button>
	//             </tooltip>
	//             <tooltip  placement="bottomRight" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//               <button class="btn btn-default ">下右</button>
	//             </tooltip>
	//
	//       <h4>Triger</h4>
	//       <p>
	//         <tooltip trigger="click"
	//         effect="fadein" content="提示文字" placement="top" trigger="hover">
	//             <button class="btn btn-default ">Click</button>
	//         </tooltip>
	//       </p>
	//       <tooltip effect="scale"
	//     content="Lorem ipsum dolor sit amet" placement="topLeft" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </tooltip>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <tooltip content="talk is cheap show me the code" placement="topLeft">
	// <button class="btn btn-default ">上左</button>
	// </tooltip>
	// <tooltip content="talk is cheap show me the code" placement="top">
	// <button class="btn btn-default ">上边</button>
	// </tooltip>
	// <tooltip content="Lorem ipsum dolor sit amet" placement="topRight">
	// <button class="btn btn-default ">上右</button>
	// </tooltip>
	// <tooltip content="what does the fox say ？" placement="leftTop">
	// <button class="btn btn-default ">左上</button>
	// </tooltip>
	// <tooltip content="Are you kidding me?" placement="left">
	// <button class="btn btn-default ">左边</button>
	// </tooltip>
	// <tooltip content="no, i'm serious! " placement="leftBottom">
	// <button class="btn btn-default ">左下</button>
	// </tooltip>
	// <tooltip content="bang bang bang!" placement="rightTop">
	//   <button class="btn btn-default ">右上</button>
	// </tooltip>
	// <tooltip content="Lorem ipsum dolor sit amet" placement="right">
	//   <button class="btn btn-default ">右边</button>
	// </tooltip>
	// <tooltip content="Lorem ipsum dolor sit amet" placement="rightBottom">
	//   <button class="btn btn-default ">右下</button>
	// </tooltip>
	// <tooltip  placement="bottomLeft" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="btn btn-default ">下左</button>
	// </tooltip>
	// <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="btn btn-default ">下边</button>
	// </tooltip>
	// <tooltip  placement="bottomRight" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="btn btn-default ">下右</button>
	// </tooltip>
	// <tooltip trigger="click"
	//   effect="fadein" content="提示文字" placement="top" trigger="hover">
	//   <button class="btn btn-default ">Click</button>
	//   </tooltip>
	// <tooltip effect="scale"
	// content="Lorem ipsum dolor sit amet" placement="topLeft" trigger="focus">
	//   <input type="text" class="form-control" placeholder="Focus">
	// </tooltip>
	// </script></code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>trigger</td>
	//         <td><code>String</code></td>
	//         <td><code>click</code></td>
	//         <td>以何种方式触发显示气泡框,可选hover, click, focus</td>
	//       </tr>
	//       <tr>
	//         <td>effect</td>
	//         <td><code>String</code></td>
	//         <td><code>scale</code></td>
	//         <td>过渡效果，可选scale, fadein</td>
	//       <tr>
	//         <td>content</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>内容</td>
	//       </tr>
	//         <td>placement</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 302 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tooltip\">\n    <h3 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip 文字提示</a></h3>\n    <div class=\"bs-example\">\n          <tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\" >\n            <button class=\"btn btn-default \">上左</button>\n          </tooltip>\n          <tooltip   content=\"talk is cheap show me the code\" placement=\"top\">\n            <button class=\"btn btn-default \">上边</button>\n          </tooltip>\n          <tooltip   content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n            <button class=\"btn btn-default \">上右</button>\n          </tooltip>\n\n          <tooltip   content=\"what does the fox say ？\" placement=\"leftTop\">\n            <button class=\"btn btn-default \">左上</button>\n          </tooltip>\n          <tooltip   content=\"Are you kidding me?\" placement=\"left\">\n            <button class=\"btn btn-default \">左边</button>\n          </tooltip>\n          <tooltip   content=\"no, i'm serious! \" placement=\"leftBottom\">\n            <button class=\"btn btn-default \">左下</button>\n          </tooltip>\n\n            <tooltip   content=\"bang bang bang!\" placement=\"rightTop\">\n              <button class=\"btn btn-default \">右上</button>\n            </tooltip>\n            <tooltip   content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n              <button class=\"btn btn-default \">右边</button>\n            </tooltip>\n            <tooltip   content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n              <button class=\"btn btn-default \">右下</button>\n            </tooltip>\n            <tooltip  placement=\"bottomLeft\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"btn btn-default \">下左</button>\n            </tooltip>\n            <tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"btn btn-default \">下边</button>\n            </tooltip>\n            <tooltip  placement=\"bottomRight\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"btn btn-default \">下右</button>\n            </tooltip>\n\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n        effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n    content=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\">\n<button class=\"btn btn-default \">上左</button>\n</tooltip>\n<tooltip content=\"talk is cheap show me the code\" placement=\"top\">\n<button class=\"btn btn-default \">上边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n<button class=\"btn btn-default \">上右</button>\n</tooltip>\n<tooltip content=\"what does the fox say ？\" placement=\"leftTop\">\n<button class=\"btn btn-default \">左上</button>\n</tooltip>\n<tooltip content=\"Are you kidding me?\" placement=\"left\">\n<button class=\"btn btn-default \">左边</button>\n</tooltip>\n<tooltip content=\"no, i'm serious! \" placement=\"leftBottom\">\n<button class=\"btn btn-default \">左下</button>\n</tooltip>\n<tooltip content=\"bang bang bang!\" placement=\"rightTop\">\n  <button class=\"btn btn-default \">右上</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n  <button class=\"btn btn-default \">右边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n  <button class=\"btn btn-default \">右下</button>\n</tooltip>\n<tooltip  placement=\"bottomLeft\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下左</button>\n</tooltip>\n<tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下边</button>\n</tooltip>\n<tooltip  placement=\"bottomRight\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下右</button>\n</tooltip>\n<tooltip trigger=\"click\"\n  effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n  <button class=\"btn btn-default \">Click</button>\n  </tooltip>\n<tooltip effect=\"scale\"\ncontent=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n</tooltip>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code></td>\n        <td><code>click</code></td>\n        <td>以何种方式触发显示气泡框,可选hover, click, focus</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code></td>\n        <td><code>scale</code></td>\n        <td>过渡效果，可选scale, fadein</td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>内容</td>\n      </tr>\n        <td>placement</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(304)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/accordionDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(313)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/accordionDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Accordion = __webpack_require__(305);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(308);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="accordion">
	//     <h3 class="page-header"><a href="#accordion" class="anchor">Accordion 手风琴</a></h3>
	//     <div class="bs-example">
	//       <p>
	//         <input type="checkbox" v-model="checked">
	//         Open only one at a time.
	//       </p>
	//       <accordion :one-at-atime="checked">
	//         <panel header="Panel #1" :is-open="true">
	//           内容一
	//         </panel>
	//         <panel header="Panel #2">
	//           内容二
	//         </panel>
	//         <panel header="Panel #3">
	//           内容三
	//         </panel>
	//         <panel header="Panel #4">
	//           内容四
	//         </panel>
	//       </accordion>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <input type="checkbox" v-model="checked">
	// <label for="checked">Open only one at a time.</label>
	//
	// <accordion :one-at-atime="checked">
	//   <panel header="Panel #1" :is-open="true">
	//     ...
	//   </panel>
	//   <panel header="Panel #2">
	//     ...
	//   </panel>
	//   <panel header="Panel #3">
	//     ...
	//   </panel>
	//   <panel header="Panel #4">
	//     ...
	//   </panel>
	// </accordion>
	// </script></code></pre>
	//     <h2>Accordion Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>one-at-time</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Control whether expanding an item will cause the other items to close.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//     <h2>Panel Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//         <tr>
	//           <th>Name</th>
	//           <th>Type</th>
	//           <th>Default</th>
	//           <th>Description</th>
	//         </tr>
	//       </thead>
	//       <tbody>
	//         <tr>
	//           <td>is-open</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Whether accordion group is open or closed.</td>
	//         </tr>
	//         <tr>
	//           <td>header</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      checked: true
	    };
	  },
	
	  components: {
	    accordion: _Accordion2.default,
	    panel: _Panel2.default
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(306)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(307)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtATime) {
	        _this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(309)
	__vue_script__ = __webpack_require__(311)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(312)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(310);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\n-webkit-transition: max-height .5s ease;\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n", "", {"version":3,"sources":["/./src/components/Panel.vue?5f672bf4"],"names":[],"mappings":";AA0DA;EACA,gBAAA;CACA;;AAEA;AACA,wCAAA;AAAA,gCAAA;AACA,iBAAA;CACA;;AAEA;EACA,wBAAA;CACA","file":"Panel.vue","sourcesContent":["<template>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\"\n          @click=\"toggleIsOpen()\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      isOpen: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      },\n      header: {\n        type: String\n      }\n    },\n    data() {\n      return {\n        height: 0\n      }\n    },\n    methods: {\n      toggleIsOpen() {\n        this.isOpen = !this.isOpen\n        this.$dispatch('isOpenEvent', this)\n      }\n    },\n    ready() {\n      const panel = this.$els.panel\n      panel.style.display = 'block'\n      this.height = panel.offsetHeight\n      panel.style.maxHeight = this.height + 'px'\n      if (!this.isOpen) panel.style.display = 'none'\n    }\n  }\n</script>\n\n<style>\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
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
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  ready: function ready() {
	    var panel = this.$els.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    panel.style.maxHeight = this.height + 'px';
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
	//     <div class="panel-heading">
	//       <h4 class="panel-title">
	//         <a class="accordion-toggle"
	//           @click="toggleIsOpen()">
	//            {{ header }}
	//         </a>
	//       </h4>
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
/* 312 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\"\n          @click=\"toggleIsOpen()\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"accordion\">\n    <h3 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion 手风琴</a></h3>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion :one-at-atime=\"checked\">\n        <panel header=\"Panel #1\" :is-open=\"true\">\n          内容一\n        </panel>\n        <panel header=\"Panel #2\">\n          内容二\n        </panel>\n        <panel header=\"Panel #3\">\n          内容三\n        </panel>\n        <panel header=\"Panel #4\">\n          内容四\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n\n<accordion :one-at-atime=\"checked\">\n  <panel header=\"Panel #1\" :is-open=\"true\">\n    ...\n  </panel>\n  <panel header=\"Panel #2\">\n    ...\n  </panel>\n  <panel header=\"Panel #3\">\n    ...\n  </panel>\n  <panel header=\"Panel #4\">\n    ...\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(315)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/popoverDocs.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/popoverDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(316);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	
	  components: {
	    popover: _Popover2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="popover">
	//     <h3 class="page-header"><a href="#popover" class="anchor">Popover 气泡</a></h3>
	//     <div class="bs-example">
	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="top">
	//         <button class="btn btn-default ">Popover on top</button>
	//       </popover>
	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="left">
	//         <button class="btn btn-default ">Popover on left</button>
	//       </popover>
	//       <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="right">
	//         <button class="btn btn-default ">Popover on right</button>
	//       </popover>
	//       <popover effect="fade" placement="bottom" :header="true" title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default ">Popover on bottom</button>
	//       </popover>
	//       <hr>
	//       <h4>No title</h4>
	//       <popover effect="fade"  title="Title" content="Lorem ipsum dolor sit amet" placement="top">
	//         <button class="btn btn-default ">Popover on top</button>
	//       </popover>
	//       <popover effect="fade"  title="Title" content="Lorem ipsum dolor sit amet" placement="left">
	//         <button class="btn btn-default ">Popover on left</button>
	//       </popover>
	//       <popover effect="fade"  title="Title" content="Lorem ipsum dolor sit amet" placement="right">
	//         <button class="btn btn-default ">Popover on right</button>
	//       </popover>
	//       <popover effect="fade" placement="bottom"  title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default ">Popover on bottom</button>
	//       </popover>
	//       <hr>
	//       <h4>Triger</h4>
	//       <p>
	//         <popover effect="scale"  title="Title" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">
	//             <button class="btn btn-default ">Mouseenter</button>
	//         </popover>
	//       </p>
	//       <popover effect="scale"
	//       title="Title" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </popover>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <popover
	//   effect="fade"
	//   placement="bottom"
	//   title="Title"
	//   content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="btn btn-default ">Popover on bottom</button>
	// </popover>
	// </script></code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>trigger</td>
	//         <td><code>String</code>, one of <code>click</code>
	//         <code>focus</code>
	//         <code>hover</code></td>
	//         <td><code>click</code></td>
	//         <td>How the popover is triggered.</td>
	//       </tr>
	//       <tr>
	//         <td>effect</td>
	//         <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>
	//         <td><code>fade</code></td>
	//         <td></td>
	//       </tr>
	//       <tr>
	//         <td>title</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td></td>
	//       </tr>
	//       <tr>
	//         <td>content</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td></td>
	//       </tr>
	//       <tr>
	//         <td>header</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>true</code></td>
	//         <td>Whether to show the header.</td>
	//       </tr>
	//       <tr>
	//         <td>placement</td>
	//         <td><code>String</code>, one of <code>top</code>
	//         <code>left</code>
	//         <code>right</code>
	//         <code>bottom</code></td>
	//         <td></td>
	//         <td>How to position the popover.</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(317)
	__vue_script__ = __webpack_require__(319)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(320)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(318);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  -webkit-animation:scale-in 0.15s ease-in;\n          animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  -webkit-animation:scale-out 0.15s ease-out;\n          animation:scale-out 0.15s ease-out;\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n\n\n", "", {"version":3,"sources":["/./src/components/Popover.vue?4403645d"],"names":[],"mappings":";AA8BA;;EAEA,eAAA;CACA;AACA;EACA,yCAAA;UAAA,iCAAA;CACA;AACA;EACA,2CAAA;UAAA,mCAAA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA;AATA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;EACA;IACA,4BAAA;YAAA,oBAAA;IACA,WAAA;GACA;CACA","file":"Popover.vue","sourcesContent":["<template>\n  <span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"popover\"\n    v-bind:class=\"{\n    'top':placement === 'top',\n    'left':placement === 'left',\n    'right':placement === 'right',\n    'bottom':placement === 'bottom'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n      <div class=\"popover-content\">\n        {{{content}}}\n      </div>\n  </div>\n</template>\n\n<script>\nimport PopoverMixin from './popoverMixins.js'\n  export default {\n    mixins: [PopoverMixin]\n  }\n</script>\n<style>\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n\n\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(231);
	
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
	//
	//
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
/* 320 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"popover\"\n  v-bind:class=\"{\n  'top':placement === 'top',\n  'left':placement === 'left',\n  'right':placement === 'right',\n  'bottom':placement === 'bottom'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\">\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n    <div class=\"popover-content\">\n      {{{content}}}\n    </div>\n</div>\n";

/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"popover\">\n    <h3 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover 气泡</a></h3>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">Popover on bottom</button>\n</popover>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(323)
	__vue_script__ = __webpack_require__(325)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tabsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(335)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/tabsDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(324);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.example-title {\n  margin: 20px 0;\n}\n", "", {"version":3,"sources":["/./docs/example/tabsDocs.vue?2806405e"],"names":[],"mappings":";AA4JA;EACA,eAAA;CACA","file":"tabsDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"tabs\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs 标签页</a></h3>\n    <div class=\"bs-example\">\n    <h4 class=\"example-title\">基础型</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">Tab数量较多的情况</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">选项卡型</h4>\n      <tabs >\n        <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"系统短信签名\">\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab 选项 (非 TABS)</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>Whether tab is clickable and can be activated. </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</template>\n\n<script>\n  // import Tabs from 'src/components/Tabset/'\n  // const {Tab} = Tabs\n  import Tabs from 'src/components/Tabset'\n  import Tab from 'src/components/Tab'\n  export default {\n    data () {\n      return {\n        tabType: \"base\"\n      }\n    },\n    components: {\n      Tabs,\n      Tab\n    }\n  }\n</script>\n\n<style>\n  .example-title {\n    margin: 20px 0;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(326);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(330);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="tabs">
	//     <h3 class="page-header"><a href="#tabs" class="anchor">Tabs 标签页</a></h3>
	//     <div class="bs-example">
	//     <h4 class="example-title">基础型</h4>
	//       <tabs :base="true">
	//         <tab header="系统短信签名">
	//           <p>
	//             选项卡一内容
	//           </p>
	//         </tab>
	//         <tab header="推广短信签名">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="被禁用的" disabled>
	//           ...
	//         </tab>
	//       </tabs>
	//       <br><br>
	//       <h4 class="example-title">Tab数量较多的情况</h4>
	//       <tabs :base="true">
	//         <tab header="系统短信签名">
	//           <p>
	//             选项卡一内容
	//           </p>
	//         </tab>
	//         <tab header="推广短信签名">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="被禁用的" disabled>
	//           ...
	//         </tab>
	//         <tab header="推广短信签名系统短信签名啊啊啊啊啊啊啊啊">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="系统短信签名啊啊啊啊啊啊啊啊">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//       </tabs>
	//       <br><br>
	//       <h4 class="example-title">选项卡型</h4>
	//       <tabs >
	//         <tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
	//           <p>
	//             选项卡一内容
	//           </p>
	//         </tab>
	//         <tab header="推广短信签名">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="被禁用的" disabled>
	//           ...
	//         </tab>
	//         <tab header="被禁用的" disabled>
	//           ...
	//         </tab>
	//         <tab header="推广短信签名">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="推广短信签名">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="被禁用的" disabled>
	//           ...
	//         </tab>
	//         <tab header="推广短信签名">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//         <tab header="推广短信签名">
	//            <p>
	//               选项卡二内容
	//            </p>
	//         </tab>
	//       </tabs>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <tabs>
	//   <tab header="系统短信签名">
	//     ...
	//   </tab>
	//   <tab header="推广短信签名">
	//     ...
	//   </tab>
	//   <tab header="被禁用的" disabled>
	//     ...
	//   </tab>
	// </tabs>
	// </script></code></pre>
	//   <h2>Tab 选项 (非 TABS)</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>header</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>Heading text of the tab.</td>
	//       </tr>
	//       <tr>
	//         <td>disabled</td>
	//         <td><code>Boolean</code></td>
	//         <td>false</td>
	//         <td>Whether tab is clickable and can be activated. </td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>
	// import Tabs from 'src/components/Tabset/'
	// const {Tab} = Tabs
	exports.default = {
	  data: function data() {
	    return {
	      tabType: "base"
	    };
	  },
	
	  components: {
	    Tabs: _Tabset2.default,
	    Tab: _Tab2.default
	  }
	};
	// </script>
	//
	// <style>
	//   .example-title {
	//     margin: 20px 0;
	//   }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(327)
	__vue_script__ = __webpack_require__(328)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(329)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tabset.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 327 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 328 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="navWrapper">
	//     <span v-if="renderData.length > showLen " class="arrow-prev" @click="prev">&lt;</span>
	//     <!-- Nav tabs -->
	//      <ul :class="{
	//       'nav': true,
	//       'nav-tabs': (!base),
	//       'nav-base': (base)}" role="tablist">
	//             <li
	//                 v-for="r in renderData"
	//                 v-bind:class="{
	//                   'active': ($index === active),
	//                   'disabled': r.disabled
	//                 }"
	//                 @click.prevent="handleTabListClick($index, r)"
	//                 :disabled="r.disabled"
	//             >
	//                 <a href="#">{{{r.header}}}</a>
	//             </li>
	//      </ul>
	//     <span v-if="renderData.length > showLen" class="arrow-next" @click="next">&gt;</span>
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
	
	      dom.style.width = self.wrapperWidth + 'px';
	      self.$el.style.visibility = 'visible';
	    }
	  },
	
	  compiled: function compiled() {
	    this.$el.style.visibility = 'hidden';
	  },
	  ready: function ready() {
	    var self = this;
	    /**
	     * 动态去设置容器navWrapper的宽度以及内部nav的宽度，以便让它不溢出，类似于轮播图。
	     * 这里需要用setTimeout函数，否则获取不到dom节点。
	     */
	    setTimeout(function () {
	      self._handleTabWidth();
	    }, 30);
	  }
	};

	// </script>
	//
	// <style lang="less" scoped>
	//   .navWrapper {
	//     position: relative;
	//     display: inline-block;
	//     vertical-align: middle;
	//     overflow: hidden;
	//     padding-left: 20px;
	//     padding-right: 40px;
	//     box-sizing: content-box;
	//
	//     .arrow-next ,.arrow-prev {
	//       position: absolute;
	//       top: -2px;
	//       z-index:10;
	//       cursor: pointer;
	//       display: inline-block;
	//       width: 20px;
	//       height: 54px;
	//       line-height: 54px;
	//       text-align: center;
	//       background-color: #fff;
	//     }
	//
	//     .arrow-prev {
	//       left: 0;
	//     }
	//
	//     .arrow-next {
	//       right: -6px;
	//     }
	//
	//   }
	//   .nav-tabs {
	//     margin-bottom: 15px
	//   }
	//
	//   .nav-scroll {
	//     max-width: 99999px;
	//     overflow: hidden;
	//   }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 329 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"navWrapper\" _v-149b3b9e=\"\">\n  <span v-if=\"renderData.length > showLen \" class=\"arrow-prev\" @click=\"prev\" _v-149b3b9e=\"\">&lt;</span>\n  <!-- Nav tabs -->\n   <ul :class=\"{\n    'nav': true,\n    'nav-tabs': (!base),\n    'nav-base': (base)}\" role=\"tablist\" _v-149b3b9e=\"\">\n          <li v-for=\"r in renderData\" v-bind:class=\"{\n                'active': ($index === active),\n                'disabled': r.disabled\n              }\" @click.prevent=\"handleTabListClick($index, r)\" :disabled=\"r.disabled\" _v-149b3b9e=\"\">\n              <a href=\"#\" _v-149b3b9e=\"\">{{{r.header}}}</a>\n          </li>\n   </ul>\n  <span v-if=\"renderData.length > showLen\" class=\"arrow-next\" @click=\"next\" _v-149b3b9e=\"\">&gt;</span>\n\n   <!-- Tab panes -->\n   <div class=\"tab-content\" v-el:tab-content=\"\" _v-149b3b9e=\"\">\n      <slot _v-149b3b9e=\"\"></slot>\n   </div>\n</div>\n\n";

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(331)
	__vue_script__ = __webpack_require__(333)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(334)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(332);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(133)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-300001c1&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-300001c1&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(132)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content > .tab-pane[_v-300001c1] {\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/components/Tab.vue?15b01c3e"],"names":[],"mappings":";AA0DA;EACA,eAAA;CACA","file":"Tab.vue","sourcesContent":["<template>\n  <div role=\"tabpanel\" class=\"tab-pane\"\n      v-bind:class=\"{hide:!show}\"\n      v-show=\"show\"\n      :transition=\"transition\"\n  >\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nimport coerceBoolean from './utils/coerceBoolean.js'\n\n  export default {\n    props: {\n      header: {\n        type: String\n      },\n      disabled: {\n        type: Boolean,\n        coerce: coerceBoolean,\n        default: false\n      }\n    },\n    data() {\n      return {\n        index: 0,\n        show: false\n      }\n    },\n    computed: {\n      show() {\n        return (this.$parent.active == this.index);\n      },\n      transition() {\n        return this.$parent.effect\n      }\n    },\n    created() {\n      this.$parent.renderData.push({\n        header: this.header,\n        disabled: this.disabled\n      })\n    },\n    ready() {\n        for (var c in this.$parent.$children)\n        {\n            if (this.$parent.$children[c].$el == this.$el)\n            {\n                this.index= c;\n                break;\n            }\n        }\n    }\n  }\n</script>\n\n<style scoped>\n  .tab-content > .tab-pane {\n    display: block;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
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
/* 334 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"tab-pane\" v-bind:class=\"{hide:!show}\" v-show=\"show\" :transition=\"transition\" _v-300001c1=\"\">\n  <slot _v-300001c1=\"\"></slot>\n</div>\n";

/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tabs\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs 标签页</a></h3>\n    <div class=\"bs-example\">\n    <h4 class=\"example-title\">基础型</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">Tab数量较多的情况</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">选项卡型</h4>\n      <tabs >\n        <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"系统短信签名\">\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab 选项 (非 TABS)</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>Whether tab is clickable and can be activated. </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(337)
	__vue_script__ = __webpack_require__(338)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/stepsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(347)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/stepsDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 337 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Steps = __webpack_require__(339);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Step = __webpack_require__(344);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="steps">
	//     <h3 class="page-header"><a href="#steps" class="anchor">Steps 步骤条</a></h3> 
	//     <div class="bs-example">
	//         <h4 class="example-title">基础型</h4>
	//         <steps :current="current">
	//             <step title="已完成"></step>
	//             <step title="进行中" ></step>
	//             <step title="有一个待运行"></step>
	//             <step title="待运行"></step>
	//         </steps>
	//         <br><br>
	//         <h4 class="example-title">带文字描述</h4>
	//         <steps :current="current">
	//             <step title="已完成" description="这里是多信息"></step>
	//             <step title="进行中" description="这里是多信息的耶哦"></step>
	//             <step title="有一个待运行" description="描述啊描述啊"></step>
	//             <step title="待运行" description="这里是多信息的描述啊"></step>
	//         </steps>
	//         <br>
	//         <button type="button" class="btn default primary" @click="_next">next</button>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <steps :current="current">
	//     <step title="已完成"></step>
	//     <step title="进行中" ></step>
	//     <step title="有一个待运行"></step>
	//     <step title="待运行"></step>
	// </steps>
	// <steps :current="current">
	//     <step title="已完成" description="这里是多信息"></step>
	//     <step title="进行中" description="这里是多信息的耶哦"></step>
	//     <step title="有一个待运行" description="描述啊描述啊"></step>
	//     <step title="待运行" description="这里是多信息的描述啊"></step>
	// </steps>
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <h4 style="margin: 20px 0;">Steps</h4>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>参数</th>
	//         <th>类型</th>
	//         <th>默认值</th>
	//         <th>说明</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>current</td>
	//         <td>Number</td>
	//         <td>0</td>
	//         <td>当前正在执行的步骤数，可以通过status属性覆盖状态</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   <h4 style="margin: 20px 0;">Steps step</h4>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>参数</th>
	//         <th>类型</th>
	//         <th>默认值</th>
	//         <th>说明</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>title</td>
	//         <td>String</td>
	//         <td>无</td>
	//         <td>标题</td>
	//       </tr>
	//       <tr>
	//         <td>description</td>
	//         <td>String</td>
	//         <td>无</td>
	//         <td>步骤的详情描述</td>
	//       </tr>
	//       <tr>
	//         <td>status</td>
	//         <td>String</td>
	//         <td>无</td>
	//         <td>执行step的状态，当不设置此属性时，父组件Steps会自动根据current来设置对应status,（可选值wait, process, finish）</td>
	//       </tr>
	//     </tbody>
	//   </table>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      current: 0
	    };
	  },
	
	  components: {
	    Steps: _Steps2.default,
	    Step: _Step2.default
	  },
	  methods: {
	    _next: function _next() {
	      if (this.current === 3) {
	        this.current = 0;
	        return;
	      }
	      this.current++;
	    }
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .badge-count-example, .badge-dot-example {
	//     width: 42px;
	//     height: 42px;
	//     background-color: #eee;
	//     display: inline-block;
	//     border-radius: 6px;
	//   }
	//   .example-title {
	//     margin: 20px 0;
	//   }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Steps = __webpack_require__(340);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Step = __webpack_require__(344);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Steps2.default.Step = _Step2.default;
	
	exports.default = _Steps2.default;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(341)
	__vue_script__ = __webpack_require__(342)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(343)
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
/* 341 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 342 */
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
	
				this.$el.children[len].style.position = 'absolute';
	
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
				var dw = Math.floor((this.previousStepsWidth - tw) / len) - 1;
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
	//
	// <style lang="less">
	//
	// </style>
	//

	/* generated by vue-loader */

/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"steps\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(345)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(346)
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
/* 345 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="step" :class="{
	// 		'step-status-process': (status === 'process'),
	// 		'step-status-finish': (status === 'finish'),
	// 		'step-status-wait': (status === 'wait'),
	// 		'step-item-last': lastStep}" :style="{'width': tailWidth}">
	// 		<div v-if="!lastStep" class="step-tail"><i></i></div>
	// 		<div class="step-head">
	// 			<div class="step-head-inner">
	// 				<span v-if="status !== 'finish'" class="step-icon">{{ stepNumber }}</span>
	// 				<span v-else class="step-finish-icon"></span>
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
	exports.default = {
		props: {
			title: String,
			description: String,
			status: String,
			stepNumber: Number,
			lastStep: Boolean,
			tailWidth: String
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 346 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"step\" :class=\"{\n\t'step-status-process': (status === 'process'),\n\t'step-status-finish': (status === 'finish'),\n\t'step-status-wait': (status === 'wait'),\n\t'step-item-last': lastStep}\" :style=\"{'width': tailWidth}\">\n\t<div v-if=\"!lastStep\" class=\"step-tail\"><i></i></div>\n\t<div class=\"step-head\">\n\t\t<div class=\"step-head-inner\">\n\t\t\t<span v-if=\"status !== 'finish'\" class=\"step-icon\">{{ stepNumber }}</span>\n\t\t\t<span v-else class=\"step-finish-icon\"></span>\n\t\t</div>\n\t</div>\n\t<div class=\"step-main\">\n\t\t<div class=\"step-main-title\">{{ title }}</div>\n\t\t<div class=\"step-main-description\">{{ description }}</div>\n\t</div>\n</div>\n";

/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"steps\">\n    <h3 class=\"page-header\"><a href=\"#steps\" class=\"anchor\">Steps 步骤条</a></h3>  \n    <div class=\"bs-example\">\n        <h4 class=\"example-title\">基础型</h4>\n        <steps :current=\"current\">\n            <step title=\"已完成\"></step>\n            <step title=\"进行中\" ></step>\n            <step title=\"有一个待运行\"></step>\n            <step title=\"待运行\"></step>\n        </steps>\n        <br><br>\n        <h4 class=\"example-title\">带文字描述</h4>\n        <steps :current=\"current\">\n            <step title=\"已完成\" description=\"这里是多信息\"></step>\n            <step title=\"进行中\" description=\"这里是多信息的耶哦\"></step>\n            <step title=\"有一个待运行\" description=\"描述啊描述啊\"></step>\n            <step title=\"待运行\" description=\"这里是多信息的描述啊\"></step>\n        </steps>\n        <br>\n        <button type=\"button\" class=\"btn default primary\" @click=\"_next\">next</button>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<steps :current=\"current\">\n    <step title=\"已完成\"></step>\n    <step title=\"进行中\" ></step>\n    <step title=\"有一个待运行\"></step>\n    <step title=\"待运行\"></step>\n</steps>\n<steps :current=\"current\">\n    <step title=\"已完成\" description=\"这里是多信息\"></step>\n    <step title=\"进行中\" description=\"这里是多信息的耶哦\"></step>\n    <step title=\"有一个待运行\" description=\"描述啊描述啊\"></step>\n    <step title=\"待运行\" description=\"这里是多信息的描述啊\"></step>\n</steps>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">Steps</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>current</td>\n        <td>Number</td>\n        <td>0</td>\n        <td>当前正在执行的步骤数，可以通过status属性覆盖状态</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">Steps step</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td>String</td>\n        <td>无</td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>description</td>\n        <td>String</td>\n        <td>无</td>\n        <td>步骤的详情描述</td>\n      </tr>\n      <tr>\n        <td>status</td>\n        <td>String</td>\n        <td>无</td>\n        <td>执行step的状态，当不设置此属性时，父组件Steps会自动根据current来设置对应status,（可选值wait, process, finish）</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(349)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/menuDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(360)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/menuDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _menu = __webpack_require__(350);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SubMenu = _menu2.default.SubMenu; // <template>
	//   <div class="bs-docs-section" id="menu">
	//     <h3 class="page-header"><a href="#menu" class="anchor">Menu 菜单</a></h3>
	//     <div class="bs-example">
	//     <menu>
	//       <menu-item>菜单1</menu-item>
	//       <sub-menu title="子导航1">
	//         <menu-item><a href="http://www.taobao.com" target="_blank">淘宝</a></menu-item>
	//         <menu-item><a href="http://www.tmall.com" target="_blank">天猫</a></menu-item>
	//         <menu-item><a href="http://www.alipay.com" target="_blank">支付宝</a></menu-item>
	//       </sub-menu>
	//       <sub-menu title="子导航2">
	//         <menu-item>子导航21</menu-item>
	//         <menu-item>子导航22</menu-item>
	//         <menu-item>子导航23</menu-item>
	//       </sub-menu>
	//     </menu>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <menu>
	//   <menu-item>菜单1</menu-item>
	//   <sub-menu title="子导航1">
	//     <menu-item><a href="http://www.taobao.com" target="_blank">淘宝</a></menu-item>
	//     <menu-item><a href="http://www.tmall.com" target="_blank">天猫</a></menu-item>
	//     <menu-item><a href="http://www.alipay.com" target="_blank">支付宝</a></menu-item>
	//   </sub-menu>
	//   <sub-menu title="子导航2">
	//     <menu-item>子导航21</menu-item>
	//     <menu-item>子导航22</menu-item>
	//     <menu-item>子导航23</menu-item>
	//   </sub-menu>
	// </menu>
	//   </script></code></pre>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>title</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>标题</td>
	//       </tr>
	//       <tr>
	//         <td>width</td>
	//         <td><code>Number, String or null</code></td>
	//         <td><code>null</code></td>
	//         <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>
	//       </tr>
	//       <tr>
	//         <td>callback</td>
	//         <td><code>Function</code></td>
	//         <td></td>
	//         <td>当点击主要按钮时触发的回调.</td>
	//       </tr>
	//       <tr>
	//         <td>large</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>大的弹窗</td>
	//       </tr>
	//       <tr>
	//         <td>small</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>小的弹窗</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>
	
	var MenuItem = _menu2.default.MenuItem;
	exports.default = {
	  data: function data() {
	    return {
	      showModal: false,
	      fadeModal: false,
	      zoomModal: false,
	      showCustomModal: false,
	      largeModal: false,
	      smallModal: false
	    };
	  },
	
	  components: { Menu: _menu2.default, SubMenu: SubMenu, MenuItem: MenuItem }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Menu = __webpack_require__(351);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(354);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(357);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Divider from './Divider.vue'
	
	_Menu2.default.SubMenu = _SubMenu2.default;
	_Menu2.default.MenuItem = _MenuItem2.default;
	// Menu.Divider = Divider

	exports.default = _Menu2.default;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(352)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/menu/Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(353)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/menu/Menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
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
/* 353 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"vue-menu\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(355)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/menu/SubMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(356)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/menu/SubMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(151);
	
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
/* 356 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"vue-sub-menu-title\" @click=\"triggerSub\">{{title}}</div>\n<ul class=\"vue-sub-menu panel-collapse collapse-transition\" v-show=\"isOpen\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(358)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/menu/MenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(359)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/menu/MenuItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 358 */
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
/* 359 */
/***/ function(module, exports) {

	module.exports = "\n<li\n  role=\"menuitem\"\n  :style=\"style\"\n  :title=\"title\"\n  @click=\"onSelect\">\n  <slot></slot>\n</li>\n";

/***/ },
/* 360 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"menu\">\n    <h3 class=\"page-header\"><a href=\"#menu\" class=\"anchor\">Menu 菜单</a></h3>\n    <div class=\"bs-example\">\n    <menu>\n      <menu-item>菜单1</menu-item>\n      <sub-menu title=\"子导航1\">\n        <menu-item><a href=\"http://www.taobao.com\" target=\"_blank\">淘宝</a></menu-item>\n        <menu-item><a href=\"http://www.tmall.com\" target=\"_blank\">天猫</a></menu-item>\n        <menu-item><a href=\"http://www.alipay.com\" target=\"_blank\">支付宝</a></menu-item>\n      </sub-menu>\n      <sub-menu title=\"子导航2\">\n        <menu-item>子导航21</menu-item>\n        <menu-item>子导航22</menu-item>\n        <menu-item>子导航23</menu-item>\n      </sub-menu>\n    </menu>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<menu>\n  <menu-item>菜单1</menu-item>\n  <sub-menu title=\"子导航1\">\n    <menu-item><a href=\"http://www.taobao.com\" target=\"_blank\">淘宝</a></menu-item>\n    <menu-item><a href=\"http://www.tmall.com\" target=\"_blank\">天猫</a></menu-item>\n    <menu-item><a href=\"http://www.alipay.com\" target=\"_blank\">支付宝</a></menu-item>\n  </sub-menu>\n  <sub-menu title=\"子导航2\">\n    <menu-item>子导航21</menu-item>\n    <menu-item>子导航22</menu-item>\n    <menu-item>子导航23</menu-item>\n  </sub-menu>\n</menu>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number, String or null</code></td>\n        <td><code>null</code></td>\n        <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>当点击主要按钮时触发的回调.</td>\n      </tr>\n      <tr>\n        <td>large</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>大的弹窗</td>\n      </tr>\n      <tr>\n        <td>small</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>小的弹窗</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(362)
	__vue_script__ = __webpack_require__(363)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/breadcrumbDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(370)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/breadcrumbDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 362 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Breadcrumb = __webpack_require__(364);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(367);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="breadcrumb">
	//     <h3 class="page-header"><a href="#breadcrumb" class="anchor">Breadcrumb 面包屑</a></h3> 
	//     <div class="bs-example">
	//       <h4 class="example-title">基本样式</h4>
	//       <breadcrumb>
	//         <breadcrumb-item :href="href">一级类目</breadcrumb-item>
	//         <breadcrumb-item :href="href">二级类目</breadcrumb-item>
	//         <breadcrumb-item>三级类目</breadcrumb-item>
	//       </breadcrumb>
	//       <h4 class="example-title">分隔符样式（选用）</h4>
	//       <breadcrumb slash="&gt;">
	//         <breadcrumb-item :href="href">一级类目</breadcrumb-item>
	//         <breadcrumb-item :href="href">二级类目</breadcrumb-item>
	//         <breadcrumb-item :href="href">三级类目</breadcrumb-item>
	//         <breadcrumb-item>四级类目</breadcrumb-item>
	//       </breadcrumb>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <breadcrumb>
	//   <breadcrumb-item :href="href">一级类目</breadcrumb-item>
	//   <breadcrumb-item :href="href">二级类目</breadcrumb-item>
	//   <breadcrumb-item>三级类目</breadcrumb-item>
	// </breadcrumb>
	// <breadcrumb slash="&gt;">
	//   <breadcrumb-item :href="href">一级类目</breadcrumb-item>
	//   <breadcrumb-item :href="href">二级类目</breadcrumb-item>
	//   <breadcrumb-item :href="href">三级类目</breadcrumb-item>
	//   <breadcrumb-item>四级类目</breadcrumb-item>
	// </breadcrumb>
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <h4 style="margin: 20px 0;">Breadcrumb</h4>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>参数</th>
	//         <th>类型</th>
	//         <th>默认值</th>
	//         <th>说明</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>slash</td>
	//         <td>String</td>
	//         <td>/</td>
	//         <td>每一级类目之间的分隔符</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   <h4 style="margin: 20px 0;">BreadcrumbItem</h4>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>参数</th>
	//         <th>类型</th>
	//         <th>默认值</th>
	//         <th>说明</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>href</td>
	//         <td>String</td>
	//         <td>无</td>
	//         <td>链接，如果不传则不可点击</td>
	//       </tr>
	//     </tbody>
	//   </table>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      href: 'http://www.taobao.com'
	    };
	  },
	
	  components: {
	    breadcrumb: _Breadcrumb2.default,
	    breadcrumbItem: _BreadcrumbItem2.default
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .badge-count-example, .badge-dot-example {
	//     width: 42px;
	//     height: 42px;
	//     background-color: #eee;
	//     display: inline-block;
	//     border-radius: 6px;
	//   }
	//   .example-title {
	//     margin: 20px 0;
	//   }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(365)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(366)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 365 */
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
/* 366 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"breadcrumbs\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(368)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/BreadcrumbItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(369)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/BreadcrumbItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 368 */
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
/* 369 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"breadcrumb\">\n\t<a v-if=\"href\" :href=\"href\" class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</a>\n\t<span v-else class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</span>\n\t<span class=\"breadcrumb-slash\">{{ slash }}</span>\n</span>\n";

/***/ },
/* 370 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"breadcrumb\">\n    <h3 class=\"page-header\"><a href=\"#breadcrumb\" class=\"anchor\">Breadcrumb 面包屑</a></h3>  \n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本样式</h4>\n      <breadcrumb>\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item>三级类目</breadcrumb-item>\n      </breadcrumb>\n      <h4 class=\"example-title\">分隔符样式（选用）</h4>\n      <breadcrumb slash=\"&gt;\">\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n        <breadcrumb-item>四级类目</breadcrumb-item>\n      </breadcrumb>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<breadcrumb>\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item>三级类目</breadcrumb-item>\n</breadcrumb>\n<breadcrumb slash=\"&gt;\">\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n  <breadcrumb-item>四级类目</breadcrumb-item>\n</breadcrumb>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">Breadcrumb</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>slash</td>\n        <td>String</td>\n        <td>/</td>\n        <td>每一级类目之间的分隔符</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">BreadcrumbItem</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>href</td>\n        <td>String</td>\n        <td>无</td>\n        <td>链接，如果不传则不可点击</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(372)
	__vue_script__ = __webpack_require__(373)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/paginationDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(388)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/paginationDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 372 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(374);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      totalPage: 100,
	      currPage: 10,
	      showJumper: true,
	      total: 100,
	      showSizeChanger: true
	    };
	  },
	
	  components: {
	    Pagination: _Pagination2.default
	  },
	  events: {
	    pageChange: function pageChange() {}
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .example-title {
	//     margin: 20px 0;
	//   }
	// </style>
	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="pagination">
	//     <h3 class="page-header"><a href="#pagination" class="anchor">pagination 翻页</a></h3> 
	//     <div class="bs-example">
	//       <h4 class="example-title">完全版</h4>
	//       <pagination :total-page.sync="totalPage",
	//                   :curr-page.sync="currPage",
	//                   :total="total",
	//                   :show-jumper="true",
	//                   :show-size-changer="true">
	//       </pagination>
	//       <h4 class="example-title">迷你版</h4>
	//       <pagination :total-page.sync="totalPage",
	//                   :curr-page.sync="currPage",
	//                   :total="total",
	//                   :show-jumper="true",
	//                   :mini="true">
	//       </pagination>
	//       <h4 class="example-title">精简版</h4>
	//       <pagination :total-page.sync="totalPage",
	//                   :curr-page.sync="currPage",
	//                   :total="total",
	//                   :simple="true">
	//       </pagination>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :show-size-changer="true"></pagination>
	// <pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :mini="true"></pagination>
	// <pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :simple="true"></pagination>
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <table class="table table-bordered">
	//     <thead>
	//       <tr>
	//         <th>参数</th>
	//         <th>类型</th>
	//         <th>默认值</th>
	//         <th>说明</th>
	//       </tr>
	//     </thead>
	//     <tbody>
	//       <tr>
	//         <td>total-page</td>
	//         <td>Number</td>
	//         <td>无</td>
	//         <td>总页数</td>
	//       </tr>
	//       <tr>
	//         <td>curr-page</td>
	//         <td>Number</td>
	//         <td>无</td>
	//         <td>当前页</td>
	//       </tr>
	//       <tr>
	//         <td>total</td>
	//         <td>Number</td>
	//         <td>无</td>
	//         <td>数据总条数</td>
	//       </tr>
	//       <tr>
	//         <td>show-jumper</td>
	//         <td>Boolean</td>
	//         <td>false</td>
	//         <td>是否开启跳转功能</td>
	//       </tr>
	//       <tr>
	//         <td>show-size-changer</td>
	//         <td>Boolean</td>
	//         <td>false</td>
	//         <td>是否开启修改每页条数功能</td>
	//       </tr>
	//       <tr>
	//         <td>simple</td>
	//         <td>Boolean</td>
	//         <td>false</td>
	//         <td>是否采用精简版样式</td>
	//       </tr>
	//       <tr>
	//         <td>mini</td>
	//         <td>Boolean</td>
	//         <td>false</td>
	//         <td>是否采用迷你版样式</td>
	//       </tr>
	//     </tbody>
	//   </table>
	// </template>
	//
	// <script>

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(375);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Jumper = __webpack_require__(377);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Pagination2.default.Jumper = _Jumper2.default;
	
	exports.default = _Pagination2.default;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(376)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(387)
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
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Jumper = __webpack_require__(377);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	var _Pager = __webpack_require__(381);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	var _Options = __webpack_require__(384);
	
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
	        single: {
	            type: Array,
	            default: ['10']
	        }
	    },
	    data: function data() {
	        return {
	            pageRange: [],
	            prevShow: 1,
	            nextShow: 1,
	            placeholder: '10 条/页'
	        };
	    },
	
	    watch: {
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
	                    this.pageRange.push({ text: '<', className: 'disabled' });
	                }
	
	                this.pageRange.push({ num: this.currPage, text: this.currPage, className: 'current' });
	                this.pageRange.push({ text: '/', className: 'slash' });
	                this.pageRange.push({ text: totalPage });
	
	                // 下一页
	                if (currPage != totalPage) {
	                    this.pageRange.push({ num: currPage + 1, text: '>', className: 'next' });
	                } else {
	                    this.pageRange.push({ text: '>', className: 'disabled' });
	                }
	            } else {
	                //上一页
	                if (currPage != 1) {
	                    this.pageRange.push({ num: currPage - 1, text: '<', className: 'prev' });
	                } else {
	                    this.pageRange.push({ text: '<', className: 'disabled' });
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
	                    this.pageRange.push({ text: '>', className: 'disabled' });
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
	            this.$dispatch('pageChange', pageNum, this.id);
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
	//     <div class="pagination" v-if="totalPage > 1">
	//         <Options :total="total" :single="single"  :placeholder="placeholder" :show-size-changer="showSizeChanger"></Options>
	//         <jumper
	//             :quick-go="showJumper ? _handleChange.bind(this) : null",
	//             :curr-page="currPage",
	//             :total-page="totalPage",
	//             :mini="mini"
	//         ></jumper>
	//         <pager :page-range="pageRange" :simple="simple"  :mini="mini" :page-click="pageClick"></pager>
	//     </div>
	// </template>
	// <script>

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(378)
	__vue_script__ = __webpack_require__(379)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Jumper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(380)
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
/* 378 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 379 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div v-if="quickGo" class="pagination-jump">
	// 	    <div class="input-jumper-wrap">
	// 		    跳至
	// 		    <input type="text" :value="_current" @change="_handleChange($event)" :class="{
	// 		    	'input-jumper': (!mini),
	// 		    	'mini-input-jumper': mini}"/>
	// 		    页
	// 	    </div>
	// 	  	<button type="button" class="btn tertiary" @click="_go" :class="{
	// 			'default': (!mini),
	// 			'small': mini}">
	// 		跳转</button>
	//   	</div>
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
/* 380 */
/***/ function(module, exports) {

	module.exports = "\n\t<div v-if=\"quickGo\" class=\"pagination-jump\">\n\t    <div class=\"input-jumper-wrap\">\n\t\t    跳至\n\t\t    <input type=\"text\" :value=\"_current\" @change=\"_handleChange($event)\" :class=\"{\n\t\t    \t'input-jumper': (!mini),\n\t\t    \t'mini-input-jumper': mini}\"/>\n\t\t    页\n\t    </div>\n\t  \t<button type=\"button\" class=\"btn tertiary\" @click=\"_go\" :class=\"{\n\t\t\t'default': (!mini),\n\t\t\t'small': mini}\">\n\t\t跳转</button>\n  \t</div>\n";

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(382)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pager.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(383)
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
/* 382 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	//     <ul :class="{'pagination-items':(!mini && !simple),
	//     			 'simple-pagination-items': (simple && !mini),
	//     			 'mini-pagination-items': (!simple && mini)}" >
	//         <li v-for="page in pageRange" @click="pageClick(page.num)" :class="{
	//         'current':(page.className==='current'),
	//         'pagination-item-prev':(page.className==='prev'),
	//         'pagination-item-next':(page.className==='next'),
	//         'pagination-item-disabled':(page.className==='disabled'),
	//         'pagination-item-ellipsis':(page.className==='ellipsis'),
	//         'pagination-item-slash':(page.className==='slash')}" class="pagination-item">
	//             {{page.text}}
	//         </li>
	//     </ul>
	// </template>
	//
	// <script>
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
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 383 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"{'pagination-items':(!mini && !simple),\n\t\t\t 'simple-pagination-items': (simple && !mini),\n\t\t\t 'mini-pagination-items': (!simple && mini)}\" >\n    <li v-for=\"page in pageRange\" @click=\"pageClick(page.num)\" :class=\"{\n    'current':(page.className==='current'),\n    'pagination-item-prev':(page.className==='prev'),\n    'pagination-item-next':(page.className==='next'),\n    'pagination-item-disabled':(page.className==='disabled'),\n    'pagination-item-ellipsis':(page.className==='ellipsis'),\n    'pagination-item-slash':(page.className==='slash')}\" class=\"pagination-item\">\n        {{page.text}}\n    </li>\n</ul>\n";

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(385)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(386)
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
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Select = __webpack_require__(198);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(203);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div v-if="showSizeChanger" class="pagination-selector">
	//         <v-select :value.sync="single" :placeholder="placeholder">
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
			single: {
				type: Array,
				default: []
			},
			placeholder: {
				type: String
			},
			showSizeChanger: {
				type: Boolean,
				default: false
			}
		},
	
		data: function data() {
			return {
				single: ['10']
			};
		},
	
		components: {
			vSelect: _Select2.default, vOption: _Option2.default
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 386 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizeChanger\" class=\"pagination-selector\">\n    <v-select :value.sync=\"single\" :placeholder=\"placeholder\">\n        <v-option value=\"10\">10 条/页</v-option>\n        <v-option value=\"20\">20 条/页</v-option>\n        <v-option value=\"30\">30 条/页</v-option>\n        <v-option value=\"40\">40 条/页</v-option>\n    </v-select>\n    <div class=\"pagination-totalpage\">共{{ total }}条数据</div>\n</div>\n";

/***/ },
/* 387 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pagination\" v-if=\"totalPage > 1\">\n    <Options :total=\"total\" :single=\"single\"  :placeholder=\"placeholder\" :show-size-changer=\"showSizeChanger\"></Options>\n    <jumper \n        :quick-go=\"showJumper ? _handleChange.bind(this) : null\",\n        :curr-page=\"currPage\",\n        :total-page=\"totalPage\",\n        :mini=\"mini\"\n    ></jumper>\n    <pager :page-range=\"pageRange\" :simple=\"simple\"  :mini=\"mini\" :page-click=\"pageClick\"></pager>\n</div>\n";

/***/ },
/* 388 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"pagination\">\n    <h3 class=\"page-header\"><a href=\"#pagination\" class=\"anchor\">pagination 翻页</a></h3>  \n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">完全版</h4>\n      <pagination :total-page.sync=\"totalPage\", \n                  :curr-page.sync=\"currPage\", \n                  :total=\"total\",\n                  :show-jumper=\"true\",\n                  :show-size-changer=\"true\">\n      </pagination>\n      <h4 class=\"example-title\">迷你版</h4>\n      <pagination :total-page.sync=\"totalPage\", \n                  :curr-page.sync=\"currPage\", \n                  :total=\"total\",\n                  :show-jumper=\"true\",\n                  :mini=\"true\">\n      </pagination>\n      <h4 class=\"example-title\">精简版</h4>\n      <pagination :total-page.sync=\"totalPage\", \n                  :curr-page.sync=\"currPage\", \n                  :total=\"total\",\n                  :simple=\"true\">\n      </pagination>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<pagination :total-page.sync=\"totalPage\" :curr-page.sync=\"currPage\" :total=\"total\" :show-jumper=\"true\" :show-size-changer=\"true\"></pagination>\n<pagination :total-page.sync=\"totalPage\" :curr-page.sync=\"currPage\" :total=\"total\" :show-jumper=\"true\" :mini=\"true\"></pagination>\n<pagination :total-page.sync=\"totalPage\" :curr-page.sync=\"currPage\" :total=\"total\" :simple=\"true\"></pagination>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>total-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>总页数</td>\n      </tr>\n      <tr>\n        <td>curr-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>当前页</td>\n      </tr>\n      <tr>\n        <td>total</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>数据总条数</td>\n      </tr>\n      <tr>\n        <td>show-jumper</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启跳转功能</td>\n      </tr>\n      <tr>\n        <td>show-size-changer</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启修改每页条数功能</td>\n      </tr>\n      <tr>\n        <td>simple</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用精简版样式</td>\n      </tr>\n      <tr>\n        <td>mini</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用迷你版样式</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(390)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/filters/phoneNumberDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(392)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/filters/phoneNumberDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _phoneNumber = __webpack_require__(391);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      number: '13291896699'
	    };
	  }
	};
	// </script>
	//

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="phoneNumber">
	//     <h3 class="page-header"><a href="#phoneNumber" class="anchor">手机号码格式化</a></h3>
	//     <div class="bs-example">
	//     <input type="text" v-model="number" />
	//     <div>{{number | phone-number}}</div>
	//     </div>
	//
	// <pre><code class="language-markup"><script type="language-mark-up">
	//
	// </script></code></pre>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 391 */
/***/ function(module, exports) {

	'use strict';
	
	// 13291895654 to 132 9189 5654
	Vue.filter('phoneNumber', function (number, searchKey) {
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
	});
	
	module.exports = {};

/***/ },
/* 392 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"phoneNumber\">\n    <h3 class=\"page-header\"><a href=\"#phoneNumber\" class=\"anchor\">手机号码格式化</a></h3>\n    <div class=\"bs-example\">\n    <input type=\"text\" v-model=\"number\" />\n    <div>{{number | phone-number}}</div>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n\n</script></code></pre>\n  </div>\n";

/***/ },
/* 393 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 394 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 401 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 402 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* **********************************************
	     Begin prism-core.js
	********************************************** */
	
	var _self = (typeof window !== 'undefined')
		? window   // if in browser
		: (
			(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
		);
	
	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */
	
	var Prism = (function(){
	
	// Private helper vars
	var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
	
	var _ = _self.Prism = {
		util: {
			encode: function (tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},
	
			type: function (o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},
	
			// Deep clone a language definition (e.g. to extend it)
			clone: function (o) {
				var type = _.util.type(o);
	
				switch (type) {
					case 'Object':
						var clone = {};
	
						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}
	
						return clone;
	
					case 'Array':
						// Check for existence for IE8
						return o.map && o.map(function(v) { return _.util.clone(v); });
				}
	
				return o;
			}
		},
	
		languages: {
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);
	
				for (var key in redef) {
					lang[key] = redef[key];
				}
	
				return lang;
			},
	
			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];
				
				if (arguments.length == 2) {
					insert = arguments[1];
					
					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}
					
					return grammar;
				}
				
				var ret = {};
	
				for (var token in grammar) {
	
					if (grammar.hasOwnProperty(token)) {
	
						if (token == before) {
	
							for (var newToken in insert) {
	
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}
	
						ret[token] = grammar[token];
					}
				}
				
				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});
	
				return root[inside] = ret;
			},
	
			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type) {
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object') {
							_.languages.DFS(o[i], callback);
						}
						else if (_.util.type(o[i]) === 'Array') {
							_.languages.DFS(o[i], callback, i);
						}
					}
				}
			}
		},
		plugins: {},
		
		highlightAll: function(async, callback) {
			var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1];
				grammar = _.languages[language];
			}
	
			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
	
			// Set language on the parent, for styling
			parent = element.parentNode;
	
			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
	
			var code = element.textContent;
	
			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};
	
			if (!code || !grammar) {
				_.hooks.run('complete', env);
				return;
			}
	
			_.hooks.run('before-highlight', env);
	
			if (async && _self.Worker) {
				var worker = new Worker(_.filename);
	
				worker.onmessage = function(evt) {
					env.highlightedCode = evt.data;
	
					_.hooks.run('before-insert', env);
	
					env.element.innerHTML = env.highlightedCode;
	
					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				};
	
				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
	
				_.hooks.run('before-insert', env);
	
				env.element.innerHTML = env.highlightedCode;
	
				callback && callback.call(element);
	
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			}
		},
	
		highlight: function (text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},
	
		tokenize: function(text, grammar, language) {
			var Token = _.Token;
	
			var strarr = [text];
	
			var rest = grammar.rest;
	
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}
	
				delete grammar.rest;
			}
	
			tokenloop: for (var token in grammar) {
				if(!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}
	
				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
	
				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						lookbehindLength = 0,
						alias = pattern.alias;
	
					pattern = pattern.pattern || pattern;
	
					for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop
	
						var str = strarr[i];
	
						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}
	
						if (str instanceof Token) {
							continue;
						}
	
						pattern.lastIndex = 0;
	
						var match = pattern.exec(str);
	
						if (match) {
							if(lookbehind) {
								lookbehindLength = match[1].length;
							}
	
							var from = match.index - 1 + lookbehindLength,
								match = match[0].slice(lookbehindLength),
								len = match.length,
								to = from + len,
								before = str.slice(0, from + 1),
								after = str.slice(to + 1);
	
							var args = [i, 1];
	
							if (before) {
								args.push(before);
							}
	
							var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias);
	
							args.push(wrapped);
	
							if (after) {
								args.push(after);
							}
	
							Array.prototype.splice.apply(strarr, args);
						}
					}
				}
			}
	
			return strarr;
		},
	
		hooks: {
			all: {},
	
			add: function (name, callback) {
				var hooks = _.hooks.all;
	
				hooks[name] = hooks[name] || [];
	
				hooks[name].push(callback);
			},
	
			run: function (name, env) {
				var callbacks = _.hooks.all[name];
	
				if (!callbacks || !callbacks.length) {
					return;
				}
	
				for (var i=0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};
	
	var Token = _.Token = function(type, content, alias) {
		this.type = type;
		this.content = content;
		this.alias = alias;
	};
	
	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}
	
		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}
	
		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};
	
		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}
	
		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}
	
		_.hooks.run('wrap', env);
	
		var attributes = '';
	
		for (var name in env.attributes) {
			attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
		}
	
		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
	
	};
	
	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
	 	// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code,
			    immediateClose = message.immediateClose;
	
			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	
		return _self.Prism;
	}
	
	// Get current script and highlight
	var script = document.getElementsByTagName('script');
	
	script = script[script.length - 1];
	
	if (script) {
		_.filename = script.src;
	
		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
	
	return _self.Prism;
	
	})();
	
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}
	
	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}
	
	
	/* **********************************************
	     Begin prism-markup.js
	********************************************** */
	
	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}
	
			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};
	
	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function(env) {
	
		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});
	
	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	
	
	/* **********************************************
	     Begin prism-css.js
	********************************************** */
	
	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};
	
	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});
		
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}
	
	/* **********************************************
	     Begin prism-clike.js
	********************************************** */
	
	Prism.languages.clike = {
		'comment': [
			{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}
		],
		'string': /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};
	
	
	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */
	
	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	});
	
	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'class-name', {
		'template-string': {
			pattern: /`(?:\\`|\\?[^`])*`/,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});
	
	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}
	
	Prism.languages.js = Prism.languages.javascript;
	
	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */
	
	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}
	
		self.Prism.fileHighlight = function() {
	
			var Extensions = {
				'js': 'javascript',
				'html': 'markup',
				'svg': 'markup',
				'xml': 'markup',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell'
			};
	
			if(Array.prototype.forEach) { // Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');
	
					var language, parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}
	
					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}
	
					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}
	
					var code = document.createElement('code');
					code.className = 'language-' + language;
	
					pre.textContent = '';
	
					code.textContent = 'Loading…';
	
					pre.appendChild(code);
	
					var xhr = new XMLHttpRequest();
	
					xhr.open('GET', src, true);
	
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {
	
							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;
	
								Prism.highlightElement(code);
							}
							else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							}
							else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};
	
					xhr.send(null);
				});
			}
	
		};
	
		self.Prism.fileHighlight();
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 403 */
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	
		if (typeof self === 'undefined' || !self.Prism || !self.document) {
			return;
		}
	
		// The languages map is built automatically with gulp
		var Languages = /*languages_placeholder[*/{ "css": "CSS", "clike": "C-like", "javascript": "JavaScript", "abap": "ABAP", "actionscript": "ActionScript", "apacheconf": "Apache Configuration", "apl": "APL", "applescript": "AppleScript", "aspnet": "ASP.NET (C#)", "autoit": "AutoIt", "autohotkey": "AutoHotkey", "basic": "BASIC", "csharp": "C#", "cpp": "C++", "coffeescript": "CoffeeScript", "css-extras": "CSS Extras", "fsharp": "F#", "glsl": "GLSL", "http": "HTTP", "inform7": "Inform 7", "latex": "LaTeX", "lolcode": "LOLCODE", "matlab": "MATLAB", "mel": "MEL", "nasm": "NASM", "nginx": "nginx", "nsis": "NSIS", "objectivec": "Objective-C", "ocaml": "OCaml", "php": "PHP", "php-extras": "PHP Extras", "powershell": "PowerShell", "jsx": "React JSX", "rest": "reST (reStructuredText)", "sas": "SAS", "sass": "Sass (Sass)", "scss": "Sass (Scss)", "sql": "SQL", "typescript": "TypeScript", "vhdl": "VHDL", "vim": "vim", "wiki": "Wiki markup", "yaml": "YAML" } /*]*/;
		Prism.hooks.add('before-highlight', function (env) {
			var pre = env.element.parentNode;
			if (!pre || !/pre/i.test(pre.nodeName)) {
				return;
			}
			var language = Languages[env.language] || env.language.substring(0, 1).toUpperCase() + env.language.substring(1);
			pre.setAttribute('data-language', language);
		});
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=build-docs.js.map