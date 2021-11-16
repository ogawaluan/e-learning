import { getRepository } from 'typeorm';

import Course from '../../models/Course';

interface IRequest {
  name: string;
  image?: string;
}

class CreateCourseService {
  static execute = async ({ name, image }: IRequest): Promise<Course> => {
    const coursesRepository = getRepository(Course);

    const course = coursesRepository.create({
      name,
      image,
    });

    await coursesRepository.save(course);

    return course;
  };
}

export default CreateCourseService;
