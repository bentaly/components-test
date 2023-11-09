import React from 'react';
import { InputType, UqliValueConfig } from '../interfaces';
export interface UqliValueInputProps {
    type?: InputType;
    value?: string;
    values?: string[];
    placeHolder?: string;
    loading?: boolean;
    error?: boolean;
    disabled?: boolean;
    options?: UqliValueConfig['valueOptions'];
    isList?: boolean;
    isVariable?: boolean;
    isTemplate?: boolean;
    isCustomValue?: boolean;
    onChange: (value: string, values: string[], label?: React.ReactNode) => void;
    onBlur?: () => void;
    inputProps?: UqliValueConfig['InputProps'];
    onChangeCustomValue?: (isCustomValue: boolean) => void;
}
export declare const UqliValueInput: React.FC<UqliValueInputProps>;
