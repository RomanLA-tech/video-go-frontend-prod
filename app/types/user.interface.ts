import { IMediaResponse } from '@/services/media/media.interface';

import { IBase } from '@/types/base.interface';
import { IVideo } from '@/types/video.interface';

export interface IUser extends IBase {
	email: string;
	name: string;
	isVerified?: boolean;
	subscribersCount: number;
	description: string;
	avatar?: IMediaResponse;
	videos?: IVideo[];
	subscriptions?: ISubscription[];
}

export interface ISubscription extends IBase {
	toChannel: IUser;
}

export interface IUserDto
	extends Pick<IUser, 'id' | 'email' | 'description' | 'name'> {}