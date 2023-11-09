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
export interface Theme {
    color: ThemeColors;
    spacing: (...args: (number | string)[]) => string;
    typographyStyles: ThemeTypography;
}
export {};
