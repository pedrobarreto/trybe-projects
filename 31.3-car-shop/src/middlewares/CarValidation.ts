import { Request, Response, NextFunction } from 'express';
import GenericMiddleware from './GenericMiddleware';
import CarService from '../services/CarService';
import { Car, carSchema } from '../interfaces/CarInterface';

export default class CarValidation extends GenericMiddleware<Car> {
  constructor(
    service = new CarService(),
  ) {
    super(service); 
  }

  readOne = async (req:Request, res:Response, next: NextFunction) => {
    try {
      const cars = await this.service.readOne(req.params.id);
      if (!cars) {
        return res.status(404).json({ error: this.errors.notFound }); 
      }
    } catch (error) {
      return res.status(400).json({ error: this.errors.requiredId });
    }
    next();
  };

  create = async (req:Request, res:Response, next: NextFunction) => {
    const parsed = carSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }
    next();
  };

  update = async (req:Request, res:Response, next: NextFunction) => {
    try {
      const cars = await await this.service.update(req.params.id, req.body);
      if (!cars) {
        return res.status(404).json({ error: this.errors.notFound }); 
      }
    } catch (error) {
      return res.status(400).json({ error: this.errors.requiredId });
    }
    next();
  };

  delete = async (req:Request, res:Response, next: NextFunction) => {
    try {
      const cars = await this.service.delete(req.params.id);
      if (!cars) {
        return res.status(404).json({ error: this.errors.notFound }); 
      }
    } catch (error) {
      return res.status(400).json({ error: this.errors.requiredId });
    }
    next();
  };
}