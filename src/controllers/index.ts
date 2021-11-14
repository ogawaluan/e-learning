/* eslint-disable import/prefer-default-export */
import UsersController from './UsersController';
import SessionsController from './SessionsController';
import CoursesController from './CoursesController';

export const usersController = new UsersController();
export const sessionsController = new SessionsController();
export const coursesController = new CoursesController();
