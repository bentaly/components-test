import { LegacyTheme } from '../theme';
export declare const getSize: (size: string) => number | 'tiny' | 'standard' | 'large';
/**
 * Helper function to set background color for button
 * @param variant button variant
 * @param theme theme to pass in
 * @returns rgba value of color or transparent or by default undefined
 */
export declare const setBackgroundColorFromVariant: (variant: string, theme: LegacyTheme) => string | undefined;
/**
 * Helper function to set border color
 * @param variant button variant
 * @param theme theme to pass in
 * @returns borderColor based on button variant in rgba
 */
export declare const setBorderColorFromVariant: (variant: string, theme: LegacyTheme) => string | undefined;
/**
 * Helper function to set opaque
 * @param variant button variant
 * @returns opaque string
 */
