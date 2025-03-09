// apiCalls.js 

export const fetchMongoData = async () => {
  try {
    const transactionsRes = await fetch('http://localhost:5173/api/transactions');
    const balanceRes = await fetch('http://localhost:5000/api/balance');

    const transactionsData = await transactionsRes.json();
    const balanceData = await balanceRes.json();

    return { transactions: transactionsData, balance: balanceData };  
  } catch (error) {
    console.error('❌ Failed fetching data:', error);
    return { transactions: [], balance: 0 }; // Return safe defaults
  }
};
 
// Later on App.jsx

// import { fetchMongoData } from './apiCalls';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { transactions, balance } = await fetchMongoData();
  //     setTransactions(transactions);
  //     setBalance(balance);
  //   };

  //   fetchData();
  // }, []);
