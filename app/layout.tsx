import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Notes: 
      - adding inter here would apply the font throughout the application 
      - adding antialised class smooths out the font
      */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
