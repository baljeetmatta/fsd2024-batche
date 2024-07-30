//Assign 1
// let input1=document.querySelector("#input1");
// let input2=document.querySelector("#input2");
// let result=document.querySelector("#result");
// let addbtn=document.querySelector("#addbtn");
// addbtn.addEventListener("click",clickHandler)
// function clickHandler()
// {
//     let operand1=parseInt(input1.value);
//     let operand2=parseInt(input2.value);
//     let add=operand1+operand2;
//     result.value=add;

// }
//ASSIGN 2

// let digits=document.querySelector("#digits");
// // let btn1=document.querySelector("#btn1");
// // let btn2=document.querySelector("#btn2");
// // let btn3=document.querySelector("#btn3");

// // btn1.addEventListener("click",clickHandler);
// // btn2.addEventListener("click",clickHandler);
// // btn3.addEventListener("click",clickHandler);
// let operand1=0;
// let operator="";
// let isNew=false;

// let elements=document.querySelectorAll(".btns");
// elements.forEach(function(element){
//     element.addEventListener("click",clickHandler);
// })


// let operations=document.querySelectorAll(".operations");
// operations.forEach(function(element){
//     element.addEventListener("click",operationHandler);
// })

// function operationHandler(e){

//     let target=e.target;
//     if(target.innerText=="+")
//     {
//         operand1=parseInt(digits.innerText);
//         operator="+";
//         isNew=true;


//     }
//     if(target.innerText=="=")
//     {
//         if(operator=="+")
//         {
//             let operand2=parseInt(digits.innerText);
//             let add=operand1+operand2;
//             digits.innerText=add;
            
//         }
//     }

// }

// function clickHandler(e)
// {
//     let target=e.target;
//     if(digits.innerText=="0")
//         digits.innerText="";
//     if(isNew==true)
//     {
//         digits.innerText="";
//         isNew=false;

//     }


//     digits.innerText=digits.innerText+target.innerText;

// }

//ASSIGN 3
let taskname=document.querySelector("#taskname");
let taskList=document.querySelector("#taskList");
let tasks=[];
let id=1;
taskname.addEventListener("keypress",function(e){
    if(e.key=="Enter")
    {
       // tasks.push(taskname.value);
        let obj={};
        obj.title=taskname.value;
        obj.status='Pending';
        obj.id=id;
        id++;
        tasks.push(obj);
        addDom(obj);
        setLocalStorage();
        taskname.value='';
        console.log(tasks);


    }
    //    console.log("Enter pressed");

    //console.log(e);

})
function addDom(task)
{
    // let li=document.createElement("li");
    // li.innerText=taskname.value;
    // taskList.append(li);
    let taskdiv =document.createElement("div");

    let span=document.createElement("span");
    span.innerText=task.title;//taskname.value;

    let chk=document.createElement("input");
    chk.setAttribute("type","checkbox");
    chk.addEventListener("click",function(){
        //console.log(chk.checked);
        let newstatus="";
        if(chk.checked)
        {
            newstatus="Completed";
            span.style.textDecoration="line-through";
        }
        else
        {
            newstatus="Pending";
            span.style.textDecoration="none";

        }


        tasks=tasks.map(function(item){

            if(item.id==task.id)
                item.status=newstatus;
            return item;
        })
        setLocalStorage();
        console.log(tasks);

    })

    let delbtn=document.createElement("button");
    delbtn.innerText="Del";
    delbtn.addEventListener("click",function(){
        taskdiv.remove();
        tasks=tasks.filter(function(item){
            if(item.id!=task.id)
                return true;
        })
        console.log(tasks);
        setLocalStorage();


    })
   // delbtn.addEventListener("click",clickHandler);


    taskdiv.append(span);
    taskdiv.append(chk);
    taskdiv.append(delbtn);

    
    taskList.append(taskdiv);





}
function clickHandler(e)
{
    e.target.parentNode.remove();


}
function setLocalStorage()
{
    localStorage.setItem("tasks",JSON.stringify(tasks));

    /*
    //let sample=["one","two"];
let sample=[{'name':'test'}]
    //localStorage.setItem("Name","Code");
    localStorage.setItem("items",JSON.stringify( sample));
    //document.write(sample);
    let data=localStorage.getItem("items");
    let items=JSON.parse(data);

    console.log(items[0]);
    */

}
//setLocalStorage();
function getLocalStorage()
{

   // tasks=JSON.parse(localStorage.getItem("tasks"));

    tasks=(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]);
    console.log(tasks);
   tasks.forEach(element => {
    addDom(element);

   });

}
getLocalStorage();
