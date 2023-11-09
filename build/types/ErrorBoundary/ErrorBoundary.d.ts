import React from 'react';
interface ErrorBoundaryProps {
    logError?: (error: any, errorInfo: any) => void;
    hasError?: boolean;
    errorChildren?: JSX.Element;
}
interface StateProps {
    hasError?: boolean;
}
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, StateProps> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(): any;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): any;
    render(): any;
}
export {};
