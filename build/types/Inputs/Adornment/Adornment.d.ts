import React, { MouseEventHandler } from 'react';
import { IconOptionsType } from '../../Icons';
import { BaseProps } from '../../components';
export interface AdornmentTooltipProps {
    adornment: React.ReactNode;
    tooltip: string;
    onClick?: () => void;
    color?: string;
}
export interface StartEndAdornmentProps {
    endAdornment?: AdornmentTooltipProps;
    startAdornment?: AdornmentTooltipProps;
}
export interface AdornmentProps extends BaseProps {
    onClick?: MouseEventHandler;
    adornment: IconOptionsType | React.ReactNode;
    color?: string;
    tooltipText?: string;
}
export declare const Adornment: React.FC<AdornmentProps>;
export declare const getAdornmentClickHandler: (callback?: MouseEventHandler) => ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
