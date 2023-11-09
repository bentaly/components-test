export interface CommonStyles {
    h1: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
        color: string;
    };
    h2: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
        color: string;
    };
    h3: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
        color: string;
    };
    h4: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
        color: string;
    };
    h5: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    button: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    body: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    label: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    caption: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    menuSectionHead: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    chartData: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    chartBody: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    chartCaption: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
    radioLabel: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        fontStyle: string;
        lineHeight: string;
        letterSpacing: string;
    };
    input: {
        fontFamily: string;
        fontSize: number;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
    };
    panel: {
        fontFamily: string;
        fontSize: number;
        fontStyle: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
    };
    tab: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: number;
        letterSpacing: string;
        lineHeight: string;
    };
}
interface TextStyles {
    color: string;
    textAlign: string;
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    letterSpacing: string;
    lineHeight: string;
}
export interface Typography extends CommonStyles {
    body1: CommonStyles['body'];
    H1_White_Left: TextStyles;
    H2_White_Left: TextStyles;
    H3_White_Center: TextStyles;
    H3_White_Left: TextStyles;
    H3_White_Right: TextStyles;
    H4_White_Left: TextStyles;
    H4_Blue10_Left: TextStyles;
    H5_Blue20_Left: TextStyles;
    H5_White_Left: TextStyles;
    H5_White_Center: TextStyles;
    Button_Blue60_Center: TextStyles;
    Button_Blue20_Left: TextStyles;
    Button_Blue10_Left: TextStyles;
    Button_Blue10_Center: TextStyles;
    Button_Blue20_Center: TextStyles;
    Button_White_Center: TextStyles;
    Body_Blue10_Center: TextStyles;
    Body_Blue10_Left: TextStyles;
    Body_Blue10_Right: TextStyles;
    Body_Blue20_Center: TextStyles;
    Body_Blue20_Left: TextStyles;
    Body_Blue20_Right: TextStyles;
    Body_White_Center: TextStyles;
    Body_White_Left: TextStyles;
    Body_White_Right: TextStyles;
    Body_Green50_Left: TextStyles;
    Body_Red50_Left: TextStyles;
    Label_Blue10_Left: TextStyles;
    Label_Blue20_Left: TextStyles;
    Label_Green50_Left: TextStyles;
    Label_White_Left: TextStyles;
    Radio_Label_White_Left: TextStyles;
    Caption_Blue10_Center: TextStyles;
    Caption_Blue20_Center: TextStyles;
    Caption_Blue20_Left: TextStyles;
    Caption_Blue20_Right: TextStyles;
    Caption_White_Left: TextStyles;
    Caption_Red_Left: TextStyles;
    Menu_Section_Head_Blue20_Left: TextStyles;
    ChartData_White_Center: TextStyles;
    ChartData_White_Left: TextStyles;
    ChartData_White_Right: TextStyles;
    ChartBody_Blue20_Center: TextStyles;
    ChartBody_Blue20_Left: TextStyles;
    ChartBody_Blue20_Right: TextStyles;
    ChartCaption_Blue20_Center: TextStyles;
    ChartCaption_Blue20_Left: TextStyles;
    ChartCaption_Blue20_Right: TextStyles;
    Input_White_Left: TextStyles;
    Input_Blue20_Left: TextStyles;
    Panel_White_Left: TextStyles;
    Tab_Blue20_Left: TextStyles;
    Tab_Blue20_Center: TextStyles;
}
export {};
