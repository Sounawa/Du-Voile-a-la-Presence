import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Du Voile à la Présence — Traité soufi de l'épreuve et de la blessure",
  description:
    "Une méditation inspirée par la tradition soufie sur le sens des épreuves, la pédagogie divine et le cœur brisé comme sanctuaire de l'Amour. Œuvre de partage offrant un nouveau regard sur les blessures.",
  keywords: [
    "soufisme",
    "Tawhîd",
    "Rûmî",
    "Ibn Arabî",
    "Hallâj",
    "épreuve",
    "blessure",
    "guérison spirituelle",
    "fanâ",
    "cœur brisé",
    "pédagogie divine",
  ],
  authors: [{ name: "Kâtib al-Qalb" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Du Voile à la Présence — Traité soufi de l'épreuve et de la blessure",
    description:
      "Quand la blessure devient porte de la Présence divine. Une méditation soufi sur l'épreuve et la guérison.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${lora.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
