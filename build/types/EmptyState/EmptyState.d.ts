import React from 'react';
import { BaseProps } from '../components';
export interface EmptyStateProps extends BaseProps {
    message?: string;
    subText?: string;
    iconName?: string;
    iconSize?: 'large' | 'standard' | 'tiny' | number;
    variant: 'inline' | 'widget' | 'component' | 'page';
    maxWidth?: number;
    height?: number;
    testIds?: {
        root?: string;
        icon?: string;
        message?: string;
        subText?: string;
    };
    classOverrides?: {
        icon?: string;
        message?: string;
        subText?: string;
    };
}
export declare const MessageDefaults: Record<string, string>;
export declare const iconNameDefaults: Record<string, string>;
export declare const EmptyState: React.FC<EmptyStateProps>;
