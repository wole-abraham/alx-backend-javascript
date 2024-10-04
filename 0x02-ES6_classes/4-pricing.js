import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount; // eslint-disable-line no-underscore-dangle

    if (currency instanceof Currency) {
      this._currency = currency; // eslint-disable-line no-underscore-dangle
    } else {
      throw new TypeError('Currency must be an instance');
    }
  }

  set amount(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value; // eslint-disable-line no-underscore-dangle
  }

  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('Currency must be an instance');
    }
  }

  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`; // eslint-disable-line no-underscore-dangle
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number' || typeof (conversionRate) !== 'number') {
      throw new TypeError('Amount and conversionrate must be a number');
    }
    return amount * conversionRate;
  }
}
