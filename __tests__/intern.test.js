const Intern = require('../lib/intern')

describe('Intern', () => {
    describe('getSchool', () => {
        it('Returns school of the intern', () => {
            const school = 'New York University';
            const intern =  new Intern('name', 'id', 'email', school);

            expect(intern.getSchool()).toBe(school);
        });
    });

    describe('getRole', () => {
        it('Returns the role of the intern', () => {
            const intern = new Intern('name', 'id', 'email', 'school');

            expect(intern.getRole()).toBe(intern);
        });
    });

    describle('getName', () => {
        it('Returns name', () => {
            const name = 'Bob';
            const intern = new Intern(name, 'employeeId', 'email', 'school');
            
            expect(intern.getName()).toBe(name);
        });
    });

    describle('getId', () => {
        it('Returns Id', () => {
            const id = '234234';
            const intern = new Intern('name', id, 'email', 'school');
            
            expect(intern.getId()).toBe(id);
        });
    });
  
    describle('getEmail', () => {
        it('Returns email address', () =>{
            const email = 'asdsd@sdfd.com';
            const intern = new Intern('name', 'id', email, 'school');

            expect(intern.getEmail()).toBe(email);
        });
    });
});