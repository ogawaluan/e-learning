import { RequestHandler, Response } from 'express';
import {
  CreateCourseService,
  UpdateCourseService,
  ListAllCoursesService,
  ListOneCourseService,
  DeleteCourseService,
} from '../services/courses';
import { courseViews } from '../views';

class CoursesController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const courses = await ListAllCoursesService.execute();

    return response.status(200).json(courseViews.renderMany(courses));
  };

  show: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    const course = await ListOneCourseService.execute(id);

    return response.status(200).json(courseViews.renderOne(course));
  };

  create: RequestHandler = async (request, response): Promise<Response> => {
    const { name } = request.body;

    const course = await CreateCourseService.execute({
      name,
      image: request.file?.filename,
    });

    return response.status(200).json(courseViews.renderOne(course));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;
    const { name } = request.body;

    const course = await UpdateCourseService.execute({
      id,
      name,
      image: request.file?.filename,
    });

    return response.status(200).json(courseViews.renderOne(course));
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    await DeleteCourseService.execute(id);

    return response.status(204).send();
  };
}

export default CoursesController;
