import CustomRouter from './routers/CustomRouter';
import CarsController from './controllers/CarsController';
import { Car } from './interfaces/CarInterface';
import App from './app';

const server = new App();

const carsController = new CarsController();

const carsRouter = new CustomRouter<Car>();

carsRouter.addRoute(carsController);

server.addRouter(carsRouter.router);

export default server;
