
//Rapocount
const name = "kanahiya"
const rapoCount = 50
// console.log(name + rapoCount + "value");
// console.log(`hello my  name is ${name} and my rapo count is ${rapoCount}`);


//proto  
const gameName = new String ("kanahiya soni");
console.log(gameName[0]);
console.log(gameName.__proto__);



//length , touppercase, charAt, indexOf
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt());
console.log(gameName.indexOf('n'));


//substring
const newString = gameName.substring(0,4)
console.log(newString);

//slice  
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

//trim
const newStringOne = "    kanahiya  "
console.log(newStringOne);
console.log(newStringOne.trim());

//url 
const url= ("https://www.youtube.com/watch?v=sscX432bMZo&t=8067s")
console.log(url.replace('%20' , '-'));
console.log(url.includes('kanahiya'));
console.log(gameName.split('-'));











