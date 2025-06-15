import { LoadingSkeleton } from '@/components/MySkeleton';
import { type TasksWrapperProps } from '@/props/AllProps';

import { type JSX } from 'react';
import { TaskCreator } from '@/components/task/TaskCreator';
import { TaskList } from '@/components/task/TaskList';


const TasksWrapper = ({ isFetched, fetchErr, tasks, setTasks }: TasksWrapperProps): JSX.Element => {
    // select the right object to display
    if (!isFetched) {
        return (
            <LoadingSkeleton />
        );
    }

    if (!fetchErr) {
    return (
        <div className="grid m-[50px] place-items-center space-y-5">
            <TaskCreator tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </div>
    );
    } else {
        return (
            <div className="grid m-[200px] place-items-center">
                <h1>
                    An error occured while fetching data.
                </h1>
                <h2>
                    Please make sure you are connected to the internet.
                </h2>
            </div>
        );
    }
};


export {
    TasksWrapper,
};
