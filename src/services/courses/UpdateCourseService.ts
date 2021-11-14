import { getRepository } from 'typeorm';

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

    await coursesRepository.save(course);

    return course;
  };
}

export default UpdateCourseService;
