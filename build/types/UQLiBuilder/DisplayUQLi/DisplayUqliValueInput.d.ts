import React from 'react';
import { InputType } from '../interfaces';
export interface DisplayUqliValueInput {
    type?: InputType;
    value?: string;
    values?: string[];
    loading?: boolean;
    isVariable?: boolean;
    secondaryText?: React.ReactNode;
    valuesConfig?: any;
}
export declare const DisplayUqliValueInput: React.FC<DisplayUqliValueInput>;
