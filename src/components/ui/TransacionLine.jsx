import React from 'react'
import { formatAmount_Neg_Pos } from '../../utils'
import { formatDate } from '../../utils'

const TransacionLine = ({name, avatar, date, amount}) => {

  const amountClass = amount < 0 ? "" : "text-green-600";

  return (
    <div className="border-b py-[20px] flex items-center justify-between">
      <div id='AVATAR_NAME' className="flex items-center gap-[20px]">
        <img className="w-[40px] rounded-full" src={avatar} alt="" />
        <p>{name}</p>
      </div>

      <div id='AMOUNT_DATE' className='flex  gap-[10px] flex-col items-end'>
        <p className={`${amountClass}`}>{formatAmount_Neg_Pos(amount)}</p>
        <p className='thinSubText'>{formatDate(date)}</p>
      </div>
    </div>
  )
}

export default TransacionLine