import { FC } from 'react';
import { RiHeart2Fill } from 'react-icons/ri';

import styles from '@/components/screens/video/video-detail/VideoDetail.module.scss';

import { IVideo } from '@/types/video.interface';

import useGetUser from '@/hooks/useGetUser';

interface ILikeButton {
	video: IVideo;
	isLikeLoading: boolean;
	updateLike: (id: number) => void;
	data?: boolean;
}

const LikeButton: FC<ILikeButton> = ({
	video,
	updateLike,
	isLikeLoading,
	data
}) => {
	const { user } = useGetUser();

	const isLiked =
		video.likedUsers?.some(like => like.fromUser.id === user.id) || !!data;

	return (
		<button
			className={styles.like_button}
			disabled={isLikeLoading}
			onClick={() => updateLike(video?.id)}
		>
			{!isLiked ? (
				<>
					<RiHeart2Fill /> LIKE
				</>
			) : (
				<>DISLIKE</>
			)}
		</button>
	);
};

export default LikeButton;