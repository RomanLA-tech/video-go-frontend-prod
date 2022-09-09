import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC, memo } from 'react';

import { formatNumberToK } from '@/utils/format-number-to-k';

import styles from './VideoItem.module.scss';

interface IVideoStatistics {
	views: number;
	createdAt?: string;
}

dayjs.extend(relativeTime);

const VideoStatistics: FC<IVideoStatistics> = memo(({ views, createdAt }) => {
	return (
		<div className={styles.number_info}>
			<div className={styles.views}>
				{views ? `${formatNumberToK(views)} views` : '0 views'}
			</div>
			{!!createdAt && (
				<>
					<div className='mx-2'>.</div>
					<div className={styles.date}>
						{dayjs(new Date(createdAt)).fromNow()}
					</div>
				</>
			)}
		</div>
	);
});

export default VideoStatistics;