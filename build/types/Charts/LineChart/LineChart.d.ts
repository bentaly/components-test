import React from 'react';
import { BaseProps } from '../../components';
import Highcharts from 'highcharts';
export interface LineChartData {
    name: string;
    secondaryName?: string;
    data: number[];
}
export interface LineChartProps extends BaseProps {
    /**Custom classes to override styles*/
    classes?: {
        root?: string;
    };
    /**An array used to create x-axis labels*/
    categories?: string[];
    /**The data used to plot points along the chart*/
    data: LineChartData[];
    /**The line colors that the chart will use*/
    colors?: string[];
    /**Fires when a point is clicked */
    onClick?: ({ category, x, y, highchartEvent, }: {
        category: string;
        x: number;
        y?: number;
        highchartEvent: Highcharts.Point;
    }) => void;
    /**A callback to get a ref that represents the chart*/
    getChartRef?: (ref: any) => void;
    /**The height of the chart*/
    height?: number | string;
    /**The width of the chart*/
    width?: number | string;
    /**If the chart should show a tooltip for every point on the x-axis where the cursor intersects*/
    sharedTooltip?: boolean;
    /**If the chart should show a crosshair when a point is selected*/
    showCrosshair?: boolean;
    /**If the chart should show markers all the time instead of only on hover*/
    alwaysShowMarkers?: boolean;
    /**What type of marker should be used in the tooltip*/
    tooltipMarker: 'color' | 'symbol';
    /**If the tooltip should show the header*/
    showTooltipHeader?: boolean;
    /**If the tooltip should show the footer*/
    showTooltipFooter?: boolean;
}
export declare const LineChart: React.FC<LineChartProps>;
