import React from 'react';
import { IValueUqliFilter } from '../interfaces';
export interface ListConditionsButtonProps {
    filter: IValueUqliFilter;
    isTemplate?: boolean;
    onChange?: (update: IValueUqliFilter) => void;
    getFields?: ({ listUuid, }: {
        listUuid: string;
    }) => {
        id: string;
        name: string;
    }[] | Promise<{
        id: string;
        name: string;
    }[]>;
    getValues?: ({ listUuid, selectedField, search, }: {
        listUuid?: string;
        selectedField?: string;
        search?: string;
    }) => string[] | Promise<string[]>;
    getMatchedListValues?: ({ listId, field, outerOperator, listConditions, }: {
        listId: string;
        field: string;
        outerOperator: string;
        listConditions: {
            fieldId: string;
            values: string[];
        }[];
    }) => string[] | Promise<string[]>;
}
export declare const ListConditionsButton: React.FC<ListConditionsButtonProps>;
