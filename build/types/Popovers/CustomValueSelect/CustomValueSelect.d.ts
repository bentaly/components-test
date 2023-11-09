import React from 'react';
import { SelectProps } from '../Select/Select';
import { AutoCompleteProps, InputProps, PillAutoCompleteProps, PillInputProps } from '../../Inputs';
export declare type CustomValueInputType = 'PillInput' | 'AutoComplete' | 'PillAutoComplete' | 'Input';
export interface CustomValueSelectProps extends Omit<SelectProps, 'testIds' | 'onChange'> {
    customValueInputType: CustomValueInputType;
    customValueInputProps?: Partial<InputProps> | Partial<PillInputProps> | Partial<AutoCompleteProps> | Partial<PillAutoCompleteProps>;
    isCustomValue: boolean;
    values?: string[];
    onChange?: (val: string, values: string[]) => void;
    customValueInputString?: string;
    changeCustomValue?: (isCustomValue: boolean) => void;
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
    startAdornmentTooltipText?: string;
    testIds?: {
        select?: string;
        menuRoot?: string;
        addCustomValueButton?: string;
    };
    width?: number;
}
export declare const CustomValueSelect: ({ customValueInputType, isCustomValue, options, value, customValueInputProps: inputProps, values, changeCustomValue, customValueInputString, onChange, classes: classOverrides, testIds, endAdornment, width, secondaryText, startAdornment, startAdornmentTooltipText, }: CustomValueSelectProps) => JSX.Element;
