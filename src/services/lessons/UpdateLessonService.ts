import { getRepository } from 'typeorm';

import Lesson from '../../models/Lesson';

interface IRequest {
  id: string;
  name?: string;
  duration?: number;
  courseId?: string;
  description?: string;
  videoId?: string;
}

class UpdateLessonService {
  static execute = async ({
    id,
    name,
    duration,
    courseId,
    description,
    videoId,
  }: IRequest): Promise<Lesson> => {
    const lessonsRepository = getRepository(Lesson);

    const lesson = await lessonsRepository.findOneOrFail(id);
    lesson.name = name ?? lesson.name;
    lesson.duration = duration ?? lesson.duration;
    lesson.courseId = courseId ?? lesson.courseId;
    lesson.description = description ?? lesson.description;
    lesson.videoId = videoId ?? lesson.videoId;

    await lessonsRepository.save(lesson);

    return lesson;
  };
}

export default UpdateLessonService;
