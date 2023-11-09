import React from 'react';
import { ChartData } from '../BaseChart/BaseCharts';
import Highcharts from 'highcharts';
import { BaseProps } from '../../components';
export interface DonutChartProps extends BaseProps {
    /**Custom classes to override styles*/
    classes?: {
        root?: string;
    };
    /**The data used to define slices in the chart*/
    data: ChartData;
    /**The slice colors that the chart will use*/
    colors?: string[];
    /**The width of the chart*/
    width?: number;
    /**The height of the chart*/
    height?: number;
    /**If the slice values should show in the legend*/
    showLegendValues?: boolean;
    /**If the slice percentages should show in the legend*/
    showLegendPercentages?: boolean;
    /**If the slice values should show in the tooltip*/
    showTooltipValues?: boolean;
    /**If the slice percentages should show in the tooltip*/
    showTooltipPercentages?: boolean;
    /**If the total of all the data should be shown in the center of the chart*/
    showTotal?: boolean;
    /**If the total of the slice should be shown by the slice*/
    showLabels?: boolean;
    /**Where the legend should be positioned*/
    legendPosition?: 'top' | 'bottom' | 'left' | 'right';
    /**Responsive rules that the chart will follow - https://api.highcharts.com/highcharts/responsive.rules*/
    responsiveRules?: Highcharts.ResponsiveRulesOptions[];
    /**A callback that fires when the legend is clicked. When defined the chart will hide or show the selected slice.*/
    onLegendClick?: (e: any) => void;
    /**A callback that fires when a slice is clicked. When defined the chart will blow out the clicked slice.*/
    onSliceClick?: (e: any) => void;
    /**A callback to get a ref that represents the chart*/
    getChartRef?: (ref: any) => void;
}
export declare const DonutChart: React.FC<DonutChartProps>;
