import React, { useState } from "react"; // Import useState
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const SearchSort = ({ recurringBills, paidBills, totalUpcoming, within5days }) => {
  const [sortBy, setSortBy] = useState(""); // Initialize state correctly

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSortBy(selectedOption);

    // Sorting bills based on the selected option (currently not in use but can be added)
    // const sortedBills = [...bills].sort((a, b) => {
    //   if (selectedOption === "date") {
    //     return new Date(a.date) - new Date(b.date); // Sort by date
    //   } else if (selectedOption === "amount") {
    //     return a.amount - b.amount; // Sort by amount
    //   }
    //   return 0; // Default (no sorting)
    // });

    // setBills(sortedBills); // Update bills state with sorted bills
  };

  return (
    <div id="Search_&_Sort" className="flex w-full justify-between gap-[10px]">
      <div className="h-[50px] text-black p-[10px] border rounded-[10px] flex items-center">
        <input
          className="outline-none h-full flex-1"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="min-w-[130px]">
        <FormControl fullWidth sx={{ height: "50px" }}>
          <InputLabel id="demo-simple-select-label">
            Sort By
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Sort By"
            onChange={handleChange}
            sx={{
              borderRadius: "10px", // for the whole box
              height: "50px", // set height for the select dropdown
              "& .MuiOutlinedInput-root": {
                height: "50px", // ensure that the input area has the same height
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "10px", // for the outline
              },
            }}
          >
            <MenuItem value={"date"}>Date</MenuItem>
            <MenuItem value={"amount"}>Amount</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SearchSort;
