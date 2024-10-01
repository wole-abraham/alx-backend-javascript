export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: [...employees] };
}

const employee = {...createEmployeesObject('computer sci', ['jake', 'micheal']),
				  ...createEmployeesObject('masscom', ['mark', 'zuker'])};
console.log(employee);
