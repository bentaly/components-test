/// <reference types="react" />
import { BaseProps } from '../../components';
import { TooltipProps } from '../../Tooltips';
export interface CappedListProps extends BaseProps {
    /** An array of items */
    items: (string | number)[];
    /** Props for optional tooltip */
    tooltipProps?: Partial<TooltipProps>;
    /** The max number of items to show */
    maxItems?: number;
    classes?: {
        root?: string;
    };
}
/**
 * This component will render a list, up to a number of items.
 * For example, ```['test1', 'test2', 'test3', 'test4']``` with ```maxItems = 3``` will render:
 * "test1, test2, test3 + 1 more"
 */
export declare const CappedList: ({ items, maxItems, classes: classOverrides, testId, tooltipProps }: CappedListProps) => JSX.Element;
