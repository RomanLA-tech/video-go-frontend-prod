import { FC, memo } from 'react';

import UserAvatar from '@/components/ui/user-avatar/UserAvatar';

import { IUser } from '@/types/user.interface';

import { formatNumberToK } from '@/utils/format-number-to-k';

import styles from './ChannelInfoSmall.module.scss';


interface IChannelInfoSmall {
	channel: IUser;
	message?: string;
}

const ChannelInfoSmall: FC<IChannelInfoSmall> = memo(({ channel, message }) => {
	return (
		<div className={styles.profile_info}>
			{channel.avatar && <UserAvatar user={channel} />}
			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subscribers_count}>
					{message ||
						formatNumberToK(channel.subscribersCount) + ' subscribers'}
				</div>
			</div>
		</div>
	);
});

export default ChannelInfoSmall;