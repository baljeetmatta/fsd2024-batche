// 1. Create an object
// 2. Preprare (Method,URL)
//3. event--load
//4. Send

// let request=new XMLHttpRequest();//1
// request.open("GET","../data.json")//2
// // request.onload=function()
// // {

// // }
// //3
// request.addEventListener("load",function(){
//     let data=JSON.parse(request.responseText);

//     console.log(data);

// })
// //4
// request.send();

// XMLHttpRequest request=new XMLHttpRequest();

// let request=new XMLHttpRequest();
// request.open("GET","https://reqres.in/api/users?page=2");
// request.addEventListener("load",function(){
//     if(request.status==200)
//     {
//         let result=JSON.parse(request.responseText);
//         console.log(result.data);
//     }
//     else
//     console.log("Invalid response");

// })
// request.send();

//SENDING DATA USING GET METHOD
// let request=new XMLHttpRequest();
// request.open("GET","http://reqres.in/api/users?delay=3000");
// request.addEventListener("load",function(){
  
//     console.log(request.responseText);

// })
// request.send("&delay=100")
//SENDING METHOD USING POST
// let request=new XMLHttpRequest();
// request.open("POST","https://reqres.in/api/users");
// request.onreadystatechange=function()
// {
//     console.log(request.readyState);
//         if(request.readyState==4)
//             console.log(request.responseText);


// }
// request.addEventListener("load",function(){
//     console.log(request.responseText);

// })
// request.setRequestHeader("content-type","application/json");

// let obj={};
// obj.name="TestName";
// obj.job="Test Job";
// request.send(JSON.stringify(obj));

// let no1=10;
// let prom=new Promise(function(resolve,reject){

//     if(no1%2==0)
//         resolve(no1);
//     else
//     reject();

// });


// prom.then(function(no1){
//     console.log("Eve No ",no1)
// }).catch(function(){
//     console.log("Not a even")
// })

// let prom=fetch("../data.json");
// prom.then(function(data){
//     //console.log(data);
//     return data.json();

// }).then(function(jsondata){
//     console.log(jsondata);

// })
// function data(){

// }
// let data=()=>{

// }

// fetch("../data.json").then((data)=>{
//     return data.json();
// }).then((jsondata)=>{
//     console.log(jsondata);
// })
async function getData()
{
//     fetch("../data.json").then((data)=>{
//     return data.json();
// }).then((jsondata)=>{
//     console.log(jsondata);
// })

let obj={}
obj.name="Code";
 let data=await fetch("../data.json",{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        "Content-Type":"application/json"
    }
 });
 let response=await data.json();
console.log(response);

}
getData();
