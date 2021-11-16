import { getRepository } from 'typeorm';
import Lesson from '../../models/Lesson';

class ListAllLessonsService {
  static execute = async (): Promise<Lesson[]> => {
    const lessonsRepository = getRepository(Lesson);

    return lessonsRepository.find();
  };
}

export default ListAllLessonsService;
