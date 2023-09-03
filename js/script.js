const calculateExpense = () => {
  const income = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  const income = document.getElementById("income").value;
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;

  const savingAmount = (savePercentage / 100) * income;

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  

//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
    
  }
  
  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } 
  if (savingAmount < 0) {
    document.getElementById("saving-amount").innerText = '';
    document.getElementById("remaining-balance").innerText = '';
  } 
  else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
