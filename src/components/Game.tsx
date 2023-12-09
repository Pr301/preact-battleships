import { Space } from 'antd-mobile';
import Board from './Board';
import Modes from './Modes';
import { BoardContext } from '../contexts/BoardContext';

import { changeMode, mode } from '../signals/mode';


function Game() {
  if (mode.value === 'restart') {
    changeMode('setup');

    // Render nothing to clear the boards ;)
    return <></>;
  }

  return (
    <>
      <Modes />
      <Space wrap justify="between">
        <BoardContext.Provider value="defence">
          <Board />
        </BoardContext.Provider>
        {mode.value === 'play' && (
          <BoardContext.Provider value="attack">
            <Board />
          </BoardContext.Provider>
        )}
      </Space>
    </>
  );
}

export default Game;
