import { useEffect, useState, type JSX } from "react";

import { type Task} from "@/models/task.model";
import { TasksWrapper } from '@/components/task/TasksWrapper';
import { getTasks } from "@/api";

import { Toaster } from 'react-hot-toast'


const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [fetchErr, setFetchErr] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    // fetch data
    getTasks()
      .then((res: Task[]) => {
        setTasks(res);
        setIsFetched(true);
      })
      .catch(() => {
        setTasks([]);
        setFetchErr(true);
        setIsFetched(true);
      });
  }, []);

  return (
    <>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
      <div>
        <TasksWrapper
          isFetched={isFetched}
          fetchErr={fetchErr}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </>
  );
};


export default App;
