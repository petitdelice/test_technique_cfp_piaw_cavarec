import { type TaskListProps } from '@/props/AllProps';

import { v4 as uuidv4 } from 'uuid';

import { useMemo, type JSX } from 'react';
import { TaskComp } from './TaskComp';


const TaskList = ({ tasks, setTasks }: TaskListProps): JSX.Element => {
    const visibleTodos: any = useMemo(() => {
        let res: any[] = [];
        
        tasks.forEach((elt) => {
            res.push(
                <li key={uuidv4()}>
                    <TaskComp task={elt} tasks={tasks} setTasks={setTasks}/>
                </li>
            );
        });

        return res;
    }, [tasks]);
    
    return (
        <div>
            <ul>{visibleTodos}</ul>
        </div>
    );
};


export {
    TaskList,
};
