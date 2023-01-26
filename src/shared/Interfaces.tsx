import dayjs from 'dayjs';

export interface Availability {
  possibleTimes: number[];
  availableTimes: number[];
}

export interface BlockedDates {
  blockedWeekDays: number[];
  blockedDates: number[];
  availableTimes: Availability;
}

export interface CalendarProps {
  selectedDate: Date | null;
  onDateSelected: (date: Date) => void;
}

export interface CalendarWeek {
  week: number;
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
}
