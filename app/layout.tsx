"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import Theme from "@/styles/Theme";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import Snackbar from "@/components/SnackBar";
import { PersistGate } from "redux-persist/integration/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={Theme}>
              <Snackbar />
              {children}
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
