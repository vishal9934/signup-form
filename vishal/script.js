// var sum=function x(a){

// function y(b){
//     return a+b;
// }
// return y;

// function z(c){
//     return a-b;
// }
// return z;
// }
// var ans= sum(2);
// console.log(ans(5)); 
// console.log(ans.z()); //this is a example of closure
   

// how to display key and value pair in seperatate line

//create new user object
// var user={
//     name:"vishal",
//     age:23
// }
// //here access keys onli
// var userkey=Object.keys(user);
// //now create new object
// var updatedUser={};
// //now iterate each value
// userkey.forEach(function (key,k){
//     //updatedUser[user[key]]=key;
//     console.log(user[key],key);
// })


// call

var userDetails={
    name:"vishal",
    age:23,
    salary:15000,
}
printDetails=function (){
    console.log(this.name);
}

var userDetails2={
    name:"ram",
    age:23,
    salary:15000,
}

printDetails.call(userDetails);

//function borrowing
printDetails.call(userDetails2);
