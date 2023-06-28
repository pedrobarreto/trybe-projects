import { Request, Response } from 'express';
import GenericService from '../services/GenericService';

export interface RequestWithBody<T> extends Request {
  body: T,
}

export type ResponseError = {
  error: unknown;
};

enum ControllerErrors {
  notFound = 'Object not found',
  requiredId = 'Id must have 24 hexadecimal characters',
}

abstract class GenericController<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected service: GenericService<T>) { }

  abstract read(
    req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res>;

  abstract readOne(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  abstract update(
    req: RequestWithBody<T>,
    res:Response<T | ResponseError>,
  ): Promise<typeof res>;

  abstract delete(
    req: Request<{ id: string; }>,
    res:Response<T | ResponseError>,
  ): Promise<typeof res>;
}

export default GenericController;