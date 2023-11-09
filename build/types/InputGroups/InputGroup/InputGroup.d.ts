import React from 'react';
import { BaseProps } from '../../components';
import { SimpleOption } from '../InputGroups';
export interface InputGroupProps extends BaseProps {
    classes?: {
        root?: string;
        options?: string;
        option?: string;
        tooltip?: string;
    };
    selectedValues?: Array<string | number>;
    direction?: 'column' | 'row';
    label?: string;
    labelIcon?: string;
    type: 'radio' | 'checkbox' | 'switch';
    variant?: 'default' | 'button';
    onChange?: (vals: Array<string | number>) => void;
    options: SimpleOption[];
    size?: 'large' | 'medium' | 'small';
    disabled?: boolean;
    noHorizontalPadding?: boolean;
    searchable?: boolean;
    onSearchChange?: (searchValue: string) => void;
    allowSelectAll?: boolean;
}
export declare const InputGroup: React.FC<InputGroupProps>;
