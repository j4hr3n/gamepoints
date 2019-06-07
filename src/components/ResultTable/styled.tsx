import styled, { css } from 'styled-components';
import { padding, colors } from '@config/variables';

const CellPadding = css`
  padding: ${padding.base};
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;

export const TableHeaders = styled.tr`
  border-bottom: 1px solid ${colors.kahoot.purple};
`;

export const TableHeader = styled.th`
  font-size: 32px;
  ${CellPadding}
`;

export const TableContent = styled.tr`
  border-bottom: 1px solid ${colors.kahoot.purple};
`;

export const TableCell = styled.td`
  font-size: 24px;
  ${CellPadding}
`;
