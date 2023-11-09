import React from 'react';
import { DataTableHeaderProps, SortDirection } from '../DataTableHeader/DataTableHeader';
import { PaginationProps } from '../DataTablePagination/DataTablePagination';
import { DataTableRowProps } from '../DataTableRow/DataTableRow';
export interface DataTableProps<T, D = any> {
    /** Data table columns which can handle style or rendering */
    columns: DataTableHeaderProps<T>[];
    /** Props for Data table rows */
    rowProps?: DataTableRowProps<T>[];
    /** Data array to map into each row */
    data: D[];
    /** Should Select all checkbox be seen */
    showSelectAll?: boolean;
    /** Fragment that renders on the right side of the bulk selection bar */
    bulkActions?: React.ReactNode;
    /** Selected row ids */
    selectedIds?: string[];
    /** all checkboxes are selected */
    allCheckboxesSelected?: boolean;
    /** Handles sorting by column */
    onSortChange?: (columnToChangeTo: T, isAsc: boolean) => void;
    /** Selects or unselects row that is passed in */
    onSelectRow?: (row: any) => void;
    /** callback for when row checkbox is clicked */
    onCheckedRow?: (row: any, checked: boolean) => void;
    /** Called when Select all checkbox is clicked */
    onSelectAll?: () => void;
    /** Called when deselect all checkbox is clicked */
    onDeselectAll?: () => void;
    /** Have various styling built around variants, active table is a specific style, standard is to allow multiple select while list is single select, active is deprecated and if used will default to list */
    variant?: 'standard' | 'list' | 'active';
    /** These are the defaults passed in to determine what column is sorted and in what direction */
    sortProps?: {
        columnToSortOn: T;
        sortDirection: SortDirection;
    };
    /** pagination props for handling pagination */
    paginationProps?: PaginationProps;
    /** is data table loading */
    loading?: boolean;
    /** error message */
    errorMessage?: string;
    /** can we drag to reorder rows (note - should not be used with sort) */
    draggable?: boolean;
    onDragStart?: (index: number, e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragOver?: (index: number, e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragEnd?: (index: number) => void;
    /** Allows you to set your own key to whatever key you want based on the row */
    getRowKey?: (row: any) => string | number;
    /** Expandable Row Function */
    renderExpandableContent?: (row: any) => React.ReactNode;
    /** List of expanded rows */
    expanded?: string[];
    /** onChange expanded rows */
    onChangeExpanded?: (update: string[]) => void;
    /** Class overrides for changing styling of certain elements */
    classOverrides?: {
        wrapper?: string;
        active?: string;
        tableHeaderRow?: string;
        tableBody?: string;
        tableHead?: string;
        tableClass?: string;
        overlayClassOverrides?: {
            root?: string;
            errorMessage?: string;
        };
    };
    /** these allow overriding test ids if you want to pass your own in as a variable */
    testIds?: {
        tableBody?: string;
        tableHeaderRow?: string;
        wrapper?: string;
        pagination?: {
            previousButton?: string;
            nextButton?: string;
            paginationControlsRoot?: string;
            pageSizeDropdown?: {
                menuRoot?: string;
                select?: string;
            };
            pageNumberDropdown?: {
                menuRoot?: string;
                select?: string;
            };
        };
    };
}
export declare const DataTable: <T>({ columns, rowProps, sortProps, draggable, paginationProps, showSelectAll, bulkActions, selectedIds, onSortChange, onSelectRow, onCheckedRow, onSelectAll, onDeselectAll, classOverrides, testIds, variant, loading, errorMessage, data, allCheckboxesSelected, getRowKey, expanded, onChangeExpanded, renderExpandableContent, onDragStart, onDragOver, onDragEnd, }: DataTableProps<T, any>) => JSX.Element;
