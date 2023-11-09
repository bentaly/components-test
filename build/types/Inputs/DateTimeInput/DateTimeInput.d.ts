/// <reference types="react" />
import { InputProps } from '../Input/Input';
interface DateTimeInputProps extends Omit<InputProps, 'onChange' | 'value'> {
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
}
export declare const DateTimeInput: ({ className, value, onChange, label, helperText, disabled, error, variant, minDate, maxDate, ...props }: DateTimeInputProps) => JSX.Element;
export {};
