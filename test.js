function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0) {
        return "Invalid Input";
    }

    const netIncome = income - expenses;
    const tax = netIncome * .20;

    if (tax < 0) {
        return "Invalid Input";
    }
    return tax;

}

function sendNotification(email) {

    if (!email.includes('@')) {
        return "Invalid Email";
    }

    const indexOfAdd = email.indexOf('@');
    const userName = email.slice(0, indexOfAdd);
    const domainName = email.slice(indexOfAdd + 1);
    const message = `${userName} sent you an email from ${domainName}`;

    return message;

}


function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return "Invalid Input"
    }

    let output = false;

    for (let i of name) {

        if (!isNaN(i)) {
            output = true;
            break;
        }

    }

    return output;

}

