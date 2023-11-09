import React from 'react';
import { BaseProps } from '../components';
export declare type SeverityType = 'critical' | 'high' | 'medium' | 'low' | 'informational' | 'unassessed';
export interface SeverityBannerProps extends BaseProps {
    severityType: 'critical' | 'high' | 'medium' | 'low' | 'informational' | 'unassessed';
    children: React.ReactNode;
}
export declare const SeverityBanner: ({ severityType, children, className }: SeverityBannerProps) => JSX.Element;
export declare const useSeverityBannerType: () => SeverityType;
