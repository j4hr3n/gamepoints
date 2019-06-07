import React from 'react';
import { Item } from '@reducers/gameReducer';
import {
  Table,
  TableHeaders,
  TableContent,
  TableCell,
  TableHeader,
} from './styled';

interface Props {
  headers: string[];
  rows: Item[];
}

export const ResultTable: React.FC<Props> = ({
  headers,
  rows,
}: Props): JSX.Element => (
  <Table>
    <tbody>
      <TableHeaders>
        {headers.map(
            (header): JSX.Element => (
              <TableHeader key={header}>{header}</TableHeader>
            ),
          )}
      </TableHeaders>
      {rows.map(
          (row): JSX.Element => (
            <TableContent key={row.label}>
              <TableCell>{row.label}</TableCell>
              <TableCell>
                {row.qty || 1}
x
              </TableCell>
              <TableCell>{row.points + (row.bonusPoints || 0)}</TableCell>
            </TableContent>
          ),
        )}
    </tbody>
  </Table>
  );
