interface DirectorInterface {
		workFromHome() : string;
		getCoffeeBreak(): string;
		workDirectorTasks(): string;
}

interface TeacherInterface {
		workFromHome() : string;
		getCoffeeBreak(): string;
		workTeacherTasks(): string;
}

class Director implements DirectorInterface {
		workFromHome():string {
				return "working from home";
		}
		getToWork():string {
				return "Getting a coffee break";
		}
		workDirectorTasks():string {
				return "Getting to director tasks";
		}
}
class Teacher implements TeachInterface(){
		workFromHome():string {
				return "Cannot work from home";
		}
		getCoffeeBreak():string {
				return "Cannot have a break;
		}
		workTeacherTasks():string {
				return "Getting to work";
		}
}


function createEmployee(salary: string | number): Director | Teacher {
		if (typeof salary === 'number' && salary < 500){
				return  new Teacher ;
		} else {
				return new Director; 
		}
}

		
function isDirector (employee: Director): employee is Director {
		return typeof employee === 'Director'
}
		

}

function executeWork (employee: Director | Teacher) {
		if (isDirector(employee)){
				employee.WorkDirectorTasks();
		} else {
				if(!(isDirector(employee))) {
						employee.WorkTeacherTasks();
				}
		}
}

