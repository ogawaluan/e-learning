import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

class ListOneLessonService {
  static execute = async (id: string): Promise<Lesson> => {
    const lessonsRepository = getRepository(Lesson);

    return lessonsRepository.findOneOrFail(id);
  };
}

export default ListOneLessonService;
