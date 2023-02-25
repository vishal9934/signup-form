         //for each loop== void .it doesnt return anything

// var nums=[1,2,3,4,5]
//  var output =nums.forEach(function(value,index){
//     var sq=value*value;
//     nums[index]=sq;
//     console.log(sq);
//  });
//  console.log(nums)
//  console.log(output)
 
// //            map its a loop

// var output =nums.map(function(value){
//     var sq=value*value;
//     return sq;
//  });
//  console.log(output)
 
 //        splice is used to delete items from array

//  var nums=[1,2,3,6,5,8];
//  nums.splice(2,1); //here 2 is index of array and 1 is how many item to delete
//  console.log(nums)

//  nums.splice(1,3); // it delete the array from index 1 to 3.
//  console.log(nums)

//      objects

// var books={};
// books.name="rd dharma";
// books.price=1022
// books["release year"]=2007

// console.log(books.price)

// delete books["name"]; //delete 
// console.log(books)

// var key=Object.keys(books)
// console.log(key);

// var obj=Object.create(null);
// console.log(obj);

// console.log(new Object())


function x(){
    var a=55;
    function y(){
     console.log(a);
    }
    return y;
   }
   
   var f=x();
   console.log(f);