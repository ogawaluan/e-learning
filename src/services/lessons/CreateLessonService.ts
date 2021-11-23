import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

interface IRequest {
  name: string;
  duration: number;
  courseId: string;
  description: string;
  videoId: string;
}

class CreateLessonService {
  static execute = async ({
    name,
    duration,
    courseId,
    description,
    videoId,
  }: IRequest): Promise<Lesson> => {
    const lessonsRepository = getRepository(Lesson);

    const lesson = lessonsRepository.create({
      name,
      duration,
      courseId,
      description,
      videoId,
    });

    await lessonsRepository.save(lesson);

    return lesson;
  };
}

export default CreateLessonService;
