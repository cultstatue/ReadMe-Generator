// function to render license badge
function renderLicenseBadge(license) {

  if (license === 'No License') {

    return ''

  }

  return ` 
  [![Generic badge](https://img.shields.io/badge/License-${license}-blue.svg)](https://shields.io/)
  `;

}

// function to render license link
function renderLicenseLink(license) {

  if (license === 'No License') {

    return ''

  }
 
  return `
  - [License](#license)
  `;
}

// function to render license section
function renderLicenseSection(license) {

  if (license === 'No License') {

    return ''

  }
  return `
  ## License
  This project is licensed under the ${license} License.
  `;

}

// function to generate README
function generateMarkdown(data) {
  
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#How-to-Contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Reach out on Github via [${data.github}](https://github.com/${data.github}) or by email at ${data.email}.
  `;
}

module.exports = generateMarkdown;
