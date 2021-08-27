import { getRepository } from 'typeorm';

import User from '../models/User';

interface IRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    let user = await usersRepository.findOne(id);

    let user = {
      name,
      email,
      password,
    };

    return user;
  }
}

export default UpdateUserService;
