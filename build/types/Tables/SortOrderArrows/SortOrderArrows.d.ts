/// <reference types="react" />
import { BaseProps } from '../../components';
import { SortDirection } from '../DataTableHeader/DataTableHeader';
export interface SortOrderArrowsProps extends BaseProps {
    /** Is the column selected to be sorted on */
    isActive: boolean;
    /** Is the direction being passed in Desc */
    isDescending: boolean;
    /** Should we allow a user to click on the sort by ascending */
    isAscClickable: boolean;
    /** Should we allow a user to click on the sort by descending */
    isDescClickable: boolean;
    /** Disabled icons */
    disabled?: boolean;
    /** Test Id */
    testIdPreString?: string;
    /** Handler for clicking a sort order arrow */
    onClickArrow?: (dir: SortDirection) => void;
}
export declare function SortOrderArrows({ isActive, isDescending, isAscClickable, isDescClickable, disabled, testIdPreString, className, onClickArrow, }: SortOrderArrowsProps): JSX.Element;
