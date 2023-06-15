import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _warrior = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Warrior.warriorCounter();
    this._energyType = 'stamina';
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  private static warriorCounter() {
    this._warrior += 1;
  }

  static createdArchetypeInstances() {
    return this._warrior;
  }
}
