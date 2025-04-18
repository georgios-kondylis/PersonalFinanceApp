import React, { useState, useEffect } from "react";
import { formatAmount } from "../utils";
import PotsHeader from "./ui/Pots/PotsHeader";
import DeletePot from "./ui/Pots/DelelePot";
import EditPot from "./ui/Pots/EditPot";
import AddMoney from "./ui/Pots/AddMoney";
import Withdraw from "./ui/Pots/Withdraw";
import { Skeleton } from "@mui/material";

const Pots = ({ pots, UPDATE }) => {
  const [activePotIndex, setActivePotIndex] = useState(null);
  const [potToDelete, setPotToDelete] = useState(null); // Track the pot being deleted
  const [potToEdit, setPotToEdit] = useState(null);
  const [addPotActive, setAddPotActive] = useState(false);
  const [potToAddMoney, setPotToAddMoney] = useState(null);
  const [potToWithdraw, setPotToWithdraw] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or when pots are available
    if (pots.length > 0) {
      setIsLoading(false);
    }
  }, [pots]);

  return (
    <section className="section">
      <div id="all_container" className="flex flex-col GAP">
        <PotsHeader pots={pots} addPotActive={addPotActive} setAddPotActive={setAddPotActive} UPDATE={UPDATE} />

        <div id="POTS_CONTAINER" className="grid grid-cols-2 max-lg:grid-cols-1 w-full GAP flex-wrap place-items-center">
          {isLoading ? (
            // Skeleton loader for pots container
            <>
              <Skeleton variant="rectangular" width="100%" height={300} className="mb-4" />
              <Skeleton variant="rectangular" width="100%" height={300} className="mb-4" />
            </>
          ) : (
            pots.map((pot, i) => {
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

                    <div id="DOTS" className="relative flex gap-[2.5px] items-center cursor-pointer px-[10px] py-[7px]"
                         onClick={() => setActivePotIndex(dotsActive ? null : i)}>
                      <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                      <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>
                      <div className="w-[4px] h-[4px] rounded-full bg-[gray]"></div>

                      {dotsActive && 
                       <div id="EDIT_DELETE" className="absolute top-[35px] right-[0] w-fit text-nowrap font-sans text-[12px] bg-white border rounded-[10px] p-[10px] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                        <p className="border-b pb-[5px] hover:scale-[1.1] transition1"
                           onClick={() => setPotToEdit(pot)} >
                          Edit pot
                        </p>
                        <p className="pt-[5px] text-RED hover:scale-[1.1] transition1"
                           onClick={() => setPotToDelete(pot)}> {/* Store the actual pot object */}
                          Delete pot
                        </p>
                      </div>
                      }
                    </div>
                  </div>

                  <div id="MIDDLE_ROW" className="flex gap-[15px] flex-col">
                    <div className="flex items-center justify-between">
                      <p className="thinSubText_POTS">Total Saved</p>
                      <p className="txt5">{isLoading ? <Skeleton width={100} /> : formatAmount(pot.total)}</p>
                    </div>

                    <div className="flex flex-col gap-[10px] items-center justify-between">
                      <div id="PROGRESS_BAR" className="w-full rounded-full bg-[#d0d0d0] h-[7.5px] overflow-x-hidden">
                        <div className="rounded-full h-full" style={{ backgroundColor: themeColor, width: `${percent}%` }}></div>
                      </div>
                      
                      <div id="PERCENT__TARGET" className="w-full flex justify-between">
                        <p className="font-sans text-[13px] text-[#6c6c6c]">
                          <span className="font-[700]">{formattedPercent}</span>%
                        </p>
                        <p className="thinSubText_POTS">target of ${isLoading ? <Skeleton width={80} /> : pot.target.toLocaleString("de-DE")}</p>
                      </div>
                    </div>
                  </div>

                  <div id="BOTTOM_ROW" className="flex w-full gap-[15px]">
                    <button className="potsButtonHover" onClick={() => setPotToAddMoney(pot)}>
                      + Add money
                    </button>
                    <button className="potsButtonHover" onClick={() => setPotToWithdraw(pot)}>
                      Withdraw
                    </button>
                  </div>

                  {/* ABSOLUTES | EDIT & DELETE */}
                  {potToEdit !== null && 
                    <EditPot 
                      setPotToEdit={setPotToEdit} 
                      pot={potToEdit}
                      pots={pots} 
                      UPDATE={UPDATE} />}
                  {potToDelete !== null && 
                    <DeletePot 
                      setPotToDelete={setPotToDelete} 
                      pot={potToDelete}
                      UPDATE={UPDATE} />}
                  {potToAddMoney !== null &&
                   <AddMoney
                    pots={pots}
                    pot={potToAddMoney}
                    setPotToAddMoney={setPotToAddMoney}
                    UPDATE={UPDATE} />}
                  {potToWithdraw !== null &&
                  <Withdraw
                    pots={pots}
                    pot={potToWithdraw}
                    setPotToWithdraw={setPotToWithdraw}
                    UPDATE={UPDATE} />}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Pots;
