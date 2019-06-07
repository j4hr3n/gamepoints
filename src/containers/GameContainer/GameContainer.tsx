import React from 'react';
import { GameTile } from '@components/GameTile/GameTile';
import { TileGroup } from '@components/TileGroup/TileGroup';
import { Title } from '@components/Title/Title';
import { items } from '@config/constants';
import { GameActionTypes, GameAction } from '@reducers/gameReducer';
import { Container } from './styled';

interface Props {
  dispatch: React.Dispatch<GameAction>;
}

export const GameContainer: React.FC<Props> = ({ dispatch }: Props): JSX.Element => (
  <Container>
    <Title text="Items" />
    <TileGroup>
      {items.map(
        (item): JSX.Element => (
          <GameTile
            key={item.label}
            label={item.label}
            onClick={(): void =>
              dispatch({
                type: GameActionTypes.ADD_ITEM,
                points: item.points,
                item
              })
            }
          />
        )
      )}
    </TileGroup>
  </Container>
);
