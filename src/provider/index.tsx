import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import StyledRegistry from '@/lib/registry';
import { GlobalStyles } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';

export const RootProvider = ({ children }: { children: ReactNode }) => (
  <StyledRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </StyledRegistry>
);
