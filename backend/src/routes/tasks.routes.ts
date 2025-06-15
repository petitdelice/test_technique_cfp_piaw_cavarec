// les endpoints

import express, { Router } from 'express';
import { createTask, getTasks, deleteTask, updateTask } from '../controllers/tasks.controller';


const tasksRouter: Router = express.Router();


// [GET] http://.../tasks -> task return controller
tasksRouter.get('/', getTasks);

// [POST] http://.../tasks -> task creation controller
tasksRouter.post('/', createTask);

// [DELETE] http://.../tasks/:id -> task deletion controller
tasksRouter.delete('/:id', deleteTask);

// [PATCH] http://.../tasks/:id -> task update controller
tasksRouter.patch('/:id', updateTask);


export default tasksRouter;
