import React from 'react';
import { BaseProps } from '../../components';
export interface AccordionProps extends BaseProps {
    classes?: {
        root?: string;
    };
    /** Sets section expanded by default. Index count starts from 0 and top-most section */
    defaultExpandedIndex?: number;
    /** Determines whether a user can expand multiple sections at the same time, or if expanding a section closes all previous sections */
    canExpandMultiple?: boolean;
    /** Determines caret positioning. Default is left. Setting it to true will align caret to the right.*/
    right?: boolean;
    variant?: 'compact' | 'normal';
}
export declare const Accordion: React.FC<AccordionProps>;
