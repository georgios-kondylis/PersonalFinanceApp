import React from 'react'
import { formatAmount_Neg_Pos } from '../../utils'
import { formatDate } from '../../utils'

const TransacionLineFull = ({name, avatar, date, amount, category}) => {

  const amountClass = amount < 0 ? "" : "text-green-600";

  return (
    <div className="border-b py-[14px] flex items-center justify-between gap-[12%]">
      <div className='flex items-center justify-between w-[50%]'>
        <div id='AVATAR_NAME' className="flex items-center gap-[20px]">
          <img className="w-[40px] rounded-full" src={avatar} alt="" />
          <p>{name}</p>
        </div>

        <div className='w-[55px] text-left'>
           <p className='thinSubText text-nowrap'>{category}</p>
        </div>
      </div>
     
     <div className='flex justify-between items-center w-[50%]'>
        <p className='thinSubText'>{formatDate(date)}</p>
        <p className={`${amountClass}`}>{formatAmount_Neg_Pos(amount)}</p>
      </div>
     
    </div>
  )
}

export default TransacionLineFull