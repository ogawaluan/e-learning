import { Router } from 'express';
import { coursesController } from '../controllers';

const coursesRouter = Router();

coursesRouter.get('/', coursesController.index);
coursesRouter.post('/', coursesController.create);
coursesRouter.put('/:id', coursesController.update);
coursesRouter.delete('/:id', coursesController.delete);

export default coursesRouter;
