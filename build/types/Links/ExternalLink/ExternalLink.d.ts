import React, { ReactNode } from 'react';
import { BaseProps } from '../../components';
export interface ExternalLinkProps extends BaseProps {
    href: string;
    iconPosition?: 'start' | 'end';
    /** Design rules suggest icons should be hidden in tables */
    hideIcon?: boolean;
    label: ReactNode;
}
export declare const ExternalLink: React.FC<ExternalLinkProps>;
