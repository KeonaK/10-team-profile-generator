// manager prompts
managerArray = [
   { type: "input",
     name: "name",
     message: "What is the team manager's name? "
},
{
    type: "input",
    name: "id",
    message: "What is the team manager's id? ",
},
{type: "input",
name: "email",
message: "What is the team manager's email? ",
},
{type: "input",
name: "number",
message: "What is the team manager's office number? "},
];

//engineer prompts
engineerArray = [
    { type: "input",
    name: "name",
    message: "What is your engineer's name? "
},
{
   type: "input",
   name: "id",
   message: "What is your engineer's id? ",
},
{type: "input",
name: "email",
message: "What is your engineer's email? ",
},
{type: "input",
name: "github",
message: "What is your engineer's github username? ",
},
    
];

//intern prompts
internArray = [
    { type: "input",
    name: "name",
    message: "What is your intern's name? "
},
{
   type: "input",
   name: "id",
   message: "What is your intern's id? ",
},
{type: "input",
name: "email",
message: "What is your intern's email? ",
},
{type: "input",
name: "school",
message: "What is your intern's school? ",
},
];

//add another team member list prompt
addTeammateArray = [
    {
        type: "list",
        name: "add",
        message: "Which type of team member would you like to add? ",
        choices: ["Engineer","Intern","None"],

    },
];

//export the arrays
module.export = {managerArray, engineerArray, internArray, addTeammateArray};