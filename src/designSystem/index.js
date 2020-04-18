import DesignSystem from 'design-system-utils';
import { pieceGrid } from '../helpers/scales/column';

const col = pieceGrid();

const designTokens = {
  type: {
    baseFontSize: '16px',

    sizes: {
      xxs: '10px',
      xs: '12px',
      s: '14px',
      base: '16px',
      m: '18px',
      l: '20px',
      l2: '25px',
      xl: '30px',
      xxl: '40px',
    },

    fontFamily: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
      sans: '"Open Sans", sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, "Courier New", monospace',
      helvetica: '"Helvetica", "Helvetica Neue", "Roboto", "Arial", sans-serif',
      yantramanav: 'Yantramanav',
      poppins: 'Poppins',
      ubuntu: 'Ubuntu',
    },

    lineHeight: {
      small: 0.875,
      base: 1.0625,
      headings: 1.1,
      normal: 1.15,
      title: 1.1875,
      buttonSmall: 1.33,
      title2: 1.75,
    },

    fontWeight: {
      lighter: 300,
      normal: 400,
      500: 500,
      bold: 'bold',
      headings: 'bold',
    },
  },
  colors: {
    colorPalette: {
      bright: {
        base: '#f2f2f2',
        100: '#e9e9e9',
        200: '#d8d8d8',
        300: '#f0f2f5',
        dark: '#cccccc',
        darker: '#bdbdbd',
      },
      dark: {
        base: '#000000',
        light: '#454F5B',
        lighter: '#5e5e5e',
        100: '#797979',
        200: '#444444',
        300: '#aab6c7',
        400: '#d1d9e3',
      },
      white: {
        base: '#ffffff',
      },

      error: {
        base: '#FF0303',
        notApproved: '#ce7d7d',
      },

      success: {
        base: '#47bb41',
        emailSent: '#389814',
      },

      warning: {
        base: '#ffa000',
      },

      info: {
        base: '#1976d2',
      },

      green: {
        light: '#3cb5b1',
        approved: '#8cce7d',
      },
    },

    brand: {
      colorName: '', // <string>, base is the default
    },
  },

  shadow: {
    input: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.1)',
    header: 'inset 0 -1px 3px 0 rgba(0, 0, 0, 0.5)',
    squareIConBox: '0 0 8px 0 rgba(0, 0, 0, 0.2)',
    snackbar: '5px 5px 10px rgba(0, 0, 0, 0.6)',
    pdfWrapper: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    dialog: '0 3px 9px rgba(0, 0, 0, 0.5)',
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
    xhigh: 10000,
  },

  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    100: '1',
  },

  spacing: {
    baseline: 20,
    padding: '0.3em',
    scale: {
      0: '0',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '0.75rem',
      5: '1rem',
      6: '1.5rem',
      7: '2rem',
      8: '2.5rem',
      9: '3rem',
      10: '3.5rem',
      11: '4.5rem',
      12: '5rem',
      13: '7.5rem',
      14: '13.75rem',
      15: '15.12rem',
      16: '16.5rem',
      s: '0.8125rem',
      m: '6.4375rem',
      l: '9.5rem',
      xl: '11rem',
      row: '1.125rem',
    },
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xlg: '0.625rem',
  },

  breakpoints: {
    sm: '359px',
    s: '767px',
    m: '768px',
    l: '1280px',
  },

  typography: {
    size: {
      h1: 96,
      h2: 60,
      h3: 48,
      h4: 34,
      h5: 24,
      h6: 20,
      title: 20,
      title2: 18,
      title3: 17,
      subtitle: 15,
      subtitle1: 16,
      subtitle2: 14,
      body1: 12,
      body2: 10,
    },
    letterSpacing: {
      h1: -1.5,
      h2: -0.5,
      h3: 0,
      h4: 0.25,
      h5: 0,
      h6: 0.15,
      title: 0,
      title2: 0,
      subtitle: 0,
      subtitle1: 0,
      subtitle2: 0,
      body1: 0,
      body2: 0,
    },
    textAlign: {
      left: 'left',
      center: 'center',
      right: 'right',
    },
  },

  col: {
    1: 1 * col,
    2: 2 * col,
    3: 3 * col,
    4: 4 * col,
    5: 5 * col,
    6: 6 * col,
    7: 7 * col,
    8: 8 * col,
    9: 9 * col,
    10: 10 * col,
    11: 11 * col,
    12: 12 * col,
  },

  gutter: {
    1: 3,
    2: 6,
    3: 9,
    4: 12,
    5: 15,
    6: 18,
    7: 21,
    8: 24,
    9: 27,
  },
};

designTokens.device = {
  sm: `(max-width: ${designTokens.breakpoints.sm})`,
  s: `(max-width: ${designTokens.breakpoints.s})`,
  m: `(min-width: ${designTokens.breakpoints.m})`,
  l: `(min-width: ${designTokens.breakpoints.l})`,
};

export default new DesignSystem(designTokens, { fontSizeUnit: 'rem' });
