import React from 'react'

const BudgetsHeader = ({setBudgetActive, UPDATE }) => {

  return (
    <div id="HEADER" className="flex w-full items-center justify-between font-sans">
      <p className="txt5">Budgets</p>

      <button className="gray1 text-white px-[15px] py-[17px] text-[16px] rounded-[10px] font-sans">
        <p>+ Add new Budget</p>
      </button>

      {/* {addPotActive && <AddPot pots={pots} setAddPotActive={setAddPotActive} UPDATE={UPDATE}/>} */}
    </div>
  )
}

export default BudgetsHeader

// onClick={() => setBudgetActive(prev => !prev)}