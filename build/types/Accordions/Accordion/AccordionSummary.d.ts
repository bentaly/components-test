import React from 'react';
import { BaseProps } from '../../components';
export interface AccordionSummaryProps extends BaseProps, React.ComponentProps<'div'> {
    classes?: {
        root?: string;
        content?: string;
    };
    expandIconName?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    expanded?: boolean;
    right?: boolean;
    hasError?: boolean;
    variant?: 'compact' | 'normal';
}
export declare const AccordionSummary: React.FC<AccordionSummaryProps>;
