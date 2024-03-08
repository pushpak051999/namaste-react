// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// s(s﹣a)(s﹣b)(s﹣c)
var a = 5;
var b = 6;
var c = 7;

const s = (a + b + c) / 2;
const areaOfTriangle = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

console.log(areaOfTriangle);
