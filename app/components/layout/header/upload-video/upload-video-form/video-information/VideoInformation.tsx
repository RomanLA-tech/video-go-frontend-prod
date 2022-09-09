import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Preloader } from '@/components/ui/preloader/Preloader';

import styles from './VideoInformation.module.scss';
import { APP_LINK } from '@/api/url.constants';

interface IVideoInformation {
	thumbnail: string;
	videoId: number;
	isUploaded: boolean;
	thumbnailIsLoading: boolean;
}

const VideoInformation: FC<IVideoInformation> = ({
	videoId,
	isUploaded,
	thumbnail,
	thumbnailIsLoading
}) => {
	return (
		<div className={styles.info}>
			<div>
				{thumbnailIsLoading ? (
					<div className={styles.thumbnail}>
						<Preloader />
					</div>
				) : (
					<Image
						src={thumbnail}
						width={400}
						height={210}
						alt={''}
						layout='fixed'
					/>
				)}
			</div>
			<div className={styles.details}>
				<div>
					<span>Video link: </span>
					<span>
						<Link href={`${APP_LINK}/v/${videoId}`}>
							<a>
								{APP_LINK}/v/{videoId}
							</a>
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default VideoInformation;