import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

interface IRequest {
  id: string;
  name?: string;
  duration?: number;
  courseId?: string;
  description?: string;
  url?: string;
}

class UpdateLessonService {
  static execute = async ({
    id,
    name,
    duration,
    courseId,
    description,
    url,
  }: IRequest): Promise<Lesson> => {
    const lessonsRepository = getRepository(Lesson);

    let videoId;

    const lesson = await lessonsRepository.findOneOrFail(id);
    lesson.name = name ?? lesson.name;
    lesson.duration = duration ?? lesson.duration;
    lesson.courseId = courseId ?? lesson.courseId;
    lesson.description = description ?? lesson.description;
    if (url) {
      videoId = url.split('=');
      lesson.videoId = videoId[1];
    }

    await lessonsRepository.save(lesson);

    return lesson;
  };
}

export default UpdateLessonService;
