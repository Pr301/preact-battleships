import { useState } from 'preact/hooks';

import Cell, { CellProps } from './Cell';


type AttackCellProps = Omit<CellProps, 'status' | 'onClick'>;

function AttackCell(props: AttackCellProps) {
  const [status, setStatus] = useState<'sea' | 'hit' | 'miss'>('sea');

  const handleClick = () => {
    switch (status) {
      case 'sea':
        setStatus('miss');
        return;

      case 'miss':
        setStatus('hit');
        return;

      case 'hit':
        setStatus('sea');
        return;
    }
  };

  return <Cell status={status} onClick={handleClick} {...props} />;
};

export default AttackCell;
