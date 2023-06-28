import CarModel from '../models/CarModel';
import { Car } from '../interfaces/CarInterface';
import GenericService from './GenericService';

export default class CarService extends GenericService<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }
}
