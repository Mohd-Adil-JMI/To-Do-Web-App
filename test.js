let input = document.getElementById("input"), btn = document.getElementById("btn");
let listcontainer = document.querySelector(".listcontainer");
var arrJSON;
function getinput() {
    if (input.value != '') {
        return 1;
    }
    else {
        return 0;
    }
}
if (localStorage.getItem("tasks") != null) {
    var arr = JSON.parse(localStorage.getItem("tasks"))
    arr.forEach((element, index) => {
        var item = document.createElement("li");
        var cross = document.createElement("button");
        cross.innerHTML = "x";
        cross.classList.add("cross");
        cross.addEventListener("click", deleteList)
        item.appendChild(cross);
        item.appendChild(document.createTextNode(element));
        item.classList.add("listitem")
        listcontainer.appendChild(item);
        function deleteList() {
            item.style.display = "none";
            arr.splice(index, 1);
            arrJSON = JSON.stringify(arr);
            localStorage.setItem("tasks", arrJSON)
        }
    });
}
else {
    var arr = []
}
function createList() {
    if (getinput()) {
        var item = document.createElement("li");
        var cross = document.createElement("button");
        cross.innerHTML = "x";
        cross.classList.add("cross");
        cross.addEventListener("click", deleteList)
        item.appendChild(cross);
        item.appendChild(document.createTextNode(input.value));
        item.classList.add("listitem")
        listcontainer.appendChild(item);
        arr.push(input.value);
        arrJSON = JSON.stringify(arr);
        localStorage.setItem("tasks", arrJSON)
    }
    function deleteList() {
        item.style.display = "none";
        arr.splice(arr.length-1, 1);
            arrJSON = JSON.stringify(arr);
            localStorage.setItem("tasks", arrJSON)
    }
}
btn.onclick = function () {
    createList();
    input.value = '';
}
function addListonkeypress(e) {
    if (e.which === 13) {
        createList();
        input.value = '';
    }
}
input.addEventListener("keypress", addListonkeypress)
