import { SortDirection } from '../../../DataTableHeader/DataTableHeader';
export declare const sortProps: {
    isSortingByColumn: boolean;
    sortDirection: SortDirection;
};
export declare const defaultTablePaginationStrings: {
    itemsPerPage: string;
    itemOfTotal: string;
    itemOfPages: string;
};
export declare const defaultNumberOfRowsPerPage = 5;
export declare const defaultPaginationProps: {
    numberOfRowsPerPage: number;
    numberOfRowsOptions: number[];
    currentRow: number;
    totalRows: number;
    currentPage: number;
    totalPages: number;
    paginationStrings: {
        itemsPerPage: string;
        itemOfTotal: string;
        itemOfPages: string;
    };
};
export declare const determineWhichSortFunctionToCall: (a: {
    [key: string]: any;
}, b: {
    [key: string]: any;
}, key: string, isDescending: boolean) => any;
export declare const useSharedStyles: (props: {
    heightOfTable: number;
}) => import("@material-ui/styles").ClassNameMap<string>;
