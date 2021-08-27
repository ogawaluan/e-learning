import { getRepository } from 'typeorm';

import { hash } from 'bcrypt';

import User from '../models/User';
import AppError from '../errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUser = await usersRepository.findOne({ where: { email } });

    if (checkUser) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;