const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt(
    [
        {
            type: 'input',
            message:'What is the title of your project?',
            name:'title',
            validate: (value)=>{ if(value){return true} else {return 'please enter a valid title'}},

        },
        {
            type: 'input',
            message: "Give a shory summary of you application's use case",
            name: 'description',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}}
        },
        {
            type: 'input',
            message: "How is your application installed?",
            name: 'installation',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}}
        },
        {
            type: 'input',
            message: 'How is your app used?',
            name: 'usage',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}}
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['MIT License', 'GPL License','Apache License', 'GNU License', 'None'],
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid choice'}}
        },
        {
            type: 'input',
            message: 'Github Username:',
            name: 'github',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}},
        },
        {
            type: 'input',
            message: 'Email Address:',
            name: 'email',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}},
        },
        {
            type: 'input',
            message: 'What tests were run?',
            name: 'test',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}},
        },
        {
            type: 'input',
            message: 'How may this project be contributed to?',
            name: 'contributions',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}},
        },
        {
            type: 'input',
            message: 'Who is credited with making this app?',
            name: 'credits',
            validate: (value)=>{ if(value){return true}else {return 'please enter a valid description'}},
        },
    ]
).then(({
    title,
    description,
    installation,
    usage,
    license,
    github,
    email,
    test,
    contributions,
    credits



})=>{

const template = `#${title}

* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [contributions](#contributions)
* [license](#license)
* [github](#github)
* [email](#email)
* [test](#test)
* [credits](#credits)
# Installtion
${installation}
## Usage
${usage}
## Contributions
${contributions}
### Description
${description}
##Credits
${credits}
##License
${license}

# Contact
* GitHub: ${github}
* E-mail: ${email}`;

generateReadme(title, template);
}
);

function generateReadme(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('New README file has been created!')
    })
}
