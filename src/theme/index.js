import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import componentsOverride from './overrides';

export default function ThemeProvider ({children}) {
    const themeOptions = useMemo(()=> ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
    //   customShadows: customShadows(),

    }),[]
    )
    const theme = createTheme(themeOptions);
    // console.log(theme.components=componentsOverride(theme))
    // theme.components= componentsOverride(theme)

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    )
}