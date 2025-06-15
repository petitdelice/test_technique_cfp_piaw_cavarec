import { Button } from '@/components/ui/button';

import { type Task, type TaskStatus } from '@/models/task.model';
import { deleteTasks, updateTask } from '@/api';
import { type TaskProps } from '@/props/AllProps';
import { CopmleteBtnWrapper } from '@/components/task/CopmleteBtnWrapper';

import { useState, type JSX } from 'react';
import toast from 'react-hot-toast';


const TaskComp = ({ task, tasks, setTasks }: TaskProps): JSX.Element => {
    const [isDone, setIsDone] = useState<boolean>(task.status === 'done');

    const handleDelete = async (): Promise<void> => {
        // delete a task
        try {
            await deleteTasks(task.id);

            let updatedTasks: Task[] = tasks.slice();
            const index: number = updatedTasks.findIndex((elt) => elt.id === task.id);

            updatedTasks.splice(index, 1);

            setTasks(updatedTasks);
        } catch {
            toast.error('Error while deleting the task');
        }
    };

    const handleUpdate = async (): Promise<void> => {
        try {
            // complete/undo a task
            await updateTask(task.id);

            const status: TaskStatus = task.status === 'done' ? 'pending' : 'done';

            setIsDone(status === 'done');
            task.status = status;
        } catch {
            toast.error('Error while updating the task');
        }
    };

    return (
        <div className="flex justify-between items-center px-4 py-2 my-3 gap-4 border rounded-md shadow-sm max-w-md w-full">
            <div className="flex-1 overflow-hidden">
                <h2 className={isDone ? 'line-through font-bold break-words' : 'font-bold break-words'}>
                    {task.title}
                </h2>
                <h3 className="break-words whitespace-normal">
                    {task.description}
                </h3>
            </div>
            <div className="flex flex-line gap-2">
                <Button variant="destructive" onClick={handleDelete}>
                    Delete
                </Button>
                <CopmleteBtnWrapper
                    isDone={isDone}
                    handleUpdate={handleUpdate}
                />
            </div>
        </div>

    );
};


export {
    TaskComp,
};
