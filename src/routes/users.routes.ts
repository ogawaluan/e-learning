import { Router } from 'express';
import { usersController } from '../controllers';

import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';

const usersRouter = Router();

usersRouter.get('/', usersController.index);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  return response.json(user);
});

usersRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, email, password } = request.body;

  const updatedUser = new UpdateUserService();

  await updatedUser.execute({ id, name, email, password });

  return response.json(updatedUser);
});

usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteUser = new DeleteUserService();

  await deleteUser.execute(id);

  return response.status(204).send();
});

export default usersRouter;
