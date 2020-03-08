import React, { useState } from "react";
import addDays from "date-fns/addDays";
import DatePicker from "./components/Datepicker";
import "./App.css";
function App() {
  // const [selectedDate, setDate] = useState(new Date());
  const currentDate = new Date();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);
  if (currentDate.getDate() === 1) {
    oneYearFromNow.setMonth(currentDate.getMonth() - 1);
  }
  oneYearFromNow.setDate(currentDate.getDate() - 1);

  const [startDate, setStartDate] = useState(new Date());

  const [dateFormatObj, setDateFormat] = useState({
    isMonth: false,
    dateFormat: "yyyy/MM/dd",
    showMonthYearPicker: false,
    showPreviousButton: true,
    showNextButton: true
  });

  const toggleDateFormat = () => {
    if (dateFormatObj.isMonth) {
      setDateFormat({
        isMonth: false,
        monthsShown: 1,
        showMonthYearPicker: false,
        showPreviousButton: true,
        showNextButton: true,
        shouldCloseOnSelect: true
      });
    } else {
      setDateFormat({
        isMonth: true,
        monthsShown: 2,
        showMonthYearPicker: true,
        showPreviousButton: false,
        showNextButton: false,
        shouldCloseOnSelect: false
      });
    }
  };

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  const handleChange = (ev, date) => {
    setStartDate(date);
    if (dateFormatObj.isMonth) {
      toggleDateFormat();
    }
  };

  return (
    <div className="App">
      <DatePicker
        selected={startDate}
        onChange={(date, ev) => handleChange(ev, date)}
        minDate={currentDate}
        maxDate={oneYearFromNow}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        monthHeaderClickHandler={toggleDateFormat}
        excludeDates={[
          addDays(new Date(), 2),
          addDays(new Date(), 4),
          addDays(new Date(), 6),
          addDays(new Date(), 8),
          addDays(new Date(), 10),
          addDays(new Date(), 12)
        ]}
        highlightDates={[
          addDays(new Date(), 1),
          addDays(new Date(), 3),
          addDays(new Date(), 5),
          addDays(new Date(), 7),
          addDays(new Date(), 9),
          addDays(new Date(), 11)
        ]}
        dateFormat={"yyyy/MM/dd"}
        showMonthYearPicker={dateFormatObj.showMonthYearPicker}
        shouldCloseOnSelect={dateFormatObj.shouldCloseOnSelect}
        monthsShown={dateFormatObj.monthsShown}
        showPreviousButton={dateFormatObj.showPreviousButton}
        showNextButton={dateFormatObj.showNextButton}
      />
    </div>
  );
}

export default App;
