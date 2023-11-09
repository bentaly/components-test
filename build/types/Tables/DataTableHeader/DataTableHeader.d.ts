import React from 'react';
export declare enum SortDirection {
    asc = "asc",
    desc = "desc",
    unsorted = "unsorted"
}
export interface DataTableHeaderProps<T> {
    /** This is to be able to find a specific column by referencing by a key */
    lookupKey: string;
    /** Typically an enum to determine what column to pass back to sort on */
    columnHeaderSortProp?: T;
    /** Helper props to determine what arrows to display as active */
    sortProps?: {
        isSortingByColumn: boolean;
        sortDirection: SortDirection;
    };
    /** Typically a string to display */
    label?: React.ReactNode;
    /** Function gets called when a user clicks on a column */
    onSortChange?: (columnToSort: T, isAsc: boolean) => void;
    /** Allows the parent to determine how data is displayed */
    CellRenderer?: (value: any) => React.ReactNode;
    /** Controls the width of a column */
    width?: string | number;
    /** If this is defined it will cause an info icon to display with more info about the specific column */
    info?: string;
    /** Allows you to disable onClick events */
    disabled?: boolean;
    /** overrides for certain styles */
    classes?: {
        header?: string;
        cell?: string;
    };
    /** testIds that can be passed into this component */
    testIds?: {
        root?: string;
        infoIconButton?: string;
        infoIconWrapper?: string;
    };
}
export declare const DataTableHeader: <T>({ columnHeaderSortProp, label, onSortChange, sortProps, lookupKey, info, testIds, disabled, }: DataTableHeaderProps<T>) => JSX.Element;
