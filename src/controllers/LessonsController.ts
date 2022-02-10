import { RequestHandler, Response } from 'express';
import {
  CreateLessonService,
  DeleteLessonService,
  ListAllLessonsService,
  ListOneLessonService,
  UpdateLessonService,
} from '../services/lessons';
import { ListOneCourseService } from '../services/courses';

import { lessonViews, courseViews } from '../views';

class LessonsController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const lessons = await ListAllLessonsService.execute();

    return response.status(200).json(lessonViews.renderMany(lessons));
  };

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { courseId, id } = request.params;

    const course = await ListOneCourseService.execute(courseId);

    const lesson = await ListOneLessonService.execute(id);

    return response
      .status(200)
      .json([lessonViews.renderOne(lesson), courseViews.renderOne(course)]);
  };

  create: RequestHandler = async (request, response): Promise<Response> => {
    const { name, duration, courseId, description, url } = request.body;

    const lesson = await CreateLessonService.execute({
      name,
      duration,
      courseId,
      description,
      url,
    });

    return response.status(200).json(lessonViews.renderOne(lesson));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;
    const { name, duration, courseId, description, url } = request.body;

    const lesson = await UpdateLessonService.execute({
      id,
      name,
      duration,
      courseId,
      description,
      url,
    });

    return response.status(200).json(lessonViews.renderOne(lesson));
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    await DeleteLessonService.execute(id);

    return response.status(204).send();
  };
}

export default LessonsController;
