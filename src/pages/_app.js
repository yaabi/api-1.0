import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const Theme = createTheme({
    palette: {
      primary: {
        main: "#B017AA",
        light: "#f9fafb",
      },
      secondary: { main: "#111827", contrastText: "#fff", light: "#737a87" },
      themeWhite: {
        main: "#C9C9C9",
        contrastText: "#000",
      },
    },

    typography: {
      button: {
        textTransform: "none",
      },
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
