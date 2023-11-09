/// <reference types="react" />
import { DataTableProps } from '../DataTable/DataTable';
declare type DraggableDataTableProps<T, D> = Omit<DataTableProps<T, D>, 'onSortChange' | 'sortProps'> & {
    onReorder: (reorderedData: D[]) => void;
};
export declare const DraggableDataTable: <T, D>(tableProps: DraggableDataTableProps<T, D>) => JSX.Element;
export {};
