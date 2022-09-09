import { FC } from 'react';

import { IUploadVideoField } from '@/components/ui/upload-video-field/upload-video-field.interface';
import { useUploadVideoFile } from '@/components/ui/upload-video-field/useUploadVideoFile';

import styles from './UploadVideoField.module.scss';


const UploadVideoField: FC<IUploadVideoField> = ({
	id,
	title,
	setValue,
	setIsChosen
}) => {
	const { uploadVideoFile } = useUploadVideoFile(id, setValue, setIsChosen);

	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Select file</span>
				<input accept='video/mp4' type='file' onChange={uploadVideoFile} />
			</label>
		</div>
	);
};

export default UploadVideoField;