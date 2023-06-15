import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _elf = 0;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfCounter();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static elfCounter() {
    this._elf += 1;
  }

  static createdRacesInstances() {
    return this._elf;
  }
}
