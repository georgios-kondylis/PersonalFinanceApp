// Transactions.jsx

import React, { useEffect, useState } from 'react';
import SearchCategSort from './ui/SearchCategSort';
import TransacionLineFull from './ui/TransactionLineFull';
import TransacionLineFullMobile from './ui/TransactionLineFullMobile';
import { custom_maxMD_768_breakpoint } from '../utils';
import SeCaSoMobile from './ui/SeCaSoMobile';
import PaginationControls from './ui/PaginationControls';

const Transactions = ({transactions, setCategSelected, categSelected }) => {
  const maxMD = custom_maxMD_768_breakpoint();
  const [categDropDownOpen ,setCategDropDownOpen] = useState(false)
  const [sortDropDownOpen ,setSortDropDownOpen] = useState(false)
  
  const [searchResult, setSearchResult] = useState('');

  const [sortSelected, setSortSelected] = useState('');
  // const [categSelected, setCategSelected] = useState(''); // i moved this one to App.jsx so i can pass setCategSelected to budgets
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState(sortedTransactions);

  // --------  Pagination variables  --------
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  //                 Get transactions for current page
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const paginationTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  // ----------------------------------------

  useEffect(() => {
    let updatedTransactions = [...transactions]; // First reset the array with the original
  
    // Apply sorting
    if (sortSelected) {  // After sort it by selection 
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
    if (categSelected && categSelected !== "All Transactions") { // Then filter by category selection 
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
    setCurrentPage(1);

    if (selectedOption === 'All transactions') {
      setFilteredTransactions(sortedTransactions); // Reset to full list
    } else {
      const filtered = sortedTransactions.filter((transaction) => transaction.category === selectedOption);
      setFilteredTransactions(filtered);
    }
  };


  const mobileSelectSort = (value) => {
    setSortSelected(value);

    const sorted = [...transactions].sort((a, b) => {
      if (value === "Latest") {
        return new Date(b.Date) - new Date(a.date);
      }
      if (value === "Oldest") {
        return new Date(a.date) - new Date(b.date);
      }
      if (value === "A to Z") {
        return a.name.localeCompare(b.name);
      }
      if (value === "Z to A") {
        return b.name.localeCompare(a.name);
      }
      if (value === "Highest") {
        return b.amount - a.amount;
      }
      if (value === "Lowest") {
        return a.amount - b.amount;
      }
      
      return 0; // Default case (if needed)
    });

    setSortedTransactions(sorted);
  };
  const mobileSelectCateg = (value) => {
    setCategSelected(value);
    setCurrentPage(1);
    if (value === categSelected) { return ''} // if you reselect the selected do nothing
    if (value === 'All transactions') {
      setFilteredTransactions(sortedTransactions); // Reset to full list
      setCategDropDownOpen(false);
    } else {
      const filtered = sortedTransactions.filter((transaction) => transaction.category === value);
      setFilteredTransactions(filtered);
      setCategDropDownOpen(false);
    }
  };
  

  return (
    <section className='section' onClick={()=> {setCategDropDownOpen(false); setSortDropDownOpen(false);}}> 
      <div className='flex flex-col headerGAP'>
         <h1 className='txt5'>Transactions</h1>

         <div className='flex flex-col gap-[10px] bg-white p-[30px] rounded-[10px]'>
            <div id='Search_Fields' className='flex w-full justify-between'>
              {maxMD?
               <SeCaSoMobile
               setSearchResult={setSearchResult} 
               categDropDownOpen={categDropDownOpen} setCategDropDownOpen={setCategDropDownOpen}
               sortDropDownOpen={sortDropDownOpen}   setSortDropDownOpen={setSortDropDownOpen}
               categSelected={categSelected}
               sortSelected={sortSelected}
               mobileSelectSort={mobileSelectSort}
               mobileSelectCateg={mobileSelectCateg}
               sortedTransactions={sortedTransactions}
               />
              :
              <SearchCategSort 
              setSearchResult={setSearchResult} 
              categSelected={categSelected}
              sortSelected={sortSelected}
              handleSortSelect={handleSortSelect}
              handleCategSelect={handleCategSelect}
              sortedTransactions={sortedTransactions}
              />
              }
             
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
                {paginationTransactions
                .filter((tran) => tran.name.toLowerCase().includes(searchResult.toLowerCase()))
                .map((transaction, i) => {

                  return (
                    maxMD? 
                    (<TransacionLineFullMobile key={i} amount={transaction.amount} category={transaction.category} date={transaction.date} avatar={transaction.avatar} name={transaction.name}/>)
                    :
                    (<TransacionLineFull key={i} amount={transaction.amount} category={transaction.category} date={transaction.date} avatar={transaction.avatar} name={transaction.name}/>)
                  )
                })}
              </div>

              {/* Pagination Controls */}
              <PaginationControls 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}/>

            </div>
         </div>

      </div>
      
      
    </section>
  );
};

export default Transactions;
