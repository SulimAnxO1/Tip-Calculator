// DOM ELEMENTS
const billAmountInput = document.getElementById("billAmount");
const customTipInput = document.getElementById("customTip");
const peopleCount = document.getElementById("peopleCount");
const decreasePeopleBtn = document.getElementById("decreasePeople");
const increasePeopleBtn = document.getElementById("increasePeople");
const resetBtn = document.getElementById("resetBtn");

// RESULT ELEMENTS
const tipAmountDisplay = document.getElementById("tipAmount");
const totalAmountDisplay = document.getElementById("totalAmount");
const perPersonAmountDisplay = document.getElementById("perPersonAmount");
const tipPerPersonDisplay = document.getElementById("tipPerPerson");

// TIP BUTTONS
const tipButtons = document.querySelectorAll(".tip-btn");

// DEFAULT VALUES
let billAmount = 0;
let tipPercentage = 15;
let numberOfPeople = 1;

// FORMATE CURRENCY
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// TIP CALCULATE
function calculateTip() {
  billAmount = parseFloat(billAmountInput.value) || 0;
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  const perPersonAmount = totalAmount / numberOfPeople;
  const tipPerPerson = tipAmount / numberOfPeople;

  tipAmountDisplay.textContent = formatCurrency(tipAmount);
  totalAmountDisplay.textContent = formatCurrency(totalAmount);
  perPersonAmountDisplay.textContent = formatCurrency(perPersonAmount);
  tipPerPersonDisplay.textContent = formatCurrency(tipPerPerson);
}

// ACTIVE TIP BUTTON
function setActiveTipButton(percentage) {
  tipButtons.forEach((btn) => {
    btn.classList.toggle("active", parseInt(btn.dataset.tip) === percentage);
  });
}

// PEOPLE COUNTER
function updatePeopleCount(change) {
  numberOfPeople = Math.max(1, numberOfPeople + change);
  peopleCount.textContent = numberOfPeople;
  calculateTip();
}

// RESET ALL BUTTON
function resetAll() {
  billAmount = 0;
  tipPercentage = 15;
  numberOfPeople = 1;

  billAmountInput.value = "";
  customTipInput.value = "";
  peopleCount.textContent = "1";

  setActiveTipButton(15);
  calculateTip();
}

// INPUT EFFECTS
function addInputEffects() {
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.style.transform = "translateY(-2px)";
    });
    input.addEventListener("blur", () => {
      input.parentElement.style.transform = "translateY(0)";
    });
  });
}

// SETUP EVENTS
window.onload = () => {
  billAmountInput.addEventListener("input", calculateTip);

  tipButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      tipPercentage = parseInt(this.dataset.tip);
      setActiveTipButton(tipPercentage);
      customTipInput.value = "";
      calculateTip();
    });
  });

  customTipInput.addEventListener("input", function () {
    const customTip = parseFloat(this.value) || 0;
    if (customTip >= 0) {
      tipPercentage = customTip;
      tipButtons.forEach((btn) => btn.classList.remove("active"));
      calculateTip();
    }
  });

  decreasePeopleBtn.addEventListener("click", () => updatePeopleCount(-1));
  increasePeopleBtn.addEventListener("click", () => updatePeopleCount(1));
  resetBtn.addEventListener("click", resetAll);

  setActiveTipButton(15);
  calculateTip();
  billAmountInput.focus();
  addInputEffects();
};

