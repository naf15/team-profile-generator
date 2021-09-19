const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getGitHub', () => {
        it('Returns github', () => {
            const gitHub = 'gitHub'
            const engineer = new Engineer('name', 'employeeId', 'email', 'gitHub');
            
            expect(engineer.getGitHub()).toBe(gitHub)
        });
    });

    describe('getRole', () => {
        it('Returns engineer role', () => {
            const engineer = new Engineer('name', 'employeeId', 'email', 'gitHub');
            
            expect(engineer.getRole()).toBe("Engineer")
        });
    });
    
    describe('getName', () => {
        it('Returns name', () => {
            const name = 'Bob';
            const engineer = new Engineer(name, 'employeeId', 'email', 'gitHub');
            
            expect(engineer.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('Returns Id', () => {
            const id = '234234';
            const engineer = new Engineer('name', id, 'email', 'gitHub');
            
            expect(engineer.getId()).toBe(id);
        });
    });
  
    describe('getEmail', () => {
        it('Returns email address', () =>{
            const email = 'asdsd@sdfd.com';
            const engineer = new Engineer('name', 'id', email, 'gitHub');

            expect(engineer.getEmail()).toBe(email);
        });
    });    
});