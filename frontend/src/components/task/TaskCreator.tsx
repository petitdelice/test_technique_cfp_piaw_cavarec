import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { type Task } from '@/models/task.model';
import { addTasks } from '@/api';
import { type TaskCreatorProps } from '@/props/AllProps';

import { useState, type JSX } from 'react';
import toast from 'react-hot-toast';


const emptyRegex: RegExp = new RegExp('^[ \t]*$');


const TaskCreator = ({ tasks, setTasks }: TaskCreatorProps): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [variant, setVariant] = useState<'outline' | 'secondary'>('secondary');

    const handleCreate = async (): Promise<void> => {      
        // create a task
        if (!emptyRegex.test(name) && !emptyRegex.test(description)) {            
            try {
                const newTask: Task = await addTasks(name.trim(), description.trim());
                if (newTask.id !== 'error') {
                    let newTasks: Task[] = tasks.slice();
                    newTasks.push(newTask);

                    setTasks(newTasks);
                    setName('');
                    setDescription('');
                    setVariant('secondary');
                }
            } catch {
                toast.error(`Error while creating the task`);
            }
        }
    };

    const setValueWrapper = (
        e: React.ChangeEvent<HTMLInputElement>,
        otherValue: string,
        setValue: (val: string) => void
    ): void => {
        const val: string = e.target.value;

        // check the validity of the task to be added
        if (!emptyRegex.test(val) && !emptyRegex.test(otherValue)) {
            setVariant('outline');  
        } else {
            setVariant('secondary');
        }

        setValue(e.target.value);
    };

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Create your task</CardTitle>
                <CardDescription>
                    Enter the name and the description of your task
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <div className="grid gap-2">
                            <Input
                                id="taskName"
                                type="text"
                                placeholder="Your task name"
                                value={name}
                                onChange={(elt) => setValueWrapper(elt, description, setName)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                            </div>
                            <Input
                                id="description"
                                type="text"
                                placeholder="Your task description"
                                value={description}
                                onChange={(elt) => setValueWrapper(elt, name, setDescription)}
                                required
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button
                    type="submit"
                    className="w-full"
                    variant={variant}
                    onClick={handleCreate}
                >
                    Create
                </Button>
            </CardFooter>
        </Card>
    );
};


export {
    TaskCreator,
};
