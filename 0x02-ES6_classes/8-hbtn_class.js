export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new TypeError('size shoulbe a number and location a string');
    }

    this._size = size; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  valueOf() {
    return this._size; // eslint-disable-line no-underscore-dangle
  }

  toString() {
    return this._location; // eslint-disable-line no-underscore-dangle
  }
}
