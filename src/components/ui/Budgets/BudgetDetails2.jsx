import React from 'react';
import { formatAmount } from '../../../utils';

const BudgetDetails2 = ({updatedBudgets, }) => {

  return (
    <div className="flex sm:flex-col justify-between h-full gap-[17px]

    max-sm:w-[100%] max-sm:flex-wrap ">
      {updatedBudgets.map((budget, i) => {
        const theme = budget.theme;
        const lastItem = i === updatedBudgets.length - 1;
        
        return (
          <div key={i} className={`flex items-center gap-[10px] w-full border-b pb-[10px] ${lastItem && 'border-none'}`}>
            {/* Color bar */}
            <div className="w-[5px] rounded-[50px] h-[25px]" style={{ backgroundColor: theme }}></div>
            
            {/* Category and Maximum */}
            <div className="flex w-full justify-between gap-[10px]">
              <p className="thinSubText text-nowrap">{budget.category}</p>
              <div className='flex gap-[8px] text-nowrap'>
                 <p id='LAST_MONTH_SUM'> 
                  {formatAmount(budget.latestMonthSummary)}
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
