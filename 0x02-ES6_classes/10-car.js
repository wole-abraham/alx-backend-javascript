
export default class Car {
  constructor(brand, motor, color) {
    // Validate that brand and motor are strings, and color is a string
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }

    this._brand = brand;  // Store brand as a symbol
    this._motor = motor;  // Store motor as a symbol
    this._color = color;  // Store color as a symbol
  }

  // Method to clone the current car object
  cloneCar() {

    return this;
  }

  // Optional: Getters to access private properties
}

