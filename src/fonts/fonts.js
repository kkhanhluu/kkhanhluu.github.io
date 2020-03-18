import { createGlobalStyle } from 'styled-components';

import CalibreLightTTF from './Calibre/Calibre-Light.ttf';
import CalibreLightWOFF from './Calibre/Calibre-Light.woff';
import CalibreLightWOFF2 from './Calibre/Calibre-Light.woff2';
import CalibreLightItalicTTF from './Calibre/Calibre-LightItalic.ttf';
import CalibreLightItalicWOFF from './Calibre/Calibre-LightItalic.woff';
import CalibreLightItalicWOFF2 from './Calibre/Calibre-LightItalic.woff2';
import CalibreRegularTTF from './Calibre/Calibre-Regular.ttf';
import CalibreRegularWOFF from './Calibre/Calibre-Regular.woff';
import CalibreRegularWOFF2 from './Calibre/Calibre-Regular.woff2';
import CalibreRegularItalicTTF from './Calibre/Calibre-RegularItalic.ttf';
import CalibreRegularItalicWOFF from './Calibre/Calibre-RegularItalic.woff';
import CalibreRegularItalicWOFF2 from './Calibre/Calibre-RegularItalic.woff2';
import CalibreMediumTTF from './Calibre/Calibre-Medium.ttf';
import CalibreMediumWOFF from './Calibre/Calibre-Medium.woff';
import CalibreMediumWOFF2 from './Calibre/Calibre-Medium.woff2';
import CalibreMediumItalicTTF from './Calibre/Calibre-MediumItalic.ttf';
import CalibreMediumItalicWOFF from './Calibre/Calibre-MediumItalic.woff';
import CalibreMediumItalicWOFF2 from './Calibre/Calibre-MediumItalic.woff2';
import CalibreSemiboldTTF from './Calibre/Calibre-Semibold.ttf';
import CalibreSemiboldWOFF from './Calibre/Calibre-Semibold.woff';
import CalibreSemiboldWOFF2 from './Calibre/Calibre-Semibold.woff2';
import CalibreSemiboldItalicTTF from './Calibre/Calibre-SemiboldItalic.ttf';
import CalibreSemiboldItalicWOFF from './Calibre/Calibre-SemiboldItalic.woff';
import CalibreSemiboldItalicWOFF2 from './Calibre/Calibre-SemiboldItalic.woff2';

import SFMonoRegularTTF from './SFMono/SFMono-Regular.ttf';
import SFMonoRegularWOFF from './SFMono/SFMono-Regular.woff';
import SFMonoRegularWOFF2 from './SFMono/SFMono-Regular.woff2';
import SFMonoRegularItalicTTF from './SFMono/SFMono-RegularItalic.ttf';
import SFMonoRegularItalicWOFF from './SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWOFF2 from './SFMono/SFMono-RegularItalic.woff2';
import SFMonoMediumTTF from './SFMono/SFMono-Medium.ttf';
import SFMonoMediumWOFF from './SFMono/SFMono-Medium.woff';
import SFMonoMediumWOFF2 from './SFMono/SFMono-Medium.woff2';
import SFMonoMediumItalicTTF from './SFMono/SFMono-MediumItalic.ttf';
import SFMonoMediumItalicWOFF from './SFMono/SFMono-MediumItalic.woff';
import SFMonoMediumItalicWOFF2 from './SFMono/SFMono-MediumItalic.woff2';
import SFMonoSemiboldTTF from './SFMono/SFMono-Semibold.ttf';
import SFMonoSemiboldWOFF from './SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWOFF2 from './SFMono/SFMono-Semibold.woff2';
import SFMonoSemiboldItalicTTF from './SFMono/SFMono-SemiboldItalic.ttf';
import SFMonoSemiboldItalicWOFF from './SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWOFF2 from './SFMono/SFMono-SemiboldItalic.woff2';

const FontFaces = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightWOFF2}) format('woff2'),
      url(${CalibreLightWOFF}) format('woff'),
      url(${CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightItalicWOFF2}) format('woff2'),
      url(${CalibreLightItalicWOFF}) format('woff'),
      url(${CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularWOFF2}) format('woff2'),
      url(${CalibreRegularWOFF}) format('woff'),
      url(${CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularItalicWOFF2}) format('woff2'),
      url(${CalibreRegularItalicWOFF}) format('woff'),
      url(${CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumWOFF2}) format('woff2'),
      url(${CalibreMediumWOFF}) format('woff'),
      url(${CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumItalicWOFF2}) format('woff2'),
      url(${CalibreMediumItalicWOFF}) format('woff'),
      url(${CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldWOFF2}) format('woff2'),
      url(${CalibreSemiboldWOFF}) format('woff'),
      url(${CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldItalicWOFF2}) format('woff2'),
      url(${CalibreSemiboldItalicWOFF}) format('woff'),
      url(${CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularWOFF2}) format('woff2'),
      url(${SFMonoRegularWOFF}) format('woff'),
      url(${SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularItalicWOFF2}) format('woff2'),
      url(${SFMonoRegularItalicWOFF}) format('woff'),
      url(${SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumWOFF2}) format('woff2'),
      url(${SFMonoMediumWOFF}) format('woff'),
      url(${SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumItalicWOFF2}) format('woff2'),
      url(${SFMonoMediumItalicWOFF}) format('woff'),
      url(${SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldWOFF2}) format('woff2'),
      url(${SFMonoSemiboldWOFF}) format('woff'),
      url(${SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldItalicWOFF2}) format('woff2'),
      url(${SFMonoSemiboldItalicWOFF}) format('woff'),
      url(${SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;
