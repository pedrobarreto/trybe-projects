import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class GenericModel<T> implements Model<T> {
  constructor(public model: M<T & Document>) { }

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  // https://masteringjs.io/tutorials/mongoose/findoneandupdate-return-updated
  update = async (id: string, obj: T): Promise<T | null> => 
    this.model.findByIdAndUpdate({ _id: id }, obj, { returnOriginal: false });

  delete = async (id: string): Promise<T | null > => 
    this.model.findByIdAndDelete({ _id: id });
}

export default GenericModel;
