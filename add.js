

var num1 = parseInt(prompt("첫번쨰 숫자는?"));
var num2 = parseInt(prompt("두번째 숫자는?"));
addNumber(num1, num2);

function addNumber(a, b){
    var sum = a + b;
    alert("두 수를 더한값은" + sum + "입니다.");
}