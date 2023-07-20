import Header from '@/components/Header';
import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import React from 'react';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Rest Countries',
  description: 'Testin my habilities with Next and learning Tailwind CSS',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}

