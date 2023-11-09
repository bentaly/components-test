import { ReactNode } from 'react';
import { Range } from '../Inputs/NumericInput/RangeInput';
import { FilterPill } from './FiltersToolbar';
declare type InputType = 'radio' | 'checkbox' | 'range' | 'text' | 'list' | 'custom';
export declare class FilterRef<V = any> {
    field: string;
    value?: V;
    constructor(field: string, value?: V);
}
export declare class FilterBase<T extends InputType, V> extends FilterRef<V> {
    readonly type: T;
    readonly field: string;
    label?: string;
    emptyValue?: V;
    valueLabelGenerator?: () => string;
    getClearedValue?: (value?: any) => V | undefined;
    constructor(type: T, field: string, label?: string, value?: V, emptyValue?: V | undefined);
    toFilterPill(): FilterPill | FilterPill[] | undefined;
    isEmpty(): boolean;
}
export declare class RadioFilter extends FilterBase<'radio', string | number> {
    input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    };
    constructor(field: string, label: string, input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    }, value?: string | number);
    toFilterPill(): FilterPill | undefined;
}
export declare class CheckboxFilter extends FilterBase<'checkbox', string[]> {
    input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    };
    constructor(field: string, label: string, input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    }, value?: string[]);
    toFilterPill(): FilterPill[] | undefined;
}
export declare class TextFilter extends FilterBase<'text', string> {
    constructor(field: string, label: string, value?: string);
}
export declare class RangeFilter extends FilterBase<'range', Range> {
    input?: {
        min?: number;
        max?: number;
    };
    constructor(field: string, label: string, input?: {
        min?: number;
        max?: number;
    }, value?: Range);
    toFilterPill(): FilterPill | undefined;
    isEmpty(): boolean;
}
export declare class ListFilter extends FilterBase<'list', string> {
    input: {
        selectOptions: {
            label: string;
            value: string;
            divider?: boolean;
        }[];
        placeholder?: string;
    };
    constructor(field: string, label: string, input: {
        selectOptions: {
            label: string;
            value: string;
            divider?: boolean;
        }[];
        placeholder?: string;
    }, value?: string);
    toFilterPill(): FilterPill | undefined;
}
export declare class CustomFilter<V> extends FilterBase<'custom', V> {
    customInputRender?: (props: {
        onChange: (val: V) => void;
        filter?: Filter;
    }) => ReactNode;
    constructor(field: string, label: string, customInputRender?: (props: {
        onChange: (val: V) => void;
        filter?: Filter;
    }) => ReactNode, value?: V, emptyValue?: V | undefined);
}
export declare type Filter<T = any> = RadioFilter | CheckboxFilter | TextFilter | RangeFilter | ListFilter | CustomFilter<T>;
export {};
