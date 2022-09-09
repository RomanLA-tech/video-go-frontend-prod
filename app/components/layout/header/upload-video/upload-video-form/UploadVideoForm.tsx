import { FC } from 'react';
import { Controller } from 'react-hook-form';

import FooterForm from '@/components/layout/header/upload-video/upload-video-form/footer-form/FooterForm';
import TogglePublic from '@/components/layout/header/upload-video/upload-video-form/toggle-public/TogglePublic';
import { useUploadVideoForm } from '@/components/layout/header/upload-video/upload-video-form/useUploadVideoForm';
import VideoInformation from '@/components/layout/header/upload-video/upload-video-form/video-information/VideoInformation';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import TextArea from '@/components/ui/text-area/TextArea';
import UploadImageField from '@/components/ui/upload-image-field/UploadImageFiled';
import { useUploadThumbnail } from '@/components/ui/upload-image-field/useUploadThumbnail';
import UploadVideoField from '@/components/ui/upload-video-field/UploadVideoField';

import { videoApi } from '@/store/api/videos.api';

import styles from '../UploadVideo.module.scss';

import { DEFAULT_THUMBNAIL_KEY } from '@/api/url.constants';

interface IUploadVideoForm {
	videoId: number;
	handleCloseModal: () => void;
}

const UploadVideoForm: FC<IUploadVideoForm> = ({
	videoId,
	handleCloseModal
}) => {
	const { form, status } = useUploadVideoForm({
		videoId,
		handleCloseModal
	});
	const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
		skip: !videoId
	});

	const { uploadThumbnail, thumbnailIsLoading } = useUploadThumbnail(videoId);

	return isLoading ? (
		<Loader count={5} />
	) : (
		<form onSubmit={form.handleSubmit(form.onSubmit)} className={styles.form}>
			{status.isChosen ? (
				<>
					<div className={styles.left_col}>
						<Field
							{...form.register('name', {
								required: 'Title is required!'
							})}
							placeholder='Title'
							error={form.errors.name}
						/>
						<TextArea
							{...form.register('description', {
								required: 'Description is required!'
							})}
							placeholder='Description'
							error={form.errors.description}
						/>
						<div className={styles.buttons_section}>
							<div>
								<UploadImageField
									isLoading={thumbnailIsLoading}
									title={'Thumbnail'}
									uploadImage={uploadThumbnail}
								/>
							</div>
							<div>
								<Controller
									control={form.control}
									name='isPublic'
									render={({ field: { onChange, value } }) => (
										<TogglePublic
											clickHandler={() => {
												onChange(!value);
											}}
											isEnabled={!!value}
										/>
									)}
								/>
							</div>
						</div>
					</div>
					<div className={styles.right_col}>
						<VideoInformation
							videoId={videoId}
							isUploaded={status.isUploaded}
							thumbnail={(data && data.thumbnail?.key) || DEFAULT_THUMBNAIL_KEY}
							thumbnailIsLoading={thumbnailIsLoading}
						/>
					</div>
					<FooterForm
						isChosen={status.isChosen}
						isUploaded={status.isUploaded}
						percent={status.percent}
					/>
				</>
			) : (
				<div className={styles.upload_screen}>
					<div>
						<UploadVideoField
							id={videoId}
							title='Choose video'
							setValue={status.setProgressPercentage}
							setIsChosen={status.setIsChosen}
						/>
					</div>
				</div>
			)}
		</form>
	);
};

export default UploadVideoForm;