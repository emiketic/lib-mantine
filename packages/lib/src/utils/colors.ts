import chroma from 'chroma-js';
import { darken, isLightColor, lighten } from '@mantine/core';

export function getPrimaryShadeColor(color: string): string {
  return chroma(color).set('hsl.s', 1).set('hsl.l', 0.55).hex();
}

export function getBackgroundColor(
  color: string | undefined | null = '#ffffff',
  darkenAmount = 0.3,
  lightenAmount = 0.8,
): string {
  if (!color) return '#000000';
  const darkerColor = darken(getPrimaryShadeColor(color), darkenAmount);
  const lightColor = lighten(getPrimaryShadeColor(color), lightenAmount);
  const inputLuminance = chroma(color).luminance();

  if (inputLuminance > 0.9) return darkerColor;
  if (inputLuminance < 0.15) return lightColor;

  const contrastLight = chroma.contrast(color, lightColor);
  const contrastDark = chroma.contrast(color, darkerColor);
  return contrastLight > contrastDark ? lightColor : darkerColor;
}

function loadImage(imageUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.referrerPolicy = 'no-referrer';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Could not load image for color extraction'));
    image.src = imageUrl;
  });
}

function quantizeChannel(value: number): number {
  return Math.round(value / 16) * 16;
}

function extractQuantizedPixels(imageData: Uint8ClampedArray): string[] {
  const colors: string[] = [];
  for (let index = 0; index < imageData.length; index += 4) {
    const alpha = imageData[index + 3] ?? 0;
    if (alpha < 16) continue;
    const red = quantizeChannel(imageData[index] ?? 0);
    const green = quantizeChannel(imageData[index + 1] ?? 0);
    const blue = quantizeChannel(imageData[index + 2] ?? 0);
    colors.push(chroma(red, green, blue).hex());
  }
  return colors;
}

function extractEdgeQuantizedPixels(
  imageData: Uint8ClampedArray,
  width: number,
  height: number,
): string[] {
  const edgeColors: string[] = [];
  const edgeThickness = Math.max(1, Math.floor(Math.min(width, height) * 0.1));

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const isEdge =
        x < edgeThickness ||
        x >= width - edgeThickness ||
        y < edgeThickness ||
        y >= height - edgeThickness;
      if (!isEdge) continue;

      const pixelIndex = (y * width + x) * 4;
      const alpha = imageData[pixelIndex + 3] ?? 0;
      if (alpha < 16) continue;

      const red = quantizeChannel(imageData[pixelIndex] ?? 0);
      const green = quantizeChannel(imageData[pixelIndex + 1] ?? 0);
      const blue = quantizeChannel(imageData[pixelIndex + 2] ?? 0);
      edgeColors.push(chroma(red, green, blue).hex());
    }
  }
  return edgeColors;
}

function getMostFrequentColor(colors: string[]): string | null {
  if (colors.length === 0) return null;
  const frequencies = new Map<string, number>();
  for (const color of colors) {
    frequencies.set(color, (frequencies.get(color) ?? 0) + 1);
  }
  let selectedColor: string | null = null;
  let selectedCount = 0;
  for (const [color, count] of frequencies.entries()) {
    if (count > selectedCount) {
      selectedColor = color;
      selectedCount = count;
    }
  }
  return selectedColor;
}

export const getDominantColorFromImageUrl = async (
  imageUrl: string,
  fallbackDominantColor = '#000000',
  fallbackBackgroundColor = '#ffffff',
): Promise<{ dominant: string; background: string }> => {
  try {
    const image = await loadImage(imageUrl);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });

    if (!context) {
      return { dominant: fallbackDominantColor, background: fallbackBackgroundColor };
    }

    const maxSize = 96;
    const ratio = Math.min(maxSize / image.naturalWidth, maxSize / image.naturalHeight, 1);
    canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));

    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    const allPixels = extractQuantizedPixels(imageData);
    const edgePixels = extractEdgeQuantizedPixels(imageData, canvas.width, canvas.height);

    const background = getMostFrequentColor(edgePixels) ?? getMostFrequentColor(allPixels);
    const dominant =
      getMostFrequentColor(
        background
          ? allPixels.filter((hex) => chroma.distance(hex, background, 'rgb') > 28)
          : allPixels,
      ) ?? getMostFrequentColor(allPixels);

    return {
      dominant: dominant ?? fallbackDominantColor,
      background: background ?? fallbackBackgroundColor,
    };
  } catch {
    return { dominant: fallbackDominantColor, background: fallbackBackgroundColor };
  }
};
