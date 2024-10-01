export default function createIteratorObject(report) {
  // Create an iterator object with Symbol.iterator
  return {
    [Symbol.iterator]: function() {
      let n = 0; // This variable is unused, consider removing it
      const employees = report; // Fetch all employees
      const employee = []; // This will hold all employees

      // Flatten the employee arrays into a single array
      for (const i of Object.keys(employees)) {
        employee.push(...employees[i]);
      }

      let index = 0; // Track the current index

      return {
        next: () => {
          // Return the next employee if available
          if (index < employee.length) {
            return { value: employee[index++], done: false };
          }
          return { done: true }; // Indicate that the iteration is complete
        }
      };
    }
  };
}

