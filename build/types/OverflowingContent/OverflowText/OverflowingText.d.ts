import React from 'react';
import { TooltipProps } from '../../Tooltips';
import { BaseProps } from '../../components';
export interface OverflowingTextProps extends BaseProps {
    children?: React.ReactNode;
    className?: string;
    maxLines?: number;
    text?: React.ReactNode;
    tooltipProps?: TooltipProps;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    disableInteractive?: boolean;
}
export declare const OverflowingText: React.FC<OverflowingTextProps>;
