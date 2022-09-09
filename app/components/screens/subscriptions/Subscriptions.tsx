import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Menu from '@/components/layout/sidebar/menu/Menu';

import useGetUser from '@/hooks/useGetUser';


const Subscriptions: FC = () => {
	const { user } = useGetUser();
	return (
		<Layout title={'My Subscriptions'}>
			<Menu
				title={'My Subscriptions'}
				items={
					user.subscriptions?.map(({ toChannel }) => ({
						title: toChannel.name,
						image: toChannel.avatar?.key,
						link: `/c/${toChannel.id}`
					})) || []
				}
			/>
		</Layout>
	);
};

export default Subscriptions;