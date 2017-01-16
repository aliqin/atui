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