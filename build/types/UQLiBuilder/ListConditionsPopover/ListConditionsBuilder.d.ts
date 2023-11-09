import React from 'react';
import { IAggUqliFilter, IValueUqliFilter, OperatorOption } from '../interfaces';
import { UqliValueFilterProps } from '../UqliValueFilter/UqliValueFilter';
import { SelectProps } from '../../Popovers';
export interface ListConditionsBuilderProps {
    filter: IValueUqliFilter;
    isTemplate?: boolean;
    onChange: (newValue: any) => void;
    getFields?: ({ listUuid, }: {
        listUuid: string;
    }) => {
        id: string;
        name: string;
    }[] | Promise<{
        id: string;
        name: string;
    }[]>;
    getOps: () => OperatorOption[];
    getValueConfig: UqliValueFilterProps['getValueConfig'];
    listFilter: IAggUqliFilter;
    onClickMatchedValues: () => void;
    fieldSelectProps?: SelectProps;
    operatorsSelectProps?: SelectProps;
}
export declare const ListConditionsBuilder: React.FC<ListConditionsBuilderProps>;
