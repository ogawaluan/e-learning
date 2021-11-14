import { getRepository } from 'typeorm';

import Course from '../../models/Course';

class ListOneCourseService {
  static execute = async (id: string): Promise<Course> => {
    const courseRepo = getRepository(Course);

    return courseRepo.findOneOrFail(id);
  };
}

export default ListOneCourseService;
