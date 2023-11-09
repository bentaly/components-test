export declare const generateTooltipPercetageContent: ({ showTooltipValues, showTooltipPercentages, percentage, }: {
    showTooltipValues: boolean;
    showTooltipPercentages: boolean;
    percentage: number;
}) => string;
export declare const tooltipFormatter: ({ theme, showTooltipValues, showTooltipPercentages, tooltip, }: {
    theme: any;
    showTooltipValues: boolean;
    showTooltipPercentages: boolean;
    tooltip: Highcharts.TooltipFormatterContextObject;
}) => string;
