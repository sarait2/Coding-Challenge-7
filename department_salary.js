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
    
    