import React from "react";
import { formatAmount } from "../../utils";

const RecBillsBox = ({ recurringBills }) => {

  const formatedBills = (amount) => amount < 0 ? Math.abs(Number(amount)).toFixed(2) : '';

  return (
    <div className="flex flex-col gap-[20px]">
      {recurringBills.slice(0, 3).map((bill, i) => {
        const colors = ['#277c78', '#f3cdac', '#82c9d7'];
        return (
          <div key={i} style={{ borderColor: colors[i % colors.length] }}
            className="flex justify-between beige1 items-center px-[15px] py-[25px] border-l-[5px] rounded-md">
            <p className="text-[15px] text-[#727272] font-sans font-light">{bill.name}</p>
            <p>${formatedBills(bill.amount)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecBillsBox;
