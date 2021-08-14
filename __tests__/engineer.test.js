const Engineer = require('../lib/engineer');

describle('Engineer', () => {
    describle('getGitHub', () => {
        it('Returns github', () => {
            const gitHub = 'account'
            const engineer = new Engineer('name', 'employeeId', 'email', 'gitHub');
            
            expect(engineer.getGitHub()).toBe(gitHub)
        });
    });

    describle('getRole', () => {
        it('Returns engineer role', () => {
            const engineer = new Engineer('name', 'employeeId', 'email', 'gitHub');
            
            expect(engineer.getRole()).toBe("Engineer")
        });
    });
    
    describle('getName', () => {
        it('Returns name', () => {
            const name = 'Bob';
            const engineer = new Engineer(name, 'employeeId', 'email', 'gitHub');
            
            expect(engineer.getName()).toBe(name);
        });
    });

    describle('getId', () => {
        it('Returns Id', () => {
            const id = '234234';
            const engineer = new Engineer('name', id, 'email', 'gitHub');
            
            expect(engineer.getId()).toBe(id);
        });
    });
  
    describle('getEmail', () => {
        it('Returns email address', () =>{
            const email = 'asdsd@sdfd.com';
            const engineer = new Engineer('name', 'id', email, 'gitHub');

            expect(engineer.getEmail()).toBe(email);
        });
    });    
});