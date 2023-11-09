/// <reference types="react" />
import * as React$1 from 'react';
import React__default, { MutableRefObject, RefObject, ReactNode, DragEvent, MouseEventHandler, Dispatch, SetStateAction } from 'react';

interface BaseProps {
    /** An id that will be passed to root element as data-testid */
    testId?: string;
    /** A class that will be passed to the root div */
    className?: string;
}

interface AccordionProps extends BaseProps {
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
declare const Accordion: React__default.FC<AccordionProps>;
export { Accordion, AccordionProps };
