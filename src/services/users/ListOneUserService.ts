import { getRepository } from 'typeorm';

import User from '../../models/User';

class ListOneUserService {
  static execute = async (id: string): Promise<User> => {
    const userRepo = getRepository(User);

    const userId = await userRepo.findOneOrFail(id);

    return userId;
  };
}

export default ListOneUserService;
