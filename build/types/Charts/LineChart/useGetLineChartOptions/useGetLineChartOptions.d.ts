import { LineChartProps } from '../LineChart';
interface UseGetLineChartOptionsParameters {
    data: LineChartProps['data'];
    sharedTooltip: LineChartProps['sharedTooltip'];
    showCrosshair: LineChartProps['showCrosshair'];
    tooltipMarker: LineChartProps['tooltipMarker'];
    showTooltipHeader: LineChartProps['showTooltipHeader'];
    showTooltipFooter: LineChartProps['showTooltipFooter'];
    categories: LineChartProps['categories'];
    alwaysShowMarkers: LineChartProps['alwaysShowMarkers'];
    colors: LineChartProps['colors'];
    width: LineChartProps['width'];
    height: LineChartProps['height'];
    handleClick: LineChartProps['onClick'];
}
declare const useGetLineChartOptions: ({ data, sharedTooltip, showCrosshair, tooltipMarker, showTooltipHeader, showTooltipFooter, categories, alwaysShowMarkers, colors, width, height, handleClick, }: UseGetLineChartOptionsParameters) => Highcharts.Options;
export default useGetLineChartOptions;
