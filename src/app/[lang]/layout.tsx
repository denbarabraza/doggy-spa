import React from 'react';

import Header from '@/components/Header';
import { RootProvider } from '@/provider';

import { i18n, Locale } from '../../../i18n.config';

export const metadata = {
  title: 'Modsen Doggy Spa',
  description: 'Doggy Spa',
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <RootProvider>
          <Header params={params} />
          <main>{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
