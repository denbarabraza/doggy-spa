import React from 'react';
import { Loader as RootLoader } from 'components-client-blog';

export default function Loader() {
  return (
    <RootLoader
      borderTopColor='#ffdae9'
      borderColor='#e89b93'
      backgroundColorContainer='#f3ded7'
    />
  );
}
