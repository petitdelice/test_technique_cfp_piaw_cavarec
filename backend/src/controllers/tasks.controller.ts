// request management and response dispatch
// uses services

import { service_createTask, service_getTasks, service_deleteTask, service_updateTask } from '../services/tasks.service';
import { Request, Response } from 'express';
import { Task, TitleDescProps, IdProps } from "../models/task.model";


const createTask = (req: Request<TitleDescProps>, res: Response): void => {
    // create a task
    const { title, description } = req.body;
    
    res.status(200).json(service_createTask(title, description));
};

const getTasks = (req: Request, res: Response): void => {
    // retrieve all tasks
    res.status(200).json(service_getTasks());
};

const deleteTask = (req: Request<IdProps>, res: Response): void => {
    // delete a task
    const { id } = req.params;    

    if (id) {
        const taskDeleted: Task = service_deleteTask(id);        

        if (taskDeleted.id.length !== 0) {
            res.status(200).json(taskDeleted);
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } else {
        res.status(400).json({ error: "Missing task ID" });
    }
};

const updateTask = (req: Request<IdProps>, res: Response): void => {
    // update a task
    const { id } = req.params;

    if (id) {
        const taskUpdated: Task = service_updateTask(id);   

        if (taskUpdated.id.length !== 0) {
            res.status(200).json(taskUpdated);
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } else {
        res.status(400).json({ error: "Missing task ID" });
    }
};


export {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
};
