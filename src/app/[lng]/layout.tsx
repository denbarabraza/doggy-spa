import React, { ReactNode } from 'react';
import { dir } from 'i18next';

import { languages } from '@/app/i18n/settings';
import Header from '@/components/Headers/Header';
import { LocaleValueEnum } from '@/constants/enums';
import { RootProvider } from '@/provider';

export const metadata = {
  title: 'Modsen Doggy Spa',
  description: 'Doggy Spa',
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: LocaleValueEnum };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <RootProvider>
          <Header lng={lng} />
          <main>{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
