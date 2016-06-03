/*!
 * atui v0.0.9
 * (c) 2016 alibaba
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueFilter=t():e.VueFilter=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(133)},133:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var n=r(134),u=o(n);Vue.filter("phoneNumber",u["default"]),e.exports={}},134:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var r="";e=""+e,e=e.replace(/[^\d]/g,"").substr(0,11);for(var o=0;o<e.length;o++)3!==o&&7!==o||(r+=" "),r+=e[o];return t&&(r=r.replace(t,'<span class="h">'+t+"</span>")),r}}})});