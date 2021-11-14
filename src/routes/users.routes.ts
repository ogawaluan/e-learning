import { Router } from 'express';
import multer from 'multer';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { usersController } from '../controllers';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.show);
usersRouter.post('/', usersController.create);
usersRouter.put(
  '/:id',
  ensureAuthenticated,
  upload.single('avatar'),
  usersController.update
);
usersRouter.delete('/:id', usersController.delete);

export default usersRouter;
