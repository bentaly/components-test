import React from 'react';
import { BaseProps } from '../../components';
export interface FancyLabelProps extends BaseProps {
    classes?: {
        root?: string;
    };
    /**
     * icon to display at the beginning of the label
     */
    icon?: string;
}
export declare const FancyLabel: React.FC<FancyLabelProps>;
