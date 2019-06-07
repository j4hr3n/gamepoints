import React from 'react';
import { GameTitle } from './styled';

interface Props {
  text: string;
}

export const Title: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <GameTitle>{text}</GameTitle>;
};
