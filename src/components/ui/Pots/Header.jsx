import React, { useState } from 'react'
import AddPot from './AddPot';


const Header = ({pots, addPotActive, setAddPotActive, UPDATE }) => {

  return (
    <div id="HEADER" className="flex w-full items-center justify-between font-sans">
      <p className="txt5">Pots</p>

      <button className="gray1 text-white px-[15px] py-[17px] text-[16px] rounded-[10px] font-sans"
              onClick={() => setAddPotActive(prev => !prev)}>
        <p>+ Add new Pot</p>
      </button>

      {addPotActive && <AddPot pots={pots} setAddPotActive={setAddPotActive} UPDATE={UPDATE}/>}
    </div>
  )
}

export default Header