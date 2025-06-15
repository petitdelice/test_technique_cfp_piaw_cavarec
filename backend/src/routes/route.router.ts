// the endpoints

import express, { Router } from 'express';
import { initMess } from '../controllers/route.controller';


const routeRouter: Router = express.Router();


// [GET] http://.../ -> job return controller
routeRouter.get('/', initMess);


export default routeRouter;
