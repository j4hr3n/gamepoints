import styled from 'styled-components';
import { shadows, padding, sizes } from '@config/variables';

interface TileProps {
  bgColor: string;
}

export const Tile = styled.div<TileProps>`
  width: ${sizes.tile.width};
  height: ${sizes.tile.height};
  margin: ${padding.large};
  box-shadow: ${shadows.subtle};
  background-color: ${(props: TileProps): string => props.bgColor};
  cursor: pointer;
  user-select: none;
`;

export const Title = styled.h2`
  text-align: center;
  line-height: ${sizes.tile.height};
  margin: 0;
  font-size: 72px;
`;
