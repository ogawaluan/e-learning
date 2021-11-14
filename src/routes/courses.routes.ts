import { Router } from 'express';
import multer from 'multer';
import { coursesController } from '../controllers';
import uploadConfig from '../config/upload';

const coursesRouter = Router();
const upload = multer(uploadConfig);

coursesRouter.get('/', coursesController.index);
coursesRouter.get('/:id', coursesController.show);
coursesRouter.post('/', upload.single('image'), coursesController.create);
coursesRouter.put('/:id', upload.single('image'), coursesController.update);
coursesRouter.delete('/:id', coursesController.delete);

export default coursesRouter;
