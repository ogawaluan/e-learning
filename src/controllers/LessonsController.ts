import { RequestHandler, Response } from 'express';
import {
  CreateLessonService,
  DeleteLessonService,
  ListAllLessonsService,
  ListOneLessonService,
  UpdateLessonService,
} from '../services/lessons';

import { lessonViews } from '../views';

class LessonsController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const lessons = await ListAllLessonsService.execute();

    return response.status(200).json(lessonViews.renderMany(lessons));
  };

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    const lesson = await ListOneLessonService.execute(id);

    return response.status(200).json(lessonViews.renderOne(lesson));
  };

  create: RequestHandler = async (request, response): Promise<Response> => {
    const { name, duration, courseId, description, videoId } = request.body;

    const lesson = await CreateLessonService.execute({
      name,
      duration,
      courseId,
      description,
      videoId,
    });

    return response.status(200).json(lessonViews.renderOne(lesson));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;
    const { name, duration, courseId, description, videoId } = request.body;

    const lesson = await UpdateLessonService.execute({
      id,
      name,
      duration,
      courseId,
      description,
      videoId,
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
