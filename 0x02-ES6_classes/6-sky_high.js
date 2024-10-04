import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof (floors) !== 'number') {
      throw new TypeError('floor must be a number');
    }

    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  set floors(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('floor must be a number');
    }

    this._floors = value; // eslint-disable-line no-underscore-dangle
  }

  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // eslint-disable-line no-underscore-dangle
  }
}
