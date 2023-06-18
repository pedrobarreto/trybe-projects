import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();
    this.routes();
    this.app.use(cors());
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  private routes() {
    routes.forEach((route):void => {
      const { method, path, middleware, controller } = route;
      this.app[method](path, ...middleware, controller);
    });
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Online na porta: ${PORT}!`));
  }
}

export { App };

export const { app } = new App();
