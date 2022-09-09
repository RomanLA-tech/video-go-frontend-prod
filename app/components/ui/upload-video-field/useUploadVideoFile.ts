import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';

import { MediaService } from '@/services/media/media.service';

import useGetUser from '@/hooks/useGetUser';

import { errorCatch } from '@/utils/api.utils';
import { toastr } from 'react-redux-toastr';


export const useUploadVideoFile = (id: number, setValue?: (val: number) => void, setIsChosen?: Dispatch<SetStateAction<boolean>>) => {
	const {authData} = useGetUser();
	
	const token = authData.accessToken;
	
	const {mutateAsync} = useMutation('upload file',
		(data: FormData) => MediaService.uploadVideoFile(id, data, token, setValue),
		{onSuccess: () => {
			toastr.success('Status', 'Video uploaded successfully!');
		}, onError: (error: any) => {
			alert(errorCatch(error));
		}
	});
	
	const uploadVideoFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files?.length) return;
		
		setIsChosen && setIsChosen(true);
		
		const formData = new FormData();
		formData.append('file', files[0]);
		
		await mutateAsync(formData);
	};
	
	return {
		uploadVideoFile
	};
};