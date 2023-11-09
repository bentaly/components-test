export interface LegacyTheme {
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
