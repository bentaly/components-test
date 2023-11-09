import React from 'react';
import { BaseProps } from '../../components';
export interface OccurencesChartProps extends BaseProps {
    data: {
        date: Date;
        size: number;
        color: string;
    }[];
    customVars?: Record<string, any>;
    tooltipOptions?: Highcharts.TooltipOptions;
    onZoom?: (event: Highcharts.AxisSetExtremesEventObject) => void;
    onBubbleClick?: (event: Highcharts.SeriesClickEventObject) => void;
    getChartRef?: (ref: any) => void;
}
export declare const OccurencesChart: React.FC<OccurencesChartProps>;
