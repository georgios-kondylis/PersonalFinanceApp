import React, { useState } from "react"; // Import useState
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SearchCategSort = ({ handleSortSelect, selected, setSearchResult}) => {

  return (
    <div id="Search_&_Sort" className="flex w-full justify-between gap-[10px]">

      <div id="SearchField" className="h-[50px] w-[60%] max-w-[300px] font-sans p-[10px] border hover:border-[black] rounded-[10px] flex items-center">
        <input className="outline-none h-full flex-1" type="text" name="" id="" placeholder="Search Bills"
               onChange={(e) => setSearchResult(e.target.value)}/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div id="SortField" className="min-w-[130px] w-[170px] flex items-center gap-[10px] font-sans text-[#868686]">
        <p className="text-nowrap">Sort by</p> 
        <FormControl fullWidth sx={{ height: "50px" }}>
          <Select labelId="" id="" value={selected === ''? 'Latest' : selected} onChange={handleSortSelect}
            sx={{
              borderRadius: "10px", // for the whole box
              height: "50px", // set height for the select dropdown
              "& .MuiOutlinedInput-root": { height: "50px", }, // ensure that the input area has the same height
              "& .MuiOutlinedInput-notchedOutline": {borderRadius: "10px", }, // for the outline 
            }}
            MenuProps={{ PaperProps: {style: {
                textAlign: 'left', // Ensure the text is aligned to the left
                borderRadius: '10px',
                marginTop: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
            },},
            }}
          >
            <MenuItem sx={{borderBottom: '1px solid #d0d0d0', paddingLeft: '0', paddingBottom: '10px', paddingTop: '10px',
              "&.Mui-selected": {
              backgroundColor: "white", // Change the background color of the selected item
              fontWeight:'800'
              }}} value={"Latest"}>
                Latest
            </MenuItem>

            <MenuItem sx={{borderBottom: '1px solid #d0d0d0', paddingLeft: '0', paddingBottom: '10px', paddingTop: '10px',
            "&.Mui-selected": {
            backgroundColor: "white", // Change the background color of the selected item
            fontWeight:'800'
            }}}  value={"Oldest"}>
              Oldest
            </MenuItem>

            <MenuItem sx={{borderBottom: '1px solid #d0d0d0', paddingLeft: '0', paddingBottom: '10px', paddingTop: '10px',
                      "&.Mui-selected": {
                      backgroundColor: "white", // Change the background color of the selected item
                      fontWeight:'800'
                      }}}  value={"A to Z"}>
              A to Z
            </MenuItem>

            <MenuItem sx={{borderBottom: '1px solid #d0d0d0', paddingLeft: '0', paddingBottom: '10px', paddingTop: '10px',
                      "&.Mui-selected": {
                      backgroundColor: "white", // Change the background color of the selected item
                      fontWeight:'800'
                      }}}  value={"Z to A"}>
              Z to A
            </MenuItem>

            <MenuItem sx={{borderBottom: '1px solid #d0d0d0', paddingLeft: '0', paddingBottom: '10px', paddingTop: '10px',
                      "&.Mui-selected": {
                      backgroundColor: "white", // Change the background color of the selected item
                      fontWeight:'800'
                      }}}  value={"Highest"}>
              Highest
            </MenuItem>

            <MenuItem sx={{ paddingLeft: '0', paddingBottom: '10px', paddingTop: '10px',
                      "&.Mui-selected": {
                      backgroundColor: "white", // Change the background color of the selected item
                      fontWeight:'800'
                      }}} value={"Lowest"}>
              Lowest
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
 
};

export default SearchCategSort;


