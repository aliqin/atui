'use strict';

module.exports = {
  grayscale: {
    rgb: grayscale2rgb
  },
  hex: {
    rgb: hex2rgb,
  },
  rgb: {
    hsl: rgb2hsl,
    hsv: rgb2hsv,
    hex: rgb2hex,
    grayscale: rgb2grayscale
  },
  hsl: {
    rgb: hsl2rgb,
    hsv: hsl2hsv,
  },
  hsv: {
    rgb: hsv2rgb,
    hsl: hsv2hsl,
  },
};

// convert a charcode to a hex val
function hexVal (c) {
  return (
    c < 58 ? c - 48 : // 0 - 9
    c < 71 ? c - 55 : // A - F
    c - 87            // a - f
  );
}

function hex2rgb (hex) {
  var i = hex[0] === '#' ? 1 : 0;
  var len = hex.length;

  if (len - i < 3) {
    throw new Error('hex input must be at least three chars long');
  }

  var r, g, b;

  var h1 = hexVal(hex.charCodeAt(0+i));
  var h2 = hexVal(hex.charCodeAt(1+i));
  var h3 = hexVal(hex.charCodeAt(2+i));

  if (len - i >= 6) {
    r = (h1 << 4) + h2;
    g = (h3 << 4) + hexVal(hex.charCodeAt(3+i));
    b = (hexVal(hex.charCodeAt(4+i)) << 4) + hexVal(hex.charCodeAt(5+i));
  } else {
    r = (h1 << 4) + h1;
    g = (h2 << 4) + h2;
    b = (h3 << 4) + h3;
  }

  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error('hex input is invalid');
  }

  return [r, g, b];
}


function rgb2hex (rgb) {
  return '#' + (
    '000000' +
    ((rgb[0] << 16) +
     (rgb[1] << 8) +
      rgb[2]
    ).toString(16)
  ).slice(-6);
}

function rgb2hsl (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;

  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h, s, l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h, s, v;

  if (max === 0) {
    s = 0;
  } else {
    s = delta / max * 100;
  }

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  v = (max / 255) * 100;

  return [h, s, v];
}

function hsl2rgb (hsl) {
  var h = hsl[0] / 360;
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;

  var r, g, b;

  if (s === 0) { // monochrome
    r = g = b = l;

  } else {
    var q = l < 0.5 ? l * (s + 1) : l + s - l * s;
    var p = 2 * l - q;
    var t;

    // red
    t = h + 1/3;
    if      (t < 0) { t += 1; }
    else if (t > 1) { t -= 1; }
    if      (t < 1/6)  { r = p + (q - p) * t * 6; }
    else if (t < 1/2 ) { r = q; }
    else if (t < 2/3 ) { r = p + (q - p) * (2/3 - t) * 6; }
    else               { r = p; }

    // green
    t = h;
    if      (t < 0) { t += 1; }
    else if (t > 1) { t -= 1; }
    if      (t < 1/6)  { g = p + (q - p) * t * 6; }
    else if (t < 1/2 ) { g = q; }
    else if (t < 2/3 ) { g = p + (q - p) * (2/3 - t) * 6; }
    else               { g = p; }

    // blue
    t = h - 1/3;
    if      (t < 0) { t += 1; }
    else if (t > 1) { t -= 1; }
    if      (t < 1/6)  { b = p + (q - p) * t * 6; }
    else if (t < 1/2 ) { b = q; }
    else if (t < 2/3 ) { b = p + (q - p) * (2/3 - t) * 6; }
    else               { b = p; }
  }

  return [r * 255, g * 255, b * 255];
}

function hsl2hsv(hsl) {
  var h = hsl[0];
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var sv, v;

  if (s === 0) {
    return [h, 0, l * 100];
  }

  if (l === 0) {
    return [h, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsv2rgb(hsv) {
  var h = hsv[0] / 60;
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;

  var hi = Math.floor(h) % 6;

  var f = h - Math.floor(h);
  var p = 255 * v * (1 - s);
  var q = 255 * v * (1 - (s * f));
  var t = 255 * v * (1 - (s * (1 - f)));
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0];
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var sl, l;

  if (s === 0) {
    return [h, 0, v * 100];
  }

  if (v === 0) {
    return [h, 0, 0];
  }

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function grayscale2rgb (value) {
  return [value, value, value];
}

function rgb2grayscale (rgb) {
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}
