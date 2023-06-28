import { ZodError } from 'zod';
import { Model } from '../interfaces/ModelInterface';

export interface ServiceError {
  error: ZodError;
}

abstract class GenericService<T> {
  constructor(public model: Model<T>) { }

  read = (): Promise<T[]> => this.model.read();

  readOne = (id: string): Promise<T | null | ServiceError> => 
    this.model.readOne(id);

  create = (obj: T): Promise<T | ServiceError> => 
    this.model.create(obj);

  update = (id: string, obj: T): Promise<T | null | ServiceError> => 
    this.model.update(id, obj);

  delete = (id: string): Promise<T | null | ServiceError> => 
    this.model.delete(id);
}

export default GenericService;