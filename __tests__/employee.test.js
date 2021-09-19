const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName', () => {
        it('Returns name', () => {
            const name = 'Bob';
            const employee = new Employee(name, 'employeeId', 'email');
            
            expect(employee.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('Returns Id', () => {
            const id = '234234';
            const employee = new Employee('name', id, 'email');
            
            expect(employee.getId()).toBe(id);
        });
    });
  
    describe('getEmail', () => {
        it('Returns email address', () =>{
            const email = 'asdsd@sdfd.com';
            const employee = new Employee('name', 'id', email);

            expect(employee.getEmail()).toBe(email);
        });
    });

    describe('getRole', () => {
        it('Return employee role', () => {
            const role = 'Employee';
            const employee = new Employee('name', 'id', 'email');
            
            expect(employee.getRole()).toBe(role);
        });
    });
});