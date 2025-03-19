import React, { useState } from "react";
import { formatCurrency } from "../utils";

const Pots = ({pots}) => {
  const [activePotIndex, setActivePotIndex] = useState(null); // Track active pot

  return (
    <section className="section">
      <div id="all_container" className="flex flex-col GAP">

        <div id="HEADER" className="flex w-full items-center justify-between font-sans">
          <p className="txt5">Pots</p>

          <button className="gray1 text-white px-[15px] py-[17px] text-[16px] rounded-[10px] font-sans">
            <p>+ Add new Pot</p>
          </button>
        </div>

        <div id="POTS_CONTAINER" className="grid grid-cols-2 max-lg:grid-cols-1 w-full GAP flex-wrap place-items-center">

          {pots.map((pot, i) => {
            const themeColor = pot.theme;
            const percent = ((pot.total / pot.target) * 100);
            const formattedPercent = percent % 1 === 0 ? percent.toFixed(1) : percent.toFixed(2); // so it's not showing double 00 like 1.00%
            const dotsActive = activePotIndex === i;
            
          return (
          <div key={i} className="w-[100%] flex flex-col justify-between flex-1 max-w-[700px] h-[300px] bg-[#fff] rounded-[10px] p-[20px]">
            <div id="TOP_ROW" className="flex justify-between items-center">
              <div className="flex items-center gap-[15px]">
                <div className="w-[20px] h-[20px] rounded-full" style={{ backgroundColor: themeColor }}></div>
                <p>{pot.name}</p>
              </div>

              <div id="DOTS" className="relative flex gap-[2.5px] items-center cursor-pointer px-[10px] py-[7px]" // added padding, easier to click 
                   onClick={() => setActivePotIndex(dotsActive ? null : i)}>
                <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>

                {dotsActive && 
                 <div id="EDIT_DELETE" className="absolute top-[35px] right-[0] w-fit text-nowrap font-sans text-[12px] bg-white border rounded-[10px] p-[10px] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                  <p className="border-b pb-[5px]">Edit pot</p>
                  <p className="pt-[5px] text-RED">Delete pot</p>
                </div>
                }
               
              </div>
            </div>

            <div id="MIDDLE_ROW" className="flex gap-[15px] flex-col">
              <div className="flex items-center justify-between">
                <p className="thinSubText_POTS">Total Saved</p>
                <p className="txt5">{formatCurrency(pot.total)}</p>
              </div>

              <div className="flex flex-col gap-[10px] items-center justify-between">
                <div id="PROGRESS_BAR" className="w-full rounded-full bg-[#d0d0d0] h-[7.5px]">
                   <div className="rounded-full h-full" style={{ backgroundColor: themeColor, width: `${percent}%` }}></div>
                </div>
                
                <div id="PERCENT__TARGET" className="w-full flex justify-between">
                  <p className="font-sans text-[13px] text-[#6c6c6c]">
                    <span className="font-[700]">{formattedPercent}</span>%
                  </p>
                  <p className="thinSubText_POTS">target of ${pot.target.toLocaleString("de-DE")}</p> {/* 2.000 instead of 2000 */}
                </div>
              </div>

            </div>

            <div id="BOTTOM_ROW" className="flex w-full gap-[15px]">
              <button className="flex flex-1 justify-center items-center py-[15px] px-[10px] rounded-[10px] bg-BEIGE">
                + Add money
              </button>
              <button className="flex flex-1 items-center justify-center py-[15px] px-[10px] rounded-[10px] bg-BEIGE">
                Withdraw
              </button>
            </div>
          </div>
          )})}
          
        </div>
      </div>
    </section>
  );
};

export default Pots;