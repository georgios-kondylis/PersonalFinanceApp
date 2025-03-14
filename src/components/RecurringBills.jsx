import React from "react";
import { formatDate } from "../utils";
import { formatAmount } from "../utils";
import SearchSort from "./ui/SearchSort";
import { getOrdinalSuffix } from "../utils";
import { useState, useEffect } from "react";

const RecurringBills = ({ recurringBills, paidBills, totalUpcoming, within5days}) => {

  const [selected, setSelected] = useState("");
  const [sortedBills, setSortedBills] = useState([]);
  const [searchResult, setSearchResult] = useState('');

   // Set default sorted bills when component mounts
   useEffect(() => {
    setSortedBills(recurringBills);
  }, [recurringBills]); // Using [] runs this effect only once on mount. If recurringBills updates later (e.g., from an API), sortedBills won't update, causing stale data.
  
  const handleChangeSelect = (event) => {
    const selectedOption = event.target.value;
    setSelected(selectedOption);

    const sorted = [...recurringBills].sort((a, b) => {
      if (selectedOption === "Latest") {
        return new Date(b.Date) - new Date(a.date);
      }
      if (selectedOption === "Oldest") {
        return new Date(a.date) - new Date(b.date);
      }
      if (selectedOption === "A to Z") {
        return a.name.localeCompare(b.name);
      }
      if (selectedOption === "Z to A") {
        return b.name.localeCompare(a.name);
      }
      if (selectedOption === "Highest") {
        return a.amount - b.amount;
      }
      if (selectedOption === "Lowest") {
        return b.amount - a.amount;
      }
      
      return 0; // Default case (if needed)
    });

    setSortedBills(sorted);
  };

  const billsSum = recurringBills.reduce((acc, bill) => acc + bill.amount, 0);
  const billsSum2 = Math.abs(Number(billsSum));

  const paidBillsSum = paidBills.reduce((acc, bill) => acc + Math.abs(bill.amount), 0);
  const upcomingBillsSum = totalUpcoming.reduce((acc, bill) => acc + Math.abs(bill.amount), 0);
  const within5daysSum = within5days.reduce((acc, bill) => acc + Math.abs(bill.amount), 0);
  //----------------------------------------

  return (
    <section className="section">
      <div className="flex flex-col headerGAP">
        <h1 className="txt5">Reccuring Bills</h1>

        <div id="Content_Container" className="GAP flex max-lg:flex-col flex-wrap">
           {/*-------- BILLS AND SUMMARRY -------- */}
          <div id="Total_&_Summary" className="GAP flex max-sm:flex-wrap lg:flex-col max-lg:w-full w-[35%]">
            <div className="gray1 w-full p-[30px] gap-[40px] rounded-[10px] text-white flex flex-col justify-between
               max-sm:flex-row max-sm:items-center max-sm:justify-center h-fit">
              {/* SVG */}
              <div className='fill-[#fff]'>
                 <svg height="28" viewBox="0 0 32 28" width="32" xmlns="http://www.w3.org/2000/svg">
                     <path d="m24.4375 10.25c0 .2486-.0988.4871-.2746.6629s-.4143.2746-.6629.2746h-15c-.24864 0-.4871-.0988-.66291-.2746-.17582-.1758-.27459-.4143-.27459-.6629s.09877-.4871.27459-.66291c.17581-.17582.41427-.27459.66291-.27459h15c.2486 0 .4871.09877.6629.27459.1758.17581.2746.41431.2746.66291zm-.9375 4.0625h-15c-.24864 0-.4871.0988-.66291.2746-.17582.1758-.27459.4143-.27459.6629s.09877.4871.27459.6629c.17581.1758.41427.2746.66291.2746h15c.2486 0 .4871-.0988.6629-.2746s.2746-.4143.2746-.6629-.0988-.4871-.2746-.6629-.4143-.2746-.6629-.2746zm8.4375-11.5625v23.75c-.0002.1598-.0412.3168-.1191.4563-.078.1395-.1902.2567-.3262.3406-.1476.0921-.3182.1409-.4922.1406-.1453.0001-.2887-.0336-.4187-.0984l-4.5813-2.2907-4.5813 2.2907c-.13.0649-.2734.0987-.4187.0987s-.2887-.0338-.4187-.0987l-4.5813-2.2907-4.5813 2.2907c-.13.0649-.2734.0987-.4187.0987s-.2887-.0338-.4187-.0987l-4.5813-2.2907-4.58125 2.2907c-.14295.0713-.30178.105-.461388.0977-.159613-.0073-.314721-.0552-.450598-.1393-.135877-.084-.248016-.2014-.325769-.341-.077754-.1396-.1185428-.2967-.118495-.4565v-23.75c0-.58016.230468-1.13656.640704-1.5468.410236-.410232.966636-.6407 1.546796-.6407h27.5c.5802 0 1.1366.230468 1.5468.6407.4102.41024.6407.96664.6407 1.5468zm-1.875 0c0-.08288-.0329-.16237-.0915-.22097-.0586-.05861-.1381-.09153-.221-.09153h-27.5c-.08288 0-.16237.03292-.22097.09153-.05861.0586-.09153.13809-.09153.22097v22.2328l3.64375-1.8219c.13004-.0649.2734-.0987.41875-.0987s.28871.0338.41875.0987l4.58125 2.2907 4.5813-2.2907c.13-.0649.2734-.0987.4187-.0987s.2887.0338.4187.0987l4.5813 2.2907 4.5813-2.2907c.13-.0649.2734-.0987.4187-.0987s.2887.0338.4187.0987l3.6438 1.8219z"/>
                 </svg>
              </div>
              {/*Text*/}
              <div className="flex flex-col gap-[10px]">
                <h1 className="thinSubText2">Total Bills</h1>
                <p className="txt5">{formatAmount(billsSum2)}</p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-[10px] bg-white rounded-[10px] p-[30px]">
              <h1>Summary</h1>
              <div className="w-full">
                  <div className="flex py-[17px] border-b items-center justify-between">
                    <h1 className="thinSubText">PaidBills</h1>
                    <p>{paidBills.length} {`(${formatAmount(paidBillsSum)})`}</p>
                  </div>
                  <div className="flex py-[17px] border-b items-center justify-between">
                    <h1 className="thinSubText">Total Upcoming</h1>
                    <p>{totalUpcoming.length} {`(${formatAmount(upcomingBillsSum)})`}</p>
                  </div>
                  <div className="flex pt-[17px] text-[#e02b2b] items-center justify-between">
                    <h1 className="thinSubTextRed">Due Soon</h1>
                    <p>{within5days.length} {`(${formatAmount(within5daysSum)})`}</p>
                  </div>
              </div>
            </div>
          </div>
           {/*-------- ------------------ -------- */}
          <div id="Bills" className="flex flex-col GAP p-[30px] bg-white max-lg:w-[100%] w-[60%] rounded-[10px]">
            <SearchSort 
              setSearchResult={setSearchResult}
              handleChangeSelect = {handleChangeSelect}
              selected={selected}
            />
              
            <div className="flex flex-col">
              <div className="flex thinSubText justify-between border-b-[2px] py-[17px]">
                <h1>Bill title</h1>
                <div className="flex items-center justify-between w-[50%]">
                  <h1>Due date</h1>
                  <h1>Amount</h1>
                </div>
              </div>

              {sortedBills
                .filter((bill) => bill.name.toLowerCase().includes(searchResult.toLowerCase()))
                .map((bill, i) => {
                  const date = new Date(bill.date);
                  const day = date.getDate(); 

                  const currDate = new Date();
                  const today = currDate.getDate();
                  const dueDate = day - today;

                  const formattedDay = `${day}${getOrdinalSuffix(day)}`; // e.g., Monday 11th

                  const statusIcon = day < today ? // if bill date is less than today Paid ✅
                    <i className="text-[14px] text-[#277c78] fa-solid fa-circle-check"></i> 
                      : dueDate <= 5 && dueDate >= 0 ? // if bill date is 5 within 5days away Due soon ❗️
                    <i className="text-[14px] mb-[2px] text-[#c94736] fa-solid fa-circle-exclamation"></i>
                      : null;

                  return (
                    <div key={i} className="flex gap-[5px] max-sm:flex-col max-sm:gap-[10px] justify-between border-b-[2px] py-[17px]">
                      <div className="flex w-[45%] gap-[10px] items-center">
                        <img className="w-[35px] rounded-full" src={bill.avatar} alt="" />
                        <h1>{bill.name}</h1>
                      </div>

                      <div className="flex items-center justify-between w-[50%] max-sm:w-full">
                        <div className="flex items-center gap-[8px]">
                          <h1 className="thinSubTextGreen">
                            Monthly {formattedDay} 
                          </h1> 
                          {statusIcon}
                        </div>

                        <h1 className={`${dueDate <= 5 && dueDate >= 0 ? "text-[#c94736]" : ""}`}>
                          {formatAmount(Math.abs(Number(bill.amount)))}
                        </h1>
                      </div>
                    </div>
                  );
                })}

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecurringBills;
