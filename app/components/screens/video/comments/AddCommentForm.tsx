import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdSend } from 'react-icons/md';

import styles from '@/components/screens/video/comments/Comments.module.scss';
import Field from '@/components/ui/field/Field';

import { ICommentDto } from '@/types/comment.interface';

import { commentApi } from '@/store/api/comment.api';


interface IAddCommentForm {
	videoId: number;
}

const AddCommentForm: FC<IAddCommentForm> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ICommentDto>({ mode: 'onChange' });

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation();

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset());
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={'relative'}>
				<Field
					{...register('message', { required: 'Message is required' })}
					placeholder='Write your comment'
					error={errors.message}
				/>

				<button className={styles.form_button} disabled={isLoading}>
					<MdSend />
				</button>
			</div>
		</form>
	);
};

export default AddCommentForm;