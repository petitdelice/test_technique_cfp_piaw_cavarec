// request management and response dispatch
// uses services

import { service_initMess } from '../services/route.service';
import { Request, Response } from 'express';


const initMess = (req: Request, res: Response): void => {
    res.status(200).json(service_initMess());
};


export {
    initMess,
};
