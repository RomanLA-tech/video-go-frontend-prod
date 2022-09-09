import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface';

import { useAuth } from '@/hooks/useAuth';

import styles from './Menu.module.scss';


const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { user } = useAuth();
	const { asPath } = useRouter();

	if (item.link === '/studio') if (!user) return null;
	if (item.link === '//subscriptions') if (!user) return null;

	return (
		<li>
			<Link href={item.link}>
				<a className={asPath == item.link ? styles.active : ''}>
					<span className={item.image ? styles.image : ''}>
						{item.icon && <item.icon />}
						{item.image && (
							<Image src={item.image} width={40} height={40} alt={item.title} />
						)}
					</span>
					<b>{item.title}</b>
				</a>
			</Link>
		</li>
	);
};

export default MenuItem;