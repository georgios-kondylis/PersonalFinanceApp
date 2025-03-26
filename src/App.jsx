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
  const recurringBillsDoubles = transactions.filter((transaction) => transaction.recurring === true);
    // Remove duplicates based on name, category, and amount (ignore date)
  const recurringBills = recurringBillsDoubles.filter((bill, index, self) =>
      index === self.findIndex(b => 
        b.name === bill.name &&
        b.category === bill.category &&
        b.amount === bill.amount
      )
  );
  const currDate = new Date();
  const currDay = currDate.getDate(); // Get today's day of the month

  const paidBills = recurringBills.filter(bill => {
    const billDay = new Date(bill.date).getDate(); // Get bill's day of the month
    return billDay < currDay; // If the bill's day has passed this month
  });

  const totalUpcoming = recurringBills.filter(bill => {
    const billDay = new Date(bill.date).getDate();
    return billDay >= currDay; // If the bill's day is today or later
  });

  const within5days = recurringBills.filter(bill => {
    const billDay = new Date(bill.date).getDate();
    return billDay > currDay && billDay <= currDay + 5; // Due within the next 5 days
  });

  const [REFETCH_TRIGGER, SET_REFETCH_TRIGGER] = useState(false);
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
        console.log('update <------------------------')
        
      } catch (error) {
        console.log('❌ Failed fetching data:', error);
      }
    };
  
    fetchData();
  }, [REFETCH_TRIGGER]);

  const UPDATE = () => SET_REFETCH_TRIGGER(prev => !prev);   // Perform the action (e.g., delete or update pot), After completing the action, trigger the refetch
  
  return (
    <div className='flex w-full gray1'>
      {wideScreen?
      <SideNav toggleNav={toggleNav} navIsOpen={navIsOpen}/> : <SmallNav/>}
      <Routes>
        <Route path="/" element={
          <HomePage 
          transactions={transactions}
           pots={pots} budgets={budgets} 
           balance={balance} 
           recurringBills={recurringBills} 
           paidBills={paidBills} 
           totalUpcoming={totalUpcoming}
           within5days={within5days}/>} 
         />

        <Route path="/transactions" element={<Transactions transactions={transactions} />} />
        <Route path="/budgets" element={<Budgets  budgets={budgets} transactions={transactions} UPDATE={UPDATE} />} />
        <Route path="/pots" element={<Pots pots={pots} UPDATE={UPDATE} />} />
        <Route path="/recurring-bills" element={<RecurringBills recurringBills={recurringBills} paidBills={paidBills} totalUpcoming={totalUpcoming} within5days={within5days}/>} />
      </Routes>
    </div>
  );
}

export default App;

// 1920×1080
// 1440x664 min skärm