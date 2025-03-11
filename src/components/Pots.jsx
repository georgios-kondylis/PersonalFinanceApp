import React from "react";
import { formatDate } from "../utils";

const RecurringBills = ({ recurringBills }) => {

  const paidBills = recurringBills.filter((bill) => bill.amount < 0);
  const paidBillsAmount = paidBills.reduce((acc, bill) => acc + bill.amount ,0); 


  return (   //  remove gap
    <div className="gap-4 section">
      {recurringBills.map((bill, index) => (
        <div key={index} className="txt1 flex gap-5">
          <img src={bill.avatar} alt={bill.name} width={50} height={50} />
          <div>
          <p>Name: {bill.name}</p>
          <p>Category: {bill.category}</p>
          <p>amount: {bill.amount}</p>
          <p>Date: {formatDate(bill.date)}</p>
          </div>

        </div>
      ))}
      <p>Paid : {paidBills.length}, amount: {paidBillsAmount}</p>
    </div>
  );
};

export default RecurringBills;











// Name: Pixel Playground
// Category: Entertainment
// amount: -10
// Date: 2024-08-11T18:45:38.000Z


// Name: Elevate Education
// Category: Education
// amount: -90
// Date: 2024-08-05T11:12:10.000Z


// Name: Spark Electric Solutions
// Category: Services
// amount: 100
// Date: 2024-08-03T16:00:15.000Z


// Name: Aqua Flow Utilities
// Category: Utilities
// amount: -50
// Date: 2024-07-31T12:10:00.000Z


// Name: Yuna Kim
// Category: General
// amount: 90
// Date: 2024-07-29T11:15:27.000Z


// Name: Harper Edwards
// Category: Entertainment
// amount: 55
// Date: 2024-07-27T14:45:50.000Z


// Name: Technova Innovations
// Category: Technology
// amount: -120
// Date: 2024-07-25T10:15:30.000Z


// Name: ByteWise
// Category: Lifestyle
// amount: -49.99
// Date: 2024-07-23T09:35:14.000Z