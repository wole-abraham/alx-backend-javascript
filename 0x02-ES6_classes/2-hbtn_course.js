export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name; // eslint-disable-line no-underscore-dangle
    } else {
      throw new TypeError('Name must be a String');
    }

    if (typeof (length) === 'number') {
      this._length = length; // eslint-disable-line no-underscore-dangle
    } else {
      throw new TypeError('Length must be a number');
    }

    if (Array.isArray(students)) {
      for (const i in students) {
        if (typeof (i) !== 'string') {
          throw new TypeError('Students must be an array of strings');
        } else {
          this._students = students; // eslint-disable-line no-underscore-dangle
        }
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value; // eslint-disable-line no-underscore-dangle
  }

  set length(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Length must be a nummber');
    }
    this._length = value; // eslint-disable-line no-underscore-dangle
  }

  set students(value) {
    if (Array.isArray(value)) {
      for (const i in value) {
        if (typeof (i) !== 'string') {
          throw new TypeError('Student must be a array of strings');
        } else {
          this._students = value; // eslint-disable-line no-underscore-dangle
        }
      }
    } else {
      throw new TypeError('Students must be a array of strings');
    }
  }
}
