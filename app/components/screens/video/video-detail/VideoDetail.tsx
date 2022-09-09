import dayjs from 'dayjs';
import { FC } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { MdRemoveRedEye } from 'react-icons/md';
import { RiHeart2Fill } from 'react-icons/ri';

import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall';
import LikeButton from '@/components/ui/like-button/LikeButton';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

import { IUser } from '@/types/user.interface';
import { IVideo } from '@/types/video.interface';

import useGetUser from '@/hooks/useGetUser';

import { videoApi } from '@/store/api/videos.api';

import { formatNumberToK } from '@/utils/format-number-to-k';

import styles from './VideoDetail.module.scss';


interface IVideoDetail {
	video: IVideo;
	channel: IUser;
}

const VideoDetail: FC<IVideoDetail> = ({ channel, video }) => {
	const { user: authUser } = useGetUser();

	const [updateLike, { isLoading: isLikeLoading, data }] =
		videoApi.useUpdateLikesMutation();

	return (
		<div className={styles.detail}>
			<div>
				<ChannelInfoSmall channel={channel} />
				<h1>{video.name}</h1>
				<article className={styles.article}>{video.description}</article>
			</div>
			<div className={styles.wrapper_button}>
				{video.user?.id !== authUser.id ? (
					<>
						<SubscribeButton channelIdForSubscribe={video.user?.id!} />
						<LikeButton
							video={video}
							isLikeLoading={isLikeLoading}
							updateLike={updateLike}
							data={data}
						/>
					</>
				) : (
					<div style={{ display: 'flex', width: '24vw' }} />
				)}
			</div>
			<div className={styles.number_info}>
				<div>
					<MdRemoveRedEye />
					<span>{formatNumberToK(video.views)} views</span>
				</div>
				<div>
					<RiHeart2Fill />
					<span>{formatNumberToK(video.likesCount)} likes</span>
				</div>
				<div>
					<HiCalendar />
					<span>{dayjs(new Date(video.createdAt)).fromNow()}</span>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;