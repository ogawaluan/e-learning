import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

interface IRequest {
  name: string;
  duration: number;
  courseId: string;
  description: string;
  url: string;
}

class CreateLessonService {
  static execute = async ({
    name,
    duration,
    courseId,
    description,
    url,
  }: IRequest): Promise<Lesson> => {
    const lessonsRepository = getRepository(Lesson);

    const videoId = url.split('=');

    const lesson = lessonsRepository.create({
      name,
      duration,
      courseId,
      description,
      videoId: videoId[1],
    });

    await lessonsRepository.save(lesson);

    return lesson;
  };
}

export default CreateLessonService;
