import React from 'react';
import { BaseProps } from '../../components';
export interface SidePanelContentProps extends BaseProps {
    children?: React.ReactNode;
}
export declare const SidePanelContent: ({ children, className, testId }: SidePanelContentProps) => JSX.Element;
