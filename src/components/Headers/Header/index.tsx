'use client';

import { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import HeaderBlockLng from 'components/Headers/Header/HeaderBlockLng';
import NavMenu from 'components/Headers/Header/NavMenu';

import { serverTranslation } from '@/app/i18n/client';
import { IHeader } from '@/components/Headers/Header/HeaderBlockLng/interface';
import { icons } from '@/constants';

import { Banner, Icon, Message, NavBar, Wrapper } from './styles';

const { logo } = icons;

const Header: FC<IHeader> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  const currentPath = usePathname();

  const translationPath = useMemo(
    () => currentPath.slice(4, currentPath.length),
    [currentPath],
  );

  return (
    <Wrapper>
      <NavBar>
        <Icon>{logo}</Icon>
        <HeaderBlockLng lng={lng} translationPath={translationPath} />
        <NavMenu />
      </NavBar>
      <Banner>
        <Message>{t('Home.banner')}</Message>
      </Banner>
    </Wrapper>
  );
};

export default Header;
