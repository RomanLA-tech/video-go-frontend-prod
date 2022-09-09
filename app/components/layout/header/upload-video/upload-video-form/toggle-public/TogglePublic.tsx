import { Switch } from '@headlessui/react';
import cn from 'classnames';
import { FC } from 'react';

import styles from './TogglePublic.module.scss';
import { ITogglePublic } from './toggle-public-interface';


const TogglePublic: FC<ITogglePublic> = ({ isEnabled, clickHandler }) => {
	return (
		<Switch.Group>
			<div className={styles.wrapper}>
				<h1>Public video</h1>
				<Switch
					checked={isEnabled}
					onChange={clickHandler}
					className={cn(styles.bg, {
						'bg-blue-700': isEnabled,
						'bg-blue-900': !isEnabled
					})}
				>
					<span
						aria-hidden='true'
						className={cn(styles.point, {
							'translate-x-9': isEnabled,
							'translate-x-0': !isEnabled
						})}
					/>
				</Switch>
			</div>
		</Switch.Group>
	);
};

export default TogglePublic;