import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../../config/upload';
import User from '../../models/User';

interface IRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  avatarFilename?: string;
}

class UpdateUserService {
  static execute = async ({
    id,
    name,
    email,
    password,
    avatarFilename,
  }: IRequest): Promise<User> => {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail(id);
    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.password = password ?? user.password;

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  };
}

export default UpdateUserService;
