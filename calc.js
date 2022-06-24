var num1 = window.prompt("enter the first number");
var op = window.prompt("enter an operator + - / * ");
var num2 = window.prompt("enter the second number");

num1 = parseFloat(num1)
num2 = parseFloat(num2)

if(op == '+'){
    document.write(num1 + num2)
}
else if(op == '-'){
    document.write(num1 - num2)
}
else if(op == '*'){
    document.write(num1 * num2)
}
else if(op == '/'){
    document.write(num1 / num2)
}