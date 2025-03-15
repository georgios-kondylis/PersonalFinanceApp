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
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/pots" element={<Pots recurringBills={recurringBills} />} />
        <Route path="/recurring-bills" element={
          <RecurringBills 
            recurringBills={recurringBills} 
            paidBills={paidBills} 
            totalUpcoming={totalUpcoming}
            within5days={within5days}/>} />
      </Routes>
    </div>
  );
}

export default App;

// 1920×1080
// 1440x664 min skärm


//<svg height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg"
// className="fill-[#201f24] cursor-pointer hover:scale-[1.2] transition1"
// onClick={() => setCategDropDownOpen((prevState) => !prevState)}>
// <path d="m16.7976 2.71562-.0062.00704-5.2914 5.65v4.33514c.0003.2062-.0504.4092-.1476.5911-.0972.1818-.2379.3368-.4095.4511l-2.49995 1.6672c-.1884.1255-.40734.1975-.63344.2082-.22611.0108-.45091-.04-.65039-.147s-.36616-.2662-.48225-.4605-.17723-.4165-.17689-.6429v-6.00234l-5.29141-5.65-.00625-.00704c-.16269-.17905-.269938-.40146-.308716-.64026s-.007425-.48373.090256-.70506c.09768-.22133.25749-.409563.46005-.541857.20255-.132294.43914-.202966.68107-.203443h13.75002c.2421.000024.479.070368.6819.202485.2029.132118.3631.320325.4611.541745.0979.22142.1295.46653.0908.70555-.0387.23901-.146.46165-.3088.64084z"/>
// </svg>