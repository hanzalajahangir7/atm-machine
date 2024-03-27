#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to HJR enterprises atm");
let myPin = 2189;
console.log(myPin);
let myBalance = 20000;
console.log(myBalance);
let answer = await inquirer.prompt([{ name: "mypin", type: "number", message: "Enter your pin number" }]);
if (answer.mypin === myPin) {
    console.log("Access Granted");
    let answer2 = await inquirer.prompt([{ name: "operation", type: "list", message: "Enter your required operation", choices: ["Withdraw", "Replenish", "CheckBalance"] }]);
    if (answer2.operation === "Withdraw") {
        let answer3 = await inquirer.prompt([{ name: "money", type: "number", message: "Enter your amount to withdraw" }]);
        myBalance -= answer3.money;
        if (answer3.money > myBalance) {
            console.log("please try again");
        }
        else {
            console.log("kindly wait for withdrawl");
        }
        console.log("your current balance is: " + myBalance);
    }
    else if (answer2.operation === "Replenish") {
        let answer4 = await inquirer.prompt([{ name: "money2", type: "number", message: "Enter your amount to Replenish" }]);
        myBalance += answer4.money2;
        console.log("your updated balance is: " + myBalance);
    }
    else if (answer2.operation === "CheckBalance") {
        console.log("remaining balace is: " + myBalance);
    }
}
else {
    console.log("Access Denied");
}
console.log("Thank you for using HJR enterprises atm");
