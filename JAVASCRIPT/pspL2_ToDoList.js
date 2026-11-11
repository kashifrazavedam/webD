let taskInput=document.getElementById("taskInput")
let addBtn=document.getElementById("addBtn")
let taskList=document.getElementById("taskList")

addBtn.addEventListener("click",function(){
    let task=taskInput.value;
    if(task===""){
        alert("enter your task...")
        return;
    }
    let li=document.createElement("li")
    li.textContent=task;

    let deleteBtn=document.createElement("button")
    deleteBtn.textContent='delete'
    deleteBtn.classList='deleteBtn'

    deleteBtn.addEventListener("click",function(){
        li.remove();
    })

    taskList.appendChild(li)
    li.appendChild(deleteBtn)
})