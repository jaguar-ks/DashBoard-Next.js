import "@/app/ui/global.css";
import { inter, tinos, lusitana } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${tinos.className} antialiased`} >{children}</body>
    </html>
  );
}
