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
	
	var _toConsumableArray2 = __webpack_require__(110);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _gettingStarted = __webpack_require__(148);
	
	var _gettingStarted2 = _interopRequireDefault(_gettingStarted);
	
	var _Affix = __webpack_require__(150);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(158);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _headerDocs = __webpack_require__(160);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _alertDocs = __webpack_require__(162);
	
	var _alertDocs2 = _interopRequireDefault(_alertDocs);
	
	var _accordionDocs = __webpack_require__(172);
	
	var _accordionDocs2 = _interopRequireDefault(_accordionDocs);
	
	var _affixDocs = __webpack_require__(183);
	
	var _affixDocs2 = _interopRequireDefault(_affixDocs);
	
	var _asideDocs = __webpack_require__(194);
	
	var _asideDocs2 = _interopRequireDefault(_asideDocs);
	
	var _carouselDocs = __webpack_require__(203);
	
	var _carouselDocs2 = _interopRequireDefault(_carouselDocs);
	
	var _buttonsDocs = __webpack_require__(214);
	
	var _buttonsDocs2 = _interopRequireDefault(_buttonsDocs);
	
	var _datepickerDocs = __webpack_require__(229);
	
	var _datepickerDocs2 = _interopRequireDefault(_datepickerDocs);
	
	var _dropdownDocs = __webpack_require__(256);
	
	var _dropdownDocs2 = _interopRequireDefault(_dropdownDocs);
	
	var _modalDocs = __webpack_require__(262);
	
	var _modalDocs2 = _interopRequireDefault(_modalDocs);
	
	var _popoverDocs = __webpack_require__(274);
	
	var _popoverDocs2 = _interopRequireDefault(_popoverDocs);
	
	var _progressbarDocs = __webpack_require__(282);
	
	var _progressbarDocs2 = _interopRequireDefault(_progressbarDocs);
	
	var _selectDocs = __webpack_require__(288);
	
	var _selectDocs2 = _interopRequireDefault(_selectDocs);
	
	var _tabsDocs = __webpack_require__(291);
	
	var _tabsDocs2 = _interopRequireDefault(_tabsDocs);
	
	var _tooltipDocs = __webpack_require__(304);
	
	var _tooltipDocs2 = _interopRequireDefault(_tooltipDocs);
	
	var _typeaheadDocs = __webpack_require__(307);
	
	var _typeaheadDocs2 = _interopRequireDefault(_typeaheadDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(316);
	__webpack_require__(318);
	__webpack_require__(320);
	__webpack_require__(321);
	__webpack_require__(322);
	
	Vue.config.debug = true;
	
	new Vue({
	  el: '#wrapper',
	  components: {
	    gettingStarted: _gettingStarted2.default,
	    container: _container2.default,
	    affix: _Affix2.default,
	    alertDocs: _alertDocs2.default,
	    headerDocs: _headerDocs2.default,
	    accordionDocs: _accordionDocs2.default,
	    affixDocs: _affixDocs2.default,
	    asideDocs: _asideDocs2.default,
	    carouselDocs: _carouselDocs2.default,
	    buttonsDocs: _buttonsDocs2.default,
	    datepickerDocs: _datepickerDocs2.default,
	    dropdownDocs: _dropdownDocs2.default,
	    modalDocs: _modalDocs2.default,
	    popoverDocs: _popoverDocs2.default,
	    progressbarDocs: _progressbarDocs2.default,
	    selectDocs: _selectDocs2.default,
	    tabsDocs: _tabsDocs2.default,
	    tooltipDocs: _tooltipDocs2.default,
	    typeaheadDocs: _typeaheadDocs2.default,
	    list: {
	      inherit: true,
	      template: ''
	    }
	  },
	  data: function data() {
	    return {
	      anchor: []
	    };
	  },
	
	  filters: {
	    space: function space(val) {
	      return val.replace('-', ' ');
	    }
	  },
	  ready: function ready() {
	    // add h1.anchor.innerHTML to sidebar list
	    var anchor = document.querySelectorAll('.anchor');
	    this.anchor = [].concat((0, _toConsumableArray3.default)(anchor)).map(function (el) {
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
	            if (navbar.querySelector('.active')) navbar.querySelector('.active').className = '';
	            navbar.querySelector('a[href*=' + i + ']').parentNode.className = 'active';
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
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(111);
	
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	__webpack_require__(137);
	module.exports = __webpack_require__(121).Array.from;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(114)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(117)(String, 'String', function(iterated){
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(115)
	  , defined   = __webpack_require__(116);
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
/* 115 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(118)
	  , $export        = __webpack_require__(119)
	  , redefine       = __webpack_require__(124)
	  , hide           = __webpack_require__(125)
	  , has            = __webpack_require__(130)
	  , Iterators      = __webpack_require__(131)
	  , $iterCreate    = __webpack_require__(132)
	  , setToStringTag = __webpack_require__(133)
	  , getProto       = __webpack_require__(126).getProto
	  , ITERATOR       = __webpack_require__(134)('iterator')
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
/* 118 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(120)
	  , core      = __webpack_require__(121)
	  , ctx       = __webpack_require__(122)
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
/* 120 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 121 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(123);
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
/* 123 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(125);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(126)
	  , createDesc = __webpack_require__(127);
	module.exports = __webpack_require__(128) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 126 */
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
/* 127 */
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(129)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(126)
	  , descriptor     = __webpack_require__(127)
	  , setToStringTag = __webpack_require__(133)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(125)(IteratorPrototype, __webpack_require__(134)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(126).setDesc
	  , has = __webpack_require__(130)
	  , TAG = __webpack_require__(134)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(135)('wks')
	  , uid    = __webpack_require__(136)
	  , Symbol = __webpack_require__(120).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(120)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(122)
	  , $export     = __webpack_require__(119)
	  , toObject    = __webpack_require__(138)
	  , call        = __webpack_require__(139)
	  , isArrayIter = __webpack_require__(142)
	  , toLength    = __webpack_require__(143)
	  , getIterFn   = __webpack_require__(144);
	$export($export.S + $export.F * !__webpack_require__(147)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(116);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(140);
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
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(141);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(131)
	  , ITERATOR   = __webpack_require__(134)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(115)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(145)
	  , ITERATOR  = __webpack_require__(134)('iterator')
	  , Iterators = __webpack_require__(131);
	module.exports = __webpack_require__(121).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(146)
	  , TAG = __webpack_require__(134)('toStringTag')
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
/* 146 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(134)('iterator')
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(149)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./gettingStarted.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"getting-started\">\n    <h1 class=\"page-header\"><a href=\"#getting-started\" class=\"anchor\">Getting started</a></h1>\n    <div class=\"bs-callout bs-callout-success\">\n      <h4>About this project</h4>\n      <p>\n        This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS.\n        As a result no dependency on jQuery or Bootstrap's JavaScript is required.\n        The only required dependencies are:\n      </p>\n      <ul>\n        <li><a href=\"http://vuejs.org/\">Vue.js</a>\n          (required ^0.12, test with 0.12.10).</li>\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap CSS</a>\n          (required 3.x.x, test with 3.3.5).\n          VueStrap doesn't depend on a very precise version of Bootstrap. Just pull the latest.\n        </li>\n      </ul>\n    </div>\n    <h2>CommonJS</h2>\n    <pre><code class=\"language-javascript\">\n$ npm install vue-strap\n\nvar alert = require('vue-strap/lib/alert');\n// or\nvar alert = require('vue-strap').alert;\n\nnew Vue({\n  components: {\n    'alert': alert\n  }\n})\n    </code></pre>\n    <h2>ES6</h2>\n    <pre><code class=\"language-javascript\">\n$ npm install vue-strap\n\nimport alert from 'vue-strap/src/alert'\n// or\nimport { alert } from 'vue-strap'\n\nnew Vue({\n  components: {\n    alert\n  }\n})\n    </code></pre>\n    <h2>Browser globals</h2>\n    <p>\n      The <code>dist</code> folder contains <code>vue-strap.js</code> and <code>vue-strap.js</code> with\n      all components exported in the <code>window.VueStrap</code> object.\n    </p>\n    <pre><code class=\"language-markup\">\n&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/vue-strap.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n  var alert = VueStrap.alert\n&lt;/script&gt;\n    </code></pre>\n  </div>";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(151)
	module.exports = __webpack_require__(155)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(157)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6e9b497c&file=Affix.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6e9b497c&file=Affix.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Affix.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".vue-affix {\n    position: fixed;\n  }", ""]);
	
	// exports


/***/ },
/* 153 */
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
/* 154 */
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
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(156);
	
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

	// <style>
	//   .vue-affix {
	//     position: fixed;
	//   }
	// </style>
	// <template>
	// <div>
	// <div v-bind:class="{'vue-affix': affixed}"
	//   v-bind:style="styles">
	//   <slot></slot>
	// </div>
	// </div>
	// </template>

	// <script>

/***/ },
/* 156 */
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
/* 157 */
/***/ function(module, exports) {

	module.exports = "<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>";

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(159)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./container.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container bs-docs-container\">\n    <div class=\"row\">\n        <slot></slot>\n    </div>\n  </div>";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(161)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue"], function () {
	var newOptions = null
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./headerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "<header class=\"navbar navbar-static-top bs-docs-nav\" id=\"top\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"../\" class=\"navbar-brand\">VueStrap</a>\n      </div>\n      <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a href=\"#accordion\" style=\"color:#19986B\">Components</a>\n          </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"https://github.com/yuche/vue-strap\">\n            <span class=\"icon-github-circled\"></span>\n            GitHub\n          </a></li>\n        </ul>\n      </nav>\n    </div>\n  </header>";

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(163)
	module.exports = __webpack_require__(165)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(171)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./alertDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./alertDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(164);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c9678d90&file=alertDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c9678d90&file=alertDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alertDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".alert-icon-float-left {\n    font-size:32px;float:left;margin-right:5px;\n  }", ""]);
	
	// exports


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Alert = __webpack_require__(166);
	
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

	// <style>
	//   .alert-icon-float-left {
	//     font-size:32px;float:left;margin-right:5px;
	//   }
	// </style>
	// <template>
	//   <div class="bs-docs-section" id="alert">
	//     <h1 class="page-header">
	//       <a href="#alert" class="anchor">Alert</a>
	//     </h1>
	//     <div class="bs-example" >
	//       <button class="btn btn-success btn-lg"
	//         @click="showRight = !showRight">
	//         Click to toggle alert on right
	//       </button>

	//       <button class="btn btn-danger btn-lg"
	//         @click="showTop = !showTop">
	//         Click to toggle alert on top
	//       </button>
	//       <hr>
	//       <alert type="success" >
	//         <strong>Well Done!</strong>
	//         You successfully read this important alert message.
	//       </alert>

	//       <alert type="info" >
	//         <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	//       </alert>

	//       <alert type="danger" dismissable>
	//         <strong>Oh snap!</strong> Change a few things up and try submitting again.
	//       </alert>

	//       <alert type="warning" dismissable>
	//         <strong>Warning!</strong> Better check yourself, you're not looking too good.
	//       </alert>

	//       <alert
	//         :show.sync="showRight"
	//         :duration="3000"
	//         type="success"
	//         width="400px"
	//         placement="top-right"
	//         dismissable
	//       >
	//         <span class="icon-ok-circled alert-icon-float-left"></span>
	//         <strong>Well Done!</strong>
	//         <p>You successfully read this important alert message.</p>
	//       </alert>

	//       <alert
	//         :show.sync="showTop"
	//         :duration="3000"
	//         type="danger"
	//         width="400px"
	//         placement="top"
	//         dismissable>
	//         <span class="icon-info-circled alert-icon-float-left"></span>
	//         <strong>Heads up!</strong>
	//         <p>This alert needs your attention.</p>
	//       </alert>
	//     </div>

	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <button class="btn btn-default btn-lg"
	//   @click="showRight = !showRight">
	//   Click to toggle alert on right
	// </button>

	// <button class="btn btn-default btn-lg"
	//   @click="showTop = !showTop">
	//   Click to toggle alert on top
	// </button>
	// <hr>
	// <alert type="success" >
	//   <strong>Well Done!</strong>
	//   You successfully read this important alert message.
	// </alert>

	// <alert type="info" >
	//   <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	// </alert>

	// <alert type="danger" dismissable>
	//   <strong>Oh snap!</strong> Change a few things up and try submitting again.
	// </alert>

	// <alert type="warning" dismissable>
	//   <strong>Warning!</strong> Better check yourself, you're not looking too good.
	// </alert>

	// <alert
	//   show="{{showRight}}"
	//   duration="3000"
	//   type="success"
	//   width="400px"
	//   placement="top-right"
	//   dismissable>
	//   <span class="icon-ok-circled alert-icon-float-left"></span>
	//   <strong>Well Done!</strong>
	//   <p>You successfully read this important alert message.</p>
	// </alert>

	// <alert
	//   show="{{showTop}}"
	//   duration="3000"
	//   type="info"
	//   width="400px"
	//   placement="top"
	//   dismissable>
	//   <span class="icon-info-circled alert-icon-float-left"></span>
	//   <strong>Heads up!</strong>
	//   <p>This alert needs your attention.</p>
	// </alert>

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
	//           <td>show</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>true</code></td>
	//           <td>Whether show the component</td>
	//         </tr>
	//         <tr>
	//           <td>dismissable</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Whether show close button</td>
	//         </tr>
	//         <tr>
	//           <td>type</td>
	//           <td><code>String</code>, one of
	//           <code>success</code>
	//           <code>info</code>
	//           <code>warning</code>
	//           <code>danger</code></td>
	//           <td><code>success</code></td>
	//           <td>Components styles</td>
	//         </tr>
	//         <tr>
	//           <td>duration</td>
	//           <td><code>Number</code></td>
	//           <td><code>0</code></td>
	//           <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>
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
	//           <td>how to position the component.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>

	// <script>

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(167)
	module.exports = __webpack_require__(169)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(170)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8fc149f0&file=Alert.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8fc149f0&file=Alert.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-transition {\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n.alert.top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.alert.top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n  z-index: 2;\n}", ""]);
	
	// exports


/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div
	//     v-show="show"
	//     v-bind:class="{
	//       'alert':		true,
	//       'alert-success':(type == 'success'),
	//       'alert-warning':(type == 'warning'),
	//       'alert-info':	(type == 'info'),
	//       'alert-danger':	(type == 'danger'),
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
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
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
	      if (val && !!this.duration) {
	        this._timeout = setTimeout(function () {
	          return _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	// </script>

	// <style>
	// .fade-transition {
	//   transition: opacity .3s ease;
	// }
	// .fade-enter,
	// .fade-leave {
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

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "<div\n    v-show=\"show\"\n    v-bind:class=\"{\n      'alert':\t\ttrue,\n      'alert-success':(type == 'success'),\n      'alert-warning':(type == 'warning'),\n      'alert-info':\t(type == 'info'),\n      'alert-danger':\t(type == 'danger'),\n      'top': \t\t\t(placement === 'top'),\n      'top-right': \t(placement === 'top-right')\n    }\"\n    transition=\"fade\"\n    v-bind:style=\"{width:width}\"\n    role=\"alert\">\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\n      @click=\"show = false\">\n      <span>&times;</span>\n    </button>\n    <slot></slot>\n  </div>";

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"alert\">\n    <h1 class=\"page-header\">\n      <a href=\"#alert\" class=\"anchor\">Alert</a>\n    </h1>\n    <div class=\"bs-example\" >\n      <button class=\"btn btn-success btn-lg\"\n        @click=\"showRight = !showRight\">\n        Click to toggle alert on right\n      </button>\n\n      <button class=\"btn btn-danger btn-lg\"\n        @click=\"showTop = !showTop\">\n        Click to toggle alert on top\n      </button>\n      <hr>\n      <alert type=\"success\" >\n        <strong>Well Done!</strong>\n        You successfully read this important alert message.\n      </alert>\n\n      <alert type=\"info\" >\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n      </alert>\n\n      <alert type=\"danger\" dismissable>\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n      </alert>\n\n      <alert type=\"warning\" dismissable>\n        <strong>Warning!</strong> Better check yourself, you're not looking too good.\n      </alert>\n\n      <alert\n        :show.sync=\"showRight\"\n        :duration=\"3000\"\n        type=\"success\"\n        width=\"400px\"\n        placement=\"top-right\"\n        dismissable\n      >\n        <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n        <strong>Well Done!</strong>\n        <p>You successfully read this important alert message.</p>\n      </alert>\n\n      <alert\n        :show.sync=\"showTop\"\n        :duration=\"3000\"\n        type=\"danger\"\n        width=\"400px\"\n        placement=\"top\"\n        dismissable>\n        <span class=\"icon-info-circled alert-icon-float-left\"></span>\n        <strong>Heads up!</strong>\n        <p>This alert needs your attention.</p>\n      </alert>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showRight = !showRight\">\n  Click to toggle alert on right\n</button>\n\n<button class=\"btn btn-default btn-lg\"\n  @click=\"showTop = !showTop\">\n  Click to toggle alert on top\n</button>\n<hr>\n<alert type=\"success\" >\n  <strong>Well Done!</strong>\n  You successfully read this important alert message.\n</alert>\n\n<alert type=\"info\" >\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n</alert>\n\n<alert type=\"danger\" dismissable>\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n\n<alert type=\"warning\" dismissable>\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\n</alert>\n\n<alert\n  show=\"{{showRight}}\"\n  duration=\"3000\"\n  type=\"success\"\n  width=\"400px\"\n  placement=\"top-right\"\n  dismissable>\n  <span class=\"icon-ok-circled alert-icon-float-left\"></span>\n  <strong>Well Done!</strong>\n  <p>You successfully read this important alert message.</p>\n</alert>\n\n<alert\n  show=\"{{showTop}}\"\n  duration=\"3000\"\n  type=\"info\"\n  width=\"400px\"\n  placement=\"top\"\n  dismissable>\n  <span class=\"icon-info-circled alert-icon-float-left\"></span>\n  <strong>Heads up!</strong>\n  <p>This alert needs your attention.</p>\n</alert>\n\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td><code>true</code></td>\n          <td>Whether show the component</td>\n        </tr>\n        <tr>\n          <td>dismissable</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether show close button</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of\n          <code>success</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>danger</code></td>\n          <td><code>success</code></td>\n          <td>Components styles</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>String</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>\n          <td></td>\n          <td>how to position the component.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(173)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(182)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./accordionDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./accordionDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Accordion = __webpack_require__(174);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(177);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="accordion">
	//     <h1 class="page-header"><a href="#accordion" class="anchor">Accordion</a></h1>
	//     <div class="bs-example">
	//       <p>
	//         <input type="checkbox" v-model="checked">
	//         Open only one at a time.
	//       </p>
	//       <accordion :one-at-atime="checked">
	//         <panel header="Panel #1" :is-open="true">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #2">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #3">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//         <panel header="Panel #4">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </panel>
	//       </accordion>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <input type="checkbox" v-model="checked">
	// <label for="checked">Open only one at a time.</label>
	
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

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(175)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(176)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 175 */
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
	
	// <script>
	exports.default = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
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

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\n    <slot></slot>\n  </div>";

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(178)
	module.exports = __webpack_require__(180)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(181)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(179);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-922570a0&file=Panel.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-922570a0&file=Panel.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".accordion-toggle {\n  cursor: pointer;\n}\n\n.collapse-transition {\n-webkit-transition: max-height .5s ease;\ntransition: max-height .5s ease;\noverflow: hidden;\n}\n\n.collapse-enter, .collapse-leave {\n  max-height: 0!important;\n}", ""]);
	
	// exports


/***/ },
/* 180 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	// <script>
	exports.default = {
	  props: {
	    isOpen: {
	      type: Boolean,
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

	// <style>
	// .accordion-toggle {
	//   cursor: pointer;
	// }

	// .collapse-transition {
	// transition: max-height .5s ease;
	// overflow: hidden;
	// }

	// .collapse-enter, .collapse-leave {
	//   max-height: 0!important;
	// }

	// </style>

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a class=\"accordion-toggle\"\n          @click=\"toggleIsOpen()\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div class=\"panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"accordion\">\n    <h1 class=\"page-header\"><a href=\"#accordion\" class=\"anchor\">Accordion</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <input type=\"checkbox\" v-model=\"checked\">\n        Open only one at a time.\n      </p>\n      <accordion :one-at-atime=\"checked\">\n        <panel header=\"Panel #1\" :is-open=\"true\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #2\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #3\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n        <panel header=\"Panel #4\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </panel>\n      </accordion>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"checkbox\" v-model=\"checked\">\n<label for=\"checked\">Open only one at a time.</label>\n\n<accordion :one-at-atime=\"checked\">\n  <panel header=\"Panel #1\" :is-open=\"true\">\n    ...\n  </panel>\n  <panel header=\"Panel #2\">\n    ...\n  </panel>\n  <panel header=\"Panel #3\">\n    ...\n  </panel>\n  <panel header=\"Panel #4\">\n    ...\n  </panel>\n</accordion>\n</script></code></pre>\n    <h2>Accordion Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>one-at-time</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Control whether expanding an item will cause the other items to close.</td>\n        </tr>\n      </tbody>\n    </table>\n    <h2>Panel Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>is-open</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether accordion group is open or closed.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(184)
	module.exports = __webpack_require__(186)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(193)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./affixDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./affixDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-86f864a8&file=affixDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-86f864a8&file=affixDocs.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./affixDocs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".animated {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite\n}\n@-webkit-keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n@keyframes shake {\n    0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n    10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-5px);transform: translateX(-5px);}\n    20%, 40%, 60%, 80% {-webkit-transform: translateX(5px);transform: translateX(5px);}\n}\n.shake {\n    -webkit-animation-name: shake;\n    animation-name: shake;\n}", ""]);
	
	// exports


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(187);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    tooltip: _Tooltip2.default
	  }
	};
	// </script>

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
	// <template>
	//   <div class="bs-docs-section" id="affix">
	//     <h1 class="page-header"><a href="#affix" class="anchor">Affix</a></h1>
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
	//   </div>
	// </template>

	// <script>

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(188)
	module.exports = __webpack_require__(190)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(192)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(189);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-51adfda2&file=Tooltip.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-51adfda2&file=Tooltip.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip {\n    opacity: .9\n  }\n.fadein-enter {\n  -webkit-animation:fadein-in 0.3s ease-in;\n          animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave {\n  -webkit-animation:fadein-out 0.3s ease-out;\n          animation:fadein-out 0.3s ease-out;\n}\n@-webkit-keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadein-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(191);
	
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

	// </style>
	// <template>
	//   <span v-el:trigger>
	//     <slot>
	//     </slot>
	//   </span>
	//   <div class="tooltip"
	//     v-bind:class="{
	//     'top':    placement === 'top',
	//     'left':   placement === 'left',
	//     'right':  placement === 'right',
	//     'bottom': placement === 'bottom'
	//     }"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect"
	//     role="tooltip">
	//     <div class="tooltip-arrow"></div>
	//     <div class="tooltip-inner">
	//       {{{content}}}
	//     </div>
	//   </div>
	// </template>

	// <script>

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(156);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
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
	        return _this.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        return _this.show = false;
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
	      case 'left':
	        this.position.left = triger.offsetLeft - popover.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'right':
	        this.position.left = triger.offsetLeft + triger.offsetWidth;
	        this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	        break;
	      case 'bottom':
	        this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
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
/* 192 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"tooltip\"\n    v-bind:class=\"{\n    'top':    placement === 'top',\n    'left':   placement === 'left',\n    'right':  placement === 'right',\n    'bottom': placement === 'bottom'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\"\n    role=\"tooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>";

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"affix\">\n    <h1 class=\"page-header\"><a href=\"#affix\" class=\"anchor\">Affix</a></h1>\n    <div class=\"bs-example\">\n      <h3>\n        The sub-navigation on the RIGHT is a live demo of the affix.\n        <tooltip trigger=\"hover\" effect=\"fadein\" content=\"I'm a direction, not jerking off!\" placement=\"left\">\n          <span class=\"glyphicon glyphicon-hand-right pull-right animated shake\"></span>\n        </tooltip>\n      </h3>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<affix offset=\"\">\n  <nav class=\"sidebar\">\n    <ul>\n      <li>...</li>\n      <li>...</li>\n      <li>...</li>\n    </ul>\n  </nav>\n</affix>\n</script></code></pre>\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>offset</td>\n          <td><code>Number</code></td>\n          <td><code>0</code></td>\n          <td>Pixels to offset from top of screen when calculating position of scroll.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(195)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(202)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./asideDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./asideDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Aside = __webpack_require__(196);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    sidebar: _Aside2.default
	  },
	  data: function data() {
	    return {
	      showLeft: false,
	      showRight: false
	    };
	  }
	};
	// </script>
	// <template>
	//   <div class="bs-docs-section" id="aside">
	//     <h1 class="page-header"><a href="#aside" class="anchor">Aside</a></h1>
	//     <div class="bs-example">
	//       <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>

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

	//       <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>

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

	// <sidebar :show.sync="showRight" placement="right" header="Title" :width="350">
	// ...
	// </sidebar>

	// <button
	// class="btn btn-danger btn-lg"
	// @click="showLeft = true">Show Aside on left</button>

	// <sidebar :show.sync="showLeft" placement="left" header="Title" :width="350">
	// ...
	// </sidebar></script></code></pre>

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

	// <script>

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(197)
	module.exports = __webpack_require__(199)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(201)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(198);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4a2948e4&file=Aside.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4a2948e4&file=Aside.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".aside-open {\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n  }\n  .aside-open.has-push-right {\n    -webkit-transform: translateX(-300px);\n            transform: translateX(-300px);\n  }\n  .aside {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      z-index: 1049;\n      overflow: auto;\n      background: #fff;\n  }\n  .aside.left {\n    left: 0;\n    right: auto;\n  }\n  .aside.right {\n    left: auto;\n    right: 0;\n  }\n\n  .slideleft-enter {\n    -webkit-animation:slideleft-in .3s;\n            animation:slideleft-in .3s;\n  }\n  .slideleft-leave {\n    -webkit-animation:slideleft-out .3s;\n            animation:slideleft-out .3s;\n  }\n  @-webkit-keyframes slideleft-in {\n    0% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideleft-in {\n    0% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @-webkit-keyframes slideleft-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n  @keyframes slideleft-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      opacity: 0;\n    }\n  }\n  .slideright-enter {\n    -webkit-animation:slideright-in .3s;\n            animation:slideright-in .3s;\n  }\n  .slideright-leave {\n    -webkit-animation:slideright-out .3s;\n            animation:slideright-out .3s;\n  }\n  @-webkit-keyframes slideright-in {\n    0% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @keyframes slideright-in {\n    0% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n    100% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  @-webkit-keyframes slideright-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n  @keyframes slideright-out {\n    0% {\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      opacity: 0;\n    }\n  }\n\n  .aside:focus {\n      outline: 0\n  }\n\n  @media (max-width: 991px) {\n      .aside {\n          min-width:240px\n      }\n  }\n\n  .aside.left {\n      right: auto;\n      left: 0\n  }\n\n  .aside.right {\n      right: 0;\n      left: auto\n  }\n\n  .aside .aside-dialog .aside-header {\n      border-bottom: 1px solid #e5e5e5;\n      min-height: 16.43px;\n      padding: 6px 15px;\n      background: #337ab7;\n      color: #fff\n  }\n\n  .aside .aside-dialog .aside-header .close {\n      margin-right: -8px;\n      padding: 4px 8px;\n      color: #fff;\n      font-size: 25px;\n      opacity: .8\n  }\n\n  .aside .aside-dialog .aside-body {\n      position: relative;\n      padding: 15px\n  }\n\n  .aside .aside-dialog .aside-footer {\n      padding: 15px;\n      text-align: right;\n      border-top: 1px solid #e5e5e5\n  }\n\n  .aside .aside-dialog .aside-footer .btn+.btn {\n      margin-left: 5px;\n      margin-bottom: 0\n  }\n\n  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {\n      margin-left: -1px\n  }\n\n  .aside .aside-dialog .aside-footer .btn-block+.btn-block {\n      margin-left: 0\n  }\n\n  .aside-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1040;\n      opacity: 0;\n      -webkit-transition: opacity .3s ease;\n      transition: opacity .3s ease;\n      background-color: #000\n  }\n\n\n  .aside-backdrop.in {\n      opacity: .5;\n      filter: alpha(opacity=50)\n  }", ""]);
	
	// exports


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(156);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _getScrollBarWidth = __webpack_require__(200);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="aside"
	//     v-bind:style="{width:width + 'px'}"
	//     v-bind:class="{
	//     left:placement === 'left',
	//     right:placement === 'right'
	//     }"
	//     v-show="show"
	//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
	//     <div class="aside-dialog">
	//       <div class="aside-content">
	//         <div class="aside-header">
	//           <button type="button" class="close" @click='close'><span>&times;</span></button>
	//           <h4 class="aside-title">{{header}}</h4>
	//         </div>
	//         <div class="aside-body">
	//           <slot></slot>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      require: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      default: 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: Number,
	      default: '320'
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      var body = document.body;
	      backdrop.className = 'aside-backdrop';
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        body.appendChild(backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = backdrop.clientHeight;
	        backdrop.className += ' in';
	        this._clickEvent = _EventListener2.default.listen(backdrop, 'click', this.close);
	      } else {
	        if (this._clickEvent) this._clickEvent.remove();
	        backdrop = document.querySelector('.aside-backdrop');
	        try {
	          backdrop.className = 'aside-backdrop';
	          body.classList.remove('modal-open');
	          body.style.paddingRight = '0';
	          body.removeChild(backdrop);
	        } catch (e) {}
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>

	// <style>
	//   .aside-open {
	//     transition: transform 0.3s;
	//   }
	//   .aside-open.has-push-right {
	//     transform: translateX(-300px);
	//   }
	//   .aside {
	//       position: fixed;
	//       top: 0;
	//       bottom: 0;
	//       z-index: 1049;
	//       overflow: auto;
	//       background: #fff;
	//   }
	//   .aside.left {
	//     left: 0;
	//     right: auto;
	//   }
	//   .aside.right {
	//     left: auto;
	//     right: 0;
	//   }

	//   .slideleft-enter {
	//     animation:slideleft-in .3s;
	//   }
	//   .slideleft-leave {
	//     animation:slideleft-out .3s;
	//   }
	//   @keyframes slideleft-in {
	//     0% {
	//       transform: translateX(-100%);
	//       opacity: 0;
	//     }
	//     100% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//   }
	//   @keyframes slideleft-out {
	//     0% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//     100% {
	//       transform: translateX(-100%);
	//       opacity: 0;
	//     }
	//   }
	//   .slideright-enter {
	//     animation:slideright-in .3s;
	//   }
	//   .slideright-leave {
	//     animation:slideright-out .3s;
	//   }
	//   @keyframes slideright-in {
	//     0% {
	//       transform: translateX(100%);
	//       opacity: 0;
	//     }
	//     100% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//   }
	//   @keyframes slideright-out {
	//     0% {
	//       transform: translateX(0);
	//       opacity: 1;
	//     }
	//     100% {
	//       transform: translateX(100%);
	//       opacity: 0;
	//     }
	//   }

	//   .aside:focus {
	//       outline: 0
	//   }

	//   @media (max-width: 991px) {
	//       .aside {
	//           min-width:240px
	//       }
	//   }

	//   .aside.left {
	//       right: auto;
	//       left: 0
	//   }

	//   .aside.right {
	//       right: 0;
	//       left: auto
	//   }

	//   .aside .aside-dialog .aside-header {
	//       border-bottom: 1px solid #e5e5e5;
	//       min-height: 16.43px;
	//       padding: 6px 15px;
	//       background: #337ab7;
	//       color: #fff
	//   }

	//   .aside .aside-dialog .aside-header .close {
	//       margin-right: -8px;
	//       padding: 4px 8px;
	//       color: #fff;
	//       font-size: 25px;
	//       opacity: .8
	//   }

	//   .aside .aside-dialog .aside-body {
	//       position: relative;
	//       padding: 15px
	//   }

	//   .aside .aside-dialog .aside-footer {
	//       padding: 15px;
	//       text-align: right;
	//       border-top: 1px solid #e5e5e5
	//   }

	//   .aside .aside-dialog .aside-footer .btn+.btn {
	//       margin-left: 5px;
	//       margin-bottom: 0
	//   }

	//   .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
	//       margin-left: -1px
	//   }

	//   .aside .aside-dialog .aside-footer .btn-block+.btn-block {
	//       margin-left: 0
	//   }

	//   .aside-backdrop {
	//       position: fixed;
	//       top: 0;
	//       right: 0;
	//       bottom: 0;
	//       left: 0;
	//       z-index: 1040;
	//       opacity: 0;
	//       transition: opacity .3s ease;
	//       background-color: #000
	//   }

	//   .aside-backdrop.in {
	//       opacity: .5;
	//       filter: alpha(opacity=50)
	//   }
	// </style>

/***/ },
/* 200 */
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
/* 201 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aside\"\n    v-bind:style=\"{width:width + 'px'}\"\n    v-bind:class=\"{\n    left:placement === 'left',\n    right:placement === 'right'\n    }\"\n    v-show=\"show\"\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\n    <div class=\"aside-dialog\">\n      <div class=\"aside-content\">\n        <div class=\"aside-header\">\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\n          <h4 class=\"aside-title\">{{header}}</h4>\n        </div>\n        <div class=\"aside-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"aside\">\n    <h1 class=\"page-header\"><a href=\"#aside\" class=\"anchor\">Aside</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-success btn-lg\" @click=\"showRight = true\">Show Aside on right</button>\n\n      <sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n          <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showRight=false\">Close</button>\n        </div>\n      </sidebar>\n\n      <button class=\"btn btn-danger btn-lg\" @click=\"showLeft = true\">Show Aside on left</button>\n\n      <sidebar  :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n        <h4>Text in aside</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.</p>\n        <p> Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <pre><code class=\"language-javascript\">\nif (talk === cheap){\n  code.style.display = 'block'\n}\n        </code></pre>\n        <div class=\"aside-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click=\"showLeft=false\">Close</button>\n        </div>\n      </sidebar>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button\nclass=\"btn btn-success btn-lg\"\n@click=\"showRight = true\">Show Aside on right</button>\n\n<sidebar :show.sync=\"showRight\" placement=\"right\" header=\"Title\" :width=\"350\">\n...\n</sidebar>\n\n<button\nclass=\"btn btn-danger btn-lg\"\n@click=\"showLeft = true\">Show Aside on left</button>\n\n<sidebar :show.sync=\"showLeft\" placement=\"left\" header=\"Title\" :width=\"350\">\n...\n</sidebar></script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td><code>Boolean</code></td>\n          <td></td>\n          <td>Whether show the component.</td>\n        </tr>\n        <tr>\n          <td>placement</td>\n          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>\n          <td><code>right</code></td>\n          <td>how to position the component.</td>\n        </tr>\n        <tr>\n          <td>header</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Header text of the aside component.</td>\n        </tr>\n        <tr>\n          <td>width</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(204)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(213)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./carouselDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./carouselDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(205);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slider = __webpack_require__(210);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="carousel">
	//     <h1 class="page-header"><a href="#caoursel" class="anchor">Carousel</a></h1>
	//     <div class="bs-example">
	//       <carousel>
	//         <slider>
	//           <img src="http://placehold.it/1200x500?text=one">
	//           <div class="carousel-caption">
	//            <h3>Slide #1</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img src="http://placehold.it/1200x500?text=two">
	//           <div class="carousel-caption">
	//            <h3>Slide #2</h3>
	//            <p>sunt in culpa qui officia deserunt mollit a.</p>
	//          </div>
	//         </slider>
	//         <slider>
	//           <img src="http://placehold.it/1200x500?text=three">
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
	
	// <script>
	exports.default = {
	  components: {
	    carousel: _Carousel2.default,
	    slider: _Slider2.default
	  }
	};
	// </script>

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(206)
	module.exports = __webpack_require__(208)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(209)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-69b62e64&file=Carousel.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-69b62e64&file=Carousel.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b62e64&file=Carousel.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-69b62e64&file=Carousel.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".carousel-control[_v-69b62e64] {\n    cursor: pointer;\n  }", ""]);
	
	// exports


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(110);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(156);
	
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

	// <style scoped>
	//   .carousel-control {
	//     cursor: pointer;
	//   }
	// </style>
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

	// <script>

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-69b62e64=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-69b62e64=\"\">\n    <indicator _v-69b62e64=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-69b62e64=\"\">\n    <slot _v-69b62e64=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-69b62e64=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-69b62e64=\"\"></span>\n    <span class=\"sr-only\" _v-69b62e64=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-69b62e64=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-69b62e64=\"\"></span>\n    <span class=\"sr-only\" _v-69b62e64=\"\">Next</span>\n  </a>\n</div>";

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(211)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(212)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 211 */
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

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "<div class=\"item\">\n    <slot></slot>\n  </div>";

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"carousel\">\n    <h1 class=\"page-header\"><a href=\"#caoursel\" class=\"anchor\">Carousel</a></h1>\n    <div class=\"bs-example\">\n      <carousel>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=one\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #1</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=two\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #2</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n        <slider>\n          <img src=\"http://placehold.it/1200x500?text=three\">\n          <div class=\"carousel-caption\">\n           <h3>Slide #3</h3>\n           <p>sunt in culpa qui officia deserunt mollit a.</p>\n         </div>\n        </slider>\n      </carousel>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<carousel>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=one\">\n      <div class=\"carousel-caption\">\n       ...\n     </div>\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=two\">\n  </slider>\n  <slider>\n    <img src=\"http://placehold.it/1200x400?text=three\">\n  </slider>\n</carousel>\n</script></code></pre>\n\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>indicators</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the indicators.</td>\n      </tr>\n      <tr>\n        <td>controls</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the direction controls.</td>\n      </tr>\n      <tr>\n        <td>interval</td>\n        <td><code>Number</code></td>\n        <td><code>5000</code></td>\n        <td>The amount of time to delay between automatically cycling an item. If set to 0 or a negative number,\n          carousel will not automatically cycle.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(215)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(228)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonsDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonsDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonsDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _radioGroup = __webpack_require__(216);
	
	var _radioGroup2 = _interopRequireDefault(_radioGroup);
	
	var _radioBtn = __webpack_require__(219);
	
	var _radioBtn2 = _interopRequireDefault(_radioBtn);
	
	var _checkboxGroup = __webpack_require__(222);
	
	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);
	
	var _checkboxBtn = __webpack_require__(225);
	
	var _checkboxBtn2 = _interopRequireDefault(_checkboxBtn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="buttons">
	//     <h1 class="page-header"><a href="#buttons" class="anchor">Buttons</a></h1>
	//     <div class="bs-example">
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
	//       <radio-group :value.sync="radioValue" type="primary">
	//         <radio value="left">Left</radio>
	//         <radio value="middle" checked>Middle</radio>
	//         <radio value="right">Right</radio>
	//       </radio-group>
	
	//       <radio-group :value.sync="radioValue" type="success">
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
	
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <checkbox-group :value.sync="checkboxValue">
	//   <checkbox value="left">Left</checkbox>
	//   <checkbox value="middle" checked>Middle</checkbox>
	//   <checkbox value="right">Right</checkbox>
	// </checkbox-group>
	
	// <radio-group :value.sync="radioValue" type="primary">
	//   <radio value="left">Left</radio>
	//   <radio value="middle" checked>Middle</radio>
	//   <radio value="right">Right</radio>
	// </radio-group>
	
	// <radio-group :value.sync="radioValue" type="success">
	//   <radio value="left">Left</radio>
	//   <radio value="middle" checked>Middle</radio>
	//   <radio value="right">Right</radio>
	// </radio-group>
	// </script></code></pre>
	
	//     <h2>Group options</h2>
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
	//           <td>Array</td>
	//           <td></td>
	//           <td></td>
	//         </tr>
	//         <tr>
	//           <td>type</td>
	//           <td><code>String</code>, one of <code>default</code>
	//           <code>primary</code>
	//           <code>danger</code>
	//           <code>info</code>
	//           <code>warning</code>
	//           <code>success</code></td>
	//           <td><code>default</code></td>
	//           <td></td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	
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

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(217)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(218)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioGroup.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioGroup.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 217 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons">
	//     <slot></slot>
	//   </div>
	// </template>
	
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
	    }
	  }
	};
	// </script>

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <slot></slot>\n  </div>";

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(220)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(221)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioBtn.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioBtn.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./radioBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./radioBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 220 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <label class="btn"
	//   v-bind:class="{
	//     'active':active,
	//     'btn-success':type == 'success',
	//     'btn-warning':type == 'warning',
	//     'btn-info':type == 'info',
	//     'btn-danger':type == 'danger',
	//     'btn-default':type == 'default',
	//     'btn-primary':type == 'primary'
	//   }">
	
	//     <input type="radio" autocomplete="off"
	//       :checked="checked"
	//       @click="handleClick"
	//     />
	
	//     <slot></slot>
	
	//   </label>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    type: function type() {
	      return this.$parent.type;
	    },
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
	    if (this.checked) this.$parent.value = this.value;
	  }
	};
	// </script>

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\n  v-bind:class=\"{\n    'active':active,\n    'btn-success':type == 'success',\n    'btn-warning':type == 'warning',\n    'btn-info':type == 'info',\n    'btn-danger':type == 'danger',\n    'btn-default':type == 'default',\n    'btn-primary':type == 'primary'\n  }\">\n\n    <input type=\"radio\" autocomplete=\"off\"\n      :checked=\"checked\"\n      @click=\"handleClick\"\n    />\n\n    <slot></slot>\n\n  </label>";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(223)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(224)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxGroup.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxGroup.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 223 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="btn-group" data-toggle="buttons">
	//     <slot></slot>
	//   </div>
	// </template>
	
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
	    }
	  }
	};
	// </script>

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\n    <slot></slot>\n  </div>";

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(226)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(227)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxBtn.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxBtn.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./checkboxBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./checkboxBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <label class="btn"
	//   v-bind:class="{
	//     'active':checked,
	//     'btn-success':type == 'success',
	//     'btn-warning':type == 'warning',
	//     'btn-info':type == 'info',
	//     'btn-danger':type == 'danger',
	//     'btn-default':type == 'default',
	//     'btn-primary':type == 'primary'
	//   }">
	
	//     <input type="checkbox" autocomplete="off"
	//     :checked="checked"
	//     @click="handleClick"
	//     />
	
	//     <slot></slot>
	//   </label>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    type: function type() {
	      return this.$parent.type;
	    }
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
	    if (this.checked) this.$parent.value.push(this.value);
	  }
	};
	// </script>

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<label class=\"btn\"\n  v-bind:class=\"{\n    'active':checked,\n    'btn-success':type == 'success',\n    'btn-warning':type == 'warning',\n    'btn-info':type == 'info',\n    'btn-danger':type == 'danger',\n    'btn-default':type == 'default',\n    'btn-primary':type == 'primary'\n  }\">\n\n    <input type=\"checkbox\" autocomplete=\"off\"\n    :checked=\"checked\"\n    @click=\"handleClick\"\n    />\n\n    <slot></slot>\n  </label>";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"buttons\">\n    <h1 class=\"page-header\"><a href=\"#buttons\" class=\"anchor\">Buttons</a></h1>\n    <div class=\"bs-example\">\n      <h4>Checkbox</h4>\n      <checkbox-group :value.sync=\"checkboxValue\">\n        <checkbox value=\"left\">Left</checkbox>\n        <checkbox value=\"middle\" checked>Middle</checkbox>\n        <checkbox value=\"right\">Right</checkbox>\n      </checkbox-group>\n      <p>\n        <pre>\nCheckbox value: {{checkboxValue | json}}\n        </pre>\n      </p>\n      <hr>\n      <h4>Radio</h4>\n      <radio-group :value.sync=\"radioValue\" type=\"primary\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n\n      <radio-group :value.sync=\"radioValue\" type=\"success\">\n        <radio value=\"left\">Left</radio>\n        <radio value=\"middle\" checked>Middle</radio>\n        <radio value=\"right\">Right</radio>\n      </radio-group>\n      <p>\n        <pre>\nRadio value: {{radioValue}}\n        </pre>\n      </p>\n    </div>\n\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<checkbox-group :value.sync=\"checkboxValue\">\n  <checkbox value=\"left\">Left</checkbox>\n  <checkbox value=\"middle\" checked>Middle</checkbox>\n  <checkbox value=\"right\">Right</checkbox>\n</checkbox-group>\n\n<radio-group :value.sync=\"radioValue\" type=\"primary\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n\n<radio-group :value.sync=\"radioValue\" type=\"success\">\n  <radio value=\"left\">Left</radio>\n  <radio value=\"middle\" checked>Middle</radio>\n  <radio value=\"right\">Right</radio>\n</radio-group>\n</script></code></pre>\n\n    <h2>Group options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td>Array</td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code>, one of <code>default</code>\n          <code>primary</code>\n          <code>danger</code>\n          <code>info</code>\n          <code>warning</code>\n          <code>success</code></td>\n          <td><code>default</code></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(230)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(255)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./datepickerDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./datepickerDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Datepicker = __webpack_require__(231);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Select = __webpack_require__(236);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(250);
	
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
	      format: ['MMM/dd/yyyy']
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
	// <template>
	//   <div class="bs-docs-section" id="datepicker">
	//     <h1 class="page-header"><a href="#datepicker" class="anchor">Datepicker</a></h1>
	//     <div class="bs-example">
	//       <p>
	//         <pre>
	// Selected date is: {{new Date(value).toString().slice(0, -23)}}
	//         </pre>
	//       </p>
	//       <datepicker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"
	//       :format="format.toString()"></datepicker>
	//       <h4>Disabled days of week</h4>

	//       <v-select multiple :value.sync="disabled">
	//   <v-option value="0"></v-option>
	//   <v-option value="1"></v-option>
	//   <v-option value="2"></v-option>
	//   <v-option value="3"></v-option>
	//   <v-option value="4"></v-option>
	//   <v-option value="5"></v-option>
	//   <v-option value="6"></v-option>
	//       </v-select>

	//       <h4>Format</h4>
	//       <v-select :value.sync="format" >
	//         <v-option value="yyyy,MM,dd"></v-option>
	//         <v-option value="yyyy-MM-dd"></v-option>
	//         <v-option value="yyyy.MM.dd"></v-option>
	//         <v-option value="MMM/dd/yyyy"></v-option>
	//         <v-option value="MMMM/dd/yyyy"></v-option>
	//       </v-select>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <datepicker
	//   :value.sync="value"
	//   :disabled-days-of-Week="disabled"
	//   :format="format">
	// </datepicker>

	// <select multiple :value.sync="disabled" size=5>
	//   <option value="0"></option>
	//   <option value="1"></option>
	//   <option value="2"></option>
	//   <option value="3"></option>
	//   <option value="4"></option>
	//   <option value="5"></option>
	//   <option value="6"></option>
	// </select>
	// <select  :value.sync="format">
	//   <option value="yyyy,MM,dd"></option>
	//   <option value="yyyy-MM-dd"></option>
	//   <option value="yyyy.MM.dd"></option>
	//   <option value="MMM/dd/yyyy"></option>
	//   <option value="MMMM/dd/yyyy"></option>
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
	//           <td>Value of the input DOM</td>
	//         </tr>
	//         <tr>
	//           <td>Width</td>
	//           <td><code>String</code></td>
	//           <td>200px</td>
	//           <td>Width of the input DOM</td>
	//         </tr>
	//         <tr>
	//           <td>format</td>
	//           <td><code>String</code></td>
	//           <td><code>MMMM/dd/yyyy</code></td>
	//           <td>The date format, combination of d, dd, M, MM ,MMM , MMMM, yyyy.</td>
	//         </tr>
	//         <tr>
	//           <td>disabledDaysOfWeek</td>
	//           <td><code>Array</code></td>
	//           <td></td>
	//           <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
	//              Multiple values should be comma-separated.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>

	// <script>

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(232)
	module.exports = __webpack_require__(234)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(235)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(233);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-84175c80&file=Datepicker.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-84175c80&file=Datepicker.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
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

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker{\n    position: relative;\n    display: inline-block;\n}\n\n.datepicker-popup{\n    position: absolute;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    background: #fff;\n    margin-top: 2px;\n    z-index: 1000;\n    box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner{\n    width: 218px;\n\n}\n.datepicker-body{\n    padding: 10px 10px;\n}\n.datepicker-ctrl p,\n.datepicker-ctrl span,\n.datepicker-body span{\n    display: inline-block;\n    width: 28px;\n    line-height: 28px;\n    height: 28px;\n    border-radius: 4px;\n}\n.datepicker-ctrl p {\n    width: 65%;\n}\n.datepicker-ctrl span {\n  position: absolute;\n}\n.datepicker-body span {\n  text-align: center;\n}\n.datepicker-mouthRange span{\n  width: 48px;\n  height: 50px;\n  line-height: 45px;\n}\n.datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\n.decadeRange span:last-child,\n.datepicker-item-disable,\n.datepicker-item-gray{\n    color: #999;\n}\n\n.datepicker-dateRange-item-active:hover,\n.datepicker-dateRange-item-active {\n    background: rgb(50, 118, 177)!important;\n    color: white!important;\n}\n.datepicker-mouthRange {\n  margin-top: 10px\n}\n.datepicker-mouthRange span,\n.datepicker-ctrl span,\n.datepicker-ctrl p,\n.datepicker-dateRange span {\n  cursor: pointer;\n}\n.datepicker-mouthRange span:hover,\n.datepicker-ctrl p:hover,\n.datepicker-ctrl i:hover,\n.datepicker-dateRange span:hover,\n.datepicker-dateRange-item-hover {\n    background-color : #eeeeee;\n}\n\n.datepicker-weekRange span{\n    font-weight: bold;\n}\n.datepicker-label{\n    background-color: #f8f8f8;\n    font-weight: 700;\n    padding: 7px 0;\n    text-align: center;\n}\n.datepicker-ctrl{\n    position: relative;\n    height: 30px;\n    line-height: 30px;\n    font-weight: bold;\n    text-align: center;\n}\n.month-btn{\n  font-weight: bold;\n  -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n}\n.datepicker-preBtn{\n    left: 2px;\n}\n.datepicker-nextBtn{\n    right: 2px;\n}", ""]);
	
	// exports


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(156);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'MMMM/dd/yyyy'
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
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMouthView: false,
	      displayYearView: false,
	      mouthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
	    },
	    inputClick: function inputClick() {
	      if (this.displayMouthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, mouths, date);
	      } else {
	        this.currDate = new Date(year + 10, mouths, date);
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
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, mouths, date);
	      } else {
	        this.currDate = new Date(year + 1, mouths, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMouthView = true;
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
	    switchMouthView: function switchMouthView() {
	      this.displayDayView = false;
	      this.displayMouthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMouthView = false;
	      this.displayYearView = true;
	    },
	    mouthSelect: function mouthSelect(index) {
	      this.displayMouthView = false;
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
	      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMouth: function parseMouth(date) {
	      return this.mouthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var mouthName = this.parseMouth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, mouthName).replace(/MMM/g, mouthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
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
	        for (var i = 1; i < firstDayWeek; i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(i) {
	        var date = new Date(time.year, time.month, i);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	
	        if (i === time.day) {
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
	          text: i,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var i = 1; i <= dayCount; i++) {
	        _loop(i);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var i = 1; i <= nextMonthNeed; i++) {
	          this.dateRange.push({
	            text: i,
	            date: new Date(nextMonth.year, nextMonth.month, i),
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

	// <style>
	// .datepicker{
	//     position: relative;
	//     display: inline-block;
	// }

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
	// .datepicker-mouthRange span{
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

	// .datepicker-dateRange-item-active:hover,
	// .datepicker-dateRange-item-active {
	//     background: rgb(50, 118, 177)!important;
	//     color: white!important;
	// }
	// .datepicker-mouthRange {
	//   margin-top: 10px
	// }
	// .datepicker-mouthRange span,
	// .datepicker-ctrl span,
	// .datepicker-ctrl p,
	// .datepicker-dateRange span {
	//   cursor: pointer;
	// }
	// .datepicker-mouthRange span:hover,
	// .datepicker-ctrl p:hover,
	// .datepicker-ctrl i:hover,
	// .datepicker-dateRange span:hover,
	// .datepicker-dateRange-item-hover {
	//     background-color : #eeeeee;
	// }

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
	// <template>
	//   <div class="datepicker">
	//     <input class="form-control datepicker-input" type="text"
	//     v-bind:style="{width:width}"
	//     @click="inputClick"
	//     v-model="value"/>
	//       <div class="datepicker-popup" v-show="displayDayView">
	//           <div class="datepicker-inner">
	//               <div class="datepicker-body">
	//                   <div class="datepicker-ctrl">
	//                       <span class="month-btn datepicker-preBtn" @click="preNextMonthClick(0)">&lt;</span>
	//                       <span class="month-btn datepicker-nextBtn" @click="preNextMonthClick(1)">&gt;</span>
	//                       <p @click="switchMouthView">
	//                       {{stringifyDayHeader(currDate)}}
	//                       </p>
	//                   </div>
	//                   <div class="datepicker-weekRange">
	//                       <span v-for="w in weekRange">{{w}}</span>
	//                   </div>
	//                   <div class="datepicker-dateRange">
	//                       <span v-for="d in dateRange" v-bind:class="d.sclass" @click="daySelect(d.date,this)">{{d.text}}</span>
	//                   </div>
	//               </div>
	//           </div>
	//       </div>
	//       <div class="datepicker-popup" v-show="displayMouthView">
	//         <div class="datepicker-inner">
	//             <div class="datepicker-body">
	//                 <div class="datepicker-ctrl">
	//                     <span class="month-btn datepicker-preBtn" @click="preNextYearClick(0)">&lt;</span>
	//                     <span class="month-btn datepicker-nextBtn" @click="preNextYearClick(1)">&gt;</span>
	//                     <p @click="switchDecadeView">
	//                     {{stringifyYearHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="datepicker-mouthRange">
	//                 	<template v-for="m in mouthNames">
	// 	                    <span   v-bind:class="{'datepicker-dateRange-item-active':
	// 			                    (this.mouthNames[this.parse(this.value).getMonth()]  === m) &&
	// 			                    this.currDate.getFullYear() === this.parse(this.value).getFullYear()}"
	// 			                    @click="mouthSelect($index)"
	// 	                    >
	// 	                      {{m.substr(0,3)}}
	// 	                    </span>
	//                     </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	//       <div class="datepicker-popup" v-show="displayYearView">
	//         <div class="datepicker-inner">
	//             <div class="datepicker-body">
	//                 <div class="datepicker-ctrl">
	//                     <span class="month-btn datepicker-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
	//                     <span class="month-btn datepicker-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
	//                     <p>
	//                     {{stringifyDecadeHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="datepicker-mouthRange decadeRange">
	//                 	<template v-for="decade in decadeRange">
	//                 		<span v-bind:class="{'datepicker-dateRange-item-active':
	// 		                    this.parse(this.value).getFullYear() === decade.text}"
	// 	                    @click.stop="yearSelect(decade.text)">
	// 	                      {{decade.text}}
	// 	                    </span>
	// 					</template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	// </div>
	// </template>

	// <script>

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div class=\"datepicker\">\n    <input class=\"form-control datepicker-input\" type=\"text\"\n    v-bind:style=\"{width:width}\"\n    @click=\"inputClick\"\n    v-model=\"value\"/>\n      <div class=\"datepicker-popup\" v-show=\"displayDayView\">\n          <div class=\"datepicker-inner\">\n              <div class=\"datepicker-body\">\n                  <div class=\"datepicker-ctrl\">\n                      <span class=\"month-btn datepicker-preBtn\" @click=\"preNextMonthClick(0)\">&lt;</span>\n                      <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextMonthClick(1)\">&gt;</span>\n                      <p @click=\"switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"datepicker-weekRange\">\n                      <span v-for=\"w in weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"datepicker-dateRange\">\n                      <span v-for=\"d in dateRange\" v-bind:class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayMouthView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" @click=\"preNextYearClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextYearClick(1)\">&gt;</span>\n                    <p @click=\"switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange\">\n                \t<template v-for=\"m in mouthNames\">\n\t                    <span   v-bind:class=\"{'datepicker-dateRange-item-active':\n\t\t\t                    (this.mouthNames[this.parse(this.value).getMonth()]  === m) &&\n\t\t\t                    this.currDate.getFullYear() === this.parse(this.value).getFullYear()}\"\n\t\t\t                    @click=\"mouthSelect($index)\"\n\t                    >\n\t                      {{m.substr(0,3)}}\n\t                    </span>\n                    </template>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"datepicker-popup\" v-show=\"displayYearView\">\n        <div class=\"datepicker-inner\">\n            <div class=\"datepicker-body\">\n                <div class=\"datepicker-ctrl\">\n                    <span class=\"month-btn datepicker-preBtn\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n                    <span class=\"month-btn datepicker-nextBtn\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"datepicker-mouthRange decadeRange\">\n                \t<template v-for=\"decade in decadeRange\">\n                \t\t<span v-bind:class=\"{'datepicker-dateRange-item-active':\n\t\t                    this.parse(this.value).getFullYear() === decade.text}\"\n\t                    @click.stop=\"yearSelect(decade.text)\">\n\t                      {{decade.text}}\n\t                    </span>\n\t\t\t\t\t</template>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(237)
	module.exports = __webpack_require__(239)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(249)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(238);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-79457f00&file=Select.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-79457f00&file=Select.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".bs_searchbox {\n  padding: 4px 8px;\n}\n.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\n   pointer-events: none;\n  opacity: .9;\n}", ""]);
	
	// exports


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(240);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="btn-group" v-bind:class="{open:show}">
	//     <button v-el:btn type="button" class="btn btn-default dropdown-toggle"
	//       @click="toggleDropdown"
	//       @blur="show = (search ? show:false)"
	//     >
	//       <span class="placeholder" v-show="showPlaceholder">{{placeholder}}</span>
	//       <span class="content">{{ selectedItems }}</span>
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
	
	// <script>
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
	      default: false
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean,
	      default: false
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    }
	  },
	  ready: function ready() {
	    if (this.multiple) {
	      this.value = [];
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
	      if (!this.multiple) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = (0, _getIterator3.default)(this.$children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var c = _step.value;
	
	            if (c.value == this.value) {
	              return c.$els.v.innerText;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        return "";
	      } else {
	        if (!this.options.length) {
	          var r = [];
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;
	
	          try {
	            for (var _iterator2 = (0, _getIterator3.default)(this.$children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var c = _step2.value;
	
	              if (this.value.indexOf(c.value) !== -1) {
	                r.push(c.$els.v.innerText);
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }
	
	          return r.join(',');
	        } else {
	          // we were given bunch of options, so pluck them out to display
	          var foundItems = [];
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;
	
	          try {
	            for (var _iterator3 = (0, _getIterator3.default)(this.options), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var item = _step3.value;
	
	              if (this.value.indexOf(item.value) !== -1) foundItems.push(item.label);
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	
	          return foundItems.join(', ');
	        }
	      }
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.multiple ? this.value.length <= 0 : typeof this.value === 'undefined' || 聽this.value == '';
	    }
	  },
	  watch: {
	    value: function value(val) {
	      var _this = this;
	
	      var timeout = undefined;
	      if (timeout) clearTimeout(timeout);
	      if (val.length > this.limit) {
	        this.showNotify = true;
	        this.value.pop();
	        timeout = setTimeout(function () {
	          return _this.showNotify = false;
	        }, 1000);
	      }
	    }
	  },
	  methods: {
	    select: function select(v) {
	      if (this.multiple != false) {
	        var index = this.value.indexOf(v);
	        if (index === -1) this.value.push(v);else this.value.$remove(v);
	      } else {
	        this.value = v;
	      }
	    },
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  }
	};
	// </script>
	// <style>
	// .bs_searchbox {
	//   padding: 4px 8px;
	// }
	// .btn-group .dropdown-menu .notify {
	//   position: absolute;
	//   bottom: 5px;
	//   width: 96%;
	//   margin: 0 2%;
	//   min-height: 26px;
	//   padding: 3px 5px;
	//   background: #f5f5f5;
	//   border: 1px solid #e3e3e3;
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
	//    pointer-events: none;
	//   opacity: .9;
	// }
	// </style>

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(241), __esModule: true };

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(242);
	__webpack_require__(113);
	module.exports = __webpack_require__(248);

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(243);
	var Iterators = __webpack_require__(131);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(244)
	  , step             = __webpack_require__(245)
	  , Iterators        = __webpack_require__(131)
	  , toIObject        = __webpack_require__(246);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(117)(Array, 'Array', function(iterated, kind){
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
/* 244 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(247)
	  , defined = __webpack_require__(116);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(146);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(140)
	  , get      = __webpack_require__(144);
	module.exports = __webpack_require__(121).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" v-bind:class=\"{open:show}\">\n    <button v-el:btn type=\"button\" class=\"btn btn-default dropdown-toggle\" \n      @click=\"toggleDropdown\"\n      @blur=\"show = (search ? show:false)\"\n    >\n      <span class=\"placeholder\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n      <span class=\"content\">{{ selectedItems }}</span>\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <template v-if=\"options.length\">\n        <li v-if=\"search\" class=\"bs-searchbox\">\n          <input type=\"text\" placeholder=\"Search\" v-model=\"searchText\" class=\"form-control\" autocomplete=\"off\">\n        </li>\n        <li v-for=\"option in options | filterBy searchText \" v-bind:id=\"option.value\" style=\"position:relative\">\n          <a @mousedown.prevent=\"select(option.value)\" style=\"cursor:pointer\">\n            {{ option.label }}\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"value.indexOf(option.value) !== -1\"></span>\n          </a>\n        </li>\n      </template>\n      <slot v-else></slot>\n      <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\">Limit reached ({{limit}} items max).</div>\n    </ul>\n  </div>";

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251)
	module.exports = __webpack_require__(253)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(254)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(252);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2dd86df9&file=Option.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2dd86df9&file=Option.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, "a span.check-mark {\n    position: absolute;\n    display: inline-block;\n    right: 15px;\n    margin-top: 5px;\n  }", ""]);
	
	// exports


/***/ },
/* 253 */
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
	      if (this.$parent.multiple) {
	        return this.$parent.value.indexOf(this.value) !== -1 ? true : false;
	      }
	      return this.$parent.value == this.value;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      if (parent.multiple) {
	        var index = parent.value.indexOf(this.value);
	        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      } else {
	        parent.value = this.value;
	        parent.show = false;
	      }
	    }
	  }
	};
	// </script>

	// <style>
	//   a span.check-mark {
	//     position: absolute;
	//     display: inline-block;
	//     right: 15px;
	//     margin-top: 5px;
	//   }
	// </style>

/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = "<li style=\"position:relative\">\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\">\n      <span v-el:v><slot></slot></span>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\"></span>\n    </a>\n  </li>";

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"datepicker\">\n    <h1 class=\"page-header\"><a href=\"#datepicker\" class=\"anchor\">Datepicker</a></h1>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelected date is: {{new Date(value).toString().slice(0, -23)}}\n        </pre>\n      </p>\n      <datepicker v-ref:dp :value.sync=\"value\" :disabled-days-of-Week=\"disabled\"\n      :format=\"format.toString()\"></datepicker>\n      <h4>Disabled days of week</h4>\n\n      <v-select multiple :value.sync=\"disabled\">\n  <v-option value=\"0\"></v-option>\n  <v-option value=\"1\"></v-option>\n  <v-option value=\"2\"></v-option>\n  <v-option value=\"3\"></v-option>\n  <v-option value=\"4\"></v-option>\n  <v-option value=\"5\"></v-option>\n  <v-option value=\"6\"></v-option>\n      </v-select>\n\n      <h4>Format</h4>\n      <v-select :value.sync=\"format\" >\n        <v-option value=\"yyyy,MM,dd\"></v-option>\n        <v-option value=\"yyyy-MM-dd\"></v-option>\n        <v-option value=\"yyyy.MM.dd\"></v-option>\n        <v-option value=\"MMM/dd/yyyy\"></v-option>\n        <v-option value=\"MMMM/dd/yyyy\"></v-option>\n      </v-select>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<datepicker\n  :value.sync=\"value\"\n  :disabled-days-of-Week=\"disabled\"\n  :format=\"format\">\n</datepicker>\n\n<select multiple :value.sync=\"disabled\" size=5>\n  <option value=\"0\"></option>\n  <option value=\"1\"></option>\n  <option value=\"2\"></option>\n  <option value=\"3\"></option>\n  <option value=\"4\"></option>\n  <option value=\"5\"></option>\n  <option value=\"6\"></option>\n</select>\n<select  :value.sync=\"format\">\n  <option value=\"yyyy,MM,dd\"></option>\n  <option value=\"yyyy-MM-dd\"></option>\n  <option value=\"yyyy.MM.dd\"></option>\n  <option value=\"MMM/dd/yyyy\"></option>\n  <option value=\"MMMM/dd/yyyy\"></option>\n</select>\n    </script></code></pre>\n    <h2>Option</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Value of the input DOM</td>\n        </tr>\n        <tr>\n          <td>Width</td>\n          <td><code>String</code></td>\n          <td>200px</td>\n          <td>Width of the input DOM</td>\n        </tr>\n        <tr>\n          <td>format</td>\n          <td><code>String</code></td>\n          <td><code>MMMM/dd/yyyy</code></td>\n          <td>The date format, combination of d, dd, M, MM ,MMM , MMMM, yyyy.</td>\n        </tr>\n        <tr>\n          <td>disabledDaysOfWeek</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).\n             Multiple values should be comma-separated.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(261)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./dropdownDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./dropdownDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(258);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  }
	};
	// </script>
	// <template>
	//   <div class="bs-docs-section" id="dropdown">
	//     <h1 class="page-header"><a href="#dropdown" class="anchor">Dropdown</a></h1>
	//     <div class="bs-example">
	//       <dropdown>
	//         <button type="button" class="btn btn-default" data-toggle="dropdown">
	//           Action
	//           <span class="caret"></span>
	//         </button>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#">Action</a></li>
	//           <li><a href="#">Another action</a></li>
	//           <li><a href="#">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown>
	//         <button type="button" class="btn btn-success" data-toggle="dropdown">
	//           Action <span class="caret"></span>
	//         </button>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#">Action</a></li>
	//           <li><a href="#">Another action</a></li>
	//           <li><a href="#">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//       <dropdown>
	//         <button type="button" class="btn btn-primary" data-toggle="dropdown">
	//           Action <span class="caret"></span>
	//         </button>
	//         <ul name="dropdown-menu" class="dropdown-menu">
	//           <li><a href="#">Action</a></li>
	//           <li><a href="#">Another action</a></li>
	//           <li><a href="#">Something else here</a></li>
	//           <li role="separator" class="divider"></li>
	//           <li><a href="#">Separated link</a></li>
	//         </ul>
	//       </dropdown>
	//       <div class="btn-group btn-group-justified" role="group">
	//         <a href="#" class="btn btn-default" role="button">Left</a>
	//         <a href="#" class="btn btn-default" role="button">Middle</a>
	//         <dropdown>
	//           <a href="#" class="btn btn-default" data-toggle="dropdown">
	//             Dropdown <span class="caret"></span>
	//           </a>
	//           <ul name="dropdown-menu" class="dropdown-menu">
	//             <li><a href="#">Action</a></li>
	//             <li><a href="#">Another action</a></li>
	//             <li><a href="#">Something else here</a></li>
	//             <li role="separator" class="divider"></li>
	//             <li><a href="#">Separated link</a></li>
	//           </ul>
	//         </dropdown>
	//       </div>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <dropdown>
	//   <button type="button" class="btn btn-default" data-toggle="dropdown">
	//     Action
	//     <span class="caret"></span>
	//   </button>
	//   <ul name="dropdown-menu" class="dropdown-menu">
	//     <li><a href="#">Action</a></li>
	//     <li><a href="#">Another action</a></li>
	//     <li><a href="#">Something else here</a></li>
	//     <li role="separator" class="divider"></li>
	//     <li><a href="#">Separated link</a></li>
	//   </ul>
	// </dropdown>
	// </script></code></pre>
	//     <h2>Usage</h2>
	//     <p>
	//       Just use as <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.
	//       Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.
	//     </p>
	//   </div>
	// </template>

	// <script>

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(259)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(260)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(156);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
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
	      toggle.style.borderRadius = '4px';
	      toggle.addEventListener('click', this.toggleDropdown);
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
	// <template>
	//   <div class="btn-group">
	//     <slot></slot>
	//     <slot name="dropdown-menu"></slot>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\">\n    <slot></slot>\n    <slot name=\"dropdown-menu\"></slot>\n  </div>";

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"dropdown\">\n    <h1 class=\"page-header\"><a href=\"#dropdown\" class=\"anchor\">Dropdown</a></h1>\n    <div class=\"bs-example\">\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n          Action\n          <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"dropdown\">\n          Action <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <dropdown>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"dropdown\">\n          Action <span class=\"caret\"></span>\n        </button>\n        <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </dropdown>\n      <div class=\"btn-group btn-group-justified\" role=\"group\">\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Left</a>\n        <a href=\"#\" class=\"btn btn-default\" role=\"button\">Middle</a>\n        <dropdown>\n          <a href=\"#\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n            Dropdown <span class=\"caret\"></span>\n          </a>\n          <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </dropdown>\n      </div>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<dropdown>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\">\n    Action\n    <span class=\"caret\"></span>\n  </button>\n  <ul name=\"dropdown-menu\" class=\"dropdown-menu\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</dropdown>\n</script></code></pre>\n    <h2>Usage</h2>\n    <p>\n      Just use as <a target=\"_blank\" href=\"http://getbootstrap.com/javascript/#dropdowns\">original Bootstrap way</a>.\n      Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.\n    </p>\n  </div>";

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(263)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(273)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./modalDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./modalDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(264);
	
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
	// <template>
	//   <div class="bs-docs-section" id="modal">
	//     <h1 class="page-header"><a href="#modal" class="anchor">Modal</a></h1>
	//     <div class="bs-example">
	//       <button class="btn btn-default" @click="showModal = true">Show modal</button>
	//       <modal title="Modal title" :show.sync="showModal">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title">Modal <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
	//       <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
	//       <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//       </modal>
	//       <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
	//       <modal :show.sync="showCustomModal" effect="fade" width="50%">
	//         <div slot="modal-header" class="modal-header">
	//           <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
	//         </div>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//         </div>
	//         <div slot="modal-footer" class="modal-footer">
	//           <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
	//           <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
	//         </div>
	//       </modal>
	//       <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
	//       <modal title="Large Modal" :show.sync="largeModal" large>
	//         <div slot="modal-body" class="modal-body">
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//         </div>
	//       </modal>
	//       <button class="btn btn-danger" @click="smallModal = true">Small modal</button>
	//       <modal title="Small Modal" :show.sync="smallModal" small>
	//         <div slot="modal-body" class="modal-body">
	//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//           consequat.
	//         </div>
	//       </modal>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <button class="btn btn-default"
	//   @click="showModal = true"
	//   >Show modal
	// </button>
	// <modal :show.sync="showModal">
	//   <div slot="modal-header" class="modal-header">
	//     <h4 class="modal-title">Modal title</h4>
	//   </div>
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>

	// <button class="btn btn-primary"
	//   @click="fadeModal = true">
	//   Fade modal
	// </button>
	// <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>

	// <button class="btn btn-success"
	//   @click="zoomModal = true">
	//   Zoom modal
	// </button>
	// <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
	//   <div slot="modal-body" class="modal-body">...</div>
	// </modal>

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
	//         <td>Title of the modal component.</td>
	//       </tr>
	//       <tr>
	//         <td>width</td>
	//         <td><code>Number, String or null</code></td>
	//         <td><code>null</code></td>
	//         <td>Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</td>
	//       </tr>
	//       <tr>
	//         <td>callback</td>
	//         <td><code>Function</code></td>
	//         <td></td>
	//         <td>A callback Function when you click the modal primary button.</td>
	//       </tr>
	//       <tr>
	//         <td>large</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>Creates a large modal ( see boostrap's documentation for .modal-lg )</td>
	//       </tr>
	//       <tr>
	//         <td>small</td>
	//         <td><code>Boolean</code></td>
	//         <td><code>false</code></td>
	//         <td>Creates a small modal ( see boostrap's documentation for .modal-sm )</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   <h2>Usage</h2>
	//   <p>
	//     If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you
	//     need to put custom HTML or a custom footer, you can override the header or footer block by using
	//     <code>&lt;div slot="modal-title" class="modal-title"&gt;...&lt;/div&gt;</code> and
	//     <code>&lt;div slot="modal-footer" class="modal-footer"&gt;...&lt;/div&gt;</code>.
	//   </p>
	//   </div>
	// </template>

	// <script>

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(265)
	module.exports = __webpack_require__(267)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(272)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(266);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-dec2884e&file=Modal.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-dec2884e&file=Modal.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
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

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n    -webkit-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform: translate3d(0, -300px, 0);\n    transform: translate3d(0, -300px, 0);\n    opacity: 1;\n}", ""]);
	
	// exports


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(268);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _getScrollBarWidth = __webpack_require__(200);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(156);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	//             <button type="button" class="btn btn-default" @click="close">Close</button>
	//             <button type="button" class="btn btn-primary" @click="callback">Save changes</button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      require: true,
	      type: Boolean,
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
	      default: true
	    },
	    large: {
	      type: Boolean,
	      default: false
	    },
	    small: {
	      type: Boolean,
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

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(269), __esModule: true };

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(270);
	module.exports = __webpack_require__(121).Number.isInteger;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(119);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(271)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(141)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "<div role=\"dialog\"\n    v-bind:class=\"{\n    'modal':true,\n    'fade':effect === 'fade',\n    'zoom':effect === 'zoom'\n    }\"\n    >\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\n      v-bind:style=\"{width: optionalWidth}\">\n      <div class=\"modal-content\">\n        <slot name=\"modal-header\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"modal-title\" >{{title}}</h4>\n          </div>\n        </slot>\n        <slot name=\"modal-body\">\n          <div class=\"modal-body\"></div>\n        </slot>\n        <slot name=\"modal-footer\">\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">Save changes</button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"modal\">\n    <h1 class=\"page-header\"><a href=\"#modal\" class=\"anchor\">Modal</a></h1>\n    <div class=\"bs-example\">\n      <button class=\"btn btn-default\" @click=\"showModal = true\">Show modal</button>\n      <modal title=\"Modal title\" :show.sync=\"showModal\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\">Modal <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-success\" @click=\"fadeModal = true\">Fade modal</button>\n      <modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-primary\" @click=\"zoomModal = true\">Zoom modal</button>\n      <modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n      </modal>\n      <button class=\"btn btn-default\" @click=\"showCustomModal = true\">Show custom modal</button>\n      <modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"50%\">\n        <div slot=\"modal-header\" class=\"modal-header\">\n          <h4 class=\"modal-title\"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>\n        </div>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </div>\n        <div slot=\"modal-footer\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n          <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n        </div>\n      </modal>\n      <button class=\"btn btn-warning\" @click=\"largeModal = true\">Large modal</button>\n      <modal title=\"Large Modal\" :show.sync=\"largeModal\" large>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </div>\n      </modal>\n      <button class=\"btn btn-danger\" @click=\"smallModal = true\">Small modal</button>\n      <modal title=\"Small Modal\" :show.sync=\"smallModal\" small>\n        <div slot=\"modal-body\" class=\"modal-body\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat.\n        </div>\n      </modal>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<button class=\"btn btn-default\"\n  @click=\"showModal = true\"\n  >Show modal\n</button>\n<modal :show.sync=\"showModal\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-primary\"\n  @click=\"fadeModal = true\">\n  Fade modal\n</button>\n<modal title=\"Fade Modal\" :show.sync=\"fadeModal\" effect=\"fade\" width=\"800\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-success\"\n  @click=\"zoomModal = true\">\n  Zoom modal\n</button>\n<modal title=\"Zoom Modal\" :show.sync=\"zoomModal\" effect=\"zoom\" width=\"400\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n\n<button class=\"btn btn-default\"\n  @click=\"showCustomModal = true\">\n  Show custom modal\n</button>\n<modal :show.sync=\"showCustomModal\" effect=\"fade\" width=\"400\">\n  <div slot=\"modal-header\" class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <i>Custom</i> <code>Modal</code> <b>Title</b>\n    </h4>\n  </div>\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n  <div slot=\"modal-footer\" class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" @click='showCustomModal = false'>Exit</button>\n    <button type=\"button\" class=\"btn btn-success\" @click='showCustomModal = false'>Custom Save</button>\n  </div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"largeModal = true\"\n  >Large Modal\n</button>\n<modal :show.sync=\"largeModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n<button class=\"btn btn-default\"\n  @click=\"smallModal = true\"\n  >Small Modal\n</button>\n<modal :show.sync=\"smallModal\">\n  <div slot=\"modal-body\" class=\"modal-body\">...</div>\n</modal>\n  </script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Title of the modal component.</td>\n      </tr>\n      <tr>\n        <td>width</td>\n        <td><code>Number, String or null</code></td>\n        <td><code>null</code></td>\n        <td>Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</td>\n      </tr>\n      <tr>\n        <td>callback</td>\n        <td><code>Function</code></td>\n        <td></td>\n        <td>A callback Function when you click the modal primary button.</td>\n      </tr>\n      <tr>\n        <td>large</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>Creates a large modal ( see boostrap's documentation for .modal-lg )</td>\n      </tr>\n      <tr>\n        <td>small</td>\n        <td><code>Boolean</code></td>\n        <td><code>false</code></td>\n        <td>Creates a small modal ( see boostrap's documentation for .modal-sm )</td>\n      </tr>\n    </tbody>\n  </table>\n  <h2>Usage</h2>\n  <p>\n    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you\n    need to put custom HTML or a custom footer, you can override the header or footer block by using\n    <code>&lt;div slot=\"modal-title\" class=\"modal-title\"&gt;...&lt;/div&gt;</code> and\n    <code>&lt;div slot=\"modal-footer\" class=\"modal-footer\"&gt;...&lt;/div&gt;</code>.\n  </p>\n  </div>";

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(275)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(281)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./popoverDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./popoverDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(276);
	
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
	// <template>
	//   <div class="bs-docs-section" id="popover">
	//     <h1 class="page-header"><a href="#popover" class="anchor">Popover</a></h1>
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

	// <script>

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(277)
	module.exports = __webpack_require__(279)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(280)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(278);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9ad9225e&file=Popover.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9ad9225e&file=Popover.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  -webkit-animation:scale-in 0.15s ease-in;\n          animation:scale-in 0.15s ease-in;\n}\n.scale-leave {\n  -webkit-animation:scale-out 0.15s ease-out;\n          animation:scale-out 0.15s ease-out;\n}\n@-webkit-keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes scale-out {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n  }\n}", ""]);
	
	// exports


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(191);
	
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

	// <script>

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\n    <slot>\n    </slot>\n  </span>\n  <div class=\"popover\"\n    v-bind:class=\"{\n    'top':placement === 'top',\n    'left':placement === 'left',\n    'right':placement === 'right',\n    'bottom':placement === 'bottom'\n    }\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\">\n      <div class=\"arrow\"></div>\n      <h3 class=\"popover-title\" v-show=\"title\">{{title}}</h3>\n      <div class=\"popover-content\">\n        {{{content}}}\n      </div>\n  </div>";

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"popover\">\n    <h1 class=\"page-header\"><a href=\"#popover\" class=\"anchor\">Popover</a></h1>\n    <div class=\"bs-example\">\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\" :header=\"true\" title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>No title</h4>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">Popover on top</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">Popover on left</button>\n      </popover>\n      <popover effect=\"fade\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">Popover on right</button>\n      </popover>\n      <popover effect=\"fade\" placement=\"bottom\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">Popover on bottom</button>\n      </popover>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <popover effect=\"scale\"  title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Mouseenter</button>\n        </popover>\n      </p>\n      <popover effect=\"scale\"\n      title=\"Title\" content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </popover>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<popover\n  effect=\"fade\"\n  placement=\"bottom\"\n  title=\"Title\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">Popover on bottom</button>\n</popover>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>click</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the popover is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>\n        <td><code>fade</code></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>title</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td><code>Boolean</code></td>\n        <td><code>true</code></td>\n        <td>Whether to show the header.</td>\n      </tr>\n      <tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the popover.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(283)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(287)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./progressbar-docs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./progressbar-docs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Progressbar = __webpack_require__(284);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      dynamicData: [5, 15, 25, 35, 45],
	      stackedData: [10, 20, 30, 40]
	    };
	  },
	
	  components: {
	    progressbar: _Progressbar2.default
	  },
	  methods: {
	    dynamicClick: function dynamicClick() {
	      this.dynamicData = this.dynamicData.map(function () {
	        return Math.floor(Math.random() * 50);
	      });
	    },
	    stackedClick: function stackedClick() {
	      var i = 100;
	      this.stackedData = this.stackedData.map(function () {
	        var random = Math.floor(Math.random() * i);
	        i = i - random;
	        return random;
	      });
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="bs-docs-section" id="progressbar">
	//     <h1 class="page-header"><a href="#progressbar" class="anchor">Progressbar</a></h1>
	//     <div class="bs-example">
	//       <h4>Static</h4>
	//       <div class="row">
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar :now="20" type="success"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar :now="40" type="info"></progressbar>
	//           </div>
	//         </div>
	//         <div class="col-md-4">
	//           <div class="progress">
	//             <progressbar :now="60" type="primary"></progressbar>
	//           </div>
	//         </div>
	//       </div>

	//       <hr>

	//       <h4>
	//         Dynamic
	//         <button type="button" class="btn btn-default" @click="dynamicClick">Randomize</button>
	//       </h4>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[0] * 2" type="info"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[1] * 2" type="warning"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[2] * 2" type="danger"></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[3] * 2" type="success" striped></progressbar>
	//       </div>
	//       <div class="progress">
	//         <progressbar :now="dynamicData[4] * 2" type="success" striped animated></progressbar>
	//       </div>

	//       <hr>

	//       <h4>
	//         Stacked
	//         <button type="button" class="btn btn-default" @click="stackedClick">Randomize</button>
	//       </h4>

	//       <div class="progress">
	//         <progressbar :now="stackedData[0]" label type="warning" striped></progressbar>

	//         <progressbar :now="stackedData[1]" label type="success" ></progressbar>

	//         <progressbar :now="stackedData[2]" label type="danger"></progressbar>

	//         <progressbar :now="stackedData[3]" label type="primary" striped animated></progressbar>
	//       </div>

	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <!-- Stacked -->
	// <div class="progress">
	//   <progressbar :now="" label type="warning" striped></progressbar>

	//   <progressbar :now="" label type="success" ></progressbar>

	//   <progressbar :now="" label type="danger"></progressbar>

	//   <progressbar :now="" label type="primary" striped animated></progressbar>
	// </div>
	// <!-- Single -->
	// <div class="progress">
	//   <progressbar :now="" label type="warning" striped></progressbar>
	// </div>
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
	//           <td>now</td>
	//           <td><code>Number</code></td>
	//           <td></td>
	//           <td>The current value of progress completed.</td>
	//         </tr>
	//         <tr>
	//           <td>type</td>
	//           <td><code>String</code></td>
	//           <td></td>
	//           <td>Style type. Possible values are 'success', 'warning' etc.</td>
	//         </tr>
	//         <tr>
	//           <td>label</td>
	//           <td><code>Boolean</code></td>
	//           <td>false</td>
	//           <td>Whether to show the label.</td>
	//         </tr>
	//         <tr>
	//           <td>striped</td>
	//           <td><code>Boolean</code></td>
	//           <td><code>false</code></td>
	//           <td>Whether the progressbar has striped effect or not.</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>

	// <script>

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(285)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(286)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 285 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div role="progressbar"
	//     v-bind:class="{
	//     'progress-bar' : true,
	//     'progress-bar-success':type == 'success',
	//     'progress-bar-warning':type == 'warning',
	//     'progress-bar-info':type == 'info',
	//     'progress-bar-danger':type == 'danger',
	//     'progress-bar-striped':striped,
	//     'active':animated
	//     }"
	//     v-bind:style="{width: now + '%'}">
	//     {{label ? now + '%':'' }}
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    now: {
	      type: Number,
	      require: true
	    },
	    label: {
	      type: Boolean,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      default: false
	    }
	  }
	};
	// </script>

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "<div role=\"progressbar\"\n    v-bind:class=\"{\n    'progress-bar' : true,\n    'progress-bar-success':type == 'success',\n    'progress-bar-warning':type == 'warning',\n    'progress-bar-info':type == 'info',\n    'progress-bar-danger':type == 'danger',\n    'progress-bar-striped':striped,\n    'active':animated\n    }\"\n    v-bind:style=\"{width: now + '%'}\">\n    {{label ? now + '%':'' }}\n  </div>";

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"progressbar\">\n    <h1 class=\"page-header\"><a href=\"#progressbar\" class=\"anchor\">Progressbar</a></h1>\n    <div class=\"bs-example\">\n      <h4>Static</h4>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar :now=\"20\" type=\"success\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar :now=\"40\" type=\"info\"></progressbar>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"progress\">\n            <progressbar :now=\"60\" type=\"primary\"></progressbar>\n          </div>\n        </div>\n      </div>\n\n      <hr>\n\n      <h4>\n        Dynamic\n        <button type=\"button\" class=\"btn btn-default\" @click=\"dynamicClick\">Randomize</button>\n      </h4>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[0] * 2\" type=\"info\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[1] * 2\" type=\"warning\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[2] * 2\" type=\"danger\"></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[3] * 2\" type=\"success\" striped></progressbar>\n      </div>\n      <div class=\"progress\">\n        <progressbar :now=\"dynamicData[4] * 2\" type=\"success\" striped animated></progressbar>\n      </div>\n\n      <hr>\n\n      <h4>\n        Stacked\n        <button type=\"button\" class=\"btn btn-default\" @click=\"stackedClick\">Randomize</button>\n      </h4>\n\n      <div class=\"progress\">\n        <progressbar :now=\"stackedData[0]\" label type=\"warning\" striped></progressbar>\n\n        <progressbar :now=\"stackedData[1]\" label type=\"success\" ></progressbar>\n\n        <progressbar :now=\"stackedData[2]\" label type=\"danger\"></progressbar>\n\n        <progressbar :now=\"stackedData[3]\" label type=\"primary\" striped animated></progressbar>\n      </div>\n\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<!-- Stacked -->\n<div class=\"progress\">\n  <progressbar :now=\"\" label type=\"warning\" striped></progressbar>\n\n  <progressbar :now=\"\" label type=\"success\" ></progressbar>\n\n  <progressbar :now=\"\" label type=\"danger\"></progressbar>\n\n  <progressbar :now=\"\" label type=\"primary\" striped animated></progressbar>\n</div>\n<!-- Single -->\n<div class=\"progress\">\n  <progressbar :now=\"\" label type=\"warning\" striped></progressbar>\n</div>\n</script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>now</td>\n          <td><code>Number</code></td>\n          <td></td>\n          <td>The current value of progress completed.</td>\n        </tr>\n        <tr>\n          <td>type</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>Style type. Possible values are 'success', 'warning' etc.</td>\n        </tr>\n        <tr>\n          <td>label</td>\n          <td><code>Boolean</code></td>\n          <td>false</td>\n          <td>Whether to show the label.</td>\n        </tr>\n        <tr>\n          <td>striped</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Whether the progressbar has striped effect or not.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(289)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(290)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./selectDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./selectDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(236);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(250);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="select">
	//     <h1 class="page-header"><a href="#select" class="anchor">Select</a></h1>
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
	//         <v-option value="Apple"></v-option>
	//         <v-option value="Banana"></v-option>
	//         <v-option value="Cherry"></v-option>
	//         <v-option value="Orange"></v-option>
	//         <v-option value="Grape"></v-option>
	//       </v-select>
	//       <hr>
	//       <h4>Multiple select</h4>
	//       <p>
	//         <pre>
	// Select data : {{multiple.join(', ')}}
	//         </pre>
	//       </p>
	//       <v-select multiple :value.sync="multiple">
	//         <v-option value="Apple"></v-option>
	//         <v-option value="Banana"></v-option>
	//         <v-option value="Cherry"></v-option>
	//         <v-option value="Orange"></v-option>
	//         <v-option value="Grape"></v-option>
	//       </v-select>
	//       <hr>
	//       <h4>Multiple select limit</h4>
	//       <p>
	//         <pre>
	// Select data : {{multipleLimit.join(', ')}}
	//         </pre>
	//       </p>
	//       <v-select multiple :limit="2" :value.sync="multipleLimit">
	//         <v-option value="Apple"></v-option>
	//         <v-option value="Banana"></v-option>
	//         <v-option value="Cherry"></v-option>
	//         <v-option value="Orange"></v-option>
	//         <v-option value="Grape"></v-option>
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
	//       <v-select :value.sync="arr" :options="fruitOptions" :search="true">
	//       </v-select>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <v-select>
	//   <v-option value="Apple"></v-option>
	//   <v-option value="Banana"></v-option>
	//   <v-option value="Cherry"></v-option>
	//   <v-option value="Orange"></v-option>
	//   <v-option value="Grape"></v-option>
	// </v-select>
	// <hr>
	// <v-select multiple>
	//   <v-option value="Apple"></v-option>
	//   <v-option value="Banana"></v-option>
	//   <v-option value="Cherry"></v-option>
	//   <v-option value="Orange"></v-option>
	//   <v-option value="Grape"></v-option>
	// </v-select>
	// <hr>
	// <v-select multiple :limit="2">
	//   <v-option value="Apple"></v-option>
	//   <v-option value="Banana"></v-option>
	//   <v-option value="Cherry"></v-option>
	//   <v-option value="Orange"></v-option>
	//   <v-option value="Grape"></v-option>
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
	//       </tbody>
	//     </table>
	
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  components: {
	    vSelect: _Select2.default,
	    vOption: _Option2.default
	  },
	  data: function data() {
	    return {
	      fruitOptions: [{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }, { value: 'cherry', label: 'Cherry' }, { value: 'orange', label: 'Orange' }, { value: 'grape', label: 'Grape' }],
	      arr: [],
	      single: [],
	      multiple: [],
	      multipleLimit: [],
	      custom: []
	    };
	  }
	};
	// </script>

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"select\">\n    <h1 class=\"page-header\"><a href=\"#select\" class=\"anchor\">Select</a></h1>\n    <p>\n      This a <a target=\"_blank\" href=\"https://silviomoreto.github.io/bootstrap-select/\">bootstrap-select</a> implementation.\n    </p>\n    <div class=\"bs-example\">\n      <p>\n        <pre>\nSelect data : {{single}}\n        </pre>\n      </p>\n      <v-select :value.sync=\"single\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select</h4>\n      <p>\n        <pre>\nSelect data : {{multiple.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :value.sync=\"multiple\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Multiple select limit</h4>\n      <p>\n        <pre>\nSelect data : {{multipleLimit.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :limit=\"2\" :value.sync=\"multipleLimit\">\n        <v-option value=\"Apple\"></v-option>\n        <v-option value=\"Banana\"></v-option>\n        <v-option value=\"Cherry\"></v-option>\n        <v-option value=\"Orange\"></v-option>\n        <v-option value=\"Grape\"></v-option>\n      </v-select>\n      <hr>\n      <h4>Custom template</h4>\n      <p>\n        <pre>\nSelect data : {{custom.join(', ')}}\n        </pre>\n      </p>\n      <v-select multiple :value.sync=\"custom\">\n        <v-option value=\"Star\"><span slot=\"span\" class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n        <v-option value=\"Heart\"><span slot=\"span\" class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n        <v-option value=\"Film\"><span slot=\"span\" class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n        <v-option value=\"Inbox\"><span slot=\"span\" class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n      </v-select>\n      <hr />\n      <h4>Array/Collection driven w/ search</h4>\n      <p>\n        Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.\n        <pre>\nSelect data : {{arr}}\n        </pre>\n      </p>\n      <v-select :value.sync=\"arr\" :options=\"fruitOptions\" :search=\"true\">\n      </v-select>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<v-select>\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple :limit=\"2\">\n  <v-option value=\"Apple\"></v-option>\n  <v-option value=\"Banana\"></v-option>\n  <v-option value=\"Cherry\"></v-option>\n  <v-option value=\"Orange\"></v-option>\n  <v-option value=\"Grape\"></v-option>\n</v-select>\n<hr>\n<v-select multiple>\n  <v-option value=\"Star\"><span slot=\"span\" class=\"glyphicon glyphicon-star\"></span> Star</v-option>\n  <v-option value=\"Heart\"><span slot=\"span\" class=\"glyphicon glyphicon-heart\"></span> Heart</v-option>\n  <v-option value=\"Film\"><span slot=\"span\" class=\"glyphicon glyphicon-film\"></span> Film</v-option>\n  <v-option value=\"Inbox\"><span slot=\"span\" class=\"glyphicon glyphicon-inbox\"></span> Inbox</v-option>\n</v-select>\n\n<v-select :value.sync=\"arr\" :options=\"fruitOptions\" :search=\"true\">\n</v-select>\nfruitOptions = [\n  {value:'apple', label:'Apple'},\n  {value:'banana', label:'Banana'},\n  {value:'cherry', label:'Cherry'},\n  {value:'orange', label:'Orange'},\n  {value:'grape', label:'Grape'},\n]\n\n    </script></code></pre>\n    <h2>Select Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value</td>\n          <td><code>Array</code></td>\n          <td><code>[]</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td>Nothing Selected</td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>multiple</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>1024</code></td>\n          <td>Limit the number of elements you are allowed to select.</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>";

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(292)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(303)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tabsDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tabsDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(293);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(298);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="tabs">
	//     <h1 class="page-header"><a href="#tabs" class="anchor">Tabs</a></h1>
	//     <div class="bs-example">
	//       <tabs>
	//         <tab header="one">
	//           <p>
	//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//             consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
	//              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	//           </p>
	//         </tab>
	//         <tab header="two">
	//            <p>
	//               Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
	//            </p>
	//         </tab>
	//         <tab header="three" disabled>
	//           ...
	//         </tab>
	//       </tabs>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <tabs>
	//   <tab header="one">
	//     ...
	//   </tab>
	//   <tab header="two">
	//     ...
	//   </tab>
	//   <tab header="three" disabled>
	//     ...
	//   </tab>
	// </tabs>
	// </script></code></pre>
	//   <h2>Tab Options (NOT TABS)</h2>
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
	
	// <script>
	exports.default = {
	  components: {
	    tabs: _Tabset2.default,
	    tab: _Tab2.default
	  }
	};
	// </script>

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(294)
	module.exports = __webpack_require__(296)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(297)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-149b3b9e&file=Tabset.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-149b3b9e&file=Tabset.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(295);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-149b3b9e&file=Tabset.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-149b3b9e&file=Tabset.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-tabs[_v-149b3b9e] {\n    margin-bottom: 15px\n  }", ""]);
	
	// exports


/***/ },
/* 296 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <!-- Nav tabs -->
	//      <ul class="nav nav-tabs" role="tablist">
	//             <li
	//                 v-for="r in renderData"
	//                 v-bind:class="{
	//                   'active': ($index === activeIndex),
	//                   'disabled': r.disabled
	//                 }"
	//                 @click.prevent="handleTabListClick($index, r)"
	//                 :disabled="r.disabled"
	//             >
	//                 <a href="#">{{r.header}}</a>
	//             </li>
	//      </ul>
	
	//      <!-- Tab panes -->
	//      <div class="tab-content" v-el:tabContent>
	//         <slot></slot>
	//      </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    effect: {
	      type: String,
	      default: 'fadein'
	    }
	  },
	  data: function data() {
	    return {
	      renderData: [],
	      activeIndex: 0
	    };
	  },
	
	  methods: {
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) this.activeIndex = index;
	    }
	  }
	};
	// </script>

	// <style scoped>
	//   .nav-tabs {
	//     margin-bottom: 15px
	//   }
	// </style>

/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = "<div _v-149b3b9e=\"\">\n    <!-- Nav tabs -->\n     <ul class=\"nav nav-tabs\" role=\"tablist\" _v-149b3b9e=\"\">\n            <li v-for=\"r in renderData\" v-bind:class=\"{\n                  'active': ($index === activeIndex),\n                  'disabled': r.disabled\n                }\" @click.prevent=\"handleTabListClick($index, r)\" :disabled=\"r.disabled\" _v-149b3b9e=\"\">\n                <a href=\"#\" _v-149b3b9e=\"\">{{r.header}}</a>\n            </li>\n     </ul>\n\n     <!-- Tab panes -->\n     <div class=\"tab-content\" v-el:tabcontent=\"\" _v-149b3b9e=\"\">\n        <slot _v-149b3b9e=\"\"></slot>\n     </div>\n  </div>";

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(299)
	module.exports = __webpack_require__(301)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(302)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-300001c1&file=Tab.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/template-rewriter.js?id=_v-300001c1&file=Tab.vue!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(300);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-300001c1&file=Tab.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-300001c1&file=Tab.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tab.vue");
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

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".tab-content > .tab-pane[_v-300001c1] {\n    display: block;\n  }", ""]);
	
	// exports


/***/ },
/* 301 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div role="tabpanel" class="tab-pane"
	//       v-bind:class="{hide:!show}"
	//       v-show="show"
	//       :transition="transition"
	//   >
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
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
	      return this.$parent.activeIndex == this.index;
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

	// <style scoped>
	//   .tab-content > .tab-pane {
	//     display: block;
	//   }
	// </style>

/***/ },
/* 302 */
/***/ function(module, exports) {

	module.exports = "<div role=\"tabpanel\" class=\"tab-pane\" v-bind:class=\"{hide:!show}\" v-show=\"show\" :transition=\"transition\" _v-300001c1=\"\">\n    <slot _v-300001c1=\"\"></slot>\n  </div>";

/***/ },
/* 303 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tabs\">\n    <h1 class=\"page-header\"><a href=\"#tabs\" class=\"anchor\">Tabs</a></h1>\n    <div class=\"bs-example\">\n      <tabs>\n        <tab header=\"one\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse\n             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n        </tab>\n        <tab header=\"two\">\n           <p>\n              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.\n           </p>\n        </tab>\n        <tab header=\"three\" disabled>\n          ...\n        </tab>\n      </tabs>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tabs>\n  <tab header=\"one\">\n    ...\n  </tab>\n  <tab header=\"two\">\n    ...\n  </tab>\n  <tab header=\"three\" disabled>\n    ...\n  </tab>\n</tabs>\n</script></code></pre>\n  <h2>Tab Options (NOT TABS)</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>header</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td>Heading text of the tab.</td>\n      </tr>\n      <tr>\n        <td>disabled</td>\n        <td><code>Boolean</code></td>\n        <td>false</td>\n        <td>Whether tab is clickable and can be activated. </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(305)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(306)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./tooltipDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./tooltipDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(187);
	
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
	// <template>
	//   <div class="bs-docs-section" id="tooltip">
	//     <h1 class="page-header"><a href="#tooltip" class="anchor">Tooltip</a></h1>
	//     <div class="bs-example">
	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="top">
	//         <button class="btn btn-default ">tooltip on top</button>
	//       </tooltip>
	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="left">
	//         <button class="btn btn-default ">tooltip on left</button>
	//       </tooltip>
	//       <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="right">
	//         <button class="btn btn-default ">tooltip on right</button>
	//       </tooltip>
	//       <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//         <button class="btn btn-default ">tooltip on bottom</button>
	//       </tooltip>
	//       <hr>
	//       <h4>Triger</h4>
	//       <p>
	//         <tooltip trigger="click"
	//         effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">
	//             <button class="btn btn-default ">Click</button>
	//         </tooltip>
	//       </p>
	//       <tooltip effect="scale"
	//     content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
	//         <input type="text" class="form-control" placeholder="Focus">
	//       </tooltip>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <tooltip
	//   effect="scale"
	//   placement="bottom"
	//   content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
	//   <button class="btn btn-default ">tooltip on bottom</button>
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
	//         <td><code>String</code>, one of <code>hover</code>
	//         <code>focus</code>
	//         <code>hover</code></td>
	//         <td><code>click</code></td>
	//         <td>How the tooltip is triggered.</td>
	//       </tr>
	//       <tr>
	//         <td>effect</td>
	//         <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>
	//         <td><code>scale</code></td>
	//         <td></td>
	//       <tr>
	//         <td>content</td>
	//         <td><code>String</code></td>
	//         <td></td>
	//         <td></td>
	//       </tr>
	//         <td>placement</td>
	//         <td><code>String</code>, one of <code>top</code>
	//         <code>left</code>
	//         <code>right</code>
	//         <code>bottom</code></td>
	//         <td></td>
	//         <td>How to position the tooltip.</td>
	//       </tr>
	//     </tbody>
	//   </table>
	//   </div>
	// </template>

	// <script>

/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"tooltip\">\n    <h1 class=\"page-header\"><a href=\"#tooltip\" class=\"anchor\">Tooltip</a></h1>\n    <div class=\"bs-example\">\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\">\n        <button class=\"btn btn-default \">tooltip on top</button>\n      </tooltip>\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"left\">\n        <button class=\"btn btn-default \">tooltip on left</button>\n      </tooltip>\n      <tooltip  :header=\"true\" content=\"Lorem ipsum dolor sit amet\" placement=\"right\">\n        <button class=\"btn btn-default \">tooltip on right</button>\n      </tooltip>\n      <tooltip  placement=\"bottom\" content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n        <button class=\"btn btn-default \">tooltip on bottom</button>\n      </tooltip>\n      <hr>\n      <h4>Triger</h4>\n      <p>\n        <tooltip trigger=\"click\"\n        effect=\"scale\" content=\"Lorem ipsum dolor sit amet\" placement=\"top\" trigger=\"hover\">\n            <button class=\"btn btn-default \">Click</button>\n        </tooltip>\n      </p>\n      <tooltip effect=\"scale\"\n    content=\"Lorem ipsum dolor sit amet\" placement=\"bottom\" trigger=\"focus\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Focus\">\n      </tooltip>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<tooltip\n  effect=\"scale\"\n  placement=\"bottom\"\n  content=\"Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod\">\n  <button class=\"btn btn-default \">tooltip on bottom</button>\n</tooltip>\n</script></code></pre>\n  <h2>Options</h2>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>trigger</td>\n        <td><code>String</code>, one of <code>hover</code>\n        <code>focus</code>\n        <code>hover</code></td>\n        <td><code>click</code></td>\n        <td>How the tooltip is triggered.</td>\n      </tr>\n      <tr>\n        <td>effect</td>\n        <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>\n        <td><code>scale</code></td>\n        <td></td>\n      <tr>\n        <td>content</td>\n        <td><code>String</code></td>\n        <td></td>\n        <td></td>\n      </tr>\n        <td>placement</td>\n        <td><code>String</code>, one of <code>top</code>\n        <code>left</code>\n        <code>right</code>\n        <code>bottom</code></td>\n        <td></td>\n        <td>How to position the tooltip.</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>";

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(308)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(315)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./typeaheadDocs.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./typeaheadDocs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./typeaheadDocs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Typeahead = __webpack_require__(309);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Tooltip = __webpack_require__(187);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="bs-docs-section" id="typeahead">
	//     <h1 class="page-header"><a href="#typeahead" class="anchor">Typeahead</a></h1>
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
	
	// <h4>Asynchronous results</h4>
	//   <typeahead
	//     placeholder="Address, async via maps.googleapis.com"
	//     key="results"
	//     src="https://maps.googleapis.com/maps/api/geocode/json?address="
	//     template-name="async"
	//     :template="asyncTemplate"
	//     :on-hit="googleCallback">
	// </typeahead>
	
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

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(310)
	module.exports = __webpack_require__(312)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(314)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(311);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e85fd61a&file=Typeahead.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e85fd61a&file=Typeahead.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-menu > li > a {\n  cursor: pointer;\n}", ""]);
	
	// exports


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callAjax = __webpack_require__(313);
	
	var _callAjax2 = _interopRequireDefault(_callAjax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      var _this = this;
	
	      if (this.data) {
	        return this.data.filter(function (value) {
	          value = _this.matchCase ? value : value.toLowerCase();
	          return value.indexOf(_this.query) !== -1;
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
	      var _this2 = this;
	
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
	          _this2.items = data[_this2.key].slice(0, _this2.limit);
	          _this2.showDropdown = _this2.items.length ? true : false;
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
	      console.log("e", e, "e.targetVm", e.targetVM);
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
	}; // <template>
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
	
	// </template>
	
	// <script>
	
	exports.default = typeahead;
	// </script>

	// <style>
	// .dropdown-menu > li > a {
	//   cursor: pointer;
	// }
	// </style>

/***/ },
/* 313 */
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
/* 314 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\"\n  v-bind:class=\"{'open':showDropdown}\"\n  >\n  <input type=\"text\" class=\"form-control\"\n    :placeholder=\"placeholder\"\n    autocomplete=\"off\"\n    v-model=\"query\"\n    @input=\"update\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n    @blur=\"showDropdown = false\"\n  />\n  <ul class=\"dropdown-menu\" v-el:dropdown>\n    <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        <partial :name=\"templateName\"></partial>\n      </a>\n    </li>\n  </ul>\n</div>";

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = "<div class=\"bs-docs-section\" id=\"typeahead\">\n    <h1 class=\"page-header\"><a href=\"#typeahead\" class=\"anchor\">Typeahead</a></h1>\n    <div class=\"bs-example\">\n      <h4>\n        Static arrays\n      </h4>\n      <typeahead\n        :data=\"USstate\"\n        placeholder=\"USA states\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Asynchronous results\n      <tooltip trigger=\"click\" content=\"The suggestions via a Google Map API, are you behind a FireWall?\" placement=\"top\">\n        <small style=\"cursor:pointer\">(not working?)</small>\n      </tooltip>\n      </h4>\n      <typeahead\n        placeholder=\"CCCAddress, async via maps.googleapis.com\"\n        key=\"results\"\n        async=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n        template-name=\"async\"\n        :template=\"asyncTemplate\"\n        :on-hit=\"googleCallback\"\n      ></typeahead>\n      <hr>\n      <h4>\n      Custom templates for results\n      </h4>\n      <typeahead\n        placeholder=\"Github users, async via api.github.com\"\n        key=\"items\"\n        async=\"https://api.github.com/search/users?q=\"\n        template-name=\"github\"\n        :template=\"githubTemplate\"\n        :on-hit=\"githubCallback\"\n      ></typeahead>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<h4>Static arrays</h4>\n<typeahead\n  :data=\"USstate\"\n  placeholder=\"USA states\">\n</typeahead>\n\n<h4>Asynchronous results</h4>\n  <typeahead\n    placeholder=\"Address, async via maps.googleapis.com\"\n    key=\"results\"\n    src=\"https://maps.googleapis.com/maps/api/geocode/json?address=\"\n    template-name=\"async\"\n    :template=\"asyncTemplate\"\n    :on-hit=\"googleCallback\">\n</typeahead>\n\n<h4>Custom templates for results</h4>\n  <typeahead\n    placeholder=\"Github users, async via api.github.com\"\n    key=\"items\"\n    src=\"https://api.github.com/search/users?q=\"\n    template-name=\"typeahead-github-template\"\n    :template=\"githubTemplate\"\n    :on-hit=\"githubCallback\">\n</typeahead>\n  </script></code></pre>\n    <pre><code class=\"language-javascript\"><script type=\"language-javascript\">\nnew Vue {\n  components: {\n    typeahead\n  },\n  data() {\n    return {\n      USstate: ['Alabama', 'Alaska', 'Arizona',...],\n      asynchronous: '{{formatted_address}}',\n      customTemplate: '<img width=\"18px\" height=\"18px\" v-attr=\"src:avatar_url\"/>' +\n      '<span>{{login}}</span>'\n    }\n  },\n  methods: {\n    googleCallback(items, targetVM) {\n      const that = targetVM;\n      that.reset()\n      that.query = items.formatted_address\n    },\n    githubCallback(items) {\n      window.open(items.html_url, '_blank')\n    }\n  }\n}\n    </script></code></pre>\n\n    <h2>Options</h2>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>data</td>\n          <td><code>Array</code></td>\n          <td></td>\n          <td>The local data source for suggestions. Expected to be a primitive array.</td>\n        </tr>\n        <tr>\n          <td>async</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>\n        </tr>\n        <tr>\n          <td>limit</td>\n          <td><code>Number</code></td>\n          <td><code>8</code></td>\n          <td>The max number of suggestions to be displayed.</td>\n        </tr>\n        <tr>\n          <td>key</td>\n          <td><code>String</code></td>\n          <td></td>\n          <td>The remote JSON key you want to render.</td>\n        </tr>\n        <tr>\n          <td>match-case</td>\n          <td><code>Boolean</code></td>\n          <td><code>false</code></td>\n          <td>Case sensitive for suggestions.</td>\n        </tr>\n        <tr>\n          <td>on-hit</td>\n          <td><code>Function</code></td>\n          <td></td>\n          <td>A callback function when you click or hit return on an item.</td>\n        </tr>\n        <tr>\n          <td>template</td>\n          <td><code>String</code></td>\n          <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>\n          <td>Used to render suggestion.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>";

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(317);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./docs.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap Docs (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under the Creative Commons Attribution 3.0 Unported License. For\n * details, see http://creativecommons.org/licenses/by/3.0/.\n */\n\n\n/*\n * Bootstrap Documentation\n * Special styles for presenting Bootstrap's documentation and code examples.\n *\n * Table of contents:\n *\n * Scaffolding\n * Main navigation\n * Footer\n * Social buttons\n * Homepage\n * Page headers\n * Old docs callout\n * Ads\n * Side navigation\n * Docs sections\n * Callouts\n * Grid styles\n * Examples\n * Code snippets (highlight)\n * Responsive tests\n * Glyphicons\n * Customizer\n * MenuItem\n * Miscellaneous\n */\n\n\n/*\n * Scaffolding\n *\n * Update the basics of our documents to prep for docs content.\n */\n\nbody {\n  position: relative; /* For scrollspy */\n}\n\n/* Keep code small in tables on account of limited space */\n.table code {\n  font-size: 13px;\n  font-weight: normal;\n}\n\n/* Outline button for use within the docs */\n.btn-outline {\n  color: #563d7c;\n  background-color: transparent;\n  border-color: #563d7c;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n/* Inverted outline button (white on dark) */\n.btn-outline-inverse {\n  color: #fff;\n  background-color: transparent;\n  border-color: #cdbfe3;\n}\n.btn-outline-inverse:hover,\n.btn-outline-inverse:focus,\n.btn-outline-inverse:active {\n  color: #563d7c;\n  text-shadow: none;\n  background-color: #fff;\n  border-color: #fff;\n}\n\n/* Bootstrap \"B\" icon */\n.bs-docs-booticon {\n  display: block;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  cursor: default;\n  background-color: #563d7c;\n  border-radius: 15%;\n}\n.bs-docs-booticon-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  line-height: 28px;\n}\n.bs-docs-booticon-lg {\n  width: 144px;\n  height: 144px;\n  font-size: 108px;\n  line-height: 140px;\n}\n.bs-docs-booticon-inverse {\n  color: #563d7c;\n  background-color: #fff;\n}\n.bs-docs-booticon-outline {\n  background-color: transparent;\n  border: 1px solid #cdbfe3;\n}\n\n\n/*\n * Main navigation\n *\n * Turn the `.navbar` at the top of the docs purple.\n */\n\n.bs-docs-nav {\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 0;\n}\n.bs-home-nav .bs-nav-b {\n  display: none;\n}\n.bs-docs-nav .navbar-brand,\n.bs-docs-nav .navbar-nav > li > a {\n  font-weight: 500;\n  color: #563d7c;\n}\n.bs-docs-nav .navbar-nav > li > a:hover,\n.bs-docs-nav .navbar-nav > .active > a,\n.bs-docs-nav .navbar-nav > .active > a:hover {\n  color: #463265;\n  background-color: #f9f9f9;\n}\n.bs-docs-nav .navbar-toggle .icon-bar {\n  background-color: #563d7c;\n}\n.bs-docs-nav .navbar-header .navbar-toggle {\n  border-color: #fff;\n}\n.bs-docs-nav .navbar-header .navbar-toggle:hover,\n.bs-docs-nav .navbar-header .navbar-toggle:focus {\n  background-color: #f9f9f9;\n  border-color: #f9f9f9;\n}\n\n\n/*\n * Footer\n *\n * Separated section of content at the bottom of all pages, save the homepage.\n */\n\n.bs-docs-footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 100px;\n  color: #777;\n  text-align: center;\n  border-top: 1px solid #e5e5e5;\n}\n.bs-docs-footer-links {\n  padding-left: 0;\n  margin-top: 20px;\n  color: #999;\n}\n.bs-docs-footer-links li {\n  display: inline;\n  padding: 0 2px;\n}\n.bs-docs-footer-links li:first-child {\n  padding-left: 0;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-footer p {\n    margin-bottom: 0;\n  }\n}\n\n\n/*\n * Social buttons\n *\n * Twitter and GitHub social action buttons (for homepage and footer).\n */\n\n.bs-docs-social {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.bs-docs-social-buttons {\n  display: inline-block;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.bs-docs-social-buttons li {\n  display: inline-block;\n  padding: 5px 8px;\n  line-height: 1;\n}\n.bs-docs-social-buttons .twitter-follow-button {\n  width: 225px !important;\n}\n.bs-docs-social-buttons .twitter-share-button {\n  width: 98px !important;\n}\n/* Style the GitHub buttons via CSS instead of inline attributes */\n.github-btn {\n  overflow: hidden;\n  border: 0;\n}\n\n\n/*\n * Homepage\n *\n * Tweaks to the custom homepage and the masthead (main jumbotron).\n */\n\n/* Share masthead with page headers */\n.bs-docs-masthead,\n.bs-docs-header {\n  position: relative;\n  padding: 30px 15px;\n  color: #cdbfe3;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,.1);\n  background-color: #6f5499;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#563d7c), to(#6f5499));\n  background-image: -webkit-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:      -o-linear-gradient(top, #563d7c 0%, #6f5499 100%);\n  background-image:         linear-gradient(to bottom, #563d7c 0%, #6f5499 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#563d7c', endColorstr='#6F5499', GradientType=0);\n  background-repeat: repeat-x;\n}\n\n/* Masthead (headings and download button) */\n.bs-docs-masthead .bs-docs-booticon {\n  margin: 0 auto 30px;\n}\n.bs-docs-masthead h1 {\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n}\n.bs-docs-masthead .lead {\n  margin: 0 auto 30px;\n  font-size: 20px;\n  color: #fff;\n}\n.bs-docs-masthead .version {\n  margin-top: -15px;\n  margin-bottom: 30px;\n  color: #9783b9;\n}\n.bs-docs-masthead .btn {\n  width: 100%;\n  padding: 15px 30px;\n  font-size: 20px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-masthead .btn {\n    width: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .bs-docs-masthead h1 {\n    font-size: 60px;\n  }\n  .bs-docs-masthead .lead {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-masthead .lead {\n    width: 80%;\n    font-size: 30px;\n  }\n}\n\n\n/*\n * Page headers\n *\n * Jumbotron-esque headers at the top of every page that's not the homepage.\n */\n\n/* Page headers */\n.bs-docs-header {\n  margin-bottom: 40px;\n  font-size: 20px;\n}\n.bs-docs-header h1 {\n  margin-top: 0;\n  color: #fff;\n}\n.bs-docs-header p {\n  margin-bottom: 0;\n  font-weight: 300;\n  line-height: 1.4;\n}\n.bs-docs-header .container {\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  .bs-docs-header {\n    padding-top: 60px;\n    padding-bottom: 60px;\n    font-size: 24px;\n    text-align: left;\n  }\n  .bs-docs-header h1 {\n    font-size: 60px;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .bs-docs-header h1,\n  .bs-docs-header p {\n    margin-right: 380px;\n  }\n}\n\n\n/*\n * Carbon ads\n *\n * Single display ad that shows on all pages (except homepage) in page headers.\n * The hella `!important` is required for any pre-set property.\n */\n\n.carbonad {\n  width: auto !important;\n  height: auto !important;\n  padding: 20px !important;\n  margin: 30px -30px -31px !important;\n  overflow: hidden; /* clearfix */\n  font-size: 13px !important;\n  line-height: 16px !important;\n  text-align: left;\n  background: transparent !important;\n  border: solid #866ab3 !important;\n  border-width: 1px 0 !important;\n}\n.carbonad-img {\n  margin: 0 !important;\n}\n.carbonad-text,\n.carbonad-tag {\n  display: block !important;\n  float: none !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: 145px !important;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n}\n.carbonad-text {\n  padding-top: 0 !important;\n}\n.carbonad-tag {\n  color: inherit !important;\n  text-align: left !important;\n}\n.carbonad-text a,\n.carbonad-tag a {\n  color: #fff !important;\n}\n.carbonad #azcarbon > img {\n  display: none; /* hide what I assume are tracking images */\n}\n\n@media (min-width: 480px) {\n  .carbonad {\n    width: 330px !important;\n    margin: 20px auto !important;\n    border-width: 1px !important;\n    border-radius: 4px;\n  }\n  .bs-docs-masthead .carbonad {\n    margin: 50px auto 0 !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .carbonad {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .carbonad {\n    position: absolute;\n    top: 0;\n    right: 15px; /* 15px instead of 0 since box-sizing */\n    width: 330px !important;\n    padding: 15px !important;\n    margin: 0 !important;\n  }\n  .bs-docs-masthead .carbonad {\n    position: static;\n  }\n}\n\n\n/*\n * Homepage featurettes\n *\n * Reasons to use Bootstrap, entries from the Expo, and more.\n */\n\n.bs-docs-featurette {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #555;\n  text-align: center;\n  background-color: #fff;\n  border-bottom: 1px solid #e5e5e5;\n}\n.bs-docs-featurette + .bs-docs-footer {\n  margin-top: 0;\n  border-top: 0;\n}\n\n.bs-docs-featurette-title {\n  margin-bottom: 5px;\n  font-size: 30px;\n  font-weight: normal;\n  color: #333;\n}\n.half-rule {\n  width: 100px;\n  margin: 40px auto;\n}\n.bs-docs-featurette h3 {\n  margin-bottom: 5px;\n  font-weight: normal;\n  color: #333;\n}\n.bs-docs-featurette-img {\n  display: block;\n  margin-bottom: 20px;\n  color: #333;\n}\n.bs-docs-featurette-img:hover {\n  color: #428bca;\n  text-decoration: none;\n}\n.bs-docs-featurette-img img {\n  display: block;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 480px) {\n  .bs-docs-featurette .img-responsive {\n    margin-top: 30px;\n  }\n}\n@media (min-width: 768px) {\n  .bs-docs-featurette {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n  .bs-docs-featurette-title {\n    font-size: 40px;\n  }\n  .bs-docs-featurette .lead {\n    max-width: 80%;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .bs-docs-featured-sites .col-sm-3:first-child img {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .bs-docs-featured-sites .col-sm-3:last-child img {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n\n  .bs-docs-featurette .img-responsive {\n    margin-top: 0;\n  }\n}\n\n/* Featured sites */\n.bs-docs-featured-sites {\n  margin-right: -1px;\n  margin-left: -1px;\n}\n.bs-docs-featured-sites .col-sm-3 {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n.bs-docs-featured-sites .img-responsive {\n  margin-bottom: 15px;\n}\n@media (min-width: 480px) {\n  .bs-docs-featured-sites .img-responsive {\n    margin-bottom: 0;\n  }\n}\n\n/* Example thumbnails */\n@media (max-width: 480px) {\n  .bs-examples {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n  .bs-examples > [class^=\"col-\"] {\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n}\n\n\n/*\n * Side navigation\n *\n * Scrollspy and affixed enhanced navigation to highlight sections and secondary\n * sections of docs content.\n */\n\n/* By default it's not affixed in mobile views, so undo that */\n.bs-docs-sidebar.affix {\n  position: static;\n}\n@media (min-width: 768px) {\n  .bs-docs-sidebar {\n    padding-left: 20px;\n  }\n}\n\n/* First level of nav */\n.bs-docs-sidenav {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n/* All levels of nav */\n.bs-docs-sidebar .nav > li > a {\n  display: block;\n  padding: 4px 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #999;\n}\n.bs-docs-sidebar .nav > li > a:hover,\n.bs-docs-sidebar .nav > li > a:focus {\n  padding-left: 19px;\n  color: #1D976C;\n  text-decoration: none;\n  background-color: transparent;\n  border-left: 1px solid #1D976C;\n}\n.bs-docs-sidebar .nav > .active > a,\n.bs-docs-sidebar .nav > .active:hover > a,\n.bs-docs-sidebar .nav > .active:focus > a {\n  padding-left: 18px;\n  font-weight: bold;\n  color: #1D976C;\n  background-color: transparent;\n  border-left: 2px solid #1D976C;\n}\n\n/* Nav: second level (shown on .active) */\n.bs-docs-sidebar .nav .nav {\n  display: none; /* Hide by default, but at >768px, show it */\n  padding-bottom: 10px;\n}\n.bs-docs-sidebar .nav .nav > li > a {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 30px;\n  font-size: 12px;\n  font-weight: normal;\n}\n.bs-docs-sidebar .nav .nav > li > a:hover,\n.bs-docs-sidebar .nav .nav > li > a:focus {\n  padding-left: 29px;\n}\n.bs-docs-sidebar .nav .nav > .active > a,\n.bs-docs-sidebar .nav .nav > .active:hover > a,\n.bs-docs-sidebar .nav .nav > .active:focus > a {\n  padding-left: 28px;\n  font-weight: 500;\n}\n\n/* Back to top (hidden on mobile) */\n.back-to-top,\n.bs-docs-theme-toggle {\n  display: none;\n  padding: 4px 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #999;\n}\n.back-to-top:hover,\n.bs-docs-theme-toggle:hover {\n  color: #563d7c;\n  text-decoration: none;\n}\n.bs-docs-theme-toggle {\n  margin-top: 0;\n}\n\n@media (min-width: 768px) {\n  .back-to-top,\n  .bs-docs-theme-toggle {\n    display: block;\n  }\n}\n\n/* Show and affix the side nav when space allows it */\n@media (min-width: 992px) {\n  .bs-docs-sidebar .nav > .active > ul {\n    display: block;\n  }\n  /* Widen the fixed sidebar */\n  .bs-docs-sidebar.affix,\n  .bs-docs-sidebar.affix-bottom {\n    width: 213px;\n  }\n  .bs-docs-sidebar.affix {\n    position: fixed; /* Undo the static from mobile first approach */\n    top: 20px;\n  }\n  .bs-docs-sidebar.affix-bottom {\n    position: absolute; /* Undo the static from mobile first approach */\n  }\n  .bs-docs-sidebar.affix-bottom .bs-docs-sidenav,\n  .bs-docs-sidebar.affix .bs-docs-sidenav {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1200px) {\n  /* Widen the fixed sidebar again */\n  .bs-docs-sidebar.affix-bottom,\n  .bs-docs-sidebar.affix {\n    width: 263px;\n  }\n}\n\n\n/*\n * Docs sections\n *\n * Content blocks for each component or feature.\n */\n\n/* Space things out */\n.bs-docs-section {\n  margin-bottom: 60px;\n}\n.bs-docs-section:last-child {\n  margin-bottom: 0;\n}\n\nh1[id] {\n  padding-top: 20px;\n  margin-top: 0;\n}\n\n\n/*\n * Callouts\n *\n * Not quite alerts, but custom and helpful notes for folks reading the docs.\n * Requires a base and modifier class.\n */\n\n/* Common styles for all types */\n.bs-callout {\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #eee;\n  border-left-width: 5px;\n  border-radius: 3px;\n}\n.bs-callout h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n  margin-bottom: 0;\n}\n.bs-callout code {\n  border-radius: 3px;\n}\n\n/* Tighten up space between multiple callouts */\n.bs-callout + .bs-callout {\n  margin-top: -5px;\n}\n\n/* Variations */\n.bs-callout-danger {\n  border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n  color: #d9534f;\n}\n.bs-callout-warning {\n  border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n  color: #f0ad4e;\n}\n.bs-callout-info {\n  border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n  color: #5bc0de;\n}\n\n\n/*\n * Color swatches\n *\n * Color swatches and associated values for our grayscale and brand colors.\n */\n\n.color-swatches {\n  margin: 0 -5px;\n  overflow: hidden; /* clearfix */\n}\n.color-swatch {\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin: 0 5px;\n  border-radius: 3px;\n}\n\n@media (min-width: 768px) {\n  .color-swatch {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n/* Framework colors */\n.color-swatches .gray-darker {\n  background-color: #222;\n}\n.color-swatches .gray-dark {\n  background-color: #333;\n}\n.color-swatches .gray {\n  background-color: #555;\n}\n.color-swatches .gray-light {\n  background-color: #999;\n}\n.color-swatches .gray-lighter {\n  background-color: #eee;\n}\n.color-swatches .brand-primary {\n  background-color: #428bca;\n}\n.color-swatches .brand-success {\n  background-color: #5cb85c;\n}\n.color-swatches .brand-warning {\n  background-color: #f0ad4e;\n}\n.color-swatches .brand-danger {\n  background-color: #d9534f;\n}\n.color-swatches .brand-info {\n  background-color: #5bc0de;\n}\n\n/* Docs colors */\n.color-swatches .bs-purple {\n  background-color: #563d7c;\n}\n.color-swatches .bs-purple-light {\n  background-color: #c7bfd3;\n}\n.color-swatches .bs-purple-lighter {\n  background-color: #e5e1ea;\n}\n.color-swatches .bs-gray {\n  background-color: #f9f9f9;\n}\n\n\n/*\n * Team members\n *\n * Avatars, names, and usernames for core team.\n */\n\n.bs-team .team-member {\n  line-height: 32px;\n  color: #555;\n}\n.bs-team .team-member:hover {\n  color: #333;\n  text-decoration: none;\n}\n.bs-team .github-btn {\n  float: right;\n  width: 180px;\n  height: 20px;\n  margin-top: 6px;\n}\n.bs-team img {\n  float: left;\n  width: 32px;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n\n\n/*\n * Grid examples\n *\n * Highlight the grid columns within the docs so folks can see their padding,\n * alignment, sizing, etc.\n */\n\n.show-grid {\n  margin-bottom: 15px;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #eee;\n  background-color: rgba(86,61,124,.15);\n  border: 1px solid #ddd;\n  border: 1px solid rgba(86,61,124,.2);\n}\n\n\n/*\n * Examples\n *\n * Isolated sections of example content for each component or feature. Usually\n * followed by a code snippet.\n */\n\n.bs-example {\n  position: relative;\n  padding: 45px 15px 15px;\n  margin: 0 -15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n          box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n}\n/* Echo out a label for the example */\n.bs-example:after {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #959595;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  content: \"Example\";\n}\n\n/* Tweak display of the code snippets when following an example */\n.bs-example + .highlight {\n  margin: -15px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n\n/* Make the examples and snippets not full-width */\n@media (min-width: 768px) {\n  .bs-example {\n    margin-right: 0;\n    margin-left: 0;\n    background-color: #fff;\n    border-color: #ddd;\n    border-width: 1px;\n    border-radius: 4px 4px 0 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .bs-example + .highlight {\n    margin-top: -16px;\n    margin-right: 0;\n    margin-left: 0;\n    border-width: 1px;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n}\n\n/* Undo width of container */\n.bs-example .container {\n  width: auto;\n}\n\n/* Tweak content of examples for optimum awesome */\n.bs-example > p:last-child,\n.bs-example > ul:last-child,\n.bs-example > ol:last-child,\n.bs-example > blockquote:last-child,\n.bs-example > .form-control:last-child,\n.bs-example > .table:last-child,\n.bs-example > .navbar:last-child,\n.bs-example > .jumbotron:last-child,\n.bs-example > .alert:last-child,\n.bs-example > .panel:last-child,\n.bs-example > .list-group:last-child,\n.bs-example > .well:last-child,\n.bs-example > .progress:last-child,\n.bs-example > .table-responsive:last-child > .table {\n  margin-bottom: 0;\n}\n.bs-example > p > .close {\n  float: none;\n}\n\n/* Typography */\n.bs-example-type .table .type-info {\n  color: #999;\n  vertical-align: middle;\n}\n.bs-example-type .table td {\n  padding: 15px 0;\n  border-color: #eee;\n}\n.bs-example-type .table tr:first-child td {\n  border-top: 0;\n}\n.bs-example-type h1,\n.bs-example-type h2,\n.bs-example-type h3,\n.bs-example-type h4,\n.bs-example-type h5,\n.bs-example-type h6 {\n  margin: 0;\n}\n\n/* Contextual background colors */\n.bs-example-bg-classes p {\n  padding: 15px;\n}\n\n/* Images */\n.bs-example > .img-circle,\n.bs-example > .img-rounded,\n.bs-example > .img-thumbnail {\n  margin: 5px;\n}\n\n/* Tables */\n.bs-example > .table-responsive > .table {\n  background-color: #fff;\n}\n\n/* Buttons */\n.bs-example > .btn,\n.bs-example > .btn-group {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.bs-example > .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n/* Forms */\n.bs-example-control-sizing select,\n.bs-example-control-sizing input[type=\"text\"] + input[type=\"text\"] {\n  margin-top: 10px;\n}\n.bs-example-form .input-group {\n  margin-bottom: 10px;\n}\n.bs-example > textarea.form-control {\n  resize: vertical;\n}\n\n/* List groups */\n.bs-example > .list-group {\n  max-width: 400px;\n}\n\n/* Navbars */\n.bs-example .navbar:last-child {\n  margin-bottom: 0;\n}\n.bs-navbar-top-example,\n.bs-navbar-bottom-example {\n  z-index: 1;\n  padding: 0;\n  overflow: hidden; /* cut the drop shadows off */\n}\n.bs-navbar-top-example .navbar-header,\n.bs-navbar-bottom-example .navbar-header {\n  margin-left: 0;\n}\n.bs-navbar-top-example .navbar-fixed-top,\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0;\n}\n.bs-navbar-top-example {\n  padding-bottom: 45px;\n}\n.bs-navbar-top-example:after {\n  top: auto;\n  bottom: 15px;\n}\n.bs-navbar-top-example .navbar-fixed-top {\n  top: -1px;\n}\n.bs-navbar-bottom-example {\n  padding-top: 45px;\n}\n.bs-navbar-bottom-example .navbar-fixed-bottom {\n  bottom: -1px;\n}\n.bs-navbar-bottom-example .navbar {\n  margin-bottom: 0;\n}\n@media (min-width: 768px) {\n  .bs-navbar-top-example .navbar-fixed-top,\n  .bs-navbar-bottom-example .navbar-fixed-bottom {\n    position: absolute;\n  }\n}\n\n/* Pagination */\n.bs-example .pagination {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n/* Pager */\n.bs-example > .pager {\n  margin-top: 0;\n}\n\n/* Example modals */\n.bs-example-modal {\n  background-color: #f5f5f5;\n}\n.bs-example-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  z-index: 1;\n  display: block;\n}\n.bs-example-modal .modal-dialog {\n  left: auto;\n  margin-right: auto;\n  margin-left: auto;\n}\n.custom-modal {\n  width: 90%;\n}\n\n/* Example dropdowns */\n.bs-example > .dropdown > .dropdown-toggle {\n  float: left;\n}\n.bs-example > .dropdown > .dropdown-menu {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n/* Example tabbable tabs */\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px;\n}\n\n/* Tooltips */\n.bs-example-tooltips {\n  text-align: center;\n}\n.bs-example-tooltips > .btn {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/* Popovers */\n.bs-example-popover {\n  padding-bottom: 24px;\n  background-color: #f9f9f9;\n}\n.bs-example-popover .popover {\n  position: relative;\n  display: block;\n  float: left;\n  width: 260px;\n  margin: 20px;\n}\n\n/* Scrollspy demo on fixed height div */\n.scrollspy-example {\n  position: relative;\n  height: 200px;\n  margin-top: 10px;\n  overflow: auto;\n}\n\n/* MenuItem */\n.bs-example .dropdown-menu.open {\n  position: static;\n  display: block;\n  margin-bottom: 5px;\n  clear: left;\n}\n\n\n/*\n * Code snippets\n *\n * Generated via Pygments and Jekyll, these are snippets of HTML, CSS, and JS.\n */\n\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}\n.highlight pre {\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  word-break: normal;\n  word-wrap: nowrap;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.highlight pre code {\n  font-size: inherit;\n  color: #333; /* Effectively the base text color */\n}\n.highlight pre code:first-child {\n  display: inline-block;\n  padding-right: 45px;\n}\n\n\n/*\n * Responsive tests\n *\n * Generate a set of tests to show the responsive utilities in action.\n */\n\n/* Responsive (scrollable) doc tables */\n.table-responsive .highlight pre {\n  white-space: normal;\n}\n\n/* Utility classes table  */\n.bs-table th small,\n.responsive-utilities th small {\n  display: block;\n  font-weight: normal;\n  color: #999;\n}\n.responsive-utilities tbody th {\n  font-weight: normal;\n}\n.responsive-utilities td {\n  text-align: center;\n}\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8 !important;\n}\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9 !important;\n}\n\n/* Responsive tests */\n.responsive-utilities-test {\n  margin-top: 5px;\n}\n.responsive-utilities-test .col-xs-6 {\n  margin-bottom: 10px;\n}\n.responsive-utilities-test span {\n  display: block;\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.1;\n  text-align: center;\n  border-radius: 4px;\n}\n.visible-on .col-xs-6 .hidden-xs,\n.visible-on .col-xs-6 .hidden-sm,\n.visible-on .col-xs-6 .hidden-md,\n.visible-on .col-xs-6 .hidden-lg,\n.hidden-on .col-xs-6 .hidden-xs,\n.hidden-on .col-xs-6 .hidden-sm,\n.hidden-on .col-xs-6 .hidden-md,\n.hidden-on .col-xs-6 .hidden-lg {\n  color: #999;\n  border: 1px solid #ddd;\n}\n.visible-on .col-xs-6 .visible-xs-block,\n.visible-on .col-xs-6 .visible-sm-block,\n.visible-on .col-xs-6 .visible-md-block,\n.visible-on .col-xs-6 .visible-lg-block,\n.hidden-on .col-xs-6 .visible-xs-block,\n.hidden-on .col-xs-6 .visible-sm-block,\n.hidden-on .col-xs-6 .visible-md-block,\n.hidden-on .col-xs-6 .visible-lg-block {\n  color: #468847;\n  background-color: #dff0d8;\n  border: 1px solid #d6e9c6;\n}\n\n\n/*\n * Glyphicons\n *\n * Special styles for displaying the icons and their classes in the docs.\n */\n\n.bs-glyphicons {\n  margin: 0 -10px 20px;\n  overflow: hidden;\n}\n.bs-glyphicons-list {\n  padding-left: 0;\n  list-style: none;\n}\n.bs-glyphicons li {\n  float: left;\n  width: 25%;\n  height: 115px;\n  padding: 10px;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff;\n}\n.bs-glyphicons .glyphicon {\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.bs-glyphicons .glyphicon-class {\n  display: block;\n  text-align: center;\n  word-wrap: break-word; /* Help out IE10+ with class names */\n}\n.bs-glyphicons li:hover {\n  color: #fff;\n  background-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .bs-glyphicons {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .bs-glyphicons li {\n    width: 12.5%;\n    font-size: 12px;\n  }\n}\n\n\n/*\n * Customizer\n *\n * Since this is so form control heavy, we have quite a few styles to customize\n * the display of inputs, headings, and more. Also included are all the download\n * buttons and actions.\n */\n\n.bs-customizer .toggle {\n  float: right;\n  margin-top: 25px;\n}\n\n/* Headings and form contrls */\n.bs-customizer label {\n  margin-top: 10px;\n  font-weight: 500;\n  color: #555;\n}\n.bs-customizer h2 {\n  padding-top: 30px;\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.bs-customizer h3 {\n  margin-bottom: 0;\n}\n.bs-customizer h4 {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n.bs-customizer .bs-callout h4 {\n  margin-top: 0; /* lame, but due to specificity we have to duplicate */\n  margin-bottom: 5px;\n}\n.bs-customizer input[type=\"text\"] {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  background-color: #fafafa;\n}\n.bs-customizer .help-block {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n/* For the variables, use regular weight */\n#less-section label {\n  font-weight: normal;\n}\n\n.bs-customizer-input {\n  float: left;\n  width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/* Downloads */\n.bs-customize-download .btn-outline {\n  padding: 20px;\n}\n\n/* Error handling */\n.bs-customizer-alert {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  padding: 15px 0;\n  color: #fff;\n  background-color: #d9534f;\n  border-bottom: 1px solid #b94441;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n          box-shadow: inset 0 1px 0 rgba(255,255,255,.25);\n}\n.bs-customizer-alert .close {\n  margin-top: -4px;\n  font-size: 24px;\n}\n.bs-customizer-alert p {\n  margin-bottom: 0;\n}\n.bs-customizer-alert .glyphicon {\n  margin-right: 5px;\n}\n.bs-customizer-alert pre {\n  margin: 10px 0 0;\n  color: #fff;\n  background-color: #a83c3a;\n  border-color: #973634;\n  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n          box-shadow: inset 0 2px 4px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);\n}\n\n\n/*\n * Brand guidelines\n *\n * Extra styles for displaying wordmarks, logos, etc.\n */\n\n/* Logo series wrapper */\n.bs-brand-logos {\n  display: table;\n  width: 100%;\n  margin-bottom: 15px;\n  overflow: hidden;\n  color: #563d7c;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\n\n/* Individual items */\n.bs-brand-item {\n  padding: 60px 0;\n  text-align: center;\n}\n.bs-brand-item + .bs-brand-item {\n  border-top: 1px solid #fff;\n}\n.bs-brand-logos .inverse {\n  color: #fff;\n  background-color: #563d7c;\n}\n.bs-brand-item .svg {\n  width: 144px;\n  height: 144px;\n}\n\n/* Heading content within */\n.bs-brand-item h1,\n.bs-brand-item h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bs-brand-item .bs-docs-booticon {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/* Make the icons stand out on what is/isn't okay */\n.bs-brand-item .glyphicon {\n  width: 30px;\n  height: 30px;\n  margin: 10px auto -10px;\n  line-height: 30px;\n  color: #fff;\n  border-radius: 50%;\n}\n.bs-brand-item .glyphicon-ok {\n  background-color: #5cb85c;\n}\n.bs-brand-item .glyphicon-remove {\n  background-color: #d9534f;\n}\n\n@media (min-width: 768px) {\n  .bs-brand-item {\n    display: table-cell;\n    width: 1%;\n  }\n  .bs-brand-item + .bs-brand-item {\n    border-top: 0;\n    border-left: 1px solid #fff;\n  }\n  .bs-brand-item h1 {\n    font-size: 60px;\n  }\n}\n\n\n/*\n * Miscellaneous\n *\n * Odds and ends for optimum docs display.\n */\n\n/* Examples gallery: space out content better */\n.bs-examples .thumbnail {\n  margin-bottom: 10px;\n}\n.bs-examples h4 {\n  margin-bottom: 5px;\n}\n.bs-examples p {\n  margin-bottom: 20px;\n}\n\n/* Pseudo :focus state for showing how it looks in the docs */\n#focusedInput {\n  border-color: rgb(204,204,204); /* Restate unfocused value to make CSSLint happy that there's a pre-CSS3 fallback*/\n  border-color: rgba(82,168,236,.8);\n  outline: 0;\n  outline: thin dotted \\9; /* IE6-9 */\n  -webkit-box-shadow: 0 0 8px rgba(82,168,236,.6);\n          box-shadow: 0 0 8px rgba(82,168,236,.6);\n}\n\n\n/*\n * ZeroClipboard styles\n */\n\n.zero-clipboard {\n  position: relative;\n  display: none;\n}\n.btn-clipboard {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  display: block;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: #777;\n  cursor: pointer;\n  background-color: #fff;\n  border: 1px solid #e1e1e8;\n  border-radius: 0 4px 0 4px;\n}\n.btn-clipboard-hover {\n  color: #fff;\n  background-color: #563d7c;\n  border-color: #563d7c;\n}\n\n@media (min-width: 768px) {\n  .zero-clipboard {\n    display: block;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(319);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(154)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?root=./docs!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(153)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * React-Bootstrap Documentation\n * Special styles for presenting react-bootstrap's documentation and code examples.\n * Based on the Bootstrap Documentation styles and overridden as necessary.\n */\n\nbody {\n  font-family: 'Source Sans Pro', 'helvetica neue', 'Avenir Next', 'Avenir',Arial, sans-serif;\n}\n\n.bs-docs-section h1 {\n  font-size: 42px\n}\n\n.bs-docs-nav .navbar-nav > li > a {\n  color: #333;\n}\n.bs-docs-footer {\n  padding-top: 20px;\n  text-align: left;\n}\n.bs-docs-nav .navbar-collapse {\n  overflow: hidden;\n}\n.bs-docs-nav {\n    box-shadow: 0 3px 3px rgba(0,0,0,0.175);\n}\n\n.bs-docs-header p {\n  font-weight: lighter;\n}\n\n\n.bs-docs-header a {\n  color: white;\n  font-weight: normal;\n}\n.btn-outline-inverse {\n  border-color: white;\n  transition: color .15s ease;\n}\n.bs-docs-header a:hover,\n.btn-outline-inverse:hover, .btn-outline-inverse:focus, .btn-outline-inverse:active,\n.bs-docs-nav .navbar-brand {\n  color: #1D976C;\n}\n\n.bs-docs-masthead, .bs-docs-header {\n  background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */\n\n  filter: none;\n  color: #e9e9e9;\n}\n\n.bs-docs-masthead {\n  margin-bottom: 20px;\n}\n\n.bs-docs-header h1 {\n  color: #ffffff;\n}\n\n.bs-docs-header p {\n  color: #ffffff;\n}\n\na.back-to-top {\n  font-size: 13px;\n  margin-top: 0;\n}\n\n.bs-docs-sidebar .nav>li>a {\n  color: #767676;\n  font-size: 14px;\n}\n\n.bs-docs-sidebar .nav>li>a:hover, .bs-docs-sidebar .nav>li>a:focus {\n  color: #42b983;\n  border-left: 1px solid #42b983;\n}\n\n.back-to-top:hover {\n  color: #42b983;\n}\n\n\n.CodeMirror, .CodeMirror-scroll {\n  height: auto;\n}\n\n.bs-example .btn-toolbar + .btn-toolbar {\n  margin-top: 10px;\n}\n\n.bs-example .static-modal .modal {\n  position: relative;\n  top: auto;\n  right: auto;\n  left: auto;\n  bottom: auto;\n  z-index: 1;\n  display: block;\n}\n\n.bs-docs-booticon {\n  background-size: contain;\n  border: 0;\n  width: 200px;\n  height: 200px;\n}\n\n.bs-example-popover-contained {\n  height: 200px;\n}\n\n.bs-example-popover-contained > div {\n  position: relative;\n}\n\n.bs-example-popover-scroll {\n  overflow: scroll;\n  height: 200px;\n}\n\n.bs-example-popover-scroll > div {\n  position: relative;\n  padding: 100px 0;\n}\n\n.playground {\n  margin-bottom: 36px;\n}\n\n.bs-example {\n  margin-bottom: 0;\n}\n\n.bs-example + .highlight {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom-right-radius: 0;\n}\n\n.code-toggle {\n  float: right;\n  display: inline-block;\n  position: relative;\n  top: -1px;\n  background: #fafafa;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: 1px solid #e1e1e8;\n  border-top: none;\n  padding: 4px 8px;\n}\n\n@media (min-width: 768px) {\n  .code-toggle {\n    background: #fff;\n  }\n}\n\n.code-toggle.open {\n  background: #f8f5ec;\n}\n\n/* Minimal CSS Needed for contained modals */\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n.prop-table {\n  background-color: white;\n}\n\n.bs-example.tooltip-static .tooltip {\n  position: relative;\n  display: inline-block;\n  margin: 5px 10px;\n\n}\n\n.bs-example .super-colors {\n  background: -moz-linear-gradient( top ,\n      rgba(255, 0, 0, 1) 0%,\n      rgba(255, 255, 0, 1) 15%,\n      rgba(0, 255, 0, 1) 30%,\n      rgba(0, 255, 255, 1) 50%,\n      rgba(0, 0, 255, 1) 65%,\n      rgba(255, 0, 255, 1) 80%,\n      rgba(255, 0, 0, 1) 100%);\n  background: -webkit-gradient(linear,  left top,  left bottom,\n      color-stop(0%, rgba(255, 0, 0, 1)),\n      color-stop(15%, rgba(255, 255, 0, 1)),\n      color-stop(30%, rgba(0, 255, 0, 1)),\n      color-stop(50%, rgba(0, 255, 255, 1)),\n      color-stop(65%, rgba(0, 0, 255, 1)),\n      color-stop(80%, rgba(255, 0, 255, 1)),\n      color-stop(100%, rgba(255, 0, 0, 1)));\n}\n\n/*.bs-example .custom-menu > ul > li {\n    padding: 0 20px;\n}*/\n\n.anchor,\n.anchor:hover,\n.anchor:active,\n.anchor:focus {\n  color: black;\n  text-decoration: none;\n  position: relative;\n}\n.anchor-icon {\n  font-size: 90%;\n  padding-top: 0.1em;\n  position: absolute;\n  left: -0.8em;\n  opacity: 0;\n}\n\nh1:hover .anchor-icon,\nh1 a:focus .anchor-icon,\nh2:hover .anchor-icon,\nh2 a:focus .anchor-icon,\nh3:hover .anchor-icon,\nh3 a:focus .anchor-icon,\nh4:hover .anchor-icon,\nh4 a:focus .anchor-icon {\n  opacity: 0.5;\n}\n\n.prop-desc pre {\n  border-radius: 0;\n  border-width: 0;\n  border-left-width: 3px;\n}\n\n.prop-desc-heading {\n  margin-bottom: 10px;\n}\n\n.bs-callout {\n    padding: 20px;\n    margin: 20px 0;\n    border: 1px solid #eee;\n    border-left-width: 5px;\n    border-radius: 3px;\n}\n.bs-callout h4 {\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n.bs-callout p:last-child {\n    margin-bottom: 0;\n}\n.bs-callout code {\n    border-radius: 3px;\n}\n.bs-callout+.bs-callout {\n    margin-top: -5px;\n}\n.bs-callout-default {\n    border-left-color: #777;\n}\n.bs-callout-default h4 {\n    color: #777;\n}\n.bs-callout-primary {\n    border-left-color: #428bca;\n}\n.bs-callout-primary h4 {\n    color: #428bca;\n}\n.bs-callout-success {\n    border-left-color: #42b983;\n}\n.bs-callout-success h4 {\n    color: #42b983;\n}\n.bs-callout-danger {\n    border-left-color: #d9534f;\n}\n.bs-callout-danger h4 {\n    color: #d9534f;\n}\n.bs-callout-warning {\n    border-left-color: #f0ad4e;\n}\n.bs-callout-warning h4 {\n    color: #f0ad4e;\n}\n.bs-callout-info {\n    border-left-color: #5bc0de;\n}\n.bs-callout-info h4 {\n    color: #5bc0de;\n}\n", ""]);
	
	// exports


/***/ },
/* 320 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 321 */
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
/* 322 */
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