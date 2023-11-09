import { AggOperator, FieldOption, IAggUqliFilter, IValueUqliFilter, UqliFilter, ValueOperator } from '../interfaces';
export declare const blankValueUqliFilter: IValueUqliFilter;
export declare const blankAggUqliFilter: IAggUqliFilter;
export declare const listToValOperator: {
    IS_IN_LIST: ValueOperator;
    IS_NOT_IN_LIST: ValueOperator;
};
export declare const valToListOperator: {
    IN: ValueOperator;
    NOT_IN: ValueOperator;
};
export declare const isListOp: (operator?: ValueOperator) => boolean;
export declare const NonVariableOps: ValueOperator[];
export declare const isVariableOp: (operator?: ValueOperator) => boolean;
export declare const addGroupToFilter: (filter: IAggUqliFilter) => {
    children: UqliFilter[];
    operator: AggOperator;
    metadata?: Record<string, any> | undefined;
};
export declare const addValueFilterToFilter: (filter: IAggUqliFilter) => {
    children: UqliFilter[];
    operator: AggOperator;
    metadata?: Record<string, any> | undefined;
};
export declare const makeEmptyListFilter: (listUuid?: string, listName?: string) => {
    value: undefined;
    values: never[];
    metadata: {
        isList: boolean;
        listConditions: {
            field: string;
            value: string;
            values: never[];
        }[];
        listOuterOperator: AggOperator;
        listUuid: string | undefined;
        listName: string | undefined;
    };
};
export declare const isValueFilter: (uqli: any) => uqli is IValueUqliFilter;
export declare const isAggFilter: (uqli: any) => uqli is IAggUqliFilter;
/*********************************
 *********** VALIDATORS ***********
 **********************************/
export declare const validateField: (pristine: boolean, field?: string, fields?: FieldOption[]) => boolean;
export declare const validateOperator: (pristine: boolean, operator?: ValueOperator) => boolean;
export declare const validateValue: (pristine: boolean, filter: IValueUqliFilter, isTemplate?: boolean) => boolean;
export declare const validateFilterForUI: (pristine: {
    field: boolean;
    operator: boolean;
    value: boolean;
}, filter: IValueUqliFilter, fields?: FieldOption[], isTemplate?: boolean) => {
    valid: boolean;
    empty: boolean;
};
export declare const validateUqli: (uqli: UqliFilter) => any;
