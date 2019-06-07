import styled from 'styled-components';
import { padding, shadows, colors } from '@config/variables';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column wrap;
  border-left: 1px solid ${colors.kahoot.purple};
`;

export const SummaryContainer = styled.div`
  margin-top: auto;
  padding: ${padding.large};
  background-color: ${colors.kahoot.green};
`;

export const Value = styled.p`
  color: white;
  font-size: 24px;
  padding: ${padding.base};
`;

export const EndGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ResetButton = styled.button`
  background: white;
  user-select: none;
  margin: ${padding.base};
  padding: ${padding.base};
  box-shadow: ${shadows.subtle};
  cursor: pointer;
`;
