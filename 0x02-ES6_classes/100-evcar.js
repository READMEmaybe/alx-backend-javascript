import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  set range(range) {
    if (typeof range !== 'number') {
      throw new TypeError('Range must be a number');
    }
    this._range = range;
  }

  get range() {
    return this._range;
  }

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new Car();
  }
}
