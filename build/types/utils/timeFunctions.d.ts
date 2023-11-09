import { Locale } from 'date-fns';
export declare type FormatOptions = {
    convertTimeZone?: boolean;
    locale?: Locale;
    timeZone?: string;
};
export declare const formatISO: (isoString: string, formatString: string, options?: FormatOptions) => string | null;
declare type Accuracy = 'day' | 'month' | 'year';
export declare const dateTimeIsInRange: (date: Date, min?: Date, max?: Date, accuracy?: Accuracy) => boolean;
export declare const useGetRelativeTime: ({ timezone }: {
    timezone: any;
}) => (dateStr: any) => {
    timeAgoStr: string;
    fullTimeStr: string;
};
export {};
