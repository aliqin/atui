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

	module.exports = __webpack_require__(491);


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

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(78);
	
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	__webpack_require__(124);
	module.exports = __webpack_require__(88).Array.from;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(81)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(84)(String, 'String', function(iterated){
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(82)
	  , defined   = __webpack_require__(83);
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
/* 82 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(85)
	  , $export        = __webpack_require__(86)
	  , redefine       = __webpack_require__(101)
	  , hide           = __webpack_require__(91)
	  , has            = __webpack_require__(102)
	  , Iterators      = __webpack_require__(103)
	  , $iterCreate    = __webpack_require__(104)
	  , setToStringTag = __webpack_require__(120)
	  , getPrototypeOf = __webpack_require__(122)
	  , ITERATOR       = __webpack_require__(121)('iterator')
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
/* 85 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(87)
	  , core      = __webpack_require__(88)
	  , ctx       = __webpack_require__(89)
	  , hide      = __webpack_require__(91)
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
/* 87 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 88 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(90);
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
/* 90 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(92)
	  , createDesc = __webpack_require__(100);
	module.exports = __webpack_require__(96) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(93)
	  , IE8_DOM_DEFINE = __webpack_require__(95)
	  , toPrimitive    = __webpack_require__(99)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(96) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(94);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(96) && !__webpack_require__(97)(function(){
	  return Object.defineProperty(__webpack_require__(98)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(97)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(94)
	  , document = __webpack_require__(87).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(94);
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

	module.exports = __webpack_require__(91);

/***/ },
/* 102 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(105)
	  , descriptor     = __webpack_require__(100)
	  , setToStringTag = __webpack_require__(120)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(91)(IteratorPrototype, __webpack_require__(121)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(93)
	  , dPs         = __webpack_require__(106)
	  , enumBugKeys = __webpack_require__(118)
	  , IE_PROTO    = __webpack_require__(115)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(98)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(119).appendChild(iframe);
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(92)
	  , anObject = __webpack_require__(93)
	  , getKeys  = __webpack_require__(107);
	
	module.exports = __webpack_require__(96) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(108)
	  , enumBugKeys = __webpack_require__(118);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(102)
	  , toIObject    = __webpack_require__(109)
	  , arrayIndexOf = __webpack_require__(112)(false)
	  , IE_PROTO     = __webpack_require__(115)('IE_PROTO');
	
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(110)
	  , defined = __webpack_require__(83);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(111);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(109)
	  , toLength  = __webpack_require__(113)
	  , toIndex   = __webpack_require__(114);
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(82)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(82)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(116)('keys')
	  , uid    = __webpack_require__(117);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(87)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(87).document && document.documentElement;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(92).f
	  , has = __webpack_require__(102)
	  , TAG = __webpack_require__(121)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(116)('wks')
	  , uid        = __webpack_require__(117)
	  , Symbol     = __webpack_require__(87).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(102)
	  , toObject    = __webpack_require__(123)
	  , IE_PROTO    = __webpack_require__(115)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(83);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(89)
	  , $export        = __webpack_require__(86)
	  , toObject       = __webpack_require__(123)
	  , call           = __webpack_require__(125)
	  , isArrayIter    = __webpack_require__(126)
	  , toLength       = __webpack_require__(113)
	  , createProperty = __webpack_require__(127)
	  , getIterFn      = __webpack_require__(128);
	
	$export($export.S + $export.F * !__webpack_require__(130)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(93);
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(103)
	  , ITERATOR   = __webpack_require__(121)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(92)
	  , createDesc      = __webpack_require__(100);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(129)
	  , ITERATOR  = __webpack_require__(121)('iterator')
	  , Iterators = __webpack_require__(103);
	module.exports = __webpack_require__(88).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(111)
	  , TAG = __webpack_require__(121)('toStringTag')
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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(121)('iterator')
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(132)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/headerDocs.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/headerDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(133);
	
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Form = __webpack_require__(138);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Layout = __webpack_require__(145);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Button = __webpack_require__(156);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(163);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Searchbox = __webpack_require__(167);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);
	
	var _Uploader = __webpack_require__(172);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);
	
	var _Slider = __webpack_require__(204);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Switch = __webpack_require__(213);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Dropdown = __webpack_require__(217);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Select = __webpack_require__(221);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Calendar = __webpack_require__(232);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _TimePicker = __webpack_require__(236);
	
	var _TimePicker2 = _interopRequireDefault(_TimePicker);
	
	var _DatePicker = __webpack_require__(241);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _Cascader = __webpack_require__(248);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);
	
	var _Message = __webpack_require__(199);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _Modal = __webpack_require__(252);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Table = __webpack_require__(256);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Badge = __webpack_require__(284);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Carousel = __webpack_require__(288);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Affix = __webpack_require__(297);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Spin = __webpack_require__(265);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	var _Textarea = __webpack_require__(302);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _Tag = __webpack_require__(224);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	var _Tooltip = __webpack_require__(207);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Accordion = __webpack_require__(306);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Popover = __webpack_require__(313);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Tabs = __webpack_require__(317);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Steps = __webpack_require__(324);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Tree = __webpack_require__(331);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _Menu = __webpack_require__(338);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Breadcrumb = __webpack_require__(351);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _Pagination = __webpack_require__(270);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Container from './components/Container.vue'
	
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
	
	// import Progressbar from './components/progressbar.vue'
	// import Typeahead from './components/Typeahead.vue'
	// 展示类
	
	
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Icon/Icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 136 */
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
/* 137 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"[prefixCls + '-iconfont', prefixCls + '-icon-' + type]\" :style=\"{ fontSize: size + 'px',color:color }\">\n</i>\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Form = __webpack_require__(139);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormItem = __webpack_require__(153);
	
	var _FormItem2 = _interopRequireDefault(_FormItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Form2.default.FormItem = _FormItem2.default;
	
	exports.default = _Form2.default;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(140)
	__vue_script__ = __webpack_require__(144)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/Form.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Form/Form.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(143)(content, {});
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-horizontal {}\n.form-vertical {}\n", "", {"version":3,"sources":["/./src/components/Form/Form.vue?15bc0358"],"names":[],"mappings":";AAQA,mBAAA;AACA,iBAAA","file":"Form.vue","sourcesContent":["<template>\n  <form class=\"form\" :class=\"classObj\">\n    <v-row>\n      <slot></slot>\n    </v-row>\n  </form>\n</template>\n<style>\n.form-horizontal {}\n.form-vertical {}\n</style>\n<script>\nimport Layout from '../Layout/'\nconst vRow = Layout.Row\nexport default {\n  props: {\n    // 表单元素排列方式，有纵向和横向两种 horizontal、vertical\n    horizontal: Boolean,\n    vertical: Boolean\n  },\n  data () {\n    return {\n      classObj: {\n        'form-horizontal': this.horizontal,\n        'form-vertical': this.vertical\n      }\n    }\n  },\n  components: {\n    vRow\n  }\n}\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 142 */
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
/* 143 */
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(145);
	
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
	    // 表单元素排列方式，有纵向和横向两种 horizontal、vertical
	    horizontal: Boolean,
	    vertical: Boolean
	  },
	  data: function data() {
	    return {
	      classObj: {
	        'form-horizontal': this.horizontal,
	        'form-vertical': this.vertical
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
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Row = __webpack_require__(146);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(149);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { Row: _Row2.default, Col: _Col2.default };

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(147)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Row.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Layout/Row.vue"
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
/* 148 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-row']\"><slot></slot></div>\n";

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(150)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Layout/Col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(151)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Layout/Col.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 150 */
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
/* 151 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-col-' + type + '-' + span]\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "\n<form class=\"form\" :class=\"classObj\">\n  <v-row>\n    <slot></slot>\n  </v-row>\n</form>\n";

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(154)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Form/FormItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(155)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Form/FormItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Layout = __webpack_require__(145);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <v-col :span="itemCol" :class="['form-item', classObj]">
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
	    classObj: function classObj() {
	      var obj = {
	        'form-item-with-help': this.validStatus,
	        'has-error': this.validStatus === 'error',
	        'has-success': this.validStatus === 'success'
	      };
	      return obj;
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
/* 155 */
/***/ function(module, exports) {

	module.exports = "\n<v-col :span=\"itemCol\" :class=\"['form-item', classObj]\">\n  <v-col :span=\"labelCol\" type=\"sm\">\n    <label v-if=\"label\" class=\"form-label\">\n      <span v-if=\"isRequired\" class=\"required-icon\">*</span>\n      {{label}}\n    </label>\n  </v-col>\n  <v-col :span=\"wrapperCol || calcWrapperCol\" type=\"sm\">\n    <div class=\"form-input\">\n      <slot></slot>\n      <template v-if=\"showIcon\">\n        <icon class=\"status-icon\" v-if=\"validStatus == 'warn'\" type=\"waring\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'error'\" type=\"error\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'success'\" type=\"success\"></icon>\n        <icon class=\"status-icon\" v-if=\"validStatus == 'help'\" type=\"help\"></icon>\n      </template>\n    </div>\n    <div v-if=\"tips && validStatus\" class=\"status-info\">{{tips}}</div>\n  </v-col>\n</v-col>\n";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(157);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Group = __webpack_require__(160);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Button2.default.Group = _Group2.default;
	
	exports.default = _Button2.default;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Button/Button.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Button/Button.vue"
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
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n<button :type=\"type\" :class=\"btnClassObj\">\n  <slot>{{value}}</slot>\n</button>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(161)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Button/Group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(162)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Button/Group.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
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
/* 162 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"btnClassObj\"\n     @click=\"clickBtnGroup\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(164);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(165)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Input/Input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(166)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Input/Input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 165 */
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
/* 166 */
/***/ function(module, exports) {

	module.exports = "\n<input :type=\"type\"\n       :class=\"inputClassObj\"\n       :placeholder=\"placeholder\"\n       v-model=\"value\"\n       :valid-status.sync=\"validStatus\"\n       :maxlength=\"maxlength\" />\n";

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Searchbox = __webpack_require__(168);
	
	var _Searchbox2 = _interopRequireDefault(_Searchbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Searchbox2.default;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(169)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Searchbox/Searchbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(171)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Searchbox/Searchbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-searchbox']">
	//     <input type="text"
	//            :class="inputClassObj"
	//            :placeholder="placeholder"
	//            v-model="value"
	//            @focus="focusInput"
	//            debounce="500" />
	//     <icon type="clear" v-show="value" color="#bfbfbf" size="14" @click="clearInput"></icon>
	//     <icon type="search" :color="iconColor" size="14"></icon>
	//     <div v-if="searchList && searchList.length > 0"
	//          :class="[prefixCls + '-searchbox-list-containter']">
	//       <ul v-show="showPop"
	//           :class="[prefixCls + '-searchbox-list-dropdown']"
	//           transition="slide">
	//         <li v-for="item in searchList | filterBy value">
	//           <a href="javascript:;" @click="checkItem($index, item[textField])" :title="item[textField]">{{item[textField]}}</a>
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script type="text/babel">
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
	    large: Boolean,
	    small: Boolean,
	    textField: {
	      type: String,
	      default: 'name'
	    },
	    filterField: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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

/***/ },
/* 170 */
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
/* 171 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-searchbox']\">\n  <input type=\"text\"\n         :class=\"inputClassObj\"\n         :placeholder=\"placeholder\"\n         v-model=\"value\"\n         @focus=\"focusInput\"\n         debounce=\"500\" />\n  <icon type=\"clear\" v-show=\"value\" color=\"#bfbfbf\" size=\"14\" @click=\"clearInput\"></icon>\n  <icon type=\"search\" :color=\"iconColor\" size=\"14\"></icon>\n  <div v-if=\"searchList && searchList.length > 0\"\n       :class=\"[prefixCls + '-searchbox-list-containter']\">\n    <ul v-show=\"showPop\"\n        :class=\"[prefixCls + '-searchbox-list-dropdown']\"\n        transition=\"slide\">\n      <li v-for=\"item in searchList | filterBy value\">\n        <a href=\"javascript:;\" @click=\"checkItem($index, item[textField])\" :title=\"item[textField]\">{{item[textField]}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Uploader = __webpack_require__(173);
	
	var _Uploader2 = _interopRequireDefault(_Uploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Uploader2.default;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Uploader/Uploader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(203)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Uploader/Uploader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(175);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Message = __webpack_require__(199);
	
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
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(176);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(183);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(177), __esModule: true };

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	__webpack_require__(178);
	module.exports = __webpack_require__(182).f('iterator');

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(179);
	var global        = __webpack_require__(87)
	  , hide          = __webpack_require__(91)
	  , Iterators     = __webpack_require__(103)
	  , TO_STRING_TAG = __webpack_require__(121)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(180)
	  , step             = __webpack_require__(181)
	  , Iterators        = __webpack_require__(103)
	  , toIObject        = __webpack_require__(109);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(84)(Array, 'Array', function(iterated, kind){
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
/* 180 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(121);

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(185);
	__webpack_require__(196);
	__webpack_require__(197);
	__webpack_require__(198);
	module.exports = __webpack_require__(88).Symbol;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(87)
	  , has            = __webpack_require__(102)
	  , DESCRIPTORS    = __webpack_require__(96)
	  , $export        = __webpack_require__(86)
	  , redefine       = __webpack_require__(101)
	  , META           = __webpack_require__(186).KEY
	  , $fails         = __webpack_require__(97)
	  , shared         = __webpack_require__(116)
	  , setToStringTag = __webpack_require__(120)
	  , uid            = __webpack_require__(117)
	  , wks            = __webpack_require__(121)
	  , wksExt         = __webpack_require__(182)
	  , wksDefine      = __webpack_require__(187)
	  , keyOf          = __webpack_require__(188)
	  , enumKeys       = __webpack_require__(189)
	  , isArray        = __webpack_require__(192)
	  , anObject       = __webpack_require__(93)
	  , toIObject      = __webpack_require__(109)
	  , toPrimitive    = __webpack_require__(99)
	  , createDesc     = __webpack_require__(100)
	  , _create        = __webpack_require__(105)
	  , gOPNExt        = __webpack_require__(193)
	  , $GOPD          = __webpack_require__(195)
	  , $DP            = __webpack_require__(92)
	  , $keys          = __webpack_require__(107)
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
	  __webpack_require__(194).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(191).f  = $propertyIsEnumerable;
	  __webpack_require__(190).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(85)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(91)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(117)('meta')
	  , isObject = __webpack_require__(94)
	  , has      = __webpack_require__(102)
	  , setDesc  = __webpack_require__(92).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(97)(function(){
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
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(87)
	  , core           = __webpack_require__(88)
	  , LIBRARY        = __webpack_require__(85)
	  , wksExt         = __webpack_require__(182)
	  , defineProperty = __webpack_require__(92).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(107)
	  , toIObject = __webpack_require__(109);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(107)
	  , gOPS    = __webpack_require__(190)
	  , pIE     = __webpack_require__(191);
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
/* 190 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 191 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(111);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(109)
	  , gOPN      = __webpack_require__(194).f
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
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(108)
	  , hiddenKeys = __webpack_require__(118).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(191)
	  , createDesc     = __webpack_require__(100)
	  , toIObject      = __webpack_require__(109)
	  , toPrimitive    = __webpack_require__(99)
	  , has            = __webpack_require__(102)
	  , IE8_DOM_DEFINE = __webpack_require__(95)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(96) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 196 */
/***/ function(module, exports) {



/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(187)('asyncIterator');

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(187)('observable');

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(200);
	
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
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(201)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Message/Message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(202)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Message/Message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 201 */
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
/* 202 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  v-show=\"show\"\n  :class=\"messageClassObj\"\n  :transition=\"transition\"\n  :style=\"{width:width}\"\n  role=\"alert\">\n  <div :class=\"[prefixCls + '-message-content']\">\n    <button v-show=\"dismissable\" type=\"button\" :class=\"[prefixCls + '-close']\" @click=\"show = false\">\n    <span>&times;</span>\n    </button>\n    <icon v-if=\"showIcon\" :type=\"type\"></icon>\n    <slot>\n      {{content}}\n    </slot>\n  </div>\n</div>\n";

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-upload']\" id=\"upload-{{uploadId}}\">\n  <div v-if=\"uploadType == 'click'\">\n    <label>\n      <input\n        type=\"file\"\n        :name=\"name\"\n        :accept=\"accept\"\n        :id=\"uploadId\"\n        :multiple=\"multiple\"\n        @change=\"onChange($event)\" />\n      <slot>\n        <span :class=\"[prefixCls + '-btn', prefixCls + '-btn-tertiary']\">点击上传</span>\n      </slot>\n    </label>\n    <div :class=\"[prefixCls + '-upload-list']\">\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in fileList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                :class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delExistFile($index)\"></icon>\n        </div>\n      </div>\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                :class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delFile($index)\"></icon>\n        </div>\n        <div :class=\"[prefixCls + '-upload-item-progress', progress[$index] == '100%' && (prefixCls + '-hide')]\">\n          <div :class=\"[prefixCls + '-upload-progress', prefixCls + '-upload-progress-line', prefixCls + '-upload-progress-status-success']\">\n            <div :class=\"[prefixCls + '-upload-progress-inner']\">\n              <div :class=\"[prefixCls + '-upload-progress-bg']\" :style=\"{width: progress[$index]}\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div v-if=\"uploadType == 'drag'\"\n       :class=\"[prefixCls + '-upload-drag']\">\n    <div :class=\"[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-is-dragover')]\">\n      <input type=\"file\"\n             :name=\"name\"\n             :id=\"uploadId\"\n             :accept=\"accept\"\n             :multiple=\"multiple\"\n             @change=\"onChange($event)\" />\n      <label :for=\"uploadId\"\n             :class=\"[prefixCls + '-upload-drag-area']\">\n      <p :class=\"[prefixCls + '-upload-drag-icon']\"></p>\n      <span v-if=\"advanceDrag\">将文件拖拽至框中上传或点此上传</span>\n      <span v-if=\"!advanceDrag\">当前环境不支持拖拽上传，请点此上传</span>\n      <p v-if=\"fileList.length > 0\" v-for=\"file in selectFiles\">{{file}}</p>\n    </label>\n    </div>\n    <div :class=\"[prefixCls + '-upload-list']\">\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in fileList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delExistFile($index)\"></icon>\n        </div>\n      </div>\n      <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n        <div :class=\"[prefixCls + '-upload-item-info', current == $index && (prefixCls + '-active')]\"\n             @mouseover=\"filemouseover($index)\"\n             @mouseout=\"filemouseout\">\n          <icon type=\"doc\"\n                :class=\"[prefixCls + '-upload-file-icon']\"\n                size=\"12\"></icon>\n          <span>{{file.name}}</span>\n          <icon type=\"close\"\n                :class=\"[prefixCls + '-upload-del-info']\"\n                size=\"12\"\n                @click=\"delFile($index)\"></icon>\n        </div>\n        <div :class=\"[prefixCls + '-upload-item-progress', progress[$index] == '100%' && (prefixCls + '-hide')]\">\n          <div :class=\"[prefixCls + '-upload-progress', prefixCls + '-upload-progress-line', prefixCls + '-upload-progress-status-success']\">\n            <div :class=\"[prefixCls + '-upload-progress-inner']\">\n              <div :class=\"[prefixCls + '-upload-progress-bg']\" :style=\"{width: progress[$index]}\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Slider = __webpack_require__(205);
	
	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slider2.default;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(206)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Slider/Slider.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Slider/Slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(207);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :id="sliderId" :class="sliderClassObj" @click="clickFun">
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
	    id: String,
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
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(208);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tooltip2.default;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(209)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tooltip/Tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(211)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tooltip/Tooltip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(210);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    tooltipClassObj: function tooltipClassObj() {
	      var prefixCls = this.prefixCls;
	      var placement = this.placement;
	
	      var tooltipClass = {};
	
	      tooltipClass[prefixCls + '-tooltip'] = true;
	      tooltipClass[prefixCls + '-tooltip-top'] = placement === 'top';
	      tooltipClass[prefixCls + '-tooltip-top-left'] = placement === 'topLeft';
	      tooltipClass[prefixCls + '-tooltip-top-right'] = placement === 'topRight';
	      tooltipClass[prefixCls + '-tooltip-left'] = placement === 'left';
	      tooltipClass[prefixCls + '-tooltip-left-top'] = placement === 'leftTop';
	      tooltipClass[prefixCls + '-tooltip-left-bottom'] = placement === 'leftBottom';
	      tooltipClass[prefixCls + '-tooltip-right'] = placement === 'right';
	      tooltipClass[prefixCls + '-tooltip-right-top'] = placement === 'rightTop';
	      tooltipClass[prefixCls + '-tooltip-right-bottom'] = placement === 'rightBottom';
	      tooltipClass[prefixCls + '-tooltip-bottom'] = placement === 'bottom';
	      tooltipClass[prefixCls + '-tooltip-bottom-left'] = placement === 'bottomLeft';
	      tooltipClass[prefixCls + '-tooltip-bottom-right'] = placement === 'bottomRight';
	
	      return tooltipClass;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div :class="[prefixCls + '-tooltip-trigger']" v-el:trigger>
	//     <slot>
	//     </slot>
	//   </div>
	//   <div :class="tooltipClassObj"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect"
	//     role="tooltip">
	//     <div :class="[prefixCls + '-tooltip-arrow']" v-el:arrow></div>
	//     <div :class="[prefixCls + '-tooltip-inner']">
	//       {{{content}}}
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(170);
	
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
	      default: 'zoom'
	    },
	    title: {
	      type: String
	    },
	    content: [String, Number],
	    header: {
	      type: Boolean,
	      default: true
	    },
	    placement: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: false
	    };
	  },
	
	
	  computed: {
	    popoverClassObj: function popoverClassObj() {
	      var prefixCls = this.prefixCls;
	      var placement = this.placement;
	
	      var popoverClassObj = {};
	
	      popoverClassObj[prefixCls + '-popover'] = true;
	      popoverClassObj[prefixCls + '-popover-top'] = placement === 'top';
	      popoverClassObj[prefixCls + '-popover-top-left'] = placement === 'topLeft';
	      popoverClassObj[prefixCls + '-popover-top-right'] = placement === 'topRight';
	      popoverClassObj[prefixCls + '-popover-left'] = placement === 'left';
	      popoverClassObj[prefixCls + '-popover-left-top'] = placement === 'leftTop';
	      popoverClassObj[prefixCls + '-popover-left-bottom'] = placement === 'leftBottom';
	      popoverClassObj[prefixCls + '-popover-right'] = placement === 'right';
	      popoverClassObj[prefixCls + '-popover-right-top'] = placement === 'rightTop';
	      popoverClassObj[prefixCls + '-popover-right-bottom'] = placement === 'rightBottom';
	      popoverClassObj[prefixCls + '-popover-bottom'] = placement === 'bottom';
	      popoverClassObj[prefixCls + '-popover-bottom-left'] = placement === 'bottomLeft';
	      popoverClassObj[prefixCls + '-popover-bottom-right'] = placement === 'bottomRight';
	
	      return popoverClassObj;
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	
	
	    /**
	     * 设置tooltip坐标
	       */
	    resetPos: function resetPos() {
	      var me = this;
	      var popover = me.$els.popover;
	
	      if (me.show && popover.offsetWidth === 0) {
	        setTimeout(function () {
	          me.resetPos();
	        });
	        return;
	      }
	
	      var triger = me.$els.trigger.children[0];
	      var offset = triger.getBoundingClientRect();
	      var offsetLeft = document.documentElement.scrollLeft + document.body.scrollLeft + offset.left;
	      var offsetTop = document.documentElement.scrollTop + document.body.scrollTop + offset.top;
	      var offsetWidth = popover.offsetWidth;
	      var offsetHeight = popover.offsetHeight;
	
	      switch (me.placement) {
	        case 'top':
	          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2;
	          me.position.top = offsetTop - offsetHeight;
	          break;
	        case 'topLeft':
	          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 + offsetWidth / 4;
	          me.position.top = offsetTop - offsetHeight;
	          break;
	        case 'topRight':
	          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 - offsetWidth / 4;
	          me.position.top = offsetTop - offsetHeight;
	          break;
	        case 'left':
	          me.position.left = offsetLeft - offsetWidth;
	          me.position.top = offsetTop + triger.offsetHeight / 2 - offsetHeight / 2;
	          break;
	        case 'leftTop':
	          me.position.left = offsetLeft - offsetWidth;
	          me.position.top = offsetTop + triger.offsetHeight / 4 - offsetHeight / 2 + offsetHeight / 4;
	          break;
	        case 'leftBottom':
	          me.position.left = offsetLeft - offsetWidth;
	          me.position.top = offsetTop + triger.offsetHeight / 2 - offsetHeight / 2 - offsetHeight / 4 + triger.offsetHeight / 4;
	          break;
	        case 'right':
	          me.position.left = offsetLeft + triger.offsetWidth;
	          me.position.top = offsetTop + triger.offsetHeight / 2 - offsetHeight / 2;
	          break;
	        case 'rightTop':
	          me.position.left = offsetLeft + triger.offsetWidth;
	          me.position.top = offsetTop + triger.offsetHeight / 4 - offsetHeight / 2 + offsetHeight / 4;
	          break;
	        case 'rightBottom':
	          me.position.left = offsetLeft + triger.offsetWidth;
	          me.position.top = offsetTop + triger.offsetHeight / 2 - offsetHeight / 2 - offsetHeight / 4 + triger.offsetHeight / 4;
	          break;
	        case 'bottom':
	          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2;
	          me.position.top = offsetTop + triger.offsetHeight;
	          break;
	        case 'bottomLeft':
	          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 + offsetWidth / 4;
	          me.position.top = offsetTop + triger.offsetHeight;
	          break;
	        case 'bottomRight':
	          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 - offsetWidth / 4;
	          me.position.top = offsetTop + triger.offsetHeight;
	          break;
	        default:
	          console.log('Wrong placement prop');
	      }
	      popover.style.top = this.position.top + 'px';
	      popover.style.left = this.position.left + 'px';
	    }
	  },
	  attached: function attached() {
	    if (this.$els.popover) {
	      document.body.appendChild(this.$els.popover);
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
	
	    var me = this;
	    // const popover = this.$els.popover
	    var triger = this.$els.trigger.children[0];
	
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        me.show = true;
	        me.resetPos();
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        _this.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      this._focusEvent = _EventListener2.default.listen(triger, 'focus', function () {
	        me.show = true;
	        me.resetPos();
	      });
	      this._blurEvent = _EventListener2.default.listen(triger, 'blur', function () {
	        _this.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', function () {
	        me.show = !me.show;
	        me.resetPos();
	      });
	    }
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
	    if (this.$els.popover && this.$els.popover.nodeType) {
	      this.$els.popover.parentNode.removeChild(this.$els.popover);
	    }
	  }
	};
	
	exports.default = PopoverMixin;

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-tooltip-trigger']\" v-el:trigger>\n  <slot>\n  </slot>\n</div>\n<div :class=\"tooltipClassObj\"\n  v-el:popover\n  v-show=\"show\"\n  :transition=\"effect\"\n  role=\"tooltip\">\n  <div :class=\"[prefixCls + '-tooltip-arrow']\" v-el:arrow></div>\n  <div :class=\"[prefixCls + '-tooltip-inner']\">\n    {{{content}}}\n  </div>\n</div>\n";

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "\n<div :id=\"sliderId\" :class=\"sliderClassObj\" @click=\"clickFun\">\n  <template v-for=\"item in valuePercent\">\n    <tooltip :content=\"valueArray[$index]\" placement=\"top\">\n      <div :class=\"[prefixCls + '-slider-handle']\" :style=\"{'left': item+'%'}\" @mousedown=\"mousedown\"></div>\n    </tooltip>\n  </template>\n  <template v-if=\"valuePercent.length == 1\">\n    <tooltip :content=\"valueArray[0]\" placement=\"top\">\n      <div :class=\"[prefixCls + '-slider-track']\" :style=\"{'visibility': 'visible', 'left': '0%', 'width': valuePercent[0]+'%'}\"></div>\n      </tooltip>\n  </template>\n  <template v-if=\"valuePercent.length > 1\">\n    <div :class=\"[prefixCls + '-slider-track']\" :style=\"{'visibility': 'visible', 'left': valuePercent[0]+'%', 'width': valuePercent[1]-valuePercent[0]+'%'}\"></div>\n  </template>\n  <div :class=\"[prefixCls + '-slider-step']\"></div>\n  <div :class=\"[prefixCls + '-slider-mark']\"></div>\n</div>\n";

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(214);
	
	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(215)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Switch/Switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(216)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Switch/Switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 215 */
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
/* 216 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"switchClassObj\"\n      :style=\"{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}\"\n      @click=\"changeHandler\">\n  <span :class=\"[prefixCls + '-switch-content']\">\n    <slot v-if=\"checked && !small\" name=\"checkedPart\"></slot>\n    <slot v-if=\"!checked && !small\" name=\"unCheckedPart\"></slot>\n  </span>\n</span>\n";

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(218);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dropdown2.default;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(219)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Dropdown/Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(220)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Dropdown/Dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    open: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	    var self = this;
	
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
	
	      me.$el.addEventListener('mouseenter', function () {
	        if (me.timeout) {
	          clearTimeout(me.timeout);
	          me.timeout = null;
	        }
	      });
	    }
	
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
	// <template>
	//   <div :class="[prefixCls + '-dropdown', open && (prefixCls + '-dropdown-open')]">
	//     <slot></slot>
	//     <slot name="dropdown-menu"></slot>
	//   </div>
	// </template>
	//
	// <script type="text/babel">

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-dropdown', open && (prefixCls + '-dropdown-open')]\">\n  <slot></slot>\n  <slot name=\"dropdown-menu\"></slot>\n</div>\n";

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(222);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(229);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Select2.default.Option = _Option2.default;
	
	exports.default = _Select2.default;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(223)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Select.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Select/Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Tag = __webpack_require__(224);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'select',
	  props: {
	    width: String,
	    value: [String, Array],
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
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	    if (me.value.length || me.selectedOptions.length) {
	      me.showPlaceholder = false;
	    }
	  },
	  data: function data() {
	    return {
	      searchText: '',
	      noResult: false,
	      show: false,
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
	      var disabled = this.disabled;
	      var multiple = this.multiple;
	
	      var classObj = {};
	
	      classObj[prefixCls + '-select-container'] = true;
	      classObj[prefixCls + '-dropdown-open'] = show;
	      classObj[prefixCls + '-select-disabled'] = disabled;
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
	    toggleDropdown: function toggleDropdown() {
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
	    },
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
	// <template>
	//   <div :class="selectClassObj">
	//     <div :class="[prefixCls + '-select-toggle', tags && (prefixCls + '-select-tags')]"
	//          tabindex="1"
	//          @mousedown="toggleDropdown"
	//          @keydown.up="selectUp"
	//          @keydown.down="selectDown"
	//          v-bind="{disabled: disabled}">
	//       <template v-if="!multiple">
	//         <span v-show="!value"
	//               :class="[prefixCls + '-select-placeholder']">{{placeholder}}</span>
	//         <span :class="[prefixCls + '-select-btn-content']">{{ showText }}</span>
	//         <span :class="[prefixCls + '-select-caret', show && (prefixCls + '-select-open')]">
	//           <icon :class="[prefixCls + '-dropdown-icon']" type="down" size="12"></icon></span>
	//       </template>
	//       <div v-else>
	//         <span :class="[prefixCls + '-select-placeholder']" v-show="showPlaceholder">{{placeholder}}</span>
	//         <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
	//         <input type="text" v-el:search-field :class="[prefixCls + '-select-search-field']" @input="onInput" @keydown.delete="deleteTag" @blur="createTag" @keydown.enter.prevent="createTag" v-model="searchText" autocomplete="off"/>
	//       </div>
	//     </div>
	//     <div :class="[prefixCls + '-dropdown-menu']" v-show="show && options.length > 0" transition="slide">
	//       <slot></slot>
	//       <div v-show="noResult" class="no-result">无结果</div>
	//       <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tag = __webpack_require__(225);
	
	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tag2.default;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(226)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tag/Tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(227)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tag/Tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 226 */
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
/* 227 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"!closed\"\n     :class=\"[prefixCls + '-tag', color && (prefixCls + '-tag-color')]\"\n     :style=\"{'background-color': color}\">\n  <a :href=\"href\"\n     :class=\"[prefixCls + '-tag-text']\"\n     :style=\"{'fontSize': size+'px'}\">\n    <slot></slot>\n  </a>\n  <span v-if=\"closable\"\n       :class=\"[prefixCls + '-tag-close']\"\n       @click=\"closeHandler\">\n   <v-icon type=\"close\" :size=\"size\"></v-icon>\n  </span>\n</div>\n";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"selectClassObj\">\n  <div :class=\"[prefixCls + '-select-toggle', tags && (prefixCls + '-select-tags')]\"\n       tabindex=\"1\"\n       @mousedown=\"toggleDropdown\"\n       @keydown.up=\"selectUp\"\n       @keydown.down=\"selectDown\"\n       v-bind=\"{disabled: disabled}\">\n    <template v-if=\"!multiple\">\n      <span v-show=\"!value\"\n            :class=\"[prefixCls + '-select-placeholder']\">{{placeholder}}</span>\n      <span :class=\"[prefixCls + '-select-btn-content']\">{{ showText }}</span>\n      <span :class=\"[prefixCls + '-select-caret', show && (prefixCls + '-select-open')]\">\n        <icon :class=\"[prefixCls + '-dropdown-icon']\" type=\"down\" size=\"12\"></icon></span>\n    </template>\n    <div v-else>\n      <span :class=\"[prefixCls + '-select-placeholder']\" v-show=\"showPlaceholder\">{{placeholder}}</span>\n      <tag v-for=\"option in selectedOptions\" closable @close=\"closeTag(option)\">{{{option.label}}}</tag>\n      <input type=\"text\" v-el:search-field :class=\"[prefixCls + '-select-search-field']\" @input=\"onInput\" @keydown.delete=\"deleteTag\" @blur=\"createTag\" @keydown.enter.prevent=\"createTag\" v-model=\"searchText\" autocomplete=\"off\"/>\n    </div>\n  </div>\n  <div :class=\"[prefixCls + '-dropdown-menu']\" v-show=\"show && options.length > 0\" transition=\"slide\">\n    <slot></slot>\n    <div v-show=\"noResult\" class=\"no-result\">无结果</div>\n    <div class=\"notify\" v-show=\"showNotify\" transition=\"fadein\">最多可选 ({{limit}})项.</div>\n  </div>\n</div>\n";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(230)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Select/Option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(231)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Select/Option.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 230 */
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
/* 231 */
/***/ function(module, exports) {

	module.exports = "\n<div v-show=\"show\"\n     :class=\"optionClassObj\"\n     @mousedown.prevent.stop=\"handleClick\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Calendar = __webpack_require__(233);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Calendar2.default;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(234)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Calendar/Calendar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(235)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Calendar/Calendar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 234 */
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
/* 235 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-calendar']\" v-show=\"show\">\n  <div :class=\"[prefixCls + '-calendar-popup']\" v-show=\"displayDayView\">\n    <div :class=\"[prefixCls + '-calendar-inner']\">\n      <div :class=\"[prefixCls + '-calendar-header']\">\n        <!-- <span class=\"atui-calendar-prev-year-btn\">»</span> -->\n        <span :class=\"[prefixCls + '-calendar-month-btn', prefixCls + '-calendar-preBtn']\" @click=\"preNextMonthClick(0)\">‹</span>\n        <span :class=\"[prefixCls + '-calendar-month-btn', prefixCls + '-calendar-nextBtn']\" @click=\"preNextMonthClick(1)\">›</span>\n        <!-- <span class=\"atui-calendar-next-year-btn\">»</span> -->\n        <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-body']\">\n        <div :class=\"[prefixCls + '-calendar-weekRange']\">\n          <span v-for=\"w in weekRange\">{{w}}</span>\n        </div>\n        <div :class=\"[prefixCls + '-calendar-dateRange']\">\n          <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,$event)\">{{d.text}}</span>\n        </div>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-footer']\">\n        <a :class=\"[prefixCls + '-calendar-today-btn']\" role=\"button\" @click=\"daySelect(new Date(),$event)\" :title=\"stringifyDayHeader(currDate)\">今天</a>\n      </div>\n    </div>\n  </div>\n  <div :class=\"[prefixCls + '-calendar-popup']\" v-show=\"displayMonthView\">\n    <div :class=\"[prefixCls + '-calendar-inner']\">\n      <div :class=\"[prefixCls + '-calendar-header']\">\n        <span :class=\"['month-btn', prefixCls + '-calendar-preBtn']\" @click=\"preNextYearClick(0)\">&lt;</span>\n        <span :class=\"['month-btn', prefixCls + '-calendar-nextBtn']\" @click=\"preNextYearClick(1)\">&gt;</span>\n        <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-body']\">\n        <div :class=\"[prefixCls + '-calendar-monthRange']\">\n          <template v-for=\"m in monthNames\">\n            <span :class=\"[(monthNames[parse(value).getMonth()]  === m) &&\n                currDate.getFullYear() === parse(value).getFullYear() && prefixCls + '-calendar-dateRange-item-active']\"\n                @click=\"monthSelect($index)\"\n              >{{m.substr(0,3)}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div :class=\"[prefixCls + '-calendar-popup']\" v-show=\"displayYearView\">\n    <div :class=\"[prefixCls + '-calendar-inner']\">\n      <div :class=\"[prefixCls + '-calendar-header']\">\n        <span :class=\"['month-btn', prefixCls + '-calendar-preBtn']\" @click=\"preNextDecadeClick(0)\">&lt;</span>\n        <span :class=\"['month-btn', prefixCls + '-calendar-nextBtn']\" @click=\"preNextDecadeClick(1)\">&gt;</span>\n        <p>{{stringifyDecadeHeader(currDate)}}</p>\n      </div>\n      <div :class=\"[prefixCls + '-calendar-body']\">\n        <div :class=\"[prefixCls + '-calendar-monthRange decadeRange']\">\n          <template v-for=\"decade in decadeRange\">\n            <span :class=\"[parse(value).getFullYear() === decade.text && prefixCls + '-calendar-dateRange-item-active']\"\n                @click.stop=\"yearSelect(decade.text)\"\n              >{{decade.text}}</span>\n          </template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TimePicker = __webpack_require__(237);
	
	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TimePicker2.default;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(238)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/TimePicker/TimePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(240)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/TimePicker/TimePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Input = __webpack_require__(163);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _selection = __webpack_require__(239);
	
	var _selection2 = _interopRequireDefault(_selection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	}; // <template>
	//   <div :class="[prefixCls + '-time-picker']">
	//     <span :class="[prefixCls + '-time-picker-toggler']">
	//       <v-input v-el:picker-toggler readonly @click="toggleMenus" :value="value" :placeholder="placeholder"></v-input>
	//     </span>
	//     <div v-el:picker-menus :class="[prefixCls + '-time-picker-menus']" v-show="show" transition="slide">
	//       <div :class="[prefixCls + '-time-picker-panel']">
	//         <ul v-el:h :class="time-hours" @mouseover="selection('H')">
	//           <li v-for="index in 24" v-if="disabledHours().indexOf(index) < 0" :class="{selected: hour === index}" @click="chooseHour(index, $event)">{{index | leftPad}}</li>
	//         </ul>
	//       </div>
	//       <div :class="[prefixCls + '-time-picker-panel']">
	//         <ul v-el:m class="time-minute" @mouseover="selection('M')">
	//           <li v-for="index in 59" v-if="disabledMinutes().indexOf(index) < 0" :class="{selected: minute === index}" @click="chooseMinute(index, $event)">{{index | leftPad}}</li>
	//         </ul>
	//       </div>
	//       <div :class="[prefixCls + '-time-picker-panel']" @mouseover="selection('S')">
	//         <ul v-el:s class="time-seconds">
	//           <li v-for="index in 59" v-if="disabledSeconds().indexOf(index) < 0" :class="{selected: second === index}" @click="chooseSecond(index, $event)">{{index | leftPad}}</li>
	//         </ul>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script type="text/babel">
	
	exports.default = {
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  filters: {
	    leftPad: function leftPad(value) {
	      return this.leftPad(value);
	    }
	  },
	  components: {
	    vInput: _Input2.default
	  },
	  data: function data() {
	    var now = new Date();
	    return {
	      show: false,
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
	  attached: function attached() {
	    document.body.appendChild(this.$els.pickerMenus);
	  },
	  ready: function ready() {
	    var me = this;
	    var menus = me.$els.pickerMenus;
	    var toggler = me.$els.pickerToggler;
	    me._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!menus.contains(e.target) && !toggler.contains(e.target)) {
	        me.show = false;
	      }
	    });
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
	    },
	    toggleMenus: function toggleMenus() {
	      var me = this;
	      me.show = !me.show;
	      if (me.show) {
	        var toggler = me.$els.pickerToggler;
	        var menus = me.$els.pickerMenus;
	        var offset = toggler.getBoundingClientRect();
	        menus.style.top = offset.top + document.body.scrollTop + document.documentElement.scrollTop + toggler.offsetHeight + 'px';
	        menus.style.left = offset.left + 'px';
	        me.$nextTick(function () {
	          me.selectChoosed('h', me.hour, 1);
	          me.selectChoosed('m', me.minute, 1);
	          me.selectChoosed('s', me.second, 1);
	        });
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 239 */
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
/* 240 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-time-picker']\">\n  <span :class=\"[prefixCls + '-time-picker-toggler']\">\n    <v-input v-el:picker-toggler readonly @click=\"toggleMenus\" :value=\"value\" :placeholder=\"placeholder\"></v-input>\n  </span>\n  <div v-el:picker-menus :class=\"[prefixCls + '-time-picker-menus']\" v-show=\"show\" transition=\"slide\">\n    <div :class=\"[prefixCls + '-time-picker-panel']\">\n      <ul v-el:h :class=\"time-hours\" @mouseover=\"selection('H')\">\n        <li v-for=\"index in 24\" v-if=\"disabledHours().indexOf(index) < 0\" :class=\"{selected: hour === index}\" @click=\"chooseHour(index, $event)\">{{index | leftPad}}</li>\n      </ul>\n    </div>\n    <div :class=\"[prefixCls + '-time-picker-panel']\">\n      <ul v-el:m class=\"time-minute\" @mouseover=\"selection('M')\">\n        <li v-for=\"index in 59\" v-if=\"disabledMinutes().indexOf(index) < 0\" :class=\"{selected: minute === index}\" @click=\"chooseMinute(index, $event)\">{{index | leftPad}}</li>\n      </ul>\n    </div>\n    <div :class=\"[prefixCls + '-time-picker-panel']\" @mouseover=\"selection('S')\">\n      <ul v-el:s class=\"time-seconds\">\n        <li v-for=\"index in 59\" v-if=\"disabledSeconds().indexOf(index) < 0\" :class=\"{selected: second === index}\" @click=\"chooseSecond(index, $event)\">{{index | leftPad}}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(242);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RangePicker = __webpack_require__(245);
	
	var _RangePicker2 = _interopRequireDefault(_RangePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_DatePicker2.default.RangePicker = _RangePicker2.default;
	
	exports.default = _DatePicker2.default;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(243)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/DatePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(244)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/DatePicker/DatePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Calendar = __webpack_require__(232);
	
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
	    disabled: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
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
	//   <div :class="[prefixCls + '-datepicker']">
	//     <div :class="[prefixCls + '-datepicker-toggle']" @click="inputClick" >
	//       <input :class="[prefixCls + '-datepicker-input']" transition="slide" v-bind="{disabled:disabled}" type="text" :value="value" :placeholder="placeholder" readonly/>
	//       <icon type="calendar"></icon>
	//     </div>
	//     <div :class="[prefixCls + '-datepicker-calendar']">
	//       <calendar :show="show" transition="slide" @change="selectChange" v-ref:calendar :value="value" :format="format" :locale="locale" :disabled-date="disabledDate"></calendar>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-datepicker']\">\n  <div :class=\"[prefixCls + '-datepicker-toggle']\" @click=\"inputClick\" >\n    <input :class=\"[prefixCls + '-datepicker-input']\" transition=\"slide\" v-bind=\"{disabled:disabled}\" type=\"text\" :value=\"value\" :placeholder=\"placeholder\" readonly/>\n    <icon type=\"calendar\"></icon>\n  </div>\n  <div :class=\"[prefixCls + '-datepicker-calendar']\">\n    <calendar :show=\"show\" transition=\"slide\" @change=\"selectChange\" v-ref:calendar :value=\"value\" :format=\"format\" :locale=\"locale\" :disabled-date=\"disabledDate\"></calendar>\n  </div>\n</div>\n";

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(246)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/DatePicker/RangePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(247)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/DatePicker/RangePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DatePicker = __webpack_require__(242);
	
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
/* 247 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-datepicker-rangepicker']\">\n  <date-picker v-ref:start-date :value.sync=\"startDate\" :disabled=\"disabled\" :format=\"format\" placeholder=\"开始日期\" @change=\"onStartDateChange\"></date-picker>\n  <span :class=\"[prefixCls + '-datepicker-rangepicker-separator']\"> - </span>\n  <date-picker v-ref:end-date :value.sync=\"endDate\" :disabled=\"disabled\" :format=\"format\" placeholder=\"结束日期\" :disabled-date=\"disabledEndDate\" @change=\"onEndDateChange\"></date-picker>\n</div>\n";

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cascader = __webpack_require__(249);
	
	var _Cascader2 = _interopRequireDefault(_Cascader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Cascader2.default;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(250)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Cascader/Cascader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(251)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Cascader/Cascader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _Input = __webpack_require__(163);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="[prefixCls + '-cascader']">
	//     <span :class="[prefixCls + '-cascader-picker']">
	//       <v-input readonly @click="toggleMenus" :value="displayValue" :placeholder="placeholder" :style="{width:width}"></v-input>
	//     </span>
	//     <div :class="[prefixCls + '-cascader-menus']" v-show="show" transition="slide">
	//       <ul :class="[prefixCls + '-cascader-menu']" v-for="(index, menu) in menus">
	//         <li :class="[prefixCls + '-cascader-menu-item', selectedOptions[index] === option && prefixCls + '-cascader-selected', option.disabled && (prefixCls + '-cascader-disabled')]"
	//             v-for="option in menu" @click="changeOption(index,option,$event)">{{option.label}}</li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
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
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
	      show: false
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
	  ready: function ready() {
	    var el = this.$el;
	    var me = this;
	    me._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) {
	        me.show = false;
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
	        me.show = false;
	      }
	      me.menus = menus;
	    },
	    toggleMenus: function toggleMenus() {
	      this.show = !this.show;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-cascader']\">\n  <span :class=\"[prefixCls + '-cascader-picker']\">\n    <v-input readonly @click=\"toggleMenus\" :value=\"displayValue\" :placeholder=\"placeholder\" :style=\"{width:width}\"></v-input>\n  </span>\n  <div :class=\"[prefixCls + '-cascader-menus']\" v-show=\"show\" transition=\"slide\">\n    <ul :class=\"[prefixCls + '-cascader-menu']\" v-for=\"(index, menu) in menus\">\n      <li :class=\"[prefixCls + '-cascader-menu-item', selectedOptions[index] === option && prefixCls + '-cascader-selected', option.disabled && (prefixCls + '-cascader-disabled')]\"\n          v-for=\"option in menu\" @click=\"changeOption(index,option,$event)\">{{option.label}}</li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(253);
	
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
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(254)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Modal/Modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(255)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Modal/Modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 254 */
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
/* 255 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"dialog\" :class=\"[prefixCls + '-modal']\" v-show=\"show\" transition=\"fade\"\n  @click=\"clickBack\"\n  >\n  <div v-show=\"show\"\n       :class=\"dialogClassObj\"\n       :style=\"{width: width}\"\n       role=\"document\"\n       transition=\"fade\">\n    <div :class=\"[prefixCls + '-modal-content']\">\n      <slot name=\"modal-header\">\n        <div :class=\"[prefixCls + '-modal-header']\">\n          <button type=\"button\" :class=\"[prefixCls + '-close']\" @click=\"close\"><span>&times;</span></button>\n          <h4 :class=\"[prefixCls + '-modal-title']\">{{title}}</h4>\n        </div>\n      </slot>\n      <div :class=\"[prefixCls + '-modal-body']\" :style=\"{height: height, maxHeight: '500px'}\">\n        <slot name=\"modal-body\">\n        </slot>\n      </div>\n      <slot name=\"modal-footer\">\n        <div :class=\"[prefixCls + '-modal-footer']\">\n          <button type=\"button\" :class=\"[prefixCls + '-btn', prefixCls + '-btn-default']\" @click=\"callback\">确定</button>\n          <button type=\"button\" :class=\"[prefixCls + '-btn', prefixCls + '-btn-tertiary']\" @click=\"close\">取消</button>\n        </div>\n      </slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Table = __webpack_require__(257);
	
	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(258)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Table/Table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(283)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Table/Table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(259);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _concat = __webpack_require__(263);
	
	var _concat2 = _interopRequireDefault(_concat);
	
	var _Icon = __webpack_require__(134);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Dropdown = __webpack_require__(217);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _Spin = __webpack_require__(265);
	
	var _Spin2 = _interopRequireDefault(_Spin);
	
	var _Pagination = __webpack_require__(270);
	
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
	//     <div v-if="pagination" :class="[prefixCls + '-table-pagination']">
	//       <pagination v-ref:pager :show-jumper="true" :show-size-changer="true" @pagination-page-change="changePage" @pagination-size-change="changeSize"></pagination>
	//     </div>
	//   </div>
	// </template>
	//
	// <script type="text/babel">
	exports.default = {
	  props: {
	    pagination: Object,
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
	    if (this.pagination) {
	      this.originDataSource = (0, _concat2.default)(this.dataSource, []);
	      var pager = this.$refs.pager;
	      pager.total = this.dataSource.length;
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
	      handler: function handler(data) {
	        var me = this;
	        // if (me.pagination) {
	        //   me.originDataSource = Array.concat(this.dataSource, [])
	        //   let pager = me.$refs.pager
	        //   me.dataSource = me.originDataSource.slice(pager.currPage || 0, pager.pageSize)
	        // }
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
	      var pager = this.$refs.pager;
	      this.dataSource = this.originDataSource.slice((pageNum - 1) * pager.pageSize, pageNum * pager.pageSize);
	      this.pagination.onChange && this.pagination.onChange(pageNum);
	    },
	    changeSize: function changeSize(current, pageSize) {
	      var pager = this.$refs.pager;
	      this.dataSource = this.originDataSource.slice((current - 1) * pager.pageSize, current * pager.pageSize);
	      this.pagination.onShowSizeChange && this.pagination.onShowSizeChange(current, pageSize);
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

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(260), __esModule: true };

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(261);
	module.exports = __webpack_require__(88).Object.assign;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(86);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(262)});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(107)
	  , gOPS     = __webpack_require__(190)
	  , pIE      = __webpack_require__(191)
	  , toObject = __webpack_require__(123)
	  , IObject  = __webpack_require__(110)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(97)(function(){
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
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ },
/* 264 */
/***/ function(module, exports) {

	// for a legacy code and future fixes
	module.exports = function(){
	  return Function.call.apply(Array.prototype.concat, arguments);
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Spin = __webpack_require__(266);
	
	var _Spin2 = _interopRequireDefault(_Spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spin2.default;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(267)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Spin/Spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(269)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Spin/Spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cssAnimationSupported = __webpack_require__(268);
	
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
/* 268 */
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
/* 269 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"spinClassObj\" v-show=\"show\">\n  <div v-if=\"isSupportAnimation || !tip\" :class=\"[prefixCls + '-sping-point']\">\n      <div></div>\n      <div></div>\n      <div></div>\n  </div>\n  <p v-else :class=\"[prefixCls + '-sping-text']\">{{ tip || '加载中...' }}</p>\n  <div :class=\"[prefixCls + '-sping-content']\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(271);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Jumper = __webpack_require__(273);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Pagination2.default.Jumper = _Jumper2.default;
	
	exports.default = _Pagination2.default;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(272)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pagination.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Jumper = __webpack_require__(273);
	
	var _Jumper2 = _interopRequireDefault(_Jumper);
	
	var _Pager = __webpack_require__(276);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	var _Options = __webpack_require__(279);
	
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
	        _this.$dispatch('pagination-size-change', _this.currPage, _pageSize);
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
	      this.$dispatch('pagination-page-change', pageNum);
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
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(274)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Jumper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(275)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Jumper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 274 */
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
/* 275 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"quickGo\" :class=\"[prefixCls + '-pagination-jump']\">\n    <div :class=\"[prefixCls + '-pagination-jumper-wrap']\">\n      跳至\n      <input type=\"text\" :value=\"_current\" @change=\"_handleChange($event)\" :class=\"inputClassObj\"/>\n      页\n    </div>\n    <button type=\"button\" @click=\"_go\" :class=\"btnClassObj\">\n  跳转</button>\n</div>\n";

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(277)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Pager.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(278)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Pager.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 277 */
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
/* 278 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"pagerClassObj\">\n  <li v-for=\"page in pageRange\"\n      @click=\"pageClick(page.num)\"\n      :class=\"[prefixCls + '-pagination-item', page.className]\" >\n    <span v-if=\"page.className != prefixCls + '-pagination-item-prev' && page.className != prefixCls + '-pagination-item-next'\">\n      {{page.text}}\n    </span>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-prev'\"\n          type=\"prev\"\n          size=\"12\"\n          color=\"#666\" ></icon>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-next'\"\n          type=\"next\"\n          size=\"12\"\n          color=\"#666\"></icon>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-disabled' && page.icon === 'prev'\"\n          type=\"prev\"\n          size=\"12\"\n          color=\"#e6e6e6\"></icon>\n    <icon v-if=\"page.className === prefixCls + '-pagination-item-disabled' && page.icon==='next'\"\n          type=\"next\"\n          size=\"12\"\n          color=\"#e6e6e6\"></icon>\n  </li>\n</ul>\n";

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(280)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Pagination/Options.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Pagination/Options.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(221);
	
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
/* 281 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"showSizeChanger\" :class=\"[prefixCls + '-pagination-selector']\">\n    <v-select :value=\"'' + defaultSize\" @change=\"change\">\n        <v-option value=\"10\">10 条/页</v-option>\n        <v-option value=\"20\">20 条/页</v-option>\n        <v-option value=\"30\">30 条/页</v-option>\n        <v-option value=\"40\">40 条/页</v-option>\n    </v-select>\n    <div :class=\"[prefixCls + '-pagination-totalpage']\">共{{ total }}条数据</div>\n</div>\n";

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-pagination']\">\n<template v-if=\"totalPage > 1\">\n  <options :total=\"total\" :default-size=\"pageSize\" :show-size-changer=\"showSizeChanger\" @pagination-size-change=\"changePageSize\"></options>\n  <jumper\n      :quick-go=\"showJumper ? _handleChange.bind(this) : null\"\n      :curr-page=\"currPage\"\n      :total-page=\"totalPage\"\n      :mini=\"mini\"\n  ></jumper>\n  <pager :page-range=\"pageRange\" :simple=\"simple\"  :mini=\"mini\" :page-click=\"pageClick\"></pager>\n</template>\n</div>\n";

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-table', prefixCls + '-table-'+ size, loading && (prefixCls + '-table-loading')]\">\n  <spin size=\"sm\" v-if=\"loading\"></spin>\n  <!-- <table :class=\"['atui-table-fixed-header','atui-table']\" v-if=\"fixedHeader\">\n</table> -->\n  <div :class=\"[prefixCls + '-table-container', fixedHeader && (prefixCls + '-table-fixed-header')]\">\n    <table>\n      <colgroup>\n        <col v-if=\"rowSelection\"></col>\n        <col v-for=\"column in columns\" :width=\"column.width\"></col>\n      </colgroup>\n      <thead>\n        <tr>\n          <th v-if=\"rowSelection\" :class=\"[prefixCls + '-table-selection-column']\">\n            <input v-if=\"dataSource && dataSource.length\" type=\"checkbox\" v-bind=\"{checked:isCheckedAll,disabled:isDisabledAll}\" @change=\"onCheckAll\"\n            />\n          </th>\n          <th v-for=\"column in columns\" :width=\"column.width\">\n            {{{column['title']}}}\n            <dropdown v-if=\"column.filters\" data-toggle=\"dropdown\" :open=\"filterOpened\">\n              <div data-toggle=\"dropdown\" @click=\"filterOpened = true\">\n                <icon type=\"filter\" size=\"12\"></icon>\n              </div>\n              <div name=\"dropdown-menu\" v-show=\"filterOpened\" transition=\"slide\" :class=\"[prefixCls + '-dropdown-menu', prefixCls + '-table-filter-dropdown']\">\n                <ul>\n                  <li v-for=\"filter in column.filters\">\n                  <label>\n                    <input :type=\"column.filterMultiple === false ? 'radio' : 'checkbox' \" :value=\"filter.value\" v-model=\"filters[column.dataIndex]\" />{{filter.text}}\n                  </label>\n                  </li>\n                </ul>\n                <div :class=\"[prefixCls + '-table-filter-dropdown-btns']\">\n                  <a :class=\"[prefixCls + '-table-filter-dropdown-link confirm']\" @click=\"onFilter(column)\">确定</a>\n                  <a :class=\"[prefixCls + '-table-filter-dropdown-link', prefixCls + '-table-clear']\" @click=\"resetFilter(column)\">重置</a>\n                </div>\n              </div>\n\n            </dropdown>\n            <div v-if=\"dataSource && dataSource.length && column.sorter\" :class=\"[prefixCls + '-table-sorter']\">\n              <icon type=\"caretup\" size=\"10\" @click=\"sortAction(column,$index,'ascend')\" :class=\"[sorderOrder[$index] == 'ascend' && (prefixCls + '-table-active')]\"></icon>\n              <icon type=\"caretdown\" size=\"10\" @click=\"sortAction(column,$index,'descend')\" :class=\"[sorderOrder[$index] == 'descend' && (prefixCls + '-table-active')]\"></icon>\n            </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr v-if=\"!dataSource || !dataSource.length\">\n          <td colspan=\"20\" style=\"text-align: center;\" :class=\"[prefixCls + '-table-empty']\">{{noDataTip}}</td>\n        </tr>\n        <tr v-for=\"(rowIndex, record) in dataSource\" :track-by=\"$index\">\n          <td v-if=\"rowSelection\" :class=\"[prefixCls + '-table-selection-column']\">\n            <input type=\"checkbox\" v-model=\"checkedValues\" :value=\"record[rowKey]\" @change.stop=\"onCheckOne($event,record)\" v-bind=\"rowSelection.getCheckboxProps && rowSelection.getCheckboxProps(record)\"\n            />\n          </td>\n          <td v-for=\"column in columns\">\n            <template v-if=\"column.render && record\">\n              {{{column.render.call(this._context,record[column.dataIndex],record,rowIndex)}}}\n            </template>\n            <template v-else>\n              {{record[column.dataIndex]}}\n            </template>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div v-if=\"pagination\" :class=\"[prefixCls + '-table-pagination']\">\n    <pagination v-ref:pager :show-jumper=\"true\" :show-size-changer=\"true\" @pagination-page-change=\"changePage\" @pagination-size-change=\"changeSize\"></pagination>\n  </div>\n</div>\n";

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Badge = __webpack_require__(285);
	
	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Badge2.default;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Badge/Badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(287)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Badge/Badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 286 */
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
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
/* 287 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"[prefixCls + '-badge']\">\n  <slot></slot>\n  <sup :class=\"[prefixCls + '-badge-dot']\" v-if=\"dot\"></sup>\n  <template v-else>\n    <sup v-if='count > 0' :class=\"[prefixCls + '-badge-count']\">\n      {{count | short}}\n    </sup>\n  </template>\n</span>\n";

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(289);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Slide = __webpack_require__(294);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Carousel2.default.Slide = _Slide2.default;
	
	exports.default = _Carousel2.default;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(290)
	__vue_script__ = __webpack_require__(292)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(293)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Carousel/Carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(291);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(143)(content, {});
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
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[_v-276df37b] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/./src/components/Carousel/Carousel.vue?57215cc9"],"names":[],"mappings":";AAmHA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\n<div class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\n    <indicator></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <slot></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</template>\n\n<script>\nimport EventListener from '../_utils/EventListener.js'\nexport default {\n  props: {\n    indicators: {\n      type: Boolean,\n      default: true\n    },\n    controls: {\n      type: Boolean,\n      default: true\n    },\n    interval: {\n      type: Number,\n      default: 5000\n    }\n  },\n  components: {\n    'indicator': {\n      inherit: true,\n      template: '<li v-for=\"i in indicator\" @click=\"handleIndicatorClick($index)\" v-bind:class=\"{\\'active\\':$index === activeIndex}\"</li>',\n      methods: {\n        handleIndicatorClick (index) {\n          if (this.isAnimating) return false\n          this.isAnimating = true\n          this.activeIndex = index\n        }\n      }\n    }\n  },\n  data () {\n    return {\n      indicator: [],\n      activeIndex: 0,\n      isAnimating: false\n    }\n  },\n  computed: {\n    slider () {\n      return this.$el.querySelectorAll('.item')\n    }\n  },\n  watch: {\n    activeIndex (newVal, oldVal) {\n      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal)\n    }\n  },\n  methods: {\n    slide (direction, selected, prev) {\n      if (this._prevSelectedEvent) this._prevSelectedEvent.remove()\n      if (this._selectedEvent) this._selectedEvent.remove()\n      const prevSelectedEl = this.slider[prev]\n      const selectedEl = this.slider[selected]\n      const transitionendFn = () => {\n        [...this.slider].forEach((el) => { el.className = 'item' })\n        selectedEl.classList.add('active')\n        this.isAnimating = false\n      }\n      direction === 'left' ? selectedEl.classList.add('next') : selectedEl.classList.add('prev')\n      // request property that requires layout to force a layout\n      // var x = selectedEl.clientHeight\n      this._prevSelectedEvent = EventListener.listen(prevSelectedEl, 'transitionend', transitionendFn)\n      this._selectedEvent = EventListener.listen(selectedEl, 'transitionend', transitionendFn)\n      prevSelectedEl.classList.add(direction)\n      selectedEl.classList.add(direction)\n    },\n    nextClick () {\n      if (this.isAnimating) return false\n      this.isAnimating = true\n      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0\n    },\n    prevClick () {\n      if (this.isAnimating) return false\n      this.isAnimating = true\n      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1\n    }\n  },\n  ready () {\n    let intervalID = null\n    const el = this.$el\n    function intervalManager (flag, func, time) {\n      flag ? intervalID = setInterval(func, time) : clearInterval(intervalID)\n    }\n    if (this.interval) {\n      intervalManager(true, this.nextClick, this.interval)\n      el.addEventListener('mouseenter', () => intervalManager(false))\n      el.addEventListener('mouseleave', () => intervalManager(true, this.nextClick, this.interval))\n    }\n  }\n}\n</script>\n\n<style scoped>\n  .carousel-control {\n    cursor: pointer;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(77);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _EventListener = __webpack_require__(170);
	
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
/* 293 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"carousel slide\" data-ride=\"carousel\" _v-276df37b=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-276df37b=\"\">\n    <indicator _v-276df37b=\"\"></indicator>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-276df37b=\"\">\n    <slot _v-276df37b=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <a v-show=\"controls\" class=\"left carousel-control\" @click=\"prevClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Previous</span>\n  </a>\n  <a v-show=\"controls\" class=\"right carousel-control\" @click=\"nextClick\" _v-276df37b=\"\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-276df37b=\"\"></span>\n    <span class=\"sr-only\" _v-276df37b=\"\">Next</span>\n  </a>\n</div>\n";

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(295)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Carousel/Slide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(296)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Carousel/Slide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 295 */
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
/* 296 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(298)
	__vue_script__ = __webpack_require__(300)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(301)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(299);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(143)(content, {});
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
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(142)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-affix {\n  position: fixed;\n}\n", "", {"version":3,"sources":["/./src/components/Affix.vue?b52e3304"],"names":[],"mappings":";AAqFA;EACA,gBAAA;CACA","file":"Affix.vue","sourcesContent":["<template>\n<div>\n  <div v-bind:class=\"{'vue-affix': affixed}\"\n    v-bind:style=\"styles\">\n    <slot></slot>\n  </div>\n</div>\n</template>\n\n<script>\nimport EventListener from './_utils/EventListener.js'\nexport default {\n  props: {\n    offset: {\n      type: Number,\n      default: 0\n    }\n  },\n  data () {\n    return {\n      affixed: false,\n      styles: {}\n    }\n  },\n  methods: {\n    scrolling () {\n      const scrollTop = this.getScroll(window, true)\n      const elementOffset = this.getOffset(this.$el)\n      if (!this.affixed && scrollTop > elementOffset.top) {\n        this.affixed = true\n        this.styles = {\n          top: this.offset + 'px',\n          left: elementOffset.left + 'px',\n          width: this.$el.offsetWidth + 'px'\n        }\n      }\n      if (this.affixed && scrollTop < elementOffset.top) {\n        this.affixed = false\n        this.styles = {}\n      }\n    },\n    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20\n    getScroll (w, top) {\n      let ret = w['page' + (top ? 'Y' : 'X') + 'Offset']\n      const method = 'scroll' + (top ? 'Top' : 'Left')\n      if (typeof ret !== 'number') {\n        const d = w.document\n        // ie6,7,8 standard mode\n        ret = d.documentElement[method]\n        if (typeof ret !== 'number') {\n          // quirks mode\n          ret = d.body[method]\n        }\n      }\n      return ret\n    },\n    getOffset (element) {\n      const rect = element.getBoundingClientRect()\n      const body = document.body\n      const clientTop = element.clientTop || body.clientTop || 0\n      const clientLeft = element.clientLeft || body.clientLeft || 0\n      const scrollTop = this.getScroll(window, true)\n      const scrollLeft = this.getScroll(window)\n      return {\n        top: rect.top + scrollTop - clientTop,\n        left: rect.left + scrollLeft - clientLeft\n      }\n    }\n  },\n  ready () {\n    this._scrollEvent = EventListener.listen(window, 'scroll', this.scrolling)\n    this._resizeEvent = EventListener.listen(window, 'resize', this.scrolling)\n  },\n  beforeDestroy () {\n    if (this._scrollEvent) {\n      this._scrollEvent.remove()\n    }\n    if (this._resizeEvent) {\n      this._resizeEvent.remove()\n    }\n  }\n}\n</script>\n\n<style>\n  .vue-affix {\n    position: fixed;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(170);
	
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
/* 301 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div v-bind:class=\"{'vue-affix': affixed}\"\n    v-bind:style=\"styles\">\n    <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(303);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(304)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Textarea/Textarea.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(305)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Textarea/Textarea.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 304 */
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
/* 305 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-textarea-box']\">\n  <template v-if=\"autosize\">\n    <pre :id=\"preId\"><span>{{content}}</span><br></pre>\n  </template>\n  <textarea v-bind=\"{disabled: isDisabled}\"\n            :maxlength=\"limitWords\"\n            :class=\"textareaClassObj\"\n            :name=\"name\"\n            :placeholder=\"placeholder\"\n            v-model=\"content\"></textarea>\n  <p v-if=\"limitWords\"\n     :class=\"wordClassObj\">{{ curWords }}/{{ limitWords }}</p>\n  <p v-if=\"showWordsCount\"\n     :class=\"[prefixCls + '-textarea-words-area']\">{{ countTips }}{{ curWords }}</p>\n</div>\n";

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Accordion = __webpack_require__(307);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Panel = __webpack_require__(310);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Accordion2.default.Panel = _Panel2.default;
	
	exports.default = _Accordion2.default;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(308)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Accordion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(309)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Accordion/Accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 308 */
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
	    oneAtATime: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
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
/* 309 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-panel-group']\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(311)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Accordion/Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(312)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Accordion/Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 311 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div :class="[prefixCls + '-panel', prefixCls + '-panel-default']">
	//     <div :class="[prefixCls + '-panel-heading']" @click="toggleIsOpen()">
	//       <slot name="panel-header"></slot>
	//     </div>
	//     <div :class="[prefixCls + '-panel-collapse']"
	//       v-el:panel
	//       v-show="isOpen"
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
	    isOpen: {
	      type: Boolean
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
	    },
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
	      this.isOpen = !this.isOpen;
	      this.onToggle(this);
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  ready: function ready() {
	    var panel = this.$els.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    // panel.style.maxHeight = this.height + 'px'
	    if (!this.isOpen) panel.style.display = 'none';
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 312 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-panel', prefixCls + '-panel-default']\">\n    <div :class=\"[prefixCls + '-panel-heading']\" @click=\"toggleIsOpen()\">\n      <slot name=\"panel-header\"></slot>\n    </div>\n    <div :class=\"[prefixCls + '-panel-collapse']\"\n      v-el:panel\n      v-show=\"isOpen\"\n      transition=\"collapse\"\n    >\n      <div :class=\"[prefixCls + '-panel-body']\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(314);
	
	var _Popover2 = _interopRequireDefault(_Popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Popover2.default;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(315)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Popover/Popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(316)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Popover/Popover.vue"
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
	
	var _popoverMixins = __webpack_require__(210);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default]
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div :class="[prefixCls + '-popover-trigger']" v-el:trigger>
	//     <slot>
	//     </slot>
	//   </div>
	//   <div v-el:popover
	//        v-show="show"
	//        :class="popoverClassObj"
	//        :transition="effect">
	//       <div :class="[prefixCls + '-popover-arrow']"></div>
	//       <h3 :class="[prefixCls + '-popover-title']" v-show="title">{{title}}</h3>
	//       <div :class="[prefixCls + '-popover-content']">
	//         {{content}}
	//       </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 316 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-popover-trigger']\" v-el:trigger>\n  <slot>\n  </slot>\n</div>\n<div v-el:popover\n     v-show=\"show\"\n     :class=\"popoverClassObj\"\n     :transition=\"effect\">\n    <div :class=\"[prefixCls + '-popover-arrow']\"></div>\n    <h3 :class=\"[prefixCls + '-popover-title']\" v-show=\"title\">{{title}}</h3>\n    <div :class=\"[prefixCls + '-popover-content']\">\n      {{content}}\n    </div>\n</div>\n";

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tabset = __webpack_require__(318);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tab = __webpack_require__(321);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Tabset2.default.Tab = _Tab2.default;
	
	exports.default = _Tabset2.default;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(319)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tabset.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(320)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tabs/Tabset.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 319 */
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
/* 320 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-tab-wrapper']\">\n  <div :class=\"[prefixCls + '-tab-header']\">\n    <span v-if=\"renderData.length > showLen && showLen >= 3\" :class=\"[prefixCls + '-tab-arrow-prev']\" @click=\"prev\">\n      <icon v-if=\"prev_tabIndex==0\" type=\"prev\" size=\"12\" color=\"#ccc\" style=\"cursor: not-allowed\"></icon>\n      <icon v-else type=\"prev\" size=\"12\"></icon>\n    </span>\n    <ul v-if=\"trigger=='click'\" :class=\"listClassObj\" role=\"tablist\" style=\"width: 99999px;\">\n      <li v-for=\"r in renderData\"\n          :class=\"[$index === active && (prefixCls + '-nav-active'), r.disabled && (prefixCls + '-nav-disabled')]\"\n          @click.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <ul v-else :class=\"listClassObj\" role=\"tablist\" style=\"width: 99999px;\">\n    <li v-for=\"r in renderData\"\n          :class=\"[$index === active && (prefixCls + '-nav-active'), r.disabled && (prefixCls + '-nav-disabled')]\"\n          @mouseenter.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\"\n      >\n          <a href=\"javascript:void(0);\">{{{r.header}}}</a>\n      </li>\n    </ul>\n    <span v-if=\"renderData.length > showLen && showLen >= 3\" :class=\"[prefixCls + '-tab-arrow-next']\" @click=\"next\">\n      <icon v-if=\"next_tabIndex == maxTabIndex\" type=\"next\" size=\"12\" color=\"#ccc\" style=\"cursor: not-allowed\"></icon>\n      <icon v-else type=\"next\" size=\"12\"></icon>\n    </span>\n  </div>\n\n   <!-- Tab panes -->\n   <div class=\"tab-content\" v-el:tab-content>\n      <slot></slot>\n   </div>\n</div>\n\n";

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(322)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tabs/Tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(323)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tabs/Tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 322 */
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
/* 323 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" :class=\"[prefixCls + 'tab-pane']\"\n    v-show=\"show\"\n    :transition=\"transition\"\n>\n  <slot></slot>\n</div>\n";

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Steps = __webpack_require__(325);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	var _Step = __webpack_require__(328);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Steps2.default.Step = _Step2.default;
	
	exports.default = _Steps2.default;

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(326)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(327)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Steps/Steps.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 326 */
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
/* 327 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-steps']\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(329)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Steps/Step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(330)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Steps/Step.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
/* 330 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"stepClassObj\" :style=\"{'width': tailWidth}\">\n <div v-if=\"!lastStep\"\n      :class=\"[prefixCls + '-step-tail']\">\n   <i>\n    <i :style=\"{ backgroundColor: color }\"></i>\n   </i>\n </div>\n <div :class=\"[prefixCls + '-step-head']\">\n   <div :class=\"[prefixCls + '-step-head-inner']\">\n    <span v-if=\"status !== 'finish'\"\n          :class=\"[prefixCls + '-step-icon']\"\n      :style=\"{\n       borderColor: status==='process'?color: '#e9e9e9',\n       backgroundColor: status==='process'?color: '#fff'}\">\n      {{ stepNumber }}\n    </span>\n    <span v-else\n          :class=\"[prefixCls + '-step-finish-icon']\">\n      <icon type=\"success\" size=\"28\" :color=\"color\"></icon>\n    </span>\n   </div>\n </div>\n <div :class=\"[prefixCls + '-step-main']\">\n   <div :class=\"[prefixCls + '-step-main-title']\">{{ title }}</div>\n   <div :class=\"[prefixCls + '-step-main-description']\">{{ description }}</div>\n </div>\n</div>\n";

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tree = __webpack_require__(332);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _TreeNode = __webpack_require__(334);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Tree2.default.TreeNode = _TreeNode2.default;
	
	exports.default = _Tree2.default;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(333)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tree/Tree.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tree/Tree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _TreeNode = __webpack_require__(334);
	
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
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(335)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tree/TreeNode.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(336)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Tree/TreeNode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(134);
	
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
/* 336 */
/***/ function(module, exports) {

	module.exports = "\n<li>\n  <a :title=\"model.name\" @click=\"toggle\">\n    <span v-if=\"isFolder\" :class=\"[prefixCls + '-tree-switcher', open && prefixCls + '-tree-switcher-open']\">\n      <icon type=\"caretup\"></icon>\n    </span>\n    <span :class=\"[prefixCls + '-tree-title']\">\n      {{model.name}}\n    </span>\n  </a>\n  <ul v-show=\"open\" v-if=\"isFolder\" transition=\"slide\" :class=\"[open && prefixCls + '-tree-child-tree-open']\">\n    <tree-node\n      v-for=\"model in model.children\"\n      :model=\"model\">\n    </tree-node>\n  </ul>\n</li>\n";

/***/ },
/* 337 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"[prefixCls + '-tree']\">\n  <tree-node\n    :model=\"dataSource\">\n  </tree-node>\n</ul>\n";

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Menu = __webpack_require__(339);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(342);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(345);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(348);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Divider from './Divider.vue'
	
	_Menu2.default.SubMenu = _SubMenu2.default;
	_Menu2.default.MenuItem = _MenuItem2.default;
	_Menu2.default.MenuItemGroup = _MenuItemGroup2.default;
	// Menu.Divider = Divider

	exports.default = _Menu2.default;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(340)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(341)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Menu/Menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 340 */
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
/* 341 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"[prefixCls + '-menu', prefixCls + '-menu-root', prefixCls + '-menu-'+ mode]\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(343)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/SubMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(344)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Menu/SubMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(175);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Icon = __webpack_require__(134);
	
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
/* 344 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"[prefixCls + '-menu-submenu', prefixCls + '-menu-submenu-' + mode, show && (prefixCls + '-menu-submenu-open')]\">\n  <div :class=\"[prefixCls + '-menu-submenu-title']\" @click=\"triggerSub\">\n    {{title}}\n    <icon type=\"down\" :class=\"[prefixCls + '-menu-icon']\"></icon>\n  </div>\n  <ul :class=\"[prefixCls + '-menu', prefixCls + '-menu-sub', prefixCls + '-menu-'+ mode]\" v-show=\"show\" transition=\"collapse\">\n    <slot></slot>\n  </ul>\n</li>\n";

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(346)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/MenuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(347)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Menu/MenuItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 346 */
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
/* 347 */
/***/ function(module, exports) {

	module.exports = "\n<li role=\"menuitem\"\n  :class=\"[prefixCls + '-menu-item', disabled && (prefixCls + '-menu-item-disabled') , selected && (prefixCls + '-menu-item-selected')]\"\n  style=\"padding-left:48px\"\n  @click=\"selectItem($event)\"\n>\n  <slot></slot>\n</li>\n";

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(349)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Menu/MenuItemGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(350)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Menu/MenuItemGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 349 */
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
/* 350 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"[prefixCls + '-menu-item-group']\">\n  <div :class=\"[prefixCls + '-menu-item-group-title']\">{{title}}</div>\n  <ul :class=\"[prefixCls + '-menu-item-group-list']\">\n    <slot></slot>\n  </ul>\n</li>\n";

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Breadcrumb = __webpack_require__(352);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(355);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Breadcrumb2.default.BreadcrumbItem = _BreadcrumbItem2.default;
	
	exports.default = _Breadcrumb2.default;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(353)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/Breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(354)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Breadcrumb/Breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 353 */
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
/* 354 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"[prefixCls + '-breadcrumbs']\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(356)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/BreadcrumbItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(357)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/components/Breadcrumb/BreadcrumbItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 356 */
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
/* 357 */
/***/ function(module, exports) {

	module.exports = "\n\t<span :class=\"[prefixCls + '-breadcrumb']\">\n\t\t<a v-if=\"href\"\n       :href=\"href\"\n       :class=\"[prefixCls + '-breadcrumb-link']\">\n\t\t\t<slot></slot>\n\t\t</a>\n\t\t<span v-else\n          :class=\"[prefixCls + '-breadcrumb-link']\">\n\t\t\t<slot></slot>\n\t\t</span>\n\t\t<span :class=\"[prefixCls + '-breadcrumb-slash']\">{{ slash }}</span>\n\t</span>\n";

/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = "\n<header class=\"navbar navbar-top bs-docs-nav\" id=\"top\" role=\"banner\">\n  <v-row class=\"container\">\n    <v-col span=\"5\">\n      <h1><a href=\"components.html\">ATUI</a></h1>\n    </v-col>\n    <v-col span=\"25\">\n      <v-menu mode=\"horizontal\">\n        <menu-item><a href=\"components.html\">组件</a></menu-item>\n        <menu-item><a href=\"widgets.html\">widgets(业务组件)</a></menu-item>\n        <menu-item><a href=\"filters.html\">filters(数据过滤器)</a></menu-item>\n        <menu-item><a href=\"http://gitlab.alibaba-inc.com/aliqin/atui/\">GitLab</a></menu-item>\n        <menu-item><a href=\"http://ued.aliqin.alibaba.net/webcompon/\">视觉稿</a></menu-item>\n      </v-menu>\n    </v-col>\n  </v-row>\n</header>\n<ul class=\"themes\" id=\"J_header\">\n  <li v-for=\"theme in themes\" :class=\"{active:theme.active}\" :style=\"{backgroundColor:theme.color}\" @click=\"changeTheme(theme.csslink,$event)\" :title=\"theme.name\">\n  </li>\n</ul>\n";

/***/ },
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(427)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/container.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 427 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container bs-docs-container\">\n  <div class=\"atui-row\">\n      <slot></slot>\n  </div>\n</div>\n";

/***/ },
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(481)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/filters/phoneNumberDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(484)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/filters/phoneNumberDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(482);
	
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
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _phoneNumber = __webpack_require__(483);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.filter('phoneNumber', _phoneNumber2.default);
	
	module.exports = {};

/***/ },
/* 483 */
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
/* 484 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"bs-docs-section\" id=\"phonenumber\">\n    <h3 class=\"page-header\"><a href=\"#phonenumber\" class=\"anchor\">手机号码格式化 phonenumber</a></h3>\n    <div class=\"bs-example\">\n    <input type=\"text\" v-model=\"number\" />\n    <div>{{number | phoneNumber}}</div>\n    </div>\n<pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<input type=\"text\" v-model=\"number\" />\n<div>{{number | phoneNumber}}</div>\n</script></code></pre>\n  </div>\n";

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(486);
	__webpack_require__(487);
	__webpack_require__(488);

/***/ },
/* 486 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 487 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 488 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 489 */
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
/* 490 */
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

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(77);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _headerDocs = __webpack_require__(131);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _Affix = __webpack_require__(297);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(426);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _phoneNumberDocs = __webpack_require__(480);
	
	var _phoneNumberDocs2 = _interopRequireDefault(_phoneNumberDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(485);
	__webpack_require__(489);
	__webpack_require__(490);
	
	// filters
	
	
	Vue.config.debug = true;
	
	new Vue({
	  el: 'body',
	  components: {
	    headerDocs: _headerDocs2.default,
	    affix: _Affix2.default,
	    container: _container2.default,
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

/***/ }
/******/ ]);
//# sourceMappingURL=filters-docs.js.map