import React from "react";
import { formatAmount } from "../utils";
import { useNavigate } from "react-router-dom";
import ViewAll from "./ui/ViewAll";
import TransacionLine from "./ui/TransacionLine";
import PotsBox from "./ui/PotsBox";
import MyPieChart from "./ui/MyPieChart";
import BudgetDetails from "./ui/BudgetDetails";
import RecBillsBox from "./ui/RecBillsBox";
import { capitalizeFirstLetter } from "../utils";


const HomePage = ({ 
  transactions, 
  budgets, 
  pots, 
  balance, 
  recurringBills, 
  paidBills, 
  totalUpcoming, 
  within5days}) => {

  const navigate = useNavigate();
  const userInfo = sessionStorage.getItem('user');
  const user = JSON.parse(userInfo);

  return (
    <section className="section">
      <div className="flex flex-col headerGAP h-full">
        <div className="flex justify-between items-center">
           <h1 className="txt5">Overview</h1>

           <div className="flex items-center gap-[20px]">
            <h1 className="txt5 max-sm:hidden">{capitalizeFirstLetter(user.name) || 'User'}</h1>
            <button className="Add_Button"
              onClick={() => {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');
                navigate('/sign-in')
              }}>
              Log out
            </button>
           </div>
        </div>

        {/* Balance Section */}
        <div className="flex flex-wrap gap-4 justify-between">
          {balance?.map((item, i) => (
            <div key={i} className={`flex flex-1 min-w-[250px] gap-5 flex-col p-5 rounded-lg 
                ${item.name === "current" ? "gray1 text-white" : "bg-white"}`}
            >
              <h1 className="txt1">{item.name}</h1>
              <h2 className="txt5">{formatAmount(item.amount)}</h2>
            </div>
          ))}
        </div>

        {/* Main Layout */}
        <div className="flex w-full GAP max-1250:flex-col">
         
          <div className="flex flex-col GAP w-[60%] max-1250:w-full">
              {/* Pots Box */}
            <div className="gridBox h-fit">
              <PotsBox pots={pots} />
            </div>
              {/* Transactions Section */}
            <div className="gridBox h-fit flex flex-col gap-[20px]">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Transactions</h1>
                <div onClick={() => navigate("/transactions")}> <ViewAll label={'View All'} /> </div>
              </div>

              <div className="flex flex-col">
                {transactions.slice(0, 5).map((transaction, i) => (
                  <TransacionLine
                    key={i}
                    amount={transaction.amount}
                    date={transaction.date}
                    avatar={transaction.avatar}
                    name={transaction.name}
                  />
                ))}
              </div>
            </div>
          </div>
        
          <div className="flex flex-col GAP w-[40%] max-1250:w-full">
                 {/* Budgets Section */}
            <div className="gridBox max-sm:h-[460px] flex flex-col items-center justify-center
                            max-sm:min-h-[460px] max-sm:justify-between">
              <div className="flex items-center mb-[20px] sm:mb-[40px] justify-between w-full">
                 <h2 className="text-lg font-semibold">Budgets</h2>
                 <div onClick={() => navigate("/budgets")}> <ViewAll label={'See details'}/> </div>
              </div>
              <div className="flex gap-[10px] max-sm:flex-col w-full justify-cencter items-center">
                <div className="w-full h-full max-sm:max-h-[50%] max-sm:h-[300px]">
                  <MyPieChart budgets={budgets}/>
                </div>
                <div>
                  <BudgetDetails budgets={budgets}/>
                </div>
         
              </div>
              
            </div>
                
                 {/* Recurring Bills */}
            <div className="gridBox gap-[40px] w-full flex flex-col justify-between">
              <div className="flex items-center justify-between w-full">
                 <h2 className="text-lg font-semibold">Recurring Bills</h2>
                 <div onClick={() => navigate("/recurring-bills")}> <ViewAll label={'See details'}/> </div>
              </div>

               <div>
                 <RecBillsBox 
                  recurringBills={recurringBills}
                  paidBills={paidBills} 
                  totalUpcoming={totalUpcoming}
                  within5days={within5days}/>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomePage;
