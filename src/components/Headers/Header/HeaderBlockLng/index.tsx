'use client';

import React, { FC, memo } from 'react';
import Link from 'next/link';

import { IHeaderBase } from './interface';
import { CurrentLng, Switcher, Wrapper } from './styled';

const HeaderBlockLng: FC<IHeaderBase> = memo(({ lng, translationPath }) => {
  const languages = ['en', 'ru'];

  return (
    <Wrapper>
      <Switcher>
        <CurrentLng>{lng}</CurrentLng>
        <div>|</div>
        {languages
          .filter(language => lng !== language)
          .map(language => (
            <div key={language}>
              <Link href={`/${language}/${translationPath}`} key={language}>
                {language}
              </Link>
            </div>
          ))}
      </Switcher>
    </Wrapper>
  );
});

export default HeaderBlockLng;
