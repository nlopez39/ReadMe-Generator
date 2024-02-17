// TODO: Include packages needed for this application
const { profile } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create a function to write README file
function writeToFile(file, data) {
  fs.writeFile(file, data, (err) =>
    err
      ? console.log("Error occured when writing file")
      : console.log("Success in creating your README.md file")
  );
}

//generate the readme file
const generateReadMe = ({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  github,
  email,
}) => {
  return `# ${title}
  ## Table of Contents 

  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage
${usage}

## Credits

${contribution}

## Tests

${test}

## License

${license}

## Questions

Link to my Github Profile: https://github.com/${github}

You can reach me at : ${email}
`;
};
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use: ",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators, if any: ",
    name: "contribution",
  },
  {
    type: "input",
    message:
      "Go the extra mile and write tests for your application.Then provide examples on how to run them here. ",
    name: "test",
  },
  {
    type: "checkbox",
    message: "What license do you want to use?",
    name: "license",
    choices: ["MIT", "Option1", "Option2", "Option3", "FOption4"],
  },
  {
    type: "input",
    message: "Enter your Github Profile name/alias (ex. johnSmith00): ",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address: ",
    name: "email",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    //create a file with the name of the github on it
    const name = ({ github }) => {
      return github;
    };
    writeToFile(`${name(data)}_README.md`, generateReadMe(data));
  });
}

// Function call to initialize app
init();
