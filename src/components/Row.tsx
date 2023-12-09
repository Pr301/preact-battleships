import { useContext } from 'preact/hooks';

import { Grid } from 'antd-mobile';
import { BoardContext } from '../contexts/BoardContext';
import AttackCell from './AttackCell';
import DefenceCell from './DefenceCell';


type RowProps = {
  number: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10',
};

function Row({ number }: RowProps) {
  const boardCtx = useContext(BoardContext);

  const Cell = boardCtx === 'defence' ? DefenceCell : AttackCell;
  return (
    <Grid columns={10}>
      <Cell row={number} col="A" />
      <Cell row={number} col="B" />
      <Cell row={number} col="C" />
      <Cell row={number} col="D" />
      <Cell row={number} col="E" />
      <Cell row={number} col="F" />
      <Cell row={number} col="G" />
      <Cell row={number} col="H" />
      <Cell row={number} col="I" />
      <Cell row={number} col="J" />
    </Grid>
  );
};

export default Row;
