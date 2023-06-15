import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarf = 0;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfCounter();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static dwarfCounter() {
    this._dwarf += 1;
  }

  static createdRacesInstances() {
    return this._dwarf;
  }
}
