import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../../config/upload';
import User from '../../models/User';

import AppError from '../../errors/AppError';

interface IRequest {
  userId: string;
  avatarFilename?: string;
}

class UpdateUserAvatarService {
  static execute = async ({
    userId,
    avatarFilename,
  }: IRequest): Promise<User> => {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(userId);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    if (avatarFilename) {
      user.avatar = avatarFilename;
    }

    await usersRepository.save(user);

    return user;
  };
}

export default UpdateUserAvatarService;