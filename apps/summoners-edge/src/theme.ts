'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007acc', // VS Code blue
    },
    secondary: {
      main: '#1e1e1e', // VS Code dark gray
    },
    background: {
      default: '#1e1e1e', // VS Code dark background
      paper: '#252526', // Slightly lighter background for paper elements
    },
    text: {
      primary: '#d4d4d4', // Light gray text
      secondary: '#808080', // Medium gray text
    },
    divider: '#3c3c3c', // Divider color
  },
  typography: {
    fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 600,
      color: '#d4d4d4',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#d4d4d4',
    },
    body1: {
      fontSize: '1rem',
      color: '#d4d4d4',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#808080',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          backgroundColor: '#007acc',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#005f99',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#252526',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
  },
});

export default theme;
