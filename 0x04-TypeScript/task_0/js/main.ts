interface Students {
		firstName: string;
		lastName: string;
		age: number;
		location: string;
}

const student1: Students = {
		firstName: 'Mike',
		lastName: 'Hanson',
		age: 21,
		location: 'Nigeria'
}

const student2: Students = {
		firstName: 'Jason',
		lastName: 'Bourne',
		age: 22,
		location; 'Nigeria'
};


const StudentsList = [student1, student2];

const table = document.createElement('table');
for (const student of StundentList) {
		const row = table.insertRow();
		const cell = row.insertCell(0);
		cell.textContent = student.firstName;
		const cell2 = row.insertCell(1);
		cell2.textContent = student.location;
}



