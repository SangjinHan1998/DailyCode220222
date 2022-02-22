var myContainer = 10;

function myFunction()   {
    var myContainer = 'hello'; // 지역변수
    console.log('지역 변수', myContainer);
}

myFunction();
console.log('전역변수', myContainer);

const w = 5 + 10;
console.log(w);

const x = 5 + '10';
console.log(x);

const x2 = 5 + '명';
console.log(x2);

var initial;
console.log(initial);

var myBox = '';
var yourBox = '     ';

console.log(myBox == yourBox);

console.log(typeof myBox, typeof yourBox);