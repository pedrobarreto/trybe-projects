import { Request, Response, RequestHandler as Middleware } from 'express';

export type User = { username: string; password: string };

export type Controller = (req: Request, res: Response) => any;

type Method = 'post' | 'get' | 'patch';

export type Route = {
  method: Method;
  path: string;
  middleware: Middleware[];
  controller: Controller;
};
