import React from 'react';
import { BaseProps } from '../../components';
export interface ContainerProps extends BaseProps {
    /** classes to override styles of component */
    classes?: {
        root?: string;
    };
}
export declare const Container: React.FC<ContainerProps>;
