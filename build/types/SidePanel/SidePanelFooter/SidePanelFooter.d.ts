import React from 'react';
import { BaseProps } from '../../components';
export interface SidePanelFooterProps extends BaseProps {
    footerHeight?: number;
    hideFooterSeparation?: boolean;
    children?: React.ReactNode;
}
export declare const SidePanelFooter: ({ footerHeight, hideFooterSeparation, children, className, testId, }: SidePanelFooterProps) => JSX.Element;
