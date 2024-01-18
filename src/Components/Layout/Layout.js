import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function Layout({ children, title }) {
  return (
    <div suppressHydrationWarning>
      <Head>
        <title>{title ? title + " - Yaabi" : "Yaabi"}</title>
        <meta name="description" content="Yaabi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box sx={{ minHeight: "calc(100vh - 250px)" }}>{children}</Box>
      <Footer />
      <Toaster />
    </div>
  );
}
