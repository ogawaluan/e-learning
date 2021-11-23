import { getRepository } from 'typeorm';

import User from '../../models/User';

class ListOneUserService {
  static execute = async (id: string): Promise<User> => {
    const userRepo = getRepository(User);

    return userRepo.findOneOrFail(id);
  };
}

export default ListOneUserService;
