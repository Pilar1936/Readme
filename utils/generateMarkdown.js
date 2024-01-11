// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Map licenses to their corresponding badges
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    // Add more licenses as needed
  };

  // Check if the license has a corresponding badge
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Map licenses to their corresponding links
  const licenseLinks = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)',
    Apache: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    // Add more licenses as needed
  };

  // Check if the license has a corresponding link
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Return a formatted license section for the README
  return `## License\n\n${renderLicenseBadge(license)}\n\nThis project is licensed under the ${renderLicenseLink(license)} License.`;
}

// TODO: Create a function to generate markdown for README
// generateMarkdown.js

function generateMarkdown(answers) {
  // Create README content based on user input
  const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
${answers.confirmTable}
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}


## Usage
${answers.usage}


## License
${answers.license}

## Contributing
${answers.contributing}


## Tests
${answers.tests}

## Video
${answers.video}

## Questions
For any questions, please contact [${answers.username}](https://github.com/${answers.username}) via GitHub or email at ${answers.email}.
`;

  return readmeContent;
}

module.exports = generateMarkdown;

