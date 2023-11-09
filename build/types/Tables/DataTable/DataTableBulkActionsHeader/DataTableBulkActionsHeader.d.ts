import React from 'react';
interface DataTableBulkActionsHeaderProps {
    numSelected: number;
    bulkActions: React.ReactNode;
    onDeselectAll?: () => void;
    checked: boolean;
}
export declare const DataTableBulkActionsHeader: ({ numSelected, bulkActions, onDeselectAll, checked, }: DataTableBulkActionsHeaderProps) => JSX.Element;
export {};
