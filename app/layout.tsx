import './globals.css';

export const metadata = {
  title: 'Job Portfolio',
  description: 'Modern portfolio for job seekers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}