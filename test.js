let input=document.getElementById("input"),btn=document.getElementById("btn");
let listcontainer=document.querySelector(".listcontainer");

function getinput(){
    if(input.value!=''){
        return 1;
    }
    else{
        return 0;
    }
}
function createList(){
    if(getinput()){
        var item=document.createElement("li");
        var cross=document.createElement("button");
        cross.innerHTML="x";
        cross.classList.add("cross");
        cross.addEventListener("click",deleteList)
        item.appendChild(cross);
        item.appendChild(document.createTextNode(input.value));
        item.classList.add("listitem")
        listcontainer.appendChild(item);
    }
    function deleteList(){
        item.style.display="none";
    }
}
btn.onclick=function(){
    createList();
    input.value='';
}
function addListonkeypress(e){
    if (e.which===13) {
        createList();
        input.value='';
    }
}
input.addEventListener("keypress",addListonkeypress)