import React from 'react';
import { TooltipProps } from '../Tooltips';
export interface TimestampProps {
    classes?: {
        root?: string;
        tooltip?: string;
    };
    format?: 'complete' | 'normal' | 'shorthand' | string;
    hideTime?: boolean;
    showSeconds?: boolean;
    timestamp?: string;
    timezone?: string;
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
}
export declare const TimestampFormatStrings: Record<string, string>;
export declare const TimestampFormatStringsNoTime: Record<string, string>;
export declare const Timestamp: React.FC<TimestampProps>;
