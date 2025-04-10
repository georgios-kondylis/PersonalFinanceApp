import React from 'react';
import { formatAmount } from '../../utils';

const BudgetDetails = ({ budgets }) => {
  return (
    <div className="overflow-y-auto flex sm:flex-col w-[100px] gap-[17px]
         max-sm:w-[100%] max-sm:flex-wrap  max-sm:max-h-[145px] sm:max-h-[290px]">
      {budgets.map((budget, i) => {
        const theme = budget.theme;
        
        return (
          <div key={i} className="flex items-start gap-[10px]
            max-sm:w-[45%]">
            {/* Color bar */}
            <div className="min-w-[5px] rounded-[50px] h-[50px]" style={{ backgroundColor: theme }}></div>
            
            {/* Category and Maximum */}
            <div className="flex gap-[15px] flex-col">
              <p className="thinSubText text-nowrap ">{budget.category}</p>
              <div className="text2 text-gray-600">{formatAmount(budget.maximum)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetDetails;
