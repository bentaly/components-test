import React from 'react';
import { BaseProps } from '../../components';
import { DataTableHeaderProps } from '../DataTableHeader/DataTableHeader';
interface DataTableRowDerivedProps<T> extends DataTableRowProps<T> {
    /** data to display */
    data: Record<string, any>;
    /** is variant of table a list  */
    isListTable: boolean;
    rowKey: string;
}
export interface DataTableRowProps<T> extends BaseProps {
    /** is the row selected */
    isSelected?: boolean;
    /** is checkbox on the row selected */
    isCheckboxSelected?: boolean;
    /** should display a checkbox */
    bulkActionsEnabled?: boolean;
    /** columns that are passed to the row */
    columns?: DataTableHeaderProps<T>[];
    /** function to call when row is clicked on */
    onClick?: (row: Record<string, any>) => void;
    /** callback for when row checkbox is clicked */
    onCheckedRow?: (row: Record<string, any>, checked: boolean) => void;
    /** grid layout is what we use to determine width of a specific column */
    gridLayout?: string;
    /** is collapsed */
    isExpanded?: boolean;
    /** function to call onExpanded */
    onExpanded?: (id: string) => void;
    /** Override classes */
    classOverrides?: {
        wrapper?: string;
    };
    /** test id that is passed in for the row */
    testId?: string;
    /** will need to display extra column when has expanders is true */
    hasExpanders?: boolean;
    /** sets the hovering row, so you can style any expansion content */
    setIsHoveredRow?: (rowKey: string) => void;
    /** sets isHovered, for styling purposes */
    isHovered?: boolean;
    /** can we drag to reorder rows (note - should not be used with sort) */
    draggable?: boolean;
    onDragStart?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragOver?: (e: React.DragEvent<HTMLTableRowElement>) => void;
    onDragEnd?: () => void;
}
export declare const DataTableRow: <T>({ isSelected, isCheckboxSelected, bulkActionsEnabled, onClick, onCheckedRow, data, isListTable: listTable, columns, gridLayout, testId, classOverrides, isExpanded, rowKey, hasExpanders, onExpanded, setIsHoveredRow, isHovered, draggable, onDragStart, onDragOver, onDragEnd, }: DataTableRowDerivedProps<T>) => JSX.Element;
export {};
