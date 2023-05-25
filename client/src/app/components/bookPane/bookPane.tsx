import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/button";
import { BookPaneStyles } from "./bookPaneStyles";
import "react-calendar/dist/Calendar.css";

const BookPane = () => {
  const [checkInDate, setcheckInDate] = useState<Date>();
  const [checkInDateOpen, setCheckInDateOpen] = useState(false);
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [checkOutDateOpen, setCheckOutDateOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setCheckInDateOpen(!checkInDateOpen);
    if (checkOutDateOpen) setCheckOutDateOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setCheckOutDateOpen(!checkOutDateOpen);
    if (checkInDateOpen) setCheckInDateOpen(false);
  };

  return (
    <BookPaneStyles.Container>
      <BookPaneStyles.Item>
        <BookPaneStyles.Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </BookPaneStyles.Icon>
        <BookPaneStyles.Header onClick={toggleStartDateCalendar}>
          Check-In Date
        </BookPaneStyles.Header>
        <BookPaneStyles.Caret>
          <FontAwesomeIcon icon={checkInDateOpen ? faCaretUp : faCaretDown} />
        </BookPaneStyles.Caret>
        {checkInDateOpen && (
          <BookPaneStyles.Calendar
            value={checkInDate}
            onChange={setcheckInDate as any}
          />
        )}
      </BookPaneStyles.Item>
      <BookPaneStyles.Item>
        <BookPaneStyles.Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </BookPaneStyles.Icon>
        <BookPaneStyles.Header onClick={toggleReturnDateCalendar}>
          Check-Out Date
        </BookPaneStyles.Header>
        <BookPaneStyles.Caret>
          <FontAwesomeIcon icon={checkOutDateOpen ? faCaretUp : faCaretDown} />
        </BookPaneStyles.Caret>
        {checkOutDateOpen && (
          <BookPaneStyles.Calendar
            offset
            value={checkOutDate}
            onChange={setCheckOutDate as any}
          />
        )}
      </BookPaneStyles.Item>
      <Button text="Book" />
    </BookPaneStyles.Container>
  );
};

export default BookPane;
