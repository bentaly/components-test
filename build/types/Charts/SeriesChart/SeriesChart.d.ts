import React from 'react';
import { BaseProps } from '../../components';
import { ChartData } from '../BaseChart/BaseCharts';
declare type ChartType = 'column' | 'bar' | 'line' | 'spline' | 'area';
export interface SeriesChartProps extends BaseProps {
    /** classes to override styles of component */
    classes?: {
        root?: string;
    };
    data: ChartData;
    type: ChartType;
    titleOptions?: Highcharts.TitleOptions;
    subtitleOptions?: Highcharts.SubtitleOptions;
    enableExporting?: boolean;
    legendOptions?: Highcharts.LegendOptions;
    xAxisOptions?: Highcharts.XAxisOptions;
    yAxisOptions?: Highcharts.YAxisOptions;
    colors?: string[];
    tooltipOptions?: Highcharts.TooltipOptions;
    plotSeriesOptions?: Highcharts.PlotColumnOptions | Highcharts.PlotBarOptions | Highcharts.PlotLineOptions | Highcharts.PlotSplineOptions | Highcharts.PlotAreaOptions;
}
export declare const SeriesChart: React.FC<SeriesChartProps>;
export {};
