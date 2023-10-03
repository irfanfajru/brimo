import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BRImo",
  description:
    "BRImo merupakan Aplikasi Internet dan Mobile Banking BRI Terbaru berbasis data internet yang memberikan kemudahan bagi nasabah maupun non nasabah BRI untuk dapat bertransaksi dengan User Interface dan User Experience terbaru dan fitur-fitur menarik lainnya dengan pilihan Source of Fund/ sumber dana setiap transaksi dapat menggunakan rekening Giro/ Tabungan.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
