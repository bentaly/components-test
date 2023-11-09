import { BaseEditor } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
export declare function onDOMBeforeInput(e: InputEvent, editor: ReactEditor & HistoryEditor & BaseEditor, maxLength?: number, setCharCount?: (charCount: number) => void): void;
