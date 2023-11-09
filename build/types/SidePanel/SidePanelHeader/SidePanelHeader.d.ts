import React from 'react';
import { BaseProps } from '../../components';
export interface SidePanelHeaderProps extends BaseProps {
    children?: React.ReactNode;
    fullWidth?: boolean;
}
export declare const SidePanelHeader: ({ children, className, testId, fullWidth }: SidePanelHeaderProps) => JSX.Element;
