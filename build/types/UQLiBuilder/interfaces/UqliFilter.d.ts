/// <reference types="react" />
import { IconOptionsType } from '../../Icons';
import { AutoCompleteProps, InputProps, PillAutoCompleteProps, PillInputProps } from '../../Inputs';
import { SelectProps } from '../../Popovers';
import { CustomValueSelectProps } from '../../Popovers/CustomValueSelect/CustomValueSelect';
import { MultiselectDropdownProps } from '../../Popovers/MultiselectDropdown/MultiselectDropdown';
export declare enum AggOperator {
    AND = "AND",
    OR = "OR"
}
export declare enum ValueOperator {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    CONTAINS = "CONTAINS",
    DOES_NOT_CONTAIN = "DOES_NOT_CONTAIN",
    GREATER_THAN = "GREATER_THAN",
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
    LESS_THAN = "LESS_THAN",
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL",
    BETWEEN = "BETWEEN",
    STARTS_WITH = "STARTS_WITH",
    DOES_NOT_START_WITH = "DOES_NOT_START_WITH",
    IN = "IN",
    NOT_IN = "NOT_IN",
    ENDS_WITH = "ENDS_WITH",
    DOES_NOT_END_WITH = "DOES_NOT_END_WITH",
    LIKE = "LIKE",
    NOT_LIKE = "NOT_LIKE",
    IS_ONE_OF = "IS_ONE_OF",
    IS_NOT_ONE_OF = "IS_NOT_ONE_OF",
    IS_ALL_OF = "IS_ALL_OF",
    IS_NOT_ALL_OF = "IS_NOT_ALL_OF",
    IS_SUBSET_OF = "IS_SUBSET_OF",
    IS_NOT_SUBSET_OF = "IS_NOT_SUBSET_OF",
    IS_IN_LIST = "IS_IN_LIST",
    IS_NOT_IN_LIST = "IS_NOT_IN_LIST",
    IS_NULL = "IS_NULL",
    IS_NOT_NULL = "IS_NOT_NULL"
}
export interface IBaseUqliFilter {
    operator?: AggOperator | ValueOperator;
    metadata?: Record<string, any>;
}
export interface IAggUqliFilter extends IBaseUqliFilter {
    operator: AggOperator;
    children: UqliFilter[];
}
export interface IValueUqliFilter extends IBaseUqliFilter {
    operator?: ValueOperator;
    field?: string;
    value?: string;
    values?: string[];
}
export declare type UqliFilter = IAggUqliFilter | IValueUqliFilter;
export declare type FieldOption = {
    label: string;
    value: string;
    endAdornment?: IconOptionsType | React.ReactNode;
    secondaryText?: string;
};
export declare type OperatorOption = {
    label: string;
    value: ValueOperator;
};
export declare type InputType = 'input' | 'pillinput' | 'select' | 'multiselect' | 'autocomplete' | 'pillautocomplete' | 'customvalueselect';
export declare type UqliValueInputProps = Partial<InputProps> | Partial<PillInputProps> | Partial<SelectProps> | Partial<MultiselectDropdownProps> | Partial<AutoCompleteProps> | Partial<PillAutoCompleteProps> | Partial<CustomValueSelectProps>;
export declare type UqliValueConfig = {
    type?: InputType;
    valueOptions?: {
        value: string;
        label: string;
    }[];
    isCustomValue?: boolean;
    /** This tells list filter to:
     * - Not try and resolve "values matched" in list conditions
     * - Show var/val option for the input value which will drive "variables"
     */
    isTemplate?: boolean;
    InputProps?: UqliValueInputProps;
};
export declare type ListCondition = {
    fieldId?: string;
    columnUuid?: string;
    fieldName?: string;
    values?: string[];
};
export declare const NullOperators: ValueOperator[];
export declare type ListConditionOptions = {
    getValues?: ({ listUuid, selectedField, search, }: {
        listUuid?: string;
        selectedField?: string;
        search?: string;
    }) => string[] | Promise<string[]>;
    getFields?: ({ listUuid, }: {
        listUuid: string;
    }) => {
        id: string;
        name: string;
    }[] | Promise<{
        id: string;
        name: string;
    }[]>;
    getMatchedListValues?: ({ listId, field, outerOperator, listConditions, }: {
        listId: string;
        field: string;
        outerOperator: string;
        listConditions: {
            fieldId: string;
            values: string[];
        }[];
    }) => string[] | Promise<string[]>;
};
