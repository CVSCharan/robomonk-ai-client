import React from "react";
import styles from "../styles/CalendarWidget.module.css";

interface CalendarWidgetProps {
  type: "current" | "upcoming";
}

const CalendarWidget: React.FC<CalendarWidgetProps> = ({ type }) => {
  // This is a placeholder component
  // In a real implementation, you would integrate with a calendar library
  // such as react-big-calendar, fullcalendar, or similar

  return (
    <div className={styles.calendarWidget}>
      <div className={styles.calendarHeader}>
        <h3>
          {type === "current"
            ? "Current Events Calendar"
            : "Upcoming Events Calendar"}
        </h3>
        <p>Select a date to view available events</p>
      </div>
      <div className={styles.calendarPlaceholder}>
        <p>Calendar Widget Placeholder</p>
      </div>
    </div>
  );
};

export default CalendarWidget;
