import { FC, PropsWithChildren, useState } from 'react';

import UploadModal from '@/components/layout/header/upload-video/UploadModal';

import { videoApi } from '@/store/api/videos.api';

import stylesIcons from '../icons-right/IconsRight.module.scss';


const UploadVideo: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [videoId, setVideoId] = useState<number>(0);

	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation();

	return (
		<>
			<button
				className={stylesIcons.button}
				disabled={isLoading}
				onClick={() => {
					createVideo()
						.unwrap()
						.then(id => {
							setVideoId(Number(id));
							setIsOpen(true);
						});
				}}
			>
				{children}
			</button>
			<UploadModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
		</>
	);
};

export default UploadVideo;