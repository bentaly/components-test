import React from 'react';
import { IValueUqliFilter, OperatorOption } from '../interfaces';
import { SelectProps as ISelectProps } from '../../Popovers';
export interface UqliOperatorFieldProps {
    filter: IValueUqliFilter;
    isList?: boolean;
    isVariable?: boolean;
    pristine: boolean;
    /** Select internal component props */
    SelectProps?: ISelectProps;
    onChange: (update: IValueUqliFilter) => void;
    onBlur: () => void;
    getOperators: (field?: string) => Promise<OperatorOption[]> | OperatorOption[];
}
export declare const UqliOperatorField: React.FC<UqliOperatorFieldProps>;
