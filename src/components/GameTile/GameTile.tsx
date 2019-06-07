import React from 'react';
import { colors } from '@config/variables';
import { Tile, Title } from './styled';

interface Props {
  onClick: () => void;
  label: string;
}

export const GameTile: React.FC<Props> = ({
  onClick,
  label,
}: Props): JSX.Element => {
  const kahootColors = Object.values(colors.kahoot);
  const bgColor = kahootColors[Math.floor(Math.random() * kahootColors.length)];
  return (
    <Tile onClick={onClick} bgColor={bgColor}>
      <Title>{label}</Title>
    </Tile>
  );
};
