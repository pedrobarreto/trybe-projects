import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halfling = 0;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingCounter();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static halflingCounter() {
    this._halfling += 1;
  }

  static createdRacesInstances() {
    return this._halfling;
  }
}
