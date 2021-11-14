import { RequestHandler, Response } from 'express';
import {
  CreateCourseService,
  UpdateCourseService,
  ListAllCoursesService,
  DeleteCourseService,
} from '../services/courses';
import { courseViews } from '../views';

class CoursesController {
  index: RequestHandler = async (request, response): Promise<Response> => {
    const courses = await ListAllCoursesService.execute();

    return response.status(200).json(courseViews.renderMany(courses));
  };

  create: RequestHandler = async (request, response): Promise<Response> => {
    const { name, image } = request.body;

    const course = await CreateCourseService.execute({
      name,
      image,
    });

    return response.status(200).json(courseViews.renderOne(course));
  };

  update: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;
    const { name, image } = request.body;

    const course = await UpdateCourseService.execute({ id, name, image });

    return response.status(200).json(courseViews.renderOne(course));
  };

  delete: RequestHandler = async (request, response): Promise<Response> => {
    const { id } = request.params;

    await DeleteCourseService.execute(id);

    return response.status(204).send();
  };
}

export default CoursesController;
