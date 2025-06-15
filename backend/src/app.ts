import express, { Express } from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import tasksRouter from './routes/tasks.routes';
import routeRouter from './routes/route.router';


const swaggerDocument = YAML.load('./swagger.yaml');
const app: Express = express();


app.use(cors());
app.use(express.json());

// swagger du backend
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routage dynamique
app.use('/tasks', tasksRouter);

app.use('/', routeRouter);


export default app;
