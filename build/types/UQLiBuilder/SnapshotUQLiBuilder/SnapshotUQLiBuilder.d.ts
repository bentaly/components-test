/// <reference types="react" />
import { AggOperator, IAggUqliFilter, OperatorOption, IValueUqliFilter, UqliValueConfig, ValueOperator, FieldOption } from '../interfaces';
export interface SnapshotUQLiBuilder {
    /** UQLi filter that is being rendered */
    filter: IAggUqliFilter | IValueUqliFilter;
    /** Top level operator in a child */
    topLevelOperator?: ValueOperator | AggOperator | 'unknown';
    /** testid for snapshot  */
    testId?: string;
    /** Current level of the uqli */
    level?: number;
    /** Function used to grab the correct operators */
    getOperators: (field?: string) => OperatorOption[];
    /** Function to get value type that will display value or values */
    getValueConfig: (filter: IValueUqliFilter) => UqliValueConfig;
    /** List of fields in order to display the correct label to user */
    fields?: FieldOption[];
}
export declare const SnapshotUQLiBuilder: ({ filter, topLevelOperator, level, getOperators, getValueConfig, testId, fields, }: SnapshotUQLiBuilder) => JSX.Element;
