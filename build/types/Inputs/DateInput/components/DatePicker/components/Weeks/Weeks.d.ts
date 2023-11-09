/// <reference types="react" />
interface WeeksProps {
    date: Date | null;
    value: Date | null;
    onDayClick: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
}
export declare const Weeks: ({ date, value, onDayClick, minDate: minDateProp, maxDate: maxDateProp }: WeeksProps) => JSX.Element | null;
export {};
