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

	module.exports = __webpack_require__(492);


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
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
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
/* 491 */,
/* 492 */
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
	
	var _addressSelectDocs = __webpack_require__(493);
	
	var _addressSelectDocs2 = _interopRequireDefault(_addressSelectDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(485);
	__webpack_require__(489);
	__webpack_require__(490);
	//widgets
	
	
	Vue.config.debug = true;
	
	new Vue({
	  el: 'body',
	  components: {
	    headerDocs: _headerDocs2.default,
	    affix: _Affix2.default,
	    container: _container2.default,
	    addressSelectDocs: _addressSelectDocs2.default
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
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(494)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/widgets/addressSelectDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(501)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/docs/example/widgets/addressSelectDocs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _widgets = __webpack_require__(495);
	
	exports.default = {
	  data: function data() {
	    return {
	      defaultAddr1: {
	        provinceId: '440000'
	      },
	      defaultAddr2: {
	        provinceId: '440000',
	        cityId: '440800'
	      },
	      defaultAddr3: {
	        provinceId: '440000',
	        cityId: '440800',
	        countyId: '440883'
	      },
	      defaultAddr4: {
	        provinceId: '440000',
	        cityId: '440800',
	        countyId: '440883',
	        streetId: '440883001'
	      }
	    };
	  },
	
	  components: {
	    AddressSelect: _widgets.AddressSelect
	  },
	  events: {
	    'select-province': function selectProvince(prov, addressSelectVue) {
	      console.log('选择的省份是：' + prov.provinceName);
	      console.log('选择的省份ID是：' + prov.provinceId);
	    },
	    'select-city': function selectCity(city, addressSelectVue) {
	      console.log('选择的城市是：' + city.cityName);
	      console.log('选择的城市ID是：' + city.cityId);
	    },
	    'select-county': function selectCounty(county, addressSelectVue) {
	      console.log('选择的县/区是：' + county.countyName);
	      console.log('选择的县/区ID是：' + county.countyId);
	    },
	    'select-street': function selectStreet(street, addressSelectVue) {
	      console.log('选择的街道是：' + street.streetName);
	      console.log('选择的街道ID是：' + street.streetId);
	    }
	  },
	  attached: function attached() {
	    var $btn = document.getElementById('J_click');
	    var self = this;
	
	    $btn.onclick = function () {
	      self.defaultAddr4 = {
	        provinceId: '140000',
	        cityId: '140200',
	        countyId: '140227'
	      };
	    };
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//
	//   <div class="bs-docs-section" id="addressselect">
	//     <h3 class="page-header"><a href="#addressselect" class="anchor">AddressSelect 地址选择 </a></h3>
	//     <div class="bs-example">
	//       <h4>无默认选中</h4>
	//       <address-select large level="2" placeholder="请选择省市"></address-select>
	//       <br>
	//       <address-select small level="3" placeholder="请选择省市区"></address-select>
	//       <br>
	//       <address-select level="4" placeholder="请选择省市区街道"></address-select>
	//       <br>
	//       <h4>有默认选中</h4>
	//       <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr1"></address-select>
	//       <br>
	//       <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr2"></address-select>
	//       <br>
	//       <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr3"></address-select>
	//       <br>
	//       <address-select level="4" placeholder="请选择省市区街道" :default-addr="defaultAddr4"></address-select>
	//       <br>
	//       <button type="button" class="btn" id="J_click">点击</button>
	//     </div>
	//     <pre><code class="language-markup"><script type="language-mark-up">
	// <address-select large level="4" placeholder="请选择省市区街道" :default-addr.sync="defaultAddr1"></address-select>
	// <address-select small level="4" placeholder="请选择省市区街道" :default-addr.sync="defaultAddr2"></address-select>
	// <address-select level="4" placeholder="请选择省市区街道" :default-addr.sync="defaultAddr3"></address-select>
	// <address-select level="4" placeholder="请选择省市区街道" :default-addr.sync="defaultAddr4"></address-select>
	//     </script></code></pre>
	//     </script>
	//     </code>
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
	//           <td>预期值的提示信息</td>
	//         </tr>
	//         <tr>
	//           <td>level</td>
	//           <td><code>String</code></td>
	//           <td><code>4</code></td>
	//           <td>省份-城市-县区-街道四级地址，要显示几级</td>
	//         </tr>
	//         <tr>
	//           <td>large</td>
	//           <td></td>
	//           <td></td>
	//           <td>组件尺寸，大</td>
	//         </tr>
	//         <tr>
	//           <td>small</td>
	//           <td></td>
	//           <td></td>
	//           <td>组件尺寸，小</td>
	//         </tr>
	//         <tr>
	//           <td>default-addr</td>
	//           <td><code>Object</code></td>
	//           <td><code>{
	//         provinceId: '',
	//         cityId: '',
	//         countyId: '',
	//         streetId: ''
	//       }</code></td>
	//           <td>默认要选中的省份、城市、县/区、街道对应ID</td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AddressSelect = __webpack_require__(496);
	
	var _AddressSelect2 = _interopRequireDefault(_AddressSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueWidget = {
	  AddressSelect: _AddressSelect2.default
	};
	// require.ensure([], function(require) {
	//   VueWidget.AddressSelect = require('./AddressSelect/')
	//   console.log(VueWidget.AddressSelect)
	// })
	module.exports = VueWidget;

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AddressSelect = __webpack_require__(497);
	
	var _AddressSelect2 = _interopRequireDefault(_AddressSelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _AddressSelect2.default;

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(498)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/widgets/AddressSelect/AddressSelect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(500)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/chenchaoqun/GitLab/aliqin/vue-component/src/widgets/AddressSelect/AddressSelect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _addr = __webpack_require__(499);
	
	var _addr2 = _interopRequireDefault(_addr);
	
	var _EventListener = __webpack_require__(170);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="address-box" :class="classObj" @click.stop="showAddrPopFun" @blur="hideAddrPopFun">
	//     <div v-if="province" class="ad-select has-select" v-html="selectAddr"></div>
	//     <div v-else class="ad-select">{{placeholder}}</div>
	//     <i class="ad-drop" :class="{'drop-down': showAddrPop}"></i>
	//     <div class="ad-overlay" v-show="showAddrPop">
	//       <div class="ad-overlay-container">
	//         <div class="tab-list">
	//           <ul>
	//             <li v-for="tab in tabList" :class="{'active': current == tab.id}" :style="{'width': (100/tabList.length)+'%'}" @click.stop.stop="navChoose(tab.id)">{{tab.name}}</li>
	//           </ul>
	//         </div>
	//         <div class="tab-content">
	//           <div class="province-content" v-show="current == 'province'">
	//             <dl v-for="key in list.provinceList">
	//               <dt>{{$key}}</dt>
	//               <dd>
	//                 <a v-for="prov in key" :title="prov[1]" :attr-id="prov[0]" href="javascript:" @click="chooseProvince(prov[0], prov[1])" :class="{'active': provinceId == prov[0]}">
	//                   <input v-if="provinceId == prov[0]" :value="prov[1]" type="hidden" v-model="province" />
	//                   {{prov[1]}}
	//                 </a>
	//               </dd>
	//             </dl>
	//           </div>
	//           <div class="city-content" v-show="current == 'city'">
	//             <dl>
	//               <dd>
	//                 <template v-for="item in list.countyList">
	//                   <a v-if="item[2] == provinceId" :title="item[1]" attr-id="item[0]}}" href="javascript:" @click.stop="chooseCity(item[0], item[1])" :class="{'active': cityId == item[0]}" track-by="item[0]">
	//                     <input v-if="cityId == item[0]" :value="item[1]" type="hidden" v-model="city" />
	//                     {{item[1]}}
	//                   </a>
	//                 </template>
	//               </dd>
	//             </dl>
	//           </div>
	//           <div class="county-content" v-if="tabList[2]" v-show="current == 'county'">
	//             <dl>
	//               <dd>
	//                 <template v-for="item in list.countyList">
	//                   <a v-if="item[2] == cityId" :title="item[1]" :attr-id="item[0]" href="javascript:" @click.stop="chooseCounty(item[0], item[1])" :class="{'active': countyId == item[0]}" track-by="item[0]">
	//                     <input v-if="countyId == item[0]" :value="item[1]" type="hidden" v-model="county" />
	//                     {{item[1]}}
	//                   </a>
	//                 </template>
	//               </dd>
	//             </dl>
	//           </div>
	//           <div class="street-content" v-if="tabList[3]" v-show="current == 'street'">
	//             <dl>
	//               <dd>
	//                 <template v-for="item in list.streetList">
	//                   <a :title="item[0]}}" :attr-id="$key" :parent-id="item[1]" href="javascript:" @click.stop="chooseStreet($key, item[0])" :class="{'active': streetId == $key}" track-by="$key">
	//                     <input v-if="streetId == $key" value="item[0]}}" type="hidden" v-model="street" />
	//                     {{item[0]}}
	//                   </a>
	//                 </template>
	//               </dd>
	//             </dl>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	//
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    level: {
	      type: String,
	      default: '4'
	    },
	    placeholder: String,
	    defaultAddr: {
	      type: Object,
	      default: function _default() {
	        return {
	          provinceId: '',
	          cityId: '',
	          countyId: '',
	          streetId: ''
	        };
	      }
	    },
	    large: Boolean,
	    small: Boolean
	  },
	  data: function data() {
	    return {
	      allTab: [{
	        name: '省份',
	        id: 'province'
	      }, {
	        name: '城市',
	        id: 'city'
	      }, {
	        name: '县区',
	        id: 'county'
	      }, {
	        name: '街道',
	        id: 'street'
	      }],
	      showAddrPop: false,
	      current: 'province',
	      list: {
	        provinceList: _addr2.default.province,
	        countyList: _addr2.default.county,
	        streetList: {}
	      },
	      province: '',
	      city: '',
	      county: '',
	      street: '',
	      classObj: {
	        'large': this.large,
	        'small': this.small
	      },
	      provinceId: this.defaultAddr.provinceId,
	      cityId: this.defaultAddr.cityId,
	      countyId: this.defaultAddr.countyId,
	      streetId: this.defaultAddr.streetId
	    };
	  },
	
	  watch: {
	    defaultAddr: function defaultAddr(newVal, oldVal) {
	      if (newVal.provinceId !== oldVal.provinceId) {
	        this.province = '';
	        this.city = '';
	        this.county = '';
	        this.street = '';
	        this.provinceId = this.defaultAddr.provinceId || '';
	        this.cityId = this.defaultAddr.cityId || '';
	        this.countyId = this.defaultAddr.countyId || '';
	        this.getStreet();
	        this.streetId = this.defaultAddr.streetId || '';
	      }
	    }
	  },
	  computed: {
	    // provinceId () {
	    //   return this.defaultAddr.provinceId
	    // },
	    // cityId () {
	    //   return this.defaultAddr.cityId
	    // },
	    // countyId () {
	    //   return this.defaultAddr.countyId
	    // },
	    // streetId () {
	    //   return this.defaultAddr.streetId
	    // },
	
	    tabList: function tabList() {
	      var level = this.level - 0;
	      level = typeof level === 'number' ? level : 4;
	      return this.allTab.slice(0, level);
	    },
	    selectAddr: function selectAddr() {
	      var text = this.province;
	      var space = '<span>/</span>';
	      if (this.city) {
	        text = text + space + this.city;
	      }
	
	      if (this.county) {
	        text = text + space + this.county;
	      }
	
	      if (this.street) {
	        text = text + space + this.street;
	      }
	
	      return text;
	    }
	  },
	  ready: function ready() {
	    var self = this;
	    var el = this.$el;
	
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) {
	        self.hideAddrPopFun();
	      }
	    });
	
	    if (this.provinceId && this.cityId && this.countyId) {
	      this.getStreet();
	    }
	
	    this.defaultTab();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  methods: {
	    /**
	     * 点击el节点，显示地址pop框
	     */
	
	    showAddrPopFun: function showAddrPopFun() {
	      this.showAddrPop = true;
	    },
	    hideAddrPopFun: function hideAddrPopFun() {
	      this.showAddrPop = false;
	    },
	    defaultTab: function defaultTab() {
	      var level = this.level;
	
	      if (this.streetId || this.countyId) {
	        if (level > 3) {
	          this.current = 'street';
	        } else if (level > 2) {
	          this.current = 'county';
	        } else if (level > 1) {
	          this.current = 'city';
	        }
	        return;
	      }
	
	      if (this.cityId) {
	        if (level > 2) {
	          this.current = 'county';
	        } else if (level > 1) {
	          this.current = 'city';
	        }
	        return;
	      }
	
	      if (this.provinceId) {
	        if (level > 1) {
	          this.current = 'city';
	        }
	        return;
	      }
	    },
	
	    /**
	     * 异步获取街道列表
	     */
	    getStreet: function getStreet() {
	      var self = this;
	      self.jsonp({
	        url: '//lsp.wuliu.taobao.com/locationservice/addr/output_address_town.do',
	        data: {
	          l1: self.provinceId,
	          l2: self.cityId,
	          l3: self.countyId
	        },
	        time: 10000,
	        callback: 'callback',
	        success: function success(res) {
	          if (res && res.success) {
	            self.list.streetList = res.result || {};
	          }
	        },
	        fail: function fail(res) {
	          throw new Error(res.msg);
	        }
	      });
	    },
	
	    /**
	     * 实现jsonp调用
	     */
	    jsonp: function jsonp(options) {
	      options = options || {};
	
	      // 创建 script 标签并加入到页面中
	      var callbackName = ('jsonp_' + Math.random()).replace('.', '');
	      var oHead = document.getElementsByTagName('head')[0];
	      options.data[options.callback] = callbackName;
	      var params = this.formatParams(options.data);
	      var oS = document.createElement('script');
	      oHead.appendChild(oS);
	
	      // 创建jsonp回调函数
	      window[callbackName] = function (json) {
	        oHead.removeChild(oS);
	        clearTimeout(oS.timer);
	        window[callbackName] = null;
	        options.success && options.success(json);
	      };
	
	      // 发送请求
	      oS.src = options.url + '?' + params;
	
	      // 超时处理
	      if (options.time) {
	        oS.timer = setTimeout(function () {
	          window[callbackName] = null;
	          oHead.removeChild(oS);
	          options.fail && options.fail({ message: '超时' });
	        }, options.time);
	      }
	    },
	
	    /**
	     * 格式化jsonp参数
	     */
	    formatParams: function formatParams(data) {
	      var arr = [];
	      for (var name in data) {
	        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	      }
	      return arr.join('&');
	    },
	
	    /**
	     * 切换省市区街道导航
	     */
	    navChoose: function navChoose(index) {
	      this.current = index;
	    },
	    chooseProvince: function chooseProvince(provId, province) {
	      this.province = province;
	      this.provinceId = provId;
	      this.current = this.tabList[1].id;
	      this.changeProvinceId();
	      this.$dispatch('select-province', {
	        provinceName: this.province,
	        provinceId: this.provinceId
	      }, this);
	    },
	    chooseCity: function chooseCity(cityId, city) {
	      var tabLen = this.tabList.length;
	      this.city = city;
	      this.cityId = cityId;
	      if (tabLen > 2) {
	        this.current = this.tabList[2].id;
	      } else {
	        this.hideAddrPopFun();
	      }
	      this.changeCityId();
	      this.$dispatch('select-city', {
	        cityName: this.city,
	        cityId: this.cityId
	      }, this);
	    },
	    chooseCounty: function chooseCounty(countyId, county) {
	      var tabLen = this.tabList.length;
	      this.county = county;
	      this.countyId = countyId;
	      if (tabLen > 3) {
	        this.current = this.tabList[3].id;
	      } else {
	        this.hideAddrPopFun();
	      }
	      this.changeCountyId();
	      this.$dispatch('select-county', {
	        countyName: this.county,
	        countyId: this.countyId
	      }, this);
	    },
	    chooseStreet: function chooseStreet(streetId, street) {
	      this.street = street;
	      this.streetId = streetId;
	      this.hideAddrPopFun();
	      this.$dispatch('select-street', {
	        streetName: this.street,
	        streetId: this.streetId
	      }, this);
	    },
	    changeProvinceId: function changeProvinceId() {
	      this.cityId = '';
	      this.city = '';
	      this.county = '';
	      this.countyId = '';
	      this.street = '';
	      this.streetId = '';
	    },
	    changeCityId: function changeCityId() {
	      this.county = '';
	      this.countyId = '';
	      this.street = '';
	      this.streetId = '';
	    },
	    changeCountyId: function changeCountyId() {
	      this.street = '';
	      this.streetId = '';
	      this.getStreet();
	    }
	  }
	};
	
	// </script>

	/* generated by vue-loader */

/***/ },
/* 499 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var province={'A-G':[['340000','安徽'],['110000','北京'],['500000','重庆'],['350000','福建'],['620000','甘肃'],['440000','广东'],['450000','广西'],['520000','贵州']],'H-K':[['460000','海南'],['130000','河北'],['230000','黑龙江'],['410000','河南'],['420000','湖北'],['430000','湖南'],['320000','江苏'],['360000','江西'],['220000','吉林']],'L-S':[['210000','辽宁'],['150000','内蒙古'],['640000','宁夏'],['630000','青海'],['370000','山东'],['310000','上海'],['140000','山西'],['610000','陕西'],['510000','四川']],'T-Z':[['120000','天津'],['650000','新疆'],['540000','西藏'],['530000','云南'],['330000','浙江']]};var county=[['110100','北京','110000','0'],['110101','东城','110100','0'],['110102','西城','110100','0'],['110105','朝阳','110100','0'],['110106','丰台','110100','0'],['110107','石景山','110100','0'],['110108','海淀','110100','0'],['110109','门头沟','110100','0'],['110111','房山','110100','0'],['110112','通州','110100','0'],['110113','顺义','110100','0'],['110114','昌平','110100','0'],['110115','大兴','110100','0'],['110116','怀柔','110100','0'],['110117','平谷','110100','0'],['110228','密云','110100','0'],['110229','延庆','110100','0'],['120100','天津','120000','0'],['120101','和平','120100','0'],['120102','河东','120100','0'],['120103','河西','120100','0'],['120104','南开','120100','0'],['120105','河北','120100','0'],['120106','红桥','120100','0'],['120110','东丽','120100','0'],['120111','西青','120100','0'],['120112','津南','120100','0'],['120113','北辰','120100','0'],['120114','武清','120100','0'],['120115','宝坻','120100','0'],['120116','滨海','120100','0'],['120221','宁河','120100','0'],['120223','静海','120100','0'],['120225','蓟县','120100','0'],['130100','石家庄','130000','0'],['130102','长安','130100','0'],['130103','桥东','130100','0'],['130104','桥西','130100','0'],['130105','新华','130100','0'],['130107','井陉矿','130100','0'],['130108','裕华','130100','0'],['130121','井陉','130100','0'],['130123','正定','130100','0'],['130124','栾城','130100','0'],['130125','行唐','130100','0'],['130126','灵寿','130100','0'],['130127','高邑','130100','0'],['130128','深泽','130100','0'],['130129','赞皇','130100','0'],['130130','无极','130100','0'],['130131','平山','130100','0'],['130132','元氏','130100','0'],['130133','赵县','130100','0'],['130181','辛集','130100','0'],['130182','藁城','130100','0'],['130183','晋州','130100','0'],['130184','新乐','130100','0'],['130185','鹿泉','130100','0'],['130200','唐山','130000','0'],['130202','路南','130200','0'],['130203','路北','130200','0'],['130204','古冶','130200','0'],['130205','开平','130200','0'],['130207','丰南','130200','0'],['130208','丰润','130200','0'],['130223','滦县','130200','0'],['130224','滦南','130200','0'],['130225','乐亭','130200','0'],['130227','迁西','130200','0'],['130229','玉田','130200','0'],['130230','曹妃甸','130200','0'],['130281','遵化','130200','0'],['130283','迁安','130200','0'],['130300','秦皇岛','130000','0'],['130302','海港','130300','0'],['130303','山海关','130300','0'],['130304','北戴河','130300','0'],['130321','青龙','130300','0'],['130322','昌黎','130300','0'],['130323','抚宁','130300','0'],['130324','卢龙','130300','0'],['130400','邯郸','130000','0'],['130402','邯山','130400','0'],['130403','丛台','130400','0'],['130404','复兴','130400','0'],['130406','峰峰矿','130400','0'],['130421','邯郸','130400','0'],['130423','临漳','130400','0'],['130424','成安','130400','0'],['130425','大名','130400','0'],['130426','涉县','130400','0'],['130427','磁县','130400','0'],['130428','肥乡','130400','0'],['130429','永年','130400','0'],['130430','邱县','130400','0'],['130431','鸡泽','130400','0'],['130432','广平','130400','0'],['130433','馆陶','130400','0'],['130434','魏县','130400','0'],['130435','曲周','130400','0'],['130481','武安','130400','0'],['130500','邢台','130000','0'],['130502','桥东','130500','0'],['130503','桥西','130500','0'],['130521','邢台','130500','0'],['130522','临城','130500','0'],['130523','内丘','130500','0'],['130524','柏乡','130500','0'],['130525','隆尧','130500','0'],['130526','任县','130500','0'],['130527','南和','130500','0'],['130528','宁晋','130500','0'],['130529','巨鹿','130500','0'],['130530','新河','130500','0'],['130531','广宗','130500','0'],['130532','平乡','130500','0'],['130533','威县','130500','0'],['130534','清河','130500','0'],['130535','临西','130500','0'],['130581','南宫','130500','0'],['130582','沙河','130500','0'],['130600','保定','130000','0'],['130602','新市','130600','0'],['130603','北市','130600','0'],['130604','南市','130600','0'],['130621','满城','130600','0'],['130622','清苑','130600','0'],['130623','涞水','130600','0'],['130624','阜平','130600','0'],['130625','徐水','130600','0'],['130626','定兴','130600','0'],['130627','唐县','130600','0'],['130628','高阳','130600','0'],['130629','容城','130600','0'],['130630','涞源','130600','0'],['130631','望都','130600','0'],['130632','安新','130600','0'],['130633','易县','130600','0'],['130634','曲阳','130600','0'],['130635','蠡县','130600','0'],['130636','顺平','130600','0'],['130637','博野','130600','0'],['130638','雄县','130600','0'],['130681','涿州','130600','0'],['130682','定州','130600','0'],['130683','安国','130600','0'],['130684','高碑店','130600','0'],['130700','张家口','130000','0'],['130702','桥东','130700','0'],['130703','桥西','130700','0'],['130705','宣化区','130700','0'],['130706','下花园','130700','0'],['130721','宣化县','130700','0'],['130722','张北','130700','0'],['130723','康保','130700','0'],['130724','沽源','130700','0'],['130725','尚义','130700','0'],['130726','蔚县','130700','0'],['130727','阳原','130700','0'],['130728','怀安','130700','0'],['130729','万全','130700','0'],['130730','怀来','130700','0'],['130731','涿鹿','130700','0'],['130732','赤城','130700','0'],['130733','崇礼','130700','0'],['130800','承德','130000','0'],['130802','双桥','130800','0'],['130803','双滦','130800','0'],['130804','鹰手营子矿','130800','0'],['130821','承德','130800','0'],['130822','兴隆','130800','0'],['130823','平泉','130800','0'],['130824','滦平','130800','0'],['130825','隆化','130800','0'],['130826','丰宁','130800','0'],['130827','宽城','130800','0'],['130828','围场','130800','0'],['130900','沧州','130000','0'],['130902','新华','130900','0'],['130903','运河','130900','0'],['130921','沧县','130900','0'],['130922','青县','130900','0'],['130923','东光','130900','0'],['130924','海兴','130900','0'],['130925','盐山','130900','0'],['130926','肃宁','130900','0'],['130927','南皮','130900','0'],['130928','吴桥','130900','0'],['130929','献县','130900','0'],['130930','孟村','130900','0'],['130981','泊头','130900','0'],['130982','任丘','130900','0'],['130983','黄骅','130900','0'],['130984','河间','130900','0'],['131000','廊坊','130000','0'],['131002','安次','131000','0'],['131003','广阳','131000','0'],['131022','固安','131000','0'],['131023','永清','131000','0'],['131024','香河','131000','0'],['131025','大城','131000','0'],['131026','文安','131000','0'],['131028','大厂','131000','0'],['131081','霸州','131000','0'],['131082','三河','131000','0'],['131100','衡水','130000','0'],['131102','桃城','131100','0'],['131121','枣强','131100','0'],['131122','武邑','131100','0'],['131123','武强','131100','0'],['131124','饶阳','131100','0'],['131125','安平','131100','0'],['131126','故城','131100','0'],['131127','景县','131100','0'],['131128','阜城','131100','0'],['131181','冀州','131100','0'],['131182','深州','131100','0'],['140100','太原','140000','0'],['140105','小店','140100','0'],['140106','迎泽','140100','0'],['140107','杏花岭','140100','0'],['140108','尖草坪','140100','0'],['140109','万柏林','140100','0'],['140110','晋源','140100','0'],['140121','清徐','140100','0'],['140122','阳曲','140100','0'],['140123','娄烦','140100','0'],['140181','古交','140100','0'],['140200','大同','140000','0'],['140202','城区','140200','0'],['140203','矿区','140200','0'],['140211','南郊','140200','0'],['140212','新荣','140200','0'],['140221','阳高','140200','0'],['140222','天镇','140200','0'],['140223','广灵','140200','0'],['140224','灵丘','140200','0'],['140225','浑源','140200','0'],['140226','左云','140200','0'],['140227','大同','140200','0'],['140300','阳泉','140000','0'],['140302','城区','140300','0'],['140303','矿区','140300','0'],['140311','郊区','140300','0'],['140321','平定','140300','0'],['140322','盂县','140300','0'],['140400','长治','140000','0'],['140421','长治','140400','0'],['140423','襄垣','140400','0'],['140424','屯留','140400','0'],['140425','平顺','140400','0'],['140426','黎城','140400','0'],['140427','壶关','140400','0'],['140428','长子','140400','0'],['140429','武乡','140400','0'],['140430','沁县','140400','0'],['140431','沁源','140400','0'],['140481','潞城','140400','0'],['140482','城区','140400','0'],['140483','郊区','140400','0'],['140500','晋城','140000','0'],['140502','城区','140500','0'],['140521','沁水','140500','0'],['140522','阳城','140500','0'],['140524','陵川','140500','0'],['140525','泽州','140500','0'],['140581','高平','140500','0'],['140600','朔州','140000','0'],['140602','朔城','140600','0'],['140603','平鲁','140600','0'],['140621','山阴','140600','0'],['140622','应县','140600','0'],['140623','右玉','140600','0'],['140624','怀仁','140600','0'],['140700','晋中','140000','0'],['140702','榆次','140700','0'],['140721','榆社','140700','0'],['140722','左权','140700','0'],['140723','和顺','140700','0'],['140724','昔阳','140700','0'],['140725','寿阳','140700','0'],['140726','太谷','140700','0'],['140727','祁县','140700','0'],['140728','平遥','140700','0'],['140729','灵石','140700','0'],['140781','介休','140700','0'],['140800','运城','140000','0'],['140802','盐湖','140800','0'],['140821','临猗','140800','0'],['140822','万荣','140800','0'],['140823','闻喜','140800','0'],['140824','稷山','140800','0'],['140825','新绛','140800','0'],['140826','绛县','140800','0'],['140827','垣曲','140800','0'],['140828','夏县','140800','0'],['140829','平陆','140800','0'],['140830','芮城','140800','0'],['140881','永济','140800','0'],['140882','河津','140800','0'],['140900','忻州','140000','0'],['140902','忻府','140900','0'],['140921','定襄','140900','0'],['140922','五台','140900','0'],['140923','代县','140900','0'],['140924','繁峙','140900','0'],['140925','宁武','140900','0'],['140926','静乐','140900','0'],['140927','神池','140900','0'],['140928','五寨','140900','0'],['140929','岢岚','140900','0'],['140930','河曲','140900','0'],['140931','保德','140900','0'],['140932','偏关','140900','0'],['140981','原平','140900','0'],['141000','临汾','140000','0'],['141002','尧都','141000','0'],['141021','曲沃','141000','0'],['141022','翼城','141000','0'],['141023','襄汾','141000','0'],['141024','洪洞','141000','0'],['141025','古县','141000','0'],['141026','安泽','141000','0'],['141027','浮山','141000','0'],['141028','吉县','141000','0'],['141029','乡宁','141000','0'],['141030','大宁','141000','0'],['141031','隰县','141000','0'],['141032','永和','141000','0'],['141033','蒲县','141000','0'],['141034','汾西','141000','0'],['141081','侯马','141000','0'],['141082','霍州','141000','0'],['141100','吕梁','140000','0'],['141102','离石','141100','0'],['141121','文水','141100','0'],['141122','交城','141100','0'],['141123','兴县','141100','0'],['141124','临县','141100','0'],['141125','柳林','141100','0'],['141126','石楼','141100','0'],['141127','岚县','141100','0'],['141128','方山','141100','0'],['141129','中阳','141100','0'],['141130','交口','141100','0'],['141181','孝义','141100','0'],['141182','汾阳','141100','0'],['150100','呼和浩特','150000','0'],['150102','新城','150100','0'],['150103','回民','150100','0'],['150104','玉泉','150100','0'],['150105','赛罕','150100','0'],['150121','土默特左','150100','0'],['150122','托克托','150100','0'],['150123','和林格尔','150100','0'],['150124','清水河','150100','0'],['150125','武川','150100','0'],['150200','包头','150000','0'],['150202','东河','150200','0'],['150203','昆都仑','150200','0'],['150204','青山','150200','0'],['150205','石拐','150200','0'],['150206','白云矿区','150200','0'],['150207','九原','150200','0'],['150221','土默特右','150200','0'],['150222','固阳','150200','0'],['150223','达尔罕茂明安联合','150200','0'],['150300','乌海','150000','0'],['150302','海勃湾','150300','0'],['150303','海南','150300','0'],['150304','乌达','150300','0'],['150400','赤峰','150000','0'],['150402','红山','150400','0'],['150403','元宝山','150400','0'],['150404','松山','150400','0'],['150421','阿鲁科尔沁','150400','0'],['150422','巴林左','150400','0'],['150423','巴林右','150400','0'],['150424','林西','150400','0'],['150425','克什克腾','150400','0'],['150426','翁牛特','150400','0'],['150428','喀喇沁','150400','0'],['150429','宁城','150400','0'],['150430','敖汉','150400','0'],['150500','通辽','150000','0'],['150502','科尔沁','150500','0'],['150521','科尔沁左翼中','150500','0'],['150522','科尔沁左翼后','150500','0'],['150523','开鲁','150500','0'],['150524','库伦','150500','0'],['150525','奈曼','150500','0'],['150526','扎鲁特','150500','0'],['150581','霍林郭勒','150500','0'],['150600','鄂尔多斯','150000','0'],['150602','东胜','150600','0'],['150621','达拉特','150600','0'],['150622','准格尔','150600','0'],['150623','鄂托克前','150600','0'],['150624','鄂托克','150600','0'],['150625','杭锦','150600','0'],['150626','乌审','150600','0'],['150627','伊金霍洛','150600','0'],['150700','呼伦贝尔','150000','0'],['150702','海拉尔','150700','0'],['150703','扎赉诺尔','150700','0'],['150721','阿荣','150700','0'],['150722','莫力达瓦','150700','0'],['150723','鄂伦春','150700','0'],['150724','鄂温克','150700','0'],['150725','陈巴尔虎','150700','0'],['150726','新巴尔虎左','150700','0'],['150727','新巴尔虎右','150700','0'],['150781','满洲里','150700','0'],['150782','牙克石','150700','0'],['150783','扎兰屯','150700','0'],['150784','额尔古纳','150700','0'],['150785','根河','150700','0'],['150800','巴彦淖尔','150000','0'],['150802','临河','150800','0'],['150821','五原','150800','0'],['150822','磴口','150800','0'],['150823','乌拉特前','150800','0'],['150824','乌拉特中','150800','0'],['150825','乌拉特后','150800','0'],['150826','杭锦后','150800','0'],['150900','乌兰察布','150000','0'],['150902','集宁','150900','0'],['150921','卓资','150900','0'],['150922','化德','150900','0'],['150923','商都','150900','0'],['150924','兴和','150900','0'],['150925','凉城','150900','0'],['150926','察哈尔右翼前','150900','0'],['150927','察哈尔右翼中','150900','0'],['150928','察哈尔右翼后','150900','0'],['150929','四子王','150900','0'],['150981','丰镇','150900','0'],['152200','兴安','150000','0'],['152201','乌兰浩特','152200','0'],['152202','阿尔山','152200','0'],['152221','科尔沁右翼前','152200','0'],['152222','科尔沁右翼中','152200','0'],['152223','扎赉特','152200','0'],['152224','突泉','152200','0'],['152500','锡林郭勒','150000','0'],['152501','二连浩特','152500','0'],['152502','锡林浩特','152500','0'],['152522','阿巴嘎','152500','0'],['152523','苏尼特左','152500','0'],['152524','苏尼特右','152500','0'],['152525','东乌珠穆沁','152500','0'],['152526','西乌珠穆沁','152500','0'],['152527','太仆寺','152500','0'],['152528','镶黄','152500','0'],['152529','正镶白','152500','0'],['152530','正蓝','152500','0'],['152531','多伦','152500','0'],['152900','阿拉善','150000','0'],['152921','阿拉善左','152900','0'],['152922','阿拉善右','152900','0'],['152923','额济纳','152900','0'],['210100','沈阳','210000','0'],['210102','和平','210100','0'],['210103','沈河','210100','0'],['210104','大东','210100','0'],['210105','皇姑','210100','0'],['210106','铁西','210100','0'],['210111','苏家屯','210100','0'],['210112','浑南','210100','0'],['210113','新城子','210100','0'],['210114','于洪','210100','0'],['210122','辽中','210100','0'],['210123','康平','210100','0'],['210124','法库','210100','0'],['210181','新民','210100','0'],['210184','沈北','210100','0'],['210200','大连','210000','0'],['210202','中山','210200','0'],['210203','西岗','210200','0'],['210204','沙河口','210200','0'],['210211','甘井子','210200','0'],['210212','旅顺口','210200','0'],['210213','金州','210200','0'],['210224','长海','210200','0'],['210281','瓦房店','210200','0'],['210282','普兰店','210200','0'],['210283','庄河','210200','0'],['210300','鞍山','210000','0'],['210302','铁东','210300','0'],['210303','铁西','210300','0'],['210304','立山','210300','0'],['210311','千山','210300','0'],['210321','台安','210300','0'],['210323','岫岩','210300','0'],['210381','海城','210300','0'],['210400','抚顺','210000','0'],['210402','新抚','210400','0'],['210403','东洲','210400','0'],['210404','望花','210400','0'],['210411','顺城','210400','0'],['210421','抚顺','210400','0'],['210422','新宾','210400','0'],['210423','清原','210400','0'],['210500','本溪','210000','0'],['210502','平山','210500','0'],['210503','溪湖','210500','0'],['210504','明山','210500','0'],['210505','南芬','210500','0'],['210521','本溪','210500','0'],['210522','桓仁','210500','0'],['210600','丹东','210000','0'],['210602','元宝','210600','0'],['210603','振兴','210600','0'],['210604','振安','210600','0'],['210624','宽甸','210600','0'],['210681','东港','210600','0'],['210682','凤城','210600','0'],['210700','锦州','210000','0'],['210702','古塔','210700','0'],['210703','凌河','210700','0'],['210711','太和','210700','0'],['210726','黑山','210700','0'],['210727','义县','210700','0'],['210781','凌海','210700','0'],['210782','北镇','210700','0'],['210800','营口','210000','0'],['210802','站前','210800','0'],['210803','西市','210800','0'],['210804','鲅鱼圈','210800','0'],['210811','老边','210800','0'],['210881','盖州','210800','0'],['210882','大石桥','210800','0'],['210900','阜新','210000','0'],['210902','海州','210900','0'],['210903','新邱','210900','0'],['210904','太平','210900','0'],['210905','清河门','210900','0'],['210911','细河','210900','0'],['210921','阜新','210900','0'],['210922','彰武','210900','0'],['211000','辽阳','210000','0'],['211002','白塔','211000','0'],['211003','文圣','211000','0'],['211004','宏伟','211000','0'],['211005','弓长岭','211000','0'],['211011','太子河','211000','0'],['211021','辽阳','211000','0'],['211081','灯塔','211000','0'],['211100','盘锦','210000','0'],['211102','双台子','211100','0'],['211103','兴隆台','211100','0'],['211121','大洼','211100','0'],['211122','盘山','211100','0'],['211200','铁岭','210000','0'],['211202','银州','211200','0'],['211204','清河','211200','0'],['211221','铁岭','211200','0'],['211223','西丰','211200','0'],['211224','昌图','211200','0'],['211281','调兵山','211200','0'],['211282','开原','211200','0'],['211300','朝阳','210000','0'],['211302','双塔','211300','0'],['211303','龙城','211300','0'],['211321','朝阳','211300','0'],['211322','建平','211300','0'],['211324','喀左','211300','0'],['211381','北票','211300','0'],['211382','凌源','211300','0'],['211400','葫芦岛','210000','0'],['211402','连山','211400','0'],['211403','龙港','211400','0'],['211404','南票','211400','0'],['211421','绥中','211400','0'],['211422','建昌','211400','0'],['211481','兴城','211400','0'],['220100','长春','220000','0'],['220102','南关','220100','0'],['220103','宽城','220100','0'],['220104','朝阳','220100','0'],['220105','二道','220100','0'],['220106','绿园','220100','0'],['220112','双阳','220100','0'],['220122','农安','220100','0'],['220181','九台','220100','0'],['220182','榆树','220100','0'],['220183','德惠','220100','0'],['220200','吉林','220000','0'],['220202','昌邑','220200','0'],['220203','龙潭','220200','0'],['220204','船营','220200','0'],['220211','丰满','220200','0'],['220221','永吉','220200','0'],['220281','蛟河','220200','0'],['220282','桦甸','220200','0'],['220283','舒兰','220200','0'],['220284','磐石','220200','0'],['220300','四平','220000','0'],['220302','铁西','220300','0'],['220303','铁东','220300','0'],['220322','梨树','220300','0'],['220323','伊通','220300','0'],['220381','公主岭','220300','0'],['220382','双辽','220300','0'],['220400','辽源','220000','0'],['220402','龙山','220400','0'],['220403','西安','220400','0'],['220421','东丰','220400','0'],['220422','东辽','220400','0'],['220500','通化','220000','0'],['220502','东昌','220500','0'],['220503','二道江','220500','0'],['220521','通化','220500','0'],['220523','辉南','220500','0'],['220524','柳河','220500','0'],['220581','梅河口','220500','0'],['220582','集安','220500','0'],['220600','白山','220000','0'],['220602','浑江','220600','0'],['220621','抚松','220600','0'],['220622','靖宇','220600','0'],['220623','长白','220600','0'],['220625','江源','220600','0'],['220681','临江','220600','0'],['220700','松原','220000','0'],['220702','宁江','220700','0'],['220721','前郭','220700','0'],['220722','长岭','220700','0'],['220723','乾安','220700','0'],['220724','扶余','220700','0'],['220800','白城','220000','0'],['220802','洮北','220800','0'],['220821','镇赉','220800','0'],['220822','通榆','220800','0'],['220881','洮南','220800','0'],['220882','大安','220800','0'],['222400','延边朝鲜族','220000','0'],['222401','延吉','222400','0'],['222402','图们','222400','0'],['222403','敦化','222400','0'],['222404','珲春','222400','0'],['222405','龙井','222400','0'],['222406','和龙','222400','0'],['222424','汪清','222400','0'],['222426','安图','222400','0'],['230100','哈尔滨','230000','0'],['230102','道里','230100','0'],['230103','南岗','230100','0'],['230104','道外','230100','0'],['230106','香坊','230100','0'],['230108','平房','230100','0'],['230109','松北','230100','0'],['230111','呼兰','230100','0'],['230123','依兰','230100','0'],['230124','方正','230100','0'],['230125','宾县','230100','0'],['230126','巴彦','230100','0'],['230127','木兰','230100','0'],['230128','通河','230100','0'],['230129','延寿','230100','0'],['230181','阿城','230100','0'],['230182','双城','230100','0'],['230183','尚志','230100','0'],['230184','五常','230100','0'],['230200','齐齐哈尔','230000','0'],['230202','龙沙','230200','0'],['230203','建华','230200','0'],['230204','铁锋','230200','0'],['230205','昂昂溪','230200','0'],['230206','富拉尔基','230200','0'],['230207','碾子山','230200','0'],['230208','梅里斯达斡尔族','230200','0'],['230221','龙江','230200','0'],['230223','依安','230200','0'],['230224','泰来','230200','0'],['230225','甘南','230200','0'],['230227','富裕','230200','0'],['230229','克山','230200','0'],['230230','克东','230200','0'],['230231','拜泉','230200','0'],['230281','讷河','230200','0'],['230300','鸡西','230000','0'],['230302','鸡冠','230300','0'],['230303','恒山','230300','0'],['230304','滴道','230300','0'],['230305','梨树','230300','0'],['230306','城子河','230300','0'],['230307','麻山','230300','0'],['230321','鸡东','230300','0'],['230381','虎林','230300','0'],['230382','密山','230300','0'],['230400','鹤岗','230000','0'],['230402','向阳','230400','0'],['230403','工农','230400','0'],['230404','南山','230400','0'],['230405','兴安','230400','0'],['230406','东山','230400','0'],['230407','兴山','230400','0'],['230421','萝北','230400','0'],['230422','绥滨','230400','0'],['230500','双鸭山','230000','0'],['230502','尖山','230500','0'],['230503','岭东','230500','0'],['230505','四方台','230500','0'],['230506','宝山','230500','0'],['230521','集贤','230500','0'],['230522','友谊','230500','0'],['230523','宝清','230500','0'],['230524','饶河','230500','0'],['230600','大庆','230000','0'],['230602','萨尔图','230600','0'],['230603','龙凤','230600','0'],['230604','让胡路','230600','0'],['230605','红岗','230600','0'],['230606','大同','230600','0'],['230621','肇州','230600','0'],['230622','肇源','230600','0'],['230623','林甸','230600','0'],['230624','杜尔伯特','230600','0'],['230700','伊春','230000','0'],['230702','伊春','230700','0'],['230703','南岔','230700','0'],['230704','友好','230700','0'],['230705','西林','230700','0'],['230706','翠峦','230700','0'],['230707','新青','230700','0'],['230708','美溪','230700','0'],['230709','金山屯','230700','0'],['230710','五营','230700','0'],['230711','乌马河','230700','0'],['230712','汤旺河','230700','0'],['230713','带岭','230700','0'],['230714','乌伊岭','230700','0'],['230715','红星','230700','0'],['230716','上甘岭','230700','0'],['230722','嘉荫','230700','0'],['230781','铁力','230700','0'],['230800','佳木斯','230000','0'],['230803','向阳','230800','0'],['230804','前进','230800','0'],['230805','东风','230800','0'],['230811','郊区','230800','0'],['230822','桦南','230800','0'],['230826','桦川','230800','0'],['230828','汤原','230800','0'],['230833','抚远','230800','0'],['230881','同江','230800','0'],['230882','富锦','230800','0'],['230900','七台河','230000','0'],['230902','新兴','230900','0'],['230903','桃山','230900','0'],['230904','茄子河','230900','0'],['230921','勃利','230900','0'],['231000','牡丹江','230000','0'],['231002','东安','231000','0'],['231003','阳明','231000','0'],['231004','爱民','231000','0'],['231005','西安','231000','0'],['231024','东宁','231000','0'],['231025','林口','231000','0'],['231081','绥芬河','231000','0'],['231083','海林','231000','0'],['231084','宁安','231000','0'],['231085','穆棱','231000','0'],['231100','黑河','230000','0'],['231102','爱辉','231100','0'],['231121','嫩江','231100','0'],['231123','逊克','231100','0'],['231124','孙吴','231100','0'],['231181','北安','231100','0'],['231182','五大连池','231100','0'],['231200','绥化','230000','0'],['231202','北林','231200','0'],['231221','望奎','231200','0'],['231222','兰西','231200','0'],['231223','青冈','231200','0'],['231224','庆安','231200','0'],['231225','明水','231200','0'],['231226','绥棱','231200','0'],['231281','安达','231200','0'],['231282','肇东','231200','0'],['231283','海伦','231200','0'],['232700','大兴安岭','230000','0'],['232702','松岭','232700','0'],['232703','新林','232700','0'],['232704','呼中','232700','0'],['232721','呼玛','232700','0'],['232722','塔河','232700','0'],['232723','漠河','232700','0'],['232724','加格达奇','232700','0'],['310100','上海','310000','0'],['310101','黄浦','310100','0'],['310104','徐汇','310100','0'],['310105','长宁','310100','0'],['310106','静安','310100','0'],['310107','普陀','310100','0'],['310108','闸北','310100','0'],['310109','虹口','310100','0'],['310110','杨浦','310100','0'],['310112','闵行','310100','0'],['310113','宝山','310100','0'],['310114','嘉定','310100','0'],['310115','浦东','310100','0'],['310116','金山','310100','0'],['310117','松江','310100','0'],['310118','青浦','310100','0'],['310120','奉贤','310100','0'],['310230','崇明','310100','0'],['320100','南京','320000','0'],['320102','玄武','320100','0'],['320104','秦淮','320100','0'],['320105','建邺','320100','0'],['320106','鼓楼','320100','0'],['320111','浦口','320100','0'],['320113','栖霞','320100','0'],['320114','雨花台','320100','0'],['320115','江宁','320100','0'],['320116','六合','320100','0'],['320124','溧水','320100','0'],['320125','高淳','320100','0'],['320200','无锡','320000','0'],['320202','崇安','320200','0'],['320203','南长','320200','0'],['320204','北塘','320200','0'],['320205','锡山','320200','0'],['320206','惠山','320200','0'],['320211','滨湖','320200','0'],['320281','江阴','320200','0'],['320282','宜兴','320200','0'],['320300','徐州','320000','0'],['320302','鼓楼','320300','0'],['320303','云龙','320300','0'],['320305','贾汪','320300','0'],['320311','泉山','320300','0'],['320321','丰县','320300','0'],['320322','沛县','320300','0'],['320323','铜山','320300','0'],['320324','睢宁','320300','0'],['320381','新沂','320300','0'],['320382','邳州','320300','0'],['320400','常州','320000','0'],['320402','天宁','320400','0'],['320404','钟楼','320400','0'],['320405','戚墅堰','320400','0'],['320411','新北','320400','0'],['320412','武进','320400','0'],['320481','溧阳','320400','0'],['320482','金坛','320400','0'],['320500','苏州','320000','0'],['320505','虎丘','320500','0'],['320506','吴中','320500','0'],['320507','相城','320500','0'],['320508','姑苏','320500','0'],['320581','常熟','320500','0'],['320582','张家港','320500','0'],['320583','昆山','320500','0'],['320584','吴江','320500','0'],['320585','太仓','320500','0'],['320600','南通','320000','0'],['320602','崇川','320600','0'],['320611','港闸','320600','0'],['320612','通州','320600','0'],['320621','海安','320600','0'],['320623','如东','320600','0'],['320681','启东','320600','0'],['320682','如皋','320600','0'],['320684','海门','320600','0'],['320700','连云港','320000','0'],['320703','连云','320700','0'],['320705','新浦','320700','0'],['320706','海州','320700','0'],['320721','赣榆','320700','0'],['320722','东海','320700','0'],['320723','灌云','320700','0'],['320724','灌南','320700','0'],['320800','淮安','320000','0'],['320802','清河','320800','0'],['320803','淮安','320800','0'],['320804','淮阴','320800','0'],['320811','清浦','320800','0'],['320826','涟水','320800','0'],['320829','洪泽','320800','0'],['320830','盱眙','320800','0'],['320831','金湖','320800','0'],['320900','盐城','320000','0'],['320902','亭湖','320900','0'],['320903','盐都','320900','0'],['320921','响水','320900','0'],['320922','滨海','320900','0'],['320923','阜宁','320900','0'],['320924','射阳','320900','0'],['320925','建湖','320900','0'],['320981','东台','320900','0'],['320982','大丰','320900','0'],['321000','扬州','320000','0'],['321002','广陵','321000','0'],['321003','邗江','321000','0'],['321023','宝应','321000','0'],['321081','仪征','321000','0'],['321084','高邮','321000','0'],['321088','江都','321000','0'],['321100','镇江','320000','0'],['321102','京口','321100','0'],['321111','润州','321100','0'],['321112','丹徒','321100','0'],['321181','丹阳','321100','0'],['321182','扬中','321100','0'],['321183','句容','321100','0'],['321200','泰州','320000','0'],['321202','海陵','321200','0'],['321203','高港','321200','0'],['321281','兴化','321200','0'],['321282','靖江','321200','0'],['321283','泰兴','321200','0'],['321284','姜堰','321200','0'],['321300','宿迁','320000','0'],['321302','宿城','321300','0'],['321311','宿豫','321300','0'],['321322','沭阳','321300','0'],['321323','泗阳','321300','0'],['321324','泗洪','321300','0'],['330100','杭州','330000','0'],['330102','上城','330100','0'],['330103','下城','330100','0'],['330104','江干','330100','0'],['330105','拱墅','330100','0'],['330106','西湖','330100','0'],['330108','滨江','330100','0'],['330109','萧山','330100','0'],['330110','余杭','330100','0'],['330122','桐庐','330100','0'],['330127','淳安','330100','0'],['330182','建德','330100','0'],['330183','富阳','330100','0'],['330185','临安','330100','0'],['330200','宁波','330000','0'],['330203','海曙','330200','0'],['330204','江东','330200','0'],['330205','江北','330200','0'],['330206','北仑','330200','0'],['330211','镇海','330200','0'],['330212','鄞州','330200','0'],['330225','象山','330200','0'],['330226','宁海','330200','0'],['330281','余姚','330200','0'],['330282','慈溪','330200','0'],['330283','奉化','330200','0'],['330300','温州','330000','0'],['330302','鹿城','330300','0'],['330303','龙湾','330300','0'],['330304','瓯海','330300','0'],['330322','洞头','330300','0'],['330324','永嘉','330300','0'],['330326','平阳','330300','0'],['330327','苍南','330300','0'],['330328','文成','330300','0'],['330329','泰顺','330300','0'],['330381','瑞安','330300','0'],['330382','乐清','330300','0'],['330400','嘉兴','330000','0'],['330402','南湖','330400','0'],['330411','秀洲','330400','0'],['330421','嘉善','330400','0'],['330424','海盐','330400','0'],['330481','海宁','330400','0'],['330482','平湖','330400','0'],['330483','桐乡','330400','0'],['330500','湖州','330000','0'],['330502','吴兴','330500','0'],['330503','南浔','330500','0'],['330521','德清','330500','0'],['330522','长兴','330500','0'],['330523','安吉','330500','0'],['330600','绍兴','330000','0'],['330602','越城','330600','0'],['330621','柯桥','330600','0'],['330624','新昌','330600','0'],['330681','诸暨','330600','0'],['330682','上虞','330600','0'],['330683','嵊州','330600','0'],['330700','金华','330000','0'],['330702','婺城','330700','0'],['330703','金东','330700','0'],['330723','武义','330700','0'],['330726','浦江','330700','0'],['330727','磐安','330700','0'],['330781','兰溪','330700','0'],['330782','义乌','330700','0'],['330783','东阳','330700','0'],['330784','永康','330700','0'],['330800','衢州','330000','0'],['330802','柯城','330800','0'],['330803','衢江','330800','0'],['330822','常山','330800','0'],['330824','开化','330800','0'],['330825','龙游','330800','0'],['330881','江山','330800','0'],['330900','舟山','330000','0'],['330902','定海','330900','0'],['330903','普陀','330900','0'],['330921','岱山','330900','0'],['330922','嵊泗','330900','0'],['331000','台州','330000','0'],['331002','椒江','331000','0'],['331003','黄岩','331000','0'],['331004','路桥','331000','0'],['331021','玉环','331000','0'],['331022','三门','331000','0'],['331023','天台','331000','0'],['331024','仙居','331000','0'],['331081','温岭','331000','0'],['331082','临海','331000','0'],['331100','丽水','330000','0'],['331102','莲都','331100','0'],['331121','青田','331100','0'],['331122','缙云','331100','0'],['331123','遂昌','331100','0'],['331124','松阳','331100','0'],['331125','云和','331100','0'],['331126','庆元','331100','0'],['331127','景宁','331100','0'],['331181','龙泉','331100','0'],['340100','合肥','340000','0'],['340102','瑶海','340100','0'],['340103','庐阳','340100','0'],['340104','蜀山','340100','0'],['340111','包河','340100','0'],['340121','长丰','340100','0'],['340122','肥东','340100','0'],['340123','肥西','340100','0'],['340200','芜湖','340000','0'],['340202','镜湖','340200','0'],['340203','弋江','340200','0'],['340207','鸠江','340200','0'],['340208','三山','340200','0'],['340221','芜湖','340200','0'],['340222','繁昌','340200','0'],['340223','南陵','340200','0'],['340300','蚌埠','340000','0'],['340302','龙子湖','340300','0'],['340303','蚌山','340300','0'],['340304','禹会','340300','0'],['340311','淮上','340300','0'],['340321','怀远','340300','0'],['340322','五河','340300','0'],['340323','固镇','340300','0'],['340400','淮南','340000','0'],['340402','大通','340400','0'],['340403','田家庵','340400','0'],['340404','谢家集','340400','0'],['340405','八公山','340400','0'],['340406','潘集','340400','0'],['340421','凤台','340400','0'],['340500','马鞍山','340000','0'],['340503','花山','340500','0'],['340504','雨山','340500','0'],['340506','博望','340500','0'],['340521','当涂','340500','0'],['340600','淮北','340000','0'],['340602','杜集','340600','0'],['340603','相山','340600','0'],['340604','烈山','340600','0'],['340621','濉溪','340600','0'],['340700','铜陵','340000','0'],['340702','铜官山','340700','0'],['340703','狮子山','340700','0'],['340711','郊区','340700','0'],['340721','铜陵','340700','0'],['340800','安庆','340000','0'],['340802','迎江','340800','0'],['340803','大观','340800','0'],['340811','宜秀','340800','0'],['340822','怀宁','340800','0'],['340823','枞阳','340800','0'],['340824','潜山','340800','0'],['340825','太湖','340800','0'],['340826','宿松','340800','0'],['340827','望江','340800','0'],['340828','岳西','340800','0'],['340881','桐城','340800','0'],['341000','黄山','340000','0'],['341002','屯溪','341000','0'],['341003','黄山','341000','0'],['341004','徽州','341000','0'],['341021','歙县','341000','0'],['341022','休宁','341000','0'],['341023','黟县','341000','0'],['341024','祁门','341000','0'],['341100','滁州','340000','0'],['341102','琅琊','341100','0'],['341103','南谯','341100','0'],['341122','来安','341100','0'],['341124','全椒','341100','0'],['341125','定远','341100','0'],['341126','凤阳','341100','0'],['341181','天长','341100','0'],['341182','明光','341100','0'],['341200','阜阳','340000','0'],['341202','颍州','341200','0'],['341203','颍东','341200','0'],['341204','颍泉','341200','0'],['341221','临泉','341200','0'],['341222','太和','341200','0'],['341225','阜南','341200','0'],['341226','颍上','341200','0'],['341282','界首','341200','0'],['341300','宿州','340000','0'],['341302','埇桥','341300','0'],['341321','砀山','341300','0'],['341322','萧县','341300','0'],['341323','灵璧','341300','0'],['341324','泗县','341300','0'],['341400','巢湖','340100','0'],['341421','庐江','340100','0'],['341422','无为','340200','0'],['341423','含山','340500','0'],['341424','和县','340500','0'],['341500','六安','340000','0'],['341502','金安','341500','0'],['341503','裕安','341500','0'],['341521','寿县','341500','0'],['341522','霍邱','341500','0'],['341523','舒城','341500','0'],['341524','金寨','341500','0'],['341525','霍山','341500','0'],['341600','亳州','340000','0'],['341602','谯城','341600','0'],['341621','涡阳','341600','0'],['341622','蒙城','341600','0'],['341623','利辛','341600','0'],['341700','池州','340000','0'],['341702','贵池','341700','0'],['341721','东至','341700','0'],['341722','石台','341700','0'],['341723','青阳','341700','0'],['341800','宣城','340000','0'],['341802','宣州','341800','0'],['341821','郎溪','341800','0'],['341822','广德','341800','0'],['341823','泾县','341800','0'],['341824','绩溪','341800','0'],['341825','旌德','341800','0'],['341881','宁国','341800','0'],['350100','福州','350000','0'],['350102','鼓楼','350100','0'],['350103','台江','350100','0'],['350104','仓山','350100','0'],['350105','马尾','350100','0'],['350111','晋安','350100','0'],['350121','闽侯','350100','0'],['350122','连江','350100','0'],['350123','罗源','350100','0'],['350124','闽清','350100','0'],['350125','永泰','350100','0'],['350128','平潭','350100','0'],['350181','福清','350100','0'],['350182','长乐','350100','0'],['350200','厦门','350000','0'],['350203','思明','350200','0'],['350205','海沧','350200','0'],['350206','湖里','350200','0'],['350211','集美','350200','0'],['350212','同安','350200','0'],['350213','翔安','350200','0'],['350300','莆田','350000','0'],['350302','城厢','350300','0'],['350303','涵江','350300','0'],['350304','荔城','350300','0'],['350305','秀屿','350300','0'],['350322','仙游','350300','0'],['350400','三明','350000','0'],['350402','梅列','350400','0'],['350403','三元','350400','0'],['350421','明溪','350400','0'],['350423','清流','350400','0'],['350424','宁化','350400','0'],['350425','大田','350400','0'],['350426','尤溪','350400','0'],['350427','沙县','350400','0'],['350428','将乐','350400','0'],['350429','泰宁','350400','0'],['350430','建宁','350400','0'],['350481','永安','350400','0'],['350500','泉州','350000','0'],['350502','鲤城','350500','0'],['350503','丰泽','350500','0'],['350504','洛江','350500','0'],['350505','泉港','350500','0'],['350521','惠安','350500','0'],['350524','安溪','350500','0'],['350525','永春','350500','0'],['350526','德化','350500','0'],['350527','金门','350500','0'],['350581','石狮','350500','0'],['350582','晋江','350500','0'],['350583','南安','350500','0'],['350600','漳州','350000','0'],['350602','芗城','350600','0'],['350603','龙文','350600','0'],['350622','云霄','350600','0'],['350623','漳浦','350600','0'],['350624','诏安','350600','0'],['350625','长泰','350600','0'],['350626','东山','350600','0'],['350627','南靖','350600','0'],['350628','平和','350600','0'],['350629','华安','350600','0'],['350681','龙海','350600','0'],['350700','南平','350000','0'],['350702','延平','350700','0'],['350721','顺昌','350700','0'],['350722','浦城','350700','0'],['350723','光泽','350700','0'],['350724','松溪','350700','0'],['350725','政和','350700','0'],['350781','邵武','350700','0'],['350782','武夷山','350700','0'],['350783','建瓯','350700','0'],['350784','建阳','350700','0'],['350800','龙岩','350000','0'],['350802','新罗','350800','0'],['350821','长汀','350800','0'],['350822','永定','350800','0'],['350823','上杭','350800','0'],['350824','武平','350800','0'],['350825','连城','350800','0'],['350881','漳平','350800','0'],['350900','宁德','350000','0'],['350902','蕉城','350900','0'],['350921','霞浦','350900','0'],['350922','古田','350900','0'],['350923','屏南','350900','0'],['350924','寿宁','350900','0'],['350925','周宁','350900','0'],['350926','柘荣','350900','0'],['350981','福安','350900','0'],['350982','福鼎','350900','0'],['360100','南昌','360000','0'],['360102','东湖','360100','0'],['360103','西湖','360100','0'],['360104','青云谱','360100','0'],['360105','湾里','360100','0'],['360111','青山湖','360100','0'],['360121','南昌','360100','0'],['360122','新建','360100','0'],['360123','安义','360100','0'],['360124','进贤','360100','0'],['360200','景德镇','360000','0'],['360202','昌江','360200','0'],['360203','珠山','360200','0'],['360222','浮梁','360200','0'],['360281','乐平','360200','0'],['360300','萍乡','360000','0'],['360302','安源','360300','0'],['360313','湘东','360300','0'],['360321','莲花','360300','0'],['360322','上栗','360300','0'],['360323','芦溪','360300','0'],['360400','九江','360000','0'],['360402','庐山','360400','0'],['360403','浔阳','360400','0'],['360421','九江','360400','0'],['360423','武宁','360400','0'],['360424','修水','360400','0'],['360425','永修','360400','0'],['360426','德安','360400','0'],['360427','星子','360400','0'],['360428','都昌','360400','0'],['360429','湖口','360400','0'],['360430','彭泽','360400','0'],['360481','瑞昌','360400','0'],['360483','共青城','360400','0'],['360500','新余','360000','0'],['360502','渝水','360500','0'],['360521','分宜','360500','0'],['360600','鹰潭','360000','0'],['360602','月湖','360600','0'],['360622','余江','360600','0'],['360681','贵溪','360600','0'],['360700','赣州','360000','0'],['360702','章贡','360700','0'],['360721','赣县','360700','0'],['360722','信丰','360700','0'],['360723','大余','360700','0'],['360724','上犹','360700','0'],['360725','崇义','360700','0'],['360726','安远','360700','0'],['360727','龙南','360700','0'],['360728','定南','360700','0'],['360729','全南','360700','0'],['360730','宁都','360700','0'],['360731','于都','360700','0'],['360732','兴国','360700','0'],['360733','会昌','360700','0'],['360734','寻乌','360700','0'],['360735','石城','360700','0'],['360781','瑞金','360700','0'],['360782','南康','360700','0'],['360800','吉安','360000','0'],['360802','吉州','360800','0'],['360803','青原','360800','0'],['360821','吉安','360800','0'],['360822','吉水','360800','0'],['360823','峡江','360800','0'],['360824','新干','360800','0'],['360825','永丰','360800','0'],['360826','泰和','360800','0'],['360827','遂川','360800','0'],['360828','万安','360800','0'],['360829','安福','360800','0'],['360830','永新','360800','0'],['360881','井冈山','360800','0'],['360900','宜春','360000','0'],['360902','袁州','360900','0'],['360921','奉新','360900','0'],['360922','万载','360900','0'],['360923','上高','360900','0'],['360924','宜丰','360900','0'],['360925','靖安','360900','0'],['360926','铜鼓','360900','0'],['360981','丰城','360900','0'],['360982','樟树','360900','0'],['360983','高安','360900','0'],['361000','抚州','360000','0'],['361002','临川','361000','0'],['361021','南城','361000','0'],['361022','黎川','361000','0'],['361023','南丰','361000','0'],['361024','崇仁','361000','0'],['361025','乐安','361000','0'],['361026','宜黄','361000','0'],['361027','金溪','361000','0'],['361028','资溪','361000','0'],['361029','东乡','361000','0'],['361030','广昌','361000','0'],['361100','上饶','360000','0'],['361102','信州','361100','0'],['361121','上饶','361100','0'],['361122','广丰','361100','0'],['361123','玉山','361100','0'],['361124','铅山','361100','0'],['361125','横峰','361100','0'],['361126','弋阳','361100','0'],['361127','余干','361100','0'],['361128','鄱阳','361100','0'],['361129','万年','361100','0'],['361130','婺源','361100','0'],['361181','德兴','361100','0'],['370100','济南','370000','0'],['370102','历下','370100','0'],['370103','市中','370100','0'],['370104','槐荫','370100','0'],['370105','天桥','370100','0'],['370112','历城','370100','0'],['370113','长清','370100','0'],['370124','平阴','370100','0'],['370125','济阳','370100','0'],['370126','商河','370100','0'],['370181','章丘','370100','0'],['370200','青岛','370000','0'],['370202','市南','370200','0'],['370203','市北','370200','0'],['370211','黄岛','370200','0'],['370212','崂山','370200','0'],['370213','李沧','370200','0'],['370214','城阳','370200','0'],['370281','胶州','370200','0'],['370282','即墨','370200','0'],['370283','平度','370200','0'],['370285','莱西','370200','0'],['370300','淄博','370000','0'],['370302','淄川','370300','0'],['370303','张店','370300','0'],['370304','博山','370300','0'],['370305','临淄','370300','0'],['370306','周村','370300','0'],['370321','桓台','370300','0'],['370322','高青','370300','0'],['370323','沂源','370300','0'],['370400','枣庄','370000','0'],['370402','市中','370400','0'],['370403','薛城','370400','0'],['370404','峄城','370400','0'],['370405','台儿庄','370400','0'],['370406','山亭','370400','0'],['370481','滕州','370400','0'],['370500','东营','370000','0'],['370502','东营','370500','0'],['370503','河口','370500','0'],['370521','垦利','370500','0'],['370522','利津','370500','0'],['370523','广饶','370500','0'],['370600','烟台','370000','0'],['370602','芝罘','370600','0'],['370611','福山','370600','0'],['370612','牟平','370600','0'],['370613','莱山','370600','0'],['370634','长岛','370600','0'],['370681','龙口','370600','0'],['370682','莱阳','370600','0'],['370683','莱州','370600','0'],['370684','蓬莱','370600','0'],['370685','招远','370600','0'],['370686','栖霞','370600','0'],['370687','海阳','370600','0'],['370700','潍坊','370000','0'],['370702','潍城','370700','0'],['370703','寒亭','370700','0'],['370704','坊子','370700','0'],['370705','奎文','370700','0'],['370724','临朐','370700','0'],['370725','昌乐','370700','0'],['370781','青州','370700','0'],['370782','诸城','370700','0'],['370783','寿光','370700','0'],['370784','安丘','370700','0'],['370785','高密','370700','0'],['370786','昌邑','370700','0'],['370800','济宁','370000','0'],['370802','市中','370800','0'],['370811','任城','370800','0'],['370826','微山','370800','0'],['370827','鱼台','370800','0'],['370828','金乡','370800','0'],['370829','嘉祥','370800','0'],['370830','汶上','370800','0'],['370831','泗水','370800','0'],['370832','梁山','370800','0'],['370881','曲阜','370800','0'],['370882','兖州','370800','0'],['370883','邹城','370800','0'],['370900','泰安','370000','0'],['370902','泰山','370900','0'],['370903','岱岳','370900','0'],['370921','宁阳','370900','0'],['370923','东平','370900','0'],['370982','新泰','370900','0'],['370983','肥城','370900','0'],['371000','威海','370000','0'],['371002','环翠','371000','0'],['371081','文登','371000','0'],['371082','荣成','371000','0'],['371083','乳山','371000','0'],['371100','日照','370000','0'],['371102','东港','371100','0'],['371103','岚山','371100','0'],['371121','五莲','371100','0'],['371122','莒县','371100','0'],['371200','莱芜','370000','0'],['371202','莱城','371200','0'],['371203','钢城','371200','0'],['371300','临沂','370000','0'],['371302','兰山','371300','0'],['371311','罗庄','371300','0'],['371312','河东','371300','0'],['371321','沂南','371300','0'],['371322','郯城','371300','0'],['371323','沂水','371300','0'],['371324','兰陵','371300','0'],['371325','费县','371300','0'],['371326','平邑','371300','0'],['371327','莒南','371300','0'],['371328','蒙阴','371300','0'],['371329','临沭','371300','0'],['371400','德州','370000','0'],['371402','德城','371400','0'],['371421','陵城','371400','0'],['371422','宁津','371400','0'],['371423','庆云','371400','0'],['371424','临邑','371400','0'],['371425','齐河','371400','0'],['371426','平原','371400','0'],['371427','夏津','371400','0'],['371428','武城','371400','0'],['371481','乐陵','371400','0'],['371482','禹城','371400','0'],['371500','聊城','370000','0'],['371502','东昌府','371500','0'],['371521','阳谷','371500','0'],['371522','莘县','371500','0'],['371523','茌平','371500','0'],['371524','东阿','371500','0'],['371525','冠县','371500','0'],['371526','高唐','371500','0'],['371581','临清','371500','0'],['371600','滨州','370000','0'],['371602','滨城','371600','0'],['371621','惠民','371600','0'],['371622','阳信','371600','0'],['371623','无棣','371600','0'],['371624','沾化','371600','0'],['371625','博兴','371600','0'],['371626','邹平','371600','0'],['371700','菏泽','370000','0'],['371702','牡丹','371700','0'],['371721','曹县','371700','0'],['371722','单县','371700','0'],['371723','成武','371700','0'],['371724','巨野','371700','0'],['371725','郓城','371700','0'],['371726','鄄城','371700','0'],['371727','定陶','371700','0'],['371728','东明','371700','0'],['410100','郑州','410000','0'],['410102','中原','410100','0'],['410103','二七','410100','0'],['410104','管城回族','410100','0'],['410105','金水','410100','0'],['410106','上街','410100','0'],['410108','惠济','410100','0'],['410122','中牟','410100','0'],['410181','巩义','410100','0'],['410182','荥阳','410100','0'],['410183','新密','410100','0'],['410184','新郑','410100','0'],['410185','登封','410100','0'],['410200','开封','410000','0'],['410202','龙亭','410200','0'],['410203','顺河回族','410200','0'],['410204','鼓楼','410200','0'],['410205','禹王台','410200','0'],['410211','金明','410200','0'],['410221','杞县','410200','0'],['410222','通许','410200','0'],['410223','尉氏','410200','0'],['410224','祥符','410200','0'],['410225','兰考','410200','0'],['410300','洛阳','410000','0'],['410302','老城','410300','0'],['410303','西工','410300','0'],['410304','瀍河回族','410300','0'],['410305','涧西','410300','0'],['410306','吉利','410300','0'],['410307','洛龙','410300','0'],['410322','孟津','410300','0'],['410323','新安','410300','0'],['410324','栾川','410300','0'],['410325','嵩县','410300','0'],['410326','汝阳','410300','0'],['410327','宜阳','410300','0'],['410328','洛宁','410300','0'],['410329','伊川','410300','0'],['410381','偃师','410300','0'],['410400','平顶山','410000','0'],['410402','新华','410400','0'],['410403','卫东','410400','0'],['410404','石龙','410400','0'],['410411','湛河','410400','0'],['410421','宝丰','410400','0'],['410422','叶县','410400','0'],['410423','鲁山','410400','0'],['410425','郏县','410400','0'],['410481','舞钢','410400','0'],['410482','汝州','410400','0'],['410500','安阳','410000','0'],['410502','文峰','410500','0'],['410503','北关','410500','0'],['410505','殷都','410500','0'],['410506','龙安','410500','0'],['410522','安阳','410500','0'],['410523','汤阴','410500','0'],['410526','滑县','410500','0'],['410527','内黄','410500','0'],['410581','林州','410500','0'],['410600','鹤壁','410000','0'],['410602','鹤山','410600','0'],['410603','山城','410600','0'],['410611','淇滨','410600','0'],['410621','浚县','410600','0'],['410622','淇县','410600','0'],['410700','新乡','410000','0'],['410702','红旗','410700','0'],['410703','卫滨','410700','0'],['410704','凤泉','410700','0'],['410711','牧野','410700','0'],['410721','新乡','410700','0'],['410724','获嘉','410700','0'],['410725','原阳','410700','0'],['410726','延津','410700','0'],['410727','封丘','410700','0'],['410728','长垣','410700','0'],['410781','卫辉','410700','0'],['410782','辉县','410700','0'],['410800','焦作','410000','0'],['410802','解放','410800','0'],['410803','中站','410800','0'],['410804','马村','410800','0'],['410811','山阳','410800','0'],['410821','修武','410800','0'],['410822','博爱','410800','0'],['410823','武陟','410800','0'],['410825','温县','410800','0'],['410881','济源','410000','0'],['410882','沁阳','410800','0'],['410883','孟州','410800','0'],['410900','濮阳','410000','0'],['410902','华龙','410900','0'],['410922','清丰','410900','0'],['410923','南乐','410900','0'],['410926','范县','410900','0'],['410927','台前','410900','0'],['410928','濮阳','410900','0'],['411000','许昌','410000','0'],['411002','魏都','411000','0'],['411023','许昌','411000','0'],['411024','鄢陵','411000','0'],['411025','襄城','411000','0'],['411081','禹州','411000','0'],['411082','长葛','411000','0'],['411100','漯河','410000','0'],['411102','源汇','411100','0'],['411103','郾城','411100','0'],['411104','召陵','411100','0'],['411121','舞阳','411100','0'],['411122','临颍','411100','0'],['411200','三门峡','410000','0'],['411202','湖滨','411200','0'],['411221','渑池','411200','0'],['411222','陕州','411200','0'],['411224','卢氏','411200','0'],['411281','义马','411200','0'],['411282','灵宝','411200','0'],['411300','南阳','410000','0'],['411302','宛城','411300','0'],['411303','卧龙','411300','0'],['411321','南召','411300','0'],['411322','方城','411300','0'],['411323','西峡','411300','0'],['411324','镇平','411300','0'],['411325','内乡','411300','0'],['411326','淅川','411300','0'],['411327','社旗县','411300','0'],['411328','唐河','411300','0'],['411329','新野','411300','0'],['411330','桐柏','411300','0'],['411381','邓州','411300','0'],['411400','商丘','410000','0'],['411402','梁园','411400','0'],['411403','睢阳','411400','0'],['411421','民权','411400','0'],['411422','睢县','411400','0'],['411423','宁陵','411400','0'],['411424','柘城','411400','0'],['411425','虞城','411400','0'],['411426','夏邑','411400','0'],['411481','永城','411400','0'],['411500','信阳','410000','0'],['411502','浉河','411500','0'],['411503','平桥','411500','0'],['411521','罗山','411500','0'],['411522','光山','411500','0'],['411523','新县','411500','0'],['411524','商城','411500','0'],['411525','固始','411500','0'],['411526','潢川','411500','0'],['411527','淮滨','411500','0'],['411528','息县','411500','0'],['411600','周口','410000','0'],['411602','川汇','411600','0'],['411621','扶沟','411600','0'],['411622','西华','411600','0'],['411623','商水','411600','0'],['411624','沈丘','411600','0'],['411625','郸城','411600','0'],['411626','淮阳','411600','0'],['411627','太康','411600','0'],['411628','鹿邑','411600','0'],['411681','项城','411600','0'],['411700','驻马店','410000','0'],['411702','驿城','411700','0'],['411721','西平','411700','0'],['411722','上蔡','411700','0'],['411723','平舆','411700','0'],['411724','正阳','411700','0'],['411725','确山','411700','0'],['411726','泌阳','411700','0'],['411727','汝南','411700','0'],['411728','遂平','411700','0'],['411729','新蔡','411700','0'],['420100','武汉','420000','0'],['420102','江岸','420100','0'],['420103','江汉','420100','0'],['420104','硚口','420100','0'],['420105','汉阳','420100','0'],['420106','武昌','420100','0'],['420107','青山','420100','0'],['420111','洪山','420100','0'],['420112','东西湖','420100','0'],['420113','汉南','420100','0'],['420114','蔡甸','420100','0'],['420115','江夏','420100','0'],['420116','黄陂','420100','0'],['420117','新洲','420100','0'],['420200','黄石','420000','0'],['420202','黄石港','420200','0'],['420203','西塞山','420200','0'],['420204','下陆','420200','0'],['420205','铁山','420200','0'],['420222','阳新','420200','0'],['420281','大冶','420200','0'],['420300','十堰','420000','0'],['420302','茅箭','420300','0'],['420303','张湾','420300','0'],['420321','郧阳','420300','0'],['420322','郧西','420300','0'],['420323','竹山','420300','0'],['420324','竹溪','420300','0'],['420325','房县','420300','0'],['420381','丹江口','420300','0'],['420500','宜昌','420000','0'],['420502','西陵','420500','0'],['420503','伍家岗','420500','0'],['420504','点军','420500','0'],['420505','猇亭','420500','0'],['420506','夷陵','420500','0'],['420525','远安','420500','0'],['420526','兴山','420500','0'],['420527','秭归','420500','0'],['420528','长阳','420500','0'],['420529','五峰','420500','0'],['420581','宜都','420500','0'],['420582','当阳','420500','0'],['420583','枝江','420500','0'],['420600','襄阳','420000','0'],['420602','襄城','420600','0'],['420606','樊城','420600','0'],['420607','襄州','420600','0'],['420624','南漳','420600','0'],['420625','谷城','420600','0'],['420626','保康','420600','0'],['420682','老河口','420600','0'],['420683','枣阳','420600','0'],['420684','宜城','420600','0'],['420700','鄂州','420000','0'],['420702','梁子湖','420700','0'],['420703','华容','420700','0'],['420704','鄂城','420700','0'],['420800','荆门','420000','0'],['420802','东宝','420800','0'],['420804','掇刀','420800','0'],['420821','京山','420800','0'],['420822','沙洋','420800','0'],['420881','钟祥','420800','0'],['420900','孝感','420000','0'],['420902','孝南','420900','0'],['420921','孝昌','420900','0'],['420922','大悟','420900','0'],['420923','云梦','420900','0'],['420981','应城','420900','0'],['420982','安陆','420900','0'],['420984','汉川','420900','0'],['421000','荆州','420000','0'],['421002','沙市','421000','0'],['421003','荆州','421000','0'],['421022','公安','421000','0'],['421023','监利','421000','0'],['421024','江陵','421000','0'],['421081','石首','421000','0'],['421083','洪湖','421000','0'],['421087','松滋','421000','0'],['421100','黄冈','420000','0'],['421102','黄州','421100','0'],['421121','团风','421100','0'],['421122','红安','421100','0'],['421123','罗田','421100','0'],['421124','英山','421100','0'],['421125','浠水','421100','0'],['421126','蕲春','421100','0'],['421127','黄梅','421100','0'],['421181','麻城','421100','0'],['421182','武穴','421100','0'],['421200','咸宁','420000','0'],['421202','咸安','421200','0'],['421221','嘉鱼','421200','0'],['421222','通城','421200','0'],['421223','崇阳','421200','0'],['421224','通山','421200','0'],['421281','赤壁','421200','0'],['421300','随州','420000','0'],['421302','曾都','421300','0'],['421321','随县','421300','0'],['421381','广水','421300','0'],['422800','恩施','420000','0'],['422801','恩施','422800','0'],['422802','利川','422800','0'],['422822','建始','422800','0'],['422823','巴东','422800','0'],['422825','宣恩','422800','0'],['422826','咸丰','422800','0'],['422827','来凤','422800','0'],['422828','鹤峰','422800','0'],['429004','仙桃','420000','0'],['429005','潜江','420000','0'],['429006','天门','420000','0'],['429021','神农架','420000','0'],['430100','长沙','430000','0'],['430102','芙蓉','430100','0'],['430103','天心','430100','0'],['430104','岳麓','430100','0'],['430105','开福','430100','0'],['430111','雨花','430100','0'],['430121','长沙','430100','0'],['430122','望城','430100','0'],['430124','宁乡','430100','0'],['430181','浏阳','430100','0'],['430200','株洲','430000','0'],['430202','荷塘','430200','0'],['430203','芦淞','430200','0'],['430204','石峰','430200','0'],['430211','天元','430200','0'],['430221','株洲','430200','0'],['430223','攸县','430200','0'],['430224','茶陵','430200','0'],['430225','炎陵','430200','0'],['430281','醴陵','430200','0'],['430300','湘潭','430000','0'],['430302','雨湖','430300','0'],['430304','岳塘','430300','0'],['430321','湘潭','430300','0'],['430381','湘乡','430300','0'],['430382','韶山','430300','0'],['430400','衡阳','430000','0'],['430405','珠晖','430400','0'],['430406','雁峰','430400','0'],['430407','石鼓','430400','0'],['430408','蒸湘','430400','0'],['430412','南岳','430400','0'],['430421','衡阳','430400','0'],['430422','衡南','430400','0'],['430423','衡山','430400','0'],['430424','衡东','430400','0'],['430426','祁东','430400','0'],['430481','耒阳','430400','0'],['430482','常宁','430400','0'],['430500','邵阳','430000','0'],['430502','双清','430500','0'],['430503','大祥','430500','0'],['430511','北塔','430500','0'],['430521','邵东','430500','0'],['430522','新邵','430500','0'],['430523','邵阳','430500','0'],['430524','隆回','430500','0'],['430525','洞口','430500','0'],['430527','绥宁','430500','0'],['430528','新宁','430500','0'],['430529','城步','430500','0'],['430581','武冈','430500','0'],['430600','岳阳','430000','0'],['430602','岳阳楼','430600','0'],['430603','云溪','430600','0'],['430611','君山','430600','0'],['430621','岳阳','430600','0'],['430623','华容','430600','0'],['430624','湘阴','430600','0'],['430626','平江','430600','0'],['430681','汨罗','430600','0'],['430682','临湘','430600','0'],['430700','常德','430000','0'],['430702','武陵','430700','0'],['430703','鼎城','430700','0'],['430721','安乡','430700','0'],['430722','汉寿','430700','0'],['430723','澧县','430700','0'],['430724','临澧','430700','0'],['430725','桃源','430700','0'],['430726','石门','430700','0'],['430781','津市','430700','0'],['430800','张家界','430000','0'],['430802','永定','430800','0'],['430811','武陵源','430800','0'],['430821','慈利','430800','0'],['430822','桑植','430800','0'],['430900','益阳','430000','0'],['430902','资阳','430900','0'],['430903','赫山','430900','0'],['430921','南县','430900','0'],['430922','桃江','430900','0'],['430923','安化','430900','0'],['430981','沅江','430900','0'],['431000','郴州','430000','0'],['431002','北湖','431000','0'],['431003','苏仙','431000','0'],['431021','桂阳','431000','0'],['431022','宜章','431000','0'],['431023','永兴','431000','0'],['431024','嘉禾','431000','0'],['431025','临武','431000','0'],['431026','汝城','431000','0'],['431027','桂东','431000','0'],['431028','安仁','431000','0'],['431081','资兴','431000','0'],['431100','永州','430000','0'],['431102','零陵','431100','0'],['431103','冷水滩','431100','0'],['431121','祁阳','431100','0'],['431122','东安','431100','0'],['431123','双牌','431100','0'],['431124','道县','431100','0'],['431125','江永','431100','0'],['431126','宁远','431100','0'],['431127','蓝山','431100','0'],['431128','新田','431100','0'],['431129','江华','431100','0'],['431200','怀化','430000','0'],['431202','鹤城','431200','0'],['431221','中方','431200','0'],['431222','沅陵','431200','0'],['431223','辰溪','431200','0'],['431224','溆浦','431200','0'],['431225','会同','431200','0'],['431226','麻阳','431200','0'],['431227','新晃','431200','0'],['431228','芷江','431200','0'],['431229','靖州','431200','0'],['431230','通道','431200','0'],['431281','洪江','431200','0'],['431300','娄底','430000','0'],['431302','娄星','431300','0'],['431321','双峰','431300','0'],['431322','新化','431300','0'],['431381','冷水江','431300','0'],['431382','涟源','431300','0'],['433100','湘西','430000','0'],['433101','吉首','433100','0'],['433122','泸溪','433100','0'],['433123','凤凰','433100','0'],['433124','花垣','433100','0'],['433125','保靖','433100','0'],['433126','古丈','433100','0'],['433127','永顺','433100','0'],['433130','龙山','433100','0'],['440100','广州','440000','0'],['440103','荔湾','440100','0'],['440104','越秀','440100','0'],['440105','海珠','440100','0'],['440106','天河','440100','0'],['440111','白云','440100','0'],['440112','黄埔','440100','0'],['440113','番禺','440100','0'],['440114','花都','440100','0'],['440115','南沙','440100','0'],['440116','萝岗','440100','0'],['440183','增城','440100','0'],['440184','从化','440100','0'],['440200','韶关','440000','0'],['440203','武江','440200','0'],['440204','浈江','440200','0'],['440205','曲江','440200','0'],['440222','始兴','440200','0'],['440224','仁化','440200','0'],['440229','翁源','440200','0'],['440232','乳源','440200','0'],['440233','新丰','440200','0'],['440281','乐昌','440200','0'],['440282','南雄','440200','0'],['440300','深圳','440000','0'],['440303','罗湖','440300','0'],['440304','福田','440300','0'],['440305','南山','440300','0'],['440306','宝安','440300','0'],['440307','龙岗','440300','0'],['440308','盐田','440300','0'],['440400','珠海','440000','0'],['440402','香洲','440400','0'],['440403','斗门','440400','0'],['440404','金湾','440400','0'],['440500','汕头','440000','0'],['440507','龙湖','440500','0'],['440511','金平','440500','0'],['440512','濠江','440500','0'],['440513','潮阳','440500','0'],['440514','潮南','440500','0'],['440515','澄海','440500','0'],['440523','南澳','440500','0'],['440600','佛山','440000','0'],['440604','禅城','440600','0'],['440605','南海','440600','0'],['440606','顺德','440600','0'],['440607','三水','440600','0'],['440608','高明','440600','0'],['440700','江门','440000','0'],['440703','蓬江','440700','0'],['440704','江海','440700','0'],['440705','新会','440700','0'],['440781','台山','440700','0'],['440783','开平','440700','0'],['440784','鹤山','440700','0'],['440785','恩平','440700','0'],['440800','湛江','440000','0'],['440802','赤坎','440800','0'],['440803','霞山','440800','0'],['440804','坡头','440800','0'],['440811','麻章','440800','0'],['440823','遂溪','440800','0'],['440825','徐闻','440800','0'],['440881','廉江','440800','0'],['440882','雷州','440800','0'],['440883','吴川','440800','0'],['440900','茂名','440000','0'],['440902','茂南','440900','0'],['440903','电白','440900','0'],['440981','高州','440900','0'],['440982','化州','440900','0'],['440983','信宜','440900','0'],['441200','肇庆','440000','0'],['441202','端州','441200','0'],['441203','鼎湖','441200','0'],['441223','广宁','441200','0'],['441224','怀集','441200','0'],['441225','封开','441200','0'],['441226','德庆','441200','0'],['441283','高要','441200','0'],['441284','四会','441200','0'],['441300','惠州','440000','0'],['441302','惠城','441300','0'],['441303','惠阳','441300','0'],['441322','博罗','441300','0'],['441323','惠东','441300','0'],['441324','龙门','441300','0'],['441400','梅州','440000','0'],['441402','梅江','441400','0'],['441421','梅县','441400','0'],['441422','大埔','441400','0'],['441423','丰顺','441400','0'],['441424','五华','441400','0'],['441426','平远','441400','0'],['441427','蕉岭','441400','0'],['441481','兴宁','441400','0'],['441500','汕尾','440000','0'],['441502','城区','441500','0'],['441521','海丰','441500','0'],['441523','陆河','441500','0'],['441581','陆丰','441500','0'],['441600','河源','440000','0'],['441602','源城','441600','0'],['441621','紫金','441600','0'],['441622','龙川','441600','0'],['441623','连平','441600','0'],['441624','和平','441600','0'],['441625','东源','441600','0'],['441700','阳江','440000','0'],['441702','江城','441700','0'],['441721','阳西','441700','0'],['441723','阳东','441700','0'],['441781','阳春','441700','0'],['441800','清远','440000','0'],['441802','清城','441800','0'],['441821','佛冈','441800','0'],['441823','阳山','441800','0'],['441825','连山','441800','0'],['441826','连南','441800','0'],['441827','清新','441800','0'],['441881','英德','441800','0'],['441882','连州','441800','0'],['441900','东莞','440000','0'],['442000','中山','440000','0'],['445100','潮州','440000','0'],['445102','湘桥','445100','0'],['445121','潮安','445100','0'],['445122','饶平','445100','0'],['445200','揭阳','440000','0'],['445202','榕城','445200','0'],['445221','揭东','445200','0'],['445222','揭西','445200','0'],['445224','惠来','445200','0'],['445281','普宁','445200','0'],['445300','云浮','440000','0'],['445302','云城','445300','0'],['445321','新兴','445300','0'],['445322','郁南','445300','0'],['445323','云安','445300','0'],['445381','罗定','445300','0'],['450100','南宁','450000','0'],['450102','兴宁','450100','0'],['450103','青秀','450100','0'],['450105','江南','450100','0'],['450107','西乡塘','450100','0'],['450108','良庆','450100','0'],['450109','邕宁','450100','0'],['450122','武鸣','450100','0'],['450123','隆安','450100','0'],['450124','马山','450100','0'],['450125','上林','450100','0'],['450126','宾阳','450100','0'],['450127','横县','450100','0'],['450200','柳州','450000','0'],['450202','城中','450200','0'],['450203','鱼峰','450200','0'],['450204','柳南','450200','0'],['450205','柳北','450200','0'],['450221','柳江','450200','0'],['450222','柳城','450200','0'],['450223','鹿寨','450200','0'],['450224','融安','450200','0'],['450225','融水','450200','0'],['450226','三江','450200','0'],['450300','桂林','450000','0'],['450302','秀峰','450300','0'],['450303','叠彩','450300','0'],['450304','象山','450300','0'],['450305','七星','450300','0'],['450311','雁山','450300','0'],['450321','阳朔','450300','0'],['450322','临桂','450300','0'],['450323','灵川','450300','0'],['450324','全州','450300','0'],['450325','兴安','450300','0'],['450326','永福','450300','0'],['450327','灌阳','450300','0'],['450328','龙胜','450300','0'],['450329','资源','450300','0'],['450330','平乐','450300','0'],['450331','荔浦','450300','0'],['450332','恭城','450300','0'],['450400','梧州','450000','0'],['450403','万秀','450400','0'],['450405','长洲','450400','0'],['450406','龙圩','450400','0'],['450421','苍梧','450400','0'],['450422','藤县','450400','0'],['450423','蒙山','450400','0'],['450481','岑溪','450400','0'],['450500','北海','450000','0'],['450502','海城','450500','0'],['450503','银海','450500','0'],['450512','铁山港','450500','0'],['450521','合浦','450500','0'],['450600','防城港','450000','0'],['450602','港口','450600','0'],['450603','防城','450600','0'],['450621','上思','450600','0'],['450681','东兴','450600','0'],['450700','钦州','450000','0'],['450702','钦南','450700','0'],['450703','钦北','450700','0'],['450721','灵山','450700','0'],['450722','浦北','450700','0'],['450800','贵港','450000','0'],['450802','港北','450800','0'],['450803','港南','450800','0'],['450804','覃塘','450800','0'],['450821','平南','450800','0'],['450881','桂平','450800','0'],['450900','玉林','450000','0'],['450902','玉州','450900','0'],['450903','福绵','450900','0'],['450921','容县','450900','0'],['450922','陆川','450900','0'],['450923','博白','450900','0'],['450924','兴业','450900','0'],['450981','北流','450900','0'],['451000','百色','450000','0'],['451002','右江','451000','0'],['451021','田阳','451000','0'],['451022','田东','451000','0'],['451023','平果','451000','0'],['451024','德保','451000','0'],['451025','靖西','451000','0'],['451026','那坡','451000','0'],['451027','凌云','451000','0'],['451028','乐业','451000','0'],['451029','田林','451000','0'],['451030','西林','451000','0'],['451031','隆林','451000','0'],['451100','贺州','450000','0'],['451102','八步','451100','0'],['451119','平桂','451100','0'],['451121','昭平','451100','0'],['451122','钟山','451100','0'],['451123','富川','451100','0'],['451200','河池','450000','0'],['451202','金城江','451200','0'],['451221','南丹','451200','0'],['451222','天峨','451200','0'],['451223','凤山','451200','0'],['451224','东兰','451200','0'],['451225','罗城','451200','0'],['451226','环江','451200','0'],['451227','巴马','451200','0'],['451228','都安','451200','0'],['451229','大化','451200','0'],['451281','宜州','451200','0'],['451300','来宾','450000','0'],['451302','兴宾','451300','0'],['451321','忻城','451300','0'],['451322','象州','451300','0'],['451323','武宣','451300','0'],['451324','金秀','451300','0'],['451381','合山','451300','0'],['451400','崇左','450000','0'],['451402','江州','451400','0'],['451421','扶绥','451400','0'],['451422','宁明','451400','0'],['451423','龙州','451400','0'],['451424','大新','451400','0'],['451425','天等','451400','0'],['451481','凭祥','451400','0'],['460100','海口','460000','0'],['460105','秀英','460100','0'],['460106','龙华','460100','0'],['460107','琼山','460100','0'],['460108','美兰','460100','0'],['460200','三亚','460000','0'],['460300','三沙','460000','0'],['460321','西沙','460300','0'],['460322','南沙','460300','0'],['460323','中沙','460300','0'],['469001','五指山','460000','0'],['469002','琼海','460000','0'],['469003','儋州','460000','0'],['469005','文昌','460000','0'],['469006','万宁','460000','0'],['469007','东方','460000','0'],['469025','定安','460000','0'],['469026','屯昌','460000','0'],['469027','澄迈','460000','0'],['469028','临高','460000','0'],['469030','白沙','460000','0'],['469031','昌江','460000','0'],['469033','乐东','460000','0'],['469034','陵水','460000','0'],['469035','保亭','460000','0'],['469036','琼中','460000','0'],['500100','重庆','500000','0'],['500101','万州','500100','0'],['500102','涪陵','500100','0'],['500103','渝中','500100','0'],['500104','大渡口','500100','0'],['500105','江北','500100','0'],['500106','沙坪坝','500100','0'],['500107','九龙坡','500100','0'],['500108','南岸','500100','0'],['500109','北碚','500100','0'],['500110','万盛','500100','0'],['500111','双桥','500100','0'],['500112','渝北','500100','0'],['500113','巴南','500100','0'],['500114','黔江','500100','0'],['500115','长寿','500100','0'],['500222','綦江','500100','0'],['500223','潼南','500100','0'],['500224','铜梁','500100','0'],['500225','大足','500100','0'],['500226','荣昌','500100','0'],['500227','璧山','500100','0'],['500228','梁平','500100','0'],['500229','城口','500100','0'],['500230','丰都','500100','0'],['500231','垫江','500100','0'],['500232','武隆','500100','0'],['500233','忠县','500100','0'],['500234','开县','500100','0'],['500235','云阳','500100','0'],['500236','奉节','500100','0'],['500237','巫山','500100','0'],['500238','巫溪','500100','0'],['500240','石柱','500100','0'],['500241','秀山','500100','0'],['500242','酉阳','500100','0'],['500243','彭水','500100','0'],['500381','江津','500100','0'],['500382','合川','500100','0'],['500383','永川','500100','0'],['500384','南川','500100','0'],['510100','成都','510000','0'],['510104','锦江','510100','0'],['510105','青羊','510100','0'],['510106','金牛','510100','0'],['510107','武侯','510100','0'],['510108','成华','510100','0'],['510112','龙泉驿','510100','0'],['510113','青白江','510100','0'],['510114','新都','510100','0'],['510115','温江','510100','0'],['510121','金堂','510100','0'],['510122','双流','510100','0'],['510124','郫县','510100','0'],['510129','大邑','510100','0'],['510131','蒲江','510100','0'],['510132','新津','510100','0'],['510181','都江堰','510100','0'],['510182','彭州','510100','0'],['510183','邛崃','510100','0'],['510184','崇州','510100','0'],['510300','自贡','510000','0'],['510302','自流井','510300','0'],['510303','贡井','510300','0'],['510304','大安','510300','0'],['510311','沿滩','510300','0'],['510321','荣县','510300','0'],['510322','富顺','510300','0'],['510400','攀枝花','510000','0'],['510402','东区','510400','0'],['510403','西区','510400','0'],['510411','仁和','510400','0'],['510421','米易','510400','0'],['510422','盐边','510400','0'],['510500','泸州','510000','0'],['510502','江阳','510500','0'],['510503','纳溪','510500','0'],['510504','龙马潭','510500','0'],['510521','泸县','510500','0'],['510522','合江','510500','0'],['510524','叙永','510500','0'],['510525','古蔺','510500','0'],['510600','德阳','510000','0'],['510603','旌阳','510600','0'],['510623','中江','510600','0'],['510626','罗江','510600','0'],['510681','广汉','510600','0'],['510682','什邡','510600','0'],['510683','绵竹','510600','0'],['510700','绵阳','510000','0'],['510703','涪城','510700','0'],['510704','游仙','510700','0'],['510722','三台','510700','0'],['510723','盐亭','510700','0'],['510724','安县','510700','0'],['510725','梓潼','510700','0'],['510726','北川','510700','0'],['510727','平武','510700','0'],['510781','江油','510700','0'],['510800','广元','510000','0'],['510802','利州','510800','0'],['510811','昭化','510800','0'],['510812','朝天','510800','0'],['510821','旺苍','510800','0'],['510822','青川','510800','0'],['510823','剑阁','510800','0'],['510824','苍溪','510800','0'],['510900','遂宁','510000','0'],['510903','船山','510900','0'],['510904','安居','510900','0'],['510921','蓬溪','510900','0'],['510922','射洪','510900','0'],['510923','大英','510900','0'],['511000','内江','510000','0'],['511002','市中','511000','0'],['511011','东兴','511000','0'],['511024','威远','511000','0'],['511025','资中','511000','0'],['511028','隆昌','511000','0'],['511100','乐山','510000','0'],['511102','市中','511100','0'],['511111','沙湾','511100','0'],['511112','五通桥','511100','0'],['511113','金口河','511100','0'],['511123','犍为','511100','0'],['511124','井研','511100','0'],['511126','夹江','511100','0'],['511129','沐川','511100','0'],['511132','峨边','511100','0'],['511133','马边','511100','0'],['511181','峨眉山','511100','0'],['511300','南充','510000','0'],['511302','顺庆','511300','0'],['511303','高坪','511300','0'],['511304','嘉陵','511300','0'],['511321','南部','511300','0'],['511322','营山','511300','0'],['511323','蓬安','511300','0'],['511324','仪陇','511300','0'],['511325','西充','511300','0'],['511381','阆中','511300','0'],['511400','眉山','510000','0'],['511402','东坡','511400','0'],['511421','仁寿','511400','0'],['511422','彭山','511400','0'],['511423','洪雅','511400','0'],['511424','丹棱','511400','0'],['511425','青神','511400','0'],['511500','宜宾','510000','0'],['511502','翠屏','511500','0'],['511521','宜宾','511500','0'],['511522','南溪','511500','0'],['511523','江安','511500','0'],['511524','长宁','511500','0'],['511525','高县','511500','0'],['511526','珙县','511500','0'],['511527','筠连','511500','0'],['511528','兴文','511500','0'],['511529','屏山','511500','0'],['511600','广安','510000','0'],['511602','广安','511600','0'],['511603','前锋','511600','0'],['511621','岳池','511600','0'],['511622','武胜','511600','0'],['511623','邻水','511600','0'],['511681','华蓥','511600','0'],['511700','达州','510000','0'],['511702','通川','511700','0'],['511721','达川','511700','0'],['511722','宣汉','511700','0'],['511723','开江','511700','0'],['511724','大竹','511700','0'],['511725','渠县','511700','0'],['511781','万源','511700','0'],['511800','雅安','510000','0'],['511802','雨城','511800','0'],['511821','名山','511800','0'],['511822','荥经','511800','0'],['511823','汉源','511800','0'],['511824','石棉','511800','0'],['511825','天全','511800','0'],['511826','芦山','511800','0'],['511827','宝兴','511800','0'],['511900','巴中','510000','0'],['511902','巴州','511900','0'],['511903','恩阳','511900','0'],['511921','通江','511900','0'],['511922','南江','511900','0'],['511923','平昌','511900','0'],['512000','资阳','510000','0'],['512002','雁江','512000','0'],['512021','安岳','512000','0'],['512022','乐至','512000','0'],['512081','简阳','512000','0'],['513200','阿坝','510000','0'],['513221','汶川','513200','0'],['513222','理县','513200','0'],['513223','茂县','513200','0'],['513224','松潘','513200','0'],['513225','九寨沟','513200','0'],['513226','金川','513200','0'],['513227','小金','513200','0'],['513228','黑水','513200','0'],['513229','马尔康','513200','0'],['513230','壤塘','513200','0'],['513231','阿坝','513200','0'],['513232','若尔盖','513200','0'],['513233','红原','513200','0'],['513300','甘孜','510000','0'],['513321','康定','513300','0'],['513322','泸定','513300','0'],['513323','丹巴','513300','0'],['513324','九龙','513300','0'],['513325','雅江','513300','0'],['513326','道孚','513300','0'],['513327','炉霍','513300','0'],['513328','甘孜','513300','0'],['513329','新龙','513300','0'],['513330','德格','513300','0'],['513331','白玉','513300','0'],['513332','石渠','513300','0'],['513333','色达','513300','0'],['513334','理塘','513300','0'],['513335','巴塘','513300','0'],['513336','乡城','513300','0'],['513337','稻城','513300','0'],['513338','得荣','513300','0'],['513400','凉山','510000','0'],['513401','西昌','513400','0'],['513422','木里','513400','0'],['513423','盐源','513400','0'],['513424','德昌','513400','0'],['513425','会理','513400','0'],['513426','会东','513400','0'],['513427','宁南','513400','0'],['513428','普格','513400','0'],['513429','布拖','513400','0'],['513430','金阳','513400','0'],['513431','昭觉','513400','0'],['513432','喜德','513400','0'],['513433','冕宁','513400','0'],['513434','越西','513400','0'],['513435','甘洛','513400','0'],['513436','美姑','513400','0'],['513437','雷波','513400','0'],['520100','贵阳','520000','0'],['520102','南明','520100','0'],['520103','云岩','520100','0'],['520111','花溪','520100','0'],['520112','乌当','520100','0'],['520113','白云','520100','0'],['520121','开阳','520100','0'],['520122','息烽','520100','0'],['520123','修文','520100','0'],['520151','观山湖','520100','0'],['520181','清镇','520100','0'],['520200','六盘水','520000','0'],['520201','钟山','520200','0'],['520203','六枝特','520200','0'],['520221','水城','520200','0'],['520222','盘县','520200','0'],['520300','遵义','520000','0'],['520302','红花岗','520300','0'],['520303','汇川','520300','0'],['520321','遵义','520300','0'],['520322','桐梓','520300','0'],['520323','绥阳','520300','0'],['520324','正安','520300','0'],['520325','道真','520300','0'],['520326','务川','520300','0'],['520327','凤冈','520300','0'],['520328','湄潭','520300','0'],['520329','余庆','520300','0'],['520330','习水','520300','0'],['520381','赤水','520300','0'],['520382','仁怀','520300','0'],['520400','安顺','520000','0'],['520402','西秀','520400','0'],['520421','平坝','520400','0'],['520422','普定','520400','0'],['520423','镇宁','520400','0'],['520424','关岭','520400','0'],['520425','紫云','520400','0'],['522200','铜仁','520000','0'],['522201','碧江','522200','0'],['522222','江口','522200','0'],['522223','玉屏','522200','0'],['522224','石阡','522200','0'],['522225','思南','522200','0'],['522226','印江','522200','0'],['522227','德江','522200','0'],['522228','沿河','522200','0'],['522229','松桃','522200','0'],['522230','万山','522200','0'],['522300','黔西南','520000','0'],['522301','兴义','522300','0'],['522322','兴仁','522300','0'],['522323','普安','522300','0'],['522324','晴隆','522300','0'],['522325','贞丰','522300','0'],['522326','望谟','522300','0'],['522327','册亨','522300','0'],['522328','安龙','522300','0'],['522400','毕节','520000','0'],['522401','七星关','522400','0'],['522422','大方','522400','0'],['522423','黔西','522400','0'],['522424','金沙','522400','0'],['522425','织金','522400','0'],['522426','纳雍','522400','0'],['522427','威宁','522400','0'],['522428','赫章','522400','0'],['522600','黔东南','520000','0'],['522601','凯里','522600','0'],['522622','黄平','522600','0'],['522623','施秉','522600','0'],['522624','三穗','522600','0'],['522625','镇远','522600','0'],['522626','岑巩','522600','0'],['522627','天柱','522600','0'],['522628','锦屏','522600','0'],['522629','剑河','522600','0'],['522630','台江','522600','0'],['522631','黎平','522600','0'],['522632','榕江','522600','0'],['522633','从江','522600','0'],['522634','雷山','522600','0'],['522635','麻江','522600','0'],['522636','丹寨','522600','0'],['522700','黔南','520000','0'],['522701','都匀','522700','0'],['522702','福泉','522700','0'],['522722','荔波','522700','0'],['522723','贵定','522700','0'],['522725','瓮安','522700','0'],['522726','独山','522700','0'],['522727','平塘','522700','0'],['522728','罗甸','522700','0'],['522729','长顺','522700','0'],['522730','龙里','522700','0'],['522731','惠水','522700','0'],['522732','三都','522700','0'],['530100','昆明','530000','0'],['530102','五华','530100','0'],['530103','盘龙','530100','0'],['530111','官渡','530100','0'],['530112','西山','530100','0'],['530113','东川','530100','0'],['530121','呈贡','530100','0'],['530122','晋宁','530100','0'],['530124','富民','530100','0'],['530125','宜良','530100','0'],['530126','石林','530100','0'],['530127','嵩明','530100','0'],['530128','禄劝','530100','0'],['530129','寻甸','530100','0'],['530181','安宁','530100','0'],['530300','曲靖','530000','0'],['530302','麒麟','530300','0'],['530321','马龙','530300','0'],['530322','陆良','530300','0'],['530323','师宗','530300','0'],['530324','罗平','530300','0'],['530325','富源','530300','0'],['530326','会泽','530300','0'],['530328','沾益','530300','0'],['530381','宣威','530300','0'],['530400','玉溪','530000','0'],['530402','红塔','530400','0'],['530421','江川','530400','0'],['530422','澄江','530400','0'],['530423','通海','530400','0'],['530424','华宁','530400','0'],['530425','易门','530400','0'],['530426','峨山','530400','0'],['530427','新平','530400','0'],['530428','元江','530400','0'],['530500','保山','530000','0'],['530502','隆阳','530500','0'],['530521','施甸','530500','0'],['530522','腾冲','530500','0'],['530523','龙陵','530500','0'],['530524','昌宁','530500','0'],['530600','昭通','530000','0'],['530602','昭阳','530600','0'],['530621','鲁甸','530600','0'],['530622','巧家','530600','0'],['530623','盐津','530600','0'],['530624','大关','530600','0'],['530625','永善','530600','0'],['530626','绥江','530600','0'],['530627','镇雄','530600','0'],['530628','彝良','530600','0'],['530629','威信','530600','0'],['530630','水富','530600','0'],['530700','丽江','530000','0'],['530702','古城','530700','0'],['530721','玉龙','530700','0'],['530722','永胜','530700','0'],['530723','华坪','530700','0'],['530724','宁蒗','530700','0'],['530800','普洱','530000','0'],['530802','思茅','530800','0'],['530821','宁洱','530800','0'],['530822','墨江','530800','0'],['530823','景东','530800','0'],['530824','景谷','530800','0'],['530825','镇沅','530800','0'],['530826','江城','530800','0'],['530827','孟连','530800','0'],['530828','澜沧','530800','0'],['530829','西盟','530800','0'],['530900','临沧','530000','0'],['530902','临翔','530900','0'],['530921','凤庆','530900','0'],['530922','云县','530900','0'],['530923','永德','530900','0'],['530924','镇康','530900','0'],['530925','双江','530900','0'],['530926','耿马','530900','0'],['530927','沧源','530900','0'],['532300','楚雄','530000','0'],['532301','楚雄','532300','0'],['532322','双柏','532300','0'],['532323','牟定','532300','0'],['532324','南华','532300','0'],['532325','姚安','532300','0'],['532326','大姚','532300','0'],['532327','永仁','532300','0'],['532328','元谋','532300','0'],['532329','武定','532300','0'],['532331','禄丰','532300','0'],['532500','红河','530000','0'],['532501','个旧','532500','0'],['532502','开远','532500','0'],['532522','蒙自','532500','0'],['532523','屏边','532500','0'],['532524','建水','532500','0'],['532525','石屏','532500','0'],['532526','弥勒','532500','0'],['532527','泸西','532500','0'],['532528','元阳','532500','0'],['532529','红河','532500','0'],['532530','金平','532500','0'],['532531','绿春','532500','0'],['532532','河口','532500','0'],['532600','文山','530000','0'],['532621','文山','532600','0'],['532622','砚山','532600','0'],['532623','西畴','532600','0'],['532624','麻栗坡','532600','0'],['532625','马关','532600','0'],['532626','丘北','532600','0'],['532627','广南','532600','0'],['532628','富宁','532600','0'],['532800','西双版纳','530000','0'],['532801','景洪','532800','0'],['532822','勐海','532800','0'],['532823','勐腊','532800','0'],['532900','大理','530000','0'],['532901','大理','532900','0'],['532922','漾濞','532900','0'],['532923','祥云','532900','0'],['532924','宾川','532900','0'],['532925','弥渡','532900','0'],['532926','南涧','532900','0'],['532927','巍山','532900','0'],['532928','永平','532900','0'],['532929','云龙','532900','0'],['532930','洱源','532900','0'],['532931','剑川','532900','0'],['532932','鹤庆','532900','0'],['533100','德宏','530000','0'],['533102','瑞丽','533100','0'],['533103','芒市','533100','0'],['533122','梁河','533100','0'],['533123','盈江','533100','0'],['533124','陇川','533100','0'],['533300','怒江','530000','0'],['533321','泸水','533300','0'],['533323','福贡','533300','0'],['533324','贡山','533300','0'],['533325','兰坪','533300','0'],['533400','迪庆','530000','0'],['533421','香格里拉','533400','0'],['533422','德钦','533400','0'],['533423','维西','533400','0'],['540100','拉萨','540000','0'],['540102','城关','540100','0'],['540121','林周','540100','0'],['540122','当雄','540100','0'],['540123','尼木','540100','0'],['540124','曲水','540100','0'],['540125','堆龙德庆','540100','0'],['540126','达孜','540100','0'],['540127','墨竹工卡','540100','0'],['542100','昌都','540000','0'],['542121','卡若','542100','0'],['542122','江达','542100','0'],['542123','贡觉','542100','0'],['542124','类乌齐','542100','0'],['542125','丁青','542100','0'],['542126','察雅','542100','0'],['542127','八宿','542100','0'],['542128','左贡','542100','0'],['542129','芒康','542100','0'],['542132','洛隆','542100','0'],['542133','边坝','542100','0'],['542200','山南','540000','0'],['542221','乃东','542200','0'],['542222','扎囊','542200','0'],['542223','贡嘎','542200','0'],['542224','桑日','542200','0'],['542225','琼结','542200','0'],['542226','曲松','542200','0'],['542227','措美','542200','0'],['542228','洛扎','542200','0'],['542229','加查','542200','0'],['542231','隆子','542200','0'],['542232','错那','542200','0'],['542233','浪卡子','542200','0'],['542300','日喀则','540000','0'],['542301','桑珠孜','542300','0'],['542322','南木林','542300','0'],['542323','江孜','542300','0'],['542324','定日','542300','0'],['542325','萨迦','542300','0'],['542326','拉孜','542300','0'],['542327','昂仁','542300','0'],['542328','谢通门','542300','0'],['542329','白朗','542300','0'],['542330','仁布','542300','0'],['542331','康马','542300','0'],['542332','定结','542300','0'],['542333','仲巴','542300','0'],['542334','亚东','542300','0'],['542335','吉隆','542300','0'],['542336','聂拉木','542300','0'],['542337','萨嘎','542300','0'],['542338','岗巴','542300','0'],['542400','那曲','540000','0'],['542421','那曲','542400','0'],['542422','嘉黎','542400','0'],['542423','比如','542400','0'],['542424','聂荣','542400','0'],['542425','安多','542400','0'],['542426','申扎','542400','0'],['542427','索县','542400','0'],['542428','班戈','542400','0'],['542429','巴青','542400','0'],['542430','尼玛','542400','0'],['542432','双湖','542400','0'],['542500','阿里','540000','0'],['542521','普兰','542500','0'],['542522','札达','542500','0'],['542523','噶尔','542500','0'],['542524','日土','542500','0'],['542525','革吉','542500','0'],['542526','改则','542500','0'],['542527','措勤','542500','0'],['542600','林芝','540000','0'],['542621','巴宜','542600','0'],['542622','工布江达','542600','0'],['542623','米林','542600','0'],['542624','墨脱','542600','0'],['542625','波密','542600','0'],['542626','察隅','542600','0'],['542627','朗县','542600','0'],['610100','西安','610000','0'],['610102','新城','610100','0'],['610103','碑林','610100','0'],['610104','莲湖','610100','0'],['610111','灞桥','610100','0'],['610112','未央','610100','0'],['610113','雁塔','610100','0'],['610114','阎良','610100','0'],['610115','临潼','610100','0'],['610116','长安','610100','0'],['610122','蓝田','610100','0'],['610124','周至','610100','0'],['610125','户县','610100','0'],['610126','高陵','610100','0'],['610200','铜川','610000','0'],['610202','王益','610200','0'],['610203','印台','610200','0'],['610204','耀州','610200','0'],['610222','宜君','610200','0'],['610300','宝鸡','610000','0'],['610302','渭滨','610300','0'],['610303','金台','610300','0'],['610304','陈仓','610300','0'],['610322','凤翔','610300','0'],['610323','岐山','610300','0'],['610324','扶风','610300','0'],['610326','眉县','610300','0'],['610327','陇县','610300','0'],['610328','千阳','610300','0'],['610329','麟游','610300','0'],['610330','凤县','610300','0'],['610331','太白','610300','0'],['610400','咸阳','610000','0'],['610402','秦都','610400','0'],['610403','杨陵','610400','0'],['610404','渭城','610400','0'],['610422','三原','610400','0'],['610423','泾阳','610400','0'],['610424','乾县','610400','0'],['610425','礼泉','610400','0'],['610426','永寿','610400','0'],['610427','彬县','610400','0'],['610428','长武','610400','0'],['610429','旬邑','610400','0'],['610430','淳化','610400','0'],['610431','武功','610400','0'],['610481','兴平','610400','0'],['610500','渭南','610000','0'],['610502','临渭','610500','0'],['610521','华县','610500','0'],['610522','潼关','610500','0'],['610523','大荔','610500','0'],['610524','合阳','610500','0'],['610525','澄城','610500','0'],['610526','蒲城','610500','0'],['610527','白水','610500','0'],['610528','富平','610500','0'],['610581','韩城','610500','0'],['610582','华阴','610500','0'],['610600','延安','610000','0'],['610602','宝塔','610600','0'],['610621','延长','610600','0'],['610622','延川','610600','0'],['610623','子长','610600','0'],['610624','安塞','610600','0'],['610625','志丹','610600','0'],['610626','吴起','610600','0'],['610627','甘泉','610600','0'],['610628','富县','610600','0'],['610629','洛川','610600','0'],['610630','宜川','610600','0'],['610631','黄龙','610600','0'],['610632','黄陵','610600','0'],['610700','汉中','610000','0'],['610702','汉台','610700','0'],['610721','南郑','610700','0'],['610722','城固','610700','0'],['610723','洋县','610700','0'],['610724','西乡','610700','0'],['610725','勉县','610700','0'],['610726','宁强','610700','0'],['610727','略阳','610700','0'],['610728','镇巴','610700','0'],['610729','留坝','610700','0'],['610730','佛坪','610700','0'],['610800','榆林','610000','0'],['610802','榆阳','610800','0'],['610821','神木','610800','0'],['610822','府谷','610800','0'],['610823','横山','610800','0'],['610824','靖边','610800','0'],['610825','定边','610800','0'],['610826','绥德','610800','0'],['610827','米脂','610800','0'],['610828','佳县','610800','0'],['610829','吴堡','610800','0'],['610830','清涧','610800','0'],['610831','子洲','610800','0'],['610900','安康','610000','0'],['610902','汉滨','610900','0'],['610921','汉阴','610900','0'],['610922','石泉','610900','0'],['610923','宁陕','610900','0'],['610924','紫阳','610900','0'],['610925','岚皋','610900','0'],['610926','平利','610900','0'],['610927','镇坪','610900','0'],['610928','旬阳','610900','0'],['610929','白河','610900','0'],['611000','商洛','610000','0'],['611002','商州','611000','0'],['611021','洛南','611000','0'],['611022','丹凤','611000','0'],['611023','商南','611000','0'],['611024','山阳','611000','0'],['611025','镇安','611000','0'],['611026','柞水','611000','0'],['620100','兰州','620000','0'],['620102','城关','620100','0'],['620103','七里河','620100','0'],['620104','西固','620100','0'],['620105','安宁','620100','0'],['620111','红古','620100','0'],['620121','永登','620100','0'],['620122','皋兰','620100','0'],['620123','榆中','620100','0'],['620200','嘉峪关','620000','0'],['620300','金昌','620000','0'],['620302','金川','620300','0'],['620321','永昌','620300','0'],['620400','白银','620000','0'],['620402','白银','620400','0'],['620403','平川','620400','0'],['620421','靖远','620400','0'],['620422','会宁','620400','0'],['620423','景泰','620400','0'],['620500','天水','620000','0'],['620502','秦州','620500','0'],['620503','麦积','620500','0'],['620521','清水','620500','0'],['620522','秦安','620500','0'],['620523','甘谷','620500','0'],['620524','武山','620500','0'],['620525','张家川','620500','0'],['620600','武威','620000','0'],['620602','凉州','620600','0'],['620621','民勤','620600','0'],['620622','古浪','620600','0'],['620623','天祝','620600','0'],['620700','张掖','620000','0'],['620702','甘州','620700','0'],['620721','肃南','620700','0'],['620722','民乐','620700','0'],['620723','临泽','620700','0'],['620724','高台','620700','0'],['620725','山丹','620700','0'],['620800','平凉','620000','0'],['620802','崆峒','620800','0'],['620821','泾川','620800','0'],['620822','灵台','620800','0'],['620823','崇信','620800','0'],['620824','华亭','620800','0'],['620825','庄浪','620800','0'],['620826','静宁','620800','0'],['620900','酒泉','620000','0'],['620902','肃州','620900','0'],['620921','金塔','620900','0'],['620922','瓜州','620900','0'],['620923','肃北','620900','0'],['620924','阿克塞','620900','0'],['620981','玉门','620900','0'],['620982','敦煌','620900','0'],['621000','庆阳','620000','0'],['621002','西峰','621000','0'],['621021','庆城','621000','0'],['621022','环县','621000','0'],['621023','华池','621000','0'],['621024','合水','621000','0'],['621025','正宁','621000','0'],['621026','宁县','621000','0'],['621027','镇原','621000','0'],['621100','定西','620000','0'],['621102','安定','621100','0'],['621121','通渭','621100','0'],['621122','陇西','621100','0'],['621123','渭源','621100','0'],['621124','临洮','621100','0'],['621125','漳县','621100','0'],['621126','岷县','621100','0'],['621200','陇南','620000','0'],['621202','武都','621200','0'],['621221','成县','621200','0'],['621222','文县','621200','0'],['621223','宕昌','621200','0'],['621224','康县','621200','0'],['621225','西和','621200','0'],['621226','礼县','621200','0'],['621227','徽县','621200','0'],['621228','两当','621200','0'],['622900','临夏','620000','0'],['622901','临夏市','622900','0'],['622921','临夏县','622900','0'],['622922','康乐','622900','0'],['622923','永靖','622900','0'],['622924','广河','622900','0'],['622925','和政','622900','0'],['622926','东乡','622900','0'],['622927','积石山','622900','0'],['623000','甘南','620000','0'],['623001','合作','623000','0'],['623021','临潭','623000','0'],['623022','卓尼','623000','0'],['623023','舟曲','623000','0'],['623024','迭部','623000','0'],['623025','玛曲','623000','0'],['623026','碌曲','623000','0'],['623027','夏河','623000','0'],['630100','西宁','630000','0'],['630102','城东','630100','0'],['630103','城中','630100','0'],['630104','城西','630100','0'],['630105','城北','630100','0'],['630121','大通','630100','0'],['630122','湟中','630100','0'],['630123','湟源','630100','0'],['632100','海东','630000','0'],['632121','平安','632100','0'],['632122','民和','632100','0'],['632123','乐都','632100','0'],['632126','互助','632100','0'],['632127','化隆','632100','0'],['632128','循化','632100','0'],['632200','海北','630000','0'],['632221','门源','632200','0'],['632222','祁连','632200','0'],['632223','海晏','632200','0'],['632224','刚察','632200','0'],['632300','黄南','630000','0'],['632321','同仁','632300','0'],['632322','尖扎','632300','0'],['632323','泽库','632300','0'],['632324','河南','632300','0'],['632500','海南藏族','630000','0'],['632521','共和','632500','0'],['632522','同德','632500','0'],['632523','贵德','632500','0'],['632524','兴海','632500','0'],['632525','贵南','632500','0'],['632600','果洛','630000','0'],['632621','玛沁','632600','0'],['632622','班玛','632600','0'],['632623','甘德','632600','0'],['632624','达日','632600','0'],['632625','久治','632600','0'],['632626','玛多','632600','0'],['632700','玉树','630000','0'],['632721','玉树','632700','0'],['632722','杂多','632700','0'],['632723','称多','632700','0'],['632724','治多','632700','0'],['632725','囊谦','632700','0'],['632726','曲麻莱','632700','0'],['632800','海西','630000','0'],['632801','格尔木','632800','0'],['632802','德令哈','632800','0'],['632821','乌兰','632800','0'],['632822','都兰','632800','0'],['632823','天峻','632800','0'],['640100','银川','640000','0'],['640104','兴庆','640100','0'],['640105','西夏','640100','0'],['640106','金凤','640100','0'],['640121','永宁','640100','0'],['640122','贺兰','640100','0'],['640181','灵武','640100','0'],['640200','石嘴山','640000','0'],['640202','大武口','640200','0'],['640205','惠农','640200','0'],['640221','平罗','640200','0'],['640300','吴忠','640000','0'],['640302','利通','640300','0'],['640303','红寺堡','640300','0'],['640323','盐池','640300','0'],['640324','同心','640300','0'],['640381','青铜峡','640300','0'],['640400','固原','640000','0'],['640402','原州','640400','0'],['640422','西吉','640400','0'],['640423','隆德','640400','0'],['640424','泾源','640400','0'],['640425','彭阳','640400','0'],['640500','中卫','640000','0'],['640502','沙坡头','640500','0'],['640521','中宁','640500','0'],['640522','海原','640500','0'],['650100','乌鲁木齐','650000','0'],['650102','天山','650100','0'],['650103','沙依巴克','650100','0'],['650104','新市','650100','0'],['650105','水磨沟','650100','0'],['650106','头屯河','650100','0'],['650107','达坂城','650100','0'],['650109','米东','650100','0'],['650121','乌鲁木齐','650100','0'],['650200','克拉玛依','650000','0'],['650202','独山子','650200','0'],['650203','克拉玛依','650200','0'],['650204','白碱滩','650200','0'],['650205','乌尔禾','650200','0'],['652100','吐鲁番','650000','0'],['652101','高昌','652100','0'],['652122','鄯善','652100','0'],['652123','托克逊','652100','0'],['652200','哈密','650000','0'],['652201','哈密','652200','0'],['652222','巴里坤','652200','0'],['652223','伊吾','652200','0'],['652300','昌吉','650000','0'],['652301','昌吉','652300','0'],['652302','阜康','652300','0'],['652323','呼图壁','652300','0'],['652324','玛纳斯','652300','0'],['652325','奇台','652300','0'],['652327','吉木萨尔','652300','0'],['652328','木垒','652300','0'],['652700','博尔塔拉','650000','0'],['652701','博乐','652700','0'],['652702','阿拉山口','652700','0'],['652722','精河','652700','0'],['652723','温泉','652700','0'],['652800','巴音郭楞','650000','0'],['652801','库尔勒','652800','0'],['652822','轮台','652800','0'],['652823','尉犁','652800','0'],['652824','若羌','652800','0'],['652825','且末','652800','0'],['652826','焉耆','652800','0'],['652827','和静','652800','0'],['652828','和硕','652800','0'],['652829','博湖','652800','0'],['652900','阿克苏','650000','0'],['652901','阿克苏','652900','0'],['652922','温宿','652900','0'],['652923','库车','652900','0'],['652924','沙雅','652900','0'],['652925','新和','652900','0'],['652926','拜城','652900','0'],['652927','乌什','652900','0'],['652928','阿瓦提','652900','0'],['652929','柯坪','652900','0'],['653000','克孜勒苏柯尔克孜','650000','0'],['653001','阿图什','653000','0'],['653022','阿克陶','653000','0'],['653023','阿合奇','653000','0'],['653024','乌恰','653000','0'],['653100','喀什','650000','0'],['653101','喀什','653100','0'],['653121','疏附','653100','0'],['653122','疏勒','653100','0'],['653123','英吉沙','653100','0'],['653124','泽普','653100','0'],['653125','莎车','653100','0'],['653126','叶城','653100','0'],['653127','麦盖提','653100','0'],['653128','岳普湖','653100','0'],['653129','伽师','653100','0'],['653130','巴楚','653100','0'],['653131','塔什库尔干','653100','0'],['653200','和田','650000','0'],['653201','和田市','653200','0'],['653221','和田县','653200','0'],['653222','墨玉','653200','0'],['653223','皮山','653200','0'],['653224','洛浦','653200','0'],['653225','策勒','653200','0'],['653226','于田','653200','0'],['653227','民丰','653200','0'],['654000','伊犁','650000','0'],['654002','伊宁市','654000','0'],['654003','奎屯','654000','0'],['654021','伊宁县','654000','0'],['654022','察布查尔','654000','0'],['654023','霍城','654000','0'],['654024','巩留','654000','0'],['654025','新源','654000','0'],['654026','昭苏','654000','0'],['654027','特克斯','654000','0'],['654028','尼勒克','654000','0'],['654200','塔城','650000','0'],['654201','塔城','654200','0'],['654202','乌苏','654200','0'],['654221','额敏','654200','0'],['654223','沙湾','654200','0'],['654224','托里','654200','0'],['654225','裕民','654200','0'],['654226','和布克赛尔','654200','0'],['654300','阿勒泰','650000','0'],['654301','阿勒泰','654300','0'],['654321','布尔津','654300','0'],['654322','富蕴','654300','0'],['654323','福海','654300','0'],['654324','哈巴河','654300','0'],['654325','青河','654300','0'],['654326','吉木乃','654300','0'],['659001','石河子','650000','0'],['659002','阿拉尔','650000','0'],['659003','图木舒克','650000','0'],['659004','五家渠','650000','0'],['542301','日喀则市 (桑珠孜区)','542300','1'],['210112','东陵区 (浑南区)','210100','1'],['440903','茂港区 (电白区)','440900','1'],['371324','苍山县 (兰陵县)','371300','1'],['330621','绍兴县 (柯桥区)','330600','1'],['420321','郧县 (郧阳区)','420300','1'],['410224','开封县 (祥符区)','410200','1'],['542121','昌都县 (卡若区)','542100','1'],['371421','陵县 (陵城区)','371400','1'],['411222','陕县 (陕州区)','411200','1'],['542621','林芝县 (巴宜区)','542600','1'],['652101','吐鲁番市 (高昌区)','652100','1'],['510107','高新区 (武侯区)','510100','1'],['510124','高新西区 (郫县)','510100','1'],['320508','工业园区 (姑苏区)','320500','1'],['320505','高新区 (虎丘区)','320500','1'],['330212,330204','高新区 (鄞州区，江东区)','330200','1'],['330204','高新区 (江东区)','330200','2'],['330212','高新区 (鄞州区)','330200','2'],['370214','高新区 (城阳区)','370200','1'],['210213','经济开发区 (金州区)','210200','1'],['340104','高新区 (蜀山区)','340100','1'],['610113,610116','高新区 (雁塔区，长安区)','610100','1'],['610113','高新区 (雁塔区)','610100','2'],['610116','高新区 (长安区)','610100','2'],['410102','高新区 (中原区)','410100','1'],['410104','经济开发区 (管城回族区)','410100','1'],['410105','郑东新区 (金水区)','410100','1'],['220104','高新区 (朝阳区)','220100','1'],['220105','经济开发区 (二道区)','220100','1'],['220106','汽车产业开发区 (绿园区)','220100','1'],['620121','兰州新区 (永登县)','620100','1'],['370705','高新区 (奎文区)','370700','1'],['130108','高新区 (裕华区)','130100','1'],['210211,210212','高新区 (甘井子区，旅顺口区)','210200','1'],['210211','高新区 (甘井子区)','210200','2'],['210212','高新区 (旅顺口区)','210200','2'],['370102,370112','高新区 (历下区，历城区)','370100','1'],['370102','高新区 (历下区)','370100','2'],['370112','高新区 (历城区)','370100','2'],['120116','塘沽区 (滨海新区)','120100','1'],['120116','汉沽区 (滨海新区)','120100','1'],['120116','大港区 (滨海新区)','120100','1'],['210112','浑南新区 (浑南区)','210100','1'],['310101','卢湾区 (黄浦区)','310100','1'],['320104','白下区 (秦淮区)','320100','1'],['320106','下关区 (鼓楼区)','320100','1'],['320323','九里区 (铜山区)','320300','1'],['321003','维扬区 (邗江区)','321000','1'],['340503','金家庄区 (花山区)','340500','1'],['341400','居巢区 (巢湖市)','340100','1'],['370203','四方区 (市北区)','370200','1'],['370211','胶南市 (黄岛区)','370200','1'],['450403','蝶山区 (万秀区)','450400','1'],['520111','小河区 (花溪区)','520100','1'],['320508','沧浪区 (姑苏区)','320500','1'],['320508','平江区 (姑苏区)','320500','1'],['320508','金阊区 (姑苏区)','320500','1'],['451402','江洲区 (江州区)','451400','1'],['510811','元坝区 (昭化区)','510800','1'],['500222','万盛区 (綦江区)','500100','1'],['500225','双桥区 (大足区)','500100','1'],['210184','新城子区 (沈北新区)','210100','1'],['440307','坪山新区 (龙岗区)','440300','1'],['440307','大鹏新区 (龙岗区)','440300','1'],['440306','光明新区 (宝安区)','440300','1'],['440306','龙华新区 (宝安区)','440300','1'],['652701','双河市 (博乐市)','652700','1'],['652801','铁门关市 (库尔勒市)','652800','1'],['654323','北屯市 (福海县)','654300','1'],['320211','新区 (滨湖区)','320200','1'],['420111,420115','东湖高新区 (洪山区，江夏区)','420100','1'],['420111','东湖高新区 (洪山区)','420100','2'],['420115','东湖高新区 (江夏区)','420100','2'],['420114,420105','经济技术开发区 (蔡甸区，汉阳区)','420100','1'],['420114','经济技术开发区 (蔡甸区)','420100','2'],['420105','经济技术开发区 (汉阳区)','420100','2'],['320602','南通经济技术开发区 (崇川区)','320600','1']];exports.default={province:province,county:county};

/***/ },
/* 500 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"address-box\" :class=\"classObj\" @click.stop=\"showAddrPopFun\" @blur=\"hideAddrPopFun\">\n  <div v-if=\"province\" class=\"ad-select has-select\" v-html=\"selectAddr\"></div>\n  <div v-else class=\"ad-select\">{{placeholder}}</div>\n  <i class=\"ad-drop\" :class=\"{'drop-down': showAddrPop}\"></i>\n  <div class=\"ad-overlay\" v-show=\"showAddrPop\">\n    <div class=\"ad-overlay-container\">\n      <div class=\"tab-list\">\n        <ul>\n          <li v-for=\"tab in tabList\" :class=\"{'active': current == tab.id}\" :style=\"{'width': (100/tabList.length)+'%'}\" @click.stop.stop=\"navChoose(tab.id)\">{{tab.name}}</li>\n        </ul>\n      </div>\n      <div class=\"tab-content\">\n        <div class=\"province-content\" v-show=\"current == 'province'\">\n          <dl v-for=\"key in list.provinceList\">\n            <dt>{{$key}}</dt>\n            <dd>\n              <a v-for=\"prov in key\" :title=\"prov[1]\" :attr-id=\"prov[0]\" href=\"javascript:\" @click=\"chooseProvince(prov[0], prov[1])\" :class=\"{'active': provinceId == prov[0]}\">\n                <input v-if=\"provinceId == prov[0]\" :value=\"prov[1]\" type=\"hidden\" v-model=\"province\" />\n                {{prov[1]}}\n              </a>\n            </dd>\n          </dl>\n        </div>\n        <div class=\"city-content\" v-show=\"current == 'city'\">\n          <dl>\n            <dd>\n              <template v-for=\"item in list.countyList\">\n                <a v-if=\"item[2] == provinceId\" :title=\"item[1]\" attr-id=\"item[0]}}\" href=\"javascript:\" @click.stop=\"chooseCity(item[0], item[1])\" :class=\"{'active': cityId == item[0]}\" track-by=\"item[0]\">\n                  <input v-if=\"cityId == item[0]\" :value=\"item[1]\" type=\"hidden\" v-model=\"city\" />\n                  {{item[1]}}\n                </a>\n              </template>\n            </dd>\n          </dl>\n        </div>\n        <div class=\"county-content\" v-if=\"tabList[2]\" v-show=\"current == 'county'\">\n          <dl>\n            <dd>\n              <template v-for=\"item in list.countyList\">\n                <a v-if=\"item[2] == cityId\" :title=\"item[1]\" :attr-id=\"item[0]\" href=\"javascript:\" @click.stop=\"chooseCounty(item[0], item[1])\" :class=\"{'active': countyId == item[0]}\" track-by=\"item[0]\">\n                  <input v-if=\"countyId == item[0]\" :value=\"item[1]\" type=\"hidden\" v-model=\"county\" />\n                  {{item[1]}}\n                </a>\n              </template>\n            </dd>\n          </dl>\n        </div>\n        <div class=\"street-content\" v-if=\"tabList[3]\" v-show=\"current == 'street'\">\n          <dl>\n            <dd>\n              <template v-for=\"item in list.streetList\">\n                <a :title=\"item[0]}}\" :attr-id=\"$key\" :parent-id=\"item[1]\" href=\"javascript:\" @click.stop=\"chooseStreet($key, item[0])\" :class=\"{'active': streetId == $key}\" track-by=\"$key\">\n                  <input v-if=\"streetId == $key\" value=\"item[0]}}\" type=\"hidden\" v-model=\"street\" />\n                  {{item[0]}}\n                </a>\n              </template>\n            </dd>\n          </dl>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n";

/***/ },
/* 501 */
/***/ function(module, exports) {

	module.exports = "\n\n  <div class=\"bs-docs-section\" id=\"addressselect\">\n    <h3 class=\"page-header\"><a href=\"#addressselect\" class=\"anchor\">AddressSelect 地址选择 </a></h3>\n    <div class=\"bs-example\">\n      <h4>无默认选中</h4>\n      <address-select large level=\"2\" placeholder=\"请选择省市\"></address-select>\n      <br>\n      <address-select small level=\"3\" placeholder=\"请选择省市区\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\"></address-select>\n      <br>\n      <h4>有默认选中</h4>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr1\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr2\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr3\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr4\"></address-select>\n      <br>\n      <button type=\"button\" class=\"btn\" id=\"J_click\">点击</button>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<address-select large level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr1\"></address-select>\n<address-select small level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr2\"></address-select>\n<address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr3\"></address-select>\n<address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr4\"></address-select>\n    </script></code></pre>\n    </script>\n    </code>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>level</td>\n          <td><code>String</code></td>\n          <td><code>4</code></td>\n          <td>省份-城市-县区-街道四级地址，要显示几级</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>组件尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>组件尺寸，小</td>\n        </tr>\n        <tr>\n          <td>default-addr</td>\n          <td><code>Object</code></td>\n          <td><code>{\n        provinceId: '',\n        cityId: '',\n        countyId: '',\n        streetId: ''\n      }</code></td>\n          <td>默认要选中的省份、城市、县/区、街道对应ID</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=widgets-docs.js.map