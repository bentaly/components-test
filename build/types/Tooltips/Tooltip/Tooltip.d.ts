import React from 'react';
import { BaseProps } from '../../components';
import { PopperProps } from '@material-ui/core';
export interface TooltipProps extends BaseProps {
    classes?: {
        tooltip?: string;
    };
    disableFocusListener?: boolean;
    disableHoverListener?: boolean;
    disableTouchListener?: boolean;
    disableInteractive?: boolean;
    maxWidth?: number;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    testId?: string;
    text?: React.ReactNode;
    enterDelay?: number;
    leaveDelay?: number;
    popperProps?: Partial<PopperProps>;
}
export interface FullTooltipProps extends TooltipProps {
    children: React.ReactElement;
}
export declare const getArrowPositionMap: any;
export declare const Tooltip: React.FC<FullTooltipProps>;
