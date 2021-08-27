import { RequestHandler, Response } from 'express';
import { ListAllUsersService } from '../services';

class UsersController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const users = await ListAllUsersService.execute();

    return response.status(200).json(users);
  };
}

export default UsersController;
