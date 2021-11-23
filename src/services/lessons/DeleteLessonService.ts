import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

class DeleteLessonService {
  static execute = async (id: string): Promise<void> => {
    const lessonsRepository = getRepository(Lesson);

    const lesson = await lessonsRepository.findOneOrFail(id);

    await lessonsRepository.softDelete({ id: lesson.id });
  };
}

export default DeleteLessonService;
