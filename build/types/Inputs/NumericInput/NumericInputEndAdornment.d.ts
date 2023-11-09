import React from 'react';
export interface NumericInputEndAdornmentProps {
    onUpPress?: () => void;
    onDownPress?: () => void;
    adornmentText?: React.ReactNode;
}
export declare const NumericInputEndAdornment: ({ onUpPress, onDownPress, adornmentText }: NumericInputEndAdornmentProps) => JSX.Element;
