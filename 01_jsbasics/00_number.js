// Number es un dato primitivo

const num = 42;
console.log(num);
const float = 42.42;
console.log(float);
const neg = -42;
console.log(neg);
const negFloat = -42.42;
console.log(negFloat);
const inf = Infinity;
console.log(inf);
const negInf = -Infinity;
console.log(negInf);
const nan = NaN;
console.log(nan);
const bigInt = 9007199254740991n;
console.log(bigInt);

//float to int
const floatToInt = parseInt(float);

//int to float
const intToFloat = parseFloat(num);
const intToFloat2 = Number(num);
const intToFloat3 = num * 1.0;
const intToFloat4 = num / 1;

//int or float to string
const intToString = num.toString();
const intToString2 = String(num);
const intToString3 = `${num}`;
const intToString4 = '' + num;

//string to int or float
const stringToInt = parseInt('42');
const stringToFloat = parseFloat('42.42');
const stringToFloat2 = Number('42.42');
const stringToFloat3 = '42.42' * 1.0;
const stringToFloat4 = '42.42' / 1;
