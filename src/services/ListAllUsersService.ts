import { getRepository } from 'typeorm';
import User from '../models/User';

class ListAllUsersService {
  static execute = async (): Promise<User[]> => {
    const userRepo = getRepository(User);

    return userRepo.find();
  };
}

export default ListAllUsersService;
