import { EnergyType } from '../Energy';

interface IArchetype {
  name: string,
  special: number,
  cost:number,
}

export default abstract class Archetype implements IArchetype { 
  private _name:string;
  private _special:number;
  private _cost: number;

  constructor(name:string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }
  
  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  abstract get energyType():EnergyType;

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }
}