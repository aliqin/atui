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

	module.exports = __webpack_require__(83);


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

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(84);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _headerDocs = __webpack_require__(122);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _gettingStarted = __webpack_require__(125);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _gridDocs = __webpack_require__(127);
	
	var _gridDocs2 = _interopRequireDefault(_gridDocs);
	
	var _iconDocs = __webpack_require__(348);
	
	var _iconDocs2 = _interopRequireDefault(_iconDocs);
	
	var _buttonDocs = __webpack_require__(353);
	
	var _buttonDocs2 = _interopRequireDefault(_buttonDocs);
	
	var _inputDocs = __webpack_require__(356);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _uploaderDocs = __webpack_require__(359);
	
	var _uploaderDocs2 = _interopRequireDefault(_uploaderDocs);
	
	var _formDocs = __webpack_require__(362);
	
	var _formDocs2 = _interopRequireDefault(_formDocs);
	
	var _switchDocs = __webpack_require__(365);
	
	var _switchDocs2 = _interopRequireDefault(_switchDocs);
	
	var _sliderDocs = __webpack_require__(369);
	
	var _sliderDocs2 = _interopRequireDefault(_sliderDocs);
	
	var _dropdownDocs = __webpack_require__(372);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _selectDocs = __webpack_require__(375);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _calendarDocs = __webpack_require__(378);
	
	var _calendarDocs2 = _interopRequireDefault(_calendarDocs);
	
	var _datepickerDocs = __webpack_require__(381);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _searchboxDocs = __webpack_require__(384);
	
	var _searchboxDocs2 = _interopRequireDefault(_searchboxDocs);
	
	var _messageDocs = __webpack_require__(387);
	
	var _messageDocs2 = _interopRequireDefault(_messageDocs);
	
	var _cascaderDocs = __webpack_require__(392);
	
	var _cascaderDocs2 = _interopRequireDefault(_cascaderDocs);
	
	var _modalDocs = __webpack_require__(395);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _tableDocs = __webpack_require__(398);
	
	var _tableDocs2 = _interopRequireDefault(_tableDocs);
	
	var _badgeDocs = __webpack_require__(401);
	
	var _badgeDocs2 = _interopRequireDefault(_badgeDocs);
	
	var _carouselDocs = __webpack_require__(405);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _Affix = __webpack_require__(272);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(408);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _spinDocs = __webpack_require__(410);
	
	var _spinDocs2 = _interopRequireDefault(_spinDocs);
	
	var _textareaDocs = __webpack_require__(413);
	
	var _textareaDocs2 = _interopRequireDefault(_textareaDocs);
	
	var _tagDocs = __webpack_require__(416);
	
	var _tagDocs2 = _interopRequireDefault(_tagDocs);
	
	var _tooltipDocs = __webpack_require__(420);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _accordionDocs = __webpack_require__(424);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(429);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _asideDocs = __webpack_require__(434);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _popoverDocs = __webpack_require__(437);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _tabsDocs = __webpack_require__(440);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _stepsDocs = __webpack_require__(445);
	
	var _stepsDocs2 = _interopRequireDefault(_stepsDocs);
	
	var _breadcrumbDocs = __webpack_require__(449);
	
	var _breadcrumbDocs2 = _interopRequireDefault(_breadcrumbDocs);
	
	var _paginationDocs = __webpack_require__(453);
	
	var _paginationDocs2 = _interopRequireDefault(_paginationDocs);
	
	var _phoneNumberDocs = __webpack_require__(457);
	
	var _phoneNumberDocs2 = _interopRequireDefault(_phoneNumberDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(461);
	__webpack_require__(344);
	__webpack_require__(345);
	__webpack_require__(346);
	__webpack_require__(462);
	__webpack_require__(463);
	//  基础类
	
	
	// 表单类
	
	// import progressbarDocs from './example/progressbar-docs.vue'
	// import typeaheadDocs from './example/typeaheadDocs.vue'
	
	// 展示类
	
	
	// 导航类
	
	// import menuDocs from './example/menuDocs.vue'
	
	
	// filters
	
	
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
	    sliderDocs: _sliderDocs2.default,
	    messageDocs: _messageDocs2.default,
	    cascaderDocs: _cascaderDocs2.default,
	    badgeDocs: _badgeDocs2.default,
	    tagDocs: _tagDocs2.default,
	    headerDocs: _headerDocs2.default,
	    accordionDocs: _accordionDocs2.default,
	    calendarDocs: _calendarDocs2.default,
	    affixDocs: _affixDocs2.default,
	    // asideDocs,
	    // carouselDocs,
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

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(85);
	
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	__webpack_require__(111);
	module.exports = __webpack_require__(95).Array.from;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(88)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(91)(String, 'String', function(iterated){
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(89)
	  , defined   = __webpack_require__(90);
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
/* 89 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(92)
	  , $export        = __webpack_require__(93)
	  , redefine       = __webpack_require__(98)
	  , hide           = __webpack_require__(99)
	  , has            = __webpack_require__(104)
	  , Iterators      = __webpack_require__(105)
	  , $iterCreate    = __webpack_require__(106)
	  , setToStringTag = __webpack_require__(107)
	  , getProto       = __webpack_require__(100).getProto
	  , ITERATOR       = __webpack_require__(108)('iterator')
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
/* 92 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(94)
	  , core      = __webpack_require__(95)
	  , ctx       = __webpack_require__(96)
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
/* 94 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 95 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(97);
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
/* 97 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(99);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(100)
	  , createDesc = __webpack_require__(101);
	module.exports = __webpack_require__(102) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 100 */
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
/* 101 */
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(103)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(100)
	  , descriptor     = __webpack_require__(101)
	  , setToStringTag = __webpack_require__(107)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(99)(IteratorPrototype, __webpack_require__(108)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(100).setDesc
	  , has = __webpack_require__(104)
	  , TAG = __webpack_require__(108)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(109)('wks')
	  , uid    = __webpack_require__(110)
	  , Symbol = __webpack_require__(94).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(94)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(96)
	  , $export     = __webpack_require__(93)
	  , toObject    = __webpack_require__(112)
	  , call        = __webpack_require__(113)
	  , isArrayIter = __webpack_require__(116)
	  , toLength    = __webpack_require__(117)
	  , getIterFn   = __webpack_require__(118);
	$export($export.S + $export.F * !__webpack_require__(121)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(90);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(114);
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(115);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(105)
	  , ITERATOR   = __webpack_require__(108)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(89)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(119)
	  , ITERATOR  = __webpack_require__(108)('iterator')
	  , Iterators = __webpack_require__(105);
	module.exports = __webpack_require__(95).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(120)
	  , TAG = __webpack_require__(108)('toStringTag')
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
/* 120 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(108)('iterator')
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(123)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/headerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(124)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 123 */
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
	//           <li><a href="components.html">
	//             组件
	//           </a></li>
	//           <li><a href="widgets.html">
	//             Widgets
	//           </a></li>
	//           <li><a href="filters.html">
	//             filters
	//           </a></li>
	//           <li><a href="http://gitlab.alibaba-inc.com/aliqin/vue-component/">
	//             GitLab
	//           </a></li>
	//           <li><a href="http://ued.aliqin.alibaba.net/webcompon/" target="_blank">
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
	      document.getElementById('J_ThemeCss').href = '../build/' + csslink;
	      document.body.className = csslink.replace('.css', '');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"navbar navbar-top bs-docs-nav\" id=\"top\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"\" class=\"navbar-brand\">VueComponent</a>\n    </div>\n    <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"components.html\">\n          组件\n        </a></li>\n        <li><a href=\"widgets.html\">\n          Widgets\n        </a></li>\n        <li><a href=\"filters.html\">\n          filters\n        </a></li>\n        <li><a href=\"http://gitlab.alibaba-inc.com/aliqin/vue-component/\">\n          GitLab\n        </a></li>\n        <li><a href=\"http://ued.aliqin.alibaba.net/webcompon/\" target=\"_blank\">\n          视觉稿\n        </a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n<ul class=\"themes\" id=\"J_header\">\n  <li v-for=\"theme in themes\" :class=\"{active:theme.active}\" :style=\"{backgroundColor:theme.color}\" @click=\"changeTheme(theme.csslink,$event)\">\n  </li>\n</ul>\n";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(126)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"getting-started\">\n\n    <h2>安装方法：CommonJS</h2>\n    <pre><code class=\"language-javascript\">\n$ tnpm install @ali/vue-component --save-dev\n\n// css引入 alidayu or alitx or tmallwt\nimport '@ali/vue-component/dist/alidayu.css'\n\n// 或less引入\nimport '@ali/vue-component/style/themes/alidayu.less'\n\n// 引入组件\nimport { Alert } from '@ali/vue-component'\n\n// 如果没有使用rollup或webpak2.0，整个组件JS都会打包进去，使用如下方式可按需打包\nimport Alert from '@ali/vue-component/src/components/Alert'\n\nnew Vue({\n  components: {\n    Alert\n  }\n})\n    </code></pre>\n    <h3>浏览器引用</h3>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-component.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueComponent.alert\n&lt;/script&gt;\n    </code></pre>\n  </div>\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(128)
	__vue_script__ = __webpack_require__(132)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/gridDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(347)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(129);
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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.grid-demo .row{\n  margin:5px 0;\n}\n.grid-demo .row > div{\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n  background: #99EAD8;\n  background-clip: content-box;\n}\n", ""]);
	
	// exports


/***/ },
/* 130 */
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
	
	var _Layout = __webpack_require__(143);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Button = __webpack_require__(154);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(161);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Searchbox = __webpack_require__(165);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);
	
	var _Uploader = __webpack_require__(170);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);
	
	var _Slider = __webpack_require__(190);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Switch = __webpack_require__(201);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Dropdown = __webpack_require__(205);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Select = __webpack_require__(209);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Calendar = __webpack_require__(220);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _DatePicker = __webpack_require__(224);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _Typeahead = __webpack_require__(231);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Cascader = __webpack_require__(237);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _Message = __webpack_require__(184);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _Modal = __webpack_require__(241);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Table = __webpack_require__(246);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Badge = __webpack_require__(259);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Carousel = __webpack_require__(263);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Affix = __webpack_require__(272);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Spin = __webpack_require__(253);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	var _Textarea = __webpack_require__(277);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _Tag = __webpack_require__(212);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Tooltip = __webpack_require__(193);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Accordion = __webpack_require__(281);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Popover = __webpack_require__(290);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Tabs = __webpack_require__(296);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Steps = __webpack_require__(305);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Menu = __webpack_require__(312);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Breadcrumb = __webpack_require__(322);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Pagination = __webpack_require__(329);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _phoneNumber = __webpack_require__(343);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(344);
	__webpack_require__(345);
	__webpack_require__(346);
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
	  Slider: _Slider2.default,
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
/* 137 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"['iconfont','icon-' + type]\" :style=\"{ fontSize: size + 'px',color:color }\">\n</i>\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Form = __webpack_require__(139);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormItem = __webpack_require__(151);
	
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
	__vue_template__ = __webpack_require__(150)
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

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-horizontal {}\n.form-vertical {}\n", ""]);
	
	// exports


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(143);
	
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Row = __webpack_require__(144);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(147);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { Row: _Row2.default, Col: _Col2.default };

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(145)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(146)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 145 */
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
/* 146 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\"><slot></slot></div>\n";

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(148)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 148 */
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
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"className\"><slot></slot></div>\n";

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n<form class=\"form\" :class=\"classObj\">\n  <v-row>\n    <slot></slot>\n  </v-row>\n</form>\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(152)
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
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(143);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="form-item" :class="classObj">
	//   <v-col :span="labelCol" type="sm">
	//     <label v-if="label" class="form-label">
	//       <span v-if="isRequired" class="required-icon">*</span>
	//       {{label}}
	//     </label>
	//   </v-col>
	//   <v-col :span="wrapperCol || calcWrapperCol" type="sm">
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
/* 153 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"form-item\" :class=\"classObj\">\n  <v-col :span=\"labelCol\" type=\"sm\">\n    <label v-if=\"label\" class=\"form-label\">\n      <span v-if=\"isRequired\" class=\"required-icon\">*</span>\n      {{label}}\n    </label>\n  </v-col>\n  <v-col :span=\"wrapperCol || calcWrapperCol\" type=\"sm\">\n    <div class=\"form-input\">\n      <slot></slot>\n      <template v-if=\"showIcon\">\n        <icon class=\"status-icon\" v-if=\"validStatus == 'warn'\" type=\"waring\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'error'\" type=\"error\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'success'\" type=\"success\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'help'\" type=\"help\"></icon>\n      </template>\n    </div>\n    <div v-if=\"tips && validStatus\" class=\"status-info\">{{tips}}</div>\n  </v-col>\n</div>\n";

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(155);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Group = __webpack_require__(158);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Button2.default.Group = _Group2.default;
	
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

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Button/Group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="at-btn-group" :class="btnGroupClassObj">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    large: null,
	    small: null
	  },
	  computed: {
	    btnGroupClassObj: function btnGroupClassObj() {
	      return {
	        'large': typeof this.large !== "undefined",
	        'small': typeof this.small !== "undefined"
	      };
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"at-btn-group\" :class=\"btnGroupClassObj\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(162);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(163)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Input/Input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(164)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 163 */
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
	    value: [String, Number],
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
/* 164 */
/***/ function(module, exports) {

	module.exports = "\n<input type=\"{{type}}\" class=\"input\" :class=\"classObj\" placeholder=\"{{placeholder}}\" v-model=\"value\" :valid-status.sync=\"validStatus\" maxlength=\"{{maxlength}}\" />\n";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Searchbox = __webpack_require__(166);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Searchbox2.default;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(167)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Searchbox/Searchbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(169)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="search-box">
	//     <input type="text" class="input" :class="classObj" :placeholder="placeholder" v-model="value" @focus="focusInput" debounce="500" />
	//     <icon type="clear" v-show="value" color="#bfbfbf" size="14" @click="clearInput"></icon>
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
	    },
	    clearInput: function clearInput() {
	      this.value = '';
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 168 */
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
/* 169 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-box\">\n  <input type=\"text\" class=\"input\" :class=\"classObj\" :placeholder=\"placeholder\" v-model=\"value\" @focus=\"focusInput\" debounce=\"500\" />\n  <icon type=\"clear\" v-show=\"value\" color=\"#bfbfbf\" size=\"14\" @click=\"clearInput\"></icon>\n  <icon type=\"search\" :color=\"iconColor\" size=\"14\"></icon>\n  <div v-if=\"searchList && searchList.length > 0\" class=\"search-list-containter\">\n    <ul class=\"list-dropdown\" v-show=\"showPop\">\n      <li v-for=\"item in searchList | filterBy value\">\n        <a href=\"javascript:;\" @click=\"checkItem($index, item[textField])\" title=\"{{item[textField]}}\">{{item[textField]}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Uploader = __webpack_require__(171);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Uploader2.default;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(172)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Uploader/Uploader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(173);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Message = __webpack_require__(184);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="at-upload" id="upload-{{uploadId}}">
	//   <div v-if="uploadType == 'click'">
	//     <label>
	//       <input
	//         type="file"
	//         name="{{name}}"
	//         accept="{{accept}}"
	//         id="{{uploadId}}"
	//         :multiple="multiple"
	//         @:change="onChange($event)" />
	//       <slot>
	//         <span class="btn tertiary">点击上传</span>
	//       </slot>
	//     </label>
	//     <div class="at-upload-list">
	//       <div class="at-upload-item" v-for="file in fileList">
	//         <div class="at-upload-item-info" :class="{'active': current == $index}" @mouseover="filemouseover($index)" @mouseout="filemouseout">
	//           <icon type="doc" class="at-upload-file-icon" size="12"></icon>
	//           <span>{{file.name}}</span>
	//           <icon type="close" class="at-upload-del-info" size="12" @click="delExistFile($index)"></icon>
	//         </div>
	//       </div>
	//       <div class="at-upload-item" v-for="file in uploadList">
	//         <div class="at-upload-item-info" :class="{'active': current == $index}" @mouseover="filemouseover($index)" @mouseout="filemouseout">
	//           <icon type="doc" class="at-upload-file-icon" size="12"></icon>
	//           <span>{{file.name}}</span>
	//           <icon type="close" class="at-upload-del-info" size="12" @click="delFile($index)"></icon>
	//         </div>
	//         <div class="at-upload-item-progress" :class="{'hide': progress[$index] == '100%'}">
	//           <div class="at-progress at-progress-line at-progress-status-success">
	//             <div class="at-progress-inner">
	//               <div class="at-progress-bg" :style="{width: progress[$index]}"></div>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	//   <div v-if="uploadType == 'drag'" class="at-upload-drag">
	//     <div class="at-upload-drag-container {{dragover ? 'is-dragover' : ''}}">
	//       <input
	//           type="file"
	//           name="{{name}}"
	//           id="{{uploadId}}"
	//           accept="{{accept}}"
	//           :multiple="multiple"
	//           @change="onChange($event)" />
	//       <label for="{{uploadId}}" class="at-upload-drag-area">
	//         <p class="at-upload-drag-icon"></p>
	//         <span v-if="advanceDrag">将文件拖拽至框中上传或点此上传</span>
	//         <span v-if="!advanceDrag">当前环境不支持拖拽上传，请点此上传</span>
	//         <p v-if="fileList.length > 0" v-for="file in selectFiles">{{file}}</p>
	//       </label>
	//     </div>
	//     <div class="at-upload-list">
	//       <div class="at-upload-item" v-for="file in fileList">
	//         <div class="at-upload-item-info" :class="{'active': current == $index}" @mouseover="filemouseover($index)" @mouseout="filemouseout">
	//           <icon type="doc" class="at-upload-file-icon" size="12"></icon>
	//           <span>{{file.name}}</span>
	//           <icon type="close" class="at-upload-del-info" size="12" @click="delExistFile($index)"></icon>
	//         </div>
	//       </div>
	//       <div class="at-upload-item" v-for="file in uploadList">
	//         <div class="at-upload-item-info" :class="{'active': current == $index}" @mouseover="filemouseover($index)" @mouseout="filemouseout">
	//           <icon type="doc" class="at-upload-file-icon" size="12"></icon>
	//           <span>{{file.name}}</span>
	//           <icon type="close" class="at-upload-del-info" size="12" @click="delFile($index)"></icon>
	//         </div>
	//         <div class="at-upload-item-progress" :class="{'hide': progress[$index] == '100%'}">
	//           <div class="at-progress at-progress-line at-progress-status-success">
	//             <div class="at-progress-inner">
	//               <div class="at-progress-bg" :style="{width: progress[$index]}"></div>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
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
	    name: {
	      type: String,
	      default: 'files'
	    },
	    uploadType: {
	      type: String,
	      default: 'click' //drag拖拽上传，click点击上传
	    },
	    accept: {
	      type: String,
	      default: ""
	    },
	    url: {
	      type: String,
	      default: ''
	    },
	    multiple: {
	      type: Boolean,
	      default: true
	    },
	    fileList: {
	      default: null
	    },
	    maxlength: Number
	  },
	  data: function data() {
	    return {
	      value: '',
	      uploadId: this.id || 'upload' + new Date().getTime(),
	      model: null,
	      current: -1,
	      percent: 0,
	      xhr: 'FormData' in window,
	      uploadList: [],
	      progress: [],
	      dragover: false
	    };
	  },
	
	  computed: {
	    advanceDrag: function advanceDrag() {
	      var div = document.createElement('div');
	      return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Message: _Message2.default
	  },
	  ready: function ready() {
	    this._input = document.querySelector('#' + this.uploadId);
	    this.$el = document.querySelector('#upload-' + this.uploadId);
	
	    this.advanceDrag && this.addDragEvt();
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
	    onChange: function onChange(e) {
	      var files = e.target.files;
	
	      if (files) {
	        for (var i in files) {
	          if ((0, _typeof3.default)(files[i]) == 'object' && files[i].name) {
	            this.progress.push('0%');
	            this.uploadList.push(files[i]);
	          }
	        }
	      } else {
	        //只会取上传的第一个，只能上传一个
	        this.progress = ['0%'];
	        this.uploadList = [{ name: this._input.value.replace(/^.*\\/, '') }];
	      }
	
	      if (this.maxlength && this.fileList.length + this.uploadList.length > this.maxlength) {
	        this._input.value = '';
	        this.uploadList = [];
	        this.showMessage('超过上传数量限制，请先删除再进行上传');
	      } else {
	        this.submitForm();
	      }
	    },
	
	
	    /**
	     * 上传后自动提交
	     */
	    submitForm: function submitForm() {
	      debugger;
	      if (this.uploadList.length > 0) {
	        if (this.url) {
	          if (this.xhr) {
	            this.xhrUpload();
	          } else {
	            this.iframeUpload();
	          }
	        }
	      }
	    },
	    xhrUpload: function xhrUpload() {
	      var self = this;
	      var data = new FormData();
	      var i = 0;
	      var len = this.uploadList.length;
	
	      for (i = 0; i < len; i++) {
	        (function (i, file) {
	          if (file.type.match(self.accept)) {
	            (function () {
	              data.append(self.name, file, file.name);
	
	              var xhr = new XMLHttpRequest();
	
	              xhr.open('post', self.url, true);
	
	              xhr.onload = function () {
	                self.parseResponse(xhr.responseText, i);
	              };
	
	              xhr.upload.onprogress = function (e) {
	                var loaded = e.loaded ? e.loaded : 0;
	                var total = e.total ? e.total : 1;
	                self.progress[i] = parseInt(loaded / total * 100, 10) + '%';
	              };
	
	              xhr.onerror = function () {
	                self.setError('上传失败了！');
	              };
	
	              xhr.send(data);
	            })();
	          }
	        })(i, this.uploadList[i]);
	      }
	    },
	
	
	    /**
	     * body中插入form和iframe进行上传
	     */
	    iframeUpload: function iframeUpload() {
	      var _this2 = this;
	
	      var i = 0;
	      var len = this.uploadList.length;
	      if (this.testSameOrigin(this.url)) {
	        var _loop = function _loop() {
	          var iframeName = 'uploadiframe-' + i + '-' + new Date().getTime();
	          var iframe = document.createElement('iframe');
	          var form = document.createElement('form');
	          var input = document.createElement('input');
	
	          input.setAttribute('type', 'file');
	          input.setAttribute('value', _this2.uploadList[i].name);
	          iframe.setAttribute('name', iframeName);
	          iframe.style.display = 'none';
	          form.setAttribute('method', 'post');
	          form.setAttribute('action', _this2.url);
	          form.setAttribute('target', iframeName);
	          form.setAttribute('data-index', i);
	
	          document.body.appendChild(form);
	          form.appendChild(iframe);
	          form.appendChild(input);
	
	          iframe.addEventListener('load', function () {
	            _this2.parseResponse(iframe.contentDocument.body.innerHTML, form.getAttribute('data-id'));
	            document.body.removeChild(form);
	          });
	          form.submit();
	        };
	
	        for (i = 0; i < len; i++) {
	          _loop();
	        }
	      } else {
	        this.setError('iframe不支持跨域请求');
	      }
	    },
	
	
	    /**
	     * 测试上传地址与当前页面地址是否同域
	     */
	    testSameOrigin: function testSameOrigin(url) {
	      var loc = window.location;
	      var a = document.createElement('a');
	      a.href = url;
	      return a.hostname == loc.hostname && a.port == loc.port && a.protocol == loc.protocol;
	    },
	
	
	    /**
	     * 处理响应结果
	     */
	    parseResponse: function parseResponse(response, index) {
	      var data = null;
	
	      if (!response) {
	        this.setError('服务器没有响应', index);
	      } else {
	        try {
	          data = JSON.parse(response);
	        } catch (e) {
	          this.setError('服务器响应数据格式有问题', index);
	        }
	
	        if (data) {
	          if (data.success) {
	            this.model = data.data;
	            this.$dispatch('completed::file-upload', {
	              model: this.model,
	              file: this.uploadList[index]
	            });
	          } else if (data.error) {
	            this.setError(data.error, index);
	          }
	        }
	      }
	    },
	
	
	    /**
	     * 设置错误提示
	     */
	    setError: function setError(message, index) {
	      this.errorMessage = message;
	      this.$dispatch('completed::file-upload', {
	        error: this.errorMessage,
	        file: index && this.uploadList[index] || null
	      });
	
	      index > -1 && this.uploadList.splice(index, 1);
	    },
	    showMessage: function showMessage(msg) {
	      _Message2.default.success(msg);
	    },
	    filemouseover: function filemouseover($index) {
	      this.current = $index;
	    },
	    filemouseout: function filemouseout() {
	      this.current = -1;
	    },
	    delFile: function delFile($index) {
	      this.$dispatch('delete::file-upload', {
	        file: this.uploadList[$index]
	      });
	      this.uploadList.splice($index, 1);
	    },
	    delExistFile: function delExistFile($index) {
	      this.$dispatch('delete::file-upload', {
	        file: this.fileList[$index]
	      });
	      this.fileList.splice($index, 1);
	    },
	
	
	    /**
	     * 添加drag事件
	     */
	    addDragEvt: function addDragEvt() {
	      var _this3 = this;
	
	      var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	
	      events.forEach(function (event) {
	        _this3.$el.addEventListener(event, function (e) {
	          return _this3.dragHandler(e);
	        });
	      });
	    },
	
	
	    /**
	     * drag事件处理
	     */
	    dragHandler: function dragHandler(e) {
	      var self = this;
	      e.preventDefault();
	      e.stopPropagation();
	
	      if (e.type === 'dragover' || e.type === 'dragenter') {
	        self.dragover = true;
	      }
	
	      if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
	        self.dragover = false;
	        if (e.type === 'drop') {
	          var files = e.dataTransfer.files || {};
	          for (var i in files) {
	            if ((0, _typeof3.default)(files[i]) == 'object' && files[i].name) {
	              self.progress.push('0%');
	              self.uploadList.push(files[i]);
	            }
	          }
	          self.submitForm();
	        }
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(174)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(175), __esModule: true };

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(176);
	__webpack_require__(183);
	module.exports = __webpack_require__(95).Symbol;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(100)
	  , global         = __webpack_require__(94)
	  , has            = __webpack_require__(104)
	  , DESCRIPTORS    = __webpack_require__(102)
	  , $export        = __webpack_require__(93)
	  , redefine       = __webpack_require__(98)
	  , $fails         = __webpack_require__(103)
	  , shared         = __webpack_require__(109)
	  , setToStringTag = __webpack_require__(107)
	  , uid            = __webpack_require__(110)
	  , wks            = __webpack_require__(108)
	  , keyOf          = __webpack_require__(177)
	  , $names         = __webpack_require__(180)
	  , enumKeys       = __webpack_require__(181)
	  , isArray        = __webpack_require__(182)
	  , anObject       = __webpack_require__(114)
	  , toIObject      = __webpack_require__(178)
	  , createDesc     = __webpack_require__(101)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(92)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(100)
	  , toIObject = __webpack_require__(178);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(179)
	  , defined = __webpack_require__(90);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(120);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(178)
	  , getNames  = __webpack_require__(100).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(100);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(120);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 183 */
/***/ function(module, exports) {



/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(185);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Vue from 'vue'
	
	['info', 'success', 'error', 'warn', 'loading'].forEach(function (type, i) {
	  _Message2.default[type] = function (content, duration, placement) {
	    duration = duration || 3000;
	    placement = placement || 'center';
	    new Vue({
	      template: '<message class="atui-message-notice" :show="show" :duration="duration" :type="type" width="400px" :transition="transition" :placement="placement">{{content}}</message>',
	      components: {
	        Message: _Message2.default
	      },
	      data: {
	        content: content,
	        type: type,
	        duration: duration,
	        show: true,
	        transition: 'movedown',
	        placement: placement
	      },
	      ready: function ready() {
	        var me = this;
	        if (me.duration) {
	          setTimeout(function () {
	            me.$destroy(true);
	          }, duration);
	        }
	      }
	    }).$mount().$appendTo('body');
	  };
	});
	
	exports.default = _Message2.default;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(186)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Message/Message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(188)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(187);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div
	//     v-show="show"
	//     :class="{
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
	//     :transition="transition"
	//     :style="{width:width}"
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
	      default: true
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
	    content: String,
	    transition: {
	      type: String,
	      default: 'fade'
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

	/* generated by vue-loader */

/***/ },
/* 187 */
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
/* 188 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  :class=\"{\n    'alert':\t\ttrue,\n    'alert-success':(type == 'success'),\n    'alert-warning':(type == 'warning'),\n    'alert-info':\t(type == 'info'),\n    'alert-error':\t(type == 'error' || type == 'danger'),\n    'alert-help': (type == 'help'),\n    'top': \t\t\t(placement === 'top'),\n    'top-right': \t(placement === 'top-right'),\n    'center':      (placement === 'center'),\n  }\"\n  :transition=\"transition\"\n  :style=\"{width:width}\"\n  role=\"alert\">\n  <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"show = false\">\n    <span>&times;</span>\n  </button>\n  <icon v-if=\"showIcon\" :type=\"type\"></icon>\n  <slot>\n    {{content}}\n  </slot>\n</div>\n";

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"at-upload\" id=\"upload-{{uploadId}}\">\n  <div v-if=\"uploadType == 'click'\">\n    <label>\n      <input\n        type=\"file\"\n        name=\"{{name}}\"\n        accept=\"{{accept}}\"\n        id=\"{{uploadId}}\"\n        :multiple=\"multiple\"\n        @:change=\"onChange($event)\" />\n      <slot>\n        <span class=\"btn tertiary\">点击上传</span>\n      </slot>\n    </label>\n    <div class=\"at-upload-list\">\n      <div class=\"at-upload-item\" v-for=\"file in fileList\">\n        <div class=\"at-upload-item-info\" :class=\"{'active': current == $index}\" @mouseover=\"filemouseover($index)\" @mouseout=\"filemouseout\">\n          <icon type=\"doc\" class=\"at-upload-file-icon\" size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\" class=\"at-upload-del-info\" size=\"12\" @click=\"delExistFile($index)\"></icon>\n        </div>\n      </div>\n      <div class=\"at-upload-item\" v-for=\"file in uploadList\">\n        <div class=\"at-upload-item-info\" :class=\"{'active': current == $index}\" @mouseover=\"filemouseover($index)\" @mouseout=\"filemouseout\">\n          <icon type=\"doc\" class=\"at-upload-file-icon\" size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\" class=\"at-upload-del-info\" size=\"12\" @click=\"delFile($index)\"></icon>\n        </div>\n        <div class=\"at-upload-item-progress\" :class=\"{'hide': progress[$index] == '100%'}\">\n          <div class=\"at-progress at-progress-line at-progress-status-success\">\n            <div class=\"at-progress-inner\">\n              <div class=\"at-progress-bg\" :style=\"{width: progress[$index]}\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div v-if=\"uploadType == 'drag'\" class=\"at-upload-drag\">\n    <div class=\"at-upload-drag-container {{dragover ? 'is-dragover' : ''}}\">\n      <input\n          type=\"file\"\n          name=\"{{name}}\"\n          id=\"{{uploadId}}\"\n          accept=\"{{accept}}\"\n          :multiple=\"multiple\"\n          @change=\"onChange($event)\" />\n      <label for=\"{{uploadId}}\" class=\"at-upload-drag-area\">\n        <p class=\"at-upload-drag-icon\"></p>\n        <span v-if=\"advanceDrag\">将文件拖拽至框中上传或点此上传</span>\n        <span v-if=\"!advanceDrag\">当前环境不支持拖拽上传，请点此上传</span>\n        <p v-if=\"fileList.length > 0\" v-for=\"file in selectFiles\">{{file}}</p>\n      </label>\n    </div>\n    <div class=\"at-upload-list\">\n      <div class=\"at-upload-item\" v-for=\"file in fileList\">\n        <div class=\"at-upload-item-info\" :class=\"{'active': current == $index}\" @mouseover=\"filemouseover($index)\" @mouseout=\"filemouseout\">\n          <icon type=\"doc\" class=\"at-upload-file-icon\" size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\" class=\"at-upload-del-info\" size=\"12\" @click=\"delExistFile($index)\"></icon>\n        </div>\n      </div>\n      <div class=\"at-upload-item\" v-for=\"file in uploadList\">\n        <div class=\"at-upload-item-info\" :class=\"{'active': current == $index}\" @mouseover=\"filemouseover($index)\" @mouseout=\"filemouseout\">\n          <icon type=\"doc\" class=\"at-upload-file-icon\" size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\" class=\"at-upload-del-info\" size=\"12\" @click=\"delFile($index)\"></icon>\n        </div>\n        <div class=\"at-upload-item-progress\" :class=\"{'hide': progress[$index] == '100%'}\">\n          <div class=\"at-progress at-progress-line at-progress-status-success\">\n            <div class=\"at-progress-inner\">\n              <div class=\"at-progress-bg\" :style=\"{width: progress[$index]}\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Slider = __webpack_require__(191);
	
	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slider2.default;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Slider/Slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(200)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(193);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="at-slider" id="{{sliderId}}" :class="sliderClass" @click="clickFun">
	//     <template v-for="item in valuePercent">
	//       <tooltip :content="valueArray[$index]" placement="top">
	//         <div class="at-slider-handle" :style="{'left': item+'%'}" @mousedown="mousedown"></div>
	//       </tooltip>
	//     </template>
	//     <template v-if="valuePercent.length == 1">
	//       <tooltip content="{{valueArray[0]}}" placement="top">
	//         <div class="at-slider-track" :style="{'visibility': 'visible', 'left': '0%', 'width': valuePercent[0]+'%'}"></div>
	//         </tooltip>
	//     </template>
	//     <template v-if="valuePercent.length > 1">
	//       <div class="at-slider-track" :style="{'visibility': 'visible', 'left': valuePercent[0]+'%', 'width': valuePercent[1]-valuePercent[0]+'%'}"></div>
	//     </template>
	//     <div class="at-slider-step"></div>
	//     <div class="at-slider-mark"></div>
	//   </div>
	//
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    id: String,
	    value: [String, Number, Array], //默认值/初识位置，也可实时获取最新值
	    disabled: null, //不可用状态
	    min: [String, Number], //区间，最小值
	    max: [String, Number], //区间，最大值
	    marks: Object, //分段式滑块配置
	    included: { //不同标记间的关系，默认为包含关系，false表示是并列关系
	      type: Boolean,
	      default: true
	    },
	    step: [String, Number] //每步的步数，如果为0，则只能到marks标记位置
	  },
	
	  data: function data() {
	    return {
	      width: '',
	      valueArray: [],
	      valuePercent: [],
	      dragging: false
	    };
	  },
	
	
	  components: {
	    Tooltip: _Tooltip2.default
	  },
	
	  watch: {
	    value: function value(val) {
	      this.valueArray = this.valueToArray();
	    },
	    valueArray: function valueArray(val) {
	      if (val.length == 1) {
	        this.value = val[0] + '';
	      }
	    }
	  },
	
	  computed: {
	    /**
	     * 取值区间差
	     */
	
	    range: function range() {
	      var min = this.min;
	      var max = this.max;
	
	      this.min = this.min || 0;
	      this.max = this.max || 100;
	
	      if (this.max - this.min < 0) {
	        var mid = this.min;
	        this.min = this.max;
	        this.max = mid;
	      }
	
	      return this.max - this.min;
	    },
	
	    /**
	     * 每个取值单位所占总长度的比例
	     */
	    unit: function unit() {
	      return Math.round(100 / this.range);
	    },
	    isDisabled: function isDisabled() {
	      return typeof this.disabled !== "undefined";
	    },
	    sliderClass: function sliderClass() {
	      return {
	        'at-slider-disabled': typeof this.disabled !== "undefined"
	      };
	    },
	    sliderId: function sliderId() {
	      return this.id || 'slider' + new Date().getTime();
	    }
	  },
	
	  ready: function ready() {
	    var self = this;
	
	    self.wrapper = self.getWrapperElement(self.sliderId);
	    self.sliderWidth = self.wrapper.getBoundingClientRect().width;
	    self.wrapperLeft = self.wrapper.getBoundingClientRect().left;
	
	    self.valueArray = this.valueToArray();
	
	    _EventListener2.default.listen(document, 'mousemove', function (e) {
	      self.mousemove(e);
	    });
	
	    _EventListener2.default.listen(document, 'mouseup', function (e) {
	      self.mouseup(e);
	    });
	  },
	
	
	  methods: {
	    /**
	     * 组件配置数据统一转Array
	     * 且最多只能配置两个取值数据
	     */
	
	    valueToArray: function valueToArray() {
	      var value = this.value.toString().replace(/[\]\[]/g, '');
	      var typeData = value.replace(/,/g, '');
	      var unit = this.unit;
	      var min = this.min || 0;
	      var valueArray = [];
	      var valuePercent = [];
	
	      if (typeData - 0 >= 0) {
	        valueArray = value.split(',');
	        valueArray.sort();
	
	        //最多只能配置两个数据
	        if (valueArray.length > 2) valueArray.length = 2;
	
	        //取值不能超过区间
	        for (var i = 0; i < valueArray.length; i++) {
	          valueArray[i] = this.valueRange(valueArray[i]);
	          valuePercent.push((valueArray[i] - min) * unit);
	        }
	      } else {
	        console.log('配置数据格式出错，请配置数字、数字型字符串、数字型数组、数字型数组字符串类型');
	        valueArray = [0];
	        valuePercent = [0];
	      }
	
	      this.valuePercent = valuePercent;
	
	      return valueArray;
	    },
	    valueRange: function valueRange(value) {
	      var min = this.min;
	      var max = this.max;
	
	      if (min && min - 0 >= 0 && value < min) value = min;
	      if (!min && value < 0) value = 0;
	
	      if (max && max - 0 >= 0 && value > max) value = max;
	      if (!max && value > 100) value = 100;
	
	      return value;
	    },
	
	
	    /**
	     * slider组件初始化回调
	     * @param  {[type]} value [description]
	     * @return {[type]}       [description]
	     */
	    sliderStartCallBack: function sliderStartCallBack(value) {
	      this.$dispatch('slider:start', this, value);
	    },
	    getWrapperElement: function getWrapperElement(wrapper) {
	      return document.getElementById(wrapper);
	    },
	    clickFun: function clickFun(e) {
	      this.dragging = false;
	      this.preventEventDefaults(e);
	      this.stopEventPropagation(e);
	      if (!this.isDisabled) {
	        this.change(e);
	        this.dragging = false;
	      }
	    },
	    change: function change(e) {
	      var sliderWidth = this.sliderWidth;
	      var clickLocal = e.x + document.body.scrollLeft;
	      var wrapperLeft = this.wrapperLeft;
	      var range = this.range;
	      var unit = this.unit;
	      var clickRate = Math.round((clickLocal - wrapperLeft) / sliderWidth * range * unit);
	      var min = this.min || 0;
	      var max = this.max || 100;
	      var clickValue = Math.round((clickLocal - wrapperLeft) / sliderWidth * range) + min;
	      var valueArray = this.valueArray;
	      var valuePercent = this.valuePercent;
	      var len = valueArray.length;
	
	      if (clickRate < 0) clickRate = 0;
	      if (clickRate > 100) clickRate = 100;
	      if (clickValue < min) clickValue = min;
	      if (clickValue > max) clickValue = max;
	
	      if (len > 1) {
	        if (clickRate - 0 >= valuePercent[1] - 0) {
	          valuePercent[1] = clickRate;
	          valueArray[1] = clickValue;
	        } else if (clickRate - 0 >= valuePercent[0] - 0) {
	          if (valuePercent[1] - clickRate < clickRate - valuePercent[0]) {
	            valuePercent[1] = clickRate;
	            valueArray[1] = clickValue;
	          } else if (valuePercent[1] - clickRate > clickRate - valuePercent[0]) {
	            valuePercent[0] = clickRate;
	            valueArray[0] = clickValue;
	          }
	        } else {
	          valuePercent[0] = clickRate;
	          valueArray[0] = clickValue;
	        }
	      } else {
	        valuePercent[0] = clickRate;
	        valueArray[0] = clickValue;
	      }
	
	      this.valueArray = valueArray.reverse().reverse();
	      this.valuePercent = valuePercent.reverse().reverse();
	
	      this.$dispatch('slider:onChange', this, this.valueArray);
	    },
	    preventEventDefaults: function preventEventDefaults(e) {
	      if (!e) {
	        e = window.event;
	      }
	      if (e.preventDefault) {
	        e.preventDefault();
	      }
	      e.returnValue = false;
	    },
	    stopEventPropagation: function stopEventPropagation(e) {
	      if (!e) {
	        e = window.event;
	      }
	      if (e.stopPropagation) {
	        e.stopPropagation();
	      }
	      e.cancelBubble = true;
	    },
	    mousedown: function mousedown(e) {
	      if (!this.isDisabled) {
	        this.handler = e.target;
	        this.preventEventDefaults(e);
	        this.stopEventPropagation(e);
	        this.dragging = true;
	      }
	    },
	    mousemove: function mousemove(e) {
	      if (!this.isDisabled && this.dragging) {
	        this.change(e);
	      }
	    },
	    mouseup: function mouseup(e) {
	      if (this.dragging) {
	        this.dragging = false;
	        this.$dispatch('slider:onAfterChange', this, this.valueArray);
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(194);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tooltip2.default;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(195)
	__vue_script__ = __webpack_require__(197)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tooltip/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(196);
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
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n  .tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  -webkit-animation:fadein-in 0.3s ease-in;\n          animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  -webkit-animation:fadein-out 0.3s ease-out;\n          animation:fadein-out 0.3s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n", ""]);
	
	// exports


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(198);
	
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
	//     :class="{
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
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(187);
	
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
	    content: [String, Number],
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
	      var offset = triger.getBoundingClientRect();
	      var offsetLeft = document.body.scrollLeft + offset.left;
	      var offsetTop = document.body.scrollTop + offset.top;
	      switch (this.placement) {
	        case 'top':
	          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = offsetTop - popover.offsetHeight;
	          break;
	        case 'topLeft':
	          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4;
	          this.position.top = offsetTop - popover.offsetHeight;
	          break;
	        case 'topRight':
	          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4;
	          this.position.top = offsetTop - popover.offsetHeight;
	          break;
	        case 'left':
	          this.position.left = offsetLeft - popover.offsetWidth;
	          this.position.top = offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'leftTop':
	          this.position.left = offsetLeft - popover.offsetWidth;
	          this.position.top = offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4;
	          break;
	        case 'leftBottom':
	          this.position.left = offsetLeft - popover.offsetWidth;
	          this.position.top = offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4;
	          break;
	        case 'right':
	          this.position.left = offsetLeft + triger.offsetWidth;
	          this.position.top = offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'rightTop':
	          this.position.left = offsetLeft + triger.offsetWidth;
	          this.position.top = offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4;
	          break;
	        case 'rightBottom':
	          this.position.left = offsetLeft + triger.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4;
	          break;
	        case 'bottom':
	          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = offsetTop + triger.offsetHeight;
	          break;
	        case 'bottomLeft':
	          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4;
	          this.position.top = offsetTop + triger.offsetHeight;
	          break;
	        case 'bottomRight':
	          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4;
	          this.position.top = offsetTop + triger.offsetHeight;
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
	  attached: function attached() {
	    if (this.$els.popover) {
	      document.body.appendChild(this.$els.popover);
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
/* 199 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"tooltip\"\n  :class=\"{\n  'top':    placement === 'top',\n  'top-left':    placement === 'topLeft',\n  'top-right':    placement === 'topRight',\n  'left':   placement === 'left',\n  'left-top':   placement === 'leftTop',\n  'left-bottom':   placement === 'leftBottom',\n  'right':  placement === 'right',\n  'right-top':  placement === 'rightTop',\n  'right-bottom':  placement === 'rightBottom',\n  'bottom': placement === 'bottom',\n  'bottom-left': placement === 'bottomLeft',\n  'bottom-right': placement === 'bottomRight'\n  }\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\"\n  role=\"tooltip\">\n  <div class=\"tooltip-arrow\" v-el:arrow></div>\n  <div class=\"tooltip-inner\">\n    {{{content}}}\n  </div>\n</div>\n";

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"at-slider\" id=\"{{sliderId}}\" :class=\"sliderClass\" @click=\"clickFun\">\n  <template v-for=\"item in valuePercent\">\n    <tooltip :content=\"valueArray[$index]\" placement=\"top\">\n      <div class=\"at-slider-handle\" :style=\"{'left': item+'%'}\" @mousedown=\"mousedown\"></div>\n    </tooltip>\n  </template>\n  <template v-if=\"valuePercent.length == 1\">\n    <tooltip content=\"{{valueArray[0]}}\" placement=\"top\">\n      <div class=\"at-slider-track\" :style=\"{'visibility': 'visible', 'left': '0%', 'width': valuePercent[0]+'%'}\"></div>\n      </tooltip>\n  </template>\n  <template v-if=\"valuePercent.length > 1\">\n    <div class=\"at-slider-track\" :style=\"{'visibility': 'visible', 'left': valuePercent[0]+'%', 'width': valuePercent[1]-valuePercent[0]+'%'}\"></div>\n  </template>\n  <div class=\"at-slider-step\"></div>\n  <div class=\"at-slider-mark\"></div>\n</div>\n\n";

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(202);
	
	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Switch/Switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 203 */
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
/* 204 */
/***/ function(module, exports) {

	module.exports = "\n  <span :class=\"wrapClasses\" @click=\"changeHandler\" :style=\"{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}\">\n\t\t<span class=\"switch-content\">\n\t\t\t<slot v-if=\"checked && !small\" name=\"checkedPart\"></slot>\n\t\t\t<slot v-if=\"!checked && !small\" name=\"unCheckedPart\"></slot>\n\t\t</span>\n\t</span>\n";

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(206);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dropdown2.default;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(207)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dropdown/Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(187);
	
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
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"{dropdown:true,open:open}\">\n  <slot></slot>\n  <slot name=\"dropdown-menu\"></slot>\n</div>\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(210);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(217);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Select2.default.Option = _Option2.default;
	
	exports.default = _Select2.default;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(211)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(216)
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
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(187);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Tag = __webpack_require__(212);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="select-container" :class="{open:show,disabled:disabled,multiple:multiple}">
	//     <div class="select-toggle" tabindex="1" class="dropdown-toggle" @click="toggleDropdown" @keydown.up="selectUp" @keydown.down="selectDown" v-bind="{disabled: disabled}"
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
	  name: 'select',
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
	      activeIndex: 0,
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
	    selectedOptions: function selectedOptions(val) {
	      if (this.multiple) {
	        this.value = this.selectedOptions.map(function (option) {
	          return option.value;
	        });
	      } else {
	        this.value = this.selectedOptions[0].value;
	      }
	      this.$dispatch('change', val);
	    }
	  },
	  methods: {
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
	        if (!value || !value.trim().length) {
	          return;
	        }
	        if (this.value.indexOf(value) === -1) {
	          var option = {
	            label: value,
	            value: value
	          };
	          this.selectedOptions.push(option);
	        }
	        this.searchText = '';
	      }
	    },
	    selectDown: function selectDown(event) {
	      // event.preventDefault()
	      // let childs = this.$children
	      // let length = childs.length
	      // this.activeIndex = this.activeIndex > length ? 0 : this.activeIndex + 1
	      // childs.forEach(option => {
	      //   option.active = false
	      // })
	      // // console.log(childs[0])
	      // childs[this.activeIndex].active = true
	    },
	    selectUp: function selectUp(event) {
	      // event.preventDefault()
	      // let childs = this.$children
	      // let length = childs.length
	      // this.activeIndex = this.activeIndex === 0 ? length - 1 : this.activeIndex - 1
	
	      // childs.forEach(option => {
	      //   option.active = false
	      // })
	      // childs[this.activeIndex].active = true
	    }
	  },
	  events: {
	    'option-change': function optionChange(option) {
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
	      this.searchText = '';
	      // 需要把option的change事件继续冒泡给上一层级调用
	      // return true
	    }
	  },
	  ready: function ready() {
	    var me = this;
	    me.options = me.$children.filter(function (child) {
	      // return child.constructor.
	    });
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
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tag = __webpack_require__(213);
	
	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tag2.default;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(214)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tag/Tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(215)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 214 */
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
		}
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
/* 215 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\" :class=\"wrapClasses\" :style=\"{'background-color': color}\">\n\t<a :href=\"href\" class=\"tag-text\" :style=\"{'fontSize': size+'px'}\"><slot></slot></a>\n\t<span v-if=\"closable\" class=\"tag-close\" @click=\"closeHandler\">\n\t\t<v-icon type=\"close\" :size=\"size\"></v-icon>\n\t</span>\n</div>\n";

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"select-container\" :class=\"{open:show,disabled:disabled,multiple:multiple}\">\n  <div class=\"select-toggle\" tabindex=\"1\" class=\"dropdown-toggle\" @click=\"toggleDropdown\" @keydown.up=\"selectUp\" @keydown.down=\"selectDown\" v-bind=\"{disabled: disabled}\"\n  >\n    <template v-if=\"!multiple\">\n      <span class=\"select-placeholder\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n      <span class=\"btn-content\">{{ showText }}</span>\n      <span :class=\"{caret:true,open:show}\"><icon type=\"down\" size=\"12\"></icon></span>\n    </template>\n    <div v-else>\n      <span class=\"select-placeholder\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n      <tag v-for=\"option in selectedOptions\" closable @close=\"closeTag(option)\">{{{option.label}}}</tag>\n      <input type=\"text\" v-el:search-field class=\"select-search-field\" @input=\"onInput\" @keydown.delete=\"deleteTag\" @keydown.enter.prevent=\"createTag\" v-model=\"searchText\" autocomplete=\"off\"/>\n    </div>\n  </div>\n  <div class=\"dropdown-menu\">\n    <slot></slot>\n    <div v-show=\"noResult\" class=\"no-result\">无结果</div>\n    <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\">最多可选 ({{limit}})项.</div>\n  </div>\n</div>\n";

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(218)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(219)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 218 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-show="show" :class="{option:true,disabled:disabled,active:active,chosen:chosen}" @mousedown.prevent.stop="handleClick">
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
	  data: function data() {
	    return {
	      active: false
	    };
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
	      this.$dispatch('option-change', option);
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"show\" :class=\"{option:true,disabled:disabled,active:active,chosen:chosen}\" @mousedown.prevent.stop=\"handleClick\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Calendar = __webpack_require__(221);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Calendar2.default;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(222)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Calendar/Calendar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(223)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(168);
	
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
	//   <div class="atui-calendar" v-show="show">
	//     <div class="atui-calendar-popup" v-show="displayDayView">
	//       <div class="atui-calendar-inner">
	//         <div class="atui-calendar-header">
	//           <span class="month-btn atui-calendar-preBtn" @click="preNextMonthClick(0)">&lt;</span>
	//           <span class="month-btn atui-calendar-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
	//           <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	//         </div>
	//         <div class="atui-calendar-body">
	//           <div class="atui-calendar-weekRange">
	//             <span v-for="w in weekRange">{{w}}</span>
	//           </div>
	//           <div class="atui-calendar-dateRange">
	//             <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date,$event)">{{d.text}}</span>
	//           </div>
	//         </div>
	//         <div class="atui-calendar-footer">
	//           <a class="atui-calendar-today-btn" role="button" @click="daySelect(new Date,$event)" title="{{stringifyDayHeader(currDate)}}">今天</a>
	//         </div>
	//       </div>
	//     </div>
	//     <div class="atui-calendar-popup" v-show="displayMonthView">
	//       <div class="atui-calendar-inner">
	//         <div class="atui-calendar-header">
	//           <span class="month-btn atui-calendar-preBtn" @click="preNextYearClick(0)">&lt;</span>
	//           <span class="month-btn atui-calendar-nextBtn" @click="preNextYearClick(1)">&gt;</span>
	//           <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	//         </div>
	//         <div class="atui-calendar-body">
	//           <div class="atui-calendar-monthRange">
	//             <template v-for="m in monthNames">
	//               <span :class="{'atui-calendar-dateRange-item-active':
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
	//         <div class="atui-calendar-header">
	//           <span class="month-btn atui-calendar-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
	//           <span class="month-btn atui-calendar-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
	//           <p>{{stringifyDecadeHeader(currDate)}}</p>
	//         </div>
	//         <div class="atui-calendar-body">
	//           <div class="atui-calendar-monthRange decadeRange">
	//             <template v-for="decade in decadeRange">
	//               <span :class="{'atui-calendar-dateRange-item-active':
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
	      default: function _default() {
	        return new Date().toLocaleDateString();
	      }
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
	    },
	    disabledDate: function disabledDate() {
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
	      if (el.className.split(' ').indexOf('atui-calendar-item-disable') >= 0) {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
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
	          var date = new Date(preMonth.year, preMonth.month, dayText);
	          var sclass = this.disabledDate(date) ? 'atui-calendar-item-disable' : 'atui-calendar-item-gray';
	          this.dateRange.push({
	            text: dayText,
	            date: date,
	            sclass: sclass
	          });
	        }
	      }
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        var _date = new Date(time.year, time.month, _i2);
	        // const week = date.getDay()
	        var _sclass = '';
	        // this.disabledDaysOfWeek.forEach((el)=> {
	        //   if (week === parseInt(el, 10)) sclass = 'atui-calendar-item-disable'
	        // })
	        // 开发者指定的禁用日期
	        if (_i2 === time.day) {
	          if (this.value) {
	            var valueDate = this.parse(this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                _sclass = 'atui-calendar-dateRange-item-active';
	              }
	            }
	          }
	        }
	        if (this.disabledDate(_date)) {
	          _sclass = 'atui-calendar-item-disable';
	        }
	        this.dateRange.push({
	          text: _i2,
	          date: _date,
	          sclass: _sclass
	        });
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          var _date2 = new Date(nextMonth.year, nextMonth.month, _i3);
	          var _sclass2 = this.disabledDate(_date2) ? 'atui-calendar-item-disable' : 'atui-calendar-item-gray';
	          this.dateRange.push({
	            text: _i3,
	            date: _date2,
	            sclass: _sclass2
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
/* 223 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"atui-calendar\" v-show=\"show\">\n  <div class=\"atui-calendar-popup\" v-show=\"displayDayView\">\n    <div class=\"atui-calendar-inner\">\n      <div class=\"atui-calendar-header\">\n        <span class=\"month-btn atui-calendar-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n        <span class=\"month-btn atui-calendar-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n        <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n      </div>\n      <div class=\"atui-calendar-body\">\n        <div class=\"atui-calendar-weekRange\">\n          <span v-for=\"w in weekRange\">{{w}}</span>\n        </div>\n        <div class=\"atui-calendar-dateRange\">\n          <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,$event)\">{{d.text}}</span>\n        </div>\n      </div>\n      <div class=\"atui-calendar-footer\">\n        <a class=\"atui-calendar-today-btn\" role=\"button\" @click=\"daySelect(new Date,$event)\" title=\"{{stringifyDayHeader(currDate)}}\">今天</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"atui-calendar-popup\" v-show=\"displayMonthView\">\n    <div class=\"atui-calendar-inner\">\n      <div class=\"atui-calendar-header\">\n        <span class=\"month-btn atui-calendar-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n        <span class=\"month-btn atui-calendar-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n        <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n      </div>\n      <div class=\"atui-calendar-body\">\n        <div class=\"atui-calendar-monthRange\">\n          <template v-for=\"m in monthNames\">\n            <span :class=\"{'atui-calendar-dateRange-item-active':\n                (this.monthNames[this.parse(this.value).getMonth()]  === m) &&\n                this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"atui-calendar-popup\" v-show=\"displayYearView\">\n    <div class=\"atui-calendar-inner\">\n      <div class=\"atui-calendar-header\">\n        <span class=\"month-btn atui-calendar-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n        <span class=\"month-btn atui-calendar-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n        <p>{{stringifyDecadeHeader(currDate)}}</p>\n      </div>\n      <div class=\"atui-calendar-body\">\n        <div class=\"atui-calendar-monthRange decadeRange\">\n          <template v-for=\"decade in decadeRange\">\n            <span :class=\"{'atui-calendar-dateRange-item-active':\n                this.parse(this.value).getFullYear() === decade.text}\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(225);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RangePicker = __webpack_require__(228);
	
	var _RangePicker2 = _interopRequireDefault(_RangePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_DatePicker2.default.RangePicker = _RangePicker2.default;
	
	exports.default = _DatePicker2.default;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(226)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/DatePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(227)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Calendar = __webpack_require__(220);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _Icon = __webpack_require__(134);
	
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
	    },
	    disabled: Boolean
	  },
	  components: {
	    icon: _Icon2.default,
	    calendar: _Calendar2.default
	  },
	  methods: {
	    inputClick: function inputClick() {
	      if (this.disabled) {
	        return;
	      }
	      this.show = !this.show;
	    },
	    selectChange: function selectChange(value) {
	      this.value = value;
	      this.show = false;
	      // 冒泡给上一层使用，比如rangePicker
	      return true;
	    }
	  },
	  // watch() {
	  //   disabledDate() {
	  //     this.$ref
	  //   }
	  // }
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
	//       <input class="datepicker-input" v-bind="{disabled:disabled}" type="text" :value="value" :placeholder="placeholder" readonly/>
	//       <icon type="calendar"></icon>
	//     </div>
	//     <div class="atui-datepicker-calendar">
	//       <calendar :show="show" @change="selectChange" v-ref:calendar :value="value" :format="format" :locale="locale" :disabled-date="disabledDate"></calendar>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"atui-datepicker\">\n  <div class=\"atui-datepicker-toggle\" @click=\"inputClick\" >\n    <input class=\"datepicker-input\" v-bind=\"{disabled:disabled}\" type=\"text\" :value=\"value\" :placeholder=\"placeholder\" readonly/>\n    <icon type=\"calendar\"></icon>\n  </div>\n  <div class=\"atui-datepicker-calendar\">\n    <calendar :show=\"show\" @change=\"selectChange\" v-ref:calendar :value=\"value\" :format=\"format\" :locale=\"locale\" :disabled-date=\"disabledDate\"></calendar>\n  </div>\n</div>\n";

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(229)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/RangePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(230)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(225);
	
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
	    },
	    disabled: Boolean
	  },
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    DatePicker: _DatePicker2.default
	  },
	  methods: {
	    onStartDateChange: function onStartDateChange(value) {
	      var me = this;
	      me.setDisabledEndDate(value);
	      if (me.endDate && new Date(me.endDate).getTime() > new Date(me.endDate).getTime()) {
	        me.$dispatch('change', me.startDate, me.endDate);
	      }
	    },
	    onEndDateChange: function onEndDateChange(value) {
	      var me = this;
	      if (me.startDate) {
	        me.$dispatch('change', me.startDate, me.endDate);
	      }
	    },
	    setDisabledEndDate: function setDisabledEndDate(value) {
	      var endDate = this.$refs.endDate;
	      endDate.disabledDate = function (date) {
	        return date.getTime() <= new Date(value).getTime();
	      };
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// <div class="range-picker">
	//   <date-picker v-ref:start-date :value.sync="startDate" :disabled="disabled" placeholder="开始日期" @change="onStartDateChange"></date-picker>
	//   <span class="range-picker-separator"> - </span>
	//   <date-picker v-ref:end-date :value.sync="endDate" :disabled="disabled" placeholder="结束日期" :disabled-date="disabledEndDate" @change="onEndDateChange"></date-picker>
	// </div>
	// </template>
	// <script>

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"range-picker\">\n  <date-picker v-ref:start-date :value.sync=\"startDate\" :disabled=\"disabled\" placeholder=\"开始日期\" @change=\"onStartDateChange\"></date-picker>\n  <span class=\"range-picker-separator\"> - </span>\n  <date-picker v-ref:end-date :value.sync=\"endDate\" :disabled=\"disabled\" placeholder=\"结束日期\" :disabled-date=\"disabledEndDate\" @change=\"onEndDateChange\"></date-picker>\n</div>\n";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(232)
	__vue_script__ = __webpack_require__(234)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Typeahead.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(236)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(233);
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
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(235);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	var _coerceBoolean = __webpack_require__(187);
	
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
/* 235 */
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
/* 236 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>\n\n";

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cascader = __webpack_require__(238);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Cascader2.default;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(239)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Cascader/Cascader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(240)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Input = __webpack_require__(161);
	
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
/* 240 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cascader\">\n  <span class=\"cascader-picker\">\n    <v-input readonly @click=\"toggleMenus\" :value=\"displayValue\" :placeholder=\"placeholder\"></v-input>\n  </span>\n  <div class=\"cascader-menus\" v-show=\"isOpen\">\n    <ul class=\"cascader-menu\" v-for=\"(index, menu) in menus\">\n      <li class=\"cascader-menu-item\" :class=\"{selected:selectedOptions[index] === option,disabled:option.disabled}\" v-for=\"option in menu\" @click=\"changeOption(index,option,$event)\">{{option.label}}</li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(242);
	
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
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(243)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Modal/Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(245)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getScrollBarWidth = __webpack_require__(244);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(187);
	
	var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    title: {
	      type: String
	    },
	    show: {
	      require: true,
	      type: Boolean,
	      coerce: _coerceBoolean2.default,
	      twoWay: true
	    },
	    width: String,
	    height: String,
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
	      type: Boolean
	    },
	    small: {
	      type: Boolean
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
	  },
	  attached: function attached() {
	    this.$appendTo(document.body);
	  }
	};
	// </script>

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
	//       :style="{width: width, height:height}">
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
/* 244 */
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
/* 245 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\"\n  :class=\"{\n  'modal':true,\n  'fade':effect === 'fade',\n  'zoom':effect === 'zoom',\n  'in':in\n  }\"\n  >\n  <div :class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n    :style=\"{width: width, height:height}\">\n    <div class=\"modal-content\">\n      <slot name=\"modal-header\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n          <h4 class=\"modal-title\" >{{title}}</h4>\n        </div>\n      </slot>\n      <slot name=\"modal-body\">\n        <div class=\"modal-body\"></div>\n      </slot>\n      <slot name=\"modal-footer\">\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"callback\">确定</button>\n          <button type=\"button\" class=\"btn tertiary\" @click=\"close\">取消</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(247);
	
	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(248)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Table/Table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(249);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Dropdown = __webpack_require__(205);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Spin = __webpack_require__(253);
	
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
	      isDisabledAll: false,
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
	      if (me.rowSelection && me.rowSelection.onChange) {
	        me.rowSelection.onChange(checkedKeys, me.checkedRows);
	      }
	      return checkedKeys;
	    },
	    checkebleRows: function checkebleRows() {
	      var me = this;
	      // 过滤出非禁用的项供选择使用
	      var records = me.dataSource.filter(function (record) {
	        if (me.rowSelection) {
	          return !me.rowSelection.getCheckboxProps || !me.rowSelection.getCheckboxProps(record).disabled;
	        }
	      });
	      // if(!records.length) {
	      //   me.isDisabledAll = true
	      // }
	      return records;
	    }
	  },
	  watch: {
	    dataSource: {
	      handler: function handler(data) {
	        var me = this;
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
	    compileTbody: function compileTbody() {
	      var me = this;
	      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
	      me.$nextTick(function () {
	        me._context.$compile(me.$el);
	        if (!me.checkebleRows.length) {
	          me.isDisabledAll = true;
	        }
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
	      // me.$dispatch('table-change', this.pagination, this.filters, this.sorter)
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
	      me.filters = {};
	      me.filters[column.dataIndex] = [value];
	      me.$dispatch('table-change', this.pagination, me.filters, me.sorter);
	    },
	    fixedHeaderAction: function fixedHeaderAction() {
	      if (this.fixedHeader) {
	        var header = this.$el.querySelector('.table-thead');
	        var colgroup = this.$el.querySelector('colgroup').cloneNode(true);
	        var fixedTable = this.$el.querySelector('.atui-table-fixed-header');
	        fixedTable.appendChild(colgroup);
	        fixedTable.appendChild(header);
	      }
	    }
	  },
	  attached: function attached() {
	    // this.fixedHeaderAction()
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// <div :class="['atui-table-container','atui-table-'+size, {loading :loading}]">
	//   <spin size="sm" v-if="loading"></spin>
	//   <!-- <table :class="['atui-table-fixed-header','atui-table']" v-if="fixedHeader">
	//   </table> -->
	//   <div :class="['atui-table-body',{'atui-fixed-header':fixedHeader}]">
	//     <table class="atui-table">
	//       <colgroup>
	//         <col v-if="rowSelection"></col>
	//         <col v-for="column in columns" :width="column.width"></col>
	//       </colgroup>
	//       <thead class="table-thead">
	//         <tr>
	//           <th v-if="rowSelection" class="atui-table-selection-column">
	//               <input v-if="dataSource.length" type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" @change="onCheckAll"/>
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
	//             <td v-if="rowSelection" class="atui-table-selection-column">
	//                  <input type="checkbox" v-model="checkedValues" :value="record[rowKey]" @change.stop="onCheckOne($event,record)" v-bind="rowSelection.getCheckboxProps(record)"/>
	//             </td>
	//             <td v-for="column in columns">
	//                 <template v-if="column.render && record">
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
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(250), __esModule: true };

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251);
	module.exports = __webpack_require__(95).Object.assign;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(93);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(252)});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(100)
	  , toObject = __webpack_require__(112)
	  , IObject  = __webpack_require__(179);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(103)(function(){
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
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Spin = __webpack_require__(254);
	
	var _Spin2 = _interopRequireDefault(_Spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spin2.default;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(255)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Spin/Spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(257)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cssAnimationSupported = __webpack_require__(256);
	
	var _cssAnimationSupported2 = _interopRequireDefault(_cssAnimationSupported);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  data: function data() {
	    return {
	      isSupportAnimation: _cssAnimationSupported2.default
	    };
	  },
	
	  methods: {
	    show: function show() {
	      this.show = true;
	    },
	    hide: function hide() {
	      this.show = false;
	    }
	  }
	};

	/* generated by vue-loader */
	// <template>
	// <div :class="['atui-spin',size,{sping:sping}]" v-show="show">
	//   <div v-if="isSupportAnimation" class="atui-sping-point">
	//       <div></div>
	//       <div></div>
	//       <div></div>
	//   </div>
	//   <p v-else class="atui-sping-text">加载中...</p>
	//   <div class="sping-content">
	//     <slot></slot>
	//   </div>
	// </div>
	// </template>
	// <script>

/***/ },
/* 256 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var animation = false,
	    animationstring = 'animation',
	    keyframeprefix = '',
	    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
	    pfx = '',
	    elm = document.createElement('div');
	
	if (elm.style.animationName !== undefined) {
	  animation = true;
	}
	
	if (animation === false) {
	  for (var i = 0; i < domPrefixes.length; i++) {
	    if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	      pfx = domPrefixes[i];
	      animationstring = pfx + 'Animation';
	      keyframeprefix = '-' + pfx.toLowerCase() + '-';
	      animation = true;
	      break;
	    }
	  }
	}
	
	exports.default = animation;

/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"['atui-spin',size,{sping:sping}]\" v-show=\"show\">\n  <div v-if=\"isSupportAnimation\" class=\"atui-sping-point\">\n      <div></div>\n      <div></div>\n      <div></div>\n  </div>\n  <p v-else class=\"atui-sping-text\">加载中...</p>\n  <div class=\"sping-content\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"['atui-table-container','atui-table-'+size, {loading :loading}]\">\n  <spin size=\"sm\" v-if=\"loading\"></spin>\n  <!-- <table :class=\"['atui-table-fixed-header','atui-table']\" v-if=\"fixedHeader\">\n  </table> -->\n  <div :class=\"['atui-table-body',{'atui-fixed-header':fixedHeader}]\">\n    <table class=\"atui-table\">\n      <colgroup>\n        <col v-if=\"rowSelection\"></col>\n        <col v-for=\"column in columns\" :width=\"column.width\"></col>\n      </colgroup>\n      <thead class=\"table-thead\">\n        <tr>\n          <th v-if=\"rowSelection\" class=\"atui-table-selection-column\">\n              <input v-if=\"dataSource.length\" type=\"checkbox\" v-bind=\"{checked:isCheckedAll,disabled:isDisabledAll}\" @change=\"onCheckAll\"/>\n          </th>\n          <th v-for=\"column in columns\" :width=\"column.width\">\n              {{column['title']}}\n              <dropdown v-if=\"column.filters\" data-toggle=\"dropdown\" :open=\"filterOpened\">\n                <div data-toggle=\"dropdown\">\n                  <icon type=\"filter\" size=\"12\"></icon>\n                </div>\n                <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n                  <li v-for=\"col in column.filters\"><a href=\"javascript:void(0);\" @click=\"onFilter(col.value, column)\">{{col.text}}</a></li>\n                </ul>\n              </dropdown>\n              <div v-if=\"dataSource.length && column.sorter\" class=\"table-sorter\">\n                <icon type=\"up\" size=\"10\" @click=\"sortAction(column,$index,'ascend')\" :class=\"{active:sorderOrder[$index] == 'ascend'}\"></icon>\n                <icon type=\"down\" size=\"10\" @click=\"sortAction(column,$index,'descend')\" :class=\"{active:sorderOrder[$index] == 'descend'}\"></icon>\n              </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody class=\"table-tbody\">\n        <tr v-if=\"!dataSource.length\"><td colspan=\"10000\" style=\"text-align: center;\" class=\"vue-table-empty\">{{noDataTip}}</td></tr>\n        <tr v-for=\"(rowIndex, record) in dataSource\" :track-by=\"$index\">\n            <td v-if=\"rowSelection\" class=\"atui-table-selection-column\">\n                 <input type=\"checkbox\" v-model=\"checkedValues\" :value=\"record[rowKey]\" @change.stop=\"onCheckOne($event,record)\" v-bind=\"rowSelection.getCheckboxProps(record)\"/>\n            </td>\n            <td v-for=\"column in columns\">\n                <template v-if=\"column.render && record\">\n                    {{{column.render(record[column.dataIndex],record,rowIndex)}}}\n                </template>\n                <template v-else>\n                    {{record[column.dataIndex]}}\n                </template>\n            </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n";

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Badge = __webpack_require__(260);
	
	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Badge2.default;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(261)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Badge/Badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(262)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 261 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <span class="atui-badge">
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
/* 262 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"atui-badge\">\n  <slot></slot>\n  <sup class=\"badge-dot\" v-if=\"dot\"></sup>\n  <template v-else>\n    <sup v-if='count > 0' class=\"badge-count\">\n      {{count | short}}\n    </sup>\n  </template>\n</span>\n";

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(264);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slide = __webpack_require__(269);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Carousel2.default.Slide = _Slide2.default;
	
	exports.default = _Carousel2.default;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(265)
	__vue_script__ = __webpack_require__(267)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(268)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(266);
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
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[_v-276df37b] {\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(84);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(168);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _coerceBoolean = __webpack_require__(187);
	
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
/* 268 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-276df37b=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-276df37b=\"\">\n    <indicator _v-276df37b=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-276df37b=\"\">\n    <slot _v-276df37b=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Next</span>\n  </a>\n</div>\n";

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(270)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Slide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(271)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 270 */
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
/* 271 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(273)
	__vue_script__ = __webpack_require__(275)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(276)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(274);
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
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-affix {\n  position: fixed;\n}\n", ""]);
	
	// exports


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(168);
	
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
/* 276 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n";

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(278);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(279)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Textarea/Textarea.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(280)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 279 */
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
/* 280 */
/***/ function(module, exports) {

	module.exports = "\n<textarea v-bind=\"{disabled: isDisabled}\" maxlength=\"{{limitWords}}\" class=\"textarea\" :class=\"classObj\" name=\"{{name}}\" placeholder=\"{{placeholder}}\" v-model=\"content\"></textarea>\n<p v-if=\"limitWords\" class=\"words-area\" :class=\"wordClass\">{{ curWords }}/{{ limitWords }}</p>\n<p v-if=\"showWordsCount\" class=\"words-area\">{{ countTips }}{{ curWords }}</p>\n";

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Accordion = __webpack_require__(282);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(285);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Accordion2.default.Panel = _Panel2.default;
	
	exports.default = _Accordion2.default;

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(283)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(284)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 283 */
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
/* 284 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(286)
	__vue_script__ = __webpack_require__(288)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(289)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(287);
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
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\n-webkit-transition: max-height .5s ease;\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(187);
	
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
/* 289 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\" @click=\"toggleIsOpen()\">\n      <slot name=\"panel-header\"></slot>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(291);
	
	var _Popover2 = _interopRequireDefault(_Popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Popover2.default;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(292)
	__vue_script__ = __webpack_require__(294)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Popover/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(295)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(293);
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
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  -webkit-animation:scale-in 0.15s ease-in;\n          animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  -webkit-animation:scale-out 0.15s ease-out;\n          animation:scale-out 0.15s ease-out;\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(198);
	
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
	//     :class="[placement]"
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
/* 295 */
/***/ function(module, exports) {

	module.exports = "\n<span v-el:trigger>\n  <slot>\n  </slot>\n</span>\n<div class=\"popover\"\n  :class=\"[placement]\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\">\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n    <div class=\"popover-content\">\n      {{{content}}}\n    </div>\n</div>\n";

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(297);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(300);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Tabset2.default.Tab = _Tab2.default;
	
	exports.default = _Tabset2.default;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(298)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(299)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 298 */
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
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    size: {
	      type: String,
	      default: 'default'
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
	      itemsWidth: [],
	      maxTabIndex: 0
	    };
	  },
	
	  components: {
	    Icon: _Icon2.default
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      return {
	        'nav': true,
	        'atui-nav-tabs': !this.base,
	        'atui-nav-base': this.base,
	        'atui-nav-small': this.size === 'small'
	      };
	    }
	  },
	  methods: {
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) this.active = index;
	      this.$dispatch('on-tab-click', this.active);
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
	           *
	           * 如果能保证每一个tab的内容长度都不会太长并且差不多长，那么此时maxTabIndex可以等于totalLen-1
	           *
	           */
	          var maxTabIndex = totalLen - 1 + (this.showLen - 1);
	          this.maxTabIndex = maxTabIndex;
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
	//   <div class="atui-tabsWrapper">
	//     <div class="tabs-header">
	//       <span v-if="renderData.length > showLen && showLen >= 3 " class="arrow-prev" @click="prev">
	//         <icon v-if="prev_tabIndex==0" type="prev" size="12" color="#ccc" style="cursor: not-allowed"></icon>
	//         <icon v-else type="prev" size="12"></icon>
	//       </span>
	//       <ul v-if="trigger=='click'" :class="wrapClasses" role="tablist" style="width: 99999px;">
	//         <li v-for="r in renderData"
	//             :class="{
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
	//             :class="{
	//               'active': ($index === active),
	//               'disabled': r.disabled
	//             }"
	//             @mouseenter.prevent="handleTabListClick($index, r)"
	//             :disabled="r.disabled"
	//         >
	//             <a href="javascript:void(0);">{{{r.header}}}</a>
	//         </li>
	//       </ul>
	//       <span v-if="renderData.length > showLen && showLen >= 3" class="arrow-next" @click="next">
	//         <icon v-if="next_tabIndex == maxTabIndex" type="next" size="12" color="#ccc" style="cursor: not-allowed"></icon>
	//         <icon v-else type="next" size="12"></icon>
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
/* 299 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"atui-tabsWrapper\">\n  <div class=\"tabs-header\">\n    <span v-if=\"renderData.length > showLen && showLen >= 3 \" class=\"arrow-prev\" @click=\"prev\">\n      <icon v-if=\"prev_tabIndex==0\" type=\"prev\" size=\"12\" color=\"#ccc\" style=\"cursor: not-allowed\"></icon>\n      <icon v-else type=\"prev\" size=\"12\"></icon>\n    </span>\n    <ul v-if=\"trigger=='click'\" :class=\"wrapClasses\" role=\"tablist\" style=\"width: 99999px;\">\n      <li v-for=\"r in renderData\"\n          :class=\"{\n            'active': ($index === active),\n            'disabled': r.disabled\n          }\"\n          @click.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <ul v-else :class=\"wrapClasses\" role=\"tablist\" style=\"width: 99999px;\">\n    <li v-for=\"r in renderData\"\n          :class=\"{\n            'active': ($index === active),\n            'disabled': r.disabled\n          }\"\n          @mouseenter.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <span v-if=\"renderData.length > showLen && showLen >= 3\" class=\"arrow-next\" @click=\"next\">\n      <icon v-if=\"next_tabIndex == maxTabIndex\" type=\"next\" size=\"12\" color=\"#ccc\" style=\"cursor: not-allowed\"></icon>\n      <icon v-else type=\"next\" size=\"12\"></icon>\n    </span>\n  </div>\n\n   <!-- Tab panes -->\n   <div class=\"tab-content\" v-el:tab-content>\n      <slot></slot>\n   </div>\n</div>\n\n";

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(301)
	__vue_script__ = __webpack_require__(303)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(304)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(302);
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
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content > .tab-pane[_v-22291468] {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(187);
	
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
	//       :class="{hide:!show}"
	//       v-show="show"
	//       :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" class=\"tab-pane\" :class=\"{hide:!show}\" v-show=\"show\" :transition=\"transition\" _v-22291468=\"\">\n  <slot _v-22291468=\"\"></slot>\n</div>\n";

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Steps = __webpack_require__(306);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Step = __webpack_require__(309);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Steps2.default.Step = _Step2.default;
	
	exports.default = _Steps2.default;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(307)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(308)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 307 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="atui-steps">
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
/* 308 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"atui-steps\">\n\t<slot></slot>\n</div>\n";

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(310)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(311)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 310 */
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
					'atui-step': true,
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
/* 311 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\" :style=\"{'width': tailWidth}\">\n\t<div v-if=\"!lastStep\" class=\"step-tail\">\n\t\t<i>\n\t\t\t<i :style=\"{ backgroundColor: color }\"></i>\n\t\t</i>\n\t</div>\n\t<div class=\"step-head\">\n\t\t<div class=\"step-head-inner\">\n\t\t\t<span v-if=\"status !== 'finish'\" class=\"step-icon\"\n\t\t\t\t:style=\"{\n\t\t\t\t\tborderColor: status==='process'?color:'#e9e9e9',\n\t\t\t\t\tbackgroundColor: status==='process'?color:'#fff'}\">\n\t\t\t\t{{ stepNumber }}\n\t\t\t</span>\n\t\t\t<span v-else class=\"step-finish-icon\">\n\t\t\t\t<icon type=\"success\" size=\"28\" :color=\"color\"></icon>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<div class=\"step-main\">\n\t\t<div class=\"step-main-title\">{{ title }}</div>\n\t\t<div class=\"step-main-description\">{{ description }}</div>\n\t</div>\n</div>\n";

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Menu = __webpack_require__(313);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(316);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(319);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Divider from './Divider.vue'
	
	_Menu2.default.SubMenu = _SubMenu2.default;
	_Menu2.default.MenuItem = _MenuItem2.default;
	// Menu.Divider = Divider

	exports.default = _Menu2.default;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(314)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(315)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(187);
	
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
/* 315 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"vue-menu\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(317)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/SubMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(318)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _coerceBoolean = __webpack_require__(187);
	
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
/* 318 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"vue-sub-menu-title\" @click=\"triggerSub\">{{title}}</div>\n<ul class=\"vue-sub-menu panel-collapse collapse-transition\" v-show=\"isOpen\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(320)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/MenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(321)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 320 */
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
/* 321 */
/***/ function(module, exports) {

	module.exports = "\n<li\n  role=\"menuitem\"\n  :style=\"style\"\n  :title=\"title\"\n  @click=\"onSelect\">\n  <slot></slot>\n</li>\n";

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Breadcrumb = __webpack_require__(323);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(326);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Breadcrumb2.default.BreadcrumbItem = _BreadcrumbItem2.default;
	
	exports.default = _Breadcrumb2.default;

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(324)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/Breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(325)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 324 */
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
/* 325 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"breadcrumbs\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(327)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/BreadcrumbItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(328)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 327 */
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
/* 328 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"breadcrumb\">\n\t<a v-if=\"href\" :href=\"href\" class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</a>\n\t<span v-else class=\"breadcrumb-link\">\n\t\t<slot></slot>\n\t</span>\n\t<span class=\"breadcrumb-slash\">{{ slash }}</span>\n</span>\n";

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(330);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Jumper = __webpack_require__(332);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Pagination2.default.Jumper = _Jumper2.default;
	
	exports.default = _Pagination2.default;

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(331)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(342)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Jumper = __webpack_require__(332);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	var _Pager = __webpack_require__(336);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	var _Options = __webpack_require__(339);
	
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
	            type: Boolean
	        },
	        mini: {
	            type: Boolean
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
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(333)
	__vue_script__ = __webpack_require__(334)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Jumper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(335)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 333 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 334 */
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
/* 335 */
/***/ function(module, exports) {

	module.exports = "\n\t<div v-if=\"quickGo\" class=\"pagination-jump\">\n\t    <div class=\"input-jumper-wrap\">\n\t\t    跳至\n\t\t    <input type=\"text\" :value=\"_current\" @change=\"_handleChange($event)\" :class=\"_inputWrapClasses\"/>\n\t\t    页\n\t    </div>\n\t  \t<button type=\"button\" @click=\"_go\" :class=\"_btnWrapClasses\">\n\t\t跳转</button>\n  </div>\n";

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(337)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pager.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(338)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 337 */
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
/* 338 */
/***/ function(module, exports) {

	module.exports = "\n    <ul :class=\"wrapClasses\">\n        <li v-for=\"page in pageRange\" @click=\"pageClick(page.num)\" :class=\"{\n        'current':(page.className==='current'),\n\t\t'pagination-item':true,\n        'pagination-item-prev':(page.className==='prev'),\n        'pagination-item-next':(page.className==='next'),\n        'pagination-item-disabled':(page.className==='disabled'),\n        'pagination-item-ellipsis':(page.className==='ellipsis'),\n        'pagination-item-slash':(page.className==='slash')}\" >\n    \t\t<span v-if=\"page.className!='prev' && page.className!='next'\">\n    \t\t\t{{page.text}}\n    \t\t</span>\n    \t\t<icon v-if=\"page.className==='prev'\" type=\"prev\" size=\"12\" color=\"#666\" ></icon>\n    \t\t<icon v-if=\"page.className==='next'\" type=\"next\" size=\"12\" color=\"#666\"></icon>\n    \t\t<icon v-if=\"page.className==='disabled' && page.icon==='prev'\" type=\"prev\" size=\"12\" color=\"#e6e6e6\"></icon>\n\t\t\t<icon v-if=\"page.className==='disabled' && page.icon==='next'\" type=\"next\" size=\"12\" color=\"#e6e6e6\"></icon>\n        </li>\n    </ul>\n";

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(340)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(341)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Select = __webpack_require__(209);
	
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
/* 341 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizeChanger\" class=\"pagination-selector\">\n    <v-select :value=\"defaultSize\" placeholder=\"\" >\n        <v-option value=\"10\">10 条/页</v-option>\n        <v-option value=\"20\">20 条/页</v-option>\n        <v-option value=\"30\">30 条/页</v-option>\n        <v-option value=\"40\">40 条/页</v-option>\n    </v-select>\n    <div class=\"pagination-totalpage\">共{{ total }}条数据</div>\n</div>\n";

/***/ },
/* 342 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pagination\">\n<template v-if=\"totalPage > 1\">\n  <options :total=\"total\" :default-size=\"defaultSize\" :show-size-changer=\"showSizeChanger\"></options>\n  <jumper\n      :quick-go=\"showJumper ? _handleChange.bind(this) : null\"\n      :curr-page=\"currPage\"\n      :total-page=\"totalPage\"\n      :mini=\"mini\"\n  ></jumper>\n  <pager :page-range=\"pageRange\" :simple=\"simple\"  :mini=\"mini\" :page-click=\"pageClick\"></pager>\n</template>\n</div>\n";

/***/ },
/* 343 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (number, searchKey) {
	  var ret = '';
	  number = '' + number;
	  number = number.replace(/[^\d]/g, '').substr(0, 11);
	  // var keyIndex = number.indexOf(searchKey)
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
/* 344 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 345 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 346 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"grid\">\n    <h3 class=\"page-header\"><a href=\"#grid\" class=\"anchor\">Grid 栅格 </a></h3>\n    <div class=\"bs-example\">\n      <div class=\"container grid-demo\">\n        <v-row>\n          <v-col span=\"24\">col-lg-24</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"23\">col-lg-23</v-col>\n          <v-col span=\"1\">1</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"22\">col-lg-22</v-col>\n          <v-col span=\"2\">2</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"21\">col-lg-21</v-col>\n          <v-col span=\"3\">col-lg-3</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"20\">col-lg-20</v-col>\n          <v-col span=\"4\">col-lg-4</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"19\">col-lg-19</v-col>\n          <v-col span=\"5\">col-lg-5</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"18\">col-lg-18</v-col>\n          <v-col span=\"6\">col-lg-6</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"17\">col-lg-17</v-col>\n          <v-col span=\"7\">col-lg-7</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"16\">col-lg-16</v-col>\n          <v-col span=\"8\">col-lg-8</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"15\">col-lg-15</v-col>\n          <v-col span=\"9\">col-lg-9</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"14\">col-lg-14</v-col>\n          <v-col span=\"10\">col-lg-10</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"13\">col-lg-13</v-col>\n          <v-col span=\"11\">col-lg-11</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"12\">col-lg-12</v-col>\n          <v-col span=\"12\">col-lg-12</v-col>\n        </v-row>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-row>\n  <v-col span=\"24\">col-lg-24</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"23\">col-lg-23</v-col>\n  <v-col span=\"1\">1</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"22\">col-lg-22</v-col>\n  <v-col span=\"2\">2</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"21\">col-lg-21</v-col>\n  <v-col span=\"3\">col-lg-3</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"20\">col-lg-20</v-col>\n  <v-col span=\"4\">col-lg-4</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"19\">col-lg-19</v-col>\n  <v-col span=\"5\">col-lg-5</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"18\">col-lg-18</v-col>\n  <v-col span=\"6\">col-lg-6</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"17\">col-lg-17</v-col>\n  <v-col span=\"7\">col-lg-7</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"16\">col-lg-16</v-col>\n  <v-col span=\"8\">col-lg-8</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"15\">col-lg-15</v-col>\n  <v-col span=\"9\">col-lg-9</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"14\">col-lg-14</v-col>\n  <v-col span=\"10\">col-lg-10</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"13\">col-lg-13</v-col>\n  <v-col span=\"11\">col-lg-11</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"12\">col-lg-12</v-col>\n  <v-col span=\"12\">col-lg-12</v-col>\n</v-row>\n</script></code></pre>\n    </script>\n    </code>\n  </div>\n";

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(349)
	__vue_script__ = __webpack_require__(351)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/iconDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(352)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(350);
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
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n#icon .iconfont {\n  display: inline-block;\n  margin:8px;\n}\n", ""]);
	
	// exports


/***/ },
/* 351 */
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
	//       <icon type="head"></icon>页首
	//       <icon type="tail"></icon>页尾
	//       <icon type="clear"></icon>清除
	//       <icon type="close"></icon>关闭
	//       <icon type="search"></icon>搜索
	//       <icon type="up"></icon>向上
	//       <icon type="down"></icon>向下
	//       <icon type="prev"></icon>上一页
	//       <icon type="next"></icon>下一页
	//       <icon type="warning" color="red" size="20"></icon>警告
	//       <icon type="error"></icon>错误
	//       <icon type="info"></icon>信息
	//       <icon type="help"></icon>帮助
	//       <icon type="success"></icon>成功
	//       <icon type="filter"></icon>过滤
	//       <icon type="doc"></icon>附件
	//       <icon type="calendar"></icon>日历
	//       <icon type="tick"></icon>对勾
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->
	// <icon type="head"></icon>页首
	// <icon type="tail"></icon>页尾
	// <icon type="clear"></icon>清除
	// <icon type="close"></icon>关闭
	// <icon type="search"></icon>搜索
	// <icon type="up"></icon>向上
	// <icon type="down"></icon>向下
	// <icon type="prev"></icon>上一页
	// <icon type="next"></icon>下一页
	// <icon type="warning" color="red" size="20"></icon>警告
	// <icon type="error"></icon>错误
	// <icon type="info"></icon>信息
	// <icon type="help"></icon>帮助
	// <icon type="success"></icon>成功
	// <icon type="filter"></icon>过滤
	// <icon type="doc"></icon>附件
	// <icon type="calendar"></icon>日历
	// <icon type="tick"></icon>对勾
	//   </script></code></pre>
	//   <h2>Options</h2>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 352 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"icon\">\n    <h3 class=\"page-header\"><a href=\"#icon\" class=\"anchor\">Icon 图标</a></h3>\n    <div class=\"bs-example\">\n      <icon type=\"head\"></icon>页首\n      <icon type=\"tail\"></icon>页尾\n      <icon type=\"clear\"></icon>清除\n      <icon type=\"close\"></icon>关闭\n      <icon type=\"search\"></icon>搜索\n      <icon type=\"up\"></icon>向上\n      <icon type=\"down\"></icon>向下\n      <icon type=\"prev\"></icon>上一页\n      <icon type=\"next\"></icon>下一页\n      <icon type=\"warning\" color=\"red\" size=\"20\"></icon>警告\n      <icon type=\"error\"></icon>错误\n      <icon type=\"info\"></icon>信息\n      <icon type=\"help\"></icon>帮助\n      <icon type=\"success\"></icon>成功\n      <icon type=\"filter\"></icon>过滤\n      <icon type=\"doc\"></icon>附件\n      <icon type=\"calendar\"></icon>日历\n      <icon type=\"tick\"></icon>对勾\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->\n<icon type=\"head\"></icon>页首\n<icon type=\"tail\"></icon>页尾\n<icon type=\"clear\"></icon>清除\n<icon type=\"close\"></icon>关闭\n<icon type=\"search\"></icon>搜索\n<icon type=\"up\"></icon>向上\n<icon type=\"down\"></icon>向下\n<icon type=\"prev\"></icon>上一页\n<icon type=\"next\"></icon>下一页\n<icon type=\"warning\" color=\"red\" size=\"20\"></icon>警告\n<icon type=\"error\"></icon>错误\n<icon type=\"info\"></icon>信息\n<icon type=\"help\"></icon>帮助\n<icon type=\"success\"></icon>成功\n<icon type=\"filter\"></icon>过滤\n<icon type=\"doc\"></icon>附件\n<icon type=\"calendar\"></icon>日历\n<icon type=\"tick\"></icon>对勾\n  </script></code></pre>\n  <h2>Options</h2>\n  </div>\n";

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(354)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/buttonDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(355)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 354 */
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
	//       <h4>普通按钮使用，一级按钮，可以设置按钮大小</h4>
	//       <v-button large primary value="大号+主按钮"></v-button>
	//       <v-button primary value="中号+主按钮"></v-button>
	//       <v-button small primary value="小号+主按钮"></v-button>
	//       <br>
	//       <h4>普通按钮使用，二级按钮</h4>
	//       <v-button large secondary value="大号+次按钮"></v-button>
	//       <v-button secondary value="中号+次按钮"></v-button>
	//       <v-button small secondary value="小号+次按钮"></v-button>
	//       <br>
	//       <h4>普通按钮使用，三级按钮</h4>
	//       <v-button large tertiary value="大号+三级按钮"></v-button>
	//       <v-button tertiary value="中号+三级按钮"></v-button>
	//       <v-button small tertiary value="小号+三级按钮"></v-button>
	//       <br>
	//       <h4>普通按钮使用，禁用按钮</h4>
	//       <v-button large disabled value="大号+失效按钮"></v-button>
	//       <v-button disabled value="中号+失效按钮"></v-button>
	//       <v-button small disabled value="小号+失效按钮"></v-button>
	//       <br>
	//       <h4>普通按钮使用，文字型按钮</h4>
	//       <v-button large text value="大号+文字型按钮"></v-button>
	//       <v-button text value="中号+文字型按钮"></v-button>
	//       <v-button small text value="小号+文字型按钮"></v-button>
	//       <br>
	//       <h4>普通按钮使用，带有icon的按钮</h4>
	//       <v-button>
	//         <icon type="close"></icon>关闭
	//       </v-button>
	//       <br>
	//       <h4>按钮组使用</h4>
	//       <h5>Basic</h5>
	//       <button-group>
	//         <v-button secondary value="cancel"></v-button>
	//         <v-button primary value="ok"></v-button>
	//       </button-group>
	//       <button-group large>
	//         <v-button primary value="L"></v-button>
	//         <v-button secondary value="M"></v-button>
	//         <v-button tertiary value="M"></v-button>
	//       </button-group>
	//       <button-group small>
	//         <v-button disabled value="L"></v-button>
	//         <v-button disabled value="M"></v-button>
	//         <v-button disabled value="M"></v-button>
	//         <v-button disabled value="R"></v-button>
	//       </button-group>
	//       <h5>带有icon的按钮组</h5>
	//       <button-group>
	//         <v-button>
	//           <icon type="prev"></icon>上一页
	//         </v-button>
	//         <v-button>
	//           下一页<icon type="next"></icon>
	//         </v-button>
	//       </button-group>
	//       <button-group>
	//         <v-button>
	//           <icon type="head"></icon>
	//         </v-button>
	//         <v-button>
	//           <icon type="tail"></icon>
	//         </v-button>
	//       </button-group>
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
	//   <icon type="close"></icon>关闭
	// </v-button>
	//
	// <!-- 按钮组，使用封装的ButtonGroup组件 -->
	// <button-group>
	//   <v-button secondary value="cancel"></v-button>
	//   <v-button primary value="ok"></v-button>
	// </button-group>
	// <button-group large>
	//   <v-button primary value="L"></v-button>
	//   <v-button secondary value="M"></v-button>
	//   <v-button tertiary value="M"></v-button>
	// </button-group>
	// <button-group small>
	//   <v-button disabled value="L"></v-button>
	//   <v-button disabled value="M"></v-button>
	//   <v-button disabled value="M"></v-button>
	//   <v-button disabled value="R"></v-button>
	// </button-group>
	// <button-group>
	//   <v-button>
	//     <icon type="prev"></icon>上一页
	//   </v-button>
	//   <v-button>
	//     下一页<icon type="next"></icon>
	//   </v-button>
	// </button-group>
	// <button-group>
	//   <v-button>
	//     <icon type="head"></icon>
	//   </v-button>
	//   <v-button>
	//     <icon type="tail"></icon>
	//   </v-button>
	// </button-group>
	// </script></code></pre>
	//     <h4>参数</h4>
	//     <table class="atui-table table-bordered">
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
	
	var ButtonGroup = _src.Button.Group;
	exports.default = {
	  components: {
	    vButton: vButton,
	    Icon: _src.Icon,
	    ButtonGroup: ButtonGroup
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 355 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"button\">\n    <h3 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Button 按钮</a></h3>\n    <div class=\"bs-example\">\n      <h4>普通按钮使用，一级按钮，可以设置按钮大小</h4>\n      <v-button large primary value=\"大号+主按钮\"></v-button>\n      <v-button primary value=\"中号+主按钮\"></v-button>\n      <v-button small primary value=\"小号+主按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，二级按钮</h4>\n      <v-button large secondary value=\"大号+次按钮\"></v-button>\n      <v-button secondary value=\"中号+次按钮\"></v-button>\n      <v-button small secondary value=\"小号+次按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，三级按钮</h4>\n      <v-button large tertiary value=\"大号+三级按钮\"></v-button>\n      <v-button tertiary value=\"中号+三级按钮\"></v-button>\n      <v-button small tertiary value=\"小号+三级按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，禁用按钮</h4>\n      <v-button large disabled value=\"大号+失效按钮\"></v-button>\n      <v-button disabled value=\"中号+失效按钮\"></v-button>\n      <v-button small disabled value=\"小号+失效按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，文字型按钮</h4>\n      <v-button large text value=\"大号+文字型按钮\"></v-button>\n      <v-button text value=\"中号+文字型按钮\"></v-button>\n      <v-button small text value=\"小号+文字型按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，带有icon的按钮</h4>\n      <v-button>\n        <icon type=\"close\"></icon>关闭\n      </v-button>\n      <br>\n      <h4>按钮组使用</h4>\n      <h5>Basic</h5>\n      <button-group>\n        <v-button secondary value=\"cancel\"></v-button>\n        <v-button primary value=\"ok\"></v-button>\n      </button-group>\n      <button-group large>\n        <v-button primary value=\"L\"></v-button>\n        <v-button secondary value=\"M\"></v-button>\n        <v-button tertiary value=\"M\"></v-button>\n      </button-group>\n      <button-group small>\n        <v-button disabled value=\"L\"></v-button>\n        <v-button disabled value=\"M\"></v-button>\n        <v-button disabled value=\"M\"></v-button>\n        <v-button disabled value=\"R\"></v-button>\n      </button-group>\n      <h5>带有icon的按钮组</h5>\n      <button-group>\n        <v-button>\n          <icon type=\"prev\"></icon>上一页\n        </v-button>\n        <v-button>\n          下一页<icon type=\"next\"></icon>\n        </v-button>\n      </button-group>\n      <button-group>\n        <v-button>\n          <icon type=\"head\"></icon>\n        </v-button>\n        <v-button>\n          <icon type=\"tail\"></icon>\n        </v-button>\n      </button-group>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- 基础按钮，使用封装的Button组件，通过添加属性，呈现样式 -->\n<!-- 大号（large）、中号（默认）和小号（small）-->\n<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->\n<!-- 可以通过属性value控制按钮文案或者组件调用中插入html代码 -->\n<v-button large primary value=\"大号+主按钮\"></v-button>\n<v-button large primary>大号+主按钮</v-button>\n<v-button>\n  <icon type=\"close\"></icon>关闭\n</v-button>\n\n<!-- 按钮组，使用封装的ButtonGroup组件 -->\n<button-group>\n  <v-button secondary value=\"cancel\"></v-button>\n  <v-button primary value=\"ok\"></v-button>\n</button-group>\n<button-group large>\n  <v-button primary value=\"L\"></v-button>\n  <v-button secondary value=\"M\"></v-button>\n  <v-button tertiary value=\"M\"></v-button>\n</button-group>\n<button-group small>\n  <v-button disabled value=\"L\"></v-button>\n  <v-button disabled value=\"M\"></v-button>\n  <v-button disabled value=\"M\"></v-button>\n  <v-button disabled value=\"R\"></v-button>\n</button-group>\n<button-group>\n  <v-button>\n    <icon type=\"prev\"></icon>上一页\n  </v-button>\n  <v-button>\n    下一页<icon type=\"next\"></icon>\n  </v-button>\n</button-group>\n<button-group>\n  <v-button>\n    <icon type=\"head\"></icon>\n  </v-button>\n  <v-button>\n    <icon type=\"tail\"></icon>\n  </v-button>\n</button-group>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>按钮文案</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>按钮尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>按钮尺寸，小</td>\n        </tr>\n        <tr>\n          <td>primary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，主按钮</td>\n        </tr>\n        <tr>\n          <td>secondary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，次按钮</td>\n        </tr>\n        <tr>\n          <td>tertiary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，三级按钮</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，失效按钮</td>\n        </tr>\n        <tr>\n          <td>text</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，文字型按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(357)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/inputDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(358)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var FormItem = _src.Form.FormItem; // <template>
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
	//     <h4>带有验证功能的输入框</h4>
	//     <v-form action="aaa.do" method="post">
	//       <form-item required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
	//         <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
	//       </form-item>
	//       <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon :tips="form1.telTips">
	//         <v-input type="tel" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel" :valid-result.sync="form1.telValidResult" :rules="['isNumber','isPhone']" :tips.sync="form1.telTips"></v-input>
	//       </form-item>
	//     </v-form>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <!-- input输入框，使用封装的Input组件，通过添加属性，呈现样式 -->
	// <!-- 大号（large）、中号（默认）、小号（small）、禁用（disabled）、错误提示（error）、成功提示（success）-->
	// <!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
	// <!-- 通过属性placeholder控制输入框预期值的提示信息 -->
	// <!-- 通过属性type控制输入框类型，radio和checkbox不在该组件处理范围，会单独处理，请关注Radio组件和Checkbox组件 -->
	// <v-input large type="email" placeholder="输入框－大尺寸"></v-input>
	// </script></code></pre>
	//     <h4>参数</h4>
	//     <table class="atui-table table-bordered">
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
	//         <tr>
	//           <td>required</td>
	//           <td></td>
	//           <td></td>
	//           <td>验证非空，也可放在rules参数中</td>
	//         </tr>
	//         <tr>
	//           <td>maxlength</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>输入字符最大长度</td>
	//         </tr>
	//         <tr>
	//           <td>maxlength-tips</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>最大长度验证失败时提示文案</td>
	//         </tr>
	//         <tr>
	//           <td>minlength</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>输入字符最小长度</td>
	//         </tr>
	//         <tr>
	//           <td>minlength-tips</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>最小长度验证失败时提示文案</td>
	//         </tr>
	//         <tr>
	//           <td>rules</td>
	//           <td><code>Array</code></td>
	//           <td></td>
	//           <td>输入框验证规则，内部现已集成required|isPhone|isNumber|isTelephone|isEmail</td>
	//         </tr>
	//         <tr>
	//           <td>valid-status</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>实时获取当前验证状态</td>
	//         </tr>
	//         <tr>
	//           <td>tips</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>实时获取当前验证提示</td>
	//         </tr>
	//         <tr>
	//           <td>valid-result</td>
	//           <td><code>Object</code></td>
	//           <td></td>
	//           <td>实时获取当前所有验证条件的验证结果</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>
	
	exports.default = {
	  components: {
	    vInput: _src.Input,
	    vForm: _src.Form,
	    FormItem: FormItem
	  },
	
	  data: function data() {
	    return {
	      username: '',
	      tel: '',
	      form1: {
	        nameValidResult: {},
	        nameStatus: '',
	        nameTips: '',
	        telValidResult: {},
	        telStatus: '',
	        telTips: '输入手机号码格式错误'
	      }
	    };
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"input\">\n    <h3 class=\"page-header\"><a href=\"#input\" class=\"anchor\">Input 输入框</a></h3>\n    <div class=\"bs-example\">\n    <div>\n      <v-input large type=\"text\" placeholder=\"输入框－大尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input type=\"text\" placeholder=\"输入框－默认尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input small type=\"text\" placeholder=\"输入框－小尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input disabled type=\"text\" placeholder=\"禁用输入框－默认尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input error type=\"text\" placeholder=\"error输入框－默认尺寸\"></v-input>\n    </div>\n    <br>\n    <div>\n      <v-input success type=\"text\" placeholder=\"success输入框－默认尺寸\"></v-input>\n    </div>\n    <h4>带有验证功能的输入框</h4>\n    <v-form action=\"aaa.do\" method=\"post\">\n      <form-item required label=\"姓名：\" :valid-status=\"form1.nameStatus\" label-col=\"4\" has-icon :tips=\"form1.nameTips\">\n        <v-input type=\"text\" placeholder=\"请输入您的姓名\"  :value.sync=\"username\" required required-tips=\"用户名为必填项\" maxlength=\"12\" minlength=\"2\" minlength-tips=\"用户名不能少于2个字符\" :valid-status.sync=\"form1.nameStatus\" :tips.sync=\"form1.nameTips\" :valid-result.sync=\"form1.nameValidResult\"></v-input>\n      </form-item>\n      <form-item required label=\"电话：\" :valid-status=\"form1.telStatus\" label-col=\"4\" has-icon :tips=\"form1.telTips\">\n        <v-input type=\"tel\" placeholder=\"请输入您的电话号码\" :valid-status.sync=\"form1.telStatus\" :value.sync=\"tel\" :valid-result.sync=\"form1.telValidResult\" :rules=\"['isNumber','isPhone']\" :tips.sync=\"form1.telTips\"></v-input>\n      </form-item>\n    </v-form>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- input输入框，使用封装的Input组件，通过添加属性，呈现样式 -->\n<!-- 大号（large）、中号（默认）、小号（small）、禁用（disabled）、错误提示（error）、成功提示（success）-->\n<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->\n<!-- 通过属性placeholder控制输入框预期值的提示信息 -->\n<!-- 通过属性type控制输入框类型，radio和checkbox不在该组件处理范围，会单独处理，请关注Radio组件和Checkbox组件 -->\n<v-input large type=\"email\" placeholder=\"输入框－大尺寸\"></v-input>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>输入框预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>输入框尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>输入框尺寸，小</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，禁用</td>\n        </tr>\n        <tr>\n          <td>error</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，输入验证失败</td>\n        </tr>\n        <tr>\n          <td>success</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，输入验证成功</td>\n        </tr>\n        <tr>\n          <td>required</td>\n          <td></td>\n          <td></td>\n          <td>验证非空，也可放在rules参数中</td>\n        </tr>\n        <tr>\n          <td>maxlength</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入字符最大长度</td>\n        </tr>\n        <tr>\n          <td>maxlength-tips</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>最大长度验证失败时提示文案</td>\n        </tr>\n        <tr>\n          <td>minlength</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入字符最小长度</td>\n        </tr>\n        <tr>\n          <td>minlength-tips</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>最小长度验证失败时提示文案</td>\n        </tr>\n        <tr>\n          <td>rules</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>输入框验证规则，内部现已集成required|isPhone|isNumber|isTelephone|isEmail</td>\n        </tr>\n        <tr>\n          <td>valid-status</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>实时获取当前验证状态</td>\n        </tr>\n        <tr>\n          <td>tips</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>实时获取当前验证提示</td>\n        </tr>\n        <tr>\n          <td>valid-result</td>\n          <td><code>Object</code></td>\n          <td></td>\n          <td>实时获取当前所有验证条件的验证结果</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>";

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(360)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/uploaderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(361)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	exports.default = {
	  components: {
	    Uploader: _src.Uploader
	  },
	  data: function data() {
	    return {
	      uploadTime: 0,
	      fileList1: [{
	        name: '已经上传的文件1.txt'
	      }, {
	        name: '已经上传的文件2.txt'
	      }],
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
	//       <h4>普通上传，无上传文件格式要求</h4>
	//       <uploader
	//         upload-type="click"
	//         :url="ajaxUrl"
	//         :multiple="multiple"
	//         name="files1"
	//         :file-list.sync="fileList1">
	//       </uploader>
	//       <h4>有上传文件格式要求</h4>
	//       <h5>此处只能上传png格式图片</h5>
	//       <uploader
	//         upload-type="click"
	//         :url="ajaxUrl"
	//         :multiple="multiple"
	//         name="files2"
	//         accept="image/png"
	//         :file-list.sync="fileList1">
	//       </uploader>
	//       <h4>有上传数量要求</h4>
	//       <h5>此处最多只能上传5个文件，包含已经上传的</h5>
	//       <uploader
	//         upload-type="click"
	//         :url="ajaxUrl"
	//         :multiple="multiple"
	//         name="files3"
	//         :maxlength="5"
	//         :file-list.sync="fileList1">
	//       </uploader>
	//       <h4>拖拽上传</h4>
	//       <uploader
	//         id="file-upload-drag-test"
	//         form-id="upload2"
	//         upload-type="drag"
	//         :url="ajaxUrl"
	//         :multiple="multiple"
	//         name="files2"
	//         :auto-submit="autoSubmit"
	//         :hide-button="hideButton"
	//         :file-list.sync="fileList1">
	//       </uploader>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// upload文件上传
	// 1、点击上传调用方式
	// <form id="upload1" method="post" action="{{ajaxUrl}}">
	//   <uploader
	//     id="file-upload-click-test"
	//     form-id="upload1"
	//     upload-type="click"
	//     :ajax="ajaxUrl"
	//     :multiple="multiple"
	//     name="files1"
	//     :auto-submit="true"
	//     :hide-button="true"
	//     :file-list.sync="fileList1">
	//   </uploader>
	// </form>
	// 2、支持拖拽上传调用方式
	// <form id="upload2" method="post" action="{{ajaxUrl}}">
	//   <uploader
	//     id="file-upload-drag-test"
	//     form-id="upload2"
	//     upload-type="drag"
	//     :ajax="ajaxUrl"
	//     :multiple="multiple"
	//     name="files2"
	//     :auto-submit="autoSubmit"
	//     :hide-button="hideButton"
	//     :file-list.sync="fileList2">
	//   </uploader>
	// </form>
	//     </script></code></pre>
	//     <h4>参数</h4>
	//     <table class="atui-table table-bordered">
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
/* 361 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"upload\">\n    <h3 class=\"page-header\"><a href=\"#upload\" class=\"anchor\">Uploader 文件上传 </a></h3>\n    <div class=\"bs-example\">\n      <h4>普通上传，无上传文件格式要求</h4>\n      <uploader\n        upload-type=\"click\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files1\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n      <h4>有上传文件格式要求</h4>\n      <h5>此处只能上传png格式图片</h5>\n      <uploader\n        upload-type=\"click\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files2\"\n        accept=\"image/png\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n      <h4>有上传数量要求</h4>\n      <h5>此处最多只能上传5个文件，包含已经上传的</h5>\n      <uploader\n        upload-type=\"click\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files3\"\n        :maxlength=\"5\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n      <h4>拖拽上传</h4>\n      <uploader\n        id=\"file-upload-drag-test\"\n        form-id=\"upload2\"\n        upload-type=\"drag\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files2\"\n        :auto-submit=\"autoSubmit\"\n        :hide-button=\"hideButton\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\nupload文件上传\n1、点击上传调用方式\n<form id=\"upload1\" method=\"post\" action=\"{{ajaxUrl}}\">\n  <uploader\n    id=\"file-upload-click-test\"\n    form-id=\"upload1\"\n    upload-type=\"click\"\n    :ajax=\"ajaxUrl\"\n    :multiple=\"multiple\"\n    name=\"files1\"\n    :auto-submit=\"true\"\n    :hide-button=\"true\"\n    :file-list.sync=\"fileList1\">\n  </uploader>\n</form>\n2、支持拖拽上传调用方式\n<form id=\"upload2\" method=\"post\" action=\"{{ajaxUrl}}\">\n  <uploader\n    id=\"file-upload-drag-test\"\n    form-id=\"upload2\"\n    upload-type=\"drag\"\n    :ajax=\"ajaxUrl\"\n    :multiple=\"multiple\"\n    name=\"files2\"\n    :auto-submit=\"autoSubmit\"\n    :hide-button=\"hideButton\"\n    :file-list.sync=\"fileList2\">\n  </uploader>\n</form>\n    </script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>唯一标识</td>\n        </tr>\n        <tr>\n          <td>form-id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>如需上传后自动提交，请确保以该值为id的form存在，否则，无需设置</td>\n        </tr>\n        <tr>\n          <td>upload-type</td>\n          <td><code>String</code></td>\n          <td><code>click</code></td>\n          <td>取值有<code>click</code>和<code>drop</code>两种，分别代表点击上传和支持拖拽上传</td>\n        </tr>\n        <tr>\n          <td>accept</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>上传的文件类型指定，详细可查看MIME类型</td>\n        </tr>\n        <tr>\n          <td>ajax</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文件上传的地址</td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否支持多文件上传</td>\n        </tr>\n        <tr>\n          <td>name</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>名称</td>\n        </tr>\n        <tr>\n          <td>auto-submit</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>上传后是否自动提交</td>\n        </tr>\n        <tr>\n          <td>hide-button</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否隐藏upload按钮</td>\n        </tr>\n        <tr>\n          <td>file-list</td>\n          <td><code>Array</code></td>\n          <td><code>空数组</code></td>\n          <td>上传的文件列表</td>\n        </tr>\n        <tr>\n          <td>method</td>\n          <td><code>String</code></td>\n          <td><code>POST</code></td>\n          <td>上传文件请求类型</td>\n        </tr>\n        <tr>\n          <td>completed::file-upload</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>上传请求执行完成后的回调，需要在events中捕获。</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n";

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(363)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/formDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(364)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 363 */
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
	//       <h4>纵向排列</h4>
	//       <v-form action="aaa.do" method="post">
	//         <form-item class="name123456" required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
	//           <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
	//         </form-item>
	//         <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon :tips="form1.telTips">
	//           <v-input type="tel" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel" :valid-result.sync="form1.telValidResult" :rules="['isNumber','isPhone']" :tips.sync="form1.telTips"></v-input>
	//         </form-item>
	//         <form-item required label="性别" label-col="4">
	//           <label><input type="checkbox" name="sexy" checked />男</label>
	//           <label><input type="checkbox" name="sexy" />女</label>
	//         </form-item>
	//         <form-item required label="行业：" label-col="4">
	//           <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
	//         </form-item>
	//         <form-item label-col="4">
	//           <v-button type="submit" primary>确定</v-button>
	//           <v-button type="reset" tertiary value="重置条件"></v-button>
	//         </form-item>
	//       </v-form>
	//       <h4>横向排列</h4>
	//       <v-form action="aaa.do" method="post">
	//         <form-item label="联系人电话：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="电话号码"></v-input>
	//         </form-item>
	//         <form-item label="联系人电话：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="电话号码"></v-input>
	//         </form-item>
	//         <form-item label="联系人电话：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="电话号码"></v-input>
	//         </form-item>
	//         <form-item label="联系人电话：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="电话号码"></v-input>
	//         </form-item>
	//         <form-item label="联系人电话：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="电话号码"></v-input>
	//         </form-item>
	//         <form-item label="联系人电话：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="电话号码"></v-input>
	//         </form-item>
	//         <form-item label="联系人电话：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="电话号码"></v-input>
	//         </form-item>
	//         <form-item required label="应用名/网站名：" item-col="8" label-col="10">
	//           <v-input type="text" placeholder="若还未上线可填无"></v-input>
	//         </form-item>
	//         <form-item required label="行业：" item-col="8" label-col="10">
	//           <v-select :default-value.sync="arr" :options="industry" :close-on-select="true"></v-select>
	//         </form-item>
	//         <form-item required label="电话号码：" item-col="8" label-col="10">
	//           <v-input placeholder="请输入电话号码"></v-input>
	//         </form-item>
	//         <form-item required label="电话号码：" valid-status="error" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
	//           <v-input valid-status="error" placeholder="请输入电话号码"></v-input>
	//         </form-item>
	//         <form-item required label="电话号码：" valid-status="success" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
	//           <v-input valid-status="success" placeholder="请输入电话号码"></v-input>
	//         </form-item>
	//         <form-item required label-col="0">
	//           <label><input type="checkbox" />阅读并接受《用户协议》</label>
	//         </form-item>
	//         <form-item required label-col="4">
	//           <v-button type="submit" primary @click="validFun">确定</v-button>
	//           <v-button type="reset" tertiary value="重置条件"></v-button>
	//         </form-item>
	//       </v-form>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// 纵向排列
	// <v-form action="aaa.do" method="post">
	//   <form-item required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
	//     <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
	//   </form-item>
	//   <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon tips="form1.telTips">
	//     <v-input type="text" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel"></v-input>
	//   </form-item>
	//   <form-item required label="性别" label-col="4">
	//     <label><input type="checkbox" name="sexy" checked />男</label>
	//     <label><input type="checkbox" name="sexy" />女</label>
	//   </form-item>
	//   <form-item required label="行业：" label-col="4">
	//     <v-select :default-value.sync="arr" :options="industry" :close-on-select="true"></v-select>
	//   </form-item>
	//   <form-item label-col="4">
	//     <v-button type="submit" primary @click="validFun">确定</v-button>
	//     <v-button type="reset" tertiary value="重置条件"></v-button>
	//   </form-item>
	// </v-form>
	// 横向排列
	// <v-form action="aaa.do" method="post">
	//   <form-item label="联系人电话：" item-col="8" label-col="10">
	//     <v-input type="text" placeholder="电话号码"></v-input>
	//   </form-item>
	//   <form-item label="联系人电话：" item-col="8" label-col="10">
	//     <v-input type="text" placeholder="电话号码"></v-input>
	//   </form-item>
	//   <form-item label="联系人电话：" item-col="8" label-col="10">
	//     <v-input type="text" placeholder="电话号码"></v-input>
	//   </form-item>
	//   <form-item label="联系人电话：" item-col="8" label-col="10">
	//     <v-input type="text" placeholder="电话号码"></v-input>
	//   </form-item>
	//   <form-item label="联系人电话：" item-col="8" label-col="10">
	//     <v-input type="text" placeholder="电话号码"></v-input>
	//   </form-item>
	//   <form-item label="联系人电话：" item-col="8" label-col="10">
	//     <v-input type="text" placeholder="电话号码"></v-input>
	//   </form-item>
	//   <form-item required label="联系人电话：" :valid-status="telStatus" item-col="8" label-col="10" has-icon tips="123">
	//     <v-input type="text" placeholder="电话号码" :valid-status="telStatus" :value.sync="tel" @click="clickFun"></v-input>
	//   </form-item>
	//   <form-item required label="应用名/网站名：" item-col="8" label-col="10">
	//     <v-input type="text" placeholder="若还未上线可填无"></v-input>
	//   </form-item>
	//   <form-item required label="行业：" item-col="8" label-col="10">
	//     <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
	//   </form-item>
	//   <form-item required label="电话号码：" item-col="8" label-col="10">
	//     <v-input placeholder="请输入电话号码"></v-input>
	//   </form-item>
	//   <form-item required label="电话号码：" valid-status="error" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
	//     <v-input valid-status="error" placeholder="请输入电话号码"></v-input>
	//   </form-item>
	//   <form-item required label="电话号码：" valid-status="success" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
	//     <v-input valid-status="success" placeholder="请输入电话号码"></v-input>
	//   </form-item>
	//   <form-item required label-col="0">
	//     <label><input type="checkbox" />阅读并接受《用户协议》</label>
	//   </form-item>
	//   <form-item required label-col="4">
	//     <v-button type="submit" primary @click="validFun">确定</v-button>
	//     <v-button type="reset" tertiary value="重置条件"></v-button>
	//   </form-item>
	// </v-form>
	//     </script></code></pre>
	//     </script>
	//     </code>
	//     <h4>FormItem组件参数</h4>
	//     <table class="atui-table table-bordered">
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
	//           <td>item-col</td>
	//           <td><code>String</code></td>
	//           <td><code>24</code></td>
	//           <td>以24格为准，当前FormItem组件占的栅格列数</td>
	//         </tr>
	//         <tr>
	//           <td>label</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>label域文案</td>
	//         </tr>
	//         <tr>
	//           <td>label-col</td>
	//           <td><code>String</code></td>
	//           <td><code>7</code></td>
	//           <td>以当前的FormItem组件为准，label域占的列数</td>
	//         </tr>
	//         <tr>
	//           <td>wrapper-col</td>
	//           <td></td>
	//           <td><code>24-（label-col属性值）</code></td>
	//           <td>以当前的FormItem组件为准，非label域占的列数</td>
	//         </tr>
	//         <tr>
	//           <td>required</td>
	//           <td></td>
	//           <td></td>
	//           <td>是否是必填项，配置后，会在label文案前加’*‘标识</td>
	//         </tr>
	//         <tr>
	//           <td>tips</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>各种状态下的提示文案</td>
	//         </tr>
	//         <tr>
	//           <td>valid-status</td>
	//           <td><code>String</code></td>
	//           <td><code>空</code></td>
	//           <td>当前验证状态，有空,success,warning,error,validating</td>
	//         </tr>
	//         <tr>
	//           <td>has-icon</td>
	//           <td></td>
	//           <td></td>
	//           <td>配合validateStatus属性使用，是否展示校验状态图标</td>
	//         </tr>
	//       </tbody>
	//     </table>
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
	      username: '',
	      tel: '',
	      form1: {
	        nameValidResult: {},
	        nameStatus: '',
	        nameTips: '',
	        telValidResult: {},
	        telStatus: '',
	        telTips: '输入手机号码格式错误'
	      }
	    };
	  },
	
	  watch: {
	    'form1.nameValidResult': function form1NameValidResult(val) {
	      console.log('======');
	      console.log(val);
	      console.log('======');
	    }
	  },
	  methods: {
	    clickFun: function clickFun() {
	      alert('click');
	    },
	    validFun: function validFun() {}
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 364 */
/***/ function(module, exports) {

	module.exports = "\n\n  <div class=\"bs-docs-section\" id=\"form\">\n    <h3 class=\"page-header\"><a href=\"#form\" class=\"anchor\">Form 表单 </a></h3>\n    <div class=\"bs-example\">\n      <h4>纵向排列</h4>\n      <v-form action=\"aaa.do\" method=\"post\">\n        <form-item class=\"name123456\" required label=\"姓名：\" :valid-status=\"form1.nameStatus\" label-col=\"4\" has-icon :tips=\"form1.nameTips\">\n          <v-input type=\"text\" placeholder=\"请输入您的姓名\"  :value.sync=\"username\" required required-tips=\"用户名为必填项\" maxlength=\"12\" minlength=\"2\" minlength-tips=\"用户名不能少于2个字符\" :valid-status.sync=\"form1.nameStatus\" :tips.sync=\"form1.nameTips\" :valid-result.sync=\"form1.nameValidResult\"></v-input>\n        </form-item>\n        <form-item required label=\"电话：\" :valid-status=\"form1.telStatus\" label-col=\"4\" has-icon :tips=\"form1.telTips\">\n          <v-input type=\"tel\" placeholder=\"请输入您的电话号码\" :valid-status.sync=\"form1.telStatus\" :value.sync=\"tel\" :valid-result.sync=\"form1.telValidResult\" :rules=\"['isNumber','isPhone']\" :tips.sync=\"form1.telTips\"></v-input>\n        </form-item>\n        <form-item required label=\"性别\" label-col=\"4\">\n          <label><input type=\"checkbox\" name=\"sexy\" checked />男</label>\n          <label><input type=\"checkbox\" name=\"sexy\" />女</label>\n        </form-item>\n        <form-item required label=\"行业：\" label-col=\"4\">\n          <v-select :value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n        </form-item>\n        <form-item label-col=\"4\">\n          <v-button type=\"submit\" primary>确定</v-button>\n          <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n        </form-item>\n      </v-form>\n      <h4>横向排列</h4>\n      <v-form action=\"aaa.do\" method=\"post\">\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"应用名/网站名：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"若还未上线可填无\"></v-input>\n        </form-item>\n        <form-item required label=\"行业：\" item-col=\"8\" label-col=\"10\">\n          <v-select :default-value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n        </form-item>\n        <form-item required label=\"电话号码：\" item-col=\"8\" label-col=\"10\">\n          <v-input placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"电话号码：\" valid-status=\"error\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n          <v-input valid-status=\"error\" placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"电话号码：\" valid-status=\"success\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n          <v-input valid-status=\"success\" placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label-col=\"0\">\n          <label><input type=\"checkbox\" />阅读并接受《用户协议》</label>\n        </form-item>\n        <form-item required label-col=\"4\">\n          <v-button type=\"submit\" primary @click=\"validFun\">确定</v-button>\n          <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n        </form-item>\n      </v-form>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n纵向排列\n<v-form action=\"aaa.do\" method=\"post\">\n  <form-item required label=\"姓名：\" :valid-status=\"form1.nameStatus\" label-col=\"4\" has-icon :tips=\"form1.nameTips\">\n    <v-input type=\"text\" placeholder=\"请输入您的姓名\"  :value.sync=\"username\" required required-tips=\"用户名为必填项\" maxlength=\"12\" minlength=\"2\" minlength-tips=\"用户名不能少于2个字符\" :valid-status.sync=\"form1.nameStatus\" :tips.sync=\"form1.nameTips\" :valid-result.sync=\"form1.nameValidResult\"></v-input>\n  </form-item>\n  <form-item required label=\"电话：\" :valid-status=\"form1.telStatus\" label-col=\"4\" has-icon tips=\"form1.telTips\">\n    <v-input type=\"text\" placeholder=\"请输入您的电话号码\" :valid-status.sync=\"form1.telStatus\" :value.sync=\"tel\"></v-input>\n  </form-item>\n  <form-item required label=\"性别\" label-col=\"4\">\n    <label><input type=\"checkbox\" name=\"sexy\" checked />男</label>\n    <label><input type=\"checkbox\" name=\"sexy\" />女</label>\n  </form-item>\n  <form-item required label=\"行业：\" label-col=\"4\">\n    <v-select :default-value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n  </form-item>\n  <form-item label-col=\"4\">\n    <v-button type=\"submit\" primary @click=\"validFun\">确定</v-button>\n    <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n  </form-item>\n</v-form>\n横向排列\n<v-form action=\"aaa.do\" method=\"post\">\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"联系人电话：\" :valid-status=\"telStatus\" item-col=\"8\" label-col=\"10\" has-icon tips=\"123\">\n    <v-input type=\"text\" placeholder=\"电话号码\" :valid-status=\"telStatus\" :value.sync=\"tel\" @click=\"clickFun\"></v-input>\n  </form-item>\n  <form-item required label=\"应用名/网站名：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"若还未上线可填无\"></v-input>\n  </form-item>\n  <form-item required label=\"行业：\" item-col=\"8\" label-col=\"10\">\n    <v-select :value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n  </form-item>\n  <form-item required label=\"电话号码：\" item-col=\"8\" label-col=\"10\">\n    <v-input placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"电话号码：\" valid-status=\"error\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n    <v-input valid-status=\"error\" placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"电话号码：\" valid-status=\"success\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n    <v-input valid-status=\"success\" placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label-col=\"0\">\n    <label><input type=\"checkbox\" />阅读并接受《用户协议》</label>\n  </form-item>\n  <form-item required label-col=\"4\">\n    <v-button type=\"submit\" primary @click=\"validFun\">确定</v-button>\n    <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n  </form-item>\n</v-form>\n    </script></code></pre>\n    </script>\n    </code>\n    <h4>FormItem组件参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>item-col</td>\n          <td><code>String</code></td>\n          <td><code>24</code></td>\n          <td>以24格为准，当前FormItem组件占的栅格列数</td>\n        </tr>\n        <tr>\n          <td>label</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>label域文案</td>\n        </tr>\n        <tr>\n          <td>label-col</td>\n          <td><code>String</code></td>\n          <td><code>7</code></td>\n          <td>以当前的FormItem组件为准，label域占的列数</td>\n        </tr>\n        <tr>\n          <td>wrapper-col</td>\n          <td></td>\n          <td><code>24-（label-col属性值）</code></td>\n          <td>以当前的FormItem组件为准，非label域占的列数</td>\n        </tr>\n        <tr>\n          <td>required</td>\n          <td></td>\n          <td></td>\n          <td>是否是必填项，配置后，会在label文案前加’*‘标识</td>\n        </tr>\n        <tr>\n          <td>tips</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>各种状态下的提示文案</td>\n        </tr>\n        <tr>\n          <td>valid-status</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>当前验证状态，有空,success,warning,error,validating</td>\n        </tr>\n        <tr>\n          <td>has-icon</td>\n          <td></td>\n          <td></td>\n          <td>配合validateStatus属性使用，是否展示校验状态图标</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(366)
	__vue_script__ = __webpack_require__(367)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/switchDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(368)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 366 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 367 */
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
	    changeHandler: function changeHandler(switcher) {
	      this.checked = switcher.checked;
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
	//             <td><v-switch small checked @change="changeHandler"></v-switch>
	//             </td>
	//             <td><v-switch small disabled></v-switch></td>
	//           </tr>
	//           <tr>
	//             <td><v-switch></v-switch></td>
	//             <td><v-switch checked @change="changeHandler"></v-switch></td>
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
	// <v-switch small checked @change="changeHandler"></v-switch>
	// <v-switch small disabled></v-switch>
	// <v-switch></v-switch>
	// <v-switch checked @change="changeHandler"></v-switch>
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
	//   <table class="atui-table table-bordered">
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
	//         <td>value</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td>switch的值</td>
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
	//         <td>@change</td>
	//         <td><code>Function(switcher)</code></td>
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
/* 368 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"switch\">\n    <h3 class=\"page-header\"><a href=\"#switch\" class=\"anchor\">Switch 开关</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\" >基本类型</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <th>关</th>\n            <th>开</th>\n            <th>禁用</th>\n          </tr>\n          <tr>\n            <td><v-switch small color=\"#000\"></v-switch></td>\n            <td><v-switch small checked @change=\"changeHandler\"></v-switch>\n            </td>\n            <td><v-switch small disabled></v-switch></td>\n          </tr>\n          <tr>\n            <td><v-switch></v-switch></td>\n            <td><v-switch checked @change=\"changeHandler\"></v-switch></td>\n            <td><v-switch disabled></v-switch></td>\n          </tr>\n        </table>\n\n      <h4 class=\"example-title\">带文字形式</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <td><v-switch>\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch></td>\n            <td><v-switch :disabled=\"disabled\" checked>\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch>\n        </td>\n            <td><v-switch :disabled=\"disabled\">\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch>\n        </td>\n          </tr>\n        </table>\n        <h4 class=\"example-title\">带图标形式</h4>\n        <table class=\"switchDocs-demo-table\">\n            <tr>\n              <td>\n                <v-switch>\n                  <span slot=\"checkedPart\"><v-icon type=\"tick\" size=\"16\"></v-icon></span>\n                  <span slot=\"unCheckedPart\"><v-icon type=\"close\" size=\"12\"></v-icon></span>\n                </v-switch>\n              </td>\n            </tr>\n        </table>\n\n        <v-button large primary value=\"toggle disabled\" @click=\"_clickHandler\"></v-button>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-switch small color=\"#000\"></v-switch>\n<v-switch small checked @change=\"changeHandler\"></v-switch>\n<v-switch small disabled></v-switch>\n<v-switch></v-switch>\n<v-switch checked @change=\"changeHandler\"></v-switch>\n<v-switch disabled></v-switch>\n<v-switch>\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch :disabled=\"disabled\" checked>\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch :disabled=\"disabled\">\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch>\n  <span slot=\"checkedPart\"><v-icon type=\"tick\" size=\"16\"></v-icon></span>\n  <span slot=\"unCheckedPart\"><v-icon type=\"close\" size=\"12\"></v-icon></span>\n</v-switch>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>checked</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否选中</td>\n      </tr>\n      <tr>\n        <td>value</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>switch的值</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否禁用</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td><code>String</code></td>\n        <td>#00a0ff</td>\n        <td>switch的颜色</td>\n      </tr>\n      <tr>\n        <td>@change</td>\n        <td><code>Function(switcher)</code></td>\n        <td></td>\n        <td>状态变化后的回调函数，返回参数为当前checked（boolean）</td>\n      </tr>\n      <tr>\n        <td>slot::checkedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>选中时的内容</td>\n      </tr>\n      <tr>\n        <td>slot::unCheckedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>没选中时的内容</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(370)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/sliderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(371)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var VCol = _src.Layout.Col; // <template>
	//   <div class="bs-docs-section" id="slider">
	//     <h3 class="page-header"><a href="#slider" class="anchor">slider 滑动型输入器</a></h3>
	//     <div class="bs-example">
	//       <h4>basic</h4>
	//       <slider :value="30"></slider>
	//       <br><br>
	//       <slider :value="[20,50]"></slider>
	//       <br><br>
	//       <slider :value="[20,50]" disabled></slider>
	//       <br><br>
	//       <h4>带有输入框的滑块</h4>
	//       <v-row>
	//         <v-col span="14">
	//           <slider :value.sync="sliderValue"></slider>
	//         </v-col>
	//         <v-col span="10">
	//           <v-input type="text" :value.sync="sliderValue"></v-input>
	//         </v-col>
	//       </v-row>
	//       <h4>有取值区间的滑块</h4>
	//       <slider :value="1" :min="1" :max="21"></slider>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// basic
	// <slider :value="30"></slider>
	// <slider :value="[20,50]"></slider>
	// <slider :value="[20,50]" disabled></slider>
	// 带有输入框的滑块
	// <v-row>
	//   <v-col span="14">
	//     <slider :value.sync="sliderValue"></slider>
	//   </v-col>
	//   <v-col span="10">
	//     <v-input type="text" :value.sync="sliderValue"></v-input>
	//   </v-col>
	// </v-row>
	// 有取值区间的滑块
	// <slider :value="1" :min="1" :max="21"></slider>
	//   </script></code></pre>
	//     <table class="atui-table table-bordered">
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
	//           <td><code>'slider' + new Date().getTime()</code></td>
	//           <td>滑块组件Id</td>
	//         </tr>
	//         <tr>
	//           <td>value</td>
	//           <td><code>String、Number、Array</code></td>
	//           <td><code>0</code></td>
	//           <td>默认值，类型为数字、数字型字符串、数字型数组、数字型数组字符串四种。<br>eg: 值为1或者'1'，表现为单滑块，终点是1，可更改位置；<br>eg: 值为[5,10]或者['5','10']，表现为双滑块，滑块起点和终点分别是5、10，并且位置都可更改</td>
	//         </tr>
	//         <tr>
	//           <td>disabled</td>
	//           <td></td>
	//           <td></td>
	//           <td>配置该属性后，滑块被禁用</td>
	//         </tr>
	//         <tr>
	//           <td>min</td>
	//           <td><code>String、Number</code></td>
	//           <td><code>0</code></td>
	//           <td>滑块位置取值区间最小值</td>
	//         </tr>
	//         <tr>
	//           <td>max</td>
	//           <td><code>String、Number</code></td>
	//           <td><code>100</code></td>
	//           <td>滑块位置取值区间最大值</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>
	
	var VRow = _src.Layout.Row;
	var VInput = _src.Input;
	
	exports.default = {
	  components: {
	    Slider: _src.Slider,
	    VCol: VCol,
	    VRow: VRow,
	    VInput: VInput
	  },
	
	  data: function data() {
	    return {
	      sliderValue: 1
	    };
	  },
	
	
	  watch: {
	    sliderValue: function sliderValue(val) {
	      console.log('滑动后的值是：' + val);
	    }
	  },
	
	  events: {
	    'slider:onChange': function sliderOnChange(mod, values) {
	      console.log('onChange');
	      console.log(values);
	    },
	    'slider:onAfterChange': function sliderOnAfterChange(mod, values) {
	      console.log('onAfterChange');
	      console.log(values);
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 371 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"slider\">\n    <h3 class=\"page-header\"><a href=\"#slider\" class=\"anchor\">slider 滑动型输入器</a></h3>\n    <div class=\"bs-example\">\n      <h4>basic</h4>\n      <slider :value=\"30\"></slider>\n      <br><br>\n      <slider :value=\"[20,50]\"></slider>\n      <br><br>\n      <slider :value=\"[20,50]\" disabled></slider>\n      <br><br>\n      <h4>带有输入框的滑块</h4>\n      <v-row>\n        <v-col span=\"14\">\n          <slider :value.sync=\"sliderValue\"></slider>\n        </v-col>\n        <v-col span=\"10\">\n          <v-input type=\"text\" :value.sync=\"sliderValue\"></v-input>\n        </v-col>\n      </v-row>\n      <h4>有取值区间的滑块</h4>\n      <slider :value=\"1\" :min=\"1\" :max=\"21\"></slider>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\nbasic\n<slider :value=\"30\"></slider>\n<slider :value=\"[20,50]\"></slider>\n<slider :value=\"[20,50]\" disabled></slider>\n带有输入框的滑块\n<v-row>\n  <v-col span=\"14\">\n    <slider :value.sync=\"sliderValue\"></slider>\n  </v-col>\n  <v-col span=\"10\">\n    <v-input type=\"text\" :value.sync=\"sliderValue\"></v-input>\n  </v-col>\n</v-row>\n有取值区间的滑块\n<slider :value=\"1\" :min=\"1\" :max=\"21\"></slider>\n  </script></code></pre>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>id</td>\n          <td><code>String</code></td>\n          <td><code>'slider' + new Date().getTime()</code></td>\n          <td>滑块组件Id</td>\n        </tr>\n        <tr>\n          <td>value</td>\n          <td><code>String、Number、Array</code></td>\n          <td><code>0</code></td>\n          <td>默认值，类型为数字、数字型字符串、数字型数组、数字型数组字符串四种。<br>eg: 值为1或者'1'，表现为单滑块，终点是1，可更改位置；<br>eg: 值为[5,10]或者['5','10']，表现为双滑块，滑块起点和终点分别是5、10，并且位置都可更改</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>配置该属性后，滑块被禁用</td>\n        </tr>\n        <tr>\n          <td>min</td>\n          <td><code>String、Number</code></td>\n          <td><code>0</code></td>\n          <td>滑块位置取值区间最小值</td>\n        </tr>\n        <tr>\n          <td>max</td>\n          <td><code>String、Number</code></td>\n          <td><code>100</code></td>\n          <td>滑块位置取值区间最大值</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(373)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/dropdownDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(374)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 373 */
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
	//     <table class="atui-table table-bordered">
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
/* 374 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"dropdown\">\n    <h3 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown 下拉框</a></h3>\n    <div class=\"bs-example\">\n      <dropdown>\n        <div data-toggle=\"dropdown\">\n          点击显示菜单\n          <span class=\"caret\"></span>\n        </div>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a>选项一</a></li>\n          <li><a>选项二</a></li>\n          <li><a>选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"dropdown\">\n          点击显示菜单 <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a>选项一</a></li>\n          <li><a>选项二</a></li>\n          <li><a>选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\n          点击显示菜单 <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown trigger=\"hover\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n          鼠标移上来显示 <span class=\"caret\"></span>\n        </a>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<dropdown>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n    点击显示菜单\n    <span class=\"caret\"></span>\n  </button>\n  <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n    <li><a href=\"#\">选项一</a></li>\n    <li><a href=\"#\">选项二</a></li>\n    <li><a href=\"#\">选项三</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">其它</a></li>\n  </ul>\n</dropdown>\n</script></code></pre>\n\n\n<h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>trigger</td>\n          <td><code>String</code></td>\n          <td><code>click</code> one of <code>click</code> <code>hover</code></td>\n          <td>触发类型</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(376)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/selectDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(377)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 376 */
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
	//         <pre>
	//         选中值 : {{single}}
	//         </pre>
	//       <v-select :value="single" :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
	//         <v-option value="Apple">苹果</v-option>
	//         <v-option value="Banana" disabled>Banana</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">OrangeText</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//         <v-option value="agg">鸡蛋</v-option>
	//         <v-option value="芒果">芒果</v-option>
	//       </v-select>
	//       <hr>
	//       <h4>多选下拉(只能选已有的)</h4>
	//
	//       <v-select multiple @change="onSlectChange">
	//         <v-option value="Apple">苹果</v-option>
	//         <v-option value="Banana">香蕉</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">Orange</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//
	//       <hr>
	//       <h4>tags(输入回车时变成一个tag)</h4>
	//       选中值 : {{tagValues | json}} <br/>
	//       <v-select tags :value="Banana" @change="onTagChange">
	//         <v-option value="Apple">苹果</v-option>
	//         <v-option value="Banana">香蕉</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">Orange</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//       <hr />
	//
	//
	//       <h4>下拉出自定义类容</h4>
	//       <v-select placeholder="选择类别" style="width:200px;">
	//       <v-option>
	//         <tabs>
	//           <tab header="系统短信签名"></tab>
	//           <tab header="系统短信签名"></tab>
	//           <tab header="系统短信签名"></tab>
	//         </tabs>
	//       </v-option>
	//       </v-select>
	//
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <pre>
	//   选中值 : {{single}}
	//   </pre>
	// <v-select :value="single" :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
	//   <v-option value="Apple">苹果</v-option>
	//   <v-option value="Banana" disabled>Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">OrangeText</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr>
	// <h4>多选下拉(只能选已有的)</h4>
	//
	// <v-select multiple @change="onSlectChange">
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana">Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	//
	// <hr>
	// <h4>tags(输入回车时变成一个tag)</h4>
	//
	// <v-select tags :value="Banana">
	//   <v-option value="Apple">Apple</v-option>
	//   <v-option value="Banana">Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr />
	//
	//
	// <h4>下拉出自定义类容</h4>
	// <v-select placeholder="选择类别" style="width:200px;">
	// <v-option>
	//   <tabs>
	//     <tab header="系统短信签名"></tab>
	//     <tab header="系统短信签名"></tab>
	//     <tab header="系统短信签名"></tab>
	//   </tabs>
	// </v-option>
	// </v-select>
	//
	// </script></code></pre>
	//
	//     <h2>Select 选项</h2>
	//     <table class="atui-table table-bordered">
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
	      placeholder: '请选择一个水果',
	      single: 'Apple',
	      tagValues: []
	    };
	  },
	
	  methods: {
	    onSlectChange: function onSlectChange(option) {
	      this.single = option.value;
	      console.log(option);
	    },
	    onTagChange: function onTagChange(values) {
	      this.tagValues = values;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 377 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"select\">\n    <h3 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select 下拉框</a></h3>\n    <div class=\"bs-example\">\n        <pre>\n        选中值 : {{single}}\n        </pre>\n      <v-select :value=\"single\" :placeholder=\"placeholder\" style=\"width:200px;\" @change=\"onSlectChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\" disabled>Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">OrangeText</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n        <v-option value=\"agg\">鸡蛋</v-option>\n        <v-option value=\"芒果\">芒果</v-option>\n      </v-select>\n      <hr>\n      <h4>多选下拉(只能选已有的)</h4>\n\n      <v-select multiple @change=\"onSlectChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\">香蕉</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n\n      <hr>\n      <h4>tags(输入回车时变成一个tag)</h4>\n      选中值 : {{tagValues | json}} <br/>\n      <v-select tags :value=\"Banana\" @change=\"onTagChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\">香蕉</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr />\n\n\n      <h4>下拉出自定义类容</h4>\n      <v-select placeholder=\"选择类别\" style=\"width:200px;\">\n      <v-option>\n        <tabs>\n          <tab header=\"系统短信签名\"></tab>\n          <tab header=\"系统短信签名\"></tab>\n          <tab header=\"系统短信签名\"></tab>\n        </tabs>\n      </v-option>\n      </v-select>\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<pre>\n  选中值 : {{single}}\n  </pre>\n<v-select :value=\"single\" :placeholder=\"placeholder\" style=\"width:200px;\" @change=\"onSlectChange\">\n  <v-option value=\"Apple\">苹果</v-option>\n  <v-option value=\"Banana\" disabled>Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">OrangeText</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr>\n<h4>多选下拉(只能选已有的)</h4>\n\n<v-select multiple @change=\"onSlectChange\">\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\">Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n\n<hr>\n<h4>tags(输入回车时变成一个tag)</h4>\n\n<v-select tags :value=\"Banana\">\n  <v-option value=\"Apple\">Apple</v-option>\n  <v-option value=\"Banana\">Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr />\n\n\n<h4>下拉出自定义类容</h4>\n<v-select placeholder=\"选择类别\" style=\"width:200px;\">\n<v-option>\n  <tabs>\n    <tab header=\"系统短信签名\"></tab>\n    <tab header=\"系统短信签名\"></tab>\n    <tab header=\"系统短信签名\"></tab>\n  </tabs>\n</v-option>\n</v-select>\n\n</script></code></pre>\n\n    <h2>Select 选项</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array/String</code></td>\n          <td><code>[]</code></td>\n          <td>默认要选中的值，如果是多选框可以设置数组</td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>请选择</td>\n          <td>默认选择提示</td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否多选</td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>onchange</td>\n          <td><code>Function</code></td>\n          <td><code></code></td>\n          <td>选中项发生变化时触发</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n";

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(379)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/calendarDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(380)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
	var Option = _src.Select.Option; // <template>
	//   <div class="bs-docs-section" id="calendar">
	//     <h1 class="page-header"><a href="#calendar" class="anchor">Calendar 日历</a></h1>
	//     <div class="bs-example">
	//       <p>
	//         <pre>
	// 选择日期是: {{new Date(value).toString().slice(0, -23)}}
	//         </pre>
	//       </p>
	//       <calendar v-ref:calendar :value.sync="value" :disabled-date="disabledDate"
	//       :format="format.toString()" :show-reset-button="reset" @change="selectChange"></calendar>
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
	//
	//
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	//     </script></code></pre>
	//     <h2>Option</h2>
	//     <table class="atui-table table-bordered">
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
	
	
	exports.default = {
	  components: {
	    Calendar: _src.Calendar,
	    vSelect: _src.Select,
	    vOption: Option
	  },
	  data: function data() {
	    return {
	      disabled: [],
	      value: '11/06/2015',
	      format: ['MMM/dd/yyyy'],
	      disabledDate: function disabledDate(date) {
	        if (!date) {
	          return false;
	        }
	        return date.getTime() >= new Date(2015, 11, 17).getTime();
	      }
	    };
	  },
	
	  watch: {
	    value: function value(val) {
	      console.log(val);
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
/* 380 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"calendar\">\n    <h1 class=\"page-header\"><a href=\"#calendar\" class=\"anchor\">Calendar 日历</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\n选择日期是: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <calendar v-ref:calendar :value.sync=\"value\" :disabled-date=\"disabledDate\"\n      :format=\"format.toString()\" :show-reset-button=\"reset\" @change=\"selectChange\"></calendar>\n\n      <h4>格式化</h4>\n      <v-select :default-value.sync=\"format\" >\n        <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n        <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n        <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n        <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n        <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n      </v-select>\n\n\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n    </script></code></pre>\n    <h2>Option</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入框里的默认值</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>输入框的宽度</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>禁用一周的某一天. 按 0 到 6 .\n             禁用多天可用<code>逗号</code>分隔</td>\n        </tr>\n        <tr>\n          <td>showResetButton</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>是否显示清除日期按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(382)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/datepickerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(383)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 382 */
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
	//       <date-picker v-ref:dp
	//       :format="format.toString()" @change="selectChange"></date-picker>
	//
	//       <date-picker disabled :format="format" @change="selectChange"></date-picker>
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
	//       <h4>日期范围选择（rangePicker）</h4>
	//
	//       <range-picker @change="rangePickerChange"></range-picker>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <date-picker v-ref:dp :value.sync="value" :format="format.toString()" @change="selectChange"></date-picker>
	// <h4>日期范围选择（rangePicker）</h4>
	//
	// import {DatePicker,Select} from 'src/'
	// const RangePicker = DatePicker.RangePicker
	//
	// <range-picker></range-picker>
	// </script></code></pre>
	//     <h2>Option</h2>
	//     <table class="atui-table table-bordered">
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
	    }
	  },
	  // format(newV) {
	  //   this.value = this.$refs.dp.stringify(new Date(this.value))
	  // }
	  methods: {
	    selectChange: function selectChange(value) {
	      alert(value);
	    },
	    rangePickerChange: function rangePickerChange(start, end) {
	      console.log('rangepicker', start, end);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 383 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"datepicker\">\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">DatePicker 日期选择</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\n选择日期是: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <date-picker v-ref:dp\n      :format=\"format.toString()\" @change=\"selectChange\"></date-picker>\n\n      <date-picker disabled :format=\"format\" @change=\"selectChange\"></date-picker>\n\n      <h4>格式化</h4>\n      <v-select :value.sync=\"format\" >\n        <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n        <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n        <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n        <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n        <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n      </v-select>\n\n      <h4>日期范围选择（rangePicker）</h4>\n\n      <range-picker @change=\"rangePickerChange\"></range-picker>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<date-picker v-ref:dp :value.sync=\"value\" :format=\"format.toString()\" @change=\"selectChange\"></date-picker>\n<h4>日期范围选择（rangePicker）</h4>\n\nimport {DatePicker,Select} from 'src/'\nconst RangePicker = DatePicker.RangePicker\n\n<range-picker></range-picker>\n</script></code></pre>\n    <h2>Option</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入框里的默认值</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>输入框的宽度</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>禁用一周的某一天. 按 0 到 6 .\n             禁用多天可用<code>逗号</code>分隔</td>\n        </tr>\n        <tr>\n          <td>showResetButton</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>是否显示清除日期按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(385)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/searchboxDocs.vue: named exports in *.vue files are ignored.")}
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
	
	exports.default = {
	  components: {
	    Searchbox: _src.Searchbox,
	    Message: _src.Message
	  },
	  data: function data() {
	    return {
	      defaultVal: '果',
	      searchList: [{ name: '水果', value: '1' }, { name: '苹果', value: '2' }, { name: '香蕉', value: '3' }, { name: '人参果', value: '4' }, { name: '草莓', value: '5' }, { name: '芒果', value: '6' }, { name: '干果', value: '11' }, { name: '碧根果', value: '12' }, { name: '腰果', value: '13' }, { name: '核桃', value: '14' }, { name: '杏仁', value: '15' }, { name: '素材', value: '21' }, { name: '香菜', value: '22' }]
	    };
	  },
	
	  watch: {
	    defaultVal: function defaultVal(newVal, oldVal) {
	      _src.Message.info(newVal);
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
	//     <table class="atui-table table-bordered">
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
/* 386 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"searchbox\">\n    <h3 class=\"page-header\"><a href=\"#searchbox\" class=\"anchor\">Searchbox 搜索框</a></h3>\n    <div class=\"bs-example\">\n      <searchbox placeholder=\"请输入关键词搜索\" :value.sync=\"defaultVal\" :search-list=\"searchList\" text-field=\"name\"></searchbox>\n      <searchbox placeholder=\"请输入关键词搜索\"></searchbox>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<searchbox placeholder=\"请输入关键词搜索\" :value.sync=\"defaultVal\" :search-list=\"searchList\" text-field=\"name\"></searchbox>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>搜索框预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>搜索框默认值</td>\n        </tr>\n        <tr>\n          <td>search-list</td>\n          <td><code>Array</code>或<code>Object</code></td>\n          <td><code>数组素组</code></td>\n          <td>搜索列表</td>\n        </tr>\n        <tr>\n          <td>text-filed</td>\n          <td><code>String</code></td>\n          <td><code>name</code></td>\n          <td>下拉列表中显示的是列表的哪个字段</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(388)
	__vue_script__ = __webpack_require__(390)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/messageDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(391)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(389);
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
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.message-icon-float-left {\n  font-size:32px;float:left;margin-right:5px;\n}\n", ""]);
	
	// exports


/***/ },
/* 390 */
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
	      _src.Message['success']('成功啦', 3000, 'center');
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
	//         全局toast，使用message.xx方法
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
	//   全局toast，使用message.xx方法
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
	//         Message.success('成功啦')
	//       }
	//     }
	//   }
	// </script></code></pre>
	//
	//     <h2>Options</h2>
	//     <table class="atui-table table-bordered">
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
/* 391 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"message\">\n    <h3 class=\"page-header\">\n      <a href=\"#message\" class=\"anchor\">Message 警告提示</a>\n    </h3>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        点击在右边显示或隐藏\n      </button>\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showMessage\">\n        全局toast，使用message.xx方法\n      </button>\n      <button class=\"btn btn-default btn-lg\"\n        @click=\"showCenter = !showCenter\">\n        点击在中间显示或隐藏\n      </button>\n      <button class=\"btn btn-error btn-lg\"\n        @click=\"showTop = !showTop\">\n        点击在顶部显示或隐藏\n      </button>\n      <hr>\n      <message type=\"success\" >\n        成功提示的文案\n      </message>\n\n      <message type=\"info\" >\n        消息提示的文案\n      </message>\n\n      <message type=\"error\" dismissable>\n        错误提示的文案,可关闭\n      </message>\n\n      <message type=\"warning\" dismissable>\n        警告提示的文案,可关闭\n      </message>\n\n      <message type=\"help\" dismissable>\n        帮助提示文案,可关闭\n      </message>\n\n      <message\n        :show.sync=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        在右边显示的警告\n      </message>\n\n      <message\n        :show.sync=\"showCenter\"\n        duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"center\"\n        dismissable>\n        在中间显示的警告\n      </message>\n\n      <message\n        :show.sync=\"showTop\"\n        :duration=\"3000\"\n        type=\"error\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        在顶部显示的警告\n      </message>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-success btn-lg\"\n  @click=\"showRight = !showRight\">\n  点击在右边显示或隐藏\n</button>\n<button class=\"btn btn-success btn-lg\"\n  @click=\"showMessage\">\n  全局toast，使用message.xx方法\n</button>\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showCenter = !showCenter\">\n  点击在中间显示或隐藏\n</button>\n<button class=\"btn btn-error btn-lg\"\n  @click=\"showTop = !showTop\">\n  点击在顶部显示或隐藏\n</button>\n<hr>\n<message type=\"success\" >\n  成功提示的文案\n</message>\n\n<message type=\"info\" >\n  消息提示的文案\n</message>\n\n<message type=\"error\" dismissable>\n  错误提示的文案,可关闭\n</message>\n\n<message type=\"warning\" dismissable>\n  警告提示的文案,可关闭\n</message>\n\n<message type=\"help\" dismissable>\n  帮助提示文案,可关闭\n</message>\n\n<message\n  :show.sync=\"showRight\"\n  :duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable\n>\n  在右边显示的警告\n</message>\n\n<message\n  :show.sync=\"showCenter\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"center\"\n  dismissable>\n  在中间显示的警告\n</message>\n\n<message\n  :show.sync=\"showTop\"\n  :duration=\"3000\"\n  type=\"error\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  在顶部显示的警告\n</message>\n\nimport {Message} from '@ali/atui'\n  export default {\n    data() {\n      return {\n        showRight: false,\n        showTop: false,\n        showCenter:false\n      }\n    },\n    components: {\n      Message,\n    },\n    methods:{\n      showMessage() {\n        Message.success('成功啦')\n      }\n    }\n  }\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否显示关闭按钮</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code>\n          <code>help</code>\n          </td>\n          <td><code>success</code></td>\n          <td>组件样式</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>自动关闭时间. 设置为 <code>0</code>或负数将不自动关闭.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>组件的位置</td>\n        </tr>\n        <tr>\n          <td>showIcon</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示相应的ICON</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(393)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/cascaderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(394)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 393 */
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
	//   <table class="atui-table table-bordered">
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
/* 394 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"cascader\">\n    <h3 class=\"page-header\"><a href=\"#cascader\" class=\"anchor\">Cascader 级联选择</a></h3>\n    <div class=\"bs-example\">\n      <cascader :options=\"options\" @change=\"selectChange\" :default-value=\"defaultValue\"></cascader>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<cascader :options=\"options\" @change=\"selectChange\" :default-value=\"defaultValue\"></cascader>\n\nconst options = [{\n    value: 'zhejiang',\n    label: '浙江',\n    children: [{\n      value: 'hangzhou',\n      label: '杭州',\n      children: [{\n        value: 'xihu',\n        label: '西湖',\n      }],\n    }],\n  }, {\n    value: 'jiangsu',\n    label: '江苏',\n    children: [{\n      value: 'nanjing',\n      label: '南京',\n      children: [{\n        value: 'zhonghuamen',\n        label: '中华门',\n      }],\n    }],\n  }]\n\n  const defaultValue = ['zhejiang', 'hangzhou', 'xihu']\n\n  import {Cascader} from 'src/'\n  export default {\n    components: {\n      Cascader\n    },\n    data() {\n      return {\n        options:options,\n        defaultValue:defaultValue\n      }\n    },\n    methods:{\n      selectChange(selectedValue, option) {\n        alert(selectedValue)\n      }\n    }\n  }\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>options</td>\n        <td><code>Array</code></td>\n        <td><code>[]</code></td>\n        <td>要绑定的数据源</td>\n      </tr>\n      <tr>\n        <td>defaultValue</td>\n        <td><code>Array</code></td>\n        <td><code>[]</code></td>\n        <td>默认选中的值.</td>\n      </tr>\n      <tr>\n        <td>change</td>\n        <td><code>Function</code></td>\n        <td><code>function(selectedValue, option) {}</code></td>\n        <td>选择到最后一项触发的change事件\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(396)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/modalDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(397)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 396 */
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
	//       <modal title="Modal title" :show.sync="showModal" backdrop="false" style="position:absolute">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal <b>标题</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//       <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
	//       <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800px">
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//       <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
	//       <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400px">
	//         <div slot="modal-header"></div>
	//         <div slot="modal-body" class="modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//       <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
	//       <modal :show.sync="showCustomModal" effect="fade" width="90%" height="90%">
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
	//       <modal title="Large Modal" :show.sync="largeModal" large height="500px">
	//         <div slot="modal-body" class="modal-body">
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
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
	//   <table class="atui-table table-bordered">
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
/* 397 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"modal\">\n    <h3 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal 对话框</a></h3>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default\" @click=\"showModal = true\">显示弹窗</button>\n      <modal title=\"Modal title\" :show.sync=\"showModal\" backdrop=\"false\" style=\"position:absolute\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>标题</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800px\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400px\">\n        <div slot=\"modal-header\"></div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"90%\" height=\"90%\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large height=\"500px\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n        </div>\n      </modal>\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">小弹窗</button>\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n\n      <button @click=\"showConfirm\">使用程序直接弹出confirm</button>\n      <button @click=\"showError\">使用程序直接弹出error</button>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default\"\n  @click=\"showModal = true\"\n  >显示弹窗\n</button>\n<modal :show.sync=\"showModal\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-primary\"\n  @click=\"fadeModal = true\">\n  Fade modal\n</button>\n<modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-success\"\n  @click=\"zoomModal = true\">\n  Zoom modal\n</button>\n<modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-default\"\n  @click=\"showCustomModal = true\">\n  Show custom modal\n</button>\n<modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"400\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n  <div slot=\"modal-footer\" class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"largeModal = true\"\n  >Large Modal\n</button>\n<modal :show.sync=\"largeModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"smallModal = true\"\n  >Small Modal\n</button>\n<modal :show.sync=\"smallModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number, String or null</code></td>\n        <td><code>null</code></td>\n        <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>当点击主要按钮时触发的回调.</td>\n      </tr>\n      <tr>\n        <td>large</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>大的弹窗</td>\n      </tr>\n      <tr>\n        <td>small</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>小的弹窗</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(399)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tableDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(400)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 399 */
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
	  },
	  width: 150
	}, {
	  title: '年龄',
	  dataIndex: 'age',
	  sorter: function sorter(a, b) {
	    return a.age - b.age;
	  },
	  render: function render(text, record, index) {
	    if (record) {
	      return '<input type="text" v-model="gridData[' + index + '].age"/>';
	    }
	  },
	
	  width: 250
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
	  width: 250,
	  onFilter: function onFilter(value, record) {
	    return record.address.indexOf(value) === 0;
	  }
	
	}, {
	  title: '操作',
	  key: 'operation',
	  render: function render(text, record) {
	    if (record) {
	      return '<icon type="info"></icon><a href="' + record.key + '.html" target="_blank">详情</a>';
	    }
	  }
	}]; // <template>
	//   <div class="bs-docs-section" id="table">
	//     <h3 class="page-header"><a href="#tabs" class="anchor">Table 表格</a></h3>
	//     <div class="bs-example">
	//     <row>
	//       <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size" fixed-header v-ref:grid></grid>
	//     </row>
	//     </div>
	//     <input type="button" @click="changeData" value="填充表格数据"/> <input type="button" @click="changeLoading" value="切换loading状态"/>
	//     <input type="button" @click="emptyData" value="清空数据"/>
	//     <input type="button" @click="changeSize" value="改变大小({{size}})"/>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size"></grid>
	//
	// <!--脚本-->
	// const columns = [{
	//     title: '姓名',
	//     dataIndex: 'name',
	//     filters: [{
	//       text: '姓李的的',
	//       value: '李',
	//     }, {
	//       text: '姓胡的',
	//       value: '胡',
	//     }],
	//     sorter:true,
	//     onFilter: (value, record) => record.name.indexOf(value) === 0,
	//     width:150
	//   }, {
	//     title: '年龄',
	//     dataIndex: 'age',
	//     sorter: (a, b) => a.age - b.age,
	//     render(text, record,index) {
	//       if(record) {
	//         return '<input type="text" v-model="gridData['+ index +'].age"/>'
	//       }
	//     },
	//     width:250
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
	//     width:250,
	//     onFilter: (value, record) => record.address.indexOf(value) === 0
	//
	//   },{
	//       title: '操作',
	//       key: 'operation',
	//       render(text, record) {
	//         if(record) {
	//           return '<icon type="info" /><a href="'+ record.key+'.html" target="_blank">详情</a>'
	//         }
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
	//   },
	//   {
	//     key: '5',
	//     name: '刘德华',
	//     age: 54,
	//     address: '西湖区湖底公园999号',
	//   },
	//   {
	//     key: '6',
	//     name: '洪金宝',
	//     age: 66,
	//     address: '香港弥敦道',
	//   }];
	//   // 配置选择数据的选项
	//   const rowSelection = {
	//     getCheckboxProps(record) {
	//       return {
	//         disabled: record.name === '胡彦祖'    // 配置无法勾选的列
	//       };
	//     },
	//     onChange(selectedRowKeys, selectedRows) {
	//       console.log('rowSelection.onChange',selectedRowKeys, selectedRows);
	//     },
	//     onSelect(record, selected, selectedRows) {
	//       console.log('rowSelection.onSelect',record, selected, selectedRows);
	//     },
	//     onSelectAll(selected, selectedRows, changeRows) {
	//       console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);
	//     }
	//   };
	//   export default {
	//     components: {
	//       Grid:VueComponent.Table,
	//       Icon,
	//       Row:Layout.Row
	//     },
	//     data() {
	//       return {
	//         size:'default',
	//         fixedHeader:false,
	//         loading:false,
	//         gridData:data,
	//         gridColumns: columns,
	//         rowSelection:rowSelection
	//       }
	//     },
	//     methods:{
	//       changeData() {
	//         this.gridData.push({
	//           key: Math.random(),
	//           name: '李秀莲大嘴哥',
	//           age: Math.random(),
	//           address: '西湖区湖底公园123号',
	//         })
	//       }
	//     }
	//   }
	//
	// </script></code></pre>
	//   <h3>Table 选项 </h3>
	//   <table class="atui-table table-bordered">
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
	//         <td></td>
	//         <td>要绑定的数据源</td>
	//       </tr>
	//       <tr>
	//         <td>size</td>
	//         <td><code>String</code></td>
	//         <td><code>default</code> 或 <code>middle</code> 或 <code>small</code></td>
	//         <td>表格大小</td>
	//       </tr>
	//        <tr>
	//         <td>fixed-header</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>是否固定头部（注意，固定头部必须指定每列宽度）</td>
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
	}, {
	  key: '5',
	  name: '刘德华',
	  age: 54,
	  address: '西湖区湖底公园999号'
	}, {
	  key: '6',
	  name: '洪金宝',
	  age: 66,
	  address: '香港弥敦道'
	}];
	var rowSelection = {
	  getCheckboxProps: function getCheckboxProps(record) {
	    return {
	      disabled: record.name === '胡彦祖' // 配置无法勾选的列
	    };
	  },
	  onChange: function onChange(selectedRowKeys, selectedRows) {
	    console.log('rowSelection.onChange', selectedRowKeys, selectedRows);
	  },
	  onSelect: function onSelect(record, selected, selectedRows) {
	    console.log('rowSelection.onSelect', record, selected, selectedRows);
	  },
	  onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	    console.log('rowSelection.onSelectAll', selected, selectedRows, changeRows);
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
	      size: 'default',
	      fixedHeader: false,
	      loading: false,
	      gridData: _data,
	      gridColumns: columns,
	      rowSelection: rowSelection
	    };
	  },
	
	  methods: {
	    changeData: function changeData() {
	      this.gridData.push({
	        key: Math.random(),
	        name: '李秀莲大嘴哥',
	        age: Math.random(),
	        address: '西湖区湖底公园123号'
	      });
	    },
	    emptyData: function emptyData() {
	      this.gridData = [];
	    },
	    onTableChange: function onTableChange(paging, filter, sorter) {
	      console.log('table-change', paging, filter, sorter);
	      var me = this;
	      var data = [];
	      // if(filter && filter.length) {
	      //   filter.forEach((item)=>{
	      //     data = me.gridData.filter((record)=>{
	      //       return record[item].indexOf(item)
	      //     })
	      //   })
	      // }
	      this.gridData = this.gridData.reverse();
	    },
	    changeLoading: function changeLoading() {
	      this.loading = !this.loading;
	    },
	    changeSize: function changeSize() {
	      this.size = "default" == this.size ? "middle" : "middle" == this.size ? "small" : "default";
	    },
	    changeFixed: function changeFixed() {
	      this.fixedHeader = !this.fixedHeader;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 400 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"table\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Table 表格</a></h3>\n    <div class=\"bs-example\">\n    <row>\n      <grid :data-source=\"gridData\" :columns=\"gridColumns\" :row-selection=\"rowSelection\" row-key=\"key\" @table-change=\"onTableChange\" :loading=\"loading\" :size=\"size\" fixed-header v-ref:grid></grid>\n    </row>\n    </div>\n    <input type=\"button\" @click=\"changeData\" value=\"填充表格数据\"/> <input type=\"button\" @click=\"changeLoading\" value=\"切换loading状态\"/>\n    <input type=\"button\" @click=\"emptyData\" value=\"清空数据\"/>\n    <input type=\"button\" @click=\"changeSize\" value=\"改变大小({{size}})\"/>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<grid :data-source=\"gridData\" :columns=\"gridColumns\" :row-selection=\"rowSelection\" row-key=\"key\" @table-change=\"onTableChange\" :loading=\"loading\" :size=\"size\"></grid>\n\n<!--脚本-->\nconst columns = [{\n    title: '姓名',\n    dataIndex: 'name',\n    filters: [{\n      text: '姓李的的',\n      value: '李',\n    }, {\n      text: '姓胡的',\n      value: '胡',\n    }],\n    sorter:true,\n    onFilter: (value, record) => record.name.indexOf(value) === 0,\n    width:150\n  }, {\n    title: '年龄',\n    dataIndex: 'age',\n    sorter: (a, b) => a.age - b.age,\n    render(text, record,index) {\n      if(record) {\n        return '<input type=\"text\" v-model=\"gridData['+ index +'].age\"/>'\n      }\n    },\n    width:250\n  }, {\n    title: '地址',\n    dataIndex: 'address',\n    filters: [{\n      text: '南湖',\n      value: '南湖',\n    }, {\n      text: '西湖',\n      value: '西湖',\n    }],\n    filterMultiple: false,\n    width:250,\n    onFilter: (value, record) => record.address.indexOf(value) === 0\n\n  },{\n      title: '操作',\n      key: 'operation',\n      render(text, record) {\n        if(record) {\n          return '<icon type=\"info\" /><a href=\"'+ record.key+'.html\" target=\"_blank\">详情</a>'\n        }\n      }\n    }\n  ];\n\n  const data = [{\n    key: '1',\n    name: '胡斌',\n    age: 32,\n    address: '南湖区湖底公园1号',\n  }, {\n    key: '2',\n    name: '胡彦祖',\n    age: 42,\n    address: '西湖区湖底公园12号',\n  }, {\n    key: '3',\n    name: '李大嘴',\n    age: 32,\n    address: '南湖区湖底公园123号',\n  }, {\n    key: '4',\n    name: '李秀莲大嘴哥',\n    age: 32,\n    address: '西湖区湖底公园123号',\n  },\n  {\n    key: '5',\n    name: '刘德华',\n    age: 54,\n    address: '西湖区湖底公园999号',\n  },\n  {\n    key: '6',\n    name: '洪金宝',\n    age: 66,\n    address: '香港弥敦道',\n  }];\n  // 配置选择数据的选项\n  const rowSelection = {\n    getCheckboxProps(record) {\n      return {\n        disabled: record.name === '胡彦祖'    // 配置无法勾选的列\n      };\n    },\n    onChange(selectedRowKeys, selectedRows) {\n      console.log('rowSelection.onChange',selectedRowKeys, selectedRows);\n    },\n    onSelect(record, selected, selectedRows) {\n      console.log('rowSelection.onSelect',record, selected, selectedRows);\n    },\n    onSelectAll(selected, selectedRows, changeRows) {\n      console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);\n    }\n  };\n  export default {\n    components: {\n      Grid:VueComponent.Table,\n      Icon,\n      Row:Layout.Row\n    },\n    data() {\n      return {\n        size:'default',\n        fixedHeader:false,\n        loading:false,\n        gridData:data,\n        gridColumns: columns,\n        rowSelection:rowSelection\n      }\n    },\n    methods:{\n      changeData() {\n        this.gridData.push({\n          key: Math.random(),\n          name: '李秀莲大嘴哥',\n          age: Math.random(),\n          address: '西湖区湖底公园123号',\n        })\n      }\n    }\n  }\n\n</script></code></pre>\n  <h3>Table 选项 </h3>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>名称</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>描述</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>data-srouce</td>\n        <td><code>Array</code></td>\n        <td></td>\n        <td>要绑定的数据源</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td><code>default</code> 或 <code>middle</code> 或 <code>small</code></td>\n        <td>表格大小</td>\n      </tr>\n       <tr>\n        <td>fixed-header</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>是否固定头部（注意，固定头部必须指定每列宽度）</td>\n      </tr>\n      <tr>\n        <td>row-selection</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否增加列checkbox选择</td>\n      </tr>\n      <tr>\n        <td>columns</td>\n        <td><code>Array</code></td>\n        <td>[]</td>\n        <td>表格列的配置描述</td>\n      </tr>\n      <tr>\n        <td>row-key</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>行选择时绑定的关键列名</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(402)
	__vue_script__ = __webpack_require__(403)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/badgeDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(404)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 402 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 403 */
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
	//         <a href="javascript:;" style="width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;"></a>
	//       </badge>
	//       <h4 class="example-title">大数字型</h4>
	//       <badge :count="99">
	//         <a href="javascript:;" style="width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;"></a>
	//       </badge>
	//
	//       <badge :count="1000" >
	//         <a href="javascript:;" style="width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;"></a>
	//       </badge>
	//       <h4 class="example-title">小红点型</h4>
	//         <badge :dot="true" >
	//           <a href="javascript:;" style="width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;"></a>
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
	//   <table class="atui-table table-bordered">
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
/* 404 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"badge\">\n    <h3 class=\"page-header\"><a href=\"#badge\" class=\"anchor\">Badge 徽标数</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基础型</h4>\n      <badge :count=\"6\">\n        <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n      </badge>\n      <h4 class=\"example-title\">大数字型</h4>\n      <badge :count=\"99\">\n        <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n      </badge>\n\n      <badge :count=\"1000\" >\n        <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n      </badge>\n      <h4 class=\"example-title\">小红点型</h4>\n        <badge :dot=\"true\" >\n          <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n        </badge>\n\n        <badge :dot=\"true\" >\n          <a href=\"javascript:;\" >这是一个文字链接</a>\n        </badge>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<badge :count=\"6\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"99\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"1000\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :dot=\"true\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :dot=\"true\">\n  <a href=\"javascript:;\" >这是一个文字链接</a>\n</badge>\n\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>count</td>\n        <td><code>Number</code></td>\n        <td></td>\n        <td>展示的数字，当大于99时展示99+</td>\n      </tr>\n      <tr>\n        <td>dot</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>展示的红点</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(406)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/carouselDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(407)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 406 */
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
	//   <table class="atui-table table-bordered">
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
/* 407 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"carousel\">\n    <h3 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel 走马灯</a></h3>\n    <div class=\"bs-example\">\n      <carousel indicators=\"true\" controls=\"true\">\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1Pq31KpXXXXbFXXXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1ih3pJXXXXXbZXVXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1fEtIKpXXXXbEXVXXXXXXXXXX-888-400.jpg\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<carousel>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slide>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slide>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slide>\n</carousel>\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(409)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 409 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container bs-docs-container\">\n  <div class=\"row\">\n      <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(411)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/spinDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(412)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 411 */
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
	//     <spin show size="small"></spin>
	//     <h4>普通加载</h4>
	//     <spin show></spin>
	//     <h4>大的加载</h4>
	//     <spin show size="large"></spin>
	//     <h4>隐藏的大的加载(默认不加show就不显示)</h4>
	//     <spin size="large"></spin>
	//     <h4>包裹要loading的元素</h4>
	//     <spin sping>
	//       <div>
	//         内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
	//         内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
	//       </div>
	//     </spin>
	//     </div>
	//
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <h4>小的加载</h4>
	// <spin show size="small"></spin>
	// <h4>普通加载</h4>
	// <spin show></spin>
	// <h4>大的加载</h4>
	// <spin show size="large"></spin>
	// <h4>隐藏的大的加载(默认不加show就不显示)</h4>
	// <spin size="large"></spin>
	// <h4>包裹要loading的元素</h4>
	// <spin sping>
	//   <div>
	//     内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
	//     内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
	//   </div>
	// </spin>
	// </script></code></pre>
	//
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 412 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"spin\">\n    <h3 class=\"page-header\"><a href=\"#spin\" class=\"anchor\">Spin 加载中</a></h3>\n    <div class=\"bs-example\">\n    <h4>小的加载</h4>\n    <spin show size=\"small\"></spin>\n    <h4>普通加载</h4>\n    <spin show></spin>\n    <h4>大的加载</h4>\n    <spin show size=\"large\"></spin>\n    <h4>隐藏的大的加载(默认不加show就不显示)</h4>\n    <spin size=\"large\"></spin>\n    <h4>包裹要loading的元素</h4>\n    <spin sping>\n      <div>\n        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n      </div>\n    </spin>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>小的加载</h4>\n<spin show size=\"small\"></spin>\n<h4>普通加载</h4>\n<spin show></spin>\n<h4>大的加载</h4>\n<spin show size=\"large\"></spin>\n<h4>隐藏的大的加载(默认不加show就不显示)</h4>\n<spin size=\"large\"></spin>\n<h4>包裹要loading的元素</h4>\n<spin sping>\n  <div>\n    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n  </div>\n</spin>\n</script></code></pre>\n\n  </div>\n";

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(414)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/textareaDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(415)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 414 */
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
	//     <table class="atui-table table-bordered">
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
/* 415 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"textarea\">\n    <h3 class=\"page-header\"><a href=\"#textarea\" class=\"anchor\">Textarea 文本域</a></h3>\n    <div class=\"bs-example\">\n    <h4>基础文本域</h4>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea disabled content=\"文本框被禁用了\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea error content=\"信息错误了\"></v-textarea>\n    </div>\n    <h4>统计输入字数文本域</h4>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息，有字数统计\" :words-count=\"true\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息\" :words-count=\"true\" count-tips=\"您输入的字数是：\"></v-textarea>\n    </div>\n    <h4>有字数限制文本域</h4>\n    <div>\n      <v-textarea :limit-words=\"50\" placeholder=\"这里只能输入50个字\" :error=\"validStatus == 'error'\" name=\"ruohuan\" v-ref:textarea-limit :content.sync=\"content\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea disabled :limit-words=\"10\" placeholder=\"这里只能输入10个字\"></v-textarea>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-textarea disabled :limit-words=\"10\" placeholder=\"这里只能输入10个字\"></v-textarea>\n<v-textarea placeholder=\"请输入描述信息\" :words-count=\"true\" count-tips=\"您输入的字数是：\"></v-textarea>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>content</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文本域内容</td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文本域预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，禁用</td>\n        </tr>\n       <tr>\n          <td>error</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，输入验证失败</td>\n        </tr>\n        <tr>\n          <td>success</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，输入验证成功</td>\n        </tr>\n        <tr>\n          <td>limit-words</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td>文本域限制字数</td>\n        </tr>\n        <tr>\n          <td>words-count</td>\n          <td><code>Boolean || 空</code></td>\n          <td></td>\n          <td>文本域字数统计功能</td>\n        </tr>\n        <tr>\n          <td>count-tips</td>\n          <td><code>String</code></td>\n          <td><code>输入字数：</code></td>\n          <td>文本域字数统计提示</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>";

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(417)
	__vue_script__ = __webpack_require__(418)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tagDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(419)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 417 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 418 */
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
	//   <table class="atui-table table-bordered">
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
/* 419 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tag\">\n    <h3 class=\"page-header\"><a href=\"#tag\" class=\"anchor\">Tag 标签</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本标签</h4>\n      <v-tag>标签一</v-tag>\n      <v-tag closable @close=\"closeTag\">标签（回调）</v-tag>\n      <v-tag :href=\"href\">标签（链接）</v-tag>\n      <h4 class=\"example-title\">三种颜色的标签</h4>\n      <v-tag color=\"green\">标签</v-tag>\n      <v-tag color=\"orange\" closable @close=\"closeTag\">标签</v-tag>\n      <v-tag color=\"red\" size=\"20\">标签</v-tag>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-tag>标签一</v-tag>\n<v-tag closable @close=\"closeTag\">标签（回调）</v-tag>\n<v-tag :href=\"href\">标签（链接）</v-tag>\n<v-tag color=\"green\">标签</v-tag>\n<v-tag color=\"orange\" closable @close=\"closeTag\">标签</v-tag>\n<v-tag color=\"red\" size=\"20\">标签</v-tag>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>closable</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>是否显示关闭按钮</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Tag的颜色，默认为#f2f2f2</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Tag的尺寸，默认为12px</td>\n      </tr>\n      <tr>\n        <td>href</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>给tag加上链接地址，作为一个超链接</td>\n      </tr>\n      <tr>\n        <td>on-close</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>点击关闭按钮之后所执行的回调函数</td>\n      </tr>\n\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(421)
	__vue_script__ = __webpack_require__(422)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tooltipDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(423)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 421 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 422 */
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
	//     <table class="atui-table table-bordered">
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
/* 423 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tooltip\">\n    <h3 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip 文字提示</a></h3>\n    <div class=\"bs-example\">\n      <table class=\"table-tooltip\" cellspacing=\"5\">\n        <tr>\n          <td></td>\n          <td>\n            <tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\">\n              <button class=\"btn btn-default \">上左</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip\n              content=\"我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字\"\n              placement=\"top\">\n              <button class=\"btn btn-default \">上边</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n              <button class=\"btn btn-default \">上右</button>\n            </tooltip>\n          </td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"what does the fox say ？\" placement=\"leftTop\">\n              <button class=\"btn btn-default \">左上</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"bang bang bang!\" placement=\"rightTop\">\n              <button class=\"btn btn-default \">右上</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"Are you kidding me?\" placement=\"left\">\n              <button class=\"btn btn-default \">左边</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n              <button class=\"btn btn-default \">右边</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"no, i'm serious! \" placement=\"leftBottom\">\n              <button class=\"btn btn-default \">左下</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n              <button class=\"btn btn-default \">右下</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td></td>\n          <td>\n            <tooltip placement=\"bottomLeft\"\n                     content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"btn btn-default \">下左</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip placement=\"bottom\"\n                     content=\"我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字\">\n              <button class=\"btn btn-default \">下边</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip placement=\"bottomRight\"\n                     content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"btn btn-default \">下右</button>\n            </tooltip>\n          </td>\n          <td></td>\n        </tr>\n      </table>\n\n\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n                 effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n          <button class=\"btn btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n               content=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\">\n      <script type=\"language-mark-up\">\n<tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\">\n<button class=\"btn btn-default \">上左</button>\n</tooltip>\n<tooltip content=\"talk is cheap show me the code\" placement=\"top\">\n<button class=\"btn btn-default \">上边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n<button class=\"btn btn-default \">上右</button>\n</tooltip>\n<tooltip content=\"what does the fox say ？\" placement=\"leftTop\">\n<button class=\"btn btn-default \">左上</button>\n</tooltip>\n<tooltip content=\"Are you kidding me?\" placement=\"left\">\n<button class=\"btn btn-default \">左边</button>\n</tooltip>\n<tooltip content=\"no, i'm serious! \" placement=\"leftBottom\">\n<button class=\"btn btn-default \">左下</button>\n</tooltip>\n<tooltip content=\"bang bang bang!\" placement=\"rightTop\">\n  <button class=\"btn btn-default \">右上</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n  <button class=\"btn btn-default \">右边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n  <button class=\"btn btn-default \">右下</button>\n</tooltip>\n<tooltip  placement=\"bottomLeft\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下左</button>\n</tooltip>\n<tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下边</button>\n</tooltip>\n<tooltip  placement=\"bottomRight\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">下右</button>\n</tooltip>\n<tooltip trigger=\"click\"\n  effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n  <button class=\"btn btn-default \">Click</button>\n  </tooltip>\n<tooltip effect=\"scale\"\ncontent=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n</tooltip>\n\n      </script>\n    </code></pre>\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code></td>\n        <td><code>click</code></td>\n        <td>以何种方式触发显示气泡框,可选hover, click, focus</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code></td>\n        <td><code>scale</code></td>\n        <td>过渡效果，可选scale, fadein</td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>内容</td>\n      </tr>\n      <td>placement</td>\n      <td><code>String</code></td>\n      <td></td>\n      <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight\n      </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(425)
	__vue_script__ = __webpack_require__(427)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/accordionDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(428)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(426);
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
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.custom-class {\n  padding: 10px 15px;\n}\n", ""]);
	
	// exports


/***/ },
/* 427 */
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
	//     <table class="atui-table table-bordered">
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
	//     <table class="atui-table table-bordered">
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
/* 428 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"accordion\">\n    <h3 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion 手风琴</a></h3>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion :one-at-atime=\"checked\">\n        <panel :is-open=\"true\">\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n          内容一\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n          内容二\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n          内容三\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n          内容四\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n<accordion :one-at-atime=\"checked\">\n  <panel :is-open=\"true\">\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n    内容一\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n    内容二\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n    内容三\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n    内容四\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>slot::panel-header</td>\n          <td><code>slot node</code></td>\n          <td></td>\n          <td>以内容分发的形式自定义header里面的内容，注意：因为header自动绑定了展开收起的事件，所以\n          如果用户自定义的元素里有事件绑定的操作，建议使用事件修饰符（例：@click.prev.stop=\"\"）</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(430)
	__vue_script__ = __webpack_require__(432)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/affixDocs.vue: named exports in *.vue files are ignored.")}
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
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite\n}\n@-webkit-keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n@keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n", ""]);
	
	// exports


/***/ },
/* 432 */
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
	//     <table class="atui-table table-bordered">
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
/* 433 */
/***/ function(module, exports) {

	module.exports = "\n  <!-- <div class=\"bs-docs-section\" id=\"affix\">\n    <h3 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix 固钉</a></h3>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div> -->\n";

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(435)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/asideDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(436)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 435 */
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
	//     <table class="atui-table table-bordered">
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
/* 436 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"aside\">\n    <h3 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside 侧边栏</a></h3>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\n\n      <sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n          <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\n        </div>\n      </sidebar>\n\n      <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\n\n      <sidebar  :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft=false\">Close</button>\n        </div>\n      </sidebar>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button\nclass=\"btn btn-success btn-lg\"\n@click=\"showRight = true\">Show Aside on right</button>\n\n<sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n...\n</sidebar>\n\n<button\nclass=\"btn btn-danger btn-lg\"\n@click=\"showLeft = true\">Show Aside on left</button>\n\n<sidebar :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n...\n</sidebar></script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td></td>\n          <td>Whether show the component.</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\n          <td><code>right</code></td>\n          <td>how to position the component.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Header text of the aside component.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(438)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/popoverDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(439)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 438 */
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
	//   <table class="atui-table table-bordered">
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
/* 439 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"popover\">\n    <h3 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover 气泡</a></h3>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">Popover on bottom</button>\n</popover>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(441)
	__vue_script__ = __webpack_require__(443)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/tabsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(444)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(442);
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
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.example-title {\n  margin: 20px 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 443 */
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
	//       <h4 class="example-title">迷你型</h4>
	//       <tabs :base="true" size="small">
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
	//       <tabs :base="true" trigger="hover" >
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
	//       <tabs @on-tab-click="handleOnClick">
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
	// <tabs :base="true" size="small">
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
	// </tabs>
	// <tabs :base="true" trigger="hover">
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
	// <tabs @on-tab-click="handleOnClick">
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
	//   <table class="atui-table table-bordered">
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
	//       <tr>
	//         <td>size</td>
	//         <td><code>String</code></td>
	//         <td>'default'</td>
	//         <td>大小，提供default和small两种大小</td>
	//       </tr>
	//       <tr>
	//         <td>trigger</td>
	//         <td><code>String</code></td>
	//         <td>click</td>
	//         <td>以何种方式触发选中Tab(可选，click，hover)</td>
	//       </tr>
	//       <tr>
	//         <td>@on-tab-click</td>
	//         <td><code>Function</code></td>
	//         <td></td>
	//         <td>tab被点击的回调，回调参数为当前tab的索引值</td>
	//       </tr>
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
	  },
	  methods: {
	    handleOnClick: function handleOnClick(index) {
	      alert(index);
	    }
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
/* 444 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tabs\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs 标签页</a></h3>\n    <div class=\"bs-example\">\n    <h4 class=\"example-title\">基础型</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">迷你型</h4>\n      <tabs :base=\"true\" size=\"small\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">Tab数量较多的情况</h4>\n      <tabs :base=\"true\" trigger=\"hover\" >\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">选项卡型</h4>\n      <tabs @on-tab-click=\"handleOnClick\">\n        <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"系统短信签名\">\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n<tabs :base=\"true\" size=\"small\">\n  <tab header=\"系统短信签名\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n<tabs :base=\"true\" trigger=\"hover\">\n  <tab header=\"系统短信签名\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n<tabs @on-tab-click=\"handleOnClick\">\n  <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab 选项 (非 TABS)</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否禁用当前Tab</td>\n      </tr>\n      <tr>\n        <td>base</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否采用基础型的Tab样式</td>\n      </tr>\n      <tr>\n        <td>show-len</td>\n        <td><code>Number</code></td>\n        <td>3</td>\n        <td>当前想要显示出多少个Tab</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td>'default'</td>\n        <td>大小，提供default和small两种大小</td>\n      </tr>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code></td>\n        <td>click</td>\n        <td>以何种方式触发选中Tab(可选，click，hover)</td>\n      </tr>\n      <tr>\n        <td>@on-tab-click</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>tab被点击的回调，回调参数为当前tab的索引值</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(446)
	__vue_script__ = __webpack_require__(447)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/stepsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(448)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 446 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 447 */
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
	//         <v-steps :current="current" color="#00a0ff">
	//             <v-step title="已完成" ></v-step>
	//             <v-step title="进行中"></v-step>
	//             <v-step title="有一个待运行"></v-step>
	//             <v-step title="待运行"></v-step>
	//         </v-steps>
	//         <br><br>
	//         <v-steps :current="current" color="rgb(229, 46, 46)">
	//             <v-step title="已完成" ></v-step>
	//             <v-step title="进行中"></v-step>
	//             <v-step title="有一个待运行"></v-step>
	//             <v-step title="待运行"></v-step>
	//         </v-steps>
	//         <br>
	//         <h4 class="example-title">带文字描述</h4>
	//         <v-steps :current="current" >
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
	// <v-steps :current="current" color="#00a0ff">
	//   <v-step title="已完成" ></v-step>
	//   <v-step title="进行中"></v-step>
	//   <v-step title="有一个待运行"></v-step>
	//   <v-step title="待运行"></v-step>
	// </v-steps>
	// <v-steps :current="current" color="rgb(229, 46, 46)">
	//     <v-step title="已完成" ></v-step>
	//     <v-step title="进行中"></v-step>
	//     <v-step title="有一个待运行"></v-step>
	//     <v-step title="待运行"></v-step>
	// </v-steps>
	// <v-steps :current="current">
	//   <v-step title="已完成" description="这里是多信息"></v-step>
	//   <v-step title="进行中"  description="这里是多信息的耶哦"></v-step>
	//   <v-step title="有一个待运行" description="描述啊描述啊"></v-step>
	//   <v-step title="待运行" description="这里是多信息的描述啊"></v-step>
	// </v-steps>
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <h4 style="margin: 20px 0;">vSteps</h4>
	//   <table class="atui-table table-bordered">
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
	//   <table class="atui-table table-bordered">
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
/* 448 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"steps\">\n    <h3 class=\"page-header\"><a href=\"#steps\" class=\"anchor\">Steps 步骤条</a></h3>\n    <div class=\"bs-example\">\n        <h4 class=\"example-title\">基础型</h4>\n        <v-steps :current=\"current\" color=\"#00a0ff\">\n            <v-step title=\"已完成\" ></v-step>\n            <v-step title=\"进行中\"></v-step>\n            <v-step title=\"有一个待运行\"></v-step>\n            <v-step title=\"待运行\"></v-step>\n        </v-steps>\n        <br><br>\n        <v-steps :current=\"current\" color=\"rgb(229, 46, 46)\">\n            <v-step title=\"已完成\" ></v-step>\n            <v-step title=\"进行中\"></v-step>\n            <v-step title=\"有一个待运行\"></v-step>\n            <v-step title=\"待运行\"></v-step>\n        </v-steps>\n        <br>\n        <h4 class=\"example-title\">带文字描述</h4>\n        <v-steps :current=\"current\" >\n            <v-step title=\"已完成\" description=\"这里是多信息\"></v-step>\n            <v-step title=\"进行中\"  description=\"这里是多信息的耶哦\"></v-step>\n            <v-step title=\"有一个待运行\" description=\"描述啊描述啊\"></v-step>\n            <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n        </v-steps>\n        <br>\n        <button type=\"button\" class=\"btn default primary\" @click=\"_next\">next</button>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-steps :current=\"current\" color=\"#00a0ff\">\n  <v-step title=\"已完成\" ></v-step>\n  <v-step title=\"进行中\"></v-step>\n  <v-step title=\"有一个待运行\"></v-step>\n  <v-step title=\"待运行\"></v-step>\n</v-steps>\n<v-steps :current=\"current\" color=\"rgb(229, 46, 46)\">\n    <v-step title=\"已完成\" ></v-step>\n    <v-step title=\"进行中\"></v-step>\n    <v-step title=\"有一个待运行\"></v-step>\n    <v-step title=\"待运行\"></v-step>\n</v-steps>\n<v-steps :current=\"current\">\n  <v-step title=\"已完成\" description=\"这里是多信息\"></v-step>\n  <v-step title=\"进行中\"  description=\"这里是多信息的耶哦\"></v-step>\n  <v-step title=\"有一个待运行\" description=\"描述啊描述啊\"></v-step>\n  <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n</v-steps>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">vSteps</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>current</td>\n        <td>Number</td>\n        <td>0</td>\n        <td>当前正在执行的步骤数，可以通过status属性覆盖状态</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td>String</td>\n        <td></td>\n        <td>指定步骤条的样式颜色</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">vSteps vStep</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td>String</td>\n        <td>无</td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>description</td>\n        <td>String</td>\n        <td>无</td>\n        <td>步骤的详情描述</td>\n      </tr>\n      <tr>\n        <td>status</td>\n        <td>String</td>\n        <td>无</td>\n        <td>执行step的状态，当不设置此属性时，父组件Steps会自动根据current来设置对应status,（可选值wait, process, finish）</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(450)
	__vue_script__ = __webpack_require__(451)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/breadcrumbDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(452)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 450 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 451 */
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
	//   <table class="atui-table table-bordered">
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
	//   <table class="atui-table table-bordered">
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
/* 452 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"breadcrumb\">\n    <h3 class=\"page-header\"><a href=\"#breadcrumb\" class=\"anchor\">Breadcrumb 面包屑</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本样式</h4>\n      <breadcrumb>\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item>三级类目</breadcrumb-item>\n      </breadcrumb>\n      <h4 class=\"example-title\">分隔符样式（选用）</h4>\n      <breadcrumb slash=\"&gt;\">\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n        <breadcrumb-item>四级类目</breadcrumb-item>\n      </breadcrumb>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<breadcrumb>\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item>三级类目</breadcrumb-item>\n</breadcrumb>\n<breadcrumb slash=\"&gt;\">\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n  <breadcrumb-item>四级类目</breadcrumb-item>\n</breadcrumb>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">Breadcrumb</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>slash</td>\n        <td>String</td>\n        <td>/</td>\n        <td>每一级类目之间的分隔符</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">BreadcrumbItem</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>href</td>\n        <td>String</td>\n        <td>无</td>\n        <td>链接，如果不传则不可点击</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(454)
	__vue_script__ = __webpack_require__(455)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/paginationDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(456)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 454 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 455 */
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
	      showSizeChanger: true,
	      defaultSize: 20
	    };
	  },
	
	  components: {
	    Pagination: _src.Pagination
	  },
	  events: {
	    pageChange: function pageChange(page, id) {},
	    'pagination-size-change': function paginationSizeChange(data) {
	      console.log('EVENT', 'pagination-size-change', data.label, data.value);
	    }
	  },
	  methods: {
	    changeTotalPage: function changeTotalPage() {
	      this.totalPage = 50;
	      this.currPage = 20;
	      this.total = 1000;
	      this.defaultSize = 30;
	    }
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
	//       <pagination class="customclass" :total-page.sync="totalPage",
	//                   :curr-page.sync="currPage",
	//                   :total="total",
	//                   :show-jumper="true",
	//                   :default-size="defaultSize",
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
	//
	//
	//       <input type="button" value="changeTotalPage" @click="changeTotalPage"/>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :show-size-changer="true"></pagination>
	// <pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :mini="true"></pagination>
	// <pagination :total-page.sync="totalPage",:curr-page.sync="currPage",:total="total",:simple="true" class="custom"></pagination>
	// </script></code></pre>
	//   </div>
	//   <h2>Options</h2>
	//   <table class="atui-table table-bordered">
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
	//         <td>default-size</td>
	//         <td>Number</td>
	//         <td>one of <code>10、20、30</code></td>
	//         <td>如果有选择页码大小的话，这个可以指定每页的大小</td>
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
/* 456 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"pagination\">\n    <h3 class=\"page-header\"><a href=\"#pagination\" class=\"anchor\">Pagination 翻页</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">完全版</h4>\n      <pagination class=\"customclass\" :total-page.sync=\"totalPage\",\n                  :curr-page.sync=\"currPage\",\n                  :total=\"total\",\n                  :show-jumper=\"true\",\n                  :default-size=\"defaultSize\",\n                  :show-size-changer=\"true\">\n      </pagination>\n      <h4 class=\"example-title\">迷你版</h4>\n      <pagination :total-page.sync=\"totalPage\",\n                  :curr-page.sync=\"currPage\",\n                  :total=\"total\",\n                  :show-jumper=\"true\",\n                  :mini=\"true\">\n      </pagination>\n      <h4 class=\"example-title\">精简版</h4>\n      <pagination :total-page.sync=\"totalPage\",\n                  :curr-page.sync=\"currPage\",\n                  :total=\"total\",\n                  :simple=\"true\"\n                  class=\"custom\">\n      </pagination>\n\n\n      <input type=\"button\" value=\"changeTotalPage\" @click=\"changeTotalPage\"/>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<pagination :total-page.sync=\"totalPage\" :curr-page.sync=\"currPage\" :total=\"total\" :show-jumper=\"true\" :show-size-changer=\"true\"></pagination>\n<pagination :total-page.sync=\"totalPage\" :curr-page.sync=\"currPage\" :total=\"total\" :show-jumper=\"true\" :mini=\"true\"></pagination>\n<pagination :total-page.sync=\"totalPage\",:curr-page.sync=\"currPage\",:total=\"total\",:simple=\"true\" class=\"custom\"></pagination>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>total-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>总页数</td>\n      </tr>\n      <tr>\n        <td>curr-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>当前页</td>\n      </tr>\n      <tr>\n        <td>default-size</td>\n        <td>Number</td>\n        <td>one of <code>10、20、30</code></td>\n        <td>如果有选择页码大小的话，这个可以指定每页的大小</td>\n      </tr>\n      <tr>\n        <td>total</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>数据总条数</td>\n      </tr>\n      <tr>\n        <td>show-jumper</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启跳转功能</td>\n      </tr>\n      <tr>\n        <td>show-size-changer</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启修改每页条数功能</td>\n      </tr>\n      <tr>\n        <td>simple</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用精简版样式</td>\n      </tr>\n      <tr>\n        <td>mini</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用迷你版样式</td>\n      </tr>\n    </tbody>\n  </table>\n  <br>\n  <strong>注：</strong>pagination组件会监听当前currPage的变化，当其发生变化时pagination组件会向上派发一个回调事件，名字叫pageChange，回调参数就是当前页以及pagination的id，需要在引用pagination的当前文件里面的events对象里将其加入进去.\n  <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n    events: {\n      pageChange (page, id) {\n\n      }\n    }\n  </script></code></pre>\n";

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(458)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/filters/phoneNumberDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(460)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(459);
	
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
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _phoneNumber = __webpack_require__(343);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Vue.filter('phoneNumber', _phoneNumber2.default);
	
	module.exports = {};

/***/ },
/* 460 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"phonenumber\">\n    <h3 class=\"page-header\"><a href=\"#phonenumber\" class=\"anchor\">手机号码格式化 phonenumber</a></h3>\n    <div class=\"bs-example\">\n    <input type=\"text\" v-model=\"number\" />\n    <div>{{number | phoneNumber}}</div>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"text\" v-model=\"number\" />\n<div>{{number | phoneNumber}}</div>\n</script></code></pre>\n  </div>\n";

/***/ },
/* 461 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 462 */
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
/* 463 */
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
//# sourceMappingURL=components-docs.js.map