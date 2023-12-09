import { Grid, Tag } from 'antd-mobile';

import './Cell.css';


type Status = 'sea' | 'ship' | 'hit' | 'miss';

export type CellProps = {
  row: string,
  col: string,
  status: Status,
  onClick: () => void,
};

const statusToColor = {
  sea: 'primary',
  ship: 'default',
  hit: 'danger',
  miss: 'warning',
};

function Cell({ row, col, status, onClick }: CellProps) {
  return (
    <Grid.Item>
      <Tag
        color={statusToColor[status]}
        onClick={onClick}
        className="cell"
      >
        {row}{col}
      </Tag>
    </Grid.Item>
  );
};

export default Cell;
