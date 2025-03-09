import { Routes, Route } from 'react-router-dom';
import { custom_950px_breakpoint } from './utils';
import { useEffect, useState } from 'react';

import HomePage from './components/HomePage';
import SideNav from './components/navbars/SideNav';
import SmallNav from './components/navbars/SmallNav';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';
import Pots from './components/Pots';
import RecurringBills from './components/RecurringBills';


function App() {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const toggleNav = () => setNavIsOpen((prev) => !prev);
  const wideScreen = custom_950px_breakpoint();

  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState([]);
  const [pots, setPots] = useState([]);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => { // Fetch all MongoDB data
    const fetchData = async () => {
      try {
        const transactionsRes = await fetch('http://localhost:5173/api/transactions');
        const balanceRes = await fetch('http://localhost:5000/api/balance');
        const potsRes = await fetch('http://localhost:5000/api/pots');
        const budgetsRes = await fetch('http://localhost:5000/api/budgets');

        const transactionsData = await transactionsRes.json();
        const balanceData = await balanceRes.json();
        const potsData = await potsRes.json();
        const budgetData = await budgetsRes.json();
  
        setTransactions(transactionsData);   // Update states
        setBalance(balanceData);
        setPots(potsData);
        setBudgets(budgetData);
        
      } catch (error) {
        console.log('❌ Failed fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className='flex w-full gray1'>
      {wideScreen?
      <SideNav toggleNav={toggleNav} navIsOpen={navIsOpen}/> : <SmallNav/>}
      <Routes>
        <Route path="/" element={<HomePage transactions={transactions} pots={pots} budgets={budgets} balance={balance} />} />
        <Route path="/transactions" element={<Transactions balance={balance} transactions={transactions} />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/recurring-bills" element={<RecurringBills />} />
      </Routes>
    </div>
  );
}

export default App;

// 1920×1080
// 1440x664 min skärm