
/*!
 * atui v0.0.35
 * (c) 2017 alibaba
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.atuiFilter=t(require("vue")):e.atuiFilter=t(e.Vue)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var u=r[o]={exports:{},id:o,loaded:!1};return e[o].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(214)},6:function(t,r){t.exports=e},214:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var u=r(6),n=o(u),i=r(215),f=o(i);n.default.filter("phoneNumber",f.default),e.exports={}},215:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r="";e=""+e,e=e.replace(/[^\d]/g,"").substr(0,11);for(var o=0;o<e.length;o++)3!==o&&7!==o||(r+=" "),r+=e[o];return t&&(r=r.replace(t,'<span class="h">'+t+"</span>")),r}}})});