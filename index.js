const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for the user
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter the description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter the usage information?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Select the license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'Enter the contribution guidelines?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Provide your email address for additional questions:',
    name: 'email',
  },
  {
    type: 'confirm',
    name: 'confirmTable',
    message: 'Do you want a Table of Contents?',
    default: true,
  },
];

// Prompt to get user answers
inquirer
  .prompt(questions)
  .then((answers) => {
    // Call the generateMarkdown function with user answers
    const generatedContent = generateMarkdown(answers);

    // Write the generated content to README.md
    fs.writeFileSync('README.md', generatedContent);

    console.log('README.md created!');
  })
  .catch((error) => {
    console.error(error);
  });
