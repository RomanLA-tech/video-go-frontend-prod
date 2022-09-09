import { FC } from 'react';

import { IUploadImageField } from '@/components/ui/upload-image-field/upload-image-field.interface';
import styles from '@/components/ui/upload-video-field/UploadVideoField.module.scss';

const UploadImageField: FC<IUploadImageField> = ({
	uploadImage,
	title,
	isLoading
}) => {
	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Select file</span>
				<input type='file'  accept='image/*' onChange={uploadImage} disabled={isLoading} />
			</label>
		</div>
	);
};

export default UploadImageField;