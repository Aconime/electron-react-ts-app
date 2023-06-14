import React from 'react';
import IApp from './interface/IApp';
import styles from './modules/App.module.css';

const App = ({ message }: IApp) => {
	return (
		<div className={styles.wrapper}>
			<p>{message}</p>
		</div>
	);
};

export default App;
