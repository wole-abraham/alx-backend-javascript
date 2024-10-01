import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gpd, capita) {
  const budget = getBudgetObject(income, gpd, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) { return `$${income}`},
    getIncomeInEuros(income) { return  `${income} euros`}
  };
  return fullBudget;
}
