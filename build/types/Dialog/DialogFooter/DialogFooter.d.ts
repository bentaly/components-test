import React from 'react';
import { BaseProps } from '../../components';
export interface DialogFooterProps extends BaseProps {
    classes?: {
        root?: string;
    };
    children: React.ReactNode;
}
export declare const DialogFooter: ({ classes: classOverrides, children, className, testId }: DialogFooterProps) => JSX.Element;
