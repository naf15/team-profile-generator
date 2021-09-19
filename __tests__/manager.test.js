const Manager = require('../lib/manager');

describe('Manager', () =>{
    describe('getOfficeNumber', () => {
        it('Returns the office number of the manager', () => {
            const officeNumber = 34234234;
            const manager = new Manager('name', 'employeeID', 'email', officeNumber);

            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
    });

    describe('getRole', () => {
        it('Returns the role of the manager', () => {
            const manager =  new Manager('name', 'employeeId', 'email', 'officeNumber');

            expect(manager.getRole()).toBe('Manager')
        });
    });

    describe('getName', () => {
        it('Returns name', () => {
            const name = 'Bob';
            const manager = new Manager(name, 'employeeId', 'email', 'officeNumber');
            
            expect(manager.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('Returns Id', () => {
            const id = '234234';
            const manager = new Manager('name', id, 'email', 'officeNumber');
            
            expect(manager.getId()).toBe(id);
        });
    });
  
    describe('getEmail', () => {
        it('Returns email address', () =>{
            const email = 'asdsd@sdfd.com';
            const manager = new Manager('name', 'id', email, 'officeNumber');

            expect(manager.getEmail()).toBe(email);
        });
    });
});