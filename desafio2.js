//Inverter uma String: implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.

var str = "guilherme"
var inv = "";
var i = str.length -1
while (i>= 0){
    inv = inv + str[i];
    i--;
}
console.log(inv);
