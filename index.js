import inquirer from "inquirer";
// Currency conversion rates
const conversionRates = {
    "PKR": {
        "USD": 0.0045,
        "GBP": 0.0040,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.25,
        "PKR": 260,
        "GBP": 1,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.75,
        "PKR": 180,
    }
};
// Using Inquirer for user input
async function performCurrencyConversion() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your base currency..?",
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "USD", "GBP"],
            message: "Select your target currency..?",
        },
        {
            type: "number",
            name: "amount",
            message: "Enter the amount to convert",
        }
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        const result = conversionRates[from][to] * amount;
        console.log(`Your conversion from ${from} to ${to} is ${result}`);
    }
    else {
        console.log("Invalid inputs");
    }
}
performCurrencyConversion();
