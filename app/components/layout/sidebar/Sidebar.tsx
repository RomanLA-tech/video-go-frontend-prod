import { FC, memo } from 'react';

import Logo from '@/components/layout/sidebar/Logo';
import Menu from '@/components/layout/sidebar/menu/Menu';
import { menu } from '@/components/layout/sidebar/menu/menu.data';

import useGetUser from '@/hooks/useGetUser';

import styles from './Sidebar.module.scss';


const Sidebar: FC = memo(() => {
	const { user } = useGetUser();

	return (
		<aside className={styles.sidebar}>
			<Logo key={'logo'} />
			<Menu title={'MENU'} items={menu} key={'main-menu'} />

			{!!user && user.subscriptions?.length ? (
				<Menu
					key={'sub-menu'}
					title={'SUBSCRIPTIONS'}
					items={user.subscriptions.map(({ toChannel }) => ({
						image: toChannel.avatar?.key,
						title: toChannel.name,
						link: `/c/${toChannel.id}`
					}))}
				/>
			) : null}

			<div className={styles.copy}>
				© 2022 VIDEO GO <br />
				By Roman Lagonsky
			</div>
		</aside>
	);
});

export default Sidebar;