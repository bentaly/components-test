import React from 'react';
import { BaseProps } from '../../components';
import { SelectProps } from '../../Popovers';
import { IValueUqliFilter, FieldOption, OperatorOption, UqliValueConfig, ListConditionOptions } from '../interfaces';
export interface UqliValueFilterProps extends BaseProps {
    classes?: {
        root?: string;
    };
    filter: IValueUqliFilter;
    fields: FieldOption[];
    fieldsLoading?: boolean;
    isOnlyChild: boolean;
    operatorsSelectProps?: SelectProps;
    fieldSelectProps?: SelectProps;
    listConditionOptions?: ListConditionOptions;
    isTemplate?: boolean;
    onChange: (update: IValueUqliFilter) => void;
    onDelete: () => void;
    onValidation?: ({ hasError }: {
        hasError: boolean;
        hasEmptyValues: boolean;
    }) => void;
    getOperators: (field?: string) => Promise<OperatorOption[]> | OperatorOption[];
    getValueConfig?: (filter: IValueUqliFilter) => Promise<UqliValueConfig> | UqliValueConfig;
}
export declare const UqliValueFilter: React.FC<UqliValueFilterProps>;
