import { getRepository } from 'typeorm';

import User from '../../models/User';

interface IRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  static execute = async ({
    id,
    name,
    email,
    password,
  }: IRequest): Promise<User> => {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail(id);
    user.name = name;
    user.email = email;
    user.password = password;

    await usersRepository.save(user);

    return user;
  };
}

export default UpdateUserService;
