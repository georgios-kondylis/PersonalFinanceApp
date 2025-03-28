// SearchCategSort.jsx

import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sortOptions } from "../../utils";
import { categoryOptions } from "../../utils";

const SearchCategSort = ({ 
  handleSortSelect, 
  handleCategSelect, 
  categSelected,
  sortSelected,
  setSearchResult 
}) => {

  return (
    <div id="Search_&_Sort" className="flex w-full justify-between gap-[10px]">
      
      {/* Search field */}
      <div id="SearchField" className="h-[50px] w-[40%] max-w-[340px] font-sans p-[10px] border hover:border-[black] rounded-[10px] flex items-center">
        <input className="outline-none h-full flex-1"
          type="text" name="" id="" placeholder="Search Bills"
          onChange={(e) => setSearchResult(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="flex gap-[30px] items-center">
        
        {/* Sort field */}
        <div id="SortField" className="min-w-[130px] w-[165px] flex items-center gap-[10px] font-sans text-[#868686]">
          <p className="text-nowrap">Sort by</p>
          <FormControl fullWidth sx={{ height: "50px" }}>
            <Select value={ sortSelected || 'Latest'}
              onChange={handleSortSelect}
              sx={{
                borderRadius: "10px", 
                height: "50px",
                "& .MuiOutlinedInput-root": { height: "50px" },
                "& .MuiOutlinedInput-notchedOutline": { borderRadius: "10px" },
              }}
              MenuProps={{ PaperProps: { style: { textAlign: 'left', borderRadius: '10px', marginTop: '10px', paddingLeft: '10px', paddingRight: '10px' } } }}
            >
              {sortOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    borderBottom: '1px solid #d0d0d0', 
                    paddingLeft: '0', 
                    paddingBottom: '10px', 
                    paddingTop: '10px',
                    "&.Mui-selected": { backgroundColor: "white", fontWeight: '800' }
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Category field */}
        <div id="CategField" className="min-w-[130px] w-[250px] flex items-center gap-[10px] font-sans text-[#868686]">
          <p className="text-nowrap">Category</p>
          <FormControl fullWidth sx={{ height: "50px"}}>
            <Select
              value={categSelected || 'All Transactions'}
              onChange={handleCategSelect}
              sx={{
                borderRadius: "10px", 
                height: "50px", 
                "& .MuiOutlinedInput-root": { height: "50px" },
                "& .MuiOutlinedInput-notchedOutline": { borderRadius: "10px" },
              }}
              MenuProps={{ PaperProps: { style: { textAlign: 'left', borderRadius: '10px', marginTop: '10px', paddingLeft: '10px', paddingRight: '10px', height: '302px' } } }}
            >
              {categoryOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    borderBottom: '1px solid #d0d0d0',
                    paddingLeft: '0', 
                    paddingBottom: '10px', 
                    paddingTop: '10px',
                    "&.Mui-selected": { backgroundColor: "white", fontWeight: '800' }
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SearchCategSort;
