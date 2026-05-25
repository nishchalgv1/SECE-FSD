interface Task{
    title: string, 
    id: number, 
    isCompleted: boolean,
    priority?: "Low" | "Medium" | "High"
}

// create the empty array
const tasks : Task[] = [];

function addTask(task: Task) : void{
    tasks.push(task);
    console.log("Task added successfully");
}

function showTasks() : void{
    console.log("All Tasks are: ----\n");
    console.log(tasks);
}

// function deleteTask(id: number) : void{
//     // filter method in order to remove the task
// }

// function searchTaskwithId() : Task{

// }

// function updateTask(){}

const task:Task = {
    title: "Learn Typescript",
    id: 1,
    isCompleted: true,
}

const task1:Task = {
    title: "Learn Javascript",
    id: 2,
    isCompleted: true,
}

addTask(task);
addTask(task1);

showTasks();