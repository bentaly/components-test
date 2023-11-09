import React from 'react';
import { BaseProps } from '../components';
import { UqliGroupFilterProps } from './UqliGroupFilter/UqliGroupFilter';
import { SelectProps } from '../Popovers';
export interface UQLiBuilderProps extends BaseProps {
    /** overridable classes for root elem */
    classes?: {
        root?: string;
    };
    /** Class overrides that are passed to the UqliGroupFilter */
    GroupFilterClasses?: UqliGroupFilterProps['classes'];
    fieldSelectProps?: SelectProps;
    operatorsSelectProps?: SelectProps;
}
export declare const UQLiBuilder: React.FC<UQLiBuilderProps & Omit<UqliGroupFilterProps, 'onDelete' | 'classes' | 'childrenWithErrors' | 'setChildrenWithErrors' | 'emptyChildren' | 'setEmptyChildren'>>;
