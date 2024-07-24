import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}
