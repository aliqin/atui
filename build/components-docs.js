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

	module.exports = __webpack_require__(77);


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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(78);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _headerDocs = __webpack_require__(132);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _gettingStarted = __webpack_require__(360);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _gridDocs = __webpack_require__(362);
	
	var _gridDocs2 = _interopRequireDefault(_gridDocs);
	
	var _iconDocs = __webpack_require__(367);
	
	var _iconDocs2 = _interopRequireDefault(_iconDocs);
	
	var _buttonDocs = __webpack_require__(372);
	
	var _buttonDocs2 = _interopRequireDefault(_buttonDocs);
	
	var _inputDocs = __webpack_require__(375);
	
	var _inputDocs2 = _interopRequireDefault(_inputDocs);
	
	var _uploaderDocs = __webpack_require__(378);
	
	var _uploaderDocs2 = _interopRequireDefault(_uploaderDocs);
	
	var _formDocs = __webpack_require__(381);
	
	var _formDocs2 = _interopRequireDefault(_formDocs);
	
	var _switchDocs = __webpack_require__(384);
	
	var _switchDocs2 = _interopRequireDefault(_switchDocs);
	
	var _sliderDocs = __webpack_require__(387);
	
	var _sliderDocs2 = _interopRequireDefault(_sliderDocs);
	
	var _dropdownDocs = __webpack_require__(390);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _selectDocs = __webpack_require__(393);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _calendarDocs = __webpack_require__(396);
	
	var _calendarDocs2 = _interopRequireDefault(_calendarDocs);
	
	var _datepickerDocs = __webpack_require__(399);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _timepickerDocs = __webpack_require__(402);
	
	var _timepickerDocs2 = _interopRequireDefault(_timepickerDocs);
	
	var _searchboxDocs = __webpack_require__(405);
	
	var _searchboxDocs2 = _interopRequireDefault(_searchboxDocs);
	
	var _messageDocs = __webpack_require__(408);
	
	var _messageDocs2 = _interopRequireDefault(_messageDocs);
	
	var _cascaderDocs = __webpack_require__(411);
	
	var _cascaderDocs2 = _interopRequireDefault(_cascaderDocs);
	
	var _modalDocs = __webpack_require__(414);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _tableDocs = __webpack_require__(417);
	
	var _tableDocs2 = _interopRequireDefault(_tableDocs);
	
	var _badgeDocs = __webpack_require__(420);
	
	var _badgeDocs2 = _interopRequireDefault(_badgeDocs);
	
	var _carouselDocs = __webpack_require__(424);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _Affix = __webpack_require__(298);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(427);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _spinDocs = __webpack_require__(429);
	
	var _spinDocs2 = _interopRequireDefault(_spinDocs);
	
	var _textareaDocs = __webpack_require__(432);
	
	var _textareaDocs2 = _interopRequireDefault(_textareaDocs);
	
	var _tagDocs = __webpack_require__(435);
	
	var _tagDocs2 = _interopRequireDefault(_tagDocs);
	
	var _tooltipDocs = __webpack_require__(439);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _triggerDocs = __webpack_require__(442);
	
	var _triggerDocs2 = _interopRequireDefault(_triggerDocs);
	
	var _accordionDocs = __webpack_require__(445);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(450);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _asideDocs = __webpack_require__(455);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _popoverDocs = __webpack_require__(458);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _tabsDocs = __webpack_require__(461);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _stepsDocs = __webpack_require__(466);
	
	var _stepsDocs2 = _interopRequireDefault(_stepsDocs);
	
	var _menuDocs = __webpack_require__(470);
	
	var _menuDocs2 = _interopRequireDefault(_menuDocs);
	
	var _treeDocs = __webpack_require__(473);
	
	var _treeDocs2 = _interopRequireDefault(_treeDocs);
	
	var _breadcrumbDocs = __webpack_require__(476);
	
	var _breadcrumbDocs2 = _interopRequireDefault(_breadcrumbDocs);
	
	var _paginationDocs = __webpack_require__(480);
	
	var _paginationDocs2 = _interopRequireDefault(_paginationDocs);
	
	var _phoneNumberDocs = __webpack_require__(484);
	
	var _phoneNumberDocs2 = _interopRequireDefault(_phoneNumberDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(489);
	__webpack_require__(493);
	__webpack_require__(494);
	//  基础类
	
	
	// 表单类
	
	// import progressbarDocs from './example/progressbar-docs.vue'
	// import typeaheadDocs from './example/typeaheadDocs.vue'
	
	
	// 展示类
	
	
	// 导航类
	
	
	// filters
	
	
	Vue.config.debug = true;
	
	new Vue({
	  el: 'body',
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
	    timepickerDocs: _timepickerDocs2.default,
	    dropdownDocs: _dropdownDocs2.default,
	    modalDocs: _modalDocs2.default,
	    popoverDocs: _popoverDocs2.default,
	    // progressbarDocs,
	    selectDocs: _selectDocs2.default,
	    tabsDocs: _tabsDocs2.default,
	    tableDocs: _tableDocs2.default,
	    treeDocs: _treeDocs2.default,
	    stepsDocs: _stepsDocs2.default,
	    breadcrumbDocs: _breadcrumbDocs2.default,
	    paginationDocs: _paginationDocs2.default,
	    tooltipDocs: _tooltipDocs2.default,
	    triggerDocs: _triggerDocs2.default,
	    menuDocs: _menuDocs2.default,
	    searchboxDocs: _searchboxDocs2.default,
	    phoneNumberDocs: _phoneNumberDocs2.default
	  },
	  data: function data() {
	    return {
	      show: false,
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
	    this.show = true;
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(79);
	
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	__webpack_require__(125);
	module.exports = __webpack_require__(89).Array.from;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(82)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(85)(String, 'String', function(iterated){
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(83)
	  , defined   = __webpack_require__(84);
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
/* 83 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(86)
	  , $export        = __webpack_require__(87)
	  , redefine       = __webpack_require__(102)
	  , hide           = __webpack_require__(92)
	  , has            = __webpack_require__(103)
	  , Iterators      = __webpack_require__(104)
	  , $iterCreate    = __webpack_require__(105)
	  , setToStringTag = __webpack_require__(121)
	  , getPrototypeOf = __webpack_require__(123)
	  , ITERATOR       = __webpack_require__(122)('iterator')
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
/* 86 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(88)
	  , core      = __webpack_require__(89)
	  , ctx       = __webpack_require__(90)
	  , hide      = __webpack_require__(92)
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
/* 88 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 89 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(91);
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
/* 91 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(93)
	  , createDesc = __webpack_require__(101);
	module.exports = __webpack_require__(97) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(94)
	  , IE8_DOM_DEFINE = __webpack_require__(96)
	  , toPrimitive    = __webpack_require__(100)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(97) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(95);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(97) && !__webpack_require__(98)(function(){
	  return Object.defineProperty(__webpack_require__(99)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(98)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(95)
	  , document = __webpack_require__(88).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(95);
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

	module.exports = __webpack_require__(92);

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
	var create         = __webpack_require__(106)
	  , descriptor     = __webpack_require__(101)
	  , setToStringTag = __webpack_require__(121)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(92)(IteratorPrototype, __webpack_require__(122)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(94)
	  , dPs         = __webpack_require__(107)
	  , enumBugKeys = __webpack_require__(119)
	  , IE_PROTO    = __webpack_require__(116)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(99)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(120).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(93)
	  , anObject = __webpack_require__(94)
	  , getKeys  = __webpack_require__(108);
	
	module.exports = __webpack_require__(97) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(109)
	  , enumBugKeys = __webpack_require__(119);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(103)
	  , toIObject    = __webpack_require__(110)
	  , arrayIndexOf = __webpack_require__(113)(false)
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(111)
	  , defined = __webpack_require__(84);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(112);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(110)
	  , toLength  = __webpack_require__(114)
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(83)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(83)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(117)('keys')
	  , uid    = __webpack_require__(118);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(88)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 119 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(88).document && document.documentElement;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(93).f
	  , has = __webpack_require__(103)
	  , TAG = __webpack_require__(122)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(117)('wks')
	  , uid        = __webpack_require__(118)
	  , Symbol     = __webpack_require__(88).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(103)
	  , toObject    = __webpack_require__(124)
	  , IE_PROTO    = __webpack_require__(116)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(84);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(90)
	  , $export        = __webpack_require__(87)
	  , toObject       = __webpack_require__(124)
	  , call           = __webpack_require__(126)
	  , isArrayIter    = __webpack_require__(127)
	  , toLength       = __webpack_require__(114)
	  , createProperty = __webpack_require__(128)
	  , getIterFn      = __webpack_require__(129);
	
	$export($export.S + $export.F * !__webpack_require__(131)(function(iter){ Array.from(iter); }), 'Array', {
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
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(94);
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(104)
	  , ITERATOR   = __webpack_require__(122)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(93)
	  , createDesc      = __webpack_require__(101);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(130)
	  , ITERATOR  = __webpack_require__(122)('iterator')
	  , Iterators = __webpack_require__(104);
	module.exports = __webpack_require__(89).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(112)
	  , TAG = __webpack_require__(122)('toStringTag')
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(122)('iterator')
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
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(133)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/headerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(359)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-147983ff/headerDocs.vue"
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
	
	var _src = __webpack_require__(134);
	
	var SubMenu = _src.Menu.SubMenu; // <template>
	//   <header class="navbar navbar-top bs-docs-nav" id="top" role="banner">
	//     <v-row class="container">
	//       <v-col span="5">
	//         <h1><a href="components.html">ATUI</a></h1>
	//       </v-col>
	//       <v-col span="25">
	//         <v-menu mode="horizontal">
	//           <menu-item><a href="components.html">组件</a></menu-item>
	//           <menu-item><a href="widgets.html">widgets(业务组件)</a></menu-item>
	//           <menu-item><a href="filters.html">filters(数据过滤器)</a></menu-item>
	//           <menu-item><a href="http://gitlab.alibaba-inc.com/aliqin/atui/">GitLab</a></menu-item>
	//           <menu-item><a href="http://ued.aliqin.alibaba.net/webcompon/">视觉稿</a></menu-item>
	//         </v-menu>
	//       </v-col>
	//     </v-row>
	//   </header>
	//   <ul class="themes" id="J_header">
	//     <li v-for="theme in themes" :class="{active:theme.active}" :style="{backgroundColor:theme.color}" @click="changeTheme(theme.csslink,$event)" :title="theme.name">
	//     </li>
	//   </ul>
	// </template>
	// <script>
	
	var MenuItem = _src.Menu.MenuItem;
	
	var vRow = _src.Layout.Row;
	var vCol = _src.Layout.Col;
	exports.default = {
	  data: function data() {
	    return {
	      themes: [{
	        name: '大于蓝',
	        csslink: 'greater-blue.css',
	        active: true,
	        color: '#00aaff'
	      }, {
	        name: '天猫红',
	        csslink: 'tmall-red.css',
	        active: false,
	        color: '#e52e2e'
	      }, {
	        name: '淘宝橙',
	        csslink: 'tao-orange.css',
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
	      // document.body.className = csslink.replace('.css','')
	      Vue.util.addClass(document.body, csslink.replace('.css', ''));
	    }
	  },
	  components: {
	    vRow: vRow,
	    vCol: vCol,
	    vMenu: _src.Menu,
	    SubMenu: SubMenu,
	    MenuItem: MenuItem
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Form = __webpack_require__(139);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Layout = __webpack_require__(142);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Button = __webpack_require__(153);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(160);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Searchbox = __webpack_require__(164);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);
	
	var _Uploader = __webpack_require__(174);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);
	
	var _Slider = __webpack_require__(206);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Switch = __webpack_require__(214);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Dropdown = __webpack_require__(218);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Select = __webpack_require__(222);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Calendar = __webpack_require__(233);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _TimePicker = __webpack_require__(237);
	
	var _TimePicker2 = _interopRequireDefault(_TimePicker);
	
	var _DatePicker = __webpack_require__(242);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _Cascader = __webpack_require__(249);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _Message = __webpack_require__(201);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _Modal = __webpack_require__(253);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Table = __webpack_require__(257);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Badge = __webpack_require__(283);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Carousel = __webpack_require__(287);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Affix = __webpack_require__(298);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Spin = __webpack_require__(264);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	var _Textarea = __webpack_require__(303);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _Tag = __webpack_require__(225);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Tooltip = __webpack_require__(209);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	var _Accordion = __webpack_require__(307);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Popover = __webpack_require__(314);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Tabs = __webpack_require__(318);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Steps = __webpack_require__(325);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Tree = __webpack_require__(332);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _Menu = __webpack_require__(339);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Breadcrumb = __webpack_require__(352);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Pagination = __webpack_require__(269);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Progressbar from './components/progressbar.vue'
	// import Typeahead from './components/Typeahead.vue'
	// 展示类
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
	  TimePicker: _TimePicker2.default,
	  DatePicker: _DatePicker2.default,
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
	  Trigger: _Trigger2.default,
	  Accordion: _Accordion2.default,
	  Popover: _Popover2.default,
	  Tabs: _Tabs2.default,
	  Steps: _Steps2.default,
	  Tree: _Tree2.default,
	  Menu: _Menu2.default,
	  Breadcrumb: _Breadcrumb2.default,
	  Pagination: _Pagination2.default
	};
	// 导航类
	// import ffix from './components/affix.vue'
	// import side from './components/aside.vue'
	
	// import Container from './components/Container.vue'
	
	
	module.exports = VueComponent;
	
	// ie10以及以下，对某些样式支持有问题，需要降级
	function getIEVersion() {
	  var agent = navigator.userAgent;
	  var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
	  var matches = agent.match(reg);
	  if (matches != null) {
	    return { major: matches[1], minor: matches[2] };
	  }
	  return { major: '-1', minor: '-1' };
	}
	
	var ieVersion = getIEVersion();
	
	document.addEventListener('DOMContentLoaded', function (event) {
	  if (ieVersion.major === '9' || ieVersion.major === '10') {
	    Vue.util.addClass(document.body, 'let-ie11');
	    Vue.util.addClass(document.body, 'ie' + ieVersion.major);
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(136);
	
	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Icon2.default;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(137)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Icon/Icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(138)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d85b2bd0/Icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <i :class="[prefixCls + '-iconfont', prefixCls + '-icon-' + type]" :style="{ fontSize: size + 'px',color:color }">
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"[prefixCls + '-iconfont', prefixCls + '-icon-' + type]\" :style=\"{ fontSize: size + 'px',color:color }\">\n</i>\n";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Form = __webpack_require__(140);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormItem = __webpack_require__(150);
	
	var _FormItem2 = _interopRequireDefault(_FormItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Form2.default.FormItem = _FormItem2.default;
	
	exports.default = _Form2.default;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(141)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/Form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-373970f8/Form.vue"
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
	
	var _Layout = __webpack_require__(142);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vRow = _Layout2.default.Row; // <template>
	//   <form :class="formClassObj">
	//     <v-row>
	//       <slot></slot>
	//     </v-row>
	//   </form>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  props: {
	    // 表单元素排列方式，有纵向和横向两种 horizontal、vertical
	    horizontal: Boolean,
	    vertical: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    formClassObj: function formClassObj() {
	      var prefixCls = this.prefixCls;
	      var horizontal = this.horizontal;
	      var vertical = this.vertical;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-form'] = true;
	      classObj[prefixCls + '-form-horizontal'] = horizontal;
	      classObj[prefixCls + '-form-vertical'] = vertical;
	
	      return classObj;
	    }
	  },
	  components: {
	    vRow: vRow
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Row = __webpack_require__(143);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(146);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { Row: _Row2.default, Col: _Col2.default };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(144)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(145)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-323de8fc/Row.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="[prefixCls + '-row']"><slot></slot></div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-row']\"><slot></slot></div>\n";

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(147)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(148)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-18256da2/Col.vue"
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
	// <div :class="[prefixCls + '-col-' + type + '-' + span]">
	//   <slot></slot>
	// </div>
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
	      default: 'md'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-col-' + type + '-' + span]\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<form :class=\"formClassObj\">\n  <v-row>\n    <slot></slot>\n  </v-row>\n</form>\n";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(151)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/FormItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(152)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ca5542aa/FormItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(142);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <v-col :span="itemCol" :class="formItemClassObj">
	//   <v-col :span="labelCol" type="sm">
	//     <label v-if="label" :class="[prefixCls + '-form-label']">
	//       <span v-if="isRequired" :class="[prefixCls + '-form-required-icon']">*</span>
	//       {{label}}
	//     </label>
	//   </v-col>
	//   <v-col :span="wrapperCol || calcWrapperCol" type="sm">
	//     <div :class="[prefixCls + '-form-input']">
	//       <slot></slot>
	//       <template v-if="showIcon">
	//         <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'warn'" type="waring"></icon>
	//         <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'error'" type="error"></icon>
	//         <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'success'" type="success"></icon>
	//         <icon :class="[prefixCls + '-form-status-icon']" v-if="validStatus == 'help'" type="help"></icon>
	//       </template>
	//     </div>
	//     <div v-if="tips && validStatus" :class="[prefixCls + '-form-status-info']">{{tips}}</div>
	//   </v-col>
	// </v-col>
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
	    // 是否必填
	    required: Boolean,
	    // 提示信息，如不设置，会根据验证规则自动生成
	    tips: {
	      type: String,
	      default: ''
	    },
	    // 验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
	    validStatus: {
	      type: String,
	      default: ''
	    },
	    // 配合validateStatus属性使用，是否展示校验状态图标
	    hasIcon: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	
	  computed: {
	    formItemClassObj: function formItemClassObj() {
	      var prefixCls = this.prefixCls;
	      var validStatus = this.validStatus;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-form-item'] = true;
	      classObj[prefixCls + '-form-with-help'] = validStatus;
	      classObj[prefixCls + '-form-has-error'] = validStatus === 'error';
	      classObj[prefixCls + '-form-has-success'] = validStatus === 'success';
	
	      return classObj;
	    },
	    isRequired: function isRequired() {
	      return !!this.required;
	    },
	    showIcon: function showIcon() {
	      return this.validStatus && !!this.hasIcon;
	    },
	    calcWrapperCol: function calcWrapperCol() {
	      var span = 24 - parseInt(this.labelCol);
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
/* 152 */
/***/ function(module, exports) {

	module.exports = "\n<v-col :span=\"itemCol\" :class=\"formItemClassObj\">\n  <v-col :span=\"labelCol\" type=\"sm\">\n    <label v-if=\"label\" :class=\"[prefixCls + '-form-label']\">\n      <span v-if=\"isRequired\" :class=\"[prefixCls + '-form-required-icon']\">*</span>\n      {{label}}\n    </label>\n  </v-col>\n  <v-col :span=\"wrapperCol || calcWrapperCol\" type=\"sm\">\n    <div :class=\"[prefixCls + '-form-input']\">\n      <slot></slot>\n      <template v-if=\"showIcon\">\n        <icon :class=\"[prefixCls + '-form-status-icon']\" v-if=\"validStatus == 'warn'\" type=\"waring\"></icon>\n        <icon :class=\"[prefixCls + '-form-status-icon']\" v-if=\"validStatus == 'error'\" type=\"error\"></icon>\n        <icon :class=\"[prefixCls + '-form-status-icon']\" v-if=\"validStatus == 'success'\" type=\"success\"></icon>\n        <icon :class=\"[prefixCls + '-form-status-icon']\" v-if=\"validStatus == 'help'\" type=\"help\"></icon>\n      </template>\n    </div>\n    <div v-if=\"tips && validStatus\" :class=\"[prefixCls + '-form-status-info']\">{{tips}}</div>\n  </v-col>\n</v-col>\n";

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(154);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Group = __webpack_require__(157);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Button2.default.Group = _Group2.default;
	
	exports.default = _Button2.default;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(155)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Button/Button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(156)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-760691f8/Button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <button :type="type" :class="btnClassObj">
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
	    large: Boolean,
	    small: Boolean,
	    value: {
	      type: String,
	      default: ''
	    },
	    primary: Boolean,
	    secondary: Boolean,
	    tertiary: Boolean,
	    text: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    btnClassObj: function btnClassObj() {
	      var prefixCls = this.prefixCls;
	      var large = this.large;
	      var small = this.small;
	      var primary = this.primary;
	      var secondary = this.secondary;
	      var tertiary = this.tertiary;
	      var text = this.text;
	
	      var btnClass = {};
	
	      btnClass[prefixCls + '-btn'] = true;
	      btnClass[prefixCls + '-btn-large'] = large;
	      btnClass[prefixCls + '-btn-small'] = small;
	      btnClass[prefixCls + '-btn-primary'] = primary;
	      btnClass[prefixCls + '-btn-secondary'] = secondary;
	      btnClass[prefixCls + '-btn-tertiary'] = tertiary;
	      btnClass[prefixCls + '-btn-text'] = text;
	
	      return btnClass;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "\n<button :type=\"type\" :class=\"btnClassObj\">\n  <slot>{{value}}</slot>\n</button>\n";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Button/Group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0dc1d2a9/Group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="btnClassObj"
	//        @click="clickBtnGroup">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    large: Boolean,
	    small: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  methods: {
	    clickBtnGroup: function clickBtnGroup(e) {
	      e.cancelBubble = true;
	      var target = e.target;
	      var $parent = target.parentNode;
	      var $btns = $parent.getElementsByClassName('btn');
	      var index = [].indexOf.call($btns, target);
	      var len = $btns.length;
	      var oldClass = '';
	      var newClass = '';
	      for (var i = 0; i < len; i++) {
	        oldClass = $btns[i].getAttribute('class');
	        newClass = oldClass.replace('active', '');
	        if (i === index) {
	          newClass += ' active';
	        }
	        $btns[i].setAttribute('class', newClass);
	      }
	      this.$dispatch('switch', this, index);
	    }
	  },
	  computed: {
	    btnClassObj: function btnClassObj() {
	      var prefixCls = this.prefixCls;
	      var large = this.large;
	      var small = this.small;
	
	      var btnClass = {};
	
	      btnClass[prefixCls + '-btn-group'] = true;
	      btnClass[prefixCls + '-btn-large'] = large;
	      btnClass[prefixCls + '-btn-small'] = small;
	
	      return btnClass;
	    }
	  }
	
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"btnClassObj\"\n     @click=\"clickBtnGroup\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(161);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(162)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Input/Input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(163)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7fd91b8e/Input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <input :type="type"
	//          :class="inputClassObj"
	//          :placeholder="placeholder"
	//          v-model="value"
	//          :valid-status.sync="validStatus"
	//          :maxlength="maxlength" />
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
	    error: Boolean,
	    success: Boolean,
	    warn: Boolean,
	    large: Boolean,
	    small: Boolean,
	    value: [String, Number],
	    // 是否必填
	    required: {
	      type: Boolean,
	      default: false
	    },
	    requiredTips: String,
	    maxlength: String,
	    minlength: String,
	    minlengthTips: String,
	    // 验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
	    validStatus: {
	      type: String,
	      default: ''
	    },
	    // 验证规则
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	    inputClassObj: function inputClassObj() {
	      var prefixCls = this.prefixCls;
	      var large = this.large;
	      var small = this.small;
	      var error = this.error;
	      var success = this.success;
	      var warn = this.warn;
	      var validStatus = this.validStatus;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-input'] = true;
	      classObj[prefixCls + '-input-large'] = large;
	      classObj[prefixCls + '-input-small'] = small;
	      classObj[prefixCls + '-input-error'] = error || validStatus === 'error';
	      classObj[prefixCls + '-input-success'] = success || validStatus === 'success';
	      classObj[prefixCls + '-input-warn'] = warn || validStatus === 'warn';
	
	      return classObj;
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
	      if (this.required) {
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
	          break;
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
	
	      if (rule.test(value) || value === '') {
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
	
	      if (rule.test(value) || value === '') {
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
	
	      if (rule.test(value) || value === '') {
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
	
	      if (rule.test(value) || value === '') {
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
/* 163 */
/***/ function(module, exports) {

	module.exports = "\n<input :type=\"type\"\n       :class=\"inputClassObj\"\n       :placeholder=\"placeholder\"\n       v-model=\"value\"\n       :valid-status.sync=\"validStatus\"\n       :maxlength=\"maxlength\" />\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Searchbox = __webpack_require__(165);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Searchbox2.default;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(166)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Searchbox/Searchbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(173)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-db75a100/Searchbox.vue"
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
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_GlobalMixin2.default],
	
	  components: {
	    Trigger: _Trigger2.default, Icon: _Icon2.default
	  },
	
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
	    large: Boolean,
	    small: Boolean,
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
	      showPop: false,
	      isCheck: false
	    };
	  },
	
	
	  computed: {
	    filterLables: function filterLables() {
	      var str = this.filterField.map(function (item) {
	        return '' + item;
	      });
	      return str.join(' ');
	    },
	    inputClassObj: function inputClassObj() {
	      var prefixCls = this.prefixCls;
	      var large = this.large;
	      var small = this.small;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-searchbox-input'] = true;
	      classObj[prefixCls + '-input'] = true;
	      classObj[prefixCls + '-input-large'] = large;
	      classObj[prefixCls + '-input-small'] = small;
	
	      return classObj;
	    }
	  },
	
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	
	  watch: {
	    value: function value(val) {
	      !this.isCheck && this.$dispatch('searchbox-value-change', val, this);
	
	      this.isCheck = false;
	    }
	  },
	
	  methods: {
	    focusInput: function focusInput() {
	      this.iconColor = '#00A0FF';
	      this.showPop = true;
	    },
	    blurInput: function blurInput() {
	      this.iconColor = '#BFBFBF';
	      this.showPop = false;
	    },
	    checkItem: function checkItem(index, val) {
	      this.value = val;
	      this.isCheck = true;
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
	// <template>
	//   <div :class="[prefixCls + '-searchbox-cont']">
	//     <trigger trigger="focus" effect="slide" placement="bottomLeft" popup-cls="searchbox">
	//       <div slot="trigger">
	//         <input type="text"
	//                :class="inputClassObj"
	//                :placeholder="placeholder"
	//                v-model="value"
	//                @focus="focusInput"
	//                debounce="500" />
	//         <icon type="clear" v-show="value" color="#bfbfbf" size="14" @click="clearInput"></icon>
	//         <icon type="search" :color="iconColor" size="14"></icon>
	//       </div>
	//       <div slot="popup" v-if="searchList && searchList.length > 0"
	//            :class="[prefixCls + '-searchbox-list-containter']">
	//         <ul :class="[prefixCls + '-searchbox-list-dropdown']">
	//           <li v-for="item in searchList | filterBy value">
	//             <a href="javascript:;" @click="checkItem($index, item[textField])" :title="item[textField]">{{item[textField]}}</a>
	//           </li>
	//         </ul>
	//       </div>
	//     </trigger>
	//
	//   </div>
	// </template>
	// <script type="text/babel">

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Global Mixin
	 * @description 全局mixin
	 */
	
	var GlobalMixin = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  }
	};
	
	exports.default = GlobalMixin;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Trigger = __webpack_require__(169);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Trigger2.default;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Trigger/Trigger.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(172)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ce463fac/Trigger.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _EventListener = __webpack_require__(171);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template xmlns:v-el="http://www.w3.org/1999/xhtml">
	//   <div :class="[prefixCls + '-trigger-cont']">
	//     <div v-if="trigger === 'click'"
	//          v-el:trigger
	//          :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]"
	//          @click="clickHandler">
	//       <slot name="trigger">trigger slot is not set</slot>
	//     </div>
	//     <div v-if="trigger === 'hover'"
	//          v-el:trigger
	//          :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]"
	//          @mouseenter="hoverHandler"
	//          @mouseleave="hoverHandler">
	//       <slot name="trigger">trigger slot is not set</slot>
	//     </div>
	//     <div v-if="trigger === 'focus'"
	//          v-el:trigger
	//          :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]">
	//       <slot name="trigger">trigger slot is not set</slot>
	//     </div>
	//     <div v-if="trigger === 'hover'"
	//          v-el:popup
	//          v-show="show"
	//          :class="popupClassObj"
	//          :transition="effect"
	//          @mouseenter="hoverHandler"
	//          @mouseleave="hoverHandler">
	//       <slot name="popup">popup slot is not set</slot>
	//     </div>
	//     <div v-else
	//          v-el:popup
	//          v-show="show"
	//          :class="popupClassObj"
	//          :transition="effect">
	//       <slot name="popup">popup slot is not set</slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  mixins: [_GlobalMixin2.default],
	
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'zoom'
	    },
	    placement: {
	      type: String,
	      default: 'bottom'
	    },
	    popupCls: {
	      type: String,
	      default: 'popup'
	    },
	    popupAlwaysInView: {
	      type: Boolean,
	      default: true
	    },
	    popupHideWhenClickOutside: {
	      type: Boolean,
	      default: false
	    },
	    popupHideDelay: {
	      type: Number,
	      default: 0
	    },
	    triggerUsePopupWidth: {
	      type: Boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      }
	    };
	  },
	
	
	  computed: {
	    popupClassObj: function popupClassObj() {
	      var prefixCls = this.prefixCls;
	      var popupCls = this.popupCls;
	      var placement = this.placement;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-popup'] = true;
	      classObj[prefixCls + '-' + popupCls] = true;
	      classObj[prefixCls + '-' + popupCls + '-top'] = placement === 'top';
	      classObj[prefixCls + '-' + popupCls + '-top-left'] = placement === 'topLeft';
	      classObj[prefixCls + '-' + popupCls + '-top-right'] = placement === 'topRight';
	      classObj[prefixCls + '-' + popupCls + '-left'] = placement === 'left';
	      classObj[prefixCls + '-' + popupCls + '-left-top'] = placement === 'leftTop';
	      classObj[prefixCls + '-' + popupCls + '-left-bottom'] = placement === 'leftBottom';
	      classObj[prefixCls + '-' + popupCls + '-right'] = placement === 'right';
	      classObj[prefixCls + '-' + popupCls + '-right-top'] = placement === 'rightTop';
	      classObj[prefixCls + '-' + popupCls + '-right-bottom'] = placement === 'rightBottom';
	      classObj[prefixCls + '-' + popupCls + '-bottom'] = placement === 'bottom';
	      classObj[prefixCls + '-' + popupCls + '-bottom-left'] = placement === 'bottomLeft';
	      classObj[prefixCls + '-' + popupCls + '-bottom-right'] = placement === 'bottomRight';
	
	      return classObj;
	    }
	  },
	
	  watch: {
	    'show': function show(val, oldVal) {
	      // 向父组件派发事件
	      this.$dispatch('trigger-popup-toggle', val);
	    }
	  },
	
	  ready: function ready() {
	    var $trigger = this.$els.trigger;
	    var $popup = this.$els.popup;
	    var $triggerTarget = $trigger.querySelector('input, textarea');
	    var me = this;
	    var trigger = this.trigger;
	    var popupHideWhenClickOutside = this.popupHideWhenClickOutside;
	    var triggerUsePopupWidth = this.triggerUsePopupWidth;
	
	
	    this.originalPlacement = this.placement;
	
	    if (trigger === 'focus') {
	      this._focusEvent = _EventListener2.default.listen($triggerTarget, 'focus', function () {
	        me.show = true;
	        me.resetPos();
	      });
	
	      this._blurEvent = _EventListener2.default.listen($triggerTarget, 'blur', function () {
	        // blur触发的,延迟100ms关闭popup,保证popup上的交互事件触发
	        setTimeout(function () {
	          me.show = false;
	        }, 100);
	      });
	    }
	
	    // 点击trigger组件外部区域的时候,隐藏popup
	    if (popupHideWhenClickOutside) {
	      this._closeEvent = _EventListener2.default.listen(window, 'click', function (ev) {
	        if (!$popup.contains(ev.target) && !$trigger.contains(ev.target)) {
	          me.show = false;
	        }
	      });
	    }
	
	    // trigger使用popup宽度
	    if (triggerUsePopupWidth) {
	      //        console.log('$popup.style.width 1', $popup.style.width)
	      //
	      //        $popup.style.visibility = 'hidden'
	      //        me.show = true
	      //        $popup.style.display = 'block'
	      //
	      //        setTimeout(() => {
	      //          $trigger.style.width = $popup.style.width
	      //          $popup.style.visibility = ''
	      //          $popup.style.display = ''
	      //          console.log('$popup.style.width 2', $popup.style.width)
	      //        }, 1000)
	    }
	  },
	
	
	  methods: {
	    /**
	     * 优先设置弹窗视图内可见
	     */
	    enablePopupInView: function enablePopupInView(data) {
	      var originalPlacement = this.originalPlacement;
	      var triggerOffset = data.triggerOffset;
	      var triggerWidth = data.triggerWidth;
	      var triggerHeight = data.triggerHeight;
	      var popupWidth = data.popupWidth;
	      var popupHeight = data.popupHeight;
	
	      var triggerTop = triggerOffset.top;
	      var triggerLeft = triggerOffset.left;
	      var winWidth = window.innerWidth;
	      var winHeight = window.innerHeight;
	      var fixedPlacement = originalPlacement;
	      var hasFix = false;
	
	      if (fixedPlacement.startsWith('top')) {
	        if (triggerTop < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('top', 'bottom');
	          hasFix = true;
	        }
	      } else if (fixedPlacement.startsWith('bottom')) {
	        if (winHeight - triggerTop - triggerHeight < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('bottom', 'top');
	          hasFix = true;
	        }
	      } else if (fixedPlacement.startsWith('left')) {
	        if (triggerLeft < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('left', 'right');
	          hasFix = true;
	        }
	      } else if (fixedPlacement.startsWith('right')) {
	        if (winWidth - triggerLeft - triggerWidth < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('right', 'left');
	          hasFix = true;
	        }
	      }
	
	      if (fixedPlacement.endsWith('Top')) {
	        if (winHeight - triggerTop - triggerHeight < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('Top', 'Bottom');
	          hasFix = true;
	        }
	      } else if (fixedPlacement.endsWith('Bottom')) {
	        if (triggerTop < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('Bottom', 'Top');
	          hasFix = true;
	        }
	      } else if (fixedPlacement.endsWith('Left')) {
	        if (winWidth - triggerLeft - triggerWidth < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('Left', 'Right');
	          hasFix = true;
	        }
	      } else if (fixedPlacement.endsWith('Right')) {
	        if (triggerLeft < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('Right', 'Left');
	          hasFix = true;
	        }
	      }
	
	      if (hasFix) {
	        this.resetPos(fixedPlacement);
	      } else {
	        this.resetPos(originalPlacement);
	      }
	    },
	
	
	    /**
	     * 设置tooltip坐标
	     */
	    resetPos: function resetPos(inPlacement) {
	      var me = this;
	      var popupAlwaysInView = this.popupAlwaysInView;
	
	      var $popup = me.$els.popup;
	
	      // 坐标修正
	      if (!inPlacement && me.show && $popup.offsetWidth === 0) {
	        setTimeout(function () {
	          me.resetPos();
	        }, 0);
	        return;
	      }
	
	      var $trigger = me.$els.trigger.children[0];
	      var triggerOffset = $trigger.getBoundingClientRect();
	      var triggerLeft = document.documentElement.scrollLeft + document.body.scrollLeft + triggerOffset.left;
	      var triggerTop = document.documentElement.scrollTop + document.body.scrollTop + triggerOffset.top;
	      var triggerWidth = triggerOffset.width;
	      var triggerHeight = triggerOffset.height;
	      var popupWidth = $popup.offsetWidth;
	      var popupHeight = $popup.offsetHeight;
	
	      // 弹窗是否in view修正
	      if (popupAlwaysInView && !inPlacement) {
	        return this.enablePopupInView({
	          triggerOffset: triggerOffset,
	          triggerWidth: triggerWidth,
	          triggerHeight: triggerHeight,
	          popupWidth: popupWidth,
	          popupHeight: popupHeight
	        });
	      }
	
	      if (inPlacement) {
	        this.placement = inPlacement;
	      }
	
	      switch (this.placement) {
	        case 'top':
	          me.position.left = triggerLeft - popupWidth / 2 + triggerWidth / 2;
	          me.position.top = triggerTop - popupHeight;
	          break;
	        case 'topLeft':
	          me.position.left = triggerLeft;
	          me.position.top = triggerTop - popupHeight;
	          break;
	        case 'topRight':
	          me.position.left = triggerLeft + triggerWidth - popupWidth;
	          me.position.top = triggerTop - popupHeight;
	          break;
	        case 'left':
	          me.position.left = triggerLeft - popupWidth;
	          me.position.top = triggerTop + triggerHeight / 2 - popupHeight / 2;
	          break;
	        case 'leftTop':
	          me.position.left = triggerLeft - popupWidth;
	          me.position.top = triggerTop;
	          break;
	        case 'leftBottom':
	          me.position.left = triggerLeft - popupWidth;
	          me.position.top = triggerTop + triggerHeight - popupHeight;
	          break;
	        case 'right':
	          me.position.left = triggerLeft + triggerWidth;
	          me.position.top = triggerTop + triggerHeight / 2 - popupHeight / 2;
	          break;
	        case 'rightTop':
	          me.position.left = triggerLeft + triggerWidth;
	          me.position.top = triggerTop;
	          break;
	        case 'rightBottom':
	          me.position.left = triggerLeft + triggerWidth;
	          me.position.top = triggerTop + triggerHeight - popupHeight;
	          break;
	        case 'bottom':
	          me.position.left = triggerLeft - popupWidth / 2 + triggerWidth / 2;
	          me.position.top = triggerTop + triggerHeight;
	          break;
	        case 'bottomLeft':
	          me.position.left = triggerLeft;
	          me.position.top = triggerTop + triggerHeight;
	          break;
	        case 'bottomRight':
	          me.position.left = triggerLeft + triggerWidth - popupWidth;
	          me.position.top = triggerTop + triggerHeight;
	          break;
	        default:
	          console.log('Wrong placement prop');
	      }
	
	      $popup.style.top = this.position.top + 'px';
	      $popup.style.left = this.position.left + 'px';
	
	      // 向父组件派发事件
	      this.$dispatch('trigger-reset-pos', {
	        $trigger: $trigger,
	        $popup: $popup,
	        placement: this.placement
	      });
	    },
	    clickHandler: function clickHandler(ev) {
	      if (this.disabled) return;
	
	      this.show = !this.show;
	
	      if (this.show) {
	        this.resetPos();
	      }
	    },
	    hoverHandler: function hoverHandler(ev) {
	      if (this.disabled) return;
	
	      var me = this;
	      var popupHideDelay = this.popupHideDelay;
	      var type = ev.type;
	
	
	      if (popupHideDelay && this._mouseLeaveTimer) clearTimeout(this._mouseLeaveTimer);
	
	      if (type === 'mouseenter') {
	        this.show = true;
	        this.resetPos();
	      } else {
	        if (popupHideDelay) {
	          this._mouseLeaveTimer = setTimeout(function () {
	            me.show = false;
	          }, popupHideDelay);
	        } else {
	          this.show = false;
	        }
	      }
	    },
	    focusHandler: function focusHandler(ev) {
	      if (this.disabled) return;
	
	      var type = ev.type;
	
	
	      console.log('ev', ev);
	
	      if (type === 'focus') {
	        this.show = true;
	        this.resetPos();
	      } else {
	        this.show = false;
	      }
	    }
	  },
	
	  attached: function attached() {
	    if (this.$els.popup) {
	      document.body.appendChild(this.$els.popup);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    var $popup = this.$els.popup;
	
	    if ($popup && $popup.nodeType) {
	      $popup.parentNode.removeChild($popup);
	    }
	
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	
	    if (this._closeEvent) {
	      this._closeEvent.remove();
	    }
	
	    this._mouseLeaveTimer = null;
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 171 */
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
/* 172 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-trigger-cont']\">\n  <div v-if=\"trigger === 'click'\"\n       v-el:trigger\n       :class=\"[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]\"\n       @click=\"clickHandler\">\n    <slot name=\"trigger\">trigger slot is not set</slot>\n  </div>\n  <div v-if=\"trigger === 'hover'\"\n       v-el:trigger\n       :class=\"[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]\"\n       @mouseenter=\"hoverHandler\"\n       @mouseleave=\"hoverHandler\">\n    <slot name=\"trigger\">trigger slot is not set</slot>\n  </div>\n  <div v-if=\"trigger === 'focus'\"\n       v-el:trigger\n       :class=\"[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]\">\n    <slot name=\"trigger\">trigger slot is not set</slot>\n  </div>\n  <div v-if=\"trigger === 'hover'\"\n       v-el:popup\n       v-show=\"show\"\n       :class=\"popupClassObj\"\n       :transition=\"effect\"\n       @mouseenter=\"hoverHandler\"\n       @mouseleave=\"hoverHandler\">\n    <slot name=\"popup\">popup slot is not set</slot>\n  </div>\n  <div v-else\n       v-el:popup\n       v-show=\"show\"\n       :class=\"popupClassObj\"\n       :transition=\"effect\">\n    <slot name=\"popup\">popup slot is not set</slot>\n  </div>\n</div>\n";

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-searchbox-cont']\">\n  <trigger trigger=\"focus\" effect=\"slide\" placement=\"bottomLeft\" popup-cls=\"searchbox\">\n    <div slot=\"trigger\">\n      <input type=\"text\"\n             :class=\"inputClassObj\"\n             :placeholder=\"placeholder\"\n             v-model=\"value\"\n             @focus=\"focusInput\"\n             debounce=\"500\" />\n      <icon type=\"clear\" v-show=\"value\" color=\"#bfbfbf\" size=\"14\" @click=\"clearInput\"></icon>\n      <icon type=\"search\" :color=\"iconColor\" size=\"14\"></icon>\n    </div>\n    <div slot=\"popup\" v-if=\"searchList && searchList.length > 0\"\n         :class=\"[prefixCls + '-searchbox-list-containter']\">\n      <ul :class=\"[prefixCls + '-searchbox-list-dropdown']\">\n        <li v-for=\"item in searchList | filterBy value\">\n          <a href=\"javascript:;\" @click=\"checkItem($index, item[textField])\" :title=\"item[textField]\">{{item[textField]}}</a>\n        </li>\n      </ul>\n    </div>\n  </trigger>\n\n</div>\n";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Uploader = __webpack_require__(175);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Uploader2.default;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(176)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Uploader/Uploader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(205)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-628d71b8/Uploader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(177);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Message = __webpack_require__(201);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-upload']" id="upload-{{uploadId}}">
	//     <div v-if="uploadType == 'click'">
	//       <label>
	//         <input
	//           type="file"
	//           :name="name"
	//           :accept="accept"
	//           :id="uploadId"
	//           :multiple="multiple"
	//           @change="onChange($event)" />
	//         <slot>
	//           <span :class="[prefixCls + '-btn', prefixCls + '-btn-tertiary']">点击上传</span>
	//         </slot>
	//       </label>
	//       <div :class="[prefixCls + '-upload-list']">
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in fileList">
	//           <div :class="[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]"
	//                @mouseover="filemouseover($index)"
	//                @mouseout="filemouseout">
	//             <icon type="doc"
	//                   :class="[prefixCls + '-upload-file-icon']"
	//                   size="12"></icon>
	//             <span>{{file.name}}</span>
	//             <icon type="close"
	//                   :class="[prefixCls + '-upload-del-info']"
	//                   size="12"
	//                   @click="delExistFile($index)"></icon>
	//           </div>
	//         </div>
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
	//           <div :class="[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]"
	//                @mouseover="filemouseover($index)"
	//                @mouseout="filemouseout">
	//             <icon type="doc"
	//                   :class="[prefixCls + '-upload-file-icon']"
	//                   size="12"></icon>
	//             <span>{{file.name}}</span>
	//             <icon type="close"
	//                   :class="[prefixCls + '-upload-del-info']"
	//                   size="12"
	//                   @click="delFile($index)"></icon>
	//           </div>
	//           <div :class="[prefixCls + '-upload-item-progress', progress[$index] == '100%' && (prefixCls + '-hide')]">
	//             <div :class="[prefixCls + '-upload-progress', prefixCls + '-upload-progress-line', prefixCls + '-upload-progress-status-success']">
	//               <div :class="[prefixCls + '-upload-progress-inner']">
	//                 <div :class="[prefixCls + '-upload-progress-bg']" :style="{width: progress[$index]}"></div>
	//               </div>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div v-if="uploadType == 'drag'"
	//          :class="[prefixCls + '-upload-drag']">
	//       <div :class="[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-is-dragover')]">
	//         <input type="file"
	//                :name="name"
	//                :id="uploadId"
	//                :accept="accept"
	//                :multiple="multiple"
	//                @change="onChange($event)" />
	//         <label :for="uploadId"
	//                :class="[prefixCls + '-upload-drag-area']">
	//         <p :class="[prefixCls + '-upload-drag-icon']"></p>
	//         <span v-if="advanceDrag">将文件拖拽至框中上传或点此上传</span>
	//         <span v-if="!advanceDrag">当前环境不支持拖拽上传，请点此上传</span>
	//         <p v-if="fileList.length > 0" v-for="file in selectFiles">{{file}}</p>
	//       </label>
	//       </div>
	//       <div :class="[prefixCls + '-upload-list']">
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in fileList">
	//           <div :class="[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]"
	//                @mouseover="filemouseover($index)"
	//                @mouseout="filemouseout">
	//             <icon type="doc"
	//                   :class="[prefixCls + '-upload-file-icon']"
	//                   size="12"></icon>
	//             <span>{{file.name}}</span>
	//             <icon type="close"
	//                   class="[prefixCls + '-upload-del-info']"
	//                   size="12"
	//                   @click="delExistFile($index)"></icon>
	//           </div>
	//         </div>
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
	//           <div :class="[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]"
	//                @mouseover="filemouseover($index)"
	//                @mouseout="filemouseout">
	//             <icon type="doc"
	//                   :class="[prefixCls + '-upload-file-icon']"
	//                   size="12"></icon>
	//             <span>{{file.name}}</span>
	//             <icon type="close"
	//                   :class="[prefixCls + '-upload-del-info']"
	//                   size="12"
	//                   @click="delFile($index)"></icon>
	//           </div>
	//           <div :class="[prefixCls + '-upload-item-progress', progress[$index] == '100%' && (prefixCls + '-hide')]">
	//             <div :class="[prefixCls + '-upload-progress', prefixCls + '-upload-progress-line', prefixCls + '-upload-progress-status-success']">
	//               <div :class="[prefixCls + '-upload-progress-inner']">
	//                 <div :class="[prefixCls + '-upload-progress-bg']" :style="{width: progress[$index]}"></div>
	//               </div>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
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
	      default: 'click' // drag拖拽上传，click点击上传
	    },
	    accept: {
	      type: String,
	      default: ''
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
	    maxlength: Number,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
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
	          if ((0, _typeof3.default)(files[i]) === 'object' && files[i].name) {
	            this.progress.push('0%');
	            this.uploadList.push(files[i]);
	          }
	        }
	      } else {
	        // 只会取上传的第一个，只能上传一个
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
	      var data = new window.FormData();
	      var i = 0;
	      var len = this.uploadList.length;
	
	      for (i = 0; i < len; i++) {
	        (function (i, file) {
	          if (file.type.match(self.accept)) {
	            (function () {
	              data.append(self.name, file, file.name);
	
	              var xhr = new window.XMLHttpRequest();
	
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
	      return a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol;
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
	            if (files[i] && files[i].name) {
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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(178);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(185);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	__webpack_require__(180);
	module.exports = __webpack_require__(184).f('iterator');

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	var global        = __webpack_require__(88)
	  , hide          = __webpack_require__(92)
	  , Iterators     = __webpack_require__(104)
	  , TO_STRING_TAG = __webpack_require__(122)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(182)
	  , step             = __webpack_require__(183)
	  , Iterators        = __webpack_require__(104)
	  , toIObject        = __webpack_require__(110);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(85)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(122);

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(187);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	module.exports = __webpack_require__(89).Symbol;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(88)
	  , has            = __webpack_require__(103)
	  , DESCRIPTORS    = __webpack_require__(97)
	  , $export        = __webpack_require__(87)
	  , redefine       = __webpack_require__(102)
	  , META           = __webpack_require__(188).KEY
	  , $fails         = __webpack_require__(98)
	  , shared         = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(121)
	  , uid            = __webpack_require__(118)
	  , wks            = __webpack_require__(122)
	  , wksExt         = __webpack_require__(184)
	  , wksDefine      = __webpack_require__(189)
	  , keyOf          = __webpack_require__(190)
	  , enumKeys       = __webpack_require__(191)
	  , isArray        = __webpack_require__(194)
	  , anObject       = __webpack_require__(94)
	  , toIObject      = __webpack_require__(110)
	  , toPrimitive    = __webpack_require__(100)
	  , createDesc     = __webpack_require__(101)
	  , _create        = __webpack_require__(106)
	  , gOPNExt        = __webpack_require__(195)
	  , $GOPD          = __webpack_require__(197)
	  , $DP            = __webpack_require__(93)
	  , $keys          = __webpack_require__(108)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
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
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(196).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(193).f  = $propertyIsEnumerable;
	  __webpack_require__(192).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(86)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(92)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(118)('meta')
	  , isObject = __webpack_require__(95)
	  , has      = __webpack_require__(103)
	  , setDesc  = __webpack_require__(93).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(98)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(88)
	  , core           = __webpack_require__(89)
	  , LIBRARY        = __webpack_require__(86)
	  , wksExt         = __webpack_require__(184)
	  , defineProperty = __webpack_require__(93).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(108)
	  , toIObject = __webpack_require__(110);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(108)
	  , gOPS    = __webpack_require__(192)
	  , pIE     = __webpack_require__(193);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 193 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(112);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(110)
	  , gOPN      = __webpack_require__(196).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(109)
	  , hiddenKeys = __webpack_require__(119).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(193)
	  , createDesc     = __webpack_require__(101)
	  , toIObject      = __webpack_require__(110)
	  , toPrimitive    = __webpack_require__(100)
	  , has            = __webpack_require__(103)
	  , IE8_DOM_DEFINE = __webpack_require__(96)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(97) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 198 */
/***/ function(module, exports) {



/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189)('asyncIterator');

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189)('observable');

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(202);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	['info', 'success', 'error', 'warning', 'loading'].forEach(function (type, i) {
	  _Message2.default[type] = function (content, duration, placement) {
	    duration = duration || 3000;
	    placement = placement || 'top';
	    new Vue({
	      template: '\n        <message class="atui-message-notice"\n        :show="show"\n        :duration="duration"\n        :type="type"\n        :transition="transition"\n        :placement="placement">\n        {{content}}\n        </message>\n        ',
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
	    }).$mount().$appendTo(document.body);
	  };
	});
	
	exports.default = _Message2.default;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Message/Message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-37c076c8/Message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean
	    },
	    showIcon: {
	      type: Boolean
	    },
	    show: {
	      type: Boolean,
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
	    },
	    arrow: String,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    Icon: _Icon2.default
	  },
	  created: function created() {
	    if (this.type) {
	      this.showIcon = true;
	    }
	  },
	
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && Boolean(this.duration)) {
	        this._timeout = setTimeout(function () {
	          _this.show = false;
	        }, this.duration);
	      }
	    }
	  },
	  computed: {
	    messageClassObj: function messageClassObj() {
	      var prefixCls = this.prefixCls;
	      var type = this.type;
	      var arrow = this.arrow;
	      var placement = this.placement;
	
	      var messageClass = {};
	
	      messageClass[prefixCls + '-message'] = true;
	      messageClass[prefixCls + '-message-success'] = type === 'success';
	      messageClass[prefixCls + '-message-warning'] = type === 'warning';
	      messageClass[prefixCls + '-message-info'] = type === 'info';
	      messageClass[prefixCls + '-message-error'] = type === 'error';
	      messageClass[prefixCls + '-message-help'] = type === 'help';
	      messageClass[prefixCls + '-message-top'] = placement === 'top';
	      messageClass[prefixCls + '-message-top-right'] = placement === 'top-right';
	      messageClass[prefixCls + '-message-center'] = placement === 'center';
	      messageClass[prefixCls + '-arrow-' + arrow] = !!arrow;
	
	      return messageClass;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div
	//     v-show="show"
	//     :class="messageClassObj"
	//     :transition="transition"
	//     :style="{width:width}"
	//     role="alert">
	//     <div :class="[prefixCls + '-message-content']">
	//       <button v-show="dismissable" type="button" :class="[prefixCls + '-close']" @click="show = false">
	//       <span>&times;</span>
	//       </button>
	//       <icon v-if="showIcon" :type="type"></icon>
	//       <slot>
	//         {{content}}
	//       </slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  :class=\"messageClassObj\"\n  :transition=\"transition\"\n  :style=\"{width:width}\"\n  role=\"alert\">\n  <div :class=\"[prefixCls + '-message-content']\">\n    <button v-show=\"dismissable\" type=\"button\" :class=\"[prefixCls + '-close']\" @click=\"show = false\">\n    <span>&times;</span>\n    </button>\n    <icon v-if=\"showIcon\" :type=\"type\"></icon>\n    <slot>\n      {{content}}\n    </slot>\n  </div>\n</div>\n";

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-upload']\" id=\"upload-{{uploadId}}\">\n  <div v-if=\"uploadType == 'click'\">\n    <label>\n      <input\n        type=\"file\"\n        :name=\"name\"\n        :accept=\"accept\"\n        :id=\"uploadId\"\n        :multiple=\"multiple\"\n        @change=\"onChange($event)\" />\n      <slot>\n        <span :class=\"[prefixCls + '-btn', prefixCls + '-btn-tertiary']\">点击上传</span>\n      </slot>\n    </label>\n    <div :class=\"[prefixCls + '-upload-list']\">\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in fileList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                :class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delExistFile($index)\"></icon>\n        </div>\n      </div>\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                :class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delFile($index)\"></icon>\n        </div>\n        <div :class=\"[prefixCls + '-upload-item-progress', progress[$index] == '100%' && (prefixCls + '-hide')]\">\n          <div :class=\"[prefixCls + '-upload-progress', prefixCls + '-upload-progress-line', prefixCls + '-upload-progress-status-success']\">\n            <div :class=\"[prefixCls + '-upload-progress-inner']\">\n              <div :class=\"[prefixCls + '-upload-progress-bg']\" :style=\"{width: progress[$index]}\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div v-if=\"uploadType == 'drag'\"\n       :class=\"[prefixCls + '-upload-drag']\">\n    <div :class=\"[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-is-dragover')]\">\n      <input type=\"file\"\n             :name=\"name\"\n             :id=\"uploadId\"\n             :accept=\"accept\"\n             :multiple=\"multiple\"\n             @change=\"onChange($event)\" />\n      <label :for=\"uploadId\"\n             :class=\"[prefixCls + '-upload-drag-area']\">\n      <p :class=\"[prefixCls + '-upload-drag-icon']\"></p>\n      <span v-if=\"advanceDrag\">将文件拖拽至框中上传或点此上传</span>\n      <span v-if=\"!advanceDrag\">当前环境不支持拖拽上传，请点此上传</span>\n      <p v-if=\"fileList.length > 0\" v-for=\"file in selectFiles\">{{file}}</p>\n    </label>\n    </div>\n    <div :class=\"[prefixCls + '-upload-list']\">\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in fileList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delExistFile($index)\"></icon>\n        </div>\n      </div>\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                :class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delFile($index)\"></icon>\n        </div>\n        <div :class=\"[prefixCls + '-upload-item-progress', progress[$index] == '100%' && (prefixCls + '-hide')]\">\n          <div :class=\"[prefixCls + '-upload-progress', prefixCls + '-upload-progress-line', prefixCls + '-upload-progress-status-success']\">\n            <div :class=\"[prefixCls + '-upload-progress-inner']\">\n              <div :class=\"[prefixCls + '-upload-progress-bg']\" :style=\"{width: progress[$index]}\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Slider = __webpack_require__(207);
	
	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slider2.default;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(208)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Slider/Slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(213)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-39c8e1d0/Slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(209);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _EventListener = __webpack_require__(171);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="sliderClassObj" @click="clickFun">
	//     <template v-for="item in valuePercent">
	//       <tooltip :content="valueArray[$index]" placement="top">
	//         <div :class="[prefixCls + '-slider-handle']" :style="{'left': item+'%'}" @mousedown="mousedown"></div>
	//       </tooltip>
	//     </template>
	//     <template v-if="valuePercent.length == 1">
	//       <tooltip :content="valueArray[0]" placement="top">
	//         <div :class="[prefixCls + '-slider-track']" :style="{'visibility': 'visible', 'left': '0%', 'width': valuePercent[0]+'%'}"></div>
	//         </tooltip>
	//     </template>
	//     <template v-if="valuePercent.length > 1">
	//       <div :class="[prefixCls + '-slider-track']" :style="{'visibility': 'visible', 'left': valuePercent[0]+'%', 'width': valuePercent[1]-valuePercent[0]+'%'}"></div>
	//     </template>
	//     <div :class="[prefixCls + '-slider-step']"></div>
	//     <div :class="[prefixCls + '-slider-mark']"></div>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    // 默认值/初识位置，也可实时获取最新值
	    value: [String, Number, Array],
	    // 不可用状态
	    disabled: null,
	    // 区间，最小值
	    min: [String, Number],
	    // 区间，最大值
	    max: [String, Number],
	    // 分段式滑块配置
	    marks: Object,
	    // 不同标记间的关系，默认为包含关系，false表示是并列关系
	    included: {
	      type: Boolean,
	      default: true
	    },
	    // 每步的步数，如果为0，则只能到marks标记位置
	    step: [String, Number],
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
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
	      if (val.length === 1) {
	        this.value = val[0] + '';
	      }
	    }
	  },
	
	  computed: {
	    /**
	     * 取值区间差
	     */
	    range: function range() {
	      // let min = this.min
	      // let max = this.max
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
	      return this.disabled;
	    },
	    sliderClassObj: function sliderClassObj() {
	      var prefixCls = this.prefixCls;
	      var disabled = this.disabled;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-slider'] = true;
	      classObj[prefixCls + '-slider-disabled'] = disabled;
	
	      return classObj;
	    },
	    sliderId: function sliderId() {
	      return this.id || 'slider' + new Date().getTime();
	    }
	  },
	
	  ready: function ready() {
	    var _this = this;
	
	    var self = this;
	
	    setTimeout(function () {
	      self.wrapper = self.getWrapperElement(self.sliderId);
	      self.sliderWidth = self.wrapper.getBoundingClientRect().width;
	      self.wrapperLeft = self.wrapper.getBoundingClientRect().left;
	
	      self.valueArray = _this.valueToArray();
	    }, 0);
	
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
	
	        // 最多只能配置两个数据
	        if (valueArray.length > 2) valueArray.length = 2;
	
	        // 取值不能超过区间
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
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(210);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tooltip2.default;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(211)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tooltip/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(212)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c1d9ec0/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-popover-cont']">
	//     <trigger :trigger="trigger" :effect="effect" :placement="placement" :popup-cls="popupCls">
	//       <slot slot="trigger"></slot>
	//       <slot slot="popup" name="popup" role="tooltip">
	//         <div :class="[prefixCls + '-tooltip-arrow']"></div>
	//         <div :class="[prefixCls + '-tooltip-inner']">
	//           {{{content}}}
	//         </div>
	//       </slot>
	//     </trigger>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  mixins: [_GlobalMixin2.default],
	
	  components: {
	    Trigger: _Trigger2.default
	  },
	
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    effect: {
	      type: String
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    },
	    content: [String, Number],
	    popupCls: {
	      type: String,
	      default: 'tooltip'
	    }
	  },
	
	  events: {
	    'trigger-reset-pos': function triggerResetPos(data) {
	      var prefixCls = this.prefixCls;
	      var popupCls = this.popupCls;
	      var $trigger = data.$trigger;
	      var $popup = data.$popup;
	      var placement = data.placement;
	
	      var $arrow = $popup.querySelector('.' + prefixCls + '-' + popupCls + '-arrow');
	      var triggerOffset = $trigger.getBoundingClientRect();
	
	      // 修正箭头坐标
	      if (placement.endsWith('Left')) {
	        $arrow.style.left = triggerOffset.width / 2 + 'px';
	      } else if (placement.endsWith('Right')) {
	        $arrow.style.right = triggerOffset.width / 2 + 'px';
	      } else if (placement.endsWith('Top')) {
	        $arrow.style.top = triggerOffset.height / 2 + 'px';
	      } else if (placement.endsWith('Bottom')) {
	        $arrow.style.bottom = triggerOffset.height / 2 + 'px';
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-popover-cont']\">\n  <trigger :trigger=\"trigger\" :effect=\"effect\" :placement=\"placement\" :popup-cls=\"popupCls\">\n    <slot slot=\"trigger\"></slot>\n    <slot slot=\"popup\" name=\"popup\" role=\"tooltip\">\n      <div :class=\"[prefixCls + '-tooltip-arrow']\"></div>\n      <div :class=\"[prefixCls + '-tooltip-inner']\">\n        {{{content}}}\n      </div>\n    </slot>\n  </trigger>\n</div>\n";

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"sliderClassObj\" @click=\"clickFun\">\n  <template v-for=\"item in valuePercent\">\n    <tooltip :content=\"valueArray[$index]\" placement=\"top\">\n      <div :class=\"[prefixCls + '-slider-handle']\" :style=\"{'left': item+'%'}\" @mousedown=\"mousedown\"></div>\n    </tooltip>\n  </template>\n  <template v-if=\"valuePercent.length == 1\">\n    <tooltip :content=\"valueArray[0]\" placement=\"top\">\n      <div :class=\"[prefixCls + '-slider-track']\" :style=\"{'visibility': 'visible', 'left': '0%', 'width': valuePercent[0]+'%'}\"></div>\n      </tooltip>\n  </template>\n  <template v-if=\"valuePercent.length > 1\">\n    <div :class=\"[prefixCls + '-slider-track']\" :style=\"{'visibility': 'visible', 'left': valuePercent[0]+'%', 'width': valuePercent[1]-valuePercent[0]+'%'}\"></div>\n  </template>\n  <div :class=\"[prefixCls + '-slider-step']\"></div>\n  <div :class=\"[prefixCls + '-slider-mark']\"></div>\n</div>\n";

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(215);
	
	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(216)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Switch/Switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(217)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-31a40bb8/Switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <span :class="switchClassObj"
	//         :style="{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}"
	//         @click="changeHandler">
	//     <span :class="[prefixCls + '-switch-content']">
	//       <slot v-if="checked && !small" name="checkedPart"></slot>
	//       <slot v-if="!checked && !small" name="unCheckedPart"></slot>
	//     </span>
	//   </span>
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    switchClassObj: function switchClassObj() {
	      var prefixCls = this.prefixCls;
	      var small = this.small;
	      var checked = this.checked;
	      var disabled = this.disabled;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-switch'] = true;
	      classObj[prefixCls + '-switch-small'] = small;
	      classObj[prefixCls + '-switch-checked'] = checked;
	      classObj[prefixCls + '-switch-disabled'] = disabled;
	
	      return classObj;
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
/* 217 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"switchClassObj\"\n      :style=\"{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}\"\n      @click=\"changeHandler\">\n  <span :class=\"[prefixCls + '-switch-content']\">\n    <slot v-if=\"checked && !small\" name=\"checkedPart\"></slot>\n    <slot v-if=\"!checked && !small\" name=\"unCheckedPart\"></slot>\n  </span>\n</span>\n";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(219);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dropdown2.default;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dropdown/Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(221)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-aad12dd0/Dropdown.vue"
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
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-dropdown-cont', open && (prefixCls + '-dropdown-open')]">
	//     <trigger :trigger="trigger"
	//              effect="slide"
	//              popup-cls="dropdown"
	//              placement="bottomLeft"
	//              :popup-hide-delay="200"
	//              :show.sync="open">
	//       <slot slot="trigger"></slot>
	//       <div slot="popup" :class="[prefixCls + '-dropdown-menu-cont']">
	//         <slot name="dropdown-menu" role="dropdown"></slot>
	//       </div>
	//     </trigger>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  mixins: [_GlobalMixin2.default],
	
	  components: {
	    Trigger: _Trigger2.default
	  },
	
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    open: {
	      type: Boolean
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-dropdown-cont', open && (prefixCls + '-dropdown-open')]\">\n  <trigger :trigger=\"trigger\"\n           effect=\"slide\"\n           popup-cls=\"dropdown\"\n           placement=\"bottomLeft\"\n           :popup-hide-delay=\"200\"\n           :show.sync=\"open\">\n    <slot slot=\"trigger\"></slot>\n    <div slot=\"popup\" :class=\"[prefixCls + '-dropdown-menu-cont']\">\n      <slot name=\"dropdown-menu\" role=\"dropdown\"></slot>\n    </div>\n  </trigger>\n</div>\n";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(223);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(230);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Select2.default.Option = _Option2.default;
	
	exports.default = _Select2.default;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(229)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3548fab8/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Tag = __webpack_require__(225);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="selectClassObj">
	//     <trigger trigger="click"
	//              placement="bottomLeft"
	//              effect="slide"
	//              :popup-hide-when-click-outside="true"
	//              :trigger-use-popup-width="true"
	//              :disabled="disabled"
	//              :show.sync="show">
	//       <div slot="trigger" :class="[prefixCls + '-select-toggle', tags && (prefixCls + '-select-tags')]"
	//            tabindex="1"
	//            v-bind="{disabled: disabled}">
	//         <template v-if="!multiple">
	//           <span v-show="showPlaceholder"
	//                 :class="[prefixCls + '-select-placeholder']">{{placeholder}}</span>
	//           <span :class="[prefixCls + '-select-btn-content']">{{ showText }}</span>
	//           <span :class="[prefixCls + '-select-caret', show && (prefixCls + '-select-open')]">
	//             <icon :class="[prefixCls + '-dropdown-icon']" type="down" size="12"></icon></span>
	//         </template>
	//         <div v-else @click="focusInput">
	//           <span :class="[prefixCls + '-select-placeholder']" v-show="showPlaceholder">{{placeholder}}</span>
	//           <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
	//           <input type="text" v-el:search-field :class="[prefixCls + '-select-search-field']" @input="onInput" @keydown.delete="deleteTag" @blur="createTag" @keydown.enter.prevent="createTag" v-model="searchText" autocomplete="off"/>
	//         </div>
	//       </div>
	//       <div slot="popup" :class="[prefixCls + '-dropdown-menu']" v-show="show && options.length > 0">
	//         <slot></slot>
	//         <div v-show="noResult" class="no-result">无结果</div>
	//         <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>
	//       </div>
	//     </trigger>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  name: 'select',
	
	  mixins: [_GlobalMixin2.default],
	
	  props: {
	    width: String,
	    value: {
	      type: [String, Array],
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    tags: Boolean,
	    multiple: Boolean,
	    selectedOptions: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    search: {
	      type: Boolean
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    disabled: {
	      type: Boolean
	    },
	    show: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  components: {
	    Icon: _Icon2.default,
	    Tag: _Tag2.default,
	    Trigger: _Trigger2.default
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
	    if (me.value.length || me.selectedOptions.length) {
	      me.showPlaceholder = false;
	    }
	  },
	  data: function data() {
	    return {
	      searchText: '',
	      noResult: false,
	      activeIndex: 0,
	      showPlaceholder: true,
	      showNotify: false,
	      options: []
	    };
	  },
	
	
	  computed: {
	    showText: function showText() {
	      return this.selectedOptions && this.selectedOptions[0] && this.selectedOptions[0].label;
	    },
	    selectClassObj: function selectClassObj() {
	      var prefixCls = this.prefixCls;
	      var show = this.show;
	      var multiple = this.multiple;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-select-cont'] = true;
	      classObj[prefixCls + '-dropdown-open'] = show;
	      classObj[prefixCls + '-select-multiple'] = multiple;
	
	      return classObj;
	    }
	  },
	
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      if (!val) {
	        this.showPlaceholder = true;
	        return;
	      }
	      this.showPlaceholder = false;
	      if (this.multiple) {
	        if (val.length > this.limit) {
	          this.showNotify = true;
	          this.value.pop();
	          setTimeout(function () {
	            _this.showNotify = false;
	          }, 1000);
	        }
	      } else {
	        this.$broadcast('valueChange', val);
	      }
	    },
	    selectedOptions: function selectedOptions(options) {
	      if (this.multiple) {
	        this.value = this.selectedOptions.map(function (option) {
	          return option.value;
	        });
	      } else {
	        this.value = this.selectedOptions[0].value;
	      }
	      this.$dispatch('change', this.multiple ? options : options[0]);
	    }
	  },
	
	  methods: {
	    closeTag: function closeTag(option) {
	      this.selectedOptions.$remove(option);
	    },
	    deleteTag: function deleteTag(event) {
	      var input = event.target;
	      var value = input.value;
	      if (value.length === 0) {
	        var options = this.selectedOptions;
	        var option = options[options.length - 1];
	        this.selectedOptions.$remove(option);
	      }
	    },
	    onInput: function onInput(event) {
	      var input = event.target;
	      var value = input.value;
	      var width = value.length * 10;
	      this.showPlaceholder = false;
	      input.style.width = width + 10 + 'px';
	    },
	    createTag: function createTag(event) {
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
	        event.target.style.width = '10px';
	      }
	    },
	    focusInput: function focusInput(ev) {
	      this.$els.searchField.focus();
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
	        // this.selectedOptions = [option]
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
	
	  'trigger-popup-toggle': function triggerPopupToggle(show) {
	    var me = this;
	
	    if (this.disabled) {
	      this.show = false;
	      return;
	    }
	
	    this.show = !this.show;
	
	    if (this.multiple) {
	      this.showPlaceholder = false;
	      setTimeout(function () {
	        return me.$els.searchField.focus();
	      }, 10);
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tag = __webpack_require__(226);
	
	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tag2.default;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(227)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tag/Tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(228)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2f4cbe6e/Tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    color: String,
	    closable: Boolean,
	    href: String,
	    size: {
	      type: String,
	      default: '12'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	      this.$dispatch('close', e);
	    }
	  },
	  components: {
	    vIcon: _Icon2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div v-if="!closed"
	//        :class="[prefixCls + '-tag', color && (prefixCls + '-tag-color')]"
	//        :style="{'background-color': color}">
	//     <a :href="href"
	//        :class="[prefixCls + '-tag-text']"
	//        :style="{'fontSize': size+'px'}">
	//       <slot></slot>
	//     </a>
	//     <span v-if="closable"
	//          :class="[prefixCls + '-tag-close']"
	//          @click="closeHandler">
	//      <v-icon type="close" :size="size"></v-icon>
	//     </span>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\"\n     :class=\"[prefixCls + '-tag', color && (prefixCls + '-tag-color')]\"\n     :style=\"{'background-color': color}\">\n  <a :href=\"href\"\n     :class=\"[prefixCls + '-tag-text']\"\n     :style=\"{'fontSize': size+'px'}\">\n    <slot></slot>\n  </a>\n  <span v-if=\"closable\"\n       :class=\"[prefixCls + '-tag-close']\"\n       @click=\"closeHandler\">\n   <v-icon type=\"close\" :size=\"size\"></v-icon>\n  </span>\n</div>\n";

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"selectClassObj\">\n  <trigger trigger=\"click\"\n           placement=\"bottomLeft\"\n           effect=\"slide\"\n           :popup-hide-when-click-outside=\"true\"\n           :trigger-use-popup-width=\"true\"\n           :disabled=\"disabled\"\n           :show.sync=\"show\">\n    <div slot=\"trigger\" :class=\"[prefixCls + '-select-toggle', tags && (prefixCls + '-select-tags')]\"\n         tabindex=\"1\"\n         v-bind=\"{disabled: disabled}\">\n      <template v-if=\"!multiple\">\n        <span v-show=\"showPlaceholder\"\n              :class=\"[prefixCls + '-select-placeholder']\">{{placeholder}}</span>\n        <span :class=\"[prefixCls + '-select-btn-content']\">{{ showText }}</span>\n        <span :class=\"[prefixCls + '-select-caret', show && (prefixCls + '-select-open')]\">\n          <icon :class=\"[prefixCls + '-dropdown-icon']\" type=\"down\" size=\"12\"></icon></span>\n      </template>\n      <div v-else @click=\"focusInput\">\n        <span :class=\"[prefixCls + '-select-placeholder']\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n        <tag v-for=\"option in selectedOptions\" closable @close=\"closeTag(option)\">{{{option.label}}}</tag>\n        <input type=\"text\" v-el:search-field :class=\"[prefixCls + '-select-search-field']\" @input=\"onInput\" @keydown.delete=\"deleteTag\" @blur=\"createTag\" @keydown.enter.prevent=\"createTag\" v-model=\"searchText\" autocomplete=\"off\"/>\n      </div>\n    </div>\n    <div slot=\"popup\" :class=\"[prefixCls + '-dropdown-menu']\" v-show=\"show && options.length > 0\">\n      <slot></slot>\n      <div v-show=\"noResult\" class=\"no-result\">无结果</div>\n      <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\">最多可选 ({{limit}})项.</div>\n    </div>\n  </trigger>\n</div>\n";

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(231)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(232)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c482c9e/Option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 231 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-show="show"
	//        :class="optionClassObj"
	//        @mousedown.prevent.stop="handleClick">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	// import Icon from '../Icon/
	// TODO: 子组件不应该知道父组件的内容，所有业务逻辑应该拿到父组件中去
	exports.default = {
	  name: 'option',
	  props: {
	    value: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	        return item.value === _this.value;
	      });
	    },
	    show: function show() {
	      var searchText = this.$parent.searchText.trim();
	      if (searchText.length && this.$parent.multiple) {
	        return this.$el.innerText.indexOf(searchText) >= 0;
	      }
	      return true;
	    },
	    optionClassObj: function optionClassObj() {
	      var prefixCls = this.prefixCls;
	      var active = this.active;
	      var disabled = this.disabled;
	      var chosen = this.chosen;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-dropdown-option'] = true;
	      classObj[prefixCls + '-dropdown-option-disabled'] = disabled;
	      classObj[prefixCls + '-dropdown-option-active'] = active;
	      classObj[prefixCls + '-dropdown-option-chosen'] = chosen;
	
	      return classObj;
	    }
	  },
	  ready: function ready() {
	    var option = {
	      label: this.$el.innerText,
	      value: this.value,
	      disabled: this.disabled
	    };
	    this.$parent.$data.options.push(option);
	    if (this.$parent.value === this.value) {
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
	  },
	  events: {
	    valueChange: function valueChange(val) {
	      if (val === this.value && !this.disabled) {
	        var option = {
	          label: this.$el.innerText,
	          value: this.value,
	          disabled: this.disabled
	        };
	        this.$parent.selectedOptions = [option];
	        this.chosen = true;
	      }
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"show\"\n     :class=\"optionClassObj\"\n     @mousedown.prevent.stop=\"handleClick\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Calendar = __webpack_require__(234);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Calendar2.default;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(235)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Calendar/Calendar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(236)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-21dbdbb8/Calendar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 235 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="[prefixCls + '-calendar']" v-show="show">
	//     <div :class="[prefixCls + '-calendar-popup']" v-show="displayDayView">
	//       <div :class="[prefixCls + '-calendar-inner']">
	//         <div :class="[prefixCls + '-calendar-header']">
	//           <!-- <span class="atui-calendar-prev-year-btn">»</span> -->
	//           <span :class="[prefixCls + '-calendar-month-btn', prefixCls + '-calendar-preBtn']" @click="preNextMonthClick(0)">‹</span>
	//           <span :class="[prefixCls + '-calendar-month-btn', prefixCls + '-calendar-nextBtn']" @click="preNextMonthClick(1)">›</span>
	//           <!-- <span class="atui-calendar-next-year-btn">»</span> -->
	//           <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	//         </div>
	//         <div :class="[prefixCls + '-calendar-body']">
	//           <div :class="[prefixCls + '-calendar-weekRange']">
	//             <span v-for="w in weekRange">{{w}}</span>
	//           </div>
	//           <div :class="[prefixCls + '-calendar-dateRange']">
	//             <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date,$event)">{{d.text}}</span>
	//           </div>
	//         </div>
	//         <div :class="[prefixCls + '-calendar-footer']">
	//           <a :class="[prefixCls + '-calendar-today-btn']" role="button" @click="daySelect(new Date(),$event)" :title="stringifyDayHeader(currDate)">今天</a>
	//         </div>
	//       </div>
	//     </div>
	//     <div :class="[prefixCls + '-calendar-popup']" v-show="displayMonthView">
	//       <div :class="[prefixCls + '-calendar-inner']">
	//         <div :class="[prefixCls + '-calendar-header']">
	//           <span :class="['month-btn', prefixCls + '-calendar-preBtn']" @click="preNextYearClick(0)">&lt;</span>
	//           <span :class="['month-btn', prefixCls + '-calendar-nextBtn']" @click="preNextYearClick(1)">&gt;</span>
	//           <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	//         </div>
	//         <div :class="[prefixCls + '-calendar-body']">
	//           <div :class="[prefixCls + '-calendar-monthRange']">
	//             <template v-for="m in monthNames">
	//               <span :class="[(monthNames[parse(value).getMonth()]  === m) &&
	//                   currDate.getFullYear() === parse(value).getFullYear() && prefixCls + '-calendar-dateRange-item-active']"
	//                   @click="monthSelect($index)"
	//                 >{{m.substr(0,3)}}</span>
	//             </template>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <div :class="[prefixCls + '-calendar-popup']" v-show="displayYearView">
	//       <div :class="[prefixCls + '-calendar-inner']">
	//         <div :class="[prefixCls + '-calendar-header']">
	//           <span :class="['month-btn', prefixCls + '-calendar-preBtn']" @click="preNextDecadeClick(0)">&lt;</span>
	//           <span :class="['month-btn', prefixCls + '-calendar-nextBtn']" @click="preNextDecadeClick(1)">&gt;</span>
	//           <p>{{stringifyDecadeHeader(currDate)}}</p>
	//         </div>
	//         <div :class="[prefixCls + '-calendar-body']">
	//           <div :class="[prefixCls + '-calendar-monthRange decadeRange']">
	//             <template v-for="decade in decadeRange">
	//               <span :class="[parse(value).getFullYear() === decade.text && prefixCls + '-calendar-dateRange-item-active']"
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
	// <script type="text/babel">
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	      var prefixCls = this.prefixCls;
	
	      if (el.className.split(' ').indexOf(prefixCls + '-calendar-item-disable') >= 0) {
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
/* 236 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-calendar']\" v-show=\"show\">\n  <div :class=\"[prefixCls + '-calendar-popup']\" v-show=\"displayDayView\">\n    <div :class=\"[prefixCls + '-calendar-inner']\">\n      <div :class=\"[prefixCls + '-calendar-header']\">\n        <!-- <span class=\"atui-calendar-prev-year-btn\">»</span> -->\n        <span :class=\"[prefixCls + '-calendar-month-btn', prefixCls + '-calendar-preBtn']\" @click=\"preNextMonthClick(0)\">‹</span>\n        <span :class=\"[prefixCls + '-calendar-month-btn', prefixCls + '-calendar-nextBtn']\" @click=\"preNextMonthClick(1)\">›</span>\n        <!-- <span class=\"atui-calendar-next-year-btn\">»</span> -->\n        <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-body']\">\n        <div :class=\"[prefixCls + '-calendar-weekRange']\">\n          <span v-for=\"w in weekRange\">{{w}}</span>\n        </div>\n        <div :class=\"[prefixCls + '-calendar-dateRange']\">\n          <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,$event)\">{{d.text}}</span>\n        </div>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-footer']\">\n        <a :class=\"[prefixCls + '-calendar-today-btn']\" role=\"button\" @click=\"daySelect(new Date(),$event)\" :title=\"stringifyDayHeader(currDate)\">今天</a>\n      </div>\n    </div>\n  </div>\n  <div :class=\"[prefixCls + '-calendar-popup']\" v-show=\"displayMonthView\">\n    <div :class=\"[prefixCls + '-calendar-inner']\">\n      <div :class=\"[prefixCls + '-calendar-header']\">\n        <span :class=\"['month-btn', prefixCls + '-calendar-preBtn']\" @click=\"preNextYearClick(0)\">&lt;</span>\n        <span :class=\"['month-btn', prefixCls + '-calendar-nextBtn']\" @click=\"preNextYearClick(1)\">&gt;</span>\n        <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-body']\">\n        <div :class=\"[prefixCls + '-calendar-monthRange']\">\n          <template v-for=\"m in monthNames\">\n            <span :class=\"[(monthNames[parse(value).getMonth()]  === m) &&\n                currDate.getFullYear() === parse(value).getFullYear() && prefixCls + '-calendar-dateRange-item-active']\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div :class=\"[prefixCls + '-calendar-popup']\" v-show=\"displayYearView\">\n    <div :class=\"[prefixCls + '-calendar-inner']\">\n      <div :class=\"[prefixCls + '-calendar-header']\">\n        <span :class=\"['month-btn', prefixCls + '-calendar-preBtn']\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n        <span :class=\"['month-btn', prefixCls + '-calendar-nextBtn']\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n        <p>{{stringifyDecadeHeader(currDate)}}</p>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-body']\">\n        <div :class=\"[prefixCls + '-calendar-monthRange decadeRange']\">\n          <template v-for=\"decade in decadeRange\">\n            <span :class=\"[parse(value).getFullYear() === decade.text && prefixCls + '-calendar-dateRange-item-active']\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TimePicker = __webpack_require__(238);
	
	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TimePicker2.default;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(239)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/TimePicker/TimePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(241)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8a73aa50/TimePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Input = __webpack_require__(160);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	var _selection = __webpack_require__(240);
	
	var _selection2 = _interopRequireDefault(_selection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template xmlns:v-el="http://www.w3.org/1999/xhtml">
	//   <div :class="[prefixCls + '-time-picker']">
	//     <trigger trigger="click" placement="bottomLeft" effect="slide" :popup-hide-when-click-outside="true">
	//       <span slot="trigger" :class="[prefixCls + '-time-picker-toggler']">
	//         <v-input readonly
	//                  v-el:picker-toggler
	//                  :value="value"
	//                  :placeholder="placeholder"></v-input>
	//       </span>
	//       <div slot="popup"
	//            :class="[prefixCls + '-time-picker-menus']">
	//         <div :class="[prefixCls + '-time-picker-panel']">
	//           <ul v-el:h :class="time-hours" @mouseover="selection('H')">
	//             <li v-for="index in 24" v-if="disabledHours().indexOf(index) < 0" :class="{selected: hour === index}" @click="chooseHour(index, $event)">{{index | leftPad}}</li>
	//           </ul>
	//         </div>
	//         <div :class="[prefixCls + '-time-picker-panel']">
	//           <ul v-el:m class="time-minute" @mouseover="selection('M')">
	//             <li v-for="index in 59" v-if="disabledMinutes().indexOf(index) < 0" :class="{selected: minute === index}" @click="chooseMinute(index, $event)">{{index | leftPad}}</li>
	//           </ul>
	//         </div>
	//         <div :class="[prefixCls + '-time-picker-panel']" @mouseover="selection('S')">
	//           <ul v-el:s class="time-seconds">
	//             <li v-for="index in 59" v-if="disabledSeconds().indexOf(index) < 0" :class="{selected: second === index}" @click="chooseSecond(index, $event)">{{index | leftPad}}</li>
	//           </ul>
	//         </div>
	//       </div>
	//     </trigger>
	//   </div>
	// </template>
	// <script type="text/babel">
	var scrollTo = function scrollTo(element, to, duration) {
	  var requestAnimationFrame = window.requestAnimationFrame || function () {
	    return setTimeout(arguments[0], 10);
	  };
	  if (duration <= 0) {
	    element.scrollTop = to;
	    return;
	  }
	  var difference = to - element.scrollTop;
	  var perTick = difference / duration * 10;
	  requestAnimationFrame(function () {
	    element.scrollTop = element.scrollTop + perTick;
	    if (element.scrollTop === to) return;
	    scrollTo(element, to, duration - 10);
	  });
	};
	
	exports.default = {
	  mixins: [_GlobalMixin2.default],
	
	  props: {
	    placeholder: {
	      type: String,
	      default: '请选择时间'
	    },
	    // defaultValue: [Date, String],
	    size: {
	      type: String,
	      default: 'default'
	    },
	    value: {
	      type: [Date, String]
	    },
	    hideDisabledOptions: Boolean,
	    disabledHours: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    },
	    disabledMinutes: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    },
	    disabledSeconds: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  filters: {
	    leftPad: function leftPad(value) {
	      return this.leftPad(value);
	    }
	  },
	  components: {
	    vInput: _Input2.default,
	    trigger: _Trigger2.default
	  },
	  data: function data() {
	    var now = new Date();
	    return {
	      hour: now.getHours(),
	      minute: now.getMinutes(),
	      second: now.getSeconds()
	    };
	  },
	
	  watch: {
	    value: function value(val) {
	      if (val) {
	        this.placeholder = '';
	        var time = new Date();
	        time.setHours(this.hour);
	        time.setMinutes(this.minute);
	        time.setSeconds(this.second);
	        this.$dispatch('change', time, this.value);
	      } else {
	        this.placeholder = this.originPlaceHolder;
	      }
	    },
	    hour: function hour(index) {
	      this.selectChoosed('h', index);
	    },
	    minute: function minute(index) {
	      this.selectChoosed('m', index);
	    },
	    second: function second(index) {
	      this.selectChoosed('s', index);
	    }
	  },
	
	  events: {
	    'trigger-popup-toggle': function triggerPopupToggle(show) {
	      var _this = this;
	
	      if (show) {
	        this.$nextTick(function () {
	          _this.selectChoosed('h', _this.hour, 1);
	          _this.selectChoosed('m', _this.minute, 1);
	          _this.selectChoosed('s', _this.second, 1);
	        });
	      }
	    }
	  },
	
	  created: function created() {
	    if (this.value && this.value.constructor === Date) {
	      this.hour = this.value.getHours();
	      this.minute = this.value.getMinutes();
	      this.second = this.value.getSeconds();
	    } else if (this.value && typeof this.value === 'string') {
	      var arr = this.value.split(':');
	      this.hour = +arr[0];
	      this.minute = +arr[1];
	      this.second = +arr[2];
	    } else {
	      this.value = this.leftPad(this.hour) + ':' + this.leftPad(this.minute) + ':' + this.leftPad(this.second);
	    }
	  },
	
	  methods: {
	    leftPad: function leftPad(value) {
	      if (+value < 10) {
	        return '0' + value;
	      }
	      return value;
	    },
	    selection: function selection(choosed) {
	      var start = void 0;
	      var end = void 0;
	      if (choosed === 'H') {
	        start = 0;
	      } else if (choosed === 'M') {
	        start = 3;
	      } else if (choosed === 'S') {
	        start = 6;
	      }
	      end = start + 2;
	      (0, _selection2.default)(this.$els.pickerToggler, start, end);
	    },
	    selectChoosed: function selectChoosed(type, index, duration) {
	      var me = this;
	      var target = me.$els[type];
	      if (target) {
	        scrollTo(target.parentNode, index * target.children[0].offsetHeight, duration || 100);
	      }
	      this.value = this.leftPad(this.hour) + ':' + this.leftPad(this.minute) + ':' + this.leftPad(this.second);
	    },
	    chooseHour: function chooseHour(index) {
	      this.hour = index;
	    },
	    chooseMinute: function chooseMinute(index) {
	      this.minute = index;
	    },
	    chooseSecond: function chooseSecond(index) {
	      this.second = index;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSelection;
	function createSelection(field, start, end) {
	  if (field.createTextRange) {
	    var selRange = field.createTextRange();
	    selRange.collapse(true);
	    selRange.moveStart('character', start);
	    selRange.moveEnd('character', end);
	    selRange.select();
	    field.focus();
	  } else if (field.setSelectionRange) {
	    field.focus();
	    field.setSelectionRange(start, end);
	  } else if (typeof field.selectionStart !== 'undefined') {
	    field.selectionStart = start;
	    field.selectionEnd = end;
	    field.focus();
	  }
	}

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-time-picker']\">\n  <trigger trigger=\"click\" placement=\"bottomLeft\" effect=\"slide\" :popup-hide-when-click-outside=\"true\">\n    <span slot=\"trigger\" :class=\"[prefixCls + '-time-picker-toggler']\">\n      <v-input readonly\n               v-el:picker-toggler\n               :value=\"value\"\n               :placeholder=\"placeholder\"></v-input>\n    </span>\n    <div slot=\"popup\"\n         :class=\"[prefixCls + '-time-picker-menus']\">\n      <div :class=\"[prefixCls + '-time-picker-panel']\">\n        <ul v-el:h :class=\"time-hours\" @mouseover=\"selection('H')\">\n          <li v-for=\"index in 24\" v-if=\"disabledHours().indexOf(index) < 0\" :class=\"{selected: hour === index}\" @click=\"chooseHour(index, $event)\">{{index | leftPad}}</li>\n        </ul>\n      </div>\n      <div :class=\"[prefixCls + '-time-picker-panel']\">\n        <ul v-el:m class=\"time-minute\" @mouseover=\"selection('M')\">\n          <li v-for=\"index in 59\" v-if=\"disabledMinutes().indexOf(index) < 0\" :class=\"{selected: minute === index}\" @click=\"chooseMinute(index, $event)\">{{index | leftPad}}</li>\n        </ul>\n      </div>\n      <div :class=\"[prefixCls + '-time-picker-panel']\" @mouseover=\"selection('S')\">\n        <ul v-el:s class=\"time-seconds\">\n          <li v-for=\"index in 59\" v-if=\"disabledSeconds().indexOf(index) < 0\" :class=\"{selected: second === index}\" @click=\"chooseSecond(index, $event)\">{{index | leftPad}}</li>\n        </ul>\n      </div>\n    </div>\n  </trigger>\n</div>\n";

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(243);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RangePicker = __webpack_require__(246);
	
	var _RangePicker2 = _interopRequireDefault(_RangePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_DatePicker2.default.RangePicker = _RangePicker2.default;
	
	exports.default = _DatePicker2.default;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(244)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/DatePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(245)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-42f6cc38/DatePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	var _Calendar = __webpack_require__(233);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-datepicker']">
	//     <trigger trigger="click" effect="slide" placement="bottomLeft" :show.sync="show">
	//       <div slot="trigger"
	//            :class="[prefixCls + '-datepicker-toggle']">
	//         <input :class="[prefixCls + '-datepicker-input']"
	//         v-bind="{disabled:disabled}"
	//         type="text"
	//         value="value"
	//         :placeholder="placeholder"
	//         readonly />
	//         <icon type="calendar"></icon>
	//       </div>
	//       <div slot="popup"
	//            :class="[prefixCls + '-datepicker-calendar']">
	//         <calendar v-ref:calendar
	//                   @change="selectChange"
	//                   :value="value"
	//                   :format="format"
	//                   :locale="locale"
	//                   :disabled-date="disabledDate"></calendar>
	//       </div>
	//     </trigger>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  name: 'date-picker',
	
	  mixins: [_GlobalMixin2.default],
	
	  props: {
	    value: {
	      type: String
	    },
	    placeholder: {
	      type: String,
	      default: '请选择日期'
	    },
	    format: {
	      default: 'yyyy-MM-dd'
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
	    Icon: _Icon2.default, Calendar: _Calendar2.default, Trigger: _Trigger2.default
	  },
	
	  methods: {
	    selectChange: function selectChange(value) {
	      this.value = value;
	      this.show = false;
	
	      // 冒泡给上一层使用，比如rangePicker
	      return true;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-datepicker']\">\n  <trigger trigger=\"click\" effect=\"slide\" placement=\"bottomLeft\" :show.sync=\"show\">\n    <div slot=\"trigger\"\n         :class=\"[prefixCls + '-datepicker-toggle']\">\n      <input :class=\"[prefixCls + '-datepicker-input']\"\n      v-bind=\"{disabled:disabled}\"\n      type=\"text\"\n      value=\"value\"\n      :placeholder=\"placeholder\"\n      readonly />\n      <icon type=\"calendar\"></icon>\n    </div>\n    <div slot=\"popup\"\n         :class=\"[prefixCls + '-datepicker-calendar']\">\n      <calendar v-ref:calendar\n                @change=\"selectChange\"\n                :value=\"value\"\n                :format=\"format\"\n                :locale=\"locale\"\n                :disabled-date=\"disabledDate\"></calendar>\n    </div>\n  </trigger>\n</div>\n";

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(247)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/RangePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3f2f6bff/RangePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(243);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    showTime: {
	      type: Boolean
	    },
	    startDate: {
	      type: String
	    },
	    endDate: {
	      type: String
	    },
	    format: {
	      default: 'yyyy-MM-dd'
	    },
	    disabled: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    DatePicker: _DatePicker2.default
	  },
	  methods: {
	    onStartDateChange: function onStartDateChange(value) {
	      var me = this;
	      me.setDisabledEndDate(value);
	      if (me.endDate) {
	        me.$dispatch('change', me.startDate, me.endDate);
	      }
	    },
	    onEndDateChange: function onEndDateChange(value) {
	      var me = this;
	      me.setDisabledStartDate(value);
	      if (me.startDate) {
	        me.$dispatch('change', me.startDate, me.endDate);
	      }
	    },
	    setDisabledEndDate: function setDisabledEndDate(value) {
	      // value: "2016-07-07"
	      var endDate = this.$refs.endDate;
	      endDate.disabledDate = function (date) {
	        // date: "Thu Jul 07 2016 00:00:00 GMT+0800 (CST)"
	        // new Date(value) 得到的值是早上8点0分0秒 如：2016-07-07 08:00:00
	        // new Date(date) 得到的值是零晨0点0分0秒 如：2016-07-07 00:00:00
	        // 通过对比发现，相同的年月日进行getTime()，下面代码一定返回true，即选择时间段结束时间的当天会被 disabled
	        // return date.getTime() <= new Date(value).getTime()
	
	        // 改造代码
	        return date.getTime() < new Date(value + ' 00:00:00').getTime();
	      };
	    },
	    setDisabledStartDate: function setDisabledStartDate(value) {
	      var startDate = this.$refs.startDate;
	      startDate.disabledDate = function (date) {
	        // 注释代码，原因同上
	        // return date.getTime() >= new Date(value).getTime()
	
	        // 改造代码
	        return date.getTime() > new Date(value + ' 00:00:00').getTime();
	      };
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// <div :class="[prefixCls + '-datepicker-rangepicker']">
	//   <date-picker v-ref:start-date :value.sync="startDate" :disabled="disabled" :format="format" placeholder="开始日期" @change="onStartDateChange"></date-picker>
	//   <span :class="[prefixCls + '-datepicker-rangepicker-separator']"> - </span>
	//   <date-picker v-ref:end-date :value.sync="endDate" :disabled="disabled" :format="format" placeholder="结束日期" :disabled-date="disabledEndDate" @change="onEndDateChange"></date-picker>
	// </div>
	// </template>
	// <script>

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-datepicker-rangepicker']\">\n  <date-picker v-ref:start-date :value.sync=\"startDate\" :disabled=\"disabled\" :format=\"format\" placeholder=\"开始日期\" @change=\"onStartDateChange\"></date-picker>\n  <span :class=\"[prefixCls + '-datepicker-rangepicker-separator']\"> - </span>\n  <date-picker v-ref:end-date :value.sync=\"endDate\" :disabled=\"disabled\" :format=\"format\" placeholder=\"结束日期\" :disabled-date=\"disabledEndDate\" @change=\"onEndDateChange\"></date-picker>\n</div>\n";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cascader = __webpack_require__(250);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Cascader2.default;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(251)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Cascader/Cascader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(252)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-65e90890/Cascader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Input = __webpack_require__(160);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_GlobalMixin2.default],
	
	  props: {
	    options: {
	      type: Array,
	      required: true
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    width: {
	      type: String
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
	    vInput: _Input2.default,
	    trigger: _Trigger2.default
	  },
	
	  data: function data() {
	    return {
	      menus: [],
	      selectedOptions: [],
	      displayValue: ''
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
	        me.show = false;
	      }
	      me.menus = menus;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div :class="[prefixCls + '-cascader']">
	//     <trigger trigger="click" placement="bottomLeft" effect="slide" :popup-hide-when-click-outside="true">
	//       <span slot="trigger"
	//             :class="[prefixCls + '-cascader-picker']">
	//         <v-input readonly :value="displayValue" :placeholder="placeholder" :style="{width:width}"></v-input>
	//       </span>
	//       <div slot="popup"
	//            :class="[prefixCls + '-cascader-menus']">
	//         <ul :class="[prefixCls + '-cascader-menu']" v-for="(index, menu) in menus">
	//           <li :class="[prefixCls + '-cascader-menu-item', selectedOptions[index] === option && prefixCls + '-cascader-selected', option.disabled && (prefixCls + '-cascader-disabled')]"
	//               v-for="option in menu" @click="changeOption(index,option,$event)">{{option.label}}</li>
	//         </ul>
	//       </div>
	//     </trigger>
	//   </div>
	// </template>
	//
	// <script type="text/babel">

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-cascader']\">\n  <trigger trigger=\"click\" placement=\"bottomLeft\" effect=\"slide\" :popup-hide-when-click-outside=\"true\">\n    <span slot=\"trigger\"\n          :class=\"[prefixCls + '-cascader-picker']\">\n      <v-input readonly :value=\"displayValue\" :placeholder=\"placeholder\" :style=\"{width:width}\"></v-input>\n    </span>\n    <div slot=\"popup\"\n         :class=\"[prefixCls + '-cascader-menus']\">\n      <ul :class=\"[prefixCls + '-cascader-menu']\" v-for=\"(index, menu) in menus\">\n        <li :class=\"[prefixCls + '-cascader-menu-item', selectedOptions[index] === option && prefixCls + '-cascader-selected', option.disabled && (prefixCls + '-cascader-disabled')]\"\n            v-for=\"option in menu\" @click=\"changeOption(index,option,$event)\">{{option.label}}</li>\n      </ul>\n    </div>\n  </trigger>\n</div>\n";

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(254);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Icon = __webpack_require__(135);
	
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
	
	    new Vue({
	      template: '\n        <modal :class="[prefixCls + \'-modal\', prefixCls + \'-confirm\', prefixCls + \'-confirm-\' + type]" :show="show" small :callback="callback">\n          <div v-if="title" slot="modal-header"></div>\n          <div slot="modal-body">\n            <icon :type="type" size="36" :color="color"></icon>\n            <span :class="[prefixCls + \'-confirm-title\']">{{title}}</span>\n            <div :class="[prefixCls + \'-confirm-content\']">{{{content}}}</div>\n          </div>\n          <div v-if="type!==\'help\'" slot="modal-footer" :class="[prefixCls + \'-modal-footer\']">\n            <button type="button" :class="[prefixCls + \'-btn\', prefixCls + \'-btn-default\']" @click="callback">知道了</button>\n          </div>\n        </modal>',
	      components: {
	        Modal: _Modal2.default,
	        Icon: _Icon2.default
	      },
	      data: {
	        title: title,
	        content: content,
	        type: iconConfig[type].icon,
	        color: iconConfig[type].color,
	        show: true,
	        prefixCls: 'atui'
	      },
	      methods: {
	        callback: function callback() {
	          onOk && onOk();
	          this.show = false;
	          // this.$destroy(true)
	          // console.log(this.$el)
	          // document.body.removeChild(this.$el)
	        }
	      }
	    }).$mount().$appendTo(document.body);
	  };
	});
	
	exports.default = _Modal2.default;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(255)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Modal/Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(256)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-75903814/Modal.vue"
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
	//   <div role="dialog" :class="[prefixCls + '-modal']" v-show="show" transition="fade"
	//     @click="clickBack"
	//     >
	//     <div v-show="show"
	//          :class="dialogClassObj"
	//          :style="{width: width}"
	//          role="document"
	//          transition="fade">
	//       <div :class="[prefixCls + '-modal-content']">
	//         <slot name="modal-header">
	//           <div :class="[prefixCls + '-modal-header']">
	//             <button type="button" :class="[prefixCls + '-close']" @click="close"><span>&times;</span></button>
	//             <h4 :class="[prefixCls + '-modal-title']">{{title}}</h4>
	//           </div>
	//         </slot>
	//         <div :class="[prefixCls + '-modal-body']" :style="{height: height, maxHeight: '500px'}">
	//           <slot name="modal-body">
	//           </slot>
	//         </div>
	//         <slot name="modal-footer">
	//           <div :class="[prefixCls + '-modal-footer']">
	//             <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-default']" @click="callback">确定</button>
	//             <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-tertiary']" @click="close">取消</button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    title: {
	      type: String
	    },
	    show: {
	      require: true,
	      type: Boolean
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
	      type: Boolean
	    },
	    large: {
	      type: Boolean
	    },
	    small: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    clickBack: function clickBack() {
	      if (this.backdrop) {
	        this.close();
	      }
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
	  },
	
	  computed: {
	    dialogClassObj: function dialogClassObj() {
	      var prefixCls = this.prefixCls;
	      var large = this.large;
	      var small = this.small;
	
	      var dialogClass = {};
	
	      dialogClass[prefixCls + '-modal-dialog'] = true;
	      dialogClass[prefixCls + '-modal-lg'] = large;
	      dialogClass[prefixCls + '-modal-sm'] = small;
	
	      return dialogClass;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\" :class=\"[prefixCls + '-modal']\" v-show=\"show\" transition=\"fade\"\n  @click=\"clickBack\"\n  >\n  <div v-show=\"show\"\n       :class=\"dialogClassObj\"\n       :style=\"{width: width}\"\n       role=\"document\"\n       transition=\"fade\">\n    <div :class=\"[prefixCls + '-modal-content']\">\n      <slot name=\"modal-header\">\n        <div :class=\"[prefixCls + '-modal-header']\">\n          <button type=\"button\" :class=\"[prefixCls + '-close']\" @click=\"close\"><span>&times;</span></button>\n          <h4 :class=\"[prefixCls + '-modal-title']\">{{title}}</h4>\n        </div>\n      </slot>\n      <div :class=\"[prefixCls + '-modal-body']\" :style=\"{height: height, maxHeight: '500px'}\">\n        <slot name=\"modal-body\">\n        </slot>\n      </div>\n      <slot name=\"modal-footer\">\n        <div :class=\"[prefixCls + '-modal-footer']\">\n          <button type=\"button\" :class=\"[prefixCls + '-btn', prefixCls + '-btn-default']\" @click=\"callback\">确定</button>\n          <button type=\"button\" :class=\"[prefixCls + '-btn', prefixCls + '-btn-tertiary']\" @click=\"close\">取消</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(258);
	
	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(259)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Table/Table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(282)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0421e6d4/Table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(260);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Dropdown = __webpack_require__(218);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Spin = __webpack_require__(264);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	var _Pagination = __webpack_require__(269);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-table', prefixCls + '-table-'+ size, loading && (prefixCls + '-table-loading')]">
	//     <spin size="sm" v-if="loading"></spin>
	//     <!-- <table :class="['atui-table-fixed-header','atui-table']" v-if="fixedHeader">
	//   </table> -->
	//     <div :class="[prefixCls + '-table-container', fixedHeader && (prefixCls + '-table-fixed-header')]">
	//       <table>
	//         <colgroup>
	//           <col v-if="rowSelection"></col>
	//           <col v-for="column in columns" :width="column.width"></col>
	//         </colgroup>
	//         <thead>
	//           <tr>
	//             <th v-if="rowSelection" :class="[prefixCls + '-table-selection-column']">
	//               <input v-if="dataSource && dataSource.length" type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" @change="onCheckAll"
	//               />
	//             </th>
	//             <th v-for="column in columns" :width="column.width">
	//               {{{column['title']}}}
	//               <dropdown v-if="column.filters" data-toggle="dropdown" :open="filterOpened">
	//                 <div data-toggle="dropdown" @click="filterOpened = true">
	//                   <icon type="filter" size="12"></icon>
	//                 </div>
	//                 <div name="dropdown-menu" v-show="filterOpened" transition="slide" :class="[prefixCls + '-dropdown-menu', prefixCls + '-table-filter-dropdown']">
	//                   <ul>
	//                     <li v-for="filter in column.filters">
	//                     <label>
	//                       <input :type="column.filterMultiple === false ? 'radio' : 'checkbox' " :value="filter.value" v-model="filters[column.dataIndex]" />{{filter.text}}
	//                     </label>
	//                     </li>
	//                   </ul>
	//                   <div :class="[prefixCls + '-table-filter-dropdown-btns']">
	//                     <a :class="[prefixCls + '-table-filter-dropdown-link confirm']" @click="onFilter(column)">确定</a>
	//                     <a :class="[prefixCls + '-table-filter-dropdown-link', prefixCls + '-table-clear']" @click="resetFilter(column)">重置</a>
	//                   </div>
	//                 </div>
	//
	//               </dropdown>
	//               <div v-if="dataSource && dataSource.length && column.sorter" :class="[prefixCls + '-table-sorter']">
	//                 <icon type="caretup" size="10" @click="sortAction(column,$index,'ascend')" :class="[sorderOrder[$index] == 'ascend' && (prefixCls + '-table-active')]"></icon>
	//                 <icon type="caretdown" size="10" @click="sortAction(column,$index,'descend')" :class="[sorderOrder[$index] == 'descend' && (prefixCls + '-table-active')]"></icon>
	//               </div>
	//             </th>
	//           </tr>
	//         </thead>
	//         <tbody>
	//           <tr v-if="!dataSource || !dataSource.length">
	//             <td colspan="20" style="text-align: center;" :class="[prefixCls + '-table-empty']">{{noDataTip}}</td>
	//           </tr>
	//           <tr v-for="(rowIndex, record) in dataSource" :track-by="$index">
	//             <td v-if="rowSelection" :class="[prefixCls + '-table-selection-column']">
	//               <input type="checkbox" v-model="checkedValues" :value="record[rowKey]" @change.stop="onCheckOne($event,record)" v-bind="rowSelection.getCheckboxProps && rowSelection.getCheckboxProps(record)"
	//               />
	//             </td>
	//             <td v-for="column in columns">
	//               <template v-if="column.render && record">
	//                 {{{column.render.call(this._context,record[column.dataIndex],record,rowIndex)}}}
	//               </template>
	//               <template v-else>
	//                 {{record[column.dataIndex]}}
	//               </template>
	//             </td>
	//           </tr>
	//         </tbody>
	//       </table>
	//     </div>
	//     <div v-show="pagination && pagination.total > 0" :class="[prefixCls + '-table-pagination']">
	//       <pagination v-ref:pager :total="pagination.total" :show-jumper="true" :show-size-changer="true" @pagination-page-change="changePage" @pagination-size-change="changeSize"></pagination>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  props: {
	    pagination: {
	      type: Object,
	      default: function _default() {
	        return {
	          total: 0,
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
	    rowSelection: Object,
	    rowKey: String,
	    loading: Boolean,
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
	    this.compileTbody();
	    var filters = {};
	    this.columns.forEach(function (item) {
	      if (item.filters) {
	        // 如果有filter的情况，则把filter保存为一个空对象，filter时的chechbox需要用到双向绑定
	        filters[item.dataIndex] = [];
	      }
	    });
	    return {
	      originDataSource: (0, _assign2.default)(this.dataSource || [], []),
	      isCheckedAll: false,
	      isDisabledAll: false,
	      sorderOrder: [],
	      checkedRows: [],
	      filterOpened: false,
	      filters: filters,
	      sorter: {}
	    };
	  },
	  compiled: function compiled() {
	    if (this.pagination.total > 0) {
	      var pager = this.$refs.pager;
	      this.dataSource = this.originDataSource.slice(pager.currPage || 0, pager.pageSize);
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
	      if (me.dataSource && me.dataSource.length) {
	        rows = me.dataSource.filter(function (record) {
	          if (me.rowSelection) {
	            return !me.rowSelection.getCheckboxProps || !me.rowSelection.getCheckboxProps(record).disabled;
	          }
	        });
	      }
	      return rows;
	    }
	  },
	  watch: {
	    dataSource: {
	      handler: function handler(data, oldData) {
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
	        me.isDisabledAll = !me.checkebleRows.length;
	      });
	    },
	    sortAction: function sortAction(column, index, order) {
	      if (typeof column.sorter === 'function') {
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
	
	    // filter时触发
	    onFilter: function onFilter(column) {
	      var me = this;
	      me.filterOpened = true;
	      setTimeout(function () {
	        me.filterOpened = false;
	      }, 100);
	      if (column.hasOwnProperty('filterMultiple') && column.filterMultiple === false) {
	        /* vue的v-model会把radio的值转换成一个字符串，这里为了参数格式与checkbox相同
	        则再转换成数组 */
	        var value = me.filters[column.dataIndex];
	        me.filters[column.dataIndex] = [value];
	      }
	      me.$dispatch('table-change', this.pagination, me.filters, me.sorter);
	    },
	    resetFilter: function resetFilter(column) {
	      this.filters[column.dataIndex] = [];
	      this.onFilter(column);
	    },
	    changePage: function changePage(pageNum) {
	      var me = this;
	      var pager = me.$refs.pager;
	      // 如果原始originDataSource有多余数据，证明是客户端分页
	      if (me.originDataSource.length > pageNum * pager.pageSize) {
	        me.dataSource = me.originDataSource.slice((pageNum - 1) * pager.pageSize, pageNum * pager.pageSize);
	      }
	      this.pagination.onChange && this.pagination.onChange(pageNum);
	      me.pagination.currPage = pageNum;
	      me.$dispatch('table-change', this.pagination, me.filters, me.sorter);
	    },
	    changeSize: function changeSize(current, pageSize) {
	      var pager = this.$refs.pager;
	      this.dataSource = this.originDataSource.slice((current - 1) * pager.pageSize, current * pager.pageSize);
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
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(261), __esModule: true };

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(262);
	module.exports = __webpack_require__(89).Object.assign;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(87);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(263)});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(108)
	  , gOPS     = __webpack_require__(192)
	  , pIE      = __webpack_require__(193)
	  , toObject = __webpack_require__(124)
	  , IObject  = __webpack_require__(111)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(98)(function(){
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
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Spin = __webpack_require__(265);
	
	var _Spin2 = _interopRequireDefault(_Spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spin2.default;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(266)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Spin/Spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(268)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7fd98fb8/Spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cssAnimationSupported = __webpack_require__(267);
	
	var _cssAnimationSupported2 = _interopRequireDefault(_cssAnimationSupported);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'spin',
	  props: {
	    show: Boolean,
	    sping: Boolean,
	    tip: String,
	    size: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	  },
	  computed: {
	    spinClassObj: function spinClassObj() {
	      var prefixCls = this.prefixCls;
	      var size = this.size;
	      var sping = this.sping;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-spin'] = true;
	      classObj[prefixCls + '-spin-' + size] = true;
	      classObj[prefixCls + '-sping'] = sping;
	
	      return classObj;
	    }
	  }
	};
	
	/* generated by vue-loader */
	// <template>
	// <div :class="spinClassObj" v-show="show">
	//   <div v-if="isSupportAnimation || !tip" :class="[prefixCls + '-sping-point']">
	//       <div></div>
	//       <div></div>
	//       <div></div>
	//   </div>
	//   <p v-else :class="[prefixCls + '-sping-text']">{{ tip || '加载中...' }}</p>
	//   <div :class="[prefixCls + '-sping-content']">
	//     <slot></slot>
	//   </div>
	// </div>
	// </template>
	//
	// <script>

/***/ },
/* 267 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var animation = false;
	var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
	var elm = document.createElement('div');
	
	if (elm.style.animationName !== undefined) {
	  animation = true;
	}
	
	if (animation === false) {
	  for (var i = 0; i < domPrefixes.length; i++) {
	    if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	      animation = true;
	      break;
	    }
	  }
	}
	
	exports.default = animation;

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"spinClassObj\" v-show=\"show\">\n  <div v-if=\"isSupportAnimation || !tip\" :class=\"[prefixCls + '-sping-point']\">\n      <div></div>\n      <div></div>\n      <div></div>\n  </div>\n  <p v-else :class=\"[prefixCls + '-sping-text']\">{{ tip || '加载中...' }}</p>\n  <div :class=\"[prefixCls + '-sping-content']\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(270);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Jumper = __webpack_require__(272);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Pagination2.default.Jumper = _Jumper2.default;
	
	exports.default = _Pagination2.default;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(271)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(281)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4ec66d10/Pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Jumper = __webpack_require__(272);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	var _Pager = __webpack_require__(275);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	var _Options = __webpack_require__(278);
	
	var _Options2 = _interopRequireDefault(_Options);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    pageSize: {
	      type: Number,
	      default: 10
	    },
	    total: Number,
	    currPage: {
	      type: Number,
	      default: 1
	    },
	    showJumper: Boolean,
	    showSizeChanger: Boolean,
	    simple: Boolean,
	    mini: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      pageRange: [],
	      totalPage: Math.ceil(this.total / this.pageSize),
	      prevShow: 1,
	      nextShow: 1
	    };
	  },
	
	  watch: {
	    total: function total() {
	      this.getPageRange();
	    },
	    pageSize: function pageSize(_pageSize) {
	      var _this = this;
	
	      this.totalPage = Math.ceil(this.total / _pageSize);
	      if (this.currPage > this.totalPage) {
	        this.currPage = this.totalPage;
	      }
	      this.getPageRange();
	      this.$nextTick(function () {
	        // pagination-size-change将来要废弃，使用size-change
	        _this.$dispatch('pagination-size-change', _this.currPage, _pageSize);
	        _this.$dispatch('size-change', _this.currPage, _pageSize);
	      });
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
	    jumper: _Jumper2.default,
	    pager: _Pager2.default,
	    Options: _Options2.default
	  },
	  methods: {
	    changePageSize: function changePageSize(option) {
	      this.pageSize = +option.value;
	    },
	    getPageRange: function getPageRange() {
	      var start = 0;
	      var end = 0;
	      var me = this;
	      var showLen = me.prevShow + me.nextShow + 1;
	      var totalPage = me.totalPage = Math.ceil(me.total / me.pageSize);
	      var prefixCls = me.prefixCls;
	
	      var currPage = me.currPage;
	
	      if (totalPage <= 1) {
	        start = end = 1;
	      } else if (me.totalPage <= showLen) {
	        start = 1;
	        end = totalPage;
	      } else {
	        if (currPage <= me.prevShow + 1) {
	          start = 1;
	          end = showLen;
	        } else if (currPage >= totalPage - me.nextShow) {
	          end = totalPage;
	          start = totalPage - showLen + 1;
	        } else {
	          start = currPage - me.prevShow;
	          end = currPage + me.nextShow;
	        }
	      }
	
	      me.pageRange = [];
	
	      if (me.simple) {
	        // 上一页
	        if (currPage !== 1) {
	          me.pageRange.push({ num: currPage - 1, text: '<', className: prefixCls + '-pagination-item-prev' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'prev' });
	        }
	
	        me.pageRange.push({ num: me.currPage, text: me.currPage, className: prefixCls + '-pagination-item-current' });
	        me.pageRange.push({ text: '/', className: prefixCls + '-pagination-item-slash' });
	        me.pageRange.push({ text: totalPage });
	
	        // 下一页
	        if (currPage !== totalPage) {
	          me.pageRange.push({ num: currPage + 1, text: '>', className: prefixCls + '-pagination-item-next' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'next' });
	        }
	      } else {
	        // 上一页
	        if (currPage !== 1) {
	          me.pageRange.push({ num: currPage - 1, text: '<', className: prefixCls + '-pagination-item-prev' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'prev' });
	        }
	        // 第一页
	        if (start >= 2) {
	          me.pageRange.push({ num: 1, text: 1 });
	        }
	        // 省略号
	        if (start > 2) {
	          me.pageRange.push({ text: '...', className: prefixCls + '-pagination-item-ellipsis' });
	        }
	        // 显示的页码列表
	        for (var i = start; i <= end; i++) {
	          me.pageRange.push({
	            num: i,
	            text: i,
	            className: i === currPage ? prefixCls + '-pagination-item-current' : ''
	          });
	        }
	        // 省略号
	        if (end < totalPage - 1) {
	          me.pageRange.push({ text: '...', className: prefixCls + '-pagination-item-ellipsis' });
	        }
	        // 最后一页
	        if (end <= totalPage - 1) {
	          me.pageRange.push({ num: totalPage, text: totalPage });
	        }
	        // 下一页
	        if (currPage !== totalPage) {
	          me.pageRange.push({ num: currPage + 1, text: '>', className: prefixCls + '-pagination-item-next' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'next' });
	        }
	      }
	    },
	    pageClick: function pageClick(i) {
	      if (!i) {
	        return false;
	      }
	      if (i === this.currPage) {
	        return false;
	      }
	
	      this.currPage = i;
	      this.getPageRange();
	    },
	    onChange: function onChange(pageNum) {
	      // 此事件在新版中废弃，统一使用change事件，但有历史原因有项目用了，暂时保留
	      this.$dispatch('pagination-page-change', pageNum);
	      // 新加的，暂时保持新老并存
	      this.$dispatch('change', pageNum);
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
	//   <div :class="[prefixCls + '-pagination']">
	//   <template v-if="totalPage > 1">
	//     <options :total="total" :default-size="pageSize" :show-size-changer="showSizeChanger" @pagination-size-change="changePageSize"></options>
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
	//
	// <script>

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(273)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Jumper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(274)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a6e8ec8e/Jumper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 273 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div v-if="quickGo" :class="[prefixCls + '-pagination-jump']">
	//       <div :class="[prefixCls + '-pagination-jumper-wrap']">
	//         跳至
	//         <input type="text" :value="_current" @change="_handleChange($event)" :class="inputClassObj"/>
	//         页
	//       </div>
	//       <button type="button" @click="_go" :class="btnClassObj">
	//     跳转</button>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  compiled: function compiled() {
	    this._current = this.currPage;
	  },
	
	  computed: {
	    inputClassObj: function inputClassObj() {
	      var prefixCls = this.prefixCls;
	      var mini = this.mini;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-pagination-input-jumper'] = !mini;
	      classObj[prefixCls + '-pagination-mini-input'] = mini;
	
	      return classObj;
	    },
	    btnClassObj: function btnClassObj() {
	      var prefixCls = this.prefixCls;
	      var mini = this.mini;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-btn'] = true;
	      classObj[prefixCls + '-btn-tertiary'] = true;
	      classObj[prefixCls + '-btn-default'] = !mini;
	      classObj[prefixCls + '-btn-small'] = mini;
	
	      return classObj;
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

	/* generated by vue-loader */

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"quickGo\" :class=\"[prefixCls + '-pagination-jump']\">\n    <div :class=\"[prefixCls + '-pagination-jumper-wrap']\">\n      跳至\n      <input type=\"text\" :value=\"_current\" @change=\"_handleChange($event)\" :class=\"inputClassObj\"/>\n      页\n    </div>\n    <button type=\"button\" @click=\"_go\" :class=\"btnClassObj\">\n  跳转</button>\n</div>\n";

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(276)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pager.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(277)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c3348e56/Pager.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(135);
	
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    pagerClassObj: function pagerClassObj() {
	      var prefixCls = this.prefixCls;
	      var mini = this.mini;
	      var simple = this.simple;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-pagination-items'] = !mini && !simple;
	      classObj[prefixCls + '-pagination-items-simple'] = simple && !mini;
	      classObj[prefixCls + '-pagination-items-mini'] = !simple && mini;
	
	      return classObj;
	    }
	  },
	
	  components: {
	    Icon: _Icon2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <ul :class="pagerClassObj">
	//     <li v-for="page in pageRange"
	//         @click="pageClick(page.num)"
	//         :class="[prefixCls + '-pagination-item', page.className]" >
	//       <span v-if="page.className != prefixCls + '-pagination-item-prev' && page.className != prefixCls + '-pagination-item-next'">
	//         {{page.text}}
	//       </span>
	//       <icon v-if="page.className === prefixCls + '-pagination-item-prev'"
	//             type="prev"
	//             size="12"
	//             color="#666" ></icon>
	//       <icon v-if="page.className === prefixCls + '-pagination-item-next'"
	//             type="next"
	//             size="12"
	//             color="#666"></icon>
	//       <icon v-if="page.className === prefixCls + '-pagination-item-disabled' && page.icon === 'prev'"
	//             type="prev"
	//             size="12"
	//             color="#e6e6e6"></icon>
	//       <icon v-if="page.className === prefixCls + '-pagination-item-disabled' && page.icon==='next'"
	//             type="next"
	//             size="12"
	//             color="#e6e6e6"></icon>
	//     </li>
	//   </ul>
	// </template>
	//
	// <script type="text/babel">

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"pagerClassObj\">\n  <li v-for=\"page in pageRange\"\n      @click=\"pageClick(page.num)\"\n      :class=\"[prefixCls + '-pagination-item', page.className]\" >\n    <span v-if=\"page.className != prefixCls + '-pagination-item-prev' && page.className != prefixCls + '-pagination-item-next'\">\n      {{page.text}}\n    </span>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-prev'\"\n          type=\"prev\"\n          size=\"12\"\n          color=\"#666\" ></icon>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-next'\"\n          type=\"next\"\n          size=\"12\"\n          color=\"#666\"></icon>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-disabled' && page.icon === 'prev'\"\n          type=\"prev\"\n          size=\"12\"\n          color=\"#e6e6e6\"></icon>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-disabled' && page.icon==='next'\"\n          type=\"next\"\n          size=\"12\"\n          color=\"#e6e6e6\"></icon>\n  </li>\n</ul>\n";

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(279)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Options.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(280)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4c7b53b0/Options.vue"
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
	
	var _Select = __webpack_require__(222);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vOption = _Select2.default.Option; // <template>
	//     <div v-if="showSizeChanger" :class="[prefixCls + '-pagination-selector']">
	//         <v-select :value="'' + defaultSize" @change="change">
	//             <v-option value="10">10 条/页</v-option>
	//             <v-option value="20">20 条/页</v-option>
	//             <v-option value="30">30 条/页</v-option>
	//             <v-option value="40">40 条/页</v-option>
	//         </v-select>
	//         <div :class="[prefixCls + '-pagination-totalpage']">共{{ total }}条数据</div>
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
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    vSelect: _Select2.default, vOption: vOption
	  },
	  methods: {
	    change: function change(data) {
	      this.$dispatch('pagination-size-change', data);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizeChanger\" :class=\"[prefixCls + '-pagination-selector']\">\n    <v-select :value=\"'' + defaultSize\" @change=\"change\">\n        <v-option value=\"10\">10 条/页</v-option>\n        <v-option value=\"20\">20 条/页</v-option>\n        <v-option value=\"30\">30 条/页</v-option>\n        <v-option value=\"40\">40 条/页</v-option>\n    </v-select>\n    <div :class=\"[prefixCls + '-pagination-totalpage']\">共{{ total }}条数据</div>\n</div>\n";

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-pagination']\">\n<template v-if=\"totalPage > 1\">\n  <options :total=\"total\" :default-size=\"pageSize\" :show-size-changer=\"showSizeChanger\" @pagination-size-change=\"changePageSize\"></options>\n  <jumper\n      :quick-go=\"showJumper ? _handleChange.bind(this) : null\"\n      :curr-page=\"currPage\"\n      :total-page=\"totalPage\"\n      :mini=\"mini\"\n  ></jumper>\n  <pager :page-range=\"pageRange\" :simple=\"simple\"  :mini=\"mini\" :page-click=\"pageClick\"></pager>\n</template>\n</div>\n";

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-table', prefixCls + '-table-'+ size, loading && (prefixCls + '-table-loading')]\">\n  <spin size=\"sm\" v-if=\"loading\"></spin>\n  <!-- <table :class=\"['atui-table-fixed-header','atui-table']\" v-if=\"fixedHeader\">\n</table> -->\n  <div :class=\"[prefixCls + '-table-container', fixedHeader && (prefixCls + '-table-fixed-header')]\">\n    <table>\n      <colgroup>\n        <col v-if=\"rowSelection\"></col>\n        <col v-for=\"column in columns\" :width=\"column.width\"></col>\n      </colgroup>\n      <thead>\n        <tr>\n          <th v-if=\"rowSelection\" :class=\"[prefixCls + '-table-selection-column']\">\n            <input v-if=\"dataSource && dataSource.length\" type=\"checkbox\" v-bind=\"{checked:isCheckedAll,disabled:isDisabledAll}\" @change=\"onCheckAll\"\n            />\n          </th>\n          <th v-for=\"column in columns\" :width=\"column.width\">\n            {{{column['title']}}}\n            <dropdown v-if=\"column.filters\" data-toggle=\"dropdown\" :open=\"filterOpened\">\n              <div data-toggle=\"dropdown\" @click=\"filterOpened = true\">\n                <icon type=\"filter\" size=\"12\"></icon>\n              </div>\n              <div name=\"dropdown-menu\" v-show=\"filterOpened\" transition=\"slide\" :class=\"[prefixCls + '-dropdown-menu', prefixCls + '-table-filter-dropdown']\">\n                <ul>\n                  <li v-for=\"filter in column.filters\">\n                  <label>\n                    <input :type=\"column.filterMultiple === false ? 'radio' : 'checkbox' \" :value=\"filter.value\" v-model=\"filters[column.dataIndex]\" />{{filter.text}}\n                  </label>\n                  </li>\n                </ul>\n                <div :class=\"[prefixCls + '-table-filter-dropdown-btns']\">\n                  <a :class=\"[prefixCls + '-table-filter-dropdown-link confirm']\" @click=\"onFilter(column)\">确定</a>\n                  <a :class=\"[prefixCls + '-table-filter-dropdown-link', prefixCls + '-table-clear']\" @click=\"resetFilter(column)\">重置</a>\n                </div>\n              </div>\n\n            </dropdown>\n            <div v-if=\"dataSource && dataSource.length && column.sorter\" :class=\"[prefixCls + '-table-sorter']\">\n              <icon type=\"caretup\" size=\"10\" @click=\"sortAction(column,$index,'ascend')\" :class=\"[sorderOrder[$index] == 'ascend' && (prefixCls + '-table-active')]\"></icon>\n              <icon type=\"caretdown\" size=\"10\" @click=\"sortAction(column,$index,'descend')\" :class=\"[sorderOrder[$index] == 'descend' && (prefixCls + '-table-active')]\"></icon>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr v-if=\"!dataSource || !dataSource.length\">\n          <td colspan=\"20\" style=\"text-align: center;\" :class=\"[prefixCls + '-table-empty']\">{{noDataTip}}</td>\n        </tr>\n        <tr v-for=\"(rowIndex, record) in dataSource\" :track-by=\"$index\">\n          <td v-if=\"rowSelection\" :class=\"[prefixCls + '-table-selection-column']\">\n            <input type=\"checkbox\" v-model=\"checkedValues\" :value=\"record[rowKey]\" @change.stop=\"onCheckOne($event,record)\" v-bind=\"rowSelection.getCheckboxProps && rowSelection.getCheckboxProps(record)\"\n            />\n          </td>\n          <td v-for=\"column in columns\">\n            <template v-if=\"column.render && record\">\n              {{{column.render.call(this._context,record[column.dataIndex],record,rowIndex)}}}\n            </template>\n            <template v-else>\n              {{record[column.dataIndex]}}\n            </template>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div v-show=\"pagination && pagination.total > 0\" :class=\"[prefixCls + '-table-pagination']\">\n    <pagination v-ref:pager :total=\"pagination.total\" :show-jumper=\"true\" :show-size-changer=\"true\" @pagination-page-change=\"changePage\" @pagination-size-change=\"changeSize\"></pagination>\n  </div>\n</div>\n";

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Badge = __webpack_require__(284);
	
	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Badge2.default;

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(285)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Badge/Badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(286)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5783d380/Badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 285 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <span :class="[prefixCls + '-badge']">
	//   <slot></slot>
	//   <sup :class="[prefixCls + '-badge-dot']" v-if="dot"></sup>
	//   <template v-else>
	//     <sup v-if='count > 0' :class="[prefixCls + '-badge-count']">
	//       {{count | short}}
	//     </sup>
	//   </template>
	// </span>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  name: 'badge',
	  props: {
	    count: {
	      type: Number
	    },
	    dot: {
	      type: Boolean
	    },
	    overflowCount: {
	      type: Number,
	      default: 99
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  filters: {
	    short: function short(value) {
	      return value >= this.overflowCount ? this.overflowCount + '+' : value;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"[prefixCls + '-badge']\">\n  <slot></slot>\n  <sup :class=\"[prefixCls + '-badge-dot']\" v-if=\"dot\"></sup>\n  <template v-else>\n    <sup v-if='count > 0' :class=\"[prefixCls + '-badge-count']\">\n      {{count | short}}\n    </sup>\n  </template>\n</span>\n";

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(288);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slide = __webpack_require__(295);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Carousel2.default.Slide = _Slide2.default;
	
	exports.default = _Carousel2.default;

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(289)
	__vue_script__ = __webpack_require__(293)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(294)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b4fafc10/Carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(290);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-b4fafc10&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-b4fafc10&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.carousel-control[_v-b4fafc10] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Carousel/Carousel.vue?57215cc9"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmHA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\n<div class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <indicator></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <slot></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</template>\n\n<script>\nimport EventListener from '../_utils/EventListener.js'\nexport default {\n  props: {\n    indicators: {\n      type: Boolean,\n      default: true\n    },\n    controls: {\n      type: Boolean,\n      default: true\n    },\n    interval: {\n      type: Number,\n      default: 5000\n    }\n  },\n  components: {\n    'indicator': {\n      inherit: true,\n      template: '<li v-for=\"i in indicator\" @click=\"handleIndicatorClick($index)\" v-bind:class=\"{\\'active\\':$index === activeIndex}\"</li>',\n      methods: {\n        handleIndicatorClick (index) {\n          if (this.isAnimating) return false\n          this.isAnimating = true\n          this.activeIndex = index\n        }\n      }\n    }\n  },\n  data () {\n    return {\n      indicator: [],\n      activeIndex: 0,\n      isAnimating: false\n    }\n  },\n  computed: {\n    slider () {\n      return this.$el.querySelectorAll('.item')\n    }\n  },\n  watch: {\n    activeIndex (newVal, oldVal) {\n      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)\n    }\n  },\n  methods: {\n    slide (direction, selected, prev) {\n      if (this._prevSelectedEvent) this._prevSelectedEvent.remove()\n      if (this._selectedEvent) this._selectedEvent.remove()\n      const prevSelectedEl = this.slider[prev]\n      const selectedEl = this.slider[selected]\n      const transitionendFn = () => {\n        [...this.slider].forEach((el) => { el.className = 'item' })\n        selectedEl.classList.add('active')\n        this.isAnimating = false\n      }\n      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev')\n      // request property that requires layout to force a layout\n      // var x = selectedEl.clientHeight\n      this._prevSelectedEvent = EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)\n      this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)\n      prevSelectedEl.classList.add(direction)\n      selectedEl.classList.add(direction)\n    },\n    nextClick () {\n      if (this.isAnimating) return false\n      this.isAnimating = true\n      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0\n    },\n    prevClick () {\n      if (this.isAnimating) return false\n      this.isAnimating = true\n      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1\n    }\n  },\n  ready () {\n    let intervalID = null\n    const el = this.$el\n    function intervalManager (flag, func, time) {\n      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID)\n    }\n    if (this.interval) {\n      intervalManager(true, this.nextClick, this.interval)\n      el.addEventListener('mouseenter', () => intervalManager(false))\n      el.addEventListener('mouseleave', () => intervalManager(true, this.nextClick, this.interval))\n    }\n  }\n}\n</script>\n\n<style scoped>\n  .carousel-control {\n    cursor: pointer;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 291 */
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
/* 292 */
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
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(78);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(171);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
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
	          el.className = 'item';
	        });
	        selectedEl.classList.add('active');
	        _this.isAnimating = false;
	      };
	      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev');
	      // request property that requires layout to force a layout
	      // var x = selectedEl.clientHeight
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
	    if (this.interval) {
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

/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-b4fafc10=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-b4fafc10=\"\">\n    <indicator _v-b4fafc10=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-b4fafc10=\"\">\n    <slot _v-b4fafc10=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-b4fafc10=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-b4fafc10=\"\"></span>\n    <span class=\"sr-only\" _v-b4fafc10=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-b4fafc10=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-b4fafc10=\"\"></span>\n    <span class=\"sr-only\" _v-b4fafc10=\"\">Next</span>\n  </a>\n</div>\n";

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(296)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Slide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(297)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6a295c6e/Slide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 296 */
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
	      if (this.$parent.$children[c].$el === this.$el) {
	        this.index = parseInt(c);
	        break;
	      }
	    }
	    // this.index = [...this.$el.parentNode.children].indexOf(this.$el)
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(299)
	__vue_script__ = __webpack_require__(301)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(302)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0e1beb79/Affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(300);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
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
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-affix {\n  position: fixed;\n}\n", "", {"version":3,"sources":["/./src/components/Affix.vue?b52e3304"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqFA;EACA,gBAAA;CACA","file":"Affix.vue","sourcesContent":["<template>\n<div>\n  <div v-bind:class=\"{'vue-affix': affixed}\"\n    v-bind:style=\"styles\">\n    <slot></slot>\n  </div>\n</div>\n</template>\n\n<script>\nimport EventListener from './_utils/EventListener.js'\nexport default {\n  props: {\n    offset: {\n      type: Number,\n      default: 0\n    }\n  },\n  data () {\n    return {\n      affixed: false,\n      styles: {}\n    }\n  },\n  methods: {\n    scrolling () {\n      const scrollTop = this.getScroll(window, true)\n      const elementOffset = this.getOffset(this.$el)\n      if (!this.affixed && scrollTop > elementOffset.top) {\n        this.affixed = true\n        this.styles = {\n          top: this.offset + 'px',\n          left: elementOffset.left + 'px',\n          width: this.$el.offsetWidth + 'px'\n        }\n      }\n      if (this.affixed && scrollTop < elementOffset.top) {\n        this.affixed = false\n        this.styles = {}\n      }\n    },\n    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20\n    getScroll (w, top) {\n      let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']\n      const method = 'scroll' + (top ? 'Top' : 'Left')\n      if (typeof ret !== 'number') {\n        const d = w.document\n        // ie6,7,8 standard mode\n        ret = d.documentElement[method]\n        if (typeof ret !== 'number') {\n          // quirks mode\n          ret = d.body[method]\n        }\n      }\n      return ret\n    },\n    getOffset (element) {\n      const rect = element.getBoundingClientRect()\n      const body = document.body\n      const clientTop = element.clientTop || body.clientTop || 0\n      const clientLeft = element.clientLeft || body.clientLeft || 0\n      const scrollTop = this.getScroll(window, true)\n      const scrollLeft = this.getScroll(window)\n      return {\n        top: rect.top + scrollTop - clientTop,\n        left: rect.left + scrollLeft - clientLeft\n      }\n    }\n  },\n  ready () {\n    this._scrollEvent = EventListener.listen(window, 'scroll', this.scrolling)\n    this._resizeEvent = EventListener.listen(window, 'resize', this.scrolling)\n  },\n  beforeDestroy () {\n    if (this._scrollEvent) {\n      this._scrollEvent.remove()\n    }\n    if (this._resizeEvent) {\n      this._resizeEvent.remove()\n    }\n  }\n}\n</script>\n\n<style>\n  .vue-affix {\n    position: fixed;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(171);
	
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
	//   <div v-bind:class="{'vue-affix': affixed}"
	//     v-bind:style="styles">
	//     <slot></slot>
	//   </div>
	// </div>
	// </template>
	//
	// <script>

/***/ },
/* 302 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div v-bind:class=\"{'vue-affix': affixed}\"\n    v-bind:style=\"styles\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(304);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(305)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Textarea/Textarea.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(306)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-01ffd738/Textarea.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 305 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="[prefixCls + '-textarea-box']">
	//   <template v-if="autosize">
	//     <pre :id="preId"><span>{{content}}</span><br></pre>
	//   </template>
	//   <textarea v-bind="{disabled: isDisabled}"
	//             :maxlength="limitWords"
	//             :class="textareaClassObj"
	//             :name="name"
	//             :placeholder="placeholder"
	//             v-model="content"></textarea>
	//   <p v-if="limitWords"
	//      :class="wordClassObj">{{ curWords }}/{{ limitWords }}</p>
	//   <p v-if="showWordsCount"
	//      :class="[prefixCls + '-textarea-words-area']">{{ countTips }}{{ curWords }}</p>
	// </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    limitWords: Number,
	    placeholder: String,
	    name: String,
	    disabled: Boolean,
	    error: Boolean,
	    success: Boolean,
	    content: {
	      type: String,
	      default: ''
	    },
	    wordsCount: Boolean,
	    countTips: {
	      type: String,
	      default: '输入字数：'
	    },
	    autosize: Boolean,
	    maxRows: [String, Number],
	    minRows: [String, Number],
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      overLimit: false,
	      isDisabled: this.disabled === true || this.disabled === '',
	      preId: 'pre' + new Date().getTime()
	    };
	  },
	
	  computed: {
	    showWordsCount: function showWordsCount() {
	      return this.wordsCount === true || this.wordsCount === 'true' || this.wordsCount === '';
	    },
	    curWords: function curWords() {
	      if (this.content) {
	        return this.content.length;
	      }
	      return 0;
	    },
	    textareaClassObj: function textareaClassObj() {
	      var prefixCls = this.prefixCls;
	      var success = this.success;
	      var error = this.error;
	      var autosize = this.autosize;
	      var overLimit = this.overLimit;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-textarea'] = true;
	      classObj[prefixCls + '-textarea-success'] = success === true || success === '';
	      classObj[prefixCls + '-textarea-error'] = error || error === '' || overLimit;
	      classObj[prefixCls + '-textarea-autosize'] = autosize;
	
	      return classObj;
	    },
	    wordClassObj: function wordClassObj() {
	      var prefixCls = this.prefixCls;
	      var error = this.error;
	      var overLimit = this.overLimit;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-words-area'] = true;
	      classObj[prefixCls + '-words-error'] = error || error === '' || overLimit;
	
	      return classObj;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (this.maxRows || this.minRows) {
	      (function () {
	        var self = _this;
	        setTimeout(function () {
	          var ele = document.getElementById(self.preId);
	          var style = window.getComputedStyle ? window.getComputedStyle(ele, '') : ele.currentStyle;
	          var borderTopWidth = style.borderTopWidth.replace('px', '') - 0;
	          var borderBottomWidth = style.borderBottomWidth.replace('px', '') - 0;
	          var paddingTop = style.paddingTop.replace('px', '') - 0;
	          var paddingBottom = style.paddingBottom.replace('px', '') - 0;
	          var lineHeight = style.lineHeight.replace('px', '') - 0;
	          if (self.maxRows) {
	            ele.style.maxHeight = self.maxRows * lineHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom + 'px';
	          }
	
	          if (self.minRows) {
	            ele.style.minHeight = self.minRows * lineHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom + 'px';
	          }
	        }, 0);
	      })();
	    }
	  },
	
	  watch: {
	    content: function content(newVal, oldVal) {
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
/* 306 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-textarea-box']\">\n  <template v-if=\"autosize\">\n    <pre :id=\"preId\"><span>{{content}}</span><br></pre>\n  </template>\n  <textarea v-bind=\"{disabled: isDisabled}\"\n            :maxlength=\"limitWords\"\n            :class=\"textareaClassObj\"\n            :name=\"name\"\n            :placeholder=\"placeholder\"\n            v-model=\"content\"></textarea>\n  <p v-if=\"limitWords\"\n     :class=\"wordClassObj\">{{ curWords }}/{{ limitWords }}</p>\n  <p v-if=\"showWordsCount\"\n     :class=\"[prefixCls + '-textarea-words-area']\">{{ countTips }}{{ curWords }}</p>\n</div>\n";

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Accordion = __webpack_require__(308);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(311);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Accordion2.default.Panel = _Panel2.default;
	
	exports.default = _Accordion2.default;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(309)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(310)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-57604c8a/Accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 309 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="[prefixCls + '-panel-group']">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'accordion',
	  props: {
	    openOne: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this.$on('isOpenEvent', function (child) {
	      if (_this.openOne) {
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
	    var me = this;
	    me.$children.forEach(function (item, index) {
	      item.index = index;
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-panel-group']\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(312)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(313)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-359fb846/Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 312 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="[prefixCls + '-panel', prefixCls + '-panel-default']">
	//     <div :class="[prefixCls + '-panel-heading']"
	//       @click="toggleIsOpen()">
	//       <slot name="panel-header"></slot>
	//     </div>
	//     <div :class="[prefixCls + '-panel-collapse']"
	//       v-el:panel
	//       v-show="open"
	//       transition="collapse"
	//     >
	//       <div :class="[prefixCls + '-panel-body']">
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  props: {
	    open: Boolean,
	    header: String,
	    onToggle: {
	      type: Function,
	      default: function _default() {}
	    },
	    index: Number,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      height: 0
	    };
	  },
	
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.open = !this.open;
	      this.onToggle(this);
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  ready: function ready() {
	    var panel = this.$els.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    if (!this.open) panel.style.display = 'none';
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
	// </script>

	/* generated by vue-loader */

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-panel', prefixCls + '-panel-default']\">\n    <div :class=\"[prefixCls + '-panel-heading']\"\n      @click=\"toggleIsOpen()\">\n      <slot name=\"panel-header\"></slot>\n    </div>\n    <div :class=\"[prefixCls + '-panel-collapse']\"\n      v-el:panel\n      v-show=\"open\"\n      transition=\"collapse\"\n    >\n      <div :class=\"[prefixCls + '-panel-body']\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(315);
	
	var _Popover2 = _interopRequireDefault(_Popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Popover2.default;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(316)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Popover/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(317)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-60f88ff8/Popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _GlobalMixin = __webpack_require__(167);
	
	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);
	
	var _Trigger = __webpack_require__(168);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-popover-cont']">
	//     <trigger :trigger="trigger" :effect="effect" :placement="placement" popup-cls="popover">
	//       <slot slot="trigger"></slot>
	//       <slot slot="popup" name="popup" role="popover">
	//         <div :class="[prefixCls + '-popover-arrow']"></div>
	//         <h3 :class="[prefixCls + '-popover-title']" v-show="header && title">{{title}}</h3>
	//         <div :class="[prefixCls + '-popover-content']">
	//           {{content}}
	//         </div>
	//       </slot>
	//     </trigger>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  mixins: [_GlobalMixin2.default],
	
	  components: {
	    Trigger: _Trigger2.default
	  },
	
	  props: {
	    trigger: {
	      type: String
	    },
	    effect: {
	      type: String
	    },
	    placement: {
	      type: String
	    },
	    title: {
	      type: String
	    },
	    content: [String, Number],
	    header: {
	      type: Boolean,
	      default: true
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 317 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-popover-cont']\">\n  <trigger :trigger=\"trigger\" :effect=\"effect\" :placement=\"placement\" popup-cls=\"popover\">\n    <slot slot=\"trigger\"></slot>\n    <slot slot=\"popup\" name=\"popup\" role=\"popover\">\n      <div :class=\"[prefixCls + '-popover-arrow']\"></div>\n      <h3 :class=\"[prefixCls + '-popover-title']\" v-show=\"header && title\">{{title}}</h3>\n      <div :class=\"[prefixCls + '-popover-content']\">\n        {{content}}\n      </div>\n    </slot>\n  </trigger>\n</div>\n";

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(319);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(322);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Tabset2.default.Tab = _Tab2.default;
	
	exports.default = _Tabset2.default;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(320)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(321)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fc9f2b32/Tabset.vue"
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
	
	var _Icon = __webpack_require__(135);
	
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	    listClassObj: function listClassObj() {
	      var prefixCls = this.prefixCls;
	      var base = this.base;
	      var size = this.size;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-nav'] = true;
	      classObj[prefixCls + '-nav-tab'] = !base;
	      classObj[prefixCls + '-nav-base'] = base;
	      classObj[prefixCls + '-nav-small'] = size === 'small';
	
	      return classObj;
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
	      var prefixCls = this.prefixCls;
	
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
	      this.$el.querySelector('.' + prefixCls + '-nav').style.transform = 'translateX(-" + this.itemsWidth[this.prev_tabIndex].left + "px)';
	    },
	    _handleTabWidth: function _handleTabWidth() {
	      var self = this;
	      var dom = self.$el;
	      var prefixCls = self.prefixCls;
	      var nav = dom.querySelector('.' + prefixCls + '-nav');
	      var tabsHeader = dom.querySelector('.' + prefixCls + '-tab-header');
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
	//   <div :class="[prefixCls + '-tab-wrapper']">
	//     <div :class="[prefixCls + '-tab-header']">
	//       <span v-if="renderData.length > showLen && showLen >= 3" :class="[prefixCls + '-tab-arrow-prev']" @click="prev">
	//         <icon v-if="prev_tabIndex==0" type="prev" size="12" color="#ccc" style="cursor: not-allowed"></icon>
	//         <icon v-else type="prev" size="12"></icon>
	//       </span>
	//       <ul v-if="trigger=='click'" :class="listClassObj" role="tablist" style="width: 99999px;">
	//         <li v-for="r in renderData"
	//             :class="[$index === active && (prefixCls + '-nav-active'), r.disabled && (prefixCls + '-nav-disabled')]"
	//             @click.prevent="handleTabListClick($index, r)"
	//             :disabled="r.disabled"
	//         >
	//             <a href="javascript:void(0);">{{{r.header}}}</a>
	//         </li>
	//       </ul>
	//       <ul v-else :class="listClassObj" role="tablist" style="width: 99999px;">
	//       <li v-for="r in renderData"
	//             :class="[$index === active && (prefixCls + '-nav-active'), r.disabled && (prefixCls + '-nav-disabled')]"
	//             @mouseenter.prevent="handleTabListClick($index, r)"
	//             :disabled="r.disabled"
	//         >
	//             <a href="javascript:void(0);">{{{r.header}}}</a>
	//         </li>
	//       </ul>
	//       <span v-if="renderData.length > showLen && showLen >= 3" :class="[prefixCls + '-tab-arrow-next']" @click="next">
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
	// <script type="text/babel">

/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-tab-wrapper']\">\n  <div :class=\"[prefixCls + '-tab-header']\">\n    <span v-if=\"renderData.length > showLen && showLen >= 3\" :class=\"[prefixCls + '-tab-arrow-prev']\" @click=\"prev\">\n      <icon v-if=\"prev_tabIndex==0\" type=\"prev\" size=\"12\" color=\"#ccc\" style=\"cursor: not-allowed\"></icon>\n      <icon v-else type=\"prev\" size=\"12\"></icon>\n    </span>\n    <ul v-if=\"trigger=='click'\" :class=\"listClassObj\" role=\"tablist\" style=\"width: 99999px;\">\n      <li v-for=\"r in renderData\"\n          :class=\"[$index === active && (prefixCls + '-nav-active'), r.disabled && (prefixCls + '-nav-disabled')]\"\n          @click.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <ul v-else :class=\"listClassObj\" role=\"tablist\" style=\"width: 99999px;\">\n    <li v-for=\"r in renderData\"\n          :class=\"[$index === active && (prefixCls + '-nav-active'), r.disabled && (prefixCls + '-nav-disabled')]\"\n          @mouseenter.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <span v-if=\"renderData.length > showLen && showLen >= 3\" :class=\"[prefixCls + '-tab-arrow-next']\" @click=\"next\">\n      <icon v-if=\"next_tabIndex == maxTabIndex\" type=\"next\" size=\"12\" color=\"#ccc\" style=\"cursor: not-allowed\"></icon>\n      <icon v-else type=\"next\" size=\"12\"></icon>\n    </span>\n  </div>\n\n   <!-- Tab panes -->\n   <div class=\"tab-content\" v-el:tab-content>\n      <slot></slot>\n   </div>\n</div>\n\n";

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(323)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(324)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c768556a/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 323 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div role="tabpanel" :class="[prefixCls + 'tab-pane']"
	//       v-show="show"
	//       :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	      return this.$parent.active === this.index;
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
	      if (this.$parent.$children[c].$el === this.$el) {
	        this.index = +c;
	        break;
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" :class=\"[prefixCls + 'tab-pane']\"\n    v-show=\"show\"\n    :transition=\"transition\"\n>\n  <slot></slot>\n</div>\n";

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Steps = __webpack_require__(326);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Step = __webpack_require__(329);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Steps2.default.Step = _Step2.default;
	
	exports.default = _Steps2.default;

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(327)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(328)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3e184b88/Steps.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 327 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="[prefixCls + '-steps']">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script type="text/ecmascript-6">
	exports.default = {
	  props: {
	    current: {
	      type: Number,
	      default: 0
	    },
	    color: {
	      type: String,
	      default: '#ff7500'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	
	      // this.$el.children[len].style.position = 'absolute'
	
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
/* 328 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-steps']\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(330)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(331)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-805c160a/Step.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(135);
	
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
	    color: String,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    stepClassObj: function stepClassObj() {
	      var prefixCls = this.prefixCls;
	      var status = this.status;
	      var lastStep = this.lastStep;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-step'] = true;
	      classObj[prefixCls + '-step-status-process'] = status === 'process';
	      classObj[prefixCls + '-step-status-finish'] = status === 'finish';
	      classObj[prefixCls + '-step-status-wait'] = status === 'wait';
	      classObj[prefixCls + '-step-item-last'] = lastStep;
	
	      return classObj;
	    }
	  },
	  components: {
	    Icon: _Icon2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div :class="stepClassObj" :style="{'width': tailWidth}">
	//    <div v-if="!lastStep"
	//         :class="[prefixCls + '-step-tail']">
	//      <i>
	//       <i :style="{ backgroundColor: color }"></i>
	//      </i>
	//    </div>
	//    <div :class="[prefixCls + '-step-head']">
	//      <div :class="[prefixCls + '-step-head-inner']">
	//       <span v-if="status !== 'finish'"
	//             :class="[prefixCls + '-step-icon']"
	//         :style="{
	//          borderColor: status==='process'?color: '#e9e9e9',
	//          backgroundColor: status==='process'?color: '#fff'}">
	//         {{ stepNumber }}
	//       </span>
	//       <span v-else
	//             :class="[prefixCls + '-step-finish-icon']">
	//         <icon type="success" size="28" :color="color"></icon>
	//       </span>
	//      </div>
	//    </div>
	//    <div :class="[prefixCls + '-step-main']">
	//      <div :class="[prefixCls + '-step-main-title']">{{ title }}</div>
	//      <div :class="[prefixCls + '-step-main-description']">{{ description }}</div>
	//    </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"stepClassObj\" :style=\"{'width': tailWidth}\">\n <div v-if=\"!lastStep\"\n      :class=\"[prefixCls + '-step-tail']\">\n   <i>\n    <i :style=\"{ backgroundColor: color }\"></i>\n   </i>\n </div>\n <div :class=\"[prefixCls + '-step-head']\">\n   <div :class=\"[prefixCls + '-step-head-inner']\">\n    <span v-if=\"status !== 'finish'\"\n          :class=\"[prefixCls + '-step-icon']\"\n      :style=\"{\n       borderColor: status==='process'?color: '#e9e9e9',\n       backgroundColor: status==='process'?color: '#fff'}\">\n      {{ stepNumber }}\n    </span>\n    <span v-else\n          :class=\"[prefixCls + '-step-finish-icon']\">\n      <icon type=\"success\" size=\"28\" :color=\"color\"></icon>\n    </span>\n   </div>\n </div>\n <div :class=\"[prefixCls + '-step-main']\">\n   <div :class=\"[prefixCls + '-step-main-title']\">{{ title }}</div>\n   <div :class=\"[prefixCls + '-step-main-description']\">{{ description }}</div>\n </div>\n</div>\n";

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tree = __webpack_require__(333);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _TreeNode = __webpack_require__(335);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Tree2.default.TreeNode = _TreeNode2.default;
	
	exports.default = _Tree2.default;

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(334)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tree/Tree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(338)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5df38938/Tree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TreeNode = __webpack_require__(335);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    checkable: {
	      type: Boolean
	    },
	    dataSource: {
	      type: Object
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    TreeNode: _TreeNode2.default
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	// <ul :class="[prefixCls + '-tree']">
	//   <tree-node
	//     :model="dataSource">
	//   </tree-node>
	// </ul>
	// </template>
	//
	// <script>

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(336)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tree/TreeNode.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(337)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-270a7a5a/TreeNode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'tree-node',
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
	      this.$dispatch('expand', status, this.model);
	    }
	  },
	  computed: {
	    isFolder: function isFolder() {
	      return this.model.children && this.model.children.length;
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
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <li>
	//     <a :title="model.name" @click="toggle">
	//       <span v-if="isFolder" :class="[prefixCls + '-tree-switcher', open && prefixCls + '-tree-switcher-open']">
	//         <icon type="caretup"></icon>
	//       </span>
	//       <span :class="[prefixCls + '-tree-title']">
	//         {{model.name}}
	//       </span>
	//     </a>
	//     <ul v-show="open" v-if="isFolder" transition="slide" :class="[open && prefixCls + '-tree-child-tree-open']">
	//       <tree-node
	//         v-for="model in model.children"
	//         :model="model">
	//       </tree-node>
	//     </ul>
	//   </li>
	// </template>
	//
	// <script>

/***/ },
/* 337 */
/***/ function(module, exports) {

	module.exports = "\n<li>\n  <a :title=\"model.name\" @click=\"toggle\">\n    <span v-if=\"isFolder\" :class=\"[prefixCls + '-tree-switcher', open && prefixCls + '-tree-switcher-open']\">\n      <icon type=\"caretup\"></icon>\n    </span>\n    <span :class=\"[prefixCls + '-tree-title']\">\n      {{model.name}}\n    </span>\n  </a>\n  <ul v-show=\"open\" v-if=\"isFolder\" transition=\"slide\" :class=\"[open && prefixCls + '-tree-child-tree-open']\">\n    <tree-node\n      v-for=\"model in model.children\"\n      :model=\"model\">\n    </tree-node>\n  </ul>\n</li>\n";

/***/ },
/* 338 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"[prefixCls + '-tree']\">\n  <tree-node\n    :model=\"dataSource\">\n  </tree-node>\n</ul>\n";

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Menu = __webpack_require__(340);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(343);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(346);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(349);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Divider from './Divider.vue'
	
	_Menu2.default.SubMenu = _SubMenu2.default;
	_Menu2.default.MenuItem = _MenuItem2.default;
	_Menu2.default.MenuItemGroup = _MenuItemGroup2.default;
	// Menu.Divider = Divider
	
	exports.default = _Menu2.default;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(341)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(342)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7e5e29d8/Menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 341 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ul :class="[prefixCls + '-menu', prefixCls + '-menu-root', prefixCls + '-menu-'+ mode]">
	//     <slot></slot>
	//   </ul>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  props: {
	    mode: {
	      type: String,
	      default: 'inline'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },
	    openOne: Boolean,
	    defaultOpenKeys: Array,
	    selectedKey: String
	  },
	  ready: function ready() {
	    var me = this;
	    if (me.selectedKey) {
	      this.$broadcast('searchItem', me.selectedKey);
	    }
	  },
	
	  events: {
	    itemClicked: function itemClicked(item, key) {
	      this.selectedKey = key;
	      this.$broadcast('searchItem', key);
	      // 触发事件给调用上级组件
	      this.$dispatch('click', item, key);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 342 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"[prefixCls + '-menu', prefixCls + '-menu-root', prefixCls + '-menu-'+ mode]\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(344)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/SubMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(345)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-732f31d6/SubMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(177);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Icon = __webpack_require__(135);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    title: String,
	    show: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },
	    type: Boolean,
	    disabled: Boolean,
	    key: String
	  },
	  components: {
	    Icon: _Icon2.default
	  },
	  data: function data() {
	    return {
	      mode: this.$parent.mode
	    };
	  },
	
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (val) {
	        var _ret = function () {
	          var me = _this;
	          if (!me.$parent.openOne) {
	            return {
	              v: void 0
	            };
	          }
	          var sibling = me.$parent.$children;
	          sibling.forEach(function (item) {
	            if (me !== item) {
	              item.show = false;
	            }
	          });
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	      }
	    }
	  },
	  methods: {
	    triggerSub: function triggerSub() {
	      var me = this;
	      me.show = !me.show;
	    }
	  },
	  events: {
	    // 当子menu选中时，自动打开父菜单
	    open: function open() {
	      this.show = true;
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
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <li :class="[prefixCls + '-menu-submenu', prefixCls + '-menu-submenu-' + mode, show && (prefixCls + '-menu-submenu-open')]">
	//     <div :class="[prefixCls + '-menu-submenu-title']" @click="triggerSub">
	//       {{title}}
	//       <icon type="down" :class="[prefixCls + '-menu-icon']"></icon>
	//     </div>
	//     <ul :class="[prefixCls + '-menu', prefixCls + '-menu-sub', prefixCls + '-menu-'+ mode]" v-show="show" transition="collapse">
	//       <slot></slot>
	//     </ul>
	//   </li>
	// </template>
	//
	// <script>

/***/ },
/* 345 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"[prefixCls + '-menu-submenu', prefixCls + '-menu-submenu-' + mode, show && (prefixCls + '-menu-submenu-open')]\">\n  <div :class=\"[prefixCls + '-menu-submenu-title']\" @click=\"triggerSub\">\n    {{title}}\n    <icon type=\"down\" :class=\"[prefixCls + '-menu-icon']\"></icon>\n  </div>\n  <ul :class=\"[prefixCls + '-menu', prefixCls + '-menu-sub', prefixCls + '-menu-'+ mode]\" v-show=\"show\" transition=\"collapse\">\n    <slot></slot>\n  </ul>\n</li>\n";

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(347)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/MenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(348)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-459ab0ea/MenuItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 347 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <li role="menuitem"
	//   :class="[prefixCls + '-menu-item', disabled && (prefixCls + '-menu-item-disabled') , selected && (prefixCls + '-menu-item-selected')]"
	//   style="padding-left:48px"
	//   @click="selectItem($event)"
	// >
	//   <slot></slot>
	// </li>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    disabled: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },
	    key: String,
	    selected: Boolean
	  },
	  methods: {
	    selectItem: function selectItem() {
	      this.$dispatch('itemClicked', this, this.key);
	    }
	  },
	  events: {
	    // Menu 父组件传达查找子组件命令，指定选中状态
	    searchItem: function searchItem(key) {
	      this.selected = this.key === key;
	      if (this.selected) {
	        this.$dispatch('open', this, this.key);
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 348 */
/***/ function(module, exports) {

	module.exports = "\n<li role=\"menuitem\"\n  :class=\"[prefixCls + '-menu-item', disabled && (prefixCls + '-menu-item-disabled') , selected && (prefixCls + '-menu-item-selected')]\"\n  style=\"padding-left:48px\"\n  @click=\"selectItem($event)\"\n>\n  <slot></slot>\n</li>\n";

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(350)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/MenuItemGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(351)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-37e29c64/MenuItemGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 350 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <li :class="[prefixCls + '-menu-item-group']">
	//     <div :class="[prefixCls + '-menu-item-group-title']">{{title}}</div>
	//     <ul :class="[prefixCls + '-menu-item-group-list']">
	//       <slot></slot>
	//     </ul>
	//   </li>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    title: String,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"[prefixCls + '-menu-item-group']\">\n  <div :class=\"[prefixCls + '-menu-item-group-title']\">{{title}}</div>\n  <ul :class=\"[prefixCls + '-menu-item-group-list']\">\n    <slot></slot>\n  </ul>\n</li>\n";

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Breadcrumb = __webpack_require__(353);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(356);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Breadcrumb2.default.BreadcrumbItem = _BreadcrumbItem2.default;
	
	exports.default = _Breadcrumb2.default;

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(354)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/Breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(355)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-54cd6dd8/Breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 354 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="[prefixCls + '-breadcrumbs']">
	//   <slot></slot>
	// </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  props: {
	    slash: {
	      type: String,
	      default: '/'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  ready: function ready() {
	    var me = this;
	    me.$children.forEach(function (child) {
	      child.slash = me.slash;
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 355 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-breadcrumbs']\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(357)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/BreadcrumbItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(358)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-bb4028ea/BreadcrumbItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 357 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<span :class="[prefixCls + '-breadcrumb']">
	// 		<a v-if="href"
	//        :href="href"
	//        :class="[prefixCls + '-breadcrumb-link']">
	// 			<slot></slot>
	// 		</a>
	// 		<span v-else
	//           :class="[prefixCls + '-breadcrumb-link']">
	// 			<slot></slot>
	// 		</span>
	// 		<span :class="[prefixCls + '-breadcrumb-slash']">{{ slash }}</span>
	// 	</span>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  props: {
	    href: String,
	    slash: String,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = "\n\t<span :class=\"[prefixCls + '-breadcrumb']\">\n\t\t<a v-if=\"href\"\n       :href=\"href\"\n       :class=\"[prefixCls + '-breadcrumb-link']\">\n\t\t\t<slot></slot>\n\t\t</a>\n\t\t<span v-else\n          :class=\"[prefixCls + '-breadcrumb-link']\">\n\t\t\t<slot></slot>\n\t\t</span>\n\t\t<span :class=\"[prefixCls + '-breadcrumb-slash']\">{{ slash }}</span>\n\t</span>\n";

/***/ },
/* 359 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"navbar navbar-top bs-docs-nav\" id=\"top\" role=\"banner\">\n  <v-row class=\"container\">\n    <v-col span=\"5\">\n      <h1><a href=\"components.html\">ATUI</a></h1>\n    </v-col>\n    <v-col span=\"25\">\n      <v-menu mode=\"horizontal\">\n        <menu-item><a href=\"components.html\">组件</a></menu-item>\n        <menu-item><a href=\"widgets.html\">widgets(业务组件)</a></menu-item>\n        <menu-item><a href=\"filters.html\">filters(数据过滤器)</a></menu-item>\n        <menu-item><a href=\"http://gitlab.alibaba-inc.com/aliqin/atui/\">GitLab</a></menu-item>\n        <menu-item><a href=\"http://ued.aliqin.alibaba.net/webcompon/\">视觉稿</a></menu-item>\n      </v-menu>\n    </v-col>\n  </v-row>\n</header>\n<ul class=\"themes\" id=\"J_header\">\n  <li v-for=\"theme in themes\" :class=\"{active:theme.active}\" :style=\"{backgroundColor:theme.color}\" @click=\"changeTheme(theme.csslink,$event)\" :title=\"theme.name\">\n  </li>\n</ul>\n";

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(361)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7b81fc34/gettingStarted.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 361 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"getting-started\">\n\n    <h2>安装方法：CommonJS</h2>\n    <pre><code class=\"language-javascript\">\n$ tnpm install @ali/vue-component --save-dev\n\n// css引入 greater-blue | tao-orange | or tmall-red (推荐)\nimport '@ali/vue-component/dist/greater-blue.css'\n\n// 或less引入\nimport '@ali/vue-component/style/themes/greater-blue.css'\n\n// 引入组件\nimport { Alert } from '@ali/vue-component'\n\n// 如果没有使用rollup或webpak2.0，整个组件JS都会打包进去，使用如下方式可按需打包\nimport Alert from '@ali/vue-component/src/components/Alert'\n\nnew Vue({\n  components: {\n    Alert\n  }\n})\n    </code></pre>\n    <h3>浏览器引用</h3>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/atui.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueComponent.alert\n&lt;/script&gt;\n    </code></pre>\n  </div>\n";

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(363)
	__vue_script__ = __webpack_require__(365)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/gridDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(366)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-526a1778/gridDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(364);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
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
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid-demo .atui-row{\n  margin:5px 0;\n}\n.grid-demo .atui-row > div{\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n  background: #99EAD8;\n  background-clip: content-box;\n}\n", "", {"version":3,"sources":["/./docs-backup/example/gridDocs.vue?d710431c"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4IA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,oBAAA;EACA,6BAAA;CACA","file":"gridDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"grid\">\n    <h3 class=\"page-header\"><a href=\"#grid\" class=\"anchor\">Grid 栅格 </a></h3>\n    <div class=\"bs-example\">\n      <div class=\"grid-demo\">\n        <v-row>\n          <v-col span=\"24\">col-24</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"23\">col-23</v-col>\n          <v-col span=\"1\">1</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"22\">col-22</v-col>\n          <v-col span=\"2\">2</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"21\">col-21</v-col>\n          <v-col span=\"3\">col-3</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"20\">col-20</v-col>\n          <v-col span=\"4\">col-4</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"19\">col-19</v-col>\n          <v-col span=\"5\">col-5</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"18\">col-18</v-col>\n          <v-col span=\"6\">col-6</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"17\">col-17</v-col>\n          <v-col span=\"7\">col-7</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"16\">col-16</v-col>\n          <v-col span=\"8\">col-8</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"15\">col-15</v-col>\n          <v-col span=\"9\">col-9</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"14\">col-14</v-col>\n          <v-col span=\"10\">col-10</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"13\">col-13</v-col>\n          <v-col span=\"11\">col-11</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"12\">col-12</v-col>\n          <v-col span=\"12\">col-12</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n        </v-row>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-row>\n  <v-col span=\"24\">col-24</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"23\">col-23</v-col>\n  <v-col span=\"1\">1</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"22\">col-22</v-col>\n  <v-col span=\"2\">2</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"21\">col-21</v-col>\n  <v-col span=\"3\">col-3</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"20\">col-20</v-col>\n  <v-col span=\"4\">col-4</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"19\">col-19</v-col>\n  <v-col span=\"5\">col-5</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"18\">col-18</v-col>\n  <v-col span=\"6\">col-6</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"17\">col-17</v-col>\n  <v-col span=\"7\">col-7</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"16\">col-16</v-col>\n  <v-col span=\"8\">col-8</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"15\">col-15</v-col>\n  <v-col span=\"9\">col-9</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"14\">col-14</v-col>\n  <v-col span=\"10\">col-10</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"13\">col-13</v-col>\n  <v-col span=\"11\">col-11</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"12\">col-12</v-col>\n  <v-col span=\"12\">col-12</v-col>\n</v-row>\n</script></code></pre>\n  </div>\n</template>\n<style>\n  .grid-demo .atui-row{\n    margin:5px 0;\n  }\n  .grid-demo .atui-row > div{\n    text-align: center;\n    line-height: 30px;\n    height: 30px;\n    background: #99EAD8;\n    background-clip: content-box;\n  }\n</style>\n<script type=\"text/babel\">\n  import {Layout} from 'src/'\n  const vRow = Layout.Row\n  const vCol = Layout.Col\n  export default {\n    components: { vRow, vCol },\n  }\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	var vRow = _src.Layout.Row; // <template>
	//   <div class="bs-docs-section" id="grid">
	//     <h3 class="page-header"><a href="#grid" class="anchor">Grid 栅格 </a></h3>
	//     <div class="bs-example">
	//       <div class="grid-demo">
	//         <v-row>
	//           <v-col span="24">col-24</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="23">col-23</v-col>
	//           <v-col span="1">1</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="22">col-22</v-col>
	//           <v-col span="2">2</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="21">col-21</v-col>
	//           <v-col span="3">col-3</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="20">col-20</v-col>
	//           <v-col span="4">col-4</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="19">col-19</v-col>
	//           <v-col span="5">col-5</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="18">col-18</v-col>
	//           <v-col span="6">col-6</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="17">col-17</v-col>
	//           <v-col span="7">col-7</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="16">col-16</v-col>
	//           <v-col span="8">col-8</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="15">col-15</v-col>
	//           <v-col span="9">col-9</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="14">col-14</v-col>
	//           <v-col span="10">col-10</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="13">col-13</v-col>
	//           <v-col span="11">col-11</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="12">col-12</v-col>
	//           <v-col span="12">col-12</v-col>
	//         </v-row>
	//         <v-row>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//           <v-col span="1"></v-col>
	//         </v-row>
	//       </div>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <v-row>
	//   <v-col span="24">col-24</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="23">col-23</v-col>
	//   <v-col span="1">1</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="22">col-22</v-col>
	//   <v-col span="2">2</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="21">col-21</v-col>
	//   <v-col span="3">col-3</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="20">col-20</v-col>
	//   <v-col span="4">col-4</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="19">col-19</v-col>
	//   <v-col span="5">col-5</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="18">col-18</v-col>
	//   <v-col span="6">col-6</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="17">col-17</v-col>
	//   <v-col span="7">col-7</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="16">col-16</v-col>
	//   <v-col span="8">col-8</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="15">col-15</v-col>
	//   <v-col span="9">col-9</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="14">col-14</v-col>
	//   <v-col span="10">col-10</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="13">col-13</v-col>
	//   <v-col span="11">col-11</v-col>
	// </v-row>
	// <v-row>
	//   <v-col span="12">col-12</v-col>
	//   <v-col span="12">col-12</v-col>
	// </v-row>
	// </script></code></pre>
	//   </div>
	// </template>
	// <style>
	//   .grid-demo .atui-row{
	//     margin:5px 0;
	//   }
	//   .grid-demo .atui-row > div{
	//     text-align: center;
	//     line-height: 30px;
	//     height: 30px;
	//     background: #99EAD8;
	//     background-clip: content-box;
	//   }
	// </style>
	// <script type="text/babel">
	
	var vCol = _src.Layout.Col;
	exports.default = {
	  components: { vRow: vRow, vCol: vCol }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 366 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"grid\">\n    <h3 class=\"page-header\"><a href=\"#grid\" class=\"anchor\">Grid 栅格 </a></h3>\n    <div class=\"bs-example\">\n      <div class=\"grid-demo\">\n        <v-row>\n          <v-col span=\"24\">col-24</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"23\">col-23</v-col>\n          <v-col span=\"1\">1</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"22\">col-22</v-col>\n          <v-col span=\"2\">2</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"21\">col-21</v-col>\n          <v-col span=\"3\">col-3</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"20\">col-20</v-col>\n          <v-col span=\"4\">col-4</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"19\">col-19</v-col>\n          <v-col span=\"5\">col-5</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"18\">col-18</v-col>\n          <v-col span=\"6\">col-6</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"17\">col-17</v-col>\n          <v-col span=\"7\">col-7</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"16\">col-16</v-col>\n          <v-col span=\"8\">col-8</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"15\">col-15</v-col>\n          <v-col span=\"9\">col-9</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"14\">col-14</v-col>\n          <v-col span=\"10\">col-10</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"13\">col-13</v-col>\n          <v-col span=\"11\">col-11</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"12\">col-12</v-col>\n          <v-col span=\"12\">col-12</v-col>\n        </v-row>\n        <v-row>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n          <v-col span=\"1\"></v-col>\n        </v-row>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-row>\n  <v-col span=\"24\">col-24</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"23\">col-23</v-col>\n  <v-col span=\"1\">1</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"22\">col-22</v-col>\n  <v-col span=\"2\">2</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"21\">col-21</v-col>\n  <v-col span=\"3\">col-3</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"20\">col-20</v-col>\n  <v-col span=\"4\">col-4</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"19\">col-19</v-col>\n  <v-col span=\"5\">col-5</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"18\">col-18</v-col>\n  <v-col span=\"6\">col-6</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"17\">col-17</v-col>\n  <v-col span=\"7\">col-7</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"16\">col-16</v-col>\n  <v-col span=\"8\">col-8</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"15\">col-15</v-col>\n  <v-col span=\"9\">col-9</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"14\">col-14</v-col>\n  <v-col span=\"10\">col-10</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"13\">col-13</v-col>\n  <v-col span=\"11\">col-11</v-col>\n</v-row>\n<v-row>\n  <v-col span=\"12\">col-12</v-col>\n  <v-col span=\"12\">col-12</v-col>\n</v-row>\n</script></code></pre>\n  </div>\n";

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(368)
	__vue_script__ = __webpack_require__(370)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/iconDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(371)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2ccbe5ab/iconDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(369);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./iconDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./iconDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#icon .atui-iconfont {\n  display: inline-block;\n  margin:8px;\n}\n", "", {"version":3,"sources":["/./docs-backup/example/iconDocs.vue?452d8ed4"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4DA;EACA,sBAAA;EACA,WAAA;CACA","file":"iconDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"icon\">\n    <h3 class=\"page-header\"><a href=\"#icon\" class=\"anchor\">Icon 图标</a></h3>\n    <div class=\"bs-example\">\n      <icon type=\"caretup\"></icon>箭头\n      <icon type=\"caretdown\"></icon>箭头\n      <icon type=\"head\"></icon>页首\n      <icon type=\"tail\"></icon>页尾\n      <icon type=\"clear\"></icon>清除\n      <icon type=\"close\"></icon>关闭\n      <icon type=\"search\"></icon>搜索\n      <icon type=\"up\"></icon>向上\n      <icon type=\"down\"></icon>向下\n      <icon type=\"prev\"></icon>上一页\n      <icon type=\"next\"></icon>下一页\n      <icon type=\"warning\" color=\"red\" size=\"20\"></icon>警告\n      <icon type=\"error\"></icon>错误\n      <icon type=\"info\"></icon>信息\n      <icon type=\"help\"></icon>帮助\n      <icon type=\"success\"></icon>成功\n      <icon type=\"filter\"></icon>过滤\n      <icon type=\"doc\"></icon>附件\n      <icon type=\"calendar\"></icon>日历\n      <icon type=\"tick\"></icon>对勾\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->\n<icon type=\"arrowup\"></icon>箭头\n<icon type=\"arrowdown\"></icon>箭头\n<icon type=\"head\"></icon>页首\n<icon type=\"tail\"></icon>页尾\n<icon type=\"clear\"></icon>清除\n<icon type=\"close\"></icon>关闭\n<icon type=\"search\"></icon>搜索\n<icon type=\"up\"></icon>向上\n<icon type=\"down\"></icon>向下\n<icon type=\"prev\"></icon>上一页\n<icon type=\"next\"></icon>下一页\n<icon type=\"warning\" color=\"red\" size=\"20\"></icon>警告\n<icon type=\"error\"></icon>错误\n<icon type=\"info\"></icon>信息\n<icon type=\"help\"></icon>帮助\n<icon type=\"success\"></icon>成功\n<icon type=\"filter\"></icon>过滤\n<icon type=\"doc\"></icon>附件\n<icon type=\"calendar\"></icon>日历\n<icon type=\"tick\"></icon>对勾\n  </script></code></pre>\n  <h2>Options</h2>\n  </div>\n</template>\n\n<script>\n  import {Icon} from 'src/'\n  export default {\n    components: { Icon }\n  }\n</script>\n\n<style>\n  #icon .atui-iconfont {\n    display: inline-block;\n    margin:8px;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	exports.default = {
	  components: { Icon: _src.Icon }
	};
	// </script>
	//
	// <style>
	//   #icon .atui-iconfont {
	//     display: inline-block;
	//     margin:8px;
	//   }
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="icon">
	//     <h3 class="page-header"><a href="#icon" class="anchor">Icon 图标</a></h3>
	//     <div class="bs-example">
	//       <icon type="caretup"></icon>箭头
	//       <icon type="caretdown"></icon>箭头
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
	// <icon type="arrowup"></icon>箭头
	// <icon type="arrowdown"></icon>箭头
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
/* 371 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"icon\">\n    <h3 class=\"page-header\"><a href=\"#icon\" class=\"anchor\">Icon 图标</a></h3>\n    <div class=\"bs-example\">\n      <icon type=\"caretup\"></icon>箭头\n      <icon type=\"caretdown\"></icon>箭头\n      <icon type=\"head\"></icon>页首\n      <icon type=\"tail\"></icon>页尾\n      <icon type=\"clear\"></icon>清除\n      <icon type=\"close\"></icon>关闭\n      <icon type=\"search\"></icon>搜索\n      <icon type=\"up\"></icon>向上\n      <icon type=\"down\"></icon>向下\n      <icon type=\"prev\"></icon>上一页\n      <icon type=\"next\"></icon>下一页\n      <icon type=\"warning\" color=\"red\" size=\"20\"></icon>警告\n      <icon type=\"error\"></icon>错误\n      <icon type=\"info\"></icon>信息\n      <icon type=\"help\"></icon>帮助\n      <icon type=\"success\"></icon>成功\n      <icon type=\"filter\"></icon>过滤\n      <icon type=\"doc\"></icon>附件\n      <icon type=\"calendar\"></icon>日历\n      <icon type=\"tick\"></icon>对勾\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->\n<icon type=\"arrowup\"></icon>箭头\n<icon type=\"arrowdown\"></icon>箭头\n<icon type=\"head\"></icon>页首\n<icon type=\"tail\"></icon>页尾\n<icon type=\"clear\"></icon>清除\n<icon type=\"close\"></icon>关闭\n<icon type=\"search\"></icon>搜索\n<icon type=\"up\"></icon>向上\n<icon type=\"down\"></icon>向下\n<icon type=\"prev\"></icon>上一页\n<icon type=\"next\"></icon>下一页\n<icon type=\"warning\" color=\"red\" size=\"20\"></icon>警告\n<icon type=\"error\"></icon>错误\n<icon type=\"info\"></icon>信息\n<icon type=\"help\"></icon>帮助\n<icon type=\"success\"></icon>成功\n<icon type=\"filter\"></icon>过滤\n<icon type=\"doc\"></icon>附件\n<icon type=\"calendar\"></icon>日历\n<icon type=\"tick\"></icon>对勾\n  </script></code></pre>\n  <h2>Options</h2>\n  </div>\n";

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(373)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/buttonDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(374)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-688358b8/buttonDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	//       <button-group @switch="buttonGroupSwitch">
	//         <v-button class="active" value="cancel"></v-button>
	//         <v-button value="ok"></v-button>
	//       </button-group>
	//       <button-group large>
	//         <v-button class="active" value="L"></v-button>
	//         <v-button value="M"></v-button>
	//         <v-button value="M"></v-button>
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
	  },
	  methods: {
	    buttonGroupSwitch: function buttonGroupSwitch(e, index) {
	      alert('当前点击的是按钮组的第' + index + '个按钮');
	    }
	  }
	};
	// </script>
	//

	/* generated by vue-loader */

/***/ },
/* 374 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"button\">\n    <h3 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Button 按钮</a></h3>\n    <div class=\"bs-example\">\n      <h4>普通按钮使用，一级按钮，可以设置按钮大小</h4>\n      <v-button large primary value=\"大号+主按钮\"></v-button>\n      <v-button primary value=\"中号+主按钮\"></v-button>\n      <v-button small primary value=\"小号+主按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，二级按钮</h4>\n      <v-button large secondary value=\"大号+次按钮\"></v-button>\n      <v-button secondary value=\"中号+次按钮\"></v-button>\n      <v-button small secondary value=\"小号+次按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，三级按钮</h4>\n      <v-button large tertiary value=\"大号+三级按钮\"></v-button>\n      <v-button tertiary value=\"中号+三级按钮\"></v-button>\n      <v-button small tertiary value=\"小号+三级按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，禁用按钮</h4>\n      <v-button large disabled value=\"大号+失效按钮\"></v-button>\n      <v-button disabled value=\"中号+失效按钮\"></v-button>\n      <v-button small disabled value=\"小号+失效按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，文字型按钮</h4>\n      <v-button large text value=\"大号+文字型按钮\"></v-button>\n      <v-button text value=\"中号+文字型按钮\"></v-button>\n      <v-button small text value=\"小号+文字型按钮\"></v-button>\n      <br>\n      <h4>普通按钮使用，带有icon的按钮</h4>\n      <v-button>\n        <icon type=\"close\"></icon>关闭\n      </v-button>\n      <br>\n      <h4>按钮组使用</h4>\n      <h5>Basic</h5>\n      <button-group @switch=\"buttonGroupSwitch\">\n        <v-button class=\"active\" value=\"cancel\"></v-button>\n        <v-button value=\"ok\"></v-button>\n      </button-group>\n      <button-group large>\n        <v-button class=\"active\" value=\"L\"></v-button>\n        <v-button value=\"M\"></v-button>\n        <v-button value=\"M\"></v-button>\n      </button-group>\n      <button-group small>\n        <v-button disabled value=\"L\"></v-button>\n        <v-button disabled value=\"M\"></v-button>\n        <v-button disabled value=\"M\"></v-button>\n        <v-button disabled value=\"R\"></v-button>\n      </button-group>\n      <h5>带有icon的按钮组</h5>\n      <button-group>\n        <v-button>\n          <icon type=\"prev\"></icon>上一页\n        </v-button>\n        <v-button>\n          下一页<icon type=\"next\"></icon>\n        </v-button>\n      </button-group>\n      <button-group>\n        <v-button>\n          <icon type=\"head\"></icon>\n        </v-button>\n        <v-button>\n          <icon type=\"tail\"></icon>\n        </v-button>\n      </button-group>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- 基础按钮，使用封装的Button组件，通过添加属性，呈现样式 -->\n<!-- 大号（large）、中号（默认）和小号（small）-->\n<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->\n<!-- 可以通过属性value控制按钮文案或者组件调用中插入html代码 -->\n<v-button large primary value=\"大号+主按钮\"></v-button>\n<v-button large primary>大号+主按钮</v-button>\n<v-button>\n  <icon type=\"close\"></icon>关闭\n</v-button>\n\n<!-- 按钮组，使用封装的ButtonGroup组件 -->\n<button-group>\n  <v-button secondary value=\"cancel\"></v-button>\n  <v-button primary value=\"ok\"></v-button>\n</button-group>\n<button-group large>\n  <v-button primary value=\"L\"></v-button>\n  <v-button secondary value=\"M\"></v-button>\n  <v-button tertiary value=\"M\"></v-button>\n</button-group>\n<button-group small>\n  <v-button disabled value=\"L\"></v-button>\n  <v-button disabled value=\"M\"></v-button>\n  <v-button disabled value=\"M\"></v-button>\n  <v-button disabled value=\"R\"></v-button>\n</button-group>\n<button-group>\n  <v-button>\n    <icon type=\"prev\"></icon>上一页\n  </v-button>\n  <v-button>\n    下一页<icon type=\"next\"></icon>\n  </v-button>\n</button-group>\n<button-group>\n  <v-button>\n    <icon type=\"head\"></icon>\n  </v-button>\n  <v-button>\n    <icon type=\"tail\"></icon>\n  </v-button>\n</button-group>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>按钮文案</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>按钮尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>按钮尺寸，小</td>\n        </tr>\n        <tr>\n          <td>primary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，主按钮</td>\n        </tr>\n        <tr>\n          <td>secondary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，次按钮</td>\n        </tr>\n        <tr>\n          <td>tertiary</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，三级按钮</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，失效按钮</td>\n        </tr>\n        <tr>\n          <td>text</td>\n          <td></td>\n          <td></td>\n          <td>按钮类型，文字型按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(376)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/inputDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(377)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7d364b44/inputDocs.vue"
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
	
	var _src = __webpack_require__(134);
	
	var FormItem = _src.Form.FormItem; // <template>
	//   <div class="bs-docs-section" id="input">
	//     <h3 class="page-header"><a href="#input" class="anchor">Input 输入框</a></h3>
	//     <div class="bs-example">
	//       <div>
	//         <v-input large type="text" placeholder="输入框－大尺寸"></v-input>
	//       </div>
	//       <br>
	//       <div>
	//         <v-input type="text" placeholder="输入框－默认尺寸"></v-input>
	//       </div>
	//       <br>
	//       <div>
	//         <v-input small type="text" placeholder="输入框－小尺寸"></v-input>
	//       </div>
	//       <br>
	//       <div>
	//         <v-input disabled type="text" placeholder="禁用输入框－默认尺寸"></v-input>
	//       </div>
	//       <br>
	//       <div>
	//         <v-input valid-status="error" type="text" placeholder="error输入框－默认尺寸"></v-input>
	//       </div>
	//       <br>
	//       <div>
	//         <v-input valid-status="success" type="text" placeholder="success输入框－默认尺寸"></v-input>
	//       </div>
	//       <h4>带有验证功能的输入框</h4>
	//       <v-form action="aaa.do" method="post">
	//         <form-item required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
	//           <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
	//         </form-item>
	//         <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon :tips="form1.telTips">
	//           <v-input type="tel" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel" :valid-result.sync="form1.telValidResult" :rules="['isNumber','isPhone']" :tips.sync="form1.telTips"></v-input>
	//         </form-item>
	//       </v-form>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <!-- input输入框，使用封装的Input组件，通过添加属性，呈现样式 -->
	// <!-- 大号（large）、中号（默认）、小号（small）、禁用（disabled）、错误提示（error）、成功提示（success）-->
	// <!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
	// <!-- 通过属性placeholder控制输入框预期值的提示信息 -->
	// <!-- 通过属性type控制输入框类型，radio和checkbox不在该组件处理范围，会单独处理，请关注Radio组件和Checkbox组件 -->
	// <div>
	//   <v-input large type="text" placeholder="输入框－大尺寸"></v-input>
	// </div>
	// <br>
	// <div>
	//   <v-input type="text" placeholder="输入框－默认尺寸"></v-input>
	// </div>
	// <br>
	// <div>
	//   <v-input small type="text" placeholder="输入框－小尺寸"></v-input>
	// </div>
	// <br>
	// <div>
	//   <v-input disabled type="text" placeholder="禁用输入框－默认尺寸"></v-input>
	// </div>
	// <br>
	// <div>
	//   <v-input valid-status="error" type="text" placeholder="error输入框－默认尺寸"></v-input>
	// </div>
	// <br>
	// <div>
	//   <v-input valid-status="success" type="text" placeholder="success输入框－默认尺寸"></v-input>
	// </div>
	// <h4>带有验证功能的输入框</h4>
	// <v-form action="aaa.do" method="post">
	//   <form-item required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
	//     <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
	//   </form-item>
	//   <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon :tips="form1.telTips">
	//     <v-input type="tel" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel" :valid-result.sync="form1.telValidResult" :rules="['isNumber','isPhone']" :tips.sync="form1.telTips"></v-input>
	//   </form-item>
	// </v-form>
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
/* 377 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"input\">\n    <h3 class=\"page-header\"><a href=\"#input\" class=\"anchor\">Input 输入框</a></h3>\n    <div class=\"bs-example\">\n      <div>\n        <v-input large type=\"text\" placeholder=\"输入框－大尺寸\"></v-input>\n      </div>\n      <br>\n      <div>\n        <v-input type=\"text\" placeholder=\"输入框－默认尺寸\"></v-input>\n      </div>\n      <br>\n      <div>\n        <v-input small type=\"text\" placeholder=\"输入框－小尺寸\"></v-input>\n      </div>\n      <br>\n      <div>\n        <v-input disabled type=\"text\" placeholder=\"禁用输入框－默认尺寸\"></v-input>\n      </div>\n      <br>\n      <div>\n        <v-input valid-status=\"error\" type=\"text\" placeholder=\"error输入框－默认尺寸\"></v-input>\n      </div>\n      <br>\n      <div>\n        <v-input valid-status=\"success\" type=\"text\" placeholder=\"success输入框－默认尺寸\"></v-input>\n      </div>\n      <h4>带有验证功能的输入框</h4>\n      <v-form action=\"aaa.do\" method=\"post\">\n        <form-item required label=\"姓名：\" :valid-status=\"form1.nameStatus\" label-col=\"4\" has-icon :tips=\"form1.nameTips\">\n          <v-input type=\"text\" placeholder=\"请输入您的姓名\"  :value.sync=\"username\" required required-tips=\"用户名为必填项\" maxlength=\"12\" minlength=\"2\" minlength-tips=\"用户名不能少于2个字符\" :valid-status.sync=\"form1.nameStatus\" :tips.sync=\"form1.nameTips\" :valid-result.sync=\"form1.nameValidResult\"></v-input>\n        </form-item>\n        <form-item required label=\"电话：\" :valid-status=\"form1.telStatus\" label-col=\"4\" has-icon :tips=\"form1.telTips\">\n          <v-input type=\"tel\" placeholder=\"请输入您的电话号码\" :valid-status.sync=\"form1.telStatus\" :value.sync=\"tel\" :valid-result.sync=\"form1.telValidResult\" :rules=\"['isNumber','isPhone']\" :tips.sync=\"form1.telTips\"></v-input>\n        </form-item>\n      </v-form>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- input输入框，使用封装的Input组件，通过添加属性，呈现样式 -->\n<!-- 大号（large）、中号（默认）、小号（small）、禁用（disabled）、错误提示（error）、成功提示（success）-->\n<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->\n<!-- 通过属性placeholder控制输入框预期值的提示信息 -->\n<!-- 通过属性type控制输入框类型，radio和checkbox不在该组件处理范围，会单独处理，请关注Radio组件和Checkbox组件 -->\n<div>\n  <v-input large type=\"text\" placeholder=\"输入框－大尺寸\"></v-input>\n</div>\n<br>\n<div>\n  <v-input type=\"text\" placeholder=\"输入框－默认尺寸\"></v-input>\n</div>\n<br>\n<div>\n  <v-input small type=\"text\" placeholder=\"输入框－小尺寸\"></v-input>\n</div>\n<br>\n<div>\n  <v-input disabled type=\"text\" placeholder=\"禁用输入框－默认尺寸\"></v-input>\n</div>\n<br>\n<div>\n  <v-input valid-status=\"error\" type=\"text\" placeholder=\"error输入框－默认尺寸\"></v-input>\n</div>\n<br>\n<div>\n  <v-input valid-status=\"success\" type=\"text\" placeholder=\"success输入框－默认尺寸\"></v-input>\n</div>\n<h4>带有验证功能的输入框</h4>\n<v-form action=\"aaa.do\" method=\"post\">\n  <form-item required label=\"姓名：\" :valid-status=\"form1.nameStatus\" label-col=\"4\" has-icon :tips=\"form1.nameTips\">\n    <v-input type=\"text\" placeholder=\"请输入您的姓名\"  :value.sync=\"username\" required required-tips=\"用户名为必填项\" maxlength=\"12\" minlength=\"2\" minlength-tips=\"用户名不能少于2个字符\" :valid-status.sync=\"form1.nameStatus\" :tips.sync=\"form1.nameTips\" :valid-result.sync=\"form1.nameValidResult\"></v-input>\n  </form-item>\n  <form-item required label=\"电话：\" :valid-status=\"form1.telStatus\" label-col=\"4\" has-icon :tips=\"form1.telTips\">\n    <v-input type=\"tel\" placeholder=\"请输入您的电话号码\" :valid-status.sync=\"form1.telStatus\" :value.sync=\"tel\" :valid-result.sync=\"form1.telValidResult\" :rules=\"['isNumber','isPhone']\" :tips.sync=\"form1.telTips\"></v-input>\n  </form-item>\n</v-form>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>输入框预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>输入框尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>输入框尺寸，小</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，禁用</td>\n        </tr>\n        <tr>\n          <td>error</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，输入验证失败</td>\n        </tr>\n        <tr>\n          <td>success</td>\n          <td></td>\n          <td></td>\n          <td>输入框状态，输入验证成功</td>\n        </tr>\n        <tr>\n          <td>required</td>\n          <td></td>\n          <td></td>\n          <td>验证非空，也可放在rules参数中</td>\n        </tr>\n        <tr>\n          <td>maxlength</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入字符最大长度</td>\n        </tr>\n        <tr>\n          <td>maxlength-tips</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>最大长度验证失败时提示文案</td>\n        </tr>\n        <tr>\n          <td>minlength</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入字符最小长度</td>\n        </tr>\n        <tr>\n          <td>minlength-tips</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>最小长度验证失败时提示文案</td>\n        </tr>\n        <tr>\n          <td>rules</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>输入框验证规则，内部现已集成required|isPhone|isNumber|isTelephone|isEmail</td>\n        </tr>\n        <tr>\n          <td>valid-status</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>实时获取当前验证状态</td>\n        </tr>\n        <tr>\n          <td>tips</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>实时获取当前验证提示</td>\n        </tr>\n        <tr>\n          <td>valid-result</td>\n          <td><code>Object</code></td>\n          <td></td>\n          <td>实时获取当前所有验证条件的验证结果</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(379)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/uploaderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(380)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0a6d0b20/uploaderDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	//   <div class="bs-docs-section" id="uploader">
	//     <h3 class="page-header"><a href="#uploader" class="anchor">Uploader 文件上传 </a></h3>
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
/* 380 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"uploader\">\n    <h3 class=\"page-header\"><a href=\"#uploader\" class=\"anchor\">Uploader 文件上传 </a></h3>\n    <div class=\"bs-example\">\n      <h4>普通上传，无上传文件格式要求</h4>\n      <uploader\n        upload-type=\"click\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files1\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n      <h4>有上传文件格式要求</h4>\n      <h5>此处只能上传png格式图片</h5>\n      <uploader\n        upload-type=\"click\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files2\"\n        accept=\"image/png\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n      <h4>有上传数量要求</h4>\n      <h5>此处最多只能上传5个文件，包含已经上传的</h5>\n      <uploader\n        upload-type=\"click\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files3\"\n        :maxlength=\"5\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n      <h4>拖拽上传</h4>\n      <uploader\n        id=\"file-upload-drag-test\"\n        form-id=\"upload2\"\n        upload-type=\"drag\"\n        :url=\"ajaxUrl\"\n        :multiple=\"multiple\"\n        name=\"files2\"\n        :auto-submit=\"autoSubmit\"\n        :hide-button=\"hideButton\"\n        :file-list.sync=\"fileList1\">\n      </uploader>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\nupload文件上传\n1、点击上传调用方式\n<form id=\"upload1\" method=\"post\" action=\"{{ajaxUrl}}\">\n  <uploader\n    id=\"file-upload-click-test\"\n    form-id=\"upload1\"\n    upload-type=\"click\"\n    :ajax=\"ajaxUrl\"\n    :multiple=\"multiple\"\n    name=\"files1\"\n    :auto-submit=\"true\"\n    :hide-button=\"true\"\n    :file-list.sync=\"fileList1\">\n  </uploader>\n</form>\n2、支持拖拽上传调用方式\n<form id=\"upload2\" method=\"post\" action=\"{{ajaxUrl}}\">\n  <uploader\n    id=\"file-upload-drag-test\"\n    form-id=\"upload2\"\n    upload-type=\"drag\"\n    :ajax=\"ajaxUrl\"\n    :multiple=\"multiple\"\n    name=\"files2\"\n    :auto-submit=\"autoSubmit\"\n    :hide-button=\"hideButton\"\n    :file-list.sync=\"fileList2\">\n  </uploader>\n</form>\n    </script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>唯一标识</td>\n        </tr>\n        <tr>\n          <td>form-id</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>如需上传后自动提交，请确保以该值为id的form存在，否则，无需设置</td>\n        </tr>\n        <tr>\n          <td>upload-type</td>\n          <td><code>String</code></td>\n          <td><code>click</code></td>\n          <td>取值有<code>click</code>和<code>drop</code>两种，分别代表点击上传和支持拖拽上传</td>\n        </tr>\n        <tr>\n          <td>accept</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>上传的文件类型指定，详细可查看MIME类型</td>\n        </tr>\n        <tr>\n          <td>ajax</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文件上传的地址</td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否支持多文件上传</td>\n        </tr>\n        <tr>\n          <td>name</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>名称</td>\n        </tr>\n        <tr>\n          <td>auto-submit</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>上传后是否自动提交</td>\n        </tr>\n        <tr>\n          <td>hide-button</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否隐藏upload按钮</td>\n        </tr>\n        <tr>\n          <td>file-list</td>\n          <td><code>Array</code></td>\n          <td><code>空数组</code></td>\n          <td>上传的文件列表</td>\n        </tr>\n        <tr>\n          <td>method</td>\n          <td><code>String</code></td>\n          <td><code>POST</code></td>\n          <td>上传文件请求类型</td>\n        </tr>\n        <tr>\n          <td>completed::file-upload</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>上传请求执行完成后的回调，需要在events中捕获。</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n";

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(382)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/formDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(383)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-59073af6/formDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	var Option = _src.Select.Option; // <template>
	//
	//   <div class="bs-docs-section" id="form">
	//     <h3 class="page-header"><a href="#form" class="anchor">Form 表单 </a></h3>
	//     <div class="bs-example">
	//       <h4>纵向排列</h4>
	//       <v-form action="aaa.do" method="post">
	//         <form-item required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
	//           <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
	//         </form-item>
	//         <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon :tips="form1.telTips">
	//           <v-input type="tel" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel" :valid-result.sync="form1.telValidResult" :rules="['isNumber','isPhone']" :tips.sync="form1.telTips"></v-input>
	//         </form-item>
	//         <form-item required label="性别" label-col="4">
	//           <label><input type="radio" name="sexy" checked />男</label>
	//           <label><input type="radio" name="sexy" />女</label>
	//         </form-item>
	//         <form-item required label="性取向" label-col="4">
	//           <label><input type="checkbox" name="sexy" checked />男</label>
	//           <label><input type="checkbox" name="sexy" />女</label>
	//         </form-item>
	//         <form-item required label="行业：" label-col="4">
	//           <v-select :value.sync="arr" :options="industry" :close-on-select="true" placeholder="选择类别">
	//             <v-option value="Apple">苹果</v-option>
	//             <v-option value="Banana" disabled>Banana</v-option>
	//             <v-option value="Cherry">Cherry</v-option>
	//             <v-option value="Orange">OrangeText</v-option>
	//             <v-option value="Grape">Grape</v-option>
	//             <v-option value="agg">鸡蛋</v-option>
	//             <v-option value="芒果">芒果</v-option>
	//           </v-select>
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
/* 383 */
/***/ function(module, exports) {

	module.exports = "\n\n  <div class=\"bs-docs-section\" id=\"form\">\n    <h3 class=\"page-header\"><a href=\"#form\" class=\"anchor\">Form 表单 </a></h3>\n    <div class=\"bs-example\">\n      <h4>纵向排列</h4>\n      <v-form action=\"aaa.do\" method=\"post\">\n        <form-item required label=\"姓名：\" :valid-status=\"form1.nameStatus\" label-col=\"4\" has-icon :tips=\"form1.nameTips\">\n          <v-input type=\"text\" placeholder=\"请输入您的姓名\"  :value.sync=\"username\" required required-tips=\"用户名为必填项\" maxlength=\"12\" minlength=\"2\" minlength-tips=\"用户名不能少于2个字符\" :valid-status.sync=\"form1.nameStatus\" :tips.sync=\"form1.nameTips\" :valid-result.sync=\"form1.nameValidResult\"></v-input>\n        </form-item>\n        <form-item required label=\"电话：\" :valid-status=\"form1.telStatus\" label-col=\"4\" has-icon :tips=\"form1.telTips\">\n          <v-input type=\"tel\" placeholder=\"请输入您的电话号码\" :valid-status.sync=\"form1.telStatus\" :value.sync=\"tel\" :valid-result.sync=\"form1.telValidResult\" :rules=\"['isNumber','isPhone']\" :tips.sync=\"form1.telTips\"></v-input>\n        </form-item>\n        <form-item required label=\"性别\" label-col=\"4\">\n          <label><input type=\"radio\" name=\"sexy\" checked />男</label>\n          <label><input type=\"radio\" name=\"sexy\" />女</label>\n        </form-item>\n        <form-item required label=\"性取向\" label-col=\"4\">\n          <label><input type=\"checkbox\" name=\"sexy\" checked />男</label>\n          <label><input type=\"checkbox\" name=\"sexy\" />女</label>\n        </form-item>\n        <form-item required label=\"行业：\" label-col=\"4\">\n          <v-select :value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\" placeholder=\"选择类别\">\n            <v-option value=\"Apple\">苹果</v-option>\n            <v-option value=\"Banana\" disabled>Banana</v-option>\n            <v-option value=\"Cherry\">Cherry</v-option>\n            <v-option value=\"Orange\">OrangeText</v-option>\n            <v-option value=\"Grape\">Grape</v-option>\n            <v-option value=\"agg\">鸡蛋</v-option>\n            <v-option value=\"芒果\">芒果</v-option>\n          </v-select>\n        </form-item>\n        <form-item label-col=\"4\">\n          <v-button type=\"submit\" primary>确定</v-button>\n          <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n        </form-item>\n      </v-form>\n      <h4>横向排列</h4>\n      <v-form action=\"aaa.do\" method=\"post\">\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"应用名/网站名：\" item-col=\"8\" label-col=\"10\">\n          <v-input type=\"text\" placeholder=\"若还未上线可填无\"></v-input>\n        </form-item>\n        <form-item required label=\"行业：\" item-col=\"8\" label-col=\"10\">\n          <v-select :default-value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n        </form-item>\n        <form-item required label=\"电话号码：\" item-col=\"8\" label-col=\"10\">\n          <v-input placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"电话号码：\" valid-status=\"error\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n          <v-input valid-status=\"error\" placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label=\"电话号码：\" valid-status=\"success\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n          <v-input valid-status=\"success\" placeholder=\"请输入电话号码\"></v-input>\n        </form-item>\n        <form-item required label-col=\"0\">\n          <label><input type=\"checkbox\" />阅读并接受《用户协议》</label>\n        </form-item>\n        <form-item required label-col=\"4\">\n          <v-button type=\"submit\" primary @click=\"validFun\">确定</v-button>\n          <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n        </form-item>\n      </v-form>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n纵向排列\n<v-form action=\"aaa.do\" method=\"post\">\n  <form-item required label=\"姓名：\" :valid-status=\"form1.nameStatus\" label-col=\"4\" has-icon :tips=\"form1.nameTips\">\n    <v-input type=\"text\" placeholder=\"请输入您的姓名\"  :value.sync=\"username\" required required-tips=\"用户名为必填项\" maxlength=\"12\" minlength=\"2\" minlength-tips=\"用户名不能少于2个字符\" :valid-status.sync=\"form1.nameStatus\" :tips.sync=\"form1.nameTips\" :valid-result.sync=\"form1.nameValidResult\"></v-input>\n  </form-item>\n  <form-item required label=\"电话：\" :valid-status=\"form1.telStatus\" label-col=\"4\" has-icon tips=\"form1.telTips\">\n    <v-input type=\"text\" placeholder=\"请输入您的电话号码\" :valid-status.sync=\"form1.telStatus\" :value.sync=\"tel\"></v-input>\n  </form-item>\n  <form-item required label=\"性别\" label-col=\"4\">\n    <label><input type=\"checkbox\" name=\"sexy\" checked />男</label>\n    <label><input type=\"checkbox\" name=\"sexy\" />女</label>\n  </form-item>\n  <form-item required label=\"行业：\" label-col=\"4\">\n    <v-select :default-value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n  </form-item>\n  <form-item label-col=\"4\">\n    <v-button type=\"submit\" primary @click=\"validFun\">确定</v-button>\n    <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n  </form-item>\n</v-form>\n横向排列\n<v-form action=\"aaa.do\" method=\"post\">\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item label=\"联系人电话：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"联系人电话：\" :valid-status=\"telStatus\" item-col=\"8\" label-col=\"10\" has-icon tips=\"123\">\n    <v-input type=\"text\" placeholder=\"电话号码\" :valid-status=\"telStatus\" :value.sync=\"tel\" @click=\"clickFun\"></v-input>\n  </form-item>\n  <form-item required label=\"应用名/网站名：\" item-col=\"8\" label-col=\"10\">\n    <v-input type=\"text\" placeholder=\"若还未上线可填无\"></v-input>\n  </form-item>\n  <form-item required label=\"行业：\" item-col=\"8\" label-col=\"10\">\n    <v-select :value.sync=\"arr\" :options=\"industry\" :close-on-select=\"true\"></v-select>\n  </form-item>\n  <form-item required label=\"电话号码：\" item-col=\"8\" label-col=\"10\">\n    <v-input placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"电话号码：\" valid-status=\"error\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n    <v-input valid-status=\"error\" placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label=\"电话号码：\" valid-status=\"success\" has-icon item-col=\"8\" label-col=\"10\" tips=\"请输入有效的电话号码\">\n    <v-input valid-status=\"success\" placeholder=\"请输入电话号码\"></v-input>\n  </form-item>\n  <form-item required label-col=\"0\">\n    <label><input type=\"checkbox\" />阅读并接受《用户协议》</label>\n  </form-item>\n  <form-item required label-col=\"4\">\n    <v-button type=\"submit\" primary @click=\"validFun\">确定</v-button>\n    <v-button type=\"reset\" tertiary value=\"重置条件\"></v-button>\n  </form-item>\n</v-form>\n    </script></code></pre>\n    </script>\n    </code>\n    <h4>FormItem组件参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>item-col</td>\n          <td><code>String</code></td>\n          <td><code>24</code></td>\n          <td>以24格为准，当前FormItem组件占的栅格列数</td>\n        </tr>\n        <tr>\n          <td>label</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>label域文案</td>\n        </tr>\n        <tr>\n          <td>label-col</td>\n          <td><code>String</code></td>\n          <td><code>7</code></td>\n          <td>以当前的FormItem组件为准，label域占的列数</td>\n        </tr>\n        <tr>\n          <td>wrapper-col</td>\n          <td></td>\n          <td><code>24-（label-col属性值）</code></td>\n          <td>以当前的FormItem组件为准，非label域占的列数</td>\n        </tr>\n        <tr>\n          <td>required</td>\n          <td></td>\n          <td></td>\n          <td>是否是必填项，配置后，会在label文案前加’*‘标识</td>\n        </tr>\n        <tr>\n          <td>tips</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>各种状态下的提示文案</td>\n        </tr>\n        <tr>\n          <td>valid-status</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>当前验证状态，有空,success,warning,error,validating</td>\n        </tr>\n        <tr>\n          <td>has-icon</td>\n          <td></td>\n          <td></td>\n          <td>配合validateStatus属性使用，是否展示校验状态图标</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(385)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/switchDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(386)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66d0c1a6/switchDocs.vue"
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
	
	var _src = __webpack_require__(134);
	
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
	      alert(switcher.checked);
	    },
	    _clickHandler: function _clickHandler() {
	      this.disabled = !this.disabled;
	    }
	  }
	};
	// </script>
	//

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
/* 386 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"switch\">\n    <h3 class=\"page-header\"><a href=\"#switch\" class=\"anchor\">Switch 开关</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\" >基本类型</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <th>关</th>\n            <th>开</th>\n            <th>禁用</th>\n          </tr>\n          <tr>\n            <td><v-switch small color=\"#000\"></v-switch></td>\n            <td><v-switch small checked @change=\"changeHandler\"></v-switch>\n            </td>\n            <td><v-switch small disabled></v-switch></td>\n          </tr>\n          <tr>\n            <td><v-switch></v-switch></td>\n            <td><v-switch checked @change=\"changeHandler\"></v-switch></td>\n            <td><v-switch disabled></v-switch></td>\n          </tr>\n        </table>\n\n      <h4 class=\"example-title\">带文字形式</h4>\n        <table class=\"switchDocs-demo-table\">\n          <tr>\n            <td><v-switch>\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch></td>\n            <td><v-switch :disabled=\"disabled\" checked>\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch>\n        </td>\n            <td><v-switch :disabled=\"disabled\">\n          <span slot=\"checkedPart\">开</span>\n          <span slot=\"unCheckedPart\">关</span>\n        </v-switch>\n        </td>\n          </tr>\n        </table>\n        <h4 class=\"example-title\">带图标形式</h4>\n        <table class=\"switchDocs-demo-table\">\n            <tr>\n              <td>\n                <v-switch>\n                  <span slot=\"checkedPart\"><v-icon type=\"tick\" size=\"16\"></v-icon></span>\n                  <span slot=\"unCheckedPart\"><v-icon type=\"close\" size=\"12\"></v-icon></span>\n                </v-switch>\n              </td>\n            </tr>\n        </table>\n\n        <v-button large primary value=\"toggle disabled\" @click=\"_clickHandler\"></v-button>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-switch small color=\"#000\"></v-switch>\n<v-switch small checked @change=\"changeHandler\"></v-switch>\n<v-switch small disabled></v-switch>\n<v-switch></v-switch>\n<v-switch checked @change=\"changeHandler\"></v-switch>\n<v-switch disabled></v-switch>\n<v-switch>\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch :disabled=\"disabled\" checked>\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch :disabled=\"disabled\">\n  <span slot=\"checkedPart\">开</span>\n  <span slot=\"unCheckedPart\">关</span>\n</v-switch>\n<v-switch>\n  <span slot=\"checkedPart\"><v-icon type=\"tick\" size=\"16\"></v-icon></span>\n  <span slot=\"unCheckedPart\"><v-icon type=\"close\" size=\"12\"></v-icon></span>\n</v-switch>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>checked</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否选中</td>\n      </tr>\n      <tr>\n        <td>value</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>switch的值</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>当前开关是否禁用</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td><code>String</code></td>\n        <td>#00a0ff</td>\n        <td>switch的颜色</td>\n      </tr>\n      <tr>\n        <td>@change</td>\n        <td><code>Function(switcher)</code></td>\n        <td></td>\n        <td>状态变化后的回调函数，返回参数为当前checked（boolean）</td>\n      </tr>\n      <tr>\n        <td>slot::checkedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>选中时的内容</td>\n      </tr>\n      <tr>\n        <td>slot::unCheckedPart</td>\n        <td><code>slot node</code></td>\n        <td></td>\n        <td>没选中时的内容</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(388)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/sliderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(389)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e7b8f35a/sliderDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	var VCol = _src.Layout.Col; // <template>
	//   <div class="bs-docs-section" id="slider">
	//     <h3 class="page-header"><a href="#slider" class="anchor">Slider 滑动型输入器</a></h3>
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
/* 389 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"slider\">\n    <h3 class=\"page-header\"><a href=\"#slider\" class=\"anchor\">Slider 滑动型输入器</a></h3>\n    <div class=\"bs-example\">\n      <h4>basic</h4>\n      <slider :value=\"30\"></slider>\n      <br><br>\n      <slider :value=\"[20,50]\"></slider>\n      <br><br>\n      <slider :value=\"[20,50]\" disabled></slider>\n      <br><br>\n      <h4>带有输入框的滑块</h4>\n      <v-row>\n        <v-col span=\"14\">\n          <slider :value.sync=\"sliderValue\"></slider>\n        </v-col>\n        <v-col span=\"10\">\n          <v-input type=\"text\" :value.sync=\"sliderValue\"></v-input>\n        </v-col>\n      </v-row>\n      <h4>有取值区间的滑块</h4>\n      <slider :value=\"1\" :min=\"1\" :max=\"21\"></slider>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\nbasic\n<slider :value=\"30\"></slider>\n<slider :value=\"[20,50]\"></slider>\n<slider :value=\"[20,50]\" disabled></slider>\n带有输入框的滑块\n<v-row>\n  <v-col span=\"14\">\n    <slider :value.sync=\"sliderValue\"></slider>\n  </v-col>\n  <v-col span=\"10\">\n    <v-input type=\"text\" :value.sync=\"sliderValue\"></v-input>\n  </v-col>\n</v-row>\n有取值区间的滑块\n<slider :value=\"1\" :min=\"1\" :max=\"21\"></slider>\n  </script></code></pre>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>id</td>\n          <td><code>String</code></td>\n          <td><code>'slider' + new Date().getTime()</code></td>\n          <td>滑块组件Id</td>\n        </tr>\n        <tr>\n          <td>value</td>\n          <td><code>String、Number、Array</code></td>\n          <td><code>0</code></td>\n          <td>默认值，类型为数字、数字型字符串、数字型数组、数字型数组字符串四种。<br>eg: 值为1或者'1'，表现为单滑块，终点是1，可更改位置；<br>eg: 值为[5,10]或者['5','10']，表现为双滑块，滑块起点和终点分别是5、10，并且位置都可更改</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>配置该属性后，滑块被禁用</td>\n        </tr>\n        <tr>\n          <td>min</td>\n          <td><code>String、Number</code></td>\n          <td><code>0</code></td>\n          <td>滑块位置取值区间最小值</td>\n        </tr>\n        <tr>\n          <td>max</td>\n          <td><code>String、Number</code></td>\n          <td><code>100</code></td>\n          <td>滑块位置取值区间最大值</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(391)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/dropdownDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(392)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-9edd447a/dropdownDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	exports.default = {
	  components: {
	    Dropdown: _src.Dropdown,
	    Icon: _src.Icon
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
	//           点击显示菜单 <icon type="down"></icon>
	//         </div>
	//         <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//           <li><a>选项一</a></li>
	//           <li><a>选项二</a></li>
	//           <li><a>选项三</a></li>
	//           <li role="separator" class="atui-dropdown-divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown>
	//         <button type="button" class="atui-btn" data-toggle="dropdown">
	//           点击显示菜单 <icon type="down"></icon>
	//         </button>
	//         <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//           <li><a>选项一</a></li>
	//           <li><a>选项二</a></li>
	//           <li><a>选项三</a></li>
	//           <li role="separator" class="atui-dropdown-divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown>
	//         <button type="button" class="atui-btn atui-btn-primary" data-toggle="dropdown">
	//           点击显示菜单 <icon type="down"></icon>
	//         </button>
	//         <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//           <li><a href="#">选项一</a></li>
	//           <li><a href="#">选项二</a></li>
	//           <li><a href="#">选项三</a></li>
	//           <li role="separator" class="atui-dropdown-divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown trigger="hover">
	//         <a href="#" data-toggle="dropdown">
	//           鼠标移上来显示 <icon type="down"></icon>
	//         </a>
	//         <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//           <li><a href="#">选项一</a></li>
	//           <li><a href="#">选项二</a></li>
	//           <li><a href="#">选项三</a></li>
	//           <li role="separator" class="atui-dropdown-divider"></li>
	//           <li><a href="#">其它</a></li>
	//         </ul>
	//       </dropdown>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <dropdown>
	//   <div data-toggle="dropdown">
	//     点击显示菜单 <icon type="down"></icon>
	//   </div>
	//   <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//     <li><a>选项一</a></li>
	//     <li><a>选项二</a></li>
	//     <li><a>选项三</a></li>
	//     <li role="separator" class="atui-dropdown-divider"></li>
	//     <li><a href="#">其它</a></li>
	//   </ul>
	// </dropdown>
	// <dropdown>
	//   <button type="button" class="atui-btn" data-toggle="dropdown">
	//     点击显示菜单 <icon type="down"></icon>
	//   </button>
	//   <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//     <li><a>选项一</a></li>
	//     <li><a>选项二</a></li>
	//     <li><a>选项三</a></li>
	//     <li role="separator" class="atui-dropdown-divider"></li>
	//     <li><a href="#">其它</a></li>
	//   </ul>
	// </dropdown>
	// <dropdown>
	//   <button type="button" class="atui-btn atui-btn-primary" data-toggle="dropdown">
	//     点击显示菜单 <icon type="down"></icon>
	//   </button>
	//   <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//     <li><a href="#">选项一</a></li>
	//     <li><a href="#">选项二</a></li>
	//     <li><a href="#">选项三</a></li>
	//     <li role="separator" class="atui-dropdown-divider"></li>
	//     <li><a href="#">其它</a></li>
	//   </ul>
	// </dropdown>
	// <dropdown trigger="hover">
	//   <a href="#" data-toggle="dropdown">
	//     鼠标移上来显示 <icon type="down"></icon>
	//   </a>
	//   <ul slot="dropdown-menu" class="atui-dropdown-menu">
	//     <li><a href="#">选项一</a></li>
	//     <li><a href="#">选项二</a></li>
	//     <li><a href="#">选项三</a></li>
	//     <li role="separator" class="atui-dropdown-divider"></li>
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
/* 392 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"dropdown\">\n    <h3 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown 下拉框</a></h3>\n    <div class=\"bs-example\">\n      <dropdown>\n        <div data-toggle=\"dropdown\">\n          点击显示菜单 <icon type=\"down\"></icon>\n        </div>\n        <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n          <li><a>选项一</a></li>\n          <li><a>选项二</a></li>\n          <li><a>选项三</a></li>\n          <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"atui-btn\" data-toggle=\"dropdown\">\n          点击显示菜单 <icon type=\"down\"></icon>\n        </button>\n        <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n          <li><a>选项一</a></li>\n          <li><a>选项二</a></li>\n          <li><a>选项三</a></li>\n          <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"atui-btn atui-btn-primary\" data-toggle=\"dropdown\">\n          点击显示菜单 <icon type=\"down\"></icon>\n        </button>\n        <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n      <dropdown trigger=\"hover\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n          鼠标移上来显示 <icon type=\"down\"></icon>\n        </a>\n        <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n          <li><a href=\"#\">选项一</a></li>\n          <li><a href=\"#\">选项二</a></li>\n          <li><a href=\"#\">选项三</a></li>\n          <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n          <li><a href=\"#\">其它</a></li>\n        </ul>\n      </dropdown>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<dropdown>\n  <div data-toggle=\"dropdown\">\n    点击显示菜单 <icon type=\"down\"></icon>\n  </div>\n  <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n    <li><a>选项一</a></li>\n    <li><a>选项二</a></li>\n    <li><a>选项三</a></li>\n    <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n    <li><a href=\"#\">其它</a></li>\n  </ul>\n</dropdown>\n<dropdown>\n  <button type=\"button\" class=\"atui-btn\" data-toggle=\"dropdown\">\n    点击显示菜单 <icon type=\"down\"></icon>\n  </button>\n  <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n    <li><a>选项一</a></li>\n    <li><a>选项二</a></li>\n    <li><a>选项三</a></li>\n    <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n    <li><a href=\"#\">其它</a></li>\n  </ul>\n</dropdown>\n<dropdown>\n  <button type=\"button\" class=\"atui-btn atui-btn-primary\" data-toggle=\"dropdown\">\n    点击显示菜单 <icon type=\"down\"></icon>\n  </button>\n  <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n    <li><a href=\"#\">选项一</a></li>\n    <li><a href=\"#\">选项二</a></li>\n    <li><a href=\"#\">选项三</a></li>\n    <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n    <li><a href=\"#\">其它</a></li>\n  </ul>\n</dropdown>\n<dropdown trigger=\"hover\">\n  <a href=\"#\" data-toggle=\"dropdown\">\n    鼠标移上来显示 <icon type=\"down\"></icon>\n  </a>\n  <ul slot=\"dropdown-menu\" class=\"atui-dropdown-menu\">\n    <li><a href=\"#\">选项一</a></li>\n    <li><a href=\"#\">选项二</a></li>\n    <li><a href=\"#\">选项三</a></li>\n    <li role=\"separator\" class=\"atui-dropdown-divider\"></li>\n    <li><a href=\"#\">其它</a></li>\n  </ul>\n</dropdown>\n</script></code></pre>\n\n\n<h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>trigger</td>\n          <td><code>String</code></td>\n          <td><code>click</code> one of <code>click</code> <code>hover</code></td>\n          <td>触发类型</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(394)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/selectDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(395)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1b041124/selectDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	var Option = _src.Select.Option; // <template>
	//   <div class="bs-docs-section" id="select">
	//     <h3 class="page-header"><a href="#select" class="anchor">Select 下拉框</a></h3>
	//     <div class="bs-example">
	//       <pre>选中值 : {{single1}}</pre>
	//       <v-select :value.sync="single1" :placeholder="placeholder" style="width: 200px" @change="onSlectChange">
	//         <v-option value="Apple">苹果</v-option>
	//         <v-option value="Banana" disabled>Banana</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">OrangeText</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//         <v-option value="agg">鸡蛋</v-option>
	//         <v-option value="芒果">芒果</v-option>
	//       </v-select>
	//
	//       <v-select :value="single">
	//         <v-option value="a">终端</v-option>
	//         <v-option value="b">线路</v-option>
	//         <v-option value="c">号码拦截</v-option>
	//       </v-select>
	//
	//       <v-select tags placeholder="请输入签名">
	//
	//       </v-select>
	//
	//       <v-select :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
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
	//       <v-select tags :selected-options="selectedOptions" @change="onTagChange">
	//         <v-option value="Apple">苹果</v-option>
	//         <v-option value="Banana">香蕉</v-option>
	//         <v-option value="Cherry">Cherry</v-option>
	//         <v-option value="Orange">Orange</v-option>
	//         <v-option value="Grape">Grape</v-option>
	//       </v-select>
	//       <hr />
	//
	//       <h4>被禁用的select</h4>
	//       <v-select placeholder="选择类别" :disabled="true">
	//         <v-option>被禁用了噢</v-option>
	//       </v-select>
	//
	//       <h4>下拉出自定义类容</h4>
	//       <v-select placeholder="选择类别" style="width:200px;">
	//         <v-option>
	//           <tabs>
	//             <tab header="系统短信签名"></tab>
	//             <tab header="系统短信签名"></tab>
	//             <tab header="系统短信签名"></tab>
	//           </tabs>
	//         </v-option>
	//       </v-select>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <pre>选中值 : {{single1}}</pre>
	// <v-select :value.sync="single1" :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
	//   <v-option value="Apple">苹果</v-option>
	//   <v-option value="Banana" disabled>Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">OrangeText</v-option>
	//   <v-option value="Grape">Grape</v-option>
	//   <v-option value="agg">鸡蛋</v-option>
	//   <v-option value="芒果">芒果</v-option>
	// </v-select>
	//
	// <v-select :value="single">
	//   <v-option value="a">终端</v-option>
	//   <v-option value="b">线路</v-option>
	//   <v-option value="c">号码拦截</v-option>
	// </v-select>
	//
	// <v-select tags placeholder="请输入签名">
	//
	// </v-select>
	//
	// <v-select :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
	//   <v-option value="Apple">苹果</v-option>
	//   <v-option value="Banana" disabled>Banana</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">OrangeText</v-option>
	//   <v-option value="Grape">Grape</v-option>
	//   <v-option value="agg">鸡蛋</v-option>
	//   <v-option value="芒果">芒果</v-option>
	// </v-select>
	// <hr>
	// <h4>多选下拉(只能选已有的)</h4>
	//
	// <v-select multiple @change="onSlectChange">
	//   <v-option value="Apple">苹果</v-option>
	//   <v-option value="Banana">香蕉</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	//
	// <hr>
	// <h4>tags(输入回车时变成一个tag)</h4>
	// 选中值 : {{tagValues | json}} <br/>
	// <v-select tags :selected-options="selectedOptions" @change="onTagChange">
	//   <v-option value="Apple">苹果</v-option>
	//   <v-option value="Banana">香蕉</v-option>
	//   <v-option value="Cherry">Cherry</v-option>
	//   <v-option value="Orange">Orange</v-option>
	//   <v-option value="Grape">Grape</v-option>
	// </v-select>
	// <hr />
	//
	// <h4>被禁用的select</h4>
	// <v-select placeholder="选择类别" :disabled="true">
	//   <v-option>被禁用了噢</v-option>
	// </v-select>
	//
	// <h4>下拉出自定义类容</h4>
	// <v-select placeholder="选择类别" style="width:200px;">
	//   <v-option>
	//     <tabs>
	//       <tab header="系统短信签名"></tab>
	//       <tab header="系统短信签名"></tab>
	//       <tab header="系统短信签名"></tab>
	//     </tabs>
	//   </v-option>
	// </v-select>
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
	      single: 'c',
	      single1: 'Apple',
	      tagValues: [],
	      selectedOptions: [{ label: 'Apple', value: 'Apple' }]
	    };
	  },
	  ready: function ready() {
	    var me = this;
	    setTimeout(function () {
	      return me.single = 'b';
	    }, 3000);
	  },
	
	  methods: {
	    onSlectChange: function onSlectChange(option) {
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
/* 395 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"select\">\n    <h3 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select 下拉框</a></h3>\n    <div class=\"bs-example\">\n      <pre>选中值 : {{single1}}</pre>\n      <v-select :value.sync=\"single1\" :placeholder=\"placeholder\" style=\"width: 200px\" @change=\"onSlectChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\" disabled>Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">OrangeText</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n        <v-option value=\"agg\">鸡蛋</v-option>\n        <v-option value=\"芒果\">芒果</v-option>\n      </v-select>\n\n      <v-select :value=\"single\">\n        <v-option value=\"a\">终端</v-option>\n        <v-option value=\"b\">线路</v-option>\n        <v-option value=\"c\">号码拦截</v-option>\n      </v-select>\n\n      <v-select tags placeholder=\"请输入签名\">\n\n      </v-select>\n\n      <v-select :placeholder=\"placeholder\" style=\"width:200px;\" @change=\"onSlectChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\" disabled>Banana</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">OrangeText</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n        <v-option value=\"agg\">鸡蛋</v-option>\n        <v-option value=\"芒果\">芒果</v-option>\n      </v-select>\n      <hr>\n      <h4>多选下拉(只能选已有的)</h4>\n\n      <v-select multiple @change=\"onSlectChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\">香蕉</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n\n      <hr>\n      <h4>tags(输入回车时变成一个tag)</h4>\n      选中值 : {{tagValues | json}} <br/>\n      <v-select tags :selected-options=\"selectedOptions\" @change=\"onTagChange\">\n        <v-option value=\"Apple\">苹果</v-option>\n        <v-option value=\"Banana\">香蕉</v-option>\n        <v-option value=\"Cherry\">Cherry</v-option>\n        <v-option value=\"Orange\">Orange</v-option>\n        <v-option value=\"Grape\">Grape</v-option>\n      </v-select>\n      <hr />\n\n      <h4>被禁用的select</h4>\n      <v-select placeholder=\"选择类别\" :disabled=\"true\">\n        <v-option>被禁用了噢</v-option>\n      </v-select>\n\n      <h4>下拉出自定义类容</h4>\n      <v-select placeholder=\"选择类别\" style=\"width:200px;\">\n        <v-option>\n          <tabs>\n            <tab header=\"系统短信签名\"></tab>\n            <tab header=\"系统短信签名\"></tab>\n            <tab header=\"系统短信签名\"></tab>\n          </tabs>\n        </v-option>\n      </v-select>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<pre>选中值 : {{single1}}</pre>\n<v-select :value.sync=\"single1\" :placeholder=\"placeholder\" style=\"width:200px;\" @change=\"onSlectChange\">\n  <v-option value=\"Apple\">苹果</v-option>\n  <v-option value=\"Banana\" disabled>Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">OrangeText</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n  <v-option value=\"agg\">鸡蛋</v-option>\n  <v-option value=\"芒果\">芒果</v-option>\n</v-select>\n\n<v-select :value=\"single\">\n  <v-option value=\"a\">终端</v-option>\n  <v-option value=\"b\">线路</v-option>\n  <v-option value=\"c\">号码拦截</v-option>\n</v-select>\n\n<v-select tags placeholder=\"请输入签名\">\n\n</v-select>\n\n<v-select :placeholder=\"placeholder\" style=\"width:200px;\" @change=\"onSlectChange\">\n  <v-option value=\"Apple\">苹果</v-option>\n  <v-option value=\"Banana\" disabled>Banana</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">OrangeText</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n  <v-option value=\"agg\">鸡蛋</v-option>\n  <v-option value=\"芒果\">芒果</v-option>\n</v-select>\n<hr>\n<h4>多选下拉(只能选已有的)</h4>\n\n<v-select multiple @change=\"onSlectChange\">\n  <v-option value=\"Apple\">苹果</v-option>\n  <v-option value=\"Banana\">香蕉</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n\n<hr>\n<h4>tags(输入回车时变成一个tag)</h4>\n选中值 : {{tagValues | json}} <br/>\n<v-select tags :selected-options=\"selectedOptions\" @change=\"onTagChange\">\n  <v-option value=\"Apple\">苹果</v-option>\n  <v-option value=\"Banana\">香蕉</v-option>\n  <v-option value=\"Cherry\">Cherry</v-option>\n  <v-option value=\"Orange\">Orange</v-option>\n  <v-option value=\"Grape\">Grape</v-option>\n</v-select>\n<hr />\n\n<h4>被禁用的select</h4>\n<v-select placeholder=\"选择类别\" :disabled=\"true\">\n  <v-option>被禁用了噢</v-option>\n</v-select>\n\n<h4>下拉出自定义类容</h4>\n<v-select placeholder=\"选择类别\" style=\"width:200px;\">\n  <v-option>\n    <tabs>\n      <tab header=\"系统短信签名\"></tab>\n      <tab header=\"系统短信签名\"></tab>\n      <tab header=\"系统短信签名\"></tab>\n    </tabs>\n  </v-option>\n</v-select>\n</script></code></pre>\n\n    <h2>Select 选项</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array/String</code></td>\n          <td><code>[]</code></td>\n          <td>默认要选中的值，如果是多选框可以设置数组</td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>请选择</td>\n          <td>默认选择提示</td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否多选</td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>onchange</td>\n          <td><code>Function</code></td>\n          <td><code></code></td>\n          <td>选中项发生变化时触发</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n";

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(397)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/calendarDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(398)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c1197f0/calendarDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	      value: '6/06/2015',
	      format: ['MMM/dd/yyyy'],
	      disabledDate: function disabledDate(date) {
	        if (!date) {
	          return false;
	        }
	        return date.getTime() >= new Date(2016, 11, 17).getTime();
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
/* 398 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"calendar\">\n    <h1 class=\"page-header\"><a href=\"#calendar\" class=\"anchor\">Calendar 日历</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\n选择日期是: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <calendar v-ref:calendar :value.sync=\"value\" :disabled-date=\"disabledDate\"\n      :format=\"format.toString()\" :show-reset-button=\"reset\" @change=\"selectChange\"></calendar>\n\n      <h4>格式化</h4>\n      <v-select :default-value.sync=\"format\" >\n        <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n        <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n        <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n        <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n        <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n      </v-select>\n\n\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n    </script></code></pre>\n    <h2>Option</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入框里的默认值</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>输入框的宽度</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>禁用一周的某一天. 按 0 到 6 .\n             禁用多天可用<code>逗号</code>分隔</td>\n        </tr>\n        <tr>\n          <td>showResetButton</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>是否显示清除日期按钮</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(400)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/datepickerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(401)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-55b12ea4/datepickerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	var RangePicker = _src.DatePicker.RangePicker; // <template>
	//   <div class="bs-docs-section" id="datepicker">
	//     <h1 class="page-header"><a href="#datepicker" class="anchor">DatePicker 日期选择</a></h1>
	//     <div class="bs-example">
	//       <p>
	//         <pre>
	// 选择日期是: {{value}}
	//         </pre>
	//       </p>
	//       <date-picker v-ref:dp
	//       :format="format.toString()" :disabled-date="disabledDate" @change="selectChange"></date-picker>
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
	// <date-picker v-ref:dp
	// :format="format.toString()"
	// :disabled-date="disabledDate"
	// @change="selectChange">
	// </date-picker>
	//
	// <h4>日期范围选择（rangePicker）</h4>
	// <range-picker></range-picker>
	//
	// // script
	// import {DatePicker, Select} from 'atui'
	// const RangePicker = DatePicker.RangePicker
	// const Option = Select.Option;
	//
	// export default {
	//   components: {
	//     DatePicker,
	//     RangePicker,
	//     vSelect:Select,
	//     vOption:Option
	//   },
	//   data() {
	//     return {
	//       disabled: [],
	//       value: 'Oct/06/2015',
	//       format: 'MMM/dd/yyyy',
	//       reset: true
	//     }
	//   },
	//   methods:{
	//     selectChange(value) {
	//       this.value = value
	//     },
	//     disabledDate(date) {
	//       return date.getTime() <= new Date().getTime()
	//     },
	//     rangePickerChange(start,end) {
	//       console.log('rangepicker',start,end)
	//     }
	//   }
	// }
	//
	//
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
	//           <td>disabledDate</td>
	//           <td><code>Function</code></td>
	//           <td></td>
	//           <td>禁用某些时间</td>
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
	      format: 'MMM/dd/yyyy',
	      reset: true
	    };
	  },
	
	  methods: {
	    selectChange: function selectChange(value) {
	      this.value = value;
	    },
	    disabledDate: function disabledDate(date) {
	      return date.getTime() <= new Date().getTime();
	    },
	    rangePickerChange: function rangePickerChange(start, end) {
	      console.log('rangepicker', start, end);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 401 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"datepicker\">\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">DatePicker 日期选择</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\n选择日期是: {{value}}\n        </pre>\n      </p>\n      <date-picker v-ref:dp\n      :format=\"format.toString()\" :disabled-date=\"disabledDate\" @change=\"selectChange\"></date-picker>\n\n      <date-picker disabled :format=\"format\" @change=\"selectChange\"></date-picker>\n\n      <h4>格式化</h4>\n      <v-select :value.sync=\"format\" >\n        <v-option value=\"yyyy,MM,dd\">yyyy,MM,dd</v-option>\n        <v-option value=\"yyyy-MM-dd\">yyyy-MM-dd</v-option>\n        <v-option value=\"yyyy.MM.dd\">yyyy.MM.dd</v-option>\n        <v-option value=\"MMM/dd/yyyy\">MMM/dd/yyyy</v-option>\n        <v-option value=\"MMMM/dd/yyyy\">MMMM/dd/yyyy</v-option>\n      </v-select>\n\n      <h4>日期范围选择（rangePicker）</h4>\n\n      <range-picker @change=\"rangePickerChange\"></range-picker>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<date-picker v-ref:dp\n:format=\"format.toString()\"\n:disabled-date=\"disabledDate\"\n@change=\"selectChange\">\n</date-picker>\n\n<h4>日期范围选择（rangePicker）</h4>\n<range-picker></range-picker>\n\n// script\nimport {DatePicker, Select} from 'atui'\nconst RangePicker = DatePicker.RangePicker\nconst Option = Select.Option;\n\nexport default {\n  components: {\n    DatePicker,\n    RangePicker,\n    vSelect:Select,\n    vOption:Option\n  },\n  data() {\n    return {\n      disabled: [],\n      value: 'Oct/06/2015',\n      format: 'MMM/dd/yyyy',\n      reset: true\n    }\n  },\n  methods:{\n    selectChange(value) {\n      this.value = value\n    },\n    disabledDate(date) {\n      return date.getTime() <= new Date().getTime()\n    },\n    rangePickerChange(start,end) {\n      console.log('rangepicker',start,end)\n    }\n  }\n}\n\n\n</script></code></pre>\n    <h2>Option</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入框里的默认值</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>输入框的宽度</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>\n        </tr>\n        <tr>\n          <td>disabledDate</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>禁用某些时间</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(403)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/timepickerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(404)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7897698d/timepickerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(78);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _src = __webpack_require__(134);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    TimePicker: _src.TimePicker
	  },
	  data: function data() {
	    return {
	      defaultTime: new Date(11, 11, 11)
	    };
	  },
	
	  methods: {
	    disabledMinutes: function disabledMinutes() {
	      return [].concat((0, _toConsumableArray3.default)(Array(60).keys())).filter(function (value) {
	        return value % 10 !== 0;
	      });
	    },
	    disabledSeconds: function disabledSeconds() {
	      return [].concat((0, _toConsumableArray3.default)(Array(60).keys())).filter(function (value) {
	        return value % 30 !== 0;
	      });
	    },
	    timePickerChange: function timePickerChange(date, timeString) {
	      console.log('timepicker', date, timeString);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="timepicker">
	//     <h3 class="page-header"><a href="#timepicker" class="anchor">TimePicker 时间选择</a></h3>
	//     <div class="bs-example">
	//       <h4>时间范围选择（timePicker）</h4>
	//       <time-picker @change="timePickerChange" value="11:11:11"></time-picker>
	//        <h4>隐藏部分时间的选择</h4>
	//       <time-picker @change="timePickerChange" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></time-picker>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <time-picker @change="timePickerChange" value="11:11:11"></time-picker>
	// <time-picker @change="timePickerChange" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></time-picker>
	// // script
	// export default {
	//   components: {
	//     TimePicker
	//   },
	//   data() {
	//     return {
	//       defaultTime: new Date().set
	//     }
	//   },
	//   methods: {
	//     disabledMinutes () {
	//       return [...Array(60).keys()].filter(value => value % 10 !== 0)
	//     },
	//     disabledSeconds () {
	//       return [...Array(60).keys()].filter(value => value % 30 !== 0)
	//     },
	//     timePickerChange(date,timeString) {
	//       console.log('timepicker',date, timeString)
	//     }
	//   }
	// }
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
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 404 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"timepicker\">\n    <h3 class=\"page-header\"><a href=\"#timepicker\" class=\"anchor\">TimePicker 时间选择</a></h3>\n    <div class=\"bs-example\">\n      <h4>时间范围选择（timePicker）</h4>\n      <time-picker @change=\"timePickerChange\" value=\"11:11:11\"></time-picker>\n       <h4>隐藏部分时间的选择</h4>\n      <time-picker @change=\"timePickerChange\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\"></time-picker>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<time-picker @change=\"timePickerChange\" value=\"11:11:11\"></time-picker>\n<time-picker @change=\"timePickerChange\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\"></time-picker>\n// script\nexport default {\n  components: {\n    TimePicker\n  },\n  data() {\n    return {\n      defaultTime: new Date().set\n    }\n  },\n  methods: {\n    disabledMinutes () {\n      return [...Array(60).keys()].filter(value => value % 10 !== 0)\n    },\n    disabledSeconds () {\n      return [...Array(60).keys()].filter(value => value % 30 !== 0)\n    },\n    timePickerChange(date,timeString) {\n      console.log('timepicker',date, timeString)\n    }\n  }\n}\n</script></code></pre>\n    <h2>Option</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>输入框里的默认值</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(406)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/searchboxDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(407)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2846f837/searchboxDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	
	  events: {
	    'searchbox-value-check': function searchboxValueCheck(data, searchboxVue) {
	      console.log(data);
	    },
	    'searchbox-value-change': function searchboxValueChange(val, searchboxVue) {
	      if (val) {
	        _src.Message.info(val);
	      }
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
/* 407 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"searchbox\">\n    <h3 class=\"page-header\"><a href=\"#searchbox\" class=\"anchor\">Searchbox 搜索框</a></h3>\n    <div class=\"bs-example\">\n      <searchbox placeholder=\"请输入关键词搜索\" :value.sync=\"defaultVal\" :search-list=\"searchList\" text-field=\"name\"></searchbox>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<searchbox placeholder=\"请输入关键词搜索\" :value.sync=\"defaultVal\" :search-list=\"searchList\" text-field=\"name\"></searchbox>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>搜索框预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>搜索框默认值</td>\n        </tr>\n        <tr>\n          <td>search-list</td>\n          <td><code>Array</code>或<code>Object</code></td>\n          <td><code>数组素组</code></td>\n          <td>搜索列表</td>\n        </tr>\n        <tr>\n          <td>text-filed</td>\n          <td><code>String</code></td>\n          <td><code>name</code></td>\n          <td>下拉列表中显示的是列表的哪个字段</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(409)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/messageDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(410)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a1e59d4a/messageDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	      _src.Message['warning']('成功啦', 3000, 'top');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="message">
	//     <h3 class="page-header">
	//       <a href="#message" class="anchor">Message 警告提示</a>
	//     </h3>
	//     <div class="bs-example" >
	//       <button class="atui-btn atui-btn-success atui-btn-lg"
	//         @click="showRight = !showRight">
	//         点击在右边显示或隐藏
	//       </button>
	//       <button class="atui-btn atui-btn-success atui-btn-lg"
	//         @click="showMessage">
	//         全局toast，使用message.xx方法
	//       </button>
	//       <button class="atui-btn atui-btn-default atui-btn-lg"
	//         @click="showCenter = !showCenter">
	//         点击在中间显示或隐藏
	//       </button>
	//       <button class="atui-btn atui-btn-error atui-btn-lg"
	//         @click="showTop = !showTop">
	//         点击在顶部显示或隐藏
	//       </button>
	//       <hr>
	//       <message type="success" arrow="left">
	//         成功提示的文案
	//       </message>
	//
	//       <message type="info" arrow="right">
	//         消息提示的文案
	//       </message>
	//
	//       <message type="error" dismissable arrow="bottom">
	//         错误提示的文案,可关闭
	//       </message>
	//
	//       <message type="warning" dismissable arrow="top">
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
	// <button class="atui-btn atui-btn-success atui-btn-lg"
	//   @click="showRight = !showRight">
	//   点击在右边显示或隐藏
	// </button>
	// <button class="atui-btn atui-btn-success atui-btn-lg"
	//   @click="showMessage">
	//   全局toast，使用message.xx方法
	// </button>
	// <button class="atui-btn atui-btn-default atui-btn-lg"
	//   @click="showCenter = !showCenter">
	//   点击在中间显示或隐藏
	// </button>
	// <button class="atui-btn atui-btn-error atui-btn-lg"
	//   @click="showTop = !showTop">
	//   点击在顶部显示或隐藏
	// </button>
	// <hr>
	// <message type="success" arrow="left">
	//   成功提示的文案
	// </message>
	//
	// <message type="info" arrow="right">
	//   消息提示的文案
	// </message>
	//
	// <message type="error" dismissable arrow="bottom">
	//   错误提示的文案,可关闭
	// </message>
	//
	// <message type="warning" dismissable arrow="top">
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
	//           <td>height</td>
	//           <td><code>String</code></td>
	//           <td>高度</td>
	//         </tr>
	//         <tr>
	//           <td>width</td>
	//           <td><code>String</code></td>
	//           <td>宽度</td>
	//         </tr>
	//         <tr>
	//           <td>arrow</td>
	//           <td><code>String</code>one of <code>top、left、right、bottom</code></td>
	//           <td>剪头的方向，如果没有传则不显示箭头，默认不显示</td>
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
/* 410 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"message\">\n    <h3 class=\"page-header\">\n      <a href=\"#message\" class=\"anchor\">Message 警告提示</a>\n    </h3>\n    <div class=\"bs-example\" >\n      <button class=\"atui-btn atui-btn-success atui-btn-lg\"\n        @click=\"showRight = !showRight\">\n        点击在右边显示或隐藏\n      </button>\n      <button class=\"atui-btn atui-btn-success atui-btn-lg\"\n        @click=\"showMessage\">\n        全局toast，使用message.xx方法\n      </button>\n      <button class=\"atui-btn atui-btn-default atui-btn-lg\"\n        @click=\"showCenter = !showCenter\">\n        点击在中间显示或隐藏\n      </button>\n      <button class=\"atui-btn atui-btn-error atui-btn-lg\"\n        @click=\"showTop = !showTop\">\n        点击在顶部显示或隐藏\n      </button>\n      <hr>\n      <message type=\"success\" arrow=\"left\">\n        成功提示的文案\n      </message>\n\n      <message type=\"info\" arrow=\"right\">\n        消息提示的文案\n      </message>\n\n      <message type=\"error\" dismissable arrow=\"bottom\">\n        错误提示的文案,可关闭\n      </message>\n\n      <message type=\"warning\" dismissable arrow=\"top\">\n        警告提示的文案,可关闭\n      </message>\n\n      <message type=\"help\" dismissable>\n        帮助提示文案,可关闭\n      </message>\n\n      <message\n        :show.sync=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        在右边显示的警告\n      </message>\n\n      <message\n        :show.sync=\"showCenter\"\n        duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"center\"\n        dismissable>\n        在中间显示的警告\n      </message>\n\n      <message\n        :show.sync=\"showTop\"\n        :duration=\"3000\"\n        type=\"error\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        在顶部显示的警告\n      </message>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"atui-btn atui-btn-success atui-btn-lg\"\n  @click=\"showRight = !showRight\">\n  点击在右边显示或隐藏\n</button>\n<button class=\"atui-btn atui-btn-success atui-btn-lg\"\n  @click=\"showMessage\">\n  全局toast，使用message.xx方法\n</button>\n<button class=\"atui-btn atui-btn-default atui-btn-lg\"\n  @click=\"showCenter = !showCenter\">\n  点击在中间显示或隐藏\n</button>\n<button class=\"atui-btn atui-btn-error atui-btn-lg\"\n  @click=\"showTop = !showTop\">\n  点击在顶部显示或隐藏\n</button>\n<hr>\n<message type=\"success\" arrow=\"left\">\n  成功提示的文案\n</message>\n\n<message type=\"info\" arrow=\"right\">\n  消息提示的文案\n</message>\n\n<message type=\"error\" dismissable arrow=\"bottom\">\n  错误提示的文案,可关闭\n</message>\n\n<message type=\"warning\" dismissable arrow=\"top\">\n  警告提示的文案,可关闭\n</message>\n\n<message type=\"help\" dismissable>\n  帮助提示文案,可关闭\n</message>\n\n<message\n  :show.sync=\"showRight\"\n  :duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable\n>\n  在右边显示的警告\n</message>\n\n<message\n  :show.sync=\"showCenter\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"center\"\n  dismissable>\n  在中间显示的警告\n</message>\n\n<message\n  :show.sync=\"showTop\"\n  :duration=\"3000\"\n  type=\"error\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  在顶部显示的警告\n</message>\n\nimport {Message} from '@ali/atui'\n  export default {\n    data() {\n      return {\n        showRight: false,\n        showTop: false,\n        showCenter:false\n      }\n    },\n    components: {\n      Message,\n    },\n    methods:{\n      showMessage() {\n        Message.success('成功啦')\n      }\n    }\n  }\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>名称</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>是否显示关闭按钮</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code>\n          <code>help</code>\n          </td>\n          <td><code>success</code></td>\n          <td>组件样式</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>自动关闭时间. 设置为 <code>0</code>或负数将不自动关闭.</td>\n        </tr>\n        <tr>\n          <td>height</td>\n          <td><code>String</code></td>\n          <td>高度</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td>宽度</td>\n        </tr>\n        <tr>\n          <td>arrow</td>\n          <td><code>String</code>one of <code>top、left、right、bottom</code></td>\n          <td>剪头的方向，如果没有传则不显示箭头，默认不显示</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>组件的位置</td>\n        </tr>\n        <tr>\n          <td>showIcon</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否显示相应的ICON</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(412)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/cascaderDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(413)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2d872620/cascaderDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 413 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"cascader\">\n    <h3 class=\"page-header\"><a href=\"#cascader\" class=\"anchor\">Cascader 级联选择</a></h3>\n    <div class=\"bs-example\">\n      <cascader :options=\"options\" @change=\"selectChange\" :default-value=\"defaultValue\"></cascader>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<cascader :options=\"options\" @change=\"selectChange\" :default-value=\"defaultValue\"></cascader>\n\nconst options = [{\n    value: 'zhejiang',\n    label: '浙江',\n    children: [{\n      value: 'hangzhou',\n      label: '杭州',\n      children: [{\n        value: 'xihu',\n        label: '西湖',\n      }],\n    }],\n  }, {\n    value: 'jiangsu',\n    label: '江苏',\n    children: [{\n      value: 'nanjing',\n      label: '南京',\n      children: [{\n        value: 'zhonghuamen',\n        label: '中华门',\n      }],\n    }],\n  }]\n\n  const defaultValue = ['zhejiang', 'hangzhou', 'xihu']\n\n  import {Cascader} from 'src/'\n  export default {\n    components: {\n      Cascader\n    },\n    data() {\n      return {\n        options:options,\n        defaultValue:defaultValue\n      }\n    },\n    methods:{\n      selectChange(selectedValue, option) {\n        alert(selectedValue)\n      }\n    }\n  }\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>options</td>\n        <td><code>Array</code></td>\n        <td><code>[]</code></td>\n        <td>要绑定的数据源</td>\n      </tr>\n      <tr>\n        <td>defaultValue</td>\n        <td><code>Array</code></td>\n        <td><code>[]</code></td>\n        <td>默认选中的值.</td>\n      </tr>\n      <tr>\n        <td>change</td>\n        <td><code>Function</code></td>\n        <td><code>function(selectedValue, option) {}</code></td>\n        <td>选择到最后一项触发的change事件\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(415)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/modalDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(416)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5eec2b7e/modalDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	// <template>
	//   <div class="bs-docs-section" id="modal">
	//     <h3 class="page-header"><a href="#modal" class="anchor">Modal 对话框</a></h3>
	//     <div class="bs-example">
	//       <button class="atui-btn atui-btn-success" @click="fadeModal = true">Fade modal</button>
	//       <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800px">
	//         <div slot="modal-body" class="atui-modal-body">
	//           <v-textarea  :content.sync='textarea'></v-textarea>
	//         </div>
	//       </modal>
	//       <button class="atui-btn atui-btn-primary" @click="zoomModal = true">Zoom modal</button>
	//       <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400px">
	//         <div slot="modal-header"></div>
	//         <div slot="modal-body" class="atui-modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//       <button class="atui-btn atui-btn-default" @click="showCustomModal = true">Show custom modal</button>
	//       <modal :show.sync="showCustomModal" effect="fade" width="90%" height="90%">
	//         <div slot="modal-header" class="atui-modal-header">
	//           <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="atui-modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//         <div slot="modal-footer" class="atui-modal-footer">
	//           <button type="button" class="atui-btn atui-btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="atui-btn atui-btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <button class="atui-btn atui-btn-warning" @click="largeModal = true">Large modal</button>
	//       <modal title="Large Modal" :show.sync="largeModal" large>
	//         <div slot="modal-body" class="atui-modal-body">
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//           <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//         </div>
	//       </modal>
	//       <button class="atui-btn atui-btn-danger" @click="smallModal = true">小弹窗</button>
	//       <modal title="Small Modal" :show.sync="smallModal" small>
	//         <div slot="modal-body" class="atui-modal-body">
	//           高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//         </div>
	//       </modal>
	//
	//       <button class="atui-btn atui-btn-danger" @click="showConfirm">使用程序直接弹出confirm</button>
	//       <button class="atui-btn atui-btn-danger" @click="showError">使用程序直接弹出error</button>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <button class="atui-btn atui-btn-default"
	//   @click="showModal = true"
	//   >显示弹窗
	// </button>
	// <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800px">
	//   <div slot="modal-body" class="atui-modal-body">
	//     <v-textarea  :content.sync='textarea'></v-textarea>
	//   </div>
	// </modal>
	// <button class="atui-btn atui-btn-primary" @click="zoomModal = true">Zoom modal</button>
	// <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400px">
	//   <div slot="modal-header"></div>
	//   <div slot="modal-body" class="atui-modal-body">
	//     高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//   </div>
	// </modal>
	// <button class="atui-btn atui-btn-default" @click="showCustomModal = true">Show custom modal</button>
	// <modal :show.sync="showCustomModal" effect="fade" width="90%" height="90%">
	//   <div slot="modal-header" class="atui-modal-header">
	//     <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
	//   </div>
	//   <div slot="modal-body" class="atui-modal-body">
	//     高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//   </div>
	//   <div slot="modal-footer" class="atui-modal-footer">
	//     <button type="button" class="atui-btn atui-btn-default" @click='showCustomModal = false'>Exit</button>
	//     <button type="button" class="atui-btn atui-btn-success" @click='showCustomModal = false'>Custom Save</button>
	//   </div>
	// </modal>
	// <button class="atui-btn atui-btn-warning" @click="largeModal = true">Large modal</button>
	// <modal title="Large Modal" :show.sync="largeModal" large>
	//   <div slot="modal-body" class="atui-modal-body">
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//     <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>
	//   </div>
	// </modal>
	// <button class="atui-btn atui-btn-danger" @click="smallModal = true">小弹窗</button>
	// <modal title="Small Modal" :show.sync="smallModal" small>
	//   <div slot="modal-body" class="atui-modal-body">
	//     高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
	//   </div>
	// </modal>
	// <button class="atui-btn atui-btn-default"
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
	var confirm = _src.Modal.confirm;
	var error = _src.Modal.error;
	
	exports.default = {
	  data: function data() {
	    return {
	      showModal: false,
	      fadeModal: false,
	      zoomModal: false,
	      showCustomModal: false,
	      largeModal: false,
	      smallModal: false,
	      textarea: ''
	    };
	  },
	
	  components: {
	    Modal: _src.Modal,
	    vTextarea: _src.Textarea
	  },
	  methods: {
	    showConfirm: function showConfirm() {
	      confirm({
	        title: '您是否确认要删除这项内容',
	        content: '<ul><li>一些解释</li><li>一些解释</li><li>一些解释</li></ul>',
	        onOk: function onOk() {
	          console.log('确定了');
	        }
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
/* 416 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"modal\">\n    <h3 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal 对话框</a></h3>\n    <div class=\"bs-example\">\n      <button class=\"atui-btn atui-btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800px\">\n        <div slot=\"modal-body\" class=\"atui-modal-body\">\n          <v-textarea  :content.sync='textarea'></v-textarea>\n        </div>\n      </modal>\n      <button class=\"atui-btn atui-btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400px\">\n        <div slot=\"modal-header\"></div>\n        <div slot=\"modal-body\" class=\"atui-modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n      <button class=\"atui-btn atui-btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"90%\" height=\"90%\">\n        <div slot=\"modal-header\" class=\"atui-modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"atui-modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n        <div slot=\"modal-footer\" class=\"atui-modal-footer\">\n          <button type=\"button\" class=\"atui-btn atui-btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"atui-btn atui-btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"atui-btn atui-btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\n        <div slot=\"modal-body\" class=\"atui-modal-body\">\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n          <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n        </div>\n      </modal>\n      <button class=\"atui-btn atui-btn-danger\" @click=\"smallModal = true\">小弹窗</button>\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n        <div slot=\"modal-body\" class=\"atui-modal-body\">\n          高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n        </div>\n      </modal>\n\n      <button class=\"atui-btn atui-btn-danger\" @click=\"showConfirm\">使用程序直接弹出confirm</button>\n      <button class=\"atui-btn atui-btn-danger\" @click=\"showError\">使用程序直接弹出error</button>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"atui-btn atui-btn-default\"\n  @click=\"showModal = true\"\n  >显示弹窗\n</button>\n<modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800px\">\n  <div slot=\"modal-body\" class=\"atui-modal-body\">\n    <v-textarea  :content.sync='textarea'></v-textarea>\n  </div>\n</modal>\n<button class=\"atui-btn atui-btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n<modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400px\">\n  <div slot=\"modal-header\"></div>\n  <div slot=\"modal-body\" class=\"atui-modal-body\">\n    高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n  </div>\n</modal>\n<button class=\"atui-btn atui-btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n<modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"90%\" height=\"90%\">\n  <div slot=\"modal-header\" class=\"atui-modal-header\">\n    <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n  </div>\n  <div slot=\"modal-body\" class=\"atui-modal-body\">\n    高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n  </div>\n  <div slot=\"modal-footer\" class=\"atui-modal-footer\">\n    <button type=\"button\" class=\"atui-btn atui-btn-default\" @click='showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"atui-btn atui-btn-success\" @click='showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n<button class=\"atui-btn atui-btn-warning\" @click=\"largeModal = true\">Large modal</button>\n<modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\n  <div slot=\"modal-body\" class=\"atui-modal-body\">\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n    <p>高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。</p>\n  </div>\n</modal>\n<button class=\"atui-btn atui-btn-danger\" @click=\"smallModal = true\">小弹窗</button>\n<modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n  <div slot=\"modal-body\" class=\"atui-modal-body\">\n    高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。\n  </div>\n</modal>\n<button class=\"atui-btn atui-btn-default\"\n  @click=\"smallModal = true\"\n  >Small Modal\n</button>\n<modal :show.sync=\"smallModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number, String or null</code></td>\n        <td><code>null</code></td>\n        <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>当点击主要按钮时触发的回调.</td>\n      </tr>\n      <tr>\n        <td>large</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>大的弹窗</td>\n      </tr>\n      <tr>\n        <td>small</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>小的弹窗</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(418)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/tableDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(419)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-31e77a62/tableDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	  width: 150
	}, {
	  title: '年龄',
	  dataIndex: 'age',
	  sorter: function sorter(a, b) {
	    return a.age - b.age;
	  },
	  render: function render(text, record, index) {
	    // return '<tooltip content="talk is cheap show me the code" placement="topLeft">'+
	    //           '<div>'+ record.name +'</div>'
	    //           // '<input v-if="gridData['+ index +']" v-model="gridData['+ index +'].age"/>'+
	    //         '</tooltip>'
	    return '';
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
	  width: 250
	
	}, {
	  title: '操作 <tooltip content="提示" placement="topRight"><icon type="help"></icon></tooltip>',
	  key: 'operation',
	  render: function render(text, record) {
	    if (record) {
	      return '<tooltip content="talk is cheap show me the code" placement="topLeft">' + '<icon type="info"></icon><a @click="this.show=true" target="_blank">详情</a>' + '</tooltip>';
	    }
	  }
	}]; // <template>
	//   <div class="bs-docs-section" id="table">
	//     <h3 class="page-header"><a href="#tabs" class="anchor">Table 表格</a></h3>
	//     <div class="bs-example">
	//     <row>
	//       <h4>带分页</h4>
	//       <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size" :pagination="pagination" v-ref:grid></grid>
	//
	//       <h4>不带分页</h4>
	//       <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size"></grid>
	//     </row>
	//     </div>
	//     <input type="button" @click="changeData" value="填充表格数据"/> <input type="button" @click="changeLoading" value="切换loading状态"/>
	//     <input type="button" @click="emptyData" value="清空数据"/>
	//     <input type="button" @click="changeSize" value="改变大小({{size}})"/>
	//
	//     <modal title="Fade Modal" :show.sync="show" effect="fade" width="800px">
	//         <div slot="modal-body" class="modal-body">
	//           <v-textarea :content.sync='textarea'></v-textarea>
	//         </div>
	//       </modal>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <h4>带分页</h4>
	// <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size" :pagination="pagination" v-ref:grid></grid>
	//
	// <h4>不带分页</h4>
	// <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size"></grid>
	//
	// <!--脚本-->
	// const columns = [{
	//   title: '姓名',
	//   dataIndex: 'name',
	//   filters: [{
	//     text: '姓李的的',
	//     value: '李',
	//   }, {
	//     text: '姓胡的',
	//     value: '胡',
	//   }],
	//   sorter:true,
	//   width:150
	// }, {
	//   title: '年龄',
	//   dataIndex: 'age',
	//   sorter: (a, b) => a.age - b.age,
	//   render(text, record, index) {
	//     return '<input v-model="gridData['+ index +'].age"/>'
	//   },
	//   width:250
	// }, {
	//   title: '地址',
	//   dataIndex: 'address',
	//   filters: [{
	//     text: '南湖',
	//     value: '南湖',
	//   }, {
	//     text: '西湖',
	//     value: '西湖',
	//   }],
	//   filterMultiple: false,
	//   width:250
	//
	// },{
	//     title: '操作 <tooltip content="提示" placement="topRight"><icon type="help"></icon></tooltip>',
	//     key: 'operation',
	//     render(text, record) {
	//       if(record) {
	//         return '<icon type="info"></icon><a href="'+ record.key+'.html" target="_blank">详情</a>'
	//       }
	//     }
	//   }
	// ];
	// const data = [];
	// for (let i = 0; i < 46; i++) {
	//   data.push({
	//     key: i,
	//     name: `李大嘴${i}`,
	//     age: 32,
	//     address: `西湖区湖底公园${i}号`,
	//   });
	// }
	// // 配置选择数据的选项
	// const rowSelection = {
	//   getCheckboxProps(record) {
	//     return {
	//       disabled: record.name === '胡彦祖'    // 配置无法勾选的列
	//     };
	//   },
	//   onChange(selectedRowKeys, selectedRows) {
	//     console.log('rowSelection.onChange',selectedRowKeys, selectedRows);
	//   },
	//   onSelect(record, selected, selectedRows) {
	//     console.log('rowSelection.onSelect',record, selected, selectedRows);
	//   },
	//   onSelectAll(selected, selectedRows, changeRows) {
	//     console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);
	//   }
	// };
	// export default {
	//   components: {
	//     Grid:VueComponent.Table,
	//     Icon,
	//     Row:Layout.Row
	//   },
	//   data() {
	//     return {
	//       size:'default',
	//       fixedHeader:false,
	//       loading:false,
	//       gridData:data,
	//       gridColumns: columns,
	//       rowSelection:rowSelection
	//     }
	//   },
	//   methods:{
	//     changeData() {
	//       this.gridData.push({
	//         key: Math.random(),
	//         name: '李秀莲大嘴哥',
	//         age: Math.random(),
	//         address: '西湖区湖底公园123号',
	//       })
	//     }
	//   }
	// }
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
	
	
	var _data = [];
	for (var i = 0; i < 46; i++) {
	  _data.push({
	    key: i,
	    name: '李大嘴' + i,
	    age: 32,
	    address: '西湖区湖底公园' + i + '号'
	  });
	}
	
	var rowSelection = {
	  getCheckboxProps: function getCheckboxProps(record) {
	    return {
	      disabled: record.name === '李大嘴' // 配置无法勾选的列
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
	
	var pagination = {
	  total: _data.length,
	  onShowSizeChange: function onShowSizeChange(current, pageSize) {
	    console.log('Current: ', current, '; PageSize: ', pageSize);
	  },
	  onChange: function onChange(current) {
	    console.log('Current: ', current);
	  }
	};
	
	exports.default = {
	  components: {
	    Grid: _src.Table,
	    Icon: _src.Icon,
	    Row: _src.Layout.Row,
	    Tooltip: _src.Tooltip,
	    Modal: _src.Modal,
	    vTextarea: _src.Textarea
	  },
	  data: function data() {
	    return {
	      size: 'default',
	      fixedHeader: false,
	      loading: false,
	      gridData: _data,
	      show: false,
	      textarea: '',
	      gridColumns: columns,
	      pagination: pagination,
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
	      me.gridData = me.gridData.reverse();
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
/* 419 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"table\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Table 表格</a></h3>\n    <div class=\"bs-example\">\n    <row>\n      <h4>带分页</h4>\n      <grid :data-source=\"gridData\" :columns=\"gridColumns\" :row-selection=\"rowSelection\" row-key=\"key\" @table-change=\"onTableChange\" :loading=\"loading\" :size=\"size\" :pagination=\"pagination\" v-ref:grid></grid>\n\n      <h4>不带分页</h4>\n      <grid :data-source=\"gridData\" :columns=\"gridColumns\" :row-selection=\"rowSelection\" row-key=\"key\" @table-change=\"onTableChange\" :loading=\"loading\" :size=\"size\"></grid>\n    </row>\n    </div>\n    <input type=\"button\" @click=\"changeData\" value=\"填充表格数据\"/> <input type=\"button\" @click=\"changeLoading\" value=\"切换loading状态\"/>\n    <input type=\"button\" @click=\"emptyData\" value=\"清空数据\"/>\n    <input type=\"button\" @click=\"changeSize\" value=\"改变大小({{size}})\"/>\n\n    <modal title=\"Fade Modal\" :show.sync=\"show\" effect=\"fade\" width=\"800px\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <v-textarea :content.sync='textarea'></v-textarea>\n        </div>\n      </modal>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>带分页</h4>\n<grid :data-source=\"gridData\" :columns=\"gridColumns\" :row-selection=\"rowSelection\" row-key=\"key\" @table-change=\"onTableChange\" :loading=\"loading\" :size=\"size\" :pagination=\"pagination\" v-ref:grid></grid>\n\n<h4>不带分页</h4>\n<grid :data-source=\"gridData\" :columns=\"gridColumns\" :row-selection=\"rowSelection\" row-key=\"key\" @table-change=\"onTableChange\" :loading=\"loading\" :size=\"size\"></grid>\n\n<!--脚本-->\nconst columns = [{\n  title: '姓名',\n  dataIndex: 'name',\n  filters: [{\n    text: '姓李的的',\n    value: '李',\n  }, {\n    text: '姓胡的',\n    value: '胡',\n  }],\n  sorter:true,\n  width:150\n}, {\n  title: '年龄',\n  dataIndex: 'age',\n  sorter: (a, b) => a.age - b.age,\n  render(text, record, index) {\n    return '<input v-model=\"gridData['+ index +'].age\"/>'\n  },\n  width:250\n}, {\n  title: '地址',\n  dataIndex: 'address',\n  filters: [{\n    text: '南湖',\n    value: '南湖',\n  }, {\n    text: '西湖',\n    value: '西湖',\n  }],\n  filterMultiple: false,\n  width:250\n\n},{\n    title: '操作 <tooltip content=\"提示\" placement=\"topRight\"><icon type=\"help\"></icon></tooltip>',\n    key: 'operation',\n    render(text, record) {\n      if(record) {\n        return '<icon type=\"info\"></icon><a href=\"'+ record.key+'.html\" target=\"_blank\">详情</a>'\n      }\n    }\n  }\n];\nconst data = [];\nfor (let i = 0; i < 46; i++) {\n  data.push({\n    key: i,\n    name: `李大嘴${i}`,\n    age: 32,\n    address: `西湖区湖底公园${i}号`,\n  });\n}\n// 配置选择数据的选项\nconst rowSelection = {\n  getCheckboxProps(record) {\n    return {\n      disabled: record.name === '胡彦祖'    // 配置无法勾选的列\n    };\n  },\n  onChange(selectedRowKeys, selectedRows) {\n    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);\n  },\n  onSelect(record, selected, selectedRows) {\n    console.log('rowSelection.onSelect',record, selected, selectedRows);\n  },\n  onSelectAll(selected, selectedRows, changeRows) {\n    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);\n  }\n};\nexport default {\n  components: {\n    Grid:VueComponent.Table,\n    Icon,\n    Row:Layout.Row\n  },\n  data() {\n    return {\n      size:'default',\n      fixedHeader:false,\n      loading:false,\n      gridData:data,\n      gridColumns: columns,\n      rowSelection:rowSelection\n    }\n  },\n  methods:{\n    changeData() {\n      this.gridData.push({\n        key: Math.random(),\n        name: '李秀莲大嘴哥',\n        age: Math.random(),\n        address: '西湖区湖底公园123号',\n      })\n    }\n  }\n}\n\n</script></code></pre>\n  <h3>Table 选项 </h3>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>名称</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>描述</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>data-srouce</td>\n        <td><code>Array</code></td>\n        <td></td>\n        <td>要绑定的数据源</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td><code>default</code> 或 <code>middle</code> 或 <code>small</code></td>\n        <td>表格大小</td>\n      </tr>\n       <tr>\n        <td>fixed-header</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>是否固定头部（注意，固定头部必须指定每列宽度）</td>\n      </tr>\n      <tr>\n        <td>row-selection</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否增加列checkbox选择</td>\n      </tr>\n      <tr>\n        <td>columns</td>\n        <td><code>Array</code></td>\n        <td>[]</td>\n        <td>表格列的配置描述</td>\n      </tr>\n      <tr>\n        <td>row-key</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>行选择时绑定的关键列名</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(421)
	__vue_script__ = __webpack_require__(422)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/badgeDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(423)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5de99592/badgeDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
	
	var _src = __webpack_require__(134);
	
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
/* 423 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"badge\">\n    <h3 class=\"page-header\"><a href=\"#badge\" class=\"anchor\">Badge 徽标数</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基础型</h4>\n      <badge :count=\"6\">\n        <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n      </badge>\n      <h4 class=\"example-title\">大数字型</h4>\n      <badge :count=\"99\">\n        <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n      </badge>\n\n      <badge :count=\"1000\" >\n        <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n      </badge>\n      <h4 class=\"example-title\">小红点型</h4>\n        <badge :dot=\"true\" >\n          <a href=\"javascript:;\" style=\"width: 42px; height: 42px; background-color: #eee; display: inline-block; border-radius: 6px;\"></a>\n        </badge>\n\n        <badge :dot=\"true\" >\n          <a href=\"javascript:;\" >这是一个文字链接</a>\n        </badge>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<badge :count=\"6\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"99\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :count=\"1000\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :dot=\"true\">\n  <a href=\"javascript:;\" class=\"badge-count-example\"></a>\n</badge>\n\n<badge :dot=\"true\">\n  <a href=\"javascript:;\" >这是一个文字链接</a>\n</badge>\n\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>count</td>\n        <td><code>Number</code></td>\n        <td></td>\n        <td>展示的数字，当大于99时展示99+</td>\n      </tr>\n      <tr>\n        <td>dot</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>展示的红点</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(425)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/carouselDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(426)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0f2fbc12/carouselDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 426 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"carousel\">\n    <h3 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel 走马灯</a></h3>\n    <div class=\"bs-example\">\n      <carousel indicators=\"true\" controls=\"true\">\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1Pq31KpXXXXbFXXXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1ih3pJXXXXXbZXVXXXXXXXXXX-888-400.png\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n        <slide>\n          <img style=\"width:100%\" src=\"https://img.alicdn.com/tps/TB1fEtIKpXXXXbEXVXXXXXXXXXX-888-400.jpg\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slide>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<carousel>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slide>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slide>\n  <slide>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slide>\n</carousel>\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(428)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3643c08c/container.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 428 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container bs-docs-container\">\n  <div class=\"atui-row\">\n      <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(430)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/spinDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(431)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4fa0c874/spinDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 431 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"spin\">\n    <h3 class=\"page-header\"><a href=\"#spin\" class=\"anchor\">Spin 加载中</a></h3>\n    <div class=\"bs-example\">\n    <h4>小的加载</h4>\n    <spin show size=\"small\"></spin>\n    <h4>普通加载</h4>\n    <spin show></spin>\n    <h4>大的加载</h4>\n    <spin show size=\"large\"></spin>\n    <h4>隐藏的大的加载(默认不加show就不显示)</h4>\n    <spin size=\"large\"></spin>\n    <h4>包裹要loading的元素</h4>\n    <spin sping>\n      <div>\n        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n      </div>\n    </spin>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>小的加载</h4>\n<spin show size=\"small\"></spin>\n<h4>普通加载</h4>\n<spin show></spin>\n<h4>大的加载</h4>\n<spin show size=\"large\"></spin>\n<h4>隐藏的大的加载(默认不加show就不显示)</h4>\n<spin size=\"large\"></spin>\n<h4>包裹要loading的元素</h4>\n<spin sping>\n  <div>\n    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n  </div>\n</spin>\n</script></code></pre>\n\n  </div>\n";

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(433)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/textareaDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(434)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-514ed028/textareaDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	      } else {
	        this.validStatus = '';
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
	//     <h4>高度自适应的文本域</h4>
	//     <div>
	//       <v-textarea placeholder="高度无限增大" autosize></v-textarea>
	//     </div>
	//     <div>
	//       <v-textarea placeholder="有最大高度" autosize max-rows="10"></v-textarea>
	//     </div>
	//     <div>
	//       <v-textarea placeholder="有最小高度" autosize min-rows="5"></v-textarea>
	//     </div>
	//     <div>
	//       <v-textarea placeholder="有最大和最小高度" autosize min-rows="5" max-rows="10"></v-textarea>
	//     </div>
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <h4>基础文本域</h4>
	// <div>
	//   <v-textarea placeholder="请输入描述信息"></v-textarea>
	// </div>
	// <div>
	//   <v-textarea disabled content="文本框被禁用了"></v-textarea>
	// </div>
	// <div>
	//   <v-textarea error content="信息错误了"></v-textarea>
	// </div>
	// <h4>统计输入字数文本域</h4>
	// <div>
	//   <v-textarea placeholder="请输入描述信息，有字数统计" :words-count="true"></v-textarea>
	// </div>
	// <div>
	//   <v-textarea placeholder="请输入描述信息" :words-count="true" count-tips="您输入的字数是："></v-textarea>
	// </div>
	// <h4>有字数限制文本域</h4>
	// <div>
	//   <v-textarea :limit-words="50" placeholder="这里只能输入50个字" :error="validStatus == 'error'" name="ruohuan" v-ref:textarea-limit :content.sync="content"></v-textarea>
	// </div>
	// <div>
	//   <v-textarea disabled :limit-words="10" placeholder="这里只能输入10个字"></v-textarea>
	// </div>
	// <h4>高度自适应的文本域</h4>
	// <div>
	//   <v-textarea placeholder="高度无限增大" autosize></v-textarea>
	// </div>
	// <div>
	//   <v-textarea placeholder="有最大高度" autosize max-rows="10"></v-textarea>
	// </div>
	// <div>
	//   <v-textarea placeholder="有最小高度" autosize min-rows="5"></v-textarea>
	// </div>
	// <div>
	//   <v-textarea placeholder="有最大和最小高度" autosize min-rows="5" max-rows="10"></v-textarea>
	// </div>
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
/* 434 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"textarea\">\n    <h3 class=\"page-header\"><a href=\"#textarea\" class=\"anchor\">Textarea 文本域</a></h3>\n    <div class=\"bs-example\">\n    <h4>基础文本域</h4>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea disabled content=\"文本框被禁用了\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea error content=\"信息错误了\"></v-textarea>\n    </div>\n    <h4>统计输入字数文本域</h4>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息，有字数统计\" :words-count=\"true\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea placeholder=\"请输入描述信息\" :words-count=\"true\" count-tips=\"您输入的字数是：\"></v-textarea>\n    </div>\n    <h4>有字数限制文本域</h4>\n    <div>\n      <v-textarea :limit-words=\"50\" placeholder=\"这里只能输入50个字\" :error=\"validStatus == 'error'\" name=\"ruohuan\" v-ref:textarea-limit :content.sync=\"content\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea disabled :limit-words=\"10\" placeholder=\"这里只能输入10个字\"></v-textarea>\n    </div>\n    <h4>高度自适应的文本域</h4>\n    <div>\n      <v-textarea placeholder=\"高度无限增大\" autosize></v-textarea>\n    </div>\n    <div>\n      <v-textarea placeholder=\"有最大高度\" autosize max-rows=\"10\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea placeholder=\"有最小高度\" autosize min-rows=\"5\"></v-textarea>\n    </div>\n    <div>\n      <v-textarea placeholder=\"有最大和最小高度\" autosize min-rows=\"5\" max-rows=\"10\"></v-textarea>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>基础文本域</h4>\n<div>\n  <v-textarea placeholder=\"请输入描述信息\"></v-textarea>\n</div>\n<div>\n  <v-textarea disabled content=\"文本框被禁用了\"></v-textarea>\n</div>\n<div>\n  <v-textarea error content=\"信息错误了\"></v-textarea>\n</div>\n<h4>统计输入字数文本域</h4>\n<div>\n  <v-textarea placeholder=\"请输入描述信息，有字数统计\" :words-count=\"true\"></v-textarea>\n</div>\n<div>\n  <v-textarea placeholder=\"请输入描述信息\" :words-count=\"true\" count-tips=\"您输入的字数是：\"></v-textarea>\n</div>\n<h4>有字数限制文本域</h4>\n<div>\n  <v-textarea :limit-words=\"50\" placeholder=\"这里只能输入50个字\" :error=\"validStatus == 'error'\" name=\"ruohuan\" v-ref:textarea-limit :content.sync=\"content\"></v-textarea>\n</div>\n<div>\n  <v-textarea disabled :limit-words=\"10\" placeholder=\"这里只能输入10个字\"></v-textarea>\n</div>\n<h4>高度自适应的文本域</h4>\n<div>\n  <v-textarea placeholder=\"高度无限增大\" autosize></v-textarea>\n</div>\n<div>\n  <v-textarea placeholder=\"有最大高度\" autosize max-rows=\"10\"></v-textarea>\n</div>\n<div>\n  <v-textarea placeholder=\"有最小高度\" autosize min-rows=\"5\"></v-textarea>\n</div>\n<div>\n  <v-textarea placeholder=\"有最大和最小高度\" autosize min-rows=\"5\" max-rows=\"10\"></v-textarea>\n</div>\n</script></code></pre>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>content</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文本域内容</td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>文本域预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>disabled</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，禁用</td>\n        </tr>\n       <tr>\n          <td>error</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，输入验证失败</td>\n        </tr>\n        <tr>\n          <td>success</td>\n          <td></td>\n          <td></td>\n          <td>文本域状态，输入验证成功</td>\n        </tr>\n        <tr>\n          <td>limit-words</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td>文本域限制字数</td>\n        </tr>\n        <tr>\n          <td>words-count</td>\n          <td><code>Boolean || 空</code></td>\n          <td></td>\n          <td>文本域字数统计功能</td>\n        </tr>\n        <tr>\n          <td>count-tips</td>\n          <td><code>String</code></td>\n          <td><code>输入字数：</code></td>\n          <td>文本域字数统计提示</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>";

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(436)
	__vue_script__ = __webpack_require__(437)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/tagDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(438)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5640466e/tagDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 436 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 438 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tag\">\n    <h3 class=\"page-header\"><a href=\"#tag\" class=\"anchor\">Tag 标签</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本标签</h4>\n      <v-tag>标签一</v-tag>\n      <v-tag closable @close=\"closeTag\">标签（回调）</v-tag>\n      <v-tag :href=\"href\">标签（链接）</v-tag>\n      <h4 class=\"example-title\">三种颜色的标签</h4>\n      <v-tag color=\"green\">标签</v-tag>\n      <v-tag color=\"orange\" closable @close=\"closeTag\">标签</v-tag>\n      <v-tag color=\"red\" size=\"20\">标签</v-tag>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-tag>标签一</v-tag>\n<v-tag closable @close=\"closeTag\">标签（回调）</v-tag>\n<v-tag :href=\"href\">标签（链接）</v-tag>\n<v-tag color=\"green\">标签</v-tag>\n<v-tag color=\"orange\" closable @close=\"closeTag\">标签</v-tag>\n<v-tag color=\"red\" size=\"20\">标签</v-tag>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>closable</td>\n        <td><code>Boolean</code></td>\n        <td></td>\n        <td>是否显示关闭按钮</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Tag的颜色，默认为#f2f2f2</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Tag的尺寸，默认为12px</td>\n      </tr>\n      <tr>\n        <td>href</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>给tag加上链接地址，作为一个超链接</td>\n      </tr>\n      <tr>\n        <td>on-close</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>点击关闭按钮之后所执行的回调函数</td>\n      </tr>\n\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(440)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/tooltipDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(441)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5b4c4557/tooltipDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	exports.default = {
	  components: {
	    Tooltip: _src.Tooltip
	  },
	  methods: {
	    del: function del() {
	      this.$refs.bottomRight.$destroy();
	    }
	  }
	};
	// </script>

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
	//               <button class="atui-btn atui-btn-default ">上左</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip
	//               content="我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字"
	//               placement="top">
	//               <button class="atui-btn atui-btn-default ">上边</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip content="Lorem ipsum dolor sit amet" placement="topRight">
	//               <button class="atui-btn atui-btn-default ">上右</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>
	//             <tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod" placement="leftTop">
	//               <button class="atui-btn atui-btn-default ">左上</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//           <td></td>
	//           <td></td>
	//           <td>
	//             <tooltip content="bang bang bang!" placement="rightTop">
	//               <button class="atui-btn atui-btn-default ">右上</button>
	//             </tooltip>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td>
	//             <tooltip content="Are you kidding me?" placement="left">
	//               <button class="atui-btn atui-btn-default ">左边</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//           <td></td>
	//           <td></td>
	//           <td>
	//             <tooltip content="Lorem ipsum dolor sit amet" placement="right">
	//               <button class="atui-btn atui-btn-default ">右边</button>
	//             </tooltip>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td>
	//             <tooltip content="no, i'm serious! " placement="leftBottom">
	//               <button class="atui-btn atui-btn-default ">左下</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//           <td></td>
	//           <td></td>
	//           <td>
	//             <tooltip content="Lorem ipsum dolor sit amet" placement="rightBottom">
	//               <button class="atui-btn atui-btn-default ">右下</button>
	//             </tooltip>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td></td>
	//           <td>
	//             <tooltip placement="bottomLeft"
	//                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//               <button class="atui-btn atui-btn-default ">下左</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip placement="bottom"
	//                      content="我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字">
	//               <button class="atui-btn atui-btn-default ">下边</button>
	//             </tooltip>
	//           </td>
	//           <td>
	//             <tooltip placement="bottomRight"
	//                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//               <button class="atui-btn atui-btn-default ">下右</button>
	//             </tooltip>
	//           </td>
	//           <td></td>
	//         </tr>
	//       </table>
	//
	//       <h4>Triger</h4>
	//       <p>
	//         <tooltip trigger="click"
	//                  effect="fadein" content="提示文字" placement="top" trigger="hover">
	//           <button class="atui-btn atui-btn-default ">Click</button>
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
	// <button class="atui-btn atui-btn-default ">上左</button>
	// </tooltip>
	// <tooltip content="talk is cheap show me the code" placement="top">
	// <button class="atui-btn atui-btn-default ">上边</button>
	// </tooltip>
	// <tooltip content="Lorem ipsum dolor sit amet" placement="topRight">
	// <button class="atui-btn atui-btn-default ">上右</button>
	// </tooltip>
	// <tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod" placement="leftTop">
	// <button class="atui-btn atui-btn-default ">左上</button>
	// </tooltip>
	// <tooltip content="Are you kidding me?" placement="left">
	// <button class="atui-btn atui-btn-default ">左边</button>
	// </tooltip>
	// <tooltip content="no, i'm serious! " placement="leftBottom">
	// <button class="atui-btn atui-btn-default ">左下</button>
	// </tooltip>
	// <tooltip content="bang bang bang!" placement="rightTop">
	//   <button class="atui-btn atui-btn-default ">右上</button>
	// </tooltip>
	// <tooltip content="Lorem ipsum dolor sit amet" placement="right">
	//   <button class="atui-btn atui-btn-default ">右边</button>
	// </tooltip>
	// <tooltip content="Lorem ipsum dolor sit amet" placement="rightBottom">
	//   <button class="atui-btn atui-btn-default ">右下</button>
	// </tooltip>
	// <tooltip  placement="bottomLeft" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="atui-btn atui-btn-default ">下左</button>
	// </tooltip>
	// <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="atui-btn atui-btn-default ">下边</button>
	// </tooltip>
	// <tooltip  placement="bottomRight" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="atui-btn atui-btn-default ">下右</button>
	// </tooltip>
	// <tooltip trigger="click"
	//   effect="fadein" content="提示文字" placement="top" trigger="hover">
	//   <button class="atui-btn atui-btn-default ">Click</button>
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
/* 441 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tooltip\">\n    <h3 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip 文字提示</a></h3>\n    <div class=\"bs-example\">\n      <table class=\"table-tooltip\" cellspacing=\"5\">\n        <tr>\n          <td></td>\n          <td>\n            <tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\">\n              <button class=\"atui-btn atui-btn-default \">上左</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip\n              content=\"我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字\"\n              placement=\"top\">\n              <button class=\"atui-btn atui-btn-default \">上边</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n              <button class=\"atui-btn atui-btn-default \">上右</button>\n            </tooltip>\n          </td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\" placement=\"leftTop\">\n              <button class=\"atui-btn atui-btn-default \">左上</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"bang bang bang!\" placement=\"rightTop\">\n              <button class=\"atui-btn atui-btn-default \">右上</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"Are you kidding me?\" placement=\"left\">\n              <button class=\"atui-btn atui-btn-default \">左边</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n              <button class=\"atui-btn atui-btn-default \">右边</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <tooltip content=\"no, i'm serious! \" placement=\"leftBottom\">\n              <button class=\"atui-btn atui-btn-default \">左下</button>\n            </tooltip>\n          </td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\n            <tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n              <button class=\"atui-btn atui-btn-default \">右下</button>\n            </tooltip>\n          </td>\n        </tr>\n        <tr>\n          <td></td>\n          <td>\n            <tooltip placement=\"bottomLeft\"\n                     content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"atui-btn atui-btn-default \">下左</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip placement=\"bottom\"\n                     content=\"我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字我是tooltip里的文字\">\n              <button class=\"atui-btn atui-btn-default \">下边</button>\n            </tooltip>\n          </td>\n          <td>\n            <tooltip placement=\"bottomRight\"\n                     content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n              <button class=\"atui-btn atui-btn-default \">下右</button>\n            </tooltip>\n          </td>\n          <td></td>\n        </tr>\n      </table>\n\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n                 effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n          <button class=\"atui-btn atui-btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n               content=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\">\n      <script type=\"language-mark-up\">\n<tooltip content=\"talk is cheap show me the code\" placement=\"topLeft\">\n<button class=\"atui-btn atui-btn-default \">上左</button>\n</tooltip>\n<tooltip content=\"talk is cheap show me the code\" placement=\"top\">\n<button class=\"atui-btn atui-btn-default \">上边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"topRight\">\n<button class=\"atui-btn atui-btn-default \">上右</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\" placement=\"leftTop\">\n<button class=\"atui-btn atui-btn-default \">左上</button>\n</tooltip>\n<tooltip content=\"Are you kidding me?\" placement=\"left\">\n<button class=\"atui-btn atui-btn-default \">左边</button>\n</tooltip>\n<tooltip content=\"no, i'm serious! \" placement=\"leftBottom\">\n<button class=\"atui-btn atui-btn-default \">左下</button>\n</tooltip>\n<tooltip content=\"bang bang bang!\" placement=\"rightTop\">\n  <button class=\"atui-btn atui-btn-default \">右上</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n  <button class=\"atui-btn atui-btn-default \">右边</button>\n</tooltip>\n<tooltip content=\"Lorem ipsum dolor sit amet\" placement=\"rightBottom\">\n  <button class=\"atui-btn atui-btn-default \">右下</button>\n</tooltip>\n<tooltip  placement=\"bottomLeft\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"atui-btn atui-btn-default \">下左</button>\n</tooltip>\n<tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"atui-btn atui-btn-default \">下边</button>\n</tooltip>\n<tooltip  placement=\"bottomRight\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"atui-btn atui-btn-default \">下右</button>\n</tooltip>\n<tooltip trigger=\"click\"\n  effect=\"fadein\" content=\"提示文字\" placement=\"top\" trigger=\"hover\">\n  <button class=\"atui-btn atui-btn-default \">Click</button>\n  </tooltip>\n<tooltip effect=\"scale\"\ncontent=\"Lorem ipsum dolor sit amet\" placement=\"topLeft\" trigger=\"focus\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n</tooltip>\n\n      </script>\n    </code></pre>\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code></td>\n        <td><code>click</code></td>\n        <td>以何种方式触发显示气泡框,可选hover, click, focus</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code></td>\n        <td><code>scale</code></td>\n        <td>过渡效果，可选scale, fadein</td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>内容</td>\n      </tr>\n      <td>placement</td>\n      <td><code>String</code></td>\n      <td></td>\n      <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight\n      </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(443)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/triggerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(444)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0b21460c/triggerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	exports.default = {
	  components: {
	    Trigger: _src.Trigger
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="bs-docs-section" id="trigger">
	//     <h3 class="page-header"><a href="#trigger" class="anchor">Trigger 触发弹窗</a></h3>
	//     <div class="bs-example">
	//       <h3>普通</h3>
	//       <trigger trigger="click" placement="top">
	//         <button class="atui-btn" slot="trigger">click to trigger</button>
	//         <div slot="popup">I'm a click popup</div>
	//       </trigger>
	//       <trigger trigger="hover">
	//         <button class="atui-btn" slot="trigger">hover to trigger</button>
	//         <div slot="popup">I'm a hover popup</div>
	//       </trigger>
	//       <trigger trigger="click" placement="topRight">
	//         <button class="atui-btn" slot="trigger">click to show topRight</button>
	//         <div slot="popup">I'm a hover popup</div>
	//       </trigger>
	//       <trigger trigger="hover" placement="topLeft">
	//         <button class="atui-btn" slot="trigger">topLeft</button>
	//         <div slot="popup">I'm a hover popup</div>
	//       </trigger>
	//       <trigger trigger="hover" placement="bottomRight">
	//         <button class="atui-btn" slot="trigger">bottomRight</button>
	//         <div slot="popup">I'm a hover popup</div>
	//       </trigger>
	//       <trigger trigger="focus">
	//         <input type="text" class="atui-form-control" placeholder="Focus" slot="trigger">
	//         <div slot="popup">I'm a hover popup</div>
	//       </trigger>
	//       <h3>复杂</h3>
	//       <trigger trigger="click">
	//         <button class="atui-btn" slot="trigger">popup里继续trigger</button>
	//         <div slot="popup">
	//           <trigger trigger="hover" placement="right">
	//             <span slot="trigger" style="display: inline-block; padding: 20px; border: 1px solid gray">hover to trigger</span>
	//             <div slot="popup" style="padding: 20px">I'm a hover popup</div>
	//           </trigger>
	//         </div>
	//       </trigger>
	//       <trigger trigger="hover" placement="right">
	//         <trigger trigger="hover" slot="trigger">
	//           <button class="atui-btn" slot="trigger">同时多个popup</button>
	//           <div slot="popup">I'm popup-1</div>
	//         </trigger>
	//         <div slot="popup">I'm popup-2</div>
	//       </trigger>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <h3>普通</h3>
	// <trigger trigger="click" placement="top">
	//   <button class="atui-btn" slot="trigger">click to trigger</button>
	//   <div slot="popup">I'm a click popup</div>
	// </trigger>
	// <trigger trigger="hover">
	//   <button class="atui-btn" slot="trigger">hover to trigger</button>
	//   <div slot="popup">I'm a hover popup</div>
	// </trigger>
	// <trigger trigger="click" placement="topRight">
	//   <button class="atui-btn" slot="trigger">click to show topRight</button>
	//   <div slot="popup">I'm a hover popup</div>
	// </trigger>
	// <trigger trigger="hover" placement="topLeft">
	//   <button class="atui-btn" slot="trigger">topLeft</button>
	//   <div slot="popup">I'm a hover popup</div>
	// </trigger>
	// <trigger trigger="hover" placement="bottomRight">
	//   <button class="atui-btn" slot="trigger">bottomRight</button>
	//   <div slot="popup">I'm a hover popup</div>
	// </trigger>
	// <trigger trigger="focus">
	//   <input type="text" class="atui-form-control" placeholder="Focus" slot="trigger">
	//   <div slot="popup">I'm a hover popup</div>
	// </trigger>
	// <h3>复杂</h3>
	// <trigger trigger="click">
	//   <button class="atui-btn" slot="trigger">popup里继续trigger</button>
	//   <div slot="popup">
	//     <trigger trigger="hover" placement="right">
	//       <span slot="trigger" style="display: inline-block; padding: 20px; border: 1px solid gray">hover to trigger</span>
	//       <div slot="popup" style="padding: 20px">I'm a hover popup</div>
	//     </trigger>
	//   </div>
	// </trigger>
	// <trigger trigger="hover" placement="right">
	//   <trigger trigger="hover" slot="trigger">
	//     <button class="atui-btn" slot="trigger">同时多个popup</button>
	//     <div slot="popup">I'm popup-1</div>
	//   </trigger>
	//   <div slot="popup">I'm popup-2</div>
	// </trigger>
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
	//           <td>trigger</td>
	//           <td><code>String</code></td>
	//           <td><code>click</code></td>
	//           <td>以何种方式触发显示气泡框,可选hover, click, focus</td>
	//         </tr>
	//         <tr>
	//           <td>effect</td>
	//           <td><code>String</code></td>
	//           <td><code>scale</code></td>
	//           <td>过渡效果，可选scale, fadein</td>
	//         </tr>
	//         <tr>
	//           <td>placement</td>
	//           <td><code>String</code></td>
	//           <td><code>bottom</code></td>
	//           <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight
	//           </td>
	//         </tr>
	//         <tr>
	//           <td>popupCls</td>
	//           <td><code>String</code></td>
	//           <td><code>popup</code></td>
	//           <td>自定义popup的样式名
	//           </td>
	//         </tr>
	//         <tr>
	//           <td>popupAlwaysInView</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>true</code></td>
	//           <td>是否支持坐标智能检测,保证弹窗优先在视图区域可见,默认开启
	//           </td>
	//         </tr>
	//         <tr>
	//           <td>popupHideWhenClickOutside</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>点击trigger组件外部区域的时候,是否隐藏popup浮层,默认不隐藏</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//     <h2>events</h2>
	//     <table class="atui-table table-bordered">
	//       <thead>
	//       <tr>
	//         <th>Name</th>
	//         <th>Params</th>
	//         <th>Type</th>
	//         <th>Description</th>
	//       </tr>
	//       </thead>
	//       <tbody>
	//       <tr>
	//         <td>trigger-reset-pos</td>
	//         <td><code>{$trigger, $popup, placement}</code></td>
	//         <td><code>Object</code></td>
	//         <td>popup定位事件</td>
	//       </tr>
	//       <tr>
	//         <td>trigger-popup-toggle</td>
	//         <td><code>show</code></td>
	//         <td><code>Boolean</code></td>
	//         <td>popup切换显示隐藏状态事件,true表示可见</td>
	//       </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 444 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"trigger\">\n    <h3 class=\"page-header\"><a href=\"#trigger\" class=\"anchor\">Trigger 触发弹窗</a></h3>\n    <div class=\"bs-example\">\n      <h3>普通</h3>\n      <trigger trigger=\"click\" placement=\"top\">\n        <button class=\"atui-btn\" slot=\"trigger\">click to trigger</button>\n        <div slot=\"popup\">I'm a click popup</div>\n      </trigger>\n      <trigger trigger=\"hover\">\n        <button class=\"atui-btn\" slot=\"trigger\">hover to trigger</button>\n        <div slot=\"popup\">I'm a hover popup</div>\n      </trigger>\n      <trigger trigger=\"click\" placement=\"topRight\">\n        <button class=\"atui-btn\" slot=\"trigger\">click to show topRight</button>\n        <div slot=\"popup\">I'm a hover popup</div>\n      </trigger>\n      <trigger trigger=\"hover\" placement=\"topLeft\">\n        <button class=\"atui-btn\" slot=\"trigger\">topLeft</button>\n        <div slot=\"popup\">I'm a hover popup</div>\n      </trigger>\n      <trigger trigger=\"hover\" placement=\"bottomRight\">\n        <button class=\"atui-btn\" slot=\"trigger\">bottomRight</button>\n        <div slot=\"popup\">I'm a hover popup</div>\n      </trigger>\n      <trigger trigger=\"focus\">\n        <input type=\"text\" class=\"atui-form-control\" placeholder=\"Focus\" slot=\"trigger\">\n        <div slot=\"popup\">I'm a hover popup</div>\n      </trigger>\n      <h3>复杂</h3>\n      <trigger trigger=\"click\">\n        <button class=\"atui-btn\" slot=\"trigger\">popup里继续trigger</button>\n        <div slot=\"popup\">\n          <trigger trigger=\"hover\" placement=\"right\">\n            <span slot=\"trigger\" style=\"display: inline-block; padding: 20px; border: 1px solid gray\">hover to trigger</span>\n            <div slot=\"popup\" style=\"padding: 20px\">I'm a hover popup</div>\n          </trigger>\n        </div>\n      </trigger>\n      <trigger trigger=\"hover\" placement=\"right\">\n        <trigger trigger=\"hover\" slot=\"trigger\">\n          <button class=\"atui-btn\" slot=\"trigger\">同时多个popup</button>\n          <div slot=\"popup\">I'm popup-1</div>\n        </trigger>\n        <div slot=\"popup\">I'm popup-2</div>\n      </trigger>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h3>普通</h3>\n<trigger trigger=\"click\" placement=\"top\">\n  <button class=\"atui-btn\" slot=\"trigger\">click to trigger</button>\n  <div slot=\"popup\">I'm a click popup</div>\n</trigger>\n<trigger trigger=\"hover\">\n  <button class=\"atui-btn\" slot=\"trigger\">hover to trigger</button>\n  <div slot=\"popup\">I'm a hover popup</div>\n</trigger>\n<trigger trigger=\"click\" placement=\"topRight\">\n  <button class=\"atui-btn\" slot=\"trigger\">click to show topRight</button>\n  <div slot=\"popup\">I'm a hover popup</div>\n</trigger>\n<trigger trigger=\"hover\" placement=\"topLeft\">\n  <button class=\"atui-btn\" slot=\"trigger\">topLeft</button>\n  <div slot=\"popup\">I'm a hover popup</div>\n</trigger>\n<trigger trigger=\"hover\" placement=\"bottomRight\">\n  <button class=\"atui-btn\" slot=\"trigger\">bottomRight</button>\n  <div slot=\"popup\">I'm a hover popup</div>\n</trigger>\n<trigger trigger=\"focus\">\n  <input type=\"text\" class=\"atui-form-control\" placeholder=\"Focus\" slot=\"trigger\">\n  <div slot=\"popup\">I'm a hover popup</div>\n</trigger>\n<h3>复杂</h3>\n<trigger trigger=\"click\">\n  <button class=\"atui-btn\" slot=\"trigger\">popup里继续trigger</button>\n  <div slot=\"popup\">\n    <trigger trigger=\"hover\" placement=\"right\">\n      <span slot=\"trigger\" style=\"display: inline-block; padding: 20px; border: 1px solid gray\">hover to trigger</span>\n      <div slot=\"popup\" style=\"padding: 20px\">I'm a hover popup</div>\n    </trigger>\n  </div>\n</trigger>\n<trigger trigger=\"hover\" placement=\"right\">\n  <trigger trigger=\"hover\" slot=\"trigger\">\n    <button class=\"atui-btn\" slot=\"trigger\">同时多个popup</button>\n    <div slot=\"popup\">I'm popup-1</div>\n  </trigger>\n  <div slot=\"popup\">I'm popup-2</div>\n</trigger>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>trigger</td>\n          <td><code>String</code></td>\n          <td><code>click</code></td>\n          <td>以何种方式触发显示气泡框,可选hover, click, focus</td>\n        </tr>\n        <tr>\n          <td>effect</td>\n          <td><code>String</code></td>\n          <td><code>scale</code></td>\n          <td>过渡效果，可选scale, fadein</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code></td>\n          <td><code>bottom</code></td>\n          <td>定义气泡框的放置位置，可选top，topLeft，topRight，<br> left，leftTop，leftBottom，right，rightTop，rightBottom，<br>bottom，bottomLeft，bottomRight\n          </td>\n        </tr>\n        <tr>\n          <td>popupCls</td>\n          <td><code>String</code></td>\n          <td><code>popup</code></td>\n          <td>自定义popup的样式名\n          </td>\n        </tr>\n        <tr>\n          <td>popupAlwaysInView</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>是否支持坐标智能检测,保证弹窗优先在视图区域可见,默认开启\n          </td>\n        </tr>\n        <tr>\n          <td>popupHideWhenClickOutside</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>点击trigger组件外部区域的时候,是否隐藏popup浮层,默认不隐藏</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>events</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Params</th>\n        <th>Type</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>trigger-reset-pos</td>\n        <td><code>{$trigger, $popup, placement}</code></td>\n        <td><code>Object</code></td>\n        <td>popup定位事件</td>\n      </tr>\n      <tr>\n        <td>trigger-popup-toggle</td>\n        <td><code>show</code></td>\n        <td><code>Boolean</code></td>\n        <td>popup切换显示隐藏状态事件,true表示可见</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(446)
	__vue_script__ = __webpack_require__(448)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/accordionDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(449)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c6b1d48/accordionDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(447);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordionDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordionDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.custom-class {\n  padding: 10px 15px;\n}\n", "", {"version":3,"sources":["/./docs-backup/example/accordionDocs.vue?549db8fc"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmHA;EACA,mBAAA;CACA","file":"accordionDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"accordion\">\n    <h3 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion 手风琴</a></h3>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion :open-one=\"checked\">\n        <panel open>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n          内容一\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n          内容二\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n          内容三\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n          内容四\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n<accordion :one-at-atime=\"checked\">\n  <panel :is-open=\"true\">\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n    内容一\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n    内容二\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n    内容三\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n    内容四\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>slot::panel-header</td>\n          <td><code>slot node</code></td>\n          <td></td>\n          <td>以内容分发的形式自定义header里面的内容，注意：因为header自动绑定了展开收起的事件，所以\n          如果用户自定义的元素里有事件绑定的操作，建议使用事件修饰符（例：@click.prev.stop=\"\"）</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n\n\n<script>\n  import {Accordion} from 'src/'\n  const {Panel} = Accordion\n\n  export default {\n    data() {\n      return {\n        checked: true\n      }\n    },\n    components: {\n      Accordion,\n      Panel\n    }\n  }\n</script>\n<style>\n  .custom-class {\n    padding: 10px 15px;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	var Panel = _src.Accordion.Panel; // <template>
	//   <div class="bs-docs-section" id="accordion">
	//     <h3 class="page-header"><a href="#accordion" class="anchor">Accordion 手风琴</a></h3>
	//     <div class="bs-example">
	//       <p>
	//         <input type="checkbox" v-model="checked">
	//         Open only one at a time.
	//       </p>
	//       <accordion :open-one="checked">
	//         <panel open>
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
/* 449 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"accordion\">\n    <h3 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion 手风琴</a></h3>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion :open-one=\"checked\">\n        <panel open>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n          内容一\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n          内容二\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n          内容三\n        </panel>\n        <panel>\n          <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n          内容四\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n<accordion :one-at-atime=\"checked\">\n  <panel :is-open=\"true\">\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #1</div>\n    内容一\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #2</div>\n    内容二\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #3</div>\n    内容三\n  </panel>\n  <panel>\n    <div slot=\"panel-header\" class=\"custom-class\">Panel #4</div>\n    内容四\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>slot::panel-header</td>\n          <td><code>slot node</code></td>\n          <td></td>\n          <td>以内容分发的形式自定义header里面的内容，注意：因为header自动绑定了展开收起的事件，所以\n          如果用户自定义的元素里有事件绑定的操作，建议使用事件修饰符（例：@click.prev.stop=\"\"）</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(451)
	__vue_script__ = __webpack_require__(453)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/affixDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(454)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1c70ee64/affixDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(452);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite\n}\n@-webkit-keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n@keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n", "", {"version":3,"sources":["/./docs-backup/example/affixDocs.vue?48ce7127"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsDA;IACA,+BAAA;IACA,uBAAA;IACA,kCAAA;IACA,0BAAA;IACA,4CAAA;YAAA,mCAAA;CACA;AACA;IACA,UAAA,iCAAA,yBAAA,CAAA;IACA,yBAAA,oCAAA,4BAAA,CAAA;IACA,oBAAA,mCAAA,2BAAA,CAAA;CACA;AAJA;IACA,UAAA,iCAAA,yBAAA,CAAA;IACA,yBAAA,oCAAA,4BAAA,CAAA;IACA,oBAAA,mCAAA,2BAAA,CAAA;CACA;AACA;IACA,8BAAA;IACA,sBAAA;CACA","file":"affixDocs.vue","sourcesContent":["<template>\n  <!-- <div class=\"bs-docs-section\" id=\"affix\">\n    <h3 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix 固钉</a></h3>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div> -->\n</template>\n\n<script>\n  import {Tooltip} from 'src/'\n  export default {\n    components: {\n      Tooltip\n    }\n  }\n</script>\n\n<style>\n.animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-iteration-count: infinite\n}\n@keyframes shake {\n    0%, 100% {transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 454 */
/***/ function(module, exports) {

	module.exports = "\n  <!-- <div class=\"bs-docs-section\" id=\"affix\">\n    <h3 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix 固钉</a></h3>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div> -->\n";

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(456)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/asideDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(457)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-78a0f9cc/asideDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 457 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"aside\">\n    <h3 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside 侧边栏</a></h3>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\n\n      <sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n          <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\n        </div>\n      </sidebar>\n\n      <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\n\n      <sidebar  :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft=false\">Close</button>\n        </div>\n      </sidebar>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button\nclass=\"btn btn-success btn-lg\"\n@click=\"showRight = true\">Show Aside on right</button>\n\n<sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n...\n</sidebar>\n\n<button\nclass=\"btn btn-danger btn-lg\"\n@click=\"showLeft = true\">Show Aside on left</button>\n\n<sidebar :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n...\n</sidebar></script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td></td>\n          <td>Whether show the component.</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\n          <td><code>right</code></td>\n          <td>how to position the component.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Header text of the aside component.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(459)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/popoverDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(460)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7aa311f9/popoverDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	exports.default = {
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
	//       <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="top">
	//         <button class="atui-btn ">Popover on top</button>
	//       </popover>
	//       <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="left">
	//         <button class="atui-btn">Popover on left</button>
	//       </popover>
	//       <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="right">
	//         <button class="atui-btn">Popover on right</button>
	//       </popover>
	//       <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom">
	//         <button class="atui-btn">Popover on bottom</button>
	//       </popover>
	//       <hr>
	//       <h4>No title</h4>
	//       <popover effect="fade" content="我是内容，我是内容，我是内容" placement="top">
	//         <button class="atui-btn">Popover on top</button>
	//       </popover>
	//       <popover effect="fade" content="我是内容，我是内容，我是内容" placement="left">
	//         <button class="atui-btn">Popover on left</button>
	//       </popover>
	//       <popover effect="fade" content="我是内容，我是内容，我是内容" placement="right">
	//         <button class="atui-btn">Popover on right</button>
	//       </popover>
	//       <popover effect="fade" content="我是内容，我是内容，我是内容" placement="bottom">
	//         <button class="atui-btn">Popover on bottom</button>
	//       </popover>
	//       <hr>
	//       <h4>Triger</h4>
	//       <p>
	//         <popover effect="scale"  title="我是标题" content="我是内容，我是内容，我是内容" placement="top" trigger="hover">
	//             <button class="atui-btn">Mouseenter</button>
	//         </popover>
	//       </p>
	//       <popover effect="scale"
	//       title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </popover>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="top">
	//   <button class="atui-btn ">Popover on top</button>
	// </popover>
	// <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="left">
	//   <button class="atui-btn">Popover on left</button>
	// </popover>
	// <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="right">
	//   <button class="atui-btn">Popover on right</button>
	// </popover>
	// <popover effect="fade" header title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom">
	//   <button class="atui-btn">Popover on bottom</button>
	// </popover>
	// <hr>
	// <h4>No title</h4>
	// <popover effect="fade" content="我是内容，我是内容，我是内容" placement="top">
	//   <button class="atui-btn">Popover on top</button>
	// </popover>
	// <popover effect="fade" content="我是内容，我是内容，我是内容" placement="left">
	//   <button class="atui-btn">Popover on left</button>
	// </popover>
	// <popover effect="fade" content="我是内容，我是内容，我是内容" placement="right">
	//   <button class="atui-btn">Popover on right</button>
	// </popover>
	// <popover effect="fade" content="我是内容，我是内容，我是内容" placement="bottom">
	//   <button class="atui-btn">Popover on bottom</button>
	// </popover>
	// <hr>
	// <h4>Triger</h4>
	// <p>
	//   <popover effect="scale"  title="我是标题" content="我是内容，我是内容，我是内容" placement="top" trigger="hover">
	//       <button class="atui-btn">Mouseenter</button>
	//   </popover>
	// </p>
	// <popover effect="scale"
	// title="我是标题" content="我是内容，我是内容，我是内容" placement="bottom" trigger="focus">
	//   <input type="text" class="form-control" placeholder="Focus">
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
/* 460 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"popover\">\n    <h3 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover 气泡</a></h3>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"top\">\n        <button class=\"atui-btn \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"left\">\n        <button class=\"atui-btn\">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"right\">\n        <button class=\"atui-btn\">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"bottom\">\n        <button class=\"atui-btn\">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"top\">\n        <button class=\"atui-btn\">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"left\">\n        <button class=\"atui-btn\">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"right\">\n        <button class=\"atui-btn\">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"bottom\">\n        <button class=\"atui-btn\">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"top\" trigger=\"hover\">\n            <button class=\"atui-btn\">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"top\">\n  <button class=\"atui-btn \">Popover on top</button>\n</popover>\n<popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"left\">\n  <button class=\"atui-btn\">Popover on left</button>\n</popover>\n<popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"right\">\n  <button class=\"atui-btn\">Popover on right</button>\n</popover>\n<popover effect=\"fade\" header title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"bottom\">\n  <button class=\"atui-btn\">Popover on bottom</button>\n</popover>\n<hr>\n<h4>No title</h4>\n<popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"top\">\n  <button class=\"atui-btn\">Popover on top</button>\n</popover>\n<popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"left\">\n  <button class=\"atui-btn\">Popover on left</button>\n</popover>\n<popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"right\">\n  <button class=\"atui-btn\">Popover on right</button>\n</popover>\n<popover effect=\"fade\" content=\"我是内容，我是内容，我是内容\" placement=\"bottom\">\n  <button class=\"atui-btn\">Popover on bottom</button>\n</popover>\n<hr>\n<h4>Triger</h4>\n<p>\n  <popover effect=\"scale\"  title=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"top\" trigger=\"hover\">\n      <button class=\"atui-btn\">Mouseenter</button>\n  </popover>\n</p>\n<popover effect=\"scale\"\ntitle=\"我是标题\" content=\"我是内容，我是内容，我是内容\" placement=\"bottom\" trigger=\"focus\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n</popover>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(462)
	__vue_script__ = __webpack_require__(464)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/tabsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(465)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-557ff0a0/tabsDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(463);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
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
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.example-title {\n  margin: 20px 0;\n}\n", "", {"version":3,"sources":["/./docs-backup/example/tabsDocs.vue?40063cf8"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoSA;EACA,eAAA;CACA","file":"tabsDocs.vue","sourcesContent":["<template>\n  <div class=\"bs-docs-section\" id=\"tabs\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs 标签页</a></h3>\n    <div class=\"bs-example\">\n    <h4 class=\"example-title\">基础型</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">迷你型</h4>\n      <tabs :base=\"true\" size=\"small\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">Tab数量较多的情况</h4>\n      <tabs :base=\"true\" trigger=\"hover\" >\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">选项卡型</h4>\n      <tabs @on-tab-click=\"handleOnClick\">\n        <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"系统短信签名\">\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n<tabs :base=\"true\" size=\"small\">\n  <tab header=\"系统短信签名\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n<tabs :base=\"true\" trigger=\"hover\">\n  <tab header=\"系统短信签名\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n<tabs @on-tab-click=\"handleOnClick\">\n  <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab 选项 (非 TABS)</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否禁用当前Tab</td>\n      </tr>\n      <tr>\n        <td>base</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否采用基础型的Tab样式</td>\n      </tr>\n      <tr>\n        <td>show-len</td>\n        <td><code>Number</code></td>\n        <td>3</td>\n        <td>当前想要显示出多少个Tab</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td>'default'</td>\n        <td>大小，提供default和small两种大小</td>\n      </tr>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code></td>\n        <td>click</td>\n        <td>以何种方式触发选中Tab(可选，click，hover)</td>\n      </tr>\n      <tr>\n        <td>@on-tab-click</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>tab被点击的回调，回调参数为当前tab的索引值</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</template>\n\n<script>\n  import {Tabs} from 'src/'\n  const {Tab} = Tabs\n\n  export default {\n    data () {\n      return {\n      }\n    },\n    components: {\n      Tabs,\n      Tab\n    },\n    methods: {\n      handleOnClick (index) {\n        alert(index)\n      }\n    }\n  }\n</script>\n\n<style>\n  .example-title {\n    margin: 20px 0;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 465 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tabs\">\n    <h3 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs 标签页</a></h3>\n    <div class=\"bs-example\">\n    <h4 class=\"example-title\">基础型</h4>\n      <tabs :base=\"true\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">迷你型</h4>\n      <tabs :base=\"true\" size=\"small\">\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">Tab数量较多的情况</h4>\n      <tabs :base=\"true\" trigger=\"hover\" >\n        <tab header=\"系统短信签名\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n      <br><br>\n      <h4 class=\"example-title\">选项卡型</h4>\n      <tabs @on-tab-click=\"handleOnClick\">\n        <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n          <p>\n            选项卡一内容\n          </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"被禁用的\" disabled>\n          ...\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n        <tab header=\"推广短信签名\">\n           <p>\n              选项卡二内容\n           </p>\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"系统短信签名\">\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n<tabs :base=\"true\" size=\"small\">\n  <tab header=\"系统短信签名\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n</tabs>\n<tabs :base=\"true\" trigger=\"hover\">\n  <tab header=\"系统短信签名\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"系统短信签名啊啊啊啊啊啊啊啊系统短信签名啊啊啊啊啊啊啊啊\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n<tabs @on-tab-click=\"handleOnClick\">\n  <tab header=\"推广短信签名啊啊啊中啊啊啊啊啊啊啊\">\n    <p>\n      选项卡一内容\n    </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"被禁用的\" disabled>\n    ...\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n  <tab header=\"推广短信签名\">\n     <p>\n        选项卡二内容\n     </p>\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab 选项 (非 TABS)</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否禁用当前Tab</td>\n      </tr>\n      <tr>\n        <td>base</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>是否采用基础型的Tab样式</td>\n      </tr>\n      <tr>\n        <td>show-len</td>\n        <td><code>Number</code></td>\n        <td>3</td>\n        <td>当前想要显示出多少个Tab</td>\n      </tr>\n      <tr>\n        <td>size</td>\n        <td><code>String</code></td>\n        <td>'default'</td>\n        <td>大小，提供default和small两种大小</td>\n      </tr>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code></td>\n        <td>click</td>\n        <td>以何种方式触发选中Tab(可选，click，hover)</td>\n      </tr>\n      <tr>\n        <td>@on-tab-click</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>tab被点击的回调，回调参数为当前tab的索引值</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(467)
	__vue_script__ = __webpack_require__(468)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/stepsDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(469)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fdb4ae8a/stepsDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 467 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
	//         <button type="button" class="atui-btn atui-btn-default atui-btn-primary" @click="_next">next</button>
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
/* 469 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"steps\">\n    <h3 class=\"page-header\"><a href=\"#steps\" class=\"anchor\">Steps 步骤条</a></h3>\n    <div class=\"bs-example\">\n        <h4 class=\"example-title\">基础型</h4>\n        <v-steps :current=\"current\" color=\"#00a0ff\">\n            <v-step title=\"已完成\" ></v-step>\n            <v-step title=\"进行中\"></v-step>\n            <v-step title=\"有一个待运行\"></v-step>\n            <v-step title=\"待运行\"></v-step>\n        </v-steps>\n        <br><br>\n        <v-steps :current=\"current\" color=\"rgb(229, 46, 46)\">\n            <v-step title=\"已完成\" ></v-step>\n            <v-step title=\"进行中\"></v-step>\n            <v-step title=\"有一个待运行\"></v-step>\n            <v-step title=\"待运行\"></v-step>\n        </v-steps>\n        <br>\n        <h4 class=\"example-title\">带文字描述</h4>\n        <v-steps :current=\"current\" >\n            <v-step title=\"已完成\" description=\"这里是多信息\"></v-step>\n            <v-step title=\"进行中\"  description=\"这里是多信息的耶哦\"></v-step>\n            <v-step title=\"有一个待运行\" description=\"描述啊描述啊\"></v-step>\n            <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n        </v-steps>\n        <br>\n        <button type=\"button\" class=\"atui-btn atui-btn-default atui-btn-primary\" @click=\"_next\">next</button>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-steps :current=\"current\" color=\"#00a0ff\">\n  <v-step title=\"已完成\" ></v-step>\n  <v-step title=\"进行中\"></v-step>\n  <v-step title=\"有一个待运行\"></v-step>\n  <v-step title=\"待运行\"></v-step>\n</v-steps>\n<v-steps :current=\"current\" color=\"rgb(229, 46, 46)\">\n    <v-step title=\"已完成\" ></v-step>\n    <v-step title=\"进行中\"></v-step>\n    <v-step title=\"有一个待运行\"></v-step>\n    <v-step title=\"待运行\"></v-step>\n</v-steps>\n<v-steps :current=\"current\">\n  <v-step title=\"已完成\" description=\"这里是多信息\"></v-step>\n  <v-step title=\"进行中\"  description=\"这里是多信息的耶哦\"></v-step>\n  <v-step title=\"有一个待运行\" description=\"描述啊描述啊\"></v-step>\n  <v-step title=\"待运行\" description=\"这里是多信息的描述啊\"></v-step>\n</v-steps>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">vSteps</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>current</td>\n        <td>Number</td>\n        <td>0</td>\n        <td>当前正在执行的步骤数，可以通过status属性覆盖状态</td>\n      </tr>\n      <tr>\n        <td>color</td>\n        <td>String</td>\n        <td></td>\n        <td>指定步骤条的样式颜色</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">vSteps vStep</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td>String</td>\n        <td>无</td>\n        <td>标题</td>\n      </tr>\n      <tr>\n        <td>description</td>\n        <td>String</td>\n        <td>无</td>\n        <td>步骤的详情描述</td>\n      </tr>\n      <tr>\n        <td>status</td>\n        <td>String</td>\n        <td>无</td>\n        <td>执行step的状态，当不设置此属性时，父组件Steps会自动根据current来设置对应status,（可选值wait, process, finish）</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(471)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/menuDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(472)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e21d0ede/menuDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	var SubMenu = _src.Menu.SubMenu; // <template>
	//   <div class="bs-docs-section" id="menu">
	//     <h3 class="page-header"><a href="#menu" class="anchor">Menu 菜单</a></h3>
	//     <div class="bs-example">
	//     初始选中的key是{{selectedKey}}
	//     <v-menu style="width:240px;" :selected-key="selectedKey" open-one>
	//       <sub-menu title="导航一">
	//         <menu-item-group title="分组1">
	//           <menu-item key="1"><a href="http://www.alidayu.com" target="_blank">选项1</a></menu-item>
	//           <menu-item key="2">选项2</menu-item>
	//         </menu-item-group>
	//         <menu-item-group title="分组2">
	//           <menu-item key="3">选项3</menu-item>
	//           <menu-item key="4">选项4</menu-item>
	//         </menu-item-group>
	//       </sub-menu>
	//       <sub-menu title="导航二">
	//         <menu-item key="5">选项5</menu-item>
	//         <menu-item key="6">选项6</menu-item>
	//         <sub-menu title="三级导航">
	//           <menu-item key="7">选项7</menu-item>
	//           <menu-item key="8">选项8</menu-item>
	//         </sub-menu>
	//       </sub-menu>
	//       <sub-menu title="导航三">
	//         <menu-item key="9">选项9</menu-item>
	//         <menu-item key="10">选项10</menu-item>
	//         <menu-item key="11">选项11</menu-item>
	//         <menu-item key="12">选项12</menu-item>
	//       </sub-menu>
	//     </v-menu>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <v-menu style="width:240px;" :selected-key="selectedKey" open-one>
	//   <sub-menu title="导航一">
	//     <menu-item-group title="分组1">
	//       <menu-item key="1"><a href="http://www.alidayu.com" target="_blank">选项1</a></menu-item>
	//       <menu-item key="2">选项2</menu-item>
	//     </menu-item-group>
	//     <menu-item-group title="分组2">
	//       <menu-item key="3">选项3</menu-item>
	//       <menu-item key="4">选项4</menu-item>
	//     </menu-item-group>
	//   </sub-menu>
	//   <sub-menu title="导航二">
	//     <menu-item key="5">选项5</menu-item>
	//     <menu-item key="6">选项6</menu-item>
	//     <sub-menu title="三级导航">
	//       <menu-item key="7">选项7</menu-item>
	//       <menu-item key="8">选项8</menu-item>
	//     </sub-menu>
	//   </sub-menu>
	//   <sub-menu title="导航三">
	//     <menu-item key="9">选项9</menu-item>
	//     <menu-item key="10">选项10</menu-item>
	//     <menu-item key="11">选项11</menu-item>
	//     <menu-item key="12">选项12</menu-item>
	//   </sub-menu>
	// </v-menu>
	//
	// <!--script-->
	// import {Menu} from atui
	// const { SubMenu, MenuItem, MenuItemGroup} = Menu
	// export default {
	//   components: {
	//     vMenu: Menu,
	//     SubMenu,
	//     MenuItemGroup,
	//     MenuItem
	//   },
	//   data() {
	//     return {
	//       selectedKey: '6'
	//     }
	//   }
	// }
	//   </script></code></pre>
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
	//     <tr>
	//       <th>openOne</th>
	//       <th>Boolean</th>
	//       <th>false</th>
	//       <th>始终只打开一个菜单</th>
	//     </tr>
	//     <tr>
	//       <th>selectedKey</th>
	//       <th>String</th>
	//       <th></th>
	//       <th>选中的MenuItem的Key</th>
	//     </tr>
	//     <tbody>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>
	//
	// <script>
	
	var MenuItem = _src.Menu.MenuItem;
	var MenuItemGroup = _src.Menu.MenuItemGroup;
	exports.default = {
	  components: {
	    vMenu: _src.Menu,
	    SubMenu: SubMenu,
	    MenuItemGroup: MenuItemGroup,
	    MenuItem: MenuItem
	  },
	  data: function data() {
	    return {
	      selectedKey: '6'
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 472 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"menu\">\n    <h3 class=\"page-header\"><a href=\"#menu\" class=\"anchor\">Menu 菜单</a></h3>\n    <div class=\"bs-example\">\n    初始选中的key是{{selectedKey}}\n    <v-menu style=\"width:240px;\" :selected-key=\"selectedKey\" open-one>\n      <sub-menu title=\"导航一\">\n        <menu-item-group title=\"分组1\">\n          <menu-item key=\"1\"><a href=\"http://www.alidayu.com\" target=\"_blank\">选项1</a></menu-item>\n          <menu-item key=\"2\">选项2</menu-item>\n        </menu-item-group>\n        <menu-item-group title=\"分组2\">\n          <menu-item key=\"3\">选项3</menu-item>\n          <menu-item key=\"4\">选项4</menu-item>\n        </menu-item-group>\n      </sub-menu>\n      <sub-menu title=\"导航二\">\n        <menu-item key=\"5\">选项5</menu-item>\n        <menu-item key=\"6\">选项6</menu-item>\n        <sub-menu title=\"三级导航\">\n          <menu-item key=\"7\">选项7</menu-item>\n          <menu-item key=\"8\">选项8</menu-item>\n        </sub-menu>\n      </sub-menu>\n      <sub-menu title=\"导航三\">\n        <menu-item key=\"9\">选项9</menu-item>\n        <menu-item key=\"10\">选项10</menu-item>\n        <menu-item key=\"11\">选项11</menu-item>\n        <menu-item key=\"12\">选项12</menu-item>\n      </sub-menu>\n    </v-menu>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-menu style=\"width:240px;\" :selected-key=\"selectedKey\" open-one>\n  <sub-menu title=\"导航一\">\n    <menu-item-group title=\"分组1\">\n      <menu-item key=\"1\"><a href=\"http://www.alidayu.com\" target=\"_blank\">选项1</a></menu-item>\n      <menu-item key=\"2\">选项2</menu-item>\n    </menu-item-group>\n    <menu-item-group title=\"分组2\">\n      <menu-item key=\"3\">选项3</menu-item>\n      <menu-item key=\"4\">选项4</menu-item>\n    </menu-item-group>\n  </sub-menu>\n  <sub-menu title=\"导航二\">\n    <menu-item key=\"5\">选项5</menu-item>\n    <menu-item key=\"6\">选项6</menu-item>\n    <sub-menu title=\"三级导航\">\n      <menu-item key=\"7\">选项7</menu-item>\n      <menu-item key=\"8\">选项8</menu-item>\n    </sub-menu>\n  </sub-menu>\n  <sub-menu title=\"导航三\">\n    <menu-item key=\"9\">选项9</menu-item>\n    <menu-item key=\"10\">选项10</menu-item>\n    <menu-item key=\"11\">选项11</menu-item>\n    <menu-item key=\"12\">选项12</menu-item>\n  </sub-menu>\n</v-menu>\n\n<!--script-->\nimport {Menu} from atui\nconst { SubMenu, MenuItem, MenuItemGroup} = Menu\nexport default {\n  components: {\n    vMenu: Menu,\n    SubMenu,\n    MenuItemGroup,\n    MenuItem\n  },\n  data() {\n    return {\n      selectedKey: '6'\n    }\n  }\n}\n  </script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tr>\n      <th>openOne</th>\n      <th>Boolean</th>\n      <th>false</th>\n      <th>始终只打开一个菜单</th>\n    </tr>\n    <tr>\n      <th>selectedKey</th>\n      <th>String</th>\n      <th></th>\n      <th>选中的MenuItem的Key</th>\n    </tr>\n    <tbody>\n    </tbody>\n  </table>\n  </div>\n";

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(474)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/treeDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(475)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-798e27d0/treeDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	// <template>
	//   <div class="bs-docs-section" id="tree">
	//     <h3 class="page-header"><a href="#tree" class="anchor">Tree 树形菜单</a></h3>
	//     <div class="bs-example">
	//     <h4>普通树形</h4>
	//     <tree :data-source="dataSource"></tree>
	//     </div>
	//
	// <pre><code class="language-markup"><script type="language-mark-up">
	// <tree :data-source="dataSource"></tree>
	// //
	// var data = {
	//   name: 'My Tree',
	//   children: [
	//     { name: 'hello' },
	//     { name: 'wat' },
	//     {
	//       name: 'child folder',
	//       children: [
	//         {
	//           name: 'child folder',
	//           children: [
	//             { name: 'hello' },
	//             { name: 'wat' }
	//           ]
	//         },
	//         { name: 'hello' },
	//         { name: 'wat' },
	//         {
	//           name: 'child folder',
	//           children: [
	//             { name: 'hello' },
	//             { name: 'wat' }
	//           ]
	//         }
	//       ]
	//     }
	//   ]
	// }
	// export default {
	//   components: {
	//     Tree
	//   },
	//   data () {
	//     return {
	//       dataSource : data
	//     }
	//   }
	// }
	// </script></code></pre>
	//
	//   </div>
	// </template>
	//
	// <script>
	var _data = {
	  name: 'My Tree',
	  children: [{ name: 'hello' }, { name: 'wat' }, {
	    name: 'child folder',
	    children: [{
	      name: 'child folder',
	      children: [{ name: 'hello' }, { name: 'wat' }]
	    }, { name: 'hello' }, { name: 'wat' }, {
	      name: 'child folder',
	      children: [{ name: 'hello' }, { name: 'wat' }]
	    }]
	  }]
	};
	exports.default = {
	  components: {
	    Tree: _src.Tree
	  },
	  data: function data() {
	    return {
	      dataSource: _data
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 475 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"tree\">\n    <h3 class=\"page-header\"><a href=\"#tree\" class=\"anchor\">Tree 树形菜单</a></h3>\n    <div class=\"bs-example\">\n    <h4>普通树形</h4>\n    <tree :data-source=\"dataSource\"></tree>\n    </div>\n\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tree :data-source=\"dataSource\"></tree>\n//\nvar data = {\n  name: 'My Tree',\n  children: [\n    { name: 'hello' },\n    { name: 'wat' },\n    {\n      name: 'child folder',\n      children: [\n        {\n          name: 'child folder',\n          children: [\n            { name: 'hello' },\n            { name: 'wat' }\n          ]\n        },\n        { name: 'hello' },\n        { name: 'wat' },\n        {\n          name: 'child folder',\n          children: [\n            { name: 'hello' },\n            { name: 'wat' }\n          ]\n        }\n      ]\n    }\n  ]\n}\nexport default {\n  components: {\n    Tree\n  },\n  data () {\n    return {\n      dataSource : data\n    }\n  }\n}\n</script></code></pre>\n\n  </div>\n";

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(477)
	__vue_script__ = __webpack_require__(478)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/breadcrumbDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(479)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7d3663f5/breadcrumbDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 477 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
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
/* 479 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"breadcrumb\">\n    <h3 class=\"page-header\"><a href=\"#breadcrumb\" class=\"anchor\">Breadcrumb 面包屑</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">基本样式</h4>\n      <breadcrumb>\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item>三级类目</breadcrumb-item>\n      </breadcrumb>\n      <h4 class=\"example-title\">分隔符样式（选用）</h4>\n      <breadcrumb slash=\"&gt;\">\n        <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n        <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n        <breadcrumb-item>四级类目</breadcrumb-item>\n      </breadcrumb>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<breadcrumb>\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item>三级类目</breadcrumb-item>\n</breadcrumb>\n<breadcrumb slash=\"&gt;\">\n  <breadcrumb-item :href=\"href\">一级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">二级类目</breadcrumb-item>\n  <breadcrumb-item :href=\"href\">三级类目</breadcrumb-item>\n  <breadcrumb-item>四级类目</breadcrumb-item>\n</breadcrumb>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <h4 style=\"margin: 20px 0;\">Breadcrumb</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>slash</td>\n        <td>String</td>\n        <td>/</td>\n        <td>每一级类目之间的分隔符</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4 style=\"margin: 20px 0;\">BreadcrumbItem</h4>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>href</td>\n        <td>String</td>\n        <td>无</td>\n        <td>链接，如果不传则不可点击</td>\n      </tr>\n    </tbody>\n  </table>\n";

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(481)
	__vue_script__ = __webpack_require__(482)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/paginationDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(483)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-59fee48c/paginationDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 481 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(134);
	
	exports.default = {
	  data: function data() {
	    return {
	      currPage: 10,
	      showJumper: true,
	      total: 100,
	      showSizeChanger: true,
	      pageSize: 20
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
	      this.currPage = 20;
	      this.total = 1000;
	      this.pageSize = 30;
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
	//       <pagination :curr-page="currPage"
	//                   :total="total"
	//                   show-jumper
	//                   :page-size="pageSize"
	//                   show-size-changer>
	//       </pagination>
	//       <h4 class="example-title">迷你版</h4>
	//       <pagination :curr-page="currPage"
	//                   :total="total"
	//                   show-jumper
	//                   mini>
	//       </pagination>
	//       <h4 class="example-title">精简版</h4>
	//       <pagination :curr-page="currPage"
	//                   :total="total"
	//                   simple
	//                   class="custom">
	//       </pagination>
	//
	//
	//       <input type="button" value="changeTotalPage" @click="changeTotalPage"/>
	//     </div>
	// <pre>
	// <code class="language-markup"><script type="language-mark-up">
	// <h4 class="example-title">完全版</h4>
	// <pagination :curr-page="currPage"
	//             :total="total"
	//             show-jumper
	//             :page-size="pageSize"
	//             show-size-changer>
	// </pagination>
	// <h4 class="example-title">迷你版</h4>
	// <pagination :curr-page="currPage"
	//             :total="total"
	//             show-jumper
	//             mini>
	// </pagination>
	// <h4 class="example-title">精简版</h4>
	// <pagination :curr-page="currPage"
	//             :total="total"
	//             simple
	//             class="custom">
	// </pagination>
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
/* 483 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"pagination\">\n    <h3 class=\"page-header\"><a href=\"#pagination\" class=\"anchor\">Pagination 翻页</a></h3>\n    <div class=\"bs-example\">\n      <h4 class=\"example-title\">完全版</h4>\n      <pagination :curr-page=\"currPage\"\n                  :total=\"total\"\n                  show-jumper\n                  :page-size=\"pageSize\"\n                  show-size-changer>\n      </pagination>\n      <h4 class=\"example-title\">迷你版</h4>\n      <pagination :curr-page=\"currPage\"\n                  :total=\"total\"\n                  show-jumper\n                  mini>\n      </pagination>\n      <h4 class=\"example-title\">精简版</h4>\n      <pagination :curr-page=\"currPage\"\n                  :total=\"total\"\n                  simple\n                  class=\"custom\">\n      </pagination>\n\n\n      <input type=\"button\" value=\"changeTotalPage\" @click=\"changeTotalPage\"/>\n    </div>\n<pre>\n<code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4 class=\"example-title\">完全版</h4>\n<pagination :curr-page=\"currPage\"\n            :total=\"total\"\n            show-jumper\n            :page-size=\"pageSize\"\n            show-size-changer>\n</pagination>\n<h4 class=\"example-title\">迷你版</h4>\n<pagination :curr-page=\"currPage\"\n            :total=\"total\"\n            show-jumper\n            mini>\n</pagination>\n<h4 class=\"example-title\">精简版</h4>\n<pagination :curr-page=\"currPage\"\n            :total=\"total\"\n            simple\n            class=\"custom\">\n</pagination>\n</script></code></pre>\n  </div>\n  <h2>Options</h2>\n  <table class=\"atui-table table-bordered\">\n    <thead>\n      <tr>\n        <th>参数</th>\n        <th>类型</th>\n        <th>默认值</th>\n        <th>说明</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>total-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>总页数</td>\n      </tr>\n      <tr>\n        <td>curr-page</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>当前页</td>\n      </tr>\n      <tr>\n        <td>default-size</td>\n        <td>Number</td>\n        <td>one of <code>10、20、30</code></td>\n        <td>如果有选择页码大小的话，这个可以指定每页的大小</td>\n      </tr>\n      <tr>\n        <td>total</td>\n        <td>Number</td>\n        <td>无</td>\n        <td>数据总条数</td>\n      </tr>\n      <tr>\n        <td>show-jumper</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启跳转功能</td>\n      </tr>\n      <tr>\n        <td>show-size-changer</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否开启修改每页条数功能</td>\n      </tr>\n      <tr>\n        <td>simple</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用精简版样式</td>\n      </tr>\n      <tr>\n        <td>mini</td>\n        <td>Boolean</td>\n        <td>false</td>\n        <td>是否采用迷你版样式</td>\n      </tr>\n    </tbody>\n  </table>\n  <br>\n  <strong>注：</strong>pagination组件会监听当前currPage的变化，当其发生变化时pagination组件会向上派发一个回调事件，名字叫pageChange，回调参数就是当前页以及pagination的id，需要在引用pagination的当前文件里面的events对象里将其加入进去.\n  <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n    events: {\n      pageChange (page, id) {\n\n      }\n    }\n  </script></code></pre>\n";

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(485)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs-backup/example/filters/phoneNumberDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(488)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-08a28617/phoneNumberDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(486);
	
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
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _phoneNumber = __webpack_require__(487);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.filter('phoneNumber', _phoneNumber2.default);
	
	module.exports = {};

/***/ },
/* 487 */
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
	    if (i === 3 || i === 7) {
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
/* 488 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"phonenumber\">\n    <h3 class=\"page-header\"><a href=\"#phonenumber\" class=\"anchor\">手机号码格式化 phonenumber</a></h3>\n    <div class=\"bs-example\">\n    <input type=\"text\" v-model=\"number\" />\n    <div>{{number | phoneNumber}}</div>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"text\" v-model=\"number\" />\n<div>{{number | phoneNumber}}</div>\n</script></code></pre>\n  </div>\n";

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(490);
	__webpack_require__(491);
	__webpack_require__(492);

/***/ },
/* 490 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 491 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 492 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 493 */
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
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};
	
			_.hooks.run("before-highlightall", env);
	
			var elements = env.elements || document.querySelectorAll(env.selector);
	
			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, env.callback);
			}
		},
	
		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;
	
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}
	
			if (parent) {
				language = (parent.className.match(lang) || [,''])[1].toLowerCase();
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
	
			_.hooks.run('before-sanity-check', env);
	
			if (!env.code || !env.grammar) {
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
						greedy = !!pattern.greedy,
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
	
						var match = pattern.exec(str),
						    delNum = 1;
	
						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							// Reconstruct the original text using the next two tokens
							var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
							    combStr = str + nextToken;
	
							if (i < strarr.length - 2) {
								combStr += strarr[i + 2].matchedStr || strarr[i + 2];
							}
	
							// Try the pattern again on the reconstructed text
							pattern.lastIndex = 0;
							match = pattern.exec(combStr);
							if (!match) {
								continue;
							}
	
							var from = match.index + (lookbehind ? match[1].length : 0);
							// To be a valid candidate, the new match has to start inside of str
							if (from >= str.length) {
								continue;
							}
							var to = match.index + match[0].length,
							    len = str.length + nextToken.length;
	
							// Number of tokens to delete and replace with the new match
							delNum = 3;
	
							if (to <= len) {
								if (strarr[i + 1].greedy) {
									continue;
								}
								delNum = 2;
								combStr = combStr.slice(0, len);
							}
							str = combStr;
						}
	
						if (!match) {
							continue;
						}
	
						if(lookbehind) {
							lookbehindLength = match[1].length;
						}
	
						var from = match.index + lookbehindLength,
						    match = match[0].slice(lookbehindLength),
						    to = from + match.length,
						    before = str.slice(0, from),
						    after = str.slice(to);
	
						var args = [i, delNum];
	
						if (before) {
							args.push(before);
						}
	
						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);
	
						args.push(wrapped);
	
						if (after) {
							args.push(after);
						}
	
						Array.prototype.splice.apply(strarr, args);
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
	
	var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
		this.type = type;
		this.content = content;
		this.alias = alias;
		// Copy of the full string this token was created from
		this.matchedStr = matchedStr || null;
		this.greedy = !!greedy;
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
			if(document.readyState !== "loading") {
				requestAnimationFrame(_.highlightAll, 0);
			}
			else {
				document.addEventListener('DOMContentLoaded', _.highlightAll);
			}
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
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
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
			lookbehind: true,
			greedy: true
		}
	});
	
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
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
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
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
/* 494 */
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