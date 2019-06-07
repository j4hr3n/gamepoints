import styled from 'styled-components';
import Logo from '@assets/logos/kahoot_logo.svg';
import { padding, sizes, colors } from '@config/variables';

export const Nav = styled.nav`
  display: inline-flex;
  min-width: 100vw;
  max-height: ${sizes.nav.max.height};
  padding: 0 ${padding.medium};
  border-bottom: 1px solid ${colors.kahoot.purple};
  box-sizing: border-box;
`;

export const NavText = styled.p`
  box-sizing: border-box;
  align-self: center;
  font-weight: 700;
  margin-left: ${padding.base};
`;

export const BrandLogo = styled(Logo)`
  width: 100px;
  height: auto;
`;
