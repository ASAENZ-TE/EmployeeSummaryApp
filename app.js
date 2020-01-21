
const inquirer = require('inquirer');
const chalk = require('chalk');
const boxen = require('boxen')
const fs = require('fs')
const Manager = require('./generate/Manager');
const Engineer = require('./generate/Engineer');
const Intern = require('./generate/Intern');
const generateHtml = require('./generate/generateHtml')
const managerArray = [];
const engineerArray = [];
const internArray = [];
let id = 0;
let exit = false;
const filename = './output/new.html'

const questionsStart = [
    {
        type: "list",
        message: ">>>>>>>What do you do around here?:<<<<<<",
        name: "role",
        choices: ["Manager", "Engineer", "Intern", "Exit"]
    }
]

const baseQuestions = [
    {
        type: "input",
        message: "What's your name?:",
        name: "name",
        validate: function validateName(name) {
            return name !== '';
        }
    },
    {
        type: "input",
        message: "What's your email?:",
        name: "email",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const managerQuestion = [
    {
        type: "input",
        message: "Enter Manager's Office Number:",
        name: "officeNumber",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const engineerQuestion = [
    {
        type: "input",
        message: "Enter Engineer's GitHub name:",
        name: "github",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const internQuestion = [
    {
        type: "input",
        message: "Attending which school?:",
        name: "school",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const inputStart = async () => {
    const { role, ...answers } = await inquirer.prompt(questionsStart);
    return role;
};

const collectInputs = async (role) => {
    id = id + 1
    if (role === 'Manager') {
        console.log(boxen(chalk.white.bold(`A boss? Let's add a new ${role} !`), { padding: 1, margin: 1, borderColor: 'green', backgroundColor: 'green' }))
        const questions = [...baseQuestions, ...managerQuestion];
        member = await inquirer.prompt(questions);
        const memberObj = new Manager(member.name, id, member.email, member.officeNumber);
        managerArray.push(memberObj);
    } else if (role === 'Engineer') {
        console.log(boxen(chalk.white.bold(`An architect? Let's add a new ${role} !`), { padding: 1, margin: 1, borderColor: 'green', backgroundColor: 'green' }))
        const questions = [...baseQuestions, ...engineerQuestion];
        member = await inquirer.prompt(questions)
        const memberObj = new Engineer(member.name, id, member.email, member.github);
        engineerArray.push(memberObj);
    } else if (role === 'Intern') {
        console.log(boxen(chalk.white.bold(`A beginner? Let's add a new ${role} !`), { padding: 1, margin: 1, borderColor: 'green', backgroundColor: 'green' }))
        const questions = [...baseQuestions, ...internQuestion]
        member = await inquirer.prompt(questions)
        const memberObj = new Intern(member.name, id, member.email, member.school);
        internArray.push(memberObj);
    } else {
        console.log(boxen(chalk.black.bold(`No more members? Affirmative.`), { padding: 1, margin: 1, borderColor: 'yellow', backgroundColor: 'yellow' }))
        return exit = true;
    }
}

const writeHtml = (filename, data) => {
    fs.writeFile(filename, data, function (err) {
        if (err) console.log(err);
        console.log(chalk.green("Success! Check out our new html in the output folder!"));
    });
};

const init = async () => {
    while (!exit) {
        const role = await inputStart();
        await collectInputs(role);
    }
    const html = await generateHtml(managerArray, engineerArray, internArray);
    writeHtml(filename, html);
}

init();