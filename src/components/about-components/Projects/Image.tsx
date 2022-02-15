import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export const ProjectImage: React.FunctionComponent<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Lukaloka':
      return <StaticImage src="../../../images/lukaloka.png" alt={name} placeholder="blurred" />;
    case 'Covid 19':
      return <StaticImage src="../../../images/covid19.png" alt={name} placeholder="blurred" />;
    case 'Infinitown':
      return <StaticImage src="../../../images/infinitown.png" alt={name} placeholder="blurred" />;
    case 'CSS Challenges':
      return (
        <StaticImage src="../../../images/csschallenges.png" alt={name} placeholder="blurred" />
      );
    case 'Moviee':
      return <StaticImage src="../../../images/movieapp.png" alt={name} placeholder="blurred" />;
    case 'Natours':
      return <StaticImage src="../../../images/natours.png" alt={name} placeholder="blurred" />;
    case 'Pawtner':
      return <StaticImage src="../../../images/pawtner.png" alt={name} placeholder="blurred" />;
    default:
      return null;
  }
};
