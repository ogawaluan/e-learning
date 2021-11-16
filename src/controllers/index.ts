/* eslint-disable import/prefer-default-export */
import UsersController from './UsersController';
import SessionsController from './SessionsController';
import CoursesController from './CoursesController';
import LessonsController from './LessonsController';

export const usersController = new UsersController();
export const sessionsController = new SessionsController();
export const coursesController = new CoursesController();
export const lessonsController = new LessonsController();
