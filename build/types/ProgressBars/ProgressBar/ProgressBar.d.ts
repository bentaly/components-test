import React from 'react';
import { BaseProps } from '../../components';
import { TooltipProps } from '../../Tooltips';
export interface ProgressBarProps extends BaseProps {
    classes?: {
        root?: string;
    };
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
    /** Denotes percentage loaded. Leave undefined if progress cannot be denoted with a number */
    value?: number | undefined;
    /** Progress bar fills in from the center. Only applicable when a numerical progress value is also passed in. */
    center?: string;
    /** Color changes to INFO_STATUS, instead of SUCCESS_STATUS. Only applicable when a numerical progress value is also passed in. */
    paused?: boolean;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
