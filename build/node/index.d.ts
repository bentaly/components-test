/// <reference types="react" />
import * as React$1 from 'react';
import React__default, { MutableRefObject, RefObject, ReactNode, DragEvent, MouseEventHandler, Dispatch, SetStateAction } from 'react';
import { CollapseProps, PopperProps, ModalProps, PaperProps, DrawerProps } from '@material-ui/core';
import Highcharts$1, { Point } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { UseComboboxGetInputPropsOptions, GetPropsCommonOptions } from 'downshift';
import { BaseEditor, Descendant } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
import { SkeletonProps } from '@material-ui/lab';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import { Locale } from 'date-fns';
import { Monaco, EditorProps } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

declare const useIsOverflowing: (ref: React.RefObject<any>, children?: React.ReactNode, text?: React.ReactNode, maxLines?: number) => boolean;

declare const useObserveElementWidth: <T extends HTMLElement>() => {
    elementWidth: number;
    elementRef: React$1.RefObject<T>;
};

interface BaseProps {
    /** An id that will be passed to root element as data-testid */
    testId?: string;
    /** A class that will be passed to the root div */
    className?: string;
}

interface AccordionProps extends BaseProps {
    classes?: {
        root?: string;
    };
    /** Sets section expanded by default. Index count starts from 0 and top-most section */
    defaultExpandedIndex?: number;
    /** Determines whether a user can expand multiple sections at the same time, or if expanding a section closes all previous sections */
    canExpandMultiple?: boolean;
    /** Determines caret positioning. Default is left. Setting it to true will align caret to the right.*/
    right?: boolean;
    variant?: 'compact' | 'normal';
}
declare const Accordion: React__default.FC<AccordionProps>;

interface AccordionSummaryProps extends BaseProps, React__default.ComponentProps<'div'> {
    classes?: {
        root?: string;
        content?: string;
    };
    expandIconName?: string;
    onClick?: React__default.MouseEventHandler<HTMLDivElement>;
    expanded?: boolean;
    right?: boolean;
    hasError?: boolean;
    variant?: 'compact' | 'normal';
}
declare const AccordionSummary: React__default.FC<AccordionSummaryProps>;

interface AccordionDetailsProps extends CollapseProps, BaseProps, Omit<AccordionProps, 'classes'> {
    expanded?: boolean;
    hasError?: boolean;
    variant?: 'compact' | 'normal';
}
declare const AccordionDetails: React__default.FC<AccordionDetailsProps>;

declare type BadgeType = 'error' | 'danger' | 'success' | 'warning' | 'critical' | 'high' | 'medium' | 'low' | 'informational' | 'unassessed' | 'default';
interface BadgeProps extends BaseProps {
    /** Text inside the badge */
    text: string;
    /** Function called when badge is clicked */
    onClick?: React__default.MouseEventHandler<HTMLDivElement>;
    /** Icon to display at the beginning of the badge */
    leadingIcon?: string;
    /** Icon to display at the end of the badge */
    trailingIcon?: string;
    /** Type that will determine the color scheme of the badge */
    type?: BadgeType;
    /** Whether the badge displays as disabled */
    disabled?: boolean;
    /** Whether the badge has compact padding */
    small?: boolean;
}
declare const Badge: React__default.FC<BadgeProps>;

interface IconBaseProps {
    size: number;
    color?: string;
    className?: string;
    testId?: string;
}

interface IconBadgeProps extends Omit<BadgeProps, 'text' | 'leadingIcon' | 'trailingIcon'> {
    /** Icon to display in the badge */
    icon: string;
    IconProps?: IconBaseProps;
}
declare const IconBadge: React__default.FC<IconBadgeProps>;

interface Crumb {
    label: string;
    iconName?: string;
    action?: () => void;
    iconAction?: () => void;
}
interface LinkableCrumb {
    renderItem: () => JSX.Element;
}
interface BreadcrumbsProps extends BaseProps {
    /** An array that represents the breadcrumbs. This can either have an action or return a link. */
    options: Crumb[] | LinkableCrumb[];
    classes?: {
        root?: string;
        buttonStyle?: string;
    };
}
declare const Breadcrumbs: React__default.FC<BreadcrumbsProps>;

interface TooltipProps extends BaseProps {
    classes?: {
        tooltip?: string;
    };
    disableFocusListener?: boolean;
    disableHoverListener?: boolean;
    disableTouchListener?: boolean;
    disableInteractive?: boolean;
    maxWidth?: number;
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    testId?: string;
    text?: React__default.ReactNode;
    enterDelay?: number;
    leaveDelay?: number;
    popperProps?: Partial<PopperProps>;
}
interface FullTooltipProps extends TooltipProps {
    children: React__default.ReactElement;
}
declare const getArrowPositionMap: any;
declare const Tooltip: React__default.FC<FullTooltipProps>;

interface ButtonProps extends BaseProps, React__default.ComponentPropsWithRef<'button'> {
    /** classes to override styles of component */
    classes?: {
        root?: string;
        buttonContent?: string;
        disabled?: string;
        destructive?: string;
        filled?: string;
        secondary?: string;
        primary?: string;
        text?: string;
        large?: string;
        small?: string;
        medium?: string;
        trailing?: string;
        leading?: string;
        loadingSpinnerContent?: string;
    };
    /** Determines whether or not button is disabled */
    disabled?: boolean;
    /** Icon to be displayed at the beginning of the button */
    leadingIcon?: string;
    /** Functioned called when button is clicked */
    onClick?: React__default.MouseEventHandler<HTMLButtonElement>;
    /** Boolean determining whether to highlight button */
    selected?: boolean;
    /** Info to determine how big the button is */
    size?: 'large' | 'medium' | 'small';
    /** Will be shown in tooltip */
    tooltip?: React__default.ReactNode;
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
    /** Icon to be displayed at the end of the button */
    trailingIcon?: string;
    /** Variant to determine button style */
    variant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    /** Whether type is iconbutton */
    iconButton?: 'standard' | 'small' | 'tiny';
    /** Whether to show a loading spinner */
    loading?: boolean;
    /** Whether icon is an icon button, should not show leading or trailing icons */
    isIconButton?: boolean;
    /** Ref for the button */
    buttonRef?: MutableRefObject<HTMLButtonElement | null>;
}
declare const Button: ({ children, classes: classOverrides, className, disabled, leadingIcon, onClick, selected, size, tooltip, tooltipProps, testId, trailingIcon, iconButton, variant, loading, isIconButton, buttonRef, ...rest }: ButtonProps) => JSX.Element;

interface IconButtonProps extends Omit<ButtonProps, 'size' | 'leadingIcon' | 'trailingIcon' | 'loading'> {
    classes?: {
        root?: string;
        buttonContent?: string;
    };
    iconName: string;
    iconColor?: string;
    variant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    size?: 'standard' | 'small' | 'tiny';
}
declare const IconButton: React__default.FC<IconButtonProps>;

interface ToggleButtonProps extends Omit<ButtonProps, 'leadingIcon' | 'trailingIcon' | 'onClick' | 'variant'> {
    classes?: {
        root?: string;
        buttonContent?: string;
    };
    iconName?: string;
    value?: string | number;
    onClick?: (val: string | number | undefined, selected: boolean, event: React__default.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const ToggleButton: React__default.FC<ToggleButtonProps>;

interface TextLinkProps extends Omit<ButtonProps, 'variant' | 'size' | 'selected' | 'leadingIcon' | 'trailingIcon'> {
    executing?: boolean;
    variant?: 'standard' | 'breadcrumb';
}
declare const TextLink: React__default.FC<TextLinkProps>;

interface TargetContentProps extends BaseProps {
    /** Icon to be displayed at the beginning of the button */
    leadingIcon?: string;
    /** Icon to be displayed at the end of the button */
    trailingIcon?: string;
    /** Color of leading Icon */
    leadingIconColor?: string;
    /** Color of trailing Icon */
    trailingIconColor?: string;
}
/**
 * This houses the content of a 'target' (such as a hyperlink or a button).
 */
declare const TargetContent: React__default.FC<TargetContentProps>;

declare type IconOptionsType = 'AIChat' | 'Add' | 'AddColumn' | 'AddGroup' | 'AppleCmd' | 'Archive' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowSpan' | 'ArrowUp' | 'Asterisk' | 'Automate' | 'BlogPost' | 'BlogPostAlt' | 'Bookmark' | 'Box' | 'Brain' | 'Bug' | 'BugAlt' | 'Calendar' | 'Cancel' | 'Certificate' | 'ChatBot' | 'ChatSummary' | 'CheckClipboard' | 'CheckClipboardAlt' | 'CheckboxEmpty' | 'CheckboxEmptyAlt' | 'CheckboxSelected' | 'CheckboxSelectedAlt' | 'CheckboxTernary' | 'CheckboxTernaryAlt' | 'Checkmark' | 'ChevronDown' | 'ChevronLeft' | 'ChevronRight' | 'ChevronUp' | 'Clipboard' | 'ClipboardFilled' | 'ClipboardFilledAlt' | 'Close' | 'CollapseDown' | 'CollapseLeft' | 'CollapseRight' | 'CollapseUp' | 'ComingSoon' | 'ControlDown' | 'ControlUp' | 'CopyClipboard' | 'CopyClipboardAlt' | 'CornerGrip' | 'Critical' | 'Dashboard' | 'Data' | 'DataAlt' | 'DataPull' | 'Delete' | 'Details' | 'Detect' | 'DetectionEngine' | 'Document' | 'Domain' | 'Dot' | 'DotOutline' | 'DoubleChevronDown' | 'DoubleChevronLeft' | 'DoubleChevronRight' | 'DoubleChevronUp' | 'Download' | 'DragVertical' | 'DropdownDown' | 'DropdownUp' | 'Duplicate' | 'Edit' | 'Error' | 'ErrorAlert' | 'Exclamation' | 'ExpandDown' | 'ExpandLeft' | 'ExpandRight' | 'ExpandUp' | 'Export' | 'Favorite' | 'File' | 'Filter' | 'Folder' | 'ForumPost' | 'Fullscreen' | 'FullscreenExit' | 'Gear' | 'GitFile' | 'GitHub' | 'GitRepo' | 'GridView' | 'Group' | 'Hash' | 'Health' | 'Help' | 'High' | 'Home' | 'Hunt' | 'IRC' | 'IRCAlt' | 'Info' | 'InfoAlt' | 'Informational' | 'Intel' | 'IntelUpdate' | 'IntelUpdateAlt' | 'Investigate' | 'IpAddress' | 'LightBulb' | 'ListView' | 'ListViewSolid' | 'Loading' | 'Location' | 'Lock' | 'LockOpen' | 'Low' | 'Mail' | 'MapDown' | 'MapLeft' | 'MapRight' | 'MapUp' | 'Medium' | 'Message' | 'MessageAlt' | 'Minus' | 'More' | 'NullCopy' | 'OpenInNew' | 'OpticalDisk' | 'Palm' | 'PathUp' | 'Pause' | 'Pentagon' | 'Pin' | 'Pinned' | 'Play' | 'Plug' | 'Printer' | 'PrinterAlt' | 'Processor' | 'Published' | 'PullFields' | 'QuoteMark' | 'Redo' | 'Refresh' | 'RotateClockwise' | 'RotateCounterClockwise' | 'RqBadge' | 'RqExponent' | 'Save' | 'SaveAlt' | 'Scan' | 'Search' | 'SearchDetail' | 'Send' | 'Server' | 'Settings' | 'Slash' | 'Sleep' | 'SplitPath' | 'Success' | 'TableGroup' | 'Technique' | 'TechniqueAlt' | 'Telegram' | 'ThumbsDownFilled' | 'ThumbsDownOutline' | 'ThumbsUpFilled' | 'ThumbsUpOutline' | 'Time' | 'TimeFilled' | 'ToggleOff' | 'ToggleOn' | 'Tool' | 'Twitter' | 'Unassessed' | 'Undo' | 'UpAndDown' | 'Upload' | 'Url' | 'User' | 'UserOutline' | 'Verify' | 'View' | 'Visibility' | 'Waiting' | 'Warning' | 'WarningAlt' | 'WebPage' | 'WebPageAlt' | 'X' | 'YouTube' | 'ZoomToFill' | 'ZoomToFit';
declare enum IconNamesEnum {
    AIChat = "AIChat",
    Add = "Add",
    AddColumn = "AddColumn",
    AddGroup = "AddGroup",
    AppleCmd = "AppleCmd",
    Archive = "Archive",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowSpan = "ArrowSpan",
    ArrowUp = "ArrowUp",
    Asterisk = "Asterisk",
    Automate = "Automate",
    BlogPost = "BlogPost",
    BlogPostAlt = "BlogPostAlt",
    Bookmark = "Bookmark",
    Box = "Box",
    Brain = "Brain",
    Bug = "Bug",
    BugAlt = "BugAlt",
    Calendar = "Calendar",
    Cancel = "Cancel",
    Certificate = "Certificate",
    ChatBot = "ChatBot",
    ChatSummary = "ChatSummary",
    CheckClipboard = "CheckClipboard",
    CheckClipboardAlt = "CheckClipboardAlt",
    CheckboxEmpty = "CheckboxEmpty",
    CheckboxEmptyAlt = "CheckboxEmptyAlt",
    CheckboxSelected = "CheckboxSelected",
    CheckboxSelectedAlt = "CheckboxSelectedAlt",
    CheckboxTernary = "CheckboxTernary",
    CheckboxTernaryAlt = "CheckboxTernaryAlt",
    Checkmark = "Checkmark",
    ChevronDown = "ChevronDown",
    ChevronLeft = "ChevronLeft",
    ChevronRight = "ChevronRight",
    ChevronUp = "ChevronUp",
    Clipboard = "Clipboard",
    ClipboardFilled = "ClipboardFilled",
    ClipboardFilledAlt = "ClipboardFilledAlt",
    Close = "Close",
    CollapseDown = "CollapseDown",
    CollapseLeft = "CollapseLeft",
    CollapseRight = "CollapseRight",
    CollapseUp = "CollapseUp",
    ComingSoon = "ComingSoon",
    ControlDown = "ControlDown",
    ControlUp = "ControlUp",
    CopyClipboard = "CopyClipboard",
    CopyClipboardAlt = "CopyClipboardAlt",
    CornerGrip = "CornerGrip",
    Critical = "Critical",
    Dashboard = "Dashboard",
    Data = "Data",
    DataAlt = "DataAlt",
    DataPull = "DataPull",
    Delete = "Delete",
    Details = "Details",
    Detect = "Detect",
    DetectionEngine = "DetectionEngine",
    Document = "Document",
    Domain = "Domain",
    Dot = "Dot",
    DotOutline = "DotOutline",
    DoubleChevronDown = "DoubleChevronDown",
    DoubleChevronLeft = "DoubleChevronLeft",
    DoubleChevronRight = "DoubleChevronRight",
    DoubleChevronUp = "DoubleChevronUp",
    Download = "Download",
    DragVertical = "DragVertical",
    DropdownDown = "DropdownDown",
    DropdownUp = "DropdownUp",
    Duplicate = "Duplicate",
    Edit = "Edit",
    Error = "Error",
    ErrorAlert = "ErrorAlert",
    Exclamation = "Exclamation",
    ExpandDown = "ExpandDown",
    ExpandLeft = "ExpandLeft",
    ExpandRight = "ExpandRight",
    ExpandUp = "ExpandUp",
    Export = "Export",
    Favorite = "Favorite",
    File = "File",
    Filter = "Filter",
    Folder = "Folder",
    ForumPost = "ForumPost",
    Fullscreen = "Fullscreen",
    FullscreenExit = "FullscreenExit",
    Gear = "Gear",
    GitFile = "GitFile",
    GitHub = "GitHub",
    GitRepo = "GitRepo",
    GridView = "GridView",
    Group = "Group",
    Hash = "Hash",
    Health = "Health",
    Help = "Help",
    High = "High",
    Home = "Home",
    Hunt = "Hunt",
    IRC = "IRC",
    IRCAlt = "IRCAlt",
    Info = "Info",
    InfoAlt = "InfoAlt",
    Informational = "Informational",
    Intel = "Intel",
    IntelUpdate = "IntelUpdate",
    IntelUpdateAlt = "IntelUpdateAlt",
    Investigate = "Investigate",
    IpAddress = "IpAddress",
    LightBulb = "LightBulb",
    ListView = "ListView",
    ListViewSolid = "ListViewSolid",
    Loading = "Loading",
    Location = "Location",
    Lock = "Lock",
    LockOpen = "LockOpen",
    Low = "Low",
    Mail = "Mail",
    MapDown = "MapDown",
    MapLeft = "MapLeft",
    MapRight = "MapRight",
    MapUp = "MapUp",
    Medium = "Medium",
    Message = "Message",
    MessageAlt = "MessageAlt",
    Minus = "Minus",
    More = "More",
    NullCopy = "NullCopy",
    OpenInNew = "OpenInNew",
    OpticalDisk = "OpticalDisk",
    Palm = "Palm",
    PathUp = "PathUp",
    Pause = "Pause",
    Pentagon = "Pentagon",
    Pin = "Pin",
    Pinned = "Pinned",
    Play = "Play",
    Plug = "Plug",
    Printer = "Printer",
    PrinterAlt = "PrinterAlt",
    Processor = "Processor",
    Published = "Published",
    PullFields = "PullFields",
    QuoteMark = "QuoteMark",
    Redo = "Redo",
    Refresh = "Refresh",
    RotateClockwise = "RotateClockwise",
    RotateCounterClockwise = "RotateCounterClockwise",
    RqBadge = "RqBadge",
    RqExponent = "RqExponent",
    Save = "Save",
    SaveAlt = "SaveAlt",
    Scan = "Scan",
    Search = "Search",
    SearchDetail = "SearchDetail",
    Send = "Send",
    Server = "Server",
    Settings = "Settings",
    Slash = "Slash",
    Sleep = "Sleep",
    SplitPath = "SplitPath",
    Success = "Success",
    TableGroup = "TableGroup",
    Technique = "Technique",
    TechniqueAlt = "TechniqueAlt",
    Telegram = "Telegram",
    ThumbsDownFilled = "ThumbsDownFilled",
    ThumbsDownOutline = "ThumbsDownOutline",
    ThumbsUpFilled = "ThumbsUpFilled",
    ThumbsUpOutline = "ThumbsUpOutline",
    Time = "Time",
    TimeFilled = "TimeFilled",
    ToggleOff = "ToggleOff",
    ToggleOn = "ToggleOn",
    Tool = "Tool",
    Twitter = "Twitter",
    Unassessed = "Unassessed",
    Undo = "Undo",
    UpAndDown = "UpAndDown",
    Upload = "Upload",
    Url = "Url",
    User = "User",
    UserOutline = "UserOutline",
    Verify = "Verify",
    View = "View",
    Visibility = "Visibility",
    Waiting = "Waiting",
    Warning = "Warning",
    WarningAlt = "WarningAlt",
    WebPage = "WebPage",
    WebPageAlt = "WebPageAlt",
    X = "X",
    YouTube = "YouTube",
    ZoomToFill = "ZoomToFill",
    ZoomToFit = "ZoomToFit"
}

interface IconProps {
    name: IconOptionsType | string;
    size?: 'tiny' | 'standard' | 'large' | number;
    color?: string;
    className?: string;
    testId?: string;
}
declare const Icon: React__default.FC<IconProps>;

declare const IconOptions: string[];
declare const FullIconOptions: readonly ["", ...string[]];
declare const convertIconName: (name: string | undefined) => string;
declare const grabIconNameIfIcon: (name: string) => string | undefined;

interface ToggleButtonGroupProps extends BaseProps {
    /** Overrides for component styles */
    classes?: {
        root?: string;
        toggleButton?: string;
    };
    /** An array of objects representing the buttons used */
    buttons: {
        iconName: IconNamesEnum | IconOptionsType;
        value: string;
    }[];
    /** Decides which button is selected by comparing this prop to each button's value. Passing in null will not select a button. */
    selected: string | null;
    /** Function that returns the clicked button's value */
    onClick: (selectedButton: string) => void;
}
declare const ToggleButtonGroup: ({ classes: classOverrides, buttons, selected, onClick, testId, }: ToggleButtonGroupProps) => JSX.Element;

interface BaseChartProps extends BaseProps, Highcharts$1.Options {
    /** classes to override styles of component */
    classes?: {
        root?: string;
        container?: string;
    };
    getChartRef?: (ref: RefObject<HighchartsReact.RefObject>) => void;
}
declare type ChartData = Array<number | [string, number | null] | null | Highcharts$1.PointOptionsObject>;

declare const BaseChart: React__default.FC<BaseChartProps>;

declare type BlockHeatMapDataItem = {
    date: Date;
    count: number;
};
declare type AllowedChartOptions = {
    height?: number;
    width?: number;
};
declare type AllowedPlotOptions = {
    rowsize?: number;
};
interface BlockHeatMapDataObject extends Highcharts$1.PointOptionsObject {
    date: string;
}
interface StopsColor {
    stop: number;
    color: string;
}
interface BlockHeatMapProps extends BaseProps {
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
declare const BlockHeatMap: React__default.FC<BlockHeatMapProps>;

interface DonutChartProps extends BaseProps {
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
    responsiveRules?: Highcharts$1.ResponsiveRulesOptions[];
    /**A callback that fires when the legend is clicked. When defined the chart will hide or show the selected slice.*/
    onLegendClick?: (e: any) => void;
    /**A callback that fires when a slice is clicked. When defined the chart will blow out the clicked slice.*/
    onSliceClick?: (e: any) => void;
    /**A callback to get a ref that represents the chart*/
    getChartRef?: (ref: any) => void;
}
declare const DonutChart: React__default.FC<DonutChartProps>;

interface LineChartData {
    name: string;
    secondaryName?: string;
    data: number[];
}
interface LineChartProps extends BaseProps {
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
        highchartEvent: Highcharts$1.Point;
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
declare const LineChart: React__default.FC<LineChartProps>;

interface OccurencesChartProps extends BaseProps {
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
declare const OccurencesChart: React__default.FC<OccurencesChartProps>;

declare type ChartType = 'column' | 'bar' | 'line' | 'spline' | 'area';
interface SeriesChartProps extends BaseProps {
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
declare const SeriesChart: React__default.FC<SeriesChartProps>;

declare type MapPoint = Point & {
    properties: {
        'iso-a2': string;
    };
};
interface WorldMapProps extends BaseProps {
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
declare const WorldMap: React__default.FC<WorldMapProps>;

interface CheckboxProps extends BaseProps {
    indeterminate?: boolean;
    /** Whether the checkbox is checked */
    checked: boolean;
    /** Whether the checkbox should be disabled */
    disabled?: boolean;
    /** Function that fires when the component is clicked. It returns the value and if the box is checked */
    onClick?: (val: string | number | undefined, bool: boolean, event: React__default.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /** Content to be rendered to the right of the checkbox*/
    label?: React__default.ReactNode;
    /** Passed back with onClick to determine which checkbox was clicked */
    value?: string | number;
    /** Type that will determine the color scheme of the checkbox */
    type?: 'error' | 'danger' | 'success' | 'warning' | 'default';
    /** Type that will determine the layout scheme of the checkbox */
    variant?: 'default' | 'filter' | 'banner';
    readOnly?: boolean;
}
/** <a href="https://www.figma.com/file/4NDW6wYMNkxtWygmMteJ8V/GMDS-Guidelines-Components-Checkbox?type=design&node-id=0-1&mode=design">Designs</a> */
declare const Checkbox: React__default.FC<CheckboxProps>;

declare type CloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButtonClick';
interface DialogProps extends BaseProps {
    open: boolean;
    classes?: {
        root?: string;
        buttonControls?: string;
        title?: string;
        children?: string;
        MuiDialogPaper?: string;
    };
    title?: ReactNode;
    onClose?: (reason?: CloseReason) => void;
    onExited?: (node: HTMLElement) => void;
    onButtonPress?: React__default.MouseEventHandler<HTMLButtonElement>;
    cancelButtonText?: string;
    okButtonText?: string;
    displayButtonControls?: boolean;
    fullScreen?: boolean;
    shouldShowCloseIcon?: boolean;
    variant?: 'dialog' | 'modal' | undefined;
    position?: [number, number, number, number];
    buttonVariant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost' | undefined;
    disableOkButton?: boolean;
    okButtonLoading?: boolean;
    scroll?: 'body' | 'paper';
    /** Options to set the max width, matching mui-dialog API. This is not a fixed width, just the maximum. */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    size?: 'xs' | 'sm' | 'md' | 'lg' | number;
    testIds?: {
        okButton?: string;
        cancelButton?: string;
        closeButton?: string;
        title?: string;
        children?: string;
    };
}
declare const Dialog: React__default.FC<DialogProps>;

interface DialogHeaderProps extends BaseProps {
    classes?: {
        root?: string;
    };
    children: React__default.ReactNode;
}
declare const DialogHeader: ({ classes: classOverrides, children, className, testId }: DialogHeaderProps) => JSX.Element;

interface DialogFooterProps extends BaseProps {
    classes?: {
        root?: string;
    };
    children: React__default.ReactNode;
}
declare const DialogFooter: ({ classes: classOverrides, children, className, testId }: DialogFooterProps) => JSX.Element;

interface DialogContentProps extends BaseProps {
    classes?: {
        root?: string;
    };
    children: React__default.ReactNode;
}
declare const DialogContent: ({ classes: classOverrides, children, className, testId }: DialogContentProps) => JSX.Element;

interface ConfirmContextProps {
    children: React__default.ReactNode;
}
interface ConfirmDialogOptions extends Omit<DialogProps, 'open' | 'onButtonPress' | 'onClose' | 'shouldShowCloseIcon' | 'displayButtonControls' | 'testIds'> {
    message?: React__default.ReactNode;
}
declare const ConfirmDialogProvider: ({ children }: ConfirmContextProps) => JSX.Element;
declare const useConfirm: () => (data: ConfirmDialogOptions) => Promise<boolean>;

interface EmptyStateProps extends BaseProps {
    message?: string;
    subText?: string;
    iconName?: string;
    iconSize?: 'large' | 'standard' | 'tiny' | number;
    variant: 'inline' | 'widget' | 'component' | 'page';
    maxWidth?: number;
    height?: number;
    testIds?: {
        root?: string;
        icon?: string;
        message?: string;
        subText?: string;
    };
    classOverrides?: {
        icon?: string;
        message?: string;
        subText?: string;
    };
}
declare const MessageDefaults: Record<string, string>;
declare const iconNameDefaults: Record<string, string>;
declare const EmptyState: React__default.FC<EmptyStateProps>;

interface ErrorBoundaryProps {
    logError?: (error: any, errorInfo: any) => void;
    hasError?: boolean;
    errorChildren?: JSX.Element;
}
interface StateProps {
    hasError?: boolean;
}
declare class ErrorBoundary extends React__default.Component<ErrorBoundaryProps, StateProps> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(): any;
    componentDidCatch(error: Error, errorInfo: React__default.ErrorInfo): any;
    render(): any;
}

interface ExpandableListProps extends BaseProps {
    /** Class overrides to be merged with components classes */
    classes?: {
        root?: string;
        button?: string;
    };
    /** The max number of children the component will render without showing view more/less button */
    maxItems?: number;
    /** Text/Element to be displayed for the view more button */
    viewMoreContent?: string | React__default.ReactNode;
    /** Text/Element to be displayed for the view less button */
    viewLessContent?: string | React__default.ReactNode;
}
declare const ExpandableList: React__default.FC<ExpandableListProps>;

interface ExpandableTextProps extends BaseProps {
    children?: React__default.ReactNode;
    text?: React__default.ReactNode;
    className?: string;
    maxLines?: number;
    viewMoreText?: string;
    viewLessText?: string;
}
declare const ExpandableText: React__default.FC<ExpandableTextProps>;

interface FilterPill<V = any> {
    field?: string;
    label?: string;
    value?: V;
    valueLabel?: string;
}
declare type FiltersToolbarClasses = {
    root?: string;
    filterSection?: string;
    controls?: string;
};
interface FiltersToolbarProps {
    controls?: React__default.ReactNode;
    onFilterButtonClick?: () => void;
    filterButtonSelected?: boolean;
    filters?: FilterPill[];
    onClearFilter?: (filter: FilterPill) => void;
    onClearAll?: () => void;
    classes?: FiltersToolbarClasses;
}
declare const FiltersToolbar: ({ onFilterButtonClick, filterButtonSelected, controls, onClearFilter, onClearAll, filters, classes: classOverrides, }: FiltersToolbarProps) => JSX.Element;

interface SimpleOption {
    label?: string;
    iconName?: string;
    value: string | number;
    children?: Omit<SimpleOption, 'children'>[];
}

interface InputGroupProps extends BaseProps {
    classes?: {
        root?: string;
        options?: string;
        option?: string;
        tooltip?: string;
    };
    selectedValues?: Array<string | number>;
    direction?: 'column' | 'row';
    label?: string;
    labelIcon?: string;
    type: 'radio' | 'checkbox' | 'switch';
    variant?: 'default' | 'button';
    onChange?: (vals: Array<string | number>) => void;
    options: SimpleOption[];
    size?: 'large' | 'medium' | 'small';
    disabled?: boolean;
    noHorizontalPadding?: boolean;
    searchable?: boolean;
    onSearchChange?: (searchValue: string) => void;
    allowSelectAll?: boolean;
}
declare const InputGroup: React__default.FC<InputGroupProps>;

interface InputCommonProps extends React__default.ComponentPropsWithRef<'input'>, BaseProps {
    active?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    /** Adornment that will render at the right of the input. Can be a string, which will be interpreted as an Icon name, or a React node. */
    endAdornment?: React__default.ReactNode;
    endAdornmentTooltipText?: string;
    error?: boolean;
    onBlur?: React__default.FocusEventHandler<HTMLInputElement>;
    onChange?: React__default.ChangeEventHandler<HTMLInputElement>;
    onClick?: React__default.MouseEventHandler<HTMLInputElement>;
    onFocus?: React__default.FocusEventHandler<HTMLInputElement>;
    onEndAdornmentClick?: React__default.MouseEventHandler;
    onStartAdornmentClick?: React__default.MouseEventHandler;
    placeholder?: string;
    /** Adornment that will render at the left of the input. Can be a string, which will be interpreted as an Icon name, or a React node. */
    startAdornment?: React__default.ReactNode;
    startAdornmentTooltipText?: string;
    value?: string;
    type?: React__default.HTMLInputTypeAttribute;
}

interface InputProps extends InputCommonProps {
    classes?: {
        root?: string;
        input?: string;
        label?: string;
        disabled?: string;
        helperText?: string;
        errorHelper?: string;
    };
    helperText?: React__default.ReactNode;
    label?: React__default.ReactNode;
    labelAdornment?: string;
    errorAdornmentTooltipText?: string;
}
declare const Input: React__default.ForwardRefExoticComponent<Pick<InputProps, "error" | "label" | "type" | "classes" | "hidden" | "style" | "testId" | "className" | "children" | "color" | "height" | "translate" | "width" | "size" | "multiple" | "active" | "disabled" | "form" | "slot" | "title" | "pattern" | "list" | "name" | "onClick" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "step" | "max" | "min" | "crossOrigin" | "accept" | "alt" | "autoComplete" | "autoFocus" | "capture" | "checked" | "enterKeyHint" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "maxLength" | "minLength" | "readOnly" | "required" | "src" | "value" | "autofocus" | "endAdornment" | "endAdornmentTooltipText" | "onEndAdornmentClick" | "onStartAdornmentClick" | "startAdornment" | "startAdornmentTooltipText" | "errorAdornmentTooltipText" | "helperText" | "labelAdornment"> & React__default.RefAttributes<HTMLInputElement>>;

interface InputBaseProps extends InputCommonProps {
    errorAdornmentTooltipText?: string;
    classes?: {
        root?: string;
        active?: string;
        disabled?: string;
        error?: string;
        input?: string;
    };
}
declare const InputBase: React__default.ForwardRefExoticComponent<Pick<InputBaseProps, "error" | "type" | "classes" | "hidden" | "style" | "testId" | "className" | "children" | "color" | "height" | "translate" | "width" | "size" | "multiple" | "active" | "disabled" | "form" | "slot" | "title" | "pattern" | "list" | "name" | "onClick" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "step" | "max" | "min" | "crossOrigin" | "accept" | "alt" | "autoComplete" | "autoFocus" | "capture" | "checked" | "enterKeyHint" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "maxLength" | "minLength" | "readOnly" | "required" | "src" | "value" | "autofocus" | "endAdornment" | "endAdornmentTooltipText" | "onEndAdornmentClick" | "onStartAdornmentClick" | "startAdornment" | "startAdornmentTooltipText" | "errorAdornmentTooltipText"> & React__default.RefAttributes<HTMLInputElement>>;

interface EditableTextProps extends BaseProps {
    classes?: {
        root?: string;
        internalValue?: string;
        textarea?: string;
    };
    readOnly?: boolean;
    value?: string;
    disableSubmitOnEnter?: boolean;
    placeholder?: string;
    onBlur?: React__default.FocusEventHandler<HTMLTextAreaElement>;
    onCancel?: () => void;
    onSave?: (newValue: string) => void;
    maxLength?: number;
    showEmptyTextbox?: boolean;
}
declare const EditableText: React__default.FC<EditableTextProps>;

interface FileInputProps extends BaseProps {
    classes?: {
        root?: string;
    };
    height?: number;
    width?: number;
    acceptableFileTypes?: string[];
    file?: File;
    /** What type(s) of files to accept, multiple is comma separated string */
    accept?: string;
    /** Main line when no file is uploaded, appears above "browse files" */
    title?: string;
    /** Replaces title when box is being hovered */
    hoverText?: string;
    /** When passed from parent component, replaces all text and icons with error and this message. */
    errorMessage?: string;
    /** Function called when mouse is hovered over the upload drop zone */
    onDragOver?: (event?: DragEvent<HTMLDivElement>) => void;
    /** Function called when file is dropped in the upload box */
    onDrop?: (event?: DragEvent<HTMLDivElement>) => void;
    /** Function called when mouse leaves the upload box */
    onDragLeave?: (event?: DragEvent<HTMLDivElement>) => void;
    /** REQUIRED: Function called after a file is dropped in the upload box */
    onUpload: (file?: File) => void;
    /** REQUIRED: Function called when close button is clicked */
    onRemoveFile: (event?: React__default.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const FileInput: React__default.FC<FileInputProps>;

interface AdornmentTooltipProps {
    adornment: React__default.ReactNode;
    tooltip: string;
    onClick?: () => void;
    color?: string;
}
interface StartEndAdornmentProps {
    endAdornment?: AdornmentTooltipProps;
    startAdornment?: AdornmentTooltipProps;
}
interface AdornmentProps extends BaseProps {
    onClick?: MouseEventHandler;
    adornment: IconOptionsType | React__default.ReactNode;
    color?: string;
    tooltipText?: string;
}
declare const Adornment: React__default.FC<AdornmentProps>;
declare const getAdornmentClickHandler: (callback?: MouseEventHandler) => ((e: React__default.MouseEvent<Element, MouseEvent>) => void) | undefined;

interface PopoverWrapperAnchor {
    horizontal: 'center' | 'left' | 'right' | number;
    vertical: 'bottom' | 'center' | 'top' | number;
}
interface PopoverWrapperAnchorPosition {
    left: number;
    top: number;
}
interface PopoverWrapperProps extends BaseProps {
    classes?: {
        root?: string;
        paper?: string;
    };
    open?: boolean;
    anchorOrigin?: PopoverWrapperAnchor;
    transformOrigin?: PopoverWrapperAnchor;
    anchorPosition?: PopoverWrapperAnchorPosition;
    anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';
    anchorEl?: Element | null;
    marginThreshold?: number;
    elevation?: number;
    onClose?: (e: any) => void;
    transitionDuration?: 'auto' | number;
    disableAutoFocus?: boolean;
    disableEnforceFocus?: boolean;
}
declare const PopoverWrapper: React__default.FC<PopoverWrapperProps>;

interface OptionMenuItemProps {
    label?: React__default.ReactNode;
    sublabel?: string;
    value: string | number;
    adornments?: StartEndAdornmentProps;
    leadingIconName?: string;
    leadingIconColor?: string;
    leadingIconTooltipText?: string;
    trailingIconName?: string;
    trailingIconColor?: string;
    trailingIconTooltipText?: string;
    type?: string;
    onClick?: (item: any, event?: React__default.MouseEvent) => any | void;
    collapsed?: boolean;
    selected?: boolean;
    childOptions?: OptionMenuItemProps[];
    totalChildOptions?: OptionMenuItemProps[];
    disabled?: boolean;
    className?: string;
    inLineStyles?: Record<string, any>;
    renderChildren?: (children: OptionMenuItemProps[]) => void;
    menuStyles?: Record<string, any>;
    onCollapse?: (item: OptionMenuItemProps) => void;
    menuIsCollapsible?: boolean;
    shouldDisplayCheckbox?: boolean;
    disabledText?: string;
    virtualized?: boolean;
    isChild?: boolean;
    isHighlighted?: boolean;
    testId?: string;
    children?: React__default.ReactNode;
}
declare const OptionMenuItem: React__default.ForwardRefExoticComponent<OptionMenuItemProps & React__default.RefAttributes<HTMLDivElement>>;

interface OptionMenuItemSectionProps {
    header?: string;
    divider?: boolean;
    values?: OptionMenuItemProps[];
    collapsed?: boolean;
}
interface OptionMenuProps extends BaseProps {
    classes?: {
        root?: string;
        paper?: string;
    };
    searchable?: boolean;
    shouldSearchStaticOptions?: boolean;
    options?: OptionMenuItemSectionProps[] | OptionMenuItemProps[];
    height?: number;
    width?: number;
    displayCheckbox?: boolean;
    collapsible?: boolean;
    onCollapse?: (item: any) => void;
    autoFocusSearch?: boolean;
    onInputChange?: (value: string) => void;
    disabledText?: string;
    header?: React__default.ReactNode;
    footer?: React__default.ReactNode;
    onSelectAll?: () => void;
    autoScrollToSelected?: boolean;
    highlightSelectedOption?: boolean;
}
declare const OptionMenu: React__default.FC<OptionMenuProps>;

interface MenuProps extends PopoverWrapperProps {
    classes?: {
        root?: string;
        paper?: string;
    };
    searchable?: boolean;
    shouldSearchStaticOptions?: boolean;
    height?: number;
    width?: number;
    options?: OptionMenuItemSectionProps[] | OptionMenuItemProps[];
    displayCheckbox?: boolean;
    collapsible?: boolean;
    onCollapse?: (item: any) => any | void;
    autoFocusSearch?: boolean;
    onInputChange?: (value: string) => void;
    isSelectMenu?: boolean;
    disabledText?: string;
    allOptionsDisabled?: boolean;
    header?: React__default.ReactNode;
    footer?: React__default.ReactNode;
    onSelectAll?: () => void;
    autoScrollToSelected?: boolean;
    highlightSelectedOption?: boolean;
}
declare const Menu: React__default.FC<MenuProps>;

interface ContextMenuProps extends MenuProps {
    allowPropagation?: boolean;
}
declare const ContextMenu: React__default.FC<ContextMenuProps>;

interface SelectOptionProps extends Omit<OptionMenuItemProps, 'label' | 'index'> {
    label?: React__default.ReactNode;
    value: string | number;
    disabled?: boolean;
    divider?: boolean;
}
interface SelectProps extends Omit<InputCommonProps, 'onChange' | 'value' | 'onBlur'> {
    classes?: {
        root?: string;
        content?: string;
        disabled?: string;
        contentText?: string;
        activeLabel?: string;
        active?: string;
        contentIcons?: string;
        error?: string;
        errorAdornment?: string;
        selectButton?: string;
        trailingIcon?: string;
        menuRoot?: string;
        menuPaper?: string;
    };
    /** The value of the component */
    value?: string | number;
    /** The value that should be displayed in the select input. Used in composition. */
    valueLabel?: React__default.ReactNode;
    /** Callback when the value changes */
    onChange?: (item: SelectOptionProps, event: React__default.MouseEvent) => void;
    /** Blur callback */
    onBlur?: () => void;
    /** Array of options for the dropdown */
    options?: SelectOptionProps[];
    /** Component height */
    height?: number;
    /** Component width */
    width?: number;
    /** Whether or not to display the search box at the top of the dropdown. Defaults to true. */
    searchable?: boolean;
    /** Should options be filtered by text in the searchbox. Defaults to true. */
    shouldSearchStaticOptions?: boolean;
    /** Callback when the input value changes. Can be used for filtering custom dropdown menuItems passed as children. */
    onInputChange?: (value: string) => void;
    /** Use button as select instead of div styled to act like a button */
    useButton?: boolean;
    testIds?: {
        select?: string;
        menuRoot?: string;
    };
    /** Secondary text to be displayed on the right edge of the select */
    secondaryText?: string;
    errorText?: string;
    /** display loading spinner on top of select */
    loading?: boolean;
    /** text to display near disabled options */
    disabledText?: string;
    /** Text displayed above the input */
    label?: string;
    /** Icon that is part of the label. Passed down as JSX to make it more flexible */
    labelIcon?: React__default.ReactNode;
    /** Text displayed inside of the input to label the value */
    internalLabel?: string;
    header?: React__default.ReactNode;
    footer?: React__default.ReactNode;
}
declare const Select: React__default.FC<SelectProps>;

interface MultiselectDropdownOptionProps extends Omit<OptionMenuItemProps, 'label'> {
    label?: string;
    value: string | number;
    childOptions?: MultiselectDropdownOptionProps[];
    selected: boolean;
    collapsed?: boolean;
}
interface MultiselectDropdownProps extends Omit<InputCommonProps, 'onChange'> {
    /** Classes to override styles of component */
    classes?: {
        root?: string;
        disabled?: string;
        error?: string;
        contentText?: string;
        content?: string;
        contentIcons?: string;
        errorAdornment?: string;
        adornments?: {
            startAdornment?: string;
            endAdornment?: string;
        };
    };
    /** A set of options to display in the dropdown menu */
    options: MultiselectDropdownOptionProps[];
    /** If the input should be disabled */
    disabled?: boolean;
    /** If the input should show an error state */
    error?: boolean;
    /** If the options should be searchable */
    searchable?: boolean;
    /** If the parent of child options should be collapsible. NOTE: If set to true the options must set their `collapsed` field to false. */
    collapsible?: boolean;
    /** The height of the option menu */
    height?: number;
    /** The height of the option menu and the input */
    width?: number;
    errorText?: string;
    /** Text displayed above the input */
    label?: string;
    /** Icon that is part of the label. Passed down as JSX to make it more flexible */
    labelIcon?: React__default.ReactNode;
    /** Text displayed inside of the input to label the value */
    internalLabel?: string;
    /** Callback when an item is collapsed */
    onCollapse?: ({ index, item, isCollapsed, }: {
        index: number;
        item: MultiselectDropdownOptionProps;
        isCollapsed: boolean;
    }) => void;
    /** Callback when an item is selected */
    onChange: ({ isSelected, parentIndex, childIndex, item, }: {
        isSelected: boolean;
        parentIndex: number;
        childIndex: number;
        item: MultiselectDropdownOptionProps;
    }) => void;
    /** Callback when all selected values are cleared. If undefined, clear button will not display. */
    onClear?: () => void;
    onSelectAll?: () => void;
    adornments?: StartEndAdornmentProps;
    /** Show count of selected items in footer */
    shouldShowCountInFooter?: boolean;
    /** Should focus on open */
    autoFocusSearch?: boolean;
}
declare const MultiselectDropdown: React__default.FC<MultiselectDropdownProps>;

declare type CustomValueInputType = 'PillInput' | 'AutoComplete' | 'PillAutoComplete' | 'Input';
interface CustomValueSelectProps extends Omit<SelectProps, 'testIds' | 'onChange'> {
    customValueInputType: CustomValueInputType;
    customValueInputProps?: Partial<InputProps> | Partial<PillInputProps> | Partial<AutoCompleteProps> | Partial<PillAutoCompleteProps>;
    isCustomValue: boolean;
    values?: string[];
    onChange?: (val: string, values: string[]) => void;
    customValueInputString?: string;
    changeCustomValue?: (isCustomValue: boolean) => void;
    endAdornment?: React__default.ReactNode;
    startAdornment?: React__default.ReactNode;
    startAdornmentTooltipText?: string;
    testIds?: {
        select?: string;
        menuRoot?: string;
        addCustomValueButton?: string;
    };
    width?: number;
}
declare const CustomValueSelect: ({ customValueInputType, isCustomValue, options, value, customValueInputProps: inputProps, values, changeCustomValue, customValueInputString, onChange, classes: classOverrides, testIds, endAdornment, width, secondaryText, startAdornment, startAdornmentTooltipText, }: CustomValueSelectProps) => JSX.Element;

interface OptionsStatus {
    value?: string;
    icon?: string;
    type?: string;
}
interface PillInputProps extends BaseProps {
    classes?: {
        root?: string;
        adornments?: {
            endAdornment?: string;
            startAdornment?: string;
        };
    };
    values: string[];
    optionsStatus?: OptionsStatus[];
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    ValueRenderer?: React__default.FC<{
        value: string;
    }>;
    onChange?: (newVal: string[]) => void;
    onBlur?: (value: string) => boolean | void;
    width?: number | string;
    maxHeight?: number | string;
    adornments?: StartEndAdornmentProps;
    autoCompleteProps?: {
        selectedItem: OptionMenuItemProps;
        getInputProps: (options?: UseComboboxGetInputPropsOptions, otherOptions?: GetPropsCommonOptions) => any;
        closeMenu: () => void;
        isOpen?: boolean;
        openMenu: () => void;
    };
    wrapperRef?: MutableRefObject<HTMLDivElement | null>;
    loading?: boolean;
    helperText?: string;
    validate?: (val: string, setErrorMessages?: boolean) => boolean;
    submitKeyboardKeys?: string[];
    pasteDelimiter?: string;
    disablePasteSubmit?: boolean;
    disallowDuplicates?: boolean;
    clearErrors?: () => void;
    hideClearAll?: boolean;
    label?: React__default.ReactNode;
    readOnly?: boolean;
}
declare const PillInput: React__default.ForwardRefExoticComponent<PillInputProps & React__default.RefAttributes<HTMLInputElement>>;

interface DateInputProps extends Omit<InputProps, 'onChange' | 'value'> {
    className?: string;
    /** The value of the input */
    value: Date | null;
    /** Change handler for the input */
    onChange: (date: Date | null) => void;
    /** Determines the root stlye of the input. Transparent make the background transparent */
    variant?: 'transparent' | 'standard';
    /** The earliest allowed selectable date */
    minDate?: Date;
    /** The latest allowed selectable date */
    maxDate?: Date;
    /** What kind of dates the input will show */
    level?: 'day' | 'month' | 'year';
}
declare const DateInput: ({ className, value, onChange, variant, minDate, maxDate, level, width, height, ...inputProps }: DateInputProps) => JSX.Element;

interface TimeInputProps extends Omit<InputProps, 'onChange' | 'value'> {
    className?: string;
    value: string;
    onChange: (time: string) => void;
}
declare const TimeInput: ({ className, value, onChange, ...props }: TimeInputProps) => JSX.Element;

interface DateTimeInputProps extends Omit<InputProps, 'onChange' | 'value'> {
    className?: string;
    /** The value of the input */
    value: Date | null;
    /** Change handler for the input */
    onChange: (date: Date | null) => void;
    /** Determines the root stlye of the input. Transparent make the background transparent */
    variant?: 'transparent' | 'standard';
    /** The earliest allowed selectable date */
    minDate?: Date;
    /** The latest allowed selectable date */
    maxDate?: Date;
}
declare const DateTimeInput: ({ className, value, onChange, label, helperText, disabled, error, variant, minDate, maxDate, ...props }: DateTimeInputProps) => JSX.Element;

interface AutoCompleteMenuProps {
    getMenuProps: () => any;
    getItemProps: ({ item, index }: {
        item: OptionMenuItemProps;
        index: number;
    }) => any;
    closeMenu: () => void;
    isOpen: boolean;
    width?: number | string;
    classOverrides?: {
        root?: string;
        inputWrapper?: string;
        optionMenu?: string;
    };
    options: OptionMenuItemProps[];
    noOptionText?: string;
    menuHeight?: number;
    value: string;
    highlightedIndex: number;
    loading?: boolean;
    onInputChange?: (value: string) => void;
    onPillChange?: (values: string[]) => void;
    type: 'input' | 'pill';
    values?: string[];
}
declare const AutoCompleteMenu: React__default.ForwardRefExoticComponent<AutoCompleteMenuProps & React__default.RefAttributes<HTMLInputElement | HTMLDivElement>>;

interface AutoCompleteProps extends Omit<BaseProps, 'className'> {
    options: OptionMenuItemProps[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    loading?: boolean;
    noOptionText?: string;
    InputProps?: Partial<InputProps>;
    helperText?: string;
    MenuProps?: Partial<AutoCompleteMenuProps>;
    width?: number | string;
    classOverrides?: {
        root?: string;
        inputWrapper?: string;
        optionMenu?: string;
    };
    menuHeight?: number;
    error?: boolean;
    onBlur?: () => void;
    disabled?: boolean;
    endAdornment?: React__default.ReactNode;
    startAdornment?: React__default.ReactNode;
    startAdornmentTooltipText?: string;
    onSelectedValueChange?: (isSelected: boolean) => void;
}
declare const AutoComplete: React__default.ForwardRefExoticComponent<AutoCompleteProps & React__default.RefAttributes<HTMLInputElement>>;

interface PillAutoCompleteProps extends Omit<BaseProps, 'className'> {
    options: OptionMenuItemProps[];
    values: string[];
    optionsStatus?: OptionsStatus[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    label?: string;
    loading?: boolean;
    noOptionText?: string;
    InputProps?: Partial<PillInputProps>;
    MenuProps?: Partial<AutoCompleteMenuProps>;
    width?: number | string;
    classOverrides?: {
        root?: string;
        inputWrapper?: string;
        optionMenu?: string;
    };
    menuHeight?: number;
    onBlur?: (val: string) => boolean | void;
    hideClearAll?: boolean;
}
declare const PillAutoComplete: React__default.ForwardRefExoticComponent<PillAutoCompleteProps & React__default.RefAttributes<HTMLInputElement>>;

declare type NumericInputChangeType = 'arrow' | 'typed';
interface NumericInputProps extends Omit<InputProps, 'onChange' | 'endAdornment' | 'onBlur'> {
    /** A node, usually a string, to be rendered as a unit, like "cm" */
    unit?: React__default.ReactNode;
    /** The maximum value of the input */
    max?: number;
    /** The minimum value of the input */
    min?: number;
    /** A multiplier that affects how much the input is incremented by a single arrow click */
    incrementBy?: number;
    /** The change handler */
    onChange?: (value: string, type: NumericInputChangeType) => void;
    /** A function to run when the input is blurred */
    onBlur?: (event: React__default.FocusEvent) => void;
    /** Whether or not the value can be empty on blur */
    canBeEmpty?: boolean;
}
declare const NumericInput: ({ unit, value, onChange, onBlur, incrementBy, max, min, canBeEmpty, ...inputProps }: NumericInputProps) => JSX.Element;

declare type Range = {
    from: string;
    to: string;
};
interface RangeInputProps extends Omit<NumericInputProps, 'value' | 'onChange'> {
    value?: Range;
    onChange?: (value: Range) => void;
    clearable?: boolean;
}
declare const RangeInput: ({ value, onChange, min, max, clearable }: RangeInputProps) => JSX.Element;

interface AddCommentProps {
    /** Prop to be called when send button is clicked */
    onSubmit: () => void;
    /** Disables the whole textarea, not just the button */
    disabled?: boolean;
    /** Height of the comment box by lines. Defaults to 3 */
    linesToShow?: number;
    /** The max value that can be used */
    maxLength?: number;
    /** Placeholder of component. Defaults to "Add a comment" */
    placeholder?: string;
    /** The value of the comment */
    value: string;
    /** The onChange to update value of comment */
    onChange: (value: string) => void;
    /** Disables the submit button if true */
    disableSubmit?: boolean;
}
declare const AddComment: ({ disabled, onSubmit, maxLength, placeholder, linesToShow, value, onChange, disableSubmit, }: AddCommentProps) => JSX.Element;

declare const emptyInitialValue: {
    children: {
        text: string;
    }[];
}[];
interface RichTextEditorProps {
    editor: BaseEditor & HistoryEditor & ReactEditor;
    disabled?: boolean;
    startValue?: Descendant[];
    placeholder?: string;
    setCharCount?: (charCount: number) => void;
    maxLength?: number;
    minLinesToShow?: number;
    editorStyles?: React__default.CSSProperties;
    resizeable?: 'vertical' | 'none';
    onEnterPress?: () => void;
    onChange?: (val: string) => void;
}
declare const RichTextEditor: ({ disabled, placeholder, maxLength, editorStyles, editor, setCharCount, onEnterPress, onChange, startValue, resizeable, minLinesToShow, }: RichTextEditorProps) => JSX.Element;

interface TextAreaProps extends BaseProps, React__default.DetailedHTMLProps<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    /** Overrides for styles */
    classes?: {
        root?: string;
        textarea?: string;
        textareaBox?: string;
        cornerGrip?: string;
        TopEndAdornment?: string;
        TopStartAdornment?: string;
        BottomEndAdornment?: string;
        Label?: string;
        HelperLabel?: string;
        error?: string;
        disabled?: string;
        bottomRow?: string;
    };
    /** The value of the textarea */
    value: string;
    /** If the textarea is in an error state */
    error?: boolean;
    /** Which directions the textarea can resize */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /** Information placed at the top of the textarea */
    Label?: React__default.ReactNode;
    /** Information placed at the bottom of the textarea */
    HelperLabel?: React__default.ReactNode;
    /** Adornment placed at the start of the textarea */
    TopStartAdornment?: React__default.ReactNode;
    /** Adornment placed at the end of the textarea */
    TopEndAdornment?: React__default.ReactNode;
    /** Adornment placed at the bottom right of the textarea. Will replace the CornerGrip icon */
    BottomEndAdornment?: React__default.ReactNode;
    /** Height of the textarea */
    height?: string | number;
    /** Width of the textarea */
    width?: string | number;
    /** Minimum height of the textarea */
    minHeight?: string | number;
    /** Minimum width of the textarea. IMPORTANT: if the `HelperLabel` is long this minWidth must be adjusted to account for that.  */
    minWidth?: string | number;
}
/** <a href="https://www.figma.com/file/UIwOewMtY62ERnQ7ahvRov/GMDS-Guidelines-Components-Text-Area?node-id=415%3A114307">Designs</a> */
declare const TextArea: ({ classes: classOverrides, value, resize, placeholder, Label, TopStartAdornment, TopEndAdornment, BottomEndAdornment, error, height, width, minWidth, minHeight, HelperLabel, testId, className, maxLength, disabled, readOnly, ...textareaProps }: TextAreaProps) => JSX.Element;

interface OverflowingPillInputProps extends Omit<PillInputProps, 'autoCompleteProps' | 'ValueRenderer'> {
    renderPills: (vals: string[], maxPillsToShow: number) => ReactNode;
    renderOverflow: (vals: string[], open?: boolean, setOpen?: (open: boolean) => void) => ReactNode;
    maxPillsToShow?: number;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}
declare const OverflowingPillInput: React__default.ForwardRefExoticComponent<OverflowingPillInputProps & React__default.RefAttributes<HTMLInputElement>>;

declare type InputType$1 = 'radio' | 'checkbox' | 'range' | 'text' | 'list' | 'custom';
declare class FilterRef<V = any> {
    field: string;
    value?: V;
    constructor(field: string, value?: V);
}
declare class FilterBase<T extends InputType$1, V> extends FilterRef<V> {
    readonly type: T;
    readonly field: string;
    label?: string;
    emptyValue?: V;
    valueLabelGenerator?: () => string;
    getClearedValue?: (value?: any) => V | undefined;
    constructor(type: T, field: string, label?: string, value?: V, emptyValue?: V | undefined);
    toFilterPill(): FilterPill | FilterPill[] | undefined;
    isEmpty(): boolean;
}
declare class RadioFilter extends FilterBase<'radio', string | number> {
    input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    };
    constructor(field: string, label: string, input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    }, value?: string | number);
    toFilterPill(): FilterPill | undefined;
}
declare class CheckboxFilter extends FilterBase<'checkbox', string[]> {
    input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    };
    constructor(field: string, label: string, input: {
        selectOptions: {
            label: string;
            value: string;
        }[];
        searchable?: boolean;
    }, value?: string[]);
    toFilterPill(): FilterPill[] | undefined;
}
declare class TextFilter extends FilterBase<'text', string> {
    constructor(field: string, label: string, value?: string);
}
declare class RangeFilter extends FilterBase<'range', Range> {
    input?: {
        min?: number;
        max?: number;
    };
    constructor(field: string, label: string, input?: {
        min?: number;
        max?: number;
    }, value?: Range);
    toFilterPill(): FilterPill | undefined;
    isEmpty(): boolean;
}
declare class ListFilter extends FilterBase<'list', string> {
    input: {
        selectOptions: {
            label: string;
            value: string;
            divider?: boolean;
        }[];
        placeholder?: string;
    };
    constructor(field: string, label: string, input: {
        selectOptions: {
            label: string;
            value: string;
            divider?: boolean;
        }[];
        placeholder?: string;
    }, value?: string);
    toFilterPill(): FilterPill | undefined;
}
declare class CustomFilter<V> extends FilterBase<'custom', V> {
    customInputRender?: (props: {
        onChange: (val: V) => void;
        filter?: Filter;
    }) => ReactNode;
    constructor(field: string, label: string, customInputRender?: (props: {
        onChange: (val: V) => void;
        filter?: Filter;
    }) => ReactNode, value?: V, emptyValue?: V | undefined);
}
declare type Filter<T = any> = RadioFilter | CheckboxFilter | TextFilter | RangeFilter | ListFilter | CustomFilter<T>;

interface FiltersProps {
    filters?: Filter[];
    children?: React__default.ReactNode;
    controls?: React__default.ReactNode;
    onFilterChange?: (filter: FilterRef) => void;
    filterListOpen?: boolean;
    defaultExpandedIndex?: number;
    height?: string | number;
    inputProps?: InputProps | InputGroupProps | RangeInputProps;
    classes?: {
        root?: string;
        filterPanel?: string;
        children?: string;
        slidingContainer?: string;
        filterContainerOpen?: string;
        toolbar?: FiltersToolbarClasses;
    };
}
declare const Filters: ({ children, controls, onFilterChange, filterListOpen, defaultExpandedIndex, height, inputProps, filters, classes: classOverrides, }: FiltersProps) => JSX.Element;

interface FilterInputsProps {
    children?: React__default.ReactNode;
    filters?: Filter[];
    inputProps?: InputProps | InputGroupProps | RangeInputProps;
    defaultExpandedIndex?: number;
    onFilterChange?: <V>(filter: FilterRef<V>) => void;
}
declare const FilterInputs: ({ children, filters, inputProps, defaultExpandedIndex, onFilterChange, }: FilterInputsProps) => JSX.Element;

interface FilterPillListProps {
    filters?: FilterPill[];
    onClearFilter?: (filter: FilterPill) => void;
    onClearAll?: () => void;
}
declare const FilterPillList: ({ filters, onClearFilter, onClearAll }: FilterPillListProps) => JSX.Element;

interface FullscreenImageDialogProps extends BaseProps {
    /** Is the dialog open */
    open: boolean;
    /** Change the root class */
    classes?: {
        root?: string;
    };
    /** Title prefix */
    titleLabel?: string;
    /** Title on right of titleLabel */
    titleValue?: string;
    /** Url of the image to show */
    imageURL: string;
    /** Handle closing */
    onClose?: (reason?: CloseReason) => void;
    /** This can be one or more buttons */
    actions?: ReactNode;
}
/** Alternative to dialog that takes up the entire view */
declare const FullscreenImageDialog: ({ classes: classOverrides, open, titleLabel, titleValue, imageURL, onClose, actions, }: FullscreenImageDialogProps) => JSX.Element;

interface FancyLabelProps extends BaseProps {
    classes?: {
        root?: string;
    };
    /**
     * icon to display at the beginning of the label
     */
    icon?: string;
}
declare const FancyLabel: React__default.FC<FancyLabelProps>;

interface ExternalLinkProps extends BaseProps {
    href: string;
    iconPosition?: 'start' | 'end';
    /** Design rules suggest icons should be hidden in tables */
    hideIcon?: boolean;
    label: ReactNode;
}
declare const ExternalLink: React__default.FC<ExternalLinkProps>;

declare type InternalLinkProps = BaseProps;
declare const InternalLink: React__default.FC<InternalLinkProps>;

interface LinkButtonProps extends BaseProps, React__default.ComponentPropsWithRef<'a'> {
    /** classes to override styles of component */
    classes?: {
        root?: string;
        destructive?: string;
        filled?: string;
        secondary?: string;
        primary?: string;
        text?: string;
        large?: string;
        small?: string;
        medium?: string;
        trailing?: string;
        leading?: string;
    };
    /** Icon to be displayed at the beginning of the link */
    leadingIcon?: string;
    /** Boolean determining whether to highlight link */
    selected?: boolean;
    /** Info to determine how big the link is */
    size?: 'large' | 'medium' | 'small';
    /** Will be shown in tooltip */
    tooltip?: React__default.ReactNode;
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
    /** Icon to be displayed at the end of the link */
    trailingIcon?: string;
    /** Variant to determine link style */
    variant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    /** Whether type is iconButton */
    iconButton?: 'standard' | 'small' | 'tiny';
}
/**
 * This component will render a link, in the 'style' of a button.
 * This will give full link a11y but can meet design constraints.
 * Either a hyperlink can be passed such as:
 * ```<LinkButton><a href={'https://www.google.com'}>Some content</a></LinkButton>```
 * or a component that renders a link such as reach router's `Link`:
 * ```<LinkButton><Link to={'https://www.google.com'}>Some content</Link></LinkButton>```
 */
declare const LinkButton: React__default.FC<LinkButtonProps>;

interface LoadingSpinnerProps extends BaseProps {
    size?: 'tiny' | 'standard' | 'large' | number;
    color?: string;
    classOverrides?: {
        root?: string;
    };
    testIds?: {
        root?: string;
        icon?: string;
    };
}
declare const LoadingSpinner: React__default.FC<LoadingSpinnerProps>;

declare const Skeleton: React__default.FC<SkeletonProps>;

interface LoadingImageProps {
    url: string;
    width?: number;
    height?: number;
}
declare const LoadingImage: ({ width, url, height }: LoadingImageProps) => JSX.Element;

interface OverflowingTextProps extends BaseProps {
    children?: React__default.ReactNode;
    className?: string;
    maxLines?: number;
    text?: React__default.ReactNode;
    tooltipProps?: TooltipProps;
    onClick?: React__default.MouseEventHandler<HTMLDivElement>;
    disableInteractive?: boolean;
}
declare const OverflowingText: React__default.FC<OverflowingTextProps>;

interface CappedListProps extends BaseProps {
    /** An array of items */
    items: (string | number)[];
    /** Props for optional tooltip */
    tooltipProps?: Partial<TooltipProps>;
    /** The max number of items to show */
    maxItems?: number;
    classes?: {
        root?: string;
    };
}
/**
 * This component will render a list, up to a number of items.
 * For example, ```['test1', 'test2', 'test3', 'test4']``` with ```maxItems = 3``` will render:
 * "test1, test2, test3 + 1 more"
 */
declare const CappedList: ({ items, maxItems, classes: classOverrides, testId, tooltipProps }: CappedListProps) => JSX.Element;

interface PageHeaderProps {
    children?: React__default.ReactNode;
    className?: string;
    /** Whether or not to show the border on bottom. Defaults to false. */
    showBottomBorder?: boolean;
}
declare const PageHeader: ({ children, className, showBottomBorder }: PageHeaderProps) => JSX.Element;

interface PanelProps extends BaseProps {
    title?: string;
    displayLeftBorder?: boolean;
    disableRestoreFocus?: boolean;
    open: boolean;
    displayFooterButton?: boolean;
    displayFooterSeparation?: boolean;
    footerButtonVariant?: 'destructive' | 'filled' | 'secondary' | 'primary' | 'ghost';
    onClose?: () => void;
    onFooterButtonClick?: React__default.MouseEventHandler<HTMLButtonElement>;
    footerButtonText?: string;
    anchor?: 'right' | 'left' | 'top' | 'bottom' | undefined;
    variant?: 'persistent' | 'temporary' | undefined;
    hideBackdrop?: boolean;
    ModalProps?: ModalProps;
    PaperProps?: PaperProps;
    shouldShowCloseIcon?: boolean;
    classes?: {
        root?: string;
    };
    width?: string;
    height?: string;
    customFooter?: React__default.ReactNode;
}
declare const Panel: React__default.FC<PanelProps>;

interface PillProps extends BaseProps {
    classes?: {
        root?: string;
        content?: string;
        error?: string;
        errorIcon?: string;
        clickable?: string;
    };
    iconName?: string;
    disabled?: boolean;
    hasError?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
    onClick?: React__default.MouseEventHandler<HTMLDivElement>;
    onLeadingIconClick?: React__default.MouseEventHandler<HTMLDivElement>;
    onTrailingIconClick?: React__default.MouseEventHandler<HTMLDivElement>;
    id?: string;
    type?: string;
    readOnly?: boolean;
}
declare const Pill: React__default.FC<PillProps & React__default.HTMLAttributes<HTMLDivElement>>;

interface SortablePillGroupProps extends BaseProps {
    classes?: {
        root?: string;
        container?: string;
    };
    data: any[];
    onSort: (data: any[]) => void;
    direction?: 'horizontal' | 'vertical';
    id: string;
}
declare const SortablePillGroup: React__default.FC<SortablePillGroupProps>;

interface ProgressBarProps extends BaseProps {
    classes?: {
        root?: string;
    };
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
    /** Denotes percentage loaded. Leave undefined if progress cannot be denoted with a number */
    value?: number | undefined;
    /** Progress bar fills in from the center. Only applicable when a numerical progress value is also passed in. */
    center?: string;
    /** Color changes to INFO_STATUS, instead of SUCCESS_STATUS. Only applicable when a numerical progress value is also passed in. */
    paused?: boolean;
}
declare const ProgressBar: React__default.FC<ProgressBarProps>;

interface RadioButtonProps extends BaseProps {
    size?: 'large' | 'medium' | 'small';
    value: string | number;
    checked?: boolean;
    labelPosition?: 'top' | 'right' | 'bottom' | 'left';
    disabled?: boolean;
    onChange?: (val: string | number, event: React__default.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    readOnly?: boolean;
}
/** <a href="https://www.figma.com/file/mNl2RYvJfpr8b6d49I2KOU/GMDS-Guidelines-Components-Radio-Button?node-id=102%3A23883">Designs</a> */
declare const RadioButton: React__default.FC<RadioButtonProps>;

interface SwitchProps extends BaseProps {
    classes?: {
        root?: string;
    };
    checked?: boolean;
    disabled?: boolean;
    onChange?: (val: string | number | undefined, bool: boolean, event: React__default.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    value?: string | number;
    readOnly?: boolean;
}
/** <a href="https://www.figma.com/file/Wh5rW8ZTWehaKju99BUKl2/GMDS-Guidelines-Components-Toggle-Switch?type=design&node-id=102-23883">Designs</a> */
declare const Switch: React__default.FC<SwitchProps>;

interface TabOption extends BaseProps {
    classes?: {
        root?: string;
        icon?: string;
        text?: string;
    };
    text?: string;
    disabled?: boolean;
    iconName?: string;
    value: string | number;
    selected?: boolean;
    onSelect?: (vals: any, event: React__default.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

declare const Tab: React__default.FC<TabOption>;

declare const BorderedTab: React__default.FC<Omit<TabOption, 'iconName'>>;

interface TabGroupProps extends BaseProps {
    classes?: {
        root?: string;
    };
    onSelect?: (val: any) => void;
    disabled?: boolean;
    selected?: string | number;
    options: TabOption[];
    direction?: 'row' | 'column';
    isBordered?: boolean;
}
declare const TabGroup: React__default.FC<TabGroupProps>;

interface TimestampProps {
    classes?: {
        root?: string;
        tooltip?: string;
    };
    format?: 'complete' | 'normal' | 'shorthand' | string;
    hideTime?: boolean;
    showSeconds?: boolean;
    timestamp?: string;
    timezone?: string;
    /** Props passed to Tooltip component */
    tooltipProps?: TooltipProps;
}
declare const TimestampFormatStrings: Record<string, string>;
declare const TimestampFormatStringsNoTime: Record<string, string>;
declare const Timestamp: React__default.FC<TimestampProps>;

interface ToastProps extends BaseProps {
    classes?: {
        root?: string;
    };
    details?: string;
    time?: string;
    anchorOrigin?: SnackbarProps['anchorOrigin'];
    autoHideDuration?: SnackbarProps['autoHideDuration'];
    iconName?: string;
    iconColor?: string;
    action?: () => void;
    actionMessage?: string;
    message?: SnackbarProps['message'];
    onClose?: SnackbarProps['onClose'];
    open?: SnackbarProps['open'];
    size?: 'small' | 'medium' | 'large';
    variant?: 'standard' | 'inline';
}
/** <a href="https://www.figma.com/file/ri5tSmGcEYjvQDiEQhHZWe/GMDS-Guidelines-Pattern-Toast?type=design&node-id=0%3A1&t=xAyvd32DuoxaG5Ws-1">Designs</a> */
declare const Toast: React__default.FC<ToastProps>;

declare type ToastType = 'loading' | 'error' | 'success' | null;
interface DataHandlingToastsProps extends BaseProps, Omit<ToastProps, 'onClose'> {
    anchorOrigin?: ToastProps['anchorOrigin'];
    errorMsg?: string;
    loadingMsg?: string;
    onClose?: (toastClosed: string) => void;
    successMsg?: string;
    details?: string;
    time?: string;
    toastToShow: ToastType;
}
declare const DataHandlingToasts: React__default.FC<DataHandlingToastsProps>;

declare const ErrorToast: React__default.FC<ToastProps>;

declare const LoadingToast: React__default.FC<ToastProps>;

declare const SuccessToast: React__default.FC<ToastProps>;

interface LegacyTheme {
    typography: any;
    spacingIncrement: number;
    spacing: (...nums: number[]) => string;
    text: {
        TEXT01: string;
        TEXT02: string;
        TEXT03: string;
        TEXT04: string;
        TEXT_ERROR: string;
        TEXT_RED10: string;
        TEXT_RED100: string;
        TEXT_GREEN10: string;
    };
    interactive: {
        INTERACTIVE01: string;
        HOVER01: string;
        SELECT01: string;
    };
    background: {
        BACKGROUND00: string;
        BACKGROUND01: string;
        BACKGROUND02: string;
        BACKGROUND03: string;
        BACKGROUND04: string;
        TOOLTIP: string;
        BORDER01: string;
        BORDER02: string;
        BORDER03: string;
        BORDER04: string;
        BORDER_SELECTED: string;
    };
    navigation: {
        BORDER: string;
        BORDER_SELECTED: string;
        BORDER_SELECTED_HOVER: string;
    };
    icon: {
        ICON01: string;
        ICON02: string;
        ICON03: string;
        ICON_HOVERED: string;
    };
    checkbox: {
        CHECKED: string;
        CHECKED_HOVER: string;
        UNCHECKED: string;
        DISABLED: string;
        DISABLED_HOVER: string;
    };
    link: {
        PRIMARY: string;
        VISITED: string;
    };
    severity: {
        CRITICAL: string;
        HIGH: string;
        MEDIUM: string;
        LOW: string;
        INFORMATIONAL: string;
        UNASSESSED: string;
    };
    status: {
        ERROR: string;
        DANGER: string;
        SUCCESS: string;
        WARNING: string;
        INFO: string;
        CRITICAL: string;
        HIGH: string;
        MEDIUM: string;
        LOW: string;
        INFORMATIONAL: string;
        UNASSESSED: string;
    };
    statusBackground: {
        alpha08: {
            ERROR: string;
            DANGER: string;
            SUCCESS: string;
            WARNING: string;
            DEFAULT: string;
            CRITICAL: string;
            HIGH: string;
            MEDIUM: string;
            LOW: string;
            INFORMATIONAL: string;
            UNASSESSED: string;
        };
        alpha24: {
            ERROR: string;
            DANGER: string;
            SUCCESS: string;
            WARNING: string;
            DEFAULT: string;
            CRITICAL: string;
            HIGH: string;
            MEDIUM: string;
            LOW: string;
            INFORMATIONAL: string;
            UNASSESSED: string;
        };
    };
    modal: {
        OVERLAY01: string;
    };
    chart: {
        CHART_1: string;
        CHART_2: string;
        CHART_3: string;
        CHART_4: string;
        CHART_5: string;
        CHART_6: string;
        CHART_7: string;
        CHART_8: string;
        CHART_9: string;
        CHART_10: string;
        CHART_11: string;
        CHART_12: string;
        CHART_13: string;
        CHART_14: string;
    };
}

declare const LegacyDarkTheme: LegacyTheme;

/** Adds an alpha channel value to a hexadecimal color string
 * @param color A hexadecimal color string in the format #RRGGBB
 * @param alpha An alpha value between 0 and 1
 *
 * @returns A hexadecimal color string in the format #RRGGBBAA
 */
declare const addAlphaValueToHexColor: (color: string, alpha: number) => string;

declare const statusBackgrounds: (theme: any) => any;

interface SurfaceColorSet {
    surface0: string;
    surface1: string;
    surface2: string;
    surface3: string;
    surface4: string;
    surface5: string;
}
interface SeverityColorSet {
    critical: string;
    high: string;
    medium: string;
    low: string;
    informational: string;
    unassessed: string;
}
interface StatusColorSet {
    success: string;
    caution: string;
    warning: string;
    error: string;
    informational: string;
}
interface TypographyColorSet {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    link: string;
    positive: string;
    negative: string;
}
interface IconColorSet extends Omit<TypographyColorSet, 'link'> {
    severity: SeverityColorSet;
}
interface BorderColorSet extends Omit<TypographyColorSet, 'link'> {
    focus: string;
}
interface BooleanInteractiveColors {
    default: string;
    hover: string;
    disabled: string;
}
interface InteractiveColors {
    default: string;
    hover: string;
    active: string;
    focus: string;
}
interface ThemeColors {
    surface: SurfaceColorSet;
    feedback: {
        severity: SeverityColorSet;
        status: StatusColorSet;
    };
    typography: TypographyColorSet;
    icon: IconColorSet;
    border: BorderColorSet;
    interaction: {
        boolean: {
            off: BooleanInteractiveColors;
            on: BooleanInteractiveColors;
        };
        primary: InteractiveColors;
        secondary: InteractiveColors;
        tertiary: InteractiveColors;
        destructive: InteractiveColors;
    };
}
interface Font {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    letterSpacing: string;
    lineHeight: string;
    textDecoration: string;
    margin: number;
}
interface ThemeTypography {
    heading: {
        h1: Font;
        h2: Font;
        h3: Font;
        h4: Font;
        h5: Font;
    };
    body: Font;
    label: Font;
    caption: Font;
    button: Font;
    metrics: {
        body: Font;
        caption: Font;
        large: Font;
        value: Font;
    };
    table: {
        body: Font;
        link: Font;
        linkHover: Font;
    };
}
interface Theme {
    color: ThemeColors;
    spacing: (...args: (number | string)[]) => string;
    typographyStyles: ThemeTypography;
}

declare const DarkTheme: Theme;

declare enum AggOperator {
    AND = "AND",
    OR = "OR"
}
declare enum ValueOperator {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    CONTAINS = "CONTAINS",
    DOES_NOT_CONTAIN = "DOES_NOT_CONTAIN",
    GREATER_THAN = "GREATER_THAN",
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
    LESS_THAN = "LESS_THAN",
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL",
    BETWEEN = "BETWEEN",
    STARTS_WITH = "STARTS_WITH",
    DOES_NOT_START_WITH = "DOES_NOT_START_WITH",
    IN = "IN",
    NOT_IN = "NOT_IN",
    ENDS_WITH = "ENDS_WITH",
    DOES_NOT_END_WITH = "DOES_NOT_END_WITH",
    LIKE = "LIKE",
    NOT_LIKE = "NOT_LIKE",
    IS_ONE_OF = "IS_ONE_OF",
    IS_NOT_ONE_OF = "IS_NOT_ONE_OF",
    IS_ALL_OF = "IS_ALL_OF",
    IS_NOT_ALL_OF = "IS_NOT_ALL_OF",
    IS_SUBSET_OF = "IS_SUBSET_OF",
    IS_NOT_SUBSET_OF = "IS_NOT_SUBSET_OF",
    IS_IN_LIST = "IS_IN_LIST",
    IS_NOT_IN_LIST = "IS_NOT_IN_LIST",
    IS_NULL = "IS_NULL",
    IS_NOT_NULL = "IS_NOT_NULL"
}
interface IBaseUqliFilter {
    operator?: AggOperator | ValueOperator;
    metadata?: Record<string, any>;
}
interface IAggUqliFilter extends IBaseUqliFilter {
    operator: AggOperator;
    children: UqliFilter[];
}
interface IValueUqliFilter extends IBaseUqliFilter {
    operator?: ValueOperator;
    field?: string;
    value?: string;
    values?: string[];
}
declare type UqliFilter = IAggUqliFilter | IValueUqliFilter;
declare type FieldOption = {
    label: string;
    value: string;
    endAdornment?: IconOptionsType | React.ReactNode;
    secondaryText?: string;
};
declare type OperatorOption = {
    label: string;
    value: ValueOperator;
};
declare type InputType = 'input' | 'pillinput' | 'select' | 'multiselect' | 'autocomplete' | 'pillautocomplete' | 'customvalueselect';
declare type UqliValueInputProps = Partial<InputProps> | Partial<PillInputProps> | Partial<SelectProps> | Partial<MultiselectDropdownProps> | Partial<AutoCompleteProps> | Partial<PillAutoCompleteProps> | Partial<CustomValueSelectProps>;
declare type UqliValueConfig = {
    type?: InputType;
    valueOptions?: {
        value: string;
        label: string;
    }[];
    isCustomValue?: boolean;
    /** This tells list filter to:
     * - Not try and resolve "values matched" in list conditions
     * - Show var/val option for the input value which will drive "variables"
     */
    isTemplate?: boolean;
    InputProps?: UqliValueInputProps;
};
declare type ListCondition = {
    fieldId?: string;
    columnUuid?: string;
    fieldName?: string;
    values?: string[];
};
declare const NullOperators: ValueOperator[];
declare type ListConditionOptions = {
    getValues?: ({ listUuid, selectedField, search, }: {
        listUuid?: string;
        selectedField?: string;
        search?: string;
    }) => string[] | Promise<string[]>;
    getFields?: ({ listUuid, }: {
        listUuid: string;
    }) => {
        id: string;
        name: string;
    }[] | Promise<{
        id: string;
        name: string;
    }[]>;
    getMatchedListValues?: ({ listId, field, outerOperator, listConditions, }: {
        listId: string;
        field: string;
        outerOperator: string;
        listConditions: {
            fieldId: string;
            values: string[];
        }[];
    }) => string[] | Promise<string[]>;
};

interface UqliValueFilterProps extends BaseProps {
    classes?: {
        root?: string;
    };
    filter: IValueUqliFilter;
    fields: FieldOption[];
    fieldsLoading?: boolean;
    isOnlyChild: boolean;
    operatorsSelectProps?: SelectProps;
    fieldSelectProps?: SelectProps;
    listConditionOptions?: ListConditionOptions;
    isTemplate?: boolean;
    onChange: (update: IValueUqliFilter) => void;
    onDelete: () => void;
    onValidation?: ({ hasError }: {
        hasError: boolean;
        hasEmptyValues: boolean;
    }) => void;
    getOperators: (field?: string) => Promise<OperatorOption[]> | OperatorOption[];
    getValueConfig?: (filter: IValueUqliFilter) => Promise<UqliValueConfig> | UqliValueConfig;
}
declare const UqliValueFilter: React__default.FC<UqliValueFilterProps>;

interface UqliGroupFilterProps extends BaseProps {
    classes?: {
        root?: string;
    };
    filter: IAggUqliFilter;
    level?: number;
    fields: UqliValueFilterProps['fields'];
    fieldsLoading?: UqliValueFilterProps['fieldsLoading'];
    maxDepth?: number;
    aggOperators?: AggOperator[];
    childrenWithErrors?: string[];
    emptyChildren?: string[];
    headerText?: {
        before?: string;
        after?: string;
    };
    listConditionOptions?: UqliValueFilterProps['listConditionOptions'];
    addConditionButtonText?: string;
    fieldSelectProps?: SelectProps;
    operatorsSelectProps?: SelectProps;
    /** Shows var/val options and doesn't attempt to get real values from lists */
    isTemplate?: boolean;
    onChange: (update: IAggUqliFilter) => void;
    onValidation?: ({ hasError }: {
        hasError: boolean;
        hasEmptyValues: boolean;
    }) => void;
    getOperators: UqliValueFilterProps['getOperators'];
    getValueConfig?: UqliValueFilterProps['getValueConfig'];
    setChildrenWithErrors?: React__default.Dispatch<React__default.SetStateAction<string[]>>;
    setEmptyChildren?: React__default.Dispatch<React__default.SetStateAction<string[]>>;
}
declare const UqliGroupFilter: React__default.FC<UqliGroupFilterProps>;

interface UQLiBuilderProps extends BaseProps {
    /** overridable classes for root elem */
    classes?: {
        root?: string;
    };
    /** Class overrides that are passed to the UqliGroupFilter */
    GroupFilterClasses?: UqliGroupFilterProps['classes'];
    fieldSelectProps?: SelectProps;
    operatorsSelectProps?: SelectProps;
}
declare const UQLiBuilder: React__default.FC<UQLiBuilderProps & Omit<UqliGroupFilterProps, 'onDelete' | 'classes' | 'childrenWithErrors' | 'setChildrenWithErrors' | 'emptyChildren' | 'setEmptyChildren'>>;

interface DisplayUqliValueFilterProps extends BaseProps {
    classes?: {
        root?: string;
        fieldInputDisplay?: string;
        operatorInputDisplay?: string;
    };
    filter: IValueUqliFilter;
    isTemplate?: boolean;
    getValueConfig?: (filter: IValueUqliFilter) => UqliValueConfig;
    operators: OperatorOption[];
    getListFieldOptions?: (filter: IValueUqliFilter) => {
        value: string;
        label: string;
    }[] | Promise<{
        value: string;
        label: string;
    }[]>;
    getFieldOptions?: (filter: IValueUqliFilter) => {
        value: string;
        label: string;
    }[] | Promise<{
        value: string;
        label: string;
    }[]>;
    getOperators?: (field?: string) => OperatorOption[];
    fields?: FieldOption[];
}
declare const DisplayUqliValueFilter: React__default.FC<DisplayUqliValueFilterProps>;

interface DisplayUqliGroupFilterProps extends BaseProps {
    classes?: {
        root?: string;
        fieldInputDisplay?: string;
        operatorInputDisplay?: string;
    };
    filter: IAggUqliFilter;
    level?: number;
    operators: OperatorOption[];
    isTemplate?: boolean;
    getValueConfig?: DisplayUqliValueFilterProps['getValueConfig'];
    getOperators?: DisplayUqliValueFilterProps['getOperators'];
    getListFieldOptions?: (filter: IValueUqliFilter) => {
        value: string;
        label: string;
    }[] | Promise<{
        value: string;
        label: string;
    }[]>;
    getFieldOptions?: DisplayUqliValueFilterProps['getFieldOptions'];
    fields?: DisplayUqliValueFilterProps['fields'];
}
declare const DisplayUqliGroupFilter: React__default.FC<DisplayUqliGroupFilterProps>;

interface DisplayUQLiBuilderProps extends BaseProps {
    /** overridable classes for root elem */
    classes?: {
        root?: string;
    };
    /** Class overrides that are passed to the UqliGroupFilter */
    GroupFilterClasses?: DisplayUqliGroupFilterProps['classes'];
    /** Custom  message for when there is an empty filter */
    emptyConditionMessage?: string;
    /** Determines whether to display uqli or not */
    isEmpty?: boolean;
}
declare const DisplayUQLiBuilder: React__default.FC<DisplayUQLiBuilderProps & Omit<DisplayUqliGroupFilterProps, 'onDelete' | 'classes'>>;

interface DisplayEmptyConditionProps {
    message?: string;
}
declare const DisplayEmptyCondition: ({ message }: DisplayEmptyConditionProps) => JSX.Element;

interface SnapshotUQLiBuilder {
    /** UQLi filter that is being rendered */
    filter: IAggUqliFilter | IValueUqliFilter;
    /** Top level operator in a child */
    topLevelOperator?: ValueOperator | AggOperator | 'unknown';
    /** testid for snapshot  */
    testId?: string;
    /** Current level of the uqli */
    level?: number;
    /** Function used to grab the correct operators */
    getOperators: (field?: string) => OperatorOption[];
    /** Function to get value type that will display value or values */
    getValueConfig: (filter: IValueUqliFilter) => UqliValueConfig;
    /** List of fields in order to display the correct label to user */
    fields?: FieldOption[];
}
declare const SnapshotUQLiBuilder: ({ filter, topLevelOperator, level, getOperators, getValueConfig, testId, fields, }: SnapshotUQLiBuilder) => JSX.Element;

declare const blankValueUqliFilter: IValueUqliFilter;
declare const blankAggUqliFilter: IAggUqliFilter;
declare const listToValOperator: {
    IS_IN_LIST: ValueOperator;
    IS_NOT_IN_LIST: ValueOperator;
};
declare const valToListOperator: {
    IN: ValueOperator;
    NOT_IN: ValueOperator;
};
declare const isListOp: (operator?: ValueOperator) => boolean;
declare const NonVariableOps: ValueOperator[];
declare const isVariableOp: (operator?: ValueOperator) => boolean;
declare const addGroupToFilter: (filter: IAggUqliFilter) => {
    children: UqliFilter[];
    operator: AggOperator;
    metadata?: Record<string, any> | undefined;
};
declare const addValueFilterToFilter: (filter: IAggUqliFilter) => {
    children: UqliFilter[];
    operator: AggOperator;
    metadata?: Record<string, any> | undefined;
};
declare const makeEmptyListFilter: (listUuid?: string, listName?: string) => {
    value: undefined;
    values: never[];
    metadata: {
        isList: boolean;
        listConditions: {
            field: string;
            value: string;
            values: never[];
        }[];
        listOuterOperator: AggOperator;
        listUuid: string | undefined;
        listName: string | undefined;
    };
};
declare const isValueFilter: (uqli: any) => uqli is IValueUqliFilter;
declare const isAggFilter: (uqli: any) => uqli is IAggUqliFilter;
/*********************************
 *********** VALIDATORS ***********
 **********************************/
declare const validateField: (pristine: boolean, field?: string, fields?: FieldOption[]) => boolean;
declare const validateOperator: (pristine: boolean, operator?: ValueOperator) => boolean;
declare const validateValue: (pristine: boolean, filter: IValueUqliFilter, isTemplate?: boolean) => boolean;
declare const validateFilterForUI: (pristine: {
    field: boolean;
    operator: boolean;
    value: boolean;
}, filter: IValueUqliFilter, fields?: FieldOption[], isTemplate?: boolean) => {
    valid: boolean;
    empty: boolean;
};
declare const validateUqli: (uqli: UqliFilter) => any;

interface Styles {
    [key: string]: string;
}
declare const combineStyles: (classOverrides: Styles | undefined, componentStyles: Styles) => {
    [key: string]: string;
};

declare const keyPressWasEnterOrSpace: (e: React.KeyboardEvent) => boolean;
declare const keyPressWasEnter: (e: React.KeyboardEvent) => boolean;

declare const events_d_keyPressWasEnterOrSpace: typeof keyPressWasEnterOrSpace;
declare const events_d_keyPressWasEnter: typeof keyPressWasEnter;
declare namespace events_d {
  export {
    events_d_keyPressWasEnterOrSpace as keyPressWasEnterOrSpace,
    events_d_keyPressWasEnter as keyPressWasEnter,
  };
}

declare type MakeTestIdFunctionType = (postfix?: string) => string;
declare const getMakeTestIdFunc: (componentName: string, testId?: string) => MakeTestIdFunctionType;

declare type FormatOptions = {
    convertTimeZone?: boolean;
    locale?: Locale;
    timeZone?: string;
};
declare const formatISO: (isoString: string, formatString: string, options?: FormatOptions) => string | null;
declare type Accuracy = 'day' | 'month' | 'year';
declare const dateTimeIsInRange: (date: Date, min?: Date, max?: Date, accuracy?: Accuracy) => boolean;
declare const useGetRelativeTime: ({ timezone }: {
    timezone: any;
}) => (dateStr: any) => {
    timeAgoStr: string;
    fullTimeStr: string;
};

/**
 * this allows you to pass in data to a string. For example you could have
 * const stringToInterpolate = Matt takes $1 apples from Joe and Joe now only has $2
 * const interpolatedString = interpolateString(stringToInterpolate, [2, 5]);
 * Matt takes 2 apples from Joe, and Joe now only has 5
 * @param {string} str - The whole string you are wanting to build.
 * @param {string} options - The options array you want to loop through
 * @param {boolean} localizeString - Should pass number through toLocaleString
 * @return {string} The interpolated string.
 */
declare function interpolateString(str: string, options: string[] | number[], localizeString?: boolean): string;

declare function compareDates(a: {
    [key: string]: any;
}, b: {
    [key: string]: any;
}, key: string, isDescending: boolean): number;
declare function compareBooleanOrNumbers(a: {
    [key: string]: any;
}, b: {
    [key: string]: any;
}, key: string, isDescending: boolean): number;
declare function compare(a: {
    [key: string]: any;
}, b: {
    [key: string]: any;
}, key: string, isDescending: boolean): any;

declare function onDOMBeforeInput(e: InputEvent, editor: ReactEditor & HistoryEditor & BaseEditor, maxLength?: number, setCharCount?: (charCount: number) => void): void;

declare function serializeString(value?: Descendant[]): string;

declare function debounce(func: (...args: unknown[]) => unknown, time?: number): () => void;

declare const isReactElement: (arg: any) => arg is React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>>;

declare const VerticalTimeline: React__default.FC<BaseProps>;

interface VerticalTimelineItemProps {
    children?: React__default.ReactNode;
    classes?: {
        root?: string;
        head?: string;
        tail?: string;
        content?: string;
    };
}
declare const VerticalTimelineItem: React__default.FC<VerticalTimelineItemProps>;

declare enum SortDirection {
    asc = "asc",
    desc = "desc",
    unsorted = "unsorted"
}
interface DataTableHeaderProps<T> {
    /** This is to be able to find a specific column by referencing by a key */
    lookupKey: string;
    /** Typically an enum to determine what column to pass back to sort on */
    columnHeaderSortProp?: T;
    /** Helper props to determine what arrows to display as active */
    sortProps?: {
        isSortingByColumn: boolean;
        sortDirection: SortDirection;
    };
    /** Typically a string to display */
    label?: React__default.ReactNode;
    /** Function gets called when a user clicks on a column */
    onSortChange?: (columnToSort: T, isAsc: boolean) => void;
    /** Allows the parent to determine how data is displayed */
    CellRenderer?: (value: any) => React__default.ReactNode;
    /** Controls the width of a column */
    width?: string | number;
    /** If this is defined it will cause an info icon to display with more info about the specific column */
    info?: string;
    /** Allows you to disable onClick events */
    disabled?: boolean;
    /** overrides for certain styles */
    classes?: {
        header?: string;
        cell?: string;
    };
    /** testIds that can be passed into this component */
    testIds?: {
        root?: string;
        infoIconButton?: string;
        infoIconWrapper?: string;
    };
}
declare const DataTableHeader: <T>({ columnHeaderSortProp, label, onSortChange, sortProps, lookupKey, info, testIds, disabled, }: DataTableHeaderProps<T>) => JSX.Element;

interface PaginationProps {
    /** How many rows per page */
    numberOfRowsPerPage: number;
    /** All number of row options to choose from */
    numberOfRowsOptions?: number[];
    /** what is the current row selected */
    currentRow: number;
    /** total amount of rows */
    totalRows: number;
    /** what page is the user on */
    currentPage: number;
    /** total amount of pages of results */
    totalPages: number;
    /** should change what subset of data that is shown or other pagination props */
    onChange: (update: Partial<PaginationProps>) => void;
    /** Pagination strings to determine what is displayed in the pagination section */
    paginationStrings?: {
        itemsPerPage?: string;
        itemOfTotal?: string;
        itemOfPages?: string;
    };
    /** Disable pagination controls */
    disabled?: boolean;
    variant?: 'list' | 'standard';
    /** Hide page dropdown and options */
    hidePageOptions?: boolean;
}
interface DataTablePaginationProps extends PaginationProps {
    testIds?: {
        previousButton?: string;
        nextButton?: string;
        paginationControlsRoot?: string;
        pageSizeDropdown?: {
            menuRoot?: string;
            select?: string;
        };
        pageNumberDropdown?: {
            menuRoot?: string;
            select?: string;
        };
    };
}
declare const DataTablePagination: ({ numberOfRowsPerPage, numberOfRowsOptions, currentPage, totalPages, totalRows, onChange, testIds, paginationStrings, disabled, variant, hidePageOptions, }: DataTablePaginationProps) => JSX.Element;

interface DataTableRowDerivedProps<T> extends DataTableRowProps<T> {
    /** data to display */
    data: Record<string, any>;
    /** is variant of table a list  */
    isListTable: boolean;
    rowKey: string;
}
interface DataTableRowProps<T> extends BaseProps {
    /** is the row selected */
    isSelected?: boolean;
    /** is checkbox on the row selected */
    isCheckboxSelected?: boolean;
    /** should display a checkbox */
    bulkActionsEnabled?: boolean;
    /** columns that are passed to the row */
    columns?: DataTableHeaderProps<T>[];
    /** function to call when row is clicked on */
    onClick?: (row: Record<string, any>) => void;
    /** callback for when row checkbox is clicked */
    onCheckedRow?: (row: Record<string, any>, checked: boolean) => void;
    /** grid layout is what we use to determine width of a specific column */
    gridLayout?: string;
    /** is collapsed */
    isExpanded?: boolean;
    /** function to call onExpanded */
    onExpanded?: (id: string) => void;
    /** Override classes */
    classOverrides?: {
        wrapper?: string;
    };
    /** test id that is passed in for the row */
    testId?: string;
    /** will need to display extra column when has expanders is true */
    hasExpanders?: boolean;
    /** sets the hovering row, so you can style any expansion content */
    setIsHoveredRow?: (rowKey: string) => void;
    /** sets isHovered, for styling purposes */
    isHovered?: boolean;
    /** can we drag to reorder rows (note - should not be used with sort) */
    draggable?: boolean;
    onDragStart?: (e: React__default.DragEvent<HTMLTableRowElement>) => void;
    onDragOver?: (e: React__default.DragEvent<HTMLTableRowElement>) => void;
    onDragEnd?: () => void;
}
declare const DataTableRow: <T>({ isSelected, isCheckboxSelected, bulkActionsEnabled, onClick, onCheckedRow, data, isListTable: listTable, columns, gridLayout, testId, classOverrides, isExpanded, rowKey, hasExpanders, onExpanded, setIsHoveredRow, isHovered, draggable, onDragStart, onDragOver, onDragEnd, }: DataTableRowDerivedProps<T>) => JSX.Element;

interface DataTableProps<T, D = any> {
    /** Data table columns which can handle style or rendering */
    columns: DataTableHeaderProps<T>[];
    /** Props for Data table rows */
    rowProps?: DataTableRowProps<T>[];
    /** Data array to map into each row */
    data: D[];
    /** Should Select all checkbox be seen */
    showSelectAll?: boolean;
    /** Fragment that renders on the right side of the bulk selection bar */
    bulkActions?: React__default.ReactNode;
    /** Selected row ids */
    selectedIds?: string[];
    /** all checkboxes are selected */
    allCheckboxesSelected?: boolean;
    /** Handles sorting by column */
    onSortChange?: (columnToChangeTo: T, isAsc: boolean) => void;
    /** Selects or unselects row that is passed in */
    onSelectRow?: (row: any) => void;
    /** callback for when row checkbox is clicked */
    onCheckedRow?: (row: any, checked: boolean) => void;
    /** Called when Select all checkbox is clicked */
    onSelectAll?: () => void;
    /** Called when deselect all checkbox is clicked */
    onDeselectAll?: () => void;
    /** Have various styling built around variants, active table is a specific style, standard is to allow multiple select while list is single select, active is deprecated and if used will default to list */
    variant?: 'standard' | 'list' | 'active';
    /** These are the defaults passed in to determine what column is sorted and in what direction */
    sortProps?: {
        columnToSortOn: T;
        sortDirection: SortDirection;
    };
    /** pagination props for handling pagination */
    paginationProps?: PaginationProps;
    /** is data table loading */
    loading?: boolean;
    /** error message */
    errorMessage?: string;
    /** can we drag to reorder rows (note - should not be used with sort) */
    draggable?: boolean;
    onDragStart?: (index: number, e: React__default.DragEvent<HTMLTableRowElement>) => void;
    onDragOver?: (index: number, e: React__default.DragEvent<HTMLTableRowElement>) => void;
    onDragEnd?: (index: number) => void;
    /** Allows you to set your own key to whatever key you want based on the row */
    getRowKey?: (row: any) => string | number;
    /** Expandable Row Function */
    renderExpandableContent?: (row: any) => React__default.ReactNode;
    /** List of expanded rows */
    expanded?: string[];
    /** onChange expanded rows */
    onChangeExpanded?: (update: string[]) => void;
    /** Class overrides for changing styling of certain elements */
    classOverrides?: {
        wrapper?: string;
        active?: string;
        tableHeaderRow?: string;
        tableBody?: string;
        tableHead?: string;
        tableClass?: string;
        overlayClassOverrides?: {
            root?: string;
            errorMessage?: string;
        };
    };
    /** these allow overriding test ids if you want to pass your own in as a variable */
    testIds?: {
        tableBody?: string;
        tableHeaderRow?: string;
        wrapper?: string;
        pagination?: {
            previousButton?: string;
            nextButton?: string;
            paginationControlsRoot?: string;
            pageSizeDropdown?: {
                menuRoot?: string;
                select?: string;
            };
            pageNumberDropdown?: {
                menuRoot?: string;
                select?: string;
            };
        };
    };
}
declare const DataTable: <T>({ columns, rowProps, sortProps, draggable, paginationProps, showSelectAll, bulkActions, selectedIds, onSortChange, onSelectRow, onCheckedRow, onSelectAll, onDeselectAll, classOverrides, testIds, variant, loading, errorMessage, data, allCheckboxesSelected, getRowKey, expanded, onChangeExpanded, renderExpandableContent, onDragStart, onDragOver, onDragEnd, }: DataTableProps<T, any>) => JSX.Element;

interface DataTableCellProps extends BaseProps {
    /** children */
    children: React__default.ReactNode;
    classOverrides?: {
        cell?: string;
    };
}
declare const DataTableCell: React__default.ForwardRefExoticComponent<DataTableCellProps & React__default.RefAttributes<HTMLTableCellElement>>;

declare type DraggableDataTableProps<T, D> = Omit<DataTableProps<T, D>, 'onSortChange' | 'sortProps'> & {
    onReorder: (reorderedData: D[]) => void;
};
declare const DraggableDataTable: <T, D>(tableProps: DraggableDataTableProps<T, D>) => JSX.Element;

interface SortOrderArrowsProps extends BaseProps {
    /** Is the column selected to be sorted on */
    isActive: boolean;
    /** Is the direction being passed in Desc */
    isDescending: boolean;
    /** Should we allow a user to click on the sort by ascending */
    isAscClickable: boolean;
    /** Should we allow a user to click on the sort by descending */
    isDescClickable: boolean;
    /** Disabled icons */
    disabled?: boolean;
    /** Test Id */
    testIdPreString?: string;
    /** Handler for clicking a sort order arrow */
    onClickArrow?: (dir: SortDirection) => void;
}
declare function SortOrderArrows({ isActive, isDescending, isAscClickable, isDescClickable, disabled, testIdPreString, className, onClickArrow, }: SortOrderArrowsProps): JSX.Element;

declare enum OverlayType {
    error = 0,
    loading = 1,
    warning = 2,
    empty = 3
}
interface OverlayProps {
    type: OverlayType;
    errorMessage?: string;
    children?: React__default.ReactNode;
    anchorRef: any | null;
    classOverrides?: {
        loadingSpinner?: string;
        root?: string;
    };
    testIds?: {
        root?: string;
        loadingSpinner?: {
            icon?: string;
            root?: string;
        };
        emptyState?: {
            message?: string;
            subText?: string;
            icon?: string;
            root?: string;
        };
    };
}
declare const Overlay: React__default.FC<OverlayProps>;

declare type IComment = {
    name?: string;
    createdAt: Date;
    value: string;
    details?: string;
};
interface CommentProps extends BaseProps {
    comment: IComment;
    customerTimezone?: string;
    expandableLines?: number;
    shouldHideInitials?: boolean;
    usersUUID?: string;
    classes?: {
        root?: string;
        detailsSection?: string;
        tagged?: string;
        isUser?: string;
    };
}
declare const Comment: React__default.FC<CommentProps>;

declare type BannerStatus = 'success' | 'warning' | 'caution' | 'error' | 'informational';
interface BannerProps extends BaseProps {
    status: BannerStatus;
    hideIcon?: boolean;
    children?: React__default.ReactNode;
    onClose?: () => void;
}
declare const Banner: ({ status, hideIcon, className, onClose, children, testId }: BannerProps) => JSX.Element;

declare type CodeEditorOnMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => void;
interface CodeEditorProps extends Omit<EditorProps, 'onMount' | 'options' | 'theme'> {
    /** A fuction that is called when the editor is mounted */
    onMount?: CodeEditorOnMount;
    /** An object of monaco editor options */
    options?: editor.IStandaloneEditorConstructionOptions;
}
declare const CodeEditor: ({ onMount, options, ...monacoProps }: CodeEditorProps) => JSX.Element;

interface SidePanelProps extends DrawerProps {
    onClose: (e: React__default.MouseEvent | React__default.KeyboardEvent, reason: 'backdropClick' | 'escapeKeyDown' | 'closeBtn') => void;
    size?: 'small' | 'medium' | 'large';
    testId?: string;
}
declare const SidePanel: React__default.FC<SidePanelProps>;

interface SidePanelFooterProps extends BaseProps {
    footerHeight?: number;
    hideFooterSeparation?: boolean;
    children?: React__default.ReactNode;
}
declare const SidePanelFooter: ({ footerHeight, hideFooterSeparation, children, className, testId, }: SidePanelFooterProps) => JSX.Element;

interface SidePanelHeaderProps extends BaseProps {
    children?: React__default.ReactNode;
    fullWidth?: boolean;
}
declare const SidePanelHeader: ({ children, className, testId, fullWidth }: SidePanelHeaderProps) => JSX.Element;

interface SidePanelContentProps extends BaseProps {
    children?: React__default.ReactNode;
}
declare const SidePanelContent: ({ children, className, testId }: SidePanelContentProps) => JSX.Element;

interface SidePanelTabsProps extends BaseProps {
    tabs: TabGroupProps['options'];
    onTabChange?: TabGroupProps['onSelect'];
    selectedTab?: TabGroupProps['selected'];
    TabGroupProps?: TabGroupProps;
}
declare const SidePanelTabs: ({ className, tabs, onTabChange, selectedTab, TabGroupProps, testId, }: SidePanelTabsProps) => JSX.Element;

interface SidePanelControlsProps extends BaseProps {
    footerHeight?: number;
    displayFooterSeparation?: boolean;
    children?: React__default.ReactNode;
}
declare const SidePanelControls: ({ children, className, testId }: SidePanelControlsProps) => JSX.Element;

declare type SeverityType = 'critical' | 'high' | 'medium' | 'low' | 'informational' | 'unassessed';
interface SeverityBannerProps extends BaseProps {
    severityType: 'critical' | 'high' | 'medium' | 'low' | 'informational' | 'unassessed';
    children: React__default.ReactNode;
}
declare const SeverityBanner: ({ severityType, children, className }: SeverityBannerProps) => JSX.Element;
declare const useSeverityBannerType: () => SeverityType;

interface SeverityBannerTitleProps {
    subtitle?: string;
    title?: string;
}
declare const SeverityBannerTitle: ({ subtitle, title }: SeverityBannerTitleProps) => JSX.Element;

interface SeverityBannerHeaderProps extends BaseProps {
    children: React__default.ReactNode;
}
declare const SeverityBannerHeader: ({ children, className }: SeverityBannerHeaderProps) => JSX.Element;

declare const SeverityBannerBadges: () => JSX.Element;

declare const useDebounceState: <Type>(initialValue: Type, delay: number) => [value: Type, updateValue: Dispatch<SetStateAction<Type>>, debouncedValue: Type];

interface DataMessageHandlerProps extends BaseProps {
    /** The state that the message handler will show */
    state: 'forbidden' | 'error' | 'empty' | 'loading';
    /** Children to override existing messages. Should be one of: `ForbiddenMessage`, `ErrorMessage`, `EmptyMessage`, and `LoadingMessage`. */
    children?: React__default.ReactNode;
}
declare const DataMessageHandler: ({ state, children, testId, className }: DataMessageHandlerProps) => JSX.Element;

declare const DataMessageHandlerTitle: ({ children, classes: classOverrides, testId, }: {
    children: React__default.ReactNode;
    classes?: {
        root: string;
    } | undefined;
    testId?: string | undefined;
}) => JSX.Element;
declare const DataMessageHandlerSubtitle: ({ children, classes: classOverrides, testId, }: {
    children: React__default.ReactNode;
    classes?: {
        root: string;
    } | undefined;
    testId?: string | undefined;
}) => JSX.Element;
declare const DataMessageHandlerImage: ({ children, testId }: {
    children: React__default.ReactNode;
    testId?: string | undefined;
}) => JSX.Element;

declare const ForbiddenMessage: ({ children }: {
    children: React__default.ReactNode;
}) => JSX.Element;
declare const ErrorMessage: ({ children }: {
    children: React__default.ReactNode;
}) => JSX.Element;
declare const LoadingMessage: ({ children }: {
    children: React__default.ReactNode;
}) => JSX.Element;
declare const EmptyMessage: ({ children }: {
    children: React__default.ReactNode;
}) => JSX.Element;

declare const DataMessageHandlerEmptyImage: () => JSX.Element;

declare const DataHandlerErrorImage: () => JSX.Element;

declare const DataMessageHandlerForbiddenImage: () => JSX.Element;

export { Accordion, AccordionDetails, AccordionDetailsProps, AccordionProps, AccordionSummary, AccordionSummaryProps, AddComment, AddCommentProps, Adornment, AdornmentProps, AdornmentTooltipProps, AggOperator, AllowedChartOptions, AllowedPlotOptions, AutoComplete, AutoCompleteMenu, AutoCompleteMenuProps, AutoCompleteProps, Badge, BadgeProps, BadgeType, Banner, BannerProps, BannerStatus, BaseChart, BlockHeatMap, BlockHeatMapDataObject, BlockHeatMapProps, BorderedTab, Breadcrumbs, BreadcrumbsProps, Button, ButtonProps, CappedList, CappedListProps, Checkbox, CheckboxFilter, CheckboxProps, CloseReason, CodeEditor, CodeEditorOnMount, Comment, CommentProps, ConfirmContextProps, ConfirmDialogOptions, ConfirmDialogProvider, ContextMenu, ContextMenuProps, Crumb, CustomFilter, CustomValueInputType, CustomValueSelect, CustomValueSelectProps, DarkTheme, DataHandlerErrorImage, DataHandlingToasts, DataHandlingToastsProps, DataMessageHandler, DataMessageHandlerEmptyImage, DataMessageHandlerForbiddenImage, DataMessageHandlerImage, DataMessageHandlerSubtitle, DataMessageHandlerTitle, DataTable, DataTableCell, DataTableCellProps, DataTableHeader, DataTableHeaderProps, DataTablePagination, DataTablePaginationProps, DataTableProps, DataTableRow, DataTableRowProps, DateInput, DateTimeInput, Dialog, DialogContent, DialogContentProps, DialogFooter, DialogFooterProps, DialogHeader, DialogHeaderProps, DialogProps, DisplayEmptyCondition, DisplayUQLiBuilder, DisplayUQLiBuilderProps, DisplayUqliGroupFilter, DisplayUqliGroupFilterProps, DisplayUqliValueFilter, DisplayUqliValueFilterProps, DonutChart, DonutChartProps, DraggableDataTable, EditableText, EditableTextProps, EmptyMessage, EmptyState, EmptyStateProps, ErrorBoundary, ErrorMessage, ErrorToast, ExpandableList, ExpandableListProps, ExpandableText, ExpandableTextProps, ExternalLink, ExternalLinkProps, FancyLabel, FancyLabelProps, FieldOption, FileInput, FileInputProps, Filter, FilterBase, FilterInputs, FilterInputsProps, FilterPill, FilterPillList, FilterPillListProps, FilterRef, Filters, FiltersProps, FiltersToolbar, FiltersToolbarClasses, FiltersToolbarProps, ForbiddenMessage, FormatOptions, FullIconOptions, FullTooltipProps, FullscreenImageDialog, IAggUqliFilter, IBaseUqliFilter, IComment, IValueUqliFilter, Icon, IconBadge, IconBadgeProps, IconButton, IconButtonProps, IconNamesEnum, IconOptions, IconOptionsType, Input, InputBase, InputBaseProps, InputGroup, InputGroupProps, InputProps, InputType, InternalLink, InternalLinkProps, LegacyDarkTheme, LegacyTheme, LineChart, LineChartData, LineChartProps, LinkButton, LinkButtonProps, LinkableCrumb, ListCondition, ListConditionOptions, ListFilter, LoadingImage, LoadingImageProps, LoadingMessage, LoadingSpinner, LoadingSpinnerProps, LoadingToast, MapPoint, Menu, MenuProps, MessageDefaults, MultiselectDropdown, MultiselectDropdownOptionProps, MultiselectDropdownProps, NonVariableOps, NullOperators, NumericInput, NumericInputChangeType, NumericInputProps, OccurencesChart, OccurencesChartProps, OperatorOption, OptionMenu, OptionMenuItem, OptionMenuItemProps, OptionMenuItemSectionProps, OptionMenuProps, OptionsStatus, OverflowingPillInput, OverflowingPillInputProps, OverflowingText, OverflowingTextProps, Overlay, OverlayProps, OverlayType, PageHeader, PageHeaderProps, PaginationProps, Panel, Pill, PillAutoComplete, PillAutoCompleteProps, PillInput, PillInputProps, PillProps, PopoverWrapper, PopoverWrapperProps, ProgressBar, ProgressBarProps, RadioButton, RadioButtonProps, RadioFilter, Range, RangeFilter, RangeInput, RangeInputProps, RichTextEditor, RichTextEditorProps, Select, SelectOptionProps, SelectProps, SeriesChart, SeriesChartProps, SeverityBanner, SeverityBannerBadges, SeverityBannerHeader, SeverityBannerHeaderProps, SeverityBannerProps, SeverityBannerTitle, SeverityBannerTitleProps, SeverityType, SidePanel, SidePanelContent, SidePanelContentProps, SidePanelControls, SidePanelControlsProps, SidePanelFooter, SidePanelFooterProps, SidePanelHeader, SidePanelHeaderProps, SidePanelProps, SidePanelTabs, SidePanelTabsProps, Skeleton, SnapshotUQLiBuilder, SortDirection, SortOrderArrows, SortOrderArrowsProps, SortablePillGroup, SortablePillGroupProps, StartEndAdornmentProps, StopsColor, SuccessToast, Switch, SwitchProps, Tab, TabGroup, TabGroupProps, TabOption, TargetContent, TargetContentProps, TextArea, TextFilter, TextLink, TextLinkProps, Theme, TimeInput, Timestamp, TimestampFormatStrings, TimestampFormatStringsNoTime, TimestampProps, Toast, ToastProps, ToastType, ToggleButton, ToggleButtonGroup, ToggleButtonGroupProps, ToggleButtonProps, Tooltip, TooltipProps, UQLiBuilder, UQLiBuilderProps, UqliFilter, UqliGroupFilter, UqliGroupFilterProps, UqliValueConfig, UqliValueFilter, UqliValueFilterProps, UqliValueInputProps, ValueOperator, VerticalTimeline, VerticalTimelineItem, VerticalTimelineItemProps, WorldMap, WorldMapProps, addAlphaValueToHexColor, addGroupToFilter, addValueFilterToFilter, blankAggUqliFilter, blankValueUqliFilter, combineStyles, compare, compareBooleanOrNumbers, compareDates, convertIconName, dateTimeIsInRange, debounce, emptyInitialValue, events_d as eventUtils, formatISO, getAdornmentClickHandler, getArrowPositionMap, getMakeTestIdFunc, grabIconNameIfIcon, iconNameDefaults, interpolateString, isAggFilter, isListOp, isReactElement, isValueFilter, isVariableOp, listToValOperator, makeEmptyListFilter, onDOMBeforeInput, serializeString, statusBackgrounds, useConfirm, useDebounceState, useGetRelativeTime, useIsOverflowing, useObserveElementWidth, useSeverityBannerType, valToListOperator, validateField, validateFilterForUI, validateOperator, validateUqli, validateValue };
