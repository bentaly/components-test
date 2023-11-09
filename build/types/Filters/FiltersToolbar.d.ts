import React from 'react';
export interface FilterPill<V = any> {
    field?: string;
    label?: string;
    value?: V;
    valueLabel?: string;
}
export declare type FiltersToolbarClasses = {
    root?: string;
    filterSection?: string;
    controls?: string;
};
export interface FiltersToolbarProps {
    controls?: React.ReactNode;
    onFilterButtonClick?: () => void;
    filterButtonSelected?: boolean;
    filters?: FilterPill[];
    onClearFilter?: (filter: FilterPill) => void;
    onClearAll?: () => void;
    classes?: FiltersToolbarClasses;
}
export declare const FiltersToolbar: ({ onFilterButtonClick, filterButtonSelected, controls, onClearFilter, onClearAll, filters, classes: classOverrides, }: FiltersToolbarProps) => JSX.Element;
