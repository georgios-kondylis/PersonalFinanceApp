// apiCalls.js 
export const fetchData = async () => { // not in use
  try {
    const transactionsRes = await fetch('http://localhost:5173/api/transactions');
    const balanceRes = await fetch('http://localhost:5000/api/balance');
    const potsRes = await fetch('http://localhost:5000/api/pots');
    const budgetsRes = await fetch('http://localhost:5000/api/budgets');

    const transactionsData = await transactionsRes.json();
    const balanceData = await balanceRes.json();
    const potsData = await potsRes.json();
    const budgetData = await budgetsRes.json();

    return { transactionsData, balanceData, potsData, budgetData };
  } catch (error) {
    console.log('❌ Failed fetching data:', error);
    throw error; // To handle it in the component
  }
};
