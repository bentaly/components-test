import { DataTableHeaderProps } from '../DataTableHeader/DataTableHeader';
export declare enum DataTableDemoEnum {
    Id = 1,
    FullName = 2,
    Description = 3,
    LastName = 4,
    FirstName = 5,
    Birth = 6,
    Death = 7,
    HistoricalFigure = 8
}
export declare const mockColumns: DataTableHeaderProps<DataTableDemoEnum>[];
export declare const mockData: {
    id: string;
    fullName: string;
    description: string;
    firstName: string;
    lastName: string;
    birth: string;
    death: string;
    historicalFigure: boolean;
}[];
