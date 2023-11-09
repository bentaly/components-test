/// <reference types="react" />
import { AggOperator, FieldOption, IValueUqliFilter, OperatorOption, UqliValueConfig, ValueOperator } from '../interfaces';
export interface SnapshotUqliValueProps {
    /** UQLi filter that is being rendered */
    child: IValueUqliFilter;
    /** Function to get value type that will display value or values */
    getValueConfig: (filter: IValueUqliFilter) => UqliValueConfig;
    /** Index of the child */
    index: number;
    /** Function used to grab the correct operators */
    getOperators: (field?: string) => OperatorOption[];
    /** Top level operator in a child */
    topLevelOperator: ValueOperator | AggOperator | 'unknown';
    /** List of fields in order to display the correct label to user */
    fields?: FieldOption[];
}
export declare const SnapshotUqliValue: ({ child, getValueConfig, index, getOperators, topLevelOperator, fields, }: SnapshotUqliValueProps) => JSX.Element;
