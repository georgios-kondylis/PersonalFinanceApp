import React, { useState } from 'react'
import BudgetsHeader from './ui/Budgets/BudgetsHeader'
import MyPieChart from './ui/MyPieChart'
import BudgetDetails2 from './ui/Budgets/BudgetDetails2'

const Budgets = ({budgets, UPDATE}) => {

  const [budgetActive, setBudgetActive] = useState(false)

  return (
    <section className='section'>
      <div id='All_CONTAINER' className='flex flex-col GAP'>
        <BudgetsHeader setBudgetActive={setBudgetActive} UPDATE={UPDATE}/>

        <div id='COLUMNS_CONTAINER' className='flex GAP'>
          <div id='COLUMN_1' className='flex flex-col GAP w-[40%] h-[600px] bg-white rounded-[10px] p-[20px]'>
            <div className='w-full h-[50%] mt-[10px]'>
              <MyPieChart budgets={budgets}/>
            </div>
            

            <div className='flex flex-col GAP'>
              <h1>Spending Summary</h1>

              <BudgetDetails2 budgets={budgets}/>
            </div>
          </div>
          <div id='COLUMN_2' className='w-[50%] border'>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Budgets

// budgets.map((b => console.log(b.category, b.maximum)))