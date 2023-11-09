import React from 'react';
import { BaseEditor, Descendant } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
export declare const emptyInitialValue: {
    children: {
        text: string;
    }[];
}[];
export interface RichTextEditorProps {
    editor: BaseEditor & HistoryEditor & ReactEditor;
    disabled?: boolean;
    startValue?: Descendant[];
    placeholder?: string;
    setCharCount?: (charCount: number) => void;
    maxLength?: number;
    minLinesToShow?: number;
    editorStyles?: React.CSSProperties;
    resizeable?: 'vertical' | 'none';
    onEnterPress?: () => void;
    onChange?: (val: string) => void;
}
export declare const RichTextEditor: ({ disabled, placeholder, maxLength, editorStyles, editor, setCharCount, onEnterPress, onChange, startValue, resizeable, minLinesToShow, }: RichTextEditorProps) => JSX.Element;
