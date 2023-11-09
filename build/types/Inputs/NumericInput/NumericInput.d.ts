import React from 'react';
import { InputProps } from '../Input/Input';
export declare type NumericInputChangeType = 'arrow' | 'typed';
export interface NumericInputProps extends Omit<InputProps, 'onChange' | 'endAdornment' | 'onBlur'> {
    /** A node, usually a string, to be rendered as a unit, like "cm" */
    unit?: React.ReactNode;
    /** The maximum value of the input */
    max?: number;
    /** The minimum value of the input */
    min?: number;
    /** A multiplier that affects how much the input is incremented by a single arrow click */
    incrementBy?: number;
    /** The change handler */
    onChange?: (value: string, type: NumericInputChangeType) => void;
    /** A function to run when the input is blurred */
    onBlur?: (event: React.FocusEvent) => void;
    /** Whether or not the value can be empty on blur */
    canBeEmpty?: boolean;
}
export declare const NumericInput: ({ unit, value, onChange, onBlur, incrementBy, max, min, canBeEmpty, ...inputProps }: NumericInputProps) => JSX.Element;
