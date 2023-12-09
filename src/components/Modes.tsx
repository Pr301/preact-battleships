import { TabBar } from 'antd-mobile';
import { EditFill, LoopOutline, PlayOutline } from 'antd-mobile-icons';

import { mode, changeMode } from '../signals/mode';


function Modes() {
  return (
    <TabBar activeKey={mode.value} onChange={changeMode}>
      {mode.value !== 'play' && <TabBar.Item key="setup" icon={EditFill} />}
      <TabBar.Item key='play' icon={PlayOutline} />
      <TabBar.Item key='restart' icon={LoopOutline} />
    </TabBar>
  );
}

export default Modes;
