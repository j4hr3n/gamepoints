import React, { useContext } from 'react';
import { Title } from '@components/Title/Title';
import { ResultTable } from '@components/ResultTable/ResultTable';
import { GameAction, GameActionTypes } from '@reducers/gameReducer';
import { GameContext } from '../../app';
import { Container, ResetButton, SummaryContainer, EndGroup, Value } from './styled';

interface Props {
  dispatch: React.Dispatch<GameAction>;
}

export const ResultContainer: React.FC<Props> = ({ dispatch }: Props): JSX.Element => {
  const state = useContext(GameContext);

  const tableHeaders = ['Item', 'Qty', 'Score'];

  const totalBonus = state.groupedItems.reduce((acc, curr): number => acc + (curr.bonusPoints || 0), 0);
  const totalScore = totalBonus + state.groupedItems.reduce((acc, curr): number => acc + curr.points, 0);

  return (
    <Container>
      <Title text="Your points" />
      <ResultTable headers={tableHeaders} rows={state.groupedItems} />
      <SummaryContainer>
        <Value>
          Bonuses:
          {totalBonus}
        </Value>
        <EndGroup>
          <Value>
            Total:
            {totalScore}
          </Value>
          <ResetButton onClick={(): void => dispatch({ type: GameActionTypes.RESET })}>Start new game</ResetButton>
        </EndGroup>
      </SummaryContainer>
    </Container>
  );
};
