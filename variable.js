const accountId = 1234
let accountEmail = "kanahiya@gmail.com"
var accountPassword = "12345"
accountCity = "khipro"
// accountId = 2 not allowed 
accountEmail = "kanu@gmail.com"
accountPassword = "4311"
accountCity = "karachi"
let accountState;           //this is undefined
console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity , accountState]);

//prefer not yo use var
//because of issue in block scope and functional scope


