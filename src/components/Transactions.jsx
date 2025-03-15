import React, { useEffect, useState } from 'react';
import SearchCategSort from './ui/SearchCategSort';
import TransacionLineFull from './ui/TransactionLineFull';
import TransacionLineFullMobile from './ui/TransactionLineFullMobile';
import { custom_maxMD_768_breakpoint } from '../utils';

const Transactions = ({transactions, }) => {
  const maxMD = custom_maxMD_768_breakpoint();
  
  const [searchResult, setSearchResult] = useState('');

  const [sortSelected, setSortSelected] = useState('');
  const [categSelected, setCategSelected] = useState('');
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState(sortedTransactions);

  useEffect(() => {
    let updatedTransactions = [...transactions];
  
    // Apply sorting
    if (sortSelected) {
      updatedTransactions.sort((a, b) => {
        if (sortSelected === "Latest") {
          return new Date(b.date) - new Date(a.date);
        }
        if (sortSelected === "Oldest") {
          return new Date(a.date) - new Date(b.date);
        }
        if (sortSelected === "A to Z") {
          return a.name.localeCompare(b.name);
        }
        if (sortSelected === "Z to A") {
          return b.name.localeCompare(a.name);
        }
        if (sortSelected === "Highest") {
          return b.amount - a.amount;
        }
        if (sortSelected === "Lowest") {
          return a.amount - b.amount;
        }
        return 0;
      });
    }
  
    // Apply filtering
    if (categSelected && categSelected !== "All Transactions") {
      updatedTransactions = updatedTransactions.filter(transaction => transaction.category === categSelected);
    }
  
    setFilteredTransactions(updatedTransactions);
  }, [transactions, sortSelected, categSelected]); // Runs whenever transactions, sorting, or category selection changes
  
  const handleSortSelect = (event) => {
    const selectedOption = event.target.value;
    setSortSelected(selectedOption);

    const sorted = [...transactions].sort((a, b) => {
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
        return b.amount - a.amount;
      }
      if (selectedOption === "Lowest") {
        return a.amount - b.amount;
      }
      
      return 0; // Default case (if needed)
    });

    setSortedTransactions(sorted);
  };

  const handleCategSelect = (event) => {
    const selectedOption = event.target.value;
    setCategSelected(selectedOption);

    if (selectedOption === 'All transactions') {
      setFilteredTransactions(sortedTransactions); // Reset to full list
    } else {
      const filtered = sortedTransactions.filter((transaction) => transaction.category === selectedOption);
      setFilteredTransactions(filtered);
    }
  };

  return (
    <section className='section'>
      <div className='flex flex-col headerGAP'>
         <h1 className='txt5'>Transactions</h1>

         <div className='flex flex-col GAP bg-white p-[30px] rounded-[10px]'>
            <div id='Search_Fields' className='flex w-full justify-between'>
              <SearchCategSort  //  <---------------------------------------------
                setSearchResult={setSearchResult} 
                categSelected={categSelected}
                sortSelected={sortSelected}
                handleSortSelect={handleSortSelect}
                handleCategSelect={handleCategSelect}
                sortedTransactions={sortedTransactions}
                />
            </div>

            <div id='Table_Container'>
              <div id='Table_Head' className='max-md:hidden flex justify-between gap-[12%] border-b py-[20px]'>
                <div className='flex justify-between w-[50%]'>
                  <h1 className='thinSubText'>Recipient / Sender</h1>
                  <h1 className='thinSubText'>Category</h1>
                </div>

                <div className='flex justify-between w-[50%]'>
                  <h1 className='thinSubText'>Transaction Date</h1>
                  <h1 className='thinSubText'>Amount</h1>
                </div>
              </div>

              <div id='Transactions'>
                {filteredTransactions
                .filter((tran) => tran.name.toLowerCase().includes(searchResult.toLowerCase()))
                .map((transaction, i) => {

                  return (
                    maxMD? 
                    (<TransacionLineFull key={i} amount={transaction.amount} category={transaction.category} date={transaction.date} avatar={transaction.avatar} name={transaction.name}/>)
                     : 
                    (<TransacionLineFullMobile key={i} amount={transaction.amount} category={transaction.category} date={transaction.date} avatar={transaction.avatar} name={transaction.name}/>)
                  )
                })}
              </div>
            </div>
         </div>

      </div>
      
      
    </section>
  );
};

export default Transactions;
