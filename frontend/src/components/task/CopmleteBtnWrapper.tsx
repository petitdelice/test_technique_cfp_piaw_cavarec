import { Button } from '@/components/ui/button';

import { type CompleteBtnProps } from '@/props/AllProps';

import type { JSX } from 'react';


const CopmleteBtnWrapper = ({ isDone, handleUpdate }: CompleteBtnProps): JSX.Element => {
    if (isDone) {
        return (
            <Button
                variant='outline'
                onClick={handleUpdate}
            >
                Undo
            </Button>
        );
    } else {
        return (
            <Button
                variant='outline'
                onClick={handleUpdate}
                className='bg-green-500 text-white hover:bg-green-600 hover:text-white'
            >
                Done
            </Button>
        );
    }
};


export {
    CopmleteBtnWrapper,
};
