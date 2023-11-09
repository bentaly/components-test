import React from 'react';
import { IValueUqliFilter, ListConditionOptions, UqliValueConfig } from '../interfaces';
export interface UqliValueFieldProps {
    filter: IValueUqliFilter;
    isVariable?: boolean;
    isList?: boolean;
    isTemplate?: boolean;
    pristine: boolean;
    listConditionOptions?: ListConditionOptions;
    onChange: (update: IValueUqliFilter) => void;
    onBlur: () => void;
    getValueConfig?: (filter: IValueUqliFilter) => Promise<UqliValueConfig> | UqliValueConfig;
}
export declare const UqliValueField: React.FC<UqliValueFieldProps>;
