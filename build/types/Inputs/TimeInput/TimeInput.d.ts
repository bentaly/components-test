/// <reference types="react" />
import { InputProps } from '../Input/Input';
interface TimeInputProps extends Omit<InputProps, 'onChange' | 'value'> {
    className?: string;
    value: string;
    onChange: (time: string) => void;
}
export declare const TimeInput: ({ className, value, onChange, ...props }: TimeInputProps) => JSX.Element;
export {};
