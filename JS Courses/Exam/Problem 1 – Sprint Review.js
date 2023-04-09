function solve(input) {
    const n = Number(input[0]);

    let assignees  = [];

    for (let index = 1; index <= n; index++) {
       const assignee = input[index].split(':');
        
        const newAssignee = {
            assignee: assignee[0],
            taskId: assignee[1],
            title: assignee[2],
            status: assignee[3],
            estimatedPoints: assignee[4]
        };

        assignees.push(newAssignee);
    }

    for (let index = n + 1; index < input.length; index++) {
        const splittedCommand = input[index].split(':');
        
        if (splittedCommand[0] === 'Add New') {
            const assignee = String(splittedCommand[1]);

            if (!assignees.some(a => a.assignee === assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            assignees.push({
                assignee: assignee,
                taskId: splittedCommand[2],
                title: splittedCommand[3],
                status: splittedCommand[4],
                estimatedPoints: splittedCommand[5]
            });
        }
        else if (splittedCommand[0] === 'Change Status') {
            const assignee = splittedCommand[1];
            const taskId = splittedCommand[2];

            if (!assignees.some(a => a.assignee === assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            if (!assignees.some(a => a.taskId === taskId)) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }

            const indexOfAssignee = assignees.indexOf(a => a.assignee === assignee);
            assignees[indexOfAssignee].status = splittedCommand[3];
        }
        else if (splittedCommand[0] === 'Remove Task') {
            const assignee = splittedCommand[1];
            const indexToRemove = splittedCommand[2];

            if (!assignees.some(a => a.assignee === assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            let currIndex = -1;
            let isItemRemoved = false;
            for (const item of assignees) {
                if (item.assignee === assignee) {
                    currIndex++;
                }

                if (currIndex === Number(indexToRemove)) {
                    for (let i = 0; i < assignees.length; i++) {
                        if (assignees[i].taskId === item.taskId) {
                            assignees.splice(i, 1);
                            isItemRemoved = true;
                            break;
                        }
                    }
                    break;
                }
            }

            if (!isItemRemoved) {
                console.log('Index is out of range!');
                continue;
            }
        }
    }

        let toDoPoints = 0;
        let inProgressPoints = 0;
        let codeReviewPoints = 0;
        let donePoints = 0;
        for (const item of assignees) {
            if (item.status === 'ToDo') {
                toDoPoints += Number(item.estimatedPoints);
            }
            else if (item.status === 'In Progress') {
                inProgressPoints += Number(item.estimatedPoints);
            }
            else if (item.status === 'Code Review') {
                codeReviewPoints += Number(item.estimatedPoints);
            }
            else if (item.status === 'Done') {
                donePoints += Number(item.estimatedPoints);
            }
        }

        console.log(`ToDo: ${toDoPoints}pts`);
        console.log(`In Progress: ${inProgressPoints}pts`);
        console.log(`Code Review: ${codeReviewPoints}pts`);
        console.log(`Done Points: ${donePoints}pts`);

        if (toDoPoints + inProgressPoints + codeReviewPoints <= donePoints) {
            console.log('Sprint was successful!');
        }
        else {
            console.log('Sprint was unsuccessful...');
        }
}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
);