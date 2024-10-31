//kita belajar localstorage 
document.addEventListener("DOMContentLoaded", () => {
    //variabel form
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    //untuk menambahkan dengan cara di clik 
    addButton.addEventListener('click',addTask);
    //untuk menambahkan dengan cara di enter
    taskInput.addEventListener('keypress',function(e){
        if(e.key === 'Enter') return;
    });

    //function addTask 
    function addTask(){
        //deklarasi variabel 
        const taskText = taskInput.value.trim();
        if (taskText ==="") return; //skip jika nilai nya kosong 
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText; 
        taskList.appendChild(taskItem);

        //savee localstorage 
        saveTaskLocalStorage(taskText);
        //clear inputannya 
        taskInput.value = "";
    }

    //function saveTaskLocalStorage
    function saveTaskLocalStorage(save){
        //menggunakan localstorage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(save);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }



});
