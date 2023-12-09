import { useState } from 'preact/hooks';

import Cell, { CellProps } from './Cell';

import { mode } from '../signals/mode';


type SetupStatus = 'sea' | 'ship';
const setupToggles: Record<SetupStatus, SetupStatus> = {
  sea: 'ship',
  ship: 'sea',
};

type PlayStatus = 'sea' | 'hit' | 'ship' | 'miss';
const playToggles: Record<PlayStatus, PlayStatus> = {
  sea: 'miss',
  miss: 'sea',
  ship: 'hit',
  hit: 'ship',
};

type DefenceCellCellProps = Omit<CellProps, 'status' | 'onClick'>;

function DefenceCell(props: DefenceCellCellProps) {
  const [status, setStatus] = useState<PlayStatus>('sea');

  const handleClick = () => {
    switch (mode.value) {
      case 'setup':
        setStatus(setupToggles[status]);
        return;

      case 'play':
        setStatus(playToggles[status]);
        return;
    }
  };

  return <Cell status={status} onClick={handleClick} {...props} />;
};

export default DefenceCell;
