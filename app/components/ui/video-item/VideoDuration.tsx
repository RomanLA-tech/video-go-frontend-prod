import { FC, memo } from 'react';

import secToMin from '@/utils/format-sec-to-min';

import styles from './VideoItem.module.scss';


const VideoDuration: FC<{ duration: number; isBottom?: boolean }> = memo(
	({ isBottom, duration }) => {
		let videoDuration = secToMin(duration);

		return (
			<>
				{duration ? (
					<time className={isBottom ? styles.bottom : ''}>
						{videoDuration} m.
					</time>
				) : (
					<div />
				)}
			</>
		);
	}
);

export default VideoDuration;