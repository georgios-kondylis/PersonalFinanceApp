import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { custom_maxMD_768_breakpoint } from "../../utils";

const SeCaSoMobile = ({ 
  handleSortSelect, 
  handleCategSelect, 
  categSelected,
  sortSelected,
  setSearchResult 
}) => {

  const [categDropDownOpen ,setCategDropDownOpen] = useState(false)
  const [sortDropDownOpen ,setSortDropDownOpen] = useState(false)

  const sortOptions = [   // Sort options array
    { value: "Latest", label: "Latest" },
    { value: "Oldest", label: "Oldest" },
    { value: "A to Z", label: "A to Z" },
    { value: "Z to A", label: "Z to A" },
    { value: "Highest", label: "Highest" },
    { value: "Lowest", label: "Lowest" }
  ];

  const categoryOptions = [   // Category options array
    { value: "All Transactions", label: "All Transactions" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Bills", label: "Bills" },
    { value: "Groceries", label: "Groceries" },
    { value: "Dining Out", label: "Dining Out" },
    { value: "Transportation", label: "Transportation" },
    { value: "Personal Care", label: "Personal Care" },
    { value: "Education", label: "Education" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Shoping", label: "Shoping" },
    { value: "General", label: "General" }
  ];

  return (
    <div id="Search_&_Sort" className="flex w-full justify-between gap-[10px]">
      
      {/* Search field */}
      <div id="SearchField" className="h-[50px] w-[40%] max-w-[300px] font-sans p-[10px] border hover:border-[black] rounded-[10px] flex items-center">
        <input className="outline-none h-full flex-1"
          type="text" name="" id="" placeholder="Search Bills"
          onChange={(e) => setSearchResult(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="flex gap-[30px] items-center">

        <div id="SVG_DROPDOWN" className="relative">
          <svg height="16" viewBox="0 0 18 16" width="18" xmlns="http://www.w3.org/2000/svg"
              className="fill-[#201f24] cursor-pointer hover:scale-[1.2] transition1"
              onClick={() => setCategDropDownOpen(state => !state)}>
            <path d="m16.7976 2.71562-.0062.00704-5.2914 5.65v4.33514c.0003.2062-.0504.4092-.1476.5911-.0972.1818-.2379.3368-.4095.4511l-2.49995 1.6672c-.1884.1255-.40734.1975-.63344.2082-.22611.0108-.45091-.04-.65039-.147s-.36616-.2662-.48225-.4605-.17723-.4165-.17689-.6429v-6.00234l-5.29141-5.65-.00625-.00704c-.16269-.17905-.269938-.40146-.308716-.64026s-.007425-.48373.090256-.70506c.09768-.22133.25749-.409563.46005-.541857.20255-.132294.43914-.202966.68107-.203443h13.75002c.2421.000024.479.070368.6819.202485.2029.132118.3631.320325.4611.541745.0979.22142.1295.46653.0908.70555-.0387.23901-.146.46165-.3088.64084z"/>
          </svg>

          {categDropDownOpen &&
          <div className="absolute border">
            {categoryOptions.map((option, i) => (
             <p>{option.label}</p>
            ))}
          </div>}
        </div>


      
      </div>
    </div>
  );
};

export default SeCaSoMobile;
