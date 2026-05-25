interface Task{
    title: string, 
    id: number, 
    isCompleted: boolean,
    priority: "Low" | "Medium" | "High"
}

// create the empty array
const tasks : Task[] = [];

function addTask() : void{

    console.log("Task added successfully");
}

function showTasks() : void{

}

function deleteTask(id: number) : void{
    // filter method in order to remove the task
}

// function searchTaskwithId() : Task{

// }