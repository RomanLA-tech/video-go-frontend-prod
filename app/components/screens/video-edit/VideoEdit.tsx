import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import Layout from '@/components/layout/Layout';
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

import styles from './VideoEdit.module.scss';
import { DEFAULT_THUMBNAIL_KEY } from '@/api/url.constants';


const VideoEdit: FC = () => {
	const { query, push } = useRouter();
	const videoId = Number(query.id);

	const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
		skip: !videoId
	});

	const handleCloseModal = (): void => {
		push('/studio').then(() => toastr.success('Status', 'Video is updated!'));
	};

	const { status, form } = useUploadVideoForm({ videoId, handleCloseModal });

	const { uploadThumbnail, thumbnailIsLoading } = useUploadThumbnail(videoId);

	useEffect(() => {
		if (!form.watch('name') && data) {
			form.setValue('name', data.name);
			form.setValue('description', data.description);
			form.setValue('isPublic', data.isPublic);
		}
	}, [data]);

	return (
		<Layout title={'Video Editing'}>
			<div className={styles.container}>
				{isLoading ? (
					<Loader count={5} />
				) : (
					<form
						onSubmit={form.handleSubmit(form.onSubmit)}
						className={styles.form}
					>
						<div className={styles.fields}>
							<div>
								<Field
									{...form.register('name', {
										required: 'Name is required'
									})}
									placeholder='Name'
									error={form.errors.name}
								/>
							</div>
							<div>
								<TextArea
									{...form.register('description', {
										required: 'Description is required!'
									})}
									placeholder='Description'
									error={form.errors.description}
								/>
							</div>
						</div>
						<div className={styles.information_block}>
							<VideoInformation
								videoId={videoId}
								isUploaded
								thumbnail={
									(data && data.thumbnail?.key) || DEFAULT_THUMBNAIL_KEY
								}
								thumbnailIsLoading={thumbnailIsLoading}
							/>
						</div>
						<div className={styles.upload_buttons}>
							<div>
								<UploadImageField
									isLoading={thumbnailIsLoading}
									title={'Thumbnail'}
									uploadImage={uploadThumbnail}
								/>
							</div>
							<div>
								<UploadVideoField
									id={videoId}
									title={'Video'}
									setValue={status.setProgressPercentage}
									setIsChosen={status.setIsChosen}
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
						<FooterForm
							isChosen={status.isChosen}
							isUploaded={status.isUploaded}
							percent={status.percent}
							isLoading={status.isLoading}
						/>
					</form>
				)}
			</div>
		</Layout>
	);
};

export default VideoEdit;