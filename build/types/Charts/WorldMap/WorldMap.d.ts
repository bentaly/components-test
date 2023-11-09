import React from 'react';
import { BaseProps } from '../../components';
import { Point } from 'highcharts';
export declare type MapPoint = Point & {
    properties: {
        'iso-a2': string;
    };
};
export interface WorldMapProps extends BaseProps {
    data?: {
        country: string;
        amount: number;
    }[];
    loading?: boolean;
    height?: number;
    width?: number;
    classes?: {
        root?: string;
    };
    onSelect?: (selectedPoint: MapPoint) => void;
    allowChartUpdate?: boolean;
}
export declare const WorldMap: React.FC<WorldMapProps>;
