import util from 'util';

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [util.inspect.custom]() {
    return `${this.constructor.name} [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
