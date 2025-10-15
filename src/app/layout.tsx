import { Providers } from "@/providers";
import { Chakra_Petch, Inter } from "next/font/google";
import { Footer } from "@/ui/components/layout/footer";
import { Header } from "@/ui/components/layout/header";
import { NuqsAdapter } from "nuqs/adapters/next";
import type { Metadata } from "next";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alura Blog",
  description: "Blog para encontrar conteúdos sobre tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} ${inter.variable} antialiased mx-auto max-w-7xl p-16`}
      >
        <Providers>
          <NuqsAdapter>
            <Header />
            {children}
          </NuqsAdapter>
        </Providers>

        <p className="text-tertiary text-center mt-16">
          © Copyright 2025. Produzido por Fernanda Mascheti
        </p>
      </body>
    </html>
  );
}
