import { getRepository } from 'typeorm';
import Course from '../../models/Course';

class ListAllCoursesService {
  static execute = async (): Promise<Course[]> => {
    const courseRepository = getRepository(Course);

    return courseRepository.find();
  };
}

export default ListAllCoursesService;
