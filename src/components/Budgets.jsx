import React, { useState } from 'react'
import BudgetsHeader from './ui/Budgets/BudgetsHeader'
import MyPieChart from './ui/MyPieChart'
import BudgetDetails2 from './ui/Budgets/BudgetDetails2'
import { getTheLatestMonthTransactions } from '../utils'
import { formatAmount } from '../utils'

const Budgets = ({budgets, transactions, UPDATE}) => {

  const [budgetActive, setBudgetActive] = useState(false)
  const [lastestMonthSpendings, setLastestMonthSpendings] = useState('');

  const entertainment = transactions.filter((transaction) => transaction.category === 'Entertainment');

  const latestEntertainmentTransactions = getTheLatestMonthTransactions(transactions, 'Entertainment' )
  const latestBillsTransactions = getTheLatestMonthTransactions(transactions, 'Bills' )
  const latestDiningOutTransactions = getTheLatestMonthTransactions(transactions, 'Dining Out' )
  const latestPersonalCareTransactions = getTheLatestMonthTransactions(transactions, 'Personal Care' )

  const latestEntertainmentTransactions_SUM = latestEntertainmentTransactions.reduce((acc, tr) => acc + tr.amount, 0);
  const latestBillsTransactions_SUM = latestBillsTransactions.reduce((acc, tr) => acc + tr.amount, 0);
  const latestDiningOutTransactions_SUM = latestDiningOutTransactions.reduce((acc, tr) => acc + tr.amount, 0);
  const latestPersonalCareTransactions_SUM = latestPersonalCareTransactions.reduce((acc, tr) => acc + tr.amount, 0);
  // console.log(latestEntertainmentTransactions_SUM);
  // console.log(latestBillsTransactions_SUM);
  // console.log(latestDiningOutTransactions_SUM);
  // console.log(latestPersonalCareTransactions_SUM);


  return (
    <section className='section'>
      <div id='All_CONTAINER' className='flex flex-col GAP'>
        <BudgetsHeader setBudgetActive={setBudgetActive} UPDATE={UPDATE}/>

        <div id='COLUMNS_CONTAINER' className='flex GAP'>
          <div id='COLUMN_1' className='flex flex-col GAP w-[40%] h-[600px] bg-white rounded-[10px] p-[20px]'>
            <div className='w-full h-[50%] mt-[10px]'>
              <MyPieChart budgets={budgets}/>
            </div>
            
            <div id='DETAILS' className='flex flex-col GAP'>
              <h1>Spending Summary</h1>

              <BudgetDetails2 budgets={budgets} 
                latestEntertainmentTransactions_SUM={latestEntertainmentTransactions_SUM}
                latestBillsTransactions_SUM={latestBillsTransactions_SUM}
                latestDiningOutTransactions_SUM={latestDiningOutTransactions_SUM}
                latestPersonalCareTransactions_SUM={latestPersonalCareTransactions_SUM}
              />
            </div>
          </div>

          <div id='COLUMN_2' className='border w-[50%] flex flex-col GAP'>
            {budgets.map((budget, i) => {
              const theemeColor = budget.theme;

              return (
              <div key={i} className='bg-white flex flex-col GAP'>
                <div id='HEADER' className='flex items-center justify-between'>
                  <div className='flex items-center gap-[10px]'>
                     <span className='w-[13px] h-[13px] rounded-full' style={{background: theemeColor}}></span>
                     <p>{budget.category}</p>
                  </div>

                  <div id="DOTS" className="relative flex gap-[2.5px] items-center cursor-pointer px-[10px] py-[7px]">
                    <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                    <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                    <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                  </div>
                </div>
               
               <div className='flex flex-col'>
                  <p className='thinSubText'>Maximum {formatAmount(budget.maximum)}</p>

                  <div id='PROGRESS_BAR'></div>
                  <div id='SPENT_REMAINING'></div>
                  <div id='LATEST SPENDING'></div>
                  
               </div>

              </div>
           )})}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Budgets

// budgets.map((b => console.log(b.category, b.maximum)))