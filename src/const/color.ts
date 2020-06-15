export enum COLOR {
  BLACK = '#000000',
  WHITE = '#ffffff',
  GRAY_10 = '#141414',
  GRAY_80 = '#767d8a',
  BLUE_10 = '#27293d',
  BLUE_20 = '#2b3553',
  BLUE_40 = '#419ef9',
  BLUE_50 = '#54b9cd',
  BLUE_60 = '#1d8cf8',
  GREEN_80 = '#00bf9a',
  ORANGE_100 = '#FF9E00',
  RED_100 = '#FF3600',
  PINK_10 = '#ff9f89',
  PINK_100 = '#fd77a4'
}

export enum GRADIENT {
  BACKGROUND = 'linear-gradient(#1e1e2f, #1e1e24)',
  SIDEBAR = 'linear-gradient(0deg, #3358f4, #1d8cf8)'
}

export enum SHADOW {
  BOX = '0 1px 20px 0 rgba(0,0,0,0.1)'
}

export const hexToRgba = (hex: string, opacity: number = 1): string => {
  const bigint = parseInt(hex.split('#')[1], 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${opacity})`;
};
