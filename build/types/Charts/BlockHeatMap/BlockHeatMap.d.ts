import React from 'react';
import { BaseProps } from '../../components';
import Highcharts from 'highcharts';
declare type BlockHeatMapDataItem = {
    date: Date;
    count: number;
};
export declare type AllowedChartOptions = {
    height?: number;
    width?: number;
};
export declare type AllowedPlotOptions = {
    rowsize?: number;
};
export interface BlockHeatMapDataObject extends Highcharts.PointOptionsObject {
    date: string;
}
export interface StopsColor {
    stop: number;
    color: string;
}
export interface BlockHeatMapProps extends BaseProps {
    classes?: {
        root?: string;
        baseRoot?: string;
        containerRoot?: string;
    };
    data: BlockHeatMapDataItem[];
    minColor?: string;
    maxColor?: string;
    stops?: StopsColor[];
    useLogarithmicColorScale?: boolean;
    chartOptions?: AllowedChartOptions;
    plotOptions?: AllowedPlotOptions;
    onTileClick?: (data: BlockHeatMapDataItem) => void | null;
    getChartRef?: (ref: any) => void;
}
export declare const BlockHeatMap: React.FC<BlockHeatMapProps>;
export {};
