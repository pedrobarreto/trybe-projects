import GenericService from '../services/GenericService';

enum ControllerErrors {
  notFound = 'Object not found',
  requiredId = 'Id must have 24 hexadecimal characters',
}

abstract class GenericMiddleware<T> {
  constructor(protected service: GenericService<T>) { }

  protected errors = ControllerErrors;
}

export default GenericMiddleware;