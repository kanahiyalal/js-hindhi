// primitive 
// 7-types :string,int,float,boolean,number,null,undefined,symbol,BigInt     //call by value
//symbol kisi bhi chez ko unique banana ka leya symbol use keya jata ha

const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null
let userEmail;
const id = symbol('123')
const anotherId = symbol('123')
console.log(id === anotherId);

const BigNumber = 1234463827289779789n


//reference type (non-primitive)
//array,objects,functions

const heeros = ["saalmankhn" , "sharukhkhan", "saktiman"]
let myObj = {
    name: "kanahiya",
    age : 20,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof BigNumber);



//***********************************************************************************
//memory 
//Two types of memory
//1.Stach(primitive) , 2.Heap(non-primitive)
let myYoutubeName = "kanahiya soni"
let anotherName = myYoutubeName
anotherName = "narseeghani"
console.log(anotherName);

let userOne ={
    email : "kanahiya@gmail.com",
    upi : "user@ybl",
}
let userTwo = userOne
userTwo.email = "kanahiya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


