import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SearchCategSort = ({ 
  handleSortSelect, 
  handleCategSelect, 
  categSelected,
  sortSelected,
  setSearchResult 
}) => {


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
        
        {/* Sort field */}
        <div id="SortField" className="min-w-[130px] w-[170px] flex items-center gap-[10px] font-sans text-[#868686]">
          <p className="text-nowrap">Sort by</p>
          <FormControl fullWidth sx={{ height: "50px" }}>
            <Select value={sortSelected || 'Latest'}
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
        <div id="CategField" className="min-w-[130px] w-[270px] flex items-center gap-[10px] font-sans text-[#868686]">
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
