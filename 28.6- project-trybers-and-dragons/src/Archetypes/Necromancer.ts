import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _necromancer = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Necromancer.NecromancerCounter();
    this._energyType = 'mana';
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  private static NecromancerCounter() {
    this._necromancer += 1;
  }

  static createdArchetypeInstances() {
    return this._necromancer;
  }
}
