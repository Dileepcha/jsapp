var c = "hello";
const a = "5";
let b = 5;
b = 10;
const e =5;

const arr = [1, 3, 4, 5, "hello"];


// console.log("line 1");
// setTimeout(function() {
//   console.log("line 2");
// },1000)
// console.log("line 3");
// console.log("line 4");
for(let i = 0; i < arr.length;i++) {
  console.log(arr[i]);
}
console.log(arr);
if(a === 5){
  console.log("correct")
} else {
  console.log("wrong!")
}

// let v = document.getElementById("value");
// v.innerHTML="fjdfhbdjhgbjhb"
// console.log(v);


function showAdd() {
  const value1 = parseInt(prompt("Enter the value"));
  const value2 = parseInt(prompt("enter the value2"));
  alert(value1 + value2);
}
