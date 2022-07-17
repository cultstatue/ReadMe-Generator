// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptReadMe = () => {

    return inquirer.prompt ([

        {
            type: 'input',
            name: 'github',
            message:'Please enter your github username'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions for your project'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines and rules for your project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter any tests and resolved examples for your project'
        },
        {
            type: 'list',
            name: 'licence',
            message: 'Please choose a license for your project(select one)',
            choices: ['No License', 'MIT', 'GPLv3']
        }

    ])
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptReadMe()
.then(userAnswers => console.log(userAnswers))
