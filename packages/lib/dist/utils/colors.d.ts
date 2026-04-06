declare function getPrimaryShadeColor(color: string): string;
declare function getBackgroundColor(color?: string | undefined | null, darkenAmount?: number, lightenAmount?: number): string;
declare const getDominantColorFromImageUrl: (imageUrl: string, fallbackDominantColor?: string, fallbackBackgroundColor?: string) => Promise<{
    dominant: string;
    background: string;
}>;

export { getBackgroundColor, getDominantColorFromImageUrl, getPrimaryShadeColor };
