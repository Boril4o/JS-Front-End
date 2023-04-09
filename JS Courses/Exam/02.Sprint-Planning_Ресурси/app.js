window.addEventListener('load', solve);

function solve() {
    const crtTaskBtn = document.getElementById('create-task-btn');
    const totalPoints = document.getElementById('total-sprint-points');
    let pointsCount = 0;
    const deletebtnElement = document.getElementById('delete-task-btn');

    let taskCount = 0;

    crtTaskBtn.addEventListener('click', createTask);
    deletebtnElement.addEventListener('click', deleteTask);

    function createTask(event) {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let label = document.getElementById('label').value;
        let points = document.getElementById('points').value;
        let assignee = document.getElementById('assignee').value;

        if (title === "" || description === "" || label === "" || points === "" || assignee === "") {
            return;
        }
        
        let article = document.createElement('article');
        article.id = `task-${++taskCount}`;
        article.className = 'task-card';

        let labelClass = 'feature';
        let icon = '&#8865';
        if (label === 'Low Priority Bug') {
            labelClass = 'low-priority';
            icon = '&#9737';
        }
        else if (label === 'High Priority Bug') {
            labelClass = 'high-priority';
            icon = '&#9888';
        }

        let divLabel = document.createElement('div');
        divLabel.className = `task-card-label ${labelClass}`;
        divLabel.innerHTML = `${label} ${icon}`;
        article.appendChild(divLabel);

        let h3 = document.createElement('h3');
        h3.textContent = title;
        h3.className = 'task-card-title';
        article.appendChild(h3);

        let p = document.createElement('p');
        p.textContent = description;
        p.className = 'task-card-description';
        article.appendChild(p);

        let divPoints = document.createElement('div');
        divPoints.textContent = `Estimated at ${points} pts`;
        divPoints.className = 'task-card-points';
        article.appendChild(divPoints);
        pointsCount += Number(points);
        totalPoints.textContent = `Total Points ${pointsCount}pts`;

        let divAssignee = document.createElement('div');
        divAssignee.textContent = `Assigned to: ${assignee}`;
        divAssignee.className = 'task-card-assignee';
        article.appendChild(divAssignee);

        let divAction = document.createElement('div');
        divAction.className = 'task-card-actions';

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', loadDelete);
        divAction.appendChild(deleteBtn);
        article.appendChild(divAction);

        let tasks = document.getElementById('tasks-section');
        tasks.appendChild(article);

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('label').value = 'Feature';
        document.getElementById('points').value = '';
        document.getElementById('assignee').value = '';
    }

    function loadDelete(event) {
        let taskId = event.target.parentNode.parentNode.id;
        let task = document.getElementById(taskId);
        
        let label = task.getElementsByClassName('task-card-label')[0].innerHTML.split(' ')[0];
        if (label === 'Low') {
            label = 'Low Priority Bug';
        }
        else if (label === 'High') {
            label = 'High Priority Bug';
        }
        let title = task.getElementsByClassName('task-card-title')[0].textContent;
        let description = task.getElementsByClassName('task-card-description')[0].textContent;
        let points = task.getElementsByClassName('task-card-points')[0].textContent.split(' ')[2];
        let assignee = task.getElementsByClassName('task-card-assignee')[0].textContent.split(' ')[2];

        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        console.log(label);
        document.getElementById('label').value = label;
        document.getElementById('points').value = points ;
        document.getElementById('assignee').value = assignee;
        document.getElementById('task-id').value = taskId;

        let delBtn = document.getElementById('delete-task-btn');
        delBtn.disabled = false;

        let ctrBtn = document.getElementById('create-task-btn');
        ctrBtn.disabled = true;

        document.getElementById('title').disabled = true;
        document.getElementById('description').disabled = true;
        document.getElementById('label').disabled = true;
        document.getElementById('points').disabled = true ;
        document.getElementById('assignee').disabled = true;
    }

    function deleteTask(event) {
        const taskId = document.getElementById('task-id').value;
        
        let tasks = document.getElementsByClassName('task-card');
        for (const task of tasks) {
            if (task.id === taskId) {
                let pointsText = task.getElementsByClassName('task-card-points')[0].textContent;
                let points = pointsText.split(' ')[2];
                pointsCount -= Number(points);
                totalPoints.textContent = `Total Points ${pointsCount}pts`;
                document.getElementById('tasks-section').removeChild(task);
            }
        }

        document.getElementById('title').disabled = false;
        document.getElementById('description').disabled = false;
        document.getElementById('label').disabled = false;
        document.getElementById('points').disabled = false ;
        document.getElementById('assignee').disabled = false;
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('label').value = 'Feature';
        document.getElementById('points').value = '';
        document.getElementById('assignee').value = '';
        let delBtn = document.getElementById('delete-task-btn');
        delBtn.disabled = true;

        let ctrBtn = document.getElementById('create-task-btn');
        ctrBtn.disabled = false;
    }
}