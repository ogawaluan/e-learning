import Lesson from '../models/Lesson';

export interface ILessonView {
  id: string;
  name?: string;
  duration?: number;
  courseId?: string;
  description?: string;
  videoId?: string;
}

export const renderOne = (lesson: Lesson): ILessonView => ({
  id: lesson.id,
  name: lesson.name,
  duration: lesson.duration,
  courseId: lesson.courseId,
  description: lesson.description,
  videoId: lesson.videoId,
});

export const renderMany = (lessons: Lesson[]): ILessonView[] => {
  return lessons.map(lesson => renderOne(lesson));
};
