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





