import { getRepository } from 'typeorm';

import Course from '../../models/Course';

class DeleteCourseService {
  static execute = async (id: string): Promise<void> => {
    const coursesRepository = getRepository(Course);

    const course = await coursesRepository.findOneOrFail(id);

    await coursesRepository.softDelete({
      id: course.id,
    });
  };
}

export default DeleteCourseService;
