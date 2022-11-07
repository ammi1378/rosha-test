// import { readdirSync } from 'fs'
const fs = require("fs");
const path = require("path");
console.log({ dir: path.join(__dirname + "../../../src/modules") });
//
const modules = fs.readdirSync(path.join(__dirname + "../../../src/modules"));
console.log(modules);
module.exports = {
  description: "Creates a new component",
  prompts: [
    {
      type: "list",
      choices: modules,
      name: "module",
      message: "Which module?",
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of the component?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "../src/modules/{{module}}/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx",
      templateFile: "templates/index.tsx.hbs",
    },
    // {
    //   type: "add",
    //   path: "../src/modules/{{module}}/components/{{pascalCase name}}/{{pascalCase name}}.scss",
    //   templateFile: "templates/style.ts.hbs",
    // },
    {
      type: "add",
      path: "../src/modules/{{module}}/components/{{pascalCase name}}/{{pascalCase name}}.props.ts",
      templateFile: "templates/props.ts.hbs",
    },
    {
      type: "add",
      path: "../src/modules/{{module}}/components/{{pascalCase name}}/{{pascalCase name}}.mock.ts",
      templateFile: "templates/mock.ts.hbs",
    },
    {
      type: "add",
      path: "../src/modules/{{module}}/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
      templateFile: "templates/story.tsx.hbs",
    },
  ],
};
