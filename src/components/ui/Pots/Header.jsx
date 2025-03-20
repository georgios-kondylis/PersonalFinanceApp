import React from 'react'

const Header = () => {
  return (
    <div id="HEADER" className="flex w-full items-center justify-between font-sans">
      <p className="txt5">Pots</p>

      <button className="gray1 text-white px-[15px] py-[17px] text-[16px] rounded-[10px] font-sans">
        <p>+ Add new Pot</p>
      </button>
    </div>
  )
}

export default Header