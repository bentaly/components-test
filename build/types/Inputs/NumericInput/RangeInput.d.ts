/// <reference types="react" />
import { NumericInputProps } from './NumericInput';
export declare type Range = {
    from: string;
    to: string;
};
export interface RangeInputProps extends Omit<NumericInputProps, 'value' | 'onChange'> {
    value?: Range;
    onChange?: (value: Range) => void;
    clearable?: boolean;
}
export declare const RangeInput: ({ value, onChange, min, max, clearable }: RangeInputProps) => JSX.Element;
