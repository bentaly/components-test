import React from 'react';
import { FiltersToolbarClasses } from './FiltersToolbar';
import { InputGroupProps } from '../InputGroups';
import { RangeInputProps, InputProps } from '../Inputs';
import { Filter, FilterRef } from './FilterTypes';
export interface FiltersProps {
    filters?: Filter[];
    children?: React.ReactNode;
    controls?: React.ReactNode;
    onFilterChange?: (filter: FilterRef) => void;
    filterListOpen?: boolean;
    defaultExpandedIndex?: number;
    height?: string | number;
    inputProps?: InputProps | InputGroupProps | RangeInputProps;
    classes?: {
        root?: string;
        filterPanel?: string;
        children?: string;
        slidingContainer?: string;
        filterContainerOpen?: string;
        toolbar?: FiltersToolbarClasses;
    };
}
export declare const Filters: ({ children, controls, onFilterChange, filterListOpen, defaultExpandedIndex, height, inputProps, filters, classes: classOverrides, }: FiltersProps) => JSX.Element;
