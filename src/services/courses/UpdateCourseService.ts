import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../../config/upload';
import Course from '../../models/Course';

interface IRequest {
  id: string;
  name?: string;
  image?: string;
}

class UpdateCourseService {
  static execute = async ({ id, name, image }: IRequest): Promise<Course> => {
    const coursesRepository = getRepository(Course);

    const course = await coursesRepository.findOneOrFail(id);
    course.name = name ?? course.name;
    course.image = image ?? course.image;

    if (course.image) {
      const courseImageFilePath = path.join(
        uploadConfig.directory,
        course.image
      );
      const courseImageFileExists = await fs.promises.stat(courseImageFilePath);

      if (courseImageFileExists) {
        await fs.promises.unlink(courseImageFilePath);
      }
    }

    await coursesRepository.save(course);

    return course;
  };
}

export default UpdateCourseService;
