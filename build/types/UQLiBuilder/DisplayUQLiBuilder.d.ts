import React from 'react';
import { BaseProps } from '../components';
import { DisplayUqliGroupFilterProps } from './DisplayUQLi/DisplayUqliGroupFilter';
export interface DisplayUQLiBuilderProps extends BaseProps {
    /** overridable classes for root elem */
    classes?: {
        root?: string;
    };
    /** Class overrides that are passed to the UqliGroupFilter */
    GroupFilterClasses?: DisplayUqliGroupFilterProps['classes'];
    /** Custom  message for when there is an empty filter */
    emptyConditionMessage?: string;
    /** Determines whether to display uqli or not */
    isEmpty?: boolean;
}
export declare const DisplayUQLiBuilder: React.FC<DisplayUQLiBuilderProps & Omit<DisplayUqliGroupFilterProps, 'onDelete' | 'classes'>>;
