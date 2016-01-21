colr-convert
============

> Color conversion functions.

This is a fork of https://github.com/harthur/color-convert.

The main changes are:

- Only supports RGB, HSV and HSL
- All functions return unrounded values
- Arguments must be passed in as an array
- Call functions like so `convert[from][to]([1, 2, 3]);`
- Adds hex/rgb conversion
- Adds grayscale/rgb conversion

**Note:** Recommend you do not use this library directly. Instead use
https://github.com/stayradiated/colr

## Benchmarks

```
grayscale2rgb x 41,237,487 ops/sec ±0.47% (99 runs sampled)
hex2rgb x 18,384,624 ops/sec ±0.24% (100 runs sampled)
rgb2grayscale x 42,660,769 ops/sec ±0.41% (101 runs sampled)
rgb2hex x 4,241,119 ops/sec ±0.30% (98 runs sampled)
rgb2hsv x 11,333,178 ops/sec ±0.35% (100 runs sampled)
rgb2hsl x 9,364,469 ops/sec ±0.30% (100 runs sampled)
hsl2rgb x 16,887,605 ops/sec ±0.38% (100 runs sampled)
hsl2hsv x 24,917,781 ops/sec ±0.66% (97 runs sampled)
hsv2rgb x 25,247,784 ops/sec ±0.44% (100 runs sampled)
hsv2hsl x 25,951,561 ops/sec ±0.98% (92 runs sampled)
Fastest is rgb2grayscale
```
