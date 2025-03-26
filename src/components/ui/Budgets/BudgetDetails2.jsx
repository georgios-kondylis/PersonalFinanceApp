import React from 'react';
import { formatAmount } from '../../../utils';

const BudgetDetails2 = ({ 
  budgets, 
  transactions,
  latestEntertainmentTransactions_SUM,
  latestBillsTransactions_SUM,
  latestDiningOutTransactions_SUM,
  latestPersonalCareTransactions_SUM, }) => {

  return (
    <div className="flex sm:flex-col justify-between h-full gap-[17px]

    max-sm:w-[100%] max-sm:flex-wrap ">
      {budgets.map((budget, i) => {
        const theme = budget.theme;
        
        return (
          <div key={i} className="flex items-center gap-[10px] w-full border-b pb-[10px]">
            {/* Color bar */}
            <div className="w-[5px] rounded-[50px] h-[25px]" style={{ backgroundColor: theme }}></div>
            
            {/* Category and Maximum */}
            <div className="flex w-full justify-between gap-[17px]">
              <p className="thinSubText text-nowrap ">{budget.category}</p>
              <div className='flex gap-[8px]'>
                 <p id='LAST_MONTH_SUM'> {
                    budget.category === 'Entertainment' ? latestEntertainmentTransactions_SUM : 
                    budget.category === 'Bills' ? latestBillsTransactions_SUM : 
                    budget.category === 'Dining Out' ? latestDiningOutTransactions_SUM : latestPersonalCareTransactions_SUM
                    }
                 </p>

                 <p className="thinSubText">of {formatAmount(budget.maximum)}</p>
              </div>
            </div>
          </div>
        ); 
      })}
    </div>
  );
};

export default BudgetDetails2;
