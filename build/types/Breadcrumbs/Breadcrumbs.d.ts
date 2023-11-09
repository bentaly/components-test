import React from 'react';
import { BaseProps } from '../components';
export interface Crumb {
    label: string;
    iconName?: string;
    action?: () => void;
    iconAction?: () => void;
}
export interface LinkableCrumb {
    renderItem: () => JSX.Element;
}
export interface BreadcrumbsProps extends BaseProps {
    /** An array that represents the breadcrumbs. This can either have an action or return a link. */
    options: Crumb[] | LinkableCrumb[];
    classes?: {
        root?: string;
        buttonStyle?: string;
    };
}
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
