// the logic

import { Task } from "../models/task.model";
import { v4 as uuidv4 } from 'uuid';


// task storage
let tasks: Task[] = [];


const service_createTask = (title: string, description: string): Task => {
  // creating a task
  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status: 'pending',
  };

  tasks.push(newTask);
  
  return newTask;
};

const service_getTasks = (): Task[] => {
  // retrieve all tasks
  return tasks;
};

const service_deleteTask = (id: string): Task => {
  // delete a task
  const taskIndex: number = tasks.findIndex((elt) => elt.id === id);

  if (taskIndex > -1) {
    const task: Task = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    
    return task;
  }

  return {
    id: "",
    title: "error",
    description: "delete",
    status: 'pending',
  };
};

const service_updateTask = (id: string): Task => {
  // update a task
  const taskIndex: number = tasks.findIndex((elt) => elt.id === id);

  if (taskIndex > -1) {
    const task: Task = tasks[taskIndex];

    tasks[taskIndex].status = (task.status === 'pending' ? 'done' : 'pending');
    
    return task;
  }

  return {
    id: "",
    title: "error",
    description: "delete",
    status: 'pending',
  };
};


export {
    service_createTask,
    service_getTasks,
    service_deleteTask,
    service_updateTask,
};
