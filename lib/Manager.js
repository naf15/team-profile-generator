const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber) {
        super(name, employeeId, email)
        this.officeNumber = officeNumber;
    };

    getRole() {
        return 'Manager'
    };

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;