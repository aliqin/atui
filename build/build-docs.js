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
	
	var _toConsumableArray2 = __webpack_require__(83);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _headerDocs = __webpack_require__(121);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _gettingStarted = __webpack_require__(126);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _gridDocs = __webpack_require__(128);
	
	var _gridDocs2 = _interopRequireDefault(_gridDocs);
	
	var _iconDocs = __webpack_require__(340);
	
	var _iconDocs2 = _interopRequireDefault(_iconDocs);
	
	var _buttonDocs = __webpack_require__(345);
	
	var _buttonDocs2 = _interopRequireDefault(_buttonDocs);
	
	var _buttonsDocs = __webpack_require__(348);
	
	var _buttonsDocs2 = _interopRequireDefault(_buttonsDocs);
	
	var _inputDocs = __webpack_require__(351);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _uploaderDocs = __webpack_require__(354);
	
	var _uploaderDocs2 = _interopRequireDefault(_uploaderDocs);
	
	var _formDocs = __webpack_require__(357);
	
	var _formDocs2 = _interopRequireDefault(_formDocs);
	
	var _switchDocs = __webpack_require__(360);
	
	var _switchDocs2 = _interopRequireDefault(_switchDocs);
	
	var _dropdownDocs = __webpack_require__(364);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _selectDocs = __webpack_require__(367);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _datepickerDocs = __webpack_require__(370);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _searchboxDocs = __webpack_require__(373);
	
	var _searchboxDocs2 = _interopRequireDefault(_searchboxDocs);
	
	var _messageDocs = __webpack_require__(376);
	
	var _messageDocs2 = _interopRequireDefault(_messageDocs);
	
	var _cascaderDocs = __webpack_require__(381);
	
	var _cascaderDocs2 = _interopRequireDefault(_cascaderDocs);
	
	var _modalDocs = __webpack_require__(384);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _tableDocs = __webpack_require__(387);
	
	var _tableDocs2 = _interopRequireDefault(_tableDocs);
	
	var _badgeDocs = __webpack_require__(390);
	
	var _badgeDocs2 = _interopRequireDefault(_badgeDocs);
	
	var _carouselDocs = __webpack_require__(394);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _Affix = __webpack_require__(257);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(397);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _spinDocs = __webpack_require__(399);
	
	var _spinDocs2 = _interopRequireDefault(_spinDocs);
	
	var _textareaDocs = __webpack_require__(402);
	
	var _textareaDocs2 = _interopRequireDefault(_textareaDocs);
	
	var _tagDocs = __webpack_require__(405);
	
	var _tagDocs2 = _interopRequireDefault(_tagDocs);
	
	var _tooltipDocs = __webpack_require__(409);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _accordionDocs = __webpack_require__(413);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(418);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _asideDocs = __webpack_require__(423);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _popoverDocs = __webpack_require__(426);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _tabsDocs = __webpack_require__(429);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _stepsDocs = __webpack_require__(434);
	
	var _stepsDocs2 = _interopRequireDefault(_stepsDocs);
	
	var _breadcrumbDocs = __webpack_require__(438);
	
	var _breadcrumbDocs2 = _interopRequireDefault(_breadcrumbDocs);
	
	var _paginationDocs = __webpack_require__(442);
	
	var _paginationDocs2 = _interopRequireDefault(_paginationDocs);
	
	var _phoneNumberDocs = __webpack_require__(446);
	
	var _phoneNumberDocs2 = _interopRequireDefault(_phoneNumberDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(450);
	__webpack_require__(336);
	__webpack_require__(337);
	__webpack_require__(338);
	__webpack_require__(451);
	__webpack_require__(452);
	//  基础类
	
	
	// 表单类
	
	// import progressbarDocs from './example/progressbar-docs.vue'
	// import typeaheadDocs from './example/typeaheadDocs.vue'
	
	// 展示类
	
	
	// 导航类
	
	// import menuDocs from './example/menuDocs.vue'
	
	
	// filters
	
	
	//widgets
	// import addressSelectDocs from './example/widgets/addressSelectDocs.vue'
	
	Vue.config.debug = true;
	
	new Vue({
	  el: '#wrapper',
	  components: {
	    gettingStarted: _gettingStarted2.default,
	    gridDocs: _gridDocs2.default,
	    iconDocs: _iconDocs2.default,
	    container: _container2.default,
	    affix: _Affix2.default,
	    buttonDocs: _buttonDocs2.default,
	    spinDocs: _spinDocs2.default,
	    inputDocs: _inputDocs2.default,
	    textareaDocs: _textareaDocs2.default,
	    uploaderDocs: _uploaderDocs2.default,
	    switchDocs: _switchDocs2.default,
	    formDocs: _formDocs2.default,
	    messageDocs: _messageDocs2.default,
	    cascaderDocs: _cascaderDocs2.default,
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
	    // typeaheadDocs,
	    // menuDocs,
	    searchboxDocs: _searchboxDocs2.default,
	    phoneNumberDocs: _phoneNumberDocs2.default
	  },
	  // addressSelectDocs
	  // addressSelectDocs:function(resolve) {
	  //   require(['./example/widgets/addressSelectDocs.vue'], resolve);
	  // }
	  data: function data() {
	    return {
	      elements: [],
	      components: [],
	      filters: [],
	      widgets: []
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
	    var widgets = document.querySelectorAll('.widgets .anchor');
	    this.elements = [].concat((0, _toConsumableArray3.default)(elements)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    this.components = [].concat((0, _toConsumableArray3.default)(components)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    this.filters = [].concat((0, _toConsumableArray3.default)(filters)).map(function (el) {
	      return el.innerHTML.replace(' ', '-');
	    });
	    this.widgets = [].concat((0, _toConsumableArray3.default)(widgets)).map(function (el) {
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
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(84);
	
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	__webpack_require__(110);
	module.exports = __webpack_require__(94).Array.from;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(87)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(90)(String, 'String', function(iterated){
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(88)
	  , defined   = __webpack_require__(89);
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
/* 88 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(91)
	  , $export        = __webpack_require__(92)
	  , redefine       = __webpack_require__(97)
	  , hide           = __webpack_require__(98)
	  , has            = __webpack_require__(103)
	  , Iterators      = __webpack_require__(104)
	  , $iterCreate    = __webpack_require__(105)
	  , setToStringTag = __webpack_require__(106)
	  , getProto       = __webpack_require__(99).getProto
	  , ITERATOR       = __webpack_require__(107)('iterator')
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
/* 91 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(93)
	  , core      = __webpack_require__(94)
	  , ctx       = __webpack_require__(95)
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
/* 93 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 94 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(96);
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
/* 96 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(99)
	  , createDesc = __webpack_require__(100);
	module.exports = __webpack_require__(101) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 99 */
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
/* 100 */
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(102)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(99)
	  , descriptor     = __webpack_require__(100)
	  , setToStringTag = __webpack_require__(106)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(98)(IteratorPrototype, __webpack_require__(107)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(99).setDesc
	  , has = __webpack_require__(103)
	  , TAG = __webpack_require__(107)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(108)('wks')
	  , uid    = __webpack_require__(109)
	  , Symbol = __webpack_require__(93).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(93)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(95)
	  , $export     = __webpack_require__(92)
	  , toObject    = __webpack_require__(111)
	  , call        = __webpack_require__(112)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(116)
	  , getIterFn   = __webpack_require__(117);
	$export($export.S + $export.F * !__webpack_require__(120)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(89);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(113);
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(114);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(104)
	  , ITERATOR   = __webpack_require__(107)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(88)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(118)
	  , ITERATOR  = __webpack_require__(107)('iterator')
	  , Iterators = __webpack_require__(104);
	module.exports = __webpack_require__(94).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(119)
	  , TAG = __webpack_require__(107)('toStringTag')
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
/* 119 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(107)('iterator')
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(122)
	__vue_script__ = __webpack_require__(124)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/headerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(125)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 122 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 123 */
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
/* 124 */
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
	//   <ul class="themes" id="J_header">
	//     <li v-for="theme in themes" :class="{active:theme.active}" :style="{backgroundColor:theme.color}" @click="changeTheme(theme.csslink,$event)">
	//     </li>
	//   </ul>
	// </template>
	// <style lang="less">
	//   .navbar-nav .active {
	//     background-color: #eee !important;
	//   }
	//   .themes{
	//     position: fixed;
	//     right:50px;
	//     top:50px;
	//     list-style: none;
	//     li{
	//       float:left;
	//       background:#ff7500;
	//       width:12px;
	//       height:12px;
	//       border-radius:100%;
	//       text-indent: -10000px;
	//       margin:0 5px;
	//       cursor: pointer;
	//       &.active{
	//         width:15px;
	//         height:15px;
	//       }
	//     }
	//   }
	// </style>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      themes: [{
	        name: '大鱼',
	        csslink: 'alidayu.css',
	        active: true,
	        color: '#00aaff'
	      }, {
	        name: '天猫网厅',
	        csslink: 'tmallwt.css',
	        active: false,
	        color: '#e52e2e'
	      }, {
	        name: '阿里通信',
	        csslink: 'alitx.css',
	        active: false,
	        color: '#ff7500'
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
/* 125 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"navbar navbar-top bs-docs-nav\" id=\"top\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"\" class=\"navbar-brand\">VueComponent</a>\n    </div>\n    <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"http://gitlab.alibaba-inc.com/aliqin/vue-component/\">\n          <span class=\"icon-github-circled\"></span>\n          GitLab\n        </a></li>\n        <li><a href=\"http://ued.aliqin.alibaba.net/webcompon/\" target=\"_blank\">\n          <span class=\"icon-github-circled\"></span>\n          视觉稿\n        </a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n<ul class=\"themes\" id=\"J_header\">\n  <li v-for=\"theme in themes\" :class=\"{active:theme.active}\" :style=\"{backgroundColor:theme.color}\" @click=\"changeTheme(theme.csslink,$event)\">\n  </li>\n</ul>\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(127)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"getting-started\">\n\n    <h2>安装方法：CommonJS</h2>\n    <pre><code class=\"language-javascript\">\n$ tnpm install @ali/vue-component --save-dev\n\n// css引入 alidayu or alitx or tmallwt\nimport '@ali/vue-component/dist/alidayu.css'\n\n// 或less引入\nimport '@ali/vue-component/style/themes/alidayu.less'\n\n// 引入组件\nimport { Alert } from '@ali/vue-component'\n\n// 如果没有使用rollup或webpak2.0，整个组件JS都会打包进去，使用如下方式可按需打包\nimport Alert from '@ali/vue-component/src/components/Alert'\n\nnew Vue({\n  components: {\n    Alert\n  }\n})\n    </code></pre>\n    <h3>浏览器引用</h3>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-component.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueComponent.alert\n&lt;/script&gt;\n    </code></pre>\n  </div>\n";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(129)
	__vue_script__ = __webpack_require__(132)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/gridDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(339)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gridDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./gridDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.grid-demo .row{\n  margin:5px 0;\n}\n.grid-demo .row > div{\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n  background: #99EAD8;\n  background-clip: content-box;\n}\n", ""]);
	
	// exports


/***/ },
/* 131 */
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var vRow = _src.Layout.Row; // <template>
	//   <div class="bs-docs-section" id="grid">
	//     <h3 class="page-header"><a href="#grid" class="anchor">Grid 栅格 </a></h3>
	//     <div class="bs-example">
	//       <div class="container grid-demo">
	//         <v-row>
	//           <v-col span="24">col-lg-24</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="23">col-lg-23</v-col>
	//           <v-col span="1">1</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="22">col-lg-22</v-col>
	//           <v-col span="2">2</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="21">col-lg-21</v-col>
	//           <v-col span="3">col-lg-3</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="20">col-lg-20</v-col>
	//           <v-col span="4">col-lg-4</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="19">col-lg-19</v-col>
	//           <v-col span="5">col-lg-5</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="18">col-lg-18</v-col>
	//           <v-col span="6">col-lg-6</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="17">col-lg-17</v-col>
	//           <v-col span="7">col-lg-7</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="16">col-lg-16</v-col>
	//           <v-col span="8">col-lg-8</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="15">col-lg-15</v-col>
	//           <v-col span="9">col-lg-9</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="14">col-lg-14</v-col>
	//           <v-col span="10">col-lg-10</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="13">col-lg-13</v-col>
	//           <v-col span="11">col-lg-11</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="12">col-lg-12</v-col>
	//           <v-col span="12">col-lg-12</v-col>
	//         </v-row>
	//       </div>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <v-row>
	//   <v-col span="24">col-lg-24</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="23">col-lg-23</v-col>
	//   <v-col span="1">1</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="22">col-lg-22</v-col>
	//   <v-col span="2">2</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="21">col-lg-21</v-col>
	//   <v-col span="3">col-lg-3</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="20">col-lg-20</v-col>
	//   <v-col span="4">col-lg-4</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="19">col-lg-19</v-col>
	//   <v-col span="5">col-lg-5</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="18">col-lg-18</v-col>
	//   <v-col span="6">col-lg-6</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="17">col-lg-17</v-col>
	//   <v-col span="7">col-lg-7</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="16">col-lg-16</v-col>
	//   <v-col span="8">col-lg-8</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="15">col-lg-15</v-col>
	//   <v-col span="9">col-lg-9</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="14">col-lg-14</v-col>
	//   <v-col span="10">col-lg-10</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="13">col-lg-13</v-col>
	//   <v-col span="11">col-lg-11</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="12">col-lg-12</v-col>
	//   <v-col span="12">col-lg-12</v-col>
	// </v-row>
	// </script></code></pre>
	//     </script>
	//     </code>
	//   </div>
	// </template>
	// <style>
	//   .grid-demo .row{
	//     margin:5px 0;
	//   }
	//   .grid-demo .row > div{
	//     text-align: center;
	//     line-height: 30px;
	//     height: 30px;
	//     background: #99EAD8;
	//     background-clip: content-box;
	//   }
	// </style>
	// <script>
	
	var vCol = _src.Layout.Col;
	exports.default = {
	  components: { vRow: vRow, vCol: vCol }
	};
	// </script>
	//
	//

	/* generated by vue-loader */

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Form = __webpack_require__(138);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Layout = __webpack_require__(146);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Button = __webpack_require__(154);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(158);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Searchbox = __webpack_require__(162);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);
	
	var _Uploader = __webpack_require__(167);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);
	
	var _Switch = __webpack_require__(172);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Dropdown = __webpack_require__(176);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Select = __webpack_require__(181);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _DatePicker = __webpack_require__(196);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _Typeahead = __webpack_require__(203);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Cascader = __webpack_require__(209);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _Message = __webpack_require__(213);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _Modal = __webpack_require__(220);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Table = __webpack_require__(231);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Badge = __webpack_require__(244);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Carousel = __webpack_require__(248);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Affix = __webpack_require__(257);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Spin = __webpack_require__(239);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	var _Textarea = __webpack_require__(262);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _Tag = __webpack_require__(186);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Tooltip = __webpack_require__(266);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Accordion = __webpack_require__(273);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Popover = __webpack_require__(282);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Tabs = __webpack_require__(288);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Steps = __webpack_require__(297);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Menu = __webpack_require__(304);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Breadcrumb = __webpack_require__(314);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Pagination = __webpack_require__(321);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _phoneNumber = __webpack_require__(335);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(336);
	__webpack_require__(337);
	__webpack_require__(338);
	// import Form from './components/Form.vue'
	
	// import Progressbar from './components/progressbar.vue'
	
	
	// 展示类
	
	// import Container from './components/Container.vue'
	
	
	// 导航类
	// import ffix from './components/affix.vue'
	// import side from './components/aside.vue'
	
	
	// filters
	
	
	//widgets
	// import AddressSelect from './widget/AddressSelect/'
	
	var VueComponent = {
	  Layout: _Layout2.default,
	  Icon: _Icon2.default,
	  Form: _Form2.default,
	  Searchbox: _Searchbox2.default,
	  Uploader: _Uploader2.default,
	  Switch: _Switch2.default,
	  Dropdown: _Dropdown2.default,
	  Select: _Select2.default,
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Icon2.default;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(136)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Icon/Icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(137)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 136 */
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
/* 137 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"['iconfont','icon-' + type]\" :style=\"{ fontSize: size + 'px',color:color }\">\n  <slot></slot>\n</i>\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Form = __webpack_require__(139);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormItem = __webpack_require__(144);
	
	var _FormItem2 = _interopRequireDefault(_FormItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Form2.default.FormItem = _FormItem2.default;
	
	exports.default = _Form2.default;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(140)
	__vue_script__ = __webpack_require__(142)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/Form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(143)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Form.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Form.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-horizontal {}\n.form-vertical {}\n", ""]);
	
	// exports


/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <form class="form" :class="classObj" @submit="{{submit}}">
	//     <slot></slot>
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
	    vertical: null,
	    submit: Function
	  },
	
	  data: function data() {
	    return {
	      classObj: {
	        'form-horizontal': typeof this.horizontal !== 'undefined',
	        'form-vertical': typeof this.vertical !== 'undefined'
	      }
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\n<form class=\"form\" :class=\"classObj\" @submit=\"{{submit}}\">\n  <slot></slot>\n</form>\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(145)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/FormItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(153)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(146);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Icon = __webpack_require__(134);
	
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
	    labelCol: {
	      type: String,
	      default: '7'
	    },
	    wrapperCol: {
	      type: String,
	      default: ''
	    },
	    //验证规则
	    rules: {
	      type: Array,
	      default: []
	    },
	    //是否必填
	    required: null,
	    //提示信息，如不设置，会根据验证规则自动生成
	    tips: {
	      type: String,
	      default: ''
	    },
	    //额外提示信息，设置后，会和提示信息一起显示
	    extra: String,
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
	      return {
	        // 'form-item-with-help': this.validStatus,
	        'has-error': this.validStatus == 'error',
	        'has-success': this.validStatus == 'success'
	      };
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Row = __webpack_require__(147);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(150);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { Row: _Row2.default, Col: _Col2.default };

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(148)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 148 */
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
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\"><slot></slot></div>\n";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(151)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(152)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 151 */
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
/* 152 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"className\"><slot></slot></div>\n";

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"form-item\" :class=\"classObj\">\n  <v-col :span=\"labelCol\">\n    <label v-if=\"label\" class=\"form-label\">\n      <span v-if=\"isRequired\" class=\"required-icon\">*</span>\n      {{label}}\n    </label>\n  </v-col>\n  <v-col :span=\"wrapperCol || calcWrapperCol\">\n    <div class=\"form-input\">\n      <slot></slot>\n      <template v-if=\"showIcon\">\n        <icon class=\"status-icon\" v-if=\"validStatus == 'warn'\" type=\"waring\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'error'\" type=\"error\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'success'\" type=\"success\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'help'\" type=\"help\"></icon>\n      </template>\n    </div>\n    <div v-if=\"tips && validStatus\" class=\"status-info\">{{tips}}</div>\n  </v-col>\n</div>\n";

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(155);
	
	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Button2.default;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(156)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Button/Button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(157)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 156 */
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
/* 157 */
/***/ function(module, exports) {

	module.exports = "\n<button type=\"{{type}}\" class=\"btn\" :class=\"btnClassObj\">\n  <slot>{{value}}</slot>\n</button>\n";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(159);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(160)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Input/Input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(161)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 160 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <input type="{{type}}" class="input" :class="classObj" placeholder="{{placeholder}}" v-model="value" />
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
	    validStatus: {
	      type: String,
	      default: ''
	    },
	    value: {
	      type: String,
	      default: ''
	    }
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
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "\n<input type=\"{{type}}\" class=\"input\" :class=\"classObj\" placeholder=\"{{placeholder}}\" v-model=\"value\" />\n";

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Searchbox = __webpack_require__(163);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Searchbox2.default;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(164)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Searchbox/Searchbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(166)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="search-box">
	//     <input type="text" class="input" :class="classObj" placeholder="{{placeholder}}" v-model="value" @focus="focusInput" debounce="500" />
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
	      type: Array,
	      default: []
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
/* 165 */
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
/* 166 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-box\">\n  <input type=\"text\" class=\"input\" :class=\"classObj\" placeholder=\"{{placeholder}}\" v-model=\"value\" @focus=\"focusInput\" debounce=\"500\" />\n  <icon type=\"search\" :color=\"iconColor\" size=\"14\"></icon>\n  <div v-if=\"searchList && searchList.length > 0\" class=\"search-list-containter\">\n    <ul class=\"list-dropdown\" v-show=\"showPop\">\n      <li v-for=\"item in searchList | filterBy value\">\n        <a href=\"javascript:;\" @click=\"checkItem($index, item[textField])\" title=\"{{item[textField]}}\">{{item[textField]}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Uploader = __webpack_require__(168);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Uploader2.default;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(169)
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Uploader/Uploader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(171)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 169 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 170 */
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
/* 171 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"file-upload\">\n  <div class=\"click-upload\" v-if=\"uploadType == 'click'\">\n    <div>\n      <input\n        type=\"file\"\n        name=\"files[]\"\n        id=\"{{id}}\"\n        accept=\"accept\"\n        v-bind:multiple=\"multiple\"\n        v-on:change=\"onChange($event)\" />\n      <label for=\"{{id}}\">\n        <span class=\"btn tertiary small\">点击上传</span>\n      </label>\n    </div>\n    <div class=\"select-files\" v-if=\"fileList.length > 0\">\n      <a class=\"file-item\" href=\"javascript:;\" v-for=\"file in selectFiles\">\n        <span>{{file}}</span>\n      </a>\n    </div>\n    <button type=\"submit\" class=\"btn\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">Upload</button>\n    <div class=\"state\">\n      <div class=\"upload-rate\" v-show=\"state == 'uploading'\">\n        <span class=\"rate-control\">\n          <span class=\"rate\" :style=\"{'width': +progress * 0.9 + 'px'}\"></span>\n          <span class=\"rate-tip\">\n            {{text.uploading}}\n            <span v-if=\"advancedUpload\">{{progress}}</span>\n          </span>\n        </span>\n        <a class=\"cancel-upload\" href=\"javascript:;\">取消</a>\n      </div>\n      <div class=\"upload-rate\" v-show=\"state == 'success'\">\n        <span class=\"rate-control\">\n          <span class=\"rate\" :style=\"{'width': '90px'}\"></span>\n          <span class=\"rate-tip\">上传成功</span>\n        </span>\n        <a class=\"continu-upload\" @click.prevent=\"restart\" href=\"javascript:;\">继续上传？</a>\n      </div>\n      <div class=\"upload-rate\" v-show=\"state == 'error'\">\n        <span>出错了！{{errorMessage}}</span>\n        <a class=\"continu-upload\" @click.prevent=\"retry\" href=\"javascript:;\">请重试</a>\n      </div>\n    </div>\n  </div>\n  <div v-if=\"uploadType == 'drag'\" class=\"drag-upload {{advancedUpload ? 'active' : ''}} {{dragover ? 'is-dragover' : ''}}\">\n      <div v-if=\"state == null || state == 'retry'\">\n        <input\n            type=\"file\"\n            name=\"files[]\"\n            id=\"{{id}}\"\n            accept=\"accept\"\n            v-bind:multiple=\"multiple && advancedUpload\"\n            v-on:change=\"onChange($event)\" />\n        <label for=\"{{id}}\">\n          <span v-if=\"fileList.length == 0 && advancedUpload\">将文件拖拽至框中上传或点此上传</span>\n          <p v-if=\"fileList.length > 0\" v-for=\"file in selectFiles\">{{file}}</p>\n        </label>\n        <br>\n        <button type=\"submit\" class=\"btn\" v-if=\"!hideButton && !autoSubmit\" v-on:click.prevent=\"submitForm($event)\">Upload</button>\n      </div>\n      <div class=\"state\" v-if=\"state != null\">\n        <span class=\"state-uploading animate\" v-show=\"state == 'uploading'\">\n          {{text.uploading}}\n          <span v-if=\"advancedUpload\">{{progress}}</span>\n        </span>\n        <span class=\"state-success animate\" v-show=\"state == 'success'\">\n          上传成功\n          <a href=\"#\" v-on:click.prevent=\"restart\" role=\"button\" v-show=\"multiple\">继续上传?</a>\n        </span>\n        <span class=\"state-error animate\" v-show=\"state == 'error'\">\n          出错了!\n          <span>{{errorMessage}}</span>\n          <a href=\"#\" v-on:click.prevent=\"retry\">请重试</a>\n        </span>\n      </div>\n  </div>\n</div>\n\n";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(173);
	
	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Switch/Switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(175)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 174 */
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
			},
			small: {
				type: Boolean,
				default: false
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
				this.onChange(this.checked);
			}
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "\n  <span :class=\"wrapClasses\" @click=\"changeHandler\" :style=\"{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}\">\n\t\t<span class=\"switch-content\">\n\t\t\t<slot v-if=\"checked && !small\" name=\"checkedPart\"></slot>\n\t\t\t<slot v-if=\"!checked && !small\" name=\"unCheckedPart\"></slot>\n\t\t</span>\n\t</span>\n";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(177);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dropdown2.default;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(178)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dropdown/Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(180)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(179);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="{dropdown:true,open:open}">
	//     <slot></slot>
	//     <div style="padding-top:3px;">
	//       <slot name="dropdown-menu"></slot>
	//     </div>
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
/* 179 */
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
/* 180 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{dropdown:true,open:open}\">\n  <slot></slot>\n  <div style=\"padding-top:3px;\">\n    <slot name=\"dropdown-menu\"></slot>\n  </div>\n</div>\n";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(182);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(191);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Select2.default.Option = _Option2.default;
	
	exports.default = _Select2.default;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(183)
	__vue_script__ = __webpack_require__(185)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(190)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(184);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f750b48a&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f750b48a&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.caret .iconfont[_v-f750b48a]{\n  display: inline-block;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  -webkit-transform:rotate(0deg);\n          transform:rotate(0deg);\n}\n.caret.open .iconfont[_v-f750b48a]{\n  -webkit-transform:rotate(180deg);\n          transform:rotate(180deg);\n}\n", ""]);
	
	// exports


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(179);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Tag = __webpack_require__(186);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="select-container" v-bind:class="{open: show,disabled: disabled,multiple:multiple}">
	//     <div class="select-toggle" tabindex="1" class="dropdown-toggle" @click="toggleDropdown" v-bind="{disabled: disabled}"
	//     >
	//       <template v-if="!multiple">
	//         <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//         <span class="btn-content">{{ selectedOptions[0].label }}</span>
	//         <span :class="{caret:true,open:show}"><icon type="down" size="12"></icon></span>
	//       </template>
	//       <div v-else>
	//         <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//         <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
	//         <input type="text" v-el:search-field class="select-search-field" @input="onInput" @keyup.delete="deleteTag"/>
	//       </div>
	//
	//     </div>
	//     <div v-if="options.length" class="dropdown-menu">
	//       <div v-if="search" class="option bs-searchbox">
	//         <input type="text" placeholder="Search" v-model="searchText" autocomplete="off">
	//       </div>
	//       <div class="option" v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
	//         <a @mousedown.prevent.stop="select(option.label,option.value)" style="cursor:pointer">
	//           {{ option.label }}
	//           <icon type="tick" v-show="value.indexOf(option.value) !== -1"></icon>
	//         </a>
	//       </div>
	//     </div>
	//     <div v-else class="dropdown-menu">
	//       <slot></slot>
	//     </div>
	//     <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>
	//
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    options: {
	      type: Array
	    },
	    width: {
	      type: Array
	    },
	    value: {
	      twoWay: true,
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
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
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Tag: _Tag2.default
	  },
	  created: function created() {
	    if (!this.multiple && Array.isArray(this.value)) {
	      this.value = this.value.slice(0, 1);
	    } else if (this.multiple && this.value.length > this.limit) {
	      this.value = this.value.slice(0, this.limit);
	    }
	    if (this.value) {
	      this.showPlaceholder = false;
	    }
	  },
	  data: function data() {
	    return {
	      searchText: null,
	      show: false,
	      selectedOptions: [],
	      showPlaceholder: true,
	      showNotify: false
	    };
	  },
	
	  computed: {},
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
	    }
	  },
	  methods: {
	    select: function select(label, value) {
	      this.$emit('change', label, value);
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
	          this.value.$remove(option.value);
	        }
	      } else {
	        this.selectedOptions = [option];
	        this.value = option.value;
	      }
	
	      if (!this.multiple) {
	        this.show = false;
	      }
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
	// <style scoped>
	// .caret .iconfont{
	//   display: inline-block;
	//   transition: all .3s ease;
	//   transform:rotate(0deg);
	// }
	// .caret.open .iconfont{
	//   transform:rotate(180deg);
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tag = __webpack_require__(187);
	
	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tag2.default;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(188)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tag/Tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Icon = __webpack_require__(134);
	
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
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\" :class=\"wrapClasses\" :style=\"{'background-color': color}\">\n\t<a :href=\"href\" class=\"tag-text\" :style=\"{'fontSize': size+'px'}\"><slot></slot></a>\n\t<span v-if=\"closable\" class=\"tag-close\" @click=\"closeHandler\">\n\t\t<v-icon type=\"close\" :size=\"size\"></v-icon>\n\t</span>\n</div>\n";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"select-container\" v-bind:class=\"{open: show,disabled: disabled,multiple:multiple}\" _v-f750b48a=\"\">\n  <div class=\"select-toggle\" tabindex=\"1\" @click=\"toggleDropdown\" v-bind=\"{disabled: disabled}\" _v-f750b48a=\"\">\n    <template v-if=\"!multiple\">\n      <span class=\"select-placeholder\" v-show=\"showPlaceholder\" _v-f750b48a=\"\">{{placeholder}}</span>\n      <span class=\"btn-content\" _v-f750b48a=\"\">{{ selectedOptions[0].label }}</span>\n      <span :class=\"{caret:true,open:show}\" _v-f750b48a=\"\"><icon type=\"down\" size=\"12\" _v-f750b48a=\"\"></icon></span>\n    </template>\n    <div v-else=\"\" _v-f750b48a=\"\">\n      <span class=\"select-placeholder\" v-show=\"showPlaceholder\" _v-f750b48a=\"\">{{placeholder}}</span>\n      <tag v-for=\"option in selectedOptions\" closable=\"\" @close=\"closeTag(option)\" _v-f750b48a=\"\">{{{option.label}}}</tag>\n      <input type=\"text\" v-el:search-field=\"\" class=\"select-search-field\" @input=\"onInput\" @keyup.delete=\"deleteTag\" _v-f750b48a=\"\">\n    </div>\n\n  </div>\n  <div v-if=\"options.length\" class=\"dropdown-menu\" _v-f750b48a=\"\">\n    <div v-if=\"search\" class=\"option bs-searchbox\" _v-f750b48a=\"\">\n      <input type=\"text\" placeholder=\"Search\" v-model=\"searchText\" autocomplete=\"off\" _v-f750b48a=\"\">\n    </div>\n    <div class=\"option\" v-for=\"option in options | filterBy searchText \" v-bind:id=\"option.value\" style=\"position:relative\" _v-f750b48a=\"\">\n      <a @mousedown.prevent.stop=\"select(option.label,option.value)\" style=\"cursor:pointer\" _v-f750b48a=\"\">\n        {{ option.label }}\n        <icon type=\"tick\" v-show=\"value.indexOf(option.value) !== -1\" _v-f750b48a=\"\"></icon>\n      </a>\n    </div>\n  </div>\n  <div v-else=\"\" class=\"dropdown-menu\" _v-f750b48a=\"\">\n    <slot _v-f750b48a=\"\"></slot>\n  </div>\n  <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\" _v-f750b48a=\"\">最多可选 ({{limit}})项.</div>\n\n</div>\n";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(192)
	__vue_script__ = __webpack_require__(194)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(195)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(193);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-38ea94b4&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-38ea94b4&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\na span.check-mark[_v-38ea94b4] {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n", ""]);
	
	// exports


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(179);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="{option:true,disabled:disabled,chosen:chosen}">
	//     <a @mousedown.prevent.stop="handleClick">
	//       <span v-el:content><slot></slot></span>
	//     </a>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      default: false
	    }
	  },
	  components: {
	    Icon: _Icon2.default
	  },
	  data: function data() {},
	
	  computed: {
	    chosen: function chosen() {
	      var _this = this;
	
	      return this.$parent.selectedOptions.some(function (item) {
	        return item.value === _this.value;
	      });
	    }
	  },
	  ready: function ready() {
	    if (this.$parent.value === this.value) {
	      var option = {
	        label: this.$els.content.innerHTML,
	        value: this.value
	      };
	      this.$parent.selectedOptions.push(option);
	    }
	  },
	
	  methods: {
	    handleClick: function handleClick() {
	      if (this.disabled) {
	        return;
	      }
	      var option = {
	        label: this.$els.content.innerHTML,
	        value: this.value
	      };
	      this.$dispatch('change', option);
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
/* 195 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{option:true,disabled:disabled,chosen:chosen}\" _v-38ea94b4=\"\">\n  <a @mousedown.prevent.stop=\"handleClick\" _v-38ea94b4=\"\">\n    <span v-el:content=\"\" _v-38ea94b4=\"\"><slot _v-38ea94b4=\"\"></slot></span>\n  </a>\n</div>\n";

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(197);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RangePicker = __webpack_require__(200);
	
	var _RangePicker2 = _interopRequireDefault(_RangePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_DatePicker2.default.RangePicker = _RangePicker2.default;
	
	exports.default = _DatePicker2.default;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/DatePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="datepicker">
	//     <input class="form-control datepicker-input" :class="{'with-reset-button': showResetButton}" type="text"
	//         v-bind:style="{width:width}"
	//         @click="inputClick"
	//         v-model="value"/>
	//     <icon type="calendar"></icon>
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
	
	var localeConfig = {
	  zh_CN: {
	    weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
	  },
	  en_US: {
	    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  }
	};
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'yyyy-MMMM-dd'
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

	/* generated by vue-loader */

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"datepicker\">\n  <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': showResetButton}\" type=\"text\"\n      v-bind:style=\"{width:width}\"\n      @click=\"inputClick\"\n      v-model=\"value\"/>\n  <icon type=\"calendar\"></icon>\n  <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n          <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-weekRange\">\n          <span v-for=\"w in weekRange\">{{w}}</span>\n        </div>\n        <div class=\"datepicker-dateRange\">\n          <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n          <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange\">\n          <template v-for=\"m in monthNames\">\n            <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n                (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n    <div class=\"datepicker-inner\">\n      <div class=\"datepicker-body\">\n        <div class=\"datepicker-ctrl\">\n          <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n          <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n          <p>{{stringifyDecadeHeader(currDate)}}</p>\n        </div>\n        <div class=\"datepicker-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span v-bind:class=\"{'datepicker-dateRange-item-active':\n                this.parse(this.value).getFullYear() === decade.text}\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(201)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/RangePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(202)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(197);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _coerceBoolean = __webpack_require__(179);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="range-picker">
	//   <input type="" placeholder="开始日期" @click="triggerStart" / >
	//     <span class="range-picker-separator"> ~ </span>
	//   <input type="text" placeholder="结束日期" @click="triggerEnd">
	//   <div class="range-picker-content">
	//     <date-picker v-show="showEndPicker || showStartPicker"></date-picker>
	//   </div>
	// </div>
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
	  data: function data() {
	    return {
	      showStartPicker: false,
	      showEndPicker: false
	    };
	  },
	
	  methods: {
	    triggerStart: function triggerStart() {
	      this.showStartPicker = !this.showStartPicker;
	    },
	    triggerEnd: function triggerEnd() {
	      this.showEndPicker = !this.showEndPicker;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"range-picker\">\n  <input type=\"\" placeholder=\"开始日期\" @click=\"triggerStart\" / >\n    <span class=\"range-picker-separator\"> ~ </span>\n  <input type=\"text\" placeholder=\"结束日期\" @click=\"triggerEnd\">\n  <div class=\"range-picker-content\">\n    <date-picker v-show=\"showEndPicker || showStartPicker\"></date-picker>\n  </div>\n</div>\n";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(204)
	__vue_script__ = __webpack_require__(206)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Typeahead.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
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

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(207);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 207 */
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
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cascader = __webpack_require__(210);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Cascader2.default;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(211)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Cascader/Cascader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(212)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Input = __webpack_require__(158);
	
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
	        var option = me.menus[i].find(function (option) {
	          return option.value === value;
	        });
	        me.changeOption(i, option);
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
/* 212 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cascader\">\n  <span class=\"cascader-picker\">\n    <v-input readonly @click=\"toggleMenus\" :value=\"displayValue\" :placeholder=\"placeholder\"></v-input>\n  </span>\n  <div class=\"cascader-menus\" v-show=\"isOpen\">\n    <ul class=\"cascader-menu\" v-for=\"(index, menu) in menus\">\n      <li class=\"cascader-menu-item\" :class=\"{selected:selectedOptions[index] === option,disabled:option.disabled}\" v-for=\"option in menu\" @click=\"changeOption(index,option,$event)\">{{option.label}}</li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(214);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _vue = __webpack_require__(218);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	['info', 'success', 'error', 'warn', 'loading'].forEach(function (type, i) {
	  _Message2.default[type] = function (content, duration, placement) {
	    duration = duration || 3000;
	    placement = placement || 'top';
	    if (!document.getElementsByClassName('vue-message').length) {
	      var box = document.createElement('div');
	      box.className = 'vue-message';
	      document.body.appendChild(box);
	    }
	    var div = document.createElement('div');
	    document.getElementsByClassName('vue-message')[0].appendChild(div);
	    new _vue2.default({
	      el: div,
	      template: '<message class="vue-message-notice" :show.sync="show" :duration="duration" :type="type" width="400px" :placement="placement" @click="hide()">{{content}}</message>',
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
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(215)
	__vue_script__ = __webpack_require__(216)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Message/Message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(217)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 215 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(179);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _Icon = __webpack_require__(134);
	
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
	// .alert.center {
	//   position: fixed;
	//   top: 50%;
	//   left: 50%;
	//   transform: translate(-50%,50%);
	//   z-index: 2;
	// }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  v-bind:class=\"{\n    'alert':\t\ttrue,\n    'alert-success':(type == 'success'),\n    'alert-warning':(type == 'warning'),\n    'alert-info':\t(type == 'info'),\n    'alert-error':\t(type == 'error' || type == 'danger'),\n    'alert-help': (type == 'help'),\n    'top': \t\t\t(placement === 'top'),\n    'top-right': \t(placement === 'top-right'),\n    'center':      (placement === 'center'),\n  }\"\n  transition=\"fade\"\n  v-bind:style=\"{width:width}\"\n  role=\"alert\">\n  <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"show = false\">\n    <span>&times;</span>\n  </button>\n  <icon v-if=\"showIcon\" :type=\"type\"></icon>\n  <slot>\n    {{content}}\n  </slot>\n</div>\n";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.20
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    this._runtimeData = options.data;
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queueIndex;
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (queueIndex = 0; queueIndex < queue.length; queueIndex++) {
	    var watcher = queue[queueIndex];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    if (internalQueueDepleted && !watcher.user) {
	      // an internal watcher triggered by a user watcher...
	      // let's run it immediately after current user watcher is done.
	      userQueue.splice(queueIndex + 1, 0, watcher);
	    } else {
	      // push watcher into appropriate queue
	      var q = watcher.user ? userQueue : queue;
	      has[id] = q.length;
	      q.push(watcher);
	      // queue the flush
	      if (!waiting) {
	        waiting = true;
	        nextTick(flushBatcherQueue);
	      }
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = Object.create(null);
	  this.newDepIds = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDepIds = Object.create(null);
	  this.newDeps.length = 0;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds[id]) {
	    this.newDepIds[id] = true;
	    this.newDeps.push(dep);
	    if (!this.depIds[id]) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds[dep.id]) {
	      dep.removeSub(this);
	    }
	  }
	  this.depIds = this.newDepIds;
	  var tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    this.prevKeys = Object.keys(value);
	    setObjectClasses(this.el, value);
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val && isPlainObject(val)) {
	        setObjectClasses(this.el, val);
	      } else if (val && typeof val === 'string') {
	        addClass(this.el, val);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (!key) continue;
	        if (isPlainObject(key)) {
	          var keys = Object.keys(key);
	          for (var k = 0; k < keys.length; k++) {
	            removeClass(this.el, keys[k]);
	          }
	        } else {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function setObjectClasses(el, obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    if (obj[key]) {
	      addClass(el, key);
	    }
	  }
	}
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop.options);
	  }
	  if (assertProp(prop, value)) {
	    defineReactive(vm, key, value);
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	    var isSimple = isSimplePath(parentKey);
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        if (isSimple) {
	          withoutConversion(function () {
	            child[childKey] = val;
	          });
	        } else {
	          child[childKey] = val;
	        }
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    var value = parentWatcher.value;
	    if (isSimple && value !== undefined) {
	      withoutConversion(function () {
	        initProp(child, prop, value);
	      });
	    } else {
	      initProp(child, prop, value);
	    }
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    modifiers = parseModifiers(attr.name);
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.trim().split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.');
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.');
	    }
	    var props = this._props;
	    var runtimeData = this._runtimeData ? typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData : null;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key) || runtimeData && hasOwn(runtimeData, key) && props[key].raw === null) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. Use prop default value instead.');
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        if (typeof handler === 'function') {
	          handler._fromParent = true;
	          vm.$on(name.replace(eventRE), handler);
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name ? ' on component <' + vm.$options.name + '>' : '') + ' expects a function value, got ' + handler);
	        }
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(factory, 'component', value);
	      }
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.20';
	
	// devtools global hook
	/* istanbul ignore next */
	if (config.devtools) {
	  if (devtools) {
	    devtools.emit('init', Vue);
	  } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(219)))

/***/ },
/* 219 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(221);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Icon = __webpack_require__(134);
	
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
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(222)
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Modal/Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(230)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
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

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.modal {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}\n", ""]);
	
	// exports


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(225);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(229);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(226), __esModule: true };

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227);
	module.exports = __webpack_require__(94).Number.isInteger;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(92);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(228)});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(114)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 229 */
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
/* 230 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  v-bind:class=\"{\n  'modal':true,\n  'fade':effect === 'fade',\n  'zoom':effect === 'zoom'\n  }\"\n  >\n  <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n    v-bind:style=\"{width: optionalWidth}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n          <h4 class=\"modal-title\" >{{title}}</h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\"></div>\n      </slot>\n      <slot name=\"modal-footer\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n          <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(232);
	
	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(233)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Table/Table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(243)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(234);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Dropdown = __webpack_require__(176);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Spin = __webpack_require__(239);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    pagination: Object,
	    dataSource: Array,
	    columns: Array,
	    rowSelection: Object,
	    rowKey: String,
	    loading: Boolean
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
	      checkedRows: []
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
	        return !_this.rowSelection.getCheckboxProps || !_this.rowSelection.getCheckboxProps(record).disabled;
	      });
	    }
	  },
	  watch: {
	    dataSource: {
	      handler: function handler(item) {
	        this.checkedRows = [];
	        this.checkedValues = [];
	        this.isCheckedAll = false;
	        this.compileTbody();
	      }
	    }
	  },
	  ready: function ready() {},
	
	  methods: {
	    compileTbody: function compileTbody() {
	      var me = this;
	      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
	      this.$nextTick(function () {
	        // console.log(me)
	        // me.scope = me.scope || me.$parent;
	        me._context.$compile(me.$el.getElementsByTagName('table')[0]);
	      });
	    },
	    sortAction: function sortAction(column, index, order) {
	      if (typeof column.sorter === 'Function') {
	        // TODO:客户端排序
	      }
	      this.sorderOrder[index] = order;
	      this.sorderOrder = (0, _assign2.default)([], this.sorderOrder);
	      this.$dispatch('change', this.pagination, this.filters, {
	        field: column.dataIndex,
	        order: order
	      });
	    },
	
	    // 点击全选框触发
	    onCheckAll: function onCheckAll() {
	      var me = this;
	      var changeRows = [];
	      var checked = event.target.checked;
	      if (checked) {
	        me.checkebleRows.forEach(function (record, i) {
	          if (me.checkedRows.indexOf(record) < 0) {
	            me.checkedRows.push(record);
	            changeRows.push(record);
	          }
	        });
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
	        me.rowSelection.onSelectAll.call(null, checked, me.checkedRows, changeRows);
	      }
	    },
	
	    // 选中某一个单选框时触发
	    onCheckOne: function onCheckOne(event, record) {
	      var me = this;
	      var checked = event.target.checked;
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
	        me.rowSelection.onSelect.call(null, record, checked, me.checkedRows);
	      }
	      me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length;
	    },
	
	    // filter时触发
	    onFilter: function onFilter(value, column) {
	      var me = this;
	      me.$set('filterOpened', true);
	      setTimeout(function () {
	        me.$set('filterOpened', false);
	      }, 100);
	
	      me.checkedRows = [];
	      me.isCheckedAll = false;
	      var filters = {};
	      filters[column.dataIndex] = [value];
	      me.$dispatch('change', this.pagination, filters, column.sorter);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// <div :class="{'table-container':true,loading:loading}">
	//   <spin size="sm" v-if="loading"></spin>
	//   <div class="table-body">
	//     <table class="table">
	//       <thead class="table-thead">
	//         <tr>
	//           <th v-if="rowSelection">
	//               <input v-if="dataSource.length" type="checkbox" v-bind="{checked:isCheckedAll}" @change="onCheckAll"/>
	//           </th>
	//           <th v-for="column in columns" :class="{'multi-col':column.multiCols}" :width="column.width">
	//               {{column['title']}}
	//               <dropdown v-if="dataSource.length && column.filters" data-toggle="dropdown" :open="filterOpened">
	//                 <div data-toggle="dropdown">
	//                   <icon type="filter"></icon>
	//                 </div>
	//                 <ul name="dropdown-menu" class="dropdown-menu">
	//                   <li v-for="col in column.filters"><a href="javascript:void(0);" @click="onFilter(col.value, column)">{{col.text}}</a></li>
	//                 </ul>
	//               </dropdown>
	//               <div v-if="dataSource.length && column.sorter" class="table-sorter">
	//                 <icon type="up" @click="sortAction(column,$index,'ascend')" size="10" :class="{active:sorderOrder[$index] == 'ascend'}"></icon>
	//                 <icon type="down" @click="sortAction(column,$index,'descend')" size="10" :class="{active:sorderOrder[$index] == 'descend'}"></icon>
	//               </div>
	//           </th>
	//         </tr>
	//       </thead>
	//       <tbody class="table-tbody">
	//         <tr v-show="!dataSource.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">没有任何数据</td></tr>
	//         <tr v-for="(rowIndex, record) in dataSource">
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
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(235), __esModule: true };

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236);
	module.exports = __webpack_require__(94).Object.assign;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(92);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(237)});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(99)
	  , toObject = __webpack_require__(111)
	  , IObject  = __webpack_require__(238);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(102)(function(){
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
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(119);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Spin = __webpack_require__(240);
	
	var _Spin2 = _interopRequireDefault(_Spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spin2.default;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(241)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Spin/Spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(242)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 241 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="['spin',size]" v-show="show">
	//   <div class="sping-point"></div>
	//   <div class="sping-point"></div>
	//   <div class="sping-point"></div>
	//   <slot></slot>
	// </div>
	// </template>
	// <script>
	exports.default = {
	  name: 'spin',
	  props: {
	    show: {
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
	      size: this.size
	    };
	  },
	
	  methods: {
	    show: function show() {
	      this.show = true;
	    },
	    hide: function hide() {
	      this.show = false;
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
/* 242 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"['spin',size]\" v-show=\"show\">\n  <div class=\"sping-point\"></div>\n  <div class=\"sping-point\"></div>\n  <div class=\"sping-point\"></div>\n  <slot></slot>\n</div>\n";

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{'table-container':true,loading:loading}\">\n  <spin size=\"sm\" v-if=\"loading\"></spin>\n  <div class=\"table-body\">\n    <table class=\"table\">\n      <thead class=\"table-thead\">\n        <tr>\n          <th v-if=\"rowSelection\">\n              <input v-if=\"dataSource.length\" type=\"checkbox\" v-bind=\"{checked:isCheckedAll}\" @change=\"onCheckAll\"/>\n          </th>\n          <th v-for=\"column in columns\" :class=\"{'multi-col':column.multiCols}\" :width=\"column.width\">\n              {{column['title']}}\n              <dropdown v-if=\"dataSource.length && column.filters\" data-toggle=\"dropdown\" :open=\"filterOpened\">\n                <div data-toggle=\"dropdown\">\n                  <icon type=\"filter\"></icon>\n                </div>\n                <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n                  <li v-for=\"col in column.filters\"><a href=\"javascript:void(0);\" @click=\"onFilter(col.value, column)\">{{col.text}}</a></li>\n                </ul>\n              </dropdown>\n              <div v-if=\"dataSource.length && column.sorter\" class=\"table-sorter\">\n                <icon type=\"up\" @click=\"sortAction(column,$index,'ascend')\" size=\"10\" :class=\"{active:sorderOrder[$index] == 'ascend'}\"></icon>\n                <icon type=\"down\" @click=\"sortAction(column,$index,'descend')\" size=\"10\" :class=\"{active:sorderOrder[$index] == 'descend'}\"></icon>\n              </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody class=\"table-tbody\">\n        <tr v-show=\"!dataSource.length\"><td colspan=\"10000\" style=\"text-align: center;\" class=\"vue-table-empty\">没有任何数据</td></tr>\n        <tr v-for=\"(rowIndex, record) in dataSource\">\n            <td v-if=\"rowSelection\">\n                 <input type=\"checkbox\" v-model=\"checkedValues\" :value=\"record[rowKey]\" @change.stop=\"onCheckOne($event,record)\" v-bind=\"rowSelection.getCheckboxProps(record)\"/>\n            </td>\n            <td v-for=\"column in columns\">\n                <template v-if=\"column.render\">\n                    {{{column.render(record[column.dataIndex],record,rowIndex)}}}\n                </template>\n                <template v-else>\n                    {{record[column.dataIndex]}}\n                </template>\n            </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n";

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Badge = __webpack_require__(245);
	
	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Badge2.default;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(246)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Badge/Badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(247)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 246 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <span v-if="dot" class="badge" :class="wrapClasses">
	//     <slot></slot>
	//     <sup class="badge-dot"></sup>
	//   </span>
	//   <span v-else  class="badge" :class="wrapClasses">
	//     <slot></slot>
	//     <sup v-if='count > 0' class="badge-count">
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
	    },
	    class: {
	      type: String
	    }
	  },
	  filters: {
	    short: function short(value) {
	      return value >= 100 ? '99+' : value;
	    }
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      return ['badge'].concat(this.class.split(' '));
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "\n<span v-if=\"dot\" class=\"badge\" :class=\"wrapClasses\">\n  <slot></slot>\n  <sup class=\"badge-dot\"></sup>\n</span>\n<span v-else  class=\"badge\" :class=\"wrapClasses\">\n  <slot></slot>\n  <sup v-if='count > 0' class=\"badge-count\">\n    {{count | short}}\n  </sup>\n</span>\n";

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(249);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slide = __webpack_require__(254);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Carousel2.default.Slide = _Slide2.default;
	
	exports.default = _Carousel2.default;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(250)
	__vue_script__ = __webpack_require__(252)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(253)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(251);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-276df37b&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-276df37b&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[_v-276df37b] {\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(83);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 253 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-276df37b=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-276df37b=\"\">\n    <indicator _v-276df37b=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-276df37b=\"\">\n    <slot _v-276df37b=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Next</span>\n  </a>\n</div>\n";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(255)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Slide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(256)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 255 */
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
/* 256 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(258)
	__vue_script__ = __webpack_require__(260)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(261)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(259);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-affix {\n  position: fixed;\n}\n", ""]);
	
	// exports


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(165);
	
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
/* 261 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n";

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(263);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(264)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Textarea/Textarea.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(265)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 264 */
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
	      content: '',
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
/* 265 */
/***/ function(module, exports) {

	module.exports = "\n<textarea v-bind=\"{disabled: isDisabled}\" maxlength=\"{{limitWords}}\" class=\"textarea\" :class=\"classObj\" name=\"{{name}}\" placeholder=\"{{placeholder}}\" v-model=\"content\"></textarea>\n<p v-if=\"limitWords\" class=\"words-area\" :class=\"wordClass\">{{ curWords }}/{{ limitWords }}</p>\n<p v-if=\"showWordsCount\" class=\"words-area\">{{ countTips }}{{ curWords }}</p>\n";

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(267);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tooltip2.default;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(268)
	__vue_script__ = __webpack_require__(270)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tooltip/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(272)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  -webkit-animation:fadein-in 0.3s ease-in;\n          animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  -webkit-animation:fadein-out 0.3s ease-out;\n          animation:fadein-out 0.3s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n", ""]);
	
	// exports


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(271);
	
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
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(165);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 272 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"tooltip\"\n  v-bind:class=\"{\n  'top':    placement === 'top',\n  'top-left':    placement === 'topLeft',\n  'top-right':    placement === 'topRight',\n  'left':   placement === 'left',\n  'left-top':   placement === 'leftTop',\n  'left-bottom':   placement === 'leftBottom',\n  'right':  placement === 'right',\n  'right-top':  placement === 'rightTop',\n  'right-bottom':  placement === 'rightBottom',\n  'bottom': placement === 'bottom',\n  'bottom-left': placement === 'bottomLeft',\n  'bottom-right': placement === 'bottomRight'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\"\n  role=\"tooltip\">\n  <div class=\"tooltip-arrow\" v-el:arrow></div>\n  <div class=\"tooltip-inner\">\n    {{{content}}}\n  </div>\n</div>\n";

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Accordion = __webpack_require__(274);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(277);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Accordion2.default.Panel = _Panel2.default;
	
	exports.default = _Accordion2.default;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(275)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(276)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(179);
	
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
	// <template>
	//   <div class="panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(278)
	__vue_script__ = __webpack_require__(280)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(281)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(279);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\n-webkit-transition: max-height .5s ease;\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 281 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\" @click=\"toggleIsOpen()\">\n      <slot name=\"panel-header\"></slot>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(283);
	
	var _Popover2 = _interopRequireDefault(_Popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Popover2.default;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(284)
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Popover/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(287)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(285);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
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

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  -webkit-animation:scale-in 0.15s ease-in;\n          animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  -webkit-animation:scale-out 0.15s ease-out;\n          animation:scale-out 0.15s ease-out;\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(271);
	
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
/* 287 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"popover\"\n  v-bind:class=\"{\n  'top':placement === 'top',\n  'left':placement === 'left',\n  'right':placement === 'right',\n  'bottom':placement === 'bottom'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\">\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n    <div class=\"popover-content\">\n      {{{content}}}\n    </div>\n</div>\n";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(289);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(292);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Tabset2.default.Tab = _Tab2.default;
	
	exports.default = _Tabset2.default;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(290)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(291)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(134);
	
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
	//       <ul :class="wrapClasses" role="tablist" style="width: 99999px;">
	//         <li v-for="r in renderData"
	//             v-bind:class="{
	//               'active': ($index === active),
	//               'disabled': r.disabled
	//             }"
	//             @click.prevent="handleTabListClick($index, r)"
	//             :disabled="r.disabled"
	//         >
	//             <a href="#">{{{r.header}}}</a>
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
/* 291 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"tabsWrapper\">\n  <div class=\"tabs-header\">\n    <span v-if=\"renderData.length > showLen && showLen >= 3 \" class=\"arrow-prev\" @click=\"prev\"><icon type=\"prev\" size=\"12\"></icon></span>\n    <ul :class=\"wrapClasses\" role=\"tablist\" style=\"width: 99999px;\">\n      <li v-for=\"r in renderData\"\n          v-bind:class=\"{\n            'active': ($index === active),\n            'disabled': r.disabled\n          }\"\n          @click.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"#\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <span v-if=\"renderData.length > showLen && showLen >= 3\" class=\"arrow-next\" @click=\"next\"><icon type=\"next\" size=\"12\"></icon>\n    </span>\n  </div>\n\n   <!-- Tab panes -->\n   <div class=\"tab-content\" v-el:tab-content>\n      <slot></slot>\n   </div>\n</div>\n\n";

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(293)
	__vue_script__ = __webpack_require__(295)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(296)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(294);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-22291468&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-22291468&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content > .tab-pane[_v-22291468] {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 296 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"tab-pane\" v-bind:class=\"{hide:!show}\" v-show=\"show\" :transition=\"transition\" _v-22291468=\"\">\n  <slot _v-22291468=\"\"></slot>\n</div>\n";

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Steps = __webpack_require__(298);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Step = __webpack_require__(301);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Steps2.default.Step = _Step2.default;
	
	exports.default = _Steps2.default;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(299)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(300)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 299 */
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
/* 300 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"steps\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(302)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(303)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Icon = __webpack_require__(134);
	
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
/* 303 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\" :style=\"{'width': tailWidth}\">\n\t<div v-if=\"!lastStep\" class=\"step-tail\">\n\t\t<i>\n\t\t\t<i :style=\"{ backgroundColor: color }\"></i>\n\t\t</i>\n\t</div>\n\t<div class=\"step-head\">\n\t\t<div class=\"step-head-inner\">\n\t\t\t<span v-if=\"status !== 'finish'\" class=\"step-icon\" \n\t\t\t\t:style=\"{\n\t\t\t\t\tborderColor: status==='process'?color:'#e9e9e9', \n\t\t\t\t\tbackgroundColor: status==='process'?color:'#fff'}\">\n\t\t\t\t{{ stepNumber }}\n\t\t\t</span>\n\t\t\t<span v-else class=\"step-finish-icon\">\n\t\t\t\t<icon type=\"success\" size=\"28\" :color=\"color\"></icon>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<div class=\"step-main\">\n\t\t<div class=\"step-main-title\">{{ title }}</div>\n\t\t<div class=\"step-main-description\">{{ description }}</div>\n\t</div>\n</div>\n";

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Menu = __webpack_require__(305);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(308);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(311);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Divider from './Divider.vue'
	
	_Menu2.default.SubMenu = _SubMenu2.default;
	_Menu2.default.MenuItem = _MenuItem2.default;
	// Menu.Divider = Divider

	exports.default = _Menu2.default;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(306)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(307)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 307 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"vue-menu\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(309)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/SubMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(310)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(179);
	
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
/* 310 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"vue-sub-menu-title\" @click=\"triggerSub\">{{title}}</div>\n<ul class=\"vue-sub-menu panel-collapse collapse-transition\" v-show=\"isOpen\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(312)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/MenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(313)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 312 */
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
/* 313 */
/***/ function(module, exports) {

	module.exports = "\n<li\n  role=\"menuitem\"\n  :style=\"style\"\n  :title=\"title\"\n  @click=\"onSelect\">\n  <slot></slot>\n</li>\n";

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Breadcrumb = __webpack_require__(315);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(318);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Breadcrumb2.default.BreadcrumbItem = _BreadcrumbItem2.default;
	
	exports.default = _Breadcrumb2.default;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(316)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/Breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(317)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 316 */
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
/* 317 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"breadcrumbs\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(319)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/BreadcrumbItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(320)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 319 */
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
/* 320 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"breadcrumb\">\n\t<a v-if=\"href\" :href=\"href\" class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</a>\n\t<span v-else class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</span>\n\t<span class=\"breadcrumb-slash\">{{ slash }}</span>\n</span>\n";

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(322);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Jumper = __webpack_require__(324);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Pagination2.default.Jumper = _Jumper2.default;
	
	exports.default = _Pagination2.default;

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(323)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(334)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Jumper = __webpack_require__(324);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	var _Pager = __webpack_require__(328);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	var _Options = __webpack_require__(331);
	
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
	        },
	        class: {
	            type: String
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
	
	    computed: {
	        wrapClasses: function wrapClasses() {
	            return this.class.split(' ');
	        }
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
	//   <div class="pagination" :class="wrapClasses" v-if="totalPage > 1">
	//     <Options :total="total" :single="single"  :placeholder="placeholder" :show-size-changer="showSizeChanger"></Options>
	//     <jumper
	//         :quick-go="showJumper ? _handleChange.bind(this) : null",
	//         :curr-page="currPage",
	//         :total-page="totalPage",
	//         :mini="mini"
	//     ></jumper>
	//     <pager :page-range="pageRange" :simple="simple"  :mini="mini" :page-click="pageClick"></pager>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(325)
	__vue_script__ = __webpack_require__(326)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Jumper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(327)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 325 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 326 */
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
/* 327 */
/***/ function(module, exports) {

	module.exports = "\n\t<div v-if=\"quickGo\" class=\"pagination-jump\">\n\t    <div class=\"input-jumper-wrap\">\n\t\t    跳至\n\t\t    <input type=\"text\" :value=\"_current\" @change=\"_handleChange($event)\" :class=\"_inputWrapClasses\"/>\n\t\t    页\n\t    </div>\n\t  \t<button type=\"button\" @click=\"_go\" :class=\"_btnWrapClasses\">\n\t\t跳转</button>\n  \t</div>\n";

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(329)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pager.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(330)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Icon = __webpack_require__(134);
	
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
/* 330 */
/***/ function(module, exports) {

	module.exports = "\n    <ul :class=\"wrapClasses\">\n        <li v-for=\"page in pageRange\" @click=\"pageClick(page.num)\" :class=\"{\n        'current':(page.className==='current'),\n\t\t'pagination-item':true,\n        'pagination-item-prev':(page.className==='prev'),\n        'pagination-item-next':(page.className==='next'),\n        'pagination-item-disabled':(page.className==='disabled'),\n        'pagination-item-ellipsis':(page.className==='ellipsis'),\n        'pagination-item-slash':(page.className==='slash')}\" >\n    \t\t<span v-if=\"page.className!='prev' && page.className!='next'\">\n    \t\t\t{{page.text}}\n    \t\t</span>\n    \t\t<icon v-if=\"page.className==='prev'\" type=\"prev\" size=\"12\" color=\"#666\" ></icon>\n    \t\t<icon v-if=\"page.className==='next'\" type=\"next\" size=\"12\" color=\"#666\"></icon>\n    \t\t<icon v-if=\"page.className==='disabled' && page.icon==='prev'\" type=\"prev\" size=\"12\" color=\"#e6e6e6\"></icon>\n\t\t\t<icon v-if=\"page.className==='disabled' && page.icon==='next'\" type=\"next\" size=\"12\" color=\"#e6e6e6\"></icon>\n        </li>\n    </ul>\n";

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(332)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(333)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Select = __webpack_require__(181);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vOption = _Select2.default.Option; // <template>
	//     <div v-if="showSizeChanger" class="pagination-selector">
	//         <v-select :default-value.sync="single" :placeholder="placeholder">
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
			vSelect: _Select2.default, vOption: vOption
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 333 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizeChanger\" class=\"pagination-selector\">\n    <v-select :default-value.sync=\"single\" :placeholder=\"placeholder\">\n        <v-option value=\"10\">10 条/页</v-option>\n        <v-option value=\"20\">20 条/页</v-option>\n        <v-option value=\"30\">30 条/页</v-option>\n        <v-option value=\"40\">40 条/页</v-option>\n    </v-select>\n    <div class=\"pagination-totalpage\">共{{ total }}条数据</div>\n</div>\n";

/***/ },
/* 334 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pagination\" :class=\"wrapClasses\" v-if=\"totalPage > 1\">\n  <Options :total=\"total\" :single=\"single\"  :placeholder=\"placeholder\" :show-size-changer=\"showSizeChanger\"></Options>\n  <jumper\n      :quick-go=\"showJumper ? _handleChange.bind(this) : null\",\n      :curr-page=\"currPage\",\n      :total-page=\"totalPage\",\n      :mini=\"mini\"\n  ></jumper>\n  <pager :page-range=\"pageRange\" :simple=\"simple\"  :mini=\"mini\" :page-click=\"pageClick\"></pager>\n</div>\n";

/***/ },
/* 335 */
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
/* 336 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 337 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 338 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"grid\">\n    <h3 class=\"page-header\"><a href=\"#grid\" class=\"anchor\">Grid 栅格 </a></h3>\n    <div class=\"bs-example\">\n      <div class=\"container grid-demo\">\n        <v-row>\n          <v-col span=\"24\">col-lg-24</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"23\">col-lg-23</v-col>\n          <v-col span=\"1\">1</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"22\">col-lg-22</v-col>\n          <v-col span=\"2\">2</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"21\">col-lg-21</v-col>\n          <v-col span=\"3\">col-lg-3</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"20\">col-lg-20</v-col>\n          <v-col span=\"4\">col-lg-4</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"19\">col-lg-19</v-col>\n          <v-col span=\"5\">col-lg-5</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"18\">col-lg-18</v-col>\n          <v-col span=\"6\">col-lg-6</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"17\">col-lg-17</v-col>\n          <v-col span=\"7\">col-lg-7</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"16\">col-lg-16</v-col>\n          <v-col span=\"8\">col-lg-8</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"15\">col-lg-15</v-col>\n          <v-col span=\"9\">col-lg-9</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"14\">col-lg-14</v-col>\n          <v-col span=\"10\">col-lg-10</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"13\">col-lg-13</v-col>\n          <v-col span=\"11\">col-lg-11</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"12\">col-lg-12</v-col>\n          <v-col span=\"12\">col-lg-12</v-col>\n        </v-row>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-row>\n  <v-col span=\"24\">col-lg-24</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"23\">col-lg-23</v-col>\n  <v-col span=\"1\">1</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"22\">col-lg-22</v-col>\n  <v-col span=\"2\">2</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"21\">col-lg-21</v-col>\n  <v-col span=\"3\">col-lg-3</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"20\">col-lg-20</v-col>\n  <v-col span=\"4\">col-lg-4</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"19\">col-lg-19</v-col>\n  <v-col span=\"5\">col-lg-5</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"18\">col-lg-18</v-col>\n  <v-col span=\"6\">col-lg-6</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"17\">col-lg-17</v-col>\n  <v-col span=\"7\">col-lg-7</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"16\">col-lg-16</v-col>\n  <v-col span=\"8\">col-lg-8</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"15\">col-lg-15</v-col>\n  <v-col span=\"9\">col-lg-9</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"14\">col-lg-14</v-col>\n  <v-col span=\"10\">col-lg-10</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"13\">col-lg-13</v-col>\n  <v-col span=\"11\">col-lg-11</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"12\">col-lg-12</v-col>\n  <v-col span=\"12\">col-lg-12</v-col>\n</v-row>\n</script></code></pre>\n    </script>\n    </code>\n  </div>\n";

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(341)
	__vue_script__ = __webpack_require__(343)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/iconDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(344)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(342);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./iconDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./iconDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n#icon .iconfont {\n  display: inline-block;\n  margin:8px;\n}\n", ""]);
	
	// exports


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: { Icon: _src.Icon }
	};
	// </script>
	//
	// <style>
	//   #icon .iconfont {
	//     display: inline-block;
	//     margin:8px;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="icon">
	//     <h3 class="page-header"><a href="#icon" class="anchor">Icon 图标</a></h3>
	//     <div class="bs-example">
	//       <icon type="head">页首</icon>
	//       <icon type="tail">页尾</icon>
	//       <icon type="clear">清除</icon>
	//       <icon type="close">关闭</icon>
	//       <icon type="search">搜索</icon>
	//       <icon type="up">向上</icon>
	//       <icon type="down">向下</icon>
	//       <icon type="prev">上一页</icon>
	//       <icon type="next">下一页</icon>
	//       <icon type="waring" color="red" size="20">警告</icon>
	//       <icon type="error">错误</icon>
	//       <icon type="info">信息</icon>
	//       <icon type="help">帮助</icon>
	//       <icon type="success">成功</icon>
	//       <icon type="filter">过滤</icon>
	//       <icon type="doc">附件</icon>
	//       <icon type="calendar">日历</icon>
	//       <icon type="tick">对勾</icon>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->
	// <icon type="head">页首</icon>
	// <icon type="tail">页尾</icon>
	// <icon type="clear">清除</icon>
	// <icon type="close">关闭</icon>
	// <icon type="search">搜索</icon>
	// <icon type="up">向上</icon>
	// <icon type="down">向下</icon>
	// <icon type="prev">上一页</icon>
	// <icon type="next">下一页</icon>
	// <icon type="waring" color="red" size="36">警告</icon>
	// <icon type="error">错误</icon>
	// <icon type="info">信息</icon>
	// <icon type="help">帮助</icon>
	// <icon type="success">成功</icon>
	// <icon type="filter">过滤</icon>
	// <icon type="doc">附件</icon>
	// <icon type="calendar">日历</icon>
	// <icon type="tick">对勾</icon>
	//   </script></code></pre>
	//   <h2>Options</h2>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 344 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"icon\">\n    <h3 class=\"page-header\"><a href=\"#icon\" class=\"anchor\">Icon 图标</a></h3>\n    <div class=\"bs-example\">\n      <icon type=\"head\">页首</icon>\n      <icon type=\"tail\">页尾</icon>\n      <icon type=\"clear\">清除</icon>\n      <icon type=\"close\">关闭</icon>\n      <icon type=\"search\">搜索</icon>\n      <icon type=\"up\">向上</icon>\n      <icon type=\"down\">向下</icon>\n      <icon type=\"prev\">上一页</icon>\n      <icon type=\"next\">下一页</icon>\n      <icon type=\"waring\" color=\"red\" size=\"20\">警告</icon>\n      <icon type=\"error\">错误</icon>\n      <icon type=\"info\">信息</icon>\n      <icon type=\"help\">帮助</icon>\n      <icon type=\"success\">成功</icon>\n      <icon type=\"filter\">过滤</icon>\n      <icon type=\"doc\">附件</icon>\n      <icon type=\"calendar\">日历</icon>\n      <icon type=\"tick\">对勾</icon>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->\n<icon type=\"head\">页首</icon>\n<icon type=\"tail\">页尾</icon>\n<icon type=\"clear\">清除</icon>\n<icon type=\"close\">关闭</icon>\n<icon type=\"search\">搜索</icon>\n<icon type=\"up\">向上</icon>\n<icon type=\"down\">向下</icon>\n<icon type=\"prev\">上一页</icon>\n<icon type=\"next\">下一页</icon>\n<icon type=\"waring\" color=\"red\" size=\"36\">警告</icon>\n<icon type=\"error\">错误</icon>\n<icon type=\"info\">信息</icon>\n<icon type=\"help\">帮助</icon>\n<icon type=\"success\">成功</icon>\n<icon type=\"filter\">过滤</icon>\n<icon type=\"doc\">附件</icon>\n<icon type=\"calendar\">日历</icon>\n<icon type=\"tick\">对勾</icon>\n  </script></code></pre>\n  <h2>Options</h2>\n  </div>\n";

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(346)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/buttonDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(347)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var vButton = _src.Button; // <template>
	//   <div class="bs-docs-section" id="button">
	//     <h3 class="page-header"><a href="#buttons" class="anchor">Button 按钮</a></h3>
	//     <div class="bs-example">
	//       <v-button large primary value="大号+主按钮"></v-button>
	//       <v-button primary value="中号+主按钮"></v-button>
	//       <v-button small primary value="小号+主按钮"></v-button>
	//       <br>
	//       <v-button large secondary value="大号+次按钮"></v-button>
	//       <v-button secondary value="中号+次按钮"></v-button>
	//       <v-button small secondary value="小号+次按钮"></v-button>
	//       <br>
	//       <v-button large tertiary value="大号+三级按钮"></v-button>
	//       <v-button tertiary value="中号+三级按钮"></v-button>
	//       <v-button small tertiary value="小号+三级按钮"></v-button>
	//       <br>
	//       <v-button large disabled value="大号+失效按钮"></v-button>
	//       <v-button disabled value="中号+失效按钮"></v-button>
	//       <v-button small disabled value="小号+失效按钮"></v-button>
	//       <br>
	//       <v-button large text value="大号+文字型按钮"></v-button>
	//       <v-button text value="中号+文字型按钮"></v-button>
	//       <v-button small text value="小号+文字型按钮"></v-button>
	//       <br>
	//       <v-button>
	//         <icon type="close">关闭</icon>
	//       </v-button>
	//     </div>
	//
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <!-- 基础按钮，使用封装的Button组件，通过添加属性，呈现样式 -->
	// <!-- 大号（large）、中号（默认）和小号（small）-->
	// <!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
	// <!-- 可以通过属性value控制按钮文案或者组件调用中插入html代码 -->
	// <v-button large primary value="大号+主按钮"></v-button>
	// <v-button large primary>大号+主按钮</v-button>
	// <v-button>
	//   <icon type="close">关闭</icon>
	// </v-button>
	// </script></code></pre>
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
	//           <td>value</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>按钮文案</td>
	//         </tr>
	//         <tr>
	//           <td>large</td>
	//           <td></td>
	//           <td></td>
	//           <td>按钮尺寸，大</td>
	//         </tr>
	//         <tr>
	//           <td>small</td>
	//           <td></td>
	//           <td></td>
	//           <td>按钮尺寸，小</td>
	//         </tr>
	//         <tr>
	//           <td>primary</td>
	//           <td></td>
	//           <td></td>
	//           <td>按钮类型，主按钮</td>
	//         </tr>
	//         <tr>
	//           <td>secondary</td>
	//           <td></td>
	//           <td></td>
	//           <td>按钮类型，次按钮</td>
	//         </tr>
	//         <tr>
	//           <td>tertiary</td>
	//           <td></td>
	//           <td></td>
	//           <td>按钮类型，三级按钮</td>
	//         </tr>
	//         <tr>
	//           <td>disabled</td>
	//           <td></td>
	//           <td></td>
	//           <td>按钮类型，失效按钮</td>
	//         </tr>
	//         <tr>
	//           <td>text</td>
	//           <td></td>
	//           <td></td>
	//           <td>按钮类型，文字型按钮</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>
	
	exports.default = {
	  components: {
	    vButton: vButton,
	    Icon: _src.Icon
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"button\">\n    <h3 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Button 按钮</a></h3>\n    <div class=\"bs-example\">\n      <v-button large primary value=\"大号+主按钮\"></v-button>\n      <v-button primary value=\"中号+主按钮\"></v-button>\n      <v-button small primary value=\"小号+主按钮\"></v-button>\n      <br>\n      <v-button large secondary value=\"大号+次按钮\"></v-button>\n      <v-button secondary value=\"中号+次按钮\"></v-button>\n      <v-button small secondary value=\"小号+次按钮\"></v-button>\n      <br>\n      <v-button large tertiary value=\"大号+三级按钮\"></v-button>\n      <v-button tertiary value=\"中号+三级按钮\"></v-button>\n      <v-button small tertiary value=\"小号+三级按钮\"></v-button>\n      <br>\n      <v-button large disabled value=\"大号+失效按钮\"></v-button>\n      <v-button disabled value=\"中号+失效按钮\"></v-button>\n      <v-button small disabled value=\"小号+失效按钮\"></v-button>\n      <br>\n      <v-button large text value=\"大号+文字型按钮\"></v-button>\n      <v-button text value=\"中号+文字型按钮\"></v-button>\n      <v-button small text value=\"小号+文字型按钮\"></v-button>\n      <br>\n      <v-button>\n        <icon type=\"close\">关闭</icon>\n      </v-button>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- 基础按钮，使用封装的Button组件，通过添加属性，呈现样式 -->\n<!-- 大号（large）、中号（默认）和小号（small）-->\n<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->\n<!-- 可以通过属性value控制按钮文案或者组件调用中插入html代码 -->\n<v-button large primary value=\"大号+主按钮\"></v-button>\n<v-button large primary>大号+主按钮</v-button>\n<v-button>\n  <icon type=\"close\">关闭</icon>\n</v-button>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>按钮文案</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>按钮尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>按钮尺寸，小</td>\n        </tr>\n        <tr>\n          <td>primary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，主按钮</td>\n        </tr>\n        <tr>\n          <td>secondary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，次按钮</td>\n        </tr>\n        <tr>\n          <td>tertiary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，三级按钮</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，失效按钮</td>\n        </tr>\n        <tr>\n          <td>text</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，文字型按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(349)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/buttonsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(350)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    radio: _src.radio,
	    radioGroup: _src.radioGroup,
	    checkboxGroup: _src.checkboxGroup,
	    checkbox: _src.checkbox
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

/***/ },
/* 350 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"buttons\">\n    <h3 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Buttons 组合切换按钮</a></h3>\n    <div class=\"bs-example\">\n      <h4>基础组合切换按钮样式使用</h4>\n      <div class=\"btn-group large\">\n        <button type=\"button\" class=\"active\">总计</button>\n        <button type=\"button\">语音验证码统计</button>\n        <button type=\"button\">短信验证码统计</button>\n      </div>\n      <br><br>\n      <div class=\"btn-group\">\n        <button type=\"button\">总计</button>\n        <button type=\"button\" class=\"active\">语音验证码统计</button>\n        <button type=\"button\">短信验证码统计</button>\n        <button type=\"button\">流量验证码统计</button>\n      </div>\n      <br><br>\n      <div class=\"btn-group small\">\n        <button type=\"button\">总计</button>\n        <button type=\"button\">语音验证码统计</button>\n        <button type=\"button\" class=\"active\">短信验证码统计</button>\n        <button type=\"button\">流量验证码统计</button>\n        <button type=\"button\">通话</button>\n      </div>\n      <h4>Checkbox</h4>\n      <checkbox-group :value.sync=\"checkboxValue\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\" checked>Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </checkbox-group>\n      <p>\n        <pre>\nCheckbox value: {{checkboxValue | json}}\n        </pre>\n      </p>\n      <hr>\n      <h4>Radio</h4>\n      <radio-group :value.sync=\"radioValue\" size=\"large\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n\n      <radio-group :value.sync=\"radioValue\" size=\"small\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n      <p>\n        <pre>\nRadio value: {{radioValue}}\n        </pre>\n      </p>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- 组合切换按钮，样式采用名称组合的形式 -->\n<!-- 按钮组可包含多个按钮 -->\n<!-- 用样式btn-group，标识是个按钮组 -->\n<!-- 按钮组尺寸，有大号（large）、中号（default，可以不写）和小号（small）-->\n<!-- 通过增加active样式，默认选中按钮 -->\n<div class=\"btn-group large\">\n  <button type=\"button\" class=\"active\">总计</button>\n  <button type=\"button\">语音验证码统计</button>\n  <button type=\"button\">短信验证码统计</button>\n</div>\n<div class=\"btn-group\">\n  <button type=\"button\">总计</button>\n  <button type=\"button\" class=\"active\">语音验证码统计</button>\n  <button type=\"button\">短信验证码统计</button>\n  <button type=\"button\">流量验证码统计</button>\n</div>\n<div class=\"btn-group small\">\n  <button type=\"button\">总计</button>\n  <button type=\"button\">语音验证码统计</button>\n  <button type=\"button\" class=\"active\">短信验证码统计</button>\n  <button type=\"button\">流量验证码统计</button>\n  <button type=\"button\">通话</button>\n</div>\n<!-- 集合类似checkbox和radio功能的按钮组合调用方式如下 -->\n<checkbox-group :value.sync=\"checkboxValue\">\n  <checkbox value=\"left\">Left</checkbox>\n  <checkbox value=\"middle\" checked>Middle</checkbox>\n  <checkbox value=\"right\">Right</checkbox>\n</checkbox-group>\n\n<radio-group :value.sync=\"radioValue\" size=\"large\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n<radio-group :value.sync=\"radioValue\" size=\"small\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n\n</script></code></pre>\n  </div>\n";

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(352)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/inputDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(353)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    vInput: _src.Input
	  }
	};
	// </script>
	//

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="input">
	//     <h3 class="page-header"><a href="#input" class="anchor">Input 输入框</a></h3>
	//     <div class="bs-example">
	//     <div>
	//       <v-input large type="text" placeholder="输入框－大尺寸"></v-input>
	//     </div>
	//     <br>
	//     <div>
	//       <v-input type="text" placeholder="输入框－默认尺寸"></v-input>
	//     </div>
	//     <br>
	//     <div>
	//       <v-input small type="text" placeholder="输入框－小尺寸"></v-input>
	//     </div>
	//     <br>
	//     <div>
	//       <v-input disabled type="text" placeholder="禁用输入框－默认尺寸"></v-input>
	//     </div>
	//     <br>
	//     <div>
	//       <v-input error type="text" placeholder="error输入框－默认尺寸"></v-input>
	//     </div>
	//     <br>
	//     <div>
	//       <v-input success type="text" placeholder="success输入框－默认尺寸"></v-input>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <!-- input输入框，使用封装的Input组件，通过添加属性，呈现样式 -->
	// <!-- 大号（large）、中号（默认）、小号（small）、禁用（disabled）、错误提示（error）、成功提示（success）-->
	// <!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
	// <!-- 通过属性placeholder控制输入框预期值的提示信息 -->
	// <!-- 通过属性type控制输入框类型，radio和checkbox不在该组件处理范围，会单独处理，请关注Radio组件和Checkbox组件 -->
	// <v-input large type="email" placeholder="输入框－大尺寸"></v-input>
	// </script></code></pre>
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
	//           <td>placeholder</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>输入框预期值的提示信息</td>
	//         </tr>
	//         <tr>
	//           <td>large</td>
	//           <td></td>
	//           <td></td>
	//           <td>输入框尺寸，大</td>
	//         </tr>
	//         <tr>
	//           <td>small</td>
	//           <td></td>
	//           <td></td>
	//           <td>输入框尺寸，小</td>
	//         </tr>
	//         <tr>
	//           <td>disabled</td>
	//           <td></td>
	//           <td></td>
	//           <td>输入框状态，禁用</td>
	//         </tr>
	//         <tr>
	//           <td>error</td>
	//           <td></td>
	//           <td></td>
	//           <td>输入框状态，输入验证失败</td>
	//         </tr>
	//         <tr>
	//           <td>success</td>
	//           <td></td>
	//           <td></td>
	//           <td>输入框状态，输入验证成功</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 353 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"input\">\n    <h3 class=\"page-header\"><a href=\"#input\" class=\"anchor\">Input 输入框</a></h3>\n    <div class=\"bs-example\">\n    <div>\n      <v-input large type=\"text\" placeholder=\"输入框－大尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input type=\"text\" placeholder=\"输入框－默认尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input small type=\"text\" placeholder=\"输入框－小尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input disabled type=\"text\" placeholder=\"禁用输入框－默认尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input error type=\"text\" placeholder=\"error输入框－默认尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input success type=\"text\" placeholder=\"success输入框－默认尺寸\"></v-input>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- input输入框，使用封装的Input组件，通过添加属性，呈现样式 -->\n<!-- 大号（large）、中号（默认）、小号（small）、禁用（disabled）、错误提示（error）、成功提示（success）-->\n<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->\n<!-- 通过属性placeholder控制输入框预期值的提示信息 -->\n<!-- 通过属性type控制输入框类型，radio和checkbox不在该组件处理范围，会单独处理，请关注Radio组件和Checkbox组件 -->\n<v-input large type=\"email\" placeholder=\"输入框－大尺寸\"></v-input>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>输入框预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>输入框尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>输入框尺寸，小</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，禁用</td>\n        </tr>\n        <tr>\n          <td>error</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，输入验证失败</td>\n        </tr>\n        <tr>\n          <td>success</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，输入验证成功</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>";

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(355)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/uploaderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(356)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    FileUpload: _src2.default
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
	//     <h3 class="page-header"><a href="#upload" class="anchor">Uploader 文件上传 </a></h3>
	//     <div class="bs-example">
	//       <h4>Uploader 文件上传</h4>
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
/* 356 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"upload\">\n    <h3 class=\"page-header\"><a href=\"#upload\" class=\"anchor\">Uploader 文件上传 </a></h3>\n    <div class=\"bs-example\">\n      <h4>Uploader 文件上传</h4>\n      <h5>1、点击上传</h5>\n      <form id=\"upload1\" method=\"post\" action=\"{{ajaxUrl}}\">\n        <file-upload\n          id=\"file-upload-click-test\"\n          form-id=\"upload1\"\n          upload-type=\"click\"\n          :ajax=\"ajaxUrl\"\n          :multiple=\"multiple\"\n          name=\"files1\"\n          :auto-submit=\"true\"\n          :hide-button=\"true\"\n          :file-list.sync=\"fileList1\">\n        </file-upload>\n      </form>\n      <h5>2、支持拖拽上传</h5>\n      <form id=\"upload2\" method=\"post\" action=\"{{ajaxUrl}}\">\n        <file-upload\n          id=\"file-upload-drag-test\"\n          form-id=\"upload2\"\n          upload-type=\"drag\"\n          :ajax=\"ajaxUrl\"\n          :multiple=\"multiple\"\n          name=\"files2\"\n          :auto-submit=\"autoSubmit\"\n          :hide-button=\"hideButton\"\n          :file-list.sync=\"fileList2\">\n        </file-upload>\n      </form>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\nupload文件上传\n1、点击上传调用方式\n<form id=\"upload1\" method=\"post\" action=\"upload.do\">\n  <file-upload id=\"file-upload-click-test\" form-id=\"upload1\" upload-type=\"click\" :ajax=\"upload.do\" :multiple=\"true\" name=\"files1\" :auto-submit=\"true\" :hide-button=\"true\" :file-list.sync=\"fileList1\">\n  </file-upload>\n</form>\n2、支持拖拽上传调用方式\n<form id=\"upload2\" method=\"post\" action=\"upload.do\">\n  <file-upload id=\"file-upload-drag-test\" form-id=\"upload2\" upload-type=\"drag\" :ajax=\"upload.do\" :multiple=\"true\" name=\"files2\" :auto-submit=\"false\" :hide-button=\"false\" :file-list.sync=\"fileList2\">\n  </file-upload>\n</form>\n    </script></code></pre>\n    <h4>参数</h4>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>唯一标识</td>\n        </tr>\n        <tr>\n          <td>form-id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>如需上传后自动提交，请确保以该值为id的form存在，否则，无需设置</td>\n        </tr>\n        <tr>\n          <td>upload-type</td>\n          <td><code>String</code></td>\n          <td><code>click</code></td>\n          <td>取值有<code>click</code>和<code>drop</code>两种，分别代表点击上传和支持拖拽上传</td>\n        </tr>\n        <tr>\n          <td>accept</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>上传的文件类型指定，详细可查看MIME类型</td>\n        </tr>\n        <tr>\n          <td>ajax</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文件上传的地址</td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否支持多文件上传</td>\n        </tr>\n        <tr>\n          <td>name</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>名称</td>\n        </tr>\n        <tr>\n          <td>auto-submit</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>上传后是否自动提交</td>\n        </tr>\n        <tr>\n          <td>hide-button</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否隐藏upload按钮</td>\n        </tr>\n        <tr>\n          <td>file-list</td>\n          <td><code>Array</code></td>\n          <td><code>空数组</code></td>\n          <td>上传的文件列表</td>\n        </tr>\n        <tr>\n          <td>method</td>\n          <td><code>String</code></td>\n          <td><code>POST</code></td>\n          <td>上传文件请求类型</td>\n        </tr>\n        <tr>\n          <td>completed::file-upload</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>上传请求执行完成后的回调，需要在events中捕获。</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n";

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(358)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/formDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(359)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var Option = _src.Select.Option; // <template>
	//
	//   <div class="bs-docs-section" id="form">
	//     <h3 class="page-header"><a href="#form" class="anchor">Form 表单 </a></h3>
	//     <div class="bs-example">
	//       <v-form :submit="formSubmitFun">
	//         <form-item required label="联系人电话：" :valid-status="telStatus" label-col="4" has-icon tips="123">
	//           <v-input type="text" placeholder="电话号码" :valid-status="telStatus" :value.sync="tel" @click="clickFun"></v-input>
	//         </form-item>
	//         <form-item required label="验证码：" label-col="4" wrapper-col="10">
	//           <v-col span="20">
	//             <v-input disabled type="text" placeholder="请输入验证码"></v-input>
	//           </v-col>
	//           <v-col span="4"><v-button tertiary value="获取验证码"></v-button></v-col>
	//         </form-item>
	//         <form-item required label="应用名/网站名：" label-col="4">
	//           <v-input type="text" placeholder="若还未上线可填无"></v-input>
	//         </form-item>
	//         <form-item required label="行业：" label-col="4">
	//           <v-select :default-value.sync="arr" :options="industry" :close-on-select="true"></v-select>
	//         </form-item>
	//         <form-item required label="电话号码：" label-col="4">
	//           <v-input placeholder="请输入电话号码"></v-input>
	//         </form-item>
	//         <form-item required label="电话号码：" valid-status="error" has-icon label-col="4" tips="请输入有效的电话号码">
	//           <v-input valid-status="error" placeholder="请输入电话号码"></v-input>
	//         </form-item>
	//         <form-item required label="电话号码：" valid-status="success" has-icon label-col="4" tips="请输入有效的电话号码">
	//           <v-input valid-status="success" placeholder="请输入电话号码"></v-input>
	//         </form-item>
	//         <form-item required label-col="4">
	//           <label><input type="checkbox" />阅读并接受《用户协议》</label>
	//         </form-item>
	//         <form-item required label-col="4">
	//           <v-button primary @click="validFun">确定</v-button>
	//           <v-button tertiary value="重置条件"></v-button>
	//         </form-item>
	//       </v-form>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <v-form :submit="formSubmitFun">
	//   <form-item required label="联系人电话：" label-col="4" has-icon tips="123">
	//     <v-input type="text" placeholder="电话号码" :value.sync="tel"></v-input>
	//   </form-item>
	//   <form-item required label="验证码：" label-col="4">
	//     <v-col span="20">
	//       <v-input type="text" placeholder="请输入验证码"></v-input>
	//     </v-col>
	//     <v-col span="4"><v-button tertiary value="获取验证码"></v-button></v-col>
	//   </form-item>
	//   <form-item required label="应用名/网站名：" label-col="4">
	//     <v-input type="text" placeholder="若还未上线可填无"></v-input>
	//   </form-item>
	//   <form-item required label="行业：" label-col="4">
	//     <v-select :default-value.sync="arr" :options="industry" :close-on-select="true"></v-select>
	//   </form-item>
	//   <form-item required label="电话号码：" has-icon label-col="4">
	//     <v-input placeholder="请输入电话号码"></v-input>
	//   </form-item>
	//   <form-item required label="电话号码：" valid-status="error" has-icon label-col="4" tips="请输入有效的电话号码">
	//     <v-input error placeholder="请输入电话号码"></v-input>
	//   </form-item>
	//   <form-item required label="电话号码：" valid-status="success" has-icon label-col="4" tips="请输入有效的电话号码">
	//     <v-input success placeholder="请输入电话号码"></v-input>
	//   </form-item>
	//   <form-item required label-col="4">
	//     <label><input type="checkbox" />阅读并接受《用户协议》</label>
	//   </form-item>
	//   <form-item required label-col="4">
	//     <v-button primary value="确定"></v-button>
	//     <v-button tertiary value="重置条件"></v-button>
	//   </form-item>
	// </v-form>
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
	
	var FormItem = _src.Form.FormItem;
	var Col = _src.Layout.Col;
	var Row = _src.Layout.Row;
	
	exports.default = {
	  components: {
	    vCol: Col,
	    vRow: Row,
	    vInput: _src.Input,
	    vButton: _src.Button,
	    vSelect: _src.Select,
	    vOption: Option,
	    vForm: _src.Form,
	    FormItem: FormItem
	    // FormInput
	  },
	  data: function data() {
	    return {
	      arr: [],
	      industry: [{ value: '1', label: '计算机' }, { value: '2', label: '网络' }, { value: '3', label: '电子信息' }, { value: '4', label: '材料工程' }, { value: '5', label: '医学' }],
	      myform: {},
	      valid: {
	        nameStatus: ''
	      },
	      formSubmitFun: function formSubmitFun() {
	        alert(1);
	      },
	
	      tel: '',
	      telStatus: 'error'
	    };
	  },
	
	  watch: {
	    tel: function tel(newVal, oldVal) {
	      alert(newVal);
	    }
	  },
	  methods: {
	    validFun: function validFun() {
	      if (!this.tel) {
	        this.telStatus = 'error';
	      }
	    },
	    clickFun: function clickFun() {
	      alert('click');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 359 */
/***/ function(module, exports) {

	module.exports = "\n\n  <div class=\"bs-docs-section\" id=\"form\">\n    <h3 class=\"page-header\"><a href=\"#form\" class=\"anchor\">Form 表单 </a></h3>\n    <div class=\"bs-example\">\n      <v-form :submit=\"formSubmitFun\">\n        <form-item required label=\"联系人电话：\" :valid-status=\"telStatus\" label-col=\"4\" has-icon tips=\"123\">\n          <v-input type=\"text\" placeholder=\"电话号码\" :valid-status=\"telStatus\" :value.sync=\"tel\" @click=\"clickFun\"></v-input>\n        </form-item>\n        <form-item required label=\"验证码：\" label-col=\"4\" wrapper-col=\"10\">\n          <v-col span=\"20\">\n            <v-input disabled type=\"text\" placeholder=\"请输入验证码\"></v-input>\n          </v-col>\n          <v-col span=\"4\"><v-button tertiary value=\"获取验证码\"></v-button></v-col>\n        </form-item>\n        <form-item required label=\"应用名/网站名：\" label-col=\"4\">\n          <v-input type=\"text\" placeholder=\"若还未上线可填无\"></v-input>\n        </form-item>\n        <form-item required label=\"行业：\" label-col=\"4\">\n          <v-select :default-value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n        </form-item>\n        <form-item required label=\"电话号码：\" label-col=\"4\">\n          <v-input placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"电话号码：\" valid-status=\"error\" has-icon label-col=\"4\" tips=\"请输入有效的电话号码\">\n          <v-input valid-status=\"error\" placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"电话号码：\" valid-status=\"success\" has-icon label-col=\"4\" tips=\"请输入有效的电话号码\">\n          <v-input valid-status=\"success\" placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label-col=\"4\">\n          <label><input type=\"checkbox\" />阅读并接受《用户协议》</label>\n        </form-item>\n        <form-item required label-col=\"4\">\n          <v-button primary @click=\"validFun\">确定</v-button>\n          <v-button tertiary value=\"重置条件\"></v-button>\n        </form-item>\n      </v-form>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-form :submit=\"formSubmitFun\">\n  <form-item required label=\"联系人电话：\" label-col=\"4\" has-icon tips=\"123\">\n    <v-input type=\"text\" placeholder=\"电话号码\" :value.sync=\"tel\"></v-input>\n  </form-item>\n  <form-item required label=\"验证码：\" label-col=\"4\">\n    <v-col span=\"20\">\n      <v-input type=\"text\" placeholder=\"请输入验证码\"></v-input>\n    </v-col>\n    <v-col span=\"4\"><v-button tertiary value=\"获取验证码\"></v-button></v-col>\n  </form-item>\n  <form-item required label=\"应用名/网站名：\" label-col=\"4\">\n    <v-input type=\"text\" placeholder=\"若还未上线可填无\"></v-input>\n  </form-item>\n  <form-item required label=\"行业：\" label-col=\"4\">\n    <v-select :default-value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n  </form-item>\n  <form-item required label=\"电话号码：\" has-icon label-col=\"4\">\n    <v-input placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"电话号码：\" valid-status=\"error\" has-icon label-col=\"4\" tips=\"请输入有效的电话号码\">\n    <v-input error placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"电话号码：\" valid-status=\"success\" has-icon label-col=\"4\" tips=\"请输入有效的电话号码\">\n    <v-input success placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label-col=\"4\">\n    <label><input type=\"checkbox\" />阅读并接受《用户协议》</label>\n  </form-item>\n  <form-item required label-col=\"4\">\n    <v-button primary value=\"确定\"></v-button>\n    <v-button tertiary value=\"重置条件\"></v-button>\n  </form-item>\n</v-form>\n    </script></code></pre>\n    </script>\n    </code>\n  </div>\n";

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(361)
	__vue_script__ = __webpack_require__(362)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/switchDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(363)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 361 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  data: function data() {
	    return {
	      checked: true,
	      disabled: true,
	      smallModal: false
	    };
	  },
	
	  components: {
	    vSwitch: _src.Switch,
	    vButton: _src.Button,
	    vIcon: _src.Icon
	  },
	  methods: {
	    changeHandler: function changeHandler(checked) {
	      this.checked = checked;
	      alert(checked);
	    },
	    _clickHandler: function _clickHandler() {
	      this.disabled = !this.disabled;
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
	//             <td><v-switch small color="#000"></v-switch></td>
	//             <td><v-switch small checked :on-change="changeHandler"></v-switch>
	//             </td>
	//             <td><v-switch small disabled></v-switch></td>
	//           </tr>
	//           <tr>
	//             <td><v-switch></v-switch></td>
	//             <td><v-switch checked :on-change="changeHandler"></v-switch></td>
	//             <td><v-switch disabled></v-switch></td>
	//           </tr>
	//         </table>
	//
	//       <h4 class="example-title">带文字形式</h4>
	//         <table class="switchDocs-demo-table">
	//           <tr>
	//             <td><v-switch>
	//           <span slot="checkedPart">开</span>
	//           <span slot="unCheckedPart">关</span>
	//         </v-switch></td>
	//             <td><v-switch :disabled="disabled" checked>
	//           <span slot="checkedPart">开</span>
	//           <span slot="unCheckedPart">关</span>
	//         </v-switch>
	//         </td>
	//             <td><v-switch :disabled="disabled">
	//           <span slot="checkedPart">开</span>
	//           <span slot="unCheckedPart">关</span>
	//         </v-switch>
	//         </td>
	//           </tr>
	//         </table>
	//         <h4 class="example-title">带图标形式</h4>
	//         <table class="switchDocs-demo-table">
	//             <tr>
	//               <td>
	//                 <v-switch>
	//                   <span slot="checkedPart"><v-icon type="tick" size="16"></v-icon></span>
	//                   <span slot="unCheckedPart"><v-icon type="close" size="12"></v-icon></span>
	//                 </v-switch>
	//               </td>
	//             </tr>
	//         </table>
	//
	//         <v-button large primary value="toggle disabled" @click="_clickHandler"></v-button>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <v-switch small color="#000"></v-switch>
	// <v-switch small checked :on-change="changeHandler"></v-switch>
	// <v-switch small disabled></v-switch>
	// <v-switch></v-switch>
	// <v-switch checked :on-change="changeHandler"></v-switch>
	// <v-switch disabled></v-switch>
	// <v-switch>
	//   <span slot="checkedPart">开</span>
	//   <span slot="unCheckedPart">关</span>
	// </v-switch>
	// <v-switch :disabled="disabled" checked>
	//   <span slot="checkedPart">开</span>
	//   <span slot="unCheckedPart">关</span>
	// </v-switch>
	// <v-switch :disabled="disabled">
	//   <span slot="checkedPart">开</span>
	//   <span slot="unCheckedPart">关</span>
	// </v-switch>
	// <v-switch>
	//   <span slot="checkedPart"><v-icon type="tick" size="16"></v-icon></span>
	//   <span slot="unCheckedPart"><v-icon type="close" size="12"></v-icon></span>
	// </v-switch>
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
	//         <td>color</td>
	//         <td><code>String</code></td>
	//         <td>#00a0ff</td>
	//         <td>switch的颜色</td>
	//       </tr>
	//       <tr>
	//         <td>on-change</td>
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

/***/ },
/* 363 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"switch\">\n    <h3 class=\"page-header\"><a href=\"#switch\" class=\"anchor\">Switch 开关</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\" >基本类型</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <th>关</th>\n            <th>开</th>\n            <th>禁用</th>\n          </tr>\n          <tr>\n            <td><v-switch small color=\"#000\"></v-switch></td>\n            <td><v-switch small checked :on-change=\"changeHandler\"></v-switch>\n            </td>\n            <td><v-switch small disabled></v-switch></td>\n          </tr>\n          <tr>\n            <td><v-switch></v-switch></td>\n            <td><v-switch checked :on-change=\"changeHandler\"></v-switch></td>\n            <td><v-switch disabled></v-switch></td>\n          </tr>\n        </table>\n\n      <h4 class=\"example-title\">带文字形式</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <td><v-switch>\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch></td>\n            <td><v-switch :disabled=\"disabled\" checked>\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch>\n        </td>\n            <td><v-switch :disabled=\"disabled\">\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch>\n        </td>\n          </tr>\n        </table>\n        <h4 class=\"example-title\">带图标形式</h4>\n        <table class=\"switchDocs-demo-table\">\n            <tr>\n              <td>\n                <v-switch>\n                  <span slot=\"checkedPart\"><v-icon type=\"tick\" size=\"16\"></v-icon></span>\n                  <span slot=\"unCheckedPart\"><v-icon type=\"close\" size=\"12\"></v-icon></span>\n                </v-switch>\n              </td>\n            </tr>\n        </table>\n\n        <v-button large primary value=\"toggle disabled\" @click=\"_clickHandler\"></v-button>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-switch small color=\"#000\"></v-switch>\n<v-switch small checked :on-change=\"changeHandler\"></v-switch>\n<v-switch small disabled></v-switch>\n<v-switch></v-switch>\n<v-switch checked :on-change=\"changeHandler\"></v-switch>\n<v-switch disabled></v-switch>\n<v-switch>\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch :disabled=\"disabled\" checked>\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch :disabled=\"disabled\">\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch>\n  <span slot=\"checkedPart\"><v-icon type=\"tick\" size=\"16\"></v-icon></span>\n  <span slot=\"unCheckedPart\"><v-icon type=\"close\" size=\"12\"></v-icon></span>\n</v-switch>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>checked</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否选中</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否禁用</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td><code>String</code></td>\n        <td>#00a0ff</td>\n        <td>switch的颜色</td>\n      </tr>\n      <tr>\n        <td>on-change</td>\n        <td><code>Function(checked)</code></td>\n        <td></td>\n        <td>状态变化后的回调函数，返回参数为当前checked（boolean）</td>\n      </tr>\n      <tr>\n        <td>slot::checkedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>选中时的内容</td>\n      </tr>\n      <tr>\n        <td>slot::unCheckedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>没选中时的内容</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(365)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/dropdownDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(366)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    Dropdown: _src.Dropdown
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="dropdown">
	//     <h3 class="page-header"><a href="#dropdown" class="anchor">Dropdown 下拉框</a></h3>
	//     <div class="bs-example">
	//       <dropdown>
	//         <div data-toggle="dropdown">
	//           点击显示菜单
	//           <span class="caret"></span>
	//         </div>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a>选项一</a></li>
	//           <li><a>选项二</a></li>
	//           <li><a>选项三</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown>
	//         <button type="button" class="btn btn-success" data-toggle="dropdown">
	//           点击显示菜单 <span class="caret"></span>
	//         </button>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a>选项一</a></li>
	//           <li><a>选项二</a></li>
	//           <li><a>选项三</a></li>
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
/* 366 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"dropdown\">\n    <h3 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown 下拉框</a></h3>\n    <div class=\"bs-example\">\n      <dropdown>\n        <div data-toggle=\"dropdown\">\n          点击显示菜单\n          <span class=\"caret\"></span>\n        </div>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a>选项一</a></li>\n          <li><a>选项二</a></li>\n          <li><a>选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"dropdown\">\n          点击显示菜单 <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a>选项一</a></li>\n          <li><a>选项二</a></li>\n          <li><a>选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\n          点击显示菜单 <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown trigger=\"hover\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n          鼠标移上来显示 <span class=\"caret\"></span>\n        </a>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<dropdown>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n    点击显示菜单\n    <span class=\"caret\"></span>\n  </button>\n  <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n    <li><a href=\"#\">选项一</a></li>\n    <li><a href=\"#\">选项二</a></li>\n    <li><a href=\"#\">选项三</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">其它</a></li>\n  </ul>\n</dropdown>\n</script></code></pre>\n\n\n<h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>trigger</td>\n          <td><code>String</code></td>\n          <td><code>click</code> one of <code>click</code> <code>hover</code></td>\n          <td>触发类型</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(368)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/selectDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(369)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var Option = _src.Select.Option; // <template>
	//   <div class="bs-docs-section" id="select">
	//     <h3 class="page-header"><a href="#select" class="anchor">Select 下拉框</a></h3>
	//     <div class="bs-example">
	//       <p>
	//         <pre>
	// 选中值 : {{single}}
	//         </pre>
	//       </p>
	//       <v-select :value.sync="single" placeholder="请选择一个水果" style="width:200px;" @change="onSlectChange">
	//         <v-option value="Apple">苹果</v-option>
	//         <v-option value="Banana" disabled>Banana</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">OrangeText</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//       <hr>
	//       <h4>多选下拉</h4>
	//       <p>
	//         <pre>
	// 选中值 : {{multiple.join(', ')}}
	//         </pre>
	//       </p>
	//       <v-select multiple :value.sync="multiple" @change="onSlectChange">
	//         <v-option value="Apple">Apple</v-option>
	//         <v-option value="Banana">Banana</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">Orange</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//       <hr>
	//       <h4>多选下拉限制</h4>
	//       <p>
	//         <pre>
	// 选中值 : {{multipleLimit.join(', ')}}
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
	//       <h4>自定义模板</h4>
	//       <p>
	//         <pre>
	// 选中值 : {{custom.join(', ')}}
	//         </pre>
	//       </p>
	//       <v-select multiple :value.sync="custom">
	//         <v-option value="success"><icon type="success" color="green"></icon> 成功</v-option>
	//         <v-option value="error"><icon type="error" color="red"></icon> 错误</v-option>
	//         <v-option value="help"><icon type="help"></icon> 帮助</v-option>
	//         <v-option value="info"><icon type="info"></icon> 信息</v-option>
	//       </v-select>
	//       <hr />
	//       <h4>使用数据填充Select选择框内容</h4>
	//       <p>
	//         可以指定一个数组来填充选项内容，并可搜索
	//         <pre>
	// 选中值 : {{arr}}
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
	//       <h4>下拉出自定义类容</h4>
	//       <v-select placeholder="选择类别" style="width:200px;">
	//         <tabs>
	//           <tab header="系统短信签名"></tab>
	//           <tab header="系统短信签名"></tab>
	//           <tab header="系统短信签名"></tab>
	//         </tabs>
	//       </v-select>
	//       <h4>禁用的下拉框</h4>
	//       <v-select :value.sync="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
	//       </v-select>
	//
	//       <h4>tags</h4>
	//       <v-select tags="true" :options="fruitOptions" :close-on-select="true">
	//       </v-select>
	//
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <p>
	//   <pre>
	// 选中值 : {{single}}
	//   </pre>
	// </p>
	// <v-select :value.sync="single" placeholder="请选择一个水果" style="width:200px;" @change="onSlectChange">
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana" disabled>Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">OrangeText</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr>
	// <h4>多选下拉</h4>
	// <p>
	//   <pre>
	// 选中值 : {{multiple.join(', ')}}
	//   </pre>
	// </p>
	// <v-select multiple :value.sync="multiple">
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana">Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr>
	// <h4>多选下拉限制</h4>
	// <p>
	//   <pre>
	// 选中值 : {{multipleLimit.join(', ')}}
	//   </pre>
	// </p>
	// <v-select multiple :limit="2" :value.sync="multipleLimit">
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana">Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr>
	// <h4>自定义模板</h4>
	// <p>
	//   <pre>
	// 选中值 : {{custom.join(', ')}}
	//   </pre>
	// </p>
	// <v-select multiple :value.sync="custom">
	//   <v-option value="success"><icon type="success" color="green"></icon> 成功</v-option>
	//   <v-option value="error"><icon type="error" color="red"></icon> 错误</v-option>
	//   <v-option value="help"><icon type="help"></icon> 帮助</v-option>
	//   <v-option value="info"><icon type="info"></icon> 信息</v-option>
	// </v-select>
	// <hr />
	// <h4>使用数据填充Select选择框内容</h4>
	// <p>
	//   可以指定一个数组来填充选项内容，并可搜索
	//   <pre>
	// 选中值 : {{arr}}
	//   </pre>
	// </p>
	// <v-select :value.sync="arr" :options="fruitOptions" :search="true" :close-on-select="true">
	// </v-select>
	//
	// <hr />
	// <h4>Automatically close array driven selects</h4>
	// <p>Using the property :close-on-select="true" array driven selects will auto-close after selecting an entry.</p>
	// <v-select :value.sync="arr2" :options="fruitOptions" :close-on-select="true">
	// </v-select>
	//
	// <h4>禁用的下拉框</h4>
	// <v-select :value.sync="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
	// </v-select>
	// </script></code></pre>
	//
	//     <h2>Select 选项</h2>
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
	//           <td>defaultValue</td>
	//           <td><code>Array/String</code></td>
	//           <td><code>[]</code></td>
	//           <td>默认要选中的值，如果是多选框可以设置数组</td>
	//         </tr>
	//         <tr>
	//           <td>placeholder</td>
	//           <td><code>String</code></td>
	//           <td>请选择</td>
	//           <td>默认选择提示</td>
	//         </tr>
	//         <tr>
	//           <td>multiple</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>是否多选</td>
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
	//         <tr>
	//           <td>onchange</td>
	//           <td><code>Function</code></td>
	//           <td><code></code></td>
	//           <td>选中项发生变化时触发</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//
	//   </div>
	// </template>
	//
	// <script>
	
	var Tab = _src.Tabs.Tab;
	exports.default = {
	  components: {
	    vSelect: _src.Select,
	    vOption: Option,
	    Icon: _src.Icon,
	    Tabs: _src.Tabs,
	    Tab: Tab
	  },
	  data: function data() {
	    return {
	      fruitOptions: [{ value: 'Apple', label: 'Apple' }, { value: 'Banana', label: 'Banana' }, { value: 'Cherry', label: 'Cherry' }, { value: 'Orange', label: 'Orange' }, { value: 'Grape', label: 'Grape' }],
	      arr: [],
	      arr2: [],
	      single: 'Apple',
	      multiple: [],
	      multipleLimit: [],
	      custom: [],
	      disabled: []
	    };
	  },
	
	  methods: {
	    onSlectChange: function onSlectChange(text, value) {
	      console.log(text, value);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 369 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"select\">\n    <h3 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select 下拉框</a></h3>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\n选中值 : {{single}}\n        </pre>\n      </p>\n      <v-select :value.sync=\"single\" placeholder=\"请选择一个水果\" style=\"width:200px;\" @change=\"onSlectChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\" disabled>Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">OrangeText</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr>\n      <h4>多选下拉</h4>\n      <p>\n        <pre>\n选中值 : {{multiple.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :value.sync=\"multiple\" @change=\"onSlectChange\">\n        <v-option value=\"Apple\">Apple</v-option>\n        <v-option value=\"Banana\">Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr>\n      <h4>多选下拉限制</h4>\n      <p>\n        <pre>\n选中值 : {{multipleLimit.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :limit=\"2\" :value.sync=\"multipleLimit\">\n        <v-option value=\"Apple\">Apple</v-option>\n        <v-option value=\"Banana\">Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr>\n      <h4>自定义模板</h4>\n      <p>\n        <pre>\n选中值 : {{custom.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :value.sync=\"custom\">\n        <v-option value=\"success\"><icon type=\"success\" color=\"green\"></icon> 成功</v-option>\n        <v-option value=\"error\"><icon type=\"error\" color=\"red\"></icon> 错误</v-option>\n        <v-option value=\"help\"><icon type=\"help\"></icon> 帮助</v-option>\n        <v-option value=\"info\"><icon type=\"info\"></icon> 信息</v-option>\n      </v-select>\n      <hr />\n      <h4>使用数据填充Select选择框内容</h4>\n      <p>\n        可以指定一个数组来填充选项内容，并可搜索\n        <pre>\n选中值 : {{arr}}\n        </pre>\n      </p>\n      <v-select :value.sync=\"arr\" :options=\"fruitOptions\" :search=\"true\" :close-on-select=\"true\">\n      </v-select>\n\n      <hr />\n      <h4>Automatically close array driven selects</h4>\n      <p>Using the property :close-on-select=\"true\" array driven selects will auto-close after selecting an entry.</p>\n      <v-select :value.sync=\"arr2\" :options=\"fruitOptions\" :close-on-select=\"true\">\n      </v-select>\n      <h4>下拉出自定义类容</h4>\n      <v-select placeholder=\"选择类别\" style=\"width:200px;\">\n        <tabs>\n          <tab header=\"系统短信签名\"></tab>\n          <tab header=\"系统短信签名\"></tab>\n          <tab header=\"系统短信签名\"></tab>\n        </tabs>\n      </v-select>\n      <h4>禁用的下拉框</h4>\n      <v-select :value.sync=\"disabled\" :options=\"fruitOptions\" :close-on-select=\"true\" :disabled=\"true\">\n      </v-select>\n\n      <h4>tags</h4>\n      <v-select tags=\"true\" :options=\"fruitOptions\" :close-on-select=\"true\">\n      </v-select>\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<p>\n  <pre>\n选中值 : {{single}}\n  </pre>\n</p>\n<v-select :value.sync=\"single\" placeholder=\"请选择一个水果\" style=\"width:200px;\" @change=\"onSlectChange\">\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\" disabled>Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">OrangeText</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr>\n<h4>多选下拉</h4>\n<p>\n  <pre>\n选中值 : {{multiple.join(', ')}}\n  </pre>\n</p>\n<v-select multiple :value.sync=\"multiple\">\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\">Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr>\n<h4>多选下拉限制</h4>\n<p>\n  <pre>\n选中值 : {{multipleLimit.join(', ')}}\n  </pre>\n</p>\n<v-select multiple :limit=\"2\" :value.sync=\"multipleLimit\">\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\">Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr>\n<h4>自定义模板</h4>\n<p>\n  <pre>\n选中值 : {{custom.join(', ')}}\n  </pre>\n</p>\n<v-select multiple :value.sync=\"custom\">\n  <v-option value=\"success\"><icon type=\"success\" color=\"green\"></icon> 成功</v-option>\n  <v-option value=\"error\"><icon type=\"error\" color=\"red\"></icon> 错误</v-option>\n  <v-option value=\"help\"><icon type=\"help\"></icon> 帮助</v-option>\n  <v-option value=\"info\"><icon type=\"info\"></icon> 信息</v-option>\n</v-select>\n<hr />\n<h4>使用数据填充Select选择框内容</h4>\n<p>\n  可以指定一个数组来填充选项内容，并可搜索\n  <pre>\n选中值 : {{arr}}\n  </pre>\n</p>\n<v-select :value.sync=\"arr\" :options=\"fruitOptions\" :search=\"true\" :close-on-select=\"true\">\n</v-select>\n\n<hr />\n<h4>Automatically close array driven selects</h4>\n<p>Using the property :close-on-select=\"true\" array driven selects will auto-close after selecting an entry.</p>\n<v-select :value.sync=\"arr2\" :options=\"fruitOptions\" :close-on-select=\"true\">\n</v-select>\n\n<h4>禁用的下拉框</h4>\n<v-select :value.sync=\"disabled\" :options=\"fruitOptions\" :close-on-select=\"true\" :disabled=\"true\">\n</v-select>\n</script></code></pre>\n\n    <h2>Select 选项</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>defaultValue</td>\n          <td><code>Array/String</code></td>\n          <td><code>[]</code></td>\n          <td>默认要选中的值，如果是多选框可以设置数组</td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>请选择</td>\n          <td>默认选择提示</td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否多选</td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>onchange</td>\n          <td><code>Function</code></td>\n          <td><code></code></td>\n          <td>选中项发生变化时触发</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n";

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(371)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/datepickerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(372)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var RangePicker = _src.DatePicker.RangePicker; // <template>
	//   <div class="bs-docs-section" id="datepicker">
	//     <h1 class="page-header"><a href="#datepicker" class="anchor">DatePicker 日期选择</a></h1>
	//     <div class="bs-example">
	//       <p>
	//         <pre>
	// 选择日期是: {{new Date(value).toString().slice(0, -23)}}
	//         </pre>
	//       </p>
	//       <date-picker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"
	//       :format="format.toString()" :show-reset-button="reset" @change="selectChange"></date-picker>
	//       <h4>禁用一周的某日</h4>
	//
	//       <v-select multiple :default-value.sync="disabled">
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
	//       <v-select :default-value.sync="format" >
	//         <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
	//         <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
	//         <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
	//         <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
	//         <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
	//       </v-select>
	//
	//       <h4>重置按钮</h4>
	//       <label><input type="checkbox" v-model="reset" @click="x">打开或关闭重置功能</label>
	//
	//       <range-picker></range-picker>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <date-picker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"
	//       :format="format.toString()" :show-reset-button="reset" @change="selectChange"></DatePicker>
	//
	// <v-select multiple :default-value.sync="disabled" size=5>
	//   <v-option value="0">0</v-option>
	//   <v-option value="1">1</v-option>
	//   <v-option value="2">2</v-option>
	//   <v-option value="3">3</v-option>
	//   <v-option value="4">4</v-option>
	//   <v-option value="5">5</v-option>
	//   <v-option value="6">6</v-option>
	// </v-select>
	// <v-select  :default-value.sync="format">
	//   <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
	//   <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
	//   <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
	//   <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
	//   <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
	// </v-select>
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
	
	var Option = _src.Select.Option;
	
	exports.default = {
	  components: {
	    DatePicker: _src.DatePicker,
	    RangePicker: RangePicker,
	    vSelect: _src.Select,
	    vOption: Option
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
	
	    watch: {
	      value: function value(val) {
	        console.log(val);
	      }
	    },
	    format: function format(newV) {
	      this.value = this.$refs.dp.stringify(new Date(this.value));
	    }
	  },
	  methods: {
	    selectChange: function selectChange(value) {
	      alert(value);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 372 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"datepicker\">\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">DatePicker 日期选择</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\n选择日期是: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <date-picker v-ref:dp :value.sync=\"value\" :disabled-days-of-Week=\"disabled\"\n      :format=\"format.toString()\" :show-reset-button=\"reset\" @change=\"selectChange\"></date-picker>\n      <h4>禁用一周的某日</h4>\n\n      <v-select multiple :default-value.sync=\"disabled\">\n  <v-option value=\"0\">0</v-option>\n  <v-option value=\"1\">1</v-option>\n  <v-option value=\"2\">2</v-option>\n  <v-option value=\"3\">3</v-option>\n  <v-option value=\"4\">4</v-option>\n  <v-option value=\"5\">5</v-option>\n  <v-option value=\"6\">6</v-option>\n      </v-select>\n\n      <h4>格式化</h4>\n      <v-select :default-value.sync=\"format\" >\n        <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n        <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n        <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n        <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n        <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n      </v-select>\n\n      <h4>重置按钮</h4>\n      <label><input type=\"checkbox\" v-model=\"reset\" @click=\"x\">打开或关闭重置功能</label>\n\n      <range-picker></range-picker>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<date-picker v-ref:dp :value.sync=\"value\" :disabled-days-of-Week=\"disabled\"\n      :format=\"format.toString()\" :show-reset-button=\"reset\" @change=\"selectChange\"></DatePicker>\n\n<v-select multiple :default-value.sync=\"disabled\" size=5>\n  <v-option value=\"0\">0</v-option>\n  <v-option value=\"1\">1</v-option>\n  <v-option value=\"2\">2</v-option>\n  <v-option value=\"3\">3</v-option>\n  <v-option value=\"4\">4</v-option>\n  <v-option value=\"5\">5</v-option>\n  <v-option value=\"6\">6</v-option>\n</v-select>\n<v-select  :default-value.sync=\"format\">\n  <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n  <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n  <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n  <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n  <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n</v-select>\n    </script></code></pre>\n    <h2>Option</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入框里的默认值</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>输入框的宽度</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>禁用一周的某一天. 按 0 到 6 .\n             禁用多天可用<code>逗号</code>分隔</td>\n        </tr>\n        <tr>\n          <td>showResetButton</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>是否显示清除日期按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(374)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/searchboxDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(375)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    Searchbox: _src.Searchbox
	  },
	  data: function data() {
	    return {
	      defaultVal: '果',
	      searchList: [{ name: '水果', value: '1' }, { name: '苹果', value: '2' }, { name: '香蕉', value: '3' }, { name: '人参果', value: '4' }, { name: '草莓', value: '5' }, { name: '芒果', value: '6' }, { name: '干果', value: '11' }, { name: '碧根果', value: '12' }, { name: '腰果', value: '13' }, { name: '核桃', value: '14' }, { name: '杏仁', value: '15' }, { name: '素材', value: '21' }, { name: '香菜', value: '22' }]
	    };
	  },
	
	  watch: {
	    defaultVal: function defaultVal(newVal, oldVal) {
	      alert(newVal);
	    }
	  },
	  events: {
	    'searchbox-value-check': function searchboxValueCheck(data, searchboxVue) {
	      console.log(data);
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="searchbox">
	//     <h3 class="page-header"><a href="#searchbox" class="anchor">Searchbox 搜索框</a></h3>
	//     <div class="bs-example">
	//       <searchbox placeholder="请输入关键词搜索" :value.sync="defaultVal" :search-list="searchList" text-field="name"></searchbox>
	//       <searchbox placeholder="请输入关键词搜索"></searchbox>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <searchbox placeholder="请输入关键词搜索" :value.sync="defaultVal" :search-list="searchList" text-field="name"></searchbox>
	// </script></code></pre>
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
	//           <td>placeholder</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>搜索框预期值的提示信息</td>
	//         </tr>
	//         <tr>
	//           <td>value</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>搜索框默认值</td>
	//         </tr>
	//         <tr>
	//           <td>search-list</td>
	//           <td><code>Array</code>或<code>Object</code></td>
	//           <td><code>数组素组</code></td>
	//           <td>搜索列表</td>
	//         </tr>
	//         <tr>
	//           <td>text-filed</td>
	//           <td><code>String</code></td>
	//           <td><code>name</code></td>
	//           <td>下拉列表中显示的是列表的哪个字段</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 375 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"searchbox\">\n    <h3 class=\"page-header\"><a href=\"#searchbox\" class=\"anchor\">Searchbox 搜索框</a></h3>\n    <div class=\"bs-example\">\n      <searchbox placeholder=\"请输入关键词搜索\" :value.sync=\"defaultVal\" :search-list=\"searchList\" text-field=\"name\"></searchbox>\n      <searchbox placeholder=\"请输入关键词搜索\"></searchbox>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<searchbox placeholder=\"请输入关键词搜索\" :value.sync=\"defaultVal\" :search-list=\"searchList\" text-field=\"name\"></searchbox>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>搜索框预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>搜索框默认值</td>\n        </tr>\n        <tr>\n          <td>search-list</td>\n          <td><code>Array</code>或<code>Object</code></td>\n          <td><code>数组素组</code></td>\n          <td>搜索列表</td>\n        </tr>\n        <tr>\n          <td>text-filed</td>\n          <td><code>String</code></td>\n          <td><code>name</code></td>\n          <td>下拉列表中显示的是列表的哪个字段</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(377)
	__vue_script__ = __webpack_require__(379)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/messageDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(380)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(378);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./messageDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./messageDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.message-icon-float-left {\n  font-size:32px;float:left;margin-right:5px;\n}\n", ""]);
	
	// exports


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  data: function data() {
	    return {
	      showRight: false,
	      showTop: false,
	      showCenter: false
	    };
	  },
	
	  components: {
	    Message: _src.Message
	  },
	  methods: {
	    showMessage: function showMessage() {
	      _src.Message.error('出错啦～～');
	    }
	  }
	};
	// </script>
	//
	// <style>
	//   .message-icon-float-left {
	//     font-size:32px;float:left;margin-right:5px;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="message">
	//     <h3 class="page-header">
	//       <a href="#message" class="anchor">Message 警告提示</a>
	//     </h3>
	//     <div class="bs-example" >
	//       <button class="btn btn-success btn-lg"
	//         @click="showRight = !showRight">
	//         点击在右边显示或隐藏
	//       </button>
	//       <button class="btn btn-success btn-lg"
	//         @click="showMessage">
	//         代码调用，不需要在页面中写组件标签
	//       </button>
	//       <button class="btn btn-default btn-lg"
	//         @click="showCenter = !showCenter">
	//         点击在中间显示或隐藏
	//       </button>
	//       <button class="btn btn-error btn-lg"
	//         @click="showTop = !showTop">
	//         点击在顶部显示或隐藏
	//       </button>
	//       <hr>
	//       <message type="success" >
	//         成功提示的文案
	//       </message>
	//
	//       <message type="info" >
	//         消息提示的文案
	//       </message>
	//
	//       <message type="error" dismissable>
	//         错误提示的文案,可关闭
	//       </message>
	//
	//       <message type="warning" dismissable>
	//         警告提示的文案,可关闭
	//       </message>
	//
	//       <message type="help" dismissable>
	//         帮助提示文案,可关闭
	//       </message>
	//
	//       <message
	//         :show.sync="showRight"
	//         :duration="3000"
	//         type="success"
	//         width="400px"
	//         placement="top-right"
	//         dismissable
	//       >
	//         在右边显示的警告
	//       </message>
	//
	//       <message
	//         :show.sync="showCenter"
	//         duration="3000"
	//         type="success"
	//         width="400px"
	//         placement="center"
	//         dismissable>
	//         在中间显示的警告
	//       </message>
	//
	//       <message
	//         :show.sync="showTop"
	//         :duration="3000"
	//         type="error"
	//         width="400px"
	//         placement="top"
	//         dismissable>
	//         在顶部显示的警告
	//       </message>
	//     </div>
	//
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <button class="btn btn-success btn-lg"
	//   @click="showRight = !showRight">
	//   点击在右边显示或隐藏
	// </button>
	// <button class="btn btn-success btn-lg"
	//   @click="showMessage">
	//   代码调用，不需要在页面中写组件标签
	// </button>
	// <button class="btn btn-default btn-lg"
	//   @click="showCenter = !showCenter">
	//   点击在中间显示或隐藏
	// </button>
	// <button class="btn btn-error btn-lg"
	//   @click="showTop = !showTop">
	//   点击在顶部显示或隐藏
	// </button>
	// <hr>
	// <message type="success" >
	//   成功提示的文案
	// </message>
	//
	// <message type="info" >
	//   消息提示的文案
	// </message>
	//
	// <message type="error" dismissable>
	//   错误提示的文案,可关闭
	// </message>
	//
	// <message type="warning" dismissable>
	//   警告提示的文案,可关闭
	// </message>
	//
	// <message type="help" dismissable>
	//   帮助提示文案,可关闭
	// </message>
	//
	// <message
	//   :show.sync="showRight"
	//   :duration="3000"
	//   type="success"
	//   width="400px"
	//   placement="top-right"
	//   dismissable
	// >
	//   在右边显示的警告
	// </message>
	//
	// <message
	//   :show.sync="showCenter"
	//   duration="3000"
	//   type="success"
	//   width="400px"
	//   placement="center"
	//   dismissable>
	//   在中间显示的警告
	// </message>
	//
	// <message
	//   :show.sync="showTop"
	//   :duration="3000"
	//   type="error"
	//   width="400px"
	//   placement="top"
	//   dismissable>
	//   在顶部显示的警告
	// </message>
	//
	// import {Message} from '@ali/atui'
	//   export default {
	//     data() {
	//       return {
	//         showRight: false,
	//         showTop: false,
	//         showCenter:false
	//       }
	//     },
	//     components: {
	//       Message,
	//     },
	//     methods:{
	//       showMessage() {
	//         Message.error('出错啦～～')
	//       }
	//     }
	//   }
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
	//         <tr>
	//           <td>showIcon</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>true</code></td>
	//           <td>是否显示相应的ICON</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 380 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"message\">\n    <h3 class=\"page-header\">\n      <a href=\"#message\" class=\"anchor\">Message 警告提示</a>\n    </h3>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        点击在右边显示或隐藏\n      </button>\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showMessage\">\n        代码调用，不需要在页面中写组件标签\n      </button>\n      <button class=\"btn btn-default btn-lg\"\n        @click=\"showCenter = !showCenter\">\n        点击在中间显示或隐藏\n      </button>\n      <button class=\"btn btn-error btn-lg\"\n        @click=\"showTop = !showTop\">\n        点击在顶部显示或隐藏\n      </button>\n      <hr>\n      <message type=\"success\" >\n        成功提示的文案\n      </message>\n\n      <message type=\"info\" >\n        消息提示的文案\n      </message>\n\n      <message type=\"error\" dismissable>\n        错误提示的文案,可关闭\n      </message>\n\n      <message type=\"warning\" dismissable>\n        警告提示的文案,可关闭\n      </message>\n\n      <message type=\"help\" dismissable>\n        帮助提示文案,可关闭\n      </message>\n\n      <message\n        :show.sync=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        在右边显示的警告\n      </message>\n\n      <message\n        :show.sync=\"showCenter\"\n        duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"center\"\n        dismissable>\n        在中间显示的警告\n      </message>\n\n      <message\n        :show.sync=\"showTop\"\n        :duration=\"3000\"\n        type=\"error\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        在顶部显示的警告\n      </message>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-success btn-lg\"\n  @click=\"showRight = !showRight\">\n  点击在右边显示或隐藏\n</button>\n<button class=\"btn btn-success btn-lg\"\n  @click=\"showMessage\">\n  代码调用，不需要在页面中写组件标签\n</button>\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showCenter = !showCenter\">\n  点击在中间显示或隐藏\n</button>\n<button class=\"btn btn-error btn-lg\"\n  @click=\"showTop = !showTop\">\n  点击在顶部显示或隐藏\n</button>\n<hr>\n<message type=\"success\" >\n  成功提示的文案\n</message>\n\n<message type=\"info\" >\n  消息提示的文案\n</message>\n\n<message type=\"error\" dismissable>\n  错误提示的文案,可关闭\n</message>\n\n<message type=\"warning\" dismissable>\n  警告提示的文案,可关闭\n</message>\n\n<message type=\"help\" dismissable>\n  帮助提示文案,可关闭\n</message>\n\n<message\n  :show.sync=\"showRight\"\n  :duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable\n>\n  在右边显示的警告\n</message>\n\n<message\n  :show.sync=\"showCenter\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"center\"\n  dismissable>\n  在中间显示的警告\n</message>\n\n<message\n  :show.sync=\"showTop\"\n  :duration=\"3000\"\n  type=\"error\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  在顶部显示的警告\n</message>\n\nimport {Message} from '@ali/atui'\n  export default {\n    data() {\n      return {\n        showRight: false,\n        showTop: false,\n        showCenter:false\n      }\n    },\n    components: {\n      Message,\n    },\n    methods:{\n      showMessage() {\n        Message.error('出错啦～～')\n      }\n    }\n  }\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否显示关闭按钮</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code>\n          <code>help</code>\n          </td>\n          <td><code>success</code></td>\n          <td>组件样式</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>自动关闭时间. 设置为 <code>0</code>或负数将不自动关闭.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>组件的位置</td>\n        </tr>\n        <tr>\n          <td>showIcon</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示相应的ICON</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(382)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/cascaderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(383)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	// <template>
	//   <div class="bs-docs-section" id="cascader">
	//     <h3 class="page-header"><a href="#cascader" class="anchor">Cascader 级联选择</a></h3>
	//     <div class="bs-example">
	//       <cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>
	//
	// const options = [{
	//     value: 'zhejiang',
	//     label: '浙江',
	//     children: [{
	//       value: 'hangzhou',
	//       label: '杭州',
	//       children: [{
	//         value: 'xihu',
	//         label: '西湖',
	//       }],
	//     }],
	//   }, {
	//     value: 'jiangsu',
	//     label: '江苏',
	//     children: [{
	//       value: 'nanjing',
	//       label: '南京',
	//       children: [{
	//         value: 'zhonghuamen',
	//         label: '中华门',
	//       }],
	//     }],
	//   }]
	//
	//   const defaultValue = ['zhejiang', 'hangzhou', 'xihu']
	//
	//   import {Cascader} from 'src/'
	//   export default {
	//     components: {
	//       Cascader
	//     },
	//     data() {
	//       return {
	//         options:options,
	//         defaultValue:defaultValue
	//       }
	//     },
	//     methods:{
	//       selectChange(selectedValue, option) {
	//         alert(selectedValue)
	//       }
	//     }
	//   }
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
	//         <td>options</td>
	//         <td><code>Array</code></td>
	//         <td><code>[]</code></td>
	//         <td>要绑定的数据源</td>
	//       </tr>
	//       <tr>
	//         <td>defaultValue</td>
	//         <td><code>Array</code></td>
	//         <td><code>[]</code></td>
	//         <td>默认选中的值.</td>
	//       </tr>
	//       <tr>
	//         <td>change</td>
	//         <td><code>Function</code></td>
	//         <td><code>function(selectedValue, option) {}</code></td>
	//         <td>选择到最后一项触发的change事件
	//         </td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>
	var options = [{ "value": "2016", "label": "2016年", "children": [{ "value": "01", "label": "一月", "disabled": false }, { "value": "02", "label": "二月", "disabled": false }, { "value": "03", "label": "三月", "disabled": false }, { "value": "04", "label": "四月", "disabled": true }, { "value": "05", "label": "五月", "disabled": true }, { "value": "06", "label": "六月", "disabled": true }, { "value": "07", "label": "七月", "disabled": true }, { "value": "08", "label": "八月", "disabled": true }, { "value": "09", "label": "九月", "disabled": true }, { "value": "10", "label": "十月", "disabled": true }, { "value": "11", "label": "十一月", "disabled": true }, { "value": "12", "label": "十二月", "disabled": true }] }, { "value": "2015", "label": "2015年", "children": [{ "value": "01", "label": "一月" }, { "value": "02", "label": "二月" }, { "value": "03", "label": "三月" }, { "value": "04", "label": "四月" }, { "value": "05", "label": "五月" }, { "value": "06", "label": "六月" }, { "value": "07", "label": "七月" }, { "value": "08", "label": "八月" }, { "value": "09", "label": "九月" }, { "value": "10", "label": "十月" }, { "value": "11", "label": "十一月" }, { "value": "12", "label": "十二月" }] }];
	
	var defaultValue = ['2016', '05'];
	
	exports.default = {
	  components: {
	    Cascader: _src.Cascader
	  },
	  data: function data() {
	    return {
	      options: options,
	      defaultValue: defaultValue
	    };
	  },
	
	  methods: {
	    selectChange: function selectChange(selectedValue, options) {
	      console.log(selectedValue, options);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 383 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"cascader\">\n    <h3 class=\"page-header\"><a href=\"#cascader\" class=\"anchor\">Cascader 级联选择</a></h3>\n    <div class=\"bs-example\">\n      <cascader :options=\"options\" @change=\"selectChange\" :default-value=\"defaultValue\"></cascader>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<cascader :options=\"options\" @change=\"selectChange\" :default-value=\"defaultValue\"></cascader>\n\nconst options = [{\n    value: 'zhejiang',\n    label: '浙江',\n    children: [{\n      value: 'hangzhou',\n      label: '杭州',\n      children: [{\n        value: 'xihu',\n        label: '西湖',\n      }],\n    }],\n  }, {\n    value: 'jiangsu',\n    label: '江苏',\n    children: [{\n      value: 'nanjing',\n      label: '南京',\n      children: [{\n        value: 'zhonghuamen',\n        label: '中华门',\n      }],\n    }],\n  }]\n\n  const defaultValue = ['zhejiang', 'hangzhou', 'xihu']\n\n  import {Cascader} from 'src/'\n  export default {\n    components: {\n      Cascader\n    },\n    data() {\n      return {\n        options:options,\n        defaultValue:defaultValue\n      }\n    },\n    methods:{\n      selectChange(selectedValue, option) {\n        alert(selectedValue)\n      }\n    }\n  }\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>options</td>\n        <td><code>Array</code></td>\n        <td><code>[]</code></td>\n        <td>要绑定的数据源</td>\n      </tr>\n      <tr>\n        <td>defaultValue</td>\n        <td><code>Array</code></td>\n        <td><code>[]</code></td>\n        <td>默认选中的值.</td>\n      </tr>\n      <tr>\n        <td>change</td>\n        <td><code>Function</code></td>\n        <td><code>function(selectedValue, option) {}</code></td>\n        <td>选择到最后一项触发的change事件\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(385)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/modalDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(386)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var confirm = _src.Modal.confirm; // <template>
	//   <div class="bs-docs-section" id="modal">
	//     <h3 class="page-header"><a href="#modal" class="anchor">Modal 对话框</a></h3>
	//     <div class="bs-example">
	//       <button class="btn btn-default" @click="showModal = true">显示弹窗</button>
	//       <modal title="Modal title" :show.sync="showModal" backdrop="false">
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
	//         <div slot="modal-header"></div>
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
	//
	//       <button @click="showConfirm">使用程序直接弹出confirm</button>
	//       <button @click="showError">使用程序直接弹出error</button>
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
	
	var error = _src.Modal.error;
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
	    Modal: _src.Modal
	  },
	  methods: {
	    showConfirm: function showConfirm() {
	      confirm({
	        title: '您是否确认要删除这项内容',
	        content: '一些解释',
	        onOk: function onOk() {
	          console.log('确定');
	        },
	        onCancel: function onCancel() {}
	      });
	    },
	    showError: function showError() {
	      error({
	        title: '出错了',
	        content: '是不是忘记吃药了？',
	        onOk: function onOk() {
	          console.log('确定');
	        },
	        onCancel: function onCancel() {}
	      });
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 386 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"modal\">\n    <h3 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal 对话框</a></h3>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default\" @click=\"showModal = true\">显示弹窗</button>\n      <modal title=\"Modal title\" :show.sync=\"showModal\" backdrop=\"false\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>标题</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-header\"></div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"50%\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n        </div>\n      </modal>\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">小弹窗</button>\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n\n      <button @click=\"showConfirm\">使用程序直接弹出confirm</button>\n      <button @click=\"showError\">使用程序直接弹出error</button>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default\"\n  @click=\"showModal = true\"\n  >显示弹窗\n</button>\n<modal :show.sync=\"showModal\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-primary\"\n  @click=\"fadeModal = true\">\n  Fade modal\n</button>\n<modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-success\"\n  @click=\"zoomModal = true\">\n  Zoom modal\n</button>\n<modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-default\"\n  @click=\"showCustomModal = true\">\n  Show custom modal\n</button>\n<modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"400\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n  <div slot=\"modal-footer\" class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"largeModal = true\"\n  >Large Modal\n</button>\n<modal :show.sync=\"largeModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"smallModal = true\"\n  >Small Modal\n</button>\n<modal :show.sync=\"smallModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number, String or null</code></td>\n        <td><code>null</code></td>\n        <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>当点击主要按钮时触发的回调.</td>\n      </tr>\n      <tr>\n        <td>large</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>大的弹窗</td>\n      </tr>\n      <tr>\n        <td>small</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>小的弹窗</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(388)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tableDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(389)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var columns = [{
	  title: '姓名',
	  dataIndex: 'name',
	  filters: [{
	    text: '姓李的的',
	    value: '李'
	  }, {
	    text: '姓胡的',
	    value: '胡'
	  }],
	  sorter: true,
	  onFilter: function onFilter(value, record) {
	    return record.name.indexOf(value) === 0;
	  }
	}, {
	  title: '年龄',
	  dataIndex: 'age',
	  sorter: function sorter(a, b) {
	    return a.age - b.age;
	  },
	  render: function render(text, record, index) {
	    return '<input type="text" v-model="gridData[' + index + '].age" />';
	  }
	}, {
	  title: '地址',
	  dataIndex: 'address',
	  filters: [{
	    text: '南湖',
	    value: '南湖'
	  }, {
	    text: '西湖',
	    value: '西湖'
	  }],
	  filterMultiple: false,
	  onFilter: function onFilter(value, record) {
	    return record.address.indexOf(value) === 0;
	  }
	}, {
	  title: '操作',
	  key: 'operation',
	  render: function render(text, record) {
	    return '<icon type="info" /><a href="' + record.key + '.html" target="_blank">详情</a>';
	  }
	}]; // <template>
	//   <div class="bs-docs-section" id="table">
	//     <h3 class="page-header"><a href="#tabs" class="anchor">Table 表格</a></h3>
	//     <div class="bs-example">
	//     <row>
	//       <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @change="onTableChange" :loading="loading"></grid>
	//     </row>
	//     </div>
	//     <input type="button" @click="changeData" value="填充表格数据"/> <input type="button" @click="changeLoading" value="切换loading状态"/>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// import {Table,Icon} from 'src/'
	//   const columns = [{
	//     title: '姓名',
	//     dataIndex: 'name',
	//     filters: [{
	//       text: '姓李的的',
	//       value: '李',
	//     }, {
	//       text: '姓胡的',
	//       value: '胡',
	//     }],
	//     sorter: true,
	//     onFilter: (value, record) => record.name.indexOf(value) === 0
	//   }, {
	//     title: '年龄',
	//     dataIndex: 'age',
	//     sorter: (a, b) => a.age - b.age,
	//     render(text, record,index) {
	//       return '<input type="text" v-model="gridData['+ index +'].age" />'
	//     }
	//   }, {
	//     title: '地址',
	//     dataIndex: 'address',
	//     filters: [{
	//       text: '南湖',
	//       value: '南湖',
	//     }, {
	//       text: '西湖',
	//       value: '西湖',
	//     }],
	//     filterMultiple: false,
	//     onFilter: (value, record) => record.address.indexOf(value) === 0
	//   },{
	//       title: '操作',
	//       key: 'operation',
	//       render(text, record) {
	//         return '<icon type="info" /><a href="'+ record.key+'.html" target="_blank">详情</a>'
	//       }
	//     }
	//   ];
	//
	//   const data = [{
	//     key: '1',
	//     name: '胡斌',
	//     age: 32,
	//     address: '南湖区湖底公园1号',
	//   }, {
	//     key: '2',
	//     name: '胡彦祖',
	//     age: 42,
	//     address: '西湖区湖底公园12号',
	//   }, {
	//     key: '3',
	//     name: '李大嘴',
	//     age: 32,
	//     address: '南湖区湖底公园123号',
	//   }, {
	//     key: '4',
	//     name: '李秀莲大嘴哥',
	//     age: 32,
	//     address: '西湖区湖底公园123号',
	//   }];
	//   const rowSelection = {
	//     getCheckboxProps(record) {
	//       return {
	//         disabled: record.name === '胡彦祖'    // 配置无法勾选的列 s
	//       };
	//     },
	//     onChange(selectedRowKeys, selectedRows) {
	//       console.log(selectedRowKeys, selectedRows);
	//     },
	//     onSelect(record, selected, selectedRows) {
	//       console.log(record, selected, selectedRows);
	//     },
	//     onSelectAll(selected, selectedRows, changeRows) {
	//       console.log(selected, selectedRows, changeRows);
	//     }
	//   };
	//   export default {
	//     components: {
	//       Grid:Table,
	//       Icon
	//     },
	//     data() {
	//       return {
	//         gridData:data,
	//         gridColumns: columns,
	//         rowSelection:rowSelection,
	//         loading:false
	//       }
	//     },
	//     methods:{
	//       changeData() {
	//         this.gridData = data;
	//       },
	//       onTableChange(i,j,k) {
	//         console.log(i,j,k)
	//       }
	//     }
	//   }
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
	
	
	var _data = [{
	  key: '1',
	  name: '胡斌',
	  age: 32,
	  address: '南湖区湖底公园1号'
	}, {
	  key: '2',
	  name: '胡彦祖',
	  age: 42,
	  address: '西湖区湖底公园12号'
	}, {
	  key: '3',
	  name: '李大嘴',
	  age: 32,
	  address: '南湖区湖底公园123号'
	}, {
	  key: '4',
	  name: '李秀莲大嘴哥',
	  age: 32,
	  address: '西湖区湖底公园123号'
	}];
	var rowSelection = {
	  getCheckboxProps: function getCheckboxProps(record) {
	    return {
	      disabled: record.name === '胡彦祖' // 配置无法勾选的列
	    };
	  },
	  onChange: function onChange(selectedRowKeys, selectedRows) {
	    console.log('onChange', selectedRowKeys, selectedRows);
	  },
	  onSelect: function onSelect(record, selected, selectedRows) {
	    console.log('onSelect', record, selected, selectedRows);
	  },
	  onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	    console.log('onSelectAll', selected, selectedRows, changeRows);
	  }
	};
	exports.default = {
	  components: {
	    Grid: _src.Table,
	    Icon: _src.Icon,
	    Row: _src.Layout.Row
	  },
	  data: function data() {
	    return {
	      loading: false,
	      gridData: _data,
	      gridColumns: columns,
	      rowSelection: rowSelection
	    };
	  },
	
	  methods: {
	    changeData: function changeData() {
	      this.gridData = _data;
	      console.log(this.gridData);
	    },
	    onTableChange: function onTableChange(i, j, k) {
	      console.log(i, j, k);
	    },
	    changeLoading: function changeLoading() {
	      this.loading = !this.loading;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 389 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"table\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Table 表格</a></h3>\n    <div class=\"bs-example\">\n    <row>\n      <grid :data-source=\"gridData\" :columns=\"gridColumns\" :row-selection=\"rowSelection\" row-key=\"key\" @change=\"onTableChange\" :loading=\"loading\"></grid>\n    </row>\n    </div>\n    <input type=\"button\" @click=\"changeData\" value=\"填充表格数据\"/> <input type=\"button\" @click=\"changeLoading\" value=\"切换loading状态\"/>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\nimport {Table,Icon} from 'src/'\n  const columns = [{\n    title: '姓名',\n    dataIndex: 'name',\n    filters: [{\n      text: '姓李的的',\n      value: '李',\n    }, {\n      text: '姓胡的',\n      value: '胡',\n    }],\n    sorter: true,\n    onFilter: (value, record) => record.name.indexOf(value) === 0\n  }, {\n    title: '年龄',\n    dataIndex: 'age',\n    sorter: (a, b) => a.age - b.age,\n    render(text, record,index) {\n      return '<input type=\"text\" v-model=\"gridData['+ index +'].age\" />'\n    }\n  }, {\n    title: '地址',\n    dataIndex: 'address',\n    filters: [{\n      text: '南湖',\n      value: '南湖',\n    }, {\n      text: '西湖',\n      value: '西湖',\n    }],\n    filterMultiple: false,\n    onFilter: (value, record) => record.address.indexOf(value) === 0\n  },{\n      title: '操作',\n      key: 'operation',\n      render(text, record) {\n        return '<icon type=\"info\" /><a href=\"'+ record.key+'.html\" target=\"_blank\">详情</a>'\n      }\n    }\n  ];\n\n  const data = [{\n    key: '1',\n    name: '胡斌',\n    age: 32,\n    address: '南湖区湖底公园1号',\n  }, {\n    key: '2',\n    name: '胡彦祖',\n    age: 42,\n    address: '西湖区湖底公园12号',\n  }, {\n    key: '3',\n    name: '李大嘴',\n    age: 32,\n    address: '南湖区湖底公园123号',\n  }, {\n    key: '4',\n    name: '李秀莲大嘴哥',\n    age: 32,\n    address: '西湖区湖底公园123号',\n  }];\n  const rowSelection = {\n    getCheckboxProps(record) {\n      return {\n        disabled: record.name === '胡彦祖'    // 配置无法勾选的列 s\n      };\n    },\n    onChange(selectedRowKeys, selectedRows) {\n      console.log(selectedRowKeys, selectedRows);\n    },\n    onSelect(record, selected, selectedRows) {\n      console.log(record, selected, selectedRows);\n    },\n    onSelectAll(selected, selectedRows, changeRows) {\n      console.log(selected, selectedRows, changeRows);\n    }\n  };\n  export default {\n    components: {\n      Grid:Table,\n      Icon\n    },\n    data() {\n      return {\n        gridData:data,\n        gridColumns: columns,\n        rowSelection:rowSelection,\n        loading:false\n      }\n    },\n    methods:{\n      changeData() {\n        this.gridData = data;\n      },\n      onTableChange(i,j,k) {\n        console.log(i,j,k)\n      }\n    }\n  }\n</script></code></pre>\n  <h3>Table 选项 </h3>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>名称</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>描述</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>data-srouce</td>\n        <td><code>Array</code></td>\n        <td>[]</td>\n        <td>要绑定的数据源</td>\n      </tr>\n      <tr>\n        <td>row-selection</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否增加列checkbox选择</td>\n      </tr>\n      <tr>\n        <td>columns</td>\n        <td><code>Array</code></td>\n        <td>[]</td>\n        <td>表格列的配置描述</td>\n      </tr>\n      <tr>\n        <td>row-key</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>行选择时绑定的关键列名</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(391)
	__vue_script__ = __webpack_require__(392)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/badgeDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(393)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 391 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Badge: _src.Badge
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
	//       <badge :count="1000" >
	//         <a href="javascript:;" class="badge-count-example"></a>
	//       </badge>
	//       <h4 class="example-title">小红点型</h4>
	//         <badge :dot="true" >
	//           <a href="javascript:;" class="badge-count-example"></a>
	//         </badge>
	//
	//         <badge :dot="true" >
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
	//   <a href="javascript:;" class="badge-count-example"></a>
	// </badge>
	//
	// <badge :dot="true">
	//   <a href="javascript:;" >这是一个文字链接</a>
	// </badge>
	//
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
/* 393 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"badge\">\n    <h3 class=\"page-header\"><a href=\"#badge\" class=\"anchor\">Badge 徽标数</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基础型</h4>\n      <badge :count=\"6\">\n        <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n      </badge>\n      <h4 class=\"example-title\">大数字型</h4>\n      <badge :count=\"99\">\n        <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n      </badge>\n\n      <badge :count=\"1000\" >\n        <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n      </badge>\n      <h4 class=\"example-title\">小红点型</h4>\n        <badge :dot=\"true\" >\n          <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n        </badge>\n\n        <badge :dot=\"true\" >\n          <a href=\"javascript:;\" >这是一个文字链接</a>\n        </badge>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<badge :count=\"6\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"99\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"1000\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :dot=\"true\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :dot=\"true\">\n  <a href=\"javascript:;\" >这是一个文字链接</a>\n</badge>\n\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>count</td>\n        <td><code>Number</code></td>\n        <td></td>\n        <td>展示的数字，当大于99时展示99+</td>\n      </tr>\n      <tr>\n        <td>dot</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>展示的红点</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(395)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/carouselDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(396)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var Slide = _src.Carousel.Slide; // <template>
	//   <div class="bs-docs-section" id="carousel">
	//     <h3 class="page-header"><a href="#caoursel" class="anchor">Carousel 走马灯</a></h3>
	//     <div class="bs-example">
	//       <carousel indicators="true" controls="true">
	//         <slide>
	//           <img style="width:100%" src="https://img.alicdn.com/tps/TB1Pq31KpXXXXbFXXXXXXXXXXXX-888-400.png">
	//           <div class="carousel-caption">
	//            <h3>Slide #1</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slide>
	//         <slide>
	//           <img style="width:100%" src="https://img.alicdn.com/tps/TB1ih3pJXXXXXbZXVXXXXXXXXXX-888-400.png">
	//           <div class="carousel-caption">
	//            <h3>Slide #2</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slide>
	//         <slide>
	//           <img style="width:100%" src="https://img.alicdn.com/tps/TB1fEtIKpXXXXbEXVXXXXXXXXXX-888-400.jpg">
	//           <div class="carousel-caption">
	//            <h3>Slide #3</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slide>
	//       </carousel>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <carousel>
	//   <slide>
	//     <img src="http://placehold.it/1200x400?text=one">
	//       <div class="carousel-caption">
	//        ...
	//      </div>
	//   </slide>
	//   <slide>
	//     <img src="http://placehold.it/1200x400?text=two">
	//   </slide>
	//   <slide>
	//     <img src="http://placehold.it/1200x400?text=three">
	//   </slide>
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
	    Carousel: _src.Carousel,
	    Slide: Slide
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 396 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"carousel\">\n    <h3 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel 走马灯</a></h3>\n    <div class=\"bs-example\">\n      <carousel indicators=\"true\" controls=\"true\">\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1Pq31KpXXXXbFXXXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1ih3pJXXXXXbZXVXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1fEtIKpXXXXbEXVXXXXXXXXXX-888-400.jpg\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<carousel>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slide>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slide>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slide>\n</carousel>\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(398)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 398 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container bs-docs-container\">\n  <div class=\"row\">\n      <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(400)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/spinDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(401)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    Spin: _src.Spin
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="spin">
	//     <h3 class="page-header"><a href="#spin" class="anchor">Spin 加载中</a></h3>
	//     <div class="bs-example">
	//     <h4>小的加载</h4>
	//     <spin :show="true" size="small"></spin>
	//     <h4>普通加载</h4>
	//     <spin :show="true"></spin>
	//     <h4>大的加载</h4>
	//     <spin :show="true" size="large"></spin>
	//     </div>
	//
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <spin :show="true" size="small"></spin>
	// <spin :show="true"></spin>
	// <spin :show="true" size="large"></spin>
	// </script></code></pre>
	//
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 401 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"spin\">\n    <h3 class=\"page-header\"><a href=\"#spin\" class=\"anchor\">Spin 加载中</a></h3>\n    <div class=\"bs-example\">\n    <h4>小的加载</h4>\n    <spin :show=\"true\" size=\"small\"></spin>\n    <h4>普通加载</h4>\n    <spin :show=\"true\"></spin>\n    <h4>大的加载</h4>\n    <spin :show=\"true\" size=\"large\"></spin>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<spin :show=\"true\" size=\"small\"></spin>\n<spin :show=\"true\"></spin>\n<spin :show=\"true\" size=\"large\"></spin>\n</script></code></pre>\n\n  </div>\n";

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(403)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/textareaDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(404)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    vTextarea: _src.Textarea
	  },
	
	  data: function data() {
	    return {
	      validStatus: '',
	      content: '我是文本域内容，内容字数不能少于2个哦，否则会提示错误哦'
	    };
	  },
	
	
	  watch: {
	    content: function content(val) {
	      var len = val.length;
	
	      if (len < 2) {
	        this.validStatus = 'error';
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="textarea">
	//     <h3 class="page-header"><a href="#textarea" class="anchor">Textarea 文本域</a></h3>
	//     <div class="bs-example">
	//     <h4>基础文本域</h4>
	//     <div>
	//       <v-textarea placeholder="请输入描述信息"></v-textarea>
	//     </div>
	//     <div>
	//       <v-textarea disabled content="文本框被禁用了"></v-textarea>
	//     </div>
	//     <div>
	//       <v-textarea error content="信息错误了"></v-textarea>
	//     </div>
	//     <h4>统计输入字数文本域</h4>
	//     <div>
	//       <v-textarea placeholder="请输入描述信息，有字数统计" :words-count="true"></v-textarea>
	//     </div>
	//     <div>
	//       <v-textarea placeholder="请输入描述信息" :words-count="true" count-tips="您输入的字数是："></v-textarea>
	//     </div>
	//     <h4>有字数限制文本域</h4>
	//     <div>
	//       <v-textarea :limit-words="50" placeholder="这里只能输入50个字" :error="validStatus == 'error'" name="ruohuan" v-ref:textarea-limit :content.sync="content"></v-textarea>
	//     </div>
	//     <div>
	//       <v-textarea disabled :limit-words="10" placeholder="这里只能输入10个字"></v-textarea>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <v-textarea disabled :limit-words="10" placeholder="这里只能输入10个字"></v-textarea>
	// <v-textarea placeholder="请输入描述信息" :words-count="true" count-tips="您输入的字数是："></v-textarea>
	// </script></code></pre>
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
	//           <td>content</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>文本域内容</td>
	//         </tr>
	//         <tr>
	//           <td>placeholder</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>文本域预期值的提示信息</td>
	//         </tr>
	//         <tr>
	//           <td>disabled</td>
	//           <td></td>
	//           <td></td>
	//           <td>文本域状态，禁用</td>
	//         </tr>
	//        <tr>
	//           <td>error</td>
	//           <td></td>
	//           <td></td>
	//           <td>文本域状态，输入验证失败</td>
	//         </tr>
	//         <tr>
	//           <td>success</td>
	//           <td></td>
	//           <td></td>
	//           <td>文本域状态，输入验证成功</td>
	//         </tr>
	//         <tr>
	//           <td>limit-words</td>
	//           <td><code>Number</code></td>
	//           <td></td>
	//           <td>文本域限制字数</td>
	//         </tr>
	//         <tr>
	//           <td>words-count</td>
	//           <td><code>Boolean || 空</code></td>
	//           <td></td>
	//           <td>文本域字数统计功能</td>
	//         </tr>
	//         <tr>
	//           <td>count-tips</td>
	//           <td><code>String</code></td>
	//           <td><code>输入字数：</code></td>
	//           <td>文本域字数统计提示</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 404 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"textarea\">\n    <h3 class=\"page-header\"><a href=\"#textarea\" class=\"anchor\">Textarea 文本域</a></h3>\n    <div class=\"bs-example\">\n    <h4>基础文本域</h4>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea disabled content=\"文本框被禁用了\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea error content=\"信息错误了\"></v-textarea>\n    </div>\n    <h4>统计输入字数文本域</h4>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息，有字数统计\" :words-count=\"true\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息\" :words-count=\"true\" count-tips=\"您输入的字数是：\"></v-textarea>\n    </div>\n    <h4>有字数限制文本域</h4>\n    <div>\n      <v-textarea :limit-words=\"50\" placeholder=\"这里只能输入50个字\" :error=\"validStatus == 'error'\" name=\"ruohuan\" v-ref:textarea-limit :content.sync=\"content\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea disabled :limit-words=\"10\" placeholder=\"这里只能输入10个字\"></v-textarea>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-textarea disabled :limit-words=\"10\" placeholder=\"这里只能输入10个字\"></v-textarea>\n<v-textarea placeholder=\"请输入描述信息\" :words-count=\"true\" count-tips=\"您输入的字数是：\"></v-textarea>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>content</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文本域内容</td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文本域预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，禁用</td>\n        </tr>\n       <tr>\n          <td>error</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，输入验证失败</td>\n        </tr>\n        <tr>\n          <td>success</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，输入验证成功</td>\n        </tr>\n        <tr>\n          <td>limit-words</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td>文本域限制字数</td>\n        </tr>\n        <tr>\n          <td>words-count</td>\n          <td><code>Boolean || 空</code></td>\n          <td></td>\n          <td>文本域字数统计功能</td>\n        </tr>\n        <tr>\n          <td>count-tips</td>\n          <td><code>String</code></td>\n          <td><code>输入字数：</code></td>\n          <td>文本域字数统计提示</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>";

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(406)
	__vue_script__ = __webpack_require__(407)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tagDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(408)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 406 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  data: function data() {
	    return {
	      href: 'http://www.aliqin.cn',
	      size: 20
	    };
	  },
	
	  methods: {
	    closeTag: function closeTag() {
	      alert('这里是关闭标签之后的回调函数哦！！！');
	    }
	  },
	  components: {
	    vTag: _src.Tag
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
	//       <v-tag>标签一</v-tag>
	//       <v-tag closable @close="closeTag">标签（回调）</v-tag>
	//       <v-tag :href="href">标签（链接）</v-tag>
	//       <h4 class="example-title">三种颜色的标签</h4>
	//       <v-tag color="green">标签</v-tag>
	//       <v-tag color="orange" closable @close="closeTag">标签</v-tag>
	//       <v-tag color="red" size="20">标签</v-tag>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <v-tag>标签一</v-tag>
	// <v-tag closable @close="closeTag">标签（回调）</v-tag>
	// <v-tag :href="href">标签（链接）</v-tag>
	// <v-tag color="green">标签</v-tag>
	// <v-tag color="orange" closable @close="closeTag">标签</v-tag>
	// <v-tag color="red" size="20">标签</v-tag>
	// </script></code></pre>
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
	//         <td>size</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>Tag的尺寸，默认为12px</td>
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
/* 408 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tag\">\n    <h3 class=\"page-header\"><a href=\"#tag\" class=\"anchor\">Tag 标签</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本标签</h4>\n      <v-tag>标签一</v-tag>\n      <v-tag closable @close=\"closeTag\">标签（回调）</v-tag>\n      <v-tag :href=\"href\">标签（链接）</v-tag>\n      <h4 class=\"example-title\">三种颜色的标签</h4>\n      <v-tag color=\"green\">标签</v-tag>\n      <v-tag color=\"orange\" closable @close=\"closeTag\">标签</v-tag>\n      <v-tag color=\"red\" size=\"20\">标签</v-tag>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-tag>标签一</v-tag>\n<v-tag closable @close=\"closeTag\">标签（回调）</v-tag>\n<v-tag :href=\"href\">标签（链接）</v-tag>\n<v-tag color=\"green\">标签</v-tag>\n<v-tag color=\"orange\" closable @close=\"closeTag\">标签</v-tag>\n<v-tag color=\"red\" size=\"20\">标签</v-tag>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>closable</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>是否显示关闭按钮</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Tag的颜色，默认为#f2f2f2</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Tag的尺寸，默认为12px</td>\n      </tr>\n      <tr>\n        <td>href</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>给tag加上链接地址，作为一个超链接</td>\n      </tr>\n      <tr>\n        <td>on-close</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>点击关闭按钮之后所执行的回调函数</td>\n      </tr>\n\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(410)
	__vue_script__ = __webpack_require__(411)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tooltipDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(412)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 410 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	
	  components: {
	    Tooltip: _src.Tooltip
	  }
	};
	// </script>
	//
	// <style lang="less">
	//   .table-demo {
	//     position: relative;
	//     width: 100%;
	//
	//     td {
	//       text-align: center;
	//       width: 33%;
	//     }
	//   }
	//
	//   .table-tooltip {
	//     td {
	//       position: relative;
	//       padding: 5px;
	//     }
	//   }
	//
	//   .bs-example {
	//     p {
	//       position: relative;
	//     }
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="tooltip">
	//     <h3 class="page-header"><a href="#tooltip" class="anchor">Tooltip 文字提示</a></h3>
	//     <div class="bs-example">
	//       <table class="table-tooltip" cellspacing="5">
	//         <tr>
	//           <td></td>
	//           <td>
	//             <tooltip content="talk is cheap show me the code" placement="topLeft">
	//               <button class="btn btn-default ">上左</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip
	//               content="我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字"
	//               placement="top">
	//               <button class="btn btn-default ">上边</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip content="Lorem ipsum dolor sit amet" placement="topRight">
	//               <button class="btn btn-default ">上右</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>
	//             <tooltip content="what does the fox say ？" placement="leftTop">
	//               <button class="btn btn-default ">左上</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//           <td></td>
	//           <td></td>
	//           <td>
	//             <tooltip content="bang bang bang!" placement="rightTop">
	//               <button class="btn btn-default ">右上</button>
	//             </tooltip>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td>
	//             <tooltip content="Are you kidding me?" placement="left">
	//               <button class="btn btn-default ">左边</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//           <td></td>
	//           <td></td>
	//           <td>
	//             <tooltip content="Lorem ipsum dolor sit amet" placement="right">
	//               <button class="btn btn-default ">右边</button>
	//             </tooltip>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td>
	//             <tooltip content="no, i'm serious! " placement="leftBottom">
	//               <button class="btn btn-default ">左下</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//           <td></td>
	//           <td></td>
	//           <td>
	//             <tooltip content="Lorem ipsum dolor sit amet" placement="rightBottom">
	//               <button class="btn btn-default ">右下</button>
	//             </tooltip>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td></td>
	//           <td>
	//             <tooltip placement="bottomLeft"
	//                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//               <button class="btn btn-default ">下左</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip placement="bottom"
	//                      content="我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字">
	//               <button class="btn btn-default ">下边</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip placement="bottomRight"
	//                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//               <button class="btn btn-default ">下右</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//         </tr>
	//       </table>
	//
	//
	//       <h4>Triger</h4>
	//       <p>
	//         <tooltip trigger="click"
	//                  effect="fadein" content="提示文字" placement="top" trigger="hover">
	//           <button class="btn btn-default ">Click</button>
	//         </tooltip>
	//       </p>
	//       <tooltip effect="scale"
	//                content="Lorem ipsum dolor sit amet" placement="topLeft" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </tooltip>
	//     </div>
	//     <pre><code class="language-markup">
	//       <script type="language-mark-up">
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
	//
	//       </script>
	//     </code></pre>
	//     <h2>Options</h2>
	//     <table class="table table-bordered">
	//       <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Type</th>
	//         <th>Default</th>
	//         <th>Description</th>
	//       </tr>
	//       </thead>
	//       <tbody>
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
	//       <td>placement</td>
	//       <td><code>String</code></td>
	//       <td></td>
	//       <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight
	//       </td>
	//       </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 412 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tooltip\">\n    <h3 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip 文字提示</a></h3>\n    <div class=\"bs-example\">\n      <table class=\"table-tooltip\" cellspacing=\"5\">\n        <tr>\n          <td></td>\n          <td>\n            <tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\">\n              <button class=\"btn btn-default \">上左</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip\n              content=\"我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字\"\n              placement=\"top\">\n              <button class=\"btn btn-default \">上边</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n              <button class=\"btn btn-default \">上右</button>\n            </tooltip>\n          </td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"what does the fox say ？\" placement=\"leftTop\">\n              <button class=\"btn btn-default \">左上</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"bang bang bang!\" placement=\"rightTop\">\n              <button class=\"btn btn-default \">右上</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"Are you kidding me?\" placement=\"left\">\n              <button class=\"btn btn-default \">左边</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n              <button class=\"btn btn-default \">右边</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"no, i'm serious! \" placement=\"leftBottom\">\n              <button class=\"btn btn-default \">左下</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n              <button class=\"btn btn-default \">右下</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td></td>\n          <td>\n            <tooltip placement=\"bottomLeft\"\n                     content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"btn btn-default \">下左</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip placement=\"bottom\"\n                     content=\"我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字\">\n              <button class=\"btn btn-default \">下边</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip placement=\"bottomRight\"\n                     content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"btn btn-default \">下右</button>\n            </tooltip>\n          </td>\n          <td></td>\n        </tr>\n      </table>\n\n\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n                 effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n          <button class=\"btn btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n               content=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\">\n      <script type=\"language-mark-up\">\n<tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\">\n<button class=\"btn btn-default \">上左</button>\n</tooltip>\n<tooltip content=\"talk is cheap show me the code\" placement=\"top\">\n<button class=\"btn btn-default \">上边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n<button class=\"btn btn-default \">上右</button>\n</tooltip>\n<tooltip content=\"what does the fox say ？\" placement=\"leftTop\">\n<button class=\"btn btn-default \">左上</button>\n</tooltip>\n<tooltip content=\"Are you kidding me?\" placement=\"left\">\n<button class=\"btn btn-default \">左边</button>\n</tooltip>\n<tooltip content=\"no, i'm serious! \" placement=\"leftBottom\">\n<button class=\"btn btn-default \">左下</button>\n</tooltip>\n<tooltip content=\"bang bang bang!\" placement=\"rightTop\">\n  <button class=\"btn btn-default \">右上</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n  <button class=\"btn btn-default \">右边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n  <button class=\"btn btn-default \">右下</button>\n</tooltip>\n<tooltip  placement=\"bottomLeft\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下左</button>\n</tooltip>\n<tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下边</button>\n</tooltip>\n<tooltip  placement=\"bottomRight\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下右</button>\n</tooltip>\n<tooltip trigger=\"click\"\n  effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n  <button class=\"btn btn-default \">Click</button>\n  </tooltip>\n<tooltip effect=\"scale\"\ncontent=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n</tooltip>\n\n      </script>\n    </code></pre>\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code></td>\n        <td><code>click</code></td>\n        <td>以何种方式触发显示气泡框,可选hover, click, focus</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code></td>\n        <td><code>scale</code></td>\n        <td>过渡效果，可选scale, fadein</td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>内容</td>\n      </tr>\n      <td>placement</td>\n      <td><code>String</code></td>\n      <td></td>\n      <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight\n      </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(414)
	__vue_script__ = __webpack_require__(416)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/accordionDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(417)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(415);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordionDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordionDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.custom-class {\n  padding: 10px 15px;\n}\n", ""]);
	
	// exports


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var Panel = _src.Accordion.Panel; // <template>
	//   <div class="bs-docs-section" id="accordion">
	//     <h3 class="page-header"><a href="#accordion" class="anchor">Accordion 手风琴</a></h3>
	//     <div class="bs-example">
	//       <p>
	//         <input type="checkbox" v-model="checked">
	//         Open only one at a time.
	//       </p>
	//       <accordion :one-at-atime="checked">
	//         <panel :is-open="true">
	//           <div slot="panel-header" class="custom-class">Panel #1</div>
	//           内容一
	//         </panel>
	//         <panel>
	//           <div slot="panel-header" class="custom-class">Panel #2</div>
	//           内容二
	//         </panel>
	//         <panel>
	//           <div slot="panel-header" class="custom-class">Panel #3</div>
	//           内容三
	//         </panel>
	//         <panel>
	//           <div slot="panel-header" class="custom-class">Panel #4</div>
	//           内容四
	//         </panel>
	//       </accordion>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <input type="checkbox" v-model="checked">
	// <label for="checked">Open only one at a time.</label>
	// <accordion :one-at-atime="checked">
	//   <panel :is-open="true">
	//     <div slot="panel-header" class="custom-class">Panel #1</div>
	//     内容一
	//   </panel>
	//   <panel>
	//     <div slot="panel-header" class="custom-class">Panel #2</div>
	//     内容二
	//   </panel>
	//   <panel>
	//     <div slot="panel-header" class="custom-class">Panel #3</div>
	//     内容三
	//   </panel>
	//   <panel>
	//     <div slot="panel-header" class="custom-class">Panel #4</div>
	//     内容四
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
	//           <td>slot::panel-header</td>
	//           <td><code>slot node</code></td>
	//           <td></td>
	//           <td>以内容分发的形式自定义header里面的内容，注意：因为header自动绑定了展开收起的事件，所以
	//           如果用户自定义的元素里有事件绑定的操作，建议使用事件修饰符（例：@click.prev.stop=""）</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	//
	// <script>
	
	exports.default = {
	  data: function data() {
	    return {
	      checked: true
	    };
	  },
	
	  components: {
	    Accordion: _src.Accordion,
	    Panel: Panel
	  }
	};
	// </script>
	// <style>
	//   .custom-class {
	//     padding: 10px 15px;
	//   }
	// </style>

	/* generated by vue-loader */

/***/ },
/* 417 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"accordion\">\n    <h3 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion 手风琴</a></h3>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion :one-at-atime=\"checked\">\n        <panel :is-open=\"true\">\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n          内容一\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n          内容二\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n          内容三\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n          内容四\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n<accordion :one-at-atime=\"checked\">\n  <panel :is-open=\"true\">\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n    内容一\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n    内容二\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n    内容三\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n    内容四\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>slot::panel-header</td>\n          <td><code>slot node</code></td>\n          <td></td>\n          <td>以内容分发的形式自定义header里面的内容，注意：因为header自动绑定了展开收起的事件，所以\n          如果用户自定义的元素里有事件绑定的操作，建议使用事件修饰符（例：@click.prev.stop=\"\"）</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(419)
	__vue_script__ = __webpack_require__(421)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/affixDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(422)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(420);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite\n}\n@-webkit-keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n@keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n", ""]);
	
	// exports


/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    Tooltip: _src.Tooltip
	  }
	};
	// </script>
	//
	// <style>
	// .animated {
	//     -webkit-animation-duration: 3s;
	//     animation-duration: 3s;
	//     -webkit-animation-fill-mode: both;
	//     animation-fill-mode: both;
	//     animation-iteration-count: infinite
	// }
	// @keyframes shake {
	//     0%, 100% {transform: translateX(0);}
	//     10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
	//     20%, 40%, 60%, 80% {transform: translateX(5px);}
	// }
	// .shake {
	//     -webkit-animation-name: shake;
	//     animation-name: shake;
	// }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <!-- <div class="bs-docs-section" id="affix">
	//     <h3 class="page-header"><a href="#affix" class="anchor">Affix 固钉</a></h3>
	//     <div class="bs-example">
	//       <h3>
	//         The sub-navigation on the RIGHT is a live demo of the affix.
	//         <tooltip trigger="hover" effect="fadein" content="I'm a direction, not jerking off!" placement="left">
	//           <span class="glyphicon glyphicon-hand-right pull-right animated shake"></span>
	//         </tooltip>
	//       </h3>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <affix offset="">
	//   <nav class="sidebar">
	//     <ul>
	//       <li>...</li>
	//       <li>...</li>
	//       <li>...</li>
	//     </ul>
	//   </nav>
	// </affix>
	// </script></code></pre>
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
	//           <td>offset</td>
	//           <td><code>Number</code></td>
	//           <td><code>0</code></td>
	//           <td>Pixels to offset from top of screen when calculating position of scroll.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div> -->
	// </template>
	//
	// <script>

/***/ },
/* 422 */
/***/ function(module, exports) {

	module.exports = "\n  <!-- <div class=\"bs-docs-section\" id=\"affix\">\n    <h3 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix 固钉</a></h3>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div> -->\n";

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(424)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/asideDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(425)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    sidebar: _src.sidebar
	  },
	  data: function data() {
	    return {
	      showLeft: false,
	      showRight: false
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="aside">
	//     <h3 class="page-header"><a href="#aside" class="anchor">Aside 侧边栏</a></h3>
	//     <div class="bs-example">
	//       <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>
	//
	//       <sidebar :show.sync="showRight" placement="right" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//           <pre><code class="language-javascript">
	// if (talk === cheap){
	//   code.style.display = 'block'
	// }
	//         </code></pre>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showRight=false">Close</button>
	//         </div>
	//       </sidebar>
	//
	//       <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>
	//
	//       <sidebar  :show.sync="showLeft" placement="left" header="Title" :width="350">
	//         <h4>Text in aside</h4>
	//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//         tempor incididunt ut labore et dolore magna aliqua.</p>
	//         <p> Ut enim ad minim veniam,
	//         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//         consequat.</p>
	//         <pre><code class="language-javascript">
	// if (talk === cheap){
	//   code.style.display = 'block'
	// }
	//         </code></pre>
	//         <div class="aside-footer">
	//           <button type="button" class="btn btn-default" @click="showLeft=false">Close</button>
	//         </div>
	//       </sidebar>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <button
	// class="btn btn-success btn-lg"
	// @click="showRight = true">Show Aside on right</button>
	//
	// <sidebar :show.sync="showRight" placement="right" header="Title" :width="350">
	// ...
	// </sidebar>
	//
	// <button
	// class="btn btn-danger btn-lg"
	// @click="showLeft = true">Show Aside on left</button>
	//
	// <sidebar :show.sync="showLeft" placement="left" header="Title" :width="350">
	// ...
	// </sidebar></script></code></pre>
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
	//           <td>show</td>
	//           <td><code>Boolean</code></td>
	//           <td></td>
	//           <td>Whether show the component.</td>
	//         </tr>
	//         <tr>
	//           <td>placement</td>
	//           <td><code>String</code>, one of <code>left</code>, <code>right</code></td>
	//           <td><code>right</code></td>
	//           <td>how to position the component.</td>
	//         </tr>
	//         <tr>
	//           <td>header</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>Header text of the aside component.</td>
	//         </tr>
	//         <tr>
	//           <td>width</td>
	//           <td><code>Number</code></td>
	//           <td></td>
	//           <td></td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 425 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"aside\">\n    <h3 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside 侧边栏</a></h3>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\n\n      <sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n          <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\n        </div>\n      </sidebar>\n\n      <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\n\n      <sidebar  :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft=false\">Close</button>\n        </div>\n      </sidebar>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button\nclass=\"btn btn-success btn-lg\"\n@click=\"showRight = true\">Show Aside on right</button>\n\n<sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n...\n</sidebar>\n\n<button\nclass=\"btn btn-danger btn-lg\"\n@click=\"showLeft = true\">Show Aside on left</button>\n\n<sidebar :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n...\n</sidebar></script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td></td>\n          <td>Whether show the component.</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\n          <td><code>right</code></td>\n          <td>how to position the component.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Header text of the aside component.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(427)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/popoverDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(428)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Title',
	      text: 'Lorem ipsum dolor sit amet'
	    };
	  },
	
	  components: {
	    Popover: _src.Popover
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
/* 428 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"popover\">\n    <h3 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover 气泡</a></h3>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">Popover on bottom</button>\n</popover>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(430)
	__vue_script__ = __webpack_require__(432)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tabsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(433)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(431);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(131)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabsDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.example-title {\n  margin: 20px 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var Tab = _src.Tabs.Tab; // <template>
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
	// <tabs :base="true">
	//   <tab header="系统短信签名">
	//     <p>
	//       选项卡一内容
	//     </p>
	//   </tab>
	//   <tab header="推广短信签名">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	//   <tab header="被禁用的" disabled>
	//     ...
	//   </tab>
	//   <tab header="推广短信签名系统短信签名啊啊啊啊啊啊啊啊">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	//   <tab header="系统短信签名啊啊啊啊啊啊啊啊">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	//   <tab header="系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	// </tabs>
	// <tabs >
	//   <tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
	//     <p>
	//       选项卡一内容
	//     </p>
	//   </tab>
	//   <tab header="推广短信签名">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	//   <tab header="被禁用的" disabled>
	//     ...
	//   </tab>
	//   <tab header="被禁用的" disabled>
	//     ...
	//   </tab>
	//   <tab header="推广短信签名">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	//   <tab header="推广短信签名">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	//   <tab header="被禁用的" disabled>
	//     ...
	//   </tab>
	//   <tab header="推广短信签名">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	//   <tab header="推广短信签名">
	//      <p>
	//         选项卡二内容
	//      </p>
	//   </tab>
	// </tabs>
	// </script></code></pre>
	//   <h2>Tab 选项 (非 TABS)</h2>
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
	//         <td>header</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>Heading text of the tab.</td>
	//       </tr>
	//       <tr>
	//         <td>disabled</td>
	//         <td><code>Boolean</code></td>
	//         <td>false</td>
	//         <td>是否禁用当前Tab</td>
	//       </tr>
	//       <tr>
	//         <td>base</td>
	//         <td><code>Boolean</code></td>
	//         <td>false</td>
	//         <td>是否采用基础型的Tab样式</td>
	//       </tr>
	//       <tr>
	//         <td>show-len</td>
	//         <td><code>Number</code></td>
	//         <td>3</td>
	//         <td>当前想要显示出多少个Tab</td>
	//       </tr>
	//
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Tabs: _src.Tabs,
	    Tab: Tab
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
/* 433 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tabs\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs 标签页</a></h3>\n    <div class=\"bs-example\">\n    <h4 class=\"example-title\">基础型</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">Tab数量较多的情况</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">选项卡型</h4>\n      <tabs >\n        <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"系统短信签名\">\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n<tabs :base=\"true\">\n  <tab header=\"系统短信签名\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n<tabs >\n  <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab 选项 (非 TABS)</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否禁用当前Tab</td>\n      </tr>\n      <tr>\n        <td>base</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否采用基础型的Tab样式</td>\n      </tr>\n      <tr>\n        <td>show-len</td>\n        <td><code>Number</code></td>\n        <td>3</td>\n        <td>当前想要显示出多少个Tab</td>\n      </tr>\n\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(435)
	__vue_script__ = __webpack_require__(436)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/stepsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(437)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 435 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var Step = _src.Steps.Step; // <template>
	//   <div class="bs-docs-section" id="steps">
	//     <h3 class="page-header"><a href="#steps" class="anchor">Steps 步骤条</a></h3>
	//     <div class="bs-example">
	//         <h4 class="example-title">基础型</h4>
	//         <v-steps :current="current">
	//             <v-step title="已完成" ></v-step>
	//             <v-step title="进行中"></v-step>
	//             <v-step title="有一个待运行"></v-step>
	//             <v-step title="待运行"></v-step>
	//         </v-steps>
	//         <br><br>
	//         <h4 class="example-title">带文字描述</h4>
	//         <v-steps :current="current" color="#00a0ff">
	//             <v-step title="已完成" description="这里是多信息"></v-step>
	//             <v-step title="进行中"  description="这里是多信息的耶哦"></v-step>
	//             <v-step title="有一个待运行" description="描述啊描述啊"></v-step>
	//             <v-step title="待运行" description="这里是多信息的描述啊"></v-step>
	//         </v-steps>
	//         <br>
	//         <button type="button" class="btn default primary" @click="_next">next</button>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <v-steps :current="current">
	//   <v-step title="已完成" ></v-step>
	//   <v-step title="进行中"></v-step>
	//   <v-step title="有一个待运行"></v-step>
	//   <v-step title="待运行"></v-step>
	// </v-steps>
	// <v-steps :current="current" color="#00a0ff">
	//   <v-step title="已完成" description="这里是多信息"></v-step>
	//   <v-step title="进行中"  description="这里是多信息的耶哦"></v-step>
	//   <v-step title="有一个待运行" description="描述啊描述啊"></v-step>
	//   <v-step title="待运行" description="这里是多信息的描述啊"></v-step>
	// </v-steps>
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <h4 style="margin: 20px 0;">vSteps</h4>
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
	//       <tr>
	//         <td>color</td>
	//         <td>String</td>
	//         <td></td>
	//         <td>指定步骤条的样式颜色</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   <h4 style="margin: 20px 0;">vSteps vStep</h4>
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
	    vSteps: _src.Steps,
	    vStep: Step
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
/* 437 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"steps\">\n    <h3 class=\"page-header\"><a href=\"#steps\" class=\"anchor\">Steps 步骤条</a></h3>\n    <div class=\"bs-example\">\n        <h4 class=\"example-title\">基础型</h4>\n        <v-steps :current=\"current\">\n            <v-step title=\"已完成\" ></v-step>\n            <v-step title=\"进行中\"></v-step>\n            <v-step title=\"有一个待运行\"></v-step>\n            <v-step title=\"待运行\"></v-step>\n        </v-steps>\n        <br><br>\n        <h4 class=\"example-title\">带文字描述</h4>\n        <v-steps :current=\"current\" color=\"#00a0ff\">\n            <v-step title=\"已完成\" description=\"这里是多信息\"></v-step>\n            <v-step title=\"进行中\"  description=\"这里是多信息的耶哦\"></v-step>\n            <v-step title=\"有一个待运行\" description=\"描述啊描述啊\"></v-step>\n            <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n        </v-steps>\n        <br>\n        <button type=\"button\" class=\"btn default primary\" @click=\"_next\">next</button>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-steps :current=\"current\">\n  <v-step title=\"已完成\" ></v-step>\n  <v-step title=\"进行中\"></v-step>\n  <v-step title=\"有一个待运行\"></v-step>\n  <v-step title=\"待运行\"></v-step>\n</v-steps>\n<v-steps :current=\"current\" color=\"#00a0ff\">\n  <v-step title=\"已完成\" description=\"这里是多信息\"></v-step>\n  <v-step title=\"进行中\"  description=\"这里是多信息的耶哦\"></v-step>\n  <v-step title=\"有一个待运行\" description=\"描述啊描述啊\"></v-step>\n  <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n</v-steps>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">vSteps</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>current</td>\n        <td>Number</td>\n        <td>0</td>\n        <td>当前正在执行的步骤数，可以通过status属性覆盖状态</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td>String</td>\n        <td></td>\n        <td>指定步骤条的样式颜色</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">vSteps vStep</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td>String</td>\n        <td>无</td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>description</td>\n        <td>String</td>\n        <td>无</td>\n        <td>步骤的详情描述</td>\n      </tr>\n      <tr>\n        <td>status</td>\n        <td>String</td>\n        <td>无</td>\n        <td>执行step的状态，当不设置此属性时，父组件Steps会自动根据current来设置对应status,（可选值wait, process, finish）</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(439)
	__vue_script__ = __webpack_require__(440)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/breadcrumbDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(441)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 439 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var BreadcrumbItem = _src.Breadcrumb.BreadcrumbItem; // <template>
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
	    Breadcrumb: _src.Breadcrumb,
	    BreadcrumbItem: BreadcrumbItem
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
/* 441 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"breadcrumb\">\n    <h3 class=\"page-header\"><a href=\"#breadcrumb\" class=\"anchor\">Breadcrumb 面包屑</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本样式</h4>\n      <breadcrumb>\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item>三级类目</breadcrumb-item>\n      </breadcrumb>\n      <h4 class=\"example-title\">分隔符样式（选用）</h4>\n      <breadcrumb slash=\"&gt;\">\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n        <breadcrumb-item>四级类目</breadcrumb-item>\n      </breadcrumb>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<breadcrumb>\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item>三级类目</breadcrumb-item>\n</breadcrumb>\n<breadcrumb slash=\"&gt;\">\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n  <breadcrumb-item>四级类目</breadcrumb-item>\n</breadcrumb>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">Breadcrumb</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>slash</td>\n        <td>String</td>\n        <td>/</td>\n        <td>每一级类目之间的分隔符</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">BreadcrumbItem</h4>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>href</td>\n        <td>String</td>\n        <td>无</td>\n        <td>链接，如果不传则不可点击</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(443)
	__vue_script__ = __webpack_require__(444)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/paginationDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(445)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 443 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
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
	    Pagination: _src.Pagination
	  },
	  events: {
	    pageChange: function pageChange(page, id) {}
	  },
	  ready: function ready() {}
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
	//     <h3 class="page-header"><a href="#pagination" class="anchor">Pagination 翻页</a></h3>
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
	//                   :simple="true"
	//                   class="custom">
	//       </pagination>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :show-size-changer="true"></pagination>
	// <pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :mini="true"></pagination>
	// <pagination :total-page.sync="totalPage",:curr-page.sync="currPage",:total="total",:simple="true" class="custom"></pagination>
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
	//   <br>
	//   <strong>注：</strong>pagination组件会监听当前currPage的变化，当其发生变化时pagination组件会向上派发一个回调事件，名字叫pageChange，回调参数就是当前页以及pagination的id，需要在引用pagination的当前文件里面的events对象里将其加入进去.
	//   <pre><code class="language-markup"><script type="language-mark-up">
	//     events: {
	//       pageChange (page, id) {
	//
	//       }
	//     }
	//   </script></code></pre>
	// </template>
	//
	// <script>

/***/ },
/* 445 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"pagination\">\n    <h3 class=\"page-header\"><a href=\"#pagination\" class=\"anchor\">Pagination 翻页</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">完全版</h4>\n      <pagination :total-page.sync=\"totalPage\",\n                  :curr-page.sync=\"currPage\",\n                  :total=\"total\",\n                  :show-jumper=\"true\",\n                  :show-size-changer=\"true\">\n      </pagination>\n      <h4 class=\"example-title\">迷你版</h4>\n      <pagination :total-page.sync=\"totalPage\",\n                  :curr-page.sync=\"currPage\",\n                  :total=\"total\",\n                  :show-jumper=\"true\",\n                  :mini=\"true\">\n      </pagination>\n      <h4 class=\"example-title\">精简版</h4>\n      <pagination :total-page.sync=\"totalPage\",\n                  :curr-page.sync=\"currPage\",\n                  :total=\"total\",\n                  :simple=\"true\"\n                  class=\"custom\">\n      </pagination>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<pagination :total-page.sync=\"totalPage\" :curr-page.sync=\"currPage\" :total=\"total\" :show-jumper=\"true\" :show-size-changer=\"true\"></pagination>\n<pagination :total-page.sync=\"totalPage\" :curr-page.sync=\"currPage\" :total=\"total\" :show-jumper=\"true\" :mini=\"true\"></pagination>\n<pagination :total-page.sync=\"totalPage\",:curr-page.sync=\"currPage\",:total=\"total\",:simple=\"true\" class=\"custom\"></pagination>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>total-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>总页数</td>\n      </tr>\n      <tr>\n        <td>curr-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>当前页</td>\n      </tr>\n      <tr>\n        <td>total</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>数据总条数</td>\n      </tr>\n      <tr>\n        <td>show-jumper</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启跳转功能</td>\n      </tr>\n      <tr>\n        <td>show-size-changer</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启修改每页条数功能</td>\n      </tr>\n      <tr>\n        <td>simple</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用精简版样式</td>\n      </tr>\n      <tr>\n        <td>mini</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用迷你版样式</td>\n      </tr>\n    </tbody>\n  </table>\n  <br>\n  <strong>注：</strong>pagination组件会监听当前currPage的变化，当其发生变化时pagination组件会向上派发一个回调事件，名字叫pageChange，回调参数就是当前页以及pagination的id，需要在引用pagination的当前文件里面的events对象里将其加入进去.\n  <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n    events: {\n      pageChange (page, id) {\n\n      }\n    }\n  </script></code></pre>\n";

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(447)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/filters/phoneNumberDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(449)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(448);
	
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
	//   <div class="bs-docs-section" id="phonenumber">
	//     <h3 class="page-header"><a href="#phonenumber" class="anchor">手机号码格式化 phonenumber</a></h3>
	//     <div class="bs-example">
	//     <input type="text" v-model="number" />
	//     <div>{{number | phoneNumber}}</div>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <input type="text" v-model="number" />
	// <div>{{number | phoneNumber}}</div>
	// </script></code></pre>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _phoneNumber = __webpack_require__(335);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Vue.filter('phoneNumber', _phoneNumber2.default);
	
	module.exports = {};

/***/ },
/* 449 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"phonenumber\">\n    <h3 class=\"page-header\"><a href=\"#phonenumber\" class=\"anchor\">手机号码格式化 phonenumber</a></h3>\n    <div class=\"bs-example\">\n    <input type=\"text\" v-model=\"number\" />\n    <div>{{number | phoneNumber}}</div>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"text\" v-model=\"number\" />\n<div>{{number | phoneNumber}}</div>\n</script></code></pre>\n  </div>\n";

/***/ },
/* 450 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 451 */
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
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;
	
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
	
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
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
			DFS: function(o, callback, type, visited) {
				visited = visited || {};
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
	
						if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, null, visited);
						}
						else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, i, visited);
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
	
	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	
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
	
		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
	
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 452 */
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