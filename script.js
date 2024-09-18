const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value.trim()===''){
     alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    listcontainer.appendChild(li);
    inputBox.value='';
    saveData();
    }
}
    listcontainer.addEventListener("click", function(e){
        if(e.target.tagName ==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName ==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false);

    function saveData(){
        localStorage.setItem("data" , listcontainer.innerHTML);
    }
    function showTask(){
        const savedData = localStorage.getItem("data");
    if (savedData) {
        listcontainer.innerHTML = savedData;
    }
    }
    document.addEventListener("DOMContentLoaded", showTask);