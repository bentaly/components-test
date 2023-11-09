import React from 'react';
import { BaseProps } from '../../components';
import { IValueUqliFilter, OperatorOption, UqliValueConfig, FieldOption } from '../interfaces';
export interface DisplayUqliValueFilterProps extends BaseProps {
    classes?: {
        root?: string;
        fieldInputDisplay?: string;
        operatorInputDisplay?: string;
    };
    filter: IValueUqliFilter;
    isTemplate?: boolean;
    getValueConfig?: (filter: IValueUqliFilter) => UqliValueConfig;
    operators: OperatorOption[];
    getListFieldOptions?: (filter: IValueUqliFilter) => {
        value: string;
        label: string;
    }[] | Promise<{
        value: string;
        label: string;
    }[]>;
    getFieldOptions?: (filter: IValueUqliFilter) => {
        value: string;
        label: string;
    }[] | Promise<{
        value: string;
        label: string;
    }[]>;
    getOperators?: (field?: string) => OperatorOption[];
    fields?: FieldOption[];
}
export declare const DisplayUqliValueFilter: React.FC<DisplayUqliValueFilterProps>;
