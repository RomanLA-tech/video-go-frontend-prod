import cn from 'classnames';
import { FC } from 'react';
import { BsPersonPlusFill } from 'react-icons/bs';

import { useAuth } from '@/hooks/useAuth';

import { api } from '@/store/api/api';

import styles from './SubscribeButton.module.scss';


interface ISubscribeButton {
	channelIdForSubscribe: number;
}

const SubscribeButton: FC<ISubscribeButton> = ({ channelIdForSubscribe }) => {
	const { user } = useAuth();
	const { data: profile } = api.useGetProfileQuery(null, {
		skip: !user
	});

	const [subscribe, { isLoading, data }] = api.useSubscribeToChannelMutation();

	if (user?.id === channelIdForSubscribe) return null;

	const isSubscribed =
		profile?.subscriptions?.some(
			sub => sub.toChannel.id === channelIdForSubscribe
		) || !!data;

	return (
		<button
			className={cn(styles.button, { [styles.subscribed]: isSubscribed })}
			onClick={() => subscribe(channelIdForSubscribe).unwrap()}
			disabled={isLoading}
		>
			<BsPersonPlusFill />
			{isSubscribed ? 'Followed' : 'Follow'}
		</button>
	);
};

export default SubscribeButton;