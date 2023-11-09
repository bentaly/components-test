import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { RefObject } from 'react';
import { BaseProps } from '../../components';
export interface BaseChartProps extends BaseProps, Highcharts.Options {
    /** classes to override styles of component */
    classes?: {
        root?: string;
        container?: string;
    };
    getChartRef?: (ref: RefObject<HighchartsReact.RefObject>) => void;
}
export declare type ChartData = Array<number | [string, number | null] | null | Highcharts.PointOptionsObject>;
