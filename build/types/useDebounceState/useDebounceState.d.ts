import { Dispatch, SetStateAction } from 'react';
export declare const useDebounceState: <Type>(initialValue: Type, delay: number) => [value: Type, updateValue: Dispatch<SetStateAction<Type>>, debouncedValue: Type];
