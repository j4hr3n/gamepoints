import React, { useReducer, createContext } from 'react';
import { Navbar } from '@components/Navbar/Navbar';
import styled from 'styled-components';
import { gameReducer, gameInitialState } from '@reducers/gameReducer';
import { GameContainer } from './containers/GameContainer/GameContainer';
import { ResultContainer } from './containers/ResultContainer/ResultContainer';

export const GameContext = createContext(gameInitialState);

export const App: React.FC<{}> = (): JSX.Element => {
  const [state, dispatch] = useReducer(gameReducer, gameInitialState);
  return (
    <GlobalStyles>
      <Navbar />
      <VerticalWrapper>
        <GameContext.Provider value={state}>
          <GameContainer dispatch={dispatch} />
          <ResultContainer dispatch={dispatch} />
        </GameContext.Provider>
      </VerticalWrapper>
    </GlobalStyles>
  );
};

const GlobalStyles = styled.div`
  font-family: Montserrat;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-flow: column wrap;
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;
