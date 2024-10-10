interface Teacher {
		readonly firstName: string;
		readonly lastName: string;
		fullTimeEmployee: boolean;
		yearsofExperience?: Number;
		location: string;
		[key: string]: any;

}


interface Directors extends Teacher {
		numberofReports: Number;
}


function printTeacher(firstName, lastName) {
		return `${firstName[0]}.${lastName}`;
}

interface classConstructor {
		firstName: string;
		lastName: string;
}

class StudentClass {
		constructor ({firstName, lastName}: classConstructor)
		{
				this.firstName = firstName;
				this.lastName = lastName;
		}

		displayName(){
				return this.firstName;
		}

		workOnHomework() {
				return "Currently Working";
		}

}
