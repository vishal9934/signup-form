// /** @format */

// let arr = [
//     { id: 1, name: "john", age: "18", marks: 80 },
//     { id: 2, name: "jack", age: "20", marks: 85 },
//     { id: 3, name: "karen", age: "19", marks: 35 },
//   ];
  
//   function PrintStudentswithMap() {
//     //Write your code here , just console.log
//     arr.map(arr => {
//         if (arr.marks > 50) {
//           console.log(arr);
//         }
//       }); 
//   }
  
//   function PrintStudentsbyForEach() {
//     //Write your code here , just console.log
//     arr.forEach(data => {
//         if (data.marks > 50) {
//             console.log(data);
//           }
//     })
//   }
  
//   function addData() {
//     //Write your code here, just console.log
//     let obj = {id:4,name:"susan",age:"20",marks:45};
//   arr.push(obj);
//   console.log(arr);
//   }
  
//   function removeFailedStudent() {
//     //Write your code here, just console.log
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i].marks <= 50){
//           arr.splice(i, i + 1);
//         }
//       }
//       console.log(arr);
//   }
  
//   function concatenateArray() {
//     //Write your code here, just console.log
//     let ids = arr.length;
//     let arr1 = [
//       { id: ids + 1, name: "vishal", age: "22", marks: 10 },
//       { id: ids + 2, name: "neha", age: "28", marks: 11 },
//       { id: ids + 3, name: "bbbb", age: "24", marks: 100 },
//     ];
//     let array = arr.concat(arr1);
//     console.log(array)
//   }
   // let arr=[2,5,3,6,8];

   // function sum(arr){
   // let sum=0;
   // for(let i=0;i<arr.length;i++){
   //  sum+=arr[i];
   // }
   // return sum;
   // }
   // console.log(sum(arr))

   
  //  function double(x){
  //   return x*2;
  //  }
  //  let output=arr.map((double) =>{
  //   return double*2;
  //  });
  //  console.log(double);

//   function a(){
//    var b=10;
//    c();
//    function c(){
//       console.log(b);
//    }
//   }
//   a();
//   console.log(b)

  function x(){
   var a=55;
   function y(){
    console.log(a);
   }
   return y;
  }
  
  var f=x();
  console.log(f);
  