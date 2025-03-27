import React from 'react'
import { formatAmount_Neg_Pos } from '../../../utils';
import { formatDate } from '../../../utils';

const Budgets3TransactionLines = ({name, avatar, date, amount, isLastItem}) => {

  const amountClass = amount < 0 ? "" : "text-green-600";

  return (
    <div className={`py-[7px] flex items-center justify-between ${isLastItem ? 'border-none' : 'border-b'}`}>
      <div id='AVATAR_NAME' className="flex items-center gap-[20px]">
        <img className="w-[37px] rounded-full max-sm:hidden" src={avatar} alt="" />
        <p>{name}</p>
      </div>

      <div id='AMOUNT_DATE' className='flex gap-[10px] flex-col items-end'>
        <p className={`${amountClass}`}>{formatAmount_Neg_Pos(amount)}</p>
        <p className='thinSubText'>{formatDate(date)}</p>
      </div>
    </div>
  )
}

export default Budgets3TransactionLines;
