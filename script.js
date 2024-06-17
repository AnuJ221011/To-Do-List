document.addEventListener("DOMContentLoaded", () => {
    const taskInput=document.getElementById("taskInput");
    const addTaskButton=document.getElementById("addButton");
    const taskList=document.getElementById("taskList");
    const taskGif = document.getElementById("taskGif");

    taskGif.style.display = 'block';

    addTaskButton.addEventListener("click",function(){
        const task=taskInput.value.trim();
        if(task===''){
            alert("Please Enter Your Task");
            return;
        }

        const taskItem =document.createElement("li");
        taskItem.textContent=task;

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        const clickSound = new Audio('clickAdd.mp3');
        clickSound.play();

        deleteButton.addEventListener("click",function(){
            taskList.removeChild(taskItem);
            const delSound = new Audio('clickDelete.mp3');
            delSound.play();
        })

        taskInput.value="";

    })

    

})