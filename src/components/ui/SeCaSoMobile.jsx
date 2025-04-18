// SeCaSoMobile.jsx

import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sortOptions } from "../../utils";
import { categoryOptions } from "../../utils";

const SeCaSoMobile = ({ 
  categDropDownOpen, setCategDropDownOpen,
  sortDropDownOpen,  setSortDropDownOpen,
  mobileSelectSort, 
  mobileSelectCateg, 
  categSelected,
  sortSelected,
  setSearchResult 
}) => {


  return (
    <div id="Search_&_Sort" className="flex w-full justify-between gap-[18px]">
      
      {/* Search field */}
      <div id="SearchField" className="h-[50px] w-[100%] min-w-[140px] max-w-[300px] font-sans p-[10px] border hover:border-[black] rounded-[10px] flex items-center">
        <input className="outline-none w-full h-full flex-1"
          type="text" name="" id="" placeholder="Search Bills"
          onChange={(e) => setSearchResult(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="flex gap-[25px] items-center">
        <div id="SVG_SORT_PAPER" className="relative"> 
          <svg fill="none" height="22" viewBox="0 0 16 15" width="25" xmlns="http://www.w3.org/2000/svg"
           className="fill-[#201f24] cursor-pointer hover:scale-[1.2] transition1"
           onClick={(e) =>{
             e.stopPropagation(); 
             setSortDropDownOpen(state => !state);
             setCategDropDownOpen(false)}}>
            <path d="m14.25 0h-12.5c-.33152 0-.64946.131696-.883884.366116-.23442.234421-.366116.552363-.366116.883884v12.5c0 .3315.131696.6495.366116.8839.234424.2344.552364.3661.883884.3661h12.5c.3315 0 .6495-.1317.8839-.3661s.3661-.5524.3661-.8839v-12.5c0-.331521-.1317-.649463-.3661-.883884-.2344-.23442-.5524-.366116-.8839-.366116zm-10.625 3.125h7.5c.1658 0 .3247.06585.4419.18306.1173.11721.1831.27618.1831.44194s-.0658.32473-.1831.44194c-.1172.11721-.2761.18306-.4419.18306h-7.5c-.16576 0-.32473-.06585-.44194-.18306s-.18306-.27618-.18306-.44194.06585-.32473.18306-.44194.27618-.18306.44194-.18306zm3.125 8.75h-3.125c-.16576 0-.32473-.0658-.44194-.1831-.11721-.1172-.18306-.2761-.18306-.4419s.06585-.3247.18306-.4419c.11721-.1173.27618-.1831.44194-.1831h3.125c.16576 0 .32473.0658.44194.1831.11721.1172.18306.2761.18306.4419s-.06585.3247-.18306.4419c-.11721.1173-.27618.1831-.44194.1831zm.625-3.75h-3.75c-.16576 0-.32473-.06585-.44194-.18306s-.18306-.27618-.18306-.44194.06585-.32473.18306-.44194.27618-.18306.44194-.18306h3.75c.16576 0 .32473.06585.44194.18306s.18306.27618.18306.44194-.06585.32473-.18306.44194-.27618.18306-.44194.18306zm6.0672 2.3172-1.875 1.875c-.0581.0581-.127.1042-.2029.1357-.0758.0314-.1572.0476-.2393.0476s-.1635-.0162-.2393-.0476c-.0759-.0315-.1448-.0776-.2029-.1357l-1.87499-1.875c-.11727-.1173-.18316-.2763-.18316-.4422 0-.16585.06589-.32491.18316-.44219.11728-.11727.27634-.18316.44219-.18316s.32491.06589.44219.18316l.80781.80859v-3.4914c0-.16576.0658-.32473.1831-.44194.1172-.11721.2761-.18306.4419-.18306s.3247.06585.4419.18306c.1173.11721.1831.27618.1831.44194v3.4914l.8078-.80859c.1173-.11727.2763-.18316.4422-.18316s.3249.06589.4422.18316c.1173.11728.1831.27634.1831.44219 0 .1659-.0658.3249-.1831.4422z"/>
          </svg>


          {sortDropDownOpen &&
          <div className="mobile_dropdown_container_category">
            <button disabled className="w-full text-left font-sans border-b py-[7px] text-[#868686]">
              Sort By
            </button>
            {sortOptions.map((option, i) => (
            <button key={i} className={`${sortSelected === option.value && 'font-[800]'} w-full text-left border-b py-[13px]`}
                    onClick={()=> mobileSelectSort(option.value)}>
              {option.label}
            </button>
            ))}
          </div>}
        </div>

        <div id="SVG_CATEG_FILTER" className="relative">
          <svg height="22" viewBox="0 0 18 16" width="25" xmlns="http://www.w3.org/2000/svg"
              className="fill-[#201f24] cursor-pointer hover:scale-[1.2] transition1"
              onClick={(e) =>{
                e.stopPropagation(); 
                setCategDropDownOpen(state => !state);
                setSortDropDownOpen(false)}}>
            <path d="m16.7976 2.71562-.0062.00704-5.2914 5.65v4.33514c.0003.2062-.0504.4092-.1476.5911-.0972.1818-.2379.3368-.4095.4511l-2.49995 1.6672c-.1884.1255-.40734.1975-.63344.2082-.22611.0108-.45091-.04-.65039-.147s-.36616-.2662-.48225-.4605-.17723-.4165-.17689-.6429v-6.00234l-5.29141-5.65-.00625-.00704c-.16269-.17905-.269938-.40146-.308716-.64026s-.007425-.48373.090256-.70506c.09768-.22133.25749-.409563.46005-.541857.20255-.132294.43914-.202966.68107-.203443h13.75002c.2421.000024.479.070368.6819.202485.2029.132118.3631.320325.4611.541745.0979.22142.1295.46653.0908.70555-.0387.23901-.146.46165-.3088.64084z"/>
          </svg>

          {categDropDownOpen &&
          <div className="mobile_dropdown_container_category">
            <button disabled className="w-full text-left font-sans border-b py-[7px] text-[#868686]">
              Category
            </button>
            {categoryOptions.map((option, i) => (
            <button key={i} className={`${categSelected === option.value && 'font-[800]'} w-full text-left border-b py-[13px]`}
                    onClick={()=> mobileSelectCateg(option.value)}>
              {option.label}
            </button>
            ))}
          </div>}
        </div>

      </div>
    </div>
  );
};

export default SeCaSoMobile;
