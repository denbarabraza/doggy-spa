import { usePathname } from 'next/navigation';

import en from '@/app/i18n/locales/en/translation.json';
import ru from '@/app/i18n/locales/ru/translation.json';
import { LocaleValueEnum } from '@/constants/enums';

export interface Translation {
  en: { [key: string]: string };
  ru: { [key: string]: string };
}

const TRANSLATIONS: Translation = { en, ru };

export function useMyTranslation() {
  const router = usePathname();

  let locale: keyof Translation = LocaleValueEnum.En;

  if (router && router.includes(LocaleValueEnum.Ru)) locale = LocaleValueEnum.Ru;

  const t = (keyString: string) => TRANSLATIONS[locale][keyString];

  return { t, locale };
}

export const serverTranslation = (lng: keyof Translation) => ({
  t: (keyString: string) => TRANSLATIONS[lng][keyString],
});
