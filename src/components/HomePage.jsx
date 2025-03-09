import React from "react";
import { formatAmount } from "../utils";
import { useNavigate } from "react-router-dom";
import ViewAll from "./ui/ViewAll";
import TransacionLine from "./ui/TransacionLine";
import PotsBox from "./ui/PotsBox";

const HomePage = ({ transactions, budgets, pots, balance }) => {
  const navigate = useNavigate();

  return (
    <section className="beige1 px-[35px] py-[30px] flex flex-col w-full min-h-screen max-950:pb-[100px]">
      <div className="flex flex-col gap-6 h-full">
        <h1 className="txt5 mb-[10px]">Overview</h1>

        {/* Balance Section */}
        <div className="flex flex-wrap gap-4 justify-between">
          {balance?.map((item, i) => (
            <div
              key={i}
              className={`flex flex-1 min-w-[150px] gap-5 flex-col p-5 rounded-lg 
                ${item.name === "current" ? "gray1 text-white" : "bg-white"}`}
            >
              <h1 className="txt1">{item.name}</h1>
              <h2 className="txt5 max-md:text-[22px]">{formatAmount(item.amount)}</h2>
            </div>
          ))}
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 grid-rows-[auto] gap-[17px] max-lg:flex max-lg:flex-col">
          {/* Pots Box */}
          <div className="gridBox col-span-7">
            <PotsBox pots={pots} />
          </div>

          {/* Budgets Section */}
          <div className="gridBox col-span-5 flex items-center justify-center">
            <h2 className="text-lg font-semibold">Budgets</h2>
          </div>

          {/* Transactions Section */}
          <div className="gridBox col-span-7 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Transactions</h1>
              <div onClick={() => navigate("/transactions")}> <ViewAll /> </div>
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

          {/* Recurring Bills */}
          <div className="gridBox col-span-5 p-4 flex items-center justify-center">
            <h2 className="text-lg font-semibold">Recurring Bills</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
