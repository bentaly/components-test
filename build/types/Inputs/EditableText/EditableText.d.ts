import React from 'react';
import { BaseProps } from '../../components';
export interface EditableTextProps extends BaseProps {
    classes?: {
        root?: string;
        internalValue?: string;
        textarea?: string;
    };
    readOnly?: boolean;
    value?: string;
    disableSubmitOnEnter?: boolean;
    placeholder?: string;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    onCancel?: () => void;
    onSave?: (newValue: string) => void;
    maxLength?: number;
    showEmptyTextbox?: boolean;
}
export declare const EditableText: React.FC<EditableTextProps>;
