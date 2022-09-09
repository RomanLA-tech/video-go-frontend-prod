import { FC } from 'react';

import styles from './Preloader.module.scss';

export const Preloader: FC = () => {
	return (
		<div className={styles.bubblingG}>
			<span className={styles.bubblingG_1}></span>
			<span className={styles.bubblingG_2}></span>
			<span className={styles.sbubblingG_3}></span>
		</div>
	);
};