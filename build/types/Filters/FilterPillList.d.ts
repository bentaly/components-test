/// <reference types="react" />
import { FilterPill } from './FiltersToolbar';
export interface FilterPillListProps {
    filters?: FilterPill[];
    onClearFilter?: (filter: FilterPill) => void;
    onClearAll?: () => void;
}
export declare const FilterPillList: ({ filters, onClearFilter, onClearAll }: FilterPillListProps) => JSX.Element;
