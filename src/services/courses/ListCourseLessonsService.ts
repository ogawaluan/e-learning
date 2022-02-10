import { getRepository } from 'typeorm';
import Lesson from '../../models/Lesson';

class ListCourseLessonsService {
  static execute = async (courseId: string): Promise<Lesson[]> => {
    const lessonsRepository = getRepository(Lesson);

    const courseLessons = await lessonsRepository.find({ where: { courseId } });

    return courseLessons;
  };
}

export default ListCourseLessonsService;
