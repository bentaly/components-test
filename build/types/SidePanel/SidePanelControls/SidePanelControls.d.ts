import React from 'react';
import { BaseProps } from '../../components';
export interface SidePanelControlsProps extends BaseProps {
    footerHeight?: number;
    displayFooterSeparation?: boolean;
    children?: React.ReactNode;
}
export declare const SidePanelControls: ({ children, className, testId }: SidePanelControlsProps) => JSX.Element;
