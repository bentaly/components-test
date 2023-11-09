import React from 'react';
import { BaseProps } from '../../components';
import { SelectProps } from '../../Popovers';
import { AggOperator, IAggUqliFilter } from '../interfaces';
import { UqliValueFilterProps } from '../UqliValueFilter/UqliValueFilter';
export interface UqliGroupFilterProps extends BaseProps {
    classes?: {
        root?: string;
    };
    filter: IAggUqliFilter;
    level?: number;
    fields: UqliValueFilterProps['fields'];
    fieldsLoading?: UqliValueFilterProps['fieldsLoading'];
    maxDepth?: number;
    aggOperators?: AggOperator[];
    childrenWithErrors?: string[];
    emptyChildren?: string[];
    headerText?: {
        before?: string;
        after?: string;
    };
    listConditionOptions?: UqliValueFilterProps['listConditionOptions'];
    addConditionButtonText?: string;
    fieldSelectProps?: SelectProps;
    operatorsSelectProps?: SelectProps;
    /** Shows var/val options and doesn't attempt to get real values from lists */
    isTemplate?: boolean;
    onChange: (update: IAggUqliFilter) => void;
    onValidation?: ({ hasError }: {
        hasError: boolean;
        hasEmptyValues: boolean;
    }) => void;
    getOperators: UqliValueFilterProps['getOperators'];
    getValueConfig?: UqliValueFilterProps['getValueConfig'];
    setChildrenWithErrors?: React.Dispatch<React.SetStateAction<string[]>>;
    setEmptyChildren?: React.Dispatch<React.SetStateAction<string[]>>;
}
export declare const UqliGroupFilter: React.FC<UqliGroupFilterProps>;
