export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      throw TypeError('Sqft must be a number');
    }

    this._sqft = sqft; // eslint-disable-line no-underscore-dangle

    if (this.constructor.name !== 'Building') {
      if (!this.constructor.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  set sqft(value) {
    if (typeof (value) !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = value; // eslint-disable-line no-underscore-dangle
  }
}
