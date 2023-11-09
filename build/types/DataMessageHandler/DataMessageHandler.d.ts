import React from 'react';
import { BaseProps } from '../components';
interface DataMessageHandlerProps extends BaseProps {
    /** The state that the message handler will show */
    state: 'forbidden' | 'error' | 'empty' | 'loading';
    /** Children to override existing messages. Should be one of: `ForbiddenMessage`, `ErrorMessage`, `EmptyMessage`, and `LoadingMessage`. */
    children?: React.ReactNode;
}
export declare const DataMessageHandler: ({ state, children, testId, className }: DataMessageHandlerProps) => JSX.Element;
export {};
