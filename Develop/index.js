const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

class Question {
  constructor(name, message, type, choices) {
    this.name = name;
    this.message = message;
    this.type = type;
    this.choices = choices;
  }
}

const questions = [
  new Question("title", "What's the title of your project?", "input"),
  new Question("description", "Project description:", "input"),
  new Question("installation", "Installation instructions:", "input"),
  new Question("usage", "Project usage instructions:", "input"),
  new Question("contribution", "Contribution information:", "input"),
  new Question("email", "For questions (email):", "input"),
  new Question("github", "For questions (GitHub):", "input"),
  new Question("license", "License type:", "list", [
    'No license',
    'MIT',
    'ISC',
    'GNU'
  ])
];

function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
      console.log('Success: new README generated inside the current folder');
    })
    .catch((error) => {
      console.log(error);
    });
};
init();

