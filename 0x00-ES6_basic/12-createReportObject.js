export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() { return Object.keys(this.allEmployees).length; },
  };

  return employees;
}
