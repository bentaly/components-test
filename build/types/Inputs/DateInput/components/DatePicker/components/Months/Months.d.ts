/// <reference types="react" />
interface MonthsProps {
    date: Date | null;
    value: Date | null;
    onMonthClick: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
}
export declare const Months: ({ date, value, onMonthClick, minDate: minDateProp, maxDate: maxDateProp }: MonthsProps) => JSX.Element | null;
export {};
