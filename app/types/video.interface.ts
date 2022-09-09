import { IMediaResponse } from '@/services/media/media.interface';

import { IBase } from '@/types/base.interface';
import { IComment } from '@/types/comment.interface';
import { IUser } from '@/types/user.interface';

export interface IVideo extends IBase {
	name: string;
	isPublic: boolean;
	views: number;
	likesCount: number;
	duration?: number;
	description: string;
	likedUsers?: IUserLike[];
	videoFile?: IMediaResponse;
	thumbnail?: IMediaResponse;
	user?: IUser;
	comments?: IComment[];
}

export interface IUserLike {
	fromUser: IUser;
}

export interface IThumbnailDto {
	id: number;
	file: FormData;
}

export interface IVideoDto
	extends Pick<IVideo, 'id' | 'description' | 'name' | 'isPublic'> {}