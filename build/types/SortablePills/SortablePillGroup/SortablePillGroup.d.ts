import React from 'react';
import { BaseProps } from '../../components';
export interface SortablePillGroupProps extends BaseProps {
    classes?: {
        root?: string;
        container?: string;
    };
    data: any[];
    onSort: (data: any[]) => void;
    direction?: 'horizontal' | 'vertical';
    id: string;
}
export declare const SortablePillGroup: React.FC<SortablePillGroupProps>;
