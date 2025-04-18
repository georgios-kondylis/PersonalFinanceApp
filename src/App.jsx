import { Routes, Route } from 'react-router-dom';
import { custom_950px_breakpoint } from './utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import SideNav from './components/navbars/SideNav';
import SmallNav from './components/navbars/SmallNav';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';
import Pots from './components/Pots';
import RecurringBills from './components/RecurringBills';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import ProtectedRoute from './Auth/ProtectedRoutes';

function App() {
  const navigate = useNavigate();
  const [APPROVED, setAPPROVED] = useState(false);

  //    import.meta.env.VITE_BACKEND_API_URL
  const backend_URL = import.meta.env.VITE_BACKEND_API_URL;

 useEffect(() => {
  const token = sessionStorage.getItem("token"); // as soon as you log in a token gets generated and lasts for 2 hours

  if (token) {
    setAPPROVED(true);
    navigate('/'); // ✅ Redirect only after setting state
  } else {
    navigate('/sign-in');
  }
}, [APPROVED]);

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
        const transactionsRes = await fetch(`${backend_URL}/api/transactions`);
        const balanceRes = await fetch(`${backend_URL}/api/balance`);
        const potsRes = await fetch(`${backend_URL}/api/pots`);
        const budgetsRes = await fetch(`${backend_URL}/api/budgets`);

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
  
  const [categSelected, setCategSelected] = useState(''); // this will be passed to Transactions.jsx and Budgets.jsx
  return (
    <div className='flex w-full '>
      {wideScreen?
      <SideNav toggleNav={toggleNav} navIsOpen={navIsOpen}/> : <SmallNav/>}
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
             <HomePage 
              transactions={transactions}
              pots={pots} budgets={budgets} 
              balance={balance} 
              recurringBills={recurringBills} 
              paidBills={paidBills} 
              totalUpcoming={totalUpcoming}
              within5days={within5days}/>
          </ProtectedRoute>
         } 
         />

        <Route path="/transactions" element={
          <ProtectedRoute>
             <Transactions transactions={transactions} categSelected={categSelected} setCategSelected={setCategSelected} />
          </ProtectedRoute> 
        } />
        <Route path="/budgets" element={
          <ProtectedRoute>
            <Budgets  budgets={budgets} transactions={transactions} UPDATE={UPDATE} setCategSelected={setCategSelected}/>
          </ProtectedRoute>
          } />
        <Route path="/pots" element={
          <ProtectedRoute>
            <Pots pots={pots} UPDATE={UPDATE} />
          </ProtectedRoute>
          } />
        <Route path="/recurring-bills" element={
          <ProtectedRoute>
            <RecurringBills recurringBills={recurringBills} paidBills={paidBills} totalUpcoming={totalUpcoming} within5days={within5days}/>
          </ProtectedRoute>
          } />
       

        <Route path="/sign-in" element={<SignIn setAPPROVED={setAPPROVED}/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;

// 1920×1080
// 1440x664 min skärm