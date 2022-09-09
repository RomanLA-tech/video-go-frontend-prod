import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IVideoDto } from '@/types/video.interface';

import { videoApi } from '@/store/api/videos.api';

interface IUseUploadVideoForm {
	videoId: number;
	handleCloseModal: () => void;
}

export const useUploadVideoForm = ({
	videoId,
	handleCloseModal
}: IUseUploadVideoForm) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		reset,
		watch,
		setValue
	} = useForm<IVideoDto>({ mode: 'onChange' });

	const [isChosen, setIsChosen] = useState(false);
	const [percent, setPercent] = useState(0);
	const [isUploaded, setIsUploaded] = useState(false);

	const setProgressPercentage = (val: number) => {
		setPercent(val);
		if (val === 100) setIsUploaded(true);
	};

	const [updateVideo, { isSuccess, isLoading }] =
		videoApi.useUpdateVideoMutation();

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => {
				handleCloseModal();
				reset();
			});
	};

	return {
		form: {
			setValue,
			watch,
			register,
			errors,
			control,
			handleSubmit,
			onSubmit,
			reset
		},
		status: {
			isSuccess,
			isLoading,
			setProgressPercentage,
			isChosen,
			setIsChosen,
			percent,
			isUploaded
		}
	};
};