/*=======================
INSTRUCTIONS
=======================*/

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

/*========================================
DEPENDENCIES
========================================*/

const inquirer = require('inquirer');
const jest =  require('jest');
const fs = require('fs');
const employees = [];

/*========================================
DATA
========================================*/

const commonEmployeeQuestions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee\'s ID?',
        name: 'employeeID'
    },
    {
        type: 'input',
        message: 'What is the employee\'s email?',
        name: 'email'
    },
];

const employeeQuestions = {
    manager: commonEmployeeQuestions.concat([
        {
            type: 'input',
            message: 'What is the employee\'s office number?',
            name: 'officeNumber',
        },
    ]),
    engineer: commonEmployeeQuestions.concat([
        {
            type: 'input',
            message: 'What is the employee\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the employee\'s GitHub account?',
            name: 'gitHub',
        },
    ]),
    intern: commonEmployeeQuestions.concat([
        {
            type: 'input',
            message: 'What is the employee\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school did the employee attend?',
            name: 'school',
        },
    ]),
    addMoreEmployees: {
        type: 'list',
        message: 'Would you like to add an Engineer, an Intern, or finish building your team?',
        choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
        name: 'addMoreEmployees',
    },
};

/*========================================
FUNCTIONS
========================================*/

const addEmployee = ({addMoreEmployees}) => {
    switch(addMoreEmployees) {
        case 'Add Engineer':
            
        case 'Add Intern':
            break;
        case 'Finish Building Team':
            return false;
    }
};
    

/*========================================
USER INTERACTIONS
========================================*/

const init = async () => {
    const answers = await inquirer.prompt(employeeQuestions[job])
    addEmployee(answers);
}; 

/*========================================
INITIALIZATION
========================================*/

console.log(employeeQuestions)