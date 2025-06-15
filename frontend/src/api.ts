import { type Task } from "@/models/task.model";


const URL: string = `${import.meta.env.VITE_API_URL}/tasks`;


const getTasks = async (): Promise<Task[]> => {
    // retrieve all tasks
    const initBlock = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const resp: Response = await fetch(URL, initBlock);
    if (!resp.ok) {
        throw new Error('getTasks: Failed to fetch tasks');
    }

    const data: Task[] = await resp.json();

    return data;
};

const deleteTasks = async (id: string): Promise<void> => {
    // delete a task by id
    const initBlock = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const resp: Response = await fetch(`${URL}/${id}`, initBlock);
    if (!resp.ok) {
        throw new Error('deleteTasks: Failed to fetch tasks');
    }
};

const addTasks = async (taskTitle: string, taskDesc: string): Promise<Task> => {
    // add a task
    const initBlock = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: taskTitle,
            description: taskDesc,
        })
    };

    const resp: Response = await fetch(URL, initBlock);
    if (!resp.ok) {
        throw new Error('addTasks: Failed to fetch tasks');
    }

    const data: Task = await resp.json();

    return data;
};

const updateTask = async (id: string): Promise<Task> => {
    // update a task by id
    const initBlock = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const resp: Response = await fetch(`${URL}/${id}`, initBlock);
    if (!resp.ok) {
        throw new Error('updateTask: Failed to fetch tasks');
    }

    const data: Task = await resp.json();

    return data;
};


export {
    getTasks,
    deleteTasks,
    addTasks,
    updateTask,
};
