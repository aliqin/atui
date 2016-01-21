'use strict';

var Benchmark = require('benchmark');
var convert = require('./index');

var hex = '73a9c1';
var rgb = [10,160,230];
var hsl = [202,71,32];
var hsv = [44,32,78];
var grayscale = 189;

(new Benchmark.Suite())

.add('grayscale2rgb',function () {
  convert.grayscale.rgb(hex);
})

.add('hex2rgb',function () {
  convert.hex.rgb(hex);
})

.add('rgb2grayscale',function () {
  convert.rgb.grayscale(rgb);
})

.add('rgb2hex',function () {
  convert.rgb.hex(rgb);
})

.add('rgb2hsv',function () {
  convert.rgb.hsv(rgb);
})

.add('rgb2hsl',function () {
  convert.rgb.hsl(rgb);
})

.add('hsl2rgb',function () {
  convert.hsl.rgb(hsl);
})

.add('hsl2hsv',function () {
  convert.hsl.hsv(hsl);
})

.add('hsv2rgb',function () {
  convert.hsv.rgb(hsv);
})

.add('hsv2hsl',function () {
  convert.hsv.hsl(hsv);
})

.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();

