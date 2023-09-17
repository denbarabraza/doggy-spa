import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cinzeldecorative/v16/daaCSScvJGqLYhG8nNt8KPPswUAPnh7U.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cinzeldecorative/v16/daaHSScvJGqLYhG8nNt8KPPswUAPniZoaelD.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFhFTQ7Q.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFiNTQ7Q.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFs9UQ7Q.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cormorant/v21/H4c2BXOCl9bbnla_nHIA47NMUjsNbCVrFvZUQ7Q.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Tangerine';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOBDg.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Tangerine';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNpjA.ttf) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cormorant', 'Tangerine', 'Cinzel Decorative', sans-serif;
    text-decoration: none;
    outline: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
