// DOM ELEMENTS
const billAmountInput = document.getElementById("billAmount");
const customTipInput = document.getElementById("customTip");
const peopleCount = document.getElementById("peopleCount");
const decreasePeopleBtn = document.getElementById("decreasePeople");
const increasePeopleBtn = document.getElementById("increasePeople");
const resetBtn = document.getElementById("resetBtn");
const tipAmountDisplay = document.getElementById("tipAmount");
const totalAmountDisplay = document.getElementById("totalAmount");
const perPersonAmountDisplay = document.getElementById("perPersonAmount");
const tipPerPersonDisplay = document.getElementById("tipPerPerson");
const tipButtons = document.querySelectorAll(".tip-btn");

// BILL VALUES
let billAmount = 0;
let tipPercentage = 15;
let numberOfPeople = 1;
