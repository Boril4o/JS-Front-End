// TODO:
function attachEvents() {
    const loadBtn = document.getElementById('load-board-btn');
    const createTaskBtn = document.getElementById('create-task-btn');

    loadBtn.addEventListener('click', loadData);
    createTaskBtn.addEventListener('click', addTask);

    function loadData(event) {
        event?.preventDefault();
        document.querySelectorAll('#todo-section .task-list')[0].innerHTML = '';
        document.querySelectorAll('#in-progress-section .task-list')[0].innerHTML = '';
        document.querySelectorAll('#code-review-section .task-list')[0].innerHTML = '';
        document.querySelectorAll('#done-section .task-list')[0].innerHTML = '';

        fetch('http://localhost:3030/jsonstore/tasks/')
            .then(res => res.json())
            .then(data => {
                let tasksRes = Object.values(data);
                for (const {title, description, status, _id} of tasksRes) {
                    let li = document.createElement('li');
                    li.className = 'task';
                    li.id = _id;

                    let h3 = document.createElement('h3');
                    h3.textContent = title;

                    let p = document.createElement('p');
                    p.textContent = description

                    li.appendChild(h3);
                    li.appendChild(p);
                    li.appendChild(p);

                    let btn = document.createElement('button');
                    

                    if (status === 'ToDo') {
                        btn.textContent = 'Move to In Progress';
                        btn.addEventListener('click', moveTask);
                        li.appendChild(btn);
                        let taskList = document.querySelectorAll('#todo-section .task-list');
                        taskList[0].appendChild(li);
                    }
                    else if (status === 'In Progress') {
                        btn.textContent = 'Move to Code Review';
                        btn.addEventListener('click', moveTask);
                        li.appendChild(btn);
                        let taskList = document.querySelectorAll('#in-progress-section .task-list');
                        taskList[0].appendChild(li);
                    }
                    else if (status === 'Code Review') {
                        btn.textContent = 'Move to Done';
                        btn.addEventListener('click', moveTask);
                        li.appendChild(btn);
                        let taskList = document.querySelectorAll('#code-review-section .task-list');
                        taskList[0].appendChild(li);
                    }
                    else {
                        btn.textContent = 'Close';
                        btn.addEventListener('click', closeTask);
                        li.appendChild(btn);
                        let taskList = document.querySelectorAll('#done-section .task-list');
                        taskList[0].appendChild(li);
                    }
                }
            });
    }

    function addTask(event) {
        let title = document.getElementById('title');
        let description = document.getElementById('description');

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                status: 'ToDo'
            })
        };

        fetch('http://localhost:3030/jsonstore/tasks/', httpHeaders)
            .then(() => {
                loadData();
                title.value = '';
                description.value = '';
            });
    }

    function moveTask(event) {
        let taskId = event.target.parentNode.id;
        let status;
        let taskData;

        fetch(`http://localhost:3030/jsonstore/tasks/${taskId}`)
            .then(data => data.json())
            .then(res => {
                let task = Object.values(res);
                taskData = task;
                status = task[2];

                if (status === 'ToDo') {
                    status = 'In Progress';
                }
                else if (status === 'In Progress') {
                    status = 'Code Review';
                }
                else if (status === 'Code Review') {
                    status = 'Done';
                }

                const httpHeaders = {
                    method: 'PATCH',
                    body: JSON.stringify({
                        title: taskData[0],
                        description: taskData[1],
                        status: status,
                        _id: taskId
                    })
                };
        
                fetch(`http://localhost:3030/jsonstore/tasks/${taskId}`, httpHeaders)
                    .then(() => {
                        loadData();
                    })
            })
    }

    function closeTask(event) {
        let taskId = event.target.parentNode.id;

        fetch(`http://localhost:3030/jsonstore/tasks/${taskId}`)
            .then(data => data.json())
            .then(res => {
                let task = Object.values(res);

                const httpHeaders = {
                    method: 'DELETE',
                    body: JSON.stringify({
                        title: task[0],
                        description: task[1],
                        status: task[2],
                        _id: taskId
                    })
                };

                fetch(`http://localhost:3030/jsonstore/tasks/${taskId}`, httpHeaders)
                    .then(() => {
                        loadData();
                    })
            })
    }
}

attachEvents();