export default class Currency {
		constructor(code, name){
				if (typeof(code) !== 'string' && typeof(name) !== 'string'){
						throw new TypeError("Code and Name must be string");
				}
				this._code = code; // eslint-disable-line no-underscore-dangle
				this._name = name; // eslint-disable-line no-underscore-dangle
		}

		set name(value){
				if (typeof(value) !== 'string'){
						throw new TypeError('Name must be a string');
				}
				this._name = value;
		}

		get name() {
				return this._name;
		}
	
		set code(value){
				if (typeof(value) !== 'string'){
						throw new TypeError('Name must be a string');
				}
				this._code = code;
		}

		get code(){
				return this._code;
		}

		displayFullCurrency(){
				return `${this._name} (${this._code})`;
		}

}
