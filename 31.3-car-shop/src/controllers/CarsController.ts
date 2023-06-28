import { Request, Response } from 'express';
import GenericController,
{ RequestWithBody, ResponseError } from './GenericController';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';

class CarsController extends GenericController<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  read = async (
    req: Request,
    res: Response<Car[] | ResponseError>,
  ): Promise<typeof res> => {
    const cars = await this.service.read();
    return res.status(200).json(cars);
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Car | null | ResponseError>,
  ): Promise<typeof res> => {
    const cars = await this.service.readOne(req.params.id);
    return res.status(200).json(cars);
  };

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const cars = await this.service.create(req.body);
    return res.status(201).json(cars);
  };

  update = async (
    req: RequestWithBody<Car>,
    res: Response<Car | null | ResponseError>,
  ): Promise<typeof res> => res.status(200).json(req.body);

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => res.status(204).json(req.body);
}

export default CarsController;