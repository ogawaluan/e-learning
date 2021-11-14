import { RequestHandler, Response } from 'express';
import {
  CreateUserService,
  DeleteUserService,
  ListAllUsersService,
  UpdateUserService,
  ListOneUserService,
} from '../services/users';
import { userViews } from '../views';

class UsersController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const users = await ListAllUsersService.execute();

    return response.status(200).json(userViews.renderMany(users));
  };

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    const user = await ListOneUserService.execute(id);

    return response.status(200).json(userViews.renderOne(user));
  };

  create: RequestHandler = async (request, response): Promise<Response> => {
    const { name, email, password } = request.body;

    const user = await CreateUserService.execute({
      name,
      email,
      password,
    });

    return response.status(200).json(userViews.renderOne(user));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const user = await UpdateUserService.execute({ id, name, email, password });

    return response.status(200).json(userViews.renderOne(user));
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    await DeleteUserService.execute(id);

    return response.status(204).send();
  };

  patch: RequestHandler = async (request, response): Promise<Response> => {
    const updateUserAvatar = await UpdateUserService.execute({
      id: request.user.id,
      avatarFilename: request.file?.filename,
    });

    return response.status(200).json(userViews.renderOne(updateUserAvatar));
  };
}

export default UsersController;
