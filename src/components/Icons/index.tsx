import * as React from 'react';
import { Facebook } from './Facebook';
import { Folder } from './Folder';
import { Github } from './Github';
import { Link } from './Link';
import { Linkedin } from './Linkedin';
import { Medium } from './Medium';

export const Icon: React.FunctionComponent<
  React.SVGProps<SVGAElement> & {
    name: 'github' | 'linkedin' | 'link' | 'folder' | 'facebook' | 'medium';
  }
> = ({ name, ...props }) => {
  switch (name) {
    case 'folder':
      return <Folder {...props} />;
    case 'link':
      return <Link {...props} />;
    case 'github':
      return <Github {...props} />;
    case 'linkedin':
      return <Linkedin {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'medium':
      return <Medium {...props} />;
    default:
      return null;
  }
};
