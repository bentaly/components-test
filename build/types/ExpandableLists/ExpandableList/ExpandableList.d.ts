import React from 'react';
import { BaseProps } from '../../components';
export interface ExpandableListProps extends BaseProps {
    /** Class overrides to be merged with components classes */
    classes?: {
        root?: string;
        button?: string;
    };
    /** The max number of children the component will render without showing view more/less button */
    maxItems?: number;
    /** Text/Element to be displayed for the view more button */
    viewMoreContent?: string | React.ReactNode;
    /** Text/Element to be displayed for the view less button */
    viewLessContent?: string | React.ReactNode;
}
export declare const ExpandableList: React.FC<ExpandableListProps>;
