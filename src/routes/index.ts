import { Router } from 'express';

// import { ensureAuthenticated } from '../middlewares';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import coursesRouter from './courses.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
// routes.use(ensureAuthenticated);
routes.use('/courses', coursesRouter);

export default routes;
