import Course from '../models/Course';

export interface ICourseView {
  id: string;
  name: string;
  image: string;
  createdAt: Date;
}

export const renderOne = (course: Course): ICourseView => ({
  id: course.id,
  name: course.name,
  image: course.image,
  createdAt: course.createdAt,
});

export const renderMany = (courses: Course[]): ICourseView[] => {
  return courses.map(course => renderOne(course));
};
