import React from 'react';
import { BaseProps } from '../../components';
export interface DialogHeaderProps extends BaseProps {
    classes?: {
        root?: string;
    };
    children: React.ReactNode;
}
export declare const DialogHeader: ({ classes: classOverrides, children, className, testId }: DialogHeaderProps) => JSX.Element;
