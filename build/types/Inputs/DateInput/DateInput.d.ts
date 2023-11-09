/// <reference types="react" />
import { InputProps } from '../../index';
interface DateInputProps extends Omit<InputProps, 'onChange' | 'value'> {
    className?: string;
    /** The value of the input */
    value: Date | null;
    /** Change handler for the input */
    onChange: (date: Date | null) => void;
    /** Determines the root stlye of the input. Transparent make the background transparent */
    variant?: 'transparent' | 'standard';
    /** The earliest allowed selectable date */
    minDate?: Date;
    /** The latest allowed selectable date */
    maxDate?: Date;
    /** What kind of dates the input will show */
    level?: 'day' | 'month' | 'year';
}
export declare const DateInput: ({ className, value, onChange, variant, minDate, maxDate, level, width, height, ...inputProps }: DateInputProps) => JSX.Element;
export {};
