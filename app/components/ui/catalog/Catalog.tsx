import { FC } from 'react';

import Heading from '@/components/ui/heading/Heading';
import VideoItem from '@/components/ui/video-item/VideoItem';

import { IVideo } from '@/types/video.interface';

import styles from './Catalog.module.scss';

interface ICatalog {
	newVideos: IVideo[];
	removeHandler?: (videoId: number) => void;
	isUpdateLink?: boolean;
}

const Catalog: FC<ICatalog> = ({ isUpdateLink, newVideos, removeHandler }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.top_block}>
				<Heading title={removeHandler ? 'My videos' : 'All videos'} />
			</div>

			<div className={styles.catalog}>
				{newVideos.map(video => (
					<VideoItem
						item={video}
						key={video.id}
						removeHandler={removeHandler}
						isUpdateLink={isUpdateLink}
					/>
				))}
			</div>
		</div>
	);
};

export default Catalog;