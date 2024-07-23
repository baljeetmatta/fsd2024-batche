// let mypara=document.querySelector("#mypara");
// //mypara.setAttribute("class","x");
// //mypara.classList.toggle("x")
// //mypara.classList.toggle("y");
// //mypara.style.backgroundColor="gray"
// let attr="backgroundColor";
// //mypara.style.attr="gray";
// mypara.style[attr]="gray";
function test(event)
{
    console.log("Para clicked");
    console.log(event);

    if(event.target==cpara)
        event.target.style.backgroundColor="red";

    //console.log(event.target.parentNode)

}
let cpara=document.querySelector("#cpara");
cpara.addEventListener("click",test);

let btn=document.querySelector("#btn");
btn.addEventListener("click",clickHandler);

let delbtn=document.querySelector("#delbtn");
delbtn.addEventListener("click",deleteHandler);

let parent=document.querySelector("#parent");


function clickHandler()
{
    let p=document.createElement("p");
    p.innerHTML="Sample new Para";
    p.setAttribute("id","p1");

    parent.append(p);


    

}
function deleteHandler()
{
    let p1=document.querySelector("#p1");
    //parent.remove(p1);
    p1.remove();

}
