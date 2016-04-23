(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFilter"] = factory();
	else
		root["VueFilter"] = factory();
})(this, function() {
return webpackJsonp_name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(327);


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _phoneNumber = __webpack_require__(323);
	
	var _phoneNumber2 = _interopRequireDefault(_phoneNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.Vue.filter('phoneNumber', _phoneNumber2.default);
	
	module.exports = {};

/***/ }

})
});
;
//# sourceMappingURL=VueFilter.dev.js.map