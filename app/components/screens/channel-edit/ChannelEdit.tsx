import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import TextArea from '@/components/ui/text-area/TextArea';
import UploadImageField from '@/components/ui/upload-image-field/UploadImageFiled';
import { useUploadAvatar } from '@/components/ui/upload-image-field/useUploadAvatar';

import { IUserDto } from '@/types/user.interface';

import useGetUser from '@/hooks/useGetUser';

import { api } from '@/store/api/api';

import { ValidEmail } from '@/utils/email.validator';

import styles from './ChannelEdit.module.scss';
import { DEFAULT_AVATAR_KEY } from '@/api/url.constants';


const ChannelEdit: FC = () => {
	const { push } = useRouter();

	const { user, status } = useGetUser();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors }
	} = useForm<IUserDto>({ mode: 'onChange' });

	useEffect(() => {
		if (!watch('email') && status.isSuccess) {
			setValue('email', user.email);
			setValue('name', user.name);
			setValue('description', user.description);
		}
	}, [user, status, setValue, watch]);

	const [updateProfile, { isLoading: isUpdateLoading }] =
		api.useUpdateChannelInfoMutation();

	const onSubmit: SubmitHandler<IUserDto> = data => {
		updateProfile({ ...data })
			.unwrap()
			.then(() => toastr.success('Status', 'Channel is updated!'))
			.then(() => push('/studio'));
	};

	const { uploadAvatar, avatarIsLoading } = useUploadAvatar();

	return (
		<Layout title={'Channel Editing'}>
			<div className={styles.wrapper}>
				{status.isLoading ? (
					<Loader count={5} />
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<div className={styles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required'
								})}
								placeholder='Name'
								error={errors.name}
							/>
							<Field
								{...register('email', {
									required: 'E-mail is required!',
									pattern: {
										value: ValidEmail,
										message: 'E-mail is incorrect'
									}
								})}
								placeholder='E-mail'
								error={errors.email}
							/>
							<TextArea
								{...register('description')}
								placeholder='Description'
								error={errors.description}
							/>
						</div>
						<div className={styles.avatar_block}>
							<Image
								src={user.avatar?.key || DEFAULT_AVATAR_KEY}
								width={150}
								height={150}
								alt={''}
								layout='fixed'
								className={styles.avatar}
							/>
							<UploadImageField
								title={'Avatar image'}
								uploadImage={uploadAvatar}
								isLoading={avatarIsLoading}
							/>
							<div className={styles.submit}>
								<Button className={styles.button}>
									{isUpdateLoading ? 'Wait...' : 'Save'}
								</Button>
							</div>
						</div>
					</form>
				)}
			</div>
		</Layout>
	);
};

export default ChannelEdit;