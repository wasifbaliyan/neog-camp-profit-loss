const purchasePrice = document.querySelector("#purchase-price");
const quantityOfStocks = document.querySelector("#quantity");
const sellingPrice = document.querySelector("#selling-price");
const stockForm = document.querySelector(".stock-form");
const result = document.querySelector(".result");

result.style.display = "none";

const calculateLoss = (pp, sp, quantity) => {
  const percent = ((pp - sp) * quantity * 100) / pp;
  const rupees = (pp - sp) * quantity;
  return {
    percent,
    rupees,
  };
};
const calculateProfit = (pp, sp, quantity) => {
  const percent = ((sp - pp) * quantity * 100) / pp;
  const rupees = (sp - pp) * quantity;
  return {
    percent,
    rupees,
  };
};

stockForm.addEventListener("submit", (e) => {
  result.style.display = "";

  e.preventDefault();
  const pp = Number(purchasePrice.value);
  const sp = Number(sellingPrice.value);
  const quantity = Number(quantityOfStocks.value);

  if (pp === 0 || sp === 0 || quantity === 0) {
    result.textContent = "Input cannot be zero.";
    return;
  }
  if (sp > pp) {
    const profit = calculateProfit(pp, sp, quantity);
    result.textContent =
      "Your profit was found to be " +
      profit.percent.toFixed(2) +
      "% and " +
      profit.rupees +
      " rupees";
  } else if (sp < pp) {
    const loss = calculateLoss(pp, sp, quantity);
    result.textContent =
      "Your loss was found to be " +
      loss.percent.toFixed(2) +
      "% and " +
      loss.rupees +
      " rupees";
  } else {
    result.textContent = "You're neither in loss nor in profit.";
  }
});
