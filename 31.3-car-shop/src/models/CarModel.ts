import mongoose, { model as createModel, Document } from 'mongoose';
import { Car as ICar } from '../interfaces/CarInterface';
import GenericModel from './GenericModel';

export interface ICarWithDocument extends ICar, Document { }

// https://stackoverflow.com/questions/13699784/mongoose-v-property-hide
const schema = new mongoose.Schema<ICarWithDocument>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
}, { versionKey: false });

export default class CarModel extends GenericModel<ICarWithDocument> {
  constructor(model = createModel('Cars', schema)) {
    super(model);
  }
}
