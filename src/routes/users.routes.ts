import { Router } from 'express';
import multer from 'multer';
import { usersController } from '../controllers';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.show);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', ensureAuthenticated, usersController.update);
usersRouter.delete('/:id', usersController.delete);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersController.patch
);

export default usersRouter;
