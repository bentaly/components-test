/// <reference types="react" />
import { EditorProps, Monaco } from '@monaco-editor/react';
import { editor as monacoEditor } from 'monaco-editor';
export declare type CodeEditorOnMount = (editor: monacoEditor.IStandaloneCodeEditor, monaco: Monaco) => void;
interface CodeEditorProps extends Omit<EditorProps, 'onMount' | 'options' | 'theme'> {
    /** A fuction that is called when the editor is mounted */
    onMount?: CodeEditorOnMount;
    /** An object of monaco editor options */
    options?: monacoEditor.IStandaloneEditorConstructionOptions;
}
export declare const CodeEditor: ({ onMount, options, ...monacoProps }: CodeEditorProps) => JSX.Element;
export {};
