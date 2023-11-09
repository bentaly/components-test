/// <reference types="react" />
import { BaseProps } from '../../components';
import { TabGroupProps } from '../../Tabs';
export interface SidePanelTabsProps extends BaseProps {
    tabs: TabGroupProps['options'];
    onTabChange?: TabGroupProps['onSelect'];
    selectedTab?: TabGroupProps['selected'];
    TabGroupProps?: TabGroupProps;
}
export declare const SidePanelTabs: ({ className, tabs, onTabChange, selectedTab, TabGroupProps, testId, }: SidePanelTabsProps) => JSX.Element;
