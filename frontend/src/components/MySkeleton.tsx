import type { JSX } from 'react';

import { Skeleton } from '@/components/ui/skeleton';


const TaskSkeleton = (): JSX.Element => {
    return (
        <Skeleton className='h-[60px] w-[280px] flex justify-between' />
    );
};

const TaskCreatorSkeleton = (): JSX.Element => {
    return (
        <Skeleton className="h-[256px] w-[382px] rounded-xl" />
    );
};

const LoadingSkeleton = (): JSX.Element => {
    return (
        <div className="grid m-[50px] place-items-center">
            <TaskCreatorSkeleton />
            <div className='my-8 space-y-3'>
                <TaskSkeleton />
                <TaskSkeleton />
                <TaskSkeleton />
            </div>
        </div>
    );
};


export {
    TaskSkeleton,
    TaskCreatorSkeleton,
    LoadingSkeleton,
};
