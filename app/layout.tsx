import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ToDoアプリ',
  description: 'シンプルで効率的なタスク管理アプリ',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
