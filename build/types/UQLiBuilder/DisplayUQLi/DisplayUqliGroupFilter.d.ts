import React from 'react';
import { BaseProps } from '../../components';
import { IAggUqliFilter, IValueUqliFilter, OperatorOption } from '../interfaces';
import { DisplayUqliValueFilterProps } from './DisplayUqliValueFilter';
export interface DisplayUqliGroupFilterProps extends BaseProps {
    classes?: {
        root?: string;
        fieldInputDisplay?: string;
        operatorInputDisplay?: string;
    };
    filter: IAggUqliFilter;
    level?: number;
    operators: OperatorOption[];
    isTemplate?: boolean;
    getValueConfig?: DisplayUqliValueFilterProps['getValueConfig'];
    getOperators?: DisplayUqliValueFilterProps['getOperators'];
    getListFieldOptions?: (filter: IValueUqliFilter) => {
        value: string;
        label: string;
    }[] | Promise<{
        value: string;
        label: string;
    }[]>;
    getFieldOptions?: DisplayUqliValueFilterProps['getFieldOptions'];
    fields?: DisplayUqliValueFilterProps['fields'];
}
export declare const DisplayUqliGroupFilter: React.FC<DisplayUqliGroupFilterProps>;
