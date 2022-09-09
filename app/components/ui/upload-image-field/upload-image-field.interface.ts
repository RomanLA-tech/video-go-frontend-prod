import { ChangeEvent } from 'react';

export interface IUploadImageField {
	uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
	title?: string;
	isLoading: boolean;
}