import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _mage = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Mage.mageCounter();
    this._energyType = 'mana';
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  private static mageCounter() {
    this._mage += 1;
  }

  static createdArchetypeInstances() {
    return this._mage;
  }
}
