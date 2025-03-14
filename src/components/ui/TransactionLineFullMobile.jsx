import React from 'react'
import { formatAmount_Neg_Pos } from '../../utils'
import { formatDate } from '../../utils'

const TransacionLineFullMobile = ({name, avatar, date, amount, category}) => {

  const amountClass = amount < 0 ? "" : "text-green-600";

  return (
    <div className="border-b py-[20px] flex items-center justify-between gap-[12%]">
      <div className='flex items-center justify-between w-[50%]
                      max-md:flex-col max-md:items-start'>
        <div id='AVATAR_NAME_CATEGORY' className="flex items-center gap-[20px]">
          <img className="w-[40px] rounded-full" src={avatar} alt="" />
          <div className='flex flex-col gap-[10px]'>
            <p>{name}</p>
            <p className='thinSubText text-nowrap'>{category}</p>
          </div>
        </div>
       
      </div>
     
     <div className='flex justify-between items-center w-[50%]
                     max-md:flex-col-reverse max-md:items-end'>

        <p className='thinSubText'>{formatDate(date)}</p>
        <p className={`${amountClass}`}>{formatAmount_Neg_Pos(amount)}</p>
      </div>
     
    </div>
  )
}

export default TransacionLineFullMobile