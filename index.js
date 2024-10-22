const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");


function addTask()
{
    if(inputBox.value ==='') {
        alert("You must write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    // Corrected typo: e.targer → e.target
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle 'checked' class
    }
    // Corrected typo: e.targer → e.target
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the parent 'li' element
    }
}, false);
