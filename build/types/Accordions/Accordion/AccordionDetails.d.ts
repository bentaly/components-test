import React from 'react';
import { BaseProps } from '../../components';
import { CollapseProps } from '@material-ui/core';
import { AccordionProps } from './Accordion';
export interface AccordionDetailsProps extends CollapseProps, BaseProps, Omit<AccordionProps, 'classes'> {
    expanded?: boolean;
    hasError?: boolean;
    variant?: 'compact' | 'normal';
}
export declare const AccordionDetails: React.FC<AccordionDetailsProps>;
