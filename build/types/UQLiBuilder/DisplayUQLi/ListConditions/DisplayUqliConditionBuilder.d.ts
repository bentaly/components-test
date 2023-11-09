import React from 'react';
import { IValueUqliFilter } from '../../interfaces';
import { DisplayUqliValueFilterProps } from '../DisplayUqliValueFilter';
export interface DisplayUqliConditionBuilderProps {
    filter: IValueUqliFilter;
    isTemplate?: boolean;
    onClickMatchedValues: () => void;
    getListFieldOptions?: DisplayUqliValueFilterProps['getListFieldOptions'];
}
export declare const DisplayUqliConditionBuilder: React.FC<DisplayUqliConditionBuilderProps>;
