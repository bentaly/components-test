import React from 'react';
import { BaseProps } from '../../components';
export interface LoadingSpinnerProps extends BaseProps {
    size?: 'tiny' | 'standard' | 'large' | number;
    color?: string;
    classOverrides?: {
        root?: string;
    };
    testIds?: {
        root?: string;
        icon?: string;
    };
}
export declare const LoadingSpinner: React.FC<LoadingSpinnerProps>;
