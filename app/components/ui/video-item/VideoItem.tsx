import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

import UserAvatar from '@/components/ui/user-avatar/UserAvatar';
import VideoDuration from '@/components/ui/video-item/VideoDuration';
import VideoStatistics from '@/components/ui/video-item/VideoStatistics';
import { IVideoItem } from '@/components/ui/video-item/video-item.interface';

import styles from './VideoItem.module.scss';
import { DEFAULT_THUMBNAIL_KEY } from '@/api/url.constants';


const VideoItem: FC<IVideoItem> = ({
	item,
	isSmall,
	removeHandler,
	isUpdateLink
}) => {
	const { push } = useRouter();

	return (
		<div
			className={cn(styles.video_item, {
				[styles.small]: isSmall
			})}
		>
			{!!removeHandler && (
				<button
					className={'absolute bottom-3 right-3 z-10'}
					onClick={() => removeHandler(item.id)}
				>
					<BiTrash className='text-lg text-red-700' />
				</button>
			)}
			{isUpdateLink && (
				<button
					className={'absolute bottom-3 right-11 z-10'}
					onClick={() => push(`/video/edit/${item.id}`)}
				>
					<BiEdit className='text-lg text-blue-600' />
				</button>
			)}
			<div className={styles.thumbnail}>
				<Image
					src={item.thumbnail?.key || DEFAULT_THUMBNAIL_KEY}
					alt={item.name}
					width={185}
					height={103}
					layout='responsive'
					priority
				/>
				<VideoDuration duration={item?.duration || 0} />
				{item?.user && (
					<div className='absolute right-3 -bottom-7'>
						<UserAvatar user={item.user} />
					</div>
				)}
			</div>

			<div className={styles.information}>
				{!isSmall && <div className={styles.author}>{item.user?.name}</div>}
				<Link href={`/v/${item.id}`}>
					<a className={styles.name}>{item.name}</a>
				</Link>
				<VideoStatistics
					views={item.views}
					createdAt={!isSmall ? item.createdAt : undefined}
				/>
			</div>
		</div>
	);
};

export default VideoItem;