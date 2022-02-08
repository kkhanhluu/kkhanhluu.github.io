import * as React from 'react';
import { Folder } from './Folder';
import { Github } from './Github';
import { Link } from './Link';
import { Linkedin } from './Linkedin';

export const Icon: React.FunctionComponent<{ name: 'github' | 'linkedin' | 'link' | 'folder' }> = ({
  name,
}) => {
  switch (name) {
    case 'folder':
      return <Folder />;
    case 'link':
      return <Link />;
    case 'github':
      return <Github />;
    case 'linkedin':
      return <Linkedin />;
    default:
      return null;
  }
};
