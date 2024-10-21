// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer"; // Import your Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PoGo Guide",
  description: "#1 Pokemon Go tips page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainNav />
            <main style={{ flex: 1 }}>{children}</main>{" "}
            {/* Ensure the main content takes up available space */}
            <Footer /> {/* Add the Footer here */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
