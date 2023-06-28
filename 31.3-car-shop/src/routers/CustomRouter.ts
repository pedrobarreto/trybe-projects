// src/Routes/Router.ts

import { Router } from 'express';
import GenericController from '../controllers/GenericController';
import CarValidation from '../middlewares/CarValidation';

class CustomRouter<T> {
  router: Router;

  constructor() {
    this.router = Router();
  }

  addRoute(
    controller: GenericController<T>,
    route: string = controller.route,
    middleware = new CarValidation(),
  ) {
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, middleware.readOne, controller.readOne);
    this.router.post(route, middleware.create, controller.create);
    this.router.put(`${route}/:id`, middleware.update, controller.update);
    this.router.delete(`${route}/:id`, middleware.delete, controller.delete);
  }
}

export default CustomRouter;