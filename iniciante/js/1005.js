const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());

const media = (a * 3.5 + b * 7.5) / 11.0;

console.log("MEDIA = " + media.toFixed(5))