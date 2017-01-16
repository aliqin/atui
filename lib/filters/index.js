'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _phoneNumber = require('./phoneNumber');

var _phoneNumber2 = _interopRequireDefault(_phoneNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.filter('phoneNumber', _phoneNumber2.default);

module.exports = {};