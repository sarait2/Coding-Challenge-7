// Task 1 - Create a Department Structure
//Creating an object named company that stores the departments in the company
const company = {

        departments: [
    
            {
    
                departmentName: 'Engineering',
    
                employees: [
    
                    {
    
                        name: 'Alice',
    
                        salary: 100000,
    
                        subordinates: [
    
                            {
    
                                name: 'Bob',
    
                                salary: 80000,
    
                                subordinates: [
    
                                    {
    
                                        name: 'Charlie',
    
                                        salary: 60000,
    
                                        subordinates: []
    
                                    }
    
                                ]
    
                            }
    
                        ]
    
                    },
    
                    {
    
                        name: 'David',
    
                        salary: 90000,
    
                        subordinates: []
    
                    }
    
                ]
    
            },
    
            {
    
                departmentName: 'Sales',
    
                employees: [
    
                    {
    
                        name: 'Eve',
    
                        salary: 85000,
    
                        subordinates: [
    
                            {
    
                                name: 'Frank',
    
                                salary: 70000,
    
                               subordinates: []
    
                            }
    
                        ]
    
                    },
    
                    {
    
                        name: 'Grace',
    
                        salary: 95000,
    
                        subordinates: []
    
                    }
    
                ]
    
            }
    
        ]
    
    };
    // Initialize company structure with departments and employees

    // Task 2 - Create a Recursive Function to Calculate Total Salary for a Department
    function calculateTotalSalary(employee) {
        let totalSalary = employee.salary;  // Beginning with salary of employee
      
        // Calculating the salary for each subordinate
        for (let subordinate of employee.subordinates) {
          totalSalary += calculateTotalSalary(subordinate);  // Add subordinate's salary recursively
        }
      
        return totalSalary;  // Return the total salary including subordinates
      }
      
      // Example usage: Calculate total salary for an entire department
      function calculateDepartmentSalary(department) {
        let totalDepartmentSalary = 0;
      
        // Loop all employees in the department
        for (let employee of department.employees) {
          totalDepartmentSalary += calculateTotalSalary(employee);  // Sum up each employee's salary recursively
        }
      
        return totalDepartmentSalary;  // Return the total department salary
      }
      
      // Calculate total salary for the Engineering department
      const engineeringDepartment = company.departments[0];
      const totalSalaryEngineering = calculateDepartmentSalary(engineeringDepartment);
      console.log(`Total Salary for Engineering department: $${totalSalaryEngineering}`);
      //Create recursive function to calculate department salary

      // Task 3 - Create a Function to Calculate the Total Salary for All Departments
      function calculateCompanySalary(company) {
        let totalCompanySalary = 0;
    
        // Iterate over each department in the company
        for (let department of company.departments) {
            totalCompanySalary += calculateDepartmentSalary(department);  // Sum each department's total salary
        }
    
        return totalCompanySalary;  // Return the total salary for the company
    }
// Example
const totalCompanySalary = calculateCompanySalary(company);
console.log(`Total Salary for the entire company: $${totalCompanySalary}`);
//Calculate total salary for all departments in the company

      
    