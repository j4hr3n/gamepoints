import React from 'react';
import { Nav, BrandLogo, NavText } from './styled';

export const Navbar: React.FC<{}> = (): JSX.Element => (
  <Nav>
    <BrandLogo />
    <NavText>Points!</NavText>
  </Nav>
  );
