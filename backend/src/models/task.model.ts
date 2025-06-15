// types/objects reusable

type TaskStatus = 'pending' | 'done';

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};

interface TitleDescProps {
  title: string;
  description: string;
};

interface IdProps {
  id: string;
};


export {
  TaskStatus,
  Task,
  TitleDescProps,
  IdProps,
};
