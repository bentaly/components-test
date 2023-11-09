/// <reference types="react" />
interface YearProps {
    date: Date | null;
    value: Date | null;
    onYearClick: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    level: 'day' | 'month' | 'year';
}
export declare const Years: ({ date, value, onYearClick, minDate: minDateProp, maxDate: maxDateProp, level }: YearProps) => JSX.Element | null;
export {};
