import { DonutChartProps } from '../DonutChart';
interface UseGetDonutChartOptionsParameters {
    data: DonutChartProps['data'];
    colors: DonutChartProps['colors'];
    onSliceClick: DonutChartProps['onSliceClick'];
    onLegendClick: DonutChartProps['onLegendClick'];
    showLabels: DonutChartProps['showLabels'];
    responsiveRules: DonutChartProps['responsiveRules'];
    legendPosition: DonutChartProps['legendPosition'];
    showLegendValues: DonutChartProps['showLegendValues'];
    showLegendPercentages: DonutChartProps['showLegendPercentages'];
    width: DonutChartProps['width'];
    height: DonutChartProps['height'];
    showTotal: DonutChartProps['showTotal'];
    showTooltipValues: boolean;
    showTooltipPercentages: boolean;
}
export declare const useGetDonutChartOptions: ({ showTooltipValues, showTooltipPercentages, data, colors, onSliceClick, onLegendClick, showLabels, responsiveRules, legendPosition, showLegendValues, showLegendPercentages, width, height, showTotal, }: UseGetDonutChartOptionsParameters) => Highcharts.Options;
export {};
