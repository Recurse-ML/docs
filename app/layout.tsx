import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recurse ML Documentation',
  description: 'Official documentation for Recurse ML products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
