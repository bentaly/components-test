import React from 'react';
import { BaseProps } from '../../components';
export interface DialogContentProps extends BaseProps {
    classes?: {
        root?: string;
    };
    children: React.ReactNode;
}
export declare const DialogContent: ({ classes: classOverrides, children, className, testId }: DialogContentProps) => JSX.Element;
