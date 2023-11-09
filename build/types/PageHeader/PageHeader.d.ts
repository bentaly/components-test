import React from 'react';
export interface PageHeaderProps {
    children?: React.ReactNode;
    className?: string;
    /** Whether or not to show the border on bottom. Defaults to false. */
    showBottomBorder?: boolean;
}
export declare const PageHeader: ({ children, className, showBottomBorder }: PageHeaderProps) => JSX.Element;
