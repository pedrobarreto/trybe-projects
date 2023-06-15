import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _ranger = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Ranger.rangerCounter();
    this._energyType = 'stamina';
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  private static rangerCounter() {
    this._ranger += 1;
  }

  static createdArchetypeInstances() {
    return this._ranger;
  }
}
