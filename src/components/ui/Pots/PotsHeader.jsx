import React from 'react'
import AddPot from './AddPot';


const PotsHeader = ({pots, addPotActive, setAddPotActive, UPDATE }) => {

  return (
    <div id="HEADER" className="flex w-full items-center justify-between font-sans">
      <p className="txt5">Pots</p>

      <button className="Add_Button"
              onClick={() => setAddPotActive(prev => !prev)}>
        <p>+ Add new Pot</p>
      </button>

      {addPotActive && <AddPot pots={pots} setAddPotActive={setAddPotActive} UPDATE={UPDATE}/>}
    </div>
  )
}

export default PotsHeader