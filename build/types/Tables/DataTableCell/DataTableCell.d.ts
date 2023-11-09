import React from 'react';
import { BaseProps } from '../../components';
export interface DataTableCellProps extends BaseProps {
    /** children */
    children: React.ReactNode;
    classOverrides?: {
        cell?: string;
    };
}
export declare const DataTableCell: React.ForwardRefExoticComponent<DataTableCellProps & React.RefAttributes<HTMLTableCellElement>>;
