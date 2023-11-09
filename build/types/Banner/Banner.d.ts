import React from 'react';
import { BaseProps } from '../components';
export declare type BannerStatus = 'success' | 'warning' | 'caution' | 'error' | 'informational';
export interface BannerProps extends BaseProps {
    status: BannerStatus;
    hideIcon?: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
}
export declare const Banner: ({ status, hideIcon, className, onClose, children, testId }: BannerProps) => JSX.Element;
