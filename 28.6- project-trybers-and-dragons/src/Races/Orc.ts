import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _orc = 0;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.dwarfCounter();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static dwarfCounter() {
    this._orc += 1;
  }

  static createdRacesInstances() {
    return this._orc;
  }
}
