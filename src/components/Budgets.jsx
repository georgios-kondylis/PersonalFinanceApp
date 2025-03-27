import React, { useState } from 'react'
import BudgetsHeader from './ui/Budgets/BudgetsHeader'
import MyPieChartBudgets from './ui/Budgets/MyPieChartBudgets'
import BudgetDetails2 from './ui/Budgets/BudgetDetails2'
import { getTheLatestMonthTransactions } from '../utils'
import { formatAmount } from '../utils'
import { useNavigate } from 'react-router-dom'
import Budgets3TransactionLines from './ui/Budgets/Budgets3TransactionLines'

const Budgets = ({ budgets, transactions, UPDATE, setCategSelected }) => {
  const navigate = useNavigate()
  const [budgetActive, setBudgetActive] = useState(false);
  
  // Attach the latestMonthSummary to each budget dynamically
  const updatedBudgets = budgets.map((budget) => {
    const latestTransactions = getTheLatestMonthTransactions(transactions, budget.category);
    return {
      ...budget, latestMonthSummary: latestTransactions.reduce((acc, tr) => acc + tr.amount, 0),
    };
  });

  return (
    <section className="section">
      <div id="All_CONTAINER" className="flex flex-col GAP">
        <BudgetsHeader setBudgetActive={setBudgetActive} UPDATE={UPDATE} />

        <div id="COLUMNS_CONTAINER" className="flex max-lg:flex-col GAP">
          <div id="COLUMN_1" className="flex lg:flex-col GAP w-[40%] max-lg:w-full h-[570px] max-lg:h-[300px] bg-white rounded-[10px] p-[20px]">
            <div className="w-full h-[50%] max-lg:h-[100%] mt-[10px]">
              <MyPieChartBudgets budgets={updatedBudgets} />
            </div>

            <div id="DETAILS" className="flex mt-[10px] flex-col GAP">
              <h1>Spending Summary</h1>
              <BudgetDetails2 updatedBudgets={updatedBudgets} />
            </div>
          </div>

          <div id="COLUMN_2" className="rounded-[10px] w-[60%] max-lg:w-full flex flex-col GAP">
            {updatedBudgets.map((budget, i) => {
                const filteredTransactions = transactions.filter((tr) => tr.category === budget.category);

                 const handleViewAll = () => {
                   navigate('/transactions'); 
                   setCategSelected(budget.category);
                  }

              return (
              <div key={i} className="flex flex-col gap-[15px] bg-white p-[25px] rounded-[10px]">
                <div id="HEADER" className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="w-[15px] h-[15px] rounded-full" style={{ backgroundColor: budget.theme }} ></span>
                    <p>{budget.category}</p>
                  </div>

                  <div id="DOTS" className="relative flex gap-[2.5px] items-center cursor-pointer px-[10px] py-[7px]">
                    <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                    <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                    <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                  </div>
                </div>

                <div id='PROGRESS-BAR SPENT_REMAINING' className="flex flex-col gap-[15px]">
                  <p className="thinSubText">Maximum {formatAmount(budget.maximum)}</p>

                  <div id="PROGRESS_BAR" className='p-[5px] rounded-[5px] bg-BEIGE overflow-x-hidden'>
                    <div className='h-[23px] rounded-[5px]'
                         style={{backgroundColor: budget.theme,
                         width:
                          (Math.abs(budget.latestMonthSummary) / budget.maximum) * 100 < 100 ?  // if the latestMonthSummary does not exceeds maximum, dvs. 100+ calculate %
                         `${(Math.abs(budget.latestMonthSummary) / budget.maximum) * 100}%` :'100%' //else make it 100% %
                     }}>
                    </div>
                  </div>

                  <div id="SPENT_REMAINING" className="flex">
                    <div className="flex GAP w-[50%]">
                      <div id="COLOR_BAR" className='h-[100%] w-[5px] rounded-full' style={{backgroundColor: budget.theme }}> </div>
                      <div className='flex flex-col gap-[8px]'>
                          <p className='thinSubText'>Spent</p>
                          <p>{formatAmount(budget.latestMonthSummary)}</p>
                      </div>
                    </div>
                    <div className="flex GAP w-[50%]">
                      <div id="COLOR_BAR" className='h-[100%] w-[5px] rounded-full bg-BEIGE'> </div>
                      <div className='flex flex-col gap-[8px] w-[50%]'>
                          <p className='thinSubText'>Remaining</p>
                          <p> {/*if the amount exceeds the maximum show 0 remaining */}
                            {budget.maximum - Math.abs(budget.latestMonthSummary) < 0 ? 
                            '0' :
                            formatAmount((budget.maximum - Math.abs(budget.latestMonthSummary)))
                            }
                          </p> {/* use Math.abs() because the number is negative by default */}
                      </div>
                    </div>
                   
                  </div>
                </div>

                <div id="LATEST SPENDING">
                    <div className='flex flex-col GAP p-[20px] pb-[5px] bg-BEIGE  rounded-[10px]'>
                      <div id='HEADER_SMALL' className='flex justify-between items-center w-full'>
                        <h1>Latest Spending</h1>
                        <div id='SEE ALL' className="flex items-center text_svg gap-[15px]"  onClick={handleViewAll}>
                            <p className="">See All</p> 
                            <svg className="mb-[2px]" fill="currentColor" height="11" viewBox="0 0 6 11" width="6" xmlns="http://www.w3.org/2000/svg"><path d="m.853506.146465 5.000004 5.000005c.04648.04643.08336.10158.10853.16228.02516.06069.03811.12576.03811.19147 0 .0657-.01295.13077-.03811.19147-.02517.06069-.06205.11584-.10853.16228l-5.000004 5.00003c-.069927.07-.159054.1177-.256097.137-.097042.0193-.197637.0094-.289048-.0285-.091412-.0378-.16953-.102-.2244652-.1843-.0549354-.0823-.08421767-.179-.08413981-.278l-.00000043-9.999984c-.00007788-.098949.02920444-.195695.08413984-.277992.0549356-.082297.1330536-.1464431.2244646-.1843193.091412-.03787611.192007-.04777907.289049-.02845381.097042.01932521.186169.06700801.256097.13701411z" fill="#696868"/></svg>
                        </div>
                      </div>
                      
                      <div className='flex flex-col'>
                        {filteredTransactions.slice(0, 3).map((tr, i) => (
                         <Budgets3TransactionLines
                         key={i}
                         name={tr.name}
                         avatar={tr.avatar}
                         date={tr.date}
                         amount={tr.amount}
                         isLastItem={i === 2} // check 3rd item
                       />
                        ))}
                      </div>
                    </div>
                  </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budgets;

