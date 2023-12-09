import { render } from 'preact';

import { AutoCenter } from 'antd-mobile';
import Game from './components/Game';

import './index.css';


export function App() {
	return (
		<AutoCenter>
			<Game />
		</AutoCenter>
	);
}

render(<App />, document.getElementById('app'));
