import NavMenu from '@/components/Header/NavMenu';
import { icons } from '@/constants';
import { ILanguage } from '@/interfaces';
import { getDictionary } from '@/lib/dictionary';

import { Banner, Icon, Message, NavBar, Wrapper } from './styles';

const { logo } = icons;

export default async function Header({ params }: ILanguage) {
  const t = await getDictionary(params.lang);

  return (
    <Wrapper>
      <NavBar>
        <Icon>{logo}</Icon>
        <NavMenu params={params} />
      </NavBar>
      <Banner>
        <Message>{t['Home.banner']}</Message>
      </Banner>
    </Wrapper>
  );
}
