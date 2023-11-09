import { Dispatch, SetStateAction } from 'react';
interface UseKeyboardNavigationProps {
    viewType: string;
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
    onChange: (date: Date) => void;
    setViewType: (view: string) => void;
    minDate?: Date;
    maxDate?: Date;
}
export declare const useKeyboardNavigation: ({ viewType, date, setDate, onChange, setViewType, minDate, maxDate, }: UseKeyboardNavigationProps) => void;
export {};
