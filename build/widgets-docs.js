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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(455);


/***/ },

/***/ 83:
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

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	__webpack_require__(110);
	module.exports = __webpack_require__(94).Array.from;

/***/ },

/***/ 86:
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

/***/ 87:
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

/***/ 88:
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },

/***/ 89:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 90:
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

/***/ 91:
/***/ function(module, exports) {

	module.exports = true;

/***/ },

/***/ 92:
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

/***/ 93:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 94:
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 95:
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

/***/ 96:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);

/***/ },

/***/ 98:
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

/***/ 99:
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

/***/ 100:
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

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(102)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 102:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 103:
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },

/***/ 104:
/***/ function(module, exports) {

	module.exports = {};

/***/ },

/***/ 105:
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

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(99).setDesc
	  , has = __webpack_require__(103)
	  , TAG = __webpack_require__(107)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(108)('wks')
	  , uid    = __webpack_require__(109)
	  , Symbol = __webpack_require__(93).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(93)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },

/***/ 109:
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },

/***/ 110:
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

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(89);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 112:
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

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(114);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 114:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(104)
	  , ITERATOR   = __webpack_require__(107)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(88)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },

/***/ 117:
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

/***/ 118:
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

/***/ 119:
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 120:
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

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(122)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/headerDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(123)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },

/***/ 122:
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
	      document.getElementById('J_ThemeCss').href = '../../build/' + csslink;
	      document.body.className = csslink.replace('.css', '');
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },

/***/ 123:
/***/ function(module, exports) {

	module.exports = "\n<header class=\"navbar navbar-top bs-docs-nav\" id=\"top\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-navbar\" aria-controls=\"bs-navbar\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"\" class=\"navbar-brand\">VueComponent</a>\n    </div>\n    <nav id=\"bs-navbar\" class=\"collapse navbar-collapse\">\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"components.html\">\n          组件\n        </a></li>\n        <li><a href=\"widgets.html\">\n          Widgets\n        </a></li>\n        <li><a href=\"filters.html\">\n          filters\n        </a></li>\n        <li><a href=\"http://gitlab.alibaba-inc.com/aliqin/vue-component/\">\n          GitLab\n        </a></li>\n        <li><a href=\"http://ued.aliqin.alibaba.net/webcompon/\" target=\"_blank\">\n          视觉稿\n        </a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n<ul class=\"themes\" id=\"J_header\">\n  <li v-for=\"theme in themes\" :class=\"{active:theme.active}\" :style=\"{backgroundColor:theme.color}\" @click=\"changeTheme(theme.csslink,$event)\">\n  </li>\n</ul>\n";

/***/ },

/***/ 129:
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

/***/ 130:
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

/***/ 164:
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

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(256)
	__vue_script__ = __webpack_require__(258)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(259)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(257);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(130)(content, {});
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

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(129)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.vue-affix {\n  position: fixed;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(164);
	
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

/***/ 259:
/***/ function(module, exports) {

	module.exports = "\n<div>\n<div v-bind:class=\"{'vue-affix': affixed}\"\n  v-bind:style=\"styles\">\n  <slot></slot>\n</div>\n</div>\n";

/***/ },

/***/ 334:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 335:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 336:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(399)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },

/***/ 399:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container bs-docs-container\">\n  <div class=\"row\">\n      <slot></slot>\n  </div>\n</div>\n";

/***/ },

/***/ 451:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 452:
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

/***/ 453:
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

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _toConsumableArray2 = __webpack_require__(83);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _headerDocs = __webpack_require__(121);
	
	var _headerDocs2 = _interopRequireDefault(_headerDocs);
	
	var _Affix = __webpack_require__(255);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _container = __webpack_require__(398);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _addressSelectDocs = __webpack_require__(456);
	
	var _addressSelectDocs2 = _interopRequireDefault(_addressSelectDocs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(451);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(336);
	__webpack_require__(452);
	__webpack_require__(453);
	//widgets
	
	
	Vue.config.debug = true;
	
	new Vue({
	  el: '#wrapper',
	  components: {
	    headerDocs: _headerDocs2.default,
	    affix: _Affix2.default,
	    container: _container2.default,
	    addressSelectDocs: _addressSelectDocs2.default
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

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(457)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] docs/example/widgets/addressSelectDocs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(464)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _widgets = __webpack_require__(458);
	
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

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AddressSelect = __webpack_require__(459);
	
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

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _AddressSelect = __webpack_require__(460);
	
	var _AddressSelect2 = _interopRequireDefault(_AddressSelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _AddressSelect2.default;

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(461)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/widgets/AddressSelect/AddressSelect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(463)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _addr = __webpack_require__(462);
	
	var _addr2 = _interopRequireDefault(_addr);
	
	var _EventListener = __webpack_require__(164);
	
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
	//                 <a v-for="prov in key" :title="prov[1]" :attr-id="prov[0]" href="javascript:;" @click="chooseProvince(prov[0], prov[1])" :class="{'active': provinceId == prov[0]}">
	//                   <input v-if="provinceId == prov[0]" value="{{prov[1]}}" type="hidden" v-model="province" />
	//                   {{prov[1]}}
	//                 </a>
	//               </dd>
	//             </dl>
	//           </div>
	//           <div class="city-content" v-show="current == 'city'">
	//             <dl>
	//               <dd>
	//                 <template v-for="item in list.countyList">
	//                   <a v-if="item[2] == provinceId" title="{{item[1]}}" attr-id="{{item[0]}}" href="javascript:;" @click.stop="chooseCity(item[0], item[1])" :class="{'active': cityId == item[0]}" track-by="item[0]">
	//                     <input v-if="cityId == item[0]" value="{{item[1]}}" type="hidden" v-model="city" />
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
	//                   <a v-if="item[2] == cityId" title="{{item[1]}}" attr-id="{{item[0]}}" href="javascript:;" @click.stop="chooseCounty(item[0], item[1])" :class="{'active': countyId == item[0]}" track-by="item[0]">
	//                     <input v-if="countyId == item[0]" value="{{item[1]}}" type="hidden" v-model="county" />
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
	//                   <a title="{{item[0]}}" attr-id="{{$key}}" parent-id="{{item[1]}}" href="javascript:;" @click.stop="chooseStreet($key, item[0])" :class="{'active': streetId == $key}" track-by="$key">
	//                     <input v-if="streetId == $key" value="{{item[0]}}" type="hidden" v-model="street" />
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
	    large: null,
	    small: null
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
	        'large': typeof this.large !== 'undefined',
	        'small': typeof this.small !== 'undefined'
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
	    //   return this.defaultAddr.provinceId;
	    // },
	    // cityId () {
	    //   return this.defaultAddr.cityId;
	    // },
	    // countyId () {
	    //   return this.defaultAddr.countyId;
	    // },
	    // streetId () {
	    //   return this.defaultAddr.streetId;
	    // },
	
	    tabList: function tabList() {
	      var level = this.level - 0;
	      level = typeof level == 'number' ? level : 4;
	
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
	
	      //创建 script 标签并加入到页面中
	      var callbackName = ('jsonp_' + Math.random()).replace('.', '');
	      var oHead = document.getElementsByTagName('head')[0];
	      options.data[options.callback] = callbackName;
	      var params = this.formatParams(options.data);
	      var oS = document.createElement('script');
	      oHead.appendChild(oS);
	
	      //创建jsonp回调函数
	      window[callbackName] = function (json) {
	        oHead.removeChild(oS);
	        clearTimeout(oS.timer);
	        window[callbackName] = null;
	        options.success && options.success(json);
	      };
	
	      //发送请求
	      oS.src = options.url + '?' + params;
	
	      //超时处理
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

/***/ 462:
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var province={"A-G":[["340000","安徽"],["110000","北京"],["500000","重庆"],["350000","福建"],["620000","甘肃"],["440000","广东"],["450000","广西"],["520000","贵州"]],"H-K":[["460000","海南"],["130000","河北"],["230000","黑龙江"],["410000","河南"],["420000","湖北"],["430000","湖南"],["320000","江苏"],["360000","江西"],["220000","吉林"]],"L-S":[["210000","辽宁"],["150000","内蒙古"],["640000","宁夏"],["630000","青海"],["370000","山东"],["310000","上海"],["140000","山西"],["610000","陕西"],["510000","四川"]],"T-Z":[["120000","天津"],["650000","新疆"],["540000","西藏"],["530000","云南"],["330000","浙江"]]};var county=[["110100",["北京","北京"],"110000","0"],["110101",["东城","東城"],"110100","0"],["110102",["西城","西城"],"110100","0"],["110105",["朝阳","朝陽"],"110100","0"],["110106",["丰台","豐臺"],"110100","0"],["110107",["石景山","石景山"],"110100","0"],["110108",["海淀","海澱"],"110100","0"],["110109",["门头沟","門頭溝"],"110100","0"],["110111",["房山","房山"],"110100","0"],["110112",["通州","通州"],"110100","0"],["110113",["顺义","順義"],"110100","0"],["110114",["昌平","昌平"],"110100","0"],["110115",["大兴","大興"],"110100","0"],["110116",["怀柔","懷柔"],"110100","0"],["110117",["平谷","平穀"],"110100","0"],["110228",["密云","密雲"],"110100","0"],["110229",["延庆","延慶"],"110100","0"],["120100",["天津","天津"],"120000","0"],["120101",["和平","和平"],"120100","0"],["120102",["河东","河東"],"120100","0"],["120103",["河西","河西"],"120100","0"],["120104",["南开","南開"],"120100","0"],["120105",["河北","河北"],"120100","0"],["120106",["红桥","紅橋"],"120100","0"],["120110",["东丽","東麗"],"120100","0"],["120111",["西青","西青"],"120100","0"],["120112",["津南","津南"],"120100","0"],["120113",["北辰","北辰"],"120100","0"],["120114",["武清","武清"],"120100","0"],["120115",["宝坻","寶坻"],"120100","0"],["120116",["滨海","濱海"],"120100","0"],["120221",["宁河","寧河"],"120100","0"],["120223",["静海","靜海"],"120100","0"],["120225",["蓟县","薊縣"],"120100","0"],["130100",["石家庄","石家莊"],"130000","0"],["130102",["长安","長安"],"130100","0"],["130103",["桥东","橋東"],"130100","0"],["130104",["桥西","橋西"],"130100","0"],["130105",["新华","新華"],"130100","0"],["130107",["井陉矿","井陘礦"],"130100","0"],["130108",["裕华","裕華"],"130100","0"],["130121",["井陉","井陘"],"130100","0"],["130123",["正定","正定"],"130100","0"],["130124",["栾城","欒城"],"130100","0"],["130125",["行唐","行唐"],"130100","0"],["130126",["灵寿","靈壽"],"130100","0"],["130127",["高邑","高邑"],"130100","0"],["130128",["深泽","深澤"],"130100","0"],["130129",["赞皇","贊皇"],"130100","0"],["130130",["无极","無極"],"130100","0"],["130131",["平山","平山"],"130100","0"],["130132",["元氏","元氏"],"130100","0"],["130133",["赵县","趙縣"],"130100","0"],["130181",["辛集","辛集"],"130100","0"],["130182",["藁城","槁城"],"130100","0"],["130183",["晋州","晉州"],"130100","0"],["130184",["新乐","新樂"],"130100","0"],["130185",["鹿泉","鹿泉"],"130100","0"],["130200",["唐山","唐山"],"130000","0"],["130202",["路南","路南"],"130200","0"],["130203",["路北","路北"],"130200","0"],["130204",["古冶","古冶"],"130200","0"],["130205",["开平","開平"],"130200","0"],["130207",["丰南","豐南"],"130200","0"],["130208",["丰润","豐潤"],"130200","0"],["130223",["滦县","灤縣"],"130200","0"],["130224",["滦南","灤南"],"130200","0"],["130225",["乐亭","樂亭"],"130200","0"],["130227",["迁西","遷西"],"130200","0"],["130229",["玉田","玉田"],"130200","0"],["130230",["曹妃甸","曹妃甸"],"130200","0"],["130281",["遵化","遵化"],"130200","0"],["130283",["迁安","遷安"],"130200","0"],["130300",["秦皇岛","秦皇島"],"130000","0"],["130302",["海港","海港"],"130300","0"],["130303",["山海关","山海關"],"130300","0"],["130304",["北戴河","北戴河"],"130300","0"],["130321",["青龙","青龍"],"130300","0"],["130322",["昌黎","昌黎"],"130300","0"],["130323",["抚宁","撫寧"],"130300","0"],["130324",["卢龙","盧龍"],"130300","0"],["130400",["邯郸","邯鄲"],"130000","0"],["130402",["邯山","邯山"],"130400","0"],["130403",["丛台","叢臺"],"130400","0"],["130404",["复兴","複興"],"130400","0"],["130406",["峰峰矿","峰峰礦"],"130400","0"],["130421",["邯郸","邯鄲"],"130400","0"],["130423",["临漳","臨漳"],"130400","0"],["130424",["成安","成安"],"130400","0"],["130425",["大名","大名"],"130400","0"],["130426",["涉县","涉縣"],"130400","0"],["130427",["磁县","磁縣"],"130400","0"],["130428",["肥乡","肥鄉"],"130400","0"],["130429",["永年","永年"],"130400","0"],["130430",["邱县","邱縣"],"130400","0"],["130431",["鸡泽","雞澤"],"130400","0"],["130432",["广平","廣平"],"130400","0"],["130433",["馆陶","館陶"],"130400","0"],["130434",["魏县","魏縣"],"130400","0"],["130435",["曲周","曲周"],"130400","0"],["130481",["武安","武安"],"130400","0"],["130500",["邢台","邢臺"],"130000","0"],["130502",["桥东","橋東"],"130500","0"],["130503",["桥西","橋西"],"130500","0"],["130521",["邢台","邢臺"],"130500","0"],["130522",["临城","臨城"],"130500","0"],["130523",["内丘","內丘"],"130500","0"],["130524",["柏乡","柏鄉"],"130500","0"],["130525",["隆尧","隆堯"],"130500","0"],["130526",["任县","任縣"],"130500","0"],["130527",["南和","南和"],"130500","0"],["130528",["宁晋","寧晉"],"130500","0"],["130529",["巨鹿","巨鹿"],"130500","0"],["130530",["新河","新河"],"130500","0"],["130531",["广宗","廣宗"],"130500","0"],["130532",["平乡","平鄉"],"130500","0"],["130533",["威县","威縣"],"130500","0"],["130534",["清河","清河"],"130500","0"],["130535",["临西","臨西"],"130500","0"],["130581",["南宫","南宮"],"130500","0"],["130582",["沙河","沙河"],"130500","0"],["130600",["保定","保定"],"130000","0"],["130602",["新市","新市"],"130600","0"],["130603",["北市","北市"],"130600","0"],["130604",["南市","南市"],"130600","0"],["130621",["满城","滿城"],"130600","0"],["130622",["清苑","清苑"],"130600","0"],["130623",["涞水","淶水"],"130600","0"],["130624",["阜平","阜平"],"130600","0"],["130625",["徐水","徐水"],"130600","0"],["130626",["定兴","定興"],"130600","0"],["130627",["唐县","唐縣"],"130600","0"],["130628",["高阳","高陽"],"130600","0"],["130629",["容城","容城"],"130600","0"],["130630",["涞源","淶源"],"130600","0"],["130631",["望都","望都"],"130600","0"],["130632",["安新","安新"],"130600","0"],["130633",["易县","易縣"],"130600","0"],["130634",["曲阳","曲陽"],"130600","0"],["130635",["蠡县","蠡縣"],"130600","0"],["130636",["顺平","順平"],"130600","0"],["130637",["博野","博野"],"130600","0"],["130638",["雄县","雄縣"],"130600","0"],["130681",["涿州","涿州"],"130600","0"],["130682",["定州","定州"],"130600","0"],["130683",["安国","安國"],"130600","0"],["130684",["高碑店","高碑店"],"130600","0"],["130700",["张家口","張家口"],"130000","0"],["130702",["桥东","橋東"],"130700","0"],["130703",["桥西","橋西"],"130700","0"],["130705",["宣化区","宣化區"],"130700","0"],["130706",["下花园","下花園"],"130700","0"],["130721",["宣化县","宣化縣"],"130700","0"],["130722",["张北","張北"],"130700","0"],["130723",["康保","康保"],"130700","0"],["130724",["沽源","沽源"],"130700","0"],["130725",["尚义","尚義"],"130700","0"],["130726",["蔚县","蔚縣"],"130700","0"],["130727",["阳原","陽原"],"130700","0"],["130728",["怀安","懷安"],"130700","0"],["130729",["万全","萬全"],"130700","0"],["130730",["怀来","懷來"],"130700","0"],["130731",["涿鹿","涿鹿"],"130700","0"],["130732",["赤城","赤城"],"130700","0"],["130733",["崇礼","崇禮"],"130700","0"],["130800",["承德","承德"],"130000","0"],["130802",["双桥","雙橋"],"130800","0"],["130803",["双滦","雙灤"],"130800","0"],["130804",["鹰手营子矿","鷹手營子礦"],"130800","0"],["130821",["承德","承德"],"130800","0"],["130822",["兴隆","興隆"],"130800","0"],["130823",["平泉","平泉"],"130800","0"],["130824",["滦平","灤平"],"130800","0"],["130825",["隆化","隆化"],"130800","0"],["130826",["丰宁","豐寧"],"130800","0"],["130827",["宽城","寬城"],"130800","0"],["130828",["围场","圍場"],"130800","0"],["130900",["沧州","滄州"],"130000","0"],["130902",["新华","新華"],"130900","0"],["130903",["运河","運河"],"130900","0"],["130921",["沧县","滄縣"],"130900","0"],["130922",["青县","青縣"],"130900","0"],["130923",["东光","東光"],"130900","0"],["130924",["海兴","海興"],"130900","0"],["130925",["盐山","鹽山"],"130900","0"],["130926",["肃宁","肅寧"],"130900","0"],["130927",["南皮","南皮"],"130900","0"],["130928",["吴桥","吳橋"],"130900","0"],["130929",["献县","獻縣"],"130900","0"],["130930",["孟村","孟村"],"130900","0"],["130981",["泊头","泊頭"],"130900","0"],["130982",["任丘","任丘"],"130900","0"],["130983",["黄骅","黃驊"],"130900","0"],["130984",["河间","河間"],"130900","0"],["131000",["廊坊","廊坊"],"130000","0"],["131002",["安次","安次"],"131000","0"],["131003",["广阳","廣陽"],"131000","0"],["131022",["固安","固安"],"131000","0"],["131023",["永清","永清"],"131000","0"],["131024",["香河","香河"],"131000","0"],["131025",["大城","大城"],"131000","0"],["131026",["文安","文安"],"131000","0"],["131028",["大厂","大廠"],"131000","0"],["131081",["霸州","霸州"],"131000","0"],["131082",["三河","三河"],"131000","0"],["131100",["衡水","衡水"],"130000","0"],["131102",["桃城","桃城"],"131100","0"],["131121",["枣强","棗強"],"131100","0"],["131122",["武邑","武邑"],"131100","0"],["131123",["武强","武強"],"131100","0"],["131124",["饶阳","饒陽"],"131100","0"],["131125",["安平","安平"],"131100","0"],["131126",["故城","故城"],"131100","0"],["131127",["景县","景縣"],"131100","0"],["131128",["阜城","阜城"],"131100","0"],["131181",["冀州","冀州"],"131100","0"],["131182",["深州","深州"],"131100","0"],["140100",["太原","太原"],"140000","0"],["140105",["小店","小店"],"140100","0"],["140106",["迎泽","迎澤"],"140100","0"],["140107",["杏花岭","杏花嶺"],"140100","0"],["140108",["尖草坪","尖草坪"],"140100","0"],["140109",["万柏林","萬柏林"],"140100","0"],["140110",["晋源","晉源"],"140100","0"],["140121",["清徐","清徐"],"140100","0"],["140122",["阳曲","陽曲"],"140100","0"],["140123",["娄烦","婁煩"],"140100","0"],["140181",["古交","古交"],"140100","0"],["140200",["大同","大同"],"140000","0"],["140202",["城区","城區"],"140200","0"],["140203",["矿区","礦區"],"140200","0"],["140211",["南郊","南郊"],"140200","0"],["140212",["新荣","新榮"],"140200","0"],["140221",["阳高","陽高"],"140200","0"],["140222",["天镇","天鎮"],"140200","0"],["140223",["广灵","廣靈"],"140200","0"],["140224",["灵丘","靈丘"],"140200","0"],["140225",["浑源","渾源"],"140200","0"],["140226",["左云","左雲"],"140200","0"],["140227",["大同","大同"],"140200","0"],["140300",["阳泉","陽泉"],"140000","0"],["140302",["城区","城區"],"140300","0"],["140303",["矿区","礦區"],"140300","0"],["140311",["郊区","郊區"],"140300","0"],["140321",["平定","平定"],"140300","0"],["140322",["盂县","盂縣"],"140300","0"],["140400",["长治","長治"],"140000","0"],["140421",["长治","長治"],"140400","0"],["140423",["襄垣","襄垣"],"140400","0"],["140424",["屯留","屯留"],"140400","0"],["140425",["平顺","平順"],"140400","0"],["140426",["黎城","黎城"],"140400","0"],["140427",["壶关","壺關"],"140400","0"],["140428",["长子","長子"],"140400","0"],["140429",["武乡","武鄉"],"140400","0"],["140430",["沁县","沁縣"],"140400","0"],["140431",["沁源","沁源"],"140400","0"],["140481",["潞城","潞城"],"140400","0"],["140482",["城区","城區"],"140400","0"],["140483",["郊区","郊區"],"140400","0"],["140500",["晋城","晉城"],"140000","0"],["140502",["城区","城區"],"140500","0"],["140521",["沁水","沁水"],"140500","0"],["140522",["阳城","陽城"],"140500","0"],["140524",["陵川","陵川"],"140500","0"],["140525",["泽州","澤州"],"140500","0"],["140581",["高平","高平"],"140500","0"],["140600",["朔州","朔州"],"140000","0"],["140602",["朔城","朔城"],"140600","0"],["140603",["平鲁","平魯"],"140600","0"],["140621",["山阴","山陰"],"140600","0"],["140622",["应县","應縣"],"140600","0"],["140623",["右玉","右玉"],"140600","0"],["140624",["怀仁","懷仁"],"140600","0"],["140700",["晋中","晉中"],"140000","0"],["140702",["榆次","榆次"],"140700","0"],["140721",["榆社","榆社"],"140700","0"],["140722",["左权","左權"],"140700","0"],["140723",["和顺","和順"],"140700","0"],["140724",["昔阳","昔陽"],"140700","0"],["140725",["寿阳","壽陽"],"140700","0"],["140726",["太谷","太穀"],"140700","0"],["140727",["祁县","祁縣"],"140700","0"],["140728",["平遥","平遙"],"140700","0"],["140729",["灵石","靈石"],"140700","0"],["140781",["介休","介休"],"140700","0"],["140800",["运城","運城"],"140000","0"],["140802",["盐湖","鹽湖"],"140800","0"],["140821",["临猗","臨猗"],"140800","0"],["140822",["万荣","萬榮"],"140800","0"],["140823",["闻喜","聞喜"],"140800","0"],["140824",["稷山","稷山"],"140800","0"],["140825",["新绛","新絳"],"140800","0"],["140826",["绛县","絳縣"],"140800","0"],["140827",["垣曲","垣曲"],"140800","0"],["140828",["夏县","夏縣"],"140800","0"],["140829",["平陆","平陸"],"140800","0"],["140830",["芮城","芮城"],"140800","0"],["140881",["永济","永濟"],"140800","0"],["140882",["河津","河津"],"140800","0"],["140900",["忻州","忻州"],"140000","0"],["140902",["忻府","忻府"],"140900","0"],["140921",["定襄","定襄"],"140900","0"],["140922",["五台","五臺"],"140900","0"],["140923",["代县","代縣"],"140900","0"],["140924",["繁峙","繁峙"],"140900","0"],["140925",["宁武","寧武"],"140900","0"],["140926",["静乐","靜樂"],"140900","0"],["140927",["神池","神池"],"140900","0"],["140928",["五寨","五寨"],"140900","0"],["140929",["岢岚","岢嵐"],"140900","0"],["140930",["河曲","河曲"],"140900","0"],["140931",["保德","保德"],"140900","0"],["140932",["偏关","偏關"],"140900","0"],["140981",["原平","原平"],"140900","0"],["141000",["临汾","臨汾"],"140000","0"],["141002",["尧都","堯都"],"141000","0"],["141021",["曲沃","曲沃"],"141000","0"],["141022",["翼城","翼城"],"141000","0"],["141023",["襄汾","襄汾"],"141000","0"],["141024",["洪洞","洪洞"],"141000","0"],["141025",["古县","古縣"],"141000","0"],["141026",["安泽","安澤"],"141000","0"],["141027",["浮山","浮山"],"141000","0"],["141028",["吉县","吉縣"],"141000","0"],["141029",["乡宁","鄉寧"],"141000","0"],["141030",["大宁","大寧"],"141000","0"],["141031",["隰县","隰縣"],"141000","0"],["141032",["永和","永和"],"141000","0"],["141033",["蒲县","蒲縣"],"141000","0"],["141034",["汾西","汾西"],"141000","0"],["141081",["侯马","侯馬"],"141000","0"],["141082",["霍州","霍州"],"141000","0"],["141100",["吕梁","呂梁"],"140000","0"],["141102",["离石","離石"],"141100","0"],["141121",["文水","文水"],"141100","0"],["141122",["交城","交城"],"141100","0"],["141123",["兴县","興縣"],"141100","0"],["141124",["临县","臨縣"],"141100","0"],["141125",["柳林","柳林"],"141100","0"],["141126",["石楼","石樓"],"141100","0"],["141127",["岚县","嵐縣"],"141100","0"],["141128",["方山","方山"],"141100","0"],["141129",["中阳","中陽"],"141100","0"],["141130",["交口","交口"],"141100","0"],["141181",["孝义","孝義"],"141100","0"],["141182",["汾阳","汾陽"],"141100","0"],["150100",["呼和浩特","呼和浩特"],"150000","0"],["150102",["新城","新城"],"150100","0"],["150103",["回民","回民"],"150100","0"],["150104",["玉泉","玉泉"],"150100","0"],["150105",["赛罕","賽罕"],"150100","0"],["150121",["土默特左","土默特左"],"150100","0"],["150122",["托克托","托克托"],"150100","0"],["150123",["和林格尔","和林格爾"],"150100","0"],["150124",["清水河","清水河"],"150100","0"],["150125",["武川","武川"],"150100","0"],["150200",["包头","包頭"],"150000","0"],["150202",["东河","東河"],"150200","0"],["150203",["昆都仑","昆都侖"],"150200","0"],["150204",["青山","青山"],"150200","0"],["150205",["石拐","石拐"],"150200","0"],["150206",["白云矿区","白雲礦區"],"150200","0"],["150207",["九原","九原"],"150200","0"],["150221",["土默特右","土默特右"],"150200","0"],["150222",["固阳","固陽"],"150200","0"],["150223",["达尔罕茂明安联合","達爾罕茂明安聯合"],"150200","0"],["150300",["乌海","烏海"],"150000","0"],["150302",["海勃湾","海勃灣"],"150300","0"],["150303",["海南","海南"],"150300","0"],["150304",["乌达","烏達"],"150300","0"],["150400",["赤峰","赤峰"],"150000","0"],["150402",["红山","紅山"],"150400","0"],["150403",["元宝山","元寶山"],"150400","0"],["150404",["松山","松山"],"150400","0"],["150421",["阿鲁科尔沁","阿魯科爾沁"],"150400","0"],["150422",["巴林左","巴林左"],"150400","0"],["150423",["巴林右","巴林右"],"150400","0"],["150424",["林西","林西"],"150400","0"],["150425",["克什克腾","克什克騰"],"150400","0"],["150426",["翁牛特","翁牛特"],"150400","0"],["150428",["喀喇沁","喀喇沁"],"150400","0"],["150429",["宁城","寧城"],"150400","0"],["150430",["敖汉","敖漢"],"150400","0"],["150500",["通辽","通遼"],"150000","0"],["150502",["科尔沁","科爾沁"],"150500","0"],["150521",["科尔沁左翼中","科爾沁左翼中"],"150500","0"],["150522",["科尔沁左翼后","科爾沁左翼後"],"150500","0"],["150523",["开鲁","開魯"],"150500","0"],["150524",["库伦","庫倫"],"150500","0"],["150525",["奈曼","奈曼"],"150500","0"],["150526",["扎鲁特","紮魯特"],"150500","0"],["150581",["霍林郭勒","霍林郭勒"],"150500","0"],["150600",["鄂尔多斯","鄂爾多斯"],"150000","0"],["150602",["东胜","東勝"],"150600","0"],["150621",["达拉特","達拉特"],"150600","0"],["150622",["准格尔","準格爾"],"150600","0"],["150623",["鄂托克前","鄂托克前"],"150600","0"],["150624",["鄂托克","鄂托克"],"150600","0"],["150625",["杭锦","杭錦"],"150600","0"],["150626",["乌审","烏審"],"150600","0"],["150627",["伊金霍洛","伊金霍洛"],"150600","0"],["150700",["呼伦贝尔","呼倫貝爾"],"150000","0"],["150702",["海拉尔","海拉爾"],"150700","0"],["150703",["扎赉诺尔","紮賚諾爾"],"150700","0"],["150721",["阿荣","阿榮"],"150700","0"],["150722",["莫力达瓦","莫力達瓦"],"150700","0"],["150723",["鄂伦春","鄂倫春"],"150700","0"],["150724",["鄂温克","鄂溫克"],"150700","0"],["150725",["陈巴尔虎","陳巴爾虎"],"150700","0"],["150726",["新巴尔虎左","新巴爾虎左"],"150700","0"],["150727",["新巴尔虎右","新巴爾虎右"],"150700","0"],["150781",["满洲里","滿洲裏"],"150700","0"],["150782",["牙克石","牙克石"],"150700","0"],["150783",["扎兰屯","紮蘭屯"],"150700","0"],["150784",["额尔古纳","額爾古納"],"150700","0"],["150785",["根河","根河"],"150700","0"],["150800",["巴彦淖尔","巴彥淖爾"],"150000","0"],["150802",["临河","臨河"],"150800","0"],["150821",["五原","五原"],"150800","0"],["150822",["磴口","磴口"],"150800","0"],["150823",["乌拉特前","烏拉特前"],"150800","0"],["150824",["乌拉特中","烏拉特中"],"150800","0"],["150825",["乌拉特后","烏拉特後"],"150800","0"],["150826",["杭锦后","杭錦後"],"150800","0"],["150900",["乌兰察布","烏蘭察布"],"150000","0"],["150902",["集宁","集寧"],"150900","0"],["150921",["卓资","卓資"],"150900","0"],["150922",["化德","化德"],"150900","0"],["150923",["商都","商都"],"150900","0"],["150924",["兴和","興和"],"150900","0"],["150925",["凉城","涼城"],"150900","0"],["150926",["察哈尔右翼前","察哈爾右翼前"],"150900","0"],["150927",["察哈尔右翼中","察哈爾右翼中"],"150900","0"],["150928",["察哈尔右翼后","察哈爾右翼後"],"150900","0"],["150929",["四子王","四子王"],"150900","0"],["150981",["丰镇","豐鎮"],"150900","0"],["152200",["兴安","興安"],"150000","0"],["152201",["乌兰浩特","烏蘭浩特"],"152200","0"],["152202",["阿尔山","阿爾山"],"152200","0"],["152221",["科尔沁右翼前","科爾沁右翼前"],"152200","0"],["152222",["科尔沁右翼中","科爾沁右翼中"],"152200","0"],["152223",["扎赉特","紮賚特"],"152200","0"],["152224",["突泉","突泉"],"152200","0"],["152500",["锡林郭勒","錫林郭勒"],"150000","0"],["152501",["二连浩特","二連浩特"],"152500","0"],["152502",["锡林浩特","錫林浩特"],"152500","0"],["152522",["阿巴嘎","阿巴嘎"],"152500","0"],["152523",["苏尼特左","蘇尼特左"],"152500","0"],["152524",["苏尼特右","蘇尼特右"],"152500","0"],["152525",["东乌珠穆沁","東烏珠穆沁"],"152500","0"],["152526",["西乌珠穆沁","西烏珠穆沁"],"152500","0"],["152527",["太仆寺","太僕寺"],"152500","0"],["152528",["镶黄","鑲黃"],"152500","0"],["152529",["正镶白","正鑲白"],"152500","0"],["152530",["正蓝","正藍"],"152500","0"],["152531",["多伦","多倫"],"152500","0"],["152900",["阿拉善","阿拉善"],"150000","0"],["152921",["阿拉善左","阿拉善左"],"152900","0"],["152922",["阿拉善右","阿拉善右"],"152900","0"],["152923",["额济纳","額濟納"],"152900","0"],["210100",["沈阳","沈陽"],"210000","0"],["210102",["和平","和平"],"210100","0"],["210103",["沈河","沈河"],"210100","0"],["210104",["大东","大東"],"210100","0"],["210105",["皇姑","皇姑"],"210100","0"],["210106",["铁西","鐵西"],"210100","0"],["210111",["苏家屯","蘇家屯"],"210100","0"],["210112",["浑南","渾南"],"210100","0"],["210113",["新城子","新城子"],"210100","0"],["210114",["于洪","於洪"],"210100","0"],["210122",["辽中","遼中"],"210100","0"],["210123",["康平","康平"],"210100","0"],["210124",["法库","法庫"],"210100","0"],["210181",["新民","新民"],"210100","0"],["210184",["沈北","沈北"],"210100","0"],["210200",["大连","大連"],"210000","0"],["210202",["中山","中山"],"210200","0"],["210203",["西岗","西崗"],"210200","0"],["210204",["沙河口","沙河口"],"210200","0"],["210211",["甘井子","甘井子"],"210200","0"],["210212",["旅顺口","旅順口"],"210200","0"],["210213",["金州","金州"],"210200","0"],["210224",["长海","長海"],"210200","0"],["210281",["瓦房店","瓦房店"],"210200","0"],["210282",["普兰店","普蘭店"],"210200","0"],["210283",["庄河","莊河"],"210200","0"],["210300",["鞍山","鞍山"],"210000","0"],["210302",["铁东","鐵東"],"210300","0"],["210303",["铁西","鐵西"],"210300","0"],["210304",["立山","立山"],"210300","0"],["210311",["千山","千山"],"210300","0"],["210321",["台安","臺安"],"210300","0"],["210323",["岫岩","岫巖"],"210300","0"],["210381",["海城","海城"],"210300","0"],["210400",["抚顺","撫順"],"210000","0"],["210402",["新抚","新撫"],"210400","0"],["210403",["东洲","東洲"],"210400","0"],["210404",["望花","望花"],"210400","0"],["210411",["顺城","順城"],"210400","0"],["210421",["抚顺","撫順"],"210400","0"],["210422",["新宾","新賓"],"210400","0"],["210423",["清原","清原"],"210400","0"],["210500",["本溪","本溪"],"210000","0"],["210502",["平山","平山"],"210500","0"],["210503",["溪湖","溪湖"],"210500","0"],["210504",["明山","明山"],"210500","0"],["210505",["南芬","南芬"],"210500","0"],["210521",["本溪","本溪"],"210500","0"],["210522",["桓仁","桓仁"],"210500","0"],["210600",["丹东","丹東"],"210000","0"],["210602",["元宝","元寶"],"210600","0"],["210603",["振兴","振興"],"210600","0"],["210604",["振安","振安"],"210600","0"],["210624",["宽甸","寬甸"],"210600","0"],["210681",["东港","東港"],"210600","0"],["210682",["凤城","鳳城"],"210600","0"],["210700",["锦州","錦州"],"210000","0"],["210702",["古塔","古塔"],"210700","0"],["210703",["凌河","淩河"],"210700","0"],["210711",["太和","太和"],"210700","0"],["210726",["黑山","黑山"],"210700","0"],["210727",["义县","義縣"],"210700","0"],["210781",["凌海","淩海"],"210700","0"],["210782",["北镇","北鎮"],"210700","0"],["210800",["营口","營口"],"210000","0"],["210802",["站前","站前"],"210800","0"],["210803",["西市","西市"],"210800","0"],["210804",["鲅鱼圈","鮁魚圈"],"210800","0"],["210811",["老边","老邊"],"210800","0"],["210881",["盖州","蓋州"],"210800","0"],["210882",["大石桥","大石橋"],"210800","0"],["210900",["阜新","阜新"],"210000","0"],["210902",["海州","海州"],"210900","0"],["210903",["新邱","新邱"],"210900","0"],["210904",["太平","太平"],"210900","0"],["210905",["清河门","清河門"],"210900","0"],["210911",["细河","細河"],"210900","0"],["210921",["阜新","阜新"],"210900","0"],["210922",["彰武","彰武"],"210900","0"],["211000",["辽阳","遼陽"],"210000","0"],["211002",["白塔","白塔"],"211000","0"],["211003",["文圣","文聖"],"211000","0"],["211004",["宏伟","宏偉"],"211000","0"],["211005",["弓长岭","弓長嶺"],"211000","0"],["211011",["太子河","太子河"],"211000","0"],["211021",["辽阳","遼陽"],"211000","0"],["211081",["灯塔","燈塔"],"211000","0"],["211100",["盘锦","盤錦"],"210000","0"],["211102",["双台子","雙臺子"],"211100","0"],["211103",["兴隆台","興隆臺"],"211100","0"],["211121",["大洼","大窪"],"211100","0"],["211122",["盘山","盤山"],"211100","0"],["211200",["铁岭","鐵嶺"],"210000","0"],["211202",["银州","銀州"],"211200","0"],["211204",["清河","清河"],"211200","0"],["211221",["铁岭","鐵嶺"],"211200","0"],["211223",["西丰","西豐"],"211200","0"],["211224",["昌图","昌圖"],"211200","0"],["211281",["调兵山","調兵山"],"211200","0"],["211282",["开原","開原"],"211200","0"],["211300",["朝阳","朝陽"],"210000","0"],["211302",["双塔","雙塔"],"211300","0"],["211303",["龙城","龍城"],"211300","0"],["211321",["朝阳","朝陽"],"211300","0"],["211322",["建平","建平"],"211300","0"],["211324",["喀左","喀左"],"211300","0"],["211381",["北票","北票"],"211300","0"],["211382",["凌源","淩源"],"211300","0"],["211400",["葫芦岛","葫蘆島"],"210000","0"],["211402",["连山","連山"],"211400","0"],["211403",["龙港","龍港"],"211400","0"],["211404",["南票","南票"],"211400","0"],["211421",["绥中","綏中"],"211400","0"],["211422",["建昌","建昌"],"211400","0"],["211481",["兴城","興城"],"211400","0"],["220100",["长春","長春"],"220000","0"],["220102",["南关","南關"],"220100","0"],["220103",["宽城","寬城"],"220100","0"],["220104",["朝阳","朝陽"],"220100","0"],["220105",["二道","二道"],"220100","0"],["220106",["绿园","綠園"],"220100","0"],["220112",["双阳","雙陽"],"220100","0"],["220122",["农安","農安"],"220100","0"],["220181",["九台","九臺"],"220100","0"],["220182",["榆树","榆樹"],"220100","0"],["220183",["德惠","德惠"],"220100","0"],["220200",["吉林","吉林"],"220000","0"],["220202",["昌邑","昌邑"],"220200","0"],["220203",["龙潭","龍潭"],"220200","0"],["220204",["船营","船營"],"220200","0"],["220211",["丰满","豐滿"],"220200","0"],["220221",["永吉","永吉"],"220200","0"],["220281",["蛟河","蛟河"],"220200","0"],["220282",["桦甸","樺甸"],"220200","0"],["220283",["舒兰","舒蘭"],"220200","0"],["220284",["磐石","磐石"],"220200","0"],["220300",["四平","四平"],"220000","0"],["220302",["铁西","鐵西"],"220300","0"],["220303",["铁东","鐵東"],"220300","0"],["220322",["梨树","梨樹"],"220300","0"],["220323",["伊通","伊通"],"220300","0"],["220381",["公主岭","公主嶺"],"220300","0"],["220382",["双辽","雙遼"],"220300","0"],["220400",["辽源","遼源"],"220000","0"],["220402",["龙山","龍山"],"220400","0"],["220403",["西安","西安"],"220400","0"],["220421",["东丰","東豐"],"220400","0"],["220422",["东辽","東遼"],"220400","0"],["220500",["通化","通化"],"220000","0"],["220502",["东昌","東昌"],"220500","0"],["220503",["二道江","二道江"],"220500","0"],["220521",["通化","通化"],"220500","0"],["220523",["辉南","輝南"],"220500","0"],["220524",["柳河","柳河"],"220500","0"],["220581",["梅河口","梅河口"],"220500","0"],["220582",["集安","集安"],"220500","0"],["220600",["白山","白山"],"220000","0"],["220602",["浑江","渾江"],"220600","0"],["220621",["抚松","撫松"],"220600","0"],["220622",["靖宇","靖宇"],"220600","0"],["220623",["长白","長白"],"220600","0"],["220625",["江源","江源"],"220600","0"],["220681",["临江","臨江"],"220600","0"],["220700",["松原","松原"],"220000","0"],["220702",["宁江","寧江"],"220700","0"],["220721",["前郭","前郭"],"220700","0"],["220722",["长岭","長嶺"],"220700","0"],["220723",["乾安","乾安"],"220700","0"],["220724",["扶余","扶余"],"220700","0"],["220800",["白城","白城"],"220000","0"],["220802",["洮北","洮北"],"220800","0"],["220821",["镇赉","鎮賚"],"220800","0"],["220822",["通榆","通榆"],"220800","0"],["220881",["洮南","洮南"],"220800","0"],["220882",["大安","大安"],"220800","0"],["222400",["延边朝鲜族","延邊朝鮮族"],"220000","0"],["222401",["延吉","延吉"],"222400","0"],["222402",["图们","圖們"],"222400","0"],["222403",["敦化","敦化"],"222400","0"],["222404",["珲春","琿春"],"222400","0"],["222405",["龙井","龍井"],"222400","0"],["222406",["和龙","和龍"],"222400","0"],["222424",["汪清","汪清"],"222400","0"],["222426",["安图","安圖"],"222400","0"],["230100",["哈尔滨","哈爾濱"],"230000","0"],["230102",["道里","道裏"],"230100","0"],["230103",["南岗","南崗"],"230100","0"],["230104",["道外","道外"],"230100","0"],["230106",["香坊","香坊"],"230100","0"],["230108",["平房","平房"],"230100","0"],["230109",["松北","松北"],"230100","0"],["230111",["呼兰","呼蘭"],"230100","0"],["230123",["依兰","依蘭"],"230100","0"],["230124",["方正","方正"],"230100","0"],["230125",["宾县","賓縣"],"230100","0"],["230126",["巴彦","巴彥"],"230100","0"],["230127",["木兰","木蘭"],"230100","0"],["230128",["通河","通河"],"230100","0"],["230129",["延寿","延壽"],"230100","0"],["230181",["阿城","阿城"],"230100","0"],["230182",["双城","雙城"],"230100","0"],["230183",["尚志","尚志"],"230100","0"],["230184",["五常","五常"],"230100","0"],["230200",["齐齐哈尔","齊齊哈爾"],"230000","0"],["230202",["龙沙","龍沙"],"230200","0"],["230203",["建华","建華"],"230200","0"],["230204",["铁锋","鐵鋒"],"230200","0"],["230205",["昂昂溪","昂昂溪"],"230200","0"],["230206",["富拉尔基","富拉爾基"],"230200","0"],["230207",["碾子山","碾子山"],"230200","0"],["230208",["梅里斯达斡尔族","梅裏斯達斡爾族"],"230200","0"],["230221",["龙江","龍江"],"230200","0"],["230223",["依安","依安"],"230200","0"],["230224",["泰来","泰來"],"230200","0"],["230225",["甘南","甘南"],"230200","0"],["230227",["富裕","富裕"],"230200","0"],["230229",["克山","克山"],"230200","0"],["230230",["克东","克東"],"230200","0"],["230231",["拜泉","拜泉"],"230200","0"],["230281",["讷河","訥河"],"230200","0"],["230300",["鸡西","雞西"],"230000","0"],["230302",["鸡冠","雞冠"],"230300","0"],["230303",["恒山","恒山"],"230300","0"],["230304",["滴道","滴道"],"230300","0"],["230305",["梨树","梨樹"],"230300","0"],["230306",["城子河","城子河"],"230300","0"],["230307",["麻山","麻山"],"230300","0"],["230321",["鸡东","雞東"],"230300","0"],["230381",["虎林","虎林"],"230300","0"],["230382",["密山","密山"],"230300","0"],["230400",["鹤岗","鶴崗"],"230000","0"],["230402",["向阳","向陽"],"230400","0"],["230403",["工农","工農"],"230400","0"],["230404",["南山","南山"],"230400","0"],["230405",["兴安","興安"],"230400","0"],["230406",["东山","東山"],"230400","0"],["230407",["兴山","興山"],"230400","0"],["230421",["萝北","蘿北"],"230400","0"],["230422",["绥滨","綏濱"],"230400","0"],["230500",["双鸭山","雙鴨山"],"230000","0"],["230502",["尖山","尖山"],"230500","0"],["230503",["岭东","嶺東"],"230500","0"],["230505",["四方台","四方臺"],"230500","0"],["230506",["宝山","寶山"],"230500","0"],["230521",["集贤","集賢"],"230500","0"],["230522",["友谊","友誼"],"230500","0"],["230523",["宝清","寶清"],"230500","0"],["230524",["饶河","饒河"],"230500","0"],["230600",["大庆","大慶"],"230000","0"],["230602",["萨尔图","薩爾圖"],"230600","0"],["230603",["龙凤","龍鳳"],"230600","0"],["230604",["让胡路","讓胡路"],"230600","0"],["230605",["红岗","紅崗"],"230600","0"],["230606",["大同","大同"],"230600","0"],["230621",["肇州","肇州"],"230600","0"],["230622",["肇源","肇源"],"230600","0"],["230623",["林甸","林甸"],"230600","0"],["230624",["杜尔伯特","杜爾伯特"],"230600","0"],["230700",["伊春","伊春"],"230000","0"],["230702",["伊春","伊春"],"230700","0"],["230703",["南岔","南岔"],"230700","0"],["230704",["友好","友好"],"230700","0"],["230705",["西林","西林"],"230700","0"],["230706",["翠峦","翠巒"],"230700","0"],["230707",["新青","新青"],"230700","0"],["230708",["美溪","美溪"],"230700","0"],["230709",["金山屯","金山屯"],"230700","0"],["230710",["五营","五營"],"230700","0"],["230711",["乌马河","烏馬河"],"230700","0"],["230712",["汤旺河","湯旺河"],"230700","0"],["230713",["带岭","帶嶺"],"230700","0"],["230714",["乌伊岭","烏伊嶺"],"230700","0"],["230715",["红星","紅星"],"230700","0"],["230716",["上甘岭","上甘嶺"],"230700","0"],["230722",["嘉荫","嘉蔭"],"230700","0"],["230781",["铁力","鐵力"],"230700","0"],["230800",["佳木斯","佳木斯"],"230000","0"],["230803",["向阳","向陽"],"230800","0"],["230804",["前进","前進"],"230800","0"],["230805",["东风","東風"],"230800","0"],["230811",["郊区","郊區"],"230800","0"],["230822",["桦南","樺南"],"230800","0"],["230826",["桦川","樺川"],"230800","0"],["230828",["汤原","湯原"],"230800","0"],["230833",["抚远","撫遠"],"230800","0"],["230881",["同江","同江"],"230800","0"],["230882",["富锦","富錦"],"230800","0"],["230900",["七台河","七臺河"],"230000","0"],["230902",["新兴","新興"],"230900","0"],["230903",["桃山","桃山"],"230900","0"],["230904",["茄子河","茄子河"],"230900","0"],["230921",["勃利","勃利"],"230900","0"],["231000",["牡丹江","牡丹江"],"230000","0"],["231002",["东安","東安"],"231000","0"],["231003",["阳明","陽明"],"231000","0"],["231004",["爱民","愛民"],"231000","0"],["231005",["西安","西安"],"231000","0"],["231024",["东宁","東寧"],"231000","0"],["231025",["林口","林口"],"231000","0"],["231081",["绥芬河","綏芬河"],"231000","0"],["231083",["海林","海林"],"231000","0"],["231084",["宁安","寧安"],"231000","0"],["231085",["穆棱","穆棱"],"231000","0"],["231100",["黑河","黑河"],"230000","0"],["231102",["爱辉","愛輝"],"231100","0"],["231121",["嫩江","嫩江"],"231100","0"],["231123",["逊克","遜克"],"231100","0"],["231124",["孙吴","孫吳"],"231100","0"],["231181",["北安","北安"],"231100","0"],["231182",["五大连池","五大連池"],"231100","0"],["231200",["绥化","綏化"],"230000","0"],["231202",["北林","北林"],"231200","0"],["231221",["望奎","望奎"],"231200","0"],["231222",["兰西","蘭西"],"231200","0"],["231223",["青冈","青岡"],"231200","0"],["231224",["庆安","慶安"],"231200","0"],["231225",["明水","明水"],"231200","0"],["231226",["绥棱","綏棱"],"231200","0"],["231281",["安达","安達"],"231200","0"],["231282",["肇东","肇東"],"231200","0"],["231283",["海伦","海倫"],"231200","0"],["232700",["大兴安岭","大興安嶺"],"230000","0"],["232702",["松岭","松嶺"],"232700","0"],["232703",["新林","新林"],"232700","0"],["232704",["呼中","呼中"],"232700","0"],["232721",["呼玛","呼瑪"],"232700","0"],["232722",["塔河","塔河"],"232700","0"],["232723",["漠河","漠河"],"232700","0"],["232724",["加格达奇","加格達奇"],"232700","0"],["310100",["上海","上海"],"310000","0"],["310101",["黄浦","黃浦"],"310100","0"],["310104",["徐汇","徐匯"],"310100","0"],["310105",["长宁","長寧"],"310100","0"],["310106",["静安","靜安"],"310100","0"],["310107",["普陀","普陀"],"310100","0"],["310108",["闸北","閘北"],"310100","0"],["310109",["虹口","虹口"],"310100","0"],["310110",["杨浦","楊浦"],"310100","0"],["310112",["闵行","閔行"],"310100","0"],["310113",["宝山","寶山"],"310100","0"],["310114",["嘉定","嘉定"],"310100","0"],["310115",["浦东","浦東"],"310100","0"],["310116",["金山","金山"],"310100","0"],["310117",["松江","松江"],"310100","0"],["310118",["青浦","青浦"],"310100","0"],["310120",["奉贤","奉賢"],"310100","0"],["310230",["崇明","崇明"],"310100","0"],["320100",["南京","南京"],"320000","0"],["320102",["玄武","玄武"],"320100","0"],["320104",["秦淮","秦淮"],"320100","0"],["320105",["建邺","建鄴"],"320100","0"],["320106",["鼓楼","鼓樓"],"320100","0"],["320111",["浦口","浦口"],"320100","0"],["320113",["栖霞","棲霞"],"320100","0"],["320114",["雨花台","雨花臺"],"320100","0"],["320115",["江宁","江寧"],"320100","0"],["320116",["六合","六合"],"320100","0"],["320124",["溧水","溧水"],"320100","0"],["320125",["高淳","高淳"],"320100","0"],["320200",["无锡","無錫"],"320000","0"],["320202",["崇安","崇安"],"320200","0"],["320203",["南长","南長"],"320200","0"],["320204",["北塘","北塘"],"320200","0"],["320205",["锡山","錫山"],"320200","0"],["320206",["惠山","惠山"],"320200","0"],["320211",["滨湖","濱湖"],"320200","0"],["320281",["江阴","江陰"],"320200","0"],["320282",["宜兴","宜興"],"320200","0"],["320300",["徐州","徐州"],"320000","0"],["320302",["鼓楼","鼓樓"],"320300","0"],["320303",["云龙","雲龍"],"320300","0"],["320305",["贾汪","賈汪"],"320300","0"],["320311",["泉山","泉山"],"320300","0"],["320321",["丰县","豐縣"],"320300","0"],["320322",["沛县","沛縣"],"320300","0"],["320323",["铜山","銅山"],"320300","0"],["320324",["睢宁","睢寧"],"320300","0"],["320381",["新沂","新沂"],"320300","0"],["320382",["邳州","邳州"],"320300","0"],["320400",["常州","常州"],"320000","0"],["320402",["天宁","天寧"],"320400","0"],["320404",["钟楼","鐘樓"],"320400","0"],["320405",["戚墅堰","戚墅堰"],"320400","0"],["320411",["新北","新北"],"320400","0"],["320412",["武进","武進"],"320400","0"],["320481",["溧阳","溧陽"],"320400","0"],["320482",["金坛","金壇"],"320400","0"],["320500",["苏州","蘇州"],"320000","0"],["320505",["虎丘","虎丘"],"320500","0"],["320506",["吴中","吳中"],"320500","0"],["320507",["相城","相城"],"320500","0"],["320508",["姑苏","姑蘇"],"320500","0"],["320581",["常熟","常熟"],"320500","0"],["320582",["张家港","張家港"],"320500","0"],["320583",["昆山","昆山"],"320500","0"],["320584",["吴江","吳江"],"320500","0"],["320585",["太仓","太倉"],"320500","0"],["320600",["南通","南通"],"320000","0"],["320602",["崇川","崇川"],"320600","0"],["320611",["港闸","港閘"],"320600","0"],["320612",["通州","通州"],"320600","0"],["320621",["海安","海安"],"320600","0"],["320623",["如东","如東"],"320600","0"],["320681",["启东","啟東"],"320600","0"],["320682",["如皋","如皋"],"320600","0"],["320684",["海门","海門"],"320600","0"],["320700",["连云港","連雲港"],"320000","0"],["320703",["连云","連雲"],"320700","0"],["320705",["新浦","新浦"],"320700","0"],["320706",["海州","海州"],"320700","0"],["320721",["赣榆","贛榆"],"320700","0"],["320722",["东海","東海"],"320700","0"],["320723",["灌云","灌雲"],"320700","0"],["320724",["灌南","灌南"],"320700","0"],["320800",["淮安","淮安"],"320000","0"],["320802",["清河","清河"],"320800","0"],["320803",["淮安","淮安"],"320800","0"],["320804",["淮阴","淮陰"],"320800","0"],["320811",["清浦","清浦"],"320800","0"],["320826",["涟水","漣水"],"320800","0"],["320829",["洪泽","洪澤"],"320800","0"],["320830",["盱眙","盱眙"],"320800","0"],["320831",["金湖","金湖"],"320800","0"],["320900",["盐城","鹽城"],"320000","0"],["320902",["亭湖","亭湖"],"320900","0"],["320903",["盐都","鹽都"],"320900","0"],["320921",["响水","響水"],"320900","0"],["320922",["滨海","濱海"],"320900","0"],["320923",["阜宁","阜寧"],"320900","0"],["320924",["射阳","射陽"],"320900","0"],["320925",["建湖","建湖"],"320900","0"],["320981",["东台","東臺"],"320900","0"],["320982",["大丰","大豐"],"320900","0"],["321000",["扬州","揚州"],"320000","0"],["321002",["广陵","廣陵"],"321000","0"],["321003",["邗江","邗江"],"321000","0"],["321023",["宝应","寶應"],"321000","0"],["321081",["仪征","儀征"],"321000","0"],["321084",["高邮","高郵"],"321000","0"],["321088",["江都","江都"],"321000","0"],["321100",["镇江","鎮江"],"320000","0"],["321102",["京口","京口"],"321100","0"],["321111",["润州","潤州"],"321100","0"],["321112",["丹徒","丹徒"],"321100","0"],["321181",["丹阳","丹陽"],"321100","0"],["321182",["扬中","揚中"],"321100","0"],["321183",["句容","句容"],"321100","0"],["321200",["泰州","泰州"],"320000","0"],["321202",["海陵","海陵"],"321200","0"],["321203",["高港","高港"],"321200","0"],["321281",["兴化","興化"],"321200","0"],["321282",["靖江","靖江"],"321200","0"],["321283",["泰兴","泰興"],"321200","0"],["321284",["姜堰","薑堰"],"321200","0"],["321300",["宿迁","宿遷"],"320000","0"],["321302",["宿城","宿城"],"321300","0"],["321311",["宿豫","宿豫"],"321300","0"],["321322",["沭阳","沭陽"],"321300","0"],["321323",["泗阳","泗陽"],"321300","0"],["321324",["泗洪","泗洪"],"321300","0"],["330100",["杭州","杭州"],"330000","0"],["330102",["上城","上城"],"330100","0"],["330103",["下城","下城"],"330100","0"],["330104",["江干","江幹"],"330100","0"],["330105",["拱墅","拱墅"],"330100","0"],["330106",["西湖","西湖"],"330100","0"],["330108",["滨江","濱江"],"330100","0"],["330109",["萧山","蕭山"],"330100","0"],["330110",["余杭","余杭"],"330100","0"],["330122",["桐庐","桐廬"],"330100","0"],["330127",["淳安","淳安"],"330100","0"],["330182",["建德","建德"],"330100","0"],["330183",["富阳","富陽"],"330100","0"],["330185",["临安","臨安"],"330100","0"],["330200",["宁波","寧波"],"330000","0"],["330203",["海曙","海曙"],"330200","0"],["330204",["江东","江東"],"330200","0"],["330205",["江北","江北"],"330200","0"],["330206",["北仑","北侖"],"330200","0"],["330211",["镇海","鎮海"],"330200","0"],["330212",["鄞州","鄞州"],"330200","0"],["330225",["象山","象山"],"330200","0"],["330226",["宁海","寧海"],"330200","0"],["330281",["余姚","余姚"],"330200","0"],["330282",["慈溪","慈溪"],"330200","0"],["330283",["奉化","奉化"],"330200","0"],["330300",["温州","溫州"],"330000","0"],["330302",["鹿城","鹿城"],"330300","0"],["330303",["龙湾","龍灣"],"330300","0"],["330304",["瓯海","甌海"],"330300","0"],["330322",["洞头","洞頭"],"330300","0"],["330324",["永嘉","永嘉"],"330300","0"],["330326",["平阳","平陽"],"330300","0"],["330327",["苍南","蒼南"],"330300","0"],["330328",["文成","文成"],"330300","0"],["330329",["泰顺","泰順"],"330300","0"],["330381",["瑞安","瑞安"],"330300","0"],["330382",["乐清","樂清"],"330300","0"],["330400",["嘉兴","嘉興"],"330000","0"],["330402",["南湖","南湖"],"330400","0"],["330411",["秀洲","秀洲"],"330400","0"],["330421",["嘉善","嘉善"],"330400","0"],["330424",["海盐","海鹽"],"330400","0"],["330481",["海宁","海寧"],"330400","0"],["330482",["平湖","平湖"],"330400","0"],["330483",["桐乡","桐鄉"],"330400","0"],["330500",["湖州","湖州"],"330000","0"],["330502",["吴兴","吳興"],"330500","0"],["330503",["南浔","南潯"],"330500","0"],["330521",["德清","德清"],"330500","0"],["330522",["长兴","長興"],"330500","0"],["330523",["安吉","安吉"],"330500","0"],["330600",["绍兴","紹興"],"330000","0"],["330602",["越城","越城"],"330600","0"],["330621",["柯桥","柯橋"],"330600","0"],["330624",["新昌","新昌"],"330600","0"],["330681",["诸暨","諸暨"],"330600","0"],["330682",["上虞","上虞"],"330600","0"],["330683",["嵊州","嵊州"],"330600","0"],["330700",["金华","金華"],"330000","0"],["330702",["婺城","婺城"],"330700","0"],["330703",["金东","金東"],"330700","0"],["330723",["武义","武義"],"330700","0"],["330726",["浦江","浦江"],"330700","0"],["330727",["磐安","磐安"],"330700","0"],["330781",["兰溪","蘭溪"],"330700","0"],["330782",["义乌","義烏"],"330700","0"],["330783",["东阳","東陽"],"330700","0"],["330784",["永康","永康"],"330700","0"],["330800",["衢州","衢州"],"330000","0"],["330802",["柯城","柯城"],"330800","0"],["330803",["衢江","衢江"],"330800","0"],["330822",["常山","常山"],"330800","0"],["330824",["开化","開化"],"330800","0"],["330825",["龙游","龍遊"],"330800","0"],["330881",["江山","江山"],"330800","0"],["330900",["舟山","舟山"],"330000","0"],["330902",["定海","定海"],"330900","0"],["330903",["普陀","普陀"],"330900","0"],["330921",["岱山","岱山"],"330900","0"],["330922",["嵊泗","嵊泗"],"330900","0"],["331000",["台州","臺州"],"330000","0"],["331002",["椒江","椒江"],"331000","0"],["331003",["黄岩","黃巖"],"331000","0"],["331004",["路桥","路橋"],"331000","0"],["331021",["玉环","玉環"],"331000","0"],["331022",["三门","三門"],"331000","0"],["331023",["天台","天臺"],"331000","0"],["331024",["仙居","仙居"],"331000","0"],["331081",["温岭","溫嶺"],"331000","0"],["331082",["临海","臨海"],"331000","0"],["331100",["丽水","麗水"],"330000","0"],["331102",["莲都","蓮都"],"331100","0"],["331121",["青田","青田"],"331100","0"],["331122",["缙云","縉雲"],"331100","0"],["331123",["遂昌","遂昌"],"331100","0"],["331124",["松阳","松陽"],"331100","0"],["331125",["云和","雲和"],"331100","0"],["331126",["庆元","慶元"],"331100","0"],["331127",["景宁","景寧"],"331100","0"],["331181",["龙泉","龍泉"],"331100","0"],["340100",["合肥","合肥"],"340000","0"],["340102",["瑶海","瑤海"],"340100","0"],["340103",["庐阳","廬陽"],"340100","0"],["340104",["蜀山","蜀山"],"340100","0"],["340111",["包河","包河"],"340100","0"],["340121",["长丰","長豐"],"340100","0"],["340122",["肥东","肥東"],"340100","0"],["340123",["肥西","肥西"],"340100","0"],["340200",["芜湖","蕪湖"],"340000","0"],["340202",["镜湖","鏡湖"],"340200","0"],["340203",["弋江","弋江"],"340200","0"],["340207",["鸠江","鳩江"],"340200","0"],["340208",["三山","三山"],"340200","0"],["340221",["芜湖","蕪湖"],"340200","0"],["340222",["繁昌","繁昌"],"340200","0"],["340223",["南陵","南陵"],"340200","0"],["340300",["蚌埠","蚌埠"],"340000","0"],["340302",["龙子湖","龍子湖"],"340300","0"],["340303",["蚌山","蚌山"],"340300","0"],["340304",["禹会","禹會"],"340300","0"],["340311",["淮上","淮上"],"340300","0"],["340321",["怀远","懷遠"],"340300","0"],["340322",["五河","五河"],"340300","0"],["340323",["固镇","固鎮"],"340300","0"],["340400",["淮南","淮南"],"340000","0"],["340402",["大通","大通"],"340400","0"],["340403",["田家庵","田家庵"],"340400","0"],["340404",["谢家集","謝家集"],"340400","0"],["340405",["八公山","八公山"],"340400","0"],["340406",["潘集","潘集"],"340400","0"],["340421",["凤台","鳳臺"],"340400","0"],["340500",["马鞍山","馬鞍山"],"340000","0"],["340503",["花山","花山"],"340500","0"],["340504",["雨山","雨山"],"340500","0"],["340506",["博望","博望"],"340500","0"],["340521",["当涂","當塗"],"340500","0"],["340600",["淮北","淮北"],"340000","0"],["340602",["杜集","杜集"],"340600","0"],["340603",["相山","相山"],"340600","0"],["340604",["烈山","烈山"],"340600","0"],["340621",["濉溪","濉溪"],"340600","0"],["340700",["铜陵","銅陵"],"340000","0"],["340702",["铜官山","銅官山"],"340700","0"],["340703",["狮子山","獅子山"],"340700","0"],["340711",["郊区","郊區"],"340700","0"],["340721",["铜陵","銅陵"],"340700","0"],["340800",["安庆","安慶"],"340000","0"],["340802",["迎江","迎江"],"340800","0"],["340803",["大观","大觀"],"340800","0"],["340811",["宜秀","宜秀"],"340800","0"],["340822",["怀宁","懷寧"],"340800","0"],["340823",["枞阳","樅陽"],"340800","0"],["340824",["潜山","潛山"],"340800","0"],["340825",["太湖","太湖"],"340800","0"],["340826",["宿松","宿松"],"340800","0"],["340827",["望江","望江"],"340800","0"],["340828",["岳西","嶽西"],"340800","0"],["340881",["桐城","桐城"],"340800","0"],["341000",["黄山","黃山"],"340000","0"],["341002",["屯溪","屯溪"],"341000","0"],["341003",["黄山","黃山"],"341000","0"],["341004",["徽州","徽州"],"341000","0"],["341021",["歙县","歙縣"],"341000","0"],["341022",["休宁","休寧"],"341000","0"],["341023",["黟县","黟縣"],"341000","0"],["341024",["祁门","祁門"],"341000","0"],["341100",["滁州","滁州"],"340000","0"],["341102",["琅琊","瑯琊"],"341100","0"],["341103",["南谯","南譙"],"341100","0"],["341122",["来安","來安"],"341100","0"],["341124",["全椒","全椒"],"341100","0"],["341125",["定远","定遠"],"341100","0"],["341126",["凤阳","鳳陽"],"341100","0"],["341181",["天长","天長"],"341100","0"],["341182",["明光","明光"],"341100","0"],["341200",["阜阳","阜陽"],"340000","0"],["341202",["颍州","潁州"],"341200","0"],["341203",["颍东","潁東"],"341200","0"],["341204",["颍泉","潁泉"],"341200","0"],["341221",["临泉","臨泉"],"341200","0"],["341222",["太和","太和"],"341200","0"],["341225",["阜南","阜南"],"341200","0"],["341226",["颍上","潁上"],"341200","0"],["341282",["界首","界首"],"341200","0"],["341300",["宿州","宿州"],"340000","0"],["341302",["埇桥","埇橋"],"341300","0"],["341321",["砀山","碭山"],"341300","0"],["341322",["萧县","蕭縣"],"341300","0"],["341323",["灵璧","靈璧"],"341300","0"],["341324",["泗县","泗縣"],"341300","0"],["341400",["巢湖","巢湖"],"340100","0"],["341421",["庐江","廬江"],"340100","0"],["341422",["无为","無為"],"340200","0"],["341423",["含山","含山"],"340500","0"],["341424",["和县","和縣"],"340500","0"],["341500",["六安","六安"],"340000","0"],["341502",["金安","金安"],"341500","0"],["341503",["裕安","裕安"],"341500","0"],["341521",["寿县","壽縣"],"341500","0"],["341522",["霍邱","霍邱"],"341500","0"],["341523",["舒城","舒城"],"341500","0"],["341524",["金寨","金寨"],"341500","0"],["341525",["霍山","霍山"],"341500","0"],["341600",["亳州","亳州"],"340000","0"],["341602",["谯城","譙城"],"341600","0"],["341621",["涡阳","渦陽"],"341600","0"],["341622",["蒙城","蒙城"],"341600","0"],["341623",["利辛","利辛"],"341600","0"],["341700",["池州","池州"],"340000","0"],["341702",["贵池","貴池"],"341700","0"],["341721",["东至","東至"],"341700","0"],["341722",["石台","石臺"],"341700","0"],["341723",["青阳","青陽"],"341700","0"],["341800",["宣城","宣城"],"340000","0"],["341802",["宣州","宣州"],"341800","0"],["341821",["郎溪","郎溪"],"341800","0"],["341822",["广德","廣德"],"341800","0"],["341823",["泾县","涇縣"],"341800","0"],["341824",["绩溪","績溪"],"341800","0"],["341825",["旌德","旌德"],"341800","0"],["341881",["宁国","寧國"],"341800","0"],["350100",["福州","福州"],"350000","0"],["350102",["鼓楼","鼓樓"],"350100","0"],["350103",["台江","臺江"],"350100","0"],["350104",["仓山","倉山"],"350100","0"],["350105",["马尾","馬尾"],"350100","0"],["350111",["晋安","晉安"],"350100","0"],["350121",["闽侯","閩侯"],"350100","0"],["350122",["连江","連江"],"350100","0"],["350123",["罗源","羅源"],"350100","0"],["350124",["闽清","閩清"],"350100","0"],["350125",["永泰","永泰"],"350100","0"],["350128",["平潭","平潭"],"350100","0"],["350181",["福清","福清"],"350100","0"],["350182",["长乐","長樂"],"350100","0"],["350200",["厦门","廈門"],"350000","0"],["350203",["思明","思明"],"350200","0"],["350205",["海沧","海滄"],"350200","0"],["350206",["湖里","湖裏"],"350200","0"],["350211",["集美","集美"],"350200","0"],["350212",["同安","同安"],"350200","0"],["350213",["翔安","翔安"],"350200","0"],["350300",["莆田","莆田"],"350000","0"],["350302",["城厢","城廂"],"350300","0"],["350303",["涵江","涵江"],"350300","0"],["350304",["荔城","荔城"],"350300","0"],["350305",["秀屿","秀嶼"],"350300","0"],["350322",["仙游","仙遊"],"350300","0"],["350400",["三明","三明"],"350000","0"],["350402",["梅列","梅列"],"350400","0"],["350403",["三元","三元"],"350400","0"],["350421",["明溪","明溪"],"350400","0"],["350423",["清流","清流"],"350400","0"],["350424",["宁化","寧化"],"350400","0"],["350425",["大田","大田"],"350400","0"],["350426",["尤溪","尤溪"],"350400","0"],["350427",["沙县","沙縣"],"350400","0"],["350428",["将乐","將樂"],"350400","0"],["350429",["泰宁","泰寧"],"350400","0"],["350430",["建宁","建寧"],"350400","0"],["350481",["永安","永安"],"350400","0"],["350500",["泉州","泉州"],"350000","0"],["350502",["鲤城","鯉城"],"350500","0"],["350503",["丰泽","豐澤"],"350500","0"],["350504",["洛江","洛江"],"350500","0"],["350505",["泉港","泉港"],"350500","0"],["350521",["惠安","惠安"],"350500","0"],["350524",["安溪","安溪"],"350500","0"],["350525",["永春","永春"],"350500","0"],["350526",["德化","德化"],"350500","0"],["350527",["金门","金門"],"350500","0"],["350581",["石狮","石獅"],"350500","0"],["350582",["晋江","晉江"],"350500","0"],["350583",["南安","南安"],"350500","0"],["350600",["漳州","漳州"],"350000","0"],["350602",["芗城","薌城"],"350600","0"],["350603",["龙文","龍文"],"350600","0"],["350622",["云霄","雲霄"],"350600","0"],["350623",["漳浦","漳浦"],"350600","0"],["350624",["诏安","詔安"],"350600","0"],["350625",["长泰","長泰"],"350600","0"],["350626",["东山","東山"],"350600","0"],["350627",["南靖","南靖"],"350600","0"],["350628",["平和","平和"],"350600","0"],["350629",["华安","華安"],"350600","0"],["350681",["龙海","龍海"],"350600","0"],["350700",["南平","南平"],"350000","0"],["350702",["延平","延平"],"350700","0"],["350721",["顺昌","順昌"],"350700","0"],["350722",["浦城","浦城"],"350700","0"],["350723",["光泽","光澤"],"350700","0"],["350724",["松溪","松溪"],"350700","0"],["350725",["政和","政和"],"350700","0"],["350781",["邵武","邵武"],"350700","0"],["350782",["武夷山","武夷山"],"350700","0"],["350783",["建瓯","建甌"],"350700","0"],["350784",["建阳","建陽"],"350700","0"],["350800",["龙岩","龍巖"],"350000","0"],["350802",["新罗","新羅"],"350800","0"],["350821",["长汀","長汀"],"350800","0"],["350822",["永定","永定"],"350800","0"],["350823",["上杭","上杭"],"350800","0"],["350824",["武平","武平"],"350800","0"],["350825",["连城","連城"],"350800","0"],["350881",["漳平","漳平"],"350800","0"],["350900",["宁德","寧德"],"350000","0"],["350902",["蕉城","蕉城"],"350900","0"],["350921",["霞浦","霞浦"],"350900","0"],["350922",["古田","古田"],"350900","0"],["350923",["屏南","屏南"],"350900","0"],["350924",["寿宁","壽寧"],"350900","0"],["350925",["周宁","周寧"],"350900","0"],["350926",["柘荣","柘榮"],"350900","0"],["350981",["福安","福安"],"350900","0"],["350982",["福鼎","福鼎"],"350900","0"],["360100",["南昌","南昌"],"360000","0"],["360102",["东湖","東湖"],"360100","0"],["360103",["西湖","西湖"],"360100","0"],["360104",["青云谱","青雲譜"],"360100","0"],["360105",["湾里","灣裏"],"360100","0"],["360111",["青山湖","青山湖"],"360100","0"],["360121",["南昌","南昌"],"360100","0"],["360122",["新建","新建"],"360100","0"],["360123",["安义","安義"],"360100","0"],["360124",["进贤","進賢"],"360100","0"],["360200",["景德镇","景德鎮"],"360000","0"],["360202",["昌江","昌江"],"360200","0"],["360203",["珠山","珠山"],"360200","0"],["360222",["浮梁","浮梁"],"360200","0"],["360281",["乐平","樂平"],"360200","0"],["360300",["萍乡","萍鄉"],"360000","0"],["360302",["安源","安源"],"360300","0"],["360313",["湘东","湘東"],"360300","0"],["360321",["莲花","蓮花"],"360300","0"],["360322",["上栗","上栗"],"360300","0"],["360323",["芦溪","蘆溪"],"360300","0"],["360400",["九江","九江"],"360000","0"],["360402",["庐山","廬山"],"360400","0"],["360403",["浔阳","潯陽"],"360400","0"],["360421",["九江","九江"],"360400","0"],["360423",["武宁","武寧"],"360400","0"],["360424",["修水","修水"],"360400","0"],["360425",["永修","永修"],"360400","0"],["360426",["德安","德安"],"360400","0"],["360427",["星子","星子"],"360400","0"],["360428",["都昌","都昌"],"360400","0"],["360429",["湖口","湖口"],"360400","0"],["360430",["彭泽","彭澤"],"360400","0"],["360481",["瑞昌","瑞昌"],"360400","0"],["360483",["共青城","共青城"],"360400","0"],["360500",["新余","新余"],"360000","0"],["360502",["渝水","渝水"],"360500","0"],["360521",["分宜","分宜"],"360500","0"],["360600",["鹰潭","鷹潭"],"360000","0"],["360602",["月湖","月湖"],"360600","0"],["360622",["余江","余江"],"360600","0"],["360681",["贵溪","貴溪"],"360600","0"],["360700",["赣州","贛州"],"360000","0"],["360702",["章贡","章貢"],"360700","0"],["360721",["赣县","贛縣"],"360700","0"],["360722",["信丰","信豐"],"360700","0"],["360723",["大余","大余"],"360700","0"],["360724",["上犹","上猶"],"360700","0"],["360725",["崇义","崇義"],"360700","0"],["360726",["安远","安遠"],"360700","0"],["360727",["龙南","龍南"],"360700","0"],["360728",["定南","定南"],"360700","0"],["360729",["全南","全南"],"360700","0"],["360730",["宁都","寧都"],"360700","0"],["360731",["于都","於都"],"360700","0"],["360732",["兴国","興國"],"360700","0"],["360733",["会昌","會昌"],"360700","0"],["360734",["寻乌","尋烏"],"360700","0"],["360735",["石城","石城"],"360700","0"],["360781",["瑞金","瑞金"],"360700","0"],["360782",["南康","南康"],"360700","0"],["360800",["吉安","吉安"],"360000","0"],["360802",["吉州","吉州"],"360800","0"],["360803",["青原","青原"],"360800","0"],["360821",["吉安","吉安"],"360800","0"],["360822",["吉水","吉水"],"360800","0"],["360823",["峡江","峽江"],"360800","0"],["360824",["新干","新幹"],"360800","0"],["360825",["永丰","永豐"],"360800","0"],["360826",["泰和","泰和"],"360800","0"],["360827",["遂川","遂川"],"360800","0"],["360828",["万安","萬安"],"360800","0"],["360829",["安福","安福"],"360800","0"],["360830",["永新","永新"],"360800","0"],["360881",["井冈山","井岡山"],"360800","0"],["360900",["宜春","宜春"],"360000","0"],["360902",["袁州","袁州"],"360900","0"],["360921",["奉新","奉新"],"360900","0"],["360922",["万载","萬載"],"360900","0"],["360923",["上高","上高"],"360900","0"],["360924",["宜丰","宜豐"],"360900","0"],["360925",["靖安","靖安"],"360900","0"],["360926",["铜鼓","銅鼓"],"360900","0"],["360981",["丰城","豐城"],"360900","0"],["360982",["樟树","樟樹"],"360900","0"],["360983",["高安","高安"],"360900","0"],["361000",["抚州","撫州"],"360000","0"],["361002",["临川","臨川"],"361000","0"],["361021",["南城","南城"],"361000","0"],["361022",["黎川","黎川"],"361000","0"],["361023",["南丰","南豐"],"361000","0"],["361024",["崇仁","崇仁"],"361000","0"],["361025",["乐安","樂安"],"361000","0"],["361026",["宜黄","宜黃"],"361000","0"],["361027",["金溪","金溪"],"361000","0"],["361028",["资溪","資溪"],"361000","0"],["361029",["东乡","東鄉"],"361000","0"],["361030",["广昌","廣昌"],"361000","0"],["361100",["上饶","上饒"],"360000","0"],["361102",["信州","信州"],"361100","0"],["361121",["上饶","上饒"],"361100","0"],["361122",["广丰","廣豐"],"361100","0"],["361123",["玉山","玉山"],"361100","0"],["361124",["铅山","鉛山"],"361100","0"],["361125",["横峰","橫峰"],"361100","0"],["361126",["弋阳","弋陽"],"361100","0"],["361127",["余干","余幹"],"361100","0"],["361128",["鄱阳","鄱陽"],"361100","0"],["361129",["万年","萬年"],"361100","0"],["361130",["婺源","婺源"],"361100","0"],["361181",["德兴","德興"],"361100","0"],["370100",["济南","濟南"],"370000","0"],["370102",["历下","曆下"],"370100","0"],["370103",["市中","市中"],"370100","0"],["370104",["槐荫","槐蔭"],"370100","0"],["370105",["天桥","天橋"],"370100","0"],["370112",["历城","曆城"],"370100","0"],["370113",["长清","長清"],"370100","0"],["370124",["平阴","平陰"],"370100","0"],["370125",["济阳","濟陽"],"370100","0"],["370126",["商河","商河"],"370100","0"],["370181",["章丘","章丘"],"370100","0"],["370200",["青岛","青島"],"370000","0"],["370202",["市南","市南"],"370200","0"],["370203",["市北","市北"],"370200","0"],["370211",["黄岛","黃島"],"370200","0"],["370212",["崂山","嶗山"],"370200","0"],["370213",["李沧","李滄"],"370200","0"],["370214",["城阳","城陽"],"370200","0"],["370281",["胶州","膠州"],"370200","0"],["370282",["即墨","即墨"],"370200","0"],["370283",["平度","平度"],"370200","0"],["370285",["莱西","萊西"],"370200","0"],["370300",["淄博","淄博"],"370000","0"],["370302",["淄川","淄川"],"370300","0"],["370303",["张店","張店"],"370300","0"],["370304",["博山","博山"],"370300","0"],["370305",["临淄","臨淄"],"370300","0"],["370306",["周村","周村"],"370300","0"],["370321",["桓台","桓臺"],"370300","0"],["370322",["高青","高青"],"370300","0"],["370323",["沂源","沂源"],"370300","0"],["370400",["枣庄","棗莊"],"370000","0"],["370402",["市中","市中"],"370400","0"],["370403",["薛城","薛城"],"370400","0"],["370404",["峄城","嶧城"],"370400","0"],["370405",["台儿庄","臺兒莊"],"370400","0"],["370406",["山亭","山亭"],"370400","0"],["370481",["滕州","滕州"],"370400","0"],["370500",["东营","東營"],"370000","0"],["370502",["东营","東營"],"370500","0"],["370503",["河口","河口"],"370500","0"],["370521",["垦利","墾利"],"370500","0"],["370522",["利津","利津"],"370500","0"],["370523",["广饶","廣饒"],"370500","0"],["370600",["烟台","煙臺"],"370000","0"],["370602",["芝罘","芝罘"],"370600","0"],["370611",["福山","福山"],"370600","0"],["370612",["牟平","牟平"],"370600","0"],["370613",["莱山","萊山"],"370600","0"],["370634",["长岛","長島"],"370600","0"],["370681",["龙口","龍口"],"370600","0"],["370682",["莱阳","萊陽"],"370600","0"],["370683",["莱州","萊州"],"370600","0"],["370684",["蓬莱","蓬萊"],"370600","0"],["370685",["招远","招遠"],"370600","0"],["370686",["栖霞","棲霞"],"370600","0"],["370687",["海阳","海陽"],"370600","0"],["370700",["潍坊","濰坊"],"370000","0"],["370702",["潍城","濰城"],"370700","0"],["370703",["寒亭","寒亭"],"370700","0"],["370704",["坊子","坊子"],"370700","0"],["370705",["奎文","奎文"],"370700","0"],["370724",["临朐","臨朐"],"370700","0"],["370725",["昌乐","昌樂"],"370700","0"],["370781",["青州","青州"],"370700","0"],["370782",["诸城","諸城"],"370700","0"],["370783",["寿光","壽光"],"370700","0"],["370784",["安丘","安丘"],"370700","0"],["370785",["高密","高密"],"370700","0"],["370786",["昌邑","昌邑"],"370700","0"],["370800",["济宁","濟寧"],"370000","0"],["370802",["市中","市中"],"370800","0"],["370811",["任城","任城"],"370800","0"],["370826",["微山","微山"],"370800","0"],["370827",["鱼台","魚臺"],"370800","0"],["370828",["金乡","金鄉"],"370800","0"],["370829",["嘉祥","嘉祥"],"370800","0"],["370830",["汶上","汶上"],"370800","0"],["370831",["泗水","泗水"],"370800","0"],["370832",["梁山","梁山"],"370800","0"],["370881",["曲阜","曲阜"],"370800","0"],["370882",["兖州","兗州"],"370800","0"],["370883",["邹城","鄒城"],"370800","0"],["370900",["泰安","泰安"],"370000","0"],["370902",["泰山","泰山"],"370900","0"],["370903",["岱岳","岱嶽"],"370900","0"],["370921",["宁阳","寧陽"],"370900","0"],["370923",["东平","東平"],"370900","0"],["370982",["新泰","新泰"],"370900","0"],["370983",["肥城","肥城"],"370900","0"],["371000",["威海","威海"],"370000","0"],["371002",["环翠","環翠"],"371000","0"],["371081",["文登","文登"],"371000","0"],["371082",["荣成","榮成"],"371000","0"],["371083",["乳山","乳山"],"371000","0"],["371100",["日照","日照"],"370000","0"],["371102",["东港","東港"],"371100","0"],["371103",["岚山","嵐山"],"371100","0"],["371121",["五莲","五蓮"],"371100","0"],["371122",["莒县","莒縣"],"371100","0"],["371200",["莱芜","萊蕪"],"370000","0"],["371202",["莱城","萊城"],"371200","0"],["371203",["钢城","鋼城"],"371200","0"],["371300",["临沂","臨沂"],"370000","0"],["371302",["兰山","蘭山"],"371300","0"],["371311",["罗庄","羅莊"],"371300","0"],["371312",["河东","河東"],"371300","0"],["371321",["沂南","沂南"],"371300","0"],["371322",["郯城","郯城"],"371300","0"],["371323",["沂水","沂水"],"371300","0"],["371324",["兰陵","蘭陵"],"371300","0"],["371325",["费县","費縣"],"371300","0"],["371326",["平邑","平邑"],"371300","0"],["371327",["莒南","莒南"],"371300","0"],["371328",["蒙阴","蒙陰"],"371300","0"],["371329",["临沭","臨沭"],"371300","0"],["371400",["德州","德州"],"370000","0"],["371402",["德城","德城"],"371400","0"],["371421",["陵城","陵城"],"371400","0"],["371422",["宁津","寧津"],"371400","0"],["371423",["庆云","慶雲"],"371400","0"],["371424",["临邑","臨邑"],"371400","0"],["371425",["齐河","齊河"],"371400","0"],["371426",["平原","平原"],"371400","0"],["371427",["夏津","夏津"],"371400","0"],["371428",["武城","武城"],"371400","0"],["371481",["乐陵","樂陵"],"371400","0"],["371482",["禹城","禹城"],"371400","0"],["371500",["聊城","聊城"],"370000","0"],["371502",["东昌府","東昌府"],"371500","0"],["371521",["阳谷","陽穀"],"371500","0"],["371522",["莘县","莘縣"],"371500","0"],["371523",["茌平","茌平"],"371500","0"],["371524",["东阿","東阿"],"371500","0"],["371525",["冠县","冠縣"],"371500","0"],["371526",["高唐","高唐"],"371500","0"],["371581",["临清","臨清"],"371500","0"],["371600",["滨州","濱州"],"370000","0"],["371602",["滨城","濱城"],"371600","0"],["371621",["惠民","惠民"],"371600","0"],["371622",["阳信","陽信"],"371600","0"],["371623",["无棣","無棣"],"371600","0"],["371624",["沾化","沾化"],"371600","0"],["371625",["博兴","博興"],"371600","0"],["371626",["邹平","鄒平"],"371600","0"],["371700",["菏泽","菏澤"],"370000","0"],["371702",["牡丹","牡丹"],"371700","0"],["371721",["曹县","曹縣"],"371700","0"],["371722",["单县","單縣"],"371700","0"],["371723",["成武","成武"],"371700","0"],["371724",["巨野","巨野"],"371700","0"],["371725",["郓城","鄆城"],"371700","0"],["371726",["鄄城","鄄城"],"371700","0"],["371727",["定陶","定陶"],"371700","0"],["371728",["东明","東明"],"371700","0"],["410100",["郑州","鄭州"],"410000","0"],["410102",["中原","中原"],"410100","0"],["410103",["二七","二七"],"410100","0"],["410104",["管城回族","管城回族"],"410100","0"],["410105",["金水","金水"],"410100","0"],["410106",["上街","上街"],"410100","0"],["410108",["惠济","惠濟"],"410100","0"],["410122",["中牟","中牟"],"410100","0"],["410181",["巩义","鞏義"],"410100","0"],["410182",["荥阳","滎陽"],"410100","0"],["410183",["新密","新密"],"410100","0"],["410184",["新郑","新鄭"],"410100","0"],["410185",["登封","登封"],"410100","0"],["410200",["开封","開封"],"410000","0"],["410202",["龙亭","龍亭"],"410200","0"],["410203",["顺河回族","順河回族"],"410200","0"],["410204",["鼓楼","鼓樓"],"410200","0"],["410205",["禹王台","禹王臺"],"410200","0"],["410211",["金明","金明"],"410200","0"],["410221",["杞县","杞縣"],"410200","0"],["410222",["通许","通許"],"410200","0"],["410223",["尉氏","尉氏"],"410200","0"],["410224",["祥符","祥符"],"410200","0"],["410225",["兰考","蘭考"],"410200","0"],["410300",["洛阳","洛陽"],"410000","0"],["410302",["老城","老城"],"410300","0"],["410303",["西工","西工"],"410300","0"],["410304",["瀍河回族","瀍河回族"],"410300","0"],["410305",["涧西","澗西"],"410300","0"],["410306",["吉利","吉利"],"410300","0"],["410307",["洛龙","洛龍"],"410300","0"],["410322",["孟津","孟津"],"410300","0"],["410323",["新安","新安"],"410300","0"],["410324",["栾川","欒川"],"410300","0"],["410325",["嵩县","嵩縣"],"410300","0"],["410326",["汝阳","汝陽"],"410300","0"],["410327",["宜阳","宜陽"],"410300","0"],["410328",["洛宁","洛寧"],"410300","0"],["410329",["伊川","伊川"],"410300","0"],["410381",["偃师","偃師"],"410300","0"],["410400",["平顶山","平頂山"],"410000","0"],["410402",["新华","新華"],"410400","0"],["410403",["卫东","衛東"],"410400","0"],["410404",["石龙","石龍"],"410400","0"],["410411",["湛河","湛河"],"410400","0"],["410421",["宝丰","寶豐"],"410400","0"],["410422",["叶县","葉縣"],"410400","0"],["410423",["鲁山","魯山"],"410400","0"],["410425",["郏县","郟縣"],"410400","0"],["410481",["舞钢","舞鋼"],"410400","0"],["410482",["汝州","汝州"],"410400","0"],["410500",["安阳","安陽"],"410000","0"],["410502",["文峰","文峰"],"410500","0"],["410503",["北关","北關"],"410500","0"],["410505",["殷都","殷都"],"410500","0"],["410506",["龙安","龍安"],"410500","0"],["410522",["安阳","安陽"],"410500","0"],["410523",["汤阴","湯陰"],"410500","0"],["410526",["滑县","滑縣"],"410500","0"],["410527",["内黄","內黃"],"410500","0"],["410581",["林州","林州"],"410500","0"],["410600",["鹤壁","鶴壁"],"410000","0"],["410602",["鹤山","鶴山"],"410600","0"],["410603",["山城","山城"],"410600","0"],["410611",["淇滨","淇濱"],"410600","0"],["410621",["浚县","浚縣"],"410600","0"],["410622",["淇县","淇縣"],"410600","0"],["410700",["新乡","新鄉"],"410000","0"],["410702",["红旗","紅旗"],"410700","0"],["410703",["卫滨","衛濱"],"410700","0"],["410704",["凤泉","鳳泉"],"410700","0"],["410711",["牧野","牧野"],"410700","0"],["410721",["新乡","新鄉"],"410700","0"],["410724",["获嘉","獲嘉"],"410700","0"],["410725",["原阳","原陽"],"410700","0"],["410726",["延津","延津"],"410700","0"],["410727",["封丘","封丘"],"410700","0"],["410728",["长垣","長垣"],"410700","0"],["410781",["卫辉","衛輝"],"410700","0"],["410782",["辉县","輝縣"],"410700","0"],["410800",["焦作","焦作"],"410000","0"],["410802",["解放","解放"],"410800","0"],["410803",["中站","中站"],"410800","0"],["410804",["马村","馬村"],"410800","0"],["410811",["山阳","山陽"],"410800","0"],["410821",["修武","修武"],"410800","0"],["410822",["博爱","博愛"],"410800","0"],["410823",["武陟","武陟"],"410800","0"],["410825",["温县","溫縣"],"410800","0"],["410881",["济源","濟源"],"410000","0"],["410882",["沁阳","沁陽"],"410800","0"],["410883",["孟州","孟州"],"410800","0"],["410900",["濮阳","濮陽"],"410000","0"],["410902",["华龙","華龍"],"410900","0"],["410922",["清丰","清豐"],"410900","0"],["410923",["南乐","南樂"],"410900","0"],["410926",["范县","範縣"],"410900","0"],["410927",["台前","臺前"],"410900","0"],["410928",["濮阳","濮陽"],"410900","0"],["411000",["许昌","許昌"],"410000","0"],["411002",["魏都","魏都"],"411000","0"],["411023",["许昌","許昌"],"411000","0"],["411024",["鄢陵","鄢陵"],"411000","0"],["411025",["襄城","襄城"],"411000","0"],["411081",["禹州","禹州"],"411000","0"],["411082",["长葛","長葛"],"411000","0"],["411100",["漯河","漯河"],"410000","0"],["411102",["源汇","源匯"],"411100","0"],["411103",["郾城","郾城"],"411100","0"],["411104",["召陵","召陵"],"411100","0"],["411121",["舞阳","舞陽"],"411100","0"],["411122",["临颍","臨潁"],"411100","0"],["411200",["三门峡","三門峽"],"410000","0"],["411202",["湖滨","湖濱"],"411200","0"],["411221",["渑池","澠池"],"411200","0"],["411222",["陕州","陝州"],"411200","0"],["411224",["卢氏","盧氏"],"411200","0"],["411281",["义马","義馬"],"411200","0"],["411282",["灵宝","靈寶"],"411200","0"],["411300",["南阳","南陽"],"410000","0"],["411302",["宛城","宛城"],"411300","0"],["411303",["卧龙","臥龍"],"411300","0"],["411321",["南召","南召"],"411300","0"],["411322",["方城","方城"],"411300","0"],["411323",["西峡","西峽"],"411300","0"],["411324",["镇平","鎮平"],"411300","0"],["411325",["内乡","內鄉"],"411300","0"],["411326",["淅川","淅川"],"411300","0"],["411327",["社旗县","社旗縣"],"411300","0"],["411328",["唐河","唐河"],"411300","0"],["411329",["新野","新野"],"411300","0"],["411330",["桐柏","桐柏"],"411300","0"],["411381",["邓州","鄧州"],"411300","0"],["411400",["商丘","商丘"],"410000","0"],["411402",["梁园","梁園"],"411400","0"],["411403",["睢阳","睢陽"],"411400","0"],["411421",["民权","民權"],"411400","0"],["411422",["睢县","睢縣"],"411400","0"],["411423",["宁陵","寧陵"],"411400","0"],["411424",["柘城","柘城"],"411400","0"],["411425",["虞城","虞城"],"411400","0"],["411426",["夏邑","夏邑"],"411400","0"],["411481",["永城","永城"],"411400","0"],["411500",["信阳","信陽"],"410000","0"],["411502",["浉河","溮河"],"411500","0"],["411503",["平桥","平橋"],"411500","0"],["411521",["罗山","羅山"],"411500","0"],["411522",["光山","光山"],"411500","0"],["411523",["新县","新縣"],"411500","0"],["411524",["商城","商城"],"411500","0"],["411525",["固始","固始"],"411500","0"],["411526",["潢川","潢川"],"411500","0"],["411527",["淮滨","淮濱"],"411500","0"],["411528",["息县","息縣"],"411500","0"],["411600",["周口","周口"],"410000","0"],["411602",["川汇","川匯"],"411600","0"],["411621",["扶沟","扶溝"],"411600","0"],["411622",["西华","西華"],"411600","0"],["411623",["商水","商水"],"411600","0"],["411624",["沈丘","沈丘"],"411600","0"],["411625",["郸城","鄲城"],"411600","0"],["411626",["淮阳","淮陽"],"411600","0"],["411627",["太康","太康"],"411600","0"],["411628",["鹿邑","鹿邑"],"411600","0"],["411681",["项城","項城"],"411600","0"],["411700",["驻马店","駐馬店"],"410000","0"],["411702",["驿城","驛城"],"411700","0"],["411721",["西平","西平"],"411700","0"],["411722",["上蔡","上蔡"],"411700","0"],["411723",["平舆","平輿"],"411700","0"],["411724",["正阳","正陽"],"411700","0"],["411725",["确山","確山"],"411700","0"],["411726",["泌阳","泌陽"],"411700","0"],["411727",["汝南","汝南"],"411700","0"],["411728",["遂平","遂平"],"411700","0"],["411729",["新蔡","新蔡"],"411700","0"],["420100",["武汉","武漢"],"420000","0"],["420102",["江岸","江岸"],"420100","0"],["420103",["江汉","江漢"],"420100","0"],["420104",["硚口","礄口"],"420100","0"],["420105",["汉阳","漢陽"],"420100","0"],["420106",["武昌","武昌"],"420100","0"],["420107",["青山","青山"],"420100","0"],["420111",["洪山","洪山"],"420100","0"],["420112",["东西湖","東西湖"],"420100","0"],["420113",["汉南","漢南"],"420100","0"],["420114",["蔡甸","蔡甸"],"420100","0"],["420115",["江夏","江夏"],"420100","0"],["420116",["黄陂","黃陂"],"420100","0"],["420117",["新洲","新洲"],"420100","0"],["420200",["黄石","黃石"],"420000","0"],["420202",["黄石港","黃石港"],"420200","0"],["420203",["西塞山","西塞山"],"420200","0"],["420204",["下陆","下陸"],"420200","0"],["420205",["铁山","鐵山"],"420200","0"],["420222",["阳新","陽新"],"420200","0"],["420281",["大冶","大冶"],"420200","0"],["420300",["十堰","十堰"],"420000","0"],["420302",["茅箭","茅箭"],"420300","0"],["420303",["张湾","張灣"],"420300","0"],["420321",["郧阳","鄖陽"],"420300","0"],["420322",["郧西","鄖西"],"420300","0"],["420323",["竹山","竹山"],"420300","0"],["420324",["竹溪","竹溪"],"420300","0"],["420325",["房县","房縣"],"420300","0"],["420381",["丹江口","丹江口"],"420300","0"],["420500",["宜昌","宜昌"],"420000","0"],["420502",["西陵","西陵"],"420500","0"],["420503",["伍家岗","伍家崗"],"420500","0"],["420504",["点军","點軍"],"420500","0"],["420505",["猇亭","猇亭"],"420500","0"],["420506",["夷陵","夷陵"],"420500","0"],["420525",["远安","遠安"],"420500","0"],["420526",["兴山","興山"],"420500","0"],["420527",["秭归","秭歸"],"420500","0"],["420528",["长阳","長陽"],"420500","0"],["420529",["五峰","五峰"],"420500","0"],["420581",["宜都","宜都"],"420500","0"],["420582",["当阳","當陽"],"420500","0"],["420583",["枝江","枝江"],"420500","0"],["420600",["襄阳","襄陽"],"420000","0"],["420602",["襄城","襄城"],"420600","0"],["420606",["樊城","樊城"],"420600","0"],["420607",["襄州","襄州"],"420600","0"],["420624",["南漳","南漳"],"420600","0"],["420625",["谷城","穀城"],"420600","0"],["420626",["保康","保康"],"420600","0"],["420682",["老河口","老河口"],"420600","0"],["420683",["枣阳","棗陽"],"420600","0"],["420684",["宜城","宜城"],"420600","0"],["420700",["鄂州","鄂州"],"420000","0"],["420702",["梁子湖","梁子湖"],"420700","0"],["420703",["华容","華容"],"420700","0"],["420704",["鄂城","鄂城"],"420700","0"],["420800",["荆门","荊門"],"420000","0"],["420802",["东宝","東寶"],"420800","0"],["420804",["掇刀","掇刀"],"420800","0"],["420821",["京山","京山"],"420800","0"],["420822",["沙洋","沙洋"],"420800","0"],["420881",["钟祥","鐘祥"],"420800","0"],["420900",["孝感","孝感"],"420000","0"],["420902",["孝南","孝南"],"420900","0"],["420921",["孝昌","孝昌"],"420900","0"],["420922",["大悟","大悟"],"420900","0"],["420923",["云梦","雲夢"],"420900","0"],["420981",["应城","應城"],"420900","0"],["420982",["安陆","安陸"],"420900","0"],["420984",["汉川","漢川"],"420900","0"],["421000",["荆州","荊州"],"420000","0"],["421002",["沙市","沙市"],"421000","0"],["421003",["荆州","荊州"],"421000","0"],["421022",["公安","公安"],"421000","0"],["421023",["监利","監利"],"421000","0"],["421024",["江陵","江陵"],"421000","0"],["421081",["石首","石首"],"421000","0"],["421083",["洪湖","洪湖"],"421000","0"],["421087",["松滋","松滋"],"421000","0"],["421100",["黄冈","黃岡"],"420000","0"],["421102",["黄州","黃州"],"421100","0"],["421121",["团风","團風"],"421100","0"],["421122",["红安","紅安"],"421100","0"],["421123",["罗田","羅田"],"421100","0"],["421124",["英山","英山"],"421100","0"],["421125",["浠水","浠水"],"421100","0"],["421126",["蕲春","蘄春"],"421100","0"],["421127",["黄梅","黃梅"],"421100","0"],["421181",["麻城","麻城"],"421100","0"],["421182",["武穴","武穴"],"421100","0"],["421200",["咸宁","鹹寧"],"420000","0"],["421202",["咸安","鹹安"],"421200","0"],["421221",["嘉鱼","嘉魚"],"421200","0"],["421222",["通城","通城"],"421200","0"],["421223",["崇阳","崇陽"],"421200","0"],["421224",["通山","通山"],"421200","0"],["421281",["赤壁","赤壁"],"421200","0"],["421300",["随州","隨州"],"420000","0"],["421302",["曾都","曾都"],"421300","0"],["421321",["随县","隨縣"],"421300","0"],["421381",["广水","廣水"],"421300","0"],["422800",["恩施","恩施"],"420000","0"],["422801",["恩施","恩施"],"422800","0"],["422802",["利川","利川"],"422800","0"],["422822",["建始","建始"],"422800","0"],["422823",["巴东","巴東"],"422800","0"],["422825",["宣恩","宣恩"],"422800","0"],["422826",["咸丰","鹹豐"],"422800","0"],["422827",["来凤","來鳳"],"422800","0"],["422828",["鹤峰","鶴峰"],"422800","0"],["429004",["仙桃","仙桃"],"420000","0"],["429005",["潜江","潛江"],"420000","0"],["429006",["天门","天門"],"420000","0"],["429021",["神农架","神農架"],"420000","0"],["430100",["长沙","長沙"],"430000","0"],["430102",["芙蓉","芙蓉"],"430100","0"],["430103",["天心","天心"],"430100","0"],["430104",["岳麓","嶽麓"],"430100","0"],["430105",["开福","開福"],"430100","0"],["430111",["雨花","雨花"],"430100","0"],["430121",["长沙","長沙"],"430100","0"],["430122",["望城","望城"],"430100","0"],["430124",["宁乡","寧鄉"],"430100","0"],["430181",["浏阳","瀏陽"],"430100","0"],["430200",["株洲","株洲"],"430000","0"],["430202",["荷塘","荷塘"],"430200","0"],["430203",["芦淞","蘆淞"],"430200","0"],["430204",["石峰","石峰"],"430200","0"],["430211",["天元","天元"],"430200","0"],["430221",["株洲","株洲"],"430200","0"],["430223",["攸县","攸縣"],"430200","0"],["430224",["茶陵","茶陵"],"430200","0"],["430225",["炎陵","炎陵"],"430200","0"],["430281",["醴陵","醴陵"],"430200","0"],["430300",["湘潭","湘潭"],"430000","0"],["430302",["雨湖","雨湖"],"430300","0"],["430304",["岳塘","嶽塘"],"430300","0"],["430321",["湘潭","湘潭"],"430300","0"],["430381",["湘乡","湘鄉"],"430300","0"],["430382",["韶山","韶山"],"430300","0"],["430400",["衡阳","衡陽"],"430000","0"],["430405",["珠晖","珠暉"],"430400","0"],["430406",["雁峰","雁峰"],"430400","0"],["430407",["石鼓","石鼓"],"430400","0"],["430408",["蒸湘","蒸湘"],"430400","0"],["430412",["南岳","南嶽"],"430400","0"],["430421",["衡阳","衡陽"],"430400","0"],["430422",["衡南","衡南"],"430400","0"],["430423",["衡山","衡山"],"430400","0"],["430424",["衡东","衡東"],"430400","0"],["430426",["祁东","祁東"],"430400","0"],["430481",["耒阳","耒陽"],"430400","0"],["430482",["常宁","常寧"],"430400","0"],["430500",["邵阳","邵陽"],"430000","0"],["430502",["双清","雙清"],"430500","0"],["430503",["大祥","大祥"],"430500","0"],["430511",["北塔","北塔"],"430500","0"],["430521",["邵东","邵東"],"430500","0"],["430522",["新邵","新邵"],"430500","0"],["430523",["邵阳","邵陽"],"430500","0"],["430524",["隆回","隆回"],"430500","0"],["430525",["洞口","洞口"],"430500","0"],["430527",["绥宁","綏寧"],"430500","0"],["430528",["新宁","新寧"],"430500","0"],["430529",["城步","城步"],"430500","0"],["430581",["武冈","武岡"],"430500","0"],["430600",["岳阳","嶽陽"],"430000","0"],["430602",["岳阳楼","嶽陽樓"],"430600","0"],["430603",["云溪","雲溪"],"430600","0"],["430611",["君山","君山"],"430600","0"],["430621",["岳阳","嶽陽"],"430600","0"],["430623",["华容","華容"],"430600","0"],["430624",["湘阴","湘陰"],"430600","0"],["430626",["平江","平江"],"430600","0"],["430681",["汨罗","汨羅"],"430600","0"],["430682",["临湘","臨湘"],"430600","0"],["430700",["常德","常德"],"430000","0"],["430702",["武陵","武陵"],"430700","0"],["430703",["鼎城","鼎城"],"430700","0"],["430721",["安乡","安鄉"],"430700","0"],["430722",["汉寿","漢壽"],"430700","0"],["430723",["澧县","澧縣"],"430700","0"],["430724",["临澧","臨澧"],"430700","0"],["430725",["桃源","桃源"],"430700","0"],["430726",["石门","石門"],"430700","0"],["430781",["津市","津市"],"430700","0"],["430800",["张家界","張家界"],"430000","0"],["430802",["永定","永定"],"430800","0"],["430811",["武陵源","武陵源"],"430800","0"],["430821",["慈利","慈利"],"430800","0"],["430822",["桑植","桑植"],"430800","0"],["430900",["益阳","益陽"],"430000","0"],["430902",["资阳","資陽"],"430900","0"],["430903",["赫山","赫山"],"430900","0"],["430921",["南县","南縣"],"430900","0"],["430922",["桃江","桃江"],"430900","0"],["430923",["安化","安化"],"430900","0"],["430981",["沅江","沅江"],"430900","0"],["431000",["郴州","郴州"],"430000","0"],["431002",["北湖","北湖"],"431000","0"],["431003",["苏仙","蘇仙"],"431000","0"],["431021",["桂阳","桂陽"],"431000","0"],["431022",["宜章","宜章"],"431000","0"],["431023",["永兴","永興"],"431000","0"],["431024",["嘉禾","嘉禾"],"431000","0"],["431025",["临武","臨武"],"431000","0"],["431026",["汝城","汝城"],"431000","0"],["431027",["桂东","桂東"],"431000","0"],["431028",["安仁","安仁"],"431000","0"],["431081",["资兴","資興"],"431000","0"],["431100",["永州","永州"],"430000","0"],["431102",["零陵","零陵"],"431100","0"],["431103",["冷水滩","冷水灘"],"431100","0"],["431121",["祁阳","祁陽"],"431100","0"],["431122",["东安","東安"],"431100","0"],["431123",["双牌","雙牌"],"431100","0"],["431124",["道县","道縣"],"431100","0"],["431125",["江永","江永"],"431100","0"],["431126",["宁远","寧遠"],"431100","0"],["431127",["蓝山","藍山"],"431100","0"],["431128",["新田","新田"],"431100","0"],["431129",["江华","江華"],"431100","0"],["431200",["怀化","懷化"],"430000","0"],["431202",["鹤城","鶴城"],"431200","0"],["431221",["中方","中方"],"431200","0"],["431222",["沅陵","沅陵"],"431200","0"],["431223",["辰溪","辰溪"],"431200","0"],["431224",["溆浦","漵浦"],"431200","0"],["431225",["会同","會同"],"431200","0"],["431226",["麻阳","麻陽"],"431200","0"],["431227",["新晃","新晃"],"431200","0"],["431228",["芷江","芷江"],"431200","0"],["431229",["靖州","靖州"],"431200","0"],["431230",["通道","通道"],"431200","0"],["431281",["洪江","洪江"],"431200","0"],["431300",["娄底","婁底"],"430000","0"],["431302",["娄星","婁星"],"431300","0"],["431321",["双峰","雙峰"],"431300","0"],["431322",["新化","新化"],"431300","0"],["431381",["冷水江","冷水江"],"431300","0"],["431382",["涟源","漣源"],"431300","0"],["433100",["湘西","湘西"],"430000","0"],["433101",["吉首","吉首"],"433100","0"],["433122",["泸溪","瀘溪"],"433100","0"],["433123",["凤凰","鳳凰"],"433100","0"],["433124",["花垣","花垣"],"433100","0"],["433125",["保靖","保靖"],"433100","0"],["433126",["古丈","古丈"],"433100","0"],["433127",["永顺","永順"],"433100","0"],["433130",["龙山","龍山"],"433100","0"],["440100",["广州","廣州"],"440000","0"],["440103",["荔湾","荔灣"],"440100","0"],["440104",["越秀","越秀"],"440100","0"],["440105",["海珠","海珠"],"440100","0"],["440106",["天河","天河"],"440100","0"],["440111",["白云","白雲"],"440100","0"],["440112",["黄埔","黃埔"],"440100","0"],["440113",["番禺","番禺"],"440100","0"],["440114",["花都","花都"],"440100","0"],["440115",["南沙","南沙"],"440100","0"],["440116",["萝岗","蘿崗"],"440100","0"],["440183",["增城","增城"],"440100","0"],["440184",["从化","從化"],"440100","0"],["440200",["韶关","韶關"],"440000","0"],["440203",["武江","武江"],"440200","0"],["440204",["浈江","湞江"],"440200","0"],["440205",["曲江","曲江"],"440200","0"],["440222",["始兴","始興"],"440200","0"],["440224",["仁化","仁化"],"440200","0"],["440229",["翁源","翁源"],"440200","0"],["440232",["乳源","乳源"],"440200","0"],["440233",["新丰","新豐"],"440200","0"],["440281",["乐昌","樂昌"],"440200","0"],["440282",["南雄","南雄"],"440200","0"],["440300",["深圳","深圳"],"440000","0"],["440303",["罗湖","羅湖"],"440300","0"],["440304",["福田","福田"],"440300","0"],["440305",["南山","南山"],"440300","0"],["440306",["宝安","寶安"],"440300","0"],["440307",["龙岗","龍崗"],"440300","0"],["440308",["盐田","鹽田"],"440300","0"],["440400",["珠海","珠海"],"440000","0"],["440402",["香洲","香洲"],"440400","0"],["440403",["斗门","鬥門"],"440400","0"],["440404",["金湾","金灣"],"440400","0"],["440500",["汕头","汕頭"],"440000","0"],["440507",["龙湖","龍湖"],"440500","0"],["440511",["金平","金平"],"440500","0"],["440512",["濠江","濠江"],"440500","0"],["440513",["潮阳","潮陽"],"440500","0"],["440514",["潮南","潮南"],"440500","0"],["440515",["澄海","澄海"],"440500","0"],["440523",["南澳","南澳"],"440500","0"],["440600",["佛山","佛山"],"440000","0"],["440604",["禅城","禪城"],"440600","0"],["440605",["南海","南海"],"440600","0"],["440606",["顺德","順德"],"440600","0"],["440607",["三水","三水"],"440600","0"],["440608",["高明","高明"],"440600","0"],["440700",["江门","江門"],"440000","0"],["440703",["蓬江","蓬江"],"440700","0"],["440704",["江海","江海"],"440700","0"],["440705",["新会","新會"],"440700","0"],["440781",["台山","臺山"],"440700","0"],["440783",["开平","開平"],"440700","0"],["440784",["鹤山","鶴山"],"440700","0"],["440785",["恩平","恩平"],"440700","0"],["440800",["湛江","湛江"],"440000","0"],["440802",["赤坎","赤坎"],"440800","0"],["440803",["霞山","霞山"],"440800","0"],["440804",["坡头","坡頭"],"440800","0"],["440811",["麻章","麻章"],"440800","0"],["440823",["遂溪","遂溪"],"440800","0"],["440825",["徐闻","徐聞"],"440800","0"],["440881",["廉江","廉江"],"440800","0"],["440882",["雷州","雷州"],"440800","0"],["440883",["吴川","吳川"],"440800","0"],["440900",["茂名","茂名"],"440000","0"],["440902",["茂南","茂南"],"440900","0"],["440903",["电白","電白"],"440900","0"],["440981",["高州","高州"],"440900","0"],["440982",["化州","化州"],"440900","0"],["440983",["信宜","信宜"],"440900","0"],["441200",["肇庆","肇慶"],"440000","0"],["441202",["端州","端州"],"441200","0"],["441203",["鼎湖","鼎湖"],"441200","0"],["441223",["广宁","廣寧"],"441200","0"],["441224",["怀集","懷集"],"441200","0"],["441225",["封开","封開"],"441200","0"],["441226",["德庆","德慶"],"441200","0"],["441283",["高要","高要"],"441200","0"],["441284",["四会","四會"],"441200","0"],["441300",["惠州","惠州"],"440000","0"],["441302",["惠城","惠城"],"441300","0"],["441303",["惠阳","惠陽"],"441300","0"],["441322",["博罗","博羅"],"441300","0"],["441323",["惠东","惠東"],"441300","0"],["441324",["龙门","龍門"],"441300","0"],["441400",["梅州","梅州"],"440000","0"],["441402",["梅江","梅江"],"441400","0"],["441421",["梅县","梅縣"],"441400","0"],["441422",["大埔","大埔"],"441400","0"],["441423",["丰顺","豐順"],"441400","0"],["441424",["五华","五華"],"441400","0"],["441426",["平远","平遠"],"441400","0"],["441427",["蕉岭","蕉嶺"],"441400","0"],["441481",["兴宁","興寧"],"441400","0"],["441500",["汕尾","汕尾"],"440000","0"],["441502",["城区","城區"],"441500","0"],["441521",["海丰","海豐"],"441500","0"],["441523",["陆河","陸河"],"441500","0"],["441581",["陆丰","陸豐"],"441500","0"],["441600",["河源","河源"],"440000","0"],["441602",["源城","源城"],"441600","0"],["441621",["紫金","紫金"],"441600","0"],["441622",["龙川","龍川"],"441600","0"],["441623",["连平","連平"],"441600","0"],["441624",["和平","和平"],"441600","0"],["441625",["东源","東源"],"441600","0"],["441700",["阳江","陽江"],"440000","0"],["441702",["江城","江城"],"441700","0"],["441721",["阳西","陽西"],"441700","0"],["441723",["阳东","陽東"],"441700","0"],["441781",["阳春","陽春"],"441700","0"],["441800",["清远","清遠"],"440000","0"],["441802",["清城","清城"],"441800","0"],["441821",["佛冈","佛岡"],"441800","0"],["441823",["阳山","陽山"],"441800","0"],["441825",["连山","連山"],"441800","0"],["441826",["连南","連南"],"441800","0"],["441827",["清新","清新"],"441800","0"],["441881",["英德","英德"],"441800","0"],["441882",["连州","連州"],"441800","0"],["441900",["东莞","東莞"],"440000","0"],["442000",["中山","中山"],"440000","0"],["445100",["潮州","潮州"],"440000","0"],["445102",["湘桥","湘橋"],"445100","0"],["445121",["潮安","潮安"],"445100","0"],["445122",["饶平","饒平"],"445100","0"],["445200",["揭阳","揭陽"],"440000","0"],["445202",["榕城","榕城"],"445200","0"],["445221",["揭东","揭東"],"445200","0"],["445222",["揭西","揭西"],"445200","0"],["445224",["惠来","惠來"],"445200","0"],["445281",["普宁","普寧"],"445200","0"],["445300",["云浮","雲浮"],"440000","0"],["445302",["云城","雲城"],"445300","0"],["445321",["新兴","新興"],"445300","0"],["445322",["郁南","鬱南"],"445300","0"],["445323",["云安","雲安"],"445300","0"],["445381",["罗定","羅定"],"445300","0"],["450100",["南宁","南寧"],"450000","0"],["450102",["兴宁","興寧"],"450100","0"],["450103",["青秀","青秀"],"450100","0"],["450105",["江南","江南"],"450100","0"],["450107",["西乡塘","西鄉塘"],"450100","0"],["450108",["良庆","良慶"],"450100","0"],["450109",["邕宁","邕寧"],"450100","0"],["450122",["武鸣","武鳴"],"450100","0"],["450123",["隆安","隆安"],"450100","0"],["450124",["马山","馬山"],"450100","0"],["450125",["上林","上林"],"450100","0"],["450126",["宾阳","賓陽"],"450100","0"],["450127",["横县","橫縣"],"450100","0"],["450200",["柳州","柳州"],"450000","0"],["450202",["城中","城中"],"450200","0"],["450203",["鱼峰","魚峰"],"450200","0"],["450204",["柳南","柳南"],"450200","0"],["450205",["柳北","柳北"],"450200","0"],["450221",["柳江","柳江"],"450200","0"],["450222",["柳城","柳城"],"450200","0"],["450223",["鹿寨","鹿寨"],"450200","0"],["450224",["融安","融安"],"450200","0"],["450225",["融水","融水"],"450200","0"],["450226",["三江","三江"],"450200","0"],["450300",["桂林","桂林"],"450000","0"],["450302",["秀峰","秀峰"],"450300","0"],["450303",["叠彩","疊彩"],"450300","0"],["450304",["象山","象山"],"450300","0"],["450305",["七星","七星"],"450300","0"],["450311",["雁山","雁山"],"450300","0"],["450321",["阳朔","陽朔"],"450300","0"],["450322",["临桂","臨桂"],"450300","0"],["450323",["灵川","靈川"],"450300","0"],["450324",["全州","全州"],"450300","0"],["450325",["兴安","興安"],"450300","0"],["450326",["永福","永福"],"450300","0"],["450327",["灌阳","灌陽"],"450300","0"],["450328",["龙胜","龍勝"],"450300","0"],["450329",["资源","資源"],"450300","0"],["450330",["平乐","平樂"],"450300","0"],["450331",["荔浦","荔浦"],"450300","0"],["450332",["恭城","恭城"],"450300","0"],["450400",["梧州","梧州"],"450000","0"],["450403",["万秀","萬秀"],"450400","0"],["450405",["长洲","長洲"],"450400","0"],["450406",["龙圩","龍圩"],"450400","0"],["450421",["苍梧","蒼梧"],"450400","0"],["450422",["藤县","藤縣"],"450400","0"],["450423",["蒙山","蒙山"],"450400","0"],["450481",["岑溪","岑溪"],"450400","0"],["450500",["北海","北海"],"450000","0"],["450502",["海城","海城"],"450500","0"],["450503",["银海","銀海"],"450500","0"],["450512",["铁山港","鐵山港"],"450500","0"],["450521",["合浦","合浦"],"450500","0"],["450600",["防城港","防城港"],"450000","0"],["450602",["港口","港口"],"450600","0"],["450603",["防城","防城"],"450600","0"],["450621",["上思","上思"],"450600","0"],["450681",["东兴","東興"],"450600","0"],["450700",["钦州","欽州"],"450000","0"],["450702",["钦南","欽南"],"450700","0"],["450703",["钦北","欽北"],"450700","0"],["450721",["灵山","靈山"],"450700","0"],["450722",["浦北","浦北"],"450700","0"],["450800",["贵港","貴港"],"450000","0"],["450802",["港北","港北"],"450800","0"],["450803",["港南","港南"],"450800","0"],["450804",["覃塘","覃塘"],"450800","0"],["450821",["平南","平南"],"450800","0"],["450881",["桂平","桂平"],"450800","0"],["450900",["玉林","玉林"],"450000","0"],["450902",["玉州","玉州"],"450900","0"],["450903",["福绵","福綿"],"450900","0"],["450921",["容县","容縣"],"450900","0"],["450922",["陆川","陸川"],"450900","0"],["450923",["博白","博白"],"450900","0"],["450924",["兴业","興業"],"450900","0"],["450981",["北流","北流"],"450900","0"],["451000",["百色","百色"],"450000","0"],["451002",["右江","右江"],"451000","0"],["451021",["田阳","田陽"],"451000","0"],["451022",["田东","田東"],"451000","0"],["451023",["平果","平果"],"451000","0"],["451024",["德保","德保"],"451000","0"],["451025",["靖西","靖西"],"451000","0"],["451026",["那坡","那坡"],"451000","0"],["451027",["凌云","淩雲"],"451000","0"],["451028",["乐业","樂業"],"451000","0"],["451029",["田林","田林"],"451000","0"],["451030",["西林","西林"],"451000","0"],["451031",["隆林","隆林"],"451000","0"],["451100",["贺州","賀州"],"450000","0"],["451102",["八步","八步"],"451100","0"],["451119",["平桂","平桂"],"451100","0"],["451121",["昭平","昭平"],"451100","0"],["451122",["钟山","鐘山"],"451100","0"],["451123",["富川","富川"],"451100","0"],["451200",["河池","河池"],"450000","0"],["451202",["金城江","金城江"],"451200","0"],["451221",["南丹","南丹"],"451200","0"],["451222",["天峨","天峨"],"451200","0"],["451223",["凤山","鳳山"],"451200","0"],["451224",["东兰","東蘭"],"451200","0"],["451225",["罗城","羅城"],"451200","0"],["451226",["环江","環江"],"451200","0"],["451227",["巴马","巴馬"],"451200","0"],["451228",["都安","都安"],"451200","0"],["451229",["大化","大化"],"451200","0"],["451281",["宜州","宜州"],"451200","0"],["451300",["来宾","來賓"],"450000","0"],["451302",["兴宾","興賓"],"451300","0"],["451321",["忻城","忻城"],"451300","0"],["451322",["象州","象州"],"451300","0"],["451323",["武宣","武宣"],"451300","0"],["451324",["金秀","金秀"],"451300","0"],["451381",["合山","合山"],"451300","0"],["451400",["崇左","崇左"],"450000","0"],["451402",["江州","江州"],"451400","0"],["451421",["扶绥","扶綏"],"451400","0"],["451422",["宁明","寧明"],"451400","0"],["451423",["龙州","龍州"],"451400","0"],["451424",["大新","大新"],"451400","0"],["451425",["天等","天等"],"451400","0"],["451481",["凭祥","憑祥"],"451400","0"],["460100",["海口","海口"],"460000","0"],["460105",["秀英","秀英"],"460100","0"],["460106",["龙华","龍華"],"460100","0"],["460107",["琼山","瓊山"],"460100","0"],["460108",["美兰","美蘭"],"460100","0"],["460200",["三亚","三亞"],"460000","0"],["460300",["三沙","三沙"],"460000","0"],["460321",["西沙","西沙"],"460300","0"],["460322",["南沙","南沙"],"460300","0"],["460323",["中沙","中沙"],"460300","0"],["469001",["五指山","五指山"],"460000","0"],["469002",["琼海","瓊海"],"460000","0"],["469003",["儋州","儋州"],"460000","0"],["469005",["文昌","文昌"],"460000","0"],["469006",["万宁","萬寧"],"460000","0"],["469007",["东方","東方"],"460000","0"],["469025",["定安","定安"],"460000","0"],["469026",["屯昌","屯昌"],"460000","0"],["469027",["澄迈","澄邁"],"460000","0"],["469028",["临高","臨高"],"460000","0"],["469030",["白沙","白沙"],"460000","0"],["469031",["昌江","昌江"],"460000","0"],["469033",["乐东","樂東"],"460000","0"],["469034",["陵水","陵水"],"460000","0"],["469035",["保亭","保亭"],"460000","0"],["469036",["琼中","瓊中"],"460000","0"],["500100",["重庆","重慶"],"500000","0"],["500101",["万州","萬州"],"500100","0"],["500102",["涪陵","涪陵"],"500100","0"],["500103",["渝中","渝中"],"500100","0"],["500104",["大渡口","大渡口"],"500100","0"],["500105",["江北","江北"],"500100","0"],["500106",["沙坪坝","沙坪壩"],"500100","0"],["500107",["九龙坡","九龍坡"],"500100","0"],["500108",["南岸","南岸"],"500100","0"],["500109",["北碚","北碚"],"500100","0"],["500110",["万盛","萬盛"],"500100","0"],["500111",["双桥","雙橋"],"500100","0"],["500112",["渝北","渝北"],"500100","0"],["500113",["巴南","巴南"],"500100","0"],["500114",["黔江","黔江"],"500100","0"],["500115",["长寿","長壽"],"500100","0"],["500222",["綦江","綦江"],"500100","0"],["500223",["潼南","潼南"],"500100","0"],["500224",["铜梁","銅梁"],"500100","0"],["500225",["大足","大足"],"500100","0"],["500226",["荣昌","榮昌"],"500100","0"],["500227",["璧山","璧山"],"500100","0"],["500228",["梁平","梁平"],"500100","0"],["500229",["城口","城口"],"500100","0"],["500230",["丰都","豐都"],"500100","0"],["500231",["垫江","墊江"],"500100","0"],["500232",["武隆","武隆"],"500100","0"],["500233",["忠县","忠縣"],"500100","0"],["500234",["开县","開縣"],"500100","0"],["500235",["云阳","雲陽"],"500100","0"],["500236",["奉节","奉節"],"500100","0"],["500237",["巫山","巫山"],"500100","0"],["500238",["巫溪","巫溪"],"500100","0"],["500240",["石柱","石柱"],"500100","0"],["500241",["秀山","秀山"],"500100","0"],["500242",["酉阳","酉陽"],"500100","0"],["500243",["彭水","彭水"],"500100","0"],["500381",["江津","江津"],"500100","0"],["500382",["合川","合川"],"500100","0"],["500383",["永川","永川"],"500100","0"],["500384",["南川","南川"],"500100","0"],["510100",["成都","成都"],"510000","0"],["510104",["锦江","錦江"],"510100","0"],["510105",["青羊","青羊"],"510100","0"],["510106",["金牛","金牛"],"510100","0"],["510107",["武侯","武侯"],"510100","0"],["510108",["成华","成華"],"510100","0"],["510112",["龙泉驿","龍泉驛"],"510100","0"],["510113",["青白江","青白江"],"510100","0"],["510114",["新都","新都"],"510100","0"],["510115",["温江","溫江"],"510100","0"],["510121",["金堂","金堂"],"510100","0"],["510122",["双流","雙流"],"510100","0"],["510124",["郫县","郫縣"],"510100","0"],["510129",["大邑","大邑"],"510100","0"],["510131",["蒲江","蒲江"],"510100","0"],["510132",["新津","新津"],"510100","0"],["510181",["都江堰","都江堰"],"510100","0"],["510182",["彭州","彭州"],"510100","0"],["510183",["邛崃","邛崍"],"510100","0"],["510184",["崇州","崇州"],"510100","0"],["510300",["自贡","自貢"],"510000","0"],["510302",["自流井","自流井"],"510300","0"],["510303",["贡井","貢井"],"510300","0"],["510304",["大安","大安"],"510300","0"],["510311",["沿滩","沿灘"],"510300","0"],["510321",["荣县","榮縣"],"510300","0"],["510322",["富顺","富順"],"510300","0"],["510400",["攀枝花","攀枝花"],"510000","0"],["510402",["东区","東區"],"510400","0"],["510403",["西区","西區"],"510400","0"],["510411",["仁和","仁和"],"510400","0"],["510421",["米易","米易"],"510400","0"],["510422",["盐边","鹽邊"],"510400","0"],["510500",["泸州","瀘州"],"510000","0"],["510502",["江阳","江陽"],"510500","0"],["510503",["纳溪","納溪"],"510500","0"],["510504",["龙马潭","龍馬潭"],"510500","0"],["510521",["泸县","瀘縣"],"510500","0"],["510522",["合江","合江"],"510500","0"],["510524",["叙永","敘永"],"510500","0"],["510525",["古蔺","古藺"],"510500","0"],["510600",["德阳","德陽"],"510000","0"],["510603",["旌阳","旌陽"],"510600","0"],["510623",["中江","中江"],"510600","0"],["510626",["罗江","羅江"],"510600","0"],["510681",["广汉","廣漢"],"510600","0"],["510682",["什邡","什邡"],"510600","0"],["510683",["绵竹","綿竹"],"510600","0"],["510700",["绵阳","綿陽"],"510000","0"],["510703",["涪城","涪城"],"510700","0"],["510704",["游仙","遊仙"],"510700","0"],["510722",["三台","三臺"],"510700","0"],["510723",["盐亭","鹽亭"],"510700","0"],["510724",["安县","安縣"],"510700","0"],["510725",["梓潼","梓潼"],"510700","0"],["510726",["北川","北川"],"510700","0"],["510727",["平武","平武"],"510700","0"],["510781",["江油","江油"],"510700","0"],["510800",["广元","廣元"],"510000","0"],["510802",["利州","利州"],"510800","0"],["510811",["昭化","昭化"],"510800","0"],["510812",["朝天","朝天"],"510800","0"],["510821",["旺苍","旺蒼"],"510800","0"],["510822",["青川","青川"],"510800","0"],["510823",["剑阁","劍閣"],"510800","0"],["510824",["苍溪","蒼溪"],"510800","0"],["510900",["遂宁","遂寧"],"510000","0"],["510903",["船山","船山"],"510900","0"],["510904",["安居","安居"],"510900","0"],["510921",["蓬溪","蓬溪"],"510900","0"],["510922",["射洪","射洪"],"510900","0"],["510923",["大英","大英"],"510900","0"],["511000",["内江","內江"],"510000","0"],["511002",["市中","市中"],"511000","0"],["511011",["东兴","東興"],"511000","0"],["511024",["威远","威遠"],"511000","0"],["511025",["资中","資中"],"511000","0"],["511028",["隆昌","隆昌"],"511000","0"],["511100",["乐山","樂山"],"510000","0"],["511102",["市中","市中"],"511100","0"],["511111",["沙湾","沙灣"],"511100","0"],["511112",["五通桥","五通橋"],"511100","0"],["511113",["金口河","金口河"],"511100","0"],["511123",["犍为","犍為"],"511100","0"],["511124",["井研","井研"],"511100","0"],["511126",["夹江","夾江"],"511100","0"],["511129",["沐川","沐川"],"511100","0"],["511132",["峨边","峨邊"],"511100","0"],["511133",["马边","馬邊"],"511100","0"],["511181",["峨眉山","峨眉山"],"511100","0"],["511300",["南充","南充"],"510000","0"],["511302",["顺庆","順慶"],"511300","0"],["511303",["高坪","高坪"],"511300","0"],["511304",["嘉陵","嘉陵"],"511300","0"],["511321",["南部","南部"],"511300","0"],["511322",["营山","營山"],"511300","0"],["511323",["蓬安","蓬安"],"511300","0"],["511324",["仪陇","儀隴"],"511300","0"],["511325",["西充","西充"],"511300","0"],["511381",["阆中","閬中"],"511300","0"],["511400",["眉山","眉山"],"510000","0"],["511402",["东坡","東坡"],"511400","0"],["511421",["仁寿","仁壽"],"511400","0"],["511422",["彭山","彭山"],"511400","0"],["511423",["洪雅","洪雅"],"511400","0"],["511424",["丹棱","丹棱"],"511400","0"],["511425",["青神","青神"],"511400","0"],["511500",["宜宾","宜賓"],"510000","0"],["511502",["翠屏","翠屏"],"511500","0"],["511521",["宜宾","宜賓"],"511500","0"],["511522",["南溪","南溪"],"511500","0"],["511523",["江安","江安"],"511500","0"],["511524",["长宁","長寧"],"511500","0"],["511525",["高县","高縣"],"511500","0"],["511526",["珙县","珙縣"],"511500","0"],["511527",["筠连","筠連"],"511500","0"],["511528",["兴文","興文"],"511500","0"],["511529",["屏山","屏山"],"511500","0"],["511600",["广安","廣安"],"510000","0"],["511602",["广安","廣安"],"511600","0"],["511603",["前锋","前鋒"],"511600","0"],["511621",["岳池","嶽池"],"511600","0"],["511622",["武胜","武勝"],"511600","0"],["511623",["邻水","鄰水"],"511600","0"],["511681",["华蓥","華鎣"],"511600","0"],["511700",["达州","達州"],"510000","0"],["511702",["通川","通川"],"511700","0"],["511721",["达川","達川"],"511700","0"],["511722",["宣汉","宣漢"],"511700","0"],["511723",["开江","開江"],"511700","0"],["511724",["大竹","大竹"],"511700","0"],["511725",["渠县","渠縣"],"511700","0"],["511781",["万源","萬源"],"511700","0"],["511800",["雅安","雅安"],"510000","0"],["511802",["雨城","雨城"],"511800","0"],["511821",["名山","名山"],"511800","0"],["511822",["荥经","滎經"],"511800","0"],["511823",["汉源","漢源"],"511800","0"],["511824",["石棉","石棉"],"511800","0"],["511825",["天全","天全"],"511800","0"],["511826",["芦山","蘆山"],"511800","0"],["511827",["宝兴","寶興"],"511800","0"],["511900",["巴中","巴中"],"510000","0"],["511902",["巴州","巴州"],"511900","0"],["511903",["恩阳","恩陽"],"511900","0"],["511921",["通江","通江"],"511900","0"],["511922",["南江","南江"],"511900","0"],["511923",["平昌","平昌"],"511900","0"],["512000",["资阳","資陽"],"510000","0"],["512002",["雁江","雁江"],"512000","0"],["512021",["安岳","安嶽"],"512000","0"],["512022",["乐至","樂至"],"512000","0"],["512081",["简阳","簡陽"],"512000","0"],["513200",["阿坝","阿壩"],"510000","0"],["513221",["汶川","汶川"],"513200","0"],["513222",["理县","理縣"],"513200","0"],["513223",["茂县","茂縣"],"513200","0"],["513224",["松潘","松潘"],"513200","0"],["513225",["九寨沟","九寨溝"],"513200","0"],["513226",["金川","金川"],"513200","0"],["513227",["小金","小金"],"513200","0"],["513228",["黑水","黑水"],"513200","0"],["513229",["马尔康","馬爾康"],"513200","0"],["513230",["壤塘","壤塘"],"513200","0"],["513231",["阿坝","阿壩"],"513200","0"],["513232",["若尔盖","若爾蓋"],"513200","0"],["513233",["红原","紅原"],"513200","0"],["513300",["甘孜","甘孜"],"510000","0"],["513321",["康定","康定"],"513300","0"],["513322",["泸定","瀘定"],"513300","0"],["513323",["丹巴","丹巴"],"513300","0"],["513324",["九龙","九龍"],"513300","0"],["513325",["雅江","雅江"],"513300","0"],["513326",["道孚","道孚"],"513300","0"],["513327",["炉霍","爐霍"],"513300","0"],["513328",["甘孜","甘孜"],"513300","0"],["513329",["新龙","新龍"],"513300","0"],["513330",["德格","德格"],"513300","0"],["513331",["白玉","白玉"],"513300","0"],["513332",["石渠","石渠"],"513300","0"],["513333",["色达","色達"],"513300","0"],["513334",["理塘","理塘"],"513300","0"],["513335",["巴塘","巴塘"],"513300","0"],["513336",["乡城","鄉城"],"513300","0"],["513337",["稻城","稻城"],"513300","0"],["513338",["得荣","得榮"],"513300","0"],["513400",["凉山","涼山"],"510000","0"],["513401",["西昌","西昌"],"513400","0"],["513422",["木里","木裏"],"513400","0"],["513423",["盐源","鹽源"],"513400","0"],["513424",["德昌","德昌"],"513400","0"],["513425",["会理","會理"],"513400","0"],["513426",["会东","會東"],"513400","0"],["513427",["宁南","寧南"],"513400","0"],["513428",["普格","普格"],"513400","0"],["513429",["布拖","布拖"],"513400","0"],["513430",["金阳","金陽"],"513400","0"],["513431",["昭觉","昭覺"],"513400","0"],["513432",["喜德","喜德"],"513400","0"],["513433",["冕宁","冕寧"],"513400","0"],["513434",["越西","越西"],"513400","0"],["513435",["甘洛","甘洛"],"513400","0"],["513436",["美姑","美姑"],"513400","0"],["513437",["雷波","雷波"],"513400","0"],["520100",["贵阳","貴陽"],"520000","0"],["520102",["南明","南明"],"520100","0"],["520103",["云岩","雲巖"],"520100","0"],["520111",["花溪","花溪"],"520100","0"],["520112",["乌当","烏當"],"520100","0"],["520113",["白云","白雲"],"520100","0"],["520121",["开阳","開陽"],"520100","0"],["520122",["息烽","息烽"],"520100","0"],["520123",["修文","修文"],"520100","0"],["520151",["观山湖","觀山湖"],"520100","0"],["520181",["清镇","清鎮"],"520100","0"],["520200",["六盘水","六盤水"],"520000","0"],["520201",["钟山","鐘山"],"520200","0"],["520203",["六枝特","六枝特"],"520200","0"],["520221",["水城","水城"],"520200","0"],["520222",["盘县","盤縣"],"520200","0"],["520300",["遵义","遵義"],"520000","0"],["520302",["红花岗","紅花崗"],"520300","0"],["520303",["汇川","匯川"],"520300","0"],["520321",["遵义","遵義"],"520300","0"],["520322",["桐梓","桐梓"],"520300","0"],["520323",["绥阳","綏陽"],"520300","0"],["520324",["正安","正安"],"520300","0"],["520325",["道真","道真"],"520300","0"],["520326",["务川","務川"],"520300","0"],["520327",["凤冈","鳳岡"],"520300","0"],["520328",["湄潭","湄潭"],"520300","0"],["520329",["余庆","余慶"],"520300","0"],["520330",["习水","習水"],"520300","0"],["520381",["赤水","赤水"],"520300","0"],["520382",["仁怀","仁懷"],"520300","0"],["520400",["安顺","安順"],"520000","0"],["520402",["西秀","西秀"],"520400","0"],["520421",["平坝","平壩"],"520400","0"],["520422",["普定","普定"],"520400","0"],["520423",["镇宁","鎮寧"],"520400","0"],["520424",["关岭","關嶺"],"520400","0"],["520425",["紫云","紫雲"],"520400","0"],["522200",["铜仁","銅仁"],"520000","0"],["522201",["碧江","碧江"],"522200","0"],["522222",["江口","江口"],"522200","0"],["522223",["玉屏","玉屏"],"522200","0"],["522224",["石阡","石阡"],"522200","0"],["522225",["思南","思南"],"522200","0"],["522226",["印江","印江"],"522200","0"],["522227",["德江","德江"],"522200","0"],["522228",["沿河","沿河"],"522200","0"],["522229",["松桃","松桃"],"522200","0"],["522230",["万山","萬山"],"522200","0"],["522300",["黔西南","黔西南"],"520000","0"],["522301",["兴义","興義"],"522300","0"],["522322",["兴仁","興仁"],"522300","0"],["522323",["普安","普安"],"522300","0"],["522324",["晴隆","晴隆"],"522300","0"],["522325",["贞丰","貞豐"],"522300","0"],["522326",["望谟","望謨"],"522300","0"],["522327",["册亨","冊亨"],"522300","0"],["522328",["安龙","安龍"],"522300","0"],["522400",["毕节","畢節"],"520000","0"],["522401",["七星关","七星關"],"522400","0"],["522422",["大方","大方"],"522400","0"],["522423",["黔西","黔西"],"522400","0"],["522424",["金沙","金沙"],"522400","0"],["522425",["织金","織金"],"522400","0"],["522426",["纳雍","納雍"],"522400","0"],["522427",["威宁","威寧"],"522400","0"],["522428",["赫章","赫章"],"522400","0"],["522600",["黔东南","黔東南"],"520000","0"],["522601",["凯里","凱裏"],"522600","0"],["522622",["黄平","黃平"],"522600","0"],["522623",["施秉","施秉"],"522600","0"],["522624",["三穗","三穗"],"522600","0"],["522625",["镇远","鎮遠"],"522600","0"],["522626",["岑巩","岑鞏"],"522600","0"],["522627",["天柱","天柱"],"522600","0"],["522628",["锦屏","錦屏"],"522600","0"],["522629",["剑河","劍河"],"522600","0"],["522630",["台江","臺江"],"522600","0"],["522631",["黎平","黎平"],"522600","0"],["522632",["榕江","榕江"],"522600","0"],["522633",["从江","從江"],"522600","0"],["522634",["雷山","雷山"],"522600","0"],["522635",["麻江","麻江"],"522600","0"],["522636",["丹寨","丹寨"],"522600","0"],["522700",["黔南","黔南"],"520000","0"],["522701",["都匀","都勻"],"522700","0"],["522702",["福泉","福泉"],"522700","0"],["522722",["荔波","荔波"],"522700","0"],["522723",["贵定","貴定"],"522700","0"],["522725",["瓮安","甕安"],"522700","0"],["522726",["独山","獨山"],"522700","0"],["522727",["平塘","平塘"],"522700","0"],["522728",["罗甸","羅甸"],"522700","0"],["522729",["长顺","長順"],"522700","0"],["522730",["龙里","龍裏"],"522700","0"],["522731",["惠水","惠水"],"522700","0"],["522732",["三都","三都"],"522700","0"],["530100",["昆明","昆明"],"530000","0"],["530102",["五华","五華"],"530100","0"],["530103",["盘龙","盤龍"],"530100","0"],["530111",["官渡","官渡"],"530100","0"],["530112",["西山","西山"],"530100","0"],["530113",["东川","東川"],"530100","0"],["530121",["呈贡","呈貢"],"530100","0"],["530122",["晋宁","晉寧"],"530100","0"],["530124",["富民","富民"],"530100","0"],["530125",["宜良","宜良"],"530100","0"],["530126",["石林","石林"],"530100","0"],["530127",["嵩明","嵩明"],"530100","0"],["530128",["禄劝","祿勸"],"530100","0"],["530129",["寻甸","尋甸"],"530100","0"],["530181",["安宁","安寧"],"530100","0"],["530300",["曲靖","曲靖"],"530000","0"],["530302",["麒麟","麒麟"],"530300","0"],["530321",["马龙","馬龍"],"530300","0"],["530322",["陆良","陸良"],"530300","0"],["530323",["师宗","師宗"],"530300","0"],["530324",["罗平","羅平"],"530300","0"],["530325",["富源","富源"],"530300","0"],["530326",["会泽","會澤"],"530300","0"],["530328",["沾益","沾益"],"530300","0"],["530381",["宣威","宣威"],"530300","0"],["530400",["玉溪","玉溪"],"530000","0"],["530402",["红塔","紅塔"],"530400","0"],["530421",["江川","江川"],"530400","0"],["530422",["澄江","澄江"],"530400","0"],["530423",["通海","通海"],"530400","0"],["530424",["华宁","華寧"],"530400","0"],["530425",["易门","易門"],"530400","0"],["530426",["峨山","峨山"],"530400","0"],["530427",["新平","新平"],"530400","0"],["530428",["元江","元江"],"530400","0"],["530500",["保山","保山"],"530000","0"],["530502",["隆阳","隆陽"],"530500","0"],["530521",["施甸","施甸"],"530500","0"],["530522",["腾冲","騰沖"],"530500","0"],["530523",["龙陵","龍陵"],"530500","0"],["530524",["昌宁","昌寧"],"530500","0"],["530600",["昭通","昭通"],"530000","0"],["530602",["昭阳","昭陽"],"530600","0"],["530621",["鲁甸","魯甸"],"530600","0"],["530622",["巧家","巧家"],"530600","0"],["530623",["盐津","鹽津"],"530600","0"],["530624",["大关","大關"],"530600","0"],["530625",["永善","永善"],"530600","0"],["530626",["绥江","綏江"],"530600","0"],["530627",["镇雄","鎮雄"],"530600","0"],["530628",["彝良","彝良"],"530600","0"],["530629",["威信","威信"],"530600","0"],["530630",["水富","水富"],"530600","0"],["530700",["丽江","麗江"],"530000","0"],["530702",["古城","古城"],"530700","0"],["530721",["玉龙","玉龍"],"530700","0"],["530722",["永胜","永勝"],"530700","0"],["530723",["华坪","華坪"],"530700","0"],["530724",["宁蒗","寧蒗"],"530700","0"],["530800",["普洱","普洱"],"530000","0"],["530802",["思茅","思茅"],"530800","0"],["530821",["宁洱","寧洱"],"530800","0"],["530822",["墨江","墨江"],"530800","0"],["530823",["景东","景東"],"530800","0"],["530824",["景谷","景穀"],"530800","0"],["530825",["镇沅","鎮沅"],"530800","0"],["530826",["江城","江城"],"530800","0"],["530827",["孟连","孟連"],"530800","0"],["530828",["澜沧","瀾滄"],"530800","0"],["530829",["西盟","西盟"],"530800","0"],["530900",["临沧","臨滄"],"530000","0"],["530902",["临翔","臨翔"],"530900","0"],["530921",["凤庆","鳳慶"],"530900","0"],["530922",["云县","雲縣"],"530900","0"],["530923",["永德","永德"],"530900","0"],["530924",["镇康","鎮康"],"530900","0"],["530925",["双江","雙江"],"530900","0"],["530926",["耿马","耿馬"],"530900","0"],["530927",["沧源","滄源"],"530900","0"],["532300",["楚雄","楚雄"],"530000","0"],["532301",["楚雄","楚雄"],"532300","0"],["532322",["双柏","雙柏"],"532300","0"],["532323",["牟定","牟定"],"532300","0"],["532324",["南华","南華"],"532300","0"],["532325",["姚安","姚安"],"532300","0"],["532326",["大姚","大姚"],"532300","0"],["532327",["永仁","永仁"],"532300","0"],["532328",["元谋","元謀"],"532300","0"],["532329",["武定","武定"],"532300","0"],["532331",["禄丰","祿豐"],"532300","0"],["532500",["红河","紅河"],"530000","0"],["532501",["个旧","個舊"],"532500","0"],["532502",["开远","開遠"],"532500","0"],["532522",["蒙自","蒙自"],"532500","0"],["532523",["屏边","屏邊"],"532500","0"],["532524",["建水","建水"],"532500","0"],["532525",["石屏","石屏"],"532500","0"],["532526",["弥勒","彌勒"],"532500","0"],["532527",["泸西","瀘西"],"532500","0"],["532528",["元阳","元陽"],"532500","0"],["532529",["红河","紅河"],"532500","0"],["532530",["金平","金平"],"532500","0"],["532531",["绿春","綠春"],"532500","0"],["532532",["河口","河口"],"532500","0"],["532600",["文山","文山"],"530000","0"],["532621",["文山","文山"],"532600","0"],["532622",["砚山","硯山"],"532600","0"],["532623",["西畴","西疇"],"532600","0"],["532624",["麻栗坡","麻栗坡"],"532600","0"],["532625",["马关","馬關"],"532600","0"],["532626",["丘北","丘北"],"532600","0"],["532627",["广南","廣南"],"532600","0"],["532628",["富宁","富寧"],"532600","0"],["532800",["西双版纳","西雙版納"],"530000","0"],["532801",["景洪","景洪"],"532800","0"],["532822",["勐海","猛海"],"532800","0"],["532823",["勐腊","猛臘"],"532800","0"],["532900",["大理","大理"],"530000","0"],["532901",["大理","大理"],"532900","0"],["532922",["漾濞","漾濞"],"532900","0"],["532923",["祥云","祥雲"],"532900","0"],["532924",["宾川","賓川"],"532900","0"],["532925",["弥渡","彌渡"],"532900","0"],["532926",["南涧","南澗"],"532900","0"],["532927",["巍山","巍山"],"532900","0"],["532928",["永平","永平"],"532900","0"],["532929",["云龙","雲龍"],"532900","0"],["532930",["洱源","洱源"],"532900","0"],["532931",["剑川","劍川"],"532900","0"],["532932",["鹤庆","鶴慶"],"532900","0"],["533100",["德宏","德宏"],"530000","0"],["533102",["瑞丽","瑞麗"],"533100","0"],["533103",["芒市","芒市"],"533100","0"],["533122",["梁河","梁河"],"533100","0"],["533123",["盈江","盈江"],"533100","0"],["533124",["陇川","隴川"],"533100","0"],["533300",["怒江","怒江"],"530000","0"],["533321",["泸水","瀘水"],"533300","0"],["533323",["福贡","福貢"],"533300","0"],["533324",["贡山","貢山"],"533300","0"],["533325",["兰坪","蘭坪"],"533300","0"],["533400",["迪庆","迪慶"],"530000","0"],["533421",["香格里拉","香格裏拉"],"533400","0"],["533422",["德钦","德欽"],"533400","0"],["533423",["维西","維西"],"533400","0"],["540100",["拉萨","拉薩"],"540000","0"],["540102",["城关","城關"],"540100","0"],["540121",["林周","林周"],"540100","0"],["540122",["当雄","當雄"],"540100","0"],["540123",["尼木","尼木"],"540100","0"],["540124",["曲水","曲水"],"540100","0"],["540125",["堆龙德庆","堆龍德慶"],"540100","0"],["540126",["达孜","達孜"],"540100","0"],["540127",["墨竹工卡","墨竹工卡"],"540100","0"],["542100",["昌都","昌都"],"540000","0"],["542121",["卡若","卡若"],"542100","0"],["542122",["江达","江達"],"542100","0"],["542123",["贡觉","貢覺"],"542100","0"],["542124",["类乌齐","類烏齊"],"542100","0"],["542125",["丁青","丁青"],"542100","0"],["542126",["察雅","察雅"],"542100","0"],["542127",["八宿","八宿"],"542100","0"],["542128",["左贡","左貢"],"542100","0"],["542129",["芒康","芒康"],"542100","0"],["542132",["洛隆","洛隆"],"542100","0"],["542133",["边坝","邊壩"],"542100","0"],["542200",["山南","山南"],"540000","0"],["542221",["乃东","乃東"],"542200","0"],["542222",["扎囊","紮囊"],"542200","0"],["542223",["贡嘎","貢嘎"],"542200","0"],["542224",["桑日","桑日"],"542200","0"],["542225",["琼结","瓊結"],"542200","0"],["542226",["曲松","曲松"],"542200","0"],["542227",["措美","措美"],"542200","0"],["542228",["洛扎","洛紮"],"542200","0"],["542229",["加查","加查"],"542200","0"],["542231",["隆子","隆子"],"542200","0"],["542232",["错那","錯那"],"542200","0"],["542233",["浪卡子","浪卡子"],"542200","0"],["542300",["日喀则","日喀則"],"540000","0"],["542301",["桑珠孜","桑珠孜"],"542300","0"],["542322",["南木林","南木林"],"542300","0"],["542323",["江孜","江孜"],"542300","0"],["542324",["定日","定日"],"542300","0"],["542325",["萨迦","薩迦"],"542300","0"],["542326",["拉孜","拉孜"],"542300","0"],["542327",["昂仁","昂仁"],"542300","0"],["542328",["谢通门","謝通門"],"542300","0"],["542329",["白朗","白朗"],"542300","0"],["542330",["仁布","仁布"],"542300","0"],["542331",["康马","康馬"],"542300","0"],["542332",["定结","定結"],"542300","0"],["542333",["仲巴","仲巴"],"542300","0"],["542334",["亚东","亞東"],"542300","0"],["542335",["吉隆","吉隆"],"542300","0"],["542336",["聂拉木","聶拉木"],"542300","0"],["542337",["萨嘎","薩嘎"],"542300","0"],["542338",["岗巴","崗巴"],"542300","0"],["542400",["那曲","那曲"],"540000","0"],["542421",["那曲","那曲"],"542400","0"],["542422",["嘉黎","嘉黎"],"542400","0"],["542423",["比如","比如"],"542400","0"],["542424",["聂荣","聶榮"],"542400","0"],["542425",["安多","安多"],"542400","0"],["542426",["申扎","申紮"],"542400","0"],["542427",["索县","索縣"],"542400","0"],["542428",["班戈","班戈"],"542400","0"],["542429",["巴青","巴青"],"542400","0"],["542430",["尼玛","尼瑪"],"542400","0"],["542432",["双湖","雙湖"],"542400","0"],["542500",["阿里","阿裏"],"540000","0"],["542521",["普兰","普蘭"],"542500","0"],["542522",["札达","劄達"],"542500","0"],["542523",["噶尔","噶爾"],"542500","0"],["542524",["日土","日土"],"542500","0"],["542525",["革吉","革吉"],"542500","0"],["542526",["改则","改則"],"542500","0"],["542527",["措勤","措勤"],"542500","0"],["542600",["林芝","林芝"],"540000","0"],["542621",["巴宜","巴宜"],"542600","0"],["542622",["工布江达","工布江達"],"542600","0"],["542623",["米林","米林"],"542600","0"],["542624",["墨脱","墨脫"],"542600","0"],["542625",["波密","波密"],"542600","0"],["542626",["察隅","察隅"],"542600","0"],["542627",["朗县","朗縣"],"542600","0"],["610100",["西安","西安"],"610000","0"],["610102",["新城","新城"],"610100","0"],["610103",["碑林","碑林"],"610100","0"],["610104",["莲湖","蓮湖"],"610100","0"],["610111",["灞桥","灞橋"],"610100","0"],["610112",["未央","未央"],"610100","0"],["610113",["雁塔","雁塔"],"610100","0"],["610114",["阎良","閻良"],"610100","0"],["610115",["临潼","臨潼"],"610100","0"],["610116",["长安","長安"],"610100","0"],["610122",["蓝田","藍田"],"610100","0"],["610124",["周至","周至"],"610100","0"],["610125",["户县","戶縣"],"610100","0"],["610126",["高陵","高陵"],"610100","0"],["610200",["铜川","銅川"],"610000","0"],["610202",["王益","王益"],"610200","0"],["610203",["印台","印臺"],"610200","0"],["610204",["耀州","耀州"],"610200","0"],["610222",["宜君","宜君"],"610200","0"],["610300",["宝鸡","寶雞"],"610000","0"],["610302",["渭滨","渭濱"],"610300","0"],["610303",["金台","金臺"],"610300","0"],["610304",["陈仓","陳倉"],"610300","0"],["610322",["凤翔","鳳翔"],"610300","0"],["610323",["岐山","岐山"],"610300","0"],["610324",["扶风","扶風"],"610300","0"],["610326",["眉县","眉縣"],"610300","0"],["610327",["陇县","隴縣"],"610300","0"],["610328",["千阳","千陽"],"610300","0"],["610329",["麟游","麟遊"],"610300","0"],["610330",["凤县","鳳縣"],"610300","0"],["610331",["太白","太白"],"610300","0"],["610400",["咸阳","鹹陽"],"610000","0"],["610402",["秦都","秦都"],"610400","0"],["610403",["杨陵","楊陵"],"610400","0"],["610404",["渭城","渭城"],"610400","0"],["610422",["三原","三原"],"610400","0"],["610423",["泾阳","涇陽"],"610400","0"],["610424",["乾县","乾縣"],"610400","0"],["610425",["礼泉","禮泉"],"610400","0"],["610426",["永寿","永壽"],"610400","0"],["610427",["彬县","彬縣"],"610400","0"],["610428",["长武","長武"],"610400","0"],["610429",["旬邑","旬邑"],"610400","0"],["610430",["淳化","淳化"],"610400","0"],["610431",["武功","武功"],"610400","0"],["610481",["兴平","興平"],"610400","0"],["610500",["渭南","渭南"],"610000","0"],["610502",["临渭","臨渭"],"610500","0"],["610521",["华县","華縣"],"610500","0"],["610522",["潼关","潼關"],"610500","0"],["610523",["大荔","大荔"],"610500","0"],["610524",["合阳","合陽"],"610500","0"],["610525",["澄城","澄城"],"610500","0"],["610526",["蒲城","蒲城"],"610500","0"],["610527",["白水","白水"],"610500","0"],["610528",["富平","富平"],"610500","0"],["610581",["韩城","韓城"],"610500","0"],["610582",["华阴","華陰"],"610500","0"],["610600",["延安","延安"],"610000","0"],["610602",["宝塔","寶塔"],"610600","0"],["610621",["延长","延長"],"610600","0"],["610622",["延川","延川"],"610600","0"],["610623",["子长","子長"],"610600","0"],["610624",["安塞","安塞"],"610600","0"],["610625",["志丹","志丹"],"610600","0"],["610626",["吴起","吳起"],"610600","0"],["610627",["甘泉","甘泉"],"610600","0"],["610628",["富县","富縣"],"610600","0"],["610629",["洛川","洛川"],"610600","0"],["610630",["宜川","宜川"],"610600","0"],["610631",["黄龙","黃龍"],"610600","0"],["610632",["黄陵","黃陵"],"610600","0"],["610700",["汉中","漢中"],"610000","0"],["610702",["汉台","漢臺"],"610700","0"],["610721",["南郑","南鄭"],"610700","0"],["610722",["城固","城固"],"610700","0"],["610723",["洋县","洋縣"],"610700","0"],["610724",["西乡","西鄉"],"610700","0"],["610725",["勉县","勉縣"],"610700","0"],["610726",["宁强","寧強"],"610700","0"],["610727",["略阳","略陽"],"610700","0"],["610728",["镇巴","鎮巴"],"610700","0"],["610729",["留坝","留壩"],"610700","0"],["610730",["佛坪","佛坪"],"610700","0"],["610800",["榆林","榆林"],"610000","0"],["610802",["榆阳","榆陽"],"610800","0"],["610821",["神木","神木"],"610800","0"],["610822",["府谷","府穀"],"610800","0"],["610823",["横山","橫山"],"610800","0"],["610824",["靖边","靖邊"],"610800","0"],["610825",["定边","定邊"],"610800","0"],["610826",["绥德","綏德"],"610800","0"],["610827",["米脂","米脂"],"610800","0"],["610828",["佳县","佳縣"],"610800","0"],["610829",["吴堡","吳堡"],"610800","0"],["610830",["清涧","清澗"],"610800","0"],["610831",["子洲","子洲"],"610800","0"],["610900",["安康","安康"],"610000","0"],["610902",["汉滨","漢濱"],"610900","0"],["610921",["汉阴","漢陰"],"610900","0"],["610922",["石泉","石泉"],"610900","0"],["610923",["宁陕","寧陝"],"610900","0"],["610924",["紫阳","紫陽"],"610900","0"],["610925",["岚皋","嵐皋"],"610900","0"],["610926",["平利","平利"],"610900","0"],["610927",["镇坪","鎮坪"],"610900","0"],["610928",["旬阳","旬陽"],"610900","0"],["610929",["白河","白河"],"610900","0"],["611000",["商洛","商洛"],"610000","0"],["611002",["商州","商州"],"611000","0"],["611021",["洛南","洛南"],"611000","0"],["611022",["丹凤","丹鳳"],"611000","0"],["611023",["商南","商南"],"611000","0"],["611024",["山阳","山陽"],"611000","0"],["611025",["镇安","鎮安"],"611000","0"],["611026",["柞水","柞水"],"611000","0"],["620100",["兰州","蘭州"],"620000","0"],["620102",["城关","城關"],"620100","0"],["620103",["七里河","七裏河"],"620100","0"],["620104",["西固","西固"],"620100","0"],["620105",["安宁","安寧"],"620100","0"],["620111",["红古","紅古"],"620100","0"],["620121",["永登","永登"],"620100","0"],["620122",["皋兰","皋蘭"],"620100","0"],["620123",["榆中","榆中"],"620100","0"],["620200",["嘉峪关","嘉峪關"],"620000","0"],["620300",["金昌","金昌"],"620000","0"],["620302",["金川","金川"],"620300","0"],["620321",["永昌","永昌"],"620300","0"],["620400",["白银","白銀"],"620000","0"],["620402",["白银","白銀"],"620400","0"],["620403",["平川","平川"],"620400","0"],["620421",["靖远","靖遠"],"620400","0"],["620422",["会宁","會寧"],"620400","0"],["620423",["景泰","景泰"],"620400","0"],["620500",["天水","天水"],"620000","0"],["620502",["秦州","秦州"],"620500","0"],["620503",["麦积","麥積"],"620500","0"],["620521",["清水","清水"],"620500","0"],["620522",["秦安","秦安"],"620500","0"],["620523",["甘谷","甘穀"],"620500","0"],["620524",["武山","武山"],"620500","0"],["620525",["张家川","張家川"],"620500","0"],["620600",["武威","武威"],"620000","0"],["620602",["凉州","涼州"],"620600","0"],["620621",["民勤","民勤"],"620600","0"],["620622",["古浪","古浪"],"620600","0"],["620623",["天祝","天祝"],"620600","0"],["620700",["张掖","張掖"],"620000","0"],["620702",["甘州","甘州"],"620700","0"],["620721",["肃南","肅南"],"620700","0"],["620722",["民乐","民樂"],"620700","0"],["620723",["临泽","臨澤"],"620700","0"],["620724",["高台","高臺"],"620700","0"],["620725",["山丹","山丹"],"620700","0"],["620800",["平凉","平涼"],"620000","0"],["620802",["崆峒","崆峒"],"620800","0"],["620821",["泾川","涇川"],"620800","0"],["620822",["灵台","靈臺"],"620800","0"],["620823",["崇信","崇信"],"620800","0"],["620824",["华亭","華亭"],"620800","0"],["620825",["庄浪","莊浪"],"620800","0"],["620826",["静宁","靜寧"],"620800","0"],["620900",["酒泉","酒泉"],"620000","0"],["620902",["肃州","肅州"],"620900","0"],["620921",["金塔","金塔"],"620900","0"],["620922",["瓜州","瓜州"],"620900","0"],["620923",["肃北","肅北"],"620900","0"],["620924",["阿克塞","阿克塞"],"620900","0"],["620981",["玉门","玉門"],"620900","0"],["620982",["敦煌","敦煌"],"620900","0"],["621000",["庆阳","慶陽"],"620000","0"],["621002",["西峰","西峰"],"621000","0"],["621021",["庆城","慶城"],"621000","0"],["621022",["环县","環縣"],"621000","0"],["621023",["华池","華池"],"621000","0"],["621024",["合水","合水"],"621000","0"],["621025",["正宁","正寧"],"621000","0"],["621026",["宁县","寧縣"],"621000","0"],["621027",["镇原","鎮原"],"621000","0"],["621100",["定西","定西"],"620000","0"],["621102",["安定","安定"],"621100","0"],["621121",["通渭","通渭"],"621100","0"],["621122",["陇西","隴西"],"621100","0"],["621123",["渭源","渭源"],"621100","0"],["621124",["临洮","臨洮"],"621100","0"],["621125",["漳县","漳縣"],"621100","0"],["621126",["岷县","岷縣"],"621100","0"],["621200",["陇南","隴南"],"620000","0"],["621202",["武都","武都"],"621200","0"],["621221",["成县","成縣"],"621200","0"],["621222",["文县","文縣"],"621200","0"],["621223",["宕昌","宕昌"],"621200","0"],["621224",["康县","康縣"],"621200","0"],["621225",["西和","西和"],"621200","0"],["621226",["礼县","禮縣"],"621200","0"],["621227",["徽县","徽縣"],"621200","0"],["621228",["两当","兩當"],"621200","0"],["622900",["临夏","臨夏"],"620000","0"],["622901",["临夏市","臨夏市"],"622900","0"],["622921",["临夏县","臨夏縣"],"622900","0"],["622922",["康乐","康樂"],"622900","0"],["622923",["永靖","永靖"],"622900","0"],["622924",["广河","廣河"],"622900","0"],["622925",["和政","和政"],"622900","0"],["622926",["东乡","東鄉"],"622900","0"],["622927",["积石山","積石山"],"622900","0"],["623000",["甘南","甘南"],"620000","0"],["623001",["合作","合作"],"623000","0"],["623021",["临潭","臨潭"],"623000","0"],["623022",["卓尼","卓尼"],"623000","0"],["623023",["舟曲","舟曲"],"623000","0"],["623024",["迭部","迭部"],"623000","0"],["623025",["玛曲","瑪曲"],"623000","0"],["623026",["碌曲","碌曲"],"623000","0"],["623027",["夏河","夏河"],"623000","0"],["630100",["西宁","西寧"],"630000","0"],["630102",["城东","城東"],"630100","0"],["630103",["城中","城中"],"630100","0"],["630104",["城西","城西"],"630100","0"],["630105",["城北","城北"],"630100","0"],["630121",["大通","大通"],"630100","0"],["630122",["湟中","湟中"],"630100","0"],["630123",["湟源","湟源"],"630100","0"],["632100",["海东","海東"],"630000","0"],["632121",["平安","平安"],"632100","0"],["632122",["民和","民和"],"632100","0"],["632123",["乐都","樂都"],"632100","0"],["632126",["互助","互助"],"632100","0"],["632127",["化隆","化隆"],"632100","0"],["632128",["循化","循化"],"632100","0"],["632200",["海北","海北"],"630000","0"],["632221",["门源","門源"],"632200","0"],["632222",["祁连","祁連"],"632200","0"],["632223",["海晏","海晏"],"632200","0"],["632224",["刚察","剛察"],"632200","0"],["632300",["黄南","黃南"],"630000","0"],["632321",["同仁","同仁"],"632300","0"],["632322",["尖扎","尖紮"],"632300","0"],["632323",["泽库","澤庫"],"632300","0"],["632324",["河南","河南"],"632300","0"],["632500",["海南藏族","海南藏族"],"630000","0"],["632521",["共和","共和"],"632500","0"],["632522",["同德","同德"],"632500","0"],["632523",["贵德","貴德"],"632500","0"],["632524",["兴海","興海"],"632500","0"],["632525",["贵南","貴南"],"632500","0"],["632600",["果洛","果洛"],"630000","0"],["632621",["玛沁","瑪沁"],"632600","0"],["632622",["班玛","班瑪"],"632600","0"],["632623",["甘德","甘德"],"632600","0"],["632624",["达日","達日"],"632600","0"],["632625",["久治","久治"],"632600","0"],["632626",["玛多","瑪多"],"632600","0"],["632700",["玉树","玉樹"],"630000","0"],["632721",["玉树","玉樹"],"632700","0"],["632722",["杂多","雜多"],"632700","0"],["632723",["称多","稱多"],"632700","0"],["632724",["治多","治多"],"632700","0"],["632725",["囊谦","囊謙"],"632700","0"],["632726",["曲麻莱","曲麻萊"],"632700","0"],["632800",["海西","海西"],"630000","0"],["632801",["格尔木","格爾木"],"632800","0"],["632802",["德令哈","德令哈"],"632800","0"],["632821",["乌兰","烏蘭"],"632800","0"],["632822",["都兰","都蘭"],"632800","0"],["632823",["天峻","天峻"],"632800","0"],["640100",["银川","銀川"],"640000","0"],["640104",["兴庆","興慶"],"640100","0"],["640105",["西夏","西夏"],"640100","0"],["640106",["金凤","金鳳"],"640100","0"],["640121",["永宁","永寧"],"640100","0"],["640122",["贺兰","賀蘭"],"640100","0"],["640181",["灵武","靈武"],"640100","0"],["640200",["石嘴山","石嘴山"],"640000","0"],["640202",["大武口","大武口"],"640200","0"],["640205",["惠农","惠農"],"640200","0"],["640221",["平罗","平羅"],"640200","0"],["640300",["吴忠","吳忠"],"640000","0"],["640302",["利通","利通"],"640300","0"],["640303",["红寺堡","紅寺堡"],"640300","0"],["640323",["盐池","鹽池"],"640300","0"],["640324",["同心","同心"],"640300","0"],["640381",["青铜峡","青銅峽"],"640300","0"],["640400",["固原","固原"],"640000","0"],["640402",["原州","原州"],"640400","0"],["640422",["西吉","西吉"],"640400","0"],["640423",["隆德","隆德"],"640400","0"],["640424",["泾源","涇源"],"640400","0"],["640425",["彭阳","彭陽"],"640400","0"],["640500",["中卫","中衛"],"640000","0"],["640502",["沙坡头","沙坡頭"],"640500","0"],["640521",["中宁","中寧"],"640500","0"],["640522",["海原","海原"],"640500","0"],["650100",["乌鲁木齐","烏魯木齊"],"650000","0"],["650102",["天山","天山"],"650100","0"],["650103",["沙依巴克","沙依巴克"],"650100","0"],["650104",["新市","新市"],"650100","0"],["650105",["水磨沟","水磨溝"],"650100","0"],["650106",["头屯河","頭屯河"],"650100","0"],["650107",["达坂城","達阪城"],"650100","0"],["650109",["米东","米東"],"650100","0"],["650121",["乌鲁木齐","烏魯木齊"],"650100","0"],["650200",["克拉玛依","克拉瑪依"],"650000","0"],["650202",["独山子","獨山子"],"650200","0"],["650203",["克拉玛依","克拉瑪依"],"650200","0"],["650204",["白碱滩","白堿灘"],"650200","0"],["650205",["乌尔禾","烏爾禾"],"650200","0"],["652100",["吐鲁番","吐魯番"],"650000","0"],["652101",["高昌","高昌"],"652100","0"],["652122",["鄯善","鄯善"],"652100","0"],["652123",["托克逊","托克遜"],"652100","0"],["652200",["哈密","哈密"],"650000","0"],["652201",["哈密","哈密"],"652200","0"],["652222",["巴里坤","巴裏坤"],"652200","0"],["652223",["伊吾","伊吾"],"652200","0"],["652300",["昌吉","昌吉"],"650000","0"],["652301",["昌吉","昌吉"],"652300","0"],["652302",["阜康","阜康"],"652300","0"],["652323",["呼图壁","呼圖壁"],"652300","0"],["652324",["玛纳斯","瑪納斯"],"652300","0"],["652325",["奇台","奇臺"],"652300","0"],["652327",["吉木萨尔","吉木薩爾"],"652300","0"],["652328",["木垒","木壘"],"652300","0"],["652700",["博尔塔拉","博爾塔拉"],"650000","0"],["652701",["博乐","博樂"],"652700","0"],["652702",["阿拉山口","阿拉山口"],"652700","0"],["652722",["精河","精河"],"652700","0"],["652723",["温泉","溫泉"],"652700","0"],["652800",["巴音郭楞","巴音郭楞"],"650000","0"],["652801",["库尔勒","庫爾勒"],"652800","0"],["652822",["轮台","輪臺"],"652800","0"],["652823",["尉犁","尉犁"],"652800","0"],["652824",["若羌","若羌"],"652800","0"],["652825",["且末","且末"],"652800","0"],["652826",["焉耆","焉耆"],"652800","0"],["652827",["和静","和靜"],"652800","0"],["652828",["和硕","和碩"],"652800","0"],["652829",["博湖","博湖"],"652800","0"],["652900",["阿克苏","阿克蘇"],"650000","0"],["652901",["阿克苏","阿克蘇"],"652900","0"],["652922",["温宿","溫宿"],"652900","0"],["652923",["库车","庫車"],"652900","0"],["652924",["沙雅","沙雅"],"652900","0"],["652925",["新和","新和"],"652900","0"],["652926",["拜城","拜城"],"652900","0"],["652927",["乌什","烏什"],"652900","0"],["652928",["阿瓦提","阿瓦提"],"652900","0"],["652929",["柯坪","柯坪"],"652900","0"],["653000",["克孜勒苏柯尔克孜","克孜勒蘇柯爾克孜"],"650000","0"],["653001",["阿图什","阿圖什"],"653000","0"],["653022",["阿克陶","阿克陶"],"653000","0"],["653023",["阿合奇","阿合奇"],"653000","0"],["653024",["乌恰","烏恰"],"653000","0"],["653100",["喀什","喀什"],"650000","0"],["653101",["喀什","喀什"],"653100","0"],["653121",["疏附","疏附"],"653100","0"],["653122",["疏勒","疏勒"],"653100","0"],["653123",["英吉沙","英吉沙"],"653100","0"],["653124",["泽普","澤普"],"653100","0"],["653125",["莎车","莎車"],"653100","0"],["653126",["叶城","葉城"],"653100","0"],["653127",["麦盖提","麥蓋提"],"653100","0"],["653128",["岳普湖","嶽普湖"],"653100","0"],["653129",["伽师","伽師"],"653100","0"],["653130",["巴楚","巴楚"],"653100","0"],["653131",["塔什库尔干","塔什庫爾幹"],"653100","0"],["653200",["和田","和田"],"650000","0"],["653201",["和田市","和田市"],"653200","0"],["653221",["和田县","和田縣"],"653200","0"],["653222",["墨玉","墨玉"],"653200","0"],["653223",["皮山","皮山"],"653200","0"],["653224",["洛浦","洛浦"],"653200","0"],["653225",["策勒","策勒"],"653200","0"],["653226",["于田","於田"],"653200","0"],["653227",["民丰","民豐"],"653200","0"],["654000",["伊犁","伊犁"],"650000","0"],["654002",["伊宁市","伊寧市"],"654000","0"],["654003",["奎屯","奎屯"],"654000","0"],["654021",["伊宁县","伊寧縣"],"654000","0"],["654022",["察布查尔","察布查爾"],"654000","0"],["654023",["霍城","霍城"],"654000","0"],["654024",["巩留","鞏留"],"654000","0"],["654025",["新源","新源"],"654000","0"],["654026",["昭苏","昭蘇"],"654000","0"],["654027",["特克斯","特克斯"],"654000","0"],["654028",["尼勒克","尼勒克"],"654000","0"],["654200",["塔城","塔城"],"650000","0"],["654201",["塔城","塔城"],"654200","0"],["654202",["乌苏","烏蘇"],"654200","0"],["654221",["额敏","額敏"],"654200","0"],["654223",["沙湾","沙灣"],"654200","0"],["654224",["托里","托裏"],"654200","0"],["654225",["裕民","裕民"],"654200","0"],["654226",["和布克赛尔","和布克賽爾"],"654200","0"],["654300",["阿勒泰","阿勒泰"],"650000","0"],["654301",["阿勒泰","阿勒泰"],"654300","0"],["654321",["布尔津","布爾津"],"654300","0"],["654322",["富蕴","富蘊"],"654300","0"],["654323",["福海","福海"],"654300","0"],["654324",["哈巴河","哈巴河"],"654300","0"],["654325",["青河","青河"],"654300","0"],["654326",["吉木乃","吉木乃"],"654300","0"],["659001",["石河子","石河子"],"650000","0"],["659002",["阿拉尔","阿拉爾"],"650000","0"],["659003",["图木舒克","圖木舒克"],"650000","0"],["659004",["五家渠","五家渠"],"650000","0"],["542301",["日喀则市 (桑珠孜区)","日喀則市 (桑珠孜區)"],"542300","1"],["210112",["东陵区 (浑南区)","東陵區 (渾南區)"],"210100","1"],["440903",["茂港区 (电白区)","茂港區 (電白區)"],"440900","1"],["371324",["苍山县 (兰陵县)","蒼山縣 (蘭陵區)"],"371300","1"],["330621",["绍兴县 (柯桥区)","紹興縣 (柯橋區)"],"330600","1"],["420321",["郧县 (郧阳区)","鄖縣 (鄖陽區)"],"420300","1"],["410224",["开封县 (祥符区)","開封縣 (祥符區)"],"410200","1"],["542121",["昌都县 (卡若区)","昌都縣 (卡若區)"],"542100","1"],["371421",["陵县 (陵城区)","陵縣 (陵城區)"],"371400","1"],["411222",["陕县 (陕州区)","陝縣 (陝州區)"],"411200","1"],["542621",["林芝县 (巴宜区)","林芝縣 (巴宜區)"],"542600","1"],["652101",["吐鲁番市 (高昌区)","吐魯番市 (高昌區)"],"652100","1"],["510107",["高新区 (武侯区)","高新區 (武侯區)"],"510100","1"],["510124",["高新西区 (郫县)","高新西區 (郫縣)"],"510100","1"],["320508",["工业园区 (姑苏区)","工業園區 (姑蘇區)"],"320500","1"],["320505",["高新区 (虎丘区)","高新區 (虎丘區)"],"320500","1"],["330212,330204",["高新区 (鄞州区，江东区)","高新區 (鄞州區，江東區)"],"330200","1"],["330204",["高新区 (江东区)","高新區 (江東區)"],"330200","2"],["330212",["高新区 (鄞州区)","高新區 (鄞州區)"],"330200","2"],["370214",["高新区 (城阳区)","高新區 (城陽區)"],"370200","1"],["210213",["经济开发区 (金州区)","經濟開發區 (金州區)"],"210200","1"],["340104",["高新区 (蜀山区)","高新區 (蜀山區)"],"340100","1"],["610113,610116",["高新区 (雁塔区，长安区)","高新區 (雁塔區，長安區)"],"610100","1"],["610113",["高新区 (雁塔区)","高新區 (雁塔區)"],"610100","2"],["610116",["高新区 (长安区)","高新區 (長安區)"],"610100","2"],["410102",["高新区 (中原区)","高新區 (中原區)"],"410100","1"],["410104",["经济开发区 (管城回族区)","經濟開發區 (管城回族區)"],"410100","1"],["410105",["郑东新区 (金水区)","鄭東新區 (金水區)"],"410100","1"],["220104",["高新区 (朝阳区)","高新區 (朝陽區)"],"220100","1"],["220105",["经济开发区 (二道区)","經濟開發區 (二道區)"],"220100","1"],["220106",["汽车产业开发区 (绿园区)","汽車產業開發區 (綠園區)"],"220100","1"],["620121",["兰州新区 (永登县)","蘭州新區 (永登縣)"],"620100","1"],["370705",["高新区 (奎文区)","高新區 (奎文區)"],"370700","1"],["130108",["高新区 (裕华区)","高新區 (裕華區)"],"130100","1"],["210211,210212",["高新区 (甘井子区，旅顺口区)","高新區 (甘井子區，旅順口區)"],"210200","1"],["210211",["高新区 (甘井子区)","高新區 (甘井子區)"],"210200","2"],["210212",["高新区 (旅顺口区)","高新區 (旅順口區)"],"210200","2"],["370102,370112",["高新区 (历下区，历城区)","高新區 (曆下區，曆城區)"],"370100","1"],["370102",["高新区 (历下区)","高新區 (曆下區)"],"370100","2"],["370112",["高新区 (历城区)","高新區 (曆城區)"],"370100","2"],["120116",["塘沽区 (滨海新区)","塘沽區 (濱海新區)"],"120100","1"],["120116",["汉沽区 (滨海新区)","漢沽區 (濱海新區)"],"120100","1"],["120116",["大港区 (滨海新区)","大港區 (濱海新區)"],"120100","1"],["210112",["浑南新区 (浑南区)","渾南新區 (渾南區)"],"210100","1"],["310101",["卢湾区 (黄浦区)","盧灣區 (黃浦區)"],"310100","1"],["320104",["白下区 (秦淮区)","白下區 (秦淮區)"],"320100","1"],["320106",["下关区 (鼓楼区)","下關區 (鼓樓區)"],"320100","1"],["320323",["九里区 (铜山区)","九裏區 (銅山區)"],"320300","1"],["321003",["维扬区 (邗江区)","維揚區 (邗江區)"],"321000","1"],["340503",["金家庄区 (花山区)","金家莊區 (花山區)"],"340500","1"],["341400",["居巢区 (巢湖市)","居巢區 (巢湖市)"],"340100","1"],["370203",["四方区 (市北区)","四方區 (市北區)"],"370200","1"],["370211",["胶南市 (黄岛区)","膠南市 (黃島區)"],"370200","1"],["450403",["蝶山区 (万秀区)","蝶山區 (萬秀區)"],"450400","1"],["520111",["小河区 (花溪区)","小河區 (花溪區)"],"520100","1"],["320508",["沧浪区 (姑苏区)","滄浪區 (姑蘇區)"],"320500","1"],["320508",["平江区 (姑苏区)","平江區 (姑蘇區)"],"320500","1"],["320508",["金阊区 (姑苏区)","金閶區 (姑蘇區)"],"320500","1"],["451402",["江洲区 (江州区)","江洲區 (江州區)"],"451400","1"],["510811",["元坝区 (昭化区)","元壩區 (昭化區)"],"510800","1"],["500222",["万盛区 (綦江区)","萬盛區 (綦江區)"],"500100","1"],["500225",["双桥区 (大足区)","雙橋區 (大足區)"],"500100","1"],["210184",["新城子区 (沈北新区)","新城子區 (沈北新區)"],"210100","1"],["440307",["坪山新区 (龙岗区)","坪山新區 (龍崗區)"],"440300","1"],["440307",["大鹏新区 (龙岗区)","大鵬新區 (龍崗區)"],"440300","1"],["440306",["光明新区 (宝安区)","光明新區 (寶安區)"],"440300","1"],["440306",["龙华新区 (宝安区)","龍華新區 (寶安區)"],"440300","1"],["652701",["双河市 (博乐市)","雙河市 (博樂市)"],"652700","1"],["652801",["铁门关市 (库尔勒市)","鐵門關市 (庫爾勒市)"],"652800","1"],["654323",["北屯市 (福海县)","北屯市 (福海縣)"],"654300","1"],["320211",["新区 (滨湖区)","新區 (濱湖區)"],"320200","1"],["420111,420115",["东湖高新区 (洪山区，江夏区)","東湖高新區 (洪山區，江夏區)"],"420100","1"],["420111",["东湖高新区 (洪山区)","東湖高新區 (洪山區)"],"420100","2"],["420115",["东湖高新区 (江夏区)","東湖高新區 (江夏區)"],"420100","2"],["420114,420105",["经济技术开发区 (蔡甸区，汉阳区)","經濟技術開發區 (蔡甸區，漢陽區)"],"420100","1"],["420114",["经济技术开发区 (蔡甸区)","經濟技術開發區 (蔡甸區)"],"420100","2"],["420105",["经济技术开发区 (汉阳区)","經濟技術開發區 (漢陽區)"],"420100","2"],["320602",["南通经济技术开发区 (崇川区)","南通經濟技術開發區 (崇川區)"],"320600","1"]];exports.default={province:province,county:county};

/***/ },

/***/ 463:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"address-box\" :class=\"classObj\" @click.stop=\"showAddrPopFun\" @blur=\"hideAddrPopFun\">\n  <div v-if=\"province\" class=\"ad-select has-select\" v-html=\"selectAddr\"></div>\n  <div v-else class=\"ad-select\">{{placeholder}}</div>\n  <i class=\"ad-drop\" :class=\"{'drop-down': showAddrPop}\"></i>\n  <div class=\"ad-overlay\" v-show=\"showAddrPop\">\n    <div class=\"ad-overlay-container\">\n      <div class=\"tab-list\">\n        <ul>\n          <li v-for=\"tab in tabList\" :class=\"{'active': current == tab.id}\" :style=\"{'width': (100/tabList.length)+'%'}\" @click.stop.stop=\"navChoose(tab.id)\">{{tab.name}}</li>\n        </ul>\n      </div>\n      <div class=\"tab-content\">\n        <div class=\"province-content\" v-show=\"current == 'province'\">\n          <dl v-for=\"key in list.provinceList\">\n            <dt>{{$key}}</dt>\n            <dd>\n              <a v-for=\"prov in key\" :title=\"prov[1]\" :attr-id=\"prov[0]\" href=\"javascript:;\" @click=\"chooseProvince(prov[0], prov[1])\" :class=\"{'active': provinceId == prov[0]}\">\n                <input v-if=\"provinceId == prov[0]\" value=\"{{prov[1]}}\" type=\"hidden\" v-model=\"province\" />\n                {{prov[1]}}\n              </a>\n            </dd>\n          </dl>\n        </div>\n        <div class=\"city-content\" v-show=\"current == 'city'\">\n          <dl>\n            <dd>\n              <template v-for=\"item in list.countyList\">\n                <a v-if=\"item[2] == provinceId\" title=\"{{item[1]}}\" attr-id=\"{{item[0]}}\" href=\"javascript:;\" @click.stop=\"chooseCity(item[0], item[1])\" :class=\"{'active': cityId == item[0]}\" track-by=\"item[0]\">\n                  <input v-if=\"cityId == item[0]\" value=\"{{item[1]}}\" type=\"hidden\" v-model=\"city\" />\n                  {{item[1]}}\n                </a>\n              </template>\n            </dd>\n          </dl>\n        </div>\n        <div class=\"county-content\" v-if=\"tabList[2]\" v-show=\"current == 'county'\">\n          <dl>\n            <dd>\n              <template v-for=\"item in list.countyList\">\n                <a v-if=\"item[2] == cityId\" title=\"{{item[1]}}\" attr-id=\"{{item[0]}}\" href=\"javascript:;\" @click.stop=\"chooseCounty(item[0], item[1])\" :class=\"{'active': countyId == item[0]}\" track-by=\"item[0]\">\n                  <input v-if=\"countyId == item[0]\" value=\"{{item[1]}}\" type=\"hidden\" v-model=\"county\" />\n                  {{item[1]}}\n                </a>\n              </template>\n            </dd>\n          </dl>\n        </div>\n        <div class=\"street-content\" v-if=\"tabList[3]\" v-show=\"current == 'street'\">\n          <dl>\n            <dd>\n              <template v-for=\"item in list.streetList\">\n                <a title=\"{{item[0]}}\" attr-id=\"{{$key}}\" parent-id=\"{{item[1]}}\" href=\"javascript:;\" @click.stop=\"chooseStreet($key, item[0])\" :class=\"{'active': streetId == $key}\" track-by=\"$key\">\n                  <input v-if=\"streetId == $key\" value=\"{{item[0]}}\" type=\"hidden\" v-model=\"street\" />\n                  {{item[0]}}\n                </a>\n              </template>\n            </dd>\n          </dl>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n";

/***/ },

/***/ 464:
/***/ function(module, exports) {

	module.exports = "\n\n  <div class=\"bs-docs-section\" id=\"addressselect\">\n    <h3 class=\"page-header\"><a href=\"#addressselect\" class=\"anchor\">AddressSelect 地址选择 </a></h3>\n    <div class=\"bs-example\">\n      <h4>无默认选中</h4>\n      <address-select large level=\"2\" placeholder=\"请选择省市\"></address-select>\n      <br>\n      <address-select small level=\"3\" placeholder=\"请选择省市区\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\"></address-select>\n      <br>\n      <h4>有默认选中</h4>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr1\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr2\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr3\"></address-select>\n      <br>\n      <address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr=\"defaultAddr4\"></address-select>\n      <br>\n      <button type=\"button\" class=\"btn\" id=\"J_click\">点击</button>\n    </div>\n    <pre><code class=\"language-markup\"><script type=\"language-mark-up\">\n<address-select large level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr1\"></address-select>\n<address-select small level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr2\"></address-select>\n<address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr3\"></address-select>\n<address-select level=\"4\" placeholder=\"请选择省市区街道\" :default-addr.sync=\"defaultAddr4\"></address-select>\n    </script></code></pre>\n    </script>\n    </code>\n    <h4>参数</h4>\n    <table class=\"atui-table table-bordered\">\n      <thead>\n        <tr>\n          <th>参数名</th>\n          <th>类型</th>\n          <th>默认值</th>\n          <th>说明</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>placeholder</td>\n          <td><code>String</code></td>\n          <td><code>空</code></td>\n          <td>预期值的提示信息</td>\n        </tr>\n        <tr>\n          <td>level</td>\n          <td><code>String</code></td>\n          <td><code>4</code></td>\n          <td>省份-城市-县区-街道四级地址，要显示几级</td>\n        </tr>\n        <tr>\n          <td>large</td>\n          <td></td>\n          <td></td>\n          <td>组件尺寸，大</td>\n        </tr>\n        <tr>\n          <td>small</td>\n          <td></td>\n          <td></td>\n          <td>组件尺寸，小</td>\n        </tr>\n        <tr>\n          <td>default-addr</td>\n          <td><code>Object</code></td>\n          <td><code>{\n        provinceId: '',\n        cityId: '',\n        countyId: '',\n        streetId: ''\n      }</code></td>\n          <td>默认要选中的省份、城市、县/区、街道对应ID</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n";

/***/ }

/******/ });
//# sourceMappingURL=widgets-docs.js.map