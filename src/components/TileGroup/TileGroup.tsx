import React, { ReactNode } from 'react';
import { Group } from './styled';

interface Props {
  children: ReactNode;
}

export const TileGroup: React.FC<Props> = ({ children }: Props): JSX.Element => <Group>{children}</Group>;
