const accountId = 1255;
let accountName = "Rayhan ahemd";
var accountPass = "2687";
let accountState;

accountCity = "Dhaka";

/*
Prefer to not use var,
because its create issues in block scope and functional scope
*/
accountId = 5878;
accountName = "Rifat ahmed";
accountPass = "5897";
console.table([accountId, accountName, accountPass, accountState]);
