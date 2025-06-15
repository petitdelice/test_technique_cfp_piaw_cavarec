import { type Task} from "@/models/task.model";


interface TaskProps {
    task: Task;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

interface TaskListProps {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

interface TaskCreatorProps {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

interface TasksWrapperProps {
    isFetched: boolean
    fetchErr: boolean;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

interface CompleteBtnProps {
    isDone: boolean;
    handleUpdate: () => void;
};


export {
    type TaskProps,
    type TaskListProps,
    type TaskCreatorProps,
    type TasksWrapperProps,
    type CompleteBtnProps,
};
