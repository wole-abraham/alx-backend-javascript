export default function createInt8TtypedArray(length, position, value) {
		if (position >=length || position < 0){
				throw new Error("Position outside range");
		}
		const array = new ArrayBuffer(length);
		const buffer = new Int8Array(array);
		buffer[position] = value;
		return array;
}

