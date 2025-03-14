import React from "react";
import { formatAmount } from "../../utils";

const RecBillsBox = ({ 
  recurringBills,
  paidBills, 
  totalUpcoming, 
  within5days }) => {
  
  const paidBillsSum = paidBills.reduce((acc, bill) => acc + Math.abs(bill.amount), 0);
  const upcomingBillsSum = totalUpcoming.reduce((acc, bill) => acc + Math.abs(bill.amount), 0);
  const within5daysSum = within5days.reduce((acc, bill) => acc + Math.abs(bill.amount), 0);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between beige1 items-center px-[15px] py-[25px] border-l-[5px] border-[#277c78] rounded-[10px]">
        <p className="text-[15px] text-[#727272] font-sans font-light">
          Paid bills
        </p>
        <p>{formatAmount(paidBillsSum)}</p>
      </div>
      <div className="flex justify-between beige1 items-center px-[15px] py-[25px] border-l-[5px] border-[#f3cdac] rounded-[10px]">
        <p className="text-[15px] text-[#727272] font-sans font-light">
          Total Upcoming
        </p>
        <p>{formatAmount(upcomingBillsSum)}</p>
      </div>
      <div className="flex justify-between beige1 items-center px-[15px] py-[25px] border-l-[5px] border-[#82c9d7] rounded-[10px]">
        <p className="text-[15px] text-[#727272] font-sans font-light">
          Due Soon
        </p>
        <p>{formatAmount(paidBillsSum)}</p>
      </div>
    </div>
  );
};

export default RecBillsBox;
// const colors = ['#277c78', '#f3cdac', '#82c9d7'];