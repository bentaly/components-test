/// <reference types="react" />
export interface PaginationProps {
    /** How many rows per page */
    numberOfRowsPerPage: number;
    /** All number of row options to choose from */
    numberOfRowsOptions?: number[];
    /** what is the current row selected */
    currentRow: number;
    /** total amount of rows */
    totalRows: number;
    /** what page is the user on */
    currentPage: number;
    /** total amount of pages of results */
    totalPages: number;
    /** should change what subset of data that is shown or other pagination props */
    onChange: (update: Partial<PaginationProps>) => void;
    /** Pagination strings to determine what is displayed in the pagination section */
    paginationStrings?: {
        itemsPerPage?: string;
        itemOfTotal?: string;
        itemOfPages?: string;
    };
    /** Disable pagination controls */
    disabled?: boolean;
    variant?: 'list' | 'standard';
    /** Hide page dropdown and options */
    hidePageOptions?: boolean;
}
export interface DataTablePaginationProps extends PaginationProps {
    testIds?: {
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
}
export declare const DataTablePagination: ({ numberOfRowsPerPage, numberOfRowsOptions, currentPage, totalPages, totalRows, onChange, testIds, paginationStrings, disabled, variant, hidePageOptions, }: DataTablePaginationProps) => JSX.Element;
