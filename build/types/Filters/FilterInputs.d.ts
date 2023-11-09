import React from 'react';
import { InputGroupProps } from '../InputGroups';
import { InputProps, RangeInputProps } from '../Inputs';
import { Filter, FilterRef } from './FilterTypes';
export interface FilterInputsProps {
    children?: React.ReactNode;
    filters?: Filter[];
    inputProps?: InputProps | InputGroupProps | RangeInputProps;
    defaultExpandedIndex?: number;
    onFilterChange?: <V>(filter: FilterRef<V>) => void;
}
export declare const FilterInputs: ({ children, filters, inputProps, defaultExpandedIndex, onFilterChange, }: FilterInputsProps) => JSX.Element;
