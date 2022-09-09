import { Dispatch, SetStateAction } from 'react';

export interface IUploadVideoField {
	id: number;
	title?: string;
	setValue: (val: number) => void;
	setIsChosen?: Dispatch<SetStateAction<boolean>>;
}