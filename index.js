// require neccessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// function to prompt user for information to generate readme
const promptReadMe = () => {

    return inquirer.prompt ([

        {
            type: 'input',
            name: 'github',
            message:'Please enter your github username',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter a github username!');
                  return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter an email address!');
                  return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a title for your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a description of your project!');
                  return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter installation instructions for your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions for your project',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter usage instructions for your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines and rules for your project',
            validate: contributionInput => {
                if (contributionInput) {
                  return true;
                } else {
                  console.log('Please enter contribution instructions for your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter any tests and resolved examples for your project',
            validate: testsInput => {
                if (testsInput) {
                  return true;
                } else {
                  console.log('Please enter test instructions for your project!');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project(select one)',
            choices: ['No License', 'MIT', 'GPLv3', 'CreativeCommons'],
            validate: licenseInput => {
                if (licenseInput) {
                  return true;
                } else {
                  console.log('Please choose a licesne option!');
                  return false;
                }
            }
        }

    ])
}

// promise to create README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created! Check the the dist folder!'
            });
        })
    });
};

// promise chain to generate README
promptReadMe()
.then(userAnswers => {
    return generateMarkdown(userAnswers);
})
.then(readmeMarkdown => {
    return writeToFile(readmeMarkdown);
})
.then(writeFileResponse => {
  console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});
