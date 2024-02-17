// TODO: Include packages needed for this application
const { profile } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create a function to write README file
function writeToFile(file, data) {
  fs.writeFile(file, data, (err) =>
    err
      ? console.log("Error occured when writing file")
      : console.log(
          "Success! Find your new ReadMe under the GeneratedReadMe folder"
        )
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

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [License](#license)
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

![Static Badge](https://img.shields.io/badge/${license}-blue)

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
    message: "Provide instructions on how to install your project",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide an explanation on how this project will be used: ",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators, if any: ",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide instructions on how users can test your project. ",
    name: "test",
  },
  {
    type: "checkbox",
    message: "What license do you want to use?",
    name: "license",
    choices: ["Apache_2.0", "MIT", "GPL_3.0"],
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
    // console.log(data);
    //create a file with the name of the github on it
    const projectName = ({ title }) => {
      return title;
    };
    writeToFile(
      `/Users/nellylopez/bootcamp/homework/homework-9/ReadMe-Generator/GeneratedReadMe/${projectName(
        data
      )}_README.md`,
      generateReadMe(data)
    );
  });
}

// Function call to initialize app
init();
