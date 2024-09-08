import inquirer from "inquirer";

// user variable
let todos: any[] = [];
async function main() { // async function to use 'await' inside
    while (true) {
        let input = await inquirer.prompt([
            {
                name: "todoitem",
                type: "input",
                message: "Add todo item to the list:"
            },
            {
                name: "addMore",
                type: 'list',
                choices: ["yes", "no"],
                message: "Do you want to add more items?"
            }
        ]);

        // output of program
        const { todoitem, addMore } = input; 

        todos.push(todoitem);
        if (addMore === "no") { 
            console.log("Todo List:");

            // Displaying all todo items
            for (let i = 0; i < todos.length; i++) {
                console.log(todos[i]);
            }
            break; // Exiting the loop when user doesn't want to add more items
        }
    }
}

main();