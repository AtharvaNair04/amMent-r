import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'amMentor',
  description: 'A  platform for tracking curriculum completion and mentee progress',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}