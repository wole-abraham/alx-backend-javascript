export default class Airport {
  constructor(name, code) {
    if (typeof (name) !== 'string' || typeof (code) !== 'string') {
      throw new TypeError('name and code should be strings');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  toString() {
    return `[object ${this._code}]`; // eslint-disable-line no-underscore-dangle
  }
}
