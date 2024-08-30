#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let cond = true;
while (cond) {
    let addTodo = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos",
        },
    ]);
    if (addTodo.todo) {
        todos.push(addTodo.todo);
        console.log(todos);
        let moreOptions = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Enter one option from following",
                choices: ["You wnat to add more Todos", "You want to remove Todos"],
            },
        ]);
        if (moreOptions.option === "You wnat to add more Todos") {
            let add = await inquirer.prompt([
                {
                    name: "more",
                    type: "confirm",
                    message: "Do you want to add more Todos ?",
                    default: "false",
                },
            ]);
            cond = add.more;
            console.log(todos);
        }
        else if (moreOptions.option === "You want to remove Todos") {
            let removes = await inquirer.prompt([
                {
                    name: "remove",
                    type: "input",
                    message: "Enter the item name to remove",
                },
            ]);
            if (removes.remove === addTodo.todo) {
                todos.pop();
                console.log(todos);
            }
        }
    }
    else {
        console.log("Please enter something");
    }
}
