import { usePathname } from 'next/navigation';

import { headerNavMenu } from '@/constants/navMenu';
import { ILanguage } from '@/interfaces';
import { getDictionary } from '@/lib/dictionary';
import { checkIsPathActive } from '@/utils';

import { LinkItem, Nav } from './styles';

export default async function NavMenu({ params }: ILanguage) {
  const { lang } = params;
  const t: { [key: string]: string } = await getDictionary(lang);
  const pathName = usePathname();

  return (
    <Nav>
      {headerNavMenu.map(({ name, path }) => {
        const isActive = checkIsPathActive(pathName, path);

        return (
          <LinkItem key={name} href={`/${lang}${path}`} isActive={isActive}>
            {t[name]}
          </LinkItem>
        );
      })}
    </Nav>
  );
}
