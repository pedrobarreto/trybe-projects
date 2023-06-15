import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter { 
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _energy:Energy;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;

  constructor(
    name: string,
  ) {
    this._name = name;
    this._race = new Elf('Hobbit', 8);
    this._archetype = new Mage('Esmeralda');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name() { 
    return this._name;
  }

  get race() { 
    return this._race;
  }

  get archetype() { 
    return this._archetype;
  }

  get dexterity() { 
    return this._dexterity;
  }

  get strength() { 
    return this._strength;
  }

  get defense() { 
    return this._defense;
  }

  get lifePoints() { 
    return this._lifePoints;
  }

  get energy() { 
    const energyObj = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return energyObj;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    const minLifePoints = -1;

    if (damage > 0) { this._lifePoints -= damage; } 
    
    return this.lifePoints <= 0 
      ? minLifePoints : this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const randomNumbers = getRandomInt(1, 10);
    this._strength += randomNumbers;
    this._dexterity += randomNumbers;
    this._defense += randomNumbers;
    this._energy.amount = 10;

    const incrementedLifePoints = this._lifePoints + randomNumbers;
    const raceLifePoints = this._race.maxLifePoints;

    this._lifePoints = incrementedLifePoints < raceLifePoints
      ? this._maxLifePoints = incrementedLifePoints 
      : this._maxLifePoints = raceLifePoints;
  }

  special(enemy: Fighter): void {
    const specialAttack = this._energy.amount * getRandomInt(1, 20);
    enemy.receiveDamage(specialAttack);
  }
}