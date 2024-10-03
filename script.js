function task1() {
    let num1 = document.getElementById("task1.1").value;
    let num2 = document.getElementById("task1.2").value;
    document.getElementById("task1.1").value = pow(num1, num2);
}
function pow(x, y) {
    if (y == 0) {
        return 1
    }
    else if(y < 0){
        return 1/ (x * pow(x, -y-1))
    }
    else{
        return x * pow(x, y-1)
    }
}
function task2() {
    let num1 = document.getElementById("task2.1").value;
    let num2 = document.getElementById("task2.2").value;
    
    document.getElementById("task2.1").value = NOD(num1, num2);

}
function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}
function task3 () {
    let num = document.getElementById("task3").value;
    document.getElementById("task3").value = minDigit(num)
}
function minDigit(num){
    str = String(num).split('')
    min = 10
    for (let i = 0; i < str.length; i++){
        if (str[i] < min){
            min = str[i]
        }
    }
    return min
}
function task4 () {
    let num = document.getElementById("task4").value; 
    document.getElementById("task4answer").innerHTML = pluralize(num)
}

function pluralize(num) {
    if(num % 10 == 1 && num % 100 != 11){
        return "В результате запроса была получена " + num + " запись"
    }
    else if((num % 10 == 2 || num % 10 == 3 || num % 10 == 4) && (num % 100 != 12 || num % 100 != 13 || num % 100 != 14)){
        return "В результате запроса было получено " + num + " записи"
    }
    else if(num % 10 == 0 || (num % 10 == 5 || num % 10 == 6 || num % 10 == 7 || num % 10 == 8 || num % 10 == 9) || (num % 100 == 12 || num % 100 == 13 || num % 100 == 14 || num % 100 == 11)){
        return "В результате запроса было получено " + String(num) + " записей"  
    }
}
function task5(){
    let num = document.getElementById("task5").value;
    document.getElementById("task5").value = fib(num)
}

function fib(num) {
    if (num < 2) {
        return num;
      }
      return fib(num - 1) + fib(num - 2);
}