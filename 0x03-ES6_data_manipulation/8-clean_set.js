export default function cleanSet(set, startString) {
		if (startString.length > 0){
				
		const res = [];
		set.forEach((value) => {
				if (value.startsWith(startString)){
						res.push(value.slice(startString.length));
				}
		});
		return res.join('-');
		}
		else {
				return '';
		}
}
