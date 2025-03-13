import React, { useState } from "react"; // Import useState
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const SearchSort = ({ handleChangeSelect, selected, setSearchResult}) => {

  return (
    <div id="Search_&_Sort" className="flex w-full justify-between gap-[10px]">

      <div id="SearchField" className="h-[50px] w-[70%] font-sans p-[10px] border rounded-[10px] flex items-center">
        <input className="outline-none h-full flex-1" type="text" name="" id="" placeholder="Search Bills"
               onChange={(e) => setSearchResult(e.target.value)}/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div id="SortField" className="min-w-[130px]">
        <FormControl fullWidth sx={{ height: "50px" }}>
          <InputLabel id="animated_label">
            {/* Empty */}
          </InputLabel>
          <Select labelId="" id=""
            value={selected === ''? 'Latest' : selected}
            onChange={handleChangeSelect}
            // label="Sort By"
            sx={{
              borderRadius: "10px", // for the whole box
              height: "50px", // set height for the select dropdown
              "& .MuiOutlinedInput-root": {
                height: "50px", // ensure that the input area has the same height
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "10px", // for the outline
              },}}
          >
            <MenuItem value={"Latest"}>Latest</MenuItem>
            <MenuItem value={"Oldest"}>Oldest</MenuItem>
            <MenuItem value={"Amount"}>Amount</MenuItem>
            <MenuItem value={"A to Z"}>A to Z</MenuItem>
            <MenuItem value={"Z to A"}>Z to A</MenuItem>
            <MenuItem value={"Highest"}>Highest</MenuItem>
            <MenuItem value={"Lowest"}>Lowest</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
 
};

export default SearchSort;
