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
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
let currentJob = 'manager';
let renderCardsHtml = ``;

/*========================================
DATA
========================================*/

const jobs = {
    'Add Intern': 'intern',
    'Add Engineer': 'engineer'
}

const commonEmployeeQuestions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee\'s ID?',
        name: 'employeeId'
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
        {
            type: 'list',
            message: 'Would you like to add an Engineer, an Intern, or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
            name: 'addMoreEmployees',
        },
    ]),
    engineer: commonEmployeeQuestions.concat([
        {
            type: 'input',
            message: 'What is the employee\'s GitHub account?',
            name: 'gitHub',
        },
        {
            type: 'list',
            message: 'Would you like to add an Engineer, an Intern, or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
            name: 'addMoreEmployees',
        },
    ]),
    intern: commonEmployeeQuestions.concat([
        {
            type: 'input',
            message: 'What school did the employee attend?',
            name: 'school',
        },
        {
            type: 'list',
            message: 'Would you like to add an Engineer, an Intern, or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
            name: 'addMoreEmployees',
        },
    ]),
};



/*========================================
FUNCTIONS
========================================*/

const addEmployee = (answers) => {
    const selectedJob = answers.addMoreEmployees;
    const name = answers.name;
    const employeeId = answers.employeeId;
    const email = answers.email;
    const gitHub = answers.gitHub ? answers.gitHub : '';
    const school = answers.school ? answers.school : '';
    let newEmployee;

    switch(selectedJob) {
        case 'Add Engineer':
            newEmployee = new Engineer(name, employeeId, email, gitHub);
            break;
            
        case 'Add Intern':
            newEmployee = new Intern(name, employeeId, email, school);
            break;
    }

     renderNewEmployee(newEmployee);
};

const renderNewEmployee = (employee) => {
    let htmlData; 
    const employeeType = employee.getRole();

    if (employeeType === 'Engineer') {
        htmlData = `<div class='card'>
        <div class='card-heading'>
            <p>${employee.getName()}</p>
            <p>${employee.getRole()}</p>
        </div>
        <div class='card-body'>
            <ul>
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>GitHub: <a target="_blank" href="https://github.com/${employee.getGitHub()}">${employee.getGitHub()}</a></li>
            </ul>
        </div>
    </div>`
    } else if (employeeType === 'Intern'){
        htmlData = `<div class='card'>
        <div class='card-heading'>
            <p>${employee.getName()}</p>
            <p>${employee.getRole()}</p>
        </div>
        <div class='card-body'>
            <ul>
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>${employee.getSchool()}</li>
            </ul>
        </div>
    </div>`
    } else {
        htmlData = `<div class='card'>
        <div class='card-heading'>
            <p>${employee.getName()}</p>
            <p>${employee.getRole()}</p>
        </div>
        <div class='card-body'>
            <ul>
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>Office Number: ${employee.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
    
    renderCardsHtml += htmlData;
}

const renderHtml = (data) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='./css/styles.css'>

    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1 id='heading'>My Team</h1>
    </header>
    <main class='container'>
        ${data}
    </main>
</body>
</html>`
};

const generateHtml = (data) => {
    fs.writeFile('./dist/index.html', data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}
  

/*========================================
USER INTERACTIONS
========================================*/

// const init = async (job) => {
//     const answers = await inquirer.prompt(employeeQuestions[job])
//     addEmployee(answers);
// }; 

function getEmployeeInfo () {
    inquirer
        .prompt(employeeQuestions[currentJob])
        .then((answers) => {
            const userChoice = answers.addMoreEmployees;
                        
            if(userChoice === 'Finish Building Team') {
                const htmlData = renderHtml(renderCardsHtml)
                generateHtml(htmlData);
            }
            else {
                addEmployee(answers);
                currentJob = jobs[userChoice];
                getEmployeeInfo();
            };
    });
};


/*========================================
INITIALIZATION
========================================*/

getEmployeeInfo();



