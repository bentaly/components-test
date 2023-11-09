/// <reference types="react" />
interface DatePickerProps {
    className?: string;
    date: Date | null;
    onChange: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    level?: 'day' | 'month' | 'year';
}
export declare const DatePicker: ({ className, date: dateProp, onChange, maxDate, minDate, level, }: DatePickerProps) => JSX.Element;
export {};
