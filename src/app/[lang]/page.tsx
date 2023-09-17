import { ILanguage } from '@/interfaces';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({ params: { lang } }: ILanguage) {
  const t = await getDictionary(lang);

  return <div>{t['Home.title']}</div>;
}
