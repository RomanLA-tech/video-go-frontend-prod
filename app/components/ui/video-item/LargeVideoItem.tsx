import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import UserAvatar from '@/components/ui/user-avatar/UserAvatar';
import VideoDuration from '@/components/ui/video-item/VideoDuration';
import VideoStatistics from '@/components/ui/video-item/VideoStatistics';

import { IVideo } from '@/types/video.interface';

import styles from './VideoItem.module.scss';
import { DEFAULT_THUMBNAIL_KEY } from '@/api/url.constants';


const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={cn(styles.video_item, styles.large_item)}>
			<div className={styles.thumbnail}>
				<Image
					src={video.thumbnail?.key || DEFAULT_THUMBNAIL_KEY}
					alt={video.name}
					layout='fill'
					className={styles['bg-image']}
					priority
				/>
				<VideoDuration duration={video.duration || 0} isBottom />
				<div className={styles.information}>
					<Link href={`/v/${video.id}`}>
						<a className={styles.name}>{video.name}</a>
					</Link>

					{video?.user && <UserAvatar user={video.user} isWhite />}

					<div className={styles.author}>{video.user?.name}</div>

					<VideoStatistics views={video.views} createdAt={video.createdAt} />
				</div>
			</div>
		</div>
	);
};

export default LargeVideoItem;