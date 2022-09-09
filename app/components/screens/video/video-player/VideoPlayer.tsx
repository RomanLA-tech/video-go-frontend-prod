import cn from 'classnames';
import { FC } from 'react';
import { IoMdPause, IoMdPlay } from 'react-icons/io';
import { MdOutlineFullscreen } from 'react-icons/md';

import { usePlayer } from '@/components/screens/video/video-player/usePlayer';

import styles from './VideoPlayer.module.scss';

interface IVideoPlayer {
	videoPath: string;
}

const VideoPlayer: FC<IVideoPlayer> = ({ videoPath }) => {
	const { videoRef, toggleVideo, status, fullScreen } = usePlayer();

	return (
		<div className={styles.wrapper}>
			<video
				className={styles.player}
				ref={videoRef}
				src={videoPath}
				preload='metadata'
				onClick={toggleVideo}
			/>
			<div className={cn(styles.controls, { [styles.hide]: status.isPlaying })}>
				<button onClick={toggleVideo}>
					{status.isPlaying ? <IoMdPause /> : <IoMdPlay />}
				</button>

				<div className={styles.progress_bar_wrapper}>
					<div
						className={styles.progress_bar}
						style={{ width: `${status.progress}%` }}
					/>
				</div>

				<div className={styles.time_controls}>
					<p>
						{Math.floor(status.currentTime / 60) +
							':' +
							('0' + Math.floor(status.currentTime % 60)).slice(-2)}
					</p>
					<p>/</p>
					<p>
						{Math.floor(status.videoTime / 60) +
							':' +
							('0' + Math.floor(status.videoTime % 60)).slice(-2)}
					</p>
				</div>

				<button onClick={fullScreen}>
					<MdOutlineFullscreen />
				</button>
			</div>
		</div>
	);
};

export default VideoPlayer;