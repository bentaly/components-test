import React from 'react';
import { IValueUqliFilter } from '../../interfaces';
import { DisplayUqliValueFilterProps } from '../DisplayUqliValueFilter';
export interface DisplayUqliListConditionsButtonProps {
    filter: IValueUqliFilter;
    isTemplate?: boolean;
    getListFieldOptions?: DisplayUqliValueFilterProps['getListFieldOptions'];
}
export declare const DisplayUqliListConditionsButton: React.FC<DisplayUqliListConditionsButtonProps>;
