import React from 'react'
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

export default function getDate() {
    const [startDateValue, setStartDateValue] = React.useState(null);
    const [endDateValue, setEndDateValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        id="outlined-basic"
        label="Start Date"
        inputFormat="MM/DD/YYYY"
        value={startDateValue}
        onChange={(newValue) => setStartDateValue(newValue)}
        variant="outlined"
        renderInput={(params) => (
          <TextField {...params} sx={{ width: "200px" }} />
        )}
      />
      <DatePicker
        id="outlined-basic"
        label="End Date"
        inputFormat="MM/DD/YYYY"
        value={endDateValue}
        onChange={(newValue) => setEndDateValue(newValue)}
        variant="outlined"
        sx={{ width: "150px" }}
        renderInput={(params) => (
          <TextField {...params} sx={{ marginLeft: "20px", width: "200px" }} />
        )}
      />
    </LocalizationProvider>
  );
}